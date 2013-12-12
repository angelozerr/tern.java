(function() {
  "use strict";
   
     function elt(tagname, cls /*, ... elts*/) {
    var e = document.createElement(tagname);
    if (cls) e.className = cls;
    for (var i = 2; i < arguments.length; ++i) {
      var elt = arguments[i];
      if (typeof elt == "string") elt = document.createTextNode(elt);
      e.appendChild(elt);
    }
    return e;
  }
  
  function showType(showTooltipFor, d, e, node, state, cm) {
  	var ts = CodeMirror.tern.getServer(cm);
  	var pos = d.pos;
  	ts.request(cm, "type", function(error, data) {
      //if (error) return showError(ts, cm, error);
 
        var tip = elt("span", null, elt("strong", null, data.type || "not found"));
        if (data.doc)
          tip.appendChild(document.createTextNode(" — " + data.doc));
        if (data.url) {
          tip.appendChild(document.createTextNode(" "));
          tip.appendChild(elt("a", null, "[docs]")).href = data.url;
        }
 		showTooltipFor(e, tip, node, state, cm);
    }, pos);
    
  }
  
  function getTextHover(cm, data) {
  	if (!data)
      return;
    //var server = CodeMirror.tern.getServer(cm);
    //var token = data.token, html = '';
    return showType;
    
    /*server.showType(cm, data.pos);
   	if (html === '')
	  return null;
	var result = document.createElement('div');
	result.innerHTML = html;
	return result;*/    
  }

  CodeMirror.registerHelper("textHover", "javascript", function(cm, data) {
    return getTextHover(cm, data);
  });
  
})();