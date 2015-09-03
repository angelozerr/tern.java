(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require);
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern, require) {
  "use strict";
  
  var preferedQuote = '"';
  
  var nodeRequire_lint = function(node, addMessage, getRule) {
    var rule = getRule("UnknownModule");
    if (!rule) return;
    var cx = infer.cx(), server = cx.parent, data = server._node;
    var argNodes = node.arguments;
    if (argNodes && argNodes.length && argNodes[0].type == "Literal" && typeof argNodes[0].value == "string") {
      var me = infer.cx().parent.mod.modules
      var modType = me.getModType(argNodes[0]);
      if (!modType) addMessage(argNodes[0], "Unknown module '" + argNodes[0].value + "'", rule.severity);
    } else return true;
  };
  
  var nodeRequire_guessType = function(arg, i, file) {
    if (i == 0) {
      var completions = [], query = {docs: true, types: true, origins: true}, me = infer.cx().parent.mod.modules, quote = preferedQuote;
      // known modules
      me.completeModuleName(completions, query, "");
      // local file
      me.completeFileName(completions, query, file.name, "");
      return {
        type: "requiredModule",
        completions: completions.map(function(rec) {
          var name = typeof rec == "string" ? rec : rec.name
          var string = JSON.stringify(name)
          if (quote == "'") string = quote + string.slice(1, string.length -1).replace(/'/g, "\\'") + quote
          if (typeof rec == "string") return string
          rec.displayName = name
          rec.name = string
          return rec
        })
      }  
    }
  };
  
  tern.registerPlugin("node-extension", function(server, options) {
    server.on("postLoadDef", postLoadDef);
  });
  
  function postLoadDef(json) {
    var cx = infer.cx(), defName = json["!name"];
    if (defName === 'commonjs') {
      var require = cx.definitions.commonjs.require;
      require.lint = nodeRequire_lint;
      require.guessType = nodeRequire_guessType;
    }
  }
  
});
