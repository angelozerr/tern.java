(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["tern/lib/infer", "tern/lib/tern"], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  function preCondenseReach(state) {
    var interfaces = infer.cx().parent._cordovaJS.interfaces;
    var rjs = state.roots["!cordovajs"] = new infer.Obj(null);
    for (var name in interfaces) {
      var prop = rjs.defProp(name.replace(/\./g, "`"));
      interfaces[name].propagate(prop);
      prop.origin = interfaces[name].origin;
    }
  }

  function postLoadDef(data) {
    var cx = infer.cx(), interfaces = cx.definitions[data["!name"]]["!cordovajs"];
    var data = cx.parent._cordovaJS;
    if (interfaces) for (var name in interfaces.props) {
      interfaces.props[name].propagate(getInterface(name, data));
    }
  }

  tern.registerPlugin("cordovajs", function(server, options) {
    server._cordovaJS = {
      interfaces: Object.create(null),
      options: options || {},
      currentFile: null,
      server: server
    };

    server.on("beforeLoad", function(file) {
      this._cordovaJS.currentFile = file.name;
    });
    server.on("reset", function() {
      this._cordovaJS.interfaces = Object.create(null);
      this._cordovaJS.require = null;
    });
    return {
      defs: defs,
      passes: {
        preCondenseReach: preCondenseReach,
        postLoadDef: postLoadDef
      },
    };
  });

  var defs = {
    "!name": "cordovajs",
    "!define": {
      module: {
        id: "string",
        uri: "string",
        config: "fn() -> ?",
        exports: "?"
      }
    },
    channel: {},
    platform: {
    	id: "string"
    },
    m_document_addEventListener: {
    	"!type": "fn()",
    	"!doc": "Intercept calls to addEventListener and handle deviceready, resume, and pause events."
    },
    m_document_removeEventListener: {
    	"!type": "fn()",
    	"!doc": "Intercept calls to removeEventListener."
    },
    m_window_addEventListener: {
    	"!type": "fn()",
    	"!doc": "Intercept calls to addEventListener and handle deviceready, resume, and pause events."
    },
    m_window_removeEventListener: {
    	"!type": "fn()",
    	"!doc": "Intercept calls to removeEventListener."
    },
    documentEventHandlers: {
    	"!type": "[fn()]",
    	"!doc": "Houses custom event handlers to intercept on document event listeners."
    },
    windowEventHandlers: {
    	"!type": "[fn()]",
    	"!doc": "Houses custom event handlers to intercept on window event listeners."
    },
    event : "document.Events",
    createEvent: {
    	"!type": "fn(type: [string], data: [object]) -> object"
    },
    require: {
      "!type": "fn(id: [string]) -> !custom:cordovaJS",
    },
    define: {
      "!type": "fn(id: [string], factory: fn()) -> !custom:cordovaJS",
      remove: {
		  "!type": "fn(id: [string]) -> ?"
	  },
	  modules: {}
    },
    cordova: {
        define: "define",
    	require: "require",
    	version: "string",
    	platformId: "string",
    	addWindowEventHandler: {
    		"!type": "fn(event: [string]) -> fn()",
    		"!doc":"Method to add your own addEventListener hijacking on window."
    	},
    	addStickyDocumentEventHandler: {
    		"!type": "fn(event: [string]) -> fn()",
    		"!doc": "Method to add your own addEventListener hijacking on document."
    	},
   		addDocumentEventHandler: {
    		"!type": "fn(event: [string]) -> fn()",
    		"!doc": "Method to add your own addEventListener hijacking on document."
    	},
    	removeWindowEventHandler: {
    		"!type": "fn(event: [string]) -> ?",
    		"!doc": "Method to remove your own removeEventListener hijacking on window."
    	},
    	removeDocumentEventHandler: {
    		"!type": "fn(event: [string]) -> ?",
    		"!doc": "Method to remove your own removeEventListener hijacking on document."
    	},
    	getOriginalHandlers: {
    		"!type": "fn() -> {}",
    		"!doc": "Retrieve original event handlers that were replaced by Cordova."
    	},
    	fireDocumentEvent: {
    		"!type": "fn(type: [string], data: [object], bNoDetach: [bool]) -> ?",
    		"!doc": "Method to fire event from native code. bNoDetach is required for events which cause an exception which needs to be caught in native code."
	    },
    	fireWindowEvent: {
    		"!type": "fn(type: [string], data: [object]) -> ?",
    		"!doc": "Method to fire event from native code. bNoDetach is required for events which cause an exception which needs to be caught in native code."
	    },
	    callbackId: "number",
    	callbacks:  {},
    	callbackStatus: "number",
	    callbackSuccess: {
	    	"!type": "fn(callbackId: [number], args: [object]) -> ?",
	    	"!doc": "Called by native code when returning successful result from an action."
    	},
	    callbackError: {
	    	"!type": "fn(callbackId: [number], args: [object]) -> ?",
	    	"!doc": "Called by native code when returning error result from an action."
    	},
	    callbackFromNative: {
	    	"!type": "fn(callbackId: [number], success: [bool], status: [number], args: [object], keepCallback: [bool]) -> ?",
	    	"!doc": "Called by native code when returning the result from an action."
    	},
    	addConstructor: {
    		"!type": "fn(function: [fn()]) -> ?"
    	},
        NO_RESULT: "number",
        OK: "number",
        CLASS_NOT_FOUND_EXCEPTION: "number",
        ILLEGAL_ACCESS_EXCEPTION: "number",
        INSTANTIATION_EXCEPTION: "number",
        MALFORMED_URL_EXCEPTION: "number",
        IO_EXCEPTION: "number",
        INVALID_ACTION: "number",
        JSON_EXCEPTION: "number",
        ERROR: "number"
  	},
  	module: {
  		exports: {
	  	    define: "fn()",
	  	    require: "fn()"
  		}
  	}
  }
});