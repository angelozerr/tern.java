(function(root, mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
      return mod(exports, require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define(["exports", "tern/lib/infer", "tern/lib/tern"], mod);
    mod(root, tern, tern);
})(this, function(exports, infer, tern) {
    "use strict";
  
  infer.registerFunction("jQuery_querySelector", function(_self, args, argNodes) {
    if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string" || !(argNodes[0].sourceFile && argNodes[0].sourceFile.dom)) {
      return
    }    
    argNodes[0].cssselectors = true;
  });
  
  // Lint
    
  function registerLints() {
    if (!tern.registerLint) return;

    // validate Element#querySelector/Element#queryAllSelector
    tern.registerLint("jQuery_validateCSSSelectors", function(node, addMessage, getRule) {
      var argNode = node.arguments[0];
      if (!argNode || argNode.type != "Literal" || typeof argNode.value != "string") {       
        return true;
      }
      var selector = argNode.value;
      if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        return;
      }
      // validate CSS selectors
      tern.getLint("Browser_validateCSSSelectors")(node, addMessage, getRule);
    });
    
  }
    
  tern.registerPlugin("jquery-extension", function(server, options) {
    registerLints();
    return {passes: {
             preLoadDef: preLoadDef
           }};
  });

  function selector(item) {
    item["!effects"] = ["custom jQuery_querySelector"];
    item["!data"] =  {"!lint": "jQuery_validateCSSSelectors"};        
  }
  
  function preLoadDef(data) {    
    var cx = infer.cx();
    if (data["!name"] == "jQuery") {
      var jQuery = data["jQuery"], fn = jQuery.fn;
      selector(jQuery);
      jQuery["!type"] = "fn(selector: string|+Node|[+Node], context?: frameElement) -> jQuery.fn"
      selector(fn.add);
      selector(fn.addBack);
      selector(fn.children);
      selector(fn.closest);
      selector(fn.delegate);
      selector(fn.detach);
      selector(fn.filter);
      selector(fn.find);
      selector(fn.has);
      selector(fn.index);
      selector(fn.is);
      selector(fn.live);
      selector(fn.next);
      selector(fn.nextAll);
      selector(fn.nextUntil);
      selector(fn.not);
      selector(fn.parent);
      selector(fn.parents);
      selector(fn.parentsUntil);
      selector(fn.prev);
      selector(fn.prevAll);
      selector(fn.prevUntil);
      selector(fn.remove);
      selector(fn.siblings);
    }
  }
  
  
})