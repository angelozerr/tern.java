(function() {
  "use strict";
  
  TernServer = function() {
    var self = this;
    //this.options = options || {};
    
    this.docs = Object.create(null);
    this.trackChange = function(doc, change) { trackChange(self, doc, change); };

    this.cachedArgHints = null;
    this.activeArgHints = null;
    this.jumpStack = [];
    
    this.defs = [];
    this.plugins = [];
    this.server = null;
    this.getServer = function() {
      if (self.server == null) {
        self.server = new tern.Server({
          getFile: function(name, c) { return getMyFile(name); },
          async: true,
          defs: self.defs || [],
          plugins: self.plugins || []
        });
      }
      return self.server;
    }
  };

  TernServer.prototype = {
    addDoc: function(name, doc) {
      //var data = {doc: doc, name: name, changed: null};
      this.getServer().addFile(name, doc.getValue());
      //CodeMirror.on(doc, "change", this.trackChange);
      return this.docs[name] = doc;
    },

    delDoc: function(name) {
      var found = this.docs[name];
      if (!found) return;
      //CodeMirror.off(found.doc, "change", this.trackChange);
      delete this.docs[name];
      this.getServer().delFile(name);
    },

    hideDoc: function(name) {
      closeArgHints(this);
      var found = this.docs[name];
      if (found && found.changed) sendDoc(this, found);
    },

    sendDoc: function(doc, handler) {
	  this.getServer().request({files: [{type: "full", name: String(doc.name), text: String(doc.getValue())}]}, function(error) {
	      if (error) 
			return handler.onError(error.message || String(error));
	      else doc.changed = false;
	  });
	},
  	
    complete: function(cm, handler, dataAsJson) {
      this.request(cm, {type: "completions", types: true, docs: true, urls: true}, handler, dataAsJson);
    },

    getHint: function(cm, c) { return hint(this, cm, c); },

    showType: function(cm) { showType(this, cm); },

    updateArgHints: function(cm) { updateArgHints(this, cm); },

    jumpToDef: function(cm) { jumpToDef(this, cm); },

    jumpBack: function(cm) { jumpBack(this, cm); },

    rename: function(cm) { rename(this, cm); },

    request: function (cm, query, handler, dataAsJson) {
      var self = this;
      var request = buildRequest(this, cm, query);
      var server = this.getServer();
      this.server.request(request, function (error, data) {
        if (error)
          return handler.onError(error.message || String(error));
        var json = null;
        if (dataAsJson)
          json = JSON.stringify(data);
        handler.onSuccess(data, json);
      });
    
    }
  };

  function buildRequest(ts, cm, query, allowFragments) {
    var files = [], offsetLines = 0;
    if (typeof query == "string")
      query = {
        type : query
      };
    query.lineCharPositions = true;
    if (query.end == null) {
      query.end = cm.getCursor("end");
      if (cm.somethingSelected())
        query.start = cm.getCursor("start");
    }
    var startPos = query.start || query.end;
    /*
     * if (curDoc.changed) { if (cm.lineCount() > bigDoc && allowFragments !==
     * false && curDoc.changed.to - curDoc.changed.from < 100 &&
     * curDoc.changed.from <= startPos.line && curDoc.changed.to > query.end.line) {
     * files.push(getFragmentAround(cm, startPos, query.end)); query.file = "#0";
     * var offsetLines = files[0].offsetLines; if (query.start != null)
     * query.start = incLine(-offsetLines, query.start); query.end =
     * incLine(-offsetLines, query.end); } else { files.push({type: "full", name:
     * curDoc.name, text: cm.getValue()}); query.file = curDoc.name;
     * curDoc.changed = null; } } else { query.file = curDoc.name; }
     */

    query.file = cm.name;

	var doc = cm;
	files.push({
          type : "full",
          name : doc.name,
          text : doc.getValue()
        });
        
    /*for ( var i = 0; i < ts.docs.length; ++i) {
      var doc = ts.docs[i];
      if (doc.changed) {// && doc != curDoc) {
        files.push({
          type : "full",
          name : doc.name,
          text : doc.getValue()
        });
        // java.lang.System.out.println(files[0].text)
        // doc.changed = false;
      }
    }*/

    return {
      query : query,
      files : files
    };
  }

})();
    
var server = new TernServer();

function addDef(def) {
  server.defs.push(def);
}

function addPlugin(plugin) {
  server.plugins.push({plugin : "./"});
}

function registerDoc(doc) {
  var name = doc.name;
  server.addDoc(name, doc);
}

function ternHints(cm, handler, dataAsJson) {
  server.complete(cm, handler, dataAsJson);
}

function addFile(name, text) {
	server.getServer().addFile(name, text);
}

function sendDoc(doc, handler) {
  var d = server.docs[doc.name];
  server.sendDoc(d, handler);
}

function getMyFile(name) {
  return _server.getFile(name);
}