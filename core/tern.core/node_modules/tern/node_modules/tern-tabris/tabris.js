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
    objectName = objectName.substring(0, objectName.indexOf('.')) + 'Properties';
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

  ["tabris_Proxy_get", "tabris_Proxy_set"].forEach(function(name) {
    infer.registerFunction(name, function(_self, args, argNodes) {
      if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
        return infer.ANull;
  	  
      var widgetType = _self.getType(), propertyName = argNodes[0].value, propertyType = getPropertyType(widgetType, propertyName);
      argNodes[0]._tabris = {"type" : "tabris_Proxy_get", "proxyType" : widgetType};
      if (propertyType) return propertyType.getType();
      return infer.ANull;
    });
  });

  // widget.on(
  
  function getEventProperties(proto) {
    var cx = infer.cx(), locals = cx.definitions.tabris;    
    var objectName = proto.name, index = objectName.indexOf("!types.");
    if (index == 0) objectName = objectName.substring("!types.".length, objectName.length);
    objectName = objectName.substring(0, objectName.indexOf('.')) + 'Events';
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
    
    var wordPos = tern.resolvePos(file, query.end);
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
      if (!(nodeArg.start <= wordPos && nodeArg.end >= wordPos)) return;
      if (nodeArg._tabris) {
        var startQuote = getQuote(nodeArg.raw.charAt(0)), endQuote = getQuote(nodeArg.raw.length > 1 ? nodeArg.raw.charAt(nodeArg.raw.length - 1) : null);  
        var wordEnd = endQuote != null ? nodeArg.end - 1: nodeArg.end, wordStart = startQuote != null ? nodeArg.start + 1: nodeArg.start,    
        word = nodeArg.value.slice(0, nodeArg.value.length - (wordEnd - wordPos));
        if (query.caseInsensitive) word = word.toLowerCase();
        
        switch(nodeArg._tabris.type) {
          case "tabris_Proxy_get":
          case "tabris_Proxy_set":
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

        return {start: tern.outputPos(query, file, wordStart),
          end: tern.outputPos(query, file, wordEnd),
          isProperty: false,
          isStringAround: true,
          startQuote: startQuote,
          endQuote: endQuote,
          completions: completions}
      }
    }    
  }
  
  function maybeSet(obj, prop, val) {
    if (val != null) obj[prop] = val;
  }

  var defs = {
    "!name" : "tabris",
    "!define" : {
      "!propertyTypes": {
        "Bounds" : {
          "!doc": "Widget bounds are represented as an object with the following properties:",
          "!url": "https://tabrisjs.com/documentation/property-types#bounds",
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
          "!url": "https://tabrisjs.com/documentation/property-types#color"
        },
        "Font": {
          "!doc": "Fonts are specified as strings using the shorthand syntax known from CSS. The font family may be omitted, in this case the default system font will be used.",
          "!url": "https://tabrisjs.com/documentation/property-types#font"
        },
        "Image": {
          "!doc": "Image object associated with the element.",
          "!url": "https://tabrisjs.com/documentation/property-types#image",
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
          "!url": "https://tabrisjs.com/documentation/property-types#layoutdata",
          "left" : {
            "!type": "number",
            "!doc": "Defines the position of the widget's left edge.",
            "!url": "https://tabrisjs.com/documentation/layout#left"
          },
          "right" : {
            "!type": "number",
            "!doc": "Defines the position of the widget's right edge.",
            "!url": "https://tabrisjs.com/documentation/layout#right"
          },
          "top" : {
            "!type": "number",
            "!doc": "Defines the position of the widget's upper edge.",
            "!url": "https://tabrisjs.com/documentation/layout#top"
          },
          "bottom" : {
            "!type": "number",
            "!doc": "Defines the position of the widget's lower edge.",
            "!url": "https://tabrisjs.com/documentation/layout#bottom"
          },
          "centerX" : {
            "!type": "number",
            "!doc": "Defines the horizontal position of the widget relative to the parent's center.",
            "!url": "https://tabrisjs.com/documentation/layout#centerx"
          },
          "centerY" : {
            "!type": "number",
            "!doc": "Defines the vertical position of the widget relative to the parent's center.",
            "!url": "https://tabrisjs.com/documentation/layout#centery"
          },
          "baseline" : {
            "!type": "+!types.Widget",
            "!doc": "Defines the vertical position of the widget relative to another widget's text baseline.",
            "!url": "https://tabrisjs.com/documentation/layout#baseline"
          },
          "width" : {
            "!type": "number",
            "!doc": "Defines the width of the widget.",
            "!url": "https://tabrisjs.com/documentation/layout#width"
          },
          "height" : {
            "!type": "number",
            "!doc": "Defines the height of the widget.",
            "!url": "https://tabrisjs.com/documentation/layout#height"
          }
        },
        "Transformation": {
          "!doc": "Transformations are specified as an object with the following properties:", 
          "!url": "https://tabrisjs.com/documentation/property-types#transformation",
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
          "visible" : {
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
        },
        "PageProperties": {
          "image" : {
            "!type" : "!propertyTypes.Image",
            "!doc" : "An image to be displayed next to the navigation drawer page entry."
          },
          "title" : {
            "!type" : "string",
            "!doc" : "The title of the page."
          },
          "topLevel" : {
            "!type" : "bool",
            "!doc" : "Defines whether this is a top level page, i.e. has an entry in the navigation drawer."
          }
        },
        "LabelProperties": {
          "alignment" : {
            "!type" : "string",
            "!doc" : "The horizontal alignment of the label text."
          },
          "markupEnabled": {
            "!type": "bool",
            "!doc": "Allows for a subset of HTML tags in the label text. Supported tags are: `a`, `del`, `ins`, `b`, `i`, `strong`, `em`, `big`, `small`, `br`. All tags must be closed (e.g. use <br/> instead of <br>). Nesting tags is currently not supported. This property must be set in the **create** method."
          },
          "text" : {
            "!type" : "string",
            "!doc" : "The label text."
          }
        },
        "CheckBoxProperties": {
          "selection" : {
            "!type" : "bool",
            "!doc" : "The checked state of the check box."
          },
          "text" : {
            "!type" : "string",
            "!doc" : "The label text of the check box."
          }
        },
        "CollectionViewProperties": {
          "initializeCell" : {
            "!type" : "fn()",
            "!doc" : "A callback used to initialize a collection cell. Cells are created by the framework and recycled on scrolling. This callback receives an empty collection cell as an argument and appends widgets to it. The cell triggers an `itemchange` event (name subject to change) with a single element from the items array as a callback argument. Can only be set in the `create` method."
          },
          "itemHeight" : {
            "!type" : "number",
            "!doc" : "The height of a collection cell."
          },
          "items" : {
            "!type" : "[?]",
            "!doc" : "An array of data items to be displayed by the collection view."
          }
        },
        "ComboProperties": {
          "items" : {
            "!type" : "[string]",
            "!doc" : "Array of strings containing the combo items."
          },
          "selectionIndex" : {
            "!type" : "number",
            "!doc" : "Index of the currently selected combo item."
          },
          "text" : {
            "!type" : "string",
            "!doc" : "Text of the selected combo item."
          }
        },
        "ImageViewProperties": {
          "image" : {
            "!type" : "!propertyTypes.Image",
            "!doc" : "The image shown in the ImageView."
          },
          "scaleMode" : {
            "!type" : "number",
            "!doc" : "The scale mode of the image in the image view. Supported values: `auto`, `fit`, `fill`, `stretch`, `none`, default: `auto`"
          }
        },
        "ProgressBarProperties": {
          "maximum" : {
            "!type" : "number",
            "!doc" : "The maximal numeric value of the progress bar, default: `100`"
          },
          "minimum" : {
            "!type" : "number",
            "!doc" : "The minimal numeric value of the progress bar, default: `0`"
          },
          "selection" : {
            "!type" : "number",
            "!doc" : "The current progress bar value. Default: `0`"
          },
          "state" : {
            "!type" : "string",
            "!doc" : "The state of the progress bar. Supported values: `normal`, `paused`, `error`, default: `normal`"
          }
        },
        "RadioButtonProperties": {
          "selection" : {
            "!type" : "bool",
            "!doc" : "The checked state of the radio button."
          },
          "text" : {
            "!type" : "string",
            "!doc" : "The label text of the radio button."
          }
        },
        "SliderProperties": {
          "maximum" : {
            "!type" : "number",
            "!doc" : "The maximal numeric value of the slider, default: `100`"
          },
          "minimum" : {
            "!type" : "number",
            "!doc" : "The minimal numeric value of the slider, default: `0`"
          },
          "selection" : {
            "!type" : "number",
            "!doc" : "The current slider value. Default: `0`"
          },
        },
        "TabFolderProperties": {
          "paging" : {
            "!type" : "bool",
            "!doc" : "Enables swiping through tabs."
          },
          "selection" : {
            "!type" : "!types.Tab",
            "!doc" : "The selected tab object."
          },
          "tabBarLocation" : {
            "!type" : "string",
            "!doc" : "The placement of the tab titles. When set to `auto`, the position is platform dependent. Can only be set in the create method. Supported values: `top`, `bottom`, `auto`, default: `auto`"
          },
        },
        "TabProperties": {
          "badge" : {
            "!type" : "string",
            "!doc" : "Text of the tab badge on iOS."
          },
          "image" : {
            "!type" : "!propertyTypes.Image",
            "!doc" : "Image shown on the tab button."
          },
          "title" : {
            "!type" : "string",
            "!doc" : "Text title of the tab."
          },
        },
        "TextProperties": {
          "editable" : {
            "!type" : "bool",
            "!doc" : "Whether the Text widget is editable."
          },
          "message" : {
            "!type" : "string",
            "!doc" : "Displayed only when the field is empty."
          },
          "text" : {
            "!type" : "string",
            "!doc" : "Input text."
          },
          "textLimit" : {
            "!type" : "number",
            "!doc" : "Maximal number of characters allowed to be input in the text widget."
          },
          "textType" : {
            "!type" : "string",
            "!doc" : "The type of the text widget. Can only be set in the `create` method. Supported values: `default`, `password`, `search`, `multiline`, default: `default`."
          }
        },
        "ToggleButtonProperties": {
          "alignment" : {
            "!type" : "string",
            "!doc" : "The horizontal alignment of the button text. Supported values: `left`, `right`, `center`, default: `center`"
          },
          "image" : {
            "!type" : "!propertyTypes.Image",
            "!doc" : "An image to be displayed on the button."
          },
          "selection" : {
            "!type" : "bool",
            "!doc" : "The selection state of the toggle button."
          },
          "text" : {
            "!type" : "string",
            "!doc" : "The button's label text."
          },
        },
        "ScrollCompositeProperties": {
          "direction" : {
            "!type" : "string",
            "!doc" : "Specifies the scrolling direction of the scroll composite. Can only be set in the `create` method. Supported values: `vertical`, `horizontal`, default: `vertical`."
          }
        },
        "WebViewProperties": {
          "html" : {
            "!type" : "string",
            "!doc" : "A complete HTML document to display. Always returns the last set value."
          },
          "url" : {
            "!type" : "string",
            "!doc" : "The URL of the web page to display. Returns empty string when content from `html` property is displayed."
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
        },
        "CheckBoxEvents": {
          "change:selection": {
            "!doc": "Fired when the check box is checked or unchecked."
          }
        },
        "CollectionViewEvents": {
          "selection": {
            "!doc": "Fired when a collection item is selected. The event object includes a field `item` that contains the data item that is mapped to the selected cell."
          }
        },
        "ComboEvents": {
          "change:selection": {
            "!doc": "Fired when the selected combo item gets changed."
          }
        },
        "CompositeEvents": {
          "add": {
            "!doc": "Fired when a child is added. Arguments are (child, composite, {})."
          },
          "remove": {
            "!doc": "Fired when a child is removed. Arguments are (child, composite, {index: number})."
          }
        },
        "RadioButtonEvents": {
          "change:selection": {
            "!doc": "Fired when the radio button is selected or deselected."
          }
        },
        "SliderEvents": {
          "change:selection": {
            "!doc": "Fired when the selection of the slider gets changed."
          }
        },
        "TextEvents": {
          "accept": {
            "!doc": "Fired when a text input has been finished by pressing the keyboard's Enter key. The label of this key may vary depending on the platform and locale."
          },
          "blur": {
            "!doc": "Fired when the widget lost focus."
          },
          "change:text": {
            "!doc": "Fired when the text property changes."
          },
          "focus": {
            "!doc": "Fired when the widget gains focus."
          }
        },
        "ToggleButtonEvents": {
          "change:selection": {
            "!doc": "Fired when the toggle button is selected or deselected."
          }
        },
        "ScrollCompositeEvents": {
          "scroll": {
            "!doc": "Fired on scrolling. The event handler receives an event object containing the properties `x` and `y` that indicate the scrolling position."
          }
        }
      },
      "!types": {
        "Action" : {
          "!type" : "fn()",
          "!url" : "https://tabrisjs.com/documentation/widget-types#action",
          "!doc" : "An executable item that is integrated in the application's navigation menu. Add a listener on `selection` to implement the action.",
          "prototype" : {
            "get" : {
              "!type" : "fn(name: string) -> !custom:tabris_Proxy_get",
              "!doc" : "Retrieves the current value of the given property from the action and returns it.",
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
              "!url" : "https://tabrisjs.com/documentation/widgets#codegetnamecode",
              "!data": {
                "!lint": "tabrisGet_lint"
              }
            },
            "set" : {
              "!type" : "fn(name: string, value: string) -> !this",
              "!effects" : ["custom tabris_Proxy_set"],
              "!doc" : "Sets a widget property. Returns the widget itself.",
              "!url" : "https://tabrisjs.com/documentation/widgets#codesetname-valuecode"
            },
            "animate" : {
              "!type" : "fn(animationProperties: ?, options: ?)",
              "!doc" : "Changes a number of widget properties with an animation. Currently, only the properties transform and opacity are supported. Does not yet return any value.",
              "!url" : "https://tabrisjs.com/documentation/widgets#codeanimateproperties-optionscode"
            },
            "appendTo" : {
              "!type" : "fn(parent: +!types.Widget) -> !this",
              "!doc" : "Appends the widget to a parent. If the widget already has a parent, it is deregistered from the actual parent and registered with the new one. Returns the widget itself.",
              "!url" : "https://tabrisjs.com/documentation/widgets#codeappendtoparentcode"
            },
            "append" : {
              "!type" : "fn(child: +!types.Widget) -> !this",
              "!doc" : "Appends one or more child widget to this widget. This method is equivalent to calling appendTo on every child, e.g. parent.append(child1, child2) is a short cut for calling child1.appendTo(parent) and child2.appendTo(parent). Returns the widget itself.",
              "!url" : "https://tabrisjs.com/documentation/widgets#codeappendchild-child-code"
            },
            "parent" : {
              "!type" : "fn() -> +!types.Widget",
              "!doc" : "Returns the widget's parent.",
              "!url" : "https://tabrisjs.com/documentation/widgets#codeparentcode"
            },
            "children" : {
              "!type" : "fn() -> [+!types.Widget]",
              "!doc" : "Returns the list of children of this widget. The returned array is a copy and can safely be manipulated.",
              "!url" : "https://tabrisjs.com/documentation/widgets#codechildrencode"
            },
            "on" : {
              "!type" : "fn(type: string, listener: fn()) -> !this",
              "!effects" : [ "custom tabris_Proxy_eventtype", "call !1 this=!this" ],
              "!doc" : "Binds a listener function to the widget. The listener will be invoked whenever an event of the given event type is fired.",
              "!url" : "https://tabrisjs.com/documentation/widgets#codeontype-listener-contextcode",
              "!data": {
                "!lint": "tabrisEvent_lint"
              }
            },
            "off" : {
              "!type" : "fn(type?: string, listener?: fn()) -> !this",
              "!effects" : [ "custom tabris_Proxy_eventtype", "call !1 this=!this" ],
              "!doc" : "Removes a previously-bound listener function from a widget. If no context is specified, all of the versions of the listener with different contexts will be removed. If no listener is specified, all listeners for the event will be removed. If no type is specified, callbacks for all events will be removed. Returns the widget itself.",
              "!url" : "https://tabrisjs.com/documentation/widgets#codeofftype-listener-contextcode",
              "!data": {
                "!lint": "tabrisEvent_lint"
              }
            },
            "trigger" : {
              "!type" : "fn(type?: string, param?: ?) -> !this",
              "!effects" : [ "custom tabris_Proxy_eventtype"],
              "!doc" : "Programmatically invokes all listeners for the given event type with a given set of parameters. Returns the widget itself.",
              "!url" : "https://tabrisjs.com/documentation/widgets#codetriggertype-param-code",
              "!data": {
                "!lint": "tabrisEvent_lint"
              }
            },
            "dispose" : {
              "!type" : "fn()",
              "!doc" : "Disposes of the widget, destroys all of its children widgets and triggers a dispose event.",
              "!url" : "https://tabrisjs.com/documentation/widgets#codedisposecode"
            }
          }
        },
        "Page" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#page",
          "!doc" : "Pages contain an application's UI. Top-level pages are included in the application's main menu.",
          "prototype" : {
            "!proto" : "!types.Composite.prototype",
            "open" : {
              "!type" : "fn() -> !this",
              "!doc" : "Opens the page."
            },
            "close" : {
              "!type" : "fn()",
              "!doc" : "Closes the page, i.e. disposes of it."
            }
          }
        },
        "Button" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#button",
          "!doc" : "A push button. Can contain a text or an image.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "Label" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#label",
          "!doc" : "A widget to display a text. For images, use ImageView.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "CheckBox" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#checkbox",
          "!doc" : "A check box widget.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "CollectionView" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#collectionview",
          "!doc" : "A scrollable list that displays data items in cells, one per row. Cells are created on demand and filled with widgets in the 'initializeCell' callback. When a data item is mapped to a cell, the cell receives a 'itemchange' event.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "Combo" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#combo",
          "!doc" : "A widget with a drop-down list of items to choose from. Name is subject to change.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "Composite" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#composite",
          "!doc" : "An empty widget that can contain other widgets.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "Canvas" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#canvas",
          "!doc" : "An empty widget to draw graphics on. Can also contain other widgets.",
          "prototype" : {
            "!proto" : "!types.Composite.prototype"
          }
        },
        "ImageView" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#imageview",
          "!doc" : "A widget to display an image.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "ProgressBar" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#progressbar",
          "!doc" : "A widget representing a numeric value as a horizontal bar with a growing indicator.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "RadioButton" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#radiobutton",
          "!doc" : "A radio button. Selecting a radio button deselects all its siblings (i.e. all radio buttons within the same parent). Known Issues: RadioButton is not automatically deselected on iOS",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "Slider" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#slider",
          "!doc" : "A widget representing a numeric value as an movable indicator on a horizontal line. Known Issues: Selection event is only fired after indicator is released.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "TabFolder" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#tabfolder",
          "!doc" : "A widget that can switch between tabs.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "Tab" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#tab",
          "!doc" : "A container representing a single tab of the TabFolder widget.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "Text" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#text",
          "!doc" : "A widget that allows to enter text. Known Issues: The cursor jumps to the beginning of the text in iOS.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "ToggleButton" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#togglebutton",
          "!doc" : "A push button that \"snaps in\", i.e. it is selected when pressed and deselected when pressed again.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "ScrollComposite" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#scrollcomposite",
          "!doc" : "A composite that allows its content to overflow either vertically (default) or horizontally.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        },
        "WebView" : {
          "!type" : "fn()",
          "!url": "https://tabrisjs.com/documentation/widget-types#webview",
          "!doc" : "A widget that can display a web page. Known Issues: Having multiple instances of this widget on screen may not work.",
          "prototype" : {
            "!proto" : "!types.Widget.prototype"
          }
        }
      }      
    },
    "tabris" : {
      "create" : {
        "!type" : "fn(type: string, properties?: ?) -> !custom:tabris_create",
        "!doc" : "Creates a native widget of a given type and returns its reference.",
        "!url" : "https://tabrisjs.com/documentation/widgets#codetabriscreatetype-propertiescode",
        "!data": {
          "!lint": "tabrisCreate_lint"  
        }
      }
    }
  };
});
