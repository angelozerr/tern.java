(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require);
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern, require) {
  "use strict";

  function resolvePath(base, path) {
    if (path[0] == "/") return path;
    var slash = base.lastIndexOf("/"), m;
    if (slash >= 0) path = base.slice(0, slash + 1) + path;
    while (m = /[^\/]*[^\/\.][^\/]*\/\.\.\//.exec(path))
      path = path.slice(0, m.index) + path.slice(m.index + m[0].length);
    return path.replace(/(^|[^\.])\.\//g, "$1");
  }

  function relativePath(from, to) {
    if (from[from.length - 1] != "/") from += "/";
    if (to.indexOf(from) == 0) return to.slice(from.length);
    else return to;
  }

  function getModule(data, name) {
    return data.modules[name] || (data.modules[name] = new infer.AVal);
  }

  function resolveModule(server, name, _parent) {
    server.addFile(name, null, server._node.currentOrigin);
    return getModule(server._node, name);
  }
  
  // Assume node.js & access to local file system
  if (require) (function() {
    var fs = require("fs"), module_ = require("module"), path = require("path");

    relativePath = path.relative;

    resolveModule = function(server, name, parent) {
      var data = server._node;
      if (data.options.dontLoad == true ||
          data.options.dontLoad && new RegExp(data.options.dontLoad).test(name) ||
          data.options.load && !new RegExp(data.options.load).test(name))
        return infer.ANull;

      if (data.modules[name]) return data.modules[name];

      var currentModule = {
        id: parent,
        paths: module_._nodeModulePaths(path.dirname(parent))
      };
      try {
        var file = module_._resolveFilename(name, currentModule);
      } catch(e) { return infer.ANull; }

      var norm = normPath(file);
      if (data.modules[norm]) return data.modules[norm];

      if (fs.existsSync(file) && /^(\.js)?$/.test(path.extname(file)))
        server.addFile(relativePath(server.options.projectDir, file), null, data.currentOrigin);
      return data.modules[norm] = new infer.AVal;
    };
  })();

  function normPath(name) { return name.replace(/\\/g, "/"); }

  function resolveProjectPath(server, pth) {
    return resolvePath(normPath(server.options.projectDir || "") + "/", normPath(pth));
  }
  
  var nodeRequire_lint = function(node, addMessage, getRule) {
    var rule = getRule("UnknownModule");
    if (!rule) return;
    var cx = infer.cx(), server = cx.parent, data = server._node;
    var argNodes = node.arguments;
    if (argNodes && argNodes.length && argNodes[0].type == "Literal" || typeof argNodes[0].value == "string") {
      var name = argNodes[0].value, locals = cx.definitions.node;
      // is a local module (fs, etc)
      var mod = locals[name];                  
      if (!mod) {
        // is a custom module?
        var currentFile = data.currentFile || resolveProjectPath(server, argNodes[0].sourceFile.name);
        if (currentFile) {
          var relative = /^\.{0,2}\//.test(name);
          if (relative) name = resolvePath(currentFile, name);
          mod = resolveModule(server, name, currentFile);
        }          
      }
      if (!(mod && (mod.getFunctionType() || mod.getType()))) addMessage(argNodes[0], "Unknown module '" + argNodes[0].value + "'", rule.severity);
    }
  };
  
  tern.registerPlugin("node-extension", function(server, options) {

    return {
      passes: {postLoadDef: postLoadDef}  
    };
  });
  
  function postLoadDef(json) {
    var cx = infer.cx(), defName = json["!name"];
    if (defName === 'node') {
      var require = cx.definitions.node.require;
      require.lint = nodeRequire_lint;
    }
  }
  
});
