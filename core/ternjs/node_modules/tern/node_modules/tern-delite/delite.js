(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
  "use strict";
    
  tern.registerPlugin("delite", function(server, options) {
    return { defs : defs };
  });
  
  var defs = {
 "!name": "delite",
 "!define": {
  "!requirejs": {
   "delite/a11y": {
    "child": {},
    "first": {},
    "last": {},
    "lowestTabindex": {},
    "lowest": {},
    "highestTabindex": {},
    "highest": {},
    "radioSelected[undefined]": {},
    "root": {}
   },
   "delite/a11yclick": {
    "!type": "fn(node: +Element)",
    "node": {},
    "lastKeyDownNode": {}
   },
   "delite/activationTracker": {
    "activeStack": {},
    "registerIframe": {
     "!type": "fn(iframe: +HTMLIframeElement) -> ?"
    },
    "registerWin": {
     "!type": "fn(targetWindow: +Window, effectiveNode: +Element) -> ?"
    },
    "lastPointerDownTime": {},
    "remove": {
     "!type": "fn()"
    },
    "_blurHandler": {
     "!type": "fn(node: +Element)"
    },
    "_clearActiveWidgetsTimer": {},
    "_pointerDownOrFocusHandler": {
     "!type": "fn(node: +Element, by: string)"
    },
    "lastPointerDownOrFocusInTime": {},
    "lastPointerDownOrFocusInNode": {},
    "node": {},
    "_focusHandler": {
     "!type": "fn(node: +Element)"
    },
    "lastFocusinTime": {},
    "_setStack": {
     "!type": "fn(newStack: [?], by: string)"
    },
    "i": {},
    "widget": {},
    "bubbles": {},
    "by": {}
   },
   "delite/activationTracker.registerWin": {
    "_this": {},
    "doc": {},
    "body": {},
    "pointerDownHandler": {
     "!type": "fn()"
    },
    "focusHandler": {
     "!type": "fn()"
    },
    "blurHandler": {
     "!type": "fn()"
    }
   },
   "delite/activationTracker.registerWin~focusHandler": {
    "tag": {}
   },
   "delite/activationTracker._blurHandler": {
    "now": {}
   },
   "delite/activationTracker._pointerDownOrFocusHandler": {
    "newStack": {}
   },
   "delite/activationTracker._setStack": {
    "oldStack": {},
    "lastOldIdx": {},
    "lastNewIdx": {},
    "widget": {},
    "i": {}
   },
   "delite/BackgroundIframe": {
    "!type": "fn(node: +Element)",
    "iframe": {},
    "constructor": {
     "!type": "fn()"
    },
    "destroy": {
     "!type": "fn()"
    }
   },
   "delite/BackgroundIframe~iframe.style": {
    "display": {},
    "width": {},
    "height": {}
   },
   "delite/BackgroundIframe~iframe": {
    "src": {},
    "className": {},
    "tabIndex": {}
   },
   "delite/BackgroundIframe#constructor": {
    "iframe": {}
   },
   "delite/Bidi": {
    "textDir": {},
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "_inheritedDir": {},
    "getTextDir": {
     "!type": "fn(text: string) -> ?"
    },
    "_checkContextual": {
     "!type": "fn(text: string) -> ?"
    },
    "applyTextDir": {
     "!type": "fn(element: +HTMLElement)"
    },
    "applyTextDirection": {
     "!type": "fn(text: string) -> ?"
    },
    "wrapWithUcc": {
     "!type": "fn(text: string) -> ?"
    },
    "removeUcc": {
     "!type": "fn(text: string) -> ?"
    },
    "enforceTextDirWithUcc": {
     "!type": "fn(node: +HTMLOptionElement)"
    },
    "restoreOriginalText": {
     "!type": "fn(origObj: +HTMLOptionElement)"
    }
   },
   "delite/Bidi._checkContextual": {
    "fdc": {}
   },
   "delite/Bidi.applyTextDir": {
    "textDir": {},
    "tagName": {},
    "text": {}
   },
   "delite/Bidi~element": {
    "dir": {}
   },
   "delite/Bidi.wrapWithUcc": {
    "dir": {}
   },
   "delite/Bidi~node": {
    "originalText": {},
    "innerHTML": {}
   },
   "delite/Bidi~origObj": {
    "text": {}
   },
   "delite/Container": {
    "delite-add-child": {},
    "delite-remove-child": {},
    "containerNode": {},
    "render": {
     "!type": "fn()"
    },
    "before": {
     "!type": "fn()"
    },
    "_srcDom": {},
    "after": {
     "!type": "fn()"
    },
    "appendChild": {},
    "insertBefore": {},
    "onAddChild": {
     "!type": "fn(node: +Element)"
    },
    "bubbles": {},
    "cancelable": {},
    "child": {},
    "addChild": {
     "!type": "fn(node: +Element, insertIndex: number)"
    },
    "removeChild": {
     "!type": "fn(node: +Element|number)"
    },
    "node": {},
    "getChildren": {
     "!type": "fn() -> ?"
    },
    "hasChildren": {
     "!type": "fn() -> ?"
    },
    "getIndexOfChild": {
     "!type": "fn(child: +Element) -> ?"
    },
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()"
    },
    "template": {},
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "postRender": {
     "!type": "fn()"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/Container~before": {
    "srcDom": {}
   },
   "delite/Container#addChild": {
    "cn": {},
    "nextSibling": {}
   },
   "delite/CssState": {
    "booleanCssProps": {},
    "postRender": {
     "!type": "fn()"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()"
    },
    "template": {},
    "render": {
     "!type": "fn()"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/CustomElement": {
    "customelement-attached": {},
    "getProps": {
     "!type": "fn()"
    },
    "dir": {},
    "_setDirAttr": {
     "!type": "fn()"
    },
    "works": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "setterMap[undefined]": {},
    "proto": {},
    "_propCaseMap": {},
    "hash[undefined]": {},
    "pcm[undefined]": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "before": {
     "!type": "fn()"
    },
    "_parsedAttributes": {},
    "after": {
     "!type": "fn()"
    },
    "this[undefined]": {},
    "subtree": {},
    "attributeFilter": {},
    "attributes": {},
    "attached": {},
    "attachedCallback": {
     "!type": "fn()"
    },
    "bubbles": {},
    "cancelable": {},
    "detachedCallback": {
     "!type": "fn()"
    },
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "obj": {},
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "name": {},
    "prop": {},
    "value": {},
    "event": {},
    "callback": {},
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "attr": {},
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "eventObj": {},
    "nativeEvent[undefined]": {},
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    },
    "node": {}
   },
   "delite/CustomElement~tw": {
    "dir": {}
   },
   "delite/CustomElement#introspect": {
    "proto": {},
    "nativeProps": {},
    "setterMap": {}
   },
   "delite/CustomElement#getProps": {
    "hash": {},
    "proto": {},
    "pcm": {}
   },
   "delite/CustomElement~after": {
    "MO": {},
    "observer": {}
   },
   "delite/CustomElement#_parsePrototypeAttr": {
    "stringToObject": {
     "!type": "fn()"
    }
   },
   "delite/CustomElement#_parsePrototypeAttr~stringToObject": {
    "obj": {}
   },
   "delite/CustomElement#parseAttribute": {
    "pcm": {}
   },
   "delite/CustomElement#_mapAttributes": {
    "attr": {},
    "idx": {},
    "parsedAttrs": {},
    "attrsToRemove": {},
    "name": {},
    "parsedAttr": {}
   },
   "delite/CustomElement#emit": {
    "bubbles": {},
    "cancelable": {},
    "nativeEvent": {},
    "i": {}
   },
   "delite/CustomElement#findCustomElements": {
    "outAry": {},
    "getChildrenHelper": {
     "!type": "fn()"
    }
   },
   "delite/CustomElement#findCustomElements~getChildrenHelper": {
    "node": {}
   },
   "delite/Dialog": {
    "postRender": {
     "!type": "fn()"
    },
    "_getFocusItems": {
     "!type": "fn()"
    },
    "_firstFocusItem": {},
    "_lastFocusItem": {},
    "_dialogKeyDownHandler": {
     "!type": "fn()"
    },
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()"
    },
    "template": {},
    "render": {
     "!type": "fn()"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/Dialog#_getFocusItems": {
    "elems": {}
   },
   "delite/Dialog#_dialogKeyDownHandler": {
    "node": {}
   },
   "delite/DialogUnderlay": {
    "!type": "fn()",
    "render": {
     "!type": "fn()"
    },
    "className": {},
    "createdCallback": {},
    "attachedCallback": {
     "!type": "fn()"
    },
    "_resizeListener": {},
    "detachedCallback": {
     "!type": "fn()"
    },
    "layout": {
     "!type": "fn()"
    },
    "show": {
     "!type": "fn()"
    },
    "_open": {},
    "bgIframe": {},
    "hide": {
     "!type": "fn()"
    },
    "DialogUnderlay.show": {
     "!type": "fn(attrs: +Object, zIndex: number)"
    },
    "underlay": {},
    "DialogUnderlay.hide": {
     "!type": "fn()"
    }
   },
   "delite/DialogUnderlay#layout": {
    "s": {},
    "html": {}
   },
   "delite/DialogUnderlay~s": {
    "display": {},
    "width": {},
    "height": {}
   },
   "delite/DialogUnderlay#style": {
    "display": {}
   },
   "delite/DialogUnderlay.DialogUnderlay.show": {
    "underlay": {}
   },
   "delite/DialogUnderlay~DialogUnderlay": {
    "_singleton": {}
   },
   "delite/DialogUnderlay~underlay.style": {
    "zIndex": {}
   },
   "delite/DialogUnderlay.DialogUnderlay.hide": {
    "underlay": {}
   },
   "delite/DisplayContainer": {
    "delite-before-show": {},
    "delite-after-show": {},
    "delite-display-load": {},
    "delite-before-hide": {},
    "delite-after-hide": {},
    "show": {
     "!type": "fn(dest: +Element|string, params: +Object) -> ?"
    },
    "child": {},
    "event": {},
    "hide": {
     "!type": "fn(dest: +Element|string, params: +Object) -> ?"
    },
    "changeDisplay": {
     "!type": "fn(widget: +Element|string, params: +Object) -> ?"
    },
    "load": {
     "!type": "fn(widget: +Element|string) -> ?"
    },
    "delite-add-child": {},
    "delite-remove-child": {},
    "containerNode": {},
    "render": {
     "!type": "fn()"
    },
    "_srcDom": {},
    "appendChild": {},
    "insertBefore": {},
    "onAddChild": {
     "!type": "fn(node: +Element)"
    },
    "addChild": {
     "!type": "fn(node: +Element, insertIndex: number)"
    },
    "removeChild": {
     "!type": "fn(node: +Element|number)"
    },
    "getChildren": {
     "!type": "fn() -> ?"
    },
    "hasChildren": {
     "!type": "fn() -> ?"
    },
    "getIndexOfChild": {
     "!type": "fn(child: +Element) -> ?"
    },
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()"
    },
    "template": {},
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "postRender": {
     "!type": "fn()"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/DisplayContainer#show": {
    "child": {},
    "event": {},
    "self": {}
   },
   "delite/DisplayContainer#show~event": {
    "dest": {},
    "setChild": {
     "!type": "fn()"
    }
   },
   "delite/DisplayContainer~event": {
    "dest": {},
    "cancelable": {},
    "bubbles": {},
    "hide": {}
   },
   "delite/DisplayContainer#hide": {
    "child": {},
    "event": {},
    "self": {}
   },
   "delite/DisplayContainer#hide~event": {
    "dest": {},
    "setChild": {
     "!type": "fn()"
    },
    "bubbles": {},
    "cancelable": {},
    "hide": {}
   },
   "delite/DisplayContainer~widget.style": {
    "visibility": {},
    "display": {}
   },
   "delite/FormValueWidget": {
    "this[undefined]": {},
    "readOnly": {},
    "refreshRendering": {
     "!type": "fn()"
    },
    "compare": {
     "!type": "fn(val1: ?, val2: ?) -> ?"
    },
    "postRender": {
     "!type": "fn()"
    },
    "_previousOnChangeValue": {},
    "_previousOnInputValue": {},
    "handleOnChange": {
     "!type": "fn(newValue: ?)"
    },
    "handleOnInput": {
     "!type": "fn(newValue: ?)"
    },
    "name": {},
    "alt": {},
    "value": {},
    "tabIndex": {},
    "tabStops": {},
    "disabled": {},
    "focusNode": {},
    "valueNode": {},
    "focus": {
     "!type": "fn()"
    },
    "firstFocusNode": {
     "!type": "fn()"
    },
    "forEachFocusNode": {
     "!type": "fn(callback: +function)"
    },
    "setAttribute": {},
    "getAttribute": {},
    "hasAttribute": {},
    "removeAttribute": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()"
    },
    "template": {},
    "render": {
     "!type": "fn()"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/FormValueWidget~node": {
    "readOnly": {}
   },
   "delite/FormWidget": {
    "name": {},
    "alt": {},
    "value": {},
    "tabIndex": {},
    "tabStops": {},
    "disabled": {},
    "focusNode": {},
    "postRender": {
     "!type": "fn()"
    },
    "valueNode": {},
    "refreshRendering": {
     "!type": "fn()"
    },
    "focus": {
     "!type": "fn()"
    },
    "firstFocusNode": {
     "!type": "fn()"
    },
    "forEachFocusNode": {
     "!type": "fn(callback: +function)"
    },
    "setAttribute": {},
    "getAttribute": {},
    "hasAttribute": {},
    "removeAttribute": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "attr": {},
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()"
    },
    "template": {},
    "render": {
     "!type": "fn()"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/FormWidget~node": {
    "tabIndex": {},
    "disabled": {},
    "alt": {}
   },
   "delite/FormWidget#refreshRendering": {
    "valueNode": {}
   },
   "delite/FormWidget~valueNode": {
    "value": {},
    "disabled": {},
    "name": {}
   },
   "delite/FormWidget#focus": {
    "focusNode": {}
   },
   "delite/FormWidget#createdCallback": {
    "attr": {},
    "idx": {}
   },
   "delite/handlebars": {
    "inVar": {},
    "i": {},
    "item": {},
    "xmlns": {},
    "attachPoints": {},
    "connects[undefined]": {},
    "value": {},
    "attributes[undefined]": {},
    "tag": {},
    "attributes": {},
    "connects": {},
    "children": {},
    "child": {},
    "lastRealNode": {},
    "templateText": {},
    "root": {}
   },
   "delite/handlebars~container": {
    "innerHTML": {}
   },
   "delite/HasDropDown": {
    "delite-before-show": {},
    "delite-after-show": {},
    "delite-before-hide": {},
    "delite-after-hide": {},
    "buttonNode": {},
    "popupStateNode": {},
    "aroundNode": {},
    "dropDown": {},
    "autoWidth": {},
    "forceWidth": {},
    "maxHeight": {},
    "dropDownPosition": {},
    "focusOnPointerOpen": {},
    "focusOnKeyboardOpen": {},
    "opened": {},
    "_dropDownPointerDownHandler": {
     "!type": "fn()"
    },
    "_docHandler": {},
    "_dropDownPointerUpHandler": {
     "!type": "fn(e: +Event)"
    },
    "overMenu": {},
    "t": {},
    "_focusDropDownOnOpen": {
     "!type": "fn(keyboard: bool)"
    },
    "_focusDropDownTimer": {},
    "postRender": {
     "!type": "fn()"
    },
    "hovering": {},
    "detachedCallback": {
     "!type": "fn()"
    },
    "destroy": {
     "!type": "fn()"
    },
    "_dropDownKeyDownHandler": {
     "!type": "fn(e: +Event)"
    },
    "_openOnKeyUp": {},
    "_dropDownKeyUpHandler": {
     "!type": "fn(e: +Event)"
    },
    "_deactivatedHandler": {
     "!type": "fn()"
    },
    "loadDropDown": {
     "!type": "fn() -> ?"
    },
    "setChild": {
     "!type": "fn()"
    },
    "dropdown": {},
    "toggleDropDown": {
     "!type": "fn()"
    },
    "openDropDown": {
     "!type": "fn() -> ?"
    },
    "_openDropDownPromise": {},
    "_currentDropDown": {},
    "child": {},
    "cancelable": {},
    "id": {},
    "parent": {},
    "popup": {},
    "around": {},
    "orient": {},
    "onExecute": {
     "!type": "fn()"
    },
    "onCancel": {
     "!type": "fn()"
    },
    "onClose": {
     "!type": "fn()"
    },
    "position": {},
    "_cancelPendingDisplay": {},
    "canceled": {},
    "closeDropDown": {
     "!type": "fn(focus: bool)"
    },
    "_previousDropDown": {},
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()"
    },
    "template": {},
    "render": {
     "!type": "fn()"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/HasDropDown#_dropDownPointerUpHandler": {
    "c": {},
    "t": {},
    "overMenu": {},
    "menuItem": {}
   },
   "delite/HasDropDown#_dropDownKeyDownHandler": {
    "dropDown": {},
    "target": {}
   },
   "delite/HasDropDown#loadDropDown": {
    "dropdown": {}
   },
   "delite/HasDropDown#openDropDown": {
    "canceled": {},
    "loadDropDownPromise": {}
   },
   "delite/HasDropDown~dropDown": {
    "_originalStyle": {}
   },
   "delite/HasDropDown~dropDown._popupWrapper.style": {
    "width": {},
    "left": {}
   },
   "delite/HasDropDown~dropDown.style": {
    "width": {}
   },
   "delite/HasDropDown#_currentDropDown.style": {
    "cssText": {}
   },
   "delite/KeyNav": {
    "keynav-child-navigated": {},
    "focusDescendants": {},
    "navigatedDescendant": {},
    "descendantSelector": {
     "!type": "string|+function"
    },
    "_getTargetElement": {
     "!type": "fn(evt: +Event)"
    },
    "child": {},
    "postRender": {
     "!type": "fn()"
    },
    "_selectorFunc": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "tabIndex": {},
    "homeKeyHandler": {
     "!type": "fn(evt: +Event, navigatedDescendant: +Element)"
    },
    "endKeyHandler": {
     "!type": "fn(evt: +Event, navigatedDescendant: +Element)"
    },
    "focus": {
     "!type": "fn()"
    },
    "navigateToFirst": {
     "!type": "fn(triggerEvent: +Event)"
    },
    "navigateToLast": {
     "!type": "fn(triggerEvent: +Event)"
    },
    "navigateTo": {
     "!type": "fn(child: +Element, last: bool, triggerEvent: +Event)"
    },
    "_keynavFocusHandler": {
     "!type": "fn(evt: +Event)"
    },
    "_savedTabIndex": {},
    "_keynavDeactivatedHandler": {
     "!type": "fn()"
    },
    "_descendantNavigateHandler": {
     "!type": "fn(child: +Element, triggerEvent: +Event)"
    },
    "oldValue": {},
    "newValue": {},
    "triggerEvent": {},
    "_searchString": {},
    "multiCharSearchDuration": {},
    "_keyboardSearchHandler": {
     "!type": "fn(item: +Element, evt: +Event, searchString: string, numMatches: number)"
    },
    "_keyboardSearchCompare": {
     "!type": "fn(item: +Element, searchString: string) -> ?"
    },
    "_keynavKeyDownHandler": {
     "!type": "fn(evt: +Event)"
    },
    "_applyKeyHandler": {
     "!type": "fn(evt: +Event)"
    },
    "methodName": {},
    "_keynavKeyPressHandler": {
     "!type": "fn(evt: +Event)"
    },
    "_keyboardSearch": {
     "!type": "fn(evt: +Event, keyChar: string)"
    },
    "searchString": {},
    "_searchTimer": {},
    "currentItem": {},
    "matchedItem": {},
    "numMatches": {},
    "getNext": {
     "!type": "fn(child: +Element, dir: number) -> ?"
    },
    "node": {},
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()"
    },
    "template": {},
    "render": {
     "!type": "fn()"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/KeyNav#_getTargetElement": {
    "child": {}
   },
   "delite/KeyNav#postRender": {
    "matchesFuncName": {}
   },
   "delite/KeyNav~child": {
    "tabIndex": {}
   },
   "delite/KeyNav#navigatedDescendant": {
    "tabIndex": {}
   },
   "delite/KeyNav#_keyboardSearchCompare": {
    "element": {},
    "text": {},
    "currentString": {}
   },
   "delite/KeyNav#_applyKeyHandler": {
    "methodName": {},
    "func": {}
   },
   "delite/KeyNav#_keyboardSearch": {
    "matchedItem": {},
    "searchString": {},
    "numMatches": {},
    "allSameLetter": {},
    "searchLen": {},
    "currentItem": {},
    "stop": {},
    "rc": {}
   },
   "delite/KeyNav#getNext": {
    "root": {},
    "origChild": {},
    "dfsNext": {
     "!type": "fn()"
    },
    "dfsLast": {
     "!type": "fn()"
    },
    "dfsPrev": {
     "!type": "fn()"
    }
   },
   "delite/on": {
    "type": {},
    "capture": {},
    "callback": {
     "!type": "fn()"
    },
    "U+0020": {},
    "U+0008": {},
    "U+0009": {},
    "U+001B": {},
    "": {},
    "U+00007F": {},
    "code": {},
    "remove": {
     "!type": "fn()"
    }
   },
   "delite/on~callback": {
    "key": {},
    "fixedKey": {}
   },
   "delite/on~event": {
    "key": {}
   },
   "delite/place": {
    "Position": {},
    "Rectangle": {},
    "LayoutFunc": {},
    "ChosenPosition": {},
    "L": {},
    "R": {},
    "M": {},
    "T": {},
    "B": {},
    "overflow": {},
    "best": {},
    "top": {},
    "side": {},
    "aroundNodePos": {},
    "t": {},
    "b": {},
    "sawPosAbsolute": {},
    "parent": {},
    "aroundCorner": {},
    "corner": {},
    "pos": {},
    "ltr": {},
    "w": {},
    "h": {},
    "style[undefined]": {},
    "x": {},
    "y": {}
   },
   "delite/place~style": {
    "left": {},
    "right": {},
    "visibility": {},
    "display": {},
    "top": {}
   },
   "delite/place~best": {
    "corner": {},
    "aroundCorner": {},
    "x": {},
    "y": {},
    "w": {},
    "h": {},
    "overflow": {},
    "spaceAvailable": {}
   },
   "delite/place~c.pos": {
    "x": {},
    "y": {}
   },
   "delite/place~aroundNodePos": {
    "y": {},
    "h": {},
    "x": {},
    "w": {}
   },
   "delite/place~pos": {
    "x": {},
    "y": {}
   },
   "delite/place~position": {
    "aroundNodePos": {}
   },
   "delite/popup": {
    "OpenArgs": {},
    "_stack": {},
    "_beginZIndex": {},
    "_idGen": {},
    "constructor": {
     "!type": "fn()"
    },
    "_checkScroll": {
     "!type": "fn()"
    },
    "_firstAroundPosition": {},
    "_aroundMoveListener": {},
    "_repositionAll": {
     "!type": "fn()"
    },
    "_viewportScrollHandler": {
     "!type": "fn()"
    },
    "_createWrapper": {
     "!type": "fn(widget: ?) -> ?"
    },
    "wrapper": {},
    "moveOffScreen": {
     "!type": "fn(widget: ?) -> ?"
    },
    "visibility": {},
    "top": {},
    "display": {},
    "style[undefined]": {},
    "detach": {
     "!type": "fn(widget: ?)"
    },
    "hide": {
     "!type": "fn(widget: ?)"
    },
    "height": {},
    "getTopPopup": {
     "!type": "fn() -> ?"
    },
    "open": {
     "!type": "fn(args: ?) -> ?"
    },
    "_prepareToOpen": {
     "!type": "fn(args: ?) -> ?"
    },
    "id": {},
    "className": {},
    "_firstAroundNode": {},
    "remove": {
     "!type": "fn()"
    },
    "_size": {
     "!type": "fn(args: ?, measureSize: bool) -> ?"
    },
    "maxHeight": {},
    "_position": {
     "!type": "fn(args: ?) -> ?"
    },
    "close": {
     "!type": "fn(popup: ?)"
    },
    "h": {}
   },
   "delite/popup~document.body": {
    "scrollTop": {}
   },
   "delite/popup._checkScroll": {
    "oldPos": {},
    "newPos": {},
    "dx": {},
    "dy": {}
   },
   "delite/popup._createWrapper": {
    "wrapper": {}
   },
   "delite/popup~wrapper": {
    "className": {},
    "_popupParent": {}
   },
   "delite/popup~wrapper.style": {
    "display": {},
    "zIndex": {},
    "visibility": {},
    "height": {},
    "width": {}
   },
   "delite/popup~widget": {
    "_popupWrapper": {},
    "id": {},
    "bgIframe": {}
   },
   "delite/popup.moveOffScreen": {
    "wrapper": {},
    "style": {},
    "ltr": {}
   },
   "delite/popup.hide": {
    "wrapper": {}
   },
   "delite/popup.getTopPopup": {
    "stack": {},
    "pi": {}
   },
   "delite/popup._prepareToOpen": {
    "stack": {},
    "widget": {},
    "around": {},
    "wrapper": {},
    "wrapperClasses": {},
    "handlers": {},
    "onKeyDown": {},
    "executeHandler": {},
    "stackEntry": {}
   },
   "delite/popup~widget.style": {
    "visibility": {},
    "height": {}
   },
   "delite/popup~stackEntry": {
    "wrapper": {},
    "handlers": {}
   },
   "delite/popup._size": {
    "widget": {},
    "wrapper": {},
    "around": {},
    "orient": {},
    "viewport": {},
    "maxHeight": {},
    "aroundPos": {}
   },
   "delite/popup~args": {
    "_naturalHeight": {},
    "_naturalWidth": {}
   },
   "delite/popup._position": {
    "widget": {},
    "wrapper": {},
    "around": {},
    "orient": {},
    "ltr": {},
    "layoutFunc": {}
   },
   "delite/popup.close": {
    "stack": {},
    "top": {},
    "widget": {},
    "onClose": {},
    "h": {}
   },
   "delite/register": {
    "a[undefined]": {},
    "configurable": {},
    "writable": {},
    "enumerable": {},
    "value": {},
    "createElement": {
     "!type": "fn(tag: string) -> ?"
    },
    "k": {},
    "props[undefined]": {},
    "proto": {},
    "upgrade": {
     "!type": "fn(element: +Element, attach: bool)"
    },
    "a": {},
    "base": {},
    "br": {},
    "button": {},
    "canvas": {},
    "div": {},
    "dl": {},
    "directory": {},
    "fieldset": {},
    "font": {},
    "form": {},
    "head": {},
    "h1": {},
    "html": {},
    "hr": {},
    "iframe": {},
    "img": {},
    "input": {},
    "label": {},
    "legend": {},
    "li": {},
    "link": {},
    "map": {},
    "menu": {},
    "meta": {},
    "ins": {},
    "object": {},
    "ol": {},
    "optgroup": {},
    "option": {},
    "p": {},
    "param": {},
    "pre": {},
    "quote": {},
    "script": {},
    "select": {},
    "style": {},
    "table": {},
    "caption": {},
    "col": {},
    "tr": {},
    "tbody": {},
    "textarea": {},
    "title": {},
    "ul": {},
    "video": {},
    "registry[undefined]": {},
    "node[undefined]": {},
    "node": {},
    "!type": "fn(tag: string, superclasses: [?], props: +Object) -> ?",
    "baseElement": {},
    "_extends": {},
    "parse": {
     "!type": "fn(root: +Element)"
    },
    "observer": {},
    "mutation[undefined]": {},
    "childList": {},
    "subtree": {},
    "added": {},
    "removedRoot": {},
    "removed": {},
    "initialParseComplete": {},
    "template": {},
    "child": {},
    "dcl": {
     "!type": "fn()"
    },
    "after": {
     "!type": "fn()"
    },
    "before": {
     "!type": "fn()"
    },
    "around": {
     "!type": "fn()"
    },
    "superCall": {
     "!type": "fn()"
    }
   },
   "delite/register~dcl": {
    "mix": {
     "!type": "fn()"
    }
   },
   "delite/register~dcl.mix": {
    "n": {}
   },
   "delite/register~element": {
    "_upgraded": {}
   },
   "delite/register~registry[undefined]": {
    "constructor": {}
   },
   "delite/register~config": {
    "extends": {},
    "props": {}
   },
   "delite/register~node.style": {
    "cssText": {}
   },
   "delite/register~tagConstructor": {
    "tag": {},
    "_ctor": {}
   },
   "delite/register~proto": {
    "_ctor": {},
    "_baseElement": {},
    "_tag": {},
    "_extends": {}
   },
   "delite/register~ctor": {
    "_propsToObserve": {},
    "introspected": {}
   },
   "delite/register~observer": {
    "takeRecords": {
     "!type": "fn()"
    },
    "_mutations": {},
    "_timer": {},
    "observe": {
     "!type": "fn()"
    },
    "_listener": {},
    "disconnect": {
     "!type": "fn()"
    }
   },
   "delite/register~observer.takeRecords": {
    "ret": {}
   },
   "delite/register~template": {
    "content": {}
   },
   "delite/register~register": {
    "upgrade": {},
    "createElement": {},
    "parse": {},
    "deliver": {},
    "dcl": {},
    "after": {},
    "before": {},
    "around": {},
    "superCall": {}
   },
   "delite/Scrollable": {
    "scrollDirection": {},
    "scrollableNode": {},
    "postRender": {
     "!type": "fn()"
    },
    "render": {
     "!type": "fn()"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "isTopScroll": {
     "!type": "fn() -> ?"
    },
    "isBottomScroll": {
     "!type": "fn() -> ?"
    },
    "isLeftScroll": {
     "!type": "fn() -> ?"
    },
    "isRightScroll": {
     "!type": "fn() -> ?"
    },
    "getCurrentScroll": {
     "!type": "fn() -> ?"
    },
    "x": {},
    "y": {},
    "scrollBy": {
     "!type": "fn(by: +Object, duration: number)"
    },
    "scrollTo": {
     "!type": "fn(to: +Object, duration: number)"
    },
    "duration": {},
    "rate": {},
    "step": {
     "!type": "fn()"
    },
    "complete": {
     "!type": "fn()"
    },
    "_stopAnimation": {
     "!type": "fn()"
    },
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()"
    },
    "template": {},
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/Scrollable#isBottomScroll": {
    "scrollableNode": {}
   },
   "delite/Scrollable#isRightScroll": {
    "scrollableNode": {}
   },
   "delite/Scrollable#scrollBy": {
    "to": {}
   },
   "delite/Scrollable~to": {
    "x": {},
    "y": {}
   },
   "delite/Scrollable#scrollTo": {
    "scrollableNode": {},
    "from": {},
    "self": {}
   },
   "delite/Scrollable~scrollableNode": {
    "scrollLeft": {},
    "scrollTop": {}
   },
   "delite/Scrollable#scrollTo~from": {
    "x": {},
    "y": {}
   },
   "delite/Scrollable~self": {
    "_animation": {}
   },
   "delite/Selection": {
    "selection-change": {},
    "preRender": {
     "!type": "fn()"
    },
    "selectionMode": {},
    "_setSelectionModeAttr": {
     "!type": "fn()"
    },
    "selectedItems": {},
    "selectedItem": {},
    "_setSelectedItemAttr": {
     "!type": "fn()"
    },
    "_setSelectedItemsAttr": {
     "!type": "fn()"
    },
    "_getSelectedItemsAttr": {
     "!type": "fn()"
    },
    "hasSelectionModifier": {
     "!type": "fn(event: +Event) -> ?"
    },
    "isSelected": {
     "!type": "fn(object: +item) -> ?"
    },
    "getIdentity": {
     "!type": "fn(object: +item) -> ?"
    },
    "updateRenderers": {
     "!type": "fn(items: [?])"
    },
    "setSelected": {
     "!type": "fn(item: +Object, value: bool)"
    },
    "_setSelected": {
     "!type": "fn()"
    },
    "sel": {},
    "identity": {},
    "res": {},
    "selectFromEvent": {
     "!type": "fn(event: +Event, item: +Object, renderer: +Object, dispatch: bool) -> ?"
    },
    "_selectFromEvent": {
     "!type": "fn()"
    },
    "changed": {},
    "dispatchSelectionChange": {
     "!type": "fn(oldSelectedItem: +Object, newSelectedItem: +Object, renderer: +Object, triggerEvent: +Event)"
    },
    "oldValue": {},
    "newValue": {},
    "renderer": {},
    "triggerEvent": {},
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "template": {},
    "render": {
     "!type": "fn()"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "postRender": {
     "!type": "fn()"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/Selection#_setSelectedItemsAttr": {
    "oldSelectedItems": {}
   },
   "delite/Selection#isSelected": {
    "identity": {}
   },
   "delite/Selection#_setSelected": {
    "sel": {},
    "res": {},
    "identity": {}
   },
   "delite/Selection#_selectFromEvent": {
    "changed": {},
    "oldSelectedItem": {},
    "selected": {}
   },
   "delite/Store": {
    "query-success": {},
    "store": {},
    "query": {},
    "processQueryResult": {
     "!type": "fn()"
    },
    "renderItems": {},
    "renderItemToItem": {
     "!type": "fn(renderItem: +Object) -> ?"
    },
    "itemToRenderItem": {
     "!type": "fn(item: +Object) -> ?"
    },
    "initItems": {
     "!type": "fn(renderItems: [?]) -> ?"
    },
    "cancelable": {},
    "bubbles": {},
    "computeProperties": {
     "!type": "fn(props: ?)"
    },
    "queryStoreAndInitItems": {
     "!type": "fn(processQueryResult: ?) -> ?"
    },
    "_attachedlistener": {},
    "collection": {},
    "_tracked": {},
    "processCollection": {
     "!type": "fn(collection: ?)"
    },
    "fetch": {
     "!type": "fn(collection: ?)"
    },
    "_queryError": {
     "!type": "fn()"
    },
    "error": {},
    "_untrack": {
     "!type": "fn()"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "destroy": {
     "!type": "fn()"
    },
    "itemRemoved": {
     "!type": "fn(index: number, renderItems: [?])"
    },
    "itemAdded": {
     "!type": "fn(index: number, renderItem: +Object, renderItems: [?])"
    },
    "itemUpdated": {
     "!type": "fn(index: number, renderItem: +Object, renderItems: [?])"
    },
    "itemMoved": {
     "!type": "fn(previousIndex: number, newIndex: number, renderItem: +Object, renderItems: [?])"
    },
    "_refreshHandler": {
     "!type": "fn()"
    },
    "_itemRemoved": {
     "!type": "fn(event: +Event)"
    },
    "_itemUpdated": {
     "!type": "fn(event: +Event)"
    },
    "_itemAdded": {
     "!type": "fn(event: +Event)"
    }
   },
   "delite/Store#queryStoreAndInitItems": {
    "collection": {}
   },
   "delite/StoreMap": {
    "item[undefined]": {},
    "allowRemap": {},
    "_mappedKeys": {},
    "copyAllItemProps": {},
    "parseAttribute": {},
    "name": {},
    "prop": {},
    "value": {},
    "queryStoreAndInitItems": {
     "!type": "fn(processQueryResult: ?) -> ?"
    },
    "_pendingQuery": {},
    "attachedCallback": {
     "!type": "fn()"
    },
    "_itemKeys": {},
    "renderItemToItem": {
     "!type": "fn(renderItem: +Object) -> ?"
    },
    "tmp[undefined]": {},
    "itemToRenderItem": {
     "!type": "fn(item: +Object) -> ?"
    },
    "renderItem[undefined]": {},
    "remap": {
     "!type": "fn()"
    },
    "items[undefined][undefined]": {},
    "query-success": {},
    "store": {},
    "query": {},
    "processQueryResult": {
     "!type": "fn()"
    },
    "renderItems": {},
    "initItems": {
     "!type": "fn(renderItems: [?]) -> ?"
    },
    "computeProperties": {
     "!type": "fn(props: ?)"
    },
    "_attachedlistener": {},
    "_tracked": {},
    "processCollection": {
     "!type": "fn(collection: ?)"
    },
    "fetch": {
     "!type": "fn(collection: ?)"
    },
    "_queryError": {
     "!type": "fn()"
    },
    "_untrack": {
     "!type": "fn()"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "destroy": {
     "!type": "fn()"
    },
    "itemRemoved": {
     "!type": "fn(index: number, renderItems: [?])"
    },
    "itemAdded": {
     "!type": "fn(index: number, renderItem: +Object, renderItems: [?])"
    },
    "itemUpdated": {
     "!type": "fn(index: number, renderItem: +Object, renderItems: [?])"
    },
    "itemMoved": {
     "!type": "fn(previousIndex: number, newIndex: number, renderItem: +Object, renderItems: [?])"
    },
    "_refreshHandler": {
     "!type": "fn()"
    },
    "_itemRemoved": {
     "!type": "fn(event: +Event)"
    },
    "_itemUpdated": {
     "!type": "fn(event: +Event)"
    },
    "_itemAdded": {
     "!type": "fn(event: +Event)"
    }
   },
   "delite/StoreMap#attachedCallback": {
    "mappedKeys": {},
    "prop": {},
    "match": {},
    "i": {}
   },
   "delite/StoreMap#renderItemToItem": {
    "tmp": {},
    "store": {},
    "key": {}
   },
   "delite/StoreMap#itemToRenderItem": {
    "renderItem": {},
    "mappedKeys": {},
    "store": {},
    "id": {},
    "i": {},
    "key": {}
   },
   "delite/StoreMap~renderItem": {
    "__item": {},
    "id": {}
   },
   "delite/StoreMap#remap": {
    "items": {},
    "mappedKeys": {},
    "i": {},
    "j": {}
   },
   "delite/Template": {
    "hash[undefined]": {},
    "!type": "fn(tree: +Object, rootNodeName: string, createRootNode: bool)",
    "constructor": {
     "!type": "fn()"
    },
    "buildText": {},
    "attachText": {},
    "detachText": {},
    "observeText": {},
    "dependsOn": {},
    "text": {},
    "func": {},
    "generateWatchCode": {
     "!type": "fn(dependencies: [?], statement: string)"
    },
    "dependsOn[undefined]": {},
    "generateNodeChildrenCode": {
     "!type": "fn(nodeName: string, children: [?])"
    },
    "generateNodeCode": {
     "!type": "fn(nodeName: string, createNode: bool, templateNode: +Object)"
    },
    "getElement": {
     "!type": "fn(tag: string) -> ?"
    },
    "elementCache[undefined]": {},
    "getProp": {
     "!type": "fn(tag: string, attrName: string) -> ?"
    },
    "attrMap[undefined]": {},
    "map[undefined]": {}
   },
   "delite/Template#generateNodeCode": {
    "ap": {},
    "attr": {},
    "js": {},
    "dependsOn": {},
    "propName": {},
    "type": {},
    "handler": {},
    "callback": {}
   },
   "delite/Template~Template": {
    "getElement": {
     "!type": "fn()"
    },
    "getProp": {
     "!type": "fn()"
    }
   },
   "delite/Template~Template.getProp": {
    "proto": {},
    "map": {},
    "prop": {}
   },
   "delite/Template~map": {
    "style": {}
   },
   "delite/theme": {
    "theme": {},
    "config": {},
    "resources": {},
    "writePluginFiles": {},
    "loadList": {}
   },
   "delite/theme~load": {
    "theme": {},
    "writeFile": {
     "!type": "fn()"
    },
    "onLayerEnd": {
     "!type": "fn()"
    }
   },
   "delite/theme~load.onLayerEnd": {
    "getLayerPath": {
     "!type": "fn()"
    },
    "success": {},
    "destMid": {}
   },
   "delite/theme~load.onLayerEnd~getLayerPath": {
    "pathRE": {}
   },
   "delite/uacss": {
    "classes[undefined]": {},
    "classStr": {}
   },
   "delite/uacss~classes": {
    "\"d-ie\"": {}
   },
   "delite/uacss~document.body": {
    "className": {}
   },
   "delite/Viewport": {
    "w": {},
    "h": {},
    "t": {},
    "l": {},
    "getEffectiveBox": {
     "!type": "fn()"
    },
    "oldEffectiveSize": {},
    "oldEffectiveScroll": {}
   },
   "delite/Viewport~Viewport": {
    "getEffectiveBox": {
     "!type": "fn()"
    }
   },
   "delite/Viewport~Viewport.getEffectiveBox": {
    "box": {},
    "focusedNode": {},
    "tag": {}
   },
   "delite/Viewport~box": {
    "h": {}
   },
   "delite/Widget": {
    "baseClass": {},
    "focused": {},
    "widgetId": {},
    "dir": {},
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()"
    },
    "template": {},
    "render": {
     "!type": "fn()"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)"
    },
    "node": {},
    "node[undefined]": {},
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)"
    },
    "postRender": {
     "!type": "fn()"
    },
    "detachedCallback": {
     "!type": "fn()"
    },
    "getParent": {
     "!type": "fn()"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?"
    },
    "type": {},
    "focus": {},
    "blur": {},
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?"
    },
    "reference": {},
    "c": {},
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)"
    },
    "Widget": {},
    "customelement-attached": {},
    "introspect": {
     "!type": "fn()"
    },
    "_nativePropSetterMap": {},
    "_nativeAttrs": {},
    "getProps": {
     "!type": "fn()"
    },
    "_propCaseMap": {},
    "_processNativeProps": {
     "!type": "fn()"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?"
    },
    "destroy": {
     "!type": "fn()"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)"
    }
   },
   "delite/Widget#style": {
    "direction": {}
   },
   "delite/Widget#setClassComponent": {
    "oldValProp": {}
   },
   "delite/Widget#placeAt": {
    "c": {},
    "parent": {},
    "children": {}
   }
  }
 }
};
    
})