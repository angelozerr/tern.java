(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require);
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern, require) {
  "use strict";
  
  var nodeRequire_lint = function(node, addMessage, getRule) {
    var rule = getRule("UnknownModule");
    if (!rule) return;
    var cx = infer.cx(), server = cx.parent, data = server._node;
    var argNodes = node.arguments;
    if (argNodes && argNodes.length && argNodes[0].type == "Literal" || typeof argNodes[0].value == "string") {
      var mod = argNodes[0].required;                        
      if (!(mod && (mod.getFunctionType() || mod.getType()))) addMessage(argNodes[0], "Unknown module '" + argNodes[0].value + "'", rule.severity);
    }
  };
  
  tern.registerPlugin("node-extension", function(server, options) {
    return {
      passes: {postLoadDef: postLoadDef}  
    };
  });
  
  function postLoadDef(json) {
    var cx = infer.cx(), defName = json["!name"];
    if (defName === 'node') {
      var require = cx.definitions.node.require;
      require.lint = nodeRequire_lint;
    }
  }
  
});
