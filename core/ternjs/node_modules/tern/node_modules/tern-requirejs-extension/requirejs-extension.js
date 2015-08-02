(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require);
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern, require) {
  "use strict";
  
  function registerLints() {
    if (!tern.registerLint) return;
    
    function validateModule(node, addMessage, rule) {
      var mod = node.required, name = node.value;
      if (!mod.getType()) addMessage(node, "Unknown module '" + name + "'", rule.severity)
    }
    
    tern.registerLint("requirejs_lint", function(node, addMessage, getRule) {
      var rule = getRule("UnknownModule"), argNodes = node.arguments;
      if (rule && argNodes && argNodes.length > 1) {
          var node = argNodes[argNodes.length == 2 ? 0 : 1];
          if (node.type == "Literal" && typeof node.value == "string") {
            validateModule(node, addMessage, rule);
          } else if (node.type == "ArrayExpression") for (var i = 0; i < node.elements.length; ++i) {
            var elt = node.elements[i];
            if (elt.type == "Literal" && typeof elt.value == "string") {
              validateModule(elt, addMessage, rule);
            }
          }
        }    
    });
    
  }
  
  tern.registerPlugin("requirejs-extension", function(server, options) {
    registerLints();
    return {
      passes: {preLoadDef: preLoadDef}
    };
  });

  function preLoadDef(data) {    
    var cx = infer.cx();
    if (data["!name"] == "requirejs") {
      data["requirejs"]["!data"] = {"!lint": "requirejs_lint"};
      data["define"]["!data"] = {"!lint": "requirejs_lint"};      
    }
  }
  
});
