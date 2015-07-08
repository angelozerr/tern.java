(function(root, mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
      return mod(exports, require("tern/lib/infer"), require("tern/lib/tern"),
          require("acorn"), require("sax"), require("csslint").CSSLint);
    if (typeof define == "function" && define.amd) // AMD
        return define(["exports", "tern/lib/infer", "tern/lib/tern", "acorn/dist/acorn", "sax" ], mod);
    mod(root, tern, tern, acorn, sax, root.CSSLint ? root.CSSLint : null);
})(this, function(exports, infer, tern, acorn, sax, CSSLint) {
    "use strict";
  
  var htmlExtensions = {
    "htm": true,
    "html": true,
    "xhtml": true,
    "jsp": true,
    "jsf": true,
    "php": true
  }
  
  var defaultRules = {
    "UnknownElementId" : {"severity" : "warning"}
  };
  
  var startsWith = function (s, searchString, position) {
    position = position || 0;
    return s.indexOf(searchString, position) === position;
  };
  
  // DOM Document
    
  function isScriptTag(tagName) {
    return tagName.toLowerCase() == "script";
  }
  
  function isScriptEvent(attrName) {
    return startsWith(attrName, "on");
  }
  
  function spaces(text, from, to) {
    var spaces = "";
    for (var i = from; i < to; i++) {
      var c = text.charAt(i);
      switch(c) {
        case "\r":
        case "\n":
        case "\t":
          spaces += c;
          break;
        default:
          spaces += " ";
      }
    }
    return spaces;
  }
  
  var DOMDocument = exports.DOMDocument= function(xml, file) {
    var ids = this.ids = {};
    var scripts = "", scriptParsing = false, from = 0, to = xml.length, 
    parser = sax.parser(true);
    parser.onopentag = function (node) {
      if (isScriptTag(node.name)) {
        scriptParsing = true;
        to = this.position;          
        scripts = scripts + spaces(xml, from, to);
        from = to;
        to = xml.length;        
      }
    };
    parser.onclosetag = function (tagName) {
      if (isScriptTag(tagName)) {
        scriptParsing = false;
        to = this.position;
        var endElement = "</" + tagName + ">";
        scripts = scripts + xml.substring(from, to  - endElement.length);
        scripts = scripts + spaces(endElement, 0, endElement.length);
        from = to;
        to = xml.length;
      }
    };
    parser.onattribute = function (attr) {
      var startVal = this.position - attr.value.length - 1, endVal = this.position - 1; 
      if (attr.name.toLowerCase() == "id") {
        var originNode = new acorn.Node();
        originNode.start = startVal;
        originNode.end = endVal;
        originNode.sourceFile = file;
        originNode.ownerElement = this.tagName;
        ids[attr.value] = originNode;
      } else if (isScriptEvent(attr.name)) {
        scripts = scripts + spaces(xml, from, startVal);
        scripts = scripts + attr.value;
        from = this.position - 1;
        to =  xml.length;
      }
    };
    parser.write(xml);
    if (from != to) {
      if (scriptParsing) {
        scripts = scripts + xml.substring(from, to);
      } else {
        scripts = scripts + spaces(xml, from, to);
      }
    }
    this.scripts = scripts;
    
  }
  
  // Custom tern function
  
  function createElement(tagName) {
    if (!tagName || tagName.length < 1) return new infer.Obj(infer.def.parsePath("HTMLElement.prototype"));
    var cx = infer.cx(), server = cx.parent, name = 'HTML' + tagName.substring(0, 1).toUpperCase() + tagName.substring(1, tagName.length) + "Element", 
        locals = infer.def.parsePath(name + ".prototype");
    if (locals && locals != infer.ANull) return new infer.Obj(locals);    
    return createElement();
  }
  
  infer.registerFunction("Browser_getElementById", function(_self, args, argNodes) {
    if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string" || !(argNodes[0].sourceFile && argNodes[0].sourceFile.dom))
      return createElement();
    var cx = infer.cx(), id = argNodes[0].value, dom = argNodes[0].sourceFile.dom, attr = dom.ids[id];
    argNodes[0].elementId = true;
    if (attr) {
      argNodes[0].dom = attr;
      return createElement(attr.ownerElement);
    }
    return createElement();
  });
    
  infer.registerFunction("Browser_createElement", function(_self, args, argNodes) {
    if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
      return createElement();
    return createElement(argNodes[0].value);
  });
  
  infer.registerFunction("Browser_querySelector", function(argN) {
    return function(self, args, argNodes) {
      if (!argNodes || !argNodes.length || argNodes[argN].type != "Literal" || typeof argNodes[argN].value != "string" || !(argNodes[argN].sourceFile && argNodes[argN].sourceFile.dom)) {
        return
      }    
      argNodes[argN].cssselectors = true;
    };
  });
  
  // Plugin
  
  tern.registerPlugin("browser-extension", function(server, options) {
    registerLints();
    return {passes: {
             preLoadDef: preLoadDef,
             preParse: preParse,             
             typeAt: findTypeAt,
             completion: findCompletions
           }};
  });
  
  // Lint
  
  function registerLints() {
    if (!tern.registerLint) return;

    // validate document.getElementById
    tern.registerLint("Browser_validateElementId", function(node, addMessage, getRule) {
      var argNode = node.arguments[0];
      if (argNode && !argNode.dom) {
        addMessage(argNode, "Unknown element id '" + argNode.value + "'", defaultRules.UnknownElementId.severity);
      }
    });
    
    // validate Element#querySelector/Element#queryAllSelector
    tern.registerLint("Browser_validateCSSSelectors", function(node, addMessage, getRule) {
      var argNode = node.arguments[0];
      if (!argNode || argNode.type != "Literal" || typeof argNode.value != "string") {       
        return;
      }
      if (!CSSLint) return;      
      var rule = getRule("InvalidArgument");
      if (!rule) return;
      var result = CSSLint.verify(argNode.value + "{}", { ids: 0, "check-ids": 1});
      if (result) {
        if (result.messages.length > 0) {
          // validate syntax of CSS selector
          for (var i = 0; i < result.messages.length; i++) {
            var message = result.messages[i], startCol = message.col -1, endCol = message.col;
            var n = {start: argNode.start + startCol, end: argNode.start + endCol};
            addMessage(n, "Invalid CSS selectors '" + argNode.value + "': " + message.message, rule.severity, startCol, endCol);
          }
        }
        // validate existing of CSS#ID
        var ids = result.stats["_elements"];
        if (ids) {
          for (var i = 0; i < ids.length; i++) {
            var modifier = ids[i], id = modifier.text, attr = getAttr(argNode, id.slice(1, id.length));
            if (!attr) {
              var n = {start: argNode.start + modifier.col, end: argNode.start + modifier.col + modifier.text.length};
              addMessage(n, "Unknown element id '" + argNode.value + "'", defaultRules.UnknownElementId.severity);
            }
          }
        }
      }
    });
    
    if (CSSLint) {
      CSSLint.addRule({

        //rule information
        id: "check-ids",
        name: "Check existing of IDs in selectors",
        desc: "Check existing of IDs in selectors",
        browsers: "All",

        //initialization
        init: function(parser, reporter){
            var rule = this;
            parser.addListener("startrule", function(event){
                var selectors = event.selectors,
                    selector,
                    part,
                    modifier,
                    idCount,
                    i, j, k;

                for (i=0; i < selectors.length; i++){
                    selector = selectors[i];
                    idCount = 0;

                    for (j=0; j < selector.parts.length; j++){
                        part = selector.parts[j];
                        if (part.type == parser.SELECTOR_PART_TYPE){
                            for (k=0; k < part.modifiers.length; k++){
                                modifier = part.modifiers[k];
                                if (modifier.type == "id"){
                                    var id = modifier.text;
                                    var ids = reporter.stats["_elements"];
                                    if (!ids) {
                                      ids = [];
                                      reporter.stat("_elements", ids);
                                    }
                                    ids.push(modifier);
                                }
                            }
                        }
                    }
                }

            });
        }

    });
    }
  }
  
  // Pre load def : implementation to override getElementById an dcreateElement !type
  
  function preLoadDef(data) {    
    var cx = infer.cx();
    if (data["!name"] == "browser") {
      // Override Document#getElementById !type
      var getElementById = data["Document"]["prototype"]["getElementById"];
      getElementById["!type"] = "fn(id: string) -> !custom:Browser_getElementById";
      getElementById["!data"] = {"!lint": "Browser_validateElementId"};
      // Override Document#createElement !type
      var createElement = data["Document"]["prototype"]["createElement"];
      createElement["!type"] = "fn(tagName: string) -> !custom:Browser_createElement";
      // Add Element#querySelector !effects
      var querySelector = data["Element"]["prototype"]["querySelector"];
      querySelector["!effects"] = ["custom Browser_querySelector 0"];
      querySelector["!data"] =  {"!lint": "Browser_validateCSSSelectors"};
      // Add Element#querySelector !effects
      var querySelectorAll = data["Element"]["prototype"]["querySelectorAll"];
      querySelectorAll["!effects"] = ["custom Browser_querySelector 0"];
      querySelectorAll["!data"] =  {"!lint": "Browser_validateCSSSelectors"};        
    }
  }
  
  // Pre parse
  
  function isHTML(file) {
    var name = file.name; 
    if (name == "[doc]") return true;
    var index = name.lastIndexOf(".");
    return index != -1 && htmlExtensions[name.substring(index + 1, name.length)] == true;
  }
  
  function preParse(text, options) {
    var file = options.directSourceFile;
    if (!isHTML(file)) return;
    var dom = file.dom = new DOMDocument(text, file);          
    return dom.scripts;
  }

  function getAttr(node, id) {
    var dom = node.sourceFile.dom;
    return dom ? dom.ids[id] : null;
  }
  // Find type at
  
  function findTypeAt(_file, _pos, expr, type) {
    if (!expr) return type;
    var isStringLiteral = expr.node.type === "Literal" &&
       typeof expr.node.value === "string";

    if (isStringLiteral) {
      var attr = null;
      if (!!expr.node.dom) {
        attr = expr.node.dom;
      } else if (expr.node.cssselectors == true) {
        var text = _file.text, wordStart = _pos, wordEnd = _pos;
        while (wordStart && acorn.isIdentifierChar(text.charCodeAt(wordStart - 1))) --wordStart;
        while (wordEnd < text.length && acorn.isIdentifierChar(text.charCodeAt(wordEnd))) ++wordEnd;
        var id = text.slice(wordStart, wordEnd);
        attr = getAttr(expr.node, id);
      }
      if (attr) {
        // The `type` is a value shared for all string literals.
        // We must create a copy before modifying `origin` and `originNode`.
        // Otherwise all string literals would point to the last jump location
        type = Object.create(type);
        type.origin = attr.sourceFile.name; 
        type.originNode = attr;
      }
    }

    return type;
  }

  // Find completion
  
  function findCompletions(file, query) {
    var wordStart = tern.resolvePos(file, query.end), wordEnd = wordStart;
    var callExpr = infer.findExpressionAround(file.ast, null, wordStart, file.scope, "CallExpression");
    if (!callExpr) return;
    var callNode = callExpr.node;
    if (!callNode.callee || callNode.arguments.length < 1) return;

    var argNode = findAttrValue(callNode.arguments, wordStart), completionType = getCompletionType(argNode)
    if (!completionType) return;

    var fileText = file.text, text = argNode.raw, quote = text.charAt(0);
    if (!completionType.expr) {
      wordStart = argNode.start + 1;
      wordEnd = argNode.end - 1;
      //if (text.charAt(0) == quote) wordStart++;
    } else {
      while (wordStart && acorn.isIdentifierChar(fileText.charCodeAt(wordStart - 1))) --wordStart;
      if (query.expandWordForward !== false)
        while (wordEnd < fileText.length && acorn.isIdentifierChar(fileText.charCodeAt(wordEnd))) ++wordEnd;
      
      /*var i = fileText.length - 1;
      while (i > 0 && (acorn.isIdentifierChar(fileText.charCodeAt(--i)))) --wordStart;
      before = text.slice(1, i + 1);
      if (query.expandWordForward !== false)
        while (wordEnd < file.text.length && acorn.isIdentifierChar(file.text.charCodeAt(wordEnd - wordStart))) ++wordEnd;*/
    }
    var word = fileText.slice(wordStart, wordEnd), 
        before = fileText.slice(argNode.start + 1, wordStart), after = fileText.slice(wordEnd, argNode.end - 1);
    //var word = text.slice(1, wordEnd - wordStart + (completionType.expr ? 1 : 0));
    if (after && after.charAt(word.length - 1) == quote)
      after = after.slice(0, word.length - 1);
    
    var completions = [];
    completionType.complete(completions, query, file, word, wordStart);
    if (argNode.end == wordEnd + 1 && file.text.charAt(wordEnd) == quote)
      ++wordEnd;
    return {
      start: tern.outputPos(query, file, argNode.start),
      end: tern.outputPos(query, file, argNode.end),
      isProperty: false,
      isObjectKey: false,
      completions: completions.map(function(rec) {
        var name = typeof rec == "string" ? rec : rec.name;
        var string = JSON.stringify(before + name + after);
        if (quote == "'") string = quote + string.slice(1, string.length -1).replace(/'/g, "\\'") + quote;
        if (typeof rec == "string") return string;
        if (!rec.displayName) rec.displayName = name;
        rec.name = string;
        return rec;
      })
    };
  }
  
  function findAttrValue(argsNode, wordEnd) {
    for (var i = 0; i < argsNode.length; i++) {
      var argNode = argsNode[i];
      if (argNode.type == "Literal" && typeof argNode.value == "string" &&
          argNode.start < wordEnd && argNode.end > wordEnd) return argNode;
    }
  }
  
  function getCompletionType(argNode) {
    if (!argNode) return;
    if (argNode.elementId) return {
      complete: completeDOMElementIds,
      expr: false
    }
    if (argNode.cssselectors) return {
      complete: completeCSSSelectors,
      expr: true
    }
  }
  
  function completeElementIds(completions, query, file, word, withHash, hasHash) {    
    var cx = infer.cx(), server = cx.parent, dom = file.dom, attrs = dom ? dom.ids : null;
    if (!attrs) return completions;
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins;

    function maybeSet(obj, prop, val) {
      if (val != null) obj[prop] = val;
    }
    
    function gather(attrs) {
      for (var attrName in attrs) {
        if (!attrName) continue;
        var name = withHash ? "#" + attrName : attrName;
        if (name &&
            !(query.filter !== false && word &&
              (query.caseInsensitive ? name.toLowerCase() : name).indexOf(word) !== 0)) {
          name = hasHash ?  attrName : name;
          var rec = wrapAsObjs ? {name: name} : name;
          completions.push(rec);

          if (query.types || query.origins) {         
            if (query.types) rec.type = "Attr";
            if (query.origins)
              maybeSet(rec, "origin", file.name);
            rec.displayName = withHash ? "#" + attrName : attrName;
          }
        }
      }
    }

    if (query.caseInsensitive) word = word.toLowerCase();
    gather(attrs);
    return completions;
  }
  
  function completeDOMElementIds(completions, query, file, word) {
    completeElementIds(completions, query, file, word);
  }
  
  function completeCSSSelectors(completions, query, file, word, wordStart) {
    var hasHash = file.text.charAt(wordStart - 1) == "#";
    completeElementIds(completions, query, file, word, true, hasHash);
  }
  
})