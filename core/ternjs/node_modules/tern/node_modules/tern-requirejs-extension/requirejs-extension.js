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
      passes: {preLoadDef: preLoadDef,
               completion: findCompletions}
    };
  });

  function preLoadDef(data) {    
    var cx = infer.cx();
    if (data["!name"] == "requirejs") {
      data["requirejs"]["!data"] = {"!lint": "requirejs_lint"};
      data["define"]["!data"] = {"!lint": "requirejs_lint"};      
    }
  }
  
  function findCompletions(file, query) {
    var wordEnd = tern.resolvePos(file, query.end);
    var callExpr = infer.findExpressionAround(file.ast, null, wordEnd, file.scope, "CallExpression");
    if (!callExpr) return;
    var callNode = callExpr.node;
    if (callNode.callee.type != "Identifier" || 
        !(callNode.callee.name == "define" || callNode.callee.name == "require")||
        callNode.arguments.length < 1 || callNode.arguments[0].type != "ArrayExpression") return;
    var argNode = findRequireModule(callNode.arguments[0].elements, wordEnd);
    if (!argNode) return;
    var word = argNode.raw.slice(1, wordEnd - argNode.start), quote = argNode.raw.charAt(0);
    if (word && word.charAt(word.length - 1) == quote)
      word = word.slice(0, word.length - 1);
    var completions = completeModuleName(query, file, word);
    if (argNode.end == wordEnd + 1 && file.text.charAt(wordEnd) == quote)
      ++wordEnd;
    return {
      start: tern.outputPos(query, file, argNode.start),
      end: tern.outputPos(query, file, wordEnd),
      isProperty: false,
      isObjectKey: false,
      completions: completions.map(function(rec) {
        var name = typeof rec == "string" ? rec : rec.name;
        var string = JSON.stringify(name);
        if (quote == "'") string = quote + string.slice(1, string.length -1).replace(/'/g, "\\'") + quote;
        if (typeof rec == "string") return string;
        rec.displayName = name;
        rec.name = string;
        return rec;
      })
    };
  }
  
  function findRequireModule(argsNode, wordEnd) {
    for (var i = 0; i < argsNode.length; i++) {
      var argNode = argsNode[i];
      if (argNode.type == "Literal" && typeof argNode.value == "string" &&
          argNode.start < wordEnd && argNode.end > wordEnd) return argNode;
    }
  }
  
  function completeModuleName(query, file, word) {
    var completions = [];
    var cx = infer.cx(), server = cx.parent, data = server._requireJS;
    var currentFile = data.currentFile;
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins;
    var base = data.options.baseURL || "";
    if (base && base.charAt(base.length - 1) != "/") base += "/";
    
    function maybeSet(obj, prop, val) {
      if (val != null) obj[prop] = val;
    }
    
    function gather(modules) {
      for (var name in modules) {
        if (name == currentFile || !modules[name].getType()) continue;

        var moduleName = name.substring(base.length, name.length);
        if (moduleName &&
            !(query.filter !== false && word &&
              (query.caseInsensitive ? moduleName.toLowerCase() : moduleName).indexOf(word) !== 0)) {
          var rec = wrapAsObjs ? {name: moduleName} : moduleName;
          completions.push(rec);

          if (query.types || query.docs || query.urls || query.origins) {
            var val = modules[name];
            infer.resetGuessing();
            var type = val.getType();
            rec.guess = infer.didGuess();
            if (query.types)
              rec.type = infer.toString(val);
            if (query.docs)
              maybeSet(rec, "doc", val.doc || type && type.doc);
            if (query.urls)
              maybeSet(rec, "url", val.url || type && type.url);
            if (query.origins)
              maybeSet(rec, "origin", val.origin || type && type.origin);
          }
        }
      }
    }

    if (query.caseInsensitive) word = word.toLowerCase();
    gather(data.interfaces);
    return completions;
  }
  
});
