(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  /**
   * For Jasmine API doc. See https://www.safaribooksonline.com/library/view/javascript-testing-with/9781449356729/ch04.html
   */
  
  infer.registerFunction("jasmineExpect", function(_self, args, argNodes) {
    var cx = infer.cx(), data = cx.parent._jasmine;
    return data.matchers;
  });
  
  tern.registerPlugin("jasmine", function(server, options) {
    server._jasmine = {
      matchers: null
    };
	  
    return {
      defs : defs,
      passes: {
          postLoadDef: postLoadDef
        }
    };
  });
  
  function postLoadDef(data) {
   var cx = infer.cx(), interfaces = cx.definitions[data["!name"]]["!jasmine"];
   var data = cx.parent._jasmine;   
   if (interfaces) {
	 if (!data.matchers) data.matchers = new infer.Obj();
     var from = interfaces;  
	  from.forAllProps(function(prop, val, local) {
	    if (local && prop != "<i>")
	  	 data.matchers.propagate(new infer.PropHasSubset(prop, val));
	  });	
   }
  }
 
  /*
   * https://www.safaribooksonline.com/library/view/javascript-testing-with/9781449356729/ch04.html
   * toBeDefined',
        
        'toBeGreaterThan',
        'toBeLessThan',
        'toBeNaN',
        'toBeNull',
        
        'toBeUndefined',
        'toContain',
        'toEqual',
        'toHaveBeenCalled',
        'toHaveBeenCalledWith',
        'toMatch',
        'toThrow',
        'toThrowError'
        */
   
  var defs = {
    "!name": "jasmine",
    "!define": {
      "!jasmine": {
        "toBe": {
          "!type": "fn(expected: ?)",
          "!doc": "At first, the toBe matcher looks a lot like the toEqual matcher, but it's not exactly the same. toBe checks if two things are the same object, not just if they are equivalent.",
          "!url": "https://www.safaribooksonline.com/library/view/javascript-testing-with/9781449356729/_identity_tobe.html"
        },
        "toBeCloseTo": {
          "!type": "fn(expected: number, precision: number)",
          "!doc": "toBeCloseTo allows you to check if a number is close to another number, given a certain amount of decimal precision as the second argument."
        },
        "toBeFalsy": {
          "!type": "fn()",
          "!doc": "To test if something evaluates to false, you use the toBeFalsy matcher.",
          "!url": "https://www.safaribooksonline.com/library/view/javascript-testing-with/9781449356729/_yes_or_no_tobetruthy_tobefalsy.html"
        },
        "toBeTruthy": {
          "!type": "fn()",
          "!doc": "To test if something evaluates to true, you use the toBeTruthy matcher.",
          "!url": "https://www.safaribooksonline.com/library/view/javascript-testing-with/9781449356729/_yes_or_no_tobetruthy_tobefalsy.html"
        },
        "toEqual": {
          "!type": "fn(expected: ?)",
          "!doc": "Perhaps the simplest matcher in Jasmine is toEqual. It simply checks if two things are equal (and not necessarily the same exact object).",
          "!url": "https://www.safaribooksonline.com/library/view/javascript-testing-with/9781449356729/_equality_toequal.html"
        }
      }
    },
    "describe": {
      "!type": "fn(description: string, specDefinitions: fn())",
      "!doc": "A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function. The string is a name or title for a spec suite - usually what is being tested. The function is a block of code that implements the suite."
    },
    "it": {
      "!type": "fn(description: string, specDefinitions: fn())",
      "!doc": "Specs are defined by calling the global Jasmine function it, which, like describe takes a string and a function. The string is the title of the spec and the function is the spec, or test. A spec contains one or more expectations that test the state of the code. An expectation in Jasmine is an assertion that is either true or false. A spec with all true expectations is a passing spec. A spec with one or more false expectations is a failing spec."
    },
    "expect": {
      "!type": "fn(value: ?) -> !custom:jasmineExpect",
      "!doc": "Expectations are built with the function expect which takes a value, called the actual. It is chained with a Matcher function, which takes the expected value."
    }
  }

});