(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("qunit", function(server, options) {

    return {
      defs : defs
    };
  });
  
  var defs = {
  "!name": "qunit",
  "!define": {
    "Assert": {
      "async": {
        "!type": "fn()",
        "!doc": "\n    Instruct QUnit to wait for an asynchronous operation.\n  "
      },
      "deepEqual": {
        "!type": "fn(actual: ?, expected: ?, message: string)",
        "!doc": "Object or Expression being tested"
      },
      "equal": {
        "!type": "fn(actual: ?, expected: ?, message: string)",
        "!doc": "Expression being tested"
      },
      "expect": {
        "!type": "fn(amount: number)",
        "!doc": "Number of assertions in this test."
      },
      "notDeepEqual": {
        "!type": "fn(actual: ?, expected: ?, message: string)",
        "!doc": "Object or Expression being tested"
      },
      "notEqual": {
        "!type": "fn(actual: ?, expected: ?, message: string)",
        "!doc": "Expression being tested"
      },
      "notOk": {
        "!type": "fn(state: +Expression, message: string)",
        "!doc": "Expression being tested"
      },
      "notPropEqual": {
        "!type": "fn(actual: ?, expected: ?, message: string)",
        "!doc": "Object being tested"
      },
      "notStrictEqual": {
        "!type": "fn(actual: ?, expected: ?, message: string)",
        "!doc": "Expression being tested"
      },
      "ok": {
        "!type": "fn(state: +Expression, message: string)",
        "!doc": "Expression being tested"
      },
      "propEqual": {
        "!type": "fn(actual: ?, expected: ?, message: string)",
        "!doc": "Object being tested"
      },
      "push": {
        "!type": "fn(result: bool, actual: ?, expected: ?, message: string)",
        "!doc": "Result of the assertion"
      },
      "strictEqual": {
        "!type": "fn(actual: ?, expected: ?, message: string)",
        "!doc": "Expression being tested"
      },
      "throws": {
        "!type": "fn(block: fn(), expected: ?, message: string)",
        "!doc": "Function to execute"
      }
    }
  },
  "QUnit": {
    "asyncTest": {
      "!type": "fn(name: string, callback: fn(assert: ?))",
      "!doc": "Title of unit being tested"
    },
    "begin": {
      "!type": "fn(callback: fn(details: ?))",
      "!doc": "Callback to execute. Provides a single argument with the following property:"
    },
    "done": {
      "!type": "fn(callback: fn(details: ?))",
      "!doc": "Callback to execute. Provides a single argument with the following properties:"
    },
    "extend": {
      "!type": "fn(target: ?, mixin: string)",
      "!doc": "An object whose properties are to be modified"
    },
    "init": {
      "!type": "fn()",
      "!doc": "DEPRECATED: Re-initialize the test runner."
    },
    "log": {
      "!type": "fn(callback: fn(details: ?))",
      "!doc": "Callback to execute. Provides a single argument with the following properties:"
    },
    "module": {
      "!type": "fn(name: string, hooks: +PlainObject)",
      "!doc": "Label for this group of tests"
    },
    "moduleDone": {
      "!type": "fn(callback: fn(details: ?))",
      "!doc": "Callback to execute. Provides a single argument with the following properties:"
    },
    "moduleStart": {
      "!type": "fn(callback: fn(details: ?))",
      "!doc": "Callback to execute. Provides a single argument with the following property:"
    },
    "push": {
      "!type": "fn(result: bool, actual: ?, expected: ?, message: string)",
      "!doc": "Result of the assertion"
    },
    "reset": {
      "!type": "fn()",
      "!doc": "DEPRECATED: Reset the test fixture in the DOM."
    },
    "skip": {
      "!type": "fn(name: string)",
      "!doc": "Title of unit being tested"
    },
    "stack": {
      "!type": "fn(offset: number)",
      "!doc": "Set the stacktrace line offset."
    },
    "start": {
      "!type": "fn(decrement: number)",
      "!doc": "DEPRECATED: Optional argument to merge multiple start() calls into one. Use with multiple corresponding stop() calls."
    },
    "stop": {
      "!type": "fn(increment: number)",
      "!doc": "Optional argument to increase the async test depth with multiple steps at once."
    },
    "test": {
      "!type": "fn(name: string, callback: fn(assert: +Assert))",
      "!doc": "Title of unit being tested"
    },
    "testDone": {
      "!type": "fn(callback: fn(details: ?))",
      "!doc": "Callback to execute. Provides a single argument with the following properties:"
    },
    "testStart": {
      "!type": "fn(callback: fn(details: ?))",
      "!doc": "Callback to execute. Provides a single argument with the following properties:"
    },
    "dump": {
      "parse": {
        "!type": "fn(data: ?)",
        "!doc": "Data structure or Object to parse."
      }
    }
  }
};
});