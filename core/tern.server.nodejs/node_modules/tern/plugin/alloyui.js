(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("../lib/infer"), require("../lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["../lib/infer", "../lib/tern"], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  function injectModule(fn, name) {
    var cx = infer.cx(), ngDefs = cx.definitions.alloyui, module = ngDefs[name];
    if (module) { 
      var result = new infer.AVal, deps = [];                   
      deps.push(module.getType())
      fn.propagate(new infer.IsCallee(infer.ANull, deps, null, result));
    }
  }
 
  infer.registerFunction("aui", function(self, args, argNodes) {
    var yui = self.getType();
    if (yui && argNodes) {
      var lastArg = argNodes[argNodes.length -1];
      if (lastArg.type == "FunctionExpression") {
        var fn = args[argNodes.length -1];
        if (fn.argNames  && fn.argNames.length > 0) {          
          for ( var i = 0; i < argNodes.length - 1; i++) {
            var node = argNodes[i];
            if (node.type == "Literal" && typeof node.value == "string") {
              injectModule(fn, node.value);
            } else if (node.type == "ArrayExpression") for (var i = 0; i < node.elements.length; ++i) {
              var elt = node.elements[i];
              if (elt.type == "Literal" && typeof elt.value == "string") {
                injectModule(fn, elt.value);
              }
            }
          }
        }        
      }
    }
  });
  
  function preCondenseReach(state) {
    
  }

  function postLoadDef(data) {
    
  }

  tern.registerPlugin("alloyui", function(server, options) {    
    return {
      defs: defs,
      passes: {
        preCondenseReach: preCondenseReach,
        postLoadDef: postLoadDef
      },
    };
  });
  
  var defs = {
    "!name": "alloyui",
    "!define": {
      YUI: {
        prototype: {
          use: {
            "!type": "fn(modules: [string], callback: fn(A: +YUI)) -> !this",
            "!effects": ["custom aui"],
            "!url": "http://alloyui.com/api/classes/YUI.html#method_use",
            "!doc": "Attaches one or more modules to the YUI instance. When this is executed, the requirements are analyzed, and one of several things can happen:"
          },
          ready: {
            "!type": "fn(modules: [string], callback: fn(A: +YUI)) -> !this",
            "!effects": ["custom aui"],
            "!url": "where is the doc ?",
            "!doc": "where is the doc ?"
          }
        }
      },
      
      YUINode: {
        prototype: {
          addClass: {
            "!type": "fn(className: string) -> !this",
            "!url": "http://alloyui.com/api/classes/Node.html#method_addClass",
            "!doc": "Adds a class name to each node."
          },
          all: {
            "!type": "fn(selector: string) -> +YUINodeList",
            "!url": "http://alloyui.com/api/classes/Node.html#method_all",
            "!doc": "Retrieves a NodeList based on the given CSS selector."
          },
          setStyle: {
            "!type": "fn(attr: string, val: string) -> !this",
            "!url": "http://alloyui.com/api/classes/Node.html#method_setStyle",
            "!doc": "Sets a style property of the node. Use camelCase (e.g. 'backgroundColor') for multi-word properties."
          },
          setStyles: {
            "!type": "fn(hash: ?) -> !this",
            "!url": "http://alloyui.com/api/classes/Node.html#method_setStyles",
            "!doc": "Sets multiple style properties on the node. Use camelCase (e.g. 'backgroundColor') for multi-word properties."
          }
        }
      },
      
      YUINodeList: {
        
      },
      
      "aui-node": {
        one: {          
          "!type": "fn(selector: string) -> +YUINode",
          "!url": "http://alloyui.com/api/classes/Node.html#method_one",
          "!doc": "Retrieves a single Node instance, the first element matching the given CSS selector. Returns null if no match found."
        } 
      }
      
    }, 

    AUI: {
      "!type": "fn() -> +YUI",
      "!url": "...",
      "!doc": "...",      
    },
    YUI: {
      "!type": "fn() -> +YUI",
      "!url": "...",
      "!doc": "...",      
    }
  };
});
