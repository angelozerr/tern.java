(function(root, mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(exports, require("tern/lib/infer"), require("tern/lib/tern"), require("acorn/dist/walk"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["exports", "tern/lib/infer", "tern/lib/tern", "acorn/dist/walk"], mod);
  mod(root.tern || (root.tern = {}), tern, tern, acorn.walk);
})(this, function(exports, infer, tern, walk) {
  "use strict";

  function isObjectLiteral(type) {
    var objType = type.getObjType();
    return objType && objType.proto && objType.proto.name == "Object.prototype"; 
  }

  function isFunctionType(type) {
    if (type.types) {
      for (var i = 0; i < type.types.length; i++) {
        if (isFunctionType(type.types[i])) return true;
      }
    }
    return type.proto && type.proto.name == "Function.prototype";
  }
  
  function getNodeName(node) {
    if(node.callee) {
      // This is a CallExpression node.
      // We get the position of the function name.
      return getNodeName(node.callee);
    } else if(node.property) {
      // This is a MemberExpression node.
      // We get the name of the property.
      return getNodeName(node.property);
    } else if(node.id) {
      // This is a Function
      return node.id.name ? node.id.name : "<anonymous>";
    } else if(node.value) {
      return node.value;
    } else {
      return node.name;
    }
  }

  function getStringType(type) {
    if (!type) return "?";
    //if (isObjectLiteral(type)) return "{}";
    //if (isFunctionType(type)) return "fn()";
    return type.toString();
  }
  
  function addChild(node, type, children) {
    if (!node || node.name == "✖") { return; }

    var child = {
        name: getNodeName(node),
        type: getStringType(type),
        start: Number(node.start),
        end: Number(node.end)
    };
    if (!(children instanceof Array)) {
      if (children.children) {
        children = children.children;
      } else {
        children = children.children = []; 
      } 
    }
    
    children.push(child);
    return child;
  }
  
  function makeVisitors(server, query, file) {
    return {
      VariableDeclaration: function (node, st) {
        for (var i = 0, len = node.declarations.length; i < len; i++) {
          var decl = node.declarations[i];
          var parent = st.parent, scope = st.scope, type = infer.expressionType({node: decl.id, state: scope}), child;
          if (isObjectLiteral(type) || isFunctionType(type)) {
            var obj = parent[parent.length -1];
            if (obj) {
              obj.name = getNodeName(decl.id);
              obj.start = Number(node.start);
              obj.end = Number(node.end);
            } else {
              child = addChild(decl.id, type, parent);
            }
          } else {
            child = addChild(decl.id, type, parent);
          }
          if (child && node.kind) {
            // is it interesting to have var, const, let kind?
            // child.kind = node.kind; 
          }
        }
      },
      Property: function (node, st) {
        var parent = st.parent, scope = st.scope;
        var type = node.value && node.value.name != "✖" ? infer.expressionType({node: node.value, state: scope}) : null;
        addChild(node.key, type, parent);
      },
      AssignmentExpression: function (node, st) {
        if(node.left && node.left.object && node.left.object.type == "ThisExpression") {
          var parent = st.parent, scope = st.scope;
          var type = infer.expressionType({node: node.left, state: scope});
          addChild(node.left, type, parent);
        }
      }      
    }
  }
  
  tern.registerPlugin("outline", function(server, options) {
    return {};
  });  
  
  var classDeclaration = function (node, st, c) {
    var parent = st.parent, scope = st.scope, type = infer.expressionType({node: node.id ? node.id : node, state: scope});
    var obj = addChild(node, type, parent);
    obj.kind = "class";
    var scope = {parent: obj, scope: st.scope};
    if (node.superClass) c(node.superClass, scope, "Expression");
    for (var i = 0; i < node.body.body.length; i++) {
      c(node.body.body[i], scope);
    }
  };
  
  // Adapted from infer.searchVisitor.
  // Record the scope and pass it through in the state.
  // VariableDeclaration in infer.searchVisitor breaks things for us.
  var scopeVisitor = walk.make({
    Function: function(node, st, c) {
      var parent = st.parent, scope = st.scope, type = infer.expressionType({node: node.id && node.type != "FunctionExpression" ? node.id : node, state: scope});
      if (!st.ignoreFirstFn) {
        var fn = addChild(node, type, parent);
        if (!node.id) fn.name = "<anonymous>";
        parent = fn;
      } else delete(st.ignoreFirstFn);
      var scope = {parent: parent, scope: node.scope};
      if (node.id) c(node.id, scope);
      for (var i = 0; i < node.params.length; ++i)
        c(node.params[i], scope);
      c(node.body, scope, "ScopeBody");
    },
    ObjectExpression: function (node, st, c) {
      var parent = st.parent, scope = st.scope, type = infer.expressionType({node: node.id ? node.id : node, state: scope});
      var obj = addChild(node, type, parent);
      var scope = {parent: obj, scope: st.scope};
      for (var i = 0; i < node.properties.length; ++i)
        c(node.properties[i], scope);
    },
    ClassExpression: classDeclaration,
    ClassDeclaration: classDeclaration,
    MethodDefinition: function (node, st, c) {
      var parent = st.parent, scope = st.scope;        
      var type = node.value && node.value.name != "✖" ? infer.expressionType({node: node.value, state: scope}) : null;
      var meth = addChild(node.key, type, parent);
      meth.kind = node.kind;
      var scope = {parent: meth, scope: st.scope, ignoreFirstFn: true};
      if (node.computed) c(node.key, scope, "Expression");
      c(node.value, scope, "Expression");
    }
  });

  // Other alternative bases:
  //   walk.base (no scope handling)
  //   infer.searchVisitor
  //   infer.fullVisitor
  var base = scopeVisitor;
  
  tern.defineQueryType("outline", {
    takesFile: true,
    run: function(server, query, file) {
      try {
        var outline = [], ast = file.ast;
        var visitors = makeVisitors(server, query, file);
        walk.simple(ast, visitors, base, {parent: outline, scope: file.scope});
        return {outline: outline};
      } catch(err) {
        console.error(err.stack);
        return {outline: []};
      }
    }
  });
  
  
})  