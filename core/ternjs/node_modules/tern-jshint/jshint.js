(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("jshint/src/jshint").JSHINT, require("jshint/src/cli"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern", "jshint/src/jshint", "jshint/src/cli" ], mod);
  mod(tern, tern, JSHINT);
})(function(infer, tern, JSHINT, cli) {
  "use strict";
  
  var bogus = [ "Dangerous comment" ];

  var warnings = [ [ "Expected '{'",
                     "Statement body should be inside '{ }' braces." ] ];

  var errors = [ "Missing semicolon", "Extra comma", "Missing property name",
                 "Unmatched ", " and instead saw", " is not defined",
                 "Unclosed string", "Stopping, unable to continue" ];
  
  function cleanup(error) {
    // All problems are warnings by default
    fixWith(error, warnings, "warning", true);
    fixWith(error, errors, "error");

    return isBogus(error) ? null : error;
  }

  function fixWith(error, fixes, severity, force) {
    var description, fix, find, replace, found;

    description = error.description;

    for ( var i = 0; i < fixes.length; i++) {
      fix = fixes[i];
      find = (typeof fix === "string" ? fix : fix[0]);
      replace = (typeof fix === "string" ? null : fix[1]);
      found = description.indexOf(find) !== -1;

      if (force || found) {
        error.severity = severity;
      }
      if (found && replace) {
        error.description = replace;
      }
    }
  }

  function isBogus(error) {
    var description = error.description;
    for ( var i = 0; i < bogus.length; i++) {
      if (description.indexOf(bogus[i]) !== -1) {
        return true;
      }
    }
    return false;
  }
  
  tern.registerPlugin("jshint", function(server, options) {
    server._jshint = {
      config: options.config,
      configFile: options.configFile,
    }
  });
  
  function validate(server, query, file, messages) {
    
	function normPath(name) { return name.replace(/\\/g, "/"); }
	
	function loadConfig(file) {
	  var filepath = normPath(server.options.projectDir) + "/" + normPath(file);
	  var config = cli.loadConfig(filepath);
	  if (config) delete config.dirname;
	  return config;
	}
	
	function getOptions() {
	  var jshint = server._jshint;
	  if (jshint.config) return jshint.config;
	  if (jshint.configFile) return loadConfig(jshint.configFile);
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
	  var from = tern.resolvePos(file, {line: message.line - 1, ch: message.start}), to = from; 
	  try {
	    to = tern.resolvePos(file, {line: message.line - 1, ch: message.end});
	  } catch(e) {}
  	  var error = {
	    message: message.description,
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

          // Convert to format expected by validation service
          error.description = error.reason;// + "(jshint)";
          error.start = start;
          error.end = end;
          error = cleanup(error);
  
          if (error)
            output.push(makeError(error));
        }
      }
    }
  
	var text = file.text, options = getOptions();
	JSHINT(text, options);
    var errors = JSHINT.data().errors, result = [];
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