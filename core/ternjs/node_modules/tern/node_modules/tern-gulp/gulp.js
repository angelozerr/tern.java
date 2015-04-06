(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  function isGulpfile(filename) {
    return filename === "[doc]" || filename === "gulpfile.js";
  }
  
  function getTasks(filename) {
    var server = infer.cx().parent, data = server && server._gulp, gulpFile = filename && data[filename];
    return gulpFile ? gulpFile.tasks : null;
  }
  
  infer.registerFunction("gulp_task", function(self, args, argNodes) {
    var name = argNodes && argNodes[0] && argNodes[0].type == "Literal" && argNodes[0].value;
    if (typeof name == "string")
      getTasks(argNodes[0].sourceFile.name)[name] = {"node": argNodes[0]};
    return infer.ANull;
  });
  
  tern.registerPlugin("gulp", function(server, options) {
    server._gulp = Object.create(null);
    return {
      defs : defs,
      passes: {
          preInfer: preInfer          
      }
    };
  });

  function preInfer(ast, scope) {
    var filename = ast.sourceFile.name;
    if (isGulpfile(filename)) infer.cx().parent._gulp[filename] = {tasks: Object.create(null)};
  }

  tern.defineQueryType("gulp-task", {
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
  
  tern.defineQueryType("gulp-tasks", {
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
    "!name": "gulp",
    "!define": {
      "!node": {
        gulp: {
          "!type": "+Gulp",
          "!url": "https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulp-api-docs"          
        }        
       },
       Gulp: {
         "!type": "fn()",
         prototype: {
           src: {
             "!type": "fn(src: string) -> +stream"
           },
           task: {
             "!type": "fn(name: string, deps?: [string], fn: fn())",
             "!url": "https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname-deps-fn",
             "!doc": "Define a task using Orchestrator.",
             "!effects": ["custom gulp_task"]
           }
         }
       }
     } 
  }
  
});