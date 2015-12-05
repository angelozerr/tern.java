(function(root, mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(exports, require("tern/lib/infer"), require("tern/lib/tern"), require("acorn/dist/walk"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["exports", "tern/lib/infer", "tern/lib/tern", "acorn/dist/walk"], mod);
  mod(root.tern || (root.tern = {}), tern, tern, acorn.walk);
})(this, function(exports, infer, tern, walk) {
  "use strict";

  var ANONYMOUS_FN = "<anonymous>";
  
  var suboutlines = Object.create(null);
  tern.registerSubOutline = function(id, label, fillOutline) {
    suboutlines[id] = {label: label || id, fillOutline: fillOutline};
  };
  
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
      return node.id.name ? node.id.name : ANONYMOUS_FN;
    } else if(node.value) {
      return node.value;
    } else {
      return node.name;
    }
  }

  function getStringType(type) {
    if (!type) return "?";
    return type.toString();
  }
  
  function addChildNode(node, type, children) {
    if (!node || node.name == "✖") { return; }
    return addChild(getNodeName(node), getStringType(type), children, Number(node.start), Number(node.end));
  }
  
  function addChild(name, type, children, start, end, file) {
    var child = {name: name};
    if (type) child.type = type;
    if (start != null) child.start = start;
    if (end  != null) child.end = end;
    if (file) child.file = file;
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
    }
  }
  
  tern.registerPlugin("outline", function(server, options) {
    /*tern.registerSubOutline("files", "Files", function(addChild, parent) {
      var files = server.files;
      for (var i = 0; i < files.length; i++) {
        addChild(null, null, parent, null, null, files[i].name);
      }
    });*/  
  });  
  
  function getChild(name, children) {
    if (!children) return null;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child.name == name) return child;
    }
  }
  
  function getChildProperty(node, parent) {
    if (node.property) {
      var p = getChild(node.object.name, parent)
      if (p) {
        return getChildProperty(node.property, p.children)
      }
    } else if (node.name) {
      return getChild(node.name, parent);
    }
  }
  
  function addAnonymousFn(node, type, parent) {
    var child = addChildNode(node.body, type, parent);
    child.name = ANONYMOUS_FN;
    if (child.type == "?") child.type = "fn()";
    return child;
  }
  
  // Adapted from infer.searchVisitor.
  // Record the scope and pass it through in the state.
  // VariableDeclaration in infer.searchVisitor breaks things for us.
  var scopeVisitor = walk.make({
    VariableDeclaration: function (node, st, c) {
      for (var i = 0, len = node.declarations.length; i < len; i++) {
        var decl = node.declarations[i];
        var parent = st.parent, scope = st.scope, type = infer.expressionType({node: decl.id, state: scope});
        var child = addChildNode(decl.id, type, parent);
        if (child && node.kind) {
          // is it interesting to have var, const, let kind?
          // child.kind = node.kind; 
        }
        var scope = {parent: child, scope: st.scope};
        c(decl, scope);
      }
    },
    AssignmentExpression: function (node, st, c) {
      var parent = st.parent, scope = st.scope;
      if(node.left && node.left.object/* && node.left.object.type == "ThisExpression"*/) {
        var left = node.left.property ? node.left.property : node.left.object;
        var p = getChildProperty(node.left.property ? node.left.object : node.left, parent);
        var parent = p ? p: parent, scope = st.scope;
        var type = infer.expressionType({node: node.left, state: scope});
        var child = addChildNode(left, type, parent);
        st = {parent: child, scope: scope};
      }
      c(node.left, st, "Pattern");
      c(node.right, st, "Expression");
    },
    Function: function(node, st, c) {
      var parent = st.parent, scope = st.scope, type = infer.expressionType({node: node.id && node.type != "FunctionExpression" ? node.id : node, state: scope});
      if (node.id) {
        if (node.id.name == "✖") {
          parent = addAnonymousFn(node, type, parent);
        } else {
          parent = addChildNode(node.id, type, parent); 
        }
      } else {
        var parentNode = infer.parentNode(node, node.sourceFile.ast);
        if (!parentNode || (parentNode.type != "Property" && parentNode.type != "VariableDeclarator" && parentNode.type != "MethodDefinition" && parentNode.type != "AssignmentExpression")) { 
          parent = addAnonymousFn(node, type, parent);
        }
      }
      var scope = {parent: parent, scope: node.body.scope ? node.body.scope: node.scope};
      if (node.id) c(node.id, scope);
      for (var i = 0; i < node.params.length; ++i)
        c(node.params[i], scope);
      c(node.body, scope, "ScopeBody");
    },
    Property: function (node, st, c) {
      var parent = st.parent, scope = st.scope;
      var type = node.value && node.value.name != "✖" ? infer.expressionType({node: node.value, state: scope}) : null;
      parent = addChildNode(node.key, type, parent);
      var scope = {parent: parent, scope: scope};
      if (node.computed) c(node.key, scope, "Expression");
      c(node.value, scope, "Expression");
    },
    ClassExpression: function(node, st, c) {
      st.parent.kind = "class";
      return c(node, st, "Class");
    },
    ClassDeclaration: function (node, st, c) {
      var parent = st.parent, scope = st.scope, type = infer.expressionType({node: node.id ? node.id : node, state: scope});
      var obj = addChildNode(node.id ? node.id : node, type, parent);
      obj.kind = "class";
      var scope = {parent: obj, scope: st.scope};
      if (node.superClass) c(node.superClass, scope, "Expression");
      for (var i = 0; i < node.body.body.length; i++) {
        c(node.body.body[i], scope);
      }
    },
    MethodDefinition: function (node, st, c) {
      var parent = st.parent, scope = st.scope;
      var type = node.value && node.value.name != "✖" ? infer.expressionType({node: node.value, state: scope}) : null;
      var meth = addChildNode(node.key, type, parent);
      meth.kind = node.kind;
      var scope = {parent: meth, scope: st.scope};
      if (node.computed) c(node.key, scope, "Expression");
      c(node.value, scope, "Expression");
    },
    ImportDeclaration: function (node, st, c) {
      var parent = st.parent, scope = st.scope;
      var imp = addChildNode(node, null, parent);
      imp.kind = "import";
      var scope = {parent: imp, scope: st.scope};
      for (var i = 0; i < node.specifiers.length; i++) {
        c(node.specifiers[i], scope);
      }c(node.source, scope, "Expression");
    },
    ImportSpecifier: function (node, st, c) {
      var parent = st.parent, scope = st.scope;
      var type = infer.expressionType({node: node.imported, state: scope});
      var specifier = addChildNode(node.imported, type, parent);
      specifier.kind = "specifier";
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
        // suboutlines
        for (var id in suboutlines) {
          var suboutline = suboutlines[id];
          var category = addChild(suboutline.label, null, outline);
          category.kind = "category";
          suboutline.fillOutline(addChild, category);
        }
        return {outline: outline};
      } catch(err) {
        console.error(err.stack);
        return {outline: []};
      }
    }
  });
  
  
})  