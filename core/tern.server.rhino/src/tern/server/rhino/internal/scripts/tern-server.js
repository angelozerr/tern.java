/**
 * console support
 */
var console = {
  error: function(msg) {
	callJavaConsole(msg, 1);  
  },
  log: function(msg) {
	callJavaConsole(msg, 2);
  },  
  info: function(msg) {
	callJavaConsole(msg, 3);
  }
}

function callJavaConsole(msg, level) {
  var s = ((typeof msg) == "object") ? JSON.stringify(msg) : String(msg);
  //_javaConsole(s, level);	
}

/**
 * Tern support
 */

function J2V8TernServer(defs, plugins) {
	
	var server = null;	
	function startServer(dir, config) {
	//  var defs = findDefs(dir, config);
	  //var plugins = {};//loadPlugins(dir, config.plugins);
	  var server = new tern.Server({
	    /*getFile: function(name, c) {
	      //if (config.dontLoad && config.dontLoad.some(function(pat) {return minimatch(name, pat)}))
	      //  c(null, "");
	      //else
	        //fs.readFile(path.resolve(dir, name), "utf8", c);
	    },*/
	    //async: true,
	    defs: defs,
	    plugins: plugins,
	    debug: verbose,
	    projectDir: dir,
	    ecmaVersion: config.ecmaVersion,
	    dependencyBudget: config.dependencyBudget,
	    stripCRs: stripCRs
	  });

	  if (config.loadEagerly) config.loadEagerly.forEach(function(pat) {
	    glob.sync(pat, { cwd: dir }).forEach(function(file) {
	      server.addFile(file);
	    });
	  });
	  return server;
	}

	function getServer() {
	  if (server == null) server = startServer(projectDir, config);
	  return server;
	}
	
    this.request = function(doc) {
      if (verbose) console.log("Request: " + JSON.stringify(doc, null, 2));	
	  var _this = this;
	  getServer().request(doc, function(err, data) {
		_this.err = err;
		_this.data = data;
	  });
	  if (_this.err) throw _this.err;
	  if (verbose) console.log("Response: " + JSON.stringify(_this.data, null, 2));
	  return JSON.stringify(_this.data);
    }
    
    this.request2 = function(doc, handler, dataAsJson) {
      doc = JSON.parse(doc)
      if (verbose) console.log("Request: " + JSON.stringify(doc, null, 2)); 
      var _this = this;
      getServer().request(doc, function(err, data) {
        if (err)
          return handler.onError(err.message || String(err), null);
        if (verbose) console.log("Response: " + JSON.stringify(data, null, 2));
        var json = null;
        if (dataAsJson) json = JSON.stringify(data);
        handler.onSuccess(data, json);
      });
    }
    
}

var verbose = true;
var projectDir = "/";
var stripCRs = false;

var defaultConfig = {
  libs: [],
  loadEagerly: false,
  plugins: {},
  ecmaScript: true,
  ecmaVersion: 6,
  dependencyBudget: tern.defaultOptions.dependencyBudget
};

var config = defaultConfig;


//function findDefs(projectDir, config) {
//  var defs = [], src = config.libs;
//  if (src.indexOf("ecma5") == -1 && config.ecmaScript) src = ["ecma5"].concat(src);
//  for (var i = 0; i < src.length; ++i) {
//    var file = src[i];
//    if (!/\.json$/.test(file)) file = file + ".json";
//    var found = findFile(file, projectDir, path.resolve(distDir, "defs"));
//    if (found) defs.push(readJSON(found));
//    else process.stderr.write("Failed to find library " + src[i] + ".\n");
//  }
//  return defs;
//}
//

var defaultPlugins = ["doc_comment"];

function loadPlugins(projectDir, plugins) {
  var options = {};
  for (var plugin in plugins) {
    var val = plugins[plugin];
    if (!val) continue;
    var found = findFile(plugin + ".js", projectDir, path.resolve(distDir, "plugin"));
    if (!found) {
      try {
        found = require.resolve("tern-" + plugin);
      } catch (e) {
        process.stderr.write("Failed to find plugin " + plugin + ".\n");
        continue;
      }
    }
    var mod = require(found);
    if (mod.hasOwnProperty("initialize")) mod.initialize(distDir);
    options[path.basename(plugin)] = val;
  }

  defaultPlugins.forEach(function(name) {
    if (!plugins.hasOwnProperty(name)) {
      options[name] = true;
      require("../plugin/" + name);
    }
  });
  return options;
}