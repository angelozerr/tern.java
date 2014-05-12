(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("acorn/util/walk"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["tern/lib/infer", "tern/lib/tern", "acorn/util/walk"], mod);
  mod(tern, tern, acorn.walk);
})(function(infer, tern, walk) {
  "use strict";

  function outputPos(query, file, pos) {
    if (query.lineCharPositions) {
      var out = file.asLineChar(pos);
      return out;
    } else {
      return pos;
    }
  }

  function makeVisitors(query, file, messages) {
    function makeError(node, msg) {
      var pos = getPosition(node);
      return {
          message: msg,
          from: outputPos(query, file, pos.start),
          to: outputPos(query, file, pos.end),
          severity : 'warning'
      };
    }

    function getName(node) {
      if(node.callee) {
        // This is a CallExpression node.
        // We get the position of the function name.
        return getName(node.callee);
      } else if(node.property) {
        // This is a MemberExpression node.
        // We get the name of the property.
        return node.property.name;
      } else {
        return node.name;
      }
    }

    function getPosition(node) {
      if(node.callee) {
        // This is a CallExpression node.
        // We get the position of the function name.
        return getPosition(node.callee);
      }
      if(node.property) {
        // This is a MemberExpression node.
        // We get the position of the property.
        return node.property;
      }
      return node;
    }

    function getScope(node) {
      // We need to get the scope of the specific node, so
      // that variables declared in the current scope are
      // correctly detected.

      // This could be a performance hog (haven't confirmed)

      return infer.scopeAt(file.ast, node, file.scope);
    }

    var visitors = {
      // Detects expressions of the form `object.property`
      MemberExpression: function(node, state, c) {
        var type = infer.expressionType({node: node, state: getScope(node)});
        if(type.isEmpty()) {
          // The type of the property cannot be determined, which means
          // that the property probably doesn't exist.
          var error = makeError(node, "Unknown property '" + getName(node) + "'");
          messages.push(error);
        }
      },
      // Detects top-level identifiers, e.g. the object in
      // `object.property` or just `object`.
      Identifier: function(node, state, c) {
        var type = infer.expressionType({node: node, state: getScope(node)});

        if(type.isEmpty()) {
          // The type of the identifier cannot be determined, which means
          // that the identifier probably doesn't exist.
          var error = makeError(node, "Unknown identifier '" + getName(node) + "'");
          messages.push(error);
        }
      },
      // Detects function calls.
      // `node.callee` is the expression (Identifier or MemberExpression)
      // the is called as a function.
      CallExpression: function(node, state, c) {
        var type = infer.expressionType({node: node.callee, state: getScope(node)});
        if(!type.isEmpty()) {
          // If type.isEmpty(), it is handled by MemberExpression/Identifier already.

          // An expression can have multiple possible (guessed) types.
          // If one of them is a function, type.getFunctionType() will return it.
          var fnType = type.getFunctionType();
          if(fnType == null) {
            var error = makeError(node, "'" + getName(node) + "' is not a function");
            error.severity = "error";
            messages.push(error);
          }
        }
      }
    };

    return visitors;
  }


  var base = walk.base;

  tern.defineQueryType("lint", {
    takesFile: true,
    run: function(server, query, file) {
      try {
        var messages = [];
        var ast = file.ast;
        var visitors = makeVisitors(query, file, messages);

        var state = file.scope;

        walk.simple(ast, visitors, base, state);

        return {messages: messages};
      } catch(err) {
        console.error(err.stack);
        return {messages: []};
      }
    }
  });
  
});  