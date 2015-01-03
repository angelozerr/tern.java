(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
    "use strict";
    
  tern.registerPlugin("aui2.0.x", function(server, options) {
    server._aui2 = {};
    return { defs : defs };
  });
    
  var defs = {
   "!name": "aui2.0.x",
  }
  
})  