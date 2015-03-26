(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("acorn/dist/acorn"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["tern/lib/infer", "tern/lib/tern", "acorn/dist/acorn"], mod);
  mod(tern, tern, acorn);
})(function(infer, tern, acorn) {
  "use strict";
  
  function ternError(msg) {
    var err = new Error(msg);
    err.name = "TernError";
    return err;
  }
  
  tern.registerPlugin("guess-types", function(server, options) {
    return {};
  });  
  
  tern.defineQueryType("guess-types", {
    takesFile: true,
    run: function(server, query, file) {
      if (query.end == null) throw ternError("missing .query.end field");
      if (query.property == null) throw ternError("missing .query.property field");
      var wordStart = tern.resolvePos(file, query.end), text = file.text, quessTypes = {};
      while (wordStart && acorn.isIdentifierChar(text.charCodeAt(wordStart - 1))) --wordStart;
      
      function gather(prop, obj, depth, addInfo) {
    	  var val = obj.props[prop];
          infer.resetGuessing();
          var type = infer.toString(val.getType());
          var guessType = quessTypes[type];
          if (guessType) guessType.push(prop);
      }
      
      var prop = null;
      var exprAt = infer.findExpressionAround(file.ast, null, wordStart, file.scope);
      if (exprAt && exprAt.node.object) {
    	exprAt.node = exprAt.node.object;
        var objType = infer.expressionType(exprAt);
        if (objType && objType.getType && objType.getType()) {
          prop = objType.getType().hasProp(query.property);
        }
      } else {
    	  prop = file.scope.hasProp(query.property);    	  
      }
      
      if (prop && prop.getFunctionType) {
    	quessTypes.args = [];
      	var fnType = prop.getFunctionType(), args = fnType.args;
      	for (var i = 0; i < args.length; i++) {
			var arg = args[i], argType = infer.toString(arg.getType());
			quessTypes.args.push(argType)
			quessTypes[argType] = [];
			if (argType == "bool") {
				quessTypes[argType].push("true");
				quessTypes[argType].push("false");
			}
		}
      	infer.forAllLocalsAt(file.ast, wordStart, file.scope, gather);
      }
      
      return quessTypes;
    }
  });
  
  
})  