(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("jshint/src/jshint").JSHINT, require);
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern", "jshint/src/jshint" ], mod);
  mod(tern, tern, JSHINT);
})(function(infer, tern, JSHINT, require) {
  "use strict";
  
  var fs, shjs, cli;
  if (require) (function() {
    cli = require("jshint/src/cli");
    fs  = require("fs");  
    shjs = require("jshint/node_modules/shelljs");
  }())
  
  var slashAtEndRegEx = /\/$/;
  
  var pathLastSegmentIsolationRegEx = /([^\/]*)\/*$/;
  
  var fileNameRegEx = /([^\\]+)\.[^\\]+$/;
  
  var doubleAsteriskAtEndRegEx = /\*\*$/;

  function normPath(name) { return name.replace(/\\/g, "//"); }
  
  function JSHintConfig(server, options) {
    if (options.config) {
      // JSHint config is stored in the .tern-project
      this.config = options.config;
      this.init();
    } else if (options.configFile) {
      // JSHint config is stored in a .jshintrc config file.      
      this.config = null;
      this.configFile = options.configFile;
      this.projectDir = server.options.projectDir;
      this.ignorePatterns  = null;
      this.ignoresFile = ".jshintignore";
      // Override cli.error to avoid calling cli.exit when cli.exit is called in cli.loadConfig.
      var _this = this, cli = require("jshint/node_modules/cli");
      cli.error = function(msg) {        
        throw new Error(msg);
      };
    }
  }
  
  JSHintConfig.prototype.init = function() {
    var config = this.config = JSON.parse(JSON.stringify(this.config || {}));    
    this.globals = null;
    if (config.globals) {
      this.globals = config.globals;
      delete config.globals;
    }
    delete config.dirname;    
  }
  
  JSHintConfig.prototype.update = function() {
    try {
      this.config = null;
      // load JSHint config
      var filepath = this.configFile;
      this.config = cli.loadConfig(filepath);
      this.init();
      this.error = null;
    } catch(e) {
      this.error = String(e);
    }
  }
  
  JSHintConfig.prototype.isIgnored = function(file) {
    
    function loadIgnores(ignoresFile) {
      // Re-parse .jshintignore file
      var ignorePatterns = shjs.cat(ignoresFile).split("\n");
      // Remove empty entries
      ignorePatterns = ignorePatterns.filter(function(line) {
        return !!line.trim();
      }).map(function(line) {
        if (slashAtEndRegEx.test (line)) {
          // This is a directory name (it ends with a slash), so help the 
          // pattern adding the double asterisk at the end
          return line += "**";
        } else {
          // Get only the last segment for this path
          var lastSegment = line.match(pathLastSegmentIsolationRegEx)[1];
          // If this is a directory (which we identify by reviewing
          // it's not a filename (i.e it has no extension), neither
          // the expresion ends with ** then help improving the 
          // ignore expression by adding a /** to the pattern
          if (lastSegment && !fileNameRegEx.test (lastSegment)
                  && !doubleAsteriskAtEndRegEx.test (lastSegment)) {
            return line += "/**";
          }
        }
        
        // Otherwise, just pass the line with no modification
        // This should be the case for explicit filenames
        return line;
      });
      return ignorePatterns;
    }
      
    if (!this.ignoresFile) return false; // Browser context

    if (!fs.existsSync(this.ignoresFile)) {
      try {
        // If .jshintignore does not exist, then simply
        // ask cli.gather if filename should be excluded
        var gather = cli.gather({
      	args: [file.name]
        });
        return gather.indexOf(file.name) < 0;
      } catch(e) {
        if (!fs.existsSync(file.name)) return false;
        return true;
      }
    }
    
    // watch the .jshintignore to update the ignore patterns, when file content changes.
    var _this = this;
    fs.watch(this.ignoresFile, function(event, filename) {
      _this.ignorePatterns = null;
    });
    // We reach here if .jshintignore actually exists, but it needs special handling because
    // there is a problem that is caused when a directory wants to be excluded entirely and 
    // you only know a single filename (as this case). 
    // For that scenario, the ignore path needs to be explicitly specified as 
    // "folder/**" in .jshintignore instead just "folder/" or "folder", and given 
    // tern makes individual file calls, we need to provide a workaround here
    // for tern.java
    if (!this.ignorePatterns) {      
      this.ignorePatterns = loadIgnores(this.ignoresFile);
    }
    
    var gather = cli.gather({
      args: [file.name],
      ignores : this.ignorePatterns
    });
    	
    return gather.indexOf(file.name) < 0;
  }
  
  JSHintConfig.prototype.getConfig = function() {
    if (this.config || (!this.config && !this.configFile)) return this.config;
    var filepath = this.configFile, projectDir = this.projectDir, validConfig = false;
    if (!fs.existsSync(filepath)) {
      // try if config file is hosted inside project
      filepath = normPath(projectDir + "//" + filepath);
      if (!fs.existsSync(filepath)) {
        this.error = "Cannot find JSHint config files ['" + this.configFile + "', '" + filepath + "']";
      } else {
       this.configFile = filepath; 
       validConfig = true; 
      }      
    } else {
      validConfig = true; 
    }
    if (validConfig) {
      delete[this.error];
      var _this = this;
      // watch the .jshintrc to update the cached .jshintrc config, when file content changes.
      fs.watch(this.configFile, function(event, filename) {
        _this.update();
      });
      this.update();
    }
    return this.config;
  }
  
  tern.registerPlugin("jshint", function(server, options) {  
    server.mod.jshint = {
      config: new JSHintConfig(server, options)
    }
  });
  
  function validate(server, query, file, messages) {
	
    function getSeverity(err) {
      // E: Error, W: Warning, I: Info
      var isError = err.code && err.code[0] === 'E';
      return isError ? "error" : "warning";
    }

    function makeError(message) {
	  var from = tern.resolvePos(file, {line: message.line - 1, ch: message.start}), to = from; 
	  try {
	    to = tern.resolvePos(file, {line: message.line - 1, ch: message.end});
	  } catch(e) {}
  	  var error = {
	    message: message.reason,
	    severity: getSeverity(message),
	    from: tern.outputPos(query, file, from),
	    to: tern.outputPos(query, file, to)	      
	  }
  	  if (query.lineNumber) error.lineNumber = message.line;
	  if (!query.groupByFiles) error.file = file.name;
	  return error;
    }

    function parseErrors(errors, output) {
      for ( var i = 0; i < errors.length; i++) {
        var error = errors[i];
        if (error) {
          var linetabpositions, index;
  
          linetabpositions = [];
  
          // This next block is to fix a problem in jshint. Jshint
          // replaces
          // all tabs with spaces then performs some checks. The error
          // positions (character/space) are then reported incorrectly,
          // not taking the replacement step into account. Here we look
          // at the evidence line and try to adjust the character position
          // to the correct value.
          if (error.evidence) {
            // Tab positions are computed once per line and cached
            var tabpositions = linetabpositions[error.line];
            if (!tabpositions) {
              var evidence = error.evidence;
              tabpositions = [];
              // ugggh phantomjs does not like this
              // forEachChar(evidence, function(item, index) {
                Array.prototype.forEach.call(evidence, function(item,
                                                              index) {
                if (item === '\t') {
                  // First col is 1 (not 0) to match error
                  // positions
                  tabpositions.push(index + 1);
                }
              });
              linetabpositions[error.line] = tabpositions;
            }
            if (tabpositions.length > 0) {
              var pos = error.character;
              tabpositions.forEach(function(tabposition) {
                if (pos > tabposition) pos -= 1;
              });
              error.character = pos;
            }
          }
  
          var start = error.character - 1, end = start + 1;
          if (error.evidence) {
            index = error.evidence.substring(start).search(/.\b/);
            if (index > -1) {
              end += index;
            }
          }

          // Adust start/end
          error.start = start;
          error.end = end;
  
          output.push(makeError(error));
        }
      }
    }
    
	var text = file.text, jshintCfg = server.mod.jshint.config;
	var config = jshintCfg.getConfig(), globals = jshintCfg.globals;	
	if (jshintCfg.error) { 
	  // .jshintrc file doesn't exist
	  messages.push(makeError({line:1 , start: 0, end: 1, reason: jshintCfg.error, severity: "error"}))
	  return;
	}
	if (jshintCfg.isIgnored(file)) return; // Just skip, this file does not need to be linted
	
	// Validate with JSHint
	JSHINT(text, config, globals);
	var errors = JSHINT.data().errors;
	if (errors) parseErrors(errors, messages);	  	
  }
  
  tern.defineQueryType("jshint", {
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
  
  tern.defineQueryType("jshint-full", {
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