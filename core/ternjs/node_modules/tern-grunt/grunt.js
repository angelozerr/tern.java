(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})
(function(infer, tern) {
  "use strict";

  function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }
  
  function isGrunfile(filename) {
    return filename === "[doc]" || endsWith(filename, "Gruntfile.js");
  }
  
  function getTasks(filename) {
    var server = infer.cx().parent, data = server && server.mod.grunt, gruntFile = filename && data[filename];
    return gruntFile ? gruntFile.tasks : null;
  }
  
  infer.registerFunction("grunt_registerTask", function(self, args, argNodes) {
    var name = argNodes && argNodes[0] && argNodes[0].type == "Literal" && argNodes[0].value;
    if (typeof name == "string")
      getTasks(argNodes[0].sourceFile.name)[name] = {"node": argNodes[0]};
    return infer.ANull;
  });
  
  infer.registerFunction("grunt_initConfig", function(self, args, argNodes) {
    var server = infer.cx().parent, data = server && server.mod.grunt;
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
    server.mod.grunt = Object.create(null);    
    server.on("afterLoad", afterLoad);
    server.on("preInfer", preInfer);
    server.addDefs(defs);
  });
  
  function afterLoad(file) {
    if (isGrunfile(file.name)) {
      var fnType = file.scope.exports && file.scope.exports.getFunctionType();
      if (fnType) {
        var cx = infer.cx(), deps = [cx.definitions.grunt.Grunt];
        fnType.propagate(new infer.IsCallee(infer.cx().topScope, deps, null, infer.Null))
      }
    }
  }

  function preInfer(ast, scope) {
    var filename = ast.sourceFile.name;
    if (isGrunfile(filename)) infer.cx().parent.mod.grunt[filename] = {tasks: Object.create(null)};
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
        var filename = file.name, tasks = getTasks(filename), task = tasks ? tasks[taskName] : null;
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
        config: {
          "!doc": "Access project-specific configuration data defined in the Gruntfile.",
          "!url": "http://gruntjs.com/api/grunt.config",
          init: {
            "!type": "fn(configObject: ?)",
            "!doc": "Initialize a configuration object for the current project.\nThe specified configObject is used by tasks and can be accessed using the grunt.config method.\nNearly every project's Gruntfile will call this method.",
            "!url": "http://gruntjs.com/api/grunt.config#grunt.config.init",
            "!effects": ["custom grunt_initConfig"]
          },
          get: {
            "!type": "fn(prop?: ?) -> ?",
            "!doc": "Get a value from the project's Grunt configuration. If prop is specified, that property's value is returned, or null if that property is not defined. If prop isn't specified, a copy of the entire config object is returned. Templates strings will be recursively processed using the grunt.config.process method.",
            "!url": "http://gruntjs.com/api/grunt.config#grunt.config.get"
          },
          process: {
            "!type": "fn(value?: ?) -> ?",
            "!doc": "Process a value, recursively expanding <% %> templates (via the grunt.template.process method) in the context of the Grunt config, as they are encountered. this method is called automatically by grunt.config.get but not by grunt.config.getRaw.",
            "!url": "http://gruntjs.com/api/grunt.config#grunt.config.process"
          },
          getRaw: {
            "!type": "fn(value?: ?) -> ?",
            "!doc": "Get a raw value from the project's Grunt configuration, without processing <% %> template strings. If prop is specified, that property's value is returned, or null if that property is not defined. If prop isn't specified, a copy of the entire config object is returned.",
            "!url": "http://gruntjs.com/api/grunt.config#grunt.config.getRaw"
          },
          set: {
            "!type": "fn(prop: ?, value: ?) -> ?",
            "!doc": "Set a value into the project's Grunt configuration.",
            "!url": "http://gruntjs.com/api/grunt.config#grunt.config.set"
          },
          escape: {
            "!type": "fn(propString: string) -> string",
            "!doc": "Escape . dots in the given propString. This should be used for property names that contain dots.",
            "!url": "http://gruntjs.com/api/grunt.config#grunt.config.escape"
          },
          requires: {
            "!type": "fn(prop: [string]) -> ?",
            "!doc": "Fail the current task if one or more required config properties is missing, null or undefined. One or more string or array config properties may be specified.",
            "!url": "http://gruntjs.com/api/grunt.config#grunt.config.requires"
          }
        },
        event: {
          "!doc": "Even though only the most relevant methods are listed on this page, the full EventEmitter2 API is available on the grunt.event object. Event namespaces may be specified with the . (dot) separator, and namespace wildcards have been enabled.",
          "!url": "http://gruntjs.com/api/grunt.event",
          on: {
            "!type": "fn(event: Event, listener: ?)",
            "!doc": "Adds a listener to the end of the listeners array for the specified event.",
            "!url": "http://gruntjs.com/api/grunt.event#grunt.event.on"
          },
          once: {
            "!type": "fn(event: Event, listener: ?)",
            "!doc": "Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.",
            "!url": "http://gruntjs.com/api/grunt.event#grunt.event.once"
          },
          many: {
            "!type": "fn(event: Event, timesToListen: number, listener: ?)",
            "!doc": "Adds a listener that will execute n times for the event before being removed.",
            "!url": "http://gruntjs.com/api/grunt.event#grunt.event.many"
          },
          off: {
            "!type": "fn(event: Event, listener: ?)",
            "!doc": "Remove a listener from the listener array for the specified event.",
            "!url": "http://gruntjs.com/api/grunt.event#grunt.event.off"
          },
          removeAllListeners: {
            "!type": "fn(event: [Event])",
            "!doc": "Removes all listeners, or those of the specified event.",
            "!url": "http://gruntjs.com/api/grunt.event#grunt.event.removealllisteners"
          },
          emit: {
            "!type": "fn(event: Event, arg: [?])",
            "!doc": "Execute each of the listeners that may be listening for the specified event name in order with the list of arguments.",
            "!url": "http://gruntjs.com/api/grunt.event#grunt.event.emit"
          }
        },
        initConfig: {
          "!type": "Grunt.config.init",
        },
        task: {
          "!doc": "Register, run and load external tasks.",
          "!url": "http://gruntjs.com/api/grunt.task",
          registerTask: {
            "!type": "fn(taskName: string, taskList: [string])",
            "!doc": "Register an 'alias task' or a task function. This method supports the following two signatures:",
            "!url": "http://gruntjs.com/api/grunt.task#grunt.task.registertask",
            "!effects": ["custom grunt_registerTask"]
          },
          registerMultiTask: {
            "!type": "fn(taskName: string, description: string, taskFunction: fn())",
            "!doc": "Register an 'alias task' or a task function. This method supports the following two signatures:",
            "!url": "hhttp://gruntjs.com/api/grunt.task#grunt.task.registermultitask",
            "!effects": ["custom grunt_registerTask"]
          },
          requires: {
            "!type": "fn(taskName: string)",
            "!doc": "Fail the task if some other task failed or never ran.",
            "!url": "http://gruntjs.com/api/grunt.task#grunt.task.requires"
          },
          exists: {
            "!type": "fn(taskName: string) -> bool",
            "!doc": "Check with the name, if a task exists in the registered tasks. Return a boolean.",
            "!url": "http://gruntjs.com/api/grunt.task#grunt.task.exists"
          },
          renameTask: {
            "!type": "fn(oldname: string, newname: string) -> bool",
            "!doc": "Rename a task. This might be useful if you want to override the default behavior of a task, while retaining the old name.",
            "!url": "http://gruntjs.com/api/grunt.task#grunt.task.renametask"
          },
          loadTasks: {
            "!type": "fn(tasksPath: string)",
            "!doc": "Load task-related files from the specified directory, relative to the Gruntfile. This method can be used to load task-related files from a local Grunt plugin by specifying the path to that plugin's 'tasks' subdirectory.",
            "!url": "http://gruntjs.com/api/grunt.task#grunt.task.loadtasks"
          },
          loadNpmTasks: {
            "!type": "fn(pluginName: string)",
            "!doc": "Load tasks from the specified Grunt plugin. This plugin must be installed locally via npm, and must be relative to the Gruntfile. Grunt plugins can be created by using the grunt-init gruntplugin template: grunt init:gruntplugin.",
            "!url": "http://gruntjs.com/api/grunt.task#grunt.task.loadnpmtasks"
          },
          run: {
            "!type": "fn(taskList: string|[string])",
            "!doc": "Enqueue one or more tasks. Every specified task in taskList will be run immediately after the current task completes, in the order specified. The task list can be an array of tasks or individual task arguments.",
            "!url": "http://gruntjs.com/api/grunt.task#grunt.task.run"
          },
          clearQueue: {
            "!type": "fn()",
            "!doc": "Empty the task queue completely. Unless additional tasks are enqueued, no more tasks will be run.",
            "!url": "http://gruntjs.com/api/grunt.task#grunt.task.clearqueue"
          },
          normalizeMultiTaskFiles: {
            "!type": "fn(data: ?, targetname?: string)",
            "!doc": "Normalizes a task target configuration object into an array of src-dest file mappings. This method is used internally by the multi task system this.files / grunt.task.current.files property.",
            "!url": "http://gruntjs.com/api/grunt.task#grunt.task.normalizemultitaskfiles"
          }
        },
        registerTask: {
          "!type": "Grunt.task.registerTask"
        },
        registerMultiTask: {
          "!type": "Grunt.task.registerMultiTask"
        },
        loadTasks: {
          "!type": "Grunt.task.loadTasks"
        },
        loadNpmTasks: {
          "!type": "Grunt.task.loadNpmTasks"
        },
        fail: {
          "!doc": "For when something goes horribly wrong.",
          "!url": "http://gruntjs.com/api/grunt.fail",
          warn: {
            "!type": "fn(error: Error, errorcode?: number)",
            "!doc": "Display a warning and abort Grunt immediately.",
            "!url": "http://gruntjs.com/api/grunt.fail#grunt.warn",

          },
          fatal: {
            "!type": "fn(error: Error, errorcode?: number)",
            "!doc": "Display a warning and abort Grunt immediately.",
            "!url": "http://gruntjs.com/api/grunt.fail#grunt.fatal",

          }
        }
      }
    }
  }

});