define('orion/tern/ternServer', function() {

  function TernContentAssistProvider(ts, editor) {
    this.ts = ts;
    this.editor = editor;
  }
  
  function startsWith(str, token) {
    return str.slice(0, token.length).toUpperCase() == token.toUpperCase();
  }
  
  function getSnippet(completion, startOffset) {
    var text = completion.name, type = completion.type, groups = null;
    var firstParam = null, currentParam = null, typeParsing = false, nbParams = 0;
    if (startsWith(type, 'fn(')) {
      text += '(';
      var bracket = 0;
      var afterStartFn = type.substring(2, type.length);
      var i = 0;
      for (i = 0; i < afterStartFn.length; i++) {
        var c = afterStartFn.charAt(i);
        switch (c) {
        case '(':
          bracket++;
          break;
        case ')':
          bracket--;
          break;
        default:
          if (bracket == 1) {
            if (typeParsing) {
              if (c == ',')
                typeParsing = false;
            } else {
              if (currentParam == null) {
                if (c != ' ' && c != '?') {
                  currentParam = c;
                }
              } else {
                if (c == ':') {
                  typeParsing = true;
                  if (firstParam == null) {
                    firstParam = currentParam;
                  } else {
                    text += ', ';
                  }
                  nbParams++;
                  text += currentParam;
                  var group = {positions: []};
                  group.positions.push({length: currentParam.length, offset: startOffset + text.length - currentParam.length});
                  if (!groups) groups = [];
                  groups.push(group);
                  currentParam = null;                  
                } else {
                  if (c != ' ' && c != '?') {
                    currentParam += c;
                  }
                }
              }
            }
          }
        }
        if (bracket == 0)
          break;
      }
      text += ')';
    }    
    return {proposal : text, groups : groups};
  }
  
  function getDescription(item) {
    var description = '';
    if (item.type) description += ' : '  + item.type;
    if (item.origin) description += ' - '  + item.origin;
    return description;
  }
  
  TernContentAssistProvider.prototype = {
    computeProposals : function(buffer, offset, context) {      
      var ts = this.ts, editor = this.editor, proposals = [];
      ts.request(editor, {type: "completions", types: true, origins: true}, function(error, data) {
        if (error) return showError(editor, error);
        data.completions.map(function(item) {  
            var startOffset = offset-context.prefix.length;
            var snippet = getSnippet(item, startOffset);
            var proposal = {
              proposal: snippet.proposal,
              name: item.name,              
              description: getDescription(item),
              overwrite : true
            }
            if (snippet.groups) proposal.groups = snippet.groups;
            proposals.push(proposal);
        });        
      });     
      return proposals;             
    }
  }
  
  var TernServer = function(options) {
    var self = this;
    this.options = options || {};
    var plugins = this.options.plugins || (this.options.plugins = {});
    if (!plugins.doc_comment) plugins.doc_comment = true;
    if (this.options.useWorker) {
      this.server = new WorkerServer(this);
    } else {
      this.server = new tern.Server({
        getFile: function(name, c) { return getFile(self, name, c); },
        async: true,
        defs: this.options.defs || [],
        plugins: plugins
      });
    }
    this.docs = Object.create(null);
    this.trackChange = function(doc, change) { trackChange(self, doc, change); };

    this.cachedArgHints = null;
    this.activeArgHints = null;
    this.jumpStack = [];
  };

  TernServer.prototype = {
    addDoc: function(name, doc) {
      var data = {doc: doc, name: name, changed: null};
      this.server.addFile(name, docValue(this, data));
      doc.addEventListener("Changed", this.trackChange);
      return this.docs[name] = data;
    },

    delDoc: function(name) {
      var found = this.docs[name];
      if (!found) return;
      found.doc.removeEventListener("Changed", this.trackChange);
      delete this.docs[name];
      this.server.delFile(name);
    },

    hideDoc: function(name) {
      closeArgHints(this);
      var found = this.docs[name];
      if (found && found.changed) sendDoc(this, found);
    },

    addContentAssistProvider: function(editor) {
      var contentAssist = editor.getContentAssist ? editor.getContentAssist() : editor._contentAssist, ts = this;
      contentAssist.addEventListener("Activating", function() { //$NON-NLS-0$
              var ternProvider = ts.getContentAssistProvider(editor);
              if (contentAssist.providers) {
                // Orion < 5.0
                contentAssist.providers.push(ternProvider);
              } else {
                // Orion >= 5.0
                var providers = [];
                var infos = contentAssist._providerInfoArray
                if (infos) {
                  for(var i=0; i<infos.length; i++) {
                      providers.push(infos[i].provider);
                  }                               
                }
                providers.push(ternProvider);
                contentAssist.setProviders(providers);
              }
      });
    },
    
    getContentAssistProvider: function(editor) {
      return new TernContentAssistProvider(this, editor)
    },
    
    showType: function(cm, pos) { showType(this, cm, pos); },

    updateArgHints: function(cm) { updateArgHints(this, cm); },

    jumpToDef: function(cm) { jumpToDef(this, cm); },

    jumpBack: function(cm) { jumpBack(this, cm); },

    rename: function(cm) { rename(this, cm); },

    selectName: function(cm) { selectName(this, cm); },

    request: function (cm, query, c, pos) {
      var self = this;
      var doc = findDoc(this, cm);
      var request = buildRequest(this, doc, query, pos);

      this.server.request(request, function (error, data) {
        if (!error && self.options.responseFilter)
          data = self.options.responseFilter(doc, query, request, error, data);
        c(error, data);
      });
    }
  };
  
  function findDoc(ts, doc, name) {
    for (var n in ts.docs) {
      var cur = ts.docs[n];
      if (cur.doc == doc) return cur;
    }
    if (!name) for (var i = 0;; ++i) {
      n = "[doc" + (i || "") + "]";
      if (!ts.docs[n]) { name = n; break; }
    }
    return ts.addDoc(name, doc);
  }

  //Generic request-building helper
  
  function toTernLoc(pos) {
    if (pos.row) return {line: pos.row, ch: pos.column}
    return pos;
  }

  function buildRequest(ts, doc, query, pos) {
    var files = [], offsetLines = 0, allowFragments = !query.fullDocs;
    if (!allowFragments) delete query.fullDocs;
    if (typeof query == "string") query = {type: query};
    query.lineCharPositions = true;
    if (query.end == null) {
      query.end = pos || doc.doc.getCaretOffset();
      // TODO
      //if (doc.doc.somethingSelected())
      //  query.start = doc.doc.getCursor("start");
    }
    var startPos = query.start || query.end;

    // TODO
    doc.changed = true;
    if (doc.changed) {
      /*if (doc.doc.lineCount() > bigDoc && allowFragments !== false &&
          doc.changed.to - doc.changed.from < 100 &&
          doc.changed.from <= startPos.line && doc.changed.to > query.end.line) {
        files.push(getFragmentAround(doc, startPos, query.end));
        query.file = "#0";
        var offsetLines = files[0].offsetLines;
        if (query.start != null) query.start = Pos(query.start.line - -offsetLines, query.start.ch);
        query.end = Pos(query.end.line - offsetLines, query.end.ch);
      } else {*/
        files.push({type: "full",
                    name: doc.name,
                    text: docValue(ts, doc)});
        query.file = doc.name;
        doc.changed = null;
      //}
    } else {
      query.file = doc.name;
    }
    for (var name in ts.docs) {
      var cur = ts.docs[name];
      if (cur.changed && cur != doc) {
        files.push({type: "full", name: cur.name, text: docValue(ts, cur)});
        cur.changed = null;
      }
    }

    return {query: query, files: files};
  }

  function getFragmentAround(data, start, end) {
    var doc = data.doc;
    var minIndent = null, minLine = null, endLine, tabSize = 4;
    for (var p = start.line - 1, min = Math.max(0, p - 50); p >= min; --p) {
      var line = doc.getLine(p), fn = line.search(/\bfunction\b/);
      if (fn < 0) continue;
      var indent = CodeMirror.countColumn(line, null, tabSize);
      if (minIndent != null && minIndent <= indent) continue;
      minIndent = indent;
      minLine = p;
    }
    if (minLine == null) minLine = min;
    var max = Math.min(doc.lastLine(), end.line + 20);
    if (minIndent == null || minIndent == CodeMirror.countColumn(doc.getLine(start.line), null, tabSize))
      endLine = max;
    else for (endLine = end.line + 1; endLine < max; ++endLine) {
      var indent = CodeMirror.countColumn(doc.getLine(endLine), null, tabSize);
      if (indent <= minIndent) break;
    }
    var from = Pos(minLine, 0);

    return {type: "part",
            name: data.name,
            offsetLines: from.line,
            text: doc.getRange(from, Pos(endLine, 0))};
  }
  
  function docValue(ts, doc) {
    var val = doc.doc.getText();
    if (ts.options.fileFilter) val = ts.options.fileFilter(val, doc.name, doc.doc);
    return val;
  }
  
  function showError(cm, msg) {
    
  }
  
  function trackChange(ts, doc, change) {
    //var data = findDoc(editor);
    
    //var argHints = cachedArgHints;
    //TODO
    //if (argHints && argHints.doc == doc && cmpPos(argHints.start, change.to) <= 0)
    //  cachedArgHints = null;
  } 

  return {
    TernServer : TernServer
  };

});