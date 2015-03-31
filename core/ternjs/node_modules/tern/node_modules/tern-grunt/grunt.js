(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})
(function(infer, tern) {
  "use strict";

  function isGrunfile(filename) {
    return filename === "[doc]" || filename === "Gruntfile.js";
  }
  
  function getTasks(filename) {
    var server = infer.cx().parent, data = server && server._grunt, gruntFile = filename && data[filename];
    return gruntFile ? gruntFile.tasks : null;
  }
  
  infer.registerFunction("grunt_registerTask", function(self, args, argNodes) {
    var name = argNodes && argNodes[0] && argNodes[0].type == "Literal" && argNodes[0].value;
    if (typeof name == "string")
      getTasks(argNodes[0].sourceFile.name)[name] = {"node": argNodes[0]};
    return infer.ANull;
  });
  
  infer.registerFunction("grunt_initConfig", function(self, args, argNodes) {
    var server = infer.cx().parent, data = server && server._grunt;
    if (argNodes && argNodes.length && argNodes[0].type == "ObjectExpression") {
      var filename = argNodes[0].sourceFile.name, tasks = getTasks(filename);
      if (tasks) {
        argNodes[0].properties.forEach(function(prop) {
          var key = prop.key.name || prop.key.value, value = prop.value, targets = {};
          if (value && value.type == "ObjectExpression") {
            value.properties.forEach(function(prop) {
              var key = prop.key.name || prop.key.value;
              if (key != "options") targets[key] = {"node": prop.key};
            });
          }
          tasks[key] = {"node": prop.key, "targets": targets};
        });
      }
    }
    return infer.ANull;
  });
  
  tern.registerPlugin("grunt", function(server, options) {
    
    server._grunt = Object.create(null);
    
    server.on("afterLoad", function(file) {
      if (isGrunfile(file.name)) {
        var fnType = file.scope.exports && file.scope.exports.getFunctionType();
        if (fnType) {
          var cx = infer.cx(), deps = [cx.definitions.grunt.Grunt];
          fnType.propagate(new infer.IsCallee(infer.cx().topScope, deps, null, infer.Null))
        }
      }
    });
    
    return {
      defs : defs,
      passes: {
          preInfer: preInfer          
      }
    };
  });

  function preInfer(ast, scope) {
    var filename = ast.sourceFile.name;
    if (isGrunfile(filename)) infer.cx().parent._grunt[filename] = {tasks: Object.create(null)};
  }
  
  tern.defineQueryType("grunt-task", {
    takesFile: true,
    run: function(server, query, file) {
      try {
        var name = query.name, taskName = name, targetName = null, index = name.indexOf(":");
        if (index != -1) {
          taskName = taskName.substring(0, index); 
          targetName = name.substring(index+1, name.length);
        }
        var filename = file.name, tasks = getTasks(filename), task = tasks[taskName];
        if (task) {
          if (targetName && task.targets) task = task.targets[targetName];
          var node = task && task.node;                    
          if (node && node.sourceFile) return {file: node.sourceFile.name, start: node.start, end: node.end};
        }
        return {}
      } catch(err) {
        console.error(err.stack);
        return {};
      }        
    }
  });
  
  tern.defineQueryType("grunt-tasks", {
    takesFile: true,
    run: function(server, query, file) {
      try {
        var result = [], filename = file.name, tasks = getTasks(filename);
        if (tasks) {
          for(var name in tasks) {
            var task = tasks[name], targets = [];
            if (task.targets) {
              for(var targetName in task.targets) {
                targets.push({"name": targetName});
              }
            }
            result.push({"name": name, "targets": targets});
          }
        }
        return {"completions": result};
      } catch(err) {
        console.error(err.stack);
        return {};
      }        
    }
  });

  var defs = {
    "!name" : "grunt",
    "!define" : {
      Grunt : {
        config : {
          "!doc" : "Access project-specific configuration data defined in the Gruntfile.",
          "!url" : "http://gruntjs.com/api/grunt.config",
          init : {
            "!type" : "fn(configObject: ?)",
            "!doc" : "Initialize a configuration object for the current project.\nThe specified configObject is used by tasks and can be accessed using the grunt.config method.\nNearly every project's Gruntfile will call this method.",
            "!url" : "http://gruntjs.com/api/grunt.config#grunt.config.init",
            "!effects": ["custom grunt_initConfig"]
          },
          get : {
            "!type" : "fn(prop?: ?) -> ?",
            "!doc" : "Get a value from the project's Grunt configuration. If prop is specified, that property's value is returned, or null if that property is not defined. If prop isn't specified, a copy of the entire config object is returned. Templates strings will be recursively processed using the grunt.config.process method.",
            "!url" : "http://gruntjs.com/api/grunt.config#grunt.config.get"
          },
          process : {
            "!type" : "fn(value?: ?) -> ?",
            "!doc" : "Process a value, recursively expanding <% %> templates (via the grunt.template.process method) in the context of the Grunt config, as they are encountered. this method is called automatically by grunt.config.get but not by grunt.config.getRaw.",
            "!url" : "http://gruntjs.com/api/grunt.config#grunt.config.process"
          },
          getRaw : {
            "!type" : "fn(value?: ?) -> ?",
            "!doc" : "Get a raw value from the project's Grunt configuration, without processing <% %> template strings. If prop is specified, that property's value is returned, or null if that property is not defined. If prop isn't specified, a copy of the entire config object is returned.",
            "!url" : "http://gruntjs.com/api/grunt.config#grunt.config.getRaw"
          },
          set : {
            "!type" : "fn(prop: ?, value: ?) -> ?",
            "!doc" : "Set a value into the project's Grunt configuration.",
            "!url" : "http://gruntjs.com/api/grunt.config#grunt.config.set"
          },
          escape : {
            "!type" : "fn(propString: string) -> string",
            "!doc" : "Escape . dots in the given propString. This should be used for property names that contain dots.",
            "!url" : "http://gruntjs.com/api/grunt.config#grunt.config.escape"
          },
          requires : {
            "!type" : "fn(prop: [string]) -> ?",
            "!doc" : "Fail the current task if one or more required config properties is missing, null or undefined. One or more string or array config properties may be specified.",
            "!url" : "http://gruntjs.com/api/grunt.config#grunt.config.requires"
          }
        },
        event : {
          "!doc" : "Even though only the most relevant methods are listed on this page, the full EventEmitter2 API is available on the grunt.event object. Event namespaces may be specified with the . (dot) separator, and namespace wildcards have been enabled.",
          "!url" : "http://gruntjs.com/api/grunt.event",
          on : {
            "!type" : "fn(event: Event, listener: ?)",
            "!doc" : "Adds a listener to the end of the listeners array for the specified event.",
            "!url" : "http://gruntjs.com/api/grunt.event#grunt.event.on"
          },
          once : {
            "!type" : "fn(event: Event, listener: ?)",
            "!doc" : "Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.",
            "!url" : "http://gruntjs.com/api/grunt.event#grunt.event.once"
          },
          many : {
            "!type" : "fn(event: Event, timesToListen: number, listener: ?)",
            "!doc" : "Adds a listener that will execute n times for the event before being removed.",
            "!url" : "http://gruntjs.com/api/grunt.event#grunt.event.many"
          },
          off : {
            "!type" : "fn(event: Event, listener: ?)",
            "!doc" : "Remove a listener from the listener array for the specified event.",
            "!url" : "http://gruntjs.com/api/grunt.event#grunt.event.off"
          },
          removeAllListeners : {
            "!type" : "fn(event: [Event])",
            "!doc" : "Removes all listeners, or those of the specified event.",
            "!url" : "http://gruntjs.com/api/grunt.event#grunt.event.removealllisteners"
          },
          emit : {
            "!type" : "fn(event: Event, arg: [?])",
            "!doc" : "Execute each of the listeners that may be listening for the specified event name in order with the list of arguments.",
            "!url" : "http://gruntjs.com/api/grunt.event#grunt.event.emit"
          }
        },
        initConfig : {
          "!type" : "Grunt.config.init",
        },
        task : {
          "!doc" : "Register, run and load external tasks.",
          "!url" : "http://gruntjs.com/api/grunt.task",
          registerTask : {
            "!type" : "fn(taskName: string, taskList: [string])",
            "!doc" : "Register an 'alias task' or a task function. This method supports the following two signatures:",
            "!url" : "http://gruntjs.com/api/grunt.task#grunt.task.registertask",
            "!effects": ["custom grunt_registerTask"]
          },
          registerMultiTask : {
            "!type" : "fn(taskName: string, description: string, taskFunction: fn())",
            "!doc" : "Register an 'alias task' or a task function. This method supports the following two signatures:",
            "!url" : "hhttp://gruntjs.com/api/grunt.task#grunt.task.registermultitask",
            "!effects": ["custom grunt_registerTask"]
          }
        },
        registerTask: {
          "!type": "Grunt.task.registerTask"
        },
        registerMultiTask: {
          "!type": "Grunt.task.registerMultiTask"
        },
        fail : {
          "!doc" : "For when something goes horribly wrong.",
          "!url" : "http://gruntjs.com/api/grunt.fail",
          warn : {
            "!type" : "fn(error: Error, errorcode?: number)",
            "!doc" : "Display a warning and abort Grunt immediately.",
            "!url" : "http://gruntjs.com/api/grunt.fail#grunt.warn",

          },
          fatal : {
            "!type" : "fn(error: Error, errorcode?: number)",
            "!doc" : "Display a warning and abort Grunt immediately.",
            "!url" : "http://gruntjs.com/api/grunt.fail#grunt.fatal",

          }
        }
      }
    }
  }

});