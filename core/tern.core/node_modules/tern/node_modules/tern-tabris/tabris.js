(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  var defaultRules = {
    "UnknownTabrisType" : {"severity" : "error"},
    "UnknownTabrisProperty" : {"severity" : "error"},
    "UnknownTabrisEvent" : {"severity" : "error"}
  };
  
  if (tern.registerLint) {
    
    // validate tabris.create(
    tern.registerLint("tabrisCreate_lint", function(node, addMessage, getRule) {
      var argNode = node.arguments[0];
      if (argNode) {
        var cx = infer.cx(), types = cx.definitions.tabris["!types"], typeName = argNode.value;
        if (!types.hasProp(typeName)) addMessage(argNode, "Unknown tabris type '" + typeName + "'", defaultRules.UnknownTabrisType.severity);
      }
    });
    
    // validate widget.get(    
    tern.registerLint("tabrisGet_lint", function(node, addMessage, getRule) {
      var argNode = node.arguments[0];
      if (argNode) {
        var cx = infer.cx(), proxyType = argNode._tabris && argNode._tabris.proxyType, propertyName = argNode.value;
        if (!getPropertyType(proxyType, propertyName)) addMessage(argNode, "Unknown tabris property '" + propertyName + "'", defaultRules.UnknownTabrisProperty.severity);
      }
    });

    // validate on, off, trigger event(    
    tern.registerLint("tabrisEvent_lint", function(node, addMessage, getRule) {
      var argNode = node.arguments[0];
      if (argNode) {
        var cx = infer.cx(), proxyType = argNode._tabris && argNode._tabris.proxyType, eventName = argNode.value;
        if (!getEventType(proxyType, eventName)) addMessage(argNode, "Unknown tabris event '" + eventName + "'", defaultRules.UnknownTabrisEvent.severity);
      }
    });
    
  }     
  
  // tabris.create(
  
  infer.registerFunction("tabris_create", function(_self, args, argNodes) {
    if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
      return infer.ANull;
    var cx = infer.cx(), server = cx.parent, name = argNodes[0].value, locals = cx.definitions.tabris["!types"], tabrisType = locals.hasProp(name);
    argNodes[0]._tabris = {"type" : "tabris_create"};
    if (tabrisType) return new infer.Obj(tabrisType.getType().getProp("prototype").getType());    
    return infer.ANull;
  });

  // widget.get(
  
  function getObjectProperties(proto) {
    var cx = infer.cx(), locals = cx.definitions.tabris;    
    var objectName = proto.name, index = objectName.indexOf("!types.");
    if (index == 0) objectName = objectName.substring("!types.".length, objectName.length);
    objectName = objectName.substring(0, proto.name.indexOf('.')) + 'Properties';
    return locals["!properties"].hasProp(objectName);
  }
  
  function getPropertyType(widgetType, propertyName) {
    if (!(widgetType)) return null;
    var proto = widgetType.proto, propertyType = null;
    while(proto) {
      var objectType = getObjectProperties(proto);
      if (objectType && objectType.getType) propertyType = objectType.getType().hasProp(propertyName)
      if (propertyType) return propertyType;
      proto = proto.proto;
    }
    return null;
  }
  
  infer.registerFunction("tabris_Proxy_get", function(_self, args, argNodes) {
    if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
      return infer.ANull;
	  
    var widgetType = _self.getType(), propertyName = argNodes[0].value, propertyType = getPropertyType(widgetType, propertyName);
    argNodes[0]._tabris = {"type" : "tabris_Proxy_get", "proxyType" : widgetType};
    if (propertyType) return propertyType.getType();
    return infer.ANull;
  });

  // widget.on(
  
  function getEventProperties(proto) {
    var cx = infer.cx(), locals = cx.definitions.tabris;    
    var objectName = proto.name, index = objectName.indexOf("!types.");
    if (index == 0) objectName = objectName.substring("!types.".length, objectName.length);
    objectName = objectName.substring(0, proto.name.indexOf('.')) + 'Events';
    return locals["!events"].hasProp(objectName);
  }
  
  function getEventType(widgetType, eventName) {
    if (!(widgetType)) return null;
    var proto = widgetType.proto, eventType = null;
    while(proto) {
      var objectType = getEventProperties(proto);
      if (objectType && objectType.getType) eventType = objectType.getType().hasProp(eventName)
      if (eventType) return eventType;
      proto = proto.proto;
    }
    return null;
  }
  
  infer.registerFunction("tabris_Proxy_eventtype", function(_self, args, argNodes) {
    if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
      return infer.ANull;
    
    var proxyType = _self.getType();
    argNodes[0]._tabris = {"type" : "tabris_Proxy_eventtype", "proxyType" : proxyType};
  });
  
  tern.registerPlugin("tabris", function(server, options) {    
    return {defs: defs,
      passes: {completion: completion}};
  });
  
  function completion(file, query) {       
    function getQuote(c) {
      return c === '\'' || c === '"' ? c : null; 
    }
    
    if (!query.end) return; // remove this line, once tern will be released
    
    var wordPos = resolvePos(file, query.end);
    var word = null, completions = [];
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins;
    var cx = infer.cx(), overrideType = null;
    
    function gather(prop, obj, depth, addInfo) {
      // 'hasOwnProperty' and such are usually just noise, leave them
      // out when no prefix is provided.
      if (obj == cx.protos.Object && !word) return;
      if (query.filter !== false && word &&
          (query.caseInsensitive ? prop.toLowerCase() : prop).indexOf(word) !== 0) return;
      for (var i = 0; i < completions.length; ++i) {
        var c = completions[i];
        if ((wrapAsObjs ? c.name : c) == prop) return;
      }
      var rec = wrapAsObjs ? {name: prop} : prop;
      completions.push(rec);

      if (obj && (query.types || query.docs || query.urls || query.origins)) {
        var val = obj.props[prop];
        infer.resetGuessing();
        var type = val.getType();
        rec.guess = infer.didGuess();
        if (query.types)
          rec.type = overrideType != null ? overrideType : infer.toString(type);
        if (query.docs)
          maybeSet(rec, "doc", val.doc || type && type.doc);
        if (query.urls)
          maybeSet(rec, "url", val.url || type && type.url);
        if (query.origins)
          maybeSet(rec, "origin", val.origin || type && type.origin);
      }
      if (query.depths) rec.depth = depth;
      if (wrapAsObjs && addInfo) addInfo(rec);
    }
    
    var callExpr = infer.findExpressionAround(file.ast, null, wordPos, file.scope, "CallExpression");
    if (callExpr && callExpr.node.arguments && callExpr.node.arguments.length && callExpr.node.arguments.length > 0) {
      var nodeArg = callExpr.node.arguments[0];
      if (nodeArg._tabris) {
        var startQuote = getQuote(nodeArg.raw.charAt(0)), endQuote = getQuote(nodeArg.raw.length > 1 ? nodeArg.raw.charAt(nodeArg.raw.length - 1) : null);  
        var wordEnd = endQuote != null ? nodeArg.end - 1: nodeArg.end, wordStart = startQuote != null ? nodeArg.start + 1: nodeArg.start,    
        word = nodeArg.value.slice(0, nodeArg.value.length - (wordEnd - wordPos));
        if (query.caseInsensitive) word = word.toLowerCase();
        
        switch(nodeArg._tabris.type) {
          case "tabris_Proxy_get":
            var widgetType = nodeArg._tabris.proxyType, proto = widgetType.proto, propertyType = null;
            while(proto) {
              var objType = getObjectProperties(proto);
              if (objType) infer.forAllPropertiesOf(objType, gather);
              proto = proto.proto;
            }
            break;
          case "tabris_Proxy_eventtype":
            var widgetType = nodeArg._tabris.proxyType, proto = widgetType.proto, propertyType = null;
            while(proto) {
              var objType = getEventProperties(proto);
              if (objType) infer.forAllPropertiesOf(objType, gather);
              proto = proto.proto;
            }
            break;                        
          case "tabris_create":
            var types = cx.definitions.tabris["!types"];
            overrideType = "string";
            infer.forAllPropertiesOf(types, gather);
            break;            
        }

        return {start: outputPos(query, file, wordStart),
          end: outputPos(query, file, wordEnd),
          isProperty: false,
          isStringAround: true,
          startQuote: startQuote,
          endQuote: endQuote,
          completions: completions}
      }
    }    
  }
  
// START Copy/Paste of tern function -> It should be cool if those following functions will be provided by tern as public API
  
  function maybeSet(obj, prop, val) {
    if (val != null) obj[prop] = val;
  }
  
  function resolvePos(file, pos, tolerant) {
    if (typeof pos != "number") {
      var lineStart = findLineStart(file, pos.line);
      if (lineStart == null) {
        if (tolerant) pos = file.text.length;
        else throw ternError("File doesn't contain a line " + pos.line);
      } else {
        pos = lineStart + pos.ch;
      }
    }
    if (pos > file.text.length) {
      if (tolerant) pos = file.text.length;
      else throw ternError("Position " + pos + " is outside of file.");
    }
    return pos;
  }
  
  var offsetSkipLines = 25;

  function findLineStart(file, line) {
    var text = file.text, offsets = file.lineOffsets || (file.lineOffsets = [0]);
    var pos = 0, curLine = 0;
    var storePos = Math.min(Math.floor(line / offsetSkipLines), offsets.length - 1);
    var pos = offsets[storePos], curLine = storePos * offsetSkipLines;

    while (curLine < line) {
      ++curLine;
      pos = text.indexOf("\n", pos) + 1;
      if (pos == 0) return null;
      if (curLine % offsetSkipLines == 0) offsets.push(pos);
    }
    return pos;
  }
  
  function asLineChar(file, pos) {
    if (!file) return {line: 0, ch: 0};
    var offsets = file.lineOffsets || (file.lineOffsets = [0]);
    var text = file.text, line, lineStart;
    for (var i = offsets.length - 1; i >= 0; --i) if (offsets[i] <= pos) {
      line = i * offsetSkipLines;
      lineStart = offsets[i];
    }
    for (;;) {
      var eol = text.indexOf("\n", lineStart);
      if (eol >= pos || eol < 0) break;
      lineStart = eol + 1;
      ++line;
    }
    return {line: line, ch: pos - lineStart};
  }

  function outputPos(query, file, pos) {
    if (query.lineCharPositions) {
      var out = asLineChar(file, pos);
      if (file.type == "part")
        out.line += file.offsetLines != null ? file.offsetLines : asLineChar(file.backing, file.offset).line;
      return out;
    } else {
      return pos + (file.type == "part" ? file.offset : 0);
    }
  }
  
  // END Copy/Paste of tern function -> It should be cool if those following functions will be provided by tern as public API 
    
  var defs = {
    "!name" : "tabris",
    "!define" : {
      "!propertyTypes": {
        "Bounds" : {
          "!doc": "Widget bounds are represented as an object with the following properties:",
          "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/property-types.md#bounds",
          "left" : {
            "!type": "number",
            "!doc": "The horizontal offset from the parent's left edge in dip"
          },
          "top" : {
            "!type": "number",
            "!doc": "The horizontal offset from the parent's top edge in dip"
          },
          "width" : {
            "!type": "number",
            "!doc": "The width of the widget in dip"
          },
          "height" : {
            "!type": "number",
            "!doc": "The height of the widget in dip"
          }
        },
        "Color": {
          "!doc": "Colors are specified as strings using one of the following formats:",
          "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/property-types.md#color"         
        },
        "Font": {
          "!doc": "Fonts are specified as strings using the shorthand syntax known from CSS. The font family may be omitted, in this case the default system font will be used.",
          "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/property-types.md#font"
        },
        "Image": {
          "src": {
            "!type": "string",
            "!doc": "Image path or URL."
          },
          "width": {
            "!type": "number",
            "!doc": "Image width, extracted from the image file when missing."
          },
          "height": {
            "!type": "number",
            "!doc": "Image height, extracted from the image file when missing."
          },
          "scale": {
            "!type": "number",
            "!doc": "Image scale factor - the image will be scaled down by this factor. Ignored when width or height are set."
          }
        },
        "LayoutData": {
          "!doc": "Used to define how a widget should be arranged within its parent.",
          "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/property-types.md#layoutdata",
          "left" : {
            "!type": "number",
            "!doc": "Defines the position of the widget's left edge.",
            "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/layout.md#left"
          },
          "right" : {
            "!type": "number",
            "!doc": "Defines the position of the widget's right edge.",
            "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/layout.md#right"
          },
          "top" : {
            "!type": "number",
            "!doc": "Defines the position of the widget's upper edge.",
            "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/layout.md#top"
          },
          "bottom" : {
            "!type": "number",
            "!doc": "Defines the position of the widget's lower edge.",
            "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/layout.md#bottom"
          },
          "centerX" : {
            "!type": "number",
            "!doc": "Defines the horizontal position of the widget relative to the parent's center.",
            "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/layout.md#centerX"
          },
          "centerY" : {
            "!type": "number",
            "!doc": "Defines the vertical position of the widget relative to the parent's center.",
            "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/layout.md#centerY"
          },
          "baseline" : {
            "!type": "+!types.Widget",
            "!doc": "Defines the vertical position of the widget relative to another widget's text baseline.",
            "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/layout.md#baseline"
          },
          "width" : {
            "!type": "number",
            "!doc": "Defines the width of the widget.",
            "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/layout.md#width"
          },
          "height" : {
            "!type": "number",
            "!doc": "Defines the height of the widget.",
            "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/layout.md#height"
          }
        },
        "Transformation": {
          "!doc": "Transformations are specified as an object with the following properties:", 
          "!url": "https://github.com/eclipsesource/tabris-js/blob/master/doc/property-types.md#transformation",
          "rotation": {
            "!type": "number",
            "!doc": "Clock-wise rotation in radians."
          },
          "scaleX": {
            "!type": "number",
            "!doc": "Horizontal scale factor."
          },
          "scaleY": {
            "!type": "number",
            "!doc": "Vertical scale factor."
          },
          "translationX": {
            "!type": "number",
            "!doc": "Horizontal translation (shift) in dip."
          },
          "translationY": {
            "!type": "number",
            "!doc": "Vertical translation (shift) in dip."
          }
        }        
      },      
      "!properties" : {
        "ActionProperties" : {
          "enabled": {
            "!type": "bool",
            "!doc": "Whether the action can be invoked."
          },
          "foreground": {
            "!type": "!propertyTypes.Color",
            "!doc": "Text color of the action."
          },
          "image": {
            "!type": "!propertyTypes.Image",
            "!doc": "Icon image for the action."
          },
          "placementPriority": {
            "!type": "string",
            "!doc": "Actions with higher placement priority will be placed at a more significant position in the UI, e.g. low priority actions could go into a menu instead of being included in a toolbar."
          },
          "title": {
            "!type": "string",
            "!doc": "The text to be displayed for the action."
          },
          "visibility": {
            "!type": "bool",
            "!doc": "Whether the action is visible."
          }          
        },
        "WidgetProperties" : {
          "enabled" : {
            "!type" : "bool",
            "!doc" : "Whether the widget can be operated."
          },
          "visibility" : {
            "!type" : "bool",
            "!doc" : "Whether the widget is visible."
          },
          "layoutData" : {
            "!type" : "!propertyTypes.LayoutData",
            "!doc" : "Specifies how the widget should be arranged in a layout. See [Layout](layout)."
          },
          "font" : {
            "!type" : "!propertyTypes.Font",
            "!doc" : "The font used for the widget."
          },
          "backgroundImage" : {
            "!type" : "!propertyTypes.Image",
            "!doc" : "An image to be displayed on the widget's background. If the image is smaller than the widget, it will be tiled."
          },
          "bounds" : {
            "!type" : "!propertyTypes.Bounds",
            "!doc" : "The actual location and size of the widget, relative to its parent."
          },
          "background" : {
            "!type" : "!propertyTypes.Color",
            "!doc" : "Background color of the widget."
          },
          "foreground" : {
            "!type" : "!propertyTypes.Color",
            "!doc" : "Text color of the widget."
          },
          "opacity" : {
            "!type" : "number",
            "!doc" : "Opacity of the entire widget. Can be used for fade animations."
          },
          "transform" : {
            "!type" : "!propertyTypes.Transformation",
            "!doc" : "Modifications to the widget's shape, size, or position. Can be used for animations."
          },
          "highlightOnTouch" : {
            "!type" : "bool",
            "!doc" : "Whether the entire widget should be highlighted while touched."
          }
        },
        "ButtonProperties" : {
          "alignment" : {
            "!type" : "string",
            "!doc" : "The horizontal alignment of the button text."
          },
          "image" : {
            "!type" : "!propertyTypes.Image",
            "!doc" : "An image to be displayed on the button."
          },
          "text" : {
            "!type" : "string",
            "!doc" : "The button's label text."
          }
        }
      },
      "!events": {
        "ActionEvents": {
          "selection": {
            "!doc": "Fired when the action is invoked."
          }
        },        
        "WidgetEvents": {
          "touchstart": {
            "!doc": "Fired when a widget is touched. See [Touch Events](touch-events)."
          },
          "touchmove": {
            "!doc": "Fired repeatedly while swiping across the screen. See [Touch Events](touch-events)."
          },
          "touchend": {
            "!doc": "Fired when a touch ends on the same widget than it started on. See [Touch Events](touch-events)."
          },
          "touchcancel": {
            "!doc": "Fired instead of touchend when the touch ends on another widget than it started on. See [Touch Events](touch-events)."
          },
          "longpress": {
            "!doc": "Fired after pressing a widget for a specific amount of time (about a second). See [Touch Events](touch-events)."
          },
          "change:bounds": {
            "!doc": "Fired when the widget's size or position has changed."
          },
          "dispose": {
            "!doc": "Fired when the widget is about to be disposed."
          }
        },
        "ButtonEvents": {
          "selection": {
            "!doc": "Fired when the button is pressed."
          }
        }
      },
      "!types": {
        "Action" : {
          "!type" : "fn()",
          "!doc" : "An executable item that is integrated in the application's navigation menu. Add a listener on `selection` to implement the action.",
          "prototype" : {
            "get" : {
              "!type" : "fn(name: string) -> !custom:tabris_Proxy_get",
              "!doc" : "Retrieves the current value of the given property from the a and returns it.",
              "!data": {
                "!lint": "tabrisGet_lint"
              }
            }
          }
        },
        "Widget" : {
          "!type" : "fn()",
          "prototype" : {
            "get" : {
              "!type" : "fn(name: string) -> !custom:tabris_Proxy_get",
              "!doc" : "Retrieves the current value of the given property from the widget and returns it.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#getname",
              "!data": {
                "!lint": "tabrisGet_lint"
              }
            },
            "set" : {
              "!type" : "fn(name: string, value: string) -> !this",
              "!doc" : "Sets a widget property. Returns the widget itself.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#setproperties"
            },
            "animate" : {
              "!type" : "fn(properties: ?, options: ?)",
              "!doc" : "Changes a number of widget properties with an animation. Currently, only the properties transform and opacity are supported. Does not yet return any value.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#animateproperties-options"
            },
            "appendTo" : {
              "!type" : "fn(parent: +!types.Widget) -> !this",
              "!doc" : "Appends the widget to a parent. If the widget already has a parent, it is deregistered from the actual parent and registered with the new one. Returns the widget itself.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#appendtoparent"
            },
            "append" : {
              "!type" : "fn(child: +!types.Widget) -> !this",
              "!doc" : "Appends one or more child widget to this widget. This method is equivalent to calling appendTo on every child, e.g. parent.append(child1, child2) is a short cut for calling child1.appendTo(parent) and child2.appendTo(parent). Returns the widget itself.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#appendchild-child-"
            },
            "parent" : {
              "!type" : "fn() -> +!types.Widget",
              "!doc" : "Returns the widget's parent.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#parent"
            },
            "children" : {
              "!type" : "fn() -> [+!types.Widget]",
              "!doc" : "Returns the list of children of this widget. The returned array is a copy and can safely be manipulated.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#children"
            },
            "on" : {
              "!type" : "fn(type: string, listener: fn(), context?: ?) -> !this",
              "!effects" : [ "custom tabris_Proxy_eventtype", "call !1 this=!this" ],
              "!doc" : "Binds a listener function to the widget. The listener will be invoked whenever an event of the given event type is fired.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#ontype-listener-context",
              "!data": {
                "!lint": "tabrisEvent_lint"
              }
            },
            "off" : {
              "!type" : "fn(type?: string, listener?: fn(), context?: ?) -> !this",
              "!effects" : [ "custom tabris_Proxy_eventtype", "call !1 this=!this" ],
              "!doc" : "Removes a previously-bound listener function from a widget. If no context is specified, all of the versions of the listener with different contexts will be removed. If no listener is specified, all listeners for the event will be removed. If no type is specified, callbacks for all events will be removed. Returns the widget itself.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#ontype-listener-context",
              "!data": {
                "!lint": "tabrisEvent_lint"
              }
            },
            "trigger" : {
              "!type" : "fn(type?: string, param?: ?) -> !this",
              "!effects" : [ "custom tabris_Proxy_eventtype"],
              "!doc" : "Programmatically invokes all listeners for the given event type with a given set of parameters. Returns the widget itself.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#triggertype-param-",
              "!data": {
                "!lint": "tabrisEvent_lint"
              }
            },
            "dispose" : {
              "!type" : "fn()",
              "!doc" : "Disposes of the widget, destroys all of its children widgets and triggers a dispose event.",
              "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#dispose"
            }
          }
        },
        "Composite" : {
          "!type" : "fn()",
          "!doc" : "TODO",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "Page" : {
          "!type" : "fn()",
          "!doc" : "TODO",
          "prototype" : {
            "!proto" : "!types.Composite.prototype",
            "open" : {
              "!type" : "fn()",
            },
            "close" : {
              "!type" : "fn()",
            }
          }
        },
        "Button" : {
          "!type" : "fn()",
          "!doc" : "A push button. Can contain a text or an image.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "Label" : {
          "!type" : "fn()",
          "!doc" : "A widget to display a text. For images, use ImageView.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        }  
      }      
    },
    "tabris" : {
      "load" : {
        "!type" : "fn(fn: fn())"
      },
      "create" : {
        "!type" : "fn(type: string, properties?: ?) -> !custom:tabris_create",
        "!doc" : "Creates a native widget of a given type and returns its reference.",
        "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#tabriscreatetype-properties",
        "!data": {
          "!lint": "tabrisCreate_lint"  
        }
      }
    }
  }

});