(function() {
  "use strict";

  function getHyperlink(cm, data) {
    if (!data)
      return;
    var token = data.token, pos = data.pos;
    var ts = CodeMirror.tern.getServer(cm);
    return {
        open : function() {
          ts.jumpToDef(cm, pos);
        }
    }     
  }

  CodeMirror.registerHelper("hyperlink", "javascript", function(cm, data) {
    return getHyperlink(cm, data)
  });
})();