(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("../lib/infer"), require("../lib/tern"), require("acorn/util/walk"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["../lib/infer", "../lib/tern", "acorn/util/walk"], mod);
  mod(tern, tern, acorn.walk);
})(function(infer, tern, walk) {
  "use strict";
  
  tern.defineQueryType("lint", {
    takesFile: true,
    run: function(server, query, file) {
      
      var messages = [];
      var ast = file.ast;
      walk.simple(ast, {
        MemberExpression: function(node) {
          var memberExpr = {node:node, state:file.scope};
          var tp = infer.expressionType(memberExpr);
          if (node.property.name != "✖" && !(tp && tp.getType())) {
            messages.push({message: "Unknow property '" + node.property.name + "'", 
              from: file.asLineChar(node.property.start),
              to: file.asLineChar(node.property.end),
              severity : 'warning'});
          }
        },        
        FunctionDeclaration: function(node) {
          console.log(node);
        },        
        FunctionExpression: function(node) {
          console.log(node);
        },        
        CallExpression: function(node) {
          console.log(node)
//          if (node.callee.type == "MemberExpression" &&
//              !node.callee.computed && node.arguments.length &&
//              /^(value|constant|controller|factory|provider)$/.test(node.callee.property.name)) {
//            var before = comment.commentsBefore(text, node.callee.property.start - 1);
//            if (before) {
//              var first = before[0], dot = first.search(/\.\s/);
//              if (dot > 5) first = first.slice(0, dot + 1);
//              first = first.trim().replace(/\s*\n\s*\*\s*|\s{1,}/g, " ");
//              node.arguments[0].angularDoc = first;
//            }
//          }
        }
      });
      return messages;
    }
  });
  
});  