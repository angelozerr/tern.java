(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  infer.registerFunction("tabris_create", function(_self, args, argNodes) {
	if (!argNodes || !argNodes.length || argNodes[0].type != "Literal" || typeof argNodes[0].value != "string")
	  return infer.ANull;
	var cx = infer.cx(), server = cx.parent, name = argNodes[0].value;
	var locals = cx.definitions.tabris;
    if (locals[name] && locals[name].getProp("prototype")) return new infer.Obj(locals[name].getProp("prototype").getType());
    
    return infer.ANull;
  });
   
  function getPropertyType(widgetType, propertyName) {
	if (!(widgetType)) return null;
	var cx = infer.cx(), locals = cx.definitions.tabris, proto = widgetType.proto, propertyType = null;
	while(proto) {
      var objectName = proto.name.substring(0, proto.name.indexOf('.')) + 'Properties';
      var objectType = locals["!properties"].hasProp(objectName);
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
	if (propertyType) return propertyType.getType();
	return infer.ANull;
  });
  
  tern.registerPlugin("tabris", function(server, options) {    
    return {
      defs: defs      
    };
  });
  

    var defs = {
    "!name" : "tabris",
    "!define" : {
      "!properties" : {
        "ActionProperties" : {
          "enabled": {
            "!type": "bool",
            "!doc": "Whether the action can be invoked."
          },
          "foreground": {
            "!type": "Color",
            "!doc": "Text color of the action."
          },
          "image": {
            "!type": "Image",
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
            "!type" : "LayoutData",
            "!doc" : "Specifies how the widget should be arranged in a layout. See [Layout](layout)."
          },
          "font" : {
            "!type" : "Font",
            "!doc" : "The font used for the widget."
          },
          "backgroundImage" : {
            "!type" : "Image",
            "!doc" : "An image to be displayed on the widget's background. If the image is smaller than the widget, it will be tiled."
          },
          "bounds" : {
            "!type" : "Bounds",
            "!doc" : "The actual location and size of the widget, relative to its parent."
          },
          "background" : {
            "!type" : "Color",
            "!doc" : "Background color of the widget."
          },
          "foreground" : {
            "!type" : "Color",
            "!doc" : "Text color of the widget."
          },
          "opacity" : {
            "!type" : "number",
            "!doc" : "Opacity of the entire widget. Can be used for fade animations."
          },
          "transform" : {
            "!type" : "Transformation",
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
            "!type" : "Image",
            "!doc" : "An image to be displayed on the button."
          },
          "text" : {
            "!type" : "string",
            "!doc" : "The button's label text."
          }
        }
      },
      "Bounds" : {
        "left" : {
          "!type" : "number",
          "!doc" : "The horizontal offset from the parent's left edge in dip"
        },
        "top" : {
          "!type" : "number",
          "!doc" : "The horizontal offset from the parent's top edge in dip"
        },
        "width" : {
          "!type" : "number",
          "!doc" : "The width of the widget in dip"
        },
        "height" : {
          "!type" : "number",
          "!doc" : "The height of the widget in dip"
        }
      },
      "Color": {
       
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
      "Action" : {
        "!type" : "fn()",
        "!doc" : "An executable item that is integrated in the application's navigation menu. Add a listener on `selection` to implement the action.",
        "prototype" : {
          "get" : {
            "!type" : "fn(name: string) -> !custom:tabris_Proxy_get",
            "!doc" : "Retrieves the current value of the given property from the a and returns it."
          }
        }
      },
      "Widget" : {
        "!type" : "fn()",
        "prototype" : {
          "get" : {
            "!type" : "fn(name: string) -> !custom:tabris_Proxy_get",
            "!doc" : "Retrieves the current value of the given property from the widget and returns it.",
            "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#getname"
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
            "!type" : "fn(parent: +Widget) -> !this",
            "!doc" : "Appends the widget to a parent. If the widget already has a parent, it is deregistered from the actual parent and registered with the new one. Returns the widget itself.",
            "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#appendtoparent"
          },
          "append" : {
            "!type" : "fn(child: +Widget) -> !this",
            "!doc" : "Appends one or more child widget to this widget. This method is equivalent to calling appendTo on every child, e.g. parent.append(child1, child2) is a short cut for calling child1.appendTo(parent) and child2.appendTo(parent). Returns the widget itself.",
            "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#appendchild-child-"
          },
          "parent" : {
            "!type" : "fn() -> +Widget",
            "!doc" : "Returns the widget's parent.",
            "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#parent"
          },
          "children" : {
            "!type" : "fn() -> [+Widget]",
            "!doc" : "Returns the list of children of this widget. The returned array is a copy and can safely be manipulated.",
            "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#children"
          },
          "on" : {
            "!type" : "fn(type: string, listener: fn(), context?: ?) -> !this",
            "!effects" : [ "call !1 this=!this" ],
            "!doc" : "Binds a listener function to the widget. The listener will be invoked whenever an event of the given event type is fired.",
            "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#ontype-listener-context"
          },
          "off" : {
            "!type" : "fn(type?: string, listener?: fn(), context?: ?) -> !this",
            "!effects" : [ "call !1 this=!this" ],
            "!doc" : "Removes a previously-bound listener function from a widget. If no context is specified, all of the versions of the listener with different contexts will be removed. If no listener is specified, all listeners for the event will be removed. If no type is specified, callbacks for all events will be removed. Returns the widget itself.",
            "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#ontype-listener-context"
          },
          "trigger" : {
            "!type" : "fn(type?: string, param?: ?) -> !this",
            "!doc" : "Programmatically invokes all listeners for the given event type with a given set of parameters. Returns the widget itself.",
            "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#triggertype-param-"
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
          "!proto" : "Widget.prototype"
        }
      },
      "Page" : {
        "!type" : "fn()",
        "!doc" : "TODO",
        "prototype" : {
          "!proto" : "Composite.prototype",
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
          "!proto" : "Widget.prototype"
        }
      },
      "Label" : {
        "!type" : "fn()",
        "!doc" : "A widget to display a text. For images, use ImageView.",
        "prototype" : {
          "!proto" : "Widget.prototype"
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
        "!url" : "https://github.com/eclipsesource/tabris-js/blob/master/doc/widgets.md#tabriscreatetype-properties"
      }
    }
  }

});