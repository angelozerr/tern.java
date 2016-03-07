(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("eslint/lib/eslint"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern", "eslint/lib/eslint" ], mod);
  mod(tern, tern, eslint);
})(function(infer, tern, eslint) {
  "use strict";
  
  // copied from eslint/conf/eslint.json
  var defaultConfig = {
      "parser": "espree",
      "ecmaFeatures": {},
      "rules": {
          "no-alert": 0,
          "no-array-constructor": 0,
          "no-arrow-condition": 0,
          "no-bitwise": 0,
          "no-caller": 0,
          "no-case-declarations": 0,
          "no-catch-shadow": 0,
          "no-class-assign": 0,
          "no-cond-assign": 2,
          "no-console": 2,
          "no-const-assign": 0,
          "no-constant-condition": 2,
          "no-continue": 0,
          "no-control-regex": 2,
          "no-debugger": 2,
          "no-delete-var": 2,
          "no-div-regex": 0,
          "no-dupe-class-members": 0,
          "no-dupe-keys": 2,
          "no-dupe-args": 2,
          "no-duplicate-case": 2,
          "no-else-return": 0,
          "no-empty": 2,
          "no-empty-character-class": 2,
          "no-empty-label": 0,
          "no-empty-pattern": 0,
          "no-eq-null": 0,
          "no-eval": 0,
          "no-ex-assign": 2,
          "no-extend-native": 0,
          "no-extra-bind": 0,
          "no-extra-boolean-cast": 2,
          "no-extra-parens": 0,
          "no-extra-semi": 2,
          "no-fallthrough": 2,
          "no-floating-decimal": 0,
          "no-func-assign": 2,
          "no-implicit-coercion": 0,
          "no-implied-eval": 0,
          "no-inline-comments": 0,
          "no-inner-declarations": [2, "functions"],
          "no-invalid-regexp": 2,
          "no-invalid-this": 0,
          "no-irregular-whitespace": 2,
          "no-iterator": 0,
          "no-label-var": 0,
          "no-labels": 0,
          "no-lone-blocks": 0,
          "no-lonely-if": 0,
          "no-loop-func": 0,
          "no-mixed-requires": [0, false],
          "no-mixed-spaces-and-tabs": [2, false],
          "linebreak-style": [0, "unix"],
          "no-multi-spaces": 0,
          "no-multi-str": 0,
          "no-multiple-empty-lines": [0, {"max": 2}],
          "no-native-reassign": 0,
          "no-negated-condition": 0,
          "no-negated-in-lhs": 2,
          "no-nested-ternary": 0,
          "no-new": 0,
          "no-new-func": 0,
          "no-new-object": 0,
          "no-new-require": 0,
          "no-new-wrappers": 0,
          "no-obj-calls": 2,
          "no-octal": 2,
          "no-octal-escape": 0,
          "no-param-reassign": 0,
          "no-path-concat": 0,
          "no-plusplus": 0,
          "no-process-env": 0,
          "no-process-exit": 0,
          "no-proto": 0,
          "no-redeclare": 2,
          "no-regex-spaces": 2,
          "no-restricted-modules": 0,
          "no-restricted-syntax": 0,
          "no-return-assign": 0,
          "no-script-url": 0,
          "no-self-compare": 0,
          "no-sequences": 0,
          "no-shadow": 0,
          "no-shadow-restricted-names": 0,
          "no-spaced-func": 0,
          "no-sparse-arrays": 2,
          "no-sync": 0,
          "no-ternary": 0,
          "no-trailing-spaces": 0,
          "no-this-before-super": 0,
          "no-throw-literal": 0,
          "no-undef": 2,
          "no-undef-init": 0,
          "no-undefined": 0,
          "no-unexpected-multiline": 0,
          "no-underscore-dangle": 0,
          "no-unneeded-ternary": 0,
          "no-unreachable": 2,
          "no-unused-expressions": 0,
          "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
          "no-use-before-define": 0,
          "no-useless-call": 0,
          "no-useless-concat": 0,
          "no-void": 0,
          "no-var": 0,
          "no-warning-comments": [0, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
          "no-with": 0,
          "no-magic-numbers": 0,

          "array-bracket-spacing": [0, "never"],
          "arrow-body-style": [0, "as-needed"],
          "arrow-parens": 0,
          "arrow-spacing": 0,
          "accessor-pairs": 0,
          "block-scoped-var": 0,
          "block-spacing": 0,
          "brace-style": [0, "1tbs"],
          "callback-return": 0,
          "camelcase": 0,
          "comma-dangle": [2, "never"],
          "comma-spacing": 0,
          "comma-style": 0,
          "complexity": [0, 11],
          "computed-property-spacing": [0, "never"],
          "consistent-return": 0,
          "consistent-this": [0, "that"],
          "constructor-super": 0,
          "curly": [0, "all"],
          "default-case": 0,
          "dot-location": 0,
          "dot-notation": [0, { "allowKeywords": true }],
          "eol-last": 0,
          "eqeqeq": 0,
          "func-names": 0,
          "func-style": [0, "declaration"],
          "generator-star-spacing": 0,
          "global-require": 0,
          "guard-for-in": 0,
          "handle-callback-err": 0,
          "id-length": 0,
          "indent": 0,
          "init-declarations": 0,
          "jsx-quotes": [0, "prefer-double"],
          "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
          "lines-around-comment": 0,
          "max-depth": [0, 4],
          "max-len": [0, 80, 4],
          "max-nested-callbacks": [0, 2],
          "max-params": [0, 3],
          "max-statements": [0, 10],
          "new-cap": 0,
          "new-parens": 0,
          "newline-after-var": 0,
          "object-curly-spacing": [0, "never"],
          "object-shorthand": 0,
          "one-var": [0, "always"],
          "operator-assignment": [0, "always"],
          "operator-linebreak": 0,
          "padded-blocks": 0,
          "prefer-arrow-callback": 0,
          "prefer-const": 0,
          "prefer-spread": 0,
          "prefer-reflect": 0,
          "prefer-template": 0,
          "quote-props": 0,
          "quotes": [0, "double"],
          "radix": 0,
          "id-match": 0,
          "require-jsdoc": 0,
          "require-yield": 0,
          "semi": 0,
          "semi-spacing": [0, {"before": false, "after": true}],
          "sort-vars": 0,
          "space-after-keywords": [0, "always"],
          "space-before-keywords": [0, "always"],
          "space-before-blocks": [0, "always"],
          "space-before-function-paren": [0, "always"],
          "space-in-parens": [0, "never"],
          "space-infix-ops": 0,
          "space-return-throw-case": 0,
          "space-unary-ops": [0, { "words": true, "nonwords": false }],
          "spaced-comment": 0,
          "strict": 0,
          "use-isnan": 2,
          "valid-jsdoc": 0,
          "valid-typeof": 2,
          "vars-on-top": 0,
          "wrap-iife": 0,
          "wrap-regex": 0,
          "yoda": [0, "never"]
      }
  }
  
  // Hack for collecting node location by waiting for fix https://github.com/eslint/eslint/issues/3307
  function getMessageId(ruleId, severity, line, column) {
    return ruleId + "_" + severity + "_" + line + "_" + column;
  }

  var report = eslint.report;  
  eslint.report = function(ruleId, severity, node, location, message, opts, fix, meta) {    
    report(ruleId, severity, node, location, message, opts, fix, meta);
    if (typeof location === "string") {
      location = node.loc.start;
    }
    if (node && node.loc.start == location) this.messages_loc[getMessageId(ruleId, severity, location.line, location.column + 1)] = node;
  }  
  
  function isEmpty( obj ) {for ( var prop in obj ) {return false;} return true;}
  
  function normPath(name) { return name.replace(/\\/g, "/"); }
  
  function ESLintConfig(server, options) {
    if (options.config && !isEmpty(options.config)) {
      // ESLint config is stored in the .tern-project
      this.config = options.config;
    } else if (options.configFile) {
      // ESLint config is stored in a eslint.json config file.
      var fs = require("fs");
      var filepath = this.filepath = normPath(options.configFile);
      if (!fs.existsSync(filepath)) {
        // try if config file is hosted inside project
        filepath = this.filepath = normPath(server.options.projectDir) + "//" + filepath;
        if (!fs.existsSync(filepath)) {
          throw new Error("Cannot find ESLint config file " + filepath);
        }
      }
      this.update();
    } else {
      // Use default ESLint config
      this.config = defaultConfig;
    }
  }
  
  ESLintConfig.prototype.update = function() {
    var filepath = this.filepath;
    if (filepath) {
      var fs = require("fs"), mtime = fs.statSync(filepath).mtime;
      if (this.mtime == null || (this.mtime.getTime() != mtime.getTime())) {
        var Config = require("eslint/lib/config");        
        this.config = new Config({configFile: filepath}).getConfig(filepath);
        this.mtime = mtime;
      }
    }
  }
  
  tern.registerPlugin("eslint", function(server, options) {
    server.mod.eslint = {
      config: new ESLintConfig(server, options)
    }
  });
  
  // copied from eslint\lib\cli-engine.js
  var loadedPlugins = Object.create(null);
  
  /**
   * Load the given plugins if they are not loaded already.
   * @param {string[]} pluginNames An array of plugin names which should be loaded.
   * @returns {void}
   */
  function loadPlugins(pluginNames) {
      var util = require("eslint/lib/util");
      var rules = require("eslint/lib/rules");
      if (pluginNames) {
          pluginNames.forEach(function(pluginName) {
              var pluginNamespace = util.getNamespace(pluginName),
                  pluginNameWithoutNamespace = util.removeNameSpace(pluginName),
                  pluginNameWithoutPrefix = util.removePluginPrefix(pluginNameWithoutNamespace),
                  plugin;

              if (!loadedPlugins[pluginNameWithoutPrefix]) {
                  //debug("Load plugin " + pluginNameWithoutPrefix);

                  plugin = require(pluginNamespace + util.PLUGIN_NAME_PREFIX + pluginNameWithoutPrefix);
                  // if this plugin has rules, import them
                  if (plugin.rules) {
                      rules.import(plugin.rules, pluginNameWithoutPrefix);
                  }

                  loadedPlugins[pluginNameWithoutPrefix] = plugin;
              }
          });
      }
  }
  
  function validate(server, query, file, messages) {

    function getPos(error, from) {
      var node = error.node;
      if (node && node.range) {
        return from ? node.range[0] : node.range[1];
      }      
      var line = error.line - 1, ch = from ? error.column - 1 : error.column;
      if (node && node.loc) {
        line = from ? node.loc.start.line - 1 : node.loc.end.line - 1;
        ch = from ? node.loc.start.column : node.loc.end.column;
      }
      // adjust ch
      if (from) {
        if (ch < 1) ch = 0;
        else if (ch >= file.text.length) ch = file.text.length - 1; 
      } else {
        if (ch < 2) ch = 1;
        else if (ch >= file.text.length) ch = file.text.length;
      }        
      var pos = tern.resolvePos(file, {line: line, ch: ch}, true);
      if (pos > file.text.length) pos = file.text.length;
      return pos;
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

    function makeFix(message) {
      var fix = message.fix;
      if (fix) {
        var range = fix.range;
        return {
          from: tern.outputPos(query, file, range[0]),
          to: tern.outputPos(query, file, range[1]),
          text: fix.text
        }
      }
    }
    
	function makeError(message) {
	  if (!message.node) {
        // ESLint message doesn't contains node information (see https://github.com/eslint/eslint/issues/3307)
	    // try to retrieve if from messages_loc
	    var node = eslint.messages_loc[getMessageId(message.ruleId, message.severity, message.line, message.column)];
	    if (node) message.node = node;
	  }
	  var from = getPos(message, true), to = getPos(message, false);
	  if (from == to) {
	    if (from == 0 && file.text.length >=1) to = 1;
	    else from--;
	  }	  
	  var error = {
	    message: message.message,
	    severity: getSeverity(message),
	    from: tern.outputPos(query, file, from),
	    to: tern.outputPos(query, file, to),
	    lineNumber: message.line
	  }
	  if (message.ruleId) error.id = message.ruleId;
	  if (query.fix) {
	    var fix = makeFix(message);
	    if (fix) error.fix = fix;
	  }
	  if (!query.groupByFiles) error.file = file.name;
	  return error;
	}

	// clear all existing settings for a new file
	eslint.reset();
	eslint.messages_loc = [];
	
	var text = file.text, eslintConfig = server.mod.eslint.config;
	// Update eslint config if needed.
	eslintConfig.update();
	var config = eslintConfig.config;
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