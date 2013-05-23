var defs = [];
var docs = [];

function setTimeout() {
}

function addDef(def) {
  defs.push(def);
}

function getFile() {

}

var server = null;
function getServer() {
  if (server == null) {
    server = new tern.Server({
      getFile : getFile,
      async : true,
      defs : defs,
      debug : true
    });
  }
  return server;
}

function registerDoc(doc) {
  docs.push(doc);
  var name = doc.name;
  var server = getServer();
  server.addFile(name, doc.getValue());
}

function ternHints(cm, handler, dataAsJson) {
  var req = buildRequest(cm, {
    type : "completions",
    types : true,
    docs : true
  });
  var server = getServer();
  server.request(req, function(error, data) {
    if (error)
      return handler.onError(error.message || String(error));
    /*
     * var completions = [], after = ""; var from = data.start, to = data.end;
     * /*if (cm.getRange(Pos(from.line, from.ch - 2), from) == "[\"" &&
     * cm.getRange(to, Pos(to.line, to.ch + 2)) != "\"]") after = "\"]";
     */
    /*
     * for (var i = 0; i < data.completions.length; ++i) { var completion =
     * data.completions[i], className = typeToIcon(completion.type); if
     * (data.guess) className += " Tern-completion-guess";
     * completions.push({text: completion.name + after, displayText:
     * completion.name, className: className, doc: completion.doc}); }
     * 
     * var obj = {from: from, to: to, list: completions};
     */
    var json = null;
    if (dataAsJson)
      json = JSON.stringify(data);
    handler.onSuccess(data, json);
  });
}

function typeToIcon() {

}
function buildRequest(cm, query, allowFragments) {
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

  for ( var i = 0; i < docs.length; ++i) {
    var doc = docs[i];
    if (doc.changed) {// && doc != curDoc) {
      files.push({
        type : "full",
        name : doc.name,
        text : doc.getValue()
      });
      // java.lang.System.out.println(files[0].text)
      // doc.changed = false;
    }
  }

  return {
    query : query,
    files : files
  };
}
