(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("eslint/lib/eslint"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern", "eslint/lib/eslint" ], mod);
  mod(tern, tern, eslint);
})(function(infer, tern, eslint) {
  "use strict";
  
  var defaultConfig = {
    "ecmaFeatures": {},
    "env": {
        "browser": false,
        "node": false,
        "amd": false,
        "mocha": false,
        "jasmine": false
    },
    "rules": {
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-bitwise": 0,
        "no-caller": 2,
        "no-catch-shadow": 2,
        "no-comma-dangle": 2,
        "no-cond-assign": 2,
        "no-console": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-div-regex": 0,
        "no-dupe-keys": 2,
        "no-else-return": 0,
        "no-empty": 2,
        "no-empty-class": 2,
        "no-empty-label": 2,
        "no-eq-null": 0,
        "no-eval": 2,
        "no-ex-assign": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "no-extra-strict": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 0,
        "no-func-assign": 2,
        "no-implied-eval": 2,
        "no-inline-comments": 0,
        "no-inner-declarations": [2, "functions"],
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-lonely-if": 0,
        "no-loop-func": 2,
        "no-mixed-requires": [0, false],
        "no-mixed-spaces-and-tabs": [2, false],
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-multiple-empty-lines": [0, {"max": 2}],
        "no-native-reassign": 2,
        "no-negated-in-lhs": 2,
        "no-nested-ternary": 0,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-require": 0,
        "no-new-wrappers": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-path-concat": 0,
        "no-plusplus": 0,
        "no-process-env": 0,
        "no-process-exit": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-reserved-keys": 0,
        "no-restricted-modules": 0,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 0,
        "no-sequences": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-space-before-semi": 2,
        "no-spaced-func": 2,
        "no-sparse-arrays": 2,
        "no-sync": 0,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 0,
        "no-underscore-dangle": 2,
        "no-unreachable": 2,
        "no-unused-expressions": 2,
        "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
        "no-use-before-define": 2,
        "no-void": 0,
        "no-var": 0,
        "no-warning-comments": [0, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
        "no-with": 2,
        "no-wrap-func": 2,
        "block-scoped-var": 0,
        "brace-style": [0, "1tbs"],
        "camelcase": 2,
        "comma-spacing": 2,
        "comma-style": 0,
        "complexity": [0, 11],
        "consistent-return": 2,
        "consistent-this": [0, "that"],
        "curly": [2, "all"],
        "default-case": 0,
        "dot-notation": [2, { "allowKeywords": true }],
        "eol-last": 2,
        "eqeqeq": 2,
        "func-names": 0,
        "func-style": [0, "declaration"],
        "generator-star": 0,
        "global-strict": [2, "never"],
        "guard-for-in": 0,
        "handle-callback-err": 0,
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
        "max-depth": [0, 4],
        "max-len": [0, 80, 4],
        "max-nested-callbacks": [0, 2],
        "max-params": [0, 3],
        "max-statements": [0, 10],
        "new-cap": 2,
        "new-parens": 2,
        "one-var": 0,
        "operator-assignment": [0, "always"],
        "padded-blocks": 0,
        "quote-props": 0,
        "quotes": [2, "double"],
        "radix": 0,
        "semi": 2,
        "sort-vars": 0,
        "space-after-function-name": [0, "never"],
        "space-after-keywords": [0, "always"],
        "space-before-blocks": [0, "always"],
        "space-in-brackets": [0, "never"],
        "space-in-parens": [0, "never"],
        "space-infix-ops": 2,
        "space-return-throw-case": 2,
        "space-unary-ops": [2, { "words": true, "nonwords": false }],
        "spaced-line-comment": [0, "always"],
        "strict": 2,
        "use-isnan": 2,
        "valid-jsdoc": 0,
        "valid-typeof": 2,
        "vars-on-top": 0,
        "wrap-iife": 0,
        "wrap-regex": 0,
        "yoda": [2, "never"]
    }
  }
  
  tern.registerPlugin("eslint", function(server, options) {

  });
  
  function validate(server, query, file, messages) {

    function getPos(error, from) {
      var node = error.node;
      if (node && node.range) {
        return from ? node.range[0] : node.range[1];
      }      
      var line = error.line-1, ch = from ? error.column -2 : error.column -1;
      if (error.node && error.node.loc) {
        line = from ? error.node.loc.start.line -1 : error.node.loc.end.line -1;
        ch = from ? error.node.loc.start.column : error.node.loc.end.column;
      }
      return tern.resolvePos(file, {line: line, ch: ch});
    }
    
    function getSeverity(error) {
      switch(error.severity) {
        case 1:
          return "warning";
        case 2:
          return "error";     
        default:
          return "error";
      }    
    }

	function makeError(message) {
	  var from = getPos(message, true), to = getPos(message, false);
	  //var q = from.line ? {lineCharPositions: true} : {}; 
	  var error = {
	    message: message.message,
	    severity: getSeverity(message),
	    from: tern.outputPos(query, file, from),
	    to: tern.outputPos(query, file, to)	      
	  }
	  if (!query.groupByFiles) error.file = file.name;
	  return error;
	}

	//clear all existing settings for a new file
	eslint.reset();

	var config = defaultConfig, text = file.text;
	var errors = eslint.verify(text, config, file.name);
	for (var i = 0; i < errors.length; i++) {	    
	  messages.push(makeError(errors[i]));	
	}
  }
  
  tern.defineQueryType("eslint", {
    takesFile: true,
    run: function(server, query, file) {
      try {
        var messages = [];
        validate(server, query, file, messages);
        return {messages: messages};
      } catch(err) {
        console.error(err.stack);
        return {messages: []};
      }        
    }
  });
  
  tern.defineQueryType("eslint-full", {
    run: function(server, query) {
      try {
        var messages = [], files = server.files, groupByFiles = query.groupByFiles == true;
        for (var i = 0; i < files.length; ++i) {
          var messagesFile = groupByFiles ? [] : messages, file = files[i];
          validate(server, query, file, messagesFile);
          if (groupByFiles) messages.push({file:file.name, messages: messagesFile});
        }        
        return {messages: messages};
      } catch(err) {
        console.error(err.stack);
        return {messages: []};
      }
    }
  });
  
});