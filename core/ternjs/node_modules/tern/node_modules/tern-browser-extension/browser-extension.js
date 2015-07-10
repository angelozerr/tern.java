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
    
  function isScriptTag(tagName, scriptTags) {
    for (var i = 0; i < scriptTags.length; i++) {
      if (tagName.toLowerCase() == scriptTags[i]) return true;
    }
    return false;
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
  
  var DOMDocument = exports.DOMDocument= function(xml, file, scriptTags) {
    if (!scriptTags) scriptTags = ["script"];
    var ids = this.ids = {};
    var scripts = "", scriptParsing = false, from = 0, to = xml.length, 
    parser = sax.parser(true);
    parser.onopentag = function (node) {
      if (isScriptTag(node.name, scriptTags)) {
        scriptParsing = true;
        to = this.position;          
        scripts = scripts + spaces(xml, from, to);
        from = to;
        to = xml.length;        
      }
    };
    parser.onclosetag = function (tagName) {
      if (isScriptTag(tagName, scriptTags)) {
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
  
  function getHTMLElementName(tagName) {
    return 'HTML' + tagName.substring(0, 1).toUpperCase() + tagName.substring(1, tagName.length) + "Element";
  }
  
  // Custom tern function
  
  function createElement(tagName) {
    if (!tagName || tagName.length < 1) return new infer.Obj(infer.def.parsePath("HTMLElement.prototype"));
    var cx = infer.cx(), server = cx.parent, name = getHTMLElementName(tagName),
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
    server._browserExtension = {
        scriptTags: (options && options.scriptTags) ? options.scriptTags : ["script"]  
    };
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
              addMessage(n, "Unknown element id '" + id + "'", defaultRules.UnknownElementId.severity);
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
    var cx = infer.cx(), server = cx.parent, scriptTags = server._browserExtension.scriptTags;
    var dom = file.dom = new DOMDocument(text, file, scriptTags);          
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
    } else {
      while (wordStart && acorn.isIdentifierChar(fileText.charCodeAt(wordStart - 1))) --wordStart;
      if (query.expandWordForward !== false)
        while (wordEnd < fileText.length && acorn.isIdentifierChar(fileText.charCodeAt(wordEnd))) ++wordEnd;
    }
    var word = fileText.slice(wordStart, wordEnd), 
        before = fileText.slice(argNode.start + 1, wordStart), after = fileText.slice(wordEnd, argNode.end - 1);
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
  
  function completeElementIds(completions, query, file, word, withHash, addHash) {    
    var cx = infer.cx(), server = cx.parent, dom = file.dom, attrs = dom ? dom.ids : null;
    if (!attrs) return;
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins;

    function maybeSet(obj, prop, val) {
      if (val != null) obj[prop] = val;
    }
    
    function gather(attrs) {
      for (var name in attrs) {
        if (!name) continue;
        if (name &&
            !(query.filter !== false && word &&
              (query.caseInsensitive ? name.toLowerCase() : name).indexOf(word) !== 0)) {
          var key = addHash ?  "#" + name : name;
          var rec = wrapAsObjs ? {name: key} : key;
          completions.push(rec);

          if (query.types || query.origins) {         
            if (query.types) rec.type = "Attr";
            if (query.origins)
              maybeSet(rec, "origin", file.name);
            rec.displayName = withHash ? "#" + name : name;
          }
        }
      }
    }

    if (query.caseInsensitive) word = word.toLowerCase();
    gather(attrs);
    return completions;
  }
  
  function completeHTMLElements(completions, query, file, word) {    
    var cx = infer.cx(), server = cx.parent, dom = file.dom, attrs = data;
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins;

    function maybeSet(obj, prop, val) {
      if (val != null) obj[prop] = val;
    }
    
    function gather(attrs) {
      for (var name in attrs) {
        if (!name) continue;
        if (name &&
            !(query.filter !== false && word &&
              (query.caseInsensitive ? name.toLowerCase() : name).indexOf(word) !== 0)) {
          var rec = wrapAsObjs ? {name: name} : name;
          completions.push(rec);

          if (query.types || query.origins) {         
            if (query.types) rec.type = getHTMLElementName(name);
            if (query.origins)
              maybeSet(rec, "origin", file.name);
          }
        }
      }
    }

    if (query.caseInsensitive) word = word.toLowerCase();
    gather(data);
    return completions;
  }

  function completeSelectors(completions, query, file, word) {    
    var cx = infer.cx(), server = cx.parent, dom = file.dom;
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins;

    function maybeSet(obj, prop, val) {
      if (val != null) obj[prop] = val;
    }
    
    function gather(attrs) {
      for (var name in attrs) {
        if (!name) continue;
        if (name &&
            !(query.filter !== false && word &&
              (query.caseInsensitive ? name.toLowerCase() : name).indexOf(word) !== 0)) {
          var rec = wrapAsObjs ? {name: name} : name;
          completions.push(rec);

          if (query.types || query.origins || query.urls || query.docs) {         
            //if (query.types) rec.type = getHTMLElementName(name);
            if (query.origins)
              maybeSet(rec, "origin", file.name);
            if (query.docs && attrs[name]["!doc"]) rec.doc = attrs[name]["!doc"];
            if (query.urls && attrs[name]["!url"]) rec.url = attrs[name]["!url"];
          }
        }
      }
    }

    if (query.caseInsensitive) word = word.toLowerCase();
    gather(selectors);
    return completions;
  }
  
  function completeDOMElementIds(completions, query, file, word) {
    completeElementIds(completions, query, file, word);
  }
  
  function completeCSSSelectors(completions, query, file, word, wordStart) {
    var hasHash = file.text.charAt(wordStart - 1) == "#";
    completeElementIds(completions, query, file, word, true, !hasHash);
    if (!hasHash) {
      completeHTMLElements(completions, query, file, word);
      completeSelectors(completions, query, file, word);
    }
  }
  
  var langs = "ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu".split(" ");
  var targets = ["_blank", "_self", "_top", "_parent"];
  var charsets = ["ascii", "utf-8", "utf-16", "latin1", "latin1"];
  var methods = ["get", "post", "put", "delete"];
  var encs = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"];
  var media = ["all", "screen", "print", "embossed", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "speech",
               "3d-glasses", "resolution [>][<][=] [X]", "device-aspect-ratio: X/Y", "orientation:portrait",
               "orientation:landscape", "device-height: [X]", "device-width: [X]"];
  var s = { attrs: {} }; // Simple tag, reused for a whole lot of tags

  var data = {
    a: {
      attrs: {
        href: null, ping: null, type: null,
        media: media,
        target: targets,
        hreflang: langs
      }
    },
    abbr: s,
    acronym: s,
    address: s,
    applet: s,
    area: {
      attrs: {
        alt: null, coords: null, href: null, target: null, ping: null,
        media: media, hreflang: langs, type: null,
        shape: ["default", "rect", "circle", "poly"]
      }
    },
    article: s,
    aside: s,
    audio: {
      attrs: {
        src: null, mediagroup: null,
        crossorigin: ["anonymous", "use-credentials"],
        preload: ["none", "metadata", "auto"],
        autoplay: ["", "autoplay"],
        loop: ["", "loop"],
        controls: ["", "controls"]
      }
    },
    b: s,
    base: { attrs: { href: null, target: targets } },
    basefont: s,
    bdi: s,
    bdo: s,
    big: s,
    blockquote: { attrs: { cite: null } },
    body: s,
    br: s,
    button: {
      attrs: {
        form: null, formaction: null, name: null, value: null,
        autofocus: ["", "autofocus"],
        disabled: ["", "autofocus"],
        formenctype: encs,
        formmethod: methods,
        formnovalidate: ["", "novalidate"],
        formtarget: targets,
        type: ["submit", "reset", "button"]
      }
    },
    canvas: { attrs: { width: null, height: null } },
    caption: s,
    center: s,
    cite: s,
    code: s,
    col: { attrs: { span: null } },
    colgroup: { attrs: { span: null } },
    command: {
      attrs: {
        type: ["command", "checkbox", "radio"],
        label: null, icon: null, radiogroup: null, command: null, title: null,
        disabled: ["", "disabled"],
        checked: ["", "checked"]
      }
    },
    data: { attrs: { value: null } },
    datagrid: { attrs: { disabled: ["", "disabled"], multiple: ["", "multiple"] } },
    datalist: { attrs: { data: null } },
    dd: s,
    del: { attrs: { cite: null, datetime: null } },
    details: { attrs: { open: ["", "open"] } },
    dfn: s,
    dir: s,
    div: s,
    dl: s,
    dt: s,
    em: s,
    embed: { attrs: { src: null, type: null, width: null, height: null } },
    eventsource: { attrs: { src: null } },
    fieldset: { attrs: { disabled: ["", "disabled"], form: null, name: null } },
    figcaption: s,
    figure: s,
    font: s,
    footer: s,
    form: {
      attrs: {
        action: null, name: null,
        "accept-charset": charsets,
        autocomplete: ["on", "off"],
        enctype: encs,
        method: methods,
        novalidate: ["", "novalidate"],
        target: targets
      }
    },
    frame: s,
    frameset: s,
    h1: s, h2: s, h3: s, h4: s, h5: s, h6: s,
    head: {
      attrs: {},
      children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
    },
    header: s,
    hgroup: s,
    hr: s,
    html: {
      attrs: { manifest: null },
      children: ["head", "body"]
    },
    i: s,
    iframe: {
      attrs: {
        src: null, srcdoc: null, name: null, width: null, height: null,
        sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
        seamless: ["", "seamless"]
      }
    },
    img: {
      attrs: {
        alt: null, src: null, ismap: null, usemap: null, width: null, height: null,
        crossorigin: ["anonymous", "use-credentials"]
      }
    },
    input: {
      attrs: {
        alt: null, dirname: null, form: null, formaction: null,
        height: null, list: null, max: null, maxlength: null, min: null,
        name: null, pattern: null, placeholder: null, size: null, src: null,
        step: null, value: null, width: null,
        accept: ["audio/*", "video/*", "image/*"],
        autocomplete: ["on", "off"],
        autofocus: ["", "autofocus"],
        checked: ["", "checked"],
        disabled: ["", "disabled"],
        formenctype: encs,
        formmethod: methods,
        formnovalidate: ["", "novalidate"],
        formtarget: targets,
        multiple: ["", "multiple"],
        readonly: ["", "readonly"],
        required: ["", "required"],
        type: ["hidden", "text", "search", "tel", "url", "email", "password", "datetime", "date", "month",
               "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio",
               "file", "submit", "image", "reset", "button"]
      }
    },
    ins: { attrs: { cite: null, datetime: null } },
    kbd: s,
    keygen: {
      attrs: {
        challenge: null, form: null, name: null,
        autofocus: ["", "autofocus"],
        disabled: ["", "disabled"],
        keytype: ["RSA"]
      }
    },
    label: { attrs: { "for": null, form: null } },
    legend: s,
    li: { attrs: { value: null } },
    link: {
      attrs: {
        href: null, type: null,
        hreflang: langs,
        media: media,
        sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
      }
    },
    map: { attrs: { name: null } },
    mark: s,
    menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
    meta: {
      attrs: {
        content: null,
        charset: charsets,
        name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
        "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
      }
    },
    meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
    nav: s,
    noframes: s,
    noscript: s,
    object: {
      attrs: {
        data: null, type: null, name: null, usemap: null, form: null, width: null, height: null,
        typemustmatch: ["", "typemustmatch"]
      }
    },
    ol: { attrs: { reversed: ["", "reversed"], start: null, type: ["1", "a", "A", "i", "I"] } },
    optgroup: { attrs: { disabled: ["", "disabled"], label: null } },
    option: { attrs: { disabled: ["", "disabled"], label: null, selected: ["", "selected"], value: null } },
    output: { attrs: { "for": null, form: null, name: null } },
    p: s,
    param: { attrs: { name: null, value: null } },
    pre: s,
    progress: { attrs: { value: null, max: null } },
    q: { attrs: { cite: null } },
    rp: s,
    rt: s,
    ruby: s,
    s: s,
    samp: s,
    script: {
      attrs: {
        type: ["text/javascript"],
        src: null,
        async: ["", "async"],
        defer: ["", "defer"],
        charset: charsets
      }
    },
    section: s,
    select: {
      attrs: {
        form: null, name: null, size: null,
        autofocus: ["", "autofocus"],
        disabled: ["", "disabled"],
        multiple: ["", "multiple"]
      }
    },
    small: s,
    source: { attrs: { src: null, type: null, media: null } },
    span: s,
    strike: s,
    strong: s,
    style: {
      attrs: {
        type: ["text/css"],
        media: media,
        scoped: null
      }
    },
    sub: s,
    summary: s,
    sup: s,
    table: s,
    tbody: s,
    td: { attrs: { colspan: null, rowspan: null, headers: null } },
    textarea: {
      attrs: {
        dirname: null, form: null, maxlength: null, name: null, placeholder: null,
        rows: null, cols: null,
        autofocus: ["", "autofocus"],
        disabled: ["", "disabled"],
        readonly: ["", "readonly"],
        required: ["", "required"],
        wrap: ["soft", "hard"]
      }
    },
    tfoot: s,
    th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"] } },
    thead: s,
    time: { attrs: { datetime: null } },
    title: s,
    tr: s,
    track: {
      attrs: {
        src: null, label: null, "default": null,
        kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
        srclang: langs
      }
    },
    tt: s,
    u: s,
    ul: s,
    "var": s,
    video: {
      attrs: {
        src: null, poster: null, width: null, height: null,
        crossorigin: ["anonymous", "use-credentials"],
        preload: ["auto", "metadata", "none"],
        autoplay: ["", "autoplay"],
        mediagroup: ["movie"],
        muted: ["", "muted"],
        controls: ["", "controls"]
      }
    },
    wbr: s
  };

  var globalAttrs = {
    accesskey: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    "class": null,
    contenteditable: ["true", "false"],
    contextmenu: null,
    dir: ["ltr", "rtl", "auto"],
    draggable: ["true", "false", "auto"],
    dropzone: ["copy", "move", "link", "string:", "file:"],
    hidden: ["hidden"],
    id: null,
    inert: ["inert"],
    itemid: null,
    itemprop: null,
    itemref: null,
    itemscope: ["itemscope"],
    itemtype: null,
    lang: ["en", "es"],
    spellcheck: ["true", "false"],
    style: null,
    tabindex: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    title: null,
    translate: ["yes", "no"],
    onclick: null,
    rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"]
  };
  function populate(obj) {
    for (var attr in globalAttrs) if (globalAttrs.hasOwnProperty(attr))
      obj.attrs[attr] = globalAttrs[attr];
  }

  populate(s);
  for (var tag in data) if (data.hasOwnProperty(tag) && data[tag] != s)
    populate(data[tag]);
  
  var selectors = {
      "*": {
        "!doc": "The universal selector, written as a CSS qualified name [CSS3NAMESPACE] with an asterisk (* U+002A) as the local name, represents the qualified name of any element type.",
        "!url": "http://www.w3.org/TR/css3-selectors/#universal-selector"
      },
      ":link": {
        "!doc": "The :link pseudo-class applies to links that have not yet been visited.",
        "!url": "http://www.w3.org/TR/css3-selectors/#the-link-pseudo-classes-link-and-visited"
      },
      ":visited": {
        "!doc": "The :visited pseudo-class applies once the link has been visited by the user.",
        "!url": "http://www.w3.org/TR/css3-selectors/#the-link-pseudo-classes-link-and-visited"
      },
      ":hover": {
        "!doc": "The :hover pseudo-class applies while the user designates an element with a pointing device, but does not necessarily activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element. User agents not that do not support interactive media do not have to support this pseudo-class. Some conforming user agents that support interactive media may not be able to support this pseudo-class (e.g., a pen device that does not detect hovering).",
        "!url": "http://www.w3.org/TR/css3-selectors/#the-user-action-pseudo-classes-hover-act"
      },
      ":active": {
        "!doc": "The :active pseudo-class applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it. On systems with more than one mouse button, :active applies only to the primary or primary activation button (typically the 'left' mouse button), and any aliases thereof.",
        "!url": "http://www.w3.org/TR/css3-selectors/#the-user-action-pseudo-classes-hover-act"
      },
      ":focus": {
        "!doc": "The :focus pseudo-class applies while an element has the focus (accepts keyboard or mouse events, or other forms of input).",
        "!url": "http://www.w3.org/TR/css3-selectors/#the-user-action-pseudo-classes-hover-act"
      }
  }
})