(function (root, mod) {
  if (typeof exports == 'object' && typeof module == 'object') // CommonJS
    return mod(exports, require('tern/lib/infer'), require('tern/lib/tern'),
      require('acorn'), require('sax'), require('csslint').CSSLint)
  if (typeof define == 'function' && define.amd) // AMD
    return define(['exports', 'tern/lib/infer', 'tern/lib/tern', 'acorn/dist/acorn', 'sax' ], mod)
  mod(root, tern, tern, acorn, sax, root.CSSLint ? root.CSSLint : null)
})(this, function (exports, infer, tern, acorn, sax, CSSLint) {
  'use strict'

  var htmlExtensions = {
    'htm': true,
    'html': true,
    'xhtml': true,
    'jsp': true,
    'jsf': true,
    'php': true
  }

  var defaultRules = {
    'UnknownElementId': {'severity': 'warning'},
    'UnknownEventType': {'severity': 'warning'}
  }

  var startsWith = function (s, searchString, position) {
    position = position || 0
    return s.indexOf(searchString, position) === position
  }

  function resolvePath (from, to) {
    if (to[0] === '/')
      return to.slice(1)
    var parts = from.split(/[\\/]/)
    parts.pop()
    parts = parts.concat(to.split(/[\\/]/))
    for (var i = 1; i < parts.length; i++) {
      if (parts[i] == '..') {
        parts.splice(i - 1, 2)
        i -= 2
      }
    }
    return parts.join('/')
  }

  // DOM Document

  function isScriptTag (tagName, scriptTags) {
    for (var i = 0; i < scriptTags.length; i++) {
      if (tagName.toLowerCase() == scriptTags[i]) return true
    }
    return false
  }

  function isScriptEvent (attrName) {
    return startsWith(attrName, 'on')
  }

  function spaces (text, from, to) {
    var spaces = ''
    for (var i = from; i < to; i++) {
      var c = text.charAt(i)
      switch (c) {
        case '\r':
        case '\n':
        case '\t':
          spaces += c
          break
        default:
          spaces += ' '
      }
    }
    return spaces
  }

  var dummyAcornParser = {options: {}}

  var DOMDocument = exports.DOMDocument = function (xml, file, scriptTags, server) {
    var addFile = server !== undefined ? function (path, parentPath) {
      if (!server._browserExtension.resolveFiles || !server._browserExtension.fileExists(path)) return
      server.addFile(path, null, parentPath)
    } : function(_, __) { }
    if (!scriptTags) scriptTags = ['script']
    var ids = this.ids = {}
    var scripts = '', scriptParsing = false, from = 0, to = xml.length,
      parser = sax.parser(true)
    parser.onopentag = function (node) {
      if (isScriptTag(node.name, scriptTags)) {
        if (node.attributes.src != undefined) {
          addFile(resolvePath(file.name, node.attributes.src), file.name)
          return
        }
        scriptParsing = true
        to = this.position
        scripts = scripts + spaces(xml, from, to)
        from = to
        to = xml.length
      } else if (node.name.toLowerCase() == 'link') {
        if (node.attributes.rel == 'import' && node.attributes.href != undefined) {
          addFile(resolvePath(file.name, node.attributes.href), file.name)
        }
      }
    }
    parser.onclosetag = function (tagName) {
      if (isScriptTag(tagName, scriptTags)) {
        scriptParsing = false
        to = this.position
        var endElement = '</' + tagName + '>'
        scripts = scripts + xml.substring(from, to - endElement.length)
        scripts = scripts + spaces(endElement, 0, endElement.length)
        from = to
        to = xml.length
      }
    }
    parser.onattribute = function (attr) {
      var startVal = this.position - attr.value.length - 1, endVal = this.position - 1
      if (attr.name.toLowerCase() == 'id') {
        var originNode = new acorn.Node(dummyAcornParser)
        originNode.start = startVal
        originNode.end = endVal
        originNode.sourceFile = file
        originNode.ownerElement = this.tagName
        ids[attr.value] = originNode
      } else if (isScriptEvent(attr.name)) {
        scripts = scripts + spaces(xml, from, startVal)
        scripts = scripts + attr.value
        from = this.position - 1
        to = xml.length
      }
    }
    parser.write(xml)
    if (from != to) {
      if (scriptParsing) {
        scripts = scripts + xml.substring(from, to)
      } else {
        scripts = scripts + spaces(xml, from, to)
      }
    }
    this.scripts = scripts

  }

  function getHTMLElementName (tagName) {
    return 'HTML' + tagName.substring(0, 1).toUpperCase() + tagName.substring(1, tagName.length) + 'Element'
  }

  // Custom tern function

  function createElement (tagName) {
    if (!tagName || tagName.length < 1) return new infer.Obj(infer.def.parsePath('HTMLElement.prototype'))
    var cx = infer.cx(), server = cx.parent, name = getHTMLElementName(tagName),
      locals = infer.def.parsePath(name + '.prototype')
    if (locals && locals != infer.ANull) return new infer.Obj(locals)
    return createElement()
  }

  infer.registerFunction('Browser_getElementById', function (_self, args, argNodes) {
    if (!argNodes || !argNodes.length || argNodes[0].type != 'Literal' || typeof argNodes[0].value != 'string' || !(argNodes[0].sourceFile && argNodes[0].sourceFile.dom))
      return createElement()
    var cx = infer.cx(), id = argNodes[0].value, dom = argNodes[0].sourceFile.dom, attr = dom.ids[id]
    argNodes[0].elementId = true
    if (attr) {
      argNodes[0].dom = attr
      return createElement(attr.ownerElement)
    }
    return createElement()
  })

  infer.registerFunction('Browser_createElement', function (_self, args, argNodes) {
    if (!argNodes || !argNodes.length || argNodes[0].type != 'Literal' || typeof argNodes[0].value != 'string')
      return createElement()
    return createElement(argNodes[0].value)
  })

  infer.registerFunction('Browser_querySelector', function (argN) {
    return function (self, args, argNodes) {
      if (!argNodes || !argNodes.length || argNodes[argN].type != 'Literal' || typeof argNodes[argN].value != 'string' || !(argNodes[argN].sourceFile && argNodes[argN].sourceFile.dom)) {
        return
      }
      argNodes[argN].cssselectors = true
    }
  })

  infer.registerFunction('Browser_eventType', function (argN) {
    return function (self, args, argNodes) {
      if (!argNodes || !argNodes.length || argNodes[argN].type != 'Literal' || typeof argNodes[argN].value != 'string') {
        return
      }
      argNodes[argN].eventType = events[argNodes[argN].value]
      argNodes[argN].eventTypable = true
    }
  })
  
  // Plugin

  tern.registerPlugin('browser-extension', function (server, options) {
    server._browserExtension = {
      scriptTags: (options && options.scriptTags) ? options.scriptTags : ['script'],
      resolveFiles: options.resolveFiles || true,
      fileExists: (typeof exports == 'object' && typeof module == 'object') ? require('fs').existsSync : function (_) { return true }
    }
    registerLints()
    return {passes: {
        preLoadDef: preLoadDef,
        preParse: preParse,
        typeAt: findTypeAt,
        completion: findCompletions
    }}
  })

  // Lint

  function registerLints () {
    if (!tern.registerLint) return

    // validate document.addEventListener
    tern.registerLint('Browser_validateEventType', function (node, addMessage, getRule) {
      var argNode = node.arguments[0]
      if (argNode && !argNode.eventType) {
        addMessage(argNode, "Unknown event '" + argNode.value + "'", defaultRules.UnknownEventType.severity)
      }
    })
    
    // validate document.getElementById
    tern.registerLint('Browser_validateElementId', function (node, addMessage, getRule) {
      var argNode = node.arguments[0]
      if (argNode && !argNode.dom) {
        addMessage(argNode, "Unknown element id '" + argNode.value + "'", defaultRules.UnknownElementId.severity)
      }
    })

    // validate Element#querySelector/Element#queryAllSelector
    tern.registerLint('Browser_validateCSSSelectors', function (node, addMessage, getRule) {
      var argNode = node.arguments[0]
      if (!argNode || argNode.type != 'Literal' || typeof argNode.value != 'string') {
        return
      }
      if (!CSSLint) return
      var rule = getRule('InvalidArgument')
      if (!rule) return
      var result = CSSLint.verify(argNode.value + '{}', { ids: 0, 'check-ids': 1})
      if (result) {
        if (result.messages.length > 0) {
          // validate syntax of CSS selector
          for (var i = 0; i < result.messages.length; i++) {
            var message = result.messages[i], startCol = message.col - 1, endCol = message.col
            var n = {start: argNode.start + startCol, end: argNode.start + endCol}
            addMessage(n, "Invalid CSS selectors '" + argNode.value + "': " + message.message, rule.severity, startCol, endCol)
          }
        }
        // validate existing of CSS#ID
        var ids = result.stats['_elements']
        if (ids) {
          for (var i = 0; i < ids.length; i++) {
            var modifier = ids[i], id = modifier.text, attr = getAttr(argNode, id.slice(1, id.length))
            if (!attr) {
              var n = {start: argNode.start + modifier.col, end: argNode.start + modifier.col + modifier.text.length}
              addMessage(n, "Unknown element id '" + id + "'", defaultRules.UnknownElementId.severity)
            }
          }
        }
      }
    })

    if (CSSLint) {
      CSSLint.addRule({
        // rule information
        id: 'check-ids',
        name: 'Check existing of IDs in selectors',
        desc: 'Check existing of IDs in selectors',
        browsers: 'All',

        // initialization
        init: function (parser, reporter) {
          var rule = this
          parser.addListener('startrule', function (event) {
            var selectors = event.selectors,
              selector,
              part,
              modifier,
              idCount,
              i, j, k

            for (i = 0; i < selectors.length; i++) {
              selector = selectors[i]
              idCount = 0

              for (j = 0; j < selector.parts.length; j++) {
                part = selector.parts[j]
                if (part.type == parser.SELECTOR_PART_TYPE) {
                  for (k = 0; k < part.modifiers.length; k++) {
                    modifier = part.modifiers[k]
                    if (modifier.type == 'id') {
                      var id = modifier.text
                      var ids = reporter.stats['_elements']
                      if (!ids) {
                        ids = []
                        reporter.stat('_elements', ids)
                      }
                      ids.push(modifier)
                    }
                  }
                }
              }
            }

          })
        }

      })
    }
  }

  // Pre load def : implementation to override getElementById an dcreateElement !type

  function eventType(elt) {
    elt['!effects'] = ['custom Browser_eventType 0']
    elt['!data'] = {'!lint': 'Browser_validateEventType'}
  }
  
  function preLoadDef (data) {
    var cx = infer.cx()
    if (data['!name'] == 'browser') {
      // Override Document#getElementById !type
      var getElementById = data['Document']['prototype']['getElementById']
      getElementById['!type'] = 'fn(id: string) -> !custom:Browser_getElementById'
      getElementById['!data'] = {'!lint': 'Browser_validateElementId'}
      // Override Document#createElement !type
      var createElement = data['Document']['prototype']['createElement']
      createElement['!type'] = 'fn(tagName: string) -> !custom:Browser_createElement'
      // Add Element#querySelector !effects
      var querySelector = data['Element']['prototype']['querySelector']
      querySelector['!effects'] = ['custom Browser_querySelector 0']
      querySelector['!data'] = {'!lint': 'Browser_validateCSSSelectors'}
      // Add Element#querySelector !effects
      var querySelectorAll = data['Element']['prototype']['querySelectorAll']
      querySelectorAll['!effects'] = ['custom Browser_querySelector 0']
      querySelectorAll['!data'] = {'!lint': 'Browser_validateCSSSelectors'}
      // Add Document#addEventListener/removeListener !effects
      eventType(data['addEventListener'])      
      eventType(data['removeEventListener'])
      eventType(data['Node']['prototype']['addEventListener'])      
      eventType(data['Node']['prototype']['removeEventListener'])
      eventType(data['Event']['prototype']['initEvent'])
    }
  }

  // Pre parse

  function isHTML (file) {
    var name = file.name
    if (name == '[doc]') return true
    var index = name.lastIndexOf('.')
    return index != -1 && htmlExtensions[name.substring(index + 1, name.length)] == true
  }

  function preParse (text, options) {
    var file = options.directSourceFile
    if (!isHTML(file)) return
    var cx = infer.cx(), server = cx.parent, scriptTags = server._browserExtension.scriptTags
    var dom = file.dom = new DOMDocument(text, file, scriptTags, server)
    return dom.scripts
  }

  function getAttr (node, id) {
    var dom = node.sourceFile.dom
    return dom ? dom.ids[id] : null
  }
  // Find type at

  function findTypeAt (_file, _pos, expr, type) {
    if (!expr) return type
    var isStringLiteral = expr.node.type === 'Literal' &&
      typeof expr.node.value === 'string'

    if (isStringLiteral) {
      var attr = null
      if (!!expr.node.dom) {
        attr = expr.node.dom
      } else if (!!expr.node.eventType) {
        var eventType = expr.node.eventType
        type = Object.create(type)
        type.doc = eventType['!doc']
        type.url = eventType['!url']        
        type.origin = "browser-extension"
      } else if (expr.node.cssselectors == true) {
        var text = _file.text, wordStart = _pos, wordEnd = _pos
        while (wordStart && acorn.isIdentifierChar(text.charCodeAt(wordStart - 1))) --wordStart
        while (wordEnd < text.length && acorn.isIdentifierChar(text.charCodeAt(wordEnd))) ++wordEnd
        var id = text.slice(wordStart, wordEnd)
        attr = getAttr(expr.node, id)
      }
      if (attr) {
        // The `type` is a value shared for all string literals.
        // We must create a copy before modifying `origin` and `originNode`.
        // Otherwise all string literals would point to the last jump location
        type = Object.create(type)
        type.origin = attr.sourceFile.name
        type.originNode = attr
      }
    }

    return type
  }

  // Find completion

  function findCompletions (file, query) {
    var wordStart = tern.resolvePos(file, query.end), wordEnd = wordStart
    var callExpr = infer.findExpressionAround(file.ast, null, wordStart, file.scope, 'CallExpression')
    if (!callExpr) return
    var callNode = callExpr.node
    if (!callNode.callee || callNode.arguments.length < 1) return

    var argNode = findAttrValue(callNode.arguments, wordStart), completionType = getCompletionType(argNode)
    if (!completionType) return

    var fileText = file.text, text = argNode.raw, quote = text.charAt(0)
    if (!completionType.expr) {
      wordStart = argNode.start + 1
      wordEnd = argNode.end - 1
    } else {
      while (wordStart && acorn.isIdentifierChar(fileText.charCodeAt(wordStart - 1))) --wordStart
      if (query.expandWordForward !== false)
        while (wordEnd < fileText.length && acorn.isIdentifierChar(fileText.charCodeAt(wordEnd))) ++wordEnd
    }
    var word = fileText.slice(wordStart, wordEnd),
      before = fileText.slice(argNode.start + 1, wordStart), after = fileText.slice(wordEnd, argNode.end - 1)
    if (after && after.charAt(word.length - 1) == quote)
      after = after.slice(0, word.length - 1)

    var completions = []
    completionType.complete(completions, query, file, word, wordStart)
    if (argNode.end == wordEnd + 1 && file.text.charAt(wordEnd) == quote)
      ++wordEnd
    return {
      start: tern.outputPos(query, file, argNode.start),
      end: tern.outputPos(query, file, argNode.end),
      isProperty: false,
      isObjectKey: false,
      completions: completions.map(function (rec) {
        var name = typeof rec == 'string' ? rec : rec.name
        var string = JSON.stringify(before + name + after)
        if (quote == "'") string = quote + string.slice(1, string.length - 1).replace(/'/g, "\\'") + quote
        if (typeof rec == 'string') return string
        if (!rec.displayName) rec.displayName = name
        rec.name = string
        return rec
      })
    }
  }

  function findAttrValue (argsNode, wordEnd) {
    for (var i = 0; i < argsNode.length; i++) {
      var argNode = argsNode[i]
      if (argNode.type == 'Literal' && typeof argNode.value == 'string' &&
        argNode.start < wordEnd && argNode.end > wordEnd) return argNode
    }
  }

  function getCompletionType (argNode) {
    if (!argNode) return
    if (argNode.elementId) return {
        complete: completeDOMElementIds,
        expr: false
      }
    if (argNode.eventTypable) return {
        complete: completeEventTypes,
        expr: false
      }    
    if (argNode.cssselectors) return {
        complete: completeCSSSelectors,
        expr: true
      }    
  }

  function completeElementIds (completions, query, file, word, withHash, addHash) {
    var cx = infer.cx(), server = cx.parent, dom = file.dom, attrs = dom ? dom.ids : null
    if (!attrs) return
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins

    function maybeSet (obj, prop, val) {
      if (val != null) obj[prop] = val
    }

    function gather (attrs) {
      for (var name in attrs) {
        if (!name) continue
        if (name &&
          !(query.filter !== false && word &&
          (query.caseInsensitive ? name.toLowerCase() : name).indexOf(word) !== 0)) {
          var key = addHash ? '#' + name : name
          var rec = wrapAsObjs ? {name: key} : key
          completions.push(rec)

          if (query.types || query.origins) {
            if (query.types) rec.type = 'Attr'
            if (query.origins)
              maybeSet(rec, 'origin', file.name)
            rec.displayName = withHash ? '#' + name : name
          }
        }
      }
    }

    if (query.caseInsensitive) word = word.toLowerCase()
    gather(attrs)
    return completions
  }

  function completeHTMLElements (completions, query, file, word) {
    var cx = infer.cx(), server = cx.parent, dom = file.dom, attrs = data
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins

    function maybeSet (obj, prop, val) {
      if (val != null) obj[prop] = val
    }

    function gather (attrs) {
      for (var name in attrs) {
        if (!name) continue
        if (name &&
          !(query.filter !== false && word &&
          (query.caseInsensitive ? name.toLowerCase() : name).indexOf(word) !== 0)) {
          var rec = wrapAsObjs ? {name: name} : name
          completions.push(rec)

          if (query.types || query.origins) {
            if (query.types) rec.type = getHTMLElementName(name)
            if (query.origins)
              maybeSet(rec, 'origin', file.name)
          }
        }
      }
    }

    if (query.caseInsensitive) word = word.toLowerCase()
    gather(data)
    return completions
  }

  function completeSelectors (completions, query, file, word) {
    var cx = infer.cx(), server = cx.parent, dom = file.dom
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins

    function maybeSet (obj, prop, val) {
      if (val != null) obj[prop] = val
    }

    function gather (attrs) {
      for (var name in attrs) {
        if (!name) continue
        if (name &&
          !(query.filter !== false && word &&
          (query.caseInsensitive ? name.toLowerCase() : name).indexOf(word) !== 0)) {
          var rec = wrapAsObjs ? {name: name} : name
          completions.push(rec)

          if (query.types || query.origins || query.urls || query.docs) {
            // if (query.types) rec.type = getHTMLElementName(name)
            if (query.origins)
              maybeSet(rec, 'origin', file.name)
            if (query.docs && attrs[name]['!doc']) rec.doc = attrs[name]['!doc']
            if (query.urls && attrs[name]['!url']) rec.url = attrs[name]['!url']
          }
        }
      }
    }

    if (query.caseInsensitive) word = word.toLowerCase()
    gather(selectors)
    return completions
  }

  function completeDOMElementIds (completions, query, file, word) {
    completeElementIds(completions, query, file, word)
  }

  function completeCSSSelectors (completions, query, file, word, wordStart) {
    var hasHash = file.text.charAt(wordStart - 1) == '#'
    completeElementIds(completions, query, file, word, true, !hasHash)
    if (!hasHash) {
      completeHTMLElements(completions, query, file, word)
      completeSelectors(completions, query, file, word)
    }
  }

  function completeEventTypes (completions, query, file, word) {
    var cx = infer.cx(), server = cx.parent, dom = file.dom, attrs = data
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins

    function maybeSet (obj, prop, val) {
      if (val != null) obj[prop] = val
    }

    function gather (attrs) {
      for (var name in attrs) {
        if (!name) continue
        if (name &&
          !(query.filter !== false && word &&
          (query.caseInsensitive ? name.toLowerCase() : name).indexOf(word) !== 0)) {
          var rec = wrapAsObjs ? {name: name} : name
          completions.push(rec)

          if (query.types || query.origins) {
            if (query.types) rec.type = "string"
            if (query.docs && attrs[name]['!doc']) rec.doc = attrs[name]['!doc']
            if (query.urls && attrs[name]['!url']) rec.url = attrs[name]['!url']
            if (query.origins) rec.origin = "browser-extension"
          }
        }
      }
    }

    if (query.caseInsensitive) word = word.toLowerCase()
    gather(events)
    return completions
  }
  
  var langs = 'ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu'.split(' ')
  var targets = ['_blank', '_self', '_top', '_parent']
  var charsets = ['ascii', 'utf-8', 'utf-16', 'latin1', 'latin1']
  var methods = ['get', 'post', 'put', 'delete']
  var encs = ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']
  var media = ['all', 'screen', 'print', 'embossed', 'braille', 'handheld', 'print', 'projection', 'screen', 'tty', 'tv', 'speech',
    '3d-glasses', 'resolution [>][<][=] [X]', 'device-aspect-ratio: X/Y', 'orientation:portrait',
    'orientation:landscape', 'device-height: [X]', 'device-width: [X]']
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
        shape: ['default', 'rect', 'circle', 'poly']
      }
    },
    article: s,
    aside: s,
    audio: {
      attrs: {
        src: null, mediagroup: null,
        crossorigin: ['anonymous', 'use-credentials'],
        preload: ['none', 'metadata', 'auto'],
        autoplay: ['', 'autoplay'],
        loop: ['', 'loop'],
        controls: ['', 'controls']
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
        autofocus: ['', 'autofocus'],
        disabled: ['', 'autofocus'],
        formenctype: encs,
        formmethod: methods,
        formnovalidate: ['', 'novalidate'],
        formtarget: targets,
        type: ['submit', 'reset', 'button']
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
        type: ['command', 'checkbox', 'radio'],
        label: null, icon: null, radiogroup: null, command: null, title: null,
        disabled: ['', 'disabled'],
        checked: ['', 'checked']
      }
    },
    data: { attrs: { value: null } },
    datagrid: { attrs: { disabled: ['', 'disabled'], multiple: ['', 'multiple'] } },
    datalist: { attrs: { data: null } },
    dd: s,
    del: { attrs: { cite: null, datetime: null } },
    details: { attrs: { open: ['', 'open'] } },
    dfn: s,
    dir: s,
    div: s,
    dl: s,
    dt: s,
    em: s,
    embed: { attrs: { src: null, type: null, width: null, height: null } },
    eventsource: { attrs: { src: null } },
    fieldset: { attrs: { disabled: ['', 'disabled'], form: null, name: null } },
    figcaption: s,
    figure: s,
    font: s,
    footer: s,
    form: {
      attrs: {
        action: null, name: null,
        'accept-charset': charsets,
        autocomplete: ['on', 'off'],
        enctype: encs,
        method: methods,
        novalidate: ['', 'novalidate'],
        target: targets
      }
    },
    frame: s,
    frameset: s,
    h1: s, h2: s, h3: s, h4: s, h5: s, h6: s,
    head: {
      attrs: {},
      children: ['title', 'base', 'link', 'style', 'meta', 'script', 'noscript', 'command']
    },
    header: s,
    hgroup: s,
    hr: s,
    html: {
      attrs: { manifest: null },
      children: ['head', 'body']
    },
    i: s,
    iframe: {
      attrs: {
        src: null, srcdoc: null, name: null, width: null, height: null,
        sandbox: ['allow-top-navigation', 'allow-same-origin', 'allow-forms', 'allow-scripts'],
        seamless: ['', 'seamless']
      }
    },
    img: {
      attrs: {
        alt: null, src: null, ismap: null, usemap: null, width: null, height: null,
        crossorigin: ['anonymous', 'use-credentials']
      }
    },
    input: {
      attrs: {
        alt: null, dirname: null, form: null, formaction: null,
        height: null, list: null, max: null, maxlength: null, min: null,
        name: null, pattern: null, placeholder: null, size: null, src: null,
        step: null, value: null, width: null,
        accept: ['audio/*', 'video/*', 'image/*'],
        autocomplete: ['on', 'off'],
        autofocus: ['', 'autofocus'],
        checked: ['', 'checked'],
        disabled: ['', 'disabled'],
        formenctype: encs,
        formmethod: methods,
        formnovalidate: ['', 'novalidate'],
        formtarget: targets,
        multiple: ['', 'multiple'],
        readonly: ['', 'readonly'],
        required: ['', 'required'],
        type: ['hidden', 'text', 'search', 'tel', 'url', 'email', 'password', 'datetime', 'date', 'month',
          'week', 'time', 'datetime-local', 'number', 'range', 'color', 'checkbox', 'radio',
          'file', 'submit', 'image', 'reset', 'button']
      }
    },
    ins: { attrs: { cite: null, datetime: null } },
    kbd: s,
    keygen: {
      attrs: {
        challenge: null, form: null, name: null,
        autofocus: ['', 'autofocus'],
        disabled: ['', 'disabled'],
        keytype: ['RSA']
      }
    },
    label: { attrs: { 'for': null, form: null } },
    legend: s,
    li: { attrs: { value: null } },
    link: {
      attrs: {
        href: null, type: null,
        hreflang: langs,
        media: media,
        sizes: ['all', '16x16', '16x16 32x32', '16x16 32x32 64x64']
      }
    },
    map: { attrs: { name: null } },
    mark: s,
    menu: { attrs: { label: null, type: ['list', 'context', 'toolbar'] } },
    meta: {
      attrs: {
        content: null,
        charset: charsets,
        name: ['viewport', 'application-name', 'author', 'description', 'generator', 'keywords'],
        'http-equiv': ['content-language', 'content-type', 'default-style', 'refresh']
      }
    },
    meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
    nav: s,
    noframes: s,
    noscript: s,
    object: {
      attrs: {
        data: null, type: null, name: null, usemap: null, form: null, width: null, height: null,
        typemustmatch: ['', 'typemustmatch']
      }
    },
    ol: { attrs: { reversed: ['', 'reversed'], start: null, type: ['1', 'a', 'A', 'i', 'I'] } },
    optgroup: { attrs: { disabled: ['', 'disabled'], label: null } },
    option: { attrs: { disabled: ['', 'disabled'], label: null, selected: ['', 'selected'], value: null } },
    output: { attrs: { 'for': null, form: null, name: null } },
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
        type: ['text/javascript'],
        src: null,
        async: ['', 'async'],
        defer: ['', 'defer'],
        charset: charsets
      }
    },
    section: s,
    select: {
      attrs: {
        form: null, name: null, size: null,
        autofocus: ['', 'autofocus'],
        disabled: ['', 'disabled'],
        multiple: ['', 'multiple']
      }
    },
    small: s,
    source: { attrs: { src: null, type: null, media: null } },
    span: s,
    strike: s,
    strong: s,
    style: {
      attrs: {
        type: ['text/css'],
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
        autofocus: ['', 'autofocus'],
        disabled: ['', 'disabled'],
        readonly: ['', 'readonly'],
        required: ['', 'required'],
        wrap: ['soft', 'hard']
      }
    },
    tfoot: s,
    th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ['row', 'col', 'rowgroup', 'colgroup'] } },
    thead: s,
    time: { attrs: { datetime: null } },
    title: s,
    tr: s,
    track: {
      attrs: {
        src: null, label: null, 'default': null,
        kind: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata'],
        srclang: langs
      }
    },
    tt: s,
    u: s,
    ul: s,
    'var': s,
    video: {
      attrs: {
        src: null, poster: null, width: null, height: null,
        crossorigin: ['anonymous', 'use-credentials'],
        preload: ['auto', 'metadata', 'none'],
        autoplay: ['', 'autoplay'],
        mediagroup: ['movie'],
        muted: ['', 'muted'],
        controls: ['', 'controls']
      }
    },
    wbr: s
  }

  var globalAttrs = {
    accesskey: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'class': null,
    contenteditable: ['true', 'false'],
    contextmenu: null,
    dir: ['ltr', 'rtl', 'auto'],
    draggable: ['true', 'false', 'auto'],
    dropzone: ['copy', 'move', 'link', 'string:', 'file:'],
    hidden: ['hidden'],
    id: null,
    inert: ['inert'],
    itemid: null,
    itemprop: null,
    itemref: null,
    itemscope: ['itemscope'],
    itemtype: null,
    lang: ['en', 'es'],
    spellcheck: ['true', 'false'],
    style: null,
    tabindex: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    title: null,
    translate: ['yes', 'no'],
    onclick: null,
    rel: ['stylesheet', 'alternate', 'author', 'bookmark', 'help', 'license', 'next', 'nofollow', 'noreferrer', 'prefetch', 'prev', 'search', 'tag']
  }
  function populate (obj) {
    for (var attr in globalAttrs) if (globalAttrs.hasOwnProperty(attr))
        obj.attrs[attr] = globalAttrs[attr]
  }

  populate(s)
  for (var tag in data) if (data.hasOwnProperty(tag) && data[tag] != s)
      populate(data[tag])

  var selectors = {
    '*': {
      '!doc': 'The universal selector, written as a CSS qualified name [CSS3NAMESPACE] with an asterisk (* U+002A) as the local name, represents the qualified name of any element type.',
      '!url': 'http://www.w3.org/TR/css3-selectors/#universal-selector'
    },
    ':link': {
      '!doc': 'The :link pseudo-class applies to links that have not yet been visited.',
      '!url': 'http://www.w3.org/TR/css3-selectors/#the-link-pseudo-classes-link-and-visited'
    },
    ':visited': {
      '!doc': 'The :visited pseudo-class applies once the link has been visited by the user.',
      '!url': 'http://www.w3.org/TR/css3-selectors/#the-link-pseudo-classes-link-and-visited'
    },
    ':hover': {
      '!doc': 'The :hover pseudo-class applies while the user designates an element with a pointing device, but does not necessarily activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element. User agents not that do not support interactive media do not have to support this pseudo-class. Some conforming user agents that support interactive media may not be able to support this pseudo-class (e.g., a pen device that does not detect hovering).',
      '!url': 'http://www.w3.org/TR/css3-selectors/#the-user-action-pseudo-classes-hover-act'
    },
    ':active': {
      '!doc': "The :active pseudo-class applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it. On systems with more than one mouse button, :active applies only to the primary or primary activation button (typically the 'left' mouse button), and any aliases thereof.",
      '!url': 'http://www.w3.org/TR/css3-selectors/#the-user-action-pseudo-classes-hover-act'
    },
    ':focus': {
      '!doc': 'The :focus pseudo-class applies while an element has the focus (accepts keyboard or mouse events, or other forms of input).',
      '!url': 'http://www.w3.org/TR/css3-selectors/#the-user-action-pseudo-classes-hover-act'
    }
  }
  
  // See https://developer.mozilla.org/docs/Web/Events
  
  var events = {
    'abort': {
      '!doc': 'The abort event is fired when the loading of a resource has been aborted.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/abort'
    },
    'afterprint': {
      '!doc': 'The afterprint event is fired after the associated document has started printing or the print preview has been closed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/afterprint'
    },
    'animationend': {
      '!doc': 'The animationend event is fired when a CSS animation has completed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/animationend'
    },
    'animationiteration': {
      '!doc': 'The animationend event is fired when an iteration of an animation ends. This event does not occur for animations with an animation-iteration-count of one.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/animationiteration'
    },
    'animationstart': {
      '!doc': 'The animationstart event is fired when a CSS animation has started. If there is an animation-delay then this event will fire once the delay period has expired. A negative delay will cause the event to fire with an elapsedTime equal to the absolute value of the delay.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/animationstart'
    },
    'audioprocess': {
      '!doc': 'The audioprocess event is fired when an input buffer of a Web Audio API ScriptProcessorNode is ready to be processed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/audioprocess'
    },
    'beforeprint': {
      '!doc': 'The beforeprint event is fired when the associated document is about to be printed or previewed for printing.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/beforeprint'
    },  
    'beforeunload': {
      '!doc': 'The beforeunload event is fired when the window, the document and its resources are about to be unloaded.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload'
    },    
    'beginEvent': {
      '!doc': 'The beginEvent event is fired when the element local timeline begins to play. It will be raised each time the element begins the active duration (i.e., when it restarts, but not when it repeats). It may be raised both in the course of normal (i.e. scheduled or interactive) timeline play, as well as in the case that the element was begun with a DOM method.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/beginEvent'
    },    
    'blocked': {
      '!doc': 'The blocked handler is executed when an open connection to a database is blocking a versionchange transaction on the same database.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/blocked'
    },    
    'blur': {
      '!doc': 'The blur event is fired when an element has lost focus. The main difference between this event and focusout is that only the latter bubbles.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/blur'
    },    
    'cached': {
      '!doc': 'The cached event is fired when the resources listed in the application cache manifest have been downloaded, and the application is now cached.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/cached'
    },    
    'canplay': {
      '!doc': 'The canplay event is fired when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/canplay'
    },    
    'canplaythrough': {
      '!doc': 'The canplaythrough event is fired when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/canplaythrough'
    },    
    'change': {
      '!doc': "The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user. Unlike the input event, the change event is not necessarily fired for each change to an element's value.",
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/change'
    },    
    'chargingchange': {
      '!doc': 'The chargingchange event is fired when the charging attribute of the battery API has changed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/chargingchange'
    },    
    'chargingtimechange': {
      '!doc': 'The chargingtimechange event is fired when the chargingTime attribute of the battery API has changed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/chargingtimechange'
    },
    'checking': {
      '!doc': 'The checking event is fired when the user agent is checking for an update, or attempting to download the cache manifest for the first time.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/checking'
    },     
    'click': {
      '!doc': 'The click event is fired when a pointing device button (usually a mouse button) is pressed and released on a single element.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/click'
    },     
    'close': {
      '!doc': 'The close handler is executed when a connection with a websocket is closed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/close'
    },     
    'complete': {
      '!doc': 'The complete event is fired when the rendering of an OfflineAudioContext is terminated.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/complete'
    },     
    'compositionend': {
      '!doc': 'The compositionend event is fired when the composition of a passage of text has been completed or cancelled (fires with special characters that require a sequence of keys and other inputs such as speech recognition or word suggestion on mobile).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/compositionend'
    },     
    'compositionstart': {
      '!doc': 'The compositionstart event is fired when the composition of a passage of text is prepared (similar to keydown for a keyboard input, but fires with special characters that require a sequence of keys and other inputs such as speech recognition or word suggestion on mobile).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/compositionstart'
    },     
    'compositionupdate': {
      '!doc': 'The compositionupdate event is fired when a character is added to a passage of text being composed (fires with special characters that require a sequence of keys and other inputs such as speech recognition or word suggestion on mobile).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/compositionupdate'
    },     
    'contextmenu': {
      '!doc': 'The contextmenu event is fired when the right button of the mouse is clicked (before the context menu is displayed), or when the context menu key is pressed (in which case the context menu is displayed at the bottom left of the focused element, unless the element is a tree, in which case the context menu is displayed at the bottom left of the current row).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/contextmenu'
    },     
    'copy': {
      '!doc': 'The copy event is fired when a selection has been added to the clipboard.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/copy'
    },     
    'cut': {
      '!doc': 'The cut event is fired when a selection has been removed from the document and added to the clipboard.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/cut'
    },     
    'dblclick': {
      '!doc': 'The dblclick event is fired when a pointing device button (usually a mouse button) is clicked twice on a single element.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/dblclick'
    },     
    'devicelight': {
      '!doc': 'The devicelight event is fired when fresh data is available from a light sensor.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/devicelight'
    },     
    'devicemotion': {
      '!doc': 'The devicemotion event is fired at a regular interval and indicates the amount of physical force of acceleration the device is receiving at that time. It also provides information about the rate of rotation, if available.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion'
    },     
    'deviceorientation': {
      '!doc': 'The deviceorientation event is fired when fresh data is available from an orientation sensor about the current orientation of the device as compared to the Earth coordinate frame. This data is gathered from a magnetometer inside the device.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation'
    },     
    'deviceproximity': {
      '!doc': 'The deviceproximity event is fired when fresh data is available from a proximity sensor.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/deviceproximity'
    },     
    'dischargingtimechange': {
      '!doc': 'The dischargingtimechange event is fired when the dischargingTime attribute of the battery API has changed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/dischargingtimechange'
    },     
    'DOMContentLoaded': {
      '!doc': 'The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. A very different event - load - should be used only to detect a fully-loaded page. It is an incredibly popular mistake for people to use load where DOMContentLoaded would be much more appropriate, so be cautious.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded'
    },     
    'downloading': {
      '!doc': 'The downloading event is fired after checking for an application cache update, if the user agent has found an update and is fetching it, or is downloading the resources listed by the cache manifest for the first time.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/downloading'
    },     
    'drag': {
      '!doc': 'The drag event is fired when an element or text selection is being dragged (every few hundred milliseconds).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/drag'
    },     
    'dragend': {
      '!doc': 'The dragend event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/dragend'
    },     
    'dragenter': {
      '!doc': 'The dragenter event is fired when a dragged element or text selection enters a valid drop target.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/dragenter'
    },     
    'dragleave': {
      '!doc': 'The dragleave event is fired when a dragged element or text selection leaves a valid drop target.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/dragleave'
    },     
    'dragover': {
      '!doc': 'The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/dragover'
    },     
    'dragstart': {
      '!doc': 'The dragstart event is fired when the user starts dragging an element or text selection.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/dragstart'
    },     
    'drop': {
      '!doc': 'The drop event is fired when an element or text selection is dropped on a valid drop target.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/drop'
    },     
    'durationchange': {
      '!doc': 'The durationchange event is fired when the duration attribute has been updated.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/durationchange'
    },
    'emptied': {
      '!doc': 'The emptied event is fired when the media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/emptied'
    },
    'ended': {
      '!doc': 'The ended event is fired when playback has stopped because the end of the media was reached.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/ended'
    },
    'endEvent': {
      '!doc': 'The endEvent event is fired when at the active end of the element is reached. Note that this event is not raised at the simple end of each repeat. This event may be raised both in the course of normal (i.e. scheduled or interactive) timeline play, as well as in the case that the element was ended with a DOM method.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/endEvent'
    },     
    'error': {
      '!doc': 'The error event is fired when a resource failed to load.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/error'
    },         
    'focus': {
      '!doc': 'The focus event is fired when an element has received focus. The main difference between this event and focusin is that only the latter bubbles.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/focus'
    },     
    'fullscreenchange': {
      '!doc': 'The fullscreenchange event is fired when the browser is switched to/out-of fullscreen mode.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/fullscreenchange'
    },     
    'fullscreenerror': {
      '!doc': 'The fullscreenerror event is fired when the browser cannot switch to fullscreen mode.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/fullscreenerror'
    },     
    'gampadconnected': {
      '!doc': 'The gampadconnected event is fired when the browser detects that a gamepad has been connected or the first time a buttuon/axis of the gamepad is used.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/gampadconnected'
    },     
    'gampaddisconnected': {
      '!doc': 'The gampaddisconnected event is fired when the browser detects that a gamepad has been disconnected.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/gampaddisconnected'
    },     
    'hashchange': {
      '!doc': 'The hashchange event is fired when the fragment identifier of the URL has changed (the part of the URL that follows the # symbol, including the # symbol).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/hashchange'
    },     
    'input': {
      '!doc': "The DOM input event is fired synchronously when the value of an <input> or <textarea> element is changed. Additionally, it fires on contenteditable editors when its contents are changed. In this case, the event target is the editing host element. If there are two or more elements which have contenteditable as true, 'editing host' is the nearest ancestor element whose parent isn't editable. Similarly, it's also fired on root element of designMode editors.",
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/input'
    },     
    'invalid': {
      '!doc': "The invalid event is fired when a submittable element has been checked and doesn't satisfy its constraints. The validity of submittable elements is checked before submitting their owner form, or after the checkValidity() of the element or its owner form is called.",
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/invalid'
    },     
    'keydown': {
      '!doc': 'The keydown event is fired when a key is pressed down.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/keydown'
    },     
    'keypress': {
      '!doc': 'The keypress event is fired when a key is pressed down and that key normally produces a character value (use input instead).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/keypress'
    },     
    'keyup': {
      '!doc': 'The keyup event is fired when a key is released.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/keyup'
    },     
    'levelchange': {
      '!doc': 'The levelchange event is fired when the level attribute of the battery API has changed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/levelchange'
    },     
    'load': {
      '!doc': 'The load event is fired when a resource and its dependent resources have finished loading.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/load'
    },     
    'loadeddata': {
      '!doc': 'The loadeddata event is fired when the first frame of the media has finished loading.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/loadeddata'
    },     
    'loadend': {
      '!doc': 'The loadend event is fired when progression has stopped (after "error", "abort" or "load" have been dispatched).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/loadend'
    },     
    'loadstart': {
      '!doc': 'The loadstart event is fired when progress has begun.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/loadstart'
    },     
    'message': {
      '!doc': 'The message handler is executed when data is received through a websocket.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/message_websocket'
    },     
    'mousedown': {
      '!doc': 'The mousedown event is fired when a pointing device button (usually a mouse button) is pressed on an element.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/mousedown'
    },     
    'mouseenter': {
      '!doc': 'The mouseenter event is fired when a pointing device (usually a mouse) is moved over the element that has the listener attached.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter'
    },     
    'mouseleave': {
      '!doc': 'The mouseleave event is fired when a pointing device (usually a mouse) is moved off the element that has the listener attached.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave'
    },     
    'mousemove': {
      '!doc': 'The mousemove event is fired when a pointing device (usually a mouse) is moved while over an element.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/mousemove'
    },     
    'mouseout': {
      '!doc': 'The mouseout event is fired when a pointing device (usually a mouse) is moved off the element that has the listener attached or off one of its children.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/mouseout'
    },     
    'mouseover': {
      '!doc': 'The mouseover event is fired when a pointing device is moved onto the element that has the listener attached or onto one of its children.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/mouseover'
    },     
    'mouseup': {
      '!doc': 'The mouseup event is fired when a pointing device button (usually a mouse button) is released over an element.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/mouseup'
    },     
    'noupdate': {
      '!doc': "The noupdate event is fired after checking for an application cache update, if the manifest hasn't changed.",
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/noupdate'
    },     
    'obsolete': {
      '!doc': 'The obsolete event is fired when the manifest was found to have become a 404 or 410 page, so the application cache is being deleted.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/obsolete'
    },     
    'offline': {
      '!doc': 'The offline event is fired when the browser has lost access to the network and the value of navigator.onLine switched to false.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/offline'
    },     
    'online': {
      '!doc': 'The online event is fired when the browser has gained access to the network and the value of navigator.onLine switched to true.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/online'
    },     
    'open': {
      '!doc': 'The open handler is executed when a connection with a websocket is opened.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/open_websocket'
    },     
    'orientationchange': {
      '!doc': 'The orientationchange event is fired when the orientation of the device has changed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/orientationchange'
    },     
    'pagehide': {
      '!doc': 'The pagehide event is fired when a session history entry is being traversed from.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/pagehide'
    },     
    'pageshow': {
      '!doc': 'The pageshow event is fired when a session history entry is being traversed to. (This includes back/forward as well as initial page-showing after the onload event.)',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/pageshow'
    },     
    'paste': {
      '!doc': 'The paste event is fired when a selection has been pasted from the clipboard to the document.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/paste'
    },     
    'pause': {
      '!doc': 'The pause event is fired when playback has been paused.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/pause'
    },     
    'pointerlockchange': {
      '!doc': 'The pointerlockchange event is fired when the pointer is locked/unlocked.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/pointerlockchange'
    },     
    'pointerlockerror': {
      '!doc': 'The pointerlockerror event is fired when locking the pointer failed (for technical reasons or because the permission was denied).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/pointerlockerror'
    },     
    'play': {
      '!doc': 'The play event is fired when playback has begun.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/play'
    },     
    'playing': {
      '!doc': 'The playing event is fired when playback is ready to start after having been paused or delayed due to lack of data.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/playing'
    },     
    'popstate': {
      '!doc': "The popstate event is fired when the active history entry changes. If the history entry being activated was created by a call to history.pushState() or was affected by a call to history.replaceState(), the popstate event's state property contains a copy of the history entry's state object.",
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/popstate'
    },     
    'progress': {
      '!doc': 'The progress event is fired to indicate that an operation is in progress.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/progress'
    },     
    'ratechange': {
      '!doc': 'The ratechange event is fired when the playback rate has changed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/ratechange'
    },     
    'readystatechange': {
      '!doc': 'The readystatechange event is fired when the readyState attribute of a document has changed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/readystatechange'
    },     
    'repeatEvent': {
      '!doc': 'The repeatEvent event is fired when the element local timeline repeats. It will be raised each time the element repeats, after the first iteration. Associated with the repeat event is an integer that indicates which repeat iteration is beginning. The value is a 0-based integer, but the repeat event is not raised for the first iteration and so the observed values will be >= 1.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/compositionend'
    },     
    'reset': {
      '!doc': 'The reset event is fired when a form is reset.The reset event is fired when a form is reset.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/reset'
    },     
    'resize': {
      '!doc': 'The resize event is fired when the document view has been resized.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/resize'
    },     
    'scroll': {
      '!doc': 'The scroll event is fired when the document view or an element has been scrolled.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/scroll'
    },     
    'seeked': {
      '!doc': 'The seeked event is fired when a seek operation completed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/seeked'
    },     
    'seeking': {
      '!doc': 'The seeking event is fired when a seek operation began.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/seeking'
    },     
    'select': {
      '!doc': 'The select event is fired when some text is being selected. The event might not be available for all elements in all languages. For example, in [HTML5],  select events can be dispatched only on form input and textarea elements.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/select'
    },     
    'show': {
      '!doc': 'The show event is fired when a contextmenu event was fired on/bubbled to an element that has a contextmenu attribute.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/show'
    },     
    'stalled': {
      '!doc': 'The stalled event is fired when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/stalled'
    },     
    'storage': {
      '!doc': 'The storage event is fired when a storage area (localStorage or sessionStorage) has been modified. See Web Storage API for more information.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/storage'
    },         
    'submit': {
      '!doc': 'The submit event is fired when a form is submitted. Note that submit is fired only on the form element, not the button or submit input. (Forms are submitted, not buttons.)',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/submit'
    },     
    'success': {
      '!doc': 'The success handler is executed when a request succeed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/success'
    },     
    'suspend': {
      '!doc': 'The suspend event is fired when media data loading has been suspended.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/suspend'
    },     
    'SVGAbort': {
      '!doc': 'The SVGAbort event is fired when page loading is stopped before an element has been allowed to load completely.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/SVGAbort'
    },     
    'SVGError': {
      '!doc': 'The SVGError event is fired when an element does not load properly or when an error occurs during script execution.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/SVGError'
    },     
    'SVGLoad': {
      '!doc': 'The SVGLoad event is fired when the user agent has fully parsed the element and its descendants and is ready to act appropriately upon that element, such as being ready to render the element to the target device. Referenced external resources that are required must be loaded, parsed and ready to render before the event is triggered. Optional external resources are not required to be ready for the event to be triggered.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/SVGLoad'
    },     
    'SVGResize': {
      '!doc': 'The SVGResize event is fired when a document view is being resized. This event is only applicable to outermost SVG elements and is dispatched after the resize operation has taken place. The target of the event is the <svg> element.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/SVGResize'
    },     
    'SVGScroll': {
      '!doc': 'The SVGScroll event is fired when a document view is being shifted along the X or Y or both axis, either through a direct user interaction or any change on the currentTranslate property available on <svg> interface. This event is only applicable to outermost svg elements and is dispatched after the shift modification has taken place. The target of the event is the <svg> element.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/SVGScroll'
    },     
    'SVGUnload': {
      '!doc': 'The SVGUnload event is fired when the DOM implementation removes a document from a window or frame.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/SVGUnload'
    },     
    'SVGZoom': {
      '!doc': 'The SVGZoom event is fired when the zoom level of a document view is being changed, either through a direct user interaction or any change to the currentScale property available on the <svg> element interface. This event is only applicable to outermost svg elements and is dispatched after the zoom level modification has taken place. The target of the event is the <svg> element.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/SVGZoom'
    },     
    'timeout': {
      '!doc': '',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/timeout'
    },     
    'timeupdate': {
      '!doc': 'The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/timeupdate'
    },     
    'touchcancel': {
      '!doc': 'The touchcancel event is fired when a touch point has been disrupted in an implementation-specific manner (too many touch points for example).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/touchcancel'
    },     
    'touchend': {
      '!doc': 'The touchend event is fired when a touch point is removed from the touch surface.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/touchend'
    },     
    'touchenter': {
      '!doc': 'The touchenter event is fired when a touch point is moved onto the interactive area of an element.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/touchenter'
    },     
    'touchleave': {
      '!doc': 'The touchleave event is fired when a touch point is moved off the interactive area of an element.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/touchleave'
    },     
    'touchmove': {
      '!doc': 'The touchmove event is fired when a touch point is moved along the touch surface.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/touchmove'
    },     
    'touchstart': {
      '!doc': 'The touchstart event is fired when a touch point is placed on the touch surface.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/touchstart'
    },     
    'transitionend': {
      '!doc': 'The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed, then the event will not fire. The event will also not fire if the animated element becomes display: none before the transition fully completes.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/transitionend'
    },     
    'unload': {
      '!doc': 'The unload event is fired when the document or a child resource is being unloaded.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/unload'
    },     
    'updateready': {
      '!doc': 'The updateready event is fired when the resources listed in the application cache manifest have been newly redownloaded, and the script can use swapCache() to switch to the new cache.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/updateready'
    },     
    'upgradeneeded': {
      '!doc': 'The upgradeneeded handler is executed when an attempt was made to open a database with a version number higher than its current version.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/upgradeneeded'
    },     
    'userproximity': {
      '!doc': 'The userproximity event is fired when fresh data is available from a proximity sensor (indicates whether the nearby object is near the device or not).',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/userproximity'
    },     
    'versionchange': {
      '!doc': 'The versionchange handler is executed when a versionchange transaction completed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/versionchange'
    },     
    'visibilitychange': {
      '!doc': 'The visibilitychange event is fired when the content of a tab has become visible or has been hidden.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/visibilitychange'
    },     
    'volumechange': {
      '!doc': 'The volumechange event is fired when the volume has changed.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/volumechange'
    },     
    'waiting': {
      '!doc': 'The waiting event is fired when playback has stopped because of a temporary lack of data.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/waiting'
    },     
    'wheel': {
      '!doc': 'The wheel event is fired when a wheel button of a pointing device (usually a mouse) is rotated. This event replaces the non-standard deprecated mousewheel event.',
      '!url': 'https://developer.mozilla.org/en-US/docs/Web/Events/wheel'
    }     
  }
  
})
