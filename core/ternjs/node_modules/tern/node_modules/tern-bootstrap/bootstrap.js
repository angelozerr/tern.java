(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("bootstrap", function(server, options) {

    return {
      defs : defs
    };
  });
  
  var defs = {
  "!name": "bootstrap",
  "!define": {
    
  },
  "jQuery": {
    "fn": {
      "transition": {
        "!type": "fn() -> !this"
      },
      "modal": {
        "!type": "fn() -> !this"
      },
      "dropdown": {
        "!type": "fn() -> !this"
      },
      "scrollspy": {
        "!type": "fn() -> !this"
      },
      "tab": {
        "!type": "fn() -> !this"
      },
      "tooltip": {
        "!type": "fn() -> !this"
      },
      "popover": {
        "!type": "fn() -> !this"
      },
      "alert": {
        "!type": "fn() -> !this"
      },
      "button": {
        "!type": "fn() -> !this"
      },
      "collapse": {
        "!type": "fn() -> !this"
      },
      "carousel": {
        "!type": "fn() -> !this"
      },
      "affix": {
        "!type": "fn() -> !this"
      }
    }
  }
};
});