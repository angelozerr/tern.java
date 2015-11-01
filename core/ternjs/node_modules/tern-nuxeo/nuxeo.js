(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["tern/lib/infer", "tern/lib/tern"], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("nuxeo", function(server, options) {
    var cx = infer.cx(), isNode = server.plugins["node"] != null;
    updateDefs(isNode);
    server.addDefs(defs);
  });

  function updateDefs(isNode) {
    var nuxeoDef = {
      "nuxeo": {
        "Client": "Client"
      }    
    }
    if (isNode) defs["!define"]["!known_modules"] = nuxeoDef;
    else defs["nuxeo"] = nuxeoDef["nuxeo"];
  }
  
  var defs = {
    "!name": "nuxeo",
    "!define": {
      "NuxeoError": {
        
      },
      "ClientOptions": {
        "baseURL": {
          "!type": "string",
          "!doc": "TODO",
          "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
        },
        "restPath": {
          "!type": "string",
          "!doc": "TODO",
          "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
        }
      },
      "Client": {
        "!type": "fn(options?: ClientOptions)",
        "!doc": "TODO",
        "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client",
        "prototype": {
          "connect": {
            "!type": "fn(callback: fn(error: +NuxeoError, client: !this))",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "connected": {
            "!type": "bool",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "header": {
            "!type": "fn(name: ?, value: ?)",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          }
        }
      }
    }
  }
  
});