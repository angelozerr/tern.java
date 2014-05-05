CodeMirror.ternLint = function(cm, updateLinting, options) {

  function addAnnotation(error, found) {
    var startLine = error.startLine;
    var startChar = error.startChar;
    var endLine = error.endLine;
    var endChar = error.endChar;
    var message = error.message;
    found.push({
      from : error.start,
      to : error.end,
      message : message
    });
  }

  var server = options.server;
  var query = {
    type : "lint",
    file : "#0",
    lineCharPositions : true
  };

  var files = [];
  files.push({
    type : "full",
    name : "[doc]",
    text : cm.getValue()
  });

  var doc = {
    query : query,
    files : files
  };
  server.server.request(doc, function(error, response) {
    if (error) {
      updateLinting(cm, []);
    } else {
      var messages = response.messages;
      updateLinting(cm, messages);
    }
  });

};
