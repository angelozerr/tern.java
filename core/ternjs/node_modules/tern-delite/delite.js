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
    "!doc": "<p>Accessibility utility functions (keyboard, tab stops, etc.).</p>",
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
    "!doc": "<p>When this module is loaded, pressing SPACE or ENTER while focused on an Element with a <code>d-keyboard-click</code>\nattribute will fire a synthetic click event on that Element. Also works if the event target's ancestor\nhas that attribute set.</p>\n<p>Usually this functionality is not necessary.  Rather, you should just make the focused Element a <code>&lt;button&gt;</code>,\nand then the browser does the same thing natively.\nThis module is usually only needed when a custom element itself (ex: <code>&lt;d-my-checkbox&gt;</code>)\ngets the focus rather than an Element inside of a custom element.</p>\n<p>Returns a convenience function to set <code>d-keyboard-click</code> on an Element.</p>",
    "node": {},
    "lastKeyDownNode": {}
   },
   "delite/activationTracker": {
    "!doc": "<p>Tracks which widgets are currently &quot;active&quot;.\nA widget is considered active if it or a descendant widget has focus,\nor if a non-focusable node of this widget or a descendant was the most recent node\nto get a touchstart/mousedown/pointerdown event.</p>\n<p>Emits non-bubbling <code>delite-activated</code> and <code>delite-deactivated</code> events on widgets\nas they become active, or stop being active, as defined above.</p>\n<p>Call <code>activationTracker.on(&quot;active-widget-stack&quot;, callback)</code> to track the stack of currently active widgets.</p>\n<p>Call <code>activationTracker.on(&quot;deactivated&quot;, func)</code> or <code>activationTracker.on(&quot;activated&quot;, ...)</code> to monitor when\nwhen widgets become active/inactive.</p>",
    "activeStack": {},
    "registerIframe": {
     "!type": "fn(iframe: +HTMLIframeElement) -> ?",
     "!doc": "<p>Registers listeners on the specified iframe so that any pointerdown\nor focus event on that iframe (or anything in it) is reported\nas a focus/pointerdown event on the <code>&lt;iframe&gt;</code> itself.</p>\n<p>In dijit this was only used by editor; perhaps it should be removed.</p>"
    },
    "registerWin": {
     "!type": "fn(targetWindow: +Window, effectiveNode: +Element) -> ?",
     "!doc": "<p>Registers listeners on the specified window (either the main\nwindow or an iframe's window) to detect when the user has touched / mouse-downed /\nfocused somewhere.</p>\n<p>Users should call registerIframe() instead of this method.</p>",
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
    "lastPointerDownTime": {},
    "registerWin~focusHandler": {
     "tag": {}
    },
    "remove": {
     "!type": "fn()"
    },
    "_blurHandler": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Called when focus leaves a node.\nUsually ignored, <em>unless</em> it <em>isn't</em> followed by touching another node,\nwhich indicates that we tabbed off the last field on the page,\nin which case every widget is marked inactive.</p>",
     "now": {}
    },
    "_clearActiveWidgetsTimer": {},
    "_pointerDownOrFocusHandler": {
     "!type": "fn(node: +Element, by: string)",
     "!doc": "<p>Callback when node is focused or pointerdown'd.</p>",
     "newStack": {}
    },
    "lastPointerDownOrFocusInTime": {},
    "lastPointerDownOrFocusInNode": {},
    "node": {},
    "_focusHandler": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Callback when node is focused.</p>"
    },
    "lastFocusinTime": {},
    "_setStack": {
     "!type": "fn(newStack: [?], by: string)",
     "!doc": "<p>The stack of active widgets has changed.  Send out appropriate events and records new stack.</p>",
     "oldStack": {},
     "lastOldIdx": {},
     "lastNewIdx": {},
     "widget": {},
     "i": {}
    },
    "i": {},
    "widget": {},
    "bubbles": {},
    "by": {}
   },
   "delite/BackgroundIframe": {
    "!type": "fn(node: +Element)",
    "!doc": "<p>Makes a background iframe as a child of node.  Iframe fills area (and position) of node.</p>",
    "iframe": {},
    "constructor": {
     "!type": "fn()"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Destroy the iframe.</p>"
    }
   },
   "delite/BackgroundIframe~iframe": {
    "style": {
     "display": {},
     "width": {},
     "height": {}
    },
    "src": {},
    "className": {},
    "tabIndex": {}
   },
   "delite/BackgroundIframe#constructor": {
    "iframe": {}
   },
   "delite/Bidi": {
    "!doc": "<p>When has(&quot;bidi&quot;) is true, delite/Widget will mix in the properties in this module.\n    It enables support for the <code>textdir</code> property to control text direction independently from the GUI direction.</p>",
    "textDir": {},
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Return the direction setting for the page itself, or if <code>has(&quot;inherited-dir&quot;)</code> is defined and the widget is\nattached to the page, then return the dir setting inherited from any ancestor node.</p>"
    },
    "attachedCallback": {
     "!type": "fn()"
    },
    "_inheritedDir": {},
    "getTextDir": {
     "!type": "fn(text: string) -> ?",
     "!doc": "<p>Returns the right direction of text.</p>\n<p>If textDir is ltr or rtl, returns the value.\nIf it's auto, calls to another function that's responsible\nfor checking the value, and defining the direction.</p>"
    },
    "_checkContextual": {
     "!type": "fn(text: string) -> ?",
     "!doc": "<p>Finds the first strong (directional) character, return ltr if isLatin or rtl if isBidiChar.</p>",
     "fdc": {}
    },
    "applyTextDir": {
     "!type": "fn(element: +HTMLElement)",
     "!doc": "<p>Set element.dir according to this.textDir.</p>",
     "textDir": {},
     "tagName": {},
     "text": {}
    },
    "applyTextDirection": {
     "!type": "fn(text: string) -> ?",
     "!doc": "<p>Enforce base direction of the given text according to this.textDir.</p>"
    },
    "wrapWithUcc": {
     "!type": "fn(text: string) -> ?",
     "!doc": "<p>Returns specified text with UCC added to enforce widget's textDir setting.</p>",
     "dir": {}
    },
    "removeUcc": {
     "!type": "fn(text: string) -> ?",
     "!doc": "<p>Removes UCC from specified text.</p>"
    },
    "enforceTextDirWithUcc": {
     "!type": "fn(node: +HTMLOptionElement)",
     "!doc": "<p>Wraps by UCC (Unicode control characters) option's text according to this.textDir.</p>\n<p>This function saves the original text value for later restoration if needed,\nfor example if the textDir will change etc.</p>"
    },
    "restoreOriginalText": {
     "!type": "fn(origObj: +HTMLOptionElement)",
     "!doc": "<p>Restores the text of origObj, if needed, after enforceTextDirWithUcc, for example\nafter <code>myWidget.textDir = &quot;ltr&quot;</code>.  The function then removes the originalText from origObj!</p>"
    }
   },
   "delite/Bidi~element": {
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
    "delite-add-child": {
     "!doc": "<p>Dispatched after an Element has been added as child of this widget.</p>"
    },
    "delite-remove-child": {
     "!doc": "<p>Dispatched after an child Element has been removed from this widget.</p>"
    },
    "!doc": "<p>Base class for widgets that contain content.\nUseful both for widgets that contain free-form markup (ex: ContentPane),\nand widgets that contain an ordered list of children (ex: Toolbar).</p>\n<p>Note that Container is not meant to be used for widgets that just internally create child\nwidgets (ex: a StarRating widget creates stars), but rather for when the widget has children from\nthe application's perspective (i.e. from the perspective of the widget <em>user</em> rather\nthan the widget <em>author</em>).</p>",
    "containerNode": {},
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
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
     "!type": "fn(node: +Element)",
     "!doc": "<p>Callback whenever a child element is added to this widget via <code>appendChild()</code>, <code>insertBefore()</code>,\nor a method like <code>addChild()</code> that internally calls <code>appendChild()</code> and/or <code>insertBefore()</code>.</p>"
    },
    "bubbles": {},
    "cancelable": {},
    "child": {},
    "addChild": {
     "!type": "fn(node: +Element, insertIndex: number)",
     "!doc": "<p>Inserts the specified Element at the specified index.\nFor example, <code>.addChild(node, 3)</code> sets this widget's fourth child to node.</p>"
    },
    "removeChild": {
     "!type": "fn(node: +Element|number)",
     "!doc": "<p>Detaches the specified node instance from this widget but does\nnot destroy it.  You can also pass in an integer indicating\nthe index within the container to remove (ie, removeChild(5) removes the sixth node).</p>"
    },
    "node": {},
    "getChildren": {
     "!type": "fn() -> ?",
     "!doc": "<p>Returns all direct children of this widget, i.e. all widgets or DOM nodes underneath\n<code>this.containerNode</code>.  Note that it does not return all\ndescendants, but rather just direct children.</p>\n<p>The result intentionally excludes element outside off <code>this.containerNode</code>.  So, it is different than\naccessing the <code>children</code> or <code>childNode</code> properties.</p>"
    },
    "hasChildren": {
     "!type": "fn() -> ?",
     "!doc": "<p>Returns true if widget has child nodes, i.e. if <code>this.containerNode</code> contains widgets.</p>"
    },
    "getIndexOfChild": {
     "!type": "fn(child: +Element) -> ?",
     "!doc": "<p>Returns the index of the child in this container or -1 if not found.</p>"
    },
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
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
    "!doc": "<p>Update the visual state of the widget by setting CSS classes on widget root node\nbased on widget properties:</p>\n<ul>\n<li><code>this.disabled</code> --&gt; <code>d-disabled</code></li>\n<li><code>this.readOnly</code> --&gt; <code>d-readonly</code></li>\n<li><code>this.selected</code> --&gt; <code>d-selected</code> (ex: currently selected tab)</li>\n<li><code>this.checked == true</code> --&gt; <code>d-checked</code> (ex: a checkbox or a ToggleButton in a checked state)</li>\n<li><code>this.checked == &quot;mixed&quot;</code> --&gt; <code>d-mixed</code> (half-checked aka indeterminate checkbox)</li>\n<li><code>this.state == &quot;Error&quot;</code> --&gt; <code>d-error</code> (ValidationTextBox value is invalid)</li>\n<li><code>this.state == &quot;Incomplete&quot;</code> --&gt; <code>d-incomplete</code> (user hasn't finished typing value yet)</li>\n</ul>",
    "booleanCssProps": {},
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
    }
   },
   "delite/CustomElement": {
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
    "getProps": {
     "!type": "fn()"
    },
    "dir": {},
    "_setDirAttr": {
     "!type": "fn()"
    },
    "works": {},
    "!doc": "<p>Base class for all custom elements.</p>\n<p>Use this class rather that delite/Widget for non-visual custom elements.\nCustom elements can provide custom setters/getters for properties, which are called automatically\nwhen the value is set.  For an attribute XXX, define methods _setXXXAttr() and/or _getXXXAttr().</p>",
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
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
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "bubbles": {},
    "cancelable": {},
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "obj": {},
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "name": {},
    "prop": {},
    "value": {},
    "event": {},
    "callback": {},
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "attr": {},
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "eventObj": {},
    "nativeEvent[undefined]": {},
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
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
    "!doc": "<p>Base class for modal dialogs, where tabbing from the last element loops to the first, and vice-versa.</p>",
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "_getFocusItems": {
     "!type": "fn()"
    },
    "_firstFocusItem": {},
    "_lastFocusItem": {},
    "_dialogKeyDownHandler": {
     "!type": "fn()"
    },
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
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
    "!doc": "<p>A component used to block input behind a Dialog widget.</p>\n<p>Normally this widget should not be instantiated directly, but rather shown and hidden via\n<code>DialogUnderlay.show()</code> and <code>DialogUnderlay.hide()</code>.  And usually the module is not accessed directly\nat all, since the underlay is shown and hidden by the Dialog.</p>",
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
     "!type": "fn()",
     "!doc": "<p>Sets the background to the size of the viewport (rather than the size\nof the document) since we need to cover the whole browser window, even\nif the document is only a few lines long.</p>"
    },
    "show": {
     "!type": "fn()",
     "!doc": "<p>Show the dialog underlay (instance method).</p>"
    },
    "_open": {},
    "bgIframe": {},
    "hide": {
     "!type": "fn()",
     "!doc": "<p>Hide the dialog underlay (instance method).</p>"
    },
    "DialogUnderlay.show": {
     "!type": "fn(attrs: +Object, zIndex: number)",
     "!doc": "<p>Static method to display the underlay with the given attributes set.  If the underlay is already displayed,\nthen adjust it's attributes as specified.</p>"
    },
    "DialogUnderlay": {
     "show": {
      "underlay": {}
     },
     "hide": {
      "underlay": {}
     }
    },
    "underlay": {},
    "DialogUnderlay.hide": {
     "!type": "fn()",
     "!doc": "<p>Static method to hide the underlay.</p>"
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
   "delite/DialogUnderlay~DialogUnderlay": {
    "_singleton": {}
   },
   "delite/DialogUnderlay~underlay": {
    "style": {
     "zIndex": {}
    }
   },
   "delite/DisplayContainer": {
    "delite-before-show": {
     "!doc": "<p>Dispatched before child is shown.</p>"
    },
    "delite-after-show": {
     "!doc": "<p>Dispatched after child is shown.</p>"
    },
    "delite-display-load": {
     "!doc": "<p>Dispatched to let an application level listener create/load the child node.</p>"
    },
    "delite-before-hide": {
     "!doc": "<p>Dispatched before child is hidden.</p>"
    },
    "delite-after-hide": {
     "!doc": "<p>Dispatched after child is hidden.</p>"
    },
    "!doc": "<p>Mixin for widget containers that need to show on or off a child.</p>\n<p>When the show method is called a container extending this mixin is able to be notified that one of\nits children must be displayed. Before displaying it, it will fire the <code>delite-display-load</code> event\ngiving a chance to a listener to load and create the child if not yet available before proceeding with\nthe display. After the display has been performed a <code>delite-display-complete</code> event will be fired.</p>",
    "show": {
     "!type": "fn(dest: +Element|string, params: +Object) -> ?",
     "!doc": "<p>This method must be called to display a particular destination child on this container.</p>"
    },
    "child": {},
    "event": {},
    "hide": {
     "!type": "fn(dest: +Element|string, params: +Object) -> ?",
     "!doc": "<p>This method must be called to hide a particular destination child on this container.</p>"
    },
    "changeDisplay": {
     "!type": "fn(widget: +Element|string, params: +Object) -> ?",
     "!doc": "<p>This method must perform the display and possible transition effect.  It is meant to be specialized by\nsubclasses.</p>"
    },
    "load": {
     "!type": "fn(widget: +Element|string) -> ?",
     "!doc": "<p>This method can be redefined to load a child of the container.  By default it just looks up\nelements by id.</p>"
    },
    "delite-add-child": {
     "!doc": "<p>Dispatched after an Element has been added as child of this widget.</p>"
    },
    "delite-remove-child": {
     "!doc": "<p>Dispatched after an child Element has been removed from this widget.</p>"
    },
    "containerNode": {},
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
    },
    "_srcDom": {},
    "appendChild": {},
    "insertBefore": {},
    "onAddChild": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Callback whenever a child element is added to this widget via <code>appendChild()</code>, <code>insertBefore()</code>,\nor a method like <code>addChild()</code> that internally calls <code>appendChild()</code> and/or <code>insertBefore()</code>.</p>"
    },
    "addChild": {
     "!type": "fn(node: +Element, insertIndex: number)",
     "!doc": "<p>Inserts the specified Element at the specified index.\nFor example, <code>.addChild(node, 3)</code> sets this widget's fourth child to node.</p>"
    },
    "removeChild": {
     "!type": "fn(node: +Element|number)",
     "!doc": "<p>Detaches the specified node instance from this widget but does\nnot destroy it.  You can also pass in an integer indicating\nthe index within the container to remove (ie, removeChild(5) removes the sixth node).</p>"
    },
    "getChildren": {
     "!type": "fn() -> ?",
     "!doc": "<p>Returns all direct children of this widget, i.e. all widgets or DOM nodes underneath\n<code>this.containerNode</code>.  Note that it does not return all\ndescendants, but rather just direct children.</p>\n<p>The result intentionally excludes element outside off <code>this.containerNode</code>.  So, it is different than\naccessing the <code>children</code> or <code>childNode</code> properties.</p>"
    },
    "hasChildren": {
     "!type": "fn() -> ?",
     "!doc": "<p>Returns true if widget has child nodes, i.e. if <code>this.containerNode</code> contains widgets.</p>"
    },
    "getIndexOfChild": {
     "!type": "fn(child: +Element) -> ?",
     "!doc": "<p>Returns the index of the child in this container or -1 if not found.</p>"
    },
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
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
   "delite/DisplayContainer~widget": {
    "style": {
     "visibility": {},
     "display": {}
    }
   },
   "delite/FormValueWidget": {
    "!doc": "<p>Base class intended for form widgets that have end user changeable values, i.e.\nwidgets where the user can interactively change the value property by using the mouse, keyboard, touch, etc.</p>\n<p>FormValueWidget extends FormWidget to:</p>\n<ol>\n<li>Provide helper functions to emit <code>change</code> and <code>input</code> events when the widget's value is interactively changed\nby the end user.  Subclasses of FormValueWidget should call <code>handleOnChange()</code> and\n<code>handleOnInput()</code> to fire <code>change</code> and <code>input</code> events as the value changes.  See\nhttps://html.spec.whatwg.org/multipage/forms.html#common-input-element-events for details.</li>\n<li>Provide handling for the <code>readOnly</code> property.</li>\n</ol>",
    "this[undefined]": {},
    "readOnly": {
     "!doc": "<p>If true, this widget won't respond to user input.  Similar to <code>disabled</code> except\n<code>readOnly</code> form values are submitted.  FormValueWidget automatically updates\n<code>focusNode</code>'s <code>readOnly</code> property to match the widget's <code>readOnly</code> property.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "compare": {
     "!type": "fn(val1: ?, val2: ?) -> ?",
     "!doc": "<p>Compare two values (of this widget).</p>"
    },
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "_previousOnChangeValue": {},
    "_previousOnInputValue": {},
    "handleOnChange": {
     "!type": "fn(newValue: ?)",
     "!doc": "<p>Sets value and fires a &quot;change&quot; event if the value changed since the last call.</p>\n<p>This method should be called when the value is committed,\nif that makes sense for the control, or else when the control loses focus.\nFor example, it should be called when the user releases a slider's handle after dragging it,\nor when the user blurs a textbox.\nSee https://html.spec.whatwg.org/multipage/forms.html#common-input-element-events for details.</p>"
    },
    "handleOnInput": {
     "!type": "fn(newValue: ?)",
     "!doc": "<p>Sets value and fires an &quot;input&quot; event if the value changed since the last call.</p>\n<p>This method should be called whenever the value is changed interactively by the end user.\nFor example, it should be called repeatedly as the user drags the handle of a slider,\nor on every keystroke for a textbox.\nSee https://html.spec.whatwg.org/multipage/forms.html#common-input-element-events for details.</p>"
    },
    "name": {
     "!doc": "<p>Name used when submitting form; same as &quot;name&quot; attribute or plain HTML elements.</p>"
    },
    "alt": {
     "!doc": "<p>Corresponds to the native HTML <code>&lt;input&gt;</code> element's attribute.</p>"
    },
    "value": {
     "!doc": "<p>Corresponds to the native HTML <code>&lt;input&gt;</code> element's attribute.</p>\n<p>For widgets that directly extend FormWidget (ex: checkboxes), the value is set programatically when the\nwidget is created, and the end user merely changes the widget's state, i.e. the <code>checked</code> property.</p>\n<p>For widgets that extend FormValueWidget, the end user can interactively change the <code>value</code> property via\nmouse, keyboard, touch, etc.</p>"
    },
    "tabIndex": {
     "!doc": "<p>The order in which fields are traversed when user presses the tab key.</p>"
    },
    "tabStops": {
     "!doc": "<p>Comma separated list of tabbable nodes, i.e. comma separated list of widget properties that reference\nthe widget DOM nodes that receive focus during tab operations.</p>\n<p>Aria roles are applied to these nodes rather than the widget root node.</p>\n<p>Note that FormWidget requires that all of the tabbable nodes be sub-nodes of the widget, rather than the\nroot node.  This is because of its processing of <code>tabIndex</code>.</p>"
    },
    "disabled": {
     "!doc": "<p>If set to true, the widget will not respond to user input and will not be included in form submission.\nFormWidget automatically updates <code>valueNode</code>'s and <code>focusNode</code>'s <code>disabled</code> property to match the widget's\n<code>disabled</code> property.</p>"
    },
    "focusNode": {
     "!doc": "<p>For widgets with a single tab stop, the Element within the widget, often an <code>&lt;input&gt;</code>,\nthat gets the focus.  Widgets with multiple tab stops, such as a range slider, should set <code>tabStops</code>\nrather than setting <code>focusNode</code>.</p>"
    },
    "valueNode": {
     "!doc": "<p>A form element, typically an <code>&lt;input&gt;</code>, embedded within the widget, and likely hidden.\nIt is used to represent the widget's state/value during form submission.</p>\n<p>Subclasses of FormWidget like checkboxes and radios should update <code>valueNode</code>'s <code>checked</code> property.</p>"
    },
    "focus": {
     "!type": "fn()",
     "!doc": "<p>Put focus on this widget.</p>"
    },
    "firstFocusNode": {
     "!type": "fn()",
     "!doc": "<p>Helper method to get the first focusable node, usually <code>this.focusNode</code>.</p>"
    },
    "forEachFocusNode": {
     "!type": "fn(callback: +function)",
     "!doc": "<p>Helper method to execute callback for each focusable node in the widget.\nTypically the callback is just called once, for <code>this.focusNode</code>.</p>"
    },
    "setAttribute": {},
    "getAttribute": {},
    "hasAttribute": {},
    "removeAttribute": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
    }
   },
   "delite/FormValueWidget~node": {
    "readOnly": {}
   },
   "delite/FormWidget": {
    "!doc": "<p>Base class for widgets that extend <code>HTMLElement</code>, but conceptually correspond to form elements.</p>\n<p>Most form widgets should extend FormValueWidget rather than extending FormWidget directly, but\nFormWidget should be the base class for form widgets that <em>don't</em> have an end user settable value,\nfor example checkboxes and buttons.  Note that clicking a checkbox changes its state (i.e. the value of\nits <code>checked</code> property), but does not change its <code>value</code> property.</p>\n<p>Also note that both this widget and KeyNav define the <code>focus()</code> method, so if your widget extends both classes,\ntake care that the <code>focus()</code> method you want takes precedence in the inheritance hierarchy.</p>",
    "name": {
     "!doc": "<p>Name used when submitting form; same as &quot;name&quot; attribute or plain HTML elements.</p>"
    },
    "alt": {
     "!doc": "<p>Corresponds to the native HTML <code>&lt;input&gt;</code> element's attribute.</p>"
    },
    "value": {
     "!doc": "<p>Corresponds to the native HTML <code>&lt;input&gt;</code> element's attribute.</p>\n<p>For widgets that directly extend FormWidget (ex: checkboxes), the value is set programatically when the\nwidget is created, and the end user merely changes the widget's state, i.e. the <code>checked</code> property.</p>\n<p>For widgets that extend FormValueWidget, the end user can interactively change the <code>value</code> property via\nmouse, keyboard, touch, etc.</p>"
    },
    "tabIndex": {
     "!doc": "<p>The order in which fields are traversed when user presses the tab key.</p>"
    },
    "tabStops": {
     "!doc": "<p>Comma separated list of tabbable nodes, i.e. comma separated list of widget properties that reference\nthe widget DOM nodes that receive focus during tab operations.</p>\n<p>Aria roles are applied to these nodes rather than the widget root node.</p>\n<p>Note that FormWidget requires that all of the tabbable nodes be sub-nodes of the widget, rather than the\nroot node.  This is because of its processing of <code>tabIndex</code>.</p>"
    },
    "disabled": {
     "!doc": "<p>If set to true, the widget will not respond to user input and will not be included in form submission.\nFormWidget automatically updates <code>valueNode</code>'s and <code>focusNode</code>'s <code>disabled</code> property to match the widget's\n<code>disabled</code> property.</p>"
    },
    "focusNode": {
     "!doc": "<p>For widgets with a single tab stop, the Element within the widget, often an <code>&lt;input&gt;</code>,\nthat gets the focus.  Widgets with multiple tab stops, such as a range slider, should set <code>tabStops</code>\nrather than setting <code>focusNode</code>.</p>"
    },
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "valueNode": {
     "!doc": "<p>A form element, typically an <code>&lt;input&gt;</code>, embedded within the widget, and likely hidden.\nIt is used to represent the widget's state/value during form submission.</p>\n<p>Subclasses of FormWidget like checkboxes and radios should update <code>valueNode</code>'s <code>checked</code> property.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "focus": {
     "!type": "fn()",
     "!doc": "<p>Put focus on this widget.</p>"
    },
    "firstFocusNode": {
     "!type": "fn()",
     "!doc": "<p>Helper method to get the first focusable node, usually <code>this.focusNode</code>.</p>"
    },
    "forEachFocusNode": {
     "!type": "fn(callback: +function)",
     "!doc": "<p>Helper method to execute callback for each focusable node in the widget.\nTypically the callback is just called once, for <code>this.focusNode</code>.</p>"
    },
    "setAttribute": {},
    "getAttribute": {},
    "hasAttribute": {},
    "removeAttribute": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "attr": {},
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
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
    "!doc": "<p>Plugin that loads a handlebars template from a specified MID and returns a function to\ngenerate DOM corresponding to that template.</p>\n<p>When that function is run, it returns another function,\nmeant to be run when the widget properties change.  The returned function will update the\nDOM corresponding to the widget property changes.</p>\n<p>Both functions are meant\nto be run in the context of the widget, so that properties are available through <code>this</code>.</p>\n<p>Could also theoretically be used by a build-tool to precompile templates, assuming you loaded\n<a href=\"https://github.com/tmpvar/jsdom\">jsdom</a> to provide methods like <code>document.createElement()</code>.</p>\n<p>Template has a format like:</p>\n<pre class=\"prettyprint source\"><code><button>\n  <span class=\"d-reset {{iconClass}}\"></span>\n  {{label}}\n</button></code></pre><p>Usage is typically like:</p>\n<pre class=\"prettyprint source\"><code>define([..., \"delite/handlebars!./templates/MyTemplate.html\"], function(..., template){\n    ...\n    template: template,\n    ...\n});</code></pre>",
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
    "delite-before-show": {
     "!doc": "<p>Dispatched before popup widget is shown.</p>"
    },
    "delite-after-show": {
     "!doc": "<p>Dispatched after popup widget is shown.</p>"
    },
    "delite-before-hide": {
     "!doc": "<p>Dispatched before popup widget is hidden.</p>"
    },
    "delite-after-hide": {
     "!doc": "<p>Dispatched after popup widget is hidden.</p>"
    },
    "!doc": "<p>Base class for widgets that need drop down ability.</p>",
    "buttonNode": {},
    "popupStateNode": {},
    "aroundNode": {
     "!doc": "<p>The node to display the popup around.\nCan be set in a template via a <code>attach-point</code> assignment.\nIf missing, then <code>this.domNode</code> will be used.</p>"
    },
    "dropDown": {},
    "autoWidth": {
     "!doc": "<p>If true, make the drop down at least as wide as this widget.\nIf false, leave the drop down at its default width.\nHas no effect when <code>dropDownPosition = [&quot;center&quot;]</code>.</p>"
    },
    "forceWidth": {
     "!doc": "<p>If true, make the drop down exactly as wide as this widget.  Overrides <code>autoWidth</code>.\nHas no effect when <code>dropDownPosition = [&quot;center&quot;]</code>.</p>"
    },
    "maxHeight": {},
    "dropDownPosition": {
     "!doc": "<p>Controls the position of the drop down.\nIt's an array of strings with the following values:</p>\n<ul>\n<li>before: places drop down to the left of the target node/widget, or to the right in\nthe case of RTL scripts like Hebrew and Arabic</li>\n<li>after: places drop down to the right of the target node/widget, or to the left in\nthe case of RTL scripts like Hebrew and Arabic</li>\n<li>above: drop down goes above target node</li>\n<li>below: drop down goes below target node</li>\n<li>center: drop down is centered on the screen, like a dialog; when used, this should be\nthe only choice in the array</li>\n</ul>\n<p>The positions are tried, in order, until a position is found where the drop down fits\nwithin the viewport.</p>"
    },
    "focusOnPointerOpen": {
     "!doc": "<p>Focus the popup when opened by mouse or touch.  This flag should generally be left as <code>true</code> unless\nthe popup is a menu.  Usually drop down menus don't get focus unless opened by the keyboard.</p>"
    },
    "focusOnKeyboardOpen": {
     "!doc": "<p>Focus the popup when opened by the keyboard.  This flag should be left as <code>true</code> except for widgets\nlike Combobox where the focus is meant to always remain on the HasDropDown widget itself.</p>"
    },
    "opened": {},
    "_dropDownPointerDownHandler": {
     "!type": "fn()",
     "!doc": "<p>Callback when the user mousedown/touchstart on the arrow icon.</p>"
    },
    "_docHandler": {},
    "_dropDownPointerUpHandler": {
     "!type": "fn(e: +Event)",
     "!doc": "<p>Callback on mouseup/touchend after mousedown/touchstart on the arrow icon.\nNote that this function is called regardless of what node the event occurred on (but only after\na mousedown/touchstart on the arrow).</p>\n<p>If the drop down is a simple menu and the cursor is over the menu, we execute it, otherwise,\nwe focus our drop down widget.  If the event is missing, then we are not a mouseup event.</p>\n<p>This is useful for the common mouse movement pattern with native browser <code>&lt;select&gt;</code> nodes:</p>\n<ol>\n<li>mouse down on the select node (probably on the arrow)</li>\n<li>move mouse to a menu item while holding down the mouse button</li>\n<li>mouse up; this selects the menu item as though the user had clicked it</li>\n</ol>"
    },
    "overMenu": {},
    "t": {},
    "_focusDropDownOnOpen": {
     "!type": "fn(keyboard: bool)",
     "!doc": "<p>Helper function to focus the dropdown when it finishes loading and opening,\nbased on <code>focusOnPointerOpen</code> and <code>focusOnKeyboardOpen</code> properties.</p>"
    },
    "_focusDropDownTimer": {},
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "hovering": {},
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "_dropDownKeyDownHandler": {
     "!type": "fn(e: +Event)",
     "!doc": "<p>Callback when the user presses a key while focused on the button node.</p>"
    },
    "_openOnKeyUp": {},
    "_dropDownKeyUpHandler": {
     "!type": "fn(e: +Event)",
     "!doc": "<p>Callback when the user releases a key while focused on the button node.</p>"
    },
    "_deactivatedHandler": {
     "!type": "fn()"
    },
    "loadDropDown": {
     "!type": "fn() -> ?",
     "!doc": "<p>Creates/loads the drop down.\nReturns a Promise for the dropdown, or if loaded synchronously, the dropdown itself.</p>\n<p>Applications must either:</p>\n<ol>\n<li>set the <code>dropDown</code> property to point to the dropdown (as an initialisation parameter)</li>\n<li>override this method to create custom drop downs on the fly, returning a reference or promise\nfor the dropdown</li>\n<li>listen for a <code>delite-display-load</code> event, and then call event.setChild() with an Object like\n<code>{child: dropDown}</code> or a Promise for such an Object</li>\n</ol>\n<p>With option (2) or (3) the application is responsible for destroying the dropdown.</p>"
    },
    "setChild": {
     "!type": "fn()"
    },
    "dropdown": {},
    "toggleDropDown": {
     "!type": "fn()",
     "!doc": "<p>Toggle the drop-down widget; if it is open, close it, if not, open it.\nCalled when the user presses the down arrow button or presses\nthe down arrow key to open/close the drop down.</p>"
    },
    "openDropDown": {
     "!type": "fn() -> ?",
     "!doc": "<p>Creates the drop down if it doesn't exist, loads the data\nif there's an href and it hasn't been loaded yet, and\nthen opens the drop down.  This is basically a callback when the\nuser presses the down arrow button to open the drop down.</p>"
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
     "!type": "fn(focus: bool)",
     "!doc": "<p>Closes the drop down on this widget.</p>"
    },
    "_previousDropDown": {},
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
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
    "_originalStyle": {},
    "_popupWrapper": {
     "style": {
      "width": {},
      "left": {}
     }
    },
    "style": {
     "width": {}
    }
   },
   "delite/HasDropDown#_currentDropDown": {
    "style": {
     "cssText": {}
    }
   },
   "delite/KeyNav": {
    "keynav-child-navigated": {
     "!doc": "<p>Dispatched after the user has selected a different descendant, by clicking, arrow keys,\nor keyboard search.</p>"
    },
    "!doc": "<p>A mixin to allow arrow key and letter key navigation of child Elements.\nIt can be used by delite/Container based widgets with a flat list of children,\nor more complex widgets like a Tree.</p>\n<p>To use this mixin, the subclass must:</p>\n<ul>\n<li>Implement one method for each keystroke that subclass wants to handle, with names based on the key names\ndefined by https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key.  For example, <code>DOWN_ARROW</code> --&gt;\n<code>downKeyHandler()</code>.\nThe method takes two parameters: the events, and the currently navigated node.\nFor BIDI support, the left and right arrows are handled specially, mapped to the <code>previousKeyHandler()</code>\nand <code>nextKeyHandler()</code> methods in LTR mode, or reversed in RTL mode.\nMost subclasses will want to implement either <code>previousKeyHandler()</code>\nand <code>nextKeyHandler()</code>, or <code>downKeyHandler()</code> and <code>upKeyHandler()</code>.</li>\n<li>Set all navigable descendants' initial tabIndex to &quot;-1&quot;; both initial descendants and any\ndescendants added later, by for example <code>addChild()</code>.  Exception: if <code>focusDescendants</code> is false then the\ndescendants shouldn't have any tabIndex at all.</li>\n<li>Define <code>descendantSelector</code> as a function or string that identifies navigable child Elements.</li>\n<li>If the descendant elements contain text, they should have a label attribute.  KeyNav uses the label\nattribute for letter key navigation.</li>\n</ul>",
    "focusDescendants": {
     "!doc": "<p>When true, focus the descendant widgets as the user navigates to them via arrow keys or keyboard letter\nsearch.  When false, rather than focusing the widgets, it merely sets <code>navigatedDescendant</code>,\nand sets the <code>d-active-descendant</code> class on the descendant widget the user has navigated to.</p>\n<p>False mode is intended for widgets like ComboBox where the focus is somewhere outside this widget\n(typically on an <code>&lt;input&gt;</code>) and keystrokes are merely being forwarded to the KeyNav widget.</p>\n<p>When set to false:</p>\n<ul>\n<li>All navigable descendants must specify an id.</li>\n<li>Navigable descendants shouldn't have any tabIndex (as opposed to having tabIndex=-1).</li>\n<li>The focused element should specify <code>aria-owns</code> to point to this KeyNav Element.</li>\n<li>The focused Element must be kept synced so that <code>aria-activedescendant</code> points to the currently\nnavigated descendant.  Do this responding to the <code>keynav-child-navigated</code> event emitted by this widget,\nor by calling <code>observe()</code> and monitoring changed to <code>navigatedDescendant</code>.</li>\n<li>The focused Element must forward keystrokes by calling <code>emit(&quot;keydown&quot;, ...)</code> and/or\n<code>emit(&quot;keypress&quot;, ...)</code> on this widget.</li>\n<li>You must somehow set the initial navigated descendant, typically by calling <code>navigateToFirst()</code> either\nwhen the the dropdown is opened, or on the first call to <code>downKeyHandler()</code>.</li>\n<li>You must have some CSS styling so that the currently navigated node is apparent.</li>\n</ul>\n<p>See http://www.w3.org/WAI/GL/wiki/Using_aria-activedescendant_to_allow_changes_in_focus_within_widgets_to_be_communicated_to_Assistive_Technology#Example_1:_Combobox\nfor details.</p>"
    },
    "navigatedDescendant": {},
    "descendantSelector": {
     "!type": "string|+function",
     "!doc": "<p>Selector to identify which descendant Elements are navigable via arrow keys or\nkeyboard search.  Note that for subclasses like a Tree, one navigable node could be a descendant of another.</p>\n<p>It's either a function that takes an Element parameter and returns true/false,\nor a CSS selector string, for example &quot;.list-item&quot;.</p>\n<p>By default, the direct DOM children of this widget are considered the selectable descendants.</p>\n<p>Must be set in the prototype rather than on the instance.</p>"
    },
    "_getTargetElement": {
     "!type": "fn(evt: +Event)",
     "!doc": "<p>Figure out effective target of this event, either a navigable node, or this widget itself.\nNote that for subclasses like a Tree, one navigable node could be a descendant of another.</p>"
    },
    "child": {},
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "_selectorFunc": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "tabIndex": {},
    "homeKeyHandler": {
     "!type": "fn(evt: +Event, navigatedDescendant: +Element)",
     "!doc": "<p>Called on home key.</p>"
    },
    "endKeyHandler": {
     "!type": "fn(evt: +Event, navigatedDescendant: +Element)",
     "!doc": "<p>Called on end key.</p>"
    },
    "focus": {
     "!type": "fn()",
     "!doc": "<p>/**\nDefault focus() implementation: navigate to the first navigable descendant.\nNote that if <code>focusDescendants</code> is false, this will merely set the <code>d-active-descendant</code> class\nrather than actually focusing the descendant.</p>"
    },
    "navigateToFirst": {
     "!type": "fn(triggerEvent: +Event)",
     "!doc": "<p>Navigate to the first navigable descendant.\nNote that if <code>focusDescendants</code> is false, this will merely set the <code>d-active-descendant</code> class\nrather than actually focusing the descendant.</p>"
    },
    "navigateToLast": {
     "!type": "fn(triggerEvent: +Event)",
     "!doc": "<p>Navigate to the last navigable descendant.\nNote that if <code>focusDescendants</code> is false, this will merely set the <code>d-active-descendant</code> class\nrather than actually focusing the descendant.</p>"
    },
    "navigateTo": {
     "!type": "fn(child: +Element, last: bool, triggerEvent: +Event)",
     "!doc": "<p>Navigate to the specified descendant.\nNote that if <code>focusDescendants</code> is false, this will merely set the <code>d-active-descendant</code> class\nrather than actually focusing the descendant.</p>"
    },
    "_keynavFocusHandler": {
     "!type": "fn(evt: +Event)",
     "!doc": "<p>Handler for when the container itself gets focus.\nCalled only when <code>this.focusDescendants</code> is true.\nInitially the container itself has a tabIndex, but when it gets focus, switch focus to first child.</p>"
    },
    "_savedTabIndex": {},
    "_keynavDeactivatedHandler": {
     "!type": "fn()",
     "!doc": "<p>Handler for when focus is moved away the container, and its descendant (popup) widgets.\nCalled only when <code>this.focusDescendants</code> is true.</p>"
    },
    "_descendantNavigateHandler": {
     "!type": "fn(child: +Element, triggerEvent: +Event)",
     "!doc": "<p>Called when a child is navigated to, either by user clicking it, or programatically by arrow key handling\ncode.  It marks that the specified child is the navigated one.</p>"
    },
    "oldValue": {},
    "newValue": {},
    "triggerEvent": {},
    "_searchString": {},
    "multiCharSearchDuration": {},
    "_keyboardSearchHandler": {
     "!type": "fn(item: +Element, evt: +Event, searchString: string, numMatches: number)",
     "!doc": "<p>When a key is pressed that matches a child item,\nthis method is called so that a widget can take appropriate action if necessary.</p>"
    },
    "_keyboardSearchCompare": {
     "!type": "fn(item: +Element, searchString: string) -> ?",
     "!doc": "<p>Compares the searchString to the Element's text label, returning:</p>\n<ul>\n<li>-1: a high priority match  and stop searching</li>\n<li>0: not a match</li>\n<li>1: a match but keep looking for a higher priority match</li>\n</ul>"
    },
    "_keynavKeyDownHandler": {
     "!type": "fn(evt: +Event)",
     "!doc": "<p>When a key is pressed, if it's an arrow key etc. then it's handled here.</p>"
    },
    "_applyKeyHandler": {
     "!type": "fn(evt: +Event)",
     "!doc": "<p>If the class has defined a method to handle the specified key, then call it.\nSee the description of <code>KeyNav</code> for details on how to define methods.</p>"
    },
    "methodName": {},
    "_keynavKeyPressHandler": {
     "!type": "fn(evt: +Event)",
     "!doc": "<p>When a printable key is pressed, it's handled here, searching by letter.</p>"
    },
    "_keyboardSearch": {
     "!type": "fn(evt: +Event, keyChar: string)",
     "!doc": "<p>Perform a search of the widget's options based on the user's keyboard activity.</p>\n<p>Called on keypress (and sometimes keydown), searches through this widget's children\nlooking for items that match the user's typed search string.  Multiple characters\ntyped within <code>multiCharSearchDuration</code> of each other are combined for multi-character searching.</p>"
    },
    "searchString": {},
    "_searchTimer": {},
    "currentItem": {},
    "matchedItem": {},
    "numMatches": {},
    "getNext": {
     "!type": "fn(child: +Element, dir: number) -> ?",
     "!doc": "<p>Returns the next or previous navigable descendant, relative to &quot;child&quot;.\nIf &quot;child&quot; is this, then it returns the first focusable descendant (when dir === 1)\nor last focusable descendant (when dir === -1).</p>"
    },
    "node": {},
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
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
    "Rectangle": {
     "!doc": "<p>Represents the position of the &quot;anchor&quot; node.   Popup node will be placed adjacent to this rectangle.</p>"
    },
    "LayoutFunc": {
     "!doc": "<p>Function on popup widget to adjust it based on what position it's being displayed in,\nrelative to anchor node.</p>"
    },
    "ChosenPosition": {
     "!doc": "<p>Meta-data about the position chosen for a popup node.\nSpecifies the corner of the anchor node and the corner of the popup node that touch each other,\nplus sizing data.</p>"
    },
    "!doc": "<p>Place an Element relative to a point, rectangle, or another Element.</p>",
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
   "delite/place~c": {
    "pos": {
     "x": {},
     "y": {}
    }
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
    "OpenArgs": {
     "!doc": "<p>Arguments to delite/popup#open() method.</p>"
    },
    "!doc": "<p>Show drop downs (ex: the select list of a ComboBox) or popups (ex: right-click context menus).</p>",
    "_stack": {},
    "_beginZIndex": {},
    "_idGen": {},
    "constructor": {
     "!type": "fn()"
    },
    "_checkScroll": {
     "!type": "fn()",
     "!doc": "<p>We check for viewport scroll above, but this code checks for scrolling an inner <code>&lt;div&gt;</code>,\nthus moving the anchor node.  Using the scrollbar will close all the popups on the screen, but not\nif you scroll via a mousewheel or a mousepad double-finger gesture.</p>",
     "oldPos": {},
     "newPos": {},
     "dx": {},
     "dy": {}
    },
    "_firstAroundPosition": {},
    "_aroundMoveListener": {},
    "_repositionAll": {
     "!type": "fn()",
     "!doc": "<p>Reposition all the popups due to viewport size change.</p>"
    },
    "_viewportScrollHandler": {
     "!type": "fn()",
     "!doc": "<p>Reposition all the popups due to viewport scroll.  The main purpose of the function is to handle\nautomatic scrolling on mobile from the keyboard popping up or when the browser tries to scroll the\nfocused element to the upper part of the screen.</p>"
    },
    "_createWrapper": {
     "!type": "fn(widget: ?) -> ?",
     "!doc": "<p>Initialization for widgets that will be used as popups.\nPuts widget inside a wrapper DIV (if not already in one), and returns pointer to that wrapper DIV.</p>",
     "wrapper": {}
    },
    "wrapper": {},
    "moveOffScreen": {
     "!type": "fn(widget: ?) -> ?",
     "!doc": "<p>Moves the popup widget off-screen.  Do not use this method to hide popups when not in use, because\nthat will create an accessibility issue: the offscreen popup will still be in the tabbing order.</p>",
     "wrapper": {},
     "style": {},
     "ltr": {}
    },
    "visibility": {},
    "top": {},
    "display": {},
    "style[undefined]": {},
    "detach": {
     "!type": "fn(widget: ?)",
     "!doc": "<p>Detach specified popup widget from document</p>"
    },
    "hide": {
     "!type": "fn(widget: ?)",
     "!doc": "<p>Hide this popup widget (until it is ready to be shown).\nInitialization for widgets that will be used as popups.</p>\n<p>Also puts widget inside a wrapper DIV (if not already in one).</p>\n<p>If popup widget needs to layout it should do so when it is made visible,\nand popup._onShow() is called.</p>",
     "wrapper": {}
    },
    "height": {},
    "getTopPopup": {
     "!type": "fn() -> ?",
     "!doc": "<p>Compute the closest ancestor popup that's <em>not</em> a child of another popup.\nEx: For a TooltipDialog with a button that spawns a tree of menus, find the popup of the button.</p>",
     "stack": {},
     "pi": {}
    },
    "open": {
     "!type": "fn(args: ?) -> ?",
     "!doc": "<p>Popup the widget at the specified position.</p>\n<p>Note that whatever widget called delite/popup.open() should also require activationTracker and listen for\ndelite-deactivated event to know that focus has moved somewhere\nelse and thus the popup should be closed.</p>"
    },
    "_prepareToOpen": {
     "!type": "fn(args: ?) -> ?",
     "!doc": "<p>Do the work to display a popup widget, except for positioning.</p>",
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
    "id": {},
    "className": {},
    "_firstAroundNode": {},
    "remove": {
     "!type": "fn()"
    },
    "_size": {
     "!type": "fn(args: ?, measureSize: bool) -> ?",
     "!doc": "<p>Size or resize the popup specified by args.</p>",
     "widget": {},
     "wrapper": {},
     "around": {},
     "orient": {},
     "viewport": {},
     "maxHeight": {},
     "aroundPos": {}
    },
    "maxHeight": {},
    "_position": {
     "!type": "fn(args: ?) -> ?",
     "!doc": "<p>Position the popup specified by args.</p>",
     "widget": {},
     "wrapper": {},
     "around": {},
     "orient": {},
     "ltr": {},
     "layoutFunc": {}
    },
    "close": {
     "!type": "fn(popup: ?)",
     "!doc": "<p>Close specified popup and any popups that it parented.  If no popup is specified, closes all popups.</p>",
     "stack": {},
     "top": {},
     "widget": {},
     "onClose": {},
     "h": {}
    },
    "h": {}
   },
   "delite/popup~document": {
    "body": {
     "scrollTop": {}
    }
   },
   "delite/popup~wrapper": {
    "className": {},
    "style": {
     "display": {},
     "zIndex": {},
     "visibility": {},
     "height": {},
     "width": {}
    },
    "_popupParent": {}
   },
   "delite/popup~widget": {
    "_popupWrapper": {},
    "id": {},
    "bgIframe": {},
    "style": {
     "visibility": {},
     "height": {}
    }
   },
   "delite/popup~stackEntry": {
    "wrapper": {},
    "handlers": {}
   },
   "delite/popup~args": {
    "_naturalHeight": {},
    "_naturalWidth": {}
   },
   "delite/register": {
    "a[undefined]": {},
    "configurable": {},
    "writable": {},
    "enumerable": {},
    "value": {},
    "createElement": {
     "!type": "fn(tag: string) -> ?",
     "!doc": "<p>Create an Element.  Similar to document.createElement(), but if tag is the name of a widget defined by\nregister(), then it upgrades the Element to be a widget.</p>"
    },
    "k": {},
    "props[undefined]": {},
    "proto": {},
    "upgrade": {
     "!type": "fn(element: +Element, attach: bool)",
     "!doc": "<p>Converts plain Element of custom type into &quot;custom element&quot;, by adding the widget's custom methods, etc.\nDoes nothing if the Element has already been converted or if it doesn't correspond to a registered custom tag.\nAfter the upgrade, calls <code>createdCallback()</code>.</p>\n<p>Usually the application will not need to call this method directly, because it's called automatically\non page load and as elements are added to the document.</p>"
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
    "!doc": "<p>Declare a widget and register it as a custom element.</p>\n<p>props{} can provide custom setters/getters for widget properties, which are called automatically when\nthe widget properties are set.\nFor a property XXX, define methods _setXXXAttr() and/or _getXXXAttr().</p>",
    "baseElement": {},
    "_extends": {},
    "parse": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Parse the given DOM tree for any Elements that need to be upgraded to widgets.\nSearches all descendants of the specified node, but does not upgrade the node itself.</p>\n<p>Usually the application will not need to call this method directly, because it's called automatically\non page load and as elements are added to the document.</p>"
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
     "!type": "fn()",
     "!doc": "<p>Convenience shortcut to <a href=\"http://www.dcljs.org/docs/mini_js/dcl/\">dcl()</a>.</p>"
    },
    "after": {
     "!type": "fn()",
     "!doc": "<p>Convenience shortcut to <a href=\"http://www.dcljs.org/docs/dcl_js/after/\">dcl.after()</a>.</p>"
    },
    "before": {
     "!type": "fn()",
     "!doc": "<p>Convenience shortcut to <a href=\"http://www.dcljs.org/docs/dcl_js/before/\">dcl.before()</a>.</p>"
    },
    "around": {
     "!type": "fn()",
     "!doc": "<p>Convenience shortcut to <a href=\"http://www.dcljs.org/docs/dcl_js/around/\">dcl.around()</a>.</p>"
    },
    "superCall": {
     "!type": "fn()",
     "!doc": "<p>Convenience shortcut to <a href=\"http://www.dcljs.org/docs/mini_js/supercall/\">dcl.superCall()</a>.</p>"
    }
   },
   "delite/register~dcl": {
    "mix": {
     "!type": "fn()",
     "n": {}
    }
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
   "delite/register~node": {
    "style": {
     "cssText": {}
    }
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
     "!type": "fn()",
     "ret": {}
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
    "!doc": "<p>A mixin which adds scrolling capabilities to a widget.</p>\n<p>When mixed into a host widget, this mixin brings scrolling capabilities\nbased on the overflow: auto CSS property.</p>\n<p>By default, the scrolling capabilities are added to the widget\nnode itself. The host widget can chose the node thanks to the property\n<code>scrollableNode</code> which must be set at latest in its <code>render()</code>\nmethod.</p>\n<p>During interactive or programmatic scrolling, native &quot;scroll&quot;\nevents are emitted, and can be listened to as follows (here,\n<code>scrollWidget</code> is the widget into which this mixin is mixed):</p>\n<pre class=\"prettyprint source\"><code>scrollWidget.on(\"scroll\", function (event) {\n  ...\n});</code></pre><p>For widgets that customize the <code>scrollableNode</code> property,\nthe events should be listened to on <code>widget.scrollableNode</code>:</p>\n<pre class=\"prettyprint source\"><code>scrollWidget.on(\"scroll\", function (event) {\n  ...\n  }, scrollWidget.scrollableNode);</code></pre>",
    "scrollDirection": {
     "!doc": "<p>The direction of the interactive scroll. Possible values are:\n&quot;vertical&quot;, &quot;horizontal&quot;, &quot;both, and &quot;none&quot;.</p>\n<p>Note that scrolling programmatically using <code>scrollTo()</code> is\npossible on both horizontal and vertical directions independently\non the value of <code>scrollDirection</code>.</p>"
    },
    "scrollableNode": {},
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "isTopScroll": {
     "!type": "fn() -> ?",
     "!doc": "<p>Returns true if container's scroll has reached the maximum limit at\nthe top of the contents. Returns false otherwise.</p>"
    },
    "isBottomScroll": {
     "!type": "fn() -> ?",
     "!doc": "<p>Returns true if container's scroll has reached the maximum limit at\nthe bottom of the contents. Returns false otherwise.</p>"
    },
    "isLeftScroll": {
     "!type": "fn() -> ?",
     "!doc": "<p>Returns true if container's scroll has reached the maximum limit at\nthe left of the contents. Returns false otherwise.</p>"
    },
    "isRightScroll": {
     "!type": "fn() -> ?",
     "!doc": "<p>Returns true if container's scroll has reached the maximum limit at\nthe right of the contents. Returns false otherwise.</p>"
    },
    "getCurrentScroll": {
     "!type": "fn() -> ?",
     "!doc": "<p>Returns the current amount of scroll, as an object with x and y properties\nfor the horizontal and vertical scroll amount.\nThis is a convenience method and it is not supposed to be overridden.</p>"
    },
    "x": {},
    "y": {},
    "scrollBy": {
     "!type": "fn(by: +Object, duration: number)",
     "!doc": "<p>Scrolls by the given amount.</p>"
    },
    "scrollTo": {
     "!type": "fn(to: +Object, duration: number)",
     "!doc": "<p>Scrolls to the given position.</p>"
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
     "!type": "fn()",
     "!doc": "<p>Stops the scrolling animation if it is currently playing.\nDoes nothing otherwise.</p>"
    },
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
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
    "selection-change": {
     "!doc": "<p>Selection change event. Dispatched after the selection has\nbeen modified through user interaction.</p>"
    },
    "!doc": "<p>Mixin for widgets that manage a list of selected data items.</p>",
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "selectionMode": {
     "!doc": "<p>The chosen selection mode.</p>\n<p>Valid values are:</p>\n<ol>\n<li>&quot;none&quot;: No selection can be done.</li>\n<li>&quot;single&quot;: Only one or zero items can be selected at a time. Interactively selecting a new item deselects\nthe previously selected one.</li>\n<li>&quot;radio&quot;:  Initially only one or zero items can be selected. Once an item has been selected, interactively \nselecting another item deselects the previously selected item, and the user cannot deselect the currently \nselected item. </li>\n<li>&quot;multiple&quot;: Multiple items can be selected. By default ctrl key must be used to select additional items.\nHowever that behavior might be specialized by subclasses.</li>\n</ol>\n<p>Changing this value impacts the current selected items to adapt the selection to the new mode. However\nwhatever the selection mode is you can always set several selected items using the selectItem(s) API.\nThe mode will be enforced only when using setSelected and/or selectFromEvent APIs.</p>"
    },
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
     "!type": "fn(event: +Event) -> ?",
     "!doc": "<p>Tests if an event has a selection modifier.</p>\n<p>If it has a selection modifier, that means that:</p>\n<ul>\n<li>if selectionMode is &quot;single&quot;, the event will be able to deselect a selected item</li>\n<li>if selectionMode is &quot;multiple&quot;, the event will trigger the selection state of the item</li>\n</ul>\n<p>The default implementation of this method returns true if the event.ctrlKey attribute is\ntrue, which means that:</p>\n<ul>\n<li>if selectionMode is &quot;single&quot;, the Ctrl (or Command on MacOS) key must be pressed for the</li>\n<li>event to deselect the currently selected item</li>\n<li>if selectionMode is &quot;multiple&quot;, the Ctrl (or Command on MacOS) key must be pressed for the\n  event to toggle the selection status of the item.</li>\n</ul>"
    },
    "isSelected": {
     "!type": "fn(object: +item) -> ?",
     "!doc": "<p>Returns whether an item is selected or not.</p>"
    },
    "getIdentity": {
     "!type": "fn(object: +item) -> ?",
     "!doc": "<p>This function must be implemented to return the id of a item.</p>"
    },
    "updateRenderers": {
     "!type": "fn(items: [?])",
     "!doc": "<p>This function must be implemented to update the rendering of the items based on whether they are\nselected or not. The implementation must check for their new selection state and update\naccordingly.</p>"
    },
    "setSelected": {
     "!type": "fn(item: +Object, value: bool)",
     "!doc": "<p>Change the selection state of an item.</p>"
    },
    "_setSelected": {
     "!type": "fn()"
    },
    "sel": {},
    "identity": {},
    "res": {},
    "selectFromEvent": {
     "!type": "fn(event: +Event, item: +Object, renderer: +Object, dispatch: bool) -> ?",
     "!doc": "<p>Applies selection triggered by an user interaction.</p>"
    },
    "_selectFromEvent": {
     "!type": "fn()"
    },
    "changed": {},
    "dispatchSelectionChange": {
     "!type": "fn(oldSelectedItem: +Object, newSelectedItem: +Object, renderer: +Object, triggerEvent: +Event)",
     "!doc": "<p>Dispatch a selection change event.</p>"
    },
    "oldValue": {},
    "newValue": {},
    "renderer": {},
    "triggerEvent": {},
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
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
    "query-success": {
     "!doc": "<p>Dispatched once the query has been executed and the <code>renderItems</code> array\nhas been initialized with the list of initial render items.</p>"
    },
    "!doc": "<p>Mixin for store management that creates render items from store items after\nquerying the store. The receiving class must extend decor/Evented or delite/Widget.</p>\n<p>Classes extending this mixin automatically create render items that are consumable\nfrom store items after querying the store. This happens each time the <code>store</code>, <code>query</code> or\n<code>queryOptions</code> properties are set. If that store is Trackable it will be observed and render items\nwill be automatically updated, added or deleted based on store notifications.</p>",
    "store": {
     "!doc": "<p>The store that contains the items to display.</p>"
    },
    "query": {
     "!doc": "<p>A query filter to apply to the store.</p>"
    },
    "processQueryResult": {
     "!type": "fn()",
     "!doc": "<p>A function that processes the collection returned by the store query and returns a new collection\n(to sort it, etc...). This processing is applied before potentially tracking the store\nfor modifications (if Trackable).\nChanging this function on the instance will not automatically refresh the class.</p>"
    },
    "renderItems": {},
    "renderItemToItem": {
     "!type": "fn(renderItem: +Object) -> ?",
     "!doc": "<p>Creates a store item based from the widget internal item.</p>"
    },
    "itemToRenderItem": {
     "!type": "fn(item: +Object) -> ?",
     "!doc": "<p>Returns the widget internal item for a given store item. By default it returns the store\nitem itself.</p>"
    },
    "initItems": {
     "!type": "fn(renderItems: [?]) -> ?",
     "!doc": "<p>This method is called once the query has been executed to initialize the renderItems array\nwith the list of initial render items.</p>\n<p>This method sets the renderItems property to the render items array passed as parameter. Once\ndone, it fires a 'query-success' event.</p>"
    },
    "cancelable": {},
    "bubbles": {},
    "computeProperties": {
     "!type": "fn(props: ?)",
     "!doc": "<p>If the store parameters are invalidated, queries the store, creates the render items and calls initItems() \nwhen ready. If an error occurs a 'query-error' event will be fired.</p>"
    },
    "queryStoreAndInitItems": {
     "!type": "fn(processQueryResult: ?) -> ?",
     "!doc": "<p>Queries the store, creates the render items and calls initItems() when ready. If an error occurs\na 'query-error' event will be fired.</p>\n<p>This method is not supposed to be called by application developer.\nIt will be called automatically when modifying the store related properties or by the subclass\nif needed.</p>"
    },
    "_attachedlistener": {},
    "collection": {},
    "_tracked": {},
    "processCollection": {
     "!type": "fn(collection: ?)",
     "!doc": "<p>Called to process the items returned after querying the store.</p>"
    },
    "fetch": {
     "!type": "fn(collection: ?)",
     "!doc": "<p>Called to perform the fetch operation on the collection.</p>"
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
     "!type": "fn(index: number, renderItems: [?])",
     "!doc": "<p>This method is called when an item is removed from an observable store. The default\nimplementation actually removes a renderItem from the renderItems array. This can be redefined but\nmust not be called directly.</p>"
    },
    "itemAdded": {
     "!type": "fn(index: number, renderItem: +Object, renderItems: [?])",
     "!doc": "<p>This method is called when an item is added in an observable store. The default\nimplementation actually adds the renderItem to the renderItems array. This can be redefined but\nmust not be called directly.</p>"
    },
    "itemUpdated": {
     "!type": "fn(index: number, renderItem: +Object, renderItems: [?])",
     "!doc": "<p>This method is called when an item is updated in an observable store. The default\nimplementation actually updates the renderItem in the renderItems array. This can be redefined but\nmust not be called directly.</p>"
    },
    "itemMoved": {
     "!type": "fn(previousIndex: number, newIndex: number, renderItem: +Object, renderItems: [?])",
     "!doc": "<p>This method is called when an item is moved in an observable store. The default\nimplementation actually moves the renderItem in the renderItems array. This can be redefined but\nmust not be called directly.</p>"
    },
    "_refreshHandler": {
     "!type": "fn()"
    },
    "_itemRemoved": {
     "!type": "fn(event: +Event)",
     "!doc": "<p>When the store is observed and an item is removed in the store this method is called to remove the\ncorresponding render item. This can be redefined but must not be called directly.</p>"
    },
    "_itemUpdated": {
     "!type": "fn(event: +Event)",
     "!doc": "<p>When the store is observed and an item is updated in the store this method is called to update the\ncorresponding render item.  This can be redefined but must not be called directly.</p>"
    },
    "_itemAdded": {
     "!type": "fn(event: +Event)",
     "!doc": "<p>When the store is observed and an item is added in the store this method is called to add the\ncorresponding render item. This can be redefined but must not be called directly.</p>"
    }
   },
   "delite/Store#queryStoreAndInitItems": {
    "collection": {}
   },
   "delite/StoreMap": {
    "!doc": "<p>Mixin providing store binding management for widgets that extend delite/Store. Classes extending\nthis mixin can easily define how store items properties are mapped in the render items properties\nconsumable by the widget. The mapping can either occur by property (property A in store item\ncorresponds to property B in render item) or by function (a function is specified that mapped the\nstore item into the value of a property of the render item)..</p>\n<p>For each mapped property &quot;foo&quot; from the render item one can provide:</p>\n<ul>\n<li>fooAttr property in which case the mapping is looking into the store item property specified\nby fooAttr</li>\n<li>fooFunc property function in which case the mapping is delegating the mapping operation to the\nfooFunc function.</li>\n<li>fooFunc is of the following signature (value must be passed only for set operations:\nfooFunc(item, store, value)</li>\n<li>if none of this is provided the mapping is looking into store item &quot;foo&quot; property</li>\n</ul>\n<p>Mapping properties are meant to be added to the widget class using the mixin. One can directly add the\nmapping properties to an instance but in this case there are two limitations:</p>\n<ul>\n<li>The property must be added before the widget is started</li>\n<li>If the property is added in the markup only fully lower case properties are supported\n(e.g. foobar not fooBar)</li>\n</ul>",
    "item[undefined]": {},
    "allowRemap": {
     "!doc": "<p>Whether the created render items will be updated when call the remap() function on the component\nallowing the consuming component to re-perform the mapping on demand. This property must not be\nchanged after the initialization cycle.</p>"
    },
    "_mappedKeys": {},
    "copyAllItemProps": {
     "!doc": "<p>If true, in addition to the mapped properties copy all the other properties of the store item into\nthe render item with direct mapping. This property must not be changed after the initialization cycle.</p>"
    },
    "parseAttribute": {},
    "name": {},
    "prop": {},
    "value": {},
    "queryStoreAndInitItems": {
     "!type": "fn(processQueryResult: ?) -> ?",
     "!doc": "<p>Queries the store, creates the render items and calls initItems() when ready. If an error occurs\na 'query-error' event will be fired.</p>\n<p>This method is not supposed to be called by application developer.\nIt will be called automatically when modifying the store related properties or by the subclass\nif needed.</p>"
    },
    "_pendingQuery": {},
    "attachedCallback": {
     "!type": "fn()"
    },
    "_itemKeys": {},
    "renderItemToItem": {
     "!type": "fn(renderItem: +Object) -> ?",
     "!doc": "<p>Creates a store item based from the widget internal item based on the various mapped properties. Works \nasynchronously.</p>"
    },
    "tmp[undefined]": {},
    "itemToRenderItem": {
     "!type": "fn(item: +Object) -> ?",
     "!doc": "<p>Returns the widget internal item for a given store item based on the various mapped properties.</p>"
    },
    "renderItem[undefined]": {},
    "remap": {
     "!type": "fn()",
     "!doc": "<p>If allowRemap is true, the method allows to perform again the mapping between the data item\nand the render items. This might be useful is mapping by function is used and the execution\ncontext of the mapping function as changed so that the results would need to be updated.\nIt should not be called if allowRemap is false.</p>"
    },
    "items[undefined][undefined]": {},
    "query-success": {
     "!doc": "<p>Dispatched once the query has been executed and the <code>renderItems</code> array\nhas been initialized with the list of initial render items.</p>"
    },
    "store": {
     "!doc": "<p>The store that contains the items to display.</p>"
    },
    "query": {
     "!doc": "<p>A query filter to apply to the store.</p>"
    },
    "processQueryResult": {
     "!type": "fn()",
     "!doc": "<p>A function that processes the collection returned by the store query and returns a new collection\n(to sort it, etc...). This processing is applied before potentially tracking the store\nfor modifications (if Trackable).\nChanging this function on the instance will not automatically refresh the class.</p>"
    },
    "renderItems": {},
    "initItems": {
     "!type": "fn(renderItems: [?]) -> ?",
     "!doc": "<p>This method is called once the query has been executed to initialize the renderItems array\nwith the list of initial render items.</p>\n<p>This method sets the renderItems property to the render items array passed as parameter. Once\ndone, it fires a 'query-success' event.</p>"
    },
    "computeProperties": {
     "!type": "fn(props: ?)",
     "!doc": "<p>If the store parameters are invalidated, queries the store, creates the render items and calls initItems() \nwhen ready. If an error occurs a 'query-error' event will be fired.</p>"
    },
    "_attachedlistener": {},
    "_tracked": {},
    "processCollection": {
     "!type": "fn(collection: ?)",
     "!doc": "<p>Called to process the items returned after querying the store.</p>"
    },
    "fetch": {
     "!type": "fn(collection: ?)",
     "!doc": "<p>Called to perform the fetch operation on the collection.</p>"
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
     "!type": "fn(index: number, renderItems: [?])",
     "!doc": "<p>This method is called when an item is removed from an observable store. The default\nimplementation actually removes a renderItem from the renderItems array. This can be redefined but\nmust not be called directly.</p>"
    },
    "itemAdded": {
     "!type": "fn(index: number, renderItem: +Object, renderItems: [?])",
     "!doc": "<p>This method is called when an item is added in an observable store. The default\nimplementation actually adds the renderItem to the renderItems array. This can be redefined but\nmust not be called directly.</p>"
    },
    "itemUpdated": {
     "!type": "fn(index: number, renderItem: +Object, renderItems: [?])",
     "!doc": "<p>This method is called when an item is updated in an observable store. The default\nimplementation actually updates the renderItem in the renderItems array. This can be redefined but\nmust not be called directly.</p>"
    },
    "itemMoved": {
     "!type": "fn(previousIndex: number, newIndex: number, renderItem: +Object, renderItems: [?])",
     "!doc": "<p>This method is called when an item is moved in an observable store. The default\nimplementation actually moves the renderItem in the renderItems array. This can be redefined but\nmust not be called directly.</p>"
    },
    "_refreshHandler": {
     "!type": "fn()"
    },
    "_itemRemoved": {
     "!type": "fn(event: +Event)",
     "!doc": "<p>When the store is observed and an item is removed in the store this method is called to remove the\ncorresponding render item. This can be redefined but must not be called directly.</p>"
    },
    "_itemUpdated": {
     "!type": "fn(event: +Event)",
     "!doc": "<p>When the store is observed and an item is updated in the store this method is called to update the\ncorresponding render item.  This can be redefined but must not be called directly.</p>"
    },
    "_itemAdded": {
     "!type": "fn(event: +Event)",
     "!doc": "<p>When the store is observed and an item is added in the store this method is called to add the\ncorresponding render item. This can be redefined but must not be called directly.</p>"
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
    "!doc": "<p>Given an AST representation of the template, generates a function that:</p>\n<ol>\n<li>generates DOM corresponding to the template</li>\n<li>returns an object including a function to be called to update that DOM\nwhen widget properties have changed.</li>\n</ol>\n<p>The function is available through <code>this.func</code>, i.e.:</p>\n<pre class=\"prettyprint source\"><code>var template = new Template(ast);\ntemplate.func(document, register);</code></pre><p>See the reference documentation for details on the AST format.</p>",
    "constructor": {
     "!type": "fn()"
    },
    "buildText": {},
    "attachText": {},
    "detachText": {},
    "observeText": {},
    "dependsOn": {},
    "text": {
     "!doc": "<p>Text of the generated function.</p>"
    },
    "func": {
     "!doc": "<p>Generated function.</p>"
    },
    "generateWatchCode": {
     "!type": "fn(dependencies: [?], statement: string)",
     "!doc": "<p>Generate code that executes <code>statement</code> if any of the properties in <code>dependencies</code> change.</p>"
    },
    "dependsOn[undefined]": {},
    "generateNodeChildrenCode": {
     "!type": "fn(nodeName: string, children: [?])",
     "!doc": "<p>Generate JS code to create and add children to a node named nodeName.</p>"
    },
    "generateNodeCode": {
     "!type": "fn(nodeName: string, createNode: bool, templateNode: +Object)",
     "!doc": "<p>Generate JS code to create a node called nodeName based on templateNode, then\nset its properties, attributes, and children, according to descendants of templateNode.</p>"
    },
    "getElement": {
     "!type": "fn(tag: string) -> ?",
     "!doc": "<p>Return cached reference to Element with given tag name.</p>"
    },
    "elementCache[undefined]": {},
    "getProp": {
     "!type": "fn(tag: string, attrName: string) -> ?",
     "!doc": "<p>Given a tag and attribute name, return the associated property name,\nor undefined if no such property exists, for example:</p>\n<ul>\n<li>getProp(&quot;div&quot;, &quot;tabindex&quot;) --&gt; &quot;tabIndex&quot;</li>\n<li>getProp(&quot;div&quot;, &quot;role&quot;) --&gt; undefined</li>\n</ul>\n<p>Note that in order to support SVG, getProp(&quot;svg&quot;, &quot;class&quot;) returns null instead of className.</p>"
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
     "!type": "fn()",
     "proto": {},
     "map": {},
     "prop": {}
    }
   },
   "delite/Template~map": {
    "style": {}
   },
   "delite/theme": {
    "!doc": "<p>Plugin to load the specified CSS file, substituting {{theme}} with the theme for the current page.\nThis plugin will also load the common css file for the theme, <code>delite/themes/{{theme}}/common.css</code>,\neven if no resource is provided (like in <code>delite/theme!</code>).</p>\n<p>For example, on an iPhone <code>theme!./css/{{theme}}/Button.css</code>\nwill load <code>./css/ios/Button.css</code> and <code>delite/themes/ios/common.css</code>.</p>\n<p>You can also pass an additional URL parameter string\n<code>theme={theme widget}</code> to force a specific theme through the browser\nURL input. The available theme ids are bootstrap, holodark (theme introduced in Android 3.0)\nand ios. The theme names are case-sensitive. If the given\ntheme does not match, the bootstrap theme is used.</p>\n<pre class=\"prettyprint source\"><code>http://your.server.com/yourapp.html --> automatic detection\nhttp://your.server.com/yourapp.html?theme=holodark --> forces Holodark theme\nhttp://your.server.com/yourapp.html?theme=ios --> forces iPhone theme</code></pre><p>You can also specify a particular user agent through the <code>ua=...</code> URL parameter.</p>",
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
     "!type": "fn()",
     "getLayerPath": {
      "!type": "fn()"
     },
     "success": {},
     "destMid": {}
    },
    "onLayerEnd~getLayerPath": {
     "pathRE": {}
    }
   },
   "delite/uacss": {
    "!doc": "<p>Applies pre-set CSS classes to the top-level HTML node, based on:</p>\n<ul>\n<li>browser: <code>d-webkit</code>, <code>d-safari</code>, <code>d-chrome</code>, <code>d-gecko</code>, <code>d-ios</code>, <code>d-android</code></li>\n<li>browser version (ex: <code>d-ie-9</code>, <code>d-ff-26</code>)</li>\n</ul>\n<p>Returns the <code>has()</code> method.</p>",
    "classes[undefined]": {},
    "classStr": {}
   },
   "delite/uacss~classes": {
    "\"d-ie\"": {}
   },
   "delite/uacss~document": {
    "body": {
     "className": {}
    }
   },
   "delite/Viewport": {
    "!doc": "<p>Utility singleton to watch for viewport resizes, avoiding duplicate notifications\nwhich can lead to infinite loops.</p>\n<p>Usage:</p>\n<pre class=\"prettyprint source\"><code>Viewport.on(\"resize\", myCallback)\nViewport.on(\"scroll\", myOtherCallback)</code></pre><p>myCallback() is called without arguments in case it's Widget.resize(),\nwhich would interpret the argument as the size to make the widget.</p>",
    "w": {},
    "h": {},
    "t": {},
    "l": {},
    "getEffectiveBox": {
     "!type": "fn()",
     "!doc": "<p>Get the size of the viewport, or on mobile devices, the part of the viewport not obscured by the\nvirtual keyboard.</p>"
    },
    "oldEffectiveSize": {},
    "oldEffectiveScroll": {}
   },
   "delite/Viewport~Viewport": {
    "getEffectiveBox": {
     "!type": "fn()",
     "box": {},
     "focusedNode": {},
     "tag": {}
    }
   },
   "delite/Viewport~box": {
    "h": {}
   },
   "delite/Widget": {
    "!doc": "<p>Base class for all widgets, i.e. custom elements that appear visually.</p>\n<p>Provides stubs for widget lifecycle methods for subclasses to extend, like <code>render()</code>,\n<code>postRender()</code>, and <code>destroy()</code>, and also public API methods like <code>observe()</code>.</p>",
    "baseClass": {
     "!doc": "<p>Root CSS class of the widget (ex: &quot;d-text-box&quot;)</p>"
    },
    "focused": {
     "!doc": "<p>This widget or a widget it contains has focus, or is &quot;active&quot; because\nit was recently clicked.</p>"
    },
    "widgetId": {},
    "dir": {
     "!doc": "<p>Controls the layout direction of the widget, for example whether the arrow of\na Combobox appears to the right or the left of the input field.</p>\n<p>Values are &quot;ltr&quot; and &quot;rtl&quot;, or &quot;&quot; which means that the value is inherited from the\nsetting on the document root (either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>).</p>"
    },
    "effectiveDir": {},
    "createdCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the custom element is created, or when <code>register.parse()</code> parses a custom tag.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "computeProperties": {
     "!type": "fn()"
    },
    "getInheritedDir": {
     "!type": "fn() -> ?",
     "!doc": "<p>Get the direction setting for the page itself.</p>"
    },
    "refreshRendering": {
     "!type": "fn()"
    },
    "attachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called automatically when the element is added to the document, after <code>createdCallback()</code> completes.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "<p>Processing before <code>render()</code>.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "template": {
     "!doc": "<p>Value returned by delite/handlebars! or compatible template engine.\nSpecifies how to build the widget DOM initially and also how to update the DOM when\nwidget properties change.</p>"
    },
    "render": {
     "!type": "fn()",
     "!doc": "<p>Construct the UI for this widget, filling in subnodes and/or text inside of this.\nMost widgets will leverage delite/handlebars! to set <code>template</code>, rather than defining this method.</p>"
    },
    "_templateHandle": {},
    "setClassComponent": {
     "!type": "fn(component: string, value: string, node: +HTMLElement)",
     "!doc": "<p>Helper method to set a class (or classes) on a given node, removing the class (or classes) set\nby the previous call to <code>setClassComponent()</code> <em>for the specified component and node</em>.  Used mainly by\ntemplate.js to set classes without overwriting classes set by the user or other code (ex: CssState).</p>"
    },
    "node": {},
    "node[undefined]": {},
    "setOrRemoveAttribute": {
     "!type": "fn(node: +Element, name: string, value: string)",
     "!doc": "<p>Helper method to set/remove an attribute based on the given value:</p>\n<ul>\n<li>If value is undefined, the attribute is removed.  Useful for attributes like aria-valuenow.</li>\n<li>If value is boolean, the attribute is set to &quot;true&quot; or &quot;false&quot;.  Useful for attributes like aria-selected.</li>\n<li>If value is a number, it's converted to a string.</li>\n</ul>"
    },
    "postRender": {
     "!type": "fn()",
     "!doc": "<p>Processing after the DOM fragment is created.</p>\n<p>Called after the DOM fragment has been created, but not necessarily\nadded to the document.  Do not include any operations which rely on\nnode dimensions or placement.</p>\n<p>This method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "detachedCallback": {
     "!type": "fn()",
     "!doc": "<p>Called when the element is removed the document.\nThis method is automatically chained, so subclasses generally do not need to use <code>dcl.superCall()</code>,\n<code>dcl.advise()</code>, etc.</p>"
    },
    "getParent": {
     "!type": "fn()",
     "!doc": "<p>Returns the parent widget of this widget, or null if there is no parent widget.</p>"
    },
    "on": {
     "!type": "fn(type: string, func: +function, node: +Element) -> ?",
     "!doc": "<p>Call specified function when event occurs.</p>\n<p>Note that the function is not run in any particular scope, so if (for example) you want it to run\nin the element's scope you must do <code>myCustomElement.on(&quot;click&quot;, myCustomElement.func.bind(myCustomElement))</code>.</p>\n<p>Note that <code>delite/Widget</code> overrides <code>on()</code> so that <code>on(&quot;focus&quot;, ...)</code> and `on(&quot;blur&quot;, ...) will trigger the\nlistener when focus moves into or out of the widget, rather than just when the widget's root node is\nfocused/blurred.  In other words, the listener is called when the widget is conceptually focused or blurred.</p>"
    },
    "type": {},
    "focus": {},
    "blur": {},
    "placeAt": {
     "!type": "fn(reference: string|+Element|+DocumentFragment, position: string|number) -> ?",
     "!doc": "<p>Place this widget somewhere in the dom, and allow chaining.</p>"
    },
    "reference": {},
    "c": {},
    "getEnclosingWidget": {
     "!type": "fn(node: +Element)",
     "!doc": "<p>Returns the widget whose DOM tree contains the specified DOMNode, or null if\nthe node is not contained within the DOM tree of any widget</p>"
    },
    "Widget": {},
    "customelement-attached": {
     "!doc": "<p>Dispatched after the CustomElement has been attached.\nThis is useful to be notified when an HTMLElement has been upgraded to a\nCustomElement and attached to the DOM, in particular on browsers supporting native Custom Element.</p>"
    },
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
     "!type": "fn()",
     "!doc": "<p>This method will detect and process any properties that the application has set, but the custom setter\ndidn't run because <code>has(&quot;setter-on-native-prop&quot;) === false</code>.\nUsed during initialization and also by <code>deliver()</code>.</p>"
    },
    "created": {},
    "_parsedAttributes": {},
    "attached": {},
    "_parsePrototypeAttr": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Returns value for widget property based on attribute value in markup.</p>"
    },
    "parseFunctionAttribute": {
     "!type": "fn(value: string, params: [?])",
     "!doc": "<p>Helper to parse function attribute in markup.  Unlike <code>_parsePrototypeAttr()</code>, does not require a\ncorresponding widget property.  Functions can be specified as global variables or as inline javascript:</p>\n<pre class=\"prettyprint source\"><code><my-widget funcAttr=\"globalFunction\" on-click=\"console.log(event.pageX);\"></code></pre>"
    },
    "parseAttribute": {
     "!type": "fn(name: string, value: string)",
     "!doc": "<p>Helper for parsing declarative widgets.  Interpret a given attribute specified in markup, returning either:</p>\n<ul>\n<li><code>undefined</code>: ignore</li>\n<li><code>{prop: prop, value: value}</code>: set <code>this[prop] = value</code></li>\n<li><code>{event: event, callback: callback}</code>: call <code>this.on(event, callback)</code></li>\n</ul>"
    },
    "_mapAttributes": {
     "!type": "fn() -> ?",
     "!doc": "<p>Parse declaratively specified attributes for widget properties and connects.</p>"
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "<p>Release resources used by this custom element and its descendants.\nAfter calling this method, the element can no longer be used,\nand should be removed from the document.</p>"
    },
    "emit": {
     "!type": "fn(type: string, eventObj: +Object) -> ?",
     "!doc": "<p>Emits a synthetic event of specified type, based on eventObj.</p>"
    },
    "getPropsToObserve": {
     "!type": "fn()"
    },
    "deliver": {},
    "findCustomElements": {
     "!type": "fn(root: +Element)",
     "!doc": "<p>Search subtree under root returning custom elements found.</p>"
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