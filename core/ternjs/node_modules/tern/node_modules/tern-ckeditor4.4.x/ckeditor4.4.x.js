(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("ckeditor4.4.x", function(server, options) {
    server._ckeditor = {};
    return {
      defs : defs
    };
  });

  var defs = {
 "!name": "ckeditor",
 "!define": {},
 "CKEDITOR": {
  "command": {
   "!doc": "<p>Represents a command that can be executed on an editor instance.</p>\n\n<pre><code>var command = new <a href=\"#!/api/CKEDITOR.command\" rel=\"CKEDITOR.command\" class=\"docClass\">CKEDITOR.command</a>( editor, {\n    exec: function( editor ) {\n        alert( editor.document.getBody().getHtml() );\n    }\n} );\n</code></pre>\n",
   "prototype": {
    "!type": "fn(editor: +CKEDITOR.editor, commandDefinition: +CKEDITOR.commandDefinition)",
    "contextSensitive": {
     "!type": "bool",
     "!doc": "<p>Indicates that this command is sensible to the selection context.\nIf <code>true</code>, the <a href=\"#!/api/CKEDITOR.command-method-refresh\" rel=\"CKEDITOR.command-method-refresh\" class=\"docClass\">refresh</a> method will be\ncalled for this command on the <a href=\"#!/api/CKEDITOR.editor-event-selectionChange\" rel=\"CKEDITOR.editor-event-selectionChange\" class=\"docClass\">CKEDITOR.editor.selectionChange</a> event.</p>\n"
    },
    "editorFocus": {
     "!type": "bool",
     "!doc": "<p>Indicates that the editor will get the focus before executing\nthe command.</p>\n\n<pre><code>// Do not force the editor to have focus when executing the command.\ncommand.editorFocus = false;\n</code></pre>\n"
    },
    "modes": {
     "!type": "?",
     "!doc": "<p>The editor modes within which the command can be executed. The\nexecution will have no action if the current mode is not listed\nin this property.</p>\n\n<pre><code>// Enable the command in both WYSIWYG and Source modes.\ncommand.modes = { wysiwyg:1,source:1 };\n\n// Enable the command in Source mode only.\ncommand.modes = { source:1 };\n</code></pre>\n\n<p>@see <a href=\"#!/api/CKEDITOR.editor-property-mode\" rel=\"CKEDITOR.editor-property-mode\" class=\"docClass\">CKEDITOR.editor.mode</a></p>\n"
    },
    "previousState": {
     "!type": "number",
     "!doc": "<p>Indicates the previous command state.</p>\n\n<pre><code>alert( command.previousState );@see <a href=\"#!/api/CKEDITOR.command-property-state\" rel=\"CKEDITOR.command-property-state\" class=\"docClass\">state</a>\n</code></pre>\n"
    },
    "state": {
     "!type": "fn()",
     "!doc": "<p>Fired when the command state changes.</p>\n\n<pre><code>command.on( 'state', function() {\n    // Alerts the new state.\n    alert( this.state );\n} );\n</code></pre>\n"
    },
    "uiItems": {
     "!type": "[?]",
     "!doc": "<p>Lists UI items that are associated to this command. This list can be\nused to interact with the UI on command execution (by the execution code\nitself, for example).</p>\n\n<pre><code>alert( 'Number of UI items associated to this command: ' + command.uiItems.length );\n</code></pre>\n"
    },
    "checkAllowed": {
     "!type": "fn(noCache?: bool) -> bool",
     "!doc": "<p>Checks whether this command is allowed by the active allowed\ncontent filter (<a href=\"#!/api/CKEDITOR.editor-property-activeFilter\" rel=\"CKEDITOR.editor-property-activeFilter\" class=\"docClass\">CKEDITOR.editor.activeFilter</a>). This means\nthat if command implements <a href=\"#!/api/CKEDITOR.feature\" rel=\"CKEDITOR.feature\" class=\"docClass\">CKEDITOR.feature</a> interface it will be tested\nby the <a href=\"#!/api/CKEDITOR.filter-method-checkFeature\" rel=\"CKEDITOR.filter-method-checkFeature\" class=\"docClass\">CKEDITOR.filter.checkFeature</a> method.</p>\n"
    },
    "disable": {
     "!type": "fn() -> !this",
     "!doc": "<p>Disables the command for execution. The command state (see\n<a href=\"#!/api/CKEDITOR.command-property-state\" rel=\"CKEDITOR.command-property-state\" class=\"docClass\">state</a>) will be set to <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a>.</p>\n\n<pre><code>command.disable();\ncommand.exec(); // \"false\" - Nothing happens.\n</code></pre>\n"
    },
    "enable": {
     "!type": "fn() -> !this",
     "!doc": "<p>Enables the command for execution. The command state (see\n<a href=\"#!/api/CKEDITOR.command-property-state\" rel=\"CKEDITOR.command-property-state\" class=\"docClass\">state</a>) available before disabling it is restored.</p>\n\n<pre><code>command.enable();\ncommand.exec(); // Execute the command.\n</code></pre>\n"
    },
    "exec": {
     "!type": "fn(data?: ?) -> bool",
     "!doc": "<p>Executes the command.</p>\n\n<pre><code>command.exec(); // The command gets executed.\n</code></pre>\n"
    },
    "refresh": {
     "!type": "fn()",
     "!doc": "<p>@todo</p>\n"
    },
    "setState": {
     "!type": "fn(newState: number) -> bool",
     "!doc": "<p>Sets the command state.</p>\n\n<pre><code>command.setState( <a href=\"#!/api/CKEDITOR-property-TRISTATE_ON\" rel=\"CKEDITOR-property-TRISTATE_ON\" class=\"docClass\">CKEDITOR.TRISTATE_ON</a> );\ncommand.exec(); // Execute the command.\ncommand.setState( <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a> );\ncommand.exec(); // 'false' - Nothing happens.\ncommand.setState( <a href=\"#!/api/CKEDITOR-property-TRISTATE_OFF\" rel=\"CKEDITOR-property-TRISTATE_OFF\" class=\"docClass\">CKEDITOR.TRISTATE_OFF</a> );\ncommand.exec(); // Execute the command.\n</code></pre>\n"
    },
    "toggleState": {
     "!type": "fn() -> !this",
     "!doc": "<p>Toggles the on/off (active/inactive) state of the command. This is\nmainly used internally by context sensitive commands.</p>\n\n<pre><code>command.toggleState();\n</code></pre>\n"
    }
   }
  },
  "event": {
   "prototype": {
    "!type": "fn()",
    "capture": {
     "!type": "fn() -> !this",
     "!doc": "<p>Register event handler under the capturing stage on supported target.</p>\n"
    },
    "define": {
     "!type": "fn(name: string, meta: ?) -> !this",
     "!doc": "<p>Predefine some intrinsic properties on a specific event name.</p>\n"
    },
    "fire": {
     "!type": "fn(eventName: string, data?: ?, editor?: +CKEDITOR.editor) -> bool|?",
     "!doc": "<p>Fires an specific event in the object. All registered listeners are\ncalled at this point.</p>\n\n<pre><code>someObject.on( 'someEvent', function() { ... } );\nsomeObject.on( 'someEvent', function() { ... } );\nsomeObject.fire( 'someEvent' );             // Both listeners are called.\n\nsomeObject.on( 'someEvent', function( event ) {\n    alert( event.data );                    // 'Example'\n} );\nsomeObject.fire( 'someEvent', 'Example' );\n</code></pre>\n"
    },
    "fireOnce": {
     "!type": "fn(eventName: string, data?: ?, editor?: +CKEDITOR.editor) -> bool|?",
     "!doc": "<p>Fires an specific event in the object, releasing all listeners\nregistered to that event. The same listeners are not called again on\nsuccessive calls of it or of <a href=\"#!/api/CKEDITOR.event-method-fire\" rel=\"CKEDITOR.event-method-fire\" class=\"docClass\">fire</a>.</p>\n\n<pre><code>someObject.on( 'someEvent', function() { ... } );\nsomeObject.fire( 'someEvent' );         // Above listener called.\nsomeObject.fireOnce( 'someEvent' );     // Above listener called.\nsomeObject.fire( 'someEvent' );         // No listeners called.\n</code></pre>\n"
    },
    "hasListeners": {
     "!type": "fn(eventName: string) -> bool",
     "!doc": "<p>Checks if there is any listener registered to a given event.</p>\n\n<pre><code>var myListener = function() { ... };\nsomeObject.on( 'someEvent', myListener );\nalert( someObject.hasListeners( 'someEvent' ) );    // true\nalert( someObject.hasListeners( 'noEvent' ) );      // false\n</code></pre>\n"
    },
    "on": {
     "!type": "fn(eventName: string, listenerFunction: fn(), scopeObj?: ?, listenerData?: ?, priority?: number) -> ?",
     "!doc": "<p>Registers a listener to a specific event in the current object.</p>\n\n<pre><code>someObject.on( 'someEvent', function() {\n    alert( this == someObject );        // true\n} );\n\nsomeObject.on( 'someEvent', function() {\n    alert( this == anotherObject );     // true\n}, anotherObject );\n\nsomeObject.on( 'someEvent', function( event ) {\n    alert( event.listenerData );        // 'Example'\n}, null, 'Example' );\n\nsomeObject.on( 'someEvent', function() { ... } );                       // 2nd called\nsomeObject.on( 'someEvent', function() { ... }, null, null, 100 );      // 3rd called\nsomeObject.on( 'someEvent', function() { ... }, null, null, 1 );        // 1st called\n</code></pre>\n"
    },
    "once": {
     "!type": "fn() -> !this",
     "!doc": "<p>Similiar with <a href=\"#!/api/CKEDITOR.event-method-on\" rel=\"CKEDITOR.event-method-on\" class=\"docClass\">on</a> but the listener will be called only once upon the next event firing.</p>\n\n<p>@see <a href=\"#!/api/CKEDITOR.event-method-on\" rel=\"CKEDITOR.event-method-on\" class=\"docClass\">CKEDITOR.event.on</a></p>\n"
    },
    "removeAllListeners": {
     "!type": "fn() -> !this",
     "!doc": "<p>Remove all existing listeners on this object, for cleanup purpose.</p>\n"
    },
    "removeListener": {
     "!type": "fn(eventName: string, listenerFunction: fn()) -> !this",
     "!doc": "<p>Unregisters a listener function from being called at the specified\nevent. No errors are thrown if the listener has not been registered previously.</p>\n\n<pre><code>var myListener = function() { ... };\nsomeObject.on( 'someEvent', myListener );\nsomeObject.fire( 'someEvent' );                 // myListener called.\nsomeObject.removeListener( 'someEvent', myListener );\nsomeObject.fire( 'someEvent' );                 // myListener not called.\n</code></pre>\n"
    }
   },
   "!doc": "<p>Creates an event class instance. This constructor is rarely used, being\nthe <a href=\"#!/api/CKEDITOR.event-static-method-implementOn\" rel=\"CKEDITOR.event-static-method-implementOn\" class=\"docClass\">implementOn</a> function used in class prototypes directly\ninstead.</p>\n\n<p>This is a base class for classes and objects that require event\nhandling features.</p>\n\n<p>Do not confuse this class with <a href=\"#!/api/CKEDITOR.dom.event\" rel=\"CKEDITOR.dom.event\" class=\"docClass\">CKEDITOR.dom.event</a> which is\ninstead used for DOM events. The <a href=\"#!/api/CKEDITOR.event\" rel=\"CKEDITOR.event\" class=\"docClass\">CKEDITOR.event</a> class implements the\ninternal event system used by the CKEditor to fire API related events.</p>\n",
   "useCapture": {
    "!type": "bool",
    "!doc": "<p>@todo</p>\n"
   },
   "implementOn": {
    "!type": "fn(targetObject: ?) -> !this",
    "!doc": "<p>Implements the <a href=\"#!/api/CKEDITOR.event\" rel=\"CKEDITOR.event\" class=\"docClass\">CKEDITOR.event</a> features in an object.</p>\n\n<pre><code>var myObject = { message: 'Example' };\n<a href=\"#!/api/CKEDITOR.event-static-method-implementOn\" rel=\"CKEDITOR.event-static-method-implementOn\" class=\"docClass\">CKEDITOR.event.implementOn</a>( myObject );\n\nmyObject.on( 'testEvent', function() {\n    alert( this.message );\n} );\nmyObject.fire( 'testEvent' ); // 'Example'\n</code></pre>\n"
   }
  },
  "commandDefinition": {
   "!doc": "<p>Virtual class that illustrates the features of command objects to be\npassed to the <a href=\"#!/api/CKEDITOR.editor-method-addCommand\" rel=\"CKEDITOR.editor-method-addCommand\" class=\"docClass\">CKEDITOR.editor.addCommand</a> function.</p>\n",
   "prototype": {
    "async": {
     "!type": "bool",
     "!doc": "<p>Whether the command is asynchronous, which means that the\n<a href=\"#!/api/CKEDITOR.editor-event-afterCommandExec\" rel=\"CKEDITOR.editor-event-afterCommandExec\" class=\"docClass\">CKEDITOR.editor.afterCommandExec</a> event will be fired by the\ncommand itself manually, and that the return value of this command is not to\nbe returned by the <a href=\"#!/api/CKEDITOR.commandDefinition-method-exec\" rel=\"CKEDITOR.commandDefinition-method-exec\" class=\"docClass\">exec</a> function.</p>\n\n<pre><code>    editorInstance.addCommand( 'loadOptions', {\n        exec: function( editor ) {\n            // Asynchronous operation below.\n            CKEDITOR.ajax.loadXml( 'data.xml', function() {\n                editor.fire( 'afterCommandExec' );\n            } );\n        },\n        async: true // The command need some time to complete after exec function returns.\n    } );\n</code></pre>\n"
    },
    "canUndo": {
     "!type": "bool",
     "!doc": "<p>Whether the command need to be hooked into the redo/undo system.</p>\n\n<pre><code>editorInstance.addCommand( 'alertName', {\n    exec: function( editor ) {\n        alert( editor.name );\n    },\n    canUndo: false // No support for undo/redo.\n} );\n</code></pre>\n"
    },
    "context": {
     "!type": "bool",
     "!doc": "<p>Sets the element name used to reflect the command state on selection changes.\nIf the selection is in a place where the element is not allowed, the command\nwill be disabled.\nSetting this property overrides <a href=\"#!/api/CKEDITOR.commandDefinition-property-contextSensitive\" rel=\"CKEDITOR.commandDefinition-property-contextSensitive\" class=\"docClass\">contextSensitive</a> to <code>true</code>.</p>\n"
    },
    "contextSensitive": {
     "!type": "bool",
     "!doc": "<p>Indicates that this command is sensible to the selection context.\nIf <code>true</code>, the <a href=\"#!/api/CKEDITOR.command-method-refresh\" rel=\"CKEDITOR.command-method-refresh\" class=\"docClass\">CKEDITOR.command.refresh</a> method will be\ncalled for this command on selection changes, with a single parameter\nrepresenting the current elements path.</p>\n"
    },
    "editorFocus": {
     "!type": "bool",
     "!doc": "<p>Whether the command should give focus to the editor before execution.</p>\n\n<pre><code>editorInstance.addCommand( 'maximize', {\n        exec: function( editor ) {\n        // ...\n    },\n    editorFocus: false // The command doesn't require focusing the editing document.\n} );@see <a href=\"#!/api/CKEDITOR.command-property-editorFocus\" rel=\"CKEDITOR.command-property-editorFocus\" class=\"docClass\">CKEDITOR.command.editorFocus</a>\n</code></pre>\n"
    },
    "modes": {
     "!type": "?",
     "!doc": "<p>The editor modes within which the command can be executed. The execution\nwill have no action if the current mode is not listed in this property.</p>\n\n<pre><code>editorInstance.addCommand( 'link', {\n    exec: function( editor ) {\n        // ...\n    },\n    modes: { wysiwyg:1 } // Command is available in wysiwyg mode only.\n} );@see <a href=\"#!/api/CKEDITOR.command-property-modes\" rel=\"CKEDITOR.command-property-modes\" class=\"docClass\">CKEDITOR.command.modes</a>\n</code></pre>\n"
    },
    "startDisabled": {
     "!type": "bool",
     "!doc": "<p>Whether the command state should be set to <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a> on startup.</p>\n\n<pre><code>editorInstance.addCommand( 'unlink', {\n    exec: function( editor ) {\n        // ...\n    },\n    startDisabled: true // Command is unavailable until selection is inside a link.\n} );\n</code></pre>\n"
    },
    "exec": {
     "!type": "fn(editor: +CKEDITOR.editor, data?: ?) -> bool",
     "!doc": "<p>The function to be fired when the commend is executed.</p>\n\n<pre><code>editorInstance.addCommand( 'sample', {\n    exec: function( editor ) {\n        alert( 'Executing a command for the editor name \"' + editor.name + '\"!' );\n    }\n} );\n</code></pre>\n"
    },
    "refresh": {
     "!type": "fn(editor: +CKEDITOR.editor, path: +CKEDITOR.dom.elementPath)",
     "!doc": "<p>Defined by command definition a function to determinate the command state, it will be invoked\nwhen editor has it's <code>states</code> or <code>selection</code> changed.</p>\n\n<p><strong>Note:</strong> The function provided must be calling <a href=\"#!/api/CKEDITOR.command-method-setState\" rel=\"CKEDITOR.command-method-setState\" class=\"docClass\">CKEDITOR.command.setState</a> in all circumstance,\nif it is intended to update the command state.</p>\n"
    }
   }
  },
  "config": {
   "!doc": "<p>Stores default configuration settings. Changes to this object are\nreflected in all editor instances, if not specified otherwise for a particular\ninstance.</p>\n\n<p>Read more about setting CKEditor configuration in the\n<a href=\"#!/guide/dev_configuration\">Developer's Guide</a>.</p>\n",
   "allowedContent": {
    "!type": "+CKEDITOR.filter.allowedContentRules|bool",
    "!doc": "<p>Allowed content rules. This setting is used when\ninstantiating <a href=\"#!/api/CKEDITOR.editor-property-filter\" rel=\"CKEDITOR.editor-property-filter\" class=\"docClass\">CKEDITOR.editor.filter</a>.</p>\n\n<p>The following values are accepted:</p>\n\n<ul>\n<li><a href=\"#!/api/CKEDITOR.filter.allowedContentRules\" rel=\"CKEDITOR.filter.allowedContentRules\" class=\"docClass\">CKEDITOR.filter.allowedContentRules</a> &ndash; defined rules will be added\nto the <a href=\"#!/api/CKEDITOR.editor-property-filter\" rel=\"CKEDITOR.editor-property-filter\" class=\"docClass\">CKEDITOR.editor.filter</a>.</li>\n<li><code>true</code> &ndash; will disable the filter (data will not be filtered,\nall features will be activated).</li>\n<li>default &ndash; the filter will be configured by loaded features\n(toolbar items, commands, etc.).</li>\n</ul>\n\n\n<p>In all cases filter configuration may be extended by\n<a href=\"#!/api/CKEDITOR.config-cfg-extraAllowedContent\" rel=\"CKEDITOR.config-cfg-extraAllowedContent\" class=\"docClass\">extraAllowedContent</a>. This option may be especially\nuseful when you want to use the default <code>allowedContent</code> value\nalong with some additional rules.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( 'textarea_id', {\n    allowedContent: 'p b i; a[!href]',\n    on: {\n        instanceReady: function( evt ) {\n            var editor = evt.editor;\n\n            editor.filter.check( 'h1' ); // -&gt; false\n            editor.setData( '&lt;h1&gt;&lt;i&gt;Foo&lt;/i&gt;&lt;/h1&gt;&lt;p class=\"left\"&gt;&lt;span&gt;Bar&lt;/span&gt; &lt;a href=\"http://foo.bar\"&gt;foo&lt;/a&gt;&lt;/p&gt;' );\n            // Editor contents will be:\n            '&lt;p&gt;&lt;i&gt;Foo&lt;/i&gt;&lt;/p&gt;&lt;p&gt;Bar &lt;a href=\"http://foo.bar\"&gt;foo&lt;/a&gt;&lt;/p&gt;'\n        }\n    }\n} );\n</code></pre>\n\n<p>It is also possible to disallow some already allowed content. It is especially\nuseful when you want to \"trim down\" the content allowed by default by\neditor features. To do that, use the <a href=\"#!/api/CKEDITOR.config-cfg-disallowedContent\" rel=\"CKEDITOR.config-cfg-disallowedContent\" class=\"docClass\">disallowedContent</a> option.</p>\n"
   },
   "autoUpdateElement": {
    "!type": "bool",
    "!doc": "<p>Whether the replaced element (usually a <code>&lt;textarea&gt;</code>)\nis to be updated automatically when posting the form containing the editor.</p>\n"
   },
   "baseFloatZIndex": {
    "!type": "number",
    "!doc": "<p>The base Z-index for floating dialog windows and popups.</p>\n\n<pre><code>config.baseFloatZIndex = 2000;\n</code></pre>\n"
   },
   "blockedKeystrokes": {
    "!type": "[?]",
    "!doc": "<p>The keystrokes that are blocked by default as the browser implementation\nis buggy. These default keystrokes are handled by the editor.</p>\n\n<pre><code>// Default setting.\nconfig.blockedKeystrokes = [\n    <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + 66, // CTRL+B\n    <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + 73, // CTRL+I\n    <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + 85 // CTRL+U\n];\n</code></pre>\n"
   },
   "bodyClass": {
    "!type": "string",
    "!doc": "<p>Sets the <code>class</code> attribute to be used on the <code>body</code> element\nof the editing area. This can be useful when you intend to reuse the original CSS\nfile you are using on your live website and want to assign the editor the same class\nas the section that will include the contents. In this way class-specific CSS rules will\nbe enabled.</p>\n\n<pre><code>config.bodyClass = 'contents';\n</code></pre>\n\n<p><strong>Note:</strong> Editor needs to load stylesheets containing contents styles. You can either\ncopy them to the <code>contents.css</code> file that editor loads by default or set the contentsCss\noption.</p>\n\n<p><strong>Note:</strong> This setting applies only to the classic editor (the one that uses <code>iframe</code>).</p>\n"
   },
   "bodyId": {
    "!type": "string",
    "!doc": "<p>Sets the <code>id</code> attribute to be used on the <code>body</code> element\nof the editing area. This can be useful when you intend to reuse the original CSS\nfile you are using on your live website and want to assign the editor the same ID\nas the section that will include the contents. In this way ID-specific CSS rules will\nbe enabled.</p>\n\n<pre><code>config.bodyId = 'contents_id';\n</code></pre>\n"
   },
   "contentsLangDirection": {
    "!type": "string",
    "!doc": "<p>The writing direction of the language which is used to create editor contents.\nAllowed values are:</p>\n\n<ul>\n<li><code>''</code> (an empty string) &ndash; Indicates that content direction will be the same as either\n   the editor UI direction or the page element direction depending on the editor type:\n\n<ul>\n<li>Classic editor &ndash; The same as the user interface language direction.</li>\n<li>Inline editor &ndash; The same as the editable element text direction.</li>\n</ul>\n</li>\n<li><code>'ltr'</code> &ndash; Indicates a Left-To-Right text direction (like in English).</li>\n<li><code>'rtl'</code> &ndash; Indicates a Right-To-Left text direction (like in Arabic).</li>\n</ul>\n\n\n<p>Example:</p>\n\n<pre><code>config.contentsLangDirection = 'rtl';\n</code></pre>\n"
   },
   "customConfig": {
    "!type": "string",
    "!doc": "<p>The URL path for the custom configuration file to be loaded. If not\noverloaded with inline configuration, it defaults to the <code>config.js</code>\nfile present in the root of the CKEditor installation directory.</p>\n\n<p>CKEditor will recursively load custom configuration files defined inside\nother custom configuration files.</p>\n\n<pre><code>// Load a specific configuration file.\n<a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( 'myfield', { customConfig: '/myconfig.js' } );\n\n// Do not load any custom configuration file.\n<a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( 'myfield', { customConfig: '' } );\n</code></pre>\n"
   },
   "defaultLanguage": {
    "!type": "string",
    "!doc": "<p>The language to be used if the <a href=\"#!/api/CKEDITOR.config-cfg-language\" rel=\"CKEDITOR.config-cfg-language\" class=\"docClass\">language</a>\nsetting is left empty and it is not possible to localize the editor to the user language.</p>\n\n<pre><code>config.defaultLanguage = 'it';\n</code></pre>\n"
   },
   "disableReadonlyStyling": {
    "!type": "bool",
    "!doc": "<p>Disables inline styling on read-only elements.</p>\n"
   },
   "disallowedContent": {
    "!type": "+CKEDITOR.filter.disallowedContentRules",
    "!doc": "<p>Disallowed content rules. They have precedence over <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">allowed content rules</a>.\nRead more in the <a href=\"#!/guide/dev_disallowed_content\">Disallowed Content guide</a>.</p>\n\n<p>See also <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">allowedContent</a> and <a href=\"#!/api/CKEDITOR.config-cfg-extraAllowedContent\" rel=\"CKEDITOR.config-cfg-extraAllowedContent\" class=\"docClass\">extraAllowedContent</a>.</p>\n"
   },
   "docType": {
    "!type": "string",
    "!doc": "<p>Sets the <code>DOCTYPE</code> to be used when loading the editor content as HTML.</p>\n\n<pre><code>// Set the DOCTYPE to the HTML 4 (Quirks) mode.\nconfig.docType = '&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"&gt;';\n</code></pre>\n"
   },
   "enterMode": {
    "!type": "number",
    "!doc": "<p>Sets the behavior of the <em>Enter</em> key. It also determines other behavior\nrules of the editor, like whether the <code>&lt;br&gt;</code> element is to be used\nas a paragraph separator when indenting text.\nThe allowed values are the following constants that cause the behavior outlined below:</p>\n\n<ul>\n<li><a href=\"#!/api/CKEDITOR-property-ENTER_P\" rel=\"CKEDITOR-property-ENTER_P\" class=\"docClass\">CKEDITOR.ENTER_P</a> (1) &ndash; new <code>&lt;p&gt;</code> paragraphs are created;</li>\n<li><a href=\"#!/api/CKEDITOR-property-ENTER_BR\" rel=\"CKEDITOR-property-ENTER_BR\" class=\"docClass\">CKEDITOR.ENTER_BR</a> (2) &ndash; lines are broken with <code>&lt;br&gt;</code> elements;</li>\n<li><a href=\"#!/api/CKEDITOR-property-ENTER_DIV\" rel=\"CKEDITOR-property-ENTER_DIV\" class=\"docClass\">CKEDITOR.ENTER_DIV</a> (3) &ndash; new <code>&lt;div&gt;</code> blocks are created.</li>\n</ul>\n\n\n<p><strong>Note</strong>: It is recommended to use the <a href=\"#!/api/CKEDITOR-property-ENTER_P\" rel=\"CKEDITOR-property-ENTER_P\" class=\"docClass\">CKEDITOR.ENTER_P</a> setting because of\nits semantic value and correctness. The editor is optimized for this setting.</p>\n\n<pre><code>// Not recommended.\nconfig.enterMode = <a href=\"#!/api/CKEDITOR-property-ENTER_BR\" rel=\"CKEDITOR-property-ENTER_BR\" class=\"docClass\">CKEDITOR.ENTER_BR</a>;\n</code></pre>\n"
   },
   "extraAllowedContent": {
    "!type": "?|string",
    "!doc": "<p>This option makes it possible to set additional allowed\ncontent rules for <a href=\"#!/api/CKEDITOR.editor-property-filter\" rel=\"CKEDITOR.editor-property-filter\" class=\"docClass\">CKEDITOR.editor.filter</a>.</p>\n\n<p>It is especially useful in combination with the default\n<a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">allowedContent</a> value:</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( 'textarea_id', {\n    plugins: 'wysiwygarea,toolbar,format',\n    extraAllowedContent: 'b i',\n    on: {\n        instanceReady: function( evt ) {\n            var editor = evt.editor;\n\n            editor.filter.check( 'h1' ); // -&gt; true (thanks to Format combo)\n            editor.filter.check( 'b' ); // -&gt; true (thanks to extraAllowedContent)\n            editor.setData( '&lt;h1&gt;&lt;i&gt;Foo&lt;/i&gt;&lt;/h1&gt;&lt;p class=\"left\"&gt;&lt;b&gt;Bar&lt;/b&gt; &lt;a href=\"http://foo.bar\"&gt;foo&lt;/a&gt;&lt;/p&gt;' );\n            // Editor contents will be:\n            '&lt;h1&gt;&lt;i&gt;Foo&lt;/i&gt;&lt;/h1&gt;&lt;p&gt;&lt;b&gt;Bar&lt;/b&gt; foo&lt;/p&gt;'\n        }\n    }\n} );\n</code></pre>\n\n<p>See <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">allowedContent</a> for more details.</p>\n"
   },
   "extraPlugins": {
    "!type": "string",
    "!doc": "<p>A list of additional plugins to be loaded. This setting makes it easier\nto add new plugins without having to touch the <a href=\"#!/api/CKEDITOR.config-cfg-plugins\" rel=\"CKEDITOR.config-cfg-plugins\" class=\"docClass\">plugins</a> setting.</p>\n\n<p><strong>Note:</strong> The most recommended way to\n<a href=\"http://docs.ckeditor.com/#!/guide/dev_plugins\">add CKEditor plugins</a> is through\n<a href=\"http://ckeditor.com/builder\">CKEditor Builder</a>.</p>\n\n<pre><code>config.extraPlugins = 'myplugin,anotherplugin';\n</code></pre>\n"
   },
   "fillEmptyBlocks": {
    "!type": "bool|fn()",
    "!doc": "<p>Whether a filler text (non-breaking space entity &mdash; <code>&amp;nbsp;</code>) will be\ninserted into empty block elements in HTML output.\nThis is used to render block elements properly with <code>line-height</code>.\nWhen a function is specified instead, it will be passed a <a href=\"#!/api/CKEDITOR.htmlParser.element\" rel=\"CKEDITOR.htmlParser.element\" class=\"docClass\">CKEDITOR.htmlParser.element</a>\nto decide whether adding the filler text by expecting a Boolean return value.</p>\n\n<pre><code>config.fillEmptyBlocks = false; // Prevent filler nodes in all empty blocks.\n\n// Prevent filler node only in float cleaners.\nconfig.fillEmptyBlocks = function( element ) {\n    if ( element.attributes[ 'class' ].indexOf( 'clear-both' ) != -1 )\n        return false;\n};\n</code></pre>\n"
   },
   "forceEnterMode": {
    "!type": "bool",
    "!doc": "<p>Force the use of <a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">enterMode</a> as line break regardless\nof the context. If, for example, <a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">enterMode</a> is set\nto <a href=\"#!/api/CKEDITOR-property-ENTER_P\" rel=\"CKEDITOR-property-ENTER_P\" class=\"docClass\">CKEDITOR.ENTER_P</a>, pressing the <em>Enter</em> key inside a\n<code>&lt;div&gt;</code> element will create a new paragraph with <code>&lt;p&gt;</code>\ninstead of a <code>&lt;div&gt;</code>.</p>\n\n<pre><code>// Not recommended.\nconfig.forceEnterMode = true;\n</code></pre>\n"
   },
   "fullPage": {
    "!type": "bool",
    "!doc": "<p>Indicates whether the contents to be edited are being input as a full HTML page.\nA full page includes the <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> elements.\nThe final output will also reflect this setting, including the\n<code>&lt;body&gt;</code> contents only if this setting is disabled.</p>\n\n<pre><code>config.fullPage = true;\n</code></pre>\n"
   },
   "height": {
    "!type": "number|string",
    "!doc": "<p>The height of the editing area that includes the editor content. This configuration\noption accepts an integer (to denote a value in pixels) or any CSS-defined length unit\nexcept percent (<code>%</code>) values  which are not supported.</p>\n\n<p><strong>Note:</strong> This configuration option is ignored by <a href=\"#!/guide/dev_inline\">inline editor</a>.</p>\n\n<pre><code>config.height = 500;        // 500 pixels.\nconfig.height = '25em';     // CSS length.\nconfig.height = '300px';    // CSS length.\n</code></pre>\n"
   },
   "htmlEncodeOutput": {
    "!type": "bool",
    "!doc": "<p>Whether to escape HTML when the editor updates the original input element.</p>\n\n<pre><code>config.htmlEncodeOutput = true;\n</code></pre>\n"
   },
   "ignoreEmptyParagraph": {
    "!type": "bool",
    "!doc": "<p>Whether the editor must output an empty value (<code>''</code>) if its content only consists\nof an empty paragraph.</p>\n\n<pre><code>config.ignoreEmptyParagraph = false;\n</code></pre>\n"
   },
   "keystrokes": {
    "!type": "[?]",
    "!doc": "<p>A list associating keystrokes with editor commands. Each element in the list\nis an array where the first item is the keystroke, and the second is the\nname of the command to be executed.</p>\n\n<p>This setting should be used to define (as well as to overwrite or remove) keystrokes\nset by plugins (like <code>link</code> and <code>basicstyles</code>). If you want to set a keystroke\nfor your plugin or during the runtime, use <a href=\"#!/api/CKEDITOR.editor-method-setKeystroke\" rel=\"CKEDITOR.editor-method-setKeystroke\" class=\"docClass\">CKEDITOR.editor.setKeystroke</a> instead.</p>\n\n<p>Since default keystrokes are set by the <a href=\"#!/api/CKEDITOR.editor-method-setKeystroke\" rel=\"CKEDITOR.editor-method-setKeystroke\" class=\"docClass\">CKEDITOR.editor.setKeystroke</a>\nmethod, by default <code>config.keystrokes</code> is an empty array.</p>\n\n<p>See <a href=\"#!/api/CKEDITOR.editor-method-setKeystroke\" rel=\"CKEDITOR.editor-method-setKeystroke\" class=\"docClass\">CKEDITOR.editor.setKeystroke</a> documentation for more details\nregarding the start up order.</p>\n\n<pre><code>// Change default Ctrl+L keystroke for 'link' command to Ctrl+Shift+L.\nconfig.keystrokes = [\n    ...\n    [ <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + <a href=\"#!/api/CKEDITOR-property-SHIFT\" rel=\"CKEDITOR-property-SHIFT\" class=\"docClass\">CKEDITOR.SHIFT</a> + 76, 'link' ],    // Ctrl+Shift+L\n    ...\n];\n</code></pre>\n\n<p>To reset a particular keystroke, the following approach can be used:</p>\n\n<pre><code>// Disable default Ctrl+L keystroke which executes the 'link' command by default.\nconfig.keystrokes = [\n    ...\n    [ <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + 76, null ],                       // Ctrl+L\n    ...\n];\n</code></pre>\n\n<p>In order to reset all default keystrokes, a <a href=\"#!/api/CKEDITOR-event-instanceReady\" rel=\"CKEDITOR-event-instanceReady\" class=\"docClass\">CKEDITOR.instanceReady</a> callback should be\nused. This is since editor defaults are merged rather than overwritten by\nuser keystrokes.</p>\n\n<p><strong>Note</strong>: This can be potentially harmful for the editor. Avoid this unless you are\naware of the consequences.</p>\n\n<pre><code>// Reset all default keystrokes.\nconfig.on.instanceReady = function() {\n    this.keystrokeHandler.keystrokes = [];\n};\n</code></pre>\n"
   },
   "language": {
    "!type": "string",
    "!doc": "<p>The user interface language localization to use. If left empty, the editor\nwill automatically be localized to the user language. If the user language is not supported,\nthe language specified in the <a href=\"#!/api/CKEDITOR.config-cfg-defaultLanguage\" rel=\"CKEDITOR.config-cfg-defaultLanguage\" class=\"docClass\">defaultLanguage</a>\nconfiguration setting is used.</p>\n\n<pre><code>// Load the German interface.\nconfig.language = 'de';\n</code></pre>\n"
   },
   "on": {
    "!type": "?",
    "!doc": "<p>Sets listeners on editor events.</p>\n\n<p><strong>Note:</strong> This property can only be set in the <code>config</code> object passed directly\nto <a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>, <a href=\"#!/api/CKEDITOR-method-inline\" rel=\"CKEDITOR-method-inline\" class=\"docClass\">CKEDITOR.inline</a>, and other creators.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( 'editor1', {\n    on: {\n        instanceReady: function() {\n            alert( this.name ); // 'editor1'\n        },\n\n        key: function() {\n            // ...\n        }\n    }\n} );\n</code></pre>\n"
   },
   "plugins": {
    "!type": "string",
    "!doc": "<p>Comma-separated list of plugins to be used in an editor instance. Note that\nthe actual plugins that are to be loaded could still be affected by two other settings:\n<a href=\"#!/api/CKEDITOR.config-cfg-extraPlugins\" rel=\"CKEDITOR.config-cfg-extraPlugins\" class=\"docClass\">extraPlugins</a> and <a href=\"#!/api/CKEDITOR.config-cfg-removePlugins\" rel=\"CKEDITOR.config-cfg-removePlugins\" class=\"docClass\">removePlugins</a>.</p>\n"
   },
   "protectedSource": {
    "!type": "[?]",
    "!doc": "<p>A list of regular expressions to be executed on input HTML,\nindicating HTML source code that when matched, must <strong>not</strong> be available in the WYSIWYG\nmode for editing.</p>\n\n<pre><code>config.protectedSource.push( /&lt;\\?[\\s\\S]*?\\?&gt;/g );                                           // PHP code\nconfig.protectedSource.push( /&lt;%[\\s\\S]*?%&gt;/g );                                             // ASP code\nconfig.protectedSource.push( /(&lt;asp:[^\\&gt;]+&gt;[\\s|\\S]*?&lt;\\/asp:[^\\&gt;]+&gt;)|(&lt;asp:[^\\&gt;]+\\/&gt;)/gi );  // ASP.Net code\n</code></pre>\n"
   },
   "readOnly": {
    "!type": "bool",
    "!doc": "<p>If <code>true</code>, makes the editor start in read-only state. Otherwise, it will check\nif the linked <code>&lt;textarea&gt;</code> element has the <code>disabled</code> attribute.</p>\n\n<pre><code>config.readOnly = true;@see <a href=\"#!/api/CKEDITOR.editor-method-setReadOnly\" rel=\"CKEDITOR.editor-method-setReadOnly\" class=\"docClass\">CKEDITOR.editor.setReadOnly</a>\n</code></pre>\n"
   },
   "removePlugins": {
    "!type": "string",
    "!doc": "<p>A list of plugins that must not be loaded. This setting makes it possible\nto avoid loading some plugins defined in the <a href=\"#!/api/CKEDITOR.config-cfg-plugins\" rel=\"CKEDITOR.config-cfg-plugins\" class=\"docClass\">plugins</a>\nsetting, without having to touch it.</p>\n\n<p><strong>Note:</strong> A plugin required by another plugin cannot be removed and will cause\nan error to be thrown. So for example if <code>contextmenu</code> is required by <code>tabletools</code>,\nit can only be removed if <code>tabletools</code> is not loaded.</p>\n\n<pre><code>config.removePlugins = 'elementspath,save,font';\n</code></pre>\n"
   },
   "shiftEnterMode": {
    "!type": "number",
    "!doc": "<p>Similarly to the <a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">enterMode</a> setting, it defines the behavior\nof the <em>Shift+Enter</em> key combination.</p>\n\n<p>The allowed values are the following constants the behavior outlined below:</p>\n\n<ul>\n<li><a href=\"#!/api/CKEDITOR-property-ENTER_P\" rel=\"CKEDITOR-property-ENTER_P\" class=\"docClass\">CKEDITOR.ENTER_P</a> (1) &ndash; new <code>&lt;p&gt;</code> paragraphs are created;</li>\n<li><a href=\"#!/api/CKEDITOR-property-ENTER_BR\" rel=\"CKEDITOR-property-ENTER_BR\" class=\"docClass\">CKEDITOR.ENTER_BR</a> (2) &ndash; lines are broken with <code>&lt;br&gt;</code> elements;</li>\n<li><a href=\"#!/api/CKEDITOR-property-ENTER_DIV\" rel=\"CKEDITOR-property-ENTER_DIV\" class=\"docClass\">CKEDITOR.ENTER_DIV</a> (3) &ndash; new <code>&lt;div&gt;</code> blocks are created.</li>\n</ul>\n\n\n<p>Example:</p>\n\n<pre><code>config.shiftEnterMode = <a href=\"#!/api/CKEDITOR-property-ENTER_P\" rel=\"CKEDITOR-property-ENTER_P\" class=\"docClass\">CKEDITOR.ENTER_P</a>;\n</code></pre>\n"
   },
   "skin": {
    "!type": "string",
    "!doc": "<p>The editor skin name. Note that it is not possible to have editors with\ndifferent skin settings in the same page. In such case just one of the\nskins will be used for all editors.</p>\n\n<p>This is a shortcut to CKEDITOR.skinName.</p>\n\n<p>It is possible to install skins outside the default <code>skin</code> folder in the\neditor installation. In that case, the absolute URL path to that folder\nshould be provided, separated by a comma (<code>'skin_name,skin_path'</code>).</p>\n\n<pre><code>config.skin = 'moono';\n\nconfig.skin = 'myskin,/customstuff/myskin/';\n</code></pre>\n"
   },
   "startupFocus": {
    "!type": "bool",
    "!doc": "<p>Sets whether an editable element should have focus when the editor is loading for the first time.</p>\n\n<pre><code>config.startupFocus = true;\n</code></pre>\n"
   },
   "startupMode": {
    "!type": "string",
    "!doc": "<p>The mode to load at the editor startup. It depends on the plugins\nloaded. By default, the <code>wysiwyg</code> and <code>source</code> modes are available.</p>\n\n<pre><code>config.startupMode = 'source';\n</code></pre>\n"
   },
   "stylesSet": {
    "!type": "string|[?]|bool",
    "!doc": "<p>The \"styles definition set\" to use in the editor. They will be used in the\nstyles combo and the style selector of the div container.</p>\n\n<p>The styles may be defined in the page containing the editor, or can be\nloaded on demand from an external file. In the second case, if this setting\ncontains only a name, the <code>styles.js</code> file will be loaded from the\nCKEditor root folder (what ensures backward compatibility with CKEditor 4.0).</p>\n\n<p>Otherwise, this setting has the <code>name:url</code> syntax, making it\npossible to set the URL from which loading the styles file.\nNote that the <code>name</code> has to be equal to the name used in\n<a href=\"#!/api/CKEDITOR.stylesSet-method-add\" rel=\"CKEDITOR.stylesSet-method-add\" class=\"docClass\">CKEDITOR.stylesSet.add</a> while registering styles set.</p>\n\n<p><strong>Note</strong>: Since 4.1 it is possible to set <code>stylesSet</code> to <code>false</code>\nto prevent loading any styles set.</p>\n\n<pre><code>// Do not load any file. Styles set is empty.\nconfig.stylesSet = false;\n\n// Load the 'mystyles' styles set from styles.js file.\nconfig.stylesSet = 'mystyles';\n\n// Load the 'mystyles' styles set from a relative URL.\nconfig.stylesSet = 'mystyles:/editorstyles/styles.js';\n\n// Load from a full URL.\nconfig.stylesSet = 'mystyles:http://www.example.com/editorstyles/styles.js';\n\n// Load from a list of definitions.\nconfig.stylesSet = [\n    { name: 'Strong Emphasis', element: 'strong' },\n    { name: 'Emphasis', element: 'em' },\n    ...\n];\n</code></pre>\n"
   },
   "tabIndex": {
    "!type": "number",
    "!doc": "<p>The editor <code>tabindex</code> value.</p>\n\n<pre><code>config.tabIndex = 1;\n</code></pre>\n"
   },
   "title": {
    "!type": "string|bool",
    "!doc": "<p>Customizes the <a href=\"#!/api/CKEDITOR.editor-property-title\" rel=\"CKEDITOR.editor-property-title\" class=\"docClass\">human-readable title</a> of this editor. This title is displayed in\ntooltips and impacts various accessibility aspects, e.g. it is commonly used by screen readers\nfor distinguishing editor instances and for navigation. Accepted values are a string or <code>false</code>.</p>\n\n<p><strong>Note:</strong> When <code>config.title</code> is set globally, the same value will be applied to all editor instances\nloaded with this config. This may adversely affect accessibility as screen reader users will be unable\nto distinguish particular editor instances and navigate between them.</p>\n\n<p><strong>Note:</strong> Setting <code>config.title = false</code> may also impair accessibility in a similar way.</p>\n\n<p><strong>Note:</strong> Please do not confuse this property with <a href=\"#!/api/CKEDITOR.editor-property-name\" rel=\"CKEDITOR.editor-property-name\" class=\"docClass\">CKEDITOR.editor.name</a>\nwhich identifies the instance in the <a href=\"#!/api/CKEDITOR-property-instances\" rel=\"CKEDITOR-property-instances\" class=\"docClass\">CKEDITOR.instances</a> literal.</p>\n\n<pre><code>// Sets the title to 'My WYSIWYG editor.'. The original title of the element (if it exists)\n// will be restored once the editor instance is destroyed.\nconfig.title = 'My WYSIWYG editor.';\n\n// Do not touch the title. If the element already has a title, it remains unchanged.\n// Also if no `title` attribute exists, nothing new will be added.\nconfig.title = false;@see <a href=\"#!/api/CKEDITOR.editor-property-name\" rel=\"CKEDITOR.editor-property-name\" class=\"docClass\">CKEDITOR.editor.name</a>\n</code></pre>\n\n<p>@see <a href=\"#!/api/CKEDITOR.editor-property-title\" rel=\"CKEDITOR.editor-property-title\" class=\"docClass\">CKEDITOR.editor.title</a></p>\n"
   },
   "uiColor": {
    "!type": "string",
    "!doc": "<p>The base user interface color to be used by the editor. Not all skins are\ncompatible with this setting.</p>\n\n<pre><code>// Using a color code.\nconfig.uiColor = '#AADC6E';\n\n// Using an HTML color name.\nconfig.uiColor = 'Gold';\n</code></pre>\n"
   },
   "useComputedState": {
    "!type": "bool",
    "!doc": "<p>Indicates that some of the editor features, like alignment and text\ndirection, should use the \"computed value\" of the feature to indicate its\non/off state instead of using the \"real value\".</p>\n\n<p>If enabled in a Left-To-Right written document, the \"Left Justify\"\nalignment button will be shown as active, even if the alignment style is not\nexplicitly applied to the current paragraph in the editor.</p>\n\n<pre><code>config.useComputedState = false;\n</code></pre>\n"
   },
   "width": {
    "!type": "string|number",
    "!doc": "<p>The editor UI outer width. This configuration option accepts an integer\n(to denote a value in pixels) or any CSS-defined length unit.</p>\n\n<p>Unlike the <a href=\"#!/api/CKEDITOR.config-cfg-height\" rel=\"CKEDITOR.config-cfg-height\" class=\"docClass\">height</a> setting, this\none will set the outer width of the entire editor UI, not for the\nediting area only.</p>\n\n<p><strong>Note:</strong> This configuration option is ignored by <a href=\"#!/guide/dev_inline\">inline editor</a>.</p>\n\n<pre><code>config.width = 850;     // 850 pixels wide.\nconfig.width = '75%';   // CSS unit.\n</code></pre>\n"
   }
  },
  "dataProcessor": {
   "!doc": "<p>Represents a data processor which is responsible for translating and\ntransforming the editor data on input and output.</p>\n\n<p>This class is here for documentation purposes only and is not really part of\nthe API. It serves as the base (\"interface\") for data processor implementations.</p>\n",
   "prototype": {
    "toDataFormat": {
     "!type": "fn(html: string, fixForBody: string)",
     "!doc": "<p>Transforms HTML into data to be output by the editor, in the format\nexpected by the data processor.</p>\n\n<p>While the editor is able to handle non-HTML data (like BBCode), it can only\nhandle HTML data at runtime. The role of the data processor is to transform\nthe HTML data containined by the editor into a specific data format through\nthis function.</p>\n\n<pre><code>// Tranforming into BBCode data, with a custom BBCode data processor available.\nvar html = '&lt;p&gt;This is &lt;b&gt;an example&lt;/b&gt;.&lt;/p&gt;';\nvar data = editor.dataProcessor.toDataFormat( html ); // 'This is [b]an example[/b].'\n</code></pre>\n"
    },
    "toHtml": {
     "!type": "fn(data: string, fixForBody?: string)",
     "!doc": "<p>Transforms input data into HTML to be loaded into the editor.\nWhile the editor is able to handle non-HTML data (like BBCode), it can only\nhandle HTML data at runtime. The role of the data processor is to transform\nthe input data into HTML through this function.</p>\n\n<pre><code>// Tranforming BBCode data, with a custom BBCode data processor available.\nvar data = 'This is [b]an example[/b].';\nvar html = editor.dataProcessor.toHtml( data ); // '&lt;p&gt;This is &lt;b&gt;an example&lt;/b&gt;.&lt;/p&gt;'\n</code></pre>\n"
    }
   }
  },
  "dom": {
   "comment": {
    "!doc": "<p>Represents a DOM comment node.</p>\n\n<pre><code>var nativeNode = document.createComment( 'Example' );\nvar comment = new <a href=\"#!/api/CKEDITOR.dom.comment\" rel=\"CKEDITOR.dom.comment\" class=\"docClass\">CKEDITOR.dom.comment</a>( nativeNode );\n\nvar comment = new <a href=\"#!/api/CKEDITOR.dom.comment\" rel=\"CKEDITOR.dom.comment\" class=\"docClass\">CKEDITOR.dom.comment</a>( 'Example' );\n</code></pre>\n",
    "prototype": {
     "!type": "fn(comment: ?|string, ownerDocument?: +CKEDITOR.dom.document)",
     "type": {
      "!type": "number",
      "!doc": "<p>The node type. This is a constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_COMMENT\" rel=\"CKEDITOR-property-NODE_COMMENT\" class=\"docClass\">CKEDITOR.NODE_COMMENT</a>.</p>\n"
     },
     "getOuterHtml": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets the outer HTML of this comment.</p>\n"
     }
    }
   },
   "domObject": {
    "prototype": {
     "!type": "fn(nativeDomObject: ?)",
     "$": {
      "!type": "?",
      "!doc": "<p>The native DOM object represented by this class instance.</p>\n\n<pre><code>var element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'span' );\nalert( element.$.nodeType ); // '1'\n</code></pre>\n"
     },
     "clearCustomData": {
      "!type": "fn() -> !this",
      "!doc": "<p>Removes any data stored on this object.\nTo avoid memory leaks we must assure that there are no\nreferences left after the object is no longer needed.</p>\n"
     },
     "equals": {
      "!type": "fn(object: ?) -> bool",
      "!doc": "<p>Determines whether the specified object is equal to the current object.</p>\n\n<pre><code>var doc = new <a href=\"#!/api/CKEDITOR.dom.document\" rel=\"CKEDITOR.dom.document\" class=\"docClass\">CKEDITOR.dom.document</a>( document );\nalert( doc.equals( <a href=\"#!/api/CKEDITOR-property-document\" rel=\"CKEDITOR-property-document\" class=\"docClass\">CKEDITOR.document</a> ) );   // true\nalert( doc == <a href=\"#!/api/CKEDITOR-property-document\" rel=\"CKEDITOR-property-document\" class=\"docClass\">CKEDITOR.document</a> );          // false\n</code></pre>\n"
     },
     "getCustomData": {
      "!type": "fn(key: string) -> ?",
      "!doc": "<p>Gets the value set to a data slot in this object.</p>\n\n<pre><code>var element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'span' );\nalert( element.getCustomData( 'hasCustomData' ) );      // e.g. 'true'\nalert( element.getCustomData( 'nonExistingKey' ) );     // null\n</code></pre>\n"
     },
     "getPrivate": {
      "!type": "fn() -> ?",
      "!doc": "<p>Get the private <code>_</code> object which is bound to the native\nDOM object using <a href=\"#!/api/CKEDITOR.dom.domObject-method-getCustomData\" rel=\"CKEDITOR.dom.domObject-method-getCustomData\" class=\"docClass\">getCustomData</a>.</p>\n\n<pre><code>var elementA = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( nativeElement );\nelementA.getPrivate().value = 1;\n...\nvar elementB = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( nativeElement );\nelementB.getPrivate().value; // 1\n</code></pre>\n"
     },
     "getUniqueId": {
      "!type": "fn() -> number",
      "!doc": "<p>Gets an ID that can be used to identify this DOM object in\nthe running session.</p>\n\n<p><strong>Note</strong>: This method does not work on text nodes prior to Internet Explorer 9.</p>\n"
     },
     "removeAllListeners": {
      "!type": "fn() -> !this",
      "!doc": "<p>Removes any listener set on this object.</p>\n\n<p>To avoid memory leaks we must assure that there are no\nreferences left after the object is no longer needed.</p>\n"
     },
     "removeCustomData": {
      "!type": "fn(key: string) -> ?",
      "!doc": "<p>Removes the value in data slot under given <code>key</code>.</p>\n"
     },
     "setCustomData": {
      "!type": "fn(key: string, value: ?) -> +CKEDITOR.dom.domObject",
      "!doc": "<p>Sets a data slot value for this object. These values are shared by all\ninstances pointing to that same DOM object.</p>\n\n<p><strong>Note:</strong> The created data slot is only guarantied to be available on this unique dom node,\nthus any wish to continue access it from other element clones (either created by\nclone node or from <code>innerHtml</code>) will fail, for such usage, please use\n<a href=\"#!/api/CKEDITOR.dom.element-method-setAttribute\" rel=\"CKEDITOR.dom.element-method-setAttribute\" class=\"docClass\">CKEDITOR.dom.element.setAttribute</a> instead.</p>\n\n<p><strong>Note</strong>: This method does not work on text nodes prior to Internet Explorer 9.</p>\n\n<pre><code>var element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'span' );\nelement.setCustomData( 'hasCustomData', true );\n</code></pre>\n"
     }
    },
    "!doc": "<p>Represents a DOM object. This class is not intended to be used directly. It\nserves as the base class for other classes representing specific DOM\nobjects.</p>\n"
   },
   "node": {
    "prototype": {
     "!type": "fn(domNode: ?)",
     "appendTo": {
      "!type": "fn(element: +CKEDITOR.dom.element) -> +CKEDITOR.dom.element",
      "!doc": "<p>Makes this node a child of another element.</p>\n\n<pre><code>var p = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'p' );\nvar strong = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'strong' );\nstrong.appendTo( p );\n\n// Result: '&lt;p&gt;&lt;strong&gt;&lt;/strong&gt;&lt;/p&gt;'.\n</code></pre>\n"
     },
     "clone": {
      "!type": "fn(includeChildren?: bool, cloneId?: bool) -> +CKEDITOR.dom.node",
      "!doc": "<p>Clones this node.</p>\n\n<p><strong>Note</strong>: Values set by {<a href=\"#!/api/CKEDITOR.dom.node-method-setCustomData\" rel=\"CKEDITOR.dom.node-method-setCustomData\" class=\"docClass\">setCustomData</a>} will not be available in the clone.</p>\n"
     },
     "getAddress": {
      "!type": "fn(normalized?: bool) -> [?]",
      "!doc": "<p>Retrieves a uniquely identifiable tree address for this node.\nThe tree address returned is an array of integers, with each integer\nindicating a child index of a DOM node, starting from\n<code>document.documentElement</code>.</p>\n\n<p>For example, assuming <code>&lt;body&gt;</code> is the second child\nof <code>&lt;html&gt;</code> (<code>&lt;head&gt;</code> being the first),\nand we would like to address the third child under the\nfourth child of <code>&lt;body&gt;</code>, the tree address returned would be:\n<code>[1, 3, 2]</code>.</p>\n\n<p>The tree address cannot be used for finding back the DOM tree node once\nthe DOM tree structure has been modified.</p>\n"
     },
     "getAscendant": {
      "!type": "fn(query: string|fn()|?, includeSelf?: bool) -> +CKEDITOR.dom.node",
      "!doc": "<p>Gets the closest ancestor node of this node, specified by its name or using an evaluator function.</p>\n\n<pre><code>// Suppose we have the following HTML structure:\n// &lt;div id=\"outer\"&gt;&lt;div id=\"inner\"&gt;&lt;p&gt;&lt;b&gt;Some text&lt;/b&gt;&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;\n// If node == &lt;b&gt;\nascendant = node.getAscendant( 'div' );             // ascendant == &lt;div id=\"inner\"&gt;\nascendant = node.getAscendant( 'b' );               // ascendant == null\nascendant = node.getAscendant( 'b', true );         // ascendant == &lt;b&gt;\nascendant = node.getAscendant( { div:1, p:1 } );    // Searches for the first 'div' or 'p': ascendant == &lt;div id=\"inner\"&gt;\n\n// Using custom evaluator:\nascendant = node.getAscendant( function( el ) {\n    return el.getId() == 'inner';\n} );\n// ascendant == &lt;div id=\"inner\"&gt;\n</code></pre>\n"
     },
     "getCommonAncestor": {
      "!type": "fn(node: ?) -> !this",
      "!doc": "<p>@todo</p>\n"
     },
     "getDocument": {
      "!type": "fn() -> +CKEDITOR.dom.document",
      "!doc": "<p>Gets the document containing this element.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'example' );\nalert( element.getDocument().equals( <a href=\"#!/api/CKEDITOR-property-document\" rel=\"CKEDITOR-property-document\" class=\"docClass\">CKEDITOR.document</a> ) ); // true\n</code></pre>\n"
     },
     "getIndex": {
      "!type": "fn(normalized: bool) -> number",
      "!doc": "<p>Gets the index of a node in an array of its <code>parent.childNodes</code>.\nReturns <code>-1</code> if a node does not have a parent or when the <code>normalized</code> argument is set to <code>true</code>\nand the text node is empty and will be removed during the normalization.</p>\n\n<p>Let us assume having the following <code>childNodes</code> array:</p>\n\n<pre><code>[ emptyText, element1, text, text, element2, emptyText2 ]\n\nemptyText.getIndex()            // 0\nemptyText.getIndex( true )      // -1\nelement1.getIndex();            // 1\nelement1.getIndex( true );      // 0\nelement2.getIndex();            // 4\nelement2.getIndex( true );      // 2\nemptyText2.getIndex();          // 5\nemptyText2.getIndex( true );    // -1\n</code></pre>\n"
     },
     "getNext": {
      "!type": "fn(evaluator?: fn()) -> +CKEDITOR.dom.node",
      "!doc": "<p>Gets the node that follows this element in its parent's child list.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div&gt;&lt;b&gt;Example&lt;/b&gt;&lt;i&gt;next&lt;/i&gt;&lt;/div&gt;' );\nvar last = element.getFirst().getNext();\nalert( last.getName() ); // 'i'\n</code></pre>\n"
     },
     "getNextSourceNode": {
      "!type": "fn(startFromSibling: ?, nodeType: ?, guard: ?) -> !this",
      "!doc": "<p>@todo</p>\n"
     },
     "getParent": {
      "!type": "fn(allowFragmentParent?: bool) -> +CKEDITOR.dom.element",
      "!doc": "<p>Gets the parent element for this node.</p>\n\n<pre><code>var node = editor.document.getBody().getFirst();\nvar parent = node.getParent();\nalert( parent.getName() ); // 'body'\n</code></pre>\n"
     },
     "getParents": {
      "!type": "fn(closerFirst?: bool) -> [?]",
      "!doc": "<p>Returns an array containing node parents and the node itself. By default nodes are in <em>descending</em> order.</p>\n\n<pre><code>// Assuming that body has paragraph as the first child.\nvar node = editor.document.getBody().getFirst();\nvar parents = node.getParents();\nalert( parents[ 0 ].getName() + ',' + parents[ 2 ].getName() ); // 'html,p'\n</code></pre>\n"
     },
     "getPosition": {
      "!type": "fn(otherNode: ?) -> !this",
      "!doc": "<p>@todo</p>\n"
     },
     "getPrevious": {
      "!type": "fn(evaluator?: fn()) -> +CKEDITOR.dom.node",
      "!doc": "<p>Gets the node that preceeds this element in its parent's child list.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div&gt;&lt;i&gt;prev&lt;/i&gt;&lt;b&gt;Example&lt;/b&gt;&lt;/div&gt;' );\nvar first = element.getLast().getPrev();\nalert( first.getName() ); // 'i'\n</code></pre>\n"
     },
     "getPreviousSourceNode": {
      "!type": "fn(startFromSibling: ?, nodeType: ?, guard: ?) -> !this",
      "!doc": "<p>@todo</p>\n"
     },
     "hasAscendant": {
      "!type": "fn(name: ?, includeSelf: ?) -> !this",
      "!doc": "<p>@todo</p>\n"
     },
     "hasNext": {
      "!type": "fn() -> bool",
      "!doc": "<p>Checks if the node is succeeded by any sibling.</p>\n"
     },
     "hasPrevious": {
      "!type": "fn() -> bool",
      "!doc": "<p>Checks if the node is preceded by any sibling.</p>\n"
     },
     "insertAfter": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> +CKEDITOR.dom.node",
      "!doc": "<p>Inserts this element after a node.</p>\n\n<pre><code>var em = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'em' );\nvar strong = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'strong' );\nstrong.insertAfter( em );\n\n// Result: '&lt;em&gt;&lt;/em&gt;&lt;strong&gt;&lt;/strong&gt;'\n</code></pre>\n"
     },
     "insertBefore": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> +CKEDITOR.dom.node",
      "!doc": "<p>Inserts this element before a node.</p>\n\n<pre><code>var em = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'em' );\nvar strong = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'strong' );\nstrong.insertBefore( em );\n\n// result: '&lt;strong&gt;&lt;/strong&gt;&lt;em&gt;&lt;/em&gt;'\n</code></pre>\n"
     },
     "insertBeforeMe": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> +CKEDITOR.dom.node",
      "!doc": "<p>Inserts a node before this node.</p>\n\n<pre><code>var em = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'em' );\nvar strong = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'strong' );\nstrong.insertBeforeMe( em );\n\n// result: '&lt;em&gt;&lt;/em&gt;&lt;strong&gt;&lt;/strong&gt;'\n</code></pre>\n"
     },
     "isReadOnly": {
      "!type": "fn() -> bool",
      "!doc": "<p>Checks if this node is read-only (should not be changed).</p>\n\n<p><strong>Note:</strong> When <code>attributeCheck</code> is not used, this method only works for elements\nthat are already present in the document, otherwise the result\nis not guaranteed. It is mainly for performance consideration.</p>\n\n<pre><code>// For the following HTML:\n// &lt;div contenteditable=\"false\"&gt;Some &lt;b&gt;text&lt;/b&gt;&lt;/div&gt;\n\n// If \"ele\" is the above &lt;div&gt;\nelement.isReadOnly(); // true\n</code></pre>\n"
     },
     "ltrim": {
      "!type": "fn() -> !this",
      "!doc": "<p>@todo</p>\n"
     },
     "move": {
      "!type": "fn(target: ?, toStart: ?) -> !this",
      "!doc": "<p>@todo</p>\n"
     },
     "remove": {
      "!type": "fn(preserveChildren?: bool) -> +CKEDITOR.dom.node",
      "!doc": "<p>Removes this node from the document DOM.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'MyElement' );\nelement.remove();\n</code></pre>\n"
     },
     "replace": {
      "!type": "fn(nodeToReplace: ?) -> !this",
      "!doc": "<p>@todo</p>\n"
     },
     "rtrim": {
      "!type": "fn() -> !this",
      "!doc": "<p>@todo</p>\n"
     },
     "trim": {
      "!type": "fn() -> !this",
      "!doc": "<p>@todo</p>\n"
     }
    },
    "!doc": "<p>Base class for classes representing DOM nodes. This constructor may return\nan instance of a class that inherits from this class, like\n<a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a> or <a href=\"#!/api/CKEDITOR.dom.text\" rel=\"CKEDITOR.dom.text\" class=\"docClass\">CKEDITOR.dom.text</a>.</p>\n"
   },
   "document": {
    "!doc": "<p>Represents a DOM document.</p>\n\n<pre><code>var document = new <a href=\"#!/api/CKEDITOR.dom.document\" rel=\"CKEDITOR.dom.document\" class=\"docClass\">CKEDITOR.dom.document</a>( document );\n</code></pre>\n",
    "prototype": {
     "!type": "fn(domDocument: ?)",
     "type": {
      "!type": "number",
      "!doc": "<p>The node type. This is a constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_DOCUMENT\" rel=\"CKEDITOR-property-NODE_DOCUMENT\" class=\"docClass\">CKEDITOR.NODE_DOCUMENT</a>.</p>\n"
     },
     "_getHtml5ShivFrag": {
      "!type": "fn() -> ?",
      "!doc": "<p>Internet Explorer 8 only method. It returns a document fragment which has all HTML5 elements enabled.</p>\n"
     },
     "appendStyleSheet": {
      "!type": "fn(cssFileUrl: string) -> !this",
      "!doc": "<p>Appends a CSS file to the document.</p>\n\n<pre><code>CKEDITOR.document.appendStyleSheet( '/mystyles.css' );\n</code></pre>\n"
     },
     "appendStyleText": {
      "!type": "fn(cssStyleText: ?) -> ?",
      "!doc": "<p>Creates a CSS stylesheet and inserts it into the document.</p>\n"
     },
     "createElement": {
      "!type": "fn(name: string, attributesAndStyles?: ?) -> +CKEDITOR.dom.element",
      "!doc": "<p>Creates a <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a> instance in this document.</p>\n"
     },
     "createText": {
      "!type": "fn(text: string) -> +CKEDITOR.dom.element",
      "!doc": "<p>Creates a <a href=\"#!/api/CKEDITOR.dom.text\" rel=\"CKEDITOR.dom.text\" class=\"docClass\">CKEDITOR.dom.text</a> instance in this document.</p>\n"
     },
     "find": {
      "!type": "fn(selector: string) -> +CKEDITOR.dom.nodeList",
      "!doc": "<p>Wrapper for <code>querySelectorAll</code>. Returns a list of elements within this document that match\nthe specified <code>selector</code>.</p>\n\n<p><strong>Note:</strong> The returned list is not a live collection (like the result of native <code>querySelectorAll</code>).</p>\n"
     },
     "findOne": {
      "!type": "fn(selector: string) -> +CKEDITOR.dom.element",
      "!doc": "<p>Wrapper for <code>querySelector</code>. Returns the first element within this document that matches\nthe specified <code>selector</code>.</p>\n"
     },
     "focus": {
      "!type": "fn() -> !this",
      "!doc": "<p>Moves the selection focus to this document's window.</p>\n"
     },
     "getActive": {
      "!type": "fn() -> +CKEDITOR.dom.element",
      "!doc": "<p>Returns the element that is currently designated as the active element in the document.</p>\n\n<p><strong>Note:</strong> Only one element can be active at a time in a document.\nAn active element does not necessarily have focus,\nbut an element with focus is always the active element in a document.</p>\n"
     },
     "getBody": {
      "!type": "fn() -> +CKEDITOR.dom.element",
      "!doc": "<p>Gets the <code>&lt;body&gt;</code> element for this document.</p>\n\n<pre><code>var element = CKEDITOR.document.getBody();\nalert( element.getName() ); // 'body'\n</code></pre>\n"
     },
     "getByAddress": {
      "!type": "fn(address: [?], normalized?: bool) -> !this",
      "!doc": "<p>Gets a node based on its address. See <a href=\"#!/api/CKEDITOR.dom.node-method-getAddress\" rel=\"CKEDITOR.dom.node-method-getAddress\" class=\"docClass\">CKEDITOR.dom.node.getAddress</a>.</p>\n"
     },
     "getById": {
      "!type": "fn(elementId: string) -> +CKEDITOR.dom.element",
      "!doc": "<p>Gets an element based on its ID.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nalert( element.getId() ); // 'myElement'\n</code></pre>\n"
     },
     "getDocumentElement": {
      "!type": "fn() -> +CKEDITOR.dom.element",
      "!doc": "<p>Gets the DOM document element for this document.</p>\n"
     },
     "getElementsByTag": {
      "!type": "fn(tagName: string) -> +CKEDITOR.dom.nodeList",
      "!doc": "<p>Gets elements list based on a given tag name.</p>\n"
     },
     "getHead": {
      "!type": "fn() -> +CKEDITOR.dom.element",
      "!doc": "<p>Gets the <code>&lt;head&gt;</code> element for this document.</p>\n\n<pre><code>var element = CKEDITOR.document.getHead();\nalert( element.getName() ); // 'head'\n</code></pre>\n"
     },
     "getSelection": {
      "!type": "fn() -> +CKEDITOR.dom.selection",
      "!doc": "<p>Gets the current selection in context of the document's body element.</p>\n\n<pre><code>var selection = CKEDITOR.instances.editor1.document.getSelection();\nalert( selection.getType() );\n</code></pre>\n"
     },
     "getWindow": {
      "!type": "fn() -> +CKEDITOR.dom.window",
      "!doc": "<p>Gets the window object that stores this document.</p>\n"
     },
     "write": {
      "!type": "fn(html: string) -> !this",
      "!doc": "<p>Defines the document content through <code>document.write</code>. Note that the\nprevious document content will be lost (cleaned).</p>\n\n<pre><code>document.write(\n    '&lt;html&gt;' +\n        '&lt;head&gt;&lt;title&gt;Sample Document&lt;/title&gt;&lt;/head&gt;' +\n        '&lt;body&gt;Document content created by code.&lt;/body&gt;' +\n    '&lt;/html&gt;'\n);\n</code></pre>\n"
     }
    }
   },
   "documentFragment": {
    "!doc": "<p>DocumentFragment is a \"lightweight\" or \"minimal\" Document object. It is\ncommonly used to extract a portion of a document's tree or to create a new\nfragment of a document. Various operations may take DocumentFragment objects\nas arguments and results in all the child nodes of the DocumentFragment being\nmoved to the child list of this node.</p>\n",
    "prototype": {
     "!type": "fn(nodeOrDoc: ?)",
     "type": {
      "!type": "number",
      "!doc": "<p>The node type. This is a constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_DOCUMENT_FRAGMENT\" rel=\"CKEDITOR-property-NODE_DOCUMENT_FRAGMENT\" class=\"docClass\">CKEDITOR.NODE_DOCUMENT_FRAGMENT</a>.</p>\n"
     },
     "insertAfterNode": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> !this",
      "!doc": "<p>Inserts document fragment's contents after specified node.</p>\n"
     }
    }
   },
   "element": {
    "!doc": "<p>Represents a DOM element.</p>\n\n<pre><code>// Create a new &lt;span&gt; element.\nvar element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'span' );\n\n// Create an element based on a native DOM element.\nvar element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( document.getElementById( 'myId' ) );\n</code></pre>\n",
    "prototype": {
     "!type": "fn(element: ?|string, ownerDocument?: +CKEDITOR.dom.document)",
     "type": {
      "!type": "number",
      "!doc": "<p>The node type. This is a constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_ELEMENT\" rel=\"CKEDITOR-property-NODE_ELEMENT\" class=\"docClass\">CKEDITOR.NODE_ELEMENT</a>.</p>\n"
     },
     "addClass": {
      "!type": "fn(className: string) -> +CKEDITOR.dom.element",
      "!doc": "<p>Adds a CSS class to the element. It appends the class to the\nalready existing names.</p>\n\n<pre><code>var element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'div' );\nelement.addClass( 'classA' ); // &lt;div class=\"classA\"&gt;\nelement.addClass( 'classB' ); // &lt;div class=\"classA classB\"&gt;\nelement.addClass( 'classA' ); // &lt;div class=\"classA classB\"&gt;\n</code></pre>\n"
     },
     "append": {
      "!type": "fn(node: +CKEDITOR.dom.node|string, toStart?: bool) -> +CKEDITOR.dom.node",
      "!doc": "<p>Append a node as a child of this element.</p>\n\n<pre><code>var p = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'p' );\n\nvar strong = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'strong' );\np.append( strong );\n\nvar em = p.append( 'em' );\n\n// Result: '&lt;p&gt;&lt;strong&gt;&lt;/strong&gt;&lt;em&gt;&lt;/em&gt;&lt;/p&gt;'\n</code></pre>\n"
     },
     "appendBogus": {
      "!type": "fn(force?: bool) -> !this",
      "!doc": "<p>Appends a <code>&lt;br&gt;</code> filler element to this element if the filler is not present already.\nBy default filler is appended only if <a href=\"#!/api/CKEDITOR.env-property-needsBrFiller\" rel=\"CKEDITOR.env-property-needsBrFiller\" class=\"docClass\">CKEDITOR.env.needsBrFiller</a> is <code>true</code>,\nhowever when <code>force</code> is set to <code>true</code> filler will be appended regardless of the environment.</p>\n"
     },
     "appendHtml": {
      "!type": "fn(html: string) -> !this",
      "!doc": "<p>Append HTML as a child(ren) of this element.</p>\n"
     },
     "appendText": {
      "!type": "fn(text: string) -> +CKEDITOR.dom.node",
      "!doc": "<p>Append text to this element.</p>\n\n<pre><code>var p = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'p' );\np.appendText( 'This is' );\np.appendText( ' some text' );\n\n// Result: '&lt;p&gt;This is some text&lt;/p&gt;'\n</code></pre>\n"
     },
     "breakParent": {
      "!type": "fn(parent: +CKEDITOR.dom.element) -> !this",
      "!doc": "<p>Breaks one of the ancestor element in the element position, moving\nthis element between the broken parts.</p>\n\n<pre><code>// Before breaking:\n//      &lt;b&gt;This &lt;i&gt;is some&lt;span /&gt; sample&lt;/i&gt; test text&lt;/b&gt;\n// If \"element\" is &lt;span /&gt; and \"parent\" is &lt;i&gt;:\n//      &lt;b&gt;This &lt;i&gt;is some&lt;/i&gt;&lt;span /&gt;&lt;i&gt; sample&lt;/i&gt; test text&lt;/b&gt;\nelement.breakParent( parent );\n\n// Before breaking:\n//      &lt;b&gt;This &lt;i&gt;is some&lt;span /&gt; sample&lt;/i&gt; test text&lt;/b&gt;\n// If \"element\" is &lt;span /&gt; and \"parent\" is &lt;b&gt;:\n//      &lt;b&gt;This &lt;i&gt;is some&lt;/i&gt;&lt;/b&gt;&lt;span /&gt;&lt;b&gt;&lt;i&gt; sample&lt;/i&gt; test text&lt;/b&gt;\nelement.breakParent( parent );\n</code></pre>\n"
     },
     "contains": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> bool",
      "!doc": "<p>Checks if this element contains given node.</p>\n"
     },
     "copyAttributes": {
      "!type": "fn(dest: +CKEDITOR.dom.element, skipAttributes: ?) -> !this",
      "!doc": "<p>Copy all the attributes from one node to the other, kinda like a clone\nskipAttributes is an object with the attributes that must <strong>not</strong> be copied.</p>\n"
     },
     "data": {
      "!type": "fn(name: string, value?: string) -> !this",
      "!doc": "<p>Gets, sets and removes custom data to be stored as HTML5 data-* attributes.</p>\n\n<pre><code>element.data( 'extra-info', 'test' );   // Appended the attribute data-extra-info=\"test\" to the element.\nalert( element.data( 'extra-info' ) );  // 'test'\nelement.data( 'extra-info', false );    // Remove the data-extra-info attribute from the element.\n</code></pre>\n"
     },
     "disableContextMenu": {
      "!type": "fn() -> !this",
      "!doc": "<p>Disables browser's context menu in this element.</p>\n"
     },
     "find": {
      "!type": "fn(selector: string) -> +CKEDITOR.dom.nodeList",
      "!doc": "<p>Returns list of elements within this element that match specified <code>selector</code>.</p>\n\n<p><strong>Notes:</strong></p>\n\n<ul>\n<li>Not available in IE7.</li>\n<li>Returned list is not a live collection (like a result of native <code>querySelectorAll</code>).</li>\n<li><p>Unlike native <code>querySelectorAll</code> this method ensures selector contextualization. This is:</p>\n\n<pre><code>  HTML:       '&lt;body&gt;&lt;div&gt;&lt;i&gt;foo&lt;/i&gt;&lt;/div&gt;&lt;/body&gt;'\n  Native:     div.querySelectorAll( 'body i' ) // -&gt;      [ &lt;i&gt;foo&lt;/i&gt; ]\n  Method:     div.find( 'body i' ) // -&gt;                  []\n              div.find( 'i' ) // -&gt;                       [ &lt;i&gt;foo&lt;/i&gt; ]\n</code></pre></li>\n</ul>\n\n"
     },
     "findOne": {
      "!type": "fn(selector: string) -> +CKEDITOR.dom.element",
      "!doc": "<p>Returns first element within this element that matches specified <code>selector</code>.</p>\n\n<p><strong>Notes:</strong></p>\n\n<ul>\n<li>Not available in IE7.</li>\n<li><p>Unlike native <code>querySelectorAll</code> this method ensures selector contextualization. This is:</p>\n\n<pre><code>  HTML:       '&lt;body&gt;&lt;div&gt;&lt;i&gt;foo&lt;/i&gt;&lt;/div&gt;&lt;/body&gt;'\n  Native:     div.querySelector( 'body i' ) // -&gt;         &lt;i&gt;foo&lt;/i&gt;\n  Method:     div.findOne( 'body i' ) // -&gt;               null\n              div.findOne( 'i' ) // -&gt;                    &lt;i&gt;foo&lt;/i&gt;\n</code></pre></li>\n</ul>\n\n"
     },
     "focus": {
      "!type": "fn(defer: bool) -> !this",
      "!doc": "<p>Moves the selection focus to this element.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myTextarea' );\nelement.focus();\n</code></pre>\n"
     },
     "forEach": {
      "!type": "fn(callback: fn(), type?: number, skipRoot?: bool) -> !this",
      "!doc": "<p>Traverse the DOM of this element (inclusive), executing a callback for\neach node.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div&gt;&lt;p&gt;foo&lt;b&gt;bar&lt;/b&gt;bom&lt;/p&gt;&lt;/div&gt;' );\nelement.forEach( function( node ) {\n    console.log( node );\n} );\n// Will log:\n// 1. &lt;div&gt; element,\n// 2. &lt;p&gt; element,\n// 3. \"foo\" text node,\n// 4. &lt;b&gt; element,\n// 5. \"bar\" text node,\n// 6. \"bom\" text node.\n</code></pre>\n"
     },
     "getAttribute": {
      "!type": "fn(name: string) -> string",
      "!doc": "<p>Gets the value of an element attribute.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;input type=\"text\" /&gt;' );\nalert( element.getAttribute( 'type' ) ); // 'text'\n</code></pre>\n"
     },
     "getBogus": {
      "!type": "fn() -> +CKEDITOR.dom.node|bool",
      "!doc": "<p>Checks if there's a filler node at the end of an element, and returns it.</p>\n"
     },
     "getChild": {
      "!type": "fn(indices: [?]|number) -> +CKEDITOR.dom.node",
      "!doc": "<p>Gets a DOM tree descendant under the current node.</p>\n\n<pre><code>var strong = p.getChild( 0 );\n</code></pre>\n"
     },
     "getChildCount": {
      "!type": "fn() -> number",
      "!doc": "<p>Gets number of element's children.</p>\n"
     },
     "getChildren": {
      "!type": "fn() -> +CKEDITOR.dom.nodeList",
      "!doc": "<p>Gets the nodes list containing all children of this element.</p>\n"
     },
     "getClientRect": {
      "!type": "fn() -> ?",
      "!doc": "<p>Retrieve the bounding rectangle of the current element, in pixels,\nrelative to the upper-left corner of the browser's client area.</p>\n"
     },
     "getComputedStyle": {
      "!type": "fn(propertyName: string) -> string",
      "!doc": "<p>Gets the current computed value of one of the element CSS style\nproperties.</p>\n\n<pre><code>var element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'span' );\nalert( element.getComputedStyle( 'display' ) ); // 'inline'\n</code></pre>\n"
     },
     "getDirection": {
      "!type": "fn(useComputed: ?) -> !this",
      "!doc": "<p>Gets element's direction. Supports both CSS <code>direction</code> prop and <code>dir</code> attr.</p>\n"
     },
     "getDocumentPosition": {
      "!type": "fn(refDocument?: +CKEDITOR.dom.document) -> ?",
      "!doc": "<p>Gets this element's position in document.</p>\n"
     },
     "getDtd": {
      "!type": "fn() -> ?",
      "!doc": "<p>Gets the DTD entries for this element.</p>\n"
     },
     "getEditor": {
      "!type": "fn() -> +CKEDITOR.editor",
      "!doc": "<p>Retrieves an editor instance which is based on this element (if any).\nIt basically loops over <a href=\"#!/api/CKEDITOR-property-instances\" rel=\"CKEDITOR-property-instances\" class=\"docClass\">CKEDITOR.instances</a> in search for an instance\nthat uses the element.</p>\n\n<pre><code>var element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'div' );\nelement.appendTo( CKEDITOR.document.getBody() );\n<a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( element );\nalert( element.getEditor().name ); // 'editor1'\n</code></pre>\n"
     },
     "getElementsByTag": {
      "!type": "fn(tagName: string) -> !this",
      "!doc": "<p>Gets all this element's descendants having given tag name.</p>\n"
     },
     "getFirst": {
      "!type": "fn(evaluator: fn()) -> +CKEDITOR.dom.node",
      "!doc": "<p>Gets the first child node of this element.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div&gt;&lt;b&gt;Example&lt;/b&gt;&lt;/div&gt;' );\nvar first = element.getFirst();\nalert( first.getName() ); // 'b'\n</code></pre>\n"
     },
     "getFrameDocument": {
      "!type": "fn() -> +CKEDITOR.dom.document",
      "!doc": "<p>Returns the inner document of this <code>&lt;iframe&gt;</code> element.</p>\n"
     },
     "getHtml": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets the inner HTML of this element.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div&gt;&lt;b&gt;Example&lt;/b&gt;&lt;/div&gt;' );\nalert( element.getHtml() ); // '&lt;b&gt;Example&lt;/b&gt;'\n</code></pre>\n"
     },
     "getId": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets the value of the <code>id</code> attribute of this element.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;p id=\"myId\"&gt;&lt;/p&gt;' );\nalert( element.getId() ); // 'myId'\n</code></pre>\n"
     },
     "getLast": {
      "!type": "fn(evaluator: fn()) -> +CKEDITOR.dom.node",
      "!doc": "<p>See <a href=\"#!/api/CKEDITOR.dom.element-method-getFirst\" rel=\"CKEDITOR.dom.element-method-getFirst\" class=\"docClass\">getFirst</a>.</p>\n"
     },
     "getName": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets the element name (tag name). The returned name is guaranteed to\nbe always full lowercased.</p>\n\n<pre><code>var element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'span' );\nalert( element.getName() ); // 'span'\n</code></pre>\n"
     },
     "getNameAtt": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets the value of the <code>name</code> attribute of this element.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;input name=\"myName\"&gt;&lt;/input&gt;' );\nalert( &lt;b&gt;element.getNameAtt()&lt;/b&gt; ); // 'myName'\n</code></pre>\n"
     },
     "getOuterHtml": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets the outer (inner plus tags) HTML of this element.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div class=\"bold\"&gt;&lt;b&gt;Example&lt;/b&gt;&lt;/div&gt;' );\nalert( element.getOuterHtml() ); // '&lt;div class=\"bold\"&gt;&lt;b&gt;Example&lt;/b&gt;&lt;/div&gt;'\n</code></pre>\n"
     },
     "getPositionedAncestor": {
      "!type": "fn() -> +CKEDITOR.dom.element",
      "!doc": "<p>Gets closest positioned (<code>position != static</code>) ancestor.</p>\n"
     },
     "getSize": {
      "!type": "fn(type: string|string, isBorderBox: bool) -> !this",
      "!doc": "<p>Gets the element size, possibly considering the box model.</p>\n"
     },
     "getStyle": {
      "!type": "fn(name: string) -> string",
      "!doc": "<p>Gets CSS style value.</p>\n"
     },
     "getTabIndex": {
      "!type": "fn() -> number",
      "!doc": "<p>Gets the computed tabindex for this element.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myDiv' );\nalert( element.getTabIndex() ); // (e.g.) '-1'\n</code></pre>\n"
     },
     "getText": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets the text value of this element.</p>\n\n<p>Only in IE (which uses innerText), <code>&lt;br&gt;</code> will cause linebreaks,\nand sucessive whitespaces (including line breaks) will be reduced to\na single space. This behavior is ok for us, for now. It may change\nin the future.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div&gt;Sample &lt;i&gt;text&lt;/i&gt;.&lt;/div&gt;' );\nalert( &lt;b&gt;element.getText()&lt;/b&gt; ); // 'Sample text.'\n</code></pre>\n"
     },
     "getValue": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets the value set to this element. This value is usually available\nfor form field elements.</p>\n"
     },
     "getWindow": {
      "!type": "fn() -> +CKEDITOR.dom.window",
      "!doc": "<p>Gets the window object that contains this element.</p>\n"
     },
     "hasAttribute": {
      "!type": "fn(name: string) -> bool",
      "!doc": "<p>Checks if the specified attribute is defined for this element.</p>\n"
     },
     "hasAttributes": {
      "!type": "fn() -> bool",
      "!doc": "<p>Checks if the element has any defined attributes.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div title=\"Test\"&gt;Example&lt;/div&gt;' );\nalert( element.hasAttributes() ); // true\n\nvar element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div&gt;Example&lt;/div&gt;' );\nalert( element.hasAttributes() ); // false\n</code></pre>\n"
     },
     "hasClass": {
      "!type": "fn(className: string) -> bool",
      "!doc": "<p>Checks if element has class name.</p>\n"
     },
     "hide": {
      "!type": "fn() -> !this",
      "!doc": "<p>Hides this element (sets <code>display: none</code>).</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nelement.hide();\n</code></pre>\n"
     },
     "is": {
      "!type": "fn(name: +String...|?) -> bool",
      "!doc": "<p>Checks if the element name matches the specified criteria.</p>\n\n<pre><code>var element = new CKEDITOR.element( 'span' );\nalert( element.is( 'span' ) );          // true\nalert( element.is( 'p', 'span' ) );     // true\nalert( element.is( 'p' ) );             // false\nalert( element.is( 'p', 'div' ) );      // false\nalert( element.is( { p:1,span:1 } ) );  // true\n</code></pre>\n"
     },
     "isBlockBoundary": {
      "!type": "fn(customNodeNames?: ?) -> bool",
      "!doc": "<p>Checks whether element is displayed as a block.</p>\n"
     },
     "isEditable": {
      "!type": "fn(textCursor?: bool) -> !this",
      "!doc": "<p>Decide whether one element is able to receive cursor.</p>\n"
     },
     "isEmptyInlineRemoveable": {
      "!type": "fn() -> bool",
      "!doc": "<p>Whether it's an empty inline elements which has no visual impact when removed.</p>\n"
     },
     "isIdentical": {
      "!type": "fn(otherElement: +CKEDITOR.dom.element) -> bool",
      "!doc": "<p>Compare this element's inner html, tag name, attributes, etc. with other one.</p>\n\n<p>See <a href=\"http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isEqualNode\">W3C's DOM Level 3 spec - node#isEqualNode</a>\nfor more details.</p>\n"
     },
     "isVisible": {
      "!type": "fn() -> bool",
      "!doc": "<p>Checks if this element is visible. May not work if the element is\nchild of an element with visibility set to <code>hidden</code>, but works well\non the great majority of cases.</p>\n"
     },
     "mergeSiblings": {
      "!type": "fn(inlineOnly?: bool) -> !this",
      "!doc": "<p>Merges sibling elements that are identical to this one.</p>\n\n<p>Identical child elements are also merged. For example:</p>\n\n<pre><code>&lt;b&gt;&lt;i&gt;&lt;/i&gt;&lt;/b&gt;&lt;b&gt;&lt;i&gt;&lt;/i&gt;&lt;/b&gt; =&gt; &lt;b&gt;&lt;i&gt;&lt;/i&gt;&lt;/b&gt;\n</code></pre>\n"
     },
     "moveChildren": {
      "!type": "fn(target: +CKEDITOR.dom.element, toStart?: bool) -> !this",
      "!doc": "<p>Moves this element's children to the target element.</p>\n"
     },
     "removeAttribute": {
      "!type": "fn(name: string) -> !this",
      "!doc": "<p>Removes an attribute from the element.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div class=\"classA\"&gt;&lt;/div&gt;' );\nelement.removeAttribute( 'class' );\n</code></pre>\n"
     },
     "removeAttributes": {
      "!type": "fn(attributes?: [?]) -> !this",
      "!doc": "<p>Removes all element's attributes or just given ones.</p>\n"
     },
     "removeClass": {
      "!type": "fn(className: string) -> +CKEDITOR.dom.element",
      "!doc": "<p>Removes a CSS class name from the elements classes. Other classes\nremain untouched.</p>\n\n<pre><code>var element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'div' );\nelement.addClass( 'classA' );       // &lt;div class=\"classA\"&gt;\nelement.addClass( 'classB' );       // &lt;div class=\"classA classB\"&gt;\nelement.removeClass( 'classA' );    // &lt;div class=\"classB\"&gt;\nelement.removeClass( 'classB' );    // &lt;div&gt;\n</code></pre>\n"
     },
     "removeStyle": {
      "!type": "fn(name: string) -> !this",
      "!doc": "<p>Removes a style from the element.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;div style=\"display:none\"&gt;&lt;/div&gt;' );\nelement.removeStyle( 'display' );\n</code></pre>\n"
     },
     "renameNode": {
      "!type": "fn(newTag: string) -> !this",
      "!doc": "<p>Changes the tag name of the current element.</p>\n"
     },
     "scrollIntoParent": {
      "!type": "fn(parent: +CKEDITOR.dom.element|+CKEDITOR.dom.window, alignToTop?: bool, hscroll?: bool) -> !this",
      "!doc": "<p>Make any page element visible inside one of the ancestors by scrolling the parent.</p>\n"
     },
     "scrollIntoView": {
      "!type": "fn(alignToTop?: bool) -> !this",
      "!doc": "<p>Make any page element visible inside the browser viewport.</p>\n"
     },
     "setAttribute": {
      "!type": "fn(name: string, value: string) -> +CKEDITOR.dom.element",
      "!doc": "<p>Sets the value of an element attribute.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nelement.setAttribute( 'class', 'myClass' );\nelement.setAttribute( 'title', 'This is an example' );\n</code></pre>\n"
     },
     "setAttributes": {
      "!type": "fn(attributesPairs: ?) -> +CKEDITOR.dom.element",
      "!doc": "<p>Sets the value of several element attributes.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nelement.setAttributes( {\n    'class':    'myClass',\n    title:      'This is an example'\n} );\n</code></pre>\n"
     },
     "setHtml": {
      "!type": "fn(html: string) -> string",
      "!doc": "<p>Sets the inner HTML of this element.</p>\n\n<pre><code>var p = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'p' );\np.setHtml( '&lt;b&gt;Inner&lt;/b&gt; HTML' );\n\n// Result: '&lt;p&gt;&lt;b&gt;Inner&lt;/b&gt; HTML&lt;/p&gt;'\n</code></pre>\n"
     },
     "setOpacity": {
      "!type": "fn(opacity: number) -> !this",
      "!doc": "<p>Sets the opacity of an element.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nelement.setOpacity( 0.75 );\n</code></pre>\n"
     },
     "setSize": {
      "!type": "fn(type: string|string, size: number, isBorderBox: bool) -> !this",
      "!doc": "<p>Sets the element size considering the box model.</p>\n"
     },
     "setState": {
      "!type": "fn(state: number, base?: ?, useAria?: ?) -> !this",
      "!doc": "<p>Switch the <code>class</code> attribute to reflect one of the triple states of an\nelement in one of <a href=\"#!/api/CKEDITOR-property-TRISTATE_ON\" rel=\"CKEDITOR-property-TRISTATE_ON\" class=\"docClass\">CKEDITOR.TRISTATE_ON</a>, <a href=\"#!/api/CKEDITOR-property-TRISTATE_OFF\" rel=\"CKEDITOR-property-TRISTATE_OFF\" class=\"docClass\">CKEDITOR.TRISTATE_OFF</a>\nor <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a>.</p>\n\n<pre><code>link.setState( <a href=\"#!/api/CKEDITOR-property-TRISTATE_ON\" rel=\"CKEDITOR-property-TRISTATE_ON\" class=\"docClass\">CKEDITOR.TRISTATE_ON</a> );\n// &lt;a class=\"cke_on\" aria-pressed=\"true\"&gt;...&lt;/a&gt;\nlink.setState( <a href=\"#!/api/CKEDITOR-property-TRISTATE_OFF\" rel=\"CKEDITOR-property-TRISTATE_OFF\" class=\"docClass\">CKEDITOR.TRISTATE_OFF</a> );\n// &lt;a class=\"cke_off\"&gt;...&lt;/a&gt;\nlink.setState( <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a> );\n// &lt;a class=\"cke_disabled\" aria-disabled=\"true\"&gt;...&lt;/a&gt;\n\nspan.setState( <a href=\"#!/api/CKEDITOR-property-TRISTATE_ON\" rel=\"CKEDITOR-property-TRISTATE_ON\" class=\"docClass\">CKEDITOR.TRISTATE_ON</a>, 'cke_button' );\n// &lt;span class=\"cke_button_on\"&gt;...&lt;/span&gt;\n</code></pre>\n"
     },
     "setStyle": {
      "!type": "fn(name: string, value: string) -> +CKEDITOR.dom.element",
      "!doc": "<p>Sets the value of an element style.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nelement.setStyle( 'background-color', '#ff0000' );\nelement.setStyle( 'margin-top', '10px' );\nelement.setStyle( 'float', 'right' );\n</code></pre>\n"
     },
     "setStyles": {
      "!type": "fn(stylesPairs: ?) -> +CKEDITOR.dom.element",
      "!doc": "<p>Sets the value of several element styles.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nelement.setStyles( {\n    position:   'absolute',\n    float:      'right'\n} );\n</code></pre>\n"
     },
     "setText": {
      "!type": "fn(text: string) -> string",
      "!doc": "<p>Sets the element contents as plain text.</p>\n\n<pre><code>var element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'div' );\nelement.setText( 'A &gt; B &amp; C &lt; D' );\nalert( element.innerHTML ); // 'A &amp;gt; B &amp;amp; C &amp;lt; D'\n</code></pre>\n"
     },
     "setValue": {
      "!type": "fn(value: string) -> +CKEDITOR.dom.element",
      "!doc": "<p>Sets the element value. This function is usually used with form\nfield element.</p>\n"
     },
     "show": {
      "!type": "fn() -> !this",
      "!doc": "<p>Shows this element (displays it).</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nelement.show();\n</code></pre>\n"
     },
     "unselectable": {
      "!type": "fn() -> !this",
      "!doc": "<p>Makes the element and its children unselectable.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nelement.unselectable();\n</code></pre>\n"
     }
    },
    "clearAllMarkers": {
     "!type": "fn(database: ?) -> !this",
     "!doc": "<p>@todo</p>\n"
    },
    "clearMarkers": {
     "!type": "fn(database: ?, element: ?, removeFromDatabase: ?) -> !this",
     "!doc": "<p>@todo</p>\n"
    },
    "createFromHtml": {
     "!type": "fn(html: string) -> +CKEDITOR.dom.element",
     "!doc": "<p>Creates an instance of the <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a> class based on the\nHTML representation of an element.</p>\n\n<pre><code>var element = <a href=\"#!/api/CKEDITOR.dom.element-static-method-createFromHtml\" rel=\"CKEDITOR.dom.element-static-method-createFromHtml\" class=\"docClass\">CKEDITOR.dom.element.createFromHtml</a>( '&lt;strong class=\"anyclass\"&gt;My element&lt;/strong&gt;' );\nalert( element.getName() ); // 'strong'\n</code></pre>\n"
    },
    "get": {
     "!type": "fn(element: string|?) -> +CKEDITOR.dom.element",
     "!doc": "<p>The the <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a> representing and element. If the\nelement is a native DOM element, it will be transformed into a valid\n<a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a> object.</p>\n\n<pre><code>var element = new <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a>( 'span' );\nalert( element == <a href=\"#!/api/CKEDITOR.dom.element-static-method-get\" rel=\"CKEDITOR.dom.element-static-method-get\" class=\"docClass\">CKEDITOR.dom.element.get</a>( element ) ); // true\n\nvar element = document.getElementById( 'myElement' );\nalert( <a href=\"#!/api/CKEDITOR.dom.element-static-method-get\" rel=\"CKEDITOR.dom.element-static-method-get\" class=\"docClass\">CKEDITOR.dom.element.get</a>( element ).getName() ); // (e.g.) 'p'\n</code></pre>\n"
    },
    "setMarker": {
     "!type": "fn(database: ?, element: ?, name: ?, value: ?) -> !this",
     "!doc": "<p>@todo</p>\n"
    }
   },
   "elementPath": {
    "!doc": "<p>Retrieve the list of nodes walked from the start node up to the editable element of the editor.</p>\n",
    "prototype": {
     "!type": "fn(startNode: +CKEDITOR.dom.element, root: +CKEDITOR.dom.element)",
     "block": {
      "!type": "+CKEDITOR.dom.element",
      "!doc": "<p>First non-empty block element which:</p>\n\n<ul>\n<li>is not a <a href=\"#!/api/CKEDITOR.dtd-property-S-blockLimit\" rel=\"CKEDITOR.dtd-property-S-blockLimit\" class=\"docClass\">CKEDITOR.dtd.$blockLimit</a>,</li>\n<li>or is a <code>div</code> which does not contain block elements and is not a <code>root</code>.</li>\n</ul>\n\n\n<p>This means a first, splittable block in elements path.</p>\n"
     },
     "blockLimit": {
      "!type": "+CKEDITOR.dom.element",
      "!doc": "<p>See the <a href=\"#!/api/CKEDITOR.dtd-property-S-blockLimit\" rel=\"CKEDITOR.dtd-property-S-blockLimit\" class=\"docClass\">CKEDITOR.dtd.$blockLimit</a> description.</p>\n"
     },
     "elements": {
      "!type": "[+CKEDITOR.dom.element]",
      "!doc": "<p>An array of elements (from <code>startNode</code> to <code>root</code>) in the path.</p>\n"
     },
     "lastElement": {
      "!type": "+CKEDITOR.dom.element",
      "!doc": "<p>The last element of the elements path - <code>startNode</code> or its parent.</p>\n"
     },
     "root": {
      "!type": "+CKEDITOR.dom.element",
      "!doc": "<p>The root of the elements path - <code>root</code> argument passed to class constructor or a <code>body</code> element.</p>\n"
     },
     "compare": {
      "!type": "fn(otherPath: +CKEDITOR.dom.elementPath) -> bool",
      "!doc": "<p>Compares this element path with another one.</p>\n"
     },
     "contains": {
      "!type": "fn(query: string|[?]|fn()|?|+CKEDITOR.dom.element, excludeRoot?: bool, fromTop?: bool) -> +CKEDITOR.dom.element",
      "!doc": "<p>Search the path elements that meets the specified criteria.</p>\n"
     },
     "direction": {
      "!type": "fn() -> string|string",
      "!doc": "<p>Retrieve the text direction for this elements path.</p>\n"
     },
     "isContextFor": {
      "!type": "fn(tag: string) -> bool",
      "!doc": "<p>Check whether the elements path is the proper context for the specified\ntag name in the DTD.</p>\n"
     }
    }
   },
   "event": {
    "!doc": "<p>Represents a native DOM event object.</p>\n",
    "prototype": {
     "!type": "fn(domEvent: ?)",
     "$": {
      "!type": "?",
      "!doc": "<p>The native DOM event object represented by this class instance.</p>\n"
     },
     "getKey": {
      "!type": "fn() -> number",
      "!doc": "<p>Gets the key code associated to the event.</p>\n\n<pre><code>alert( event.getKey() ); // '65' is 'a' has been pressed\n</code></pre>\n"
     },
     "getKeystroke": {
      "!type": "fn() -> number",
      "!doc": "<p>Gets a number represeting the combination of the keys pressed during the\nevent. It is the sum with the current key code and the <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a>,\n<a href=\"#!/api/CKEDITOR-property-SHIFT\" rel=\"CKEDITOR-property-SHIFT\" class=\"docClass\">CKEDITOR.SHIFT</a> and <a href=\"#!/api/CKEDITOR-property-ALT\" rel=\"CKEDITOR-property-ALT\" class=\"docClass\">CKEDITOR.ALT</a> constants.</p>\n\n<pre><code>alert( event.getKeystroke() == 65 );                                    // 'a' key\nalert( event.getKeystroke() == <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + 65 );                    // CTRL + 'a' key\nalert( event.getKeystroke() == <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + <a href=\"#!/api/CKEDITOR-property-SHIFT\" rel=\"CKEDITOR-property-SHIFT\" class=\"docClass\">CKEDITOR.SHIFT</a> + 65 );   // CTRL + SHIFT + 'a' key\n</code></pre>\n"
     },
     "getPageOffset": {
      "!type": "fn() -> ?",
      "!doc": "<p>Retrieves the coordinates of the mouse pointer relative to the top-left\ncorner of the document, in mouse related event.</p>\n\n<pre><code>element.on( 'mousemouse', function( ev ) {\n    var pageOffset = ev.data.getPageOffset();\n    alert( pageOffset.x );          // page offset X\n    alert( pageOffset.y );          // page offset Y\n} );\n</code></pre>\n"
     },
     "getPhase": {
      "!type": "fn() -> number",
      "!doc": "<p>Returns an integer value that indicates the current processing phase of an event.\nFor browsers that doesn't support event phase, <a href=\"#!/api/CKEDITOR-property-EVENT_PHASE_AT_TARGET\" rel=\"CKEDITOR-property-EVENT_PHASE_AT_TARGET\" class=\"docClass\">CKEDITOR.EVENT_PHASE_AT_TARGET</a> is always returned.</p>\n"
     },
     "getTarget": {
      "!type": "fn() -> +CKEDITOR.dom.node",
      "!doc": "<p>Returns the DOM node where the event was targeted to.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nelement.on( 'click', function( ev ) {\n    // The DOM event object is passed by the 'data' property.\n    var domEvent = ev.data;\n    // Add a CSS class to the event target.\n    domEvent.getTarget().addClass( 'clicked' );\n} );\n</code></pre>\n"
     },
     "preventDefault": {
      "!type": "fn(stopPropagation?: bool) -> !this",
      "!doc": "<p>Prevents the original behavior of the event to happen. It can optionally\nstop propagating the event in the event chain.</p>\n\n<pre><code>var element = CKEDITOR.document.getById( 'myElement' );\nelement.on( 'click', function( ev ) {\n    // The DOM event object is passed by the 'data' property.\n    var domEvent = ev.data;\n    // Prevent the click to chave any effect in the element.\n    domEvent.preventDefault();\n} );\n</code></pre>\n"
     },
     "stopPropagation": {
      "!type": "fn() -> !this",
      "!doc": "<p>Stops this event propagation in the event chain.</p>\n"
     }
    }
   },
   "iterator": {
    "!doc": "<p>Represents the iterator class. It can be used to iterate\nover all elements (or even text nodes in case of <a href=\"#!/api/CKEDITOR.dom.iterator-property-enlargeBr\" rel=\"CKEDITOR.dom.iterator-property-enlargeBr\" class=\"docClass\">enlargeBr</a> set to <code>false</code>)\nwhich establish \"paragraph-like\" spaces within the passed range.</p>\n\n<pre><code>// &lt;h1&gt;[foo&lt;/h1&gt;&lt;p&gt;bar]&lt;/p&gt;\nvar iterator = range.createIterator();\niterator.getNextParagraph(); // h1 element\niterator.getNextParagraph(); // p element\n\n// &lt;ul&gt;&lt;li&gt;[foo&lt;/li&gt;&lt;li&gt;bar]&lt;/li&gt;\n// With enforceRealBlocks set to false the iterator will return two list item elements.\n// With enforceRealBlocks set to true the iterator will return two paragraphs and the DOM will be changed to:\n// &lt;ul&gt;&lt;li&gt;&lt;p&gt;foo&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;bar&lt;/p&gt;&lt;/li&gt;\n</code></pre>\n",
    "prototype": {
     "!type": "fn(range: +CKEDITOR.dom.range)",
     "activeFilter": {
      "!type": "+CKEDITOR.filter",
      "!doc": "<p>Iterator's active filter. It is set by the <a href=\"#!/api/CKEDITOR.dom.iterator-method-getNextParagraph\" rel=\"CKEDITOR.dom.iterator-method-getNextParagraph\" class=\"docClass\">getNextParagraph</a> method\nwhen it enters a nested editable.</p>\n"
     },
     "enforceRealBlocks": {
      "!type": "bool",
      "!doc": "<p>Whether the iterator should create a transformable block\nif the current one contains text and cannot be transformed.\nFor example new blocks will be established in elements like\n<code>&lt;li&gt;</code> or <code>&lt;td&gt;</code>.</p>\n"
     },
     "enlargeBr": {
      "!type": "bool",
      "!doc": "<p>Whether to include <code>&lt;br&gt;</code> elements in the enlarged range. Should be\nset to <code>false</code> when using the iterator in the <a href=\"#!/api/CKEDITOR-property-ENTER_BR\" rel=\"CKEDITOR-property-ENTER_BR\" class=\"docClass\">CKEDITOR.ENTER_BR</a> mode.</p>\n"
     },
     "filter": {
      "!type": "+CKEDITOR.filter",
      "!doc": "<p>Default iterator's filter. It is set only for nested iterators.</p>\n"
     },
     "forceBrBreak": {
      "!type": "bool"
     },
     "range": {
      "!type": "+CKEDITOR.dom.range"
     },
     "_getNextSourceNode": {
      "!type": "fn(node: +CKEDITOR.dom.node, startFromSibling: bool, lastNode: +CKEDITOR.dom.node) -> +CKEDITOR.dom.node",
      "!doc": "<p>Gets the next element to check or <code>null</code> when the <code>lastNode</code> or the\n<a href=\"#!/api/CKEDITOR.dom.iterator-property-range\" rel=\"CKEDITOR.dom.iterator-property-range\" class=\"docClass\">range</a>'s <a href=\"#!/api/CKEDITOR.dom.range-property-root\" rel=\"CKEDITOR.dom.range-property-root\" class=\"docClass\">root</a> is reached. Bookmarks are skipped.</p>\n"
     },
     "getNextParagraph": {
      "!type": "fn(blockTag?: string) -> !this",
      "!doc": "<p>Returns the next paragraph-like element or <code>null</code> if the end of a range is reached.</p>\n"
     }
    }
   },
   "nodeList": {
    "!doc": "<p>Represents a list of <a href=\"#!/api/CKEDITOR.dom.node\" rel=\"CKEDITOR.dom.node\" class=\"docClass\">CKEDITOR.dom.node</a> objects.\nIt's a wrapper for native nodes list.</p>\n\n<pre><code>var nodeList = CKEDITOR.document.getBody().getChildren();\nalert( nodeList.count() ); // number [0;N]\n</code></pre>\n",
    "prototype": {
     "!type": "fn(nativeList: ?)",
     "count": {
      "!type": "fn() -> number",
      "!doc": "<p>Get count of nodes in this list.</p>\n"
     },
     "getItem": {
      "!type": "fn(index: ?) -> +CKEDITOR.dom.node",
      "!doc": "<p>Get node from the list.</p>\n"
     }
    }
   },
   "range": {
    "!doc": "<p>Represents a delimited piece of content in a DOM Document.\nIt is contiguous in the sense that it can be characterized as selecting all\nof the content between a pair of boundary-points.</p>\n\n<p>This class shares much of the W3C\n<a href=\"http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html\">Document Object Model Range</a>\nideas and features, adding several range manipulation tools to it, but it's\nnot intended to be compatible with it.</p>\n\n<pre><code>// Create a range for the entire contents of the editor document body.\nvar range = new <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a>( editor.document );\nrange.selectNodeContents( editor.document.getBody() );\n// Delete the contents.\nrange.deleteContents();\n</code></pre>\n\n<p>Usually you will want to work on a ranges rooted in the editor's <a href=\"#!/api/CKEDITOR.editable\" rel=\"CKEDITOR.editable\" class=\"docClass\">editable</a>\nelement. Such ranges can be created with a shorthand method &ndash; <a href=\"#!/api/CKEDITOR.editor-method-createRange\" rel=\"CKEDITOR.editor-method-createRange\" class=\"docClass\">editor.createRange</a>.</p>\n\n<pre><code>var range = editor.createRange();\nrange.root.equals( editor.editable() ); // -&gt; true\n</code></pre>\n\n<p>Note that the <a href=\"#!/api/CKEDITOR.dom.range-property-root\" rel=\"CKEDITOR.dom.range-property-root\" class=\"docClass\">root</a> of a range is an important property, which limits many\nalgorithms implemented in range's methods. Therefore it is crucial, especially\nwhen using ranges inside inline editors, to specify correct root, so using\nthe <a href=\"#!/api/CKEDITOR.editor-method-createRange\" rel=\"CKEDITOR.editor-method-createRange\" class=\"docClass\">CKEDITOR.editor.createRange</a> method is highly recommended.</p>\n\n<h3>Selection</h3>\n\n<p>Range is only a logical representation of a piece of content in a DOM. It should not\nbe confused with a <a href=\"#!/api/CKEDITOR.dom.selection\" rel=\"CKEDITOR.dom.selection\" class=\"docClass\">selection</a> which represents \"physically\nmarked\" content. It is possible to create unlimited number of various ranges, when\nonly one real selection may exist at a time in a document. Ranges are used to read position\nof selection in the DOM and to move selection to new positions.</p>\n\n<p>The editor selection may be retrieved using the <a href=\"#!/api/CKEDITOR.editor-method-getSelection\" rel=\"CKEDITOR.editor-method-getSelection\" class=\"docClass\">CKEDITOR.editor.getSelection</a> method:</p>\n\n<pre><code>var sel = editor.getSelection(),\n    ranges = sel.getRange(); // <a href=\"#!/api/CKEDITOR.dom.rangeList\" rel=\"CKEDITOR.dom.rangeList\" class=\"docClass\">CKEDITOR.dom.rangeList</a> instance.\n\nvar range = ranges[ 0 ];\nrange.root; // -&gt; editor's editable element.\n</code></pre>\n\n<p>A range can also be selected:</p>\n\n<pre><code>var range = editor.createRange();\nrange.selectNodeContents( editor.editable() );\nsel.selectRanges( [ range ] );\n</code></pre>\n",
    "prototype": {
     "!type": "fn(root: +CKEDITOR.dom.document|+CKEDITOR.dom.element)",
     "collapsed": {
      "!type": "bool",
      "!doc": "<p>Indicates that this is a collapsed range. A collapsed range has its\nstart and end boundaries at the very same point so nothing is contained\nin it.</p>\n\n<pre><code>var range = new <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a>( editor.document );\nrange.selectNodeContents( editor.document.getBody() );\nalert( range.collapsed ); // false\nrange.collapse();\nalert( range.collapsed ); // true\n</code></pre>\n"
     },
     "document": {
      "!type": "+CKEDITOR.dom.document",
      "!doc": "<p>The document within which the range can be used.</p>\n\n<pre><code>// Selects the body contents of the range document.\nrange.selectNodeContents( range.document.getBody() );\n</code></pre>\n"
     },
     "endContainer": {
      "!type": "+CKEDITOR.dom.element|+CKEDITOR.dom.text",
      "!doc": "<p>Node within which the range ends.</p>\n\n<pre><code>var range = new <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a>( editor.document );\nrange.selectNodeContents( editor.document.getBody() );\nalert( range.endContainer.getName() ); // 'body'\n</code></pre>\n"
     },
     "endOffset": {
      "!type": "number",
      "!doc": "<p>Offset within the ending node of the range.</p>\n\n<pre><code>var range = new <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a>( editor.document );\nrange.selectNodeContents( editor.document.getBody() );\nalert( range.endOffset ); // == editor.document.getBody().getChildCount()\n</code></pre>\n"
     },
     "root": {
      "!type": "+CKEDITOR.dom.element",
      "!doc": "<p>The ancestor DOM element within which the range manipulation are limited.</p>\n"
     },
     "startContainer": {
      "!type": "+CKEDITOR.dom.element|+CKEDITOR.dom.text",
      "!doc": "<p>Node within which the range begins.</p>\n\n<pre><code>var range = new <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a>( editor.document );\nrange.selectNodeContents( editor.document.getBody() );\nalert( range.startContainer.getName() ); // 'body'\n</code></pre>\n"
     },
     "startOffset": {
      "!type": "number",
      "!doc": "<p>Offset within the starting node of the range.</p>\n\n<pre><code>var range = new <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a>( editor.document );\nrange.selectNodeContents( editor.document.getBody() );\nalert( range.startOffset ); // 0\n</code></pre>\n"
     },
     "_setEndContainer": {
      "!type": "fn(endContainer: +CKEDITOR.dom.element) -> !this",
      "!doc": "<p>Setter for the <a href=\"#!/api/CKEDITOR.dom.range-property-endContainer\" rel=\"CKEDITOR.dom.range-property-endContainer\" class=\"docClass\">endContainer</a>.</p>\n"
     },
     "_setStartContainer": {
      "!type": "fn(startContainer: +CKEDITOR.dom.element) -> !this",
      "!doc": "<p>Setter for the <a href=\"#!/api/CKEDITOR.dom.range-property-startContainer\" rel=\"CKEDITOR.dom.range-property-startContainer\" class=\"docClass\">startContainer</a>.</p>\n"
     },
     "checkBoundaryOfElement": {
      "!type": "fn(element: +CKEDITOR.dom.element, checkType: number) -> bool",
      "!doc": "<p>Check whether a range boundary is at the inner boundary of a given\nelement.</p>\n"
     },
     "checkEndOfBlock": {
      "!type": "fn() -> bool",
      "!doc": "<p><strong>Note:</strong> Calls to this function may produce changes to the DOM. The range may\nbe updated to reflect such changes.</p>\n"
     },
     "checkReadOnly": {
      "!type": "fn() -> bool",
      "!doc": "<p>Check if elements at which the range boundaries anchor are read-only,\nwith respect to <code>contenteditable</code> attribute.</p>\n"
     },
     "checkStartOfBlock": {
      "!type": "fn() -> bool",
      "!doc": "<p><strong>Note:</strong> Calls to this function may produce changes to the DOM. The range may\nbe updated to reflect such changes.</p>\n"
     },
     "clone": {
      "!type": "fn() -> +CKEDITOR.dom.range",
      "!doc": "<p>Clones this range.</p>\n"
     },
     "cloneContents": {
      "!type": "fn() -> +CKEDITOR.dom.documentFragment",
      "!doc": "<p>The content nodes of the range are cloned and added to a document fragment, which is returned.</p>\n\n<p><strong>Note:</strong> Text selection may lost after invoking this method (caused by text node splitting).</p>\n"
     },
     "collapse": {
      "!type": "fn(toStart: bool) -> !this",
      "!doc": "<p>Makes range collapsed by moving its start point (or end point if <code>toStart==true</code>)\nto the second end.</p>\n"
     },
     "createBookmark": {
      "!type": "fn(serializable?: bool) -> ?",
      "!doc": "<p>Creates a bookmark object, which can be later used to restore the\nrange by using the <a href=\"#!/api/CKEDITOR.dom.range-method-moveToBookmark\" rel=\"CKEDITOR.dom.range-method-moveToBookmark\" class=\"docClass\">moveToBookmark</a> function.</p>\n\n<p>This is an \"intrusive\" way to create a bookmark. It includes <code>&lt;span&gt;</code> tags\nin the range boundaries. The advantage of it is that it is possible to\nhandle DOM mutations when moving back to the bookmark.</p>\n\n<p><strong>Note:</strong> The inclusion of nodes in the DOM is a design choice and\nshould not be changed as there are other points in the code that may be\nusing those nodes to perform operations.</p>\n"
     },
     "createBookmark2": {
      "!type": "fn(normalized?: bool) -> ?",
      "!doc": "<p>Creates a \"non intrusive\" and \"mutation sensible\" bookmark. This\nkind of bookmark should be used only when the DOM is supposed to\nremain stable after its creation.</p>\n"
     },
     "createIterator": {
      "!type": "fn() -> +CKEDITOR.dom.iterator",
      "!doc": "<p>Creates a {<a href=\"#!/api/CKEDITOR.dom.iterator\" rel=\"CKEDITOR.dom.iterator\" class=\"docClass\">CKEDITOR.dom.iterator</a>} instance for this range.</p>\n"
     },
     "deleteContents": {
      "!type": "fn(mergeThen?: bool) -> !this",
      "!doc": "<p>Deletes the content nodes of the range permanently from the DOM tree.</p>\n"
     },
     "endPath": {
      "!type": "fn() -> +CKEDITOR.dom.elementPath",
      "!doc": "<p>Gets <a href=\"#!/api/CKEDITOR.dom.elementPath\" rel=\"CKEDITOR.dom.elementPath\" class=\"docClass\">CKEDITOR.dom.elementPath</a> for the <a href=\"#!/api/CKEDITOR.dom.range-property-endContainer\" rel=\"CKEDITOR.dom.range-property-endContainer\" class=\"docClass\">endContainer</a>.</p>\n"
     },
     "enlarge": {
      "!type": "fn(unit: ?, excludeBrs?: bool) -> !this",
      "!doc": "<p>Expands the range so that partial units are completely contained.</p>\n"
     },
     "extractContents": {
      "!type": "fn(mergeThen?: bool) -> +CKEDITOR.dom.documentFragment",
      "!doc": "<p>The content nodes of the range are cloned and added to a document fragment,\nmeanwhile they are removed permanently from the DOM tree.</p>\n"
     },
     "fixBlock": {
      "!type": "fn(isStart?: bool, blockTag: string) -> +CKEDITOR.dom.element",
      "!doc": "<p>Wraps inline content found around the range's start or end boundary\nwith a block element.</p>\n\n<pre><code>// Assuming the following range:\n// &lt;h1&gt;foo&lt;/h1&gt;ba^r&lt;br /&gt;bom&lt;p&gt;foo&lt;/p&gt;\n// The result of executing:\nrange.fixBlock( true, 'p' );\n// will be:\n// &lt;h1&gt;foo&lt;/h1&gt;&lt;p&gt;ba^r&lt;br /&gt;bom&lt;/p&gt;&lt;p&gt;foo&lt;/p&gt;\n</code></pre>\n\n<p>Non-collapsed range:</p>\n\n<pre><code>// Assuming the following range:\n// ba[r&lt;p&gt;foo&lt;/p&gt;bo]m\n// The result of executing:\nrange.fixBlock( false, 'p' );\n// will be:\n// ba[r&lt;p&gt;foo&lt;/p&gt;&lt;p&gt;bo]m&lt;/p&gt;\n</code></pre>\n"
     },
     "getBoundaryNodes": {
      "!type": "fn() -> ?",
      "!doc": "<p>Returns two nodes which are on the boundaries of this range.</p>\n"
     },
     "getCommonAncestor": {
      "!type": "fn(includeSelf?: bool, ignoreTextNode?: bool) -> +CKEDITOR.dom.element",
      "!doc": "<p>Find the node which fully contains the range.</p>\n"
     },
     "getEnclosedNode": {
      "!type": "fn() -> +CKEDITOR.dom.node",
      "!doc": "<p>Get the single node enclosed within the range if there's one.</p>\n"
     },
     "getNextEditableNode": {
      "!type": "fn() -> +CKEDITOR.dom.element|+CKEDITOR.dom.text",
      "!doc": "<p>Gets next node which can be a container of a selection.\nThis methods mimics a behavior of right/left arrow keys in case of\ncollapsed selection. It does not return an exact position (with offset) though,\nbut just a selection's container.</p>\n\n<p>Note: use this method on a collapsed range.</p>\n"
     },
     "getNextNode": {
      "!type": "fn(evaluator: fn(), guard?: fn(), boundary?: +CKEDITOR.dom.element) -> +CKEDITOR.dom.element|+null",
      "!doc": "<p>Traverse with <a href=\"#!/api/CKEDITOR.dom.walker\" rel=\"CKEDITOR.dom.walker\" class=\"docClass\">CKEDITOR.dom.walker</a> to retrieve the next element before the range start.</p>\n"
     },
     "getPreviousEditableNode": {
      "!type": "fn() -> +CKEDITOR.dom.element|+CKEDITOR.dom.text",
      "!doc": "<p>See <a href=\"#!/api/CKEDITOR.dom.range-method-getNextEditableNode\" rel=\"CKEDITOR.dom.range-method-getNextEditableNode\" class=\"docClass\">getNextEditableNode</a>.</p>\n"
     },
     "getPreviousNode": {
      "!type": "fn(evaluator: fn(), guard?: fn(), boundary?: +CKEDITOR.dom.element) -> +CKEDITOR.dom.element|+null",
      "!doc": "<p>Traverse with <a href=\"#!/api/CKEDITOR.dom.walker\" rel=\"CKEDITOR.dom.walker\" class=\"docClass\">CKEDITOR.dom.walker</a> to retrieve the previous element before the range start.</p>\n"
     },
     "getTouchedEndNode": {
      "!type": "fn() -> +CKEDITOR.dom.node",
      "!doc": "<p>Get the node adjacent to the range end or <a href=\"#!/api/CKEDITOR.dom.range-property-endContainer\" rel=\"CKEDITOR.dom.range-property-endContainer\" class=\"docClass\">endContainer</a>.</p>\n"
     },
     "getTouchedStartNode": {
      "!type": "fn() -> +CKEDITOR.dom.node",
      "!doc": "<p>Get the node adjacent to the range start or <a href=\"#!/api/CKEDITOR.dom.range-property-startContainer\" rel=\"CKEDITOR.dom.range-property-startContainer\" class=\"docClass\">startContainer</a>.</p>\n"
     },
     "insertNode": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> !this",
      "!doc": "<p>Inserts a node at the start of the range. The range will be expanded\nthe contain the node.</p>\n"
     },
     "moveToBookmark": {
      "!type": "fn(bookmark: ?) -> !this",
      "!doc": "<p>Moves this range to the given bookmark. See <a href=\"#!/api/CKEDITOR.dom.range-method-createBookmark\" rel=\"CKEDITOR.dom.range-method-createBookmark\" class=\"docClass\">createBookmark</a> and <a href=\"#!/api/CKEDITOR.dom.range-method-createBookmark2\" rel=\"CKEDITOR.dom.range-method-createBookmark2\" class=\"docClass\">createBookmark2</a>.</p>\n\n<p>If serializable bookmark passed, then its <code>&lt;span&gt;</code> markers will be removed.</p>\n"
     },
     "moveToClosestEditablePosition": {
      "!type": "fn(element: +CKEDITOR.dom.element, isMoveToEnd: bool) -> bool",
      "!doc": "<p>Moves the range boundaries to the closest editing point after/before an\nelement.</p>\n\n<p>For example, if the start element has <code>id=\"start\"</code>,\n<code>&lt;p&gt;&lt;b&gt;foo&lt;/b&gt;&lt;span id=\"start\"&gt;start&lt;/start&gt;&lt;/p&gt;</code>, the closest previous editing point is\n<code>&lt;p&gt;&lt;b&gt;foo&lt;/b&gt;^&lt;span id=\"start\"&gt;start&lt;/start&gt;&lt;/p&gt;</code> (between <code>&lt;b&gt;</code> and <code>&lt;span&gt;</code>).</p>\n\n<p>See also: <a href=\"#!/api/CKEDITOR.dom.range-method-moveToElementEditablePosition\" rel=\"CKEDITOR.dom.range-method-moveToElementEditablePosition\" class=\"docClass\">moveToElementEditablePosition</a>.</p>\n"
     },
     "moveToElementEditEnd": {
      "!type": "fn(target: ?) -> bool",
      "!doc": "<p>See <a href=\"#!/api/CKEDITOR.dom.range-method-moveToElementEditablePosition\" rel=\"CKEDITOR.dom.range-method-moveToElementEditablePosition\" class=\"docClass\">moveToElementEditablePosition</a>.</p>\n"
     },
     "moveToElementEditStart": {
      "!type": "fn(target: ?) -> bool",
      "!doc": "<p>See <a href=\"#!/api/CKEDITOR.dom.range-method-moveToElementEditablePosition\" rel=\"CKEDITOR.dom.range-method-moveToElementEditablePosition\" class=\"docClass\">moveToElementEditablePosition</a>.</p>\n"
     },
     "moveToElementEditablePosition": {
      "!type": "fn(el: +CKEDITOR.dom.element, isMoveToEnd: bool) -> bool",
      "!doc": "<p>Moves the range boundaries to the first/end editing point inside an\nelement.</p>\n\n<p>For example, in an element tree like\n<code>&lt;p&gt;&lt;b&gt;&lt;i&gt;&lt;/i&gt;&lt;/b&gt; Text&lt;/p&gt;</code>, the start editing point is\n<code>&lt;p&gt;&lt;b&gt;&lt;i&gt;^&lt;/i&gt;&lt;/b&gt; Text&lt;/p&gt;</code> (inside <code>&lt;i&gt;</code>).</p>\n"
     },
     "moveToPosition": {
      "!type": "fn(node: +CKEDITOR.dom.node, position: number) -> !this",
      "!doc": "<p>Moves the range to given position according to specified node.</p>\n\n<pre><code>// HTML: &lt;p&gt;Foo &lt;b&gt;bar&lt;/b&gt;&lt;/p&gt;\nrange.moveToPosition( elB, <a href=\"#!/api/CKEDITOR-property-POSITION_BEFORE_START\" rel=\"CKEDITOR-property-POSITION_BEFORE_START\" class=\"docClass\">CKEDITOR.POSITION_BEFORE_START</a> );\n// Range will be moved to: &lt;p&gt;Foo ^&lt;b&gt;bar&lt;/b&gt;&lt;/p&gt;\n</code></pre>\n\n<p>See also <a href=\"#!/api/CKEDITOR.dom.range-method-setStartAt\" rel=\"CKEDITOR.dom.range-method-setStartAt\" class=\"docClass\">setStartAt</a> and <a href=\"#!/api/CKEDITOR.dom.range-method-setEndAt\" rel=\"CKEDITOR.dom.range-method-setEndAt\" class=\"docClass\">setEndAt</a>.</p>\n"
     },
     "moveToRange": {
      "!type": "fn(range: +CKEDITOR.dom.range) -> !this",
      "!doc": "<p>Moves the range to the exact position of the specified range.</p>\n"
     },
     "optimize": {
      "!type": "fn() -> !this",
      "!doc": "<p>Transforms the <a href=\"#!/api/CKEDITOR.dom.range-property-startContainer\" rel=\"CKEDITOR.dom.range-property-startContainer\" class=\"docClass\">startContainer</a> and <a href=\"#!/api/CKEDITOR.dom.range-property-endContainer\" rel=\"CKEDITOR.dom.range-property-endContainer\" class=\"docClass\">endContainer</a> properties from text\nnodes to element nodes, whenever possible. This is actually possible\nif either of the boundary containers point to a text node, and its\noffset is set to zero, or after the last char in the node.</p>\n"
     },
     "optimizeBookmark": {
      "!type": "fn() -> !this",
      "!doc": "<p>Move the range out of bookmark nodes if they'd been the container.</p>\n"
     },
     "removeEmptyBlocksAtEnd": {
      "!type": "fn(atEnd: bool) -> !this",
      "!doc": "<p>Recursively remove any empty path blocks at the range boundary.</p>\n"
     },
     "scrollIntoView": {
      "!type": "fn() -> !this",
      "!doc": "<p>Scrolls the start of current range into view.</p>\n"
     },
     "select": {
      "!type": "fn() -> +CKEDITOR.dom.selection",
      "!doc": "<p>Select this range as the only one with <a href=\"#!/api/CKEDITOR.dom.selection-method-selectRanges\" rel=\"CKEDITOR.dom.selection-method-selectRanges\" class=\"docClass\">CKEDITOR.dom.selection.selectRanges</a>.</p>\n"
     },
     "selectNodeContents": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> !this",
      "!doc": "<p>Select nodes content. Range will start and end inside this node.</p>\n"
     },
     "setEnd": {
      "!type": "fn(endNode: +CKEDITOR.dom.node, endOffset: number) -> !this",
      "!doc": "<p>Sets the end position of a Range.</p>\n"
     },
     "setEndAfter": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> !this",
      "!doc": "<p>Sets end of this range after the specified node.</p>\n\n<pre><code>// Range: &lt;p&gt;foo^&lt;b&gt;bar&lt;/b&gt;&lt;/p&gt;\nrange.setEndAfter( elB );\n// The range will be changed to:\n// &lt;p&gt;foo[&lt;b&gt;bar&lt;/b&gt;]&lt;/p&gt;\n</code></pre>\n"
     },
     "setEndAt": {
      "!type": "fn(node: +CKEDITOR.dom.node, position: number) -> !this",
      "!doc": "<p>Moves the end of this range to given position according to specified node.</p>\n\n<pre><code>// HTML: &lt;p&gt;^Foo &lt;b&gt;bar&lt;/b&gt;&lt;/p&gt;\nrange.setEndAt( textBar, <a href=\"#!/api/CKEDITOR-property-POSITION_BEFORE_START\" rel=\"CKEDITOR-property-POSITION_BEFORE_START\" class=\"docClass\">CKEDITOR.POSITION_BEFORE_START</a> );\n// The range will be changed to:\n// &lt;p&gt;[Foo &lt;b&gt;]bar&lt;/b&gt;&lt;/p&gt;\n</code></pre>\n\n<p>See also <a href=\"#!/api/CKEDITOR.dom.range-method-setStartAt\" rel=\"CKEDITOR.dom.range-method-setStartAt\" class=\"docClass\">setStartAt</a> and <a href=\"#!/api/CKEDITOR.dom.range-method-moveToPosition\" rel=\"CKEDITOR.dom.range-method-moveToPosition\" class=\"docClass\">moveToPosition</a>.</p>\n"
     },
     "setEndBefore": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> !this",
      "!doc": "<p>Sets end of this range before the specified node.</p>\n\n<pre><code>// Range: &lt;p&gt;^foo&lt;b&gt;bar&lt;/b&gt;&lt;/p&gt;\nrange.setStartAfter( textBar );\n// The range will be changed to:\n// &lt;p&gt;[foo&lt;b&gt;]bar&lt;/b&gt;&lt;/p&gt;\n</code></pre>\n"
     },
     "setStart": {
      "!type": "fn(startNode: +CKEDITOR.dom.node, startOffset: number) -> !this",
      "!doc": "<p>Sets the start position of a range.</p>\n"
     },
     "setStartAfter": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> !this",
      "!doc": "<p>Sets start of this range after the specified node.</p>\n\n<pre><code>// Range: &lt;p&gt;foo&lt;b&gt;bar&lt;/b&gt;^&lt;/p&gt;\nrange.setStartAfter( textFoo );\n// The range will be changed to:\n// &lt;p&gt;foo[&lt;b&gt;bar&lt;/b&gt;]&lt;/p&gt;\n</code></pre>\n"
     },
     "setStartAt": {
      "!type": "fn(node: +CKEDITOR.dom.node, position: number) -> !this",
      "!doc": "<p>Moves the start of this range to given position according to specified node.</p>\n\n<pre><code>// HTML: &lt;p&gt;Foo &lt;b&gt;bar&lt;/b&gt;^&lt;/p&gt;\nrange.setStartAt( elB, <a href=\"#!/api/CKEDITOR-property-POSITION_AFTER_START\" rel=\"CKEDITOR-property-POSITION_AFTER_START\" class=\"docClass\">CKEDITOR.POSITION_AFTER_START</a> );\n// The range will be changed to:\n// &lt;p&gt;Foo &lt;b&gt;[bar&lt;/b&gt;]&lt;/p&gt;\n</code></pre>\n\n<p>See also <a href=\"#!/api/CKEDITOR.dom.range-method-setEndAt\" rel=\"CKEDITOR.dom.range-method-setEndAt\" class=\"docClass\">setEndAt</a> and <a href=\"#!/api/CKEDITOR.dom.range-method-moveToPosition\" rel=\"CKEDITOR.dom.range-method-moveToPosition\" class=\"docClass\">moveToPosition</a>.</p>\n"
     },
     "setStartBefore": {
      "!type": "fn(node: +CKEDITOR.dom.node) -> !this",
      "!doc": "<p>Sets start of this range after the specified node.</p>\n\n<pre><code>// Range: &lt;p&gt;foo&lt;b&gt;bar&lt;/b&gt;^&lt;/p&gt;\nrange.setStartBefore( elB );\n// The range will be changed to:\n// &lt;p&gt;foo[&lt;b&gt;bar&lt;/b&gt;]&lt;/p&gt;\n</code></pre>\n"
     },
     "shrink": {
      "!type": "fn(mode: number, selectContents: bool) -> !this",
      "!doc": "<p>Descrease the range to make sure that boundaries\nalways anchor beside text nodes or innermost element.</p>\n"
     },
     "splitBlock": {
      "!type": "fn(blockTag: ?) -> !this",
      "!doc": "<p>@todo</p>\n"
     },
     "splitElement": {
      "!type": "fn(element: +CKEDITOR.dom.element) -> +CKEDITOR.dom.element",
      "!doc": "<p>Branch the specified element from the collapsed range position and\nplace the caret between the two result branches.</p>\n\n<p><strong>Note:</strong> The range must be collapsed and been enclosed by this element.</p>\n"
     },
     "startPath": {
      "!type": "fn() -> +CKEDITOR.dom.elementPath",
      "!doc": "<p>Gets <a href=\"#!/api/CKEDITOR.dom.elementPath\" rel=\"CKEDITOR.dom.elementPath\" class=\"docClass\">CKEDITOR.dom.elementPath</a> for the <a href=\"#!/api/CKEDITOR.dom.range-property-startContainer\" rel=\"CKEDITOR.dom.range-property-startContainer\" class=\"docClass\">startContainer</a>.</p>\n"
     },
     "trim": {
      "!type": "fn(ignoreStart?: bool, ignoreEnd?: bool) -> !this"
     }
    }
   },
   "rangeList": {
    "!doc": "<p>Represents a list os <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a> objects, which can be easily\niterated sequentially.</p>\n",
    "prototype": {
     "!type": "fn(ranges?: +CKEDITOR.dom.range|[+CKEDITOR.dom.range])",
     "createBookmarks": {
      "!type": "fn(serializable?: bool) -> [?]",
      "!doc": "<p>Create bookmarks for all ranges. See <a href=\"#!/api/CKEDITOR.dom.range-method-createBookmark\" rel=\"CKEDITOR.dom.range-method-createBookmark\" class=\"docClass\">CKEDITOR.dom.range.createBookmark</a>.</p>\n"
     },
     "createBookmarks2": {
      "!type": "fn(normalized?: bool) -> [?]",
      "!doc": "<p>Create \"unobtrusive\" bookmarks for all ranges. See <a href=\"#!/api/CKEDITOR.dom.range-method-createBookmark2\" rel=\"CKEDITOR.dom.range-method-createBookmark2\" class=\"docClass\">CKEDITOR.dom.range.createBookmark2</a>.</p>\n"
     },
     "createIterator": {
      "!type": "fn() -> +CKEDITOR.dom.rangeListIterator",
      "!doc": "<p>Creates an instance of the rangeList iterator, it should be used\nonly when the ranges processing could be DOM intrusive, which\nmeans it may pollute and break other ranges in this list.\nOtherwise, it's enough to just iterate over this array in a for loop.</p>\n"
     },
     "moveToBookmarks": {
      "!type": "fn(bookmarks: [?]) -> !this",
      "!doc": "<p>Move each range in the list to the position specified by a list of bookmarks.</p>\n"
     }
    }
   },
   "rangeListIterator": {
    "!doc": "<p>(Virtual Class) Do not call this constructor. This class is not really part\nof the API. It just describes the return type of <a href=\"#!/api/CKEDITOR.dom.rangeList-method-createIterator\" rel=\"CKEDITOR.dom.rangeList-method-createIterator\" class=\"docClass\">CKEDITOR.dom.rangeList.createIterator</a>.</p>\n",
    "prototype": {
     "getNextRange": {
      "!type": "fn(mergeConsequent?: bool) -> !this",
      "!doc": "<p>Retrieves the next range in the list.</p>\n"
     }
    }
   },
   "selection": {
    "!doc": "<p>Manipulates the selection within a DOM element. If the current browser selection\nspans outside of the element, an empty selection object is returned.</p>\n\n<p>Despite the fact that selection's constructor allows to create selection instances,\nusually it's better to get selection from the editor instance:</p>\n\n<pre><code>var sel = editor.getSelection();\n</code></pre>\n\n<p>See <a href=\"#!/api/CKEDITOR.editor-method-getSelection\" rel=\"CKEDITOR.editor-method-getSelection\" class=\"docClass\">CKEDITOR.editor.getSelection</a>.</p>\n",
    "prototype": {
     "!type": "fn(target: +CKEDITOR.dom.document|+CKEDITOR.dom.element|+CKEDITOR.dom.selection)",
     "document": {
      "!type": "+CKEDITOR.dom.document",
      "!doc": "<p>Document in which selection is anchored.</p>\n"
     },
     "isFake": {
      "!type": "bool",
      "!doc": "<p>Whether selection is a fake selection.</p>\n\n<p>See <a href=\"#!/api/CKEDITOR.dom.selection-method-fake\" rel=\"CKEDITOR.dom.selection-method-fake\" class=\"docClass\">fake</a> method.</p>\n"
     },
     "isLocked": {
      "!type": "bool",
      "!doc": "<p>Whether selection is locked (cannot be modified).</p>\n\n<p>See <a href=\"#!/api/CKEDITOR.dom.selection-method-lock\" rel=\"CKEDITOR.dom.selection-method-lock\" class=\"docClass\">lock</a> and <a href=\"#!/api/CKEDITOR.dom.selection-method-unlock\" rel=\"CKEDITOR.dom.selection-method-unlock\" class=\"docClass\">unlock</a> methods.</p>\n"
     },
     "rev": {
      "!type": "number",
      "!doc": "<p>Selection's revision. This value is incremented every time new\nselection is created or existing one is modified.</p>\n"
     },
     "root": {
      "!type": "+CKEDITOR.dom.element",
      "!doc": "<p>Selection's root element.</p>\n"
     },
     "createBookmarks": {
      "!type": "fn(serializable: ?) -> [?]",
      "!doc": "<p>Creates a bookmark for each range of this selection (from <a href=\"#!/api/CKEDITOR.dom.selection-method-getRanges\" rel=\"CKEDITOR.dom.selection-method-getRanges\" class=\"docClass\">getRanges</a>)\nby calling the <a href=\"#!/api/CKEDITOR.dom.range-method-createBookmark\" rel=\"CKEDITOR.dom.range-method-createBookmark\" class=\"docClass\">CKEDITOR.dom.range.createBookmark</a> method,\nwith extra care taken to avoid interference among those ranges. The arguments\nreceived are the same as with the underlying range method.</p>\n\n<pre><code>var bookmarks = editor.getSelection().createBookmarks();\n</code></pre>\n"
     },
     "createBookmarks2": {
      "!type": "fn(normalized: ?) -> [?]",
      "!doc": "<p>Creates a bookmark for each range of this selection (from <a href=\"#!/api/CKEDITOR.dom.selection-method-getRanges\" rel=\"CKEDITOR.dom.selection-method-getRanges\" class=\"docClass\">getRanges</a>)\nby calling the <a href=\"#!/api/CKEDITOR.dom.range-method-createBookmark2\" rel=\"CKEDITOR.dom.range-method-createBookmark2\" class=\"docClass\">CKEDITOR.dom.range.createBookmark2</a> method,\nwith extra care taken to avoid interference among those ranges. The arguments\nreceived are the same as with the underlying range method.</p>\n\n<pre><code>var bookmarks = editor.getSelection().createBookmarks2();\n</code></pre>\n"
     },
     "fake": {
      "!type": "fn(element: +CKEDITOR.dom.element) -> !this",
      "!doc": "<p>Makes a \"fake selection\" of an element.</p>\n\n<p>A fake selection does not render UI artifacts over the selected\nelement. Additionally, the browser native selection system is not\naware of the fake selection. In practice, the native selection is\nmoved to a hidden place where no native selection UI artifacts are\ndisplayed to the user.</p>\n"
     },
     "getCommonAncestor": {
      "!type": "fn() -> +CKEDITOR.dom.element",
      "!doc": "<p>Retrieves the common ancestor node of the first range and the last range.</p>\n\n<pre><code>var ancestor = editor.getSelection().getCommonAncestor();\n</code></pre>\n"
     },
     "getNative": {
      "!type": "fn() -> ?",
      "!doc": "<p>Gets the native selection object from the browser.</p>\n\n<pre><code>var selection = editor.getSelection().getNative();\n</code></pre>\n"
     },
     "getRanges": {
      "!type": "fn(onlyEditables?: bool) -> [?]",
      "!doc": "<p>Retrieves the <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a> instances that represent the current selection.</p>\n\n<p>Note: Some browsers return multiple ranges even for a continuous selection. Firefox, for example, returns\none range for each table cell when one or more table rows are selected.</p>\n\n<pre><code>var ranges = selection.getRanges();\nalert( ranges.length );\n</code></pre>\n"
     },
     "getSelectedElement": {
      "!type": "fn() -> +CKEDITOR.dom.element",
      "!doc": "<p>Gets the currently selected element.</p>\n\n<pre><code>var element = editor.getSelection().getSelectedElement();\nalert( element.getName() );\n</code></pre>\n"
     },
     "getSelectedText": {
      "!type": "fn() -> string",
      "!doc": "<p>Retrieves the text contained within the range. An empty string is returned for non-text selection.</p>\n\n<pre><code>var text = editor.getSelection().getSelectedText();\nalert( text );\n</code></pre>\n"
     },
     "getStartElement": {
      "!type": "fn() -> +CKEDITOR.dom.element",
      "!doc": "<p>Gets the DOM element in which the selection starts.</p>\n\n<pre><code>var element = editor.getSelection().getStartElement();\nalert( element.getName() );\n</code></pre>\n"
     },
     "getType": {
      "!type": "fn() -> number",
      "!doc": "<p>Gets the type of the current selection. The following values are\navailable:</p>\n\n<ul>\n<li><a href=\"#!/api/CKEDITOR-property-SELECTION_NONE\" rel=\"CKEDITOR-property-SELECTION_NONE\" class=\"docClass\">CKEDITOR.SELECTION_NONE</a> (1): No selection.</li>\n<li><a href=\"#!/api/CKEDITOR-property-SELECTION_TEXT\" rel=\"CKEDITOR-property-SELECTION_TEXT\" class=\"docClass\">CKEDITOR.SELECTION_TEXT</a> (2): A text or a collapsed selection is selected.</li>\n<li><a href=\"#!/api/CKEDITOR-property-SELECTION_ELEMENT\" rel=\"CKEDITOR-property-SELECTION_ELEMENT\" class=\"docClass\">CKEDITOR.SELECTION_ELEMENT</a> (3): An element is selected.</li>\n</ul>\n\n\n<p>Example:</p>\n\n<pre><code>if ( editor.getSelection().getType() == <a href=\"#!/api/CKEDITOR-property-SELECTION_TEXT\" rel=\"CKEDITOR-property-SELECTION_TEXT\" class=\"docClass\">CKEDITOR.SELECTION_TEXT</a> )\n    alert( 'A text is selected' );\n</code></pre>\n"
     },
     "isHidden": {
      "!type": "fn() -> bool",
      "!doc": "<p>Checks whether selection is placed in hidden element.</p>\n\n<p>This method is to be used to verify whether fake selection\n(see <a href=\"#!/api/CKEDITOR.dom.selection-method-fake\" rel=\"CKEDITOR.dom.selection-method-fake\" class=\"docClass\">fake</a>) is still hidden.</p>\n\n<p><strong>Note:</strong> this method should be executed on real selection - e.g.:</p>\n\n<pre><code>editor.getSelection( true ).isHidden();\n</code></pre>\n"
     },
     "lock": {
      "!type": "fn() -> !this",
      "!doc": "<p>Locks the selection made in the editor in order to make it possible to\nmanipulate it without browser interference. A locked selection is\ncached and remains unchanged until it is released with the <a href=\"#!/api/CKEDITOR.dom.selection-method-unlock\" rel=\"CKEDITOR.dom.selection-method-unlock\" class=\"docClass\">unlock</a> method.</p>\n\n<pre><code>editor.getSelection().lock();\n</code></pre>\n"
     },
     "removeAllRanges": {
      "!type": "fn() -> !this",
      "!doc": "<p>Remove all the selection ranges from the document.</p>\n"
     },
     "reset": {
      "!type": "fn() -> !this",
      "!doc": "<p>Clears the selection cache.</p>\n\n<pre><code>editor.getSelection().reset();\n</code></pre>\n"
     },
     "scrollIntoView": {
      "!type": "fn() -> !this",
      "!doc": "<p>Moves the scrollbar to the starting position of the current selection.</p>\n\n<pre><code>editor.getSelection().scrollIntoView();\n</code></pre>\n"
     },
     "selectBookmarks": {
      "!type": "fn(bookmarks: [?]) -> +CKEDITOR.dom.selection",
      "!doc": "<p>Selects the virtual ranges denoted by the bookmarks by calling <a href=\"#!/api/CKEDITOR.dom.selection-method-selectRanges\" rel=\"CKEDITOR.dom.selection-method-selectRanges\" class=\"docClass\">selectRanges</a>.</p>\n\n<pre><code>var bookmarks = editor.getSelection().createBookmarks();\neditor.getSelection().selectBookmarks( bookmarks );\n</code></pre>\n"
     },
     "selectElement": {
      "!type": "fn(element: +CKEDITOR.dom.element) -> !this",
      "!doc": "<p>Makes the current selection of type <a href=\"#!/api/CKEDITOR-property-SELECTION_ELEMENT\" rel=\"CKEDITOR-property-SELECTION_ELEMENT\" class=\"docClass\">CKEDITOR.SELECTION_ELEMENT</a> by enclosing the specified element.</p>\n\n<pre><code>var element = editor.document.getById( 'sampleElement' );\neditor.getSelection().selectElement( element );\n</code></pre>\n"
     },
     "selectRanges": {
      "!type": "fn(ranges: [?]) -> !this",
      "!doc": "<p>Clears the original selection and adds the specified ranges to the document selection.</p>\n\n<pre><code>    // Move selection to the end of the editable element.\nvar range = editor.createRange();\nrange.moveToPosition( range.root, <a href=\"#!/api/CKEDITOR-property-POSITION_BEFORE_END\" rel=\"CKEDITOR-property-POSITION_BEFORE_END\" class=\"docClass\">CKEDITOR.POSITION_BEFORE_END</a> );\neditor.getSelection().selectRanges( [ ranges ] );\n</code></pre>\n"
     },
     "unlock": {
      "!type": "fn(restore: ?) -> !this",
      "!doc": "<p>@todo</p>\n"
     }
    }
   },
   "text": {
    "!doc": "<p>Represents a DOM text node.</p>\n\n<pre><code>var nativeNode = document.createTextNode( 'Example' );\nvar text = <a href=\"#!/api/CKEDITOR.dom.text\" rel=\"CKEDITOR.dom.text\" class=\"docClass\">CKEDITOR.dom.text</a>( nativeNode );\n\nvar text = <a href=\"#!/api/CKEDITOR.dom.text\" rel=\"CKEDITOR.dom.text\" class=\"docClass\">CKEDITOR.dom.text</a>( 'Example' );\n</code></pre>\n",
    "prototype": {
     "!type": "fn(text: ?|string, ownerDocument?: +CKEDITOR.dom.document)",
     "type": {
      "!type": "number",
      "!doc": "<p>The node type. This is a constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_TEXT\" rel=\"CKEDITOR-property-NODE_TEXT\" class=\"docClass\">CKEDITOR.NODE_TEXT</a>.</p>\n"
     },
     "getLength": {
      "!type": "fn() -> number",
      "!doc": "<p>Gets length of node's value.</p>\n"
     },
     "getText": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets node's value.</p>\n"
     },
     "setText": {
      "!type": "fn(text: string) -> !this",
      "!doc": "<p>Sets node's value.</p>\n"
     },
     "split": {
      "!type": "fn(The: number) -> +CKEDITOR.dom.text",
      "!doc": "<p>Breaks this text node into two nodes at the specified offset,\nkeeping both in the tree as siblings. This node then only contains\nall the content up to the offset point. A new text node, which is\ninserted as the next sibling of this node, contains all the content\nat and after the offset point. When the offset is equal to the\nlength of this node, the new node has no data.</p>\n"
     },
     "substring": {
      "!type": "fn(indexA: number, indexB?: number) -> !this",
      "!doc": "<p>Extracts characters from indexA up to but not including <code>indexB</code>.</p>\n"
     }
    }
   },
   "walker": {
    "!doc": "<p>Utility class to \"walk\" the DOM inside a range boundaries. If the\nrange starts or ends in the middle of the text node this node will\nbe included as a whole. Outside changes to the range may break the walker.</p>\n\n<p>The walker may return nodes that are not totaly included into the\nrange boundaires. Let's take the following range representation,\nwhere the square brackets indicate the boundaries:</p>\n\n<pre><code>[&lt;p&gt;Some &lt;b&gt;sample] text&lt;/b&gt;\n</code></pre>\n\n<p>While walking forward into the above range, the following nodes are\nreturned: <code>&lt;p&gt;</code>, <code>\"Some \"</code>, <code>&lt;b&gt;</code> and <code>\"sample\"</code>. Going\nbackwards instead we have: <code>\"sample\"</code> and <code>\"Some \"</code>. So note that the\nwalker always returns nodes when \"entering\" them, but not when\n\"leaving\" them. The guard function is instead called both when\nentering and leaving nodes.</p>\n",
    "prototype": {
     "!type": "fn(range: +CKEDITOR.dom.range)",
     "_": {
      "!type": "?"
     },
     "evaluator": {
      "!type": "fn()",
      "!doc": "<p>A function executed for every matched node, to check whether\nit's to be considered into the walk or not. If not provided, all\nmatched nodes are considered good.</p>\n\n<p>If the function returns <code>false</code> the node is ignored.</p>\n"
     },
     "guard": {
      "!type": "fn()",
      "!doc": "<p>A function executed for every node the walk pass by to check\nwhether the walk is to be finished. It's called when both\nentering and exiting nodes, as well as for the matched nodes.</p>\n\n<p>If this function returns <code>false</code>, the walking ends and no more\nnodes are evaluated.</p>\n"
     },
     "checkBackward": {
      "!type": "fn() -> bool",
      "!doc": "<p>Check all nodes at left, executing the evaluation function.</p>\n"
     },
     "checkForward": {
      "!type": "fn() -> bool",
      "!doc": "<p>Check all nodes at right, executing the evaluation function.</p>\n"
     },
     "end": {
      "!type": "fn() -> !this",
      "!doc": "<p>Stops walking. No more nodes are retrieved if this function gets called.</p>\n"
     },
     "lastBackward": {
      "!type": "fn() -> +CKEDITOR.dom.node",
      "!doc": "<p>Executes a full walk backwards (to the left), until no more nodes\nare available, returning the last valid node.</p>\n"
     },
     "lastForward": {
      "!type": "fn() -> +CKEDITOR.dom.node",
      "!doc": "<p>Executes a full walk forward (to the right), until no more nodes\nare available, returning the last valid node.</p>\n"
     },
     "next": {
      "!type": "fn() -> +CKEDITOR.dom.node",
      "!doc": "<p>Retrieves the next node (at right).</p>\n"
     },
     "previous": {
      "!type": "fn() -> +CKEDITOR.dom.node",
      "!doc": "<p>Retrieves the previous node (at left).</p>\n"
     },
     "reset": {
      "!type": "fn() -> !this",
      "!doc": "<p>Resets walker.</p>\n"
     }
    },
    "blockBoundary": {
     "!type": "fn(customNodeNames: ?) -> fn()",
     "!doc": "<p>Returns a function which checks whether the node is a block boundary.\nSee <a href=\"#!/api/CKEDITOR.dom.element-method-isBlockBoundary\" rel=\"CKEDITOR.dom.element-method-isBlockBoundary\" class=\"docClass\">CKEDITOR.dom.element.isBlockBoundary</a>.</p>\n"
    },
    "bogus": {
     "!type": "fn(isReject?: bool) -> fn()",
     "!doc": "<p>Returns a function which checks whether node is a bogus (filler) node from\ncontenteditable element's point of view.</p>\n"
    },
    "bookmark": {
     "!type": "fn(contentOnly?: bool, isReject?: bool) -> fn()",
     "!doc": "<p>Returns a function which checks whether the node is a bookmark node OR bookmark node\ninner contents.</p>\n"
    },
    "editable": {
     "!type": "fn(isReject?: bool) -> fn()",
     "!doc": "<p>Returns a function which checks whether node can be a container or a sibling\nof selection end.</p>\n\n<p>This includes:</p>\n\n<ul>\n<li>text nodes (but not whitespaces),</li>\n<li>inline elements,</li>\n<li>intersection of <a href=\"#!/api/CKEDITOR.dtd-property-S-empty\" rel=\"CKEDITOR.dtd-property-S-empty\" class=\"docClass\">CKEDITOR.dtd.$empty</a> and <a href=\"#!/api/CKEDITOR.dtd-property-S-block\" rel=\"CKEDITOR.dtd-property-S-block\" class=\"docClass\">CKEDITOR.dtd.$block</a> (currenly\nit's only <code>&lt;hr&gt;</code>),</li>\n<li>non-editable blocks (special case - such blocks cannot be containers nor\nsiblings, they need to be selected entirely),</li>\n<li>empty blocks which can contain text (IE only).</li>\n</ul>\n\n"
    },
    "ignored": {
     "!type": "fn(isReject?: bool) -> fn()",
     "!doc": "<p>Returns a function which checks whether node should be ignored in terms of \"editability\".</p>\n\n<p>This includes:</p>\n\n<ul>\n<li>whitespaces (see <a href=\"#!/api/CKEDITOR.dom.walker-static-method-whitespaces\" rel=\"CKEDITOR.dom.walker-static-method-whitespaces\" class=\"docClass\">whitespaces</a>),</li>\n<li>bookmarks (see <a href=\"#!/api/CKEDITOR.dom.walker-static-method-bookmark\" rel=\"CKEDITOR.dom.walker-static-method-bookmark\" class=\"docClass\">bookmark</a>),</li>\n<li>temporary elements (see <a href=\"#!/api/CKEDITOR.dom.walker-static-method-temp\" rel=\"CKEDITOR.dom.walker-static-method-temp\" class=\"docClass\">temp</a>).</li>\n</ul>\n\n"
    },
    "invisible": {
     "!type": "fn(isReject?: bool) -> fn()",
     "!doc": "<p>Returns a function which checks whether the node is invisible in the WYSIWYG mode.</p>\n"
    },
    "listItemBoundary": {
     "!type": "fn() -> !this",
     "!doc": "<p>@todo</p>\n"
    },
    "nodeType": {
     "!type": "fn(type: number, isReject?: bool) -> fn()",
     "!doc": "<p>Returns a function which checks whether node's type is equal to passed one.</p>\n"
    },
    "temp": {
     "!type": "fn(isReject?: bool) -> fn()",
     "!doc": "<p>Returns a function which checks whether node is a temporary element\n(element with <code>data-cke-temp</code> attribute) or its child.</p>\n"
    },
    "whitespaces": {
     "!type": "fn(isReject?: bool) -> fn()",
     "!doc": "<p>Returns a function which checks whether the node is a text node containing only whitespaces characters.</p>\n"
    }
   },
   "window": {
    "!doc": "<p>Represents a DOM window.</p>\n\n<pre><code>var document = new <a href=\"#!/api/CKEDITOR.dom.window\" rel=\"CKEDITOR.dom.window\" class=\"docClass\">CKEDITOR.dom.window</a>( window );\n</code></pre>\n",
    "prototype": {
     "!type": "fn(domWindow: ?)",
     "focus": {
      "!type": "fn() -> !this",
      "!doc": "<p>Moves the selection focus to this window.</p>\n\n<pre><code>var win = new <a href=\"#!/api/CKEDITOR.dom.window\" rel=\"CKEDITOR.dom.window\" class=\"docClass\">CKEDITOR.dom.window</a>( window );\nwin.focus();\n</code></pre>\n"
     },
     "getFrame": {
      "!type": "fn() -> +CKEDITOR.dom.element",
      "!doc": "<p>Gets the frame element containing this window context.</p>\n"
     },
     "getScrollPosition": {
      "!type": "fn() -> ?",
      "!doc": "<p>Gets the current position of the window's scroll.</p>\n\n<pre><code>var win = new <a href=\"#!/api/CKEDITOR.dom.window\" rel=\"CKEDITOR.dom.window\" class=\"docClass\">CKEDITOR.dom.window</a>( window );\nvar pos = win.getScrollPosition();\nalert( pos.x );\nalert( pos.y );\n</code></pre>\n"
     },
     "getViewPaneSize": {
      "!type": "fn() -> ?",
      "!doc": "<p>Gets the width and height of this window's viewable area.</p>\n\n<pre><code>var win = new <a href=\"#!/api/CKEDITOR.dom.window\" rel=\"CKEDITOR.dom.window\" class=\"docClass\">CKEDITOR.dom.window</a>( window );\nvar size = win.getViewPaneSize();\nalert( size.width );\nalert( size.height );\n</code></pre>\n"
     }
    }
   }
  },
  "dtd": {
   "!doc": "<p>Holds and object representation of the HTML DTD to be used by the\neditor in its internal operations.</p>\n\n<p>Each element in the DTD is represented by a property in this object. Each\nproperty contains the list of elements that can be contained by the element.\nText is represented by the <code>#</code> property.</p>\n\n<p>Several special grouping properties are also available. Their names start\nwith the <code>$</code> character.</p>\n\n<pre><code>// Check if &lt;div&gt; can be contained in a &lt;p&gt; element.\nalert( !!<a href=\"#!/api/CKEDITOR.dtd\" rel=\"CKEDITOR.dtd\" class=\"docClass\">CKEDITOR.dtd</a>[ 'p' ][ 'div' ] ); // false\n\n// Check if &lt;p&gt; can be contained in a &lt;div&gt; element.\nalert( !!<a href=\"#!/api/CKEDITOR.dtd\" rel=\"CKEDITOR.dtd\" class=\"docClass\">CKEDITOR.dtd</a>[ 'div' ][ 'p' ] ); // true\n\n// Check if &lt;p&gt; is a block element.\nalert( !!<a href=\"#!/api/CKEDITOR.dtd-property-S-block\" rel=\"CKEDITOR.dtd-property-S-block\" class=\"docClass\">CKEDITOR.dtd.$block</a>[ 'p' ] ); // true\n</code></pre>\n",
   "$block": {
    "!type": "?",
    "!doc": "<p>List of block elements, like <code>&lt;p&gt;</code> or <code>&lt;div&gt;</code>.</p>\n"
   },
   "$blockLimit": {
    "!type": "?",
    "!doc": "<p>List of elements that contain other blocks, in which block-level operations should be limited,\nthis property is not intended to be checked directly, use <a href=\"#!/api/CKEDITOR.dom.elementPath-property-blockLimit\" rel=\"CKEDITOR.dom.elementPath-property-blockLimit\" class=\"docClass\">CKEDITOR.dom.elementPath.blockLimit</a> instead.</p>\n\n<p>Some examples of editor behaviors that are impacted by block limits:</p>\n\n<ul>\n<li>Enter key never split a block-limit element;</li>\n<li>Style application is constraint by the block limit of the current selection.</li>\n<li>Pasted html will be inserted into the block limit of the current selection.</li>\n</ul>\n\n\n<p><strong>Note:</strong> As an exception <code>&lt;li&gt;</code> is not considered as a block limit, as it's generally used as a text block.</p>\n"
   },
   "$cdata": {
    "!type": "?",
    "!doc": "<p>List of elements that contain character data.</p>\n"
   },
   "$editable": {
    "!type": "?",
    "!doc": "<p>List of elements that are accepted as inline editing hosts.</p>\n"
   },
   "$empty": {
    "!type": "?",
    "!doc": "<p>List of empty (self-closing) elements, like <code>&lt;br&gt;</code> or <code>&lt;img&gt;</code>.</p>\n"
   },
   "$inline": {
    "!type": "?",
    "!doc": "<p>List of inline (<code>&lt;span&gt;</code> like) elements.</p>\n"
   },
   "$intermediate": {
    "!type": "?",
    "!doc": "<p>List of elements that are not to exist standalone that must live under it's parent element.</p>\n"
   },
   "$list": {
    "!type": "?",
    "!doc": "<p>List of list root elements.</p>\n"
   },
   "$listItem": {
    "!type": "?",
    "!doc": "<p>List of list item elements, like <code>&lt;li&gt;</code> or <code>&lt;dd&gt;</code>.</p>\n"
   },
   "$nonBodyContent": {
    "!type": "?",
    "!doc": "<p>List of elements which may live outside body.</p>\n"
   },
   "$nonEditable": {
    "!type": "?",
    "!doc": "<p>Elements that accept text nodes, but are not possible to edit into the browser.</p>\n"
   },
   "$object": {
    "!type": "?",
    "!doc": "<p>Elements that are considered objects, therefore selected as a whole in the editor.</p>\n"
   },
   "$removeEmpty": {
    "!type": "?",
    "!doc": "<p>List of elements that can be ignored if empty, like <code>&lt;b&gt;</code> or <code>&lt;span&gt;</code>.</p>\n"
   },
   "$tabIndex": {
    "!type": "?",
    "!doc": "<p>List of elements that have tabindex set to zero by default.</p>\n"
   },
   "$tableContent": {
    "!type": "?",
    "!doc": "<p>List of elements used inside the <code>&lt;table&gt;</code> element, like <code>&lt;tbody&gt;</code> or <code>&lt;td&gt;</code>.</p>\n"
   },
   "$transparent": {
    "!type": "?",
    "!doc": "<p>List of \"transparent\" elements. See <a href=\"http://dev.w3.org/html5/markup/terminology.html#transparent\">W3C's definition of \"transparent\" element</a>.</p>\n"
   }
  },
  "editable": {
   "!doc": "<p>Editable class which provides all editing related activities by\nthe <code>contenteditable</code> element, dynamically get attached to editor instance.</p>\n",
   "prototype": {
    "!type": "fn(editor: +CKEDITOR.editor, element: +HTMLElement|+CKEDITOR.dom.element)",
    "hasFocus": {
     "!type": "bool",
     "!doc": "<p>Indicates whether the editable element gained focus.</p>\n"
    },
    "status": {
     "!type": "string",
     "!doc": "<p>Indicates the initialization status of the editable element. The following statuses are available:</p>\n\n<ul>\n<li><strong>unloaded</strong> &ndash; the initial state. The editable's instance was created but\nis not fully loaded (in particular it has no data).</li>\n<li><strong>ready</strong> &ndash; the editable is fully initialized. The <code>ready</code> status is set after\nthe first <a href=\"#!/api/CKEDITOR.editor-method-setData\" rel=\"CKEDITOR.editor-method-setData\" class=\"docClass\">CKEDITOR.editor.setData</a> is called.</li>\n<li><strong>detached</strong> &ndash; the editable was detached.</li>\n</ul>\n\n"
    },
    "attachClass": {
     "!type": "fn(className: string) -> !this",
     "!doc": "<p>Adds a CSS class name to this editable that needs to be removed on detaching.</p>\n"
    },
    "attachListener": {
     "!type": "fn(obj: +CKEDITOR.event, eventName: string, listenerFunction: fn(), scopeObj?: ?, listenerData?: ?, priority?: number) -> ?",
     "!doc": "<p>Registers an event listener that needs to be removed when detaching this editable.\nThis means that it will be automatically removed when <a href=\"#!/api/CKEDITOR.editable-method-detach\" rel=\"CKEDITOR.editable-method-detach\" class=\"docClass\">detach</a> is executed,\nfor example on <a href=\"#!/api/CKEDITOR.editor-method-setMode\" rel=\"CKEDITOR.editor-method-setMode\" class=\"docClass\">changing editor mode</a> or destroying editor.</p>\n\n<p>Except for <code>obj</code> all other arguments have the same meaning as in <a href=\"#!/api/CKEDITOR.event-method-on\" rel=\"CKEDITOR.event-method-on\" class=\"docClass\">CKEDITOR.event.on</a>.</p>\n\n<p>This method is strongly related to the <a href=\"#!/api/CKEDITOR.editor-event-contentDom\" rel=\"CKEDITOR.editor-event-contentDom\" class=\"docClass\">CKEDITOR.editor.contentDom</a> and\n<a href=\"#!/api/CKEDITOR.editor-event-contentDomUnload\" rel=\"CKEDITOR.editor-event-contentDomUnload\" class=\"docClass\">CKEDITOR.editor.contentDomUnload</a> events, because they are fired\nwhen an editable is being attached and detached. Therefore, this method is usually used\nin the following way:</p>\n\n<pre><code>editor.on( 'contentDom', function() {\n    var editable = editor.editable();\n    editable.attachListener( editable, 'mousedown', function() {\n        // ...\n    } );\n} );\n</code></pre>\n\n<p>This code will attach the <code>mousedown</code> listener every time a new editable is attached\nto the editor, which in classic (<code>iframe</code>-based) editor happens every time the\ndata or the mode is set. This listener will also be removed when that editable is detached.</p>\n\n<p>It is also possible to attach a listener to another object (e.g. to a document).</p>\n\n<pre><code>editor.on( 'contentDom', function() {\n    editor.editable().attachListener( editor.document, 'mousedown', function() {\n        // ...\n    } );\n} );\n</code></pre>\n"
    },
    "changeAttr": {
     "!type": "fn(attr: string, val: string) -> !this",
     "!doc": "<p>Make an attribution change that would be reverted on editable detaching.</p>\n"
    },
    "clearListeners": {
     "!type": "fn() -> !this",
     "!doc": "<p>Remove all event listeners registered from <a href=\"#!/api/CKEDITOR.editable-method-attachListener\" rel=\"CKEDITOR.editable-method-attachListener\" class=\"docClass\">attachListener</a>.</p>\n"
    },
    "detach": {
     "!type": "fn() -> !this",
     "!doc": "<p>Detach this editable object from the DOM (remove classes, listeners, etc.)</p>\n"
    },
    "fixInitialSelection": {
     "!type": "fn() -> !this",
     "!doc": "<p>Fixes the selection and focus which may be in incorrect state after\neditable's inner HTML was overwritten.</p>\n\n<p>If the editable did not have focus, then the selection will be fixed when the editable\nis focused for the first time. If the editable already had focus, then the selection will\nbe fixed immediately.</p>\n\n<p>To understand the problem see:</p>\n\n<ul>\n<li>http://tests.ckeditor.dev:1030/tests/core/selection/manual/focusaftersettingdata</li>\n<li>http://tests.ckeditor.dev:1030/tests/core/selection/manual/focusafterundoing</li>\n<li>http://tests.ckeditor.dev:1030/tests/core/selection/manual/selectionafterfocusing</li>\n<li>http://tests.ckeditor.dev:1030/tests/plugins/newpage/manual/selectionafternewpage</li>\n</ul>\n\n"
    },
    "getData": {
     "!type": "fn(isSnapshot: ?) -> !this",
     "!doc": "<p>@see <a href=\"#!/api/CKEDITOR.editor-method-getData\" rel=\"CKEDITOR.editor-method-getData\" class=\"docClass\">CKEDITOR.editor.getData</a></p>\n"
    },
    "insertElement": {
     "!type": "fn(element: ?, range: ?) -> !this",
     "!doc": "<p>@see <a href=\"#!/api/CKEDITOR.editor-method-insertElement\" rel=\"CKEDITOR.editor-method-insertElement\" class=\"docClass\">CKEDITOR.editor.insertElement</a></p>\n"
    },
    "insertElementIntoRange": {
     "!type": "fn(element: +CKEDITOR.dom.element, range: +CKEDITOR.dom.range) -> bool",
     "!doc": "<p>Inserts an element into the position in the editor determined by range.</p>\n"
    },
    "insertElementIntoSelection": {
     "!type": "fn(element: +CKEDITOR.dom.element) -> !this",
     "!doc": "<p>Inserts an element into the currently selected position in the editor.</p>\n"
    },
    "insertHtml": {
     "!type": "fn(data: ?, mode: ?) -> !this",
     "!doc": "<p>@see <a href=\"#!/api/CKEDITOR.editor-method-insertHtml\" rel=\"CKEDITOR.editor-method-insertHtml\" class=\"docClass\">CKEDITOR.editor.insertHtml</a></p>\n"
    },
    "insertText": {
     "!type": "fn(text: ?) -> !this",
     "!doc": "<p>@see <a href=\"#!/api/CKEDITOR.editor-method-insertText\" rel=\"CKEDITOR.editor-method-insertText\" class=\"docClass\">CKEDITOR.editor.insertText</a></p>\n"
    },
    "isInline": {
     "!type": "fn() -> bool",
     "!doc": "<p>Checks if the editable is one of the host page elements, indicates\nan inline editing environment.</p>\n"
    },
    "on": {
     "!type": "fn(name: ?, fn: ?) -> !this",
     "!doc": "<p>Overrides <a href=\"#!/api/CKEDITOR.dom.element-method-on\" rel=\"CKEDITOR.dom.element-method-on\" class=\"docClass\">CKEDITOR.dom.element.on</a> to have special <code>focus/blur</code> handling.\nThe <code>focusin/focusout</code> events are used in IE to replace regular <code>focus/blur</code> events\nbecause we want to avoid the asynchronous nature of later ones.</p>\n"
    },
    "restoreAttrs": {
     "!type": "fn() -> !this",
     "!doc": "<p>Restore all attribution changes made by {@link <a href=\"#!/api/CKEDITOR.editable-method-changeAttr\" rel=\"CKEDITOR.editable-method-changeAttr\" class=\"docClass\">changeAttr</a> }.</p>\n"
    },
    "setData": {
     "!type": "fn(data: ?, isSnapshot: ?) -> !this",
     "!doc": "<p>@see <a href=\"#!/api/CKEDITOR.editor-method-setData\" rel=\"CKEDITOR.editor-method-setData\" class=\"docClass\">CKEDITOR.editor.setData</a></p>\n"
    },
    "setReadOnly": {
     "!type": "fn(isReadOnly: bool) -> !this",
     "!doc": "<p>Change the read-only state on this editable.</p>\n"
    },
    "setup": {
     "!type": "fn() -> !this",
     "!doc": "<p>Editable element bootstrapping.</p>\n"
    }
   }
  },
  "editor": {
   "!doc": "<p>Represents an editor instance. This constructor should be rarely\nused in favor of the <a href=\"#!/api/CKEDITOR\" rel=\"CKEDITOR\" class=\"docClass\">CKEDITOR</a> editor creation functions.</p>\n",
   "prototype": {
    "!type": "fn(instanceConfig?: ?, element?: +CKEDITOR.dom.element, mode?: number)",
    "activeEnterMode": {
     "!type": "number",
     "!doc": "<p>The dynamic Enter mode which should be used in the current context (selection location).\nBy default it equals the <a href=\"#!/api/CKEDITOR.editor-property-enterMode\" rel=\"CKEDITOR.editor-property-enterMode\" class=\"docClass\">enterMode</a> and it can be changed by the <a href=\"#!/api/CKEDITOR.editor-method-setActiveEnterMode\" rel=\"CKEDITOR.editor-method-setActiveEnterMode\" class=\"docClass\">setActiveEnterMode</a> method.</p>\n\n<p>See also the <a href=\"#!/api/CKEDITOR.editor-method-setActiveEnterMode\" rel=\"CKEDITOR.editor-method-setActiveEnterMode\" class=\"docClass\">setActiveEnterMode</a> method for an explanation of dynamic settings.</p>\n"
    },
    "activeFilter": {
     "!type": "+CKEDITOR.filter",
     "!doc": "<p>The active filter instance which should be used in the current context (location selection).\nThis instance will be used to make a decision which commands, buttons and other\n<a href=\"#!/api/CKEDITOR.feature\" rel=\"CKEDITOR.feature\" class=\"docClass\">features</a> can be enabled.</p>\n\n<p>By default it equals the <a href=\"#!/api/CKEDITOR.editor-property-filter\" rel=\"CKEDITOR.editor-property-filter\" class=\"docClass\">filter</a> and it can be changed by the <a href=\"#!/api/CKEDITOR.editor-method-setActiveFilter\" rel=\"CKEDITOR.editor-method-setActiveFilter\" class=\"docClass\">setActiveFilter</a> method.</p>\n\n<pre><code>editor.on( 'activeFilterChange', function() {\n    if ( editor.activeFilter.check( 'cite' ) )\n        // Do something when &lt;cite&gt; was enabled - e.g. enable a button.\n    else\n        // Otherwise do something else.\n} );\n</code></pre>\n\n<p>See also the <a href=\"#!/api/CKEDITOR.editor-method-setActiveEnterMode\" rel=\"CKEDITOR.editor-method-setActiveEnterMode\" class=\"docClass\">setActiveEnterMode</a> method for an explanation of dynamic settings.</p>\n"
    },
    "activeShiftEnterMode": {
     "!type": "number",
     "!doc": "<p>See the <a href=\"#!/api/CKEDITOR.editor-property-activeEnterMode\" rel=\"CKEDITOR.editor-property-activeEnterMode\" class=\"docClass\">activeEnterMode</a> property.</p>\n"
    },
    "blockless": {
     "!type": "bool",
     "!doc": "<p>Indicates that the editor is running in an environment where\nno block elements are accepted inside the content.</p>\n\n<p>This can be for example inline editor based on an <code>&lt;h1&gt;</code> element.</p>\n"
    },
    "config": {
     "!type": "+CKEDITOR.config",
     "!doc": "<p>The configuration for this editor instance. It inherits all\nsettings defined in <a href=\"#!/api/CKEDITOR.config\" rel=\"CKEDITOR.config\" class=\"docClass\">CKEDITOR.config</a>, combined with settings\nloaded from custom configuration files and those defined inline in\nthe page when creating the editor.</p>\n\n<pre><code>var editor = CKEDITOR.instances.editor1;\nalert( editor.config.skin ); // e.g. 'moono'\n</code></pre>\n"
    },
    "container": {
     "!type": "+CKEDITOR.dom.element",
     "!doc": "<p>The outermost element in the DOM tree in which the editable element resides. It is provided\nby a specific editor creator after the editor UI is created and is not intended to\nbe modified.</p>\n\n<pre><code>var editor = CKEDITOR.instances.editor1;\nalert( editor.container.getName() ); // 'span'\n</code></pre>\n"
    },
    "dataProcessor": {
     "!type": "+CKEDITOR.dataProcessor",
     "!doc": "<p>If defined, points to the data processor which is responsible for translating\nand transforming the editor data on input and output.\nGenerally it will point to an instance of <a href=\"#!/api/CKEDITOR.htmlDataProcessor\" rel=\"CKEDITOR.htmlDataProcessor\" class=\"docClass\">CKEDITOR.htmlDataProcessor</a>,\nwhich handles HTML data. The editor may also handle other data formats by\nusing different data processors provided by specific plugins.</p>\n"
    },
    "document": {
     "!type": "+CKEDITOR.dom.document",
     "!doc": "<p>The document that stores the editor content.</p>\n\n<ul>\n<li>For the classic (<code>iframe</code>-based) editor it is equal to the document inside the\n<code>iframe</code> containing the editable element.</li>\n<li>For the inline editor it is equal to <a href=\"#!/api/CKEDITOR-property-document\" rel=\"CKEDITOR-property-document\" class=\"docClass\">CKEDITOR.document</a>.</li>\n</ul>\n\n\n<p>The document object is available after the <a href=\"#!/api/CKEDITOR.editor-event-contentDom\" rel=\"CKEDITOR.editor-event-contentDom\" class=\"docClass\">contentDom</a> event is fired\nand may be invalidated when the <a href=\"#!/api/CKEDITOR.editor-event-contentDomUnload\" rel=\"CKEDITOR.editor-event-contentDomUnload\" class=\"docClass\">contentDomUnload</a> event is fired\n(classic editor only).</p>\n\n<pre><code>editor.on( 'contentDom', function() {\n    console.log( editor.document );\n} );\n</code></pre>\n"
    },
    "element": {
     "!type": "+CKEDITOR.dom.element",
     "!doc": "<p>The original host page element upon which the editor is created. It is only\nsupposed to be provided by the particular editor creator and is not subject to\nbe modified.</p>\n"
    },
    "elementMode": {
     "!type": "number",
     "!doc": "<p>This property indicates the way this instance is associated with the <a href=\"#!/api/CKEDITOR.editor-property-element\" rel=\"CKEDITOR.editor-property-element\" class=\"docClass\">element</a>.\nSee also <a href=\"#!/api/CKEDITOR-property-ELEMENT_MODE_INLINE\" rel=\"CKEDITOR-property-ELEMENT_MODE_INLINE\" class=\"docClass\">CKEDITOR.ELEMENT_MODE_INLINE</a> and <a href=\"#!/api/CKEDITOR-property-ELEMENT_MODE_REPLACE\" rel=\"CKEDITOR-property-ELEMENT_MODE_REPLACE\" class=\"docClass\">CKEDITOR.ELEMENT_MODE_REPLACE</a>.</p>\n"
    },
    "enterMode": {
     "!type": "number",
     "!doc": "<p>The main (static) Enter mode which is a validated version of the <a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">CKEDITOR.config.enterMode</a> setting.\nCurrently only one rule exists &mdash; <a href=\"#!/api/CKEDITOR.editor-property-blockless\" rel=\"CKEDITOR.editor-property-blockless\" class=\"docClass\">blockless editors</a> may have\nEnter modes set only to <a href=\"#!/api/CKEDITOR-property-ENTER_BR\" rel=\"CKEDITOR-property-ENTER_BR\" class=\"docClass\">CKEDITOR.ENTER_BR</a>.</p>\n"
    },
    "filter": {
     "!type": "+CKEDITOR.filter",
     "!doc": "<p>The main filter instance used for input data filtering, data\ntransformations, and activation of features.</p>\n\n<p>It points to a <a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a> instance set up based on\neditor configuration.</p>\n"
    },
    "focusManager": {
     "!type": "+CKEDITOR.focusManager",
     "!doc": "<p>Controls the focus state of this editor instance. This property\nis rarely used for normal API operations. It is mainly\ntargeted at developers adding UI elements to the editor interface.</p>\n"
    },
    "id": {
     "!type": "string",
     "!doc": "<p>A unique random string assigned to each editor instance on the page.</p>\n"
    },
    "keystrokeHandler": {
     "!type": "+CKEDITOR.keystrokeHandler",
     "!doc": "<p>Controls keystroke typing in this editor instance.</p>\n"
    },
    "lang": {
     "!type": "?",
     "!doc": "<p>An object that contains all language strings used by the editor interface.</p>\n\n<pre><code>alert( editor.lang.basicstyles.bold ); // e.g. 'Negrito' (if the language is set to Portuguese)\n</code></pre>\n"
    },
    "langCode": {
     "!type": "string",
     "!doc": "<p>The code for the language resources that have been loaded\nfor the user interface elements of this editor instance.</p>\n\n<pre><code>alert( editor.langCode ); // e.g. 'en'\n</code></pre>\n"
    },
    "mode": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired after setting the editing mode. See also <a href=\"#!/api/CKEDITOR.editor-event-beforeSetMode\" rel=\"CKEDITOR.editor-event-beforeSetMode\" class=\"docClass\">beforeSetMode</a> and <a href=\"#!/api/CKEDITOR.editor-event-beforeModeUnload\" rel=\"CKEDITOR.editor-event-beforeModeUnload\" class=\"docClass\">beforeModeUnload</a></p>\n"
    },
    "name": {
     "!type": "string",
     "!doc": "<p>A unique identifier of this editor instance.</p>\n\n<p><strong>Note:</strong> It will be originated from the <code>id</code> or <code>name</code>\nattribute of the <a href=\"#!/api/CKEDITOR.editor-property-element\" rel=\"CKEDITOR.editor-property-element\" class=\"docClass\">element</a>, otherwise a name pattern of\n<code>'editor{n}'</code> will be used.</p>\n"
    },
    "plugins": {
     "!type": "?",
     "!doc": "<p>An object that contains references to all plugins used by this\neditor instance.</p>\n\n<pre><code>alert( editor.plugins.dialog.path ); // e.g. 'http://example.com/ckeditor/plugins/dialog/'\n\n// Check if a plugin is available.\nif ( editor.plugins.image ) {\n    ...\n}\n</code></pre>\n"
    },
    "readOnly": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Event fired after the <a href=\"#!/api/CKEDITOR.editor-property-readOnly\" rel=\"CKEDITOR.editor-property-readOnly\" class=\"docClass\">readOnly</a> property changes.</p>\n"
    },
    "shiftEnterMode": {
     "!type": "number",
     "!doc": "<p>See the <a href=\"#!/api/CKEDITOR.editor-property-enterMode\" rel=\"CKEDITOR.editor-property-enterMode\" class=\"docClass\">enterMode</a> property.</p>\n"
    },
    "status": {
     "!type": "string",
     "!doc": "<p>Indicates editor initialization status. The following statuses are available:</p>\n\n<ul>\n<li><strong>unloaded</strong>: The initial state &mdash; the editor instance was initialized,\nbut its components (configuration, plugins, language files) are not loaded yet.</li>\n<li><strong>loaded</strong>: The editor components were loaded &mdash; see the <a href=\"#!/api/CKEDITOR.editor-event-loaded\" rel=\"CKEDITOR.editor-event-loaded\" class=\"docClass\">loaded</a> event.</li>\n<li><strong>ready</strong>: The editor is fully initialized and ready &mdash; see the <a href=\"#!/api/CKEDITOR.editor-event-instanceReady\" rel=\"CKEDITOR.editor-event-instanceReady\" class=\"docClass\">instanceReady</a> event.</li>\n<li><strong>destroyed</strong>: The editor was destroyed &mdash; see the <a href=\"#!/api/CKEDITOR.editor-method-destroy\" rel=\"CKEDITOR.editor-method-destroy\" class=\"docClass\">destroy</a> method.</li>\n</ul>\n\n"
    },
    "tabIndex": {
     "!type": "number",
     "!doc": "<p>The <a href=\"http://en.wikipedia.org/wiki/Tabbing_navigation\">tabbing navigation</a> order determined for this editor instance.\nThis can be set by the <code><a href=\"#!/api/CKEDITOR.config-cfg-tabIndex\" rel=\"CKEDITOR.config-cfg-tabIndex\" class=\"docClass\">CKEDITOR.config.tabIndex</a></code>\nsetting or taken from the <code>tabindex</code> attribute of the\n<a href=\"#!/api/CKEDITOR.editor-property-element\" rel=\"CKEDITOR.editor-property-element\" class=\"docClass\">element</a> associated with the editor.</p>\n\n<pre><code>alert( editor.tabIndex ); // e.g. 0\n</code></pre>\n"
    },
    "templates": {
     "!type": "?",
     "!doc": "<p>Contains all UI templates created for this editor instance.</p>\n"
    },
    "title": {
     "!type": "string|bool",
     "!doc": "<p>Indicates the human-readable title of this editor. Although this is a read-only property,\nit can be initialized with <a href=\"#!/api/CKEDITOR.config-cfg-title\" rel=\"CKEDITOR.config-cfg-title\" class=\"docClass\">CKEDITOR.config.title</a>.</p>\n\n<p><strong>Note:</strong> Please do not confuse this property with <a href=\"#!/api/CKEDITOR.editor-property-name\" rel=\"CKEDITOR.editor-property-name\" class=\"docClass\">editor.name</a>\nwhich identifies the instance in the <a href=\"#!/api/CKEDITOR-property-instances\" rel=\"CKEDITOR-property-instances\" class=\"docClass\">CKEDITOR.instances</a> literal.</p>\n"
    },
    "ui": {
     "!type": "+CKEDITOR.ui",
     "!doc": "<p>The namespace containing UI features related to this editor instance.</p>\n"
    },
    "window": {
     "!type": "+CKEDITOR.dom.window",
     "!doc": "<p>The window instance related to the <a href=\"#!/api/CKEDITOR.editor-property-document\" rel=\"CKEDITOR.editor-property-document\" class=\"docClass\">document</a> property.</p>\n\n<p>It is always equal to the <code>editor.document.getWindow()</code>.</p>\n\n<p>See the <a href=\"#!/api/CKEDITOR.editor-property-document\" rel=\"CKEDITOR.editor-property-document\" class=\"docClass\">document</a> property documentation.</p>\n"
    },
    "_attachToForm": {
     "!type": "fn() -> !this",
     "!doc": "<p>Attaches the editor to a form to call <a href=\"#!/api/CKEDITOR.editor-method-updateElement\" rel=\"CKEDITOR.editor-method-updateElement\" class=\"docClass\">updateElement</a> before form submission.\nThis method is called by both creators (<a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">replace</a> and\n<a href=\"#!/api/CKEDITOR-method-inline\" rel=\"CKEDITOR-method-inline\" class=\"docClass\">inline</a>), so there is no reason to call it manually.</p>\n"
    },
    "addCommand": {
     "!type": "fn(commandName: string, commandDefinition: +CKEDITOR.commandDefinition) -> !this",
     "!doc": "<p>Adds a command definition to the editor instance. Commands added with\nthis function can be executed later with the <code><a href=\"#!/api/CKEDITOR.editor-method-execCommand\" rel=\"CKEDITOR.editor-method-execCommand\" class=\"docClass\">execCommand</a></code> method.</p>\n\n<pre><code>    editorInstance.addCommand( 'sample', {\n        exec: function( editor ) {\n            alert( 'Executing a command for the editor name \"' + editor.name + '\"!' );\n        }\n    } );\n</code></pre>\n"
    },
    "addFeature": {
     "!type": "fn(feature: +CKEDITOR.feature) -> bool",
     "!doc": "<p>Shorthand for <a href=\"#!/api/CKEDITOR.filter-method-addFeature\" rel=\"CKEDITOR.filter-method-addFeature\" class=\"docClass\">CKEDITOR.filter.addFeature</a>.</p>\n"
    },
    "addMode": {
     "!type": "fn(mode: string, exec: fn()) -> !this",
     "!doc": "<p>Registers an editing mode. This function is to be used mainly by plugins.</p>\n"
    },
    "applyStyle": {
     "!type": "fn(style: +CKEDITOR.style) -> !this",
     "!doc": "<p>Applies the style upon the editor's current selection. Shorthand for\n<a href=\"#!/api/CKEDITOR.style-method-apply\" rel=\"CKEDITOR.style-method-apply\" class=\"docClass\">CKEDITOR.style.apply</a>.</p>\n"
    },
    "attachStyleStateChange": {
     "!type": "fn(style: +CKEDITOR.style, callback: fn()) -> !this",
     "!doc": "<p>Registers a function to be called whenever the selection position changes in the\nediting area. The current state is passed to the function. The possible\nstates are <a href=\"#!/api/CKEDITOR-property-TRISTATE_ON\" rel=\"CKEDITOR-property-TRISTATE_ON\" class=\"docClass\">CKEDITOR.TRISTATE_ON</a> and <a href=\"#!/api/CKEDITOR-property-TRISTATE_OFF\" rel=\"CKEDITOR-property-TRISTATE_OFF\" class=\"docClass\">CKEDITOR.TRISTATE_OFF</a>.</p>\n\n<pre><code>// Create a style object for the &lt;b&gt; element.\nvar style = new <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>( { element: 'b' } );\nvar editor = CKEDITOR.instances.editor1;\neditor.attachStyleStateChange( style, function( state ) {\n    if ( state == <a href=\"#!/api/CKEDITOR-property-TRISTATE_ON\" rel=\"CKEDITOR-property-TRISTATE_ON\" class=\"docClass\">CKEDITOR.TRISTATE_ON</a> )\n        alert( 'The current state for the B element is ON' );\n    else\n        alert( 'The current state for the B element is OFF' );\n} );\n</code></pre>\n"
    },
    "checkDirty": {
     "!type": "fn() -> bool",
     "!doc": "<p>Checks whether the current editor content contains changes when\ncompared to the content loaded into the editor at startup, or to\nthe content available in the editor when <a href=\"#!/api/CKEDITOR.editor-method-resetDirty\" rel=\"CKEDITOR.editor-method-resetDirty\" class=\"docClass\">resetDirty</a>\nwas called.</p>\n\n<pre><code>function beforeUnload( evt ) {\n    if ( CKEDITOR.instances.editor1.checkDirty() )\n        return evt.returnValue = \"You will lose the changes made in the editor.\";\n}\n\nif ( window.addEventListener )\n    window.addEventListener( 'beforeunload', beforeUnload, false );\nelse\n    window.attachEvent( 'onbeforeunload', beforeUnload );\n</code></pre>\n"
    },
    "createRange": {
     "!type": "fn() -> +CKEDITOR.dom.range",
     "!doc": "<p>Shortcut to create a <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a> instance from the editable element.</p>\n"
    },
    "destroy": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired when this editor instance is destroyed. The editor at this\npoint is not usable and this event should be used to perform the clean-up\nin any plugin.</p>\n"
    },
    "editable": {
     "!type": "fn(elementOrEditable: +CKEDITOR.dom.element|+CKEDITOR.editable) -> !this",
     "!doc": "<p>Create, retrieve or detach an editable element of the editor,\nthis method should always be used instead of calling directly <a href=\"#!/api/CKEDITOR.editable\" rel=\"CKEDITOR.editable\" class=\"docClass\">CKEDITOR.editable</a>.</p>\n"
    },
    "elementPath": {
     "!type": "fn(startNode?: +CKEDITOR.dom.node) -> +CKEDITOR.dom.elementPath",
     "!doc": "<p>Returns an <a href=\"#!/api/CKEDITOR.dom.elementPath\" rel=\"CKEDITOR.dom.elementPath\" class=\"docClass\">element path</a> for the selection in the editor.</p>\n"
    },
    "execCommand": {
     "!type": "fn(commandName: string, data?: ?) -> bool",
     "!doc": "<p>Executes a command associated with the editor.</p>\n\n<pre><code>editorInstance.execCommand( 'bold' );\n</code></pre>\n"
    },
    "focus": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired when the editor instance receives the input focus.</p>\n\n<pre><code>editor.on( 'focus', function( e ) {\n    alert( 'The editor named ' + e.editor.name + ' is now focused' );\n} );\n</code></pre>\n"
    },
    "forceNextSelectionCheck": {
     "!type": "fn() -> !this",
     "!doc": "<p>@todo</p>\n"
    },
    "getCommand": {
     "!type": "fn(commandName: string) -> +CKEDITOR.command",
     "!doc": "<p>Gets one of the registered commands. Note that after registering a\ncommand definition with <a href=\"#!/api/CKEDITOR.editor-method-addCommand\" rel=\"CKEDITOR.editor-method-addCommand\" class=\"docClass\">addCommand</a>, it is\ntransformed internally into an instance of\n<a href=\"#!/api/CKEDITOR.command\" rel=\"CKEDITOR.command\" class=\"docClass\">CKEDITOR.command</a>, which will then be returned by this function.</p>\n"
    },
    "getData": {
     "!type": "fn(editor: +CKEDITOR.editor, data: ?)",
     "!doc": "<p>Event fired before the <a href=\"#!/api/CKEDITOR.editor-method-getData\" rel=\"CKEDITOR.editor-method-getData\" class=\"docClass\">getData</a> call returns allowing additional manipulation.</p>\n"
    },
    "getResizable": {
     "!type": "fn(forContents: bool) -> +CKEDITOR.dom.element",
     "!doc": "<p>Gets the element that can be used to check the editor size. This method\nis mainly used by the <code>resize</code> plugin, which adds a UI handle that can be used\nto resize the editor.</p>\n"
    },
    "getSelection": {
     "!type": "fn(forceRealSelection: bool) -> +CKEDITOR.dom.selection",
     "!doc": "<p>Retrieve the editor selection in scope of editable element.</p>\n\n<p><strong>Note:</strong> Since the native browser selection provides only one single\nselection at a time per document, so if editor's editable element has lost focus,\nthis method will return a null value unless the <a href=\"#!/api/CKEDITOR.editor-method-lockSelection\" rel=\"CKEDITOR.editor-method-lockSelection\" class=\"docClass\">lockSelection</a>\nhas been called beforehand so the saved selection is retrieved.</p>\n\n<pre><code>var selection = CKEDITOR.instances.editor1.getSelection();\nalert( selection.getType() );\n</code></pre>\n"
    },
    "getSnapshot": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Internal event to perform the <a href=\"#!/api/CKEDITOR.editor-method-getSnapshot\" rel=\"CKEDITOR.editor-method-getSnapshot\" class=\"docClass\">getSnapshot</a> call.</p>\n"
    },
    "getStylesSet": {
     "!type": "fn(callback: fn()) -> !this",
     "!doc": "<p>Gets the current <code>stylesSet</code> for this instance.</p>\n\n<pre><code>editor.getStylesSet( function( stylesDefinitions ) {} );\n</code></pre>\n\n<p>See also <a href=\"#!/api/CKEDITOR.editor-event-stylesSet\" rel=\"CKEDITOR.editor-event-stylesSet\" class=\"docClass\">stylesSet</a> event.</p>\n"
    },
    "getUiColor": {
     "!type": "fn() -> string",
     "!doc": "<p>Gets the color of the editor user interface.</p>\n\n<pre><code>CKEDITOR.instances.editor1.getUiColor();\n</code></pre>\n"
    },
    "insertElement": {
     "!type": "fn(editor: +CKEDITOR.editor, data: +CKEDITOR.dom.element)",
     "!doc": "<p>Internal event to perform the <a href=\"#!/api/CKEDITOR.editor-method-insertElement\" rel=\"CKEDITOR.editor-method-insertElement\" class=\"docClass\">insertElement</a> call.</p>\n"
    },
    "insertHtml": {
     "!type": "fn(editor: +CKEDITOR.editor, data: ?)",
     "!doc": "<p>Internal event to perform the <a href=\"#!/api/CKEDITOR.editor-method-insertHtml\" rel=\"CKEDITOR.editor-method-insertHtml\" class=\"docClass\">insertHtml</a> call.</p>\n"
    },
    "insertText": {
     "!type": "fn(editor: +CKEDITOR.editor, data: string)",
     "!doc": "<p>Internal event to perform the <a href=\"#!/api/CKEDITOR.editor-method-insertText\" rel=\"CKEDITOR.editor-method-insertText\" class=\"docClass\">insertText</a> call.</p>\n"
    },
    "loadSnapshot": {
     "!type": "fn(editor: +CKEDITOR.editor, data: string)",
     "!doc": "<p>Internal event to perform the <a href=\"#!/api/CKEDITOR.editor-method-loadSnapshot\" rel=\"CKEDITOR.editor-method-loadSnapshot\" class=\"docClass\">loadSnapshot</a> call.</p>\n"
    },
    "lockSelection": {
     "!type": "fn(sel?: +CKEDITOR.dom.selection) -> bool",
     "!doc": "<p>Locks the selection made in the editor in order to make it possible to\nmanipulate it without browser interference. A locked selection is\ncached and remains unchanged until it is released with the\n<a href=\"#!/api/CKEDITOR.editor-method-unlockSelection\" rel=\"CKEDITOR.editor-method-unlockSelection\" class=\"docClass\">unlockSelection</a> method.</p>\n"
    },
    "removeStyle": {
     "!type": "fn(style: +CKEDITOR.style) -> !this",
     "!doc": "<p>Removes the style from the editor's current selection. Shorthand for\n<a href=\"#!/api/CKEDITOR.style-method-remove\" rel=\"CKEDITOR.style-method-remove\" class=\"docClass\">CKEDITOR.style.remove</a>.</p>\n"
    },
    "resetDirty": {
     "!type": "fn() -> !this",
     "!doc": "<p>Resets the \"dirty state\" of the editor so subsequent calls to\n<a href=\"#!/api/CKEDITOR.editor-method-checkDirty\" rel=\"CKEDITOR.editor-method-checkDirty\" class=\"docClass\">checkDirty</a> will return <code>false</code> if the user will not\nhave made further changes to the content.</p>\n\n<pre><code>alert( editor.checkDirty() ); // e.g. true\neditor.resetDirty();\nalert( editor.checkDirty() ); // false\n</code></pre>\n"
    },
    "resize": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired after the editor instance is resized through\nthe <a href=\"#!/api/CKEDITOR.editor-method-resize\" rel=\"CKEDITOR.editor-method-resize\" class=\"docClass\">CKEDITOR.resize</a> method.</p>\n"
    },
    "selectionChange": {
     "!type": "fn(editor: +CKEDITOR.editor, data: ?)",
     "!doc": "<p>Fired when selection inside editor has been changed. Note that this event\nis fired only when selection's start element (container of a selecion start)\nchanges, not on every possible selection change. Thanks to that <code>selectionChange</code>\nis fired less frequently, but on every context\n(the <a href=\"#!/api/CKEDITOR.editor-method-elementPath\" rel=\"CKEDITOR.editor-method-elementPath\" class=\"docClass\">elements path</a> holding selection's start) change.</p>\n"
    },
    "setActiveEnterMode": {
     "!type": "fn(enterMode: number, shiftEnterMode: number) -> !this",
     "!doc": "<p>Sets the active Enter modes: (<a href=\"#!/api/CKEDITOR.editor-property-enterMode\" rel=\"CKEDITOR.editor-property-enterMode\" class=\"docClass\">enterMode</a> and <a href=\"#!/api/CKEDITOR.editor-property-shiftEnterMode\" rel=\"CKEDITOR.editor-property-shiftEnterMode\" class=\"docClass\">shiftEnterMode</a>).\nFires the <a href=\"#!/api/CKEDITOR.editor-event-activeEnterModeChange\" rel=\"CKEDITOR.editor-event-activeEnterModeChange\" class=\"docClass\">activeEnterModeChange</a> event.</p>\n\n<p>Prior to CKEditor 4.3 Enter modes were static and it was enough to check <a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">CKEDITOR.config.enterMode</a>\nand <a href=\"#!/api/CKEDITOR.config-cfg-shiftEnterMode\" rel=\"CKEDITOR.config-cfg-shiftEnterMode\" class=\"docClass\">CKEDITOR.config.shiftEnterMode</a> when implementing a feature which should depend on the Enter modes.\nSince CKEditor 4.3 these options are source of initial:</p>\n\n<ul>\n<li>static <a href=\"#!/api/CKEDITOR.editor-property-enterMode\" rel=\"CKEDITOR.editor-property-enterMode\" class=\"docClass\">enterMode</a> and <a href=\"#!/api/CKEDITOR.editor-property-shiftEnterMode\" rel=\"CKEDITOR.editor-property-shiftEnterMode\" class=\"docClass\">shiftEnterMode</a> values,</li>\n<li>dynamic <a href=\"#!/api/CKEDITOR.editor-property-activeEnterMode\" rel=\"CKEDITOR.editor-property-activeEnterMode\" class=\"docClass\">activeEnterMode</a> and <a href=\"#!/api/CKEDITOR.editor-property-activeShiftEnterMode\" rel=\"CKEDITOR.editor-property-activeShiftEnterMode\" class=\"docClass\">activeShiftEnterMode</a> values.</li>\n</ul>\n\n\n<p>However, the dynamic Enter modes can be changed during runtime by using this method, to reflect the selection context.\nFor example, if selection is moved to the widget's nested editable which\nis a <a href=\"#!/api/CKEDITOR.editor-property-blockless\" rel=\"CKEDITOR.editor-property-blockless\" class=\"docClass\">blockless one</a>, then the active Enter modes should be changed to <a href=\"#!/api/CKEDITOR-property-ENTER_BR\" rel=\"CKEDITOR-property-ENTER_BR\" class=\"docClass\">CKEDITOR.ENTER_BR</a>\n(in this case <a href=\"#!/guide/dev_widgets\">Widget System</a> takes care of that).</p>\n\n<p><strong>Note:</strong> This method should not be used to configure the editor &ndash; use <a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">CKEDITOR.config.enterMode</a> and\n<a href=\"#!/api/CKEDITOR.config-cfg-shiftEnterMode\" rel=\"CKEDITOR.config-cfg-shiftEnterMode\" class=\"docClass\">CKEDITOR.config.shiftEnterMode</a> instead. This method should only be used to dynamically change\nEnter modes during runtime based on selection changes.\nKeep in mind that changed Enter mode may be overwritten by another plugin/feature when it decided that\nthe changed context requires this.</p>\n\n<p><strong>Note:</strong> In case of blockless editor (inline editor based on an element which cannot contain block elements\n&mdash; see <a href=\"#!/api/CKEDITOR.editor-property-blockless\" rel=\"CKEDITOR.editor-property-blockless\" class=\"docClass\">blockless</a>) only <a href=\"#!/api/CKEDITOR-property-ENTER_BR\" rel=\"CKEDITOR-property-ENTER_BR\" class=\"docClass\">CKEDITOR.ENTER_BR</a> is a valid Enter mode. Therefore\nthis method will not allow to set other values.</p>\n\n<p><strong>Note:</strong> Changing the <a href=\"#!/api/CKEDITOR.editor-property-activeFilter\" rel=\"CKEDITOR.editor-property-activeFilter\" class=\"docClass\">active filter</a> may cause the Enter mode to change if default Enter modes\nare not allowed by the new filter.</p>\n"
    },
    "setActiveFilter": {
     "!type": "fn(filter: +CKEDITOR.filter) -> !this",
     "!doc": "<p>Sets the active filter (<a href=\"#!/api/CKEDITOR.editor-property-activeFilter\" rel=\"CKEDITOR.editor-property-activeFilter\" class=\"docClass\">activeFilter</a>). Fires the <a href=\"#!/api/CKEDITOR.editor-event-activeFilterChange\" rel=\"CKEDITOR.editor-event-activeFilterChange\" class=\"docClass\">activeFilterChange</a> event.</p>\n\n<pre><code>// Set active filter which allows only 4 elements.\n// Buttons like Bold, Italic will be disabled.\nvar filter = new <a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a>( 'p strong em br' );\neditor.setActiveFilter( filter );\n</code></pre>\n\n<p>Setting a new filter will also change the <a href=\"#!/api/CKEDITOR.editor-method-setActiveEnterMode\" rel=\"CKEDITOR.editor-method-setActiveEnterMode\" class=\"docClass\">active Enter modes</a> to the first values\nallowed by the new filter (see <a href=\"#!/api/CKEDITOR.filter-method-getAllowedEnterMode\" rel=\"CKEDITOR.filter-method-getAllowedEnterMode\" class=\"docClass\">CKEDITOR.filter.getAllowedEnterMode</a>).</p>\n"
    },
    "setData": {
     "!type": "fn(editor: +CKEDITOR.editor, data: ?)",
     "!doc": "<p>Event fired before the <a href=\"#!/api/CKEDITOR.editor-method-setData\" rel=\"CKEDITOR.editor-method-setData\" class=\"docClass\">setData</a> call is executed allowing additional manipulation.</p>\n"
    },
    "setKeystroke": {
     "!type": "fn(keystroke: number|[?], behavior?: string|bool) -> !this",
     "!doc": "<p>Assigns keystrokes associated with editor commands.</p>\n\n<pre><code>editor.setKeystroke( <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + 115, 'save' ); // Assigned Ctrl+S to the \"save\" command.\neditor.setKeystroke( <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + 115, false );  // Disabled Ctrl+S keystroke assignment.\neditor.setKeystroke( [\n    [ <a href=\"#!/api/CKEDITOR-property-ALT\" rel=\"CKEDITOR-property-ALT\" class=\"docClass\">CKEDITOR.ALT</a> + 122, false ],\n    [ <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + 121, 'link' ],\n    [ <a href=\"#!/api/CKEDITOR-property-SHIFT\" rel=\"CKEDITOR-property-SHIFT\" class=\"docClass\">CKEDITOR.SHIFT</a> + 120, 'bold' ]\n] );\n</code></pre>\n\n<p>This method may be used in the following cases:</p>\n\n<ul>\n<li>By plugins (like <code>link</code> or <code>basicstyles</code>) to set their keystrokes when plugins are being loaded.</li>\n<li>During the runtime to modify existing keystrokes.</li>\n</ul>\n\n\n<p>The editor handles keystroke configuration in the following order:</p>\n\n<ol>\n<li>Plugins use this method to define default keystrokes.</li>\n<li>Editor extends default keystrokes with <a href=\"#!/api/CKEDITOR.config-cfg-keystrokes\" rel=\"CKEDITOR.config-cfg-keystrokes\" class=\"docClass\">CKEDITOR.config.keystrokes</a>.</li>\n<li>Editor blocks keystrokes defined in <a href=\"#!/api/CKEDITOR.config-cfg-blockedKeystrokes\" rel=\"CKEDITOR.config-cfg-blockedKeystrokes\" class=\"docClass\">CKEDITOR.config.blockedKeystrokes</a>.</li>\n</ol>\n\n\n<p>You can then set new keystrokes using this method during the runtime.</p>\n"
    },
    "setMode": {
     "!type": "fn(newMode?: string, callback?: fn()) -> !this",
     "!doc": "<p>Changes the editing mode of this editor instance.</p>\n\n<p><strong>Note:</strong> The mode switch could be asynchronous depending on the mode provider.\nUse the <code>callback</code> to hook subsequent code.</p>\n\n<pre><code>// Switch to \"source\" view.\nCKEDITOR.instances.editor1.setMode( 'source' );\n// Switch to \"wysiwyg\" view and be notified on completion.\nCKEDITOR.instances.editor1.setMode( 'wysiwyg', function() { alert( 'wysiwyg mode loaded!' ); } );\n</code></pre>\n"
    },
    "setReadOnly": {
     "!type": "fn(isReadOnly?: bool) -> !this",
     "!doc": "<p>Puts or restores the editor into the read-only state. When in read-only,\nthe user is not able to change the editor content, but can still use\nsome editor features. This function sets the <a href=\"#!/api/CKEDITOR.editor-property-readOnly\" rel=\"CKEDITOR.editor-property-readOnly\" class=\"docClass\">readOnly</a>\nproperty of the editor, firing the <a href=\"#!/api/CKEDITOR.editor-event-readOnly\" rel=\"CKEDITOR.editor-event-readOnly\" class=\"docClass\">readOnly</a> event.</p>\n\n<p><strong>Note:</strong> The current editing area will be reloaded.</p>\n"
    },
    "setUiColor": {
     "!type": "fn(color: string) -> !this",
     "!doc": "<p>Sets the color of the editor user interface. This method accepts a color value in\nhexadecimal notation, with a <code>#</code> character (e.g. #ffffff).</p>\n\n<pre><code>    CKEDITOR.instances.editor1.setUiColor( '#ff00ff' );\n</code></pre>\n"
    },
    "unlockSelection": {
     "!type": "fn(restore?: bool) -> !this",
     "!doc": "<p>Unlocks the selection made in the editor and locked with the\n<a href=\"#!/api/CKEDITOR.editor-method-unlockSelection\" rel=\"CKEDITOR.editor-method-unlockSelection\" class=\"docClass\">unlockSelection</a> method. An unlocked selection\nis no longer cached and can be changed.</p>\n"
    },
    "updateElement": {
     "!type": "fn() -> !this",
     "!doc": "<p>Updates the <code>&lt;textarea&gt;</code> element that was replaced by the editor with\nthe current data available in the editor.</p>\n\n<p><strong>Note:</strong> This method will only affect those editor instances created\nwith the <a href=\"#!/api/CKEDITOR-property-ELEMENT_MODE_REPLACE\" rel=\"CKEDITOR-property-ELEMENT_MODE_REPLACE\" class=\"docClass\">CKEDITOR.ELEMENT_MODE_REPLACE</a> element mode or inline instances\nbound to <code>&lt;textarea&gt;</code> elements.</p>\n\n<pre><code>CKEDITOR.instances.editor1.updateElement();\nalert( document.getElementById( 'editor1' ).value ); // The current editor data.\n</code></pre>\n\n<p>@see <a href=\"#!/api/CKEDITOR.editor-property-element\" rel=\"CKEDITOR.editor-property-element\" class=\"docClass\">CKEDITOR.editor.element</a></p>\n"
    },
    "activeEnterModeChange": {
     "!type": "fn()",
     "!doc": "<p>Fired by the <a href=\"#!/api/CKEDITOR.editor-method-setActiveEnterMode\" rel=\"CKEDITOR.editor-method-setActiveEnterMode\" class=\"docClass\">setActiveEnterMode</a> method when any of the active Enter modes is changed.\nSee also the <a href=\"#!/api/CKEDITOR.editor-property-activeEnterMode\" rel=\"CKEDITOR.editor-property-activeEnterMode\" class=\"docClass\">activeEnterMode</a> and <a href=\"#!/api/CKEDITOR.editor-property-activeShiftEnterMode\" rel=\"CKEDITOR.editor-property-activeShiftEnterMode\" class=\"docClass\">activeShiftEnterMode</a> properties.</p>\n"
    },
    "activeFilterChange": {
     "!type": "fn()",
     "!doc": "<p>Fired by the <a href=\"#!/api/CKEDITOR.editor-method-setActiveFilter\" rel=\"CKEDITOR.editor-method-setActiveFilter\" class=\"docClass\">setActiveFilter</a> method when the <a href=\"#!/api/CKEDITOR.editor-property-activeFilter\" rel=\"CKEDITOR.editor-property-activeFilter\" class=\"docClass\">activeFilter</a> is changed.</p>\n"
    },
    "afterCommandExec": {
     "!type": "fn(editor: +CKEDITOR.editor, data: ?)",
     "!doc": "<p>Fired after the command execution when <a href=\"#!/api/CKEDITOR.editor-method-execCommand\" rel=\"CKEDITOR.editor-method-execCommand\" class=\"docClass\">execCommand</a> is called.</p>\n"
    },
    "afterSetData": {
     "!type": "fn(editor: +CKEDITOR.editor, data: ?)",
     "!doc": "<p>Event fired at the end of the <a href=\"#!/api/CKEDITOR.editor-method-setData\" rel=\"CKEDITOR.editor-method-setData\" class=\"docClass\">setData</a> call execution. Usually it is better to use the\n<a href=\"#!/api/CKEDITOR.editor-event-dataReady\" rel=\"CKEDITOR.editor-event-dataReady\" class=\"docClass\">dataReady</a> event.</p>\n"
    },
    "ariaEditorHelpLabel": {
     "!type": "fn(label: string)",
     "!doc": "<p>Event fired by the editor in order to get accessibility help label.\nThe event is responded to by a component which provides accessibility\nhelp (i.e. the <code>a11yhelp</code> plugin) hence the editor is notified whether\naccessibility help is available.</p>\n\n<p>Providing info:</p>\n\n<pre><code>editor.on( 'ariaEditorHelpLabel', function( evt ) {\n        evt.data.label = editor.lang.common.editorHelp;\n} );\n</code></pre>\n\n<p>Getting label:</p>\n\n<pre><code>var helpLabel = editor.fire( 'ariaEditorHelpLabel', {} ).label;\n</code></pre>\n"
    },
    "beforeCommandExec": {
     "!type": "fn(editor: +CKEDITOR.editor, data: ?)",
     "!doc": "<p>Fired before the command execution when <a href=\"#!/api/CKEDITOR.editor-method-execCommand\" rel=\"CKEDITOR.editor-method-execCommand\" class=\"docClass\">execCommand</a> is called.</p>\n"
    },
    "beforeGetData": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Internal event to get the current data.</p>\n"
    },
    "beforeModeUnload": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired before changing the editing mode. See also\n<a href=\"#!/api/CKEDITOR.editor-event-beforeSetMode\" rel=\"CKEDITOR.editor-event-beforeSetMode\" class=\"docClass\">beforeSetMode</a> and <a href=\"#!/api/CKEDITOR.editor-event-mode\" rel=\"CKEDITOR.editor-event-mode\" class=\"docClass\">mode</a>.</p>\n"
    },
    "beforeSetMode": {
     "!type": "fn(editor: +CKEDITOR.editor, data: string)",
     "!doc": "<p>Fired before the editor mode is set. See also\n<a href=\"#!/api/CKEDITOR.editor-event-mode\" rel=\"CKEDITOR.editor-event-mode\" class=\"docClass\">mode</a> and <a href=\"#!/api/CKEDITOR.editor-event-beforeModeUnload\" rel=\"CKEDITOR.editor-event-beforeModeUnload\" class=\"docClass\">beforeModeUnload</a>.</p>\n"
    },
    "blur": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired when the editor instance loses the input focus.</p>\n\n<p><strong>Note:</strong> This event will <strong>NOT</strong> be triggered when focus is moved internally, e.g. from\nan editable to another part of the editor UI like a dialog window.\nIf you are interested only in the focus state of the editable, listen to the <code>focus</code>\nand <code>blur</code> events of the <a href=\"#!/api/CKEDITOR.editable\" rel=\"CKEDITOR.editable\" class=\"docClass\">CKEDITOR.editable</a> instead.</p>\n\n<pre><code>editor.on( 'blur', function( e ) {\n    alert( 'The editor named ' + e.editor.name + ' lost the focus' );\n} );\n</code></pre>\n"
    },
    "configLoaded": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired once the editor configuration is ready (loaded and processed).</p>\n"
    },
    "contentDom": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Event fired when the editor content (its DOM structure) is ready.\nIt is similar to the native <code>DOMContentLoaded</code> event, but it applies to\nthe editor content. It is also the first event fired after\nthe <a href=\"#!/api/CKEDITOR.editable\" rel=\"CKEDITOR.editable\" class=\"docClass\">CKEDITOR.editable</a> is initialized.</p>\n\n<p>This event is particularly important for classic (<code>iframe</code>-based)\neditor, because on editor initialization and every time the data are set\n(by <a href=\"#!/api/CKEDITOR.editor-method-setData\" rel=\"CKEDITOR.editor-method-setData\" class=\"docClass\">setData</a>) content DOM structure\nis rebuilt. Thus, e.g. you need to attach DOM event listeners\non editable one more time.</p>\n\n<p>For inline editor this event is fired only once &mdash; when the\neditor is initialized for the first time. This is because setting\neditor content does not cause editable destruction and creation.</p>\n\n<p>The <a href=\"#!/api/CKEDITOR.editor-event-contentDom\" rel=\"CKEDITOR.editor-event-contentDom\" class=\"docClass\">contentDom</a> event goes along with <a href=\"#!/api/CKEDITOR.editor-event-contentDomUnload\" rel=\"CKEDITOR.editor-event-contentDomUnload\" class=\"docClass\">contentDomUnload</a>\nwhich is fired before the content DOM structure is destroyed. This is the\nright moment to detach content DOM event listener. Otherwise\nbrowsers like IE or Opera may throw exceptions when accessing\nelements from the detached document.</p>\n\n<p><strong>Note:</strong> <a href=\"#!/api/CKEDITOR.editable-method-attachListener\" rel=\"CKEDITOR.editable-method-attachListener\" class=\"docClass\">CKEDITOR.editable.attachListener</a> is a convenient\nway to attach listeners that will be detached on <a href=\"#!/api/CKEDITOR.editor-event-contentDomUnload\" rel=\"CKEDITOR.editor-event-contentDomUnload\" class=\"docClass\">contentDomUnload</a>.</p>\n\n<pre><code>editor.on( 'contentDom', function() {\n    var editable = editor.editable();\n\n    editable.attachListener( editable, 'click', function() {\n        console.log( 'The editable was clicked.' );\n    });\n});\n</code></pre>\n"
    },
    "contentDomInvalidated": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Event fired when the content DOM changes and some of the references as well as\nthe native DOM event listeners could be lost.\nThis event is useful when it is important to keep track of references\nto elements in the editable content from code.</p>\n"
    },
    "contentDomUnload": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Event fired before the content DOM structure is destroyed.\nSee <a href=\"#!/api/CKEDITOR.editor-event-contentDom\" rel=\"CKEDITOR.editor-event-contentDom\" class=\"docClass\">contentDom</a> documentation for more details.</p>\n"
    },
    "customConfigLoaded": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired when the custom configuration file is loaded, before the final\nconfiguration initialization.</p>\n\n<p>Custom configuration files can be loaded thorugh the\n<a href=\"#!/api/CKEDITOR.config-cfg-customConfig\" rel=\"CKEDITOR.config-cfg-customConfig\" class=\"docClass\">CKEDITOR.config.customConfig</a> setting. Several files can be loaded\nby changing this setting.</p>\n"
    },
    "dataFiltered": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>This event is fired when <a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a> has stripped some\ncontent from the data that was loaded (e.g. by <a href=\"#!/api/CKEDITOR.editor-method-setData\" rel=\"CKEDITOR.editor-method-setData\" class=\"docClass\">setData</a>\nmethod or in the source mode) or inserted (e.g. when pasting or using the\n<a href=\"#!/api/CKEDITOR.editor-method-insertHtml\" rel=\"CKEDITOR.editor-method-insertHtml\" class=\"docClass\">insertHtml</a> method).</p>\n\n<p>This event is useful when testing whether the <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a>\nsetting is sufficient and correct for a system that is migrating to CKEditor 4.1\n(where the <a href=\"#!/guide/dev_advanced_content_filter\">Advanced Content Filter</a> was introduced).</p>\n"
    },
    "dataReady": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired as an indicator of the editor data loading. It may be the result of\ncalling <a href=\"#!/api/CKEDITOR.editor-method-setData\" rel=\"CKEDITOR.editor-method-setData\" class=\"docClass\">setData</a> explicitly or an internal\neditor function, like the editor editing mode switching (move to Source and back).</p>\n"
    },
    "doubleclick": {
     "!type": "fn(data: ?)",
     "!doc": "<p>Event fired when the user double-clicks in the editable area.\nThe event allows to open a dialog window for a clicked element in a convenient way:</p>\n\n<pre><code>editor.on( 'doubleclick', function( evt ) {\n    var element = evt.data.element;\n\n    if ( element.is( 'table' ) )\n        evt.data.dialog = 'tableProperties';\n} );\n</code></pre>\n\n<p><strong>Note:</strong> To handle double-click on a widget use CKEDITOR.plugins.widget.doubleclick.</p>\n"
    },
    "instanceReady": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired when the CKEDITOR instance is completely created, fully initialized\nand ready for interaction.</p>\n"
    },
    "key": {
     "!type": "fn(data: ?, editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired when any keyboard key (or a combination thereof) is pressed in the editing area.</p>\n\n<pre><code>editor.on( 'key', function( evt ) {\n    if ( evt.data.keyCode == <a href=\"#!/api/CKEDITOR-property-CTRL\" rel=\"CKEDITOR-property-CTRL\" class=\"docClass\">CKEDITOR.CTRL</a> + 90 ) {\n        // Do something...\n\n        // Cancel the event, so other listeners will not be executed and\n        // the keydown's default behavior will be prevented.\n        evt.cancel();\n    }\n} );\n</code></pre>\n\n<p>Usually you will want to use the <a href=\"#!/api/CKEDITOR.editor-method-setKeystroke\" rel=\"CKEDITOR.editor-method-setKeystroke\" class=\"docClass\">setKeystroke</a> method or\nthe <a href=\"#!/api/CKEDITOR.config-cfg-keystrokes\" rel=\"CKEDITOR.config-cfg-keystrokes\" class=\"docClass\">CKEDITOR.config.keystrokes</a> option to attach a keystroke to some <a href=\"#!/api/CKEDITOR.command\" rel=\"CKEDITOR.command\" class=\"docClass\">command</a>.\nKey event listeners are usuful when some action should be executed conditionally, based\nfor example on precise selection location.</p>\n"
    },
    "langLoaded": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired when the language is loaded into the editor instance.</p>\n"
    },
    "loaded": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired when editor components (configuration, languages and plugins) are fully\nloaded and initialized. However, the editor will be fully ready to for interaction\non <a href=\"#!/api/CKEDITOR.editor-event-instanceReady\" rel=\"CKEDITOR.editor-event-instanceReady\" class=\"docClass\">instanceReady</a>.</p>\n"
    },
    "pluginsLoaded": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired when all plugins are loaded and initialized into the editor instance.</p>\n"
    },
    "required": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>Fired when the editor (replacing a <code>&lt;textarea&gt;</code> which has a <code>required</code> attribute) is empty during form submission.</p>\n\n<p>This event replaces native required fields validation that the browsers cannot\nperform when CKEditor replaces <code>&lt;textarea&gt;</code> elements.</p>\n\n<p>You can cancel this event to prevent the page from submitting data.</p>\n\n<pre><code>editor.on( 'required', function( evt ) {\n    alert( 'Article content is required.' );\n    evt.cancel();\n} );\n</code></pre>\n"
    },
    "stylesSet": {
     "!type": "fn(editor: +CKEDITOR.editor, styles: [?])",
     "!doc": "<p>Fired when the styles set is loaded. During the editor initialization\nphase the <a href=\"#!/api/CKEDITOR.editor-method-getStylesSet\" rel=\"CKEDITOR.editor-method-getStylesSet\" class=\"docClass\">getStylesSet</a> method returns only styles that\nare already loaded, which may not include e.g. styles parsed\nby the <code>stylesheetparser</code> plugin. Thus, to be notified when all\nstyles are ready, you can listen on this event.</p>\n"
    },
    "template": {
     "!type": "fn(editor: +CKEDITOR.editor, data: ?)",
     "!doc": "<p>Event fired when a UI template is added to the editor instance. It makes\nit possible to bring customizations to the template source.</p>\n"
    },
    "toDataFormat": {
     "!type": "fn(editor: +CKEDITOR.editor, data: ?)",
     "!doc": "<p>This event is fired when <a href=\"#!/api/CKEDITOR.htmlDataProcessor\" rel=\"CKEDITOR.htmlDataProcessor\" class=\"docClass\">CKEDITOR.htmlDataProcessor</a> is converting\ninternal HTML to output data HTML.</p>\n\n<p>By adding listeners with different priorities it is possible\nto process input HTML on different stages:</p>\n\n<ul>\n<li>1-4: Data is available in the original string format.</li>\n<li>5: Data is initially filtered with regexp patterns and parsed to\n  <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a> <a href=\"#!/api/CKEDITOR.htmlParser.element\" rel=\"CKEDITOR.htmlParser.element\" class=\"docClass\">CKEDITOR.htmlParser.element</a>.</li>\n<li>5-9: Data is available in the parsed format, but <a href=\"#!/api/CKEDITOR.htmlDataProcessor-property-htmlFilter\" rel=\"CKEDITOR.htmlDataProcessor-property-htmlFilter\" class=\"docClass\">CKEDITOR.htmlDataProcessor.htmlFilter</a>\n  is not applied yet.</li>\n<li>10: Data is filtered with <a href=\"#!/api/CKEDITOR.htmlDataProcessor-property-htmlFilter\" rel=\"CKEDITOR.htmlDataProcessor-property-htmlFilter\" class=\"docClass\">CKEDITOR.htmlDataProcessor.htmlFilter</a>.</li>\n<li>11: Data is filtered with the {<a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a> content filter} (on output the content filter makes\n only transformations, without filtering).</li>\n<li>10-14: Data is available in the parsed format and <a href=\"#!/api/CKEDITOR.htmlDataProcessor-property-htmlFilter\" rel=\"CKEDITOR.htmlDataProcessor-property-htmlFilter\" class=\"docClass\">CKEDITOR.htmlDataProcessor.htmlFilter</a>\n  has already been applied.</li>\n<li>15: Data is written back to an HTML string.</li>\n<li>15-*: Data is available in an HTML string.</li>\n</ul>\n\n\n<p>For example to be able to process parsed and already processed data add listener this way:</p>\n\n<pre><code>editor.on( 'toDataFormat', function( evt) {\n    evt.data.dataValue; // -&gt; <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a> instance\n}, null, null, 12 );\n</code></pre>\n"
    },
    "toHtml": {
     "!type": "fn(editor: +CKEDITOR.editor, data: ?)",
     "!doc": "<p>This event is fired by the <a href=\"#!/api/CKEDITOR.htmlDataProcessor\" rel=\"CKEDITOR.htmlDataProcessor\" class=\"docClass\">CKEDITOR.htmlDataProcessor</a> when input HTML\nis to be purified by the <a href=\"#!/api/CKEDITOR.htmlDataProcessor-method-toHtml\" rel=\"CKEDITOR.htmlDataProcessor-method-toHtml\" class=\"docClass\">CKEDITOR.htmlDataProcessor.toHtml</a> method.</p>\n\n<p>By adding listeners with different priorities it is possible\nto process input HTML on different stages:</p>\n\n<ul>\n<li>1-4: Data is available in the original string format.</li>\n<li>5: Data is initially filtered with regexp patterns and parsed to\n  <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a> <a href=\"#!/api/CKEDITOR.htmlParser.element\" rel=\"CKEDITOR.htmlParser.element\" class=\"docClass\">CKEDITOR.htmlParser.element</a>.</li>\n<li>5-9: Data is available in the parsed format, but <a href=\"#!/api/CKEDITOR.htmlDataProcessor-property-dataFilter\" rel=\"CKEDITOR.htmlDataProcessor-property-dataFilter\" class=\"docClass\">CKEDITOR.htmlDataProcessor.dataFilter</a>\n  is not applied yet.</li>\n<li>6: Data is filtered with the {<a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a> content filter}.</li>\n<li>10: Data is processed with <a href=\"#!/api/CKEDITOR.htmlDataProcessor-property-dataFilter\" rel=\"CKEDITOR.htmlDataProcessor-property-dataFilter\" class=\"docClass\">CKEDITOR.htmlDataProcessor.dataFilter</a>.</li>\n<li>10-14: Data is available in the parsed format and <a href=\"#!/api/CKEDITOR.htmlDataProcessor-property-dataFilter\" rel=\"CKEDITOR.htmlDataProcessor-property-dataFilter\" class=\"docClass\">CKEDITOR.htmlDataProcessor.dataFilter</a>\n  has already been applied.</li>\n<li>15: Data is written back to an HTML string.</li>\n<li>15-*: Data is available in an HTML string.</li>\n</ul>\n\n\n<p>For example to be able to process parsed, but not yet filtered data add listener this way:</p>\n\n<pre><code>editor.on( 'toHtml', function( evt) {\n    evt.data.dataValue; // -&gt; <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a> instance\n}, null, null, 7 );\n</code></pre>\n"
    }
   }
  },
  "env": {
   "!doc": "<p>Environment and browser information.</p>\n",
   "air": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in Adobe AIR.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-air\" rel=\"CKEDITOR.env-property-air\" class=\"docClass\">CKEDITOR.env.air</a> )\n    alert( 'I\\'m on AIR!' );\n</code></pre>\n"
   },
   "chrome": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in Chrome.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-chrome\" rel=\"CKEDITOR.env-property-chrome\" class=\"docClass\">CKEDITOR.env.chrome</a> )\n    alert( 'I\\'m running in Chrome!' );\n</code></pre>\n"
   },
   "cssClass": {
    "!type": "string",
    "!doc": "<p>A CSS class that denotes the browser where CKEditor runs and is appended\nto the HTML element that contains the editor. It makes it easier to apply\nbrowser-specific styles to editor instances.</p>\n\n<pre><code>myDiv.className = <a href=\"#!/api/CKEDITOR.env-property-cssClass\" rel=\"CKEDITOR.env-property-cssClass\" class=\"docClass\">CKEDITOR.env.cssClass</a>;\n</code></pre>\n"
   },
   "gecko": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in a Gecko-based browser, like\nFirefox.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-gecko\" rel=\"CKEDITOR.env-property-gecko\" class=\"docClass\">CKEDITOR.env.gecko</a> )\n    alert( 'I\\'m riding a gecko!' );\n</code></pre>\n"
   },
   "hc": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running on a High Contrast environment.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-hc\" rel=\"CKEDITOR.env-property-hc\" class=\"docClass\">CKEDITOR.env.hc</a> )\n    alert( 'You\\'re running on High Contrast mode. The editor interface will get adapted to provide you a better experience.' );\n</code></pre>\n"
   },
   "hidpi": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in the HiDPI environment.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-hidpi\" rel=\"CKEDITOR.env-property-hidpi\" class=\"docClass\">CKEDITOR.env.hidpi</a> )\n    alert( 'You are using a screen with high pixel density.' );\n</code></pre>\n"
   },
   "iOS": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running on Apple iPhone/iPad/iPod devices.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-iOS\" rel=\"CKEDITOR.env-property-iOS\" class=\"docClass\">CKEDITOR.env.iOS</a> )\n    alert( 'I like little apples!' );\n</code></pre>\n"
   },
   "ie": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in Internet Explorer.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-ie\" rel=\"CKEDITOR.env-property-ie\" class=\"docClass\">CKEDITOR.env.ie</a> )\n    alert( 'I\\'m running in IE!' );\n</code></pre>\n"
   },
   "ie6Compat": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in an IE6-like environment, which\nincludes IE6 itself as well as IE7, IE8 and IE9 in Quirks Mode.</p>\n"
   },
   "ie7Compat": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in an IE7-like environment, which\nincludes IE7 itself and IE8's IE7 Document Mode.</p>\n"
   },
   "ie8Compat": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in Internet Explorer 8 on\nStandards Mode.</p>\n"
   },
   "ie9Compat": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in Internet Explorer 9 on\nStandards Mode.</p>\n"
   },
   "isCompatible": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in a compatible browser.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-isCompatible\" rel=\"CKEDITOR.env-property-isCompatible\" class=\"docClass\">CKEDITOR.env.isCompatible</a> )\n    alert( 'Your browser is pretty cool!' );\n</code></pre>\n\n<p>See the <a href=\"#!/guide/dev_unsupported_environments\">Enabling CKEditor in Unsupported Environments</a>\narticle for more information.</p>\n"
   },
   "mac": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running on Macintosh.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-mac\" rel=\"CKEDITOR.env-property-mac\" class=\"docClass\">CKEDITOR.env.mac</a> )\n    alert( 'I love apples!'' );\n</code></pre>\n"
   },
   "mobile": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in a mobile environemnt.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-mobile\" rel=\"CKEDITOR.env-property-mobile\" class=\"docClass\">CKEDITOR.env.mobile</a> )\n    alert( 'I\\'m running with CKEditor today!' );\n</code></pre>\n"
   },
   "needsBrFiller": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in a browser which uses a bogus\n<code>&lt;br&gt;</code> filler in order to correctly display caret in empty blocks.</p>\n"
   },
   "needsNbspFiller": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in a browser which needs a\nnon-breaking space filler in order to correctly display caret in empty blocks.</p>\n"
   },
   "quirks": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in a Quirks Mode environment.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-quirks\" rel=\"CKEDITOR.env-property-quirks\" class=\"docClass\">CKEDITOR.env.quirks</a> )\n    alert( 'Nooooo!' );\n</code></pre>\n\n<p>Internet Explorer 10 introduced the <em>New Quirks Mode</em>, which is similar to the <em>Quirks Mode</em>\nimplemented in other modern browsers and defined in the HTML5 specification. It can be handled\nas the Standards mode, so the value of this property will be set to <code>false</code>.</p>\n\n<p>The <em>Internet Explorer 5 Quirks</em> mode which is still available in Internet Explorer 10+\nsets this value to <code>true</code> and <a href=\"#!/api/CKEDITOR.env-property-version\" rel=\"CKEDITOR.env-property-version\" class=\"docClass\">version</a> to <code>7</code>.</p>\n\n<p>Read more: <a href=\"http://blogs.msdn.com/b/ie/archive/2011/12/14/interoperable-html5-quirks-mode-in-ie10.aspx\">IEBlog</a></p>\n"
   },
   "safari": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in Safari (including the mobile version).</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-safari\" rel=\"CKEDITOR.env-property-safari\" class=\"docClass\">CKEDITOR.env.safari</a> )\n    alert( 'I\\'m on Safari!' );\n</code></pre>\n"
   },
   "version": {
    "!type": "number",
    "!doc": "<p>Contains the browser version.</p>\n\n<p>For Gecko-based browsers (like Firefox) it contains the revision\nnumber with first three parts concatenated with a padding zero\n(e.g. for revision 1.9.0.2 we have 10900).</p>\n\n<p>For WebKit-based browsers (like Safari and Chrome) it contains the\nWebKit build version (e.g. 522).</p>\n\n<p>For IE browsers, it matches the \"Document Mode\".</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-ie\" rel=\"CKEDITOR.env-property-ie\" class=\"docClass\">CKEDITOR.env.ie</a> &amp;&amp; <a href=\"#!/api/CKEDITOR.env-property-version\" rel=\"CKEDITOR.env-property-version\" class=\"docClass\">CKEDITOR.env.version</a> &lt;= 6 )\n    alert( 'Ouch!' );\n</code></pre>\n"
   },
   "webkit": {
    "!type": "bool",
    "!doc": "<p>Indicates that CKEditor is running in a WebKit-based browser, like Safari.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-property-webkit\" rel=\"CKEDITOR.env-property-webkit\" class=\"docClass\">CKEDITOR.env.webkit</a> )\n    alert( 'I\\'m running in a WebKit browser!' );\n</code></pre>\n"
   },
   "isCustomDomain": {
    "!type": "fn() -> bool",
    "!doc": "<p>Indicates that the browser has a custom domain enabled. This has\nbeen set with <code>document.domain</code>.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-method-isCustomDomain\" rel=\"CKEDITOR.env-method-isCustomDomain\" class=\"docClass\">CKEDITOR.env.isCustomDomain</a>() )\n    alert( 'I\\'m in a custom domain!' );\n</code></pre>\n"
   },
   "secure": {
    "!type": "fn() -> bool",
    "!doc": "<p>Indicates that the page is running under an encrypted connection.</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR.env-method-secure\" rel=\"CKEDITOR.env-method-secure\" class=\"docClass\">CKEDITOR.env.secure</a> )\n    alert( 'I\\'m on SSL!' );\n</code></pre>\n"
   }
  },
  "eventInfo": {
   "!doc": "<p>Virtual class that illustrates the features of the event object to be\npassed to event listeners by a <a href=\"#!/api/CKEDITOR.event\" rel=\"CKEDITOR.event\" class=\"docClass\">CKEDITOR.event</a> based object.</p>\n\n<p>This class is not really part of the API.</p>\n",
   "prototype": {
    "data": {
     "!type": "?",
     "!doc": "<p>Any kind of additional data. Its format and usage is event dependent.</p>\n\n<pre><code>someObject.on( 'someEvent', function( event ) {\n    alert( event.data ); // 'Example'\n} );\nsomeObject.fire( 'someEvent', 'Example' );\n</code></pre>\n"
    },
    "editor": {
     "!type": "+CKEDITOR.editor",
     "!doc": "<p>The editor instance that holds the sender. May be the same as sender. May be\nnull if the sender is not part of an editor instance, like a component\nrunning in standalone mode.</p>\n\n<pre><code>myButton.on( 'someEvent', function( event ) {\n    alert( event.editor == myEditor ); // true\n} );\nmyButton.fire( 'someEvent', null, myEditor );\n</code></pre>\n"
    },
    "listenerData": {
     "!type": "?",
     "!doc": "<p>Any extra data appended during the listener registration.</p>\n\n<pre><code>someObject.on( 'someEvent', function( event ) {\n    alert( event.listenerData ); // 'Example'\n}, null, 'Example' );\n</code></pre>\n"
    },
    "name": {
     "!type": "string",
     "!doc": "<p>The event name.</p>\n\n<pre><code>someObject.on( 'someEvent', function( event ) {\n    alert( event.name ); // 'someEvent'\n} );\nsomeObject.fire( 'someEvent' );\n</code></pre>\n"
    },
    "sender": {
     "!type": "?",
     "!doc": "<p>The object that publishes (sends) the event.</p>\n\n<pre><code>someObject.on( 'someEvent', function( event ) {\n    alert( event.sender == someObject ); // true\n} );\nsomeObject.fire( 'someEvent' );\n</code></pre>\n"
    },
    "cancel": {
     "!type": "fn()",
     "!doc": "<p>Indicates that the event is to be cancelled (if cancelable).</p>\n\n<pre><code>someObject.on( 'someEvent', function( event ) {\n    event.cancel();\n} );\nsomeObject.on( 'someEvent', function( event ) {\n    // This one will not be called.\n} );\nalert( someObject.fire( 'someEvent' ) ); // true\n</code></pre>\n"
    },
    "removeListener": {
     "!type": "fn()",
     "!doc": "<p>Removes the current listener.</p>\n\n<pre><code>someObject.on( 'someEvent', function( event ) {\n    event.removeListener();\n    // Now this function won't be called again by 'someEvent'.\n} );\n</code></pre>\n"
    },
    "stop": {
     "!type": "fn()",
     "!doc": "<p>Indicates that no further listeners are to be called.</p>\n\n<pre><code>someObject.on( 'someEvent', function( event ) {\n    event.stop();\n} );\nsomeObject.on( 'someEvent', function( event ) {\n    // This one will not be called.\n} );\nalert( someObject.fire( 'someEvent' ) ); // false\n</code></pre>\n"
    }
   }
  },
  "feature": {
   "!doc": "<p>Interface that may be automatically implemented by any\ninstance of any class which has at least the <code>name</code> property and\ncan be meant as an editor feature.</p>\n\n<p>For example:</p>\n\n<ul>\n<li>\"Bold\" command, button, and keystroke &ndash; it does not mean exactly\n<code>&lt;strong&gt;</code> or <code>&lt;b&gt;</code> but just the ability to create bold text.</li>\n<li>\"Format\" drop-down list &ndash; it also does not imply any HTML tag.</li>\n<li>\"Link\" command, button, and keystroke.</li>\n<li>\"Image\" command, button, and dialog window.</li>\n</ul>\n\n\n<p>Thus most often a feature is an instance of one of the following classes:</p>\n\n<ul>\n<li><a href=\"#!/api/CKEDITOR.command\" rel=\"CKEDITOR.command\" class=\"docClass\">CKEDITOR.command</a></li>\n<li>CKEDITOR.ui.button</li>\n<li>CKEDITOR.ui.richCombo</li>\n</ul>\n\n\n<p>None of them have a <code>name</code> property explicitly defined, but\nit is set by <a href=\"#!/api/CKEDITOR.editor-method-addCommand\" rel=\"CKEDITOR.editor-method-addCommand\" class=\"docClass\">CKEDITOR.editor.addCommand</a> and <a href=\"#!/api/CKEDITOR.ui-method-add\" rel=\"CKEDITOR.ui-method-add\" class=\"docClass\">CKEDITOR.ui.add</a>.</p>\n\n<p>During editor initialization all features that the editor should activate\nshould be passed to <a href=\"#!/api/CKEDITOR.editor-method-addFeature\" rel=\"CKEDITOR.editor-method-addFeature\" class=\"docClass\">CKEDITOR.editor.addFeature</a> (shorthand for <a href=\"#!/api/CKEDITOR.filter-method-addFeature\" rel=\"CKEDITOR.filter-method-addFeature\" class=\"docClass\">CKEDITOR.filter.addFeature</a>).</p>\n\n<p>This method checks if a feature can be activated (see <a href=\"#!/api/CKEDITOR.feature-property-requiredContent\" rel=\"CKEDITOR.feature-property-requiredContent\" class=\"docClass\">requiredContent</a>) and if yes,\nthen it registers allowed content rules required by this feature (see <a href=\"#!/api/CKEDITOR.feature-property-allowedContent\" rel=\"CKEDITOR.feature-property-allowedContent\" class=\"docClass\">allowedContent</a>) along\nwith two kinds of transformations: <a href=\"#!/api/CKEDITOR.feature-property-contentForms\" rel=\"CKEDITOR.feature-property-contentForms\" class=\"docClass\">contentForms</a> and <a href=\"#!/api/CKEDITOR.feature-property-contentTransformations\" rel=\"CKEDITOR.feature-property-contentTransformations\" class=\"docClass\">contentTransformations</a>.</p>\n\n<p>By default all buttons that are included in <a href=\"#!/guide/dev_toolbar\">toolbar layout configuration</a>\nare checked and registered with <a href=\"#!/api/CKEDITOR.editor-method-addFeature\" rel=\"CKEDITOR.editor-method-addFeature\" class=\"docClass\">CKEDITOR.editor.addFeature</a>, all styles available in the\n'Format' and 'Styles' drop-down lists are checked and registered too and so on.</p>\n",
   "prototype": {
    "allowedContent": {
     "!type": "+CKEDITOR.filter.allowedContentRules",
     "!doc": "<p>HTML code that can be generated by this feature.</p>\n\n<p>For example a basic image feature (image button displaying the image dialog window)\nmay allow <code>'img[!src,alt,width,height]'</code>.</p>\n\n<p>During the feature activation this value is passed to <a href=\"#!/api/CKEDITOR.filter-method-allow\" rel=\"CKEDITOR.filter-method-allow\" class=\"docClass\">CKEDITOR.filter.allow</a>.</p>\n"
    },
    "contentForms": {
     "!type": "?",
     "!doc": "<p>Feature content forms to be registered in the <a href=\"#!/api/CKEDITOR.editor-property-filter\" rel=\"CKEDITOR.editor-property-filter\" class=\"docClass\">CKEDITOR.editor.filter</a>\nduring the feature activation.</p>\n\n<p>See <a href=\"#!/api/CKEDITOR.filter-method-addContentForms\" rel=\"CKEDITOR.filter-method-addContentForms\" class=\"docClass\">CKEDITOR.filter.addContentForms</a> for more details.</p>\n"
    },
    "contentTransformations": {
     "!type": "?",
     "!doc": "<p>Transformations (usually for content generated by this feature, but not necessarily)\nthat will be registered in the <a href=\"#!/api/CKEDITOR.editor-property-filter\" rel=\"CKEDITOR.editor-property-filter\" class=\"docClass\">CKEDITOR.editor.filter</a> during the feature activation.</p>\n\n<p>See <a href=\"#!/api/CKEDITOR.filter-method-addTransformations\" rel=\"CKEDITOR.filter-method-addTransformations\" class=\"docClass\">CKEDITOR.filter.addTransformations</a> for more details.</p>\n"
    },
    "name": {
     "!type": "string",
     "!doc": "<p>The name of the feature.</p>\n\n<p>It is used for example to identify which <a href=\"#!/api/CKEDITOR.filter-property-allowedContent\" rel=\"CKEDITOR.filter-property-allowedContent\" class=\"docClass\">CKEDITOR.filter.allowedContent</a>\nrule was added for which feature.</p>\n"
    },
    "requiredContent": {
     "!type": "+CKEDITOR.filter.contentRule",
     "!doc": "<p>Minimal HTML code that this feature must be allowed to\ngenerate in order to work.</p>\n\n<p>For example a basic image feature (image button displaying the image dialog window)\nneeds <code>'img[src,alt]'</code> in order to be activated.</p>\n\n<p>During the feature validation this value is passed to <a href=\"#!/api/CKEDITOR.filter-method-check\" rel=\"CKEDITOR.filter-method-check\" class=\"docClass\">CKEDITOR.filter.check</a>.</p>\n\n<p>If this value is not provided, a feature will be always activated.</p>\n"
    },
    "toFeature": {
     "!type": "fn() -> +CKEDITOR.feature",
     "!doc": "<p>Returns a feature that this feature needs to register.</p>\n\n<p>In some cases, during activation, one feature may need to register\nanother feature. For example a CKEDITOR.ui.button often registers\na related command. See CKEDITOR.ui.button.toFeature.</p>\n\n<p>This method is executed when a feature is passed to the <a href=\"#!/api/CKEDITOR.editor-method-addFeature\" rel=\"CKEDITOR.editor-method-addFeature\" class=\"docClass\">CKEDITOR.editor.addFeature</a>.</p>\n"
    }
   }
  },
  "filter": {
   "allowedContentRules": {
    "!doc": "<p>Virtual class which is the <a href=\"#!/guide/dev_allowed_content_rules\">Allowed Content Rules</a> formats type.</p>\n\n<p>Possible formats are:</p>\n\n<ul>\n<li>the <a href=\"#!/guide/dev_allowed_content_rules-section-2\">string format</a>,</li>\n<li>the <a href=\"#!/guide/dev_allowed_content_rules-section-3\">object format</a>,</li>\n<li>a <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> instance &ndash; used mainly for integrating plugins with Advanced Content Filter,</li>\n<li>an array of the above formats.</li>\n</ul>\n\n"
   },
   "contentRule": {
    "!doc": "<p>Virtual class representing <a href=\"#!/api/CKEDITOR.filter-method-check\" rel=\"CKEDITOR.filter-method-check\" class=\"docClass\">CKEDITOR.filter.check</a> argument.</p>\n\n<p>This is a simplified version of the <a href=\"#!/api/CKEDITOR.filter.allowedContentRules\" rel=\"CKEDITOR.filter.allowedContentRules\" class=\"docClass\">CKEDITOR.filter.allowedContentRules</a> type.\nIt may contain only one element and its styles, classes, and attributes. Only the\nstring format and a <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> instances are accepted. Required properties\nare not allowed in this format.</p>\n\n<p>Example:</p>\n\n<pre><code>'img[src,alt](foo)' // Correct rule.\n'ol, ul(!foo)'      // Incorrect rule. Multiple elements and required\n                    // properties are not supported.\n</code></pre>\n"
   },
   "disallowedContentRules": {
    "!doc": "<p>Virtual class representing the <a href=\"#!/api/CKEDITOR.filter-method-disallow\" rel=\"CKEDITOR.filter-method-disallow\" class=\"docClass\">CKEDITOR.filter.disallow</a> argument and a type of\nthe <a href=\"#!/api/CKEDITOR.config-cfg-disallowedContent\" rel=\"CKEDITOR.config-cfg-disallowedContent\" class=\"docClass\">CKEDITOR.config.disallowedContent</a> option.</p>\n\n<p>This is a simplified version of the <a href=\"#!/api/CKEDITOR.filter.allowedContentRules\" rel=\"CKEDITOR.filter.allowedContentRules\" class=\"docClass\">CKEDITOR.filter.allowedContentRules</a> type.\nOnly the string format and object format are accepted. Required properties\nare not allowed in this format.</p>\n\n<p>Read more in the <a href=\"#!/guide/dev_disallowed_content\">Disallowed Content guide</a>.</p>\n"
   },
   "!doc": "<p>Highly configurable class which implements input data filtering mechanisms\nand core functions used for the activation of editor features.</p>\n\n<p>A filter instance is always available under the <a href=\"#!/api/CKEDITOR.editor-property-filter\" rel=\"CKEDITOR.editor-property-filter\" class=\"docClass\">CKEDITOR.editor.filter</a>\nproperty and is used by the editor in its core features like filtering input data,\napplying data transformations, validating whether a feature may be enabled for\nthe current setup. It may be configured in two ways:</p>\n\n<ul>\n<li>By the user, with the <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> setting.</li>\n<li>Automatically, by loaded features (toolbar items, commands, etc.).</li>\n</ul>\n\n\n<p>In both cases additional allowed content rules may be added by\nsetting the <a href=\"#!/api/CKEDITOR.config-cfg-extraAllowedContent\" rel=\"CKEDITOR.config-cfg-extraAllowedContent\" class=\"docClass\">CKEDITOR.config.extraAllowedContent</a>\nconfiguration option.</p>\n\n<p><strong>Note</strong>: Filter rules will be extended with the following elements\ndepending on the <a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">CKEDITOR.config.enterMode</a> and\n<a href=\"#!/api/CKEDITOR.config-cfg-shiftEnterMode\" rel=\"CKEDITOR.config-cfg-shiftEnterMode\" class=\"docClass\">CKEDITOR.config.shiftEnterMode</a> settings:</p>\n\n<ul>\n<li><code>'p'</code> &ndash; for <a href=\"#!/api/CKEDITOR-property-ENTER_P\" rel=\"CKEDITOR-property-ENTER_P\" class=\"docClass\">CKEDITOR.ENTER_P</a>,</li>\n<li><code>'div'</code> &ndash; for <a href=\"#!/api/CKEDITOR-property-ENTER_DIV\" rel=\"CKEDITOR-property-ENTER_DIV\" class=\"docClass\">CKEDITOR.ENTER_DIV</a>,</li>\n<li><code>'br'</code> &ndash; for <a href=\"#!/api/CKEDITOR-property-ENTER_BR\" rel=\"CKEDITOR-property-ENTER_BR\" class=\"docClass\">CKEDITOR.ENTER_BR</a>.</li>\n</ul>\n\n\n<p><strong>Read more</strong> about the Advanced Content Filter in <a href=\"#!/guide/dev_advanced_content_filter\">guides</a>.</p>\n\n<p>Filter may also be used as a standalone instance by passing\n<a href=\"#!/api/CKEDITOR.filter.allowedContentRules\" rel=\"CKEDITOR.filter.allowedContentRules\" class=\"docClass\">CKEDITOR.filter.allowedContentRules</a> instead of <a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">CKEDITOR.editor</a>\nto the constructor:</p>\n\n<pre><code>var filter = new <a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a>( 'b' );\n\nfilter.check( 'b' ); // -&gt; true\nfilter.check( 'i' ); // -&gt; false\nfilter.allow( 'i' );\nfilter.check( 'i' ); // -&gt; true\n</code></pre>\n",
   "prototype": {
    "!type": "fn(editorOrRules: +CKEDITOR.editor|+CKEDITOR.filter.allowedContentRules)",
    "allowedContent": {
     "!type": "[?]",
     "!doc": "<p>Array of rules added by the <a href=\"#!/api/CKEDITOR.filter-method-allow\" rel=\"CKEDITOR.filter-method-allow\" class=\"docClass\">allow</a> method (including those\nloaded from <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> and\n<a href=\"#!/api/CKEDITOR.config-cfg-extraAllowedContent\" rel=\"CKEDITOR.config-cfg-extraAllowedContent\" class=\"docClass\">CKEDITOR.config.extraAllowedContent</a>).</p>\n\n<p>Rules in this array are in unified allowed content rules format.</p>\n\n<p>This property is useful for debugging issues with rules string parsing\nor for checking which rules were automatically added by editor features.</p>\n"
    },
    "customConfig": {
     "!type": "bool",
     "!doc": "<p>Whether custom <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> was set.</p>\n\n<p>This property does not apply to the standalone filter.</p>\n"
    },
    "disabled": {
     "!type": "bool",
     "!doc": "<p>Whether the filter is disabled.</p>\n\n<p>To disable the filter, set <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> to <code>true</code>\nor use the <a href=\"#!/api/CKEDITOR.filter-method-disable\" rel=\"CKEDITOR.filter-method-disable\" class=\"docClass\">disable</a> method.</p>\n"
    },
    "disallowedContent": {
     "!type": "[?]",
     "!doc": "<p>Array of rules added by the <a href=\"#!/api/CKEDITOR.filter-method-disallow\" rel=\"CKEDITOR.filter-method-disallow\" class=\"docClass\">disallow</a> method (including those\nloaded from <a href=\"#!/api/CKEDITOR.config-cfg-disallowedContent\" rel=\"CKEDITOR.config-cfg-disallowedContent\" class=\"docClass\">CKEDITOR.config.disallowedContent</a>).</p>\n\n<p>Rules in this array are in unified disallowed content rules format.</p>\n\n<p>This property is useful for debugging issues with rules string parsing\nor for checking which rules were automatically added by editor features.</p>\n"
    },
    "editor": {
     "!type": "+CKEDITOR.editor",
     "!doc": "<p>Editor instance if not a standalone filter.</p>\n"
    },
    "elementCallbacks": {
     "!type": "[fn()]",
     "!doc": "<p>Array of element callbacks. See <a href=\"#!/api/CKEDITOR.filter-method-addElementCallback\" rel=\"CKEDITOR.filter-method-addElementCallback\" class=\"docClass\">addElementCallback</a>.</p>\n"
    },
    "id": {
     "!type": "number",
     "!doc": "<p>Filter's unique id. It can be used to find filter instance in\n<a href=\"#!/api/CKEDITOR.filter-static-property-instances\" rel=\"CKEDITOR.filter-static-property-instances\" class=\"docClass\">CKEDITOR.filter.instance</a> object.</p>\n"
    },
    "addContentForms": {
     "!type": "fn(forms: [?]) -> !this",
     "!doc": "<p>Adds an array of <a href=\"#!/api/CKEDITOR.feature\" rel=\"CKEDITOR.feature\" class=\"docClass\">CKEDITOR.feature</a> content forms. All forms\nwill then be transformed to the first form which is allowed by the filter.</p>\n\n<pre><code>editor.filter.allow( 'i; span{!font-style}' );\neditor.filter.addContentForms( [\n    'em',\n    'i',\n    [ 'span', function( el ) {\n        return el.styles[ 'font-style' ] == 'italic';\n    } ]\n] );\n// Now &lt;em&gt; and &lt;span style=\"font-style:italic\"&gt; will be replaced with &lt;i&gt;\n// because this is the first allowed form.\n// &lt;span&gt; is allowed too, but it is the last form and\n// additionaly, the editor cannot transform an element based on\n// the array+function form).\n</code></pre>\n\n<p>This method is used by the editor to register <a href=\"#!/api/CKEDITOR.feature-property-contentForms\" rel=\"CKEDITOR.feature-property-contentForms\" class=\"docClass\">CKEDITOR.feature.contentForms</a>\nwhen adding a feature with <a href=\"#!/api/CKEDITOR.filter-method-addFeature\" rel=\"CKEDITOR.filter-method-addFeature\" class=\"docClass\">addFeature</a> or <a href=\"#!/api/CKEDITOR.editor-method-addFeature\" rel=\"CKEDITOR.editor-method-addFeature\" class=\"docClass\">CKEDITOR.editor.addFeature</a>.</p>\n"
    },
    "addElementCallback": {
     "!type": "fn(callback: fn()) -> !this",
     "!doc": "<p>Adds a callback which will be executed on every element\nthat the filter reaches when filtering, before the element is filtered.</p>\n\n<p>By returning <a href=\"#!/api/CKEDITOR-property-FILTER_SKIP_TREE\" rel=\"CKEDITOR-property-FILTER_SKIP_TREE\" class=\"docClass\">CKEDITOR.FILTER_SKIP_TREE</a> it is possible to\nskip filtering of the current element and all its ancestors.</p>\n\n<pre><code>editor.filter.addElementCallback( function( el ) {\n    if ( el.hasClass( 'protected' ) )\n        return <a href=\"#!/api/CKEDITOR-property-FILTER_SKIP_TREE\" rel=\"CKEDITOR-property-FILTER_SKIP_TREE\" class=\"docClass\">CKEDITOR.FILTER_SKIP_TREE</a>;\n} );\n</code></pre>\n\n<p><strong>Note:</strong> At this stage the element passed to the callback does not\ncontain <code>attributes</code>, <code>classes</code>, and <code>styles</code> properties which are available\ntemporarily on later stages of the filtering process. Therefore you need to\n use the pure <a href=\"#!/api/CKEDITOR.htmlParser.element\" rel=\"CKEDITOR.htmlParser.element\" class=\"docClass\">CKEDITOR.htmlParser.element</a> interface.</p>\n"
    },
    "addFeature": {
     "!type": "fn(feature: +CKEDITOR.feature) -> bool",
     "!doc": "<p>Checks whether a feature can be enabled for the HTML restrictions in place\nfor the current CKEditor instance, based on the HTML code the feature might\ngenerate and the minimal HTML code the feature needs to be able to generate.</p>\n\n<pre><code>// TODO example\n</code></pre>\n"
    },
    "addTransformations": {
     "!type": "fn(transformations: [?]) -> !this",
     "!doc": "<p>Adds an array of content transformation groups. One group\nmay contain many transformation rules, but only the first\nmatching rule in a group is executed.</p>\n\n<p>A single transformation rule is an object with four properties:</p>\n\n<ul>\n<li><code>check</code> (optional) &ndash; if set and <a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a> does\n  not accept this <a href=\"#!/api/CKEDITOR.filter.contentRule\" rel=\"CKEDITOR.filter.contentRule\" class=\"docClass\">CKEDITOR.filter.contentRule</a>, this transformation rule\n  will not be executed (it does not <em>match</em>). This value is passed\n  to <a href=\"#!/api/CKEDITOR.filter-method-check\" rel=\"CKEDITOR.filter-method-check\" class=\"docClass\">check</a>.</li>\n<li><code>element</code> (optional) &ndash; this string property tells the filter on which\n  element this transformation can be run. It is optional, because\n  the element name can be obtained from <code>check</code> (if it is a String format)\n  or <code>left</code> (if it is a <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> instance).</li>\n<li><code>left</code> (optional) &ndash; a function accepting an element or a <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>\n  instance verifying whether the transformation should be\n  executed on this specific element. If it returns <code>false</code> or if an element\n  does not match this style, this transformation rule does not <em>match</em>.</li>\n<li><code>right</code> &ndash; a function accepting an element and <a href=\"#!/api/CKEDITOR.filter.transformationsTools\" rel=\"CKEDITOR.filter.transformationsTools\" class=\"docClass\">CKEDITOR.filter.transformationsTools</a>\n  or a string containing the name of the <a href=\"#!/api/CKEDITOR.filter.transformationsTools\" rel=\"CKEDITOR.filter.transformationsTools\" class=\"docClass\">CKEDITOR.filter.transformationsTools</a> method\n  that should be called on an element.</li>\n</ul>\n\n\n<p>A shorthand format is also available. A transformation rule can be defined by\na single string <code>'check:right'</code>. The string before <code>':'</code> will be used as\nthe <code>check</code> property and the second part as the <code>right</code> property.</p>\n\n<p>Transformation rules can be grouped. The filter will try to apply\nthe first rule in a group. If it <em>matches</em>, the filter will ignore subsequent rules and\nwill move to the next group. If it does not <em>match</em>, the next rule will be checked.</p>\n\n<p>Examples:</p>\n\n<pre><code>editor.filter.addTransformations( [\n    // First group.\n    [\n        // First rule. If table{width} is allowed, it\n        // executes <a href=\"#!/api/CKEDITOR.filter.transformationsTools-method-sizeToStyle\" rel=\"CKEDITOR.filter.transformationsTools-method-sizeToStyle\" class=\"docClass\">CKEDITOR.filter.transformationsTools.sizeToStyle</a> on a table element.\n        'table{width}: sizeToStyle',\n        // Second rule should not be executed if the first was.\n        'table[width]: sizeToAttribute'\n    ],\n    // Second group.\n    [\n        // This rule will add the foo=\"1\" attribute to all images that\n        // do not have it.\n        {\n            element: 'img',\n            left: function( el ) {\n                return !el.attributes.foo;\n            },\n            right: function( el, tools ) {\n                el.attributes.foo = '1';\n            }\n        }\n    ]\n] );\n\n// Case 1:\n// config.allowedContent = 'table{height,width}; tr td'.\n//\n// '&lt;table style=\"height:100px; width:200px\"&gt;...&lt;/table&gt;'       -&gt; '&lt;table style=\"height:100px; width:200px\"&gt;...&lt;/table&gt;'\n// '&lt;table height=\"100\" width=\"200\"&gt;...&lt;/table&gt;'                -&gt; '&lt;table style=\"height:100px; width:200px\"&gt;...&lt;/table&gt;'\n\n// Case 2:\n// config.allowedContent = 'table[height,width]; tr td'.\n//\n// '&lt;table style=\"height:100px; width:200px\"&gt;...&lt;/table&gt;'       -&gt; '&lt;table height=\"100\" width=\"200\"&gt;...&lt;/table&gt;'\n// '&lt;table height=\"100\" width=\"200\"&gt;...&lt;/table&gt;'                -&gt; '&lt;table height=\"100\" width=\"200\"\"&gt;...&lt;/table&gt;'\n\n// Case 3:\n// config.allowedContent = 'table{width,height}[height,width]; tr td'.\n//\n// '&lt;table style=\"height:100px; width:200px\"&gt;...&lt;/table&gt;'       -&gt; '&lt;table style=\"height:100px; width:200px\"&gt;...&lt;/table&gt;'\n// '&lt;table height=\"100\" width=\"200\"&gt;...&lt;/table&gt;'                -&gt; '&lt;table style=\"height:100px; width:200px\"&gt;...&lt;/table&gt;'\n//\n// Note: Both forms are allowed (size set by style and by attributes), but only\n// the first transformation is applied &amp;mdash; the size is always transformed to a style.\n// This is because only the first transformation matching allowed content rules is applied.\n</code></pre>\n\n<p>This method is used by the editor to add <a href=\"#!/api/CKEDITOR.feature-property-contentTransformations\" rel=\"CKEDITOR.feature-property-contentTransformations\" class=\"docClass\">CKEDITOR.feature.contentTransformations</a>\nwhen adding a feature by <a href=\"#!/api/CKEDITOR.filter-method-addFeature\" rel=\"CKEDITOR.filter-method-addFeature\" class=\"docClass\">addFeature</a> or <a href=\"#!/api/CKEDITOR.editor-method-addFeature\" rel=\"CKEDITOR.editor-method-addFeature\" class=\"docClass\">CKEDITOR.editor.addFeature</a>.</p>\n"
    },
    "allow": {
     "!type": "fn(newRules: +CKEDITOR.filter.allowedContentRules, featureName?: string, overrideCustom?: bool) -> bool",
     "!doc": "<p>Adds allowed content rules to the filter.</p>\n\n<p>Read about rules formats in <a href=\"#!/guide/dev_allowed_content_rules\">Allowed Content Rules guide</a>.</p>\n\n<pre><code>// Add a basic rule for custom image feature (e.g. 'MyImage' button).\neditor.filter.allow( 'img[!src,alt]', 'MyImage' );\n\n// Add rules for two header styles allowed by 'HeadersCombo'.\nvar header1Style = new <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>( { element: 'h1' } ),\n    header2Style = new <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>( { element: 'h2' } );\neditor.filter.allow( [ header1Style, header2Style ], 'HeadersCombo' );\n</code></pre>\n"
    },
    "applyTo": {
     "!type": "fn(fragment: +CKEDITOR.htmlParser.fragment|+CKEDITOR.htmlParser.element, toHtml?: bool, transformOnly?: bool, enterMode?: number) -> bool",
     "!doc": "<p>Applies this filter to passed <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a> or <a href=\"#!/api/CKEDITOR.htmlParser.element\" rel=\"CKEDITOR.htmlParser.element\" class=\"docClass\">CKEDITOR.htmlParser.element</a>.\nThe result of filtering is a DOM tree without disallowed content.</p>\n\n<pre><code>    // Create standalone filter passing 'p' and 'b' elements.\nvar filter = new <a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a>( 'p b' ),\n    // Parse HTML string to pseudo DOM structure.\n    fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;p&gt;&lt;b&gt;foo&lt;/b&gt; &lt;i&gt;bar&lt;/i&gt;&lt;/p&gt;' ),\n    writer = new <a href=\"#!/api/CKEDITOR.htmlParser.basicWriter\" rel=\"CKEDITOR.htmlParser.basicWriter\" class=\"docClass\">CKEDITOR.htmlParser.basicWriter</a>();\n\nfilter.applyTo( fragment );\nfragment.writeHtml( writer );\nwriter.getHtml(); // -&gt; '&lt;p&gt;&lt;b&gt;foo&lt;/b&gt; bar&lt;/p&gt;'\n</code></pre>\n"
    },
    "check": {
     "!type": "fn(test: +CKEDITOR.filter.contentRule, applyTransformations?: bool, strictCheck?: bool) -> bool",
     "!doc": "<p>Checks whether the content defined in the <code>test</code> argument is allowed\nby this filter.</p>\n\n<p>If <code>strictCheck</code> is set to <code>false</code> (default value), this method checks\nif all parts of the <code>test</code> (styles, attributes, and classes) are\naccepted by the filter. If <code>strictCheck</code> is set to <code>true</code>, the test\nmust also contain the required attributes, styles, and classes.</p>\n\n<p>For example:</p>\n\n<pre><code>// Rule: 'img[!src,alt]'.\nfilter.check( 'img[alt]' ); // -&gt; true\nfilter.check( 'img[alt]', true, true ); // -&gt; false\n</code></pre>\n\n<p>Second <code>check()</code> call returned <code>false</code> because <code>src</code> is required.</p>\n\n<p><strong>Note:</strong> The <code>test</code> argument is of <a href=\"#!/api/CKEDITOR.filter.contentRule\" rel=\"CKEDITOR.filter.contentRule\" class=\"docClass\">CKEDITOR.filter.contentRule</a> type, which is\na limited version of <a href=\"#!/api/CKEDITOR.filter.allowedContentRules\" rel=\"CKEDITOR.filter.allowedContentRules\" class=\"docClass\">CKEDITOR.filter.allowedContentRules</a>. Read more about it\nin the <a href=\"#!/api/CKEDITOR.filter.contentRule\" rel=\"CKEDITOR.filter.contentRule\" class=\"docClass\">CKEDITOR.filter.contentRule</a>'s documentation.</p>\n"
    },
    "checkFeature": {
     "!type": "fn(feature: +CKEDITOR.feature) -> bool",
     "!doc": "<p>Checks whether a <a href=\"#!/api/CKEDITOR.feature\" rel=\"CKEDITOR.feature\" class=\"docClass\">CKEDITOR.feature</a> can be enabled. Unlike <a href=\"#!/api/CKEDITOR.filter-method-addFeature\" rel=\"CKEDITOR.filter-method-addFeature\" class=\"docClass\">addFeature</a>,\nthis method always checks the feature, even when the default configuration\nfor <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> is used.</p>\n\n<pre><code>// TODO example\n</code></pre>\n"
    },
    "destroy": {
     "!type": "fn() -> !this",
     "!doc": "<p>Destroys the filter instance and removes it from the global <a href=\"#!/api/CKEDITOR.filter-static-property-instances\" rel=\"CKEDITOR.filter-static-property-instances\" class=\"docClass\">instances</a> object.</p>\n"
    },
    "disable": {
     "!type": "fn() -> !this",
     "!doc": "<p>Disables Advanced Content Filter.</p>\n\n<p>This method is meant to be used by plugins which are not\ncompatible with the filter and in other cases in which the filter\nhas to be disabled during the initialization phase or runtime.</p>\n\n<p>In other cases the filter can be disabled by setting\n<a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> to <code>true</code>.</p>\n"
    },
    "disallow": {
     "!type": "fn(newRules: +CKEDITOR.filter.disallowedContentRules) -> !this",
     "!doc": "<p>Adds disallowed content rules to the filter.</p>\n\n<p>Read about rules formats in the <a href=\"#!/guide/dev_allowed_content_rules\">Allowed Content Rules guide</a>.</p>\n\n<pre><code>// Disallow all styles on the image elements.\neditor.filter.disallow( 'img{*}' );\n\n// Disallow all span and div elements.\neditor.filter.disallow( 'span div' );\n</code></pre>\n"
    },
    "getAllowedEnterMode": {
     "!type": "fn(defaultMode: number, reverse?: bool) -> number",
     "!doc": "<p>Returns first enter mode allowed by this filter rules. Modes are checked in <code>p</code>, <code>div</code>, <code>br</code> order.\nIf none of tags is allowed this method will return <a href=\"#!/api/CKEDITOR-property-ENTER_BR\" rel=\"CKEDITOR-property-ENTER_BR\" class=\"docClass\">CKEDITOR.ENTER_BR</a>.</p>\n"
    }
   },
   "instances": {
    "!type": "?",
    "!doc": "<p>Object containing all filter instances stored under their\n<a href=\"#!/api/CKEDITOR.filter-property-id\" rel=\"CKEDITOR.filter-property-id\" class=\"docClass\">id</a> properties.</p>\n\n<pre><code>var filter = new <a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a>( 'p' );\nfilter === <a href=\"#!/api/CKEDITOR.filter-static-property-instances\" rel=\"CKEDITOR.filter-static-property-instances\" class=\"docClass\">CKEDITOR.filter.instances</a>[ filter.id ];\n</code></pre>\n"
   },
   "transformationsTools": {
    "!doc": "<p>Singleton containing tools useful for transformation rules.</p>\n",
    "alignmentToAttribute": {
     "!type": "fn(element: +CKEDITOR.htmlParser.element) -> !this",
     "!doc": "<p>Converts the <code>float</code> style to the <code>align</code> attribute if not set.\nStyle is always removed.</p>\n"
    },
    "alignmentToStyle": {
     "!type": "fn(element: +CKEDITOR.htmlParser.element) -> !this",
     "!doc": "<p>Converts the <code>align</code> attribute to the <code>float</code> style if not set. Attribute\nis always removed.</p>\n"
    },
    "lengthToAttribute": {
     "!type": "fn(element: +CKEDITOR.htmlParser.element, styleName: string, attrName?: string) -> !this",
     "!doc": "<p>Converts length in the <code>styleName</code> style to a valid length attribute (like <code>width</code> or <code>height</code>).</p>\n"
    },
    "lengthToStyle": {
     "!type": "fn(element: +CKEDITOR.htmlParser.element, attrName: string, styleName?: string) -> !this",
     "!doc": "<p>Converts length in the <code>attrName</code> attribute to a valid CSS length (like <code>width</code> or <code>height</code>).</p>\n"
    },
    "matchesStyle": {
     "!type": "fn(element: +CKEDITOR.htmlParser.element, style: +CKEDITOR.style) -> !this",
     "!doc": "<p>Checks whether an element matches a given <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>.\nThe element can be a \"superset\" of a style, e.g. it may have\nmore classes, but needs to have at least those defined in the style.</p>\n"
    },
    "sizeToAttribute": {
     "!type": "fn(element: +CKEDITOR.htmlParser.element) -> !this",
     "!doc": "<p>Converts <code>width</code> and <code>height</code> styles to attributes.</p>\n"
    },
    "sizeToStyle": {
     "!type": "fn(element: +CKEDITOR.htmlParser.element) -> !this",
     "!doc": "<p>Converts <code>width</code> and <code>height</code> attributes to styles.</p>\n"
    },
    "transform": {
     "!type": "fn(el: +CKEDITOR.htmlParser.element, form: +CKEDITOR.style|string) -> !this",
     "!doc": "<p>Transforms element to given form.</p>\n\n<p>Form may be a:</p>\n\n<ul>\n<li><a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>,</li>\n<li>string &ndash; the new name of an element.</li>\n</ul>\n\n"
    }
   }
  },
  "focusManager": {
   "!doc": "<p>Manages the focus activity in an editor instance. This class is to be\nused mainly by UI element coders when adding interface elements that need\nto set the focus state of the editor.</p>\n\n<pre><code>var focusManager = new <a href=\"#!/api/CKEDITOR.focusManager\" rel=\"CKEDITOR.focusManager\" class=\"docClass\">CKEDITOR.focusManager</a>( editor );\nfocusManager.focus();\n</code></pre>\n",
   "prototype": {
    "!type": "fn(editor: +CKEDITOR.editor)",
    "_": {
     "!type": "?",
     "!doc": "<p>Object used to store private stuff.</p>\n"
    },
    "currentActive": {
     "!type": "+CKEDITOR.dom.domObject",
     "!doc": "<p>Indicates the currently focused DOM element that makes the editor activated.</p>\n"
    },
    "hasFocus": {
     "!type": "bool",
     "!doc": "<p>Indicates that the editor instance has focus.</p>\n\n<pre><code>alert( CKEDITOR.instances.editor1.focusManager.hasFocus ); // e.g. true\n</code></pre>\n"
    },
    "add": {
     "!type": "fn(element: +CKEDITOR.dom.element, isCapture: bool) -> !this",
     "!doc": "<p>Registers a UI DOM element to the focus manager, which will make the focus manager \"hasFocus\"\nonce the input focus is relieved on the element.\nThis method is designed to be used by plugins to expand the jurisdiction of the editor focus.</p>\n"
    },
    "blur": {
     "!type": "fn(noDelay?: bool) -> !this",
     "!doc": "<p>Used to indicate that the editor instance has been deactivated by the specified\nelement which has just lost focus.</p>\n\n<p><strong>Note:</strong> This function acts asynchronously with a delay of 100ms to\navoid temporary deactivation. Use the <code>noDelay</code> parameter instead\nto deactivate immediately.</p>\n\n<pre><code>var editor = CKEDITOR.instances.editor1;\neditor.focusManager.blur();\n</code></pre>\n"
    },
    "focus": {
     "!type": "fn(currentActive?: +CKEDITOR.dom.element) -> !this",
     "!doc": "<p>Indicates that this editor instance is activated (due to a DOM focus change).\nThe <code>activated</code> state is a symbolic indicator of an active user\ninteraction session.</p>\n\n<p><strong>Note:</strong> This method will not introduce UI focus\nimpact on DOM, it is here to record the editor UI focus state internally.\nIf you want to make the cursor blink inside the editable, use\n<a href=\"#!/api/CKEDITOR.editor-method-focus\" rel=\"CKEDITOR.editor-method-focus\" class=\"docClass\">CKEDITOR.editor.focus</a> instead.</p>\n\n<pre><code>var editor = CKEDITOR.instances.editor1;\neditor.focusManage.focus( editor.editable() );\n</code></pre>\n"
    },
    "lock": {
     "!type": "fn() -> !this",
     "!doc": "<p>Prevents from changing the focus manager state until the next <a href=\"#!/api/CKEDITOR.focusManager-method-unlock\" rel=\"CKEDITOR.focusManager-method-unlock\" class=\"docClass\">unlock</a> is called.</p>\n"
    },
    "remove": {
     "!type": "fn(element: +CKEDITOR.dom.element) -> !this",
     "!doc": "<p>Dismisses an element from the focus manager delegations added by <a href=\"#!/api/CKEDITOR.focusManager-method-add\" rel=\"CKEDITOR.focusManager-method-add\" class=\"docClass\">add</a>.</p>\n"
    },
    "unlock": {
     "!type": "fn() -> !this",
     "!doc": "<p>Restores the automatic focus management if <a href=\"#!/api/CKEDITOR.focusManager-method-lock\" rel=\"CKEDITOR.focusManager-method-lock\" class=\"docClass\">lock</a> is called.</p>\n"
    }
   },
   "_": {
    "!doc": "<p>Object used to store private stuff.</p>\n",
    "blurDelay": {
     "!type": "number",
     "!doc": "<p>The delay (in milliseconds) to deactivate the editor when a UI DOM element has lost focus.</p>\n"
    }
   }
  },
  "htmlDataProcessor": {
   "!doc": "<p>Represents an HTML data processor, which is responsible for translating and\ntransforming the editor data on input and output.</p>\n",
   "prototype": {
    "!type": "fn(editor: +CKEDITOR.editor)",
    "dataFilter": {
     "!type": "+CKEDITOR.htmlParser.filter",
     "!doc": "<p>Data filter used when processing input by <a href=\"#!/api/CKEDITOR.htmlDataProcessor-method-toHtml\" rel=\"CKEDITOR.htmlDataProcessor-method-toHtml\" class=\"docClass\">toHtml</a>.</p>\n"
    },
    "htmlFilter": {
     "!type": "+CKEDITOR.htmlParser.filter",
     "!doc": "<p>HTML filter used when processing output by <a href=\"#!/api/CKEDITOR.htmlDataProcessor-method-toDataFormat\" rel=\"CKEDITOR.htmlDataProcessor-method-toDataFormat\" class=\"docClass\">toDataFormat</a>.</p>\n"
    },
    "writer": {
     "!type": "+CKEDITOR.htmlParser.basicWriter",
     "!doc": "<p>The HTML writer used by this data processor to format the output.</p>\n"
    },
    "toDataFormat": {
     "!type": "fn(html: string, options?: ?) -> string",
     "!doc": "<p>See <a href=\"#!/api/CKEDITOR.dataProcessor-method-toDataFormat\" rel=\"CKEDITOR.dataProcessor-method-toDataFormat\" class=\"docClass\">CKEDITOR.dataProcessor.toDataFormat</a>.</p>\n\n<p>This method fires the <a href=\"#!/api/CKEDITOR.editor-event-toDataFormat\" rel=\"CKEDITOR.editor-event-toDataFormat\" class=\"docClass\">CKEDITOR.editor.toDataFormat</a> event which makes it possible\nto hook into the process at various steps.</p>\n"
    },
    "toHtml": {
     "!type": "fn(data: string, options?: ?) -> string",
     "!doc": "<p>Processes the input (potentially malformed) HTML to a purified form which\nis suitable for using in the WYSIWYG editable.</p>\n\n<p>This method fires the <a href=\"#!/api/CKEDITOR.editor-event-toHtml\" rel=\"CKEDITOR.editor-event-toHtml\" class=\"docClass\">CKEDITOR.editor.toHtml</a> event which makes it possible\nto hook into the process at various stages.</p>\n\n<p><strong>Note:</strong> Since CKEditor 4.3 the signature of this method changed and all options\nare now grouped in one <code>options</code> object. Previously <code>context</code>, <code>fixForBody</code> and <code>dontFilter</code>\nwere passed separately.</p>\n"
    }
   }
  },
  "htmlParser": {
   "basicWriter": {
    "!doc": "<p>TODO</p>\n\n<p>@todo</p>\n",
    "prototype": {
     "!type": "fn()",
     "attribute": {
      "!type": "fn(attName: string, attValue: string) -> !this",
      "!doc": "<p>Writes an attribute. This function should be called after opening the\ntag with <a href=\"#!/api/CKEDITOR.htmlParser.basicWriter-method-openTagClose\" rel=\"CKEDITOR.htmlParser.basicWriter-method-openTagClose\" class=\"docClass\">openTagClose</a>.</p>\n\n<pre><code>// Writes ' class=\"MyClass\"'.\nwriter.attribute( 'class', 'MyClass' );\n</code></pre>\n"
     },
     "closeTag": {
      "!type": "fn(tagName: string) -> !this",
      "!doc": "<p>Writes a closer tag.</p>\n\n<pre><code>// Writes '&lt;/p&gt;'.\nwriter.closeTag( 'p' );\n</code></pre>\n"
     },
     "comment": {
      "!type": "fn(comment: string) -> !this",
      "!doc": "<p>Writes a comment.</p>\n\n<pre><code>// Writes '&lt;!-- My comment --&gt;'.\nwriter.comment( ' My comment ' );\n</code></pre>\n"
     },
     "getHtml": {
      "!type": "fn(reset: bool) -> string",
      "!doc": "<p>Empties the current output buffer.</p>\n\n<pre><code>var html = writer.getHtml();\n</code></pre>\n"
     },
     "openTag": {
      "!type": "fn(tagName: string, attributes: ?) -> !this",
      "!doc": "<p>Writes the tag opening part for a opener tag.</p>\n\n<pre><code>// Writes '&lt;p'.\nwriter.openTag( 'p', { class : 'MyClass', id : 'MyId' } );\n</code></pre>\n"
     },
     "openTagClose": {
      "!type": "fn(tagName: string, isSelfClose: bool) -> !this",
      "!doc": "<p>Writes the tag closing part for a opener tag.</p>\n\n<pre><code>// Writes '&gt;'.\nwriter.openTagClose( 'p', false );\n\n// Writes ' /&gt;'.\nwriter.openTagClose( 'br', true );\n</code></pre>\n"
     },
     "reset": {
      "!type": "fn() -> !this",
      "!doc": "<p>Empties the current output buffer.</p>\n\n<pre><code>writer.reset();\n</code></pre>\n"
     },
     "text": {
      "!type": "fn(text: string) -> !this",
      "!doc": "<p>Writes text.</p>\n\n<pre><code>// Writes 'Hello Word'.\nwriter.text( 'Hello Word' );\n</code></pre>\n"
     },
     "write": {
      "!type": "fn(data: string) -> !this",
      "!doc": "<p>Writes any kind of data to the ouput.</p>\n\n<pre><code>writer.write( 'This is an &lt;b&gt;example&lt;/b&gt;.' );\n</code></pre>\n"
     }
    }
   },
   "cdata": {
    "!doc": "<p>A lightweight representation of HTML CDATA.</p>\n",
    "prototype": {
     "!type": "fn(value: string)",
     "type": {
      "!type": "number",
      "!doc": "<p>CDATA has the same type as <a href=\"#!/api/CKEDITOR.htmlParser.text\" rel=\"CKEDITOR.htmlParser.text\" class=\"docClass\">CKEDITOR.htmlParser.text</a> This is\na constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_TEXT\" rel=\"CKEDITOR-property-NODE_TEXT\" class=\"docClass\">CKEDITOR.NODE_TEXT</a>.</p>\n"
     },
     "value": {
      "!type": "string",
      "!doc": "<p>The CDATA value.</p>\n"
     },
     "writeHtml": {
      "!type": "fn(writer: +CKEDITOR.htmlParser.basicWriter) -> !this",
      "!doc": "<p>Writes the CDATA with no special manipulations.</p>\n"
     }
    }
   },
   "node": {
    "prototype": {
     "!type": "fn()",
     "getAscendant": {
      "!type": "fn(condition: string|?|fn()) -> +CKEDITOR.htmlParser.element",
      "!doc": "<p>Gets the closest ancestor element of this element which satisfies given condition</p>\n"
     },
     "getIndex": {
      "!type": "fn() -> number",
      "!doc": "<p>Gets this node's index in its parent's children array.</p>\n"
     },
     "insertAfter": {
      "!type": "fn(node: +CKEDITOR.htmlParser.node) -> !this",
      "!doc": "<p>Insert this node after given one.</p>\n"
     },
     "insertBefore": {
      "!type": "fn(node: +CKEDITOR.htmlParser.node) -> !this",
      "!doc": "<p>Insert this node before given one.</p>\n"
     },
     "remove": {
      "!type": "fn() -> !this",
      "!doc": "<p>Remove this node from a tree.</p>\n"
     },
     "replaceWith": {
      "!type": "fn(node: +CKEDITOR.htmlParser.node) -> !this",
      "!doc": "<p>Replace this node with given one.</p>\n"
     },
     "wrapWith": {
      "!type": "fn(wrapper: +CKEDITOR.htmlParser.element) -> +CKEDITOR.htmlParser.element",
      "!doc": "<p>Wraps this element with given <code>wrapper</code>.</p>\n"
     }
    },
    "!doc": "<p>A lightweight representation of HTML node.</p>\n"
   },
   "comment": {
    "!doc": "<p>A lightweight representation of an HTML comment.</p>\n",
    "prototype": {
     "!type": "fn(value: string)",
     "_": {
      "!type": "?"
     },
     "type": {
      "!type": "number",
      "!doc": "<p>The node type. This is a constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_COMMENT\" rel=\"CKEDITOR-property-NODE_COMMENT\" class=\"docClass\">CKEDITOR.NODE_COMMENT</a>.</p>\n"
     },
     "value": {
      "!type": "string",
      "!doc": "<p>The comment text.</p>\n"
     },
     "filter": {
      "!type": "fn(filter: +CKEDITOR.htmlParser.filter) -> bool",
      "!doc": "<p>Filter this comment with given filter.</p>\n"
     },
     "writeHtml": {
      "!type": "fn(writer: +CKEDITOR.htmlParser.basicWriter, filter?: +CKEDITOR.htmlParser.filter) -> !this",
      "!doc": "<p>Writes the HTML representation of this comment to a CKEDITOR.htmlWriter.</p>\n"
     }
    }
   },
   "cssStyle": {
    "!doc": "<p>Object presentation of CSS style declaration text.</p>\n",
    "prototype": {
     "!type": "fn(elementOrStyleText: +CKEDITOR.htmlParser.element|string)",
     "populate": {
      "!type": "fn(obj: +CKEDITOR.htmlParser.element|+CKEDITOR.dom.element|?) -> !this",
      "!doc": "<p>Applies the styles to the specified element or object.</p>\n"
     },
     "toString": {
      "!type": "fn() -> string",
      "!doc": "<p>Serializes CSS style declaration to a string.</p>\n"
     }
    }
   },
   "element": {
    "!doc": "<p>A lightweight representation of an HTML element.</p>\n",
    "prototype": {
     "!type": "fn(name: string, attributes: ?)",
     "_": {
      "!type": "?"
     },
     "attributes": {
      "!type": "?",
      "!doc": "<p>Stores the attributes defined for this element.</p>\n"
     },
     "children": {
      "!type": "[?]",
      "!doc": "<p>The nodes that are direct children of this element.</p>\n"
     },
     "name": {
      "!type": "string",
      "!doc": "<p>The element name.</p>\n"
     },
     "type": {
      "!type": "number",
      "!doc": "<p>The node type. This is a constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_ELEMENT\" rel=\"CKEDITOR-property-NODE_ELEMENT\" class=\"docClass\">CKEDITOR.NODE_ELEMENT</a>.</p>\n"
     },
     "add": {
      "!type": "fn(node: +CKEDITOR.htmlParser.node, index?: number) -> !this",
      "!doc": "<p>Adds a node to the element children list.</p>\n"
     },
     "addClass": {
      "!type": "fn(className: string) -> !this",
      "!doc": "<p>Adds a class name to the list of classes.</p>\n"
     },
     "clone": {
      "!type": "fn() -> +CKEDITOR.htmlParser.element",
      "!doc": "<p>Clones this element.</p>\n"
     },
     "filter": {
      "!type": "fn(filter: +CKEDITOR.htmlParser.filter) -> bool",
      "!doc": "<p>Filters this element and its children with the given filter.</p>\n"
     },
     "filterChildren": {
      "!type": "fn(filter: +CKEDITOR.htmlParser.filter) -> !this",
      "!doc": "<p>Filters this element's children with the given filter.</p>\n\n<p>Element's children may only be filtered once by one\ninstance of the filter.</p>\n"
     },
     "forEach": {
      "!type": "fn(callback: fn(), type?: number, skipRoot?: bool) -> !this",
      "!doc": "<p>Executes a callback on each node (of the given type) in this element.</p>\n\n<pre><code>// Create a &lt;p&gt; element with foo&lt;b&gt;bar&lt;/b&gt;bom as its content.\nvar elP = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( 'foo&lt;b&gt;bar&lt;/b&gt;bom', 'p' );\nelP.forEach( function( node ) {\n    console.log( node );\n} );\n// Will log:\n// 1. document fragment,\n// 2. &lt;p&gt; element,\n// 3. \"foo\" text node,\n// 4. &lt;b&gt; element,\n// 5. \"bar\" text node,\n// 6. \"bom\" text node.\n</code></pre>\n"
     },
     "getFirst": {
      "!type": "fn(condition: string|?|fn()) -> +CKEDITOR.htmlParser.node",
      "!doc": "<p>Gets this element's first child. If <code>condition</code> is given, this method returns\nthe first child which satisfies that condition.</p>\n"
     },
     "getHtml": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets this element's inner HTML.</p>\n"
     },
     "getOuterHtml": {
      "!type": "fn() -> string",
      "!doc": "<p>Gets this element's outer HTML.</p>\n"
     },
     "hasClass": {
      "!type": "fn(className: string) -> bool",
      "!doc": "<p>Checkes whether this element has a class name.</p>\n"
     },
     "removeClass": {
      "!type": "fn(className: string) -> !this",
      "!doc": "<p>Removes a class name from the list of classes.</p>\n"
     },
     "replaceWithChildren": {
      "!type": "fn() -> !this",
      "!doc": "<p>Replaces this element with its children.</p>\n"
     },
     "setHtml": {
      "!type": "fn(html: string) -> !this",
      "!doc": "<p>Sets this element's inner HTML.</p>\n"
     },
     "split": {
      "!type": "fn(index: number) -> +CKEDITOR.htmlParser.element",
      "!doc": "<p>Splits this element at the given index.</p>\n"
     },
     "writeChildrenHtml": {
      "!type": "fn(writer: +CKEDITOR.htmlParser.basicWriter, filter?: +CKEDITOR.htmlParser.filter) -> !this",
      "!doc": "<p>Sends children of this element to the writer.</p>\n"
     },
     "writeHtml": {
      "!type": "fn(writer: +CKEDITOR.htmlParser.basicWriter, filter?: +CKEDITOR.htmlParser.filter) -> !this",
      "!doc": "<p>Writes the element HTML to the CKEDITOR.htmlWriter.</p>\n"
     }
    }
   },
   "filter": {
    "!doc": "<p>Filter is a configurable tool for transforming and filtering <a href=\"#!/api/CKEDITOR.htmlParser.node\" rel=\"CKEDITOR.htmlParser.node\" class=\"docClass\">nodes</a>.\nIt is mainly used during data processing phase which is done not on real DOM nodes,\nbut on their simplified form represented by <a href=\"#!/api/CKEDITOR.htmlParser.node\" rel=\"CKEDITOR.htmlParser.node\" class=\"docClass\">CKEDITOR.htmlParser.node</a> class and its subclasses.</p>\n\n<pre><code>var filter = new <a href=\"#!/api/CKEDITOR.htmlParser.filter\" rel=\"CKEDITOR.htmlParser.filter\" class=\"docClass\">CKEDITOR.htmlParser.filter</a>( {\n    text: function( value ) {\n        return '@' + value + '@';\n    },\n    elements: {\n        p: function( element ) {\n            element.attributes.foo = '1';\n        }\n    }\n} );\n\nvar fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;p&gt;Foo&lt;b&gt;bar!&lt;/b&gt;&lt;/p&gt;' ),\n    writer = new <a href=\"#!/api/CKEDITOR.htmlParser.basicWriter\" rel=\"CKEDITOR.htmlParser.basicWriter\" class=\"docClass\">CKEDITOR.htmlParser.basicWriter</a>();\nfilter.applyTo( fragment );\nfragment.writeHtml( writer );\nwriter.getHtml(); // '&lt;p foo=\"1\"&gt;@Foo@&lt;b&gt;@bar!@&lt;/b&gt;&lt;/p&gt;'\n</code></pre>\n",
    "prototype": {
     "!type": "fn(rules?: +CKEDITOR.htmlParser.filterRulesDefinition)",
     "attributeNameRules": {
      "!type": "+CKEDITOR.htmlParser.filterRulesGroup",
      "!doc": "<p>Rules for attribute names.</p>\n"
     },
     "attributesRules": {
      "!type": "?",
      "!doc": "<p>Hash of attributeName => <a href=\"#!/api/CKEDITOR.htmlParser.filterRulesGroup\" rel=\"CKEDITOR.htmlParser.filterRulesGroup\" class=\"docClass\">rules for attributes</a>.</p>\n"
     },
     "commentRules": {
      "!type": "+CKEDITOR.htmlParser.filterRulesGroup",
      "!doc": "<p>Rules for comment nodes.</p>\n"
     },
     "elementNameRules": {
      "!type": "+CKEDITOR.htmlParser.filterRulesGroup",
      "!doc": "<p>Rules for element names.</p>\n"
     },
     "elementsRules": {
      "!type": "?",
      "!doc": "<p>Hash of elementName => <a href=\"#!/api/CKEDITOR.htmlParser.filterRulesGroup\" rel=\"CKEDITOR.htmlParser.filterRulesGroup\" class=\"docClass\">rules for elements</a>.</p>\n"
     },
     "id": {
      "!type": "number",
      "!doc": "<p>ID of filter instance, which is used to mark elements\nto which this filter has been already applied.</p>\n"
     },
     "rootRules": {
      "!type": "+CKEDITOR.htmlParser.filterRulesGroup",
      "!doc": "<p>Rules for a root node.</p>\n"
     },
     "textRules": {
      "!type": "+CKEDITOR.htmlParser.filterRulesGroup",
      "!doc": "<p>Rules for text nodes.</p>\n"
     },
     "addRules": {
      "!type": "fn(rules: +CKEDITOR.htmlParser.filterRulesDefinition, options?: ?|number) -> !this",
      "!doc": "<p>Add rules to this filter.</p>\n"
     },
     "applyTo": {
      "!type": "fn(node: +CKEDITOR.htmlParser.node) -> !this",
      "!doc": "<p>Apply this filter to given node.</p>\n"
     }
    }
   },
   "filterRulesDefinition": {},
   "filterRulesGroup": {
    "!doc": "<p>Class grouping filter rules for one subject (like element or attribute names).</p>\n",
    "prototype": {
     "rules": {
      "!type": "[?]",
      "!doc": "<p>Array of objects containing rule, priority and options.</p>\n"
     },
     "add": {
      "!type": "fn(rule: fn()|[?], priority: number, options: ?) -> !this",
      "!doc": "<p>Adds specified rule to this group.</p>\n"
     },
     "addMany": {
      "!type": "fn(rules: [?], priority: number, options: ?) -> !this",
      "!doc": "<p>Adds specified rules to this group.</p>\n"
     },
     "exec": {
      "!type": "fn(currentValue: +CKEDITOR.htmlParser.node|+CKEDITOR.htmlParser.fragment|string) -> +CKEDITOR.htmlParser.node|+CKEDITOR.htmlParser.fragment|string",
      "!doc": "<p>Executes this rules group on given value. Applicable only if function based rules were added.</p>\n\n<p>All arguments passed to this function will be forwarded to rules' functions.</p>\n"
     },
     "execOnName": {
      "!type": "fn(currentName: string) -> string",
      "!doc": "<p>Executes this rules group on name. Applicable only if filter rules for names were added.</p>\n"
     },
     "findIndex": {
      "!type": "fn(priority: number) -> number",
      "!doc": "<p>Finds an index at which rule with given priority should be inserted.</p>\n"
     }
    }
   },
   "fragment": {
    "!doc": "<p>A lightweight representation of an HTML DOM structure.</p>\n",
    "prototype": {
     "!type": "fn()",
     "_": {
      "!type": "?"
     },
     "children": {
      "!type": "[?]",
      "!doc": "<p>The nodes contained in the root of this fragment.</p>\n\n<pre><code>var fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;b&gt;Sample&lt;/b&gt; Text' );\nalert( fragment.children.length ); // 2\n</code></pre>\n"
     },
     "parent": {
      "!type": "?",
      "!doc": "<p>Get the fragment parent. Should always be null.</p>\n"
     },
     "type": {
      "!type": "number",
      "!doc": "<p>The node type. This is a constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_DOCUMENT_FRAGMENT\" rel=\"CKEDITOR-property-NODE_DOCUMENT_FRAGMENT\" class=\"docClass\">CKEDITOR.NODE_DOCUMENT_FRAGMENT</a>.</p>\n"
     },
     "add": {
      "!type": "fn(node: +CKEDITOR.htmlParser.node, index?: number) -> !this",
      "!doc": "<p>Adds a node to this fragment.</p>\n"
     },
     "filter": {
      "!type": "fn(filter: +CKEDITOR.htmlParser.filter) -> !this",
      "!doc": "<p>Filter this fragment's content with given filter.</p>\n"
     },
     "filterChildren": {
      "!type": "fn(filter: +CKEDITOR.htmlParser.filter, filterRoot?: bool) -> !this",
      "!doc": "<p>Filter this fragment's children with given filter.</p>\n\n<p>Element's children may only be filtered once by one\ninstance of filter.</p>\n"
     },
     "forEach": {
      "!type": "fn(callback: fn(), type?: number, skipRoot?: bool) -> !this",
      "!doc": "<p>Execute callback on each node (of given type) in this document fragment.</p>\n\n<pre><code>var fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;p&gt;foo&lt;b&gt;bar&lt;/b&gt;bom&lt;/p&gt;' );\nfragment.forEach( function( node ) {\n    console.log( node );\n} );\n// Will log:\n// 1. document fragment,\n// 2. &lt;p&gt; element,\n// 3. \"foo\" text node,\n// 4. &lt;b&gt; element,\n// 5. \"bar\" text node,\n// 6. \"bom\" text node.\n</code></pre>\n"
     },
     "writeChildrenHtml": {
      "!type": "fn(writer: +CKEDITOR.htmlParser.basicWriter, filter?: +CKEDITOR.htmlParser.filter, filterRoot?: bool) -> !this",
      "!doc": "<p>Write and filtering the child nodes of this fragment.</p>\n"
     },
     "writeHtml": {
      "!type": "fn(writer: +CKEDITOR.htmlParser.basicWriter, filter?: +CKEDITOR.htmlParser.filter) -> !this",
      "!doc": "<p>Writes the fragment HTML to a <a href=\"#!/api/CKEDITOR.htmlParser.basicWriter\" rel=\"CKEDITOR.htmlParser.basicWriter\" class=\"docClass\">CKEDITOR.htmlParser.basicWriter</a>.</p>\n\n<pre><code>var writer = new CKEDITOR.htmlWriter();\nvar fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;P&gt;&lt;B&gt;Example' );\nfragment.writeHtml( writer );\nalert( writer.getHtml() ); // '&lt;p&gt;&lt;b&gt;Example&lt;/b&gt;&lt;/p&gt;'\n</code></pre>\n"
     }
    },
    "fromHtml": {
     "!type": "fn(fragmentHtml: string, parent?: +CKEDITOR.htmlParser.element|string, fixingBlock?: string|bool) -> +CKEDITOR.htmlParser.fragment|+CKEDITOR.htmlParser.element",
     "!doc": "<p>Creates a <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a> from an HTML string.</p>\n\n<pre><code>var fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;b&gt;Sample&lt;/b&gt; Text' );\nalert( fragment.children[ 0 ].name );       // 'b'\nalert( fragment.children[ 1 ].value );  // ' Text'\n</code></pre>\n"
    }
   },
   "!doc": "<p>Provides an \"event like\" system to parse strings of HTML data.</p>\n\n<pre><code>var parser = new <a href=\"#!/api/CKEDITOR.htmlParser\" rel=\"CKEDITOR.htmlParser\" class=\"docClass\">CKEDITOR.htmlParser</a>();\nparser.onTagOpen = function( tagName, attributes, selfClosing ) {\n    alert( tagName );\n};\nparser.parse( '&lt;p&gt;Some &lt;b&gt;text&lt;/b&gt;.&lt;/p&gt;' ); // Alerts 'p', 'b'.\n</code></pre>\n",
   "prototype": {
    "!type": "fn()",
    "onCDATA": {
     "!type": "fn(cdata: string) -> !this",
     "!doc": "<p>Function to be fired when CDATA section is found. This function\nshould be overriden when using this class.</p>\n\n<pre><code>var parser = new <a href=\"#!/api/CKEDITOR.htmlParser\" rel=\"CKEDITOR.htmlParser\" class=\"docClass\">CKEDITOR.htmlParser</a>();\nparser.onCDATA = function( cdata ) {\n    alert( cdata ); // 'var hello;'\n} );\nparser.parse( '&lt;script&gt;var hello;&lt;/script&gt;' );\n</code></pre>\n"
    },
    "onComment": {
     "!type": "fn(comment: string) -> !this",
     "!doc": "<p>Function to be fired when a commend is found. This function\nshould be overriden when using this class.</p>\n\n<pre><code>var parser = new <a href=\"#!/api/CKEDITOR.htmlParser\" rel=\"CKEDITOR.htmlParser\" class=\"docClass\">CKEDITOR.htmlParser</a>();\nparser.onComment = function( comment ) {\n    alert( comment ); // ' Example '\n} );\nparser.parse( '&lt;!-- Example --&gt;&lt;b&gt;Hello&lt;/b&gt;' );\n</code></pre>\n"
    },
    "onTagClose": {
     "!type": "fn(tagName: string) -> !this",
     "!doc": "<p>Function to be fired when a tag closer is found. This function\nshould be overriden when using this class.</p>\n\n<pre><code>var parser = new <a href=\"#!/api/CKEDITOR.htmlParser\" rel=\"CKEDITOR.htmlParser\" class=\"docClass\">CKEDITOR.htmlParser</a>();\nparser.onTagClose = function( tagName ) {\n    alert( tagName ); // 'b'\n} );\nparser.parse( '&lt;!-- Example --&gt;&lt;b&gt;Hello&lt;/b&gt;' );\n</code></pre>\n"
    },
    "onTagOpen": {
     "!type": "fn(tagName: string, attributes: ?, selfClosing: bool) -> !this",
     "!doc": "<p>Function to be fired when a tag opener is found. This function\nshould be overriden when using this class.</p>\n\n<pre><code>var parser = new <a href=\"#!/api/CKEDITOR.htmlParser\" rel=\"CKEDITOR.htmlParser\" class=\"docClass\">CKEDITOR.htmlParser</a>();\nparser.onTagOpen = function( tagName, attributes, selfClosing ) {\n    alert( tagName ); // e.g. 'b'\n} );\nparser.parse( '&lt;!-- Example --&gt;&lt;b&gt;Hello&lt;/b&gt;' );\n</code></pre>\n"
    },
    "onText": {
     "!type": "fn(text: string) -> !this",
     "!doc": "<p>Function to be fired when text is found. This function\nshould be overriden when using this class.</p>\n\n<pre><code>var parser = new <a href=\"#!/api/CKEDITOR.htmlParser\" rel=\"CKEDITOR.htmlParser\" class=\"docClass\">CKEDITOR.htmlParser</a>();\nparser.onText = function( text ) {\n    alert( text ); // 'Hello'\n} );\nparser.parse( '&lt;!-- Example --&gt;&lt;b&gt;Hello&lt;/b&gt;' );\n</code></pre>\n"
    },
    "parse": {
     "!type": "fn(html: string) -> !this",
     "!doc": "<p>Parses text, looking for HTML tokens, like tag openers or closers,\nor comments. This function fires the onTagOpen, onTagClose, onText\nand onComment function during its execution.</p>\n\n<pre><code>var parser = new <a href=\"#!/api/CKEDITOR.htmlParser\" rel=\"CKEDITOR.htmlParser\" class=\"docClass\">CKEDITOR.htmlParser</a>();\n// The onTagOpen, onTagClose, onText and onComment should be overriden\n// at this point.\nparser.parse( '&lt;!-- Example --&gt;&lt;b&gt;Hello&lt;/b&gt;' );\n</code></pre>\n"
    }
   },
   "text": {
    "!doc": "<p>A lightweight representation of HTML text.</p>\n",
    "prototype": {
     "!type": "fn(value: string)",
     "_": {
      "!type": "?"
     },
     "type": {
      "!type": "number",
      "!doc": "<p>The node type. This is a constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_TEXT\" rel=\"CKEDITOR-property-NODE_TEXT\" class=\"docClass\">CKEDITOR.NODE_TEXT</a>.</p>\n"
     },
     "value": {
      "!type": "string",
      "!doc": "<p>The text value.</p>\n"
     },
     "filter": {
      "!type": "fn(filter: +CKEDITOR.htmlParser.filter) -> bool",
      "!doc": "<p>Filter this text node with given filter.</p>\n"
     },
     "writeHtml": {
      "!type": "fn(writer: +CKEDITOR.htmlParser.basicWriter, filter?: +CKEDITOR.htmlParser.filter) -> !this",
      "!doc": "<p>Writes the HTML representation of this text to a {<a href=\"#!/api/CKEDITOR.htmlParser.basicWriter\" rel=\"CKEDITOR.htmlParser.basicWriter\" class=\"docClass\">CKEDITOR.htmlParser.basicWriter</a>}.</p>\n"
     }
    }
   }
  },
  "!doc": "<p>This is the API entry point. The entire CKEditor code runs under this object.</p>\n",
  "disableAutoInline": {
   "!type": "bool",
   "!doc": "<p>Disables creating the inline editor automatically for elements with\nthe <code>contenteditable</code> attribute set to <code>true</code>.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR-cfg-disableAutoInline\" rel=\"CKEDITOR-cfg-disableAutoInline\" class=\"docClass\">CKEDITOR.disableAutoInline</a> = true;\n</code></pre>\n"
  },
  "replaceClass": {
   "!type": "string",
   "!doc": "<p>The class name used to identify <code>&lt;textarea&gt;</code> elements to be replaced\nby CKEditor instances. Set it to empty/<code>null</code> to disable this feature.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR-cfg-replaceClass\" rel=\"CKEDITOR-cfg-replaceClass\" class=\"docClass\">CKEDITOR.replaceClass</a> = 'rich_editor';\n</code></pre>\n"
  },
  "ALT": {
   "!type": "number",
   "!doc": "<p>ALT key (0x440000).</p>\n"
  },
  "CTRL": {
   "!type": "number",
   "!doc": "<p>CTRL key (0x110000).</p>\n"
  },
  "ELEMENT_MODE_APPENDTO": {
   "!type": "number",
   "!doc": "<p>The editor is to be created inside the element.</p>\n"
  },
  "ELEMENT_MODE_INLINE": {
   "!type": "number",
   "!doc": "<p>The editor is to be attached to the element, using it as the editing block.</p>\n"
  },
  "ELEMENT_MODE_NONE": {
   "!type": "number",
   "!doc": "<p>The editor has no associated element.</p>\n"
  },
  "ELEMENT_MODE_REPLACE": {
   "!type": "number",
   "!doc": "<p>The element is to be replaced by the editor instance.</p>\n"
  },
  "END": {
   "!type": "number",
   "!doc": "<p>See <a href=\"#!/api/CKEDITOR.dom.range-method-checkBoundaryOfElement\" rel=\"CKEDITOR.dom.range-method-checkBoundaryOfElement\" class=\"docClass\">CKEDITOR.dom.range.checkBoundaryOfElement</a>.</p>\n"
  },
  "ENTER_BR": {
   "!type": "number",
   "!doc": "<p>Used in conjunction with <a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">CKEDITOR.config.enterMode</a>\nand <a href=\"#!/api/CKEDITOR.config-cfg-shiftEnterMode\" rel=\"CKEDITOR.config-cfg-shiftEnterMode\" class=\"docClass\">CKEDITOR.config.shiftEnterMode</a> configuration\nsettings to make the editor produce <code>&lt;br&gt;</code> tags when\nusing the <em>Enter</em> key.</p>\n"
  },
  "ENTER_DIV": {
   "!type": "number",
   "!doc": "<p>Used in conjunction with <a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">CKEDITOR.config.enterMode</a>\nand <a href=\"#!/api/CKEDITOR.config-cfg-shiftEnterMode\" rel=\"CKEDITOR.config-cfg-shiftEnterMode\" class=\"docClass\">CKEDITOR.config.shiftEnterMode</a> configuration\nsettings to make the editor produce <code>&lt;div&gt;</code> tags when\nusing the <em>Enter</em> key.</p>\n"
  },
  "ENTER_P": {
   "!type": "number",
   "!doc": "<p>Used in conjunction with <a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">CKEDITOR.config.enterMode</a>\nand <a href=\"#!/api/CKEDITOR.config-cfg-shiftEnterMode\" rel=\"CKEDITOR.config-cfg-shiftEnterMode\" class=\"docClass\">CKEDITOR.config.shiftEnterMode</a> configuration\nsettings to make the editor produce <code>&lt;p&gt;</code> tags when\nusing the <em>Enter</em> key.</p>\n"
  },
  "EVENT_PHASE_AT_TARGET": {
   "!type": "number",
   "!doc": "<p>Event at target.</p>\n"
  },
  "EVENT_PHASE_BUBBLING": {
   "!type": "number",
   "!doc": "<p>Bubbling phase.</p>\n"
  },
  "EVENT_PHASE_CAPTURING": {
   "!type": "number",
   "!doc": "<p>Capturing phase.</p>\n"
  },
  "FILTER_SKIP_TREE": {
   "!type": "number",
   "!doc": "<p>A flag indicating that the current element and all its ancestors\nshould not be filtered.</p>\n\n<p>See <a href=\"#!/api/CKEDITOR.filter-method-addElementCallback\" rel=\"CKEDITOR.filter-method-addElementCallback\" class=\"docClass\">CKEDITOR.filter.addElementCallback</a> for more details.</p>\n"
  },
  "NODE_COMMENT": {
   "!type": "number",
   "!doc": "<p>Comment node type.</p>\n"
  },
  "NODE_DOCUMENT": {
   "!type": "number",
   "!doc": "<p>Document node type.</p>\n"
  },
  "NODE_DOCUMENT_FRAGMENT": {
   "!type": "number",
   "!doc": "<p>Document fragment node type.</p>\n"
  },
  "NODE_ELEMENT": {
   "!type": "number",
   "!doc": "<p>Element node type.</p>\n"
  },
  "NODE_TEXT": {
   "!type": "number",
   "!doc": "<p>Text node type.</p>\n"
  },
  "POSITION_AFTER_END": {
   "!type": "number",
   "!doc": "<p>Indicates a position after end of a node.</p>\n\n<pre><code>// When used according to an element:\n// &lt;element&gt;contents&lt;/element&gt;^ (range is anchored in element's parent)\n\n// When used according to a text node:\n// \"text\"^ (range is anchored in text node's parent)\n</code></pre>\n\n<p>It is used as a parameter of methods like: <a href=\"#!/api/CKEDITOR.dom.range-method-moveToPosition\" rel=\"CKEDITOR.dom.range-method-moveToPosition\" class=\"docClass\">CKEDITOR.dom.range.moveToPosition</a>,\n<a href=\"#!/api/CKEDITOR.dom.range-method-setStartAt\" rel=\"CKEDITOR.dom.range-method-setStartAt\" class=\"docClass\">CKEDITOR.dom.range.setStartAt</a> and <a href=\"#!/api/CKEDITOR.dom.range-method-setEndAt\" rel=\"CKEDITOR.dom.range-method-setEndAt\" class=\"docClass\">CKEDITOR.dom.range.setEndAt</a>.</p>\n"
  },
  "POSITION_AFTER_START": {
   "!type": "number",
   "!doc": "<p>Indicates a position after start of a node.</p>\n\n<pre><code>// When used according to an element:\n// &lt;element&gt;^contents&lt;/element&gt;\n\n// When used according to a text node:\n// \"^text\" (range is anchored in the text node)\n</code></pre>\n\n<p>It is used as a parameter of methods like: <a href=\"#!/api/CKEDITOR.dom.range-method-moveToPosition\" rel=\"CKEDITOR.dom.range-method-moveToPosition\" class=\"docClass\">CKEDITOR.dom.range.moveToPosition</a>,\n<a href=\"#!/api/CKEDITOR.dom.range-method-setStartAt\" rel=\"CKEDITOR.dom.range-method-setStartAt\" class=\"docClass\">CKEDITOR.dom.range.setStartAt</a> and <a href=\"#!/api/CKEDITOR.dom.range-method-setEndAt\" rel=\"CKEDITOR.dom.range-method-setEndAt\" class=\"docClass\">CKEDITOR.dom.range.setEndAt</a>.</p>\n"
  },
  "POSITION_BEFORE_END": {
   "!type": "number",
   "!doc": "<p>Indicates a position before end of a node.</p>\n\n<pre><code>// When used according to an element:\n// &lt;element&gt;contents^&lt;/element&gt;\n\n// When used according to a text node:\n// \"text^\" (range is anchored in the text node)\n</code></pre>\n\n<p>It is used as a parameter of methods like: <a href=\"#!/api/CKEDITOR.dom.range-method-moveToPosition\" rel=\"CKEDITOR.dom.range-method-moveToPosition\" class=\"docClass\">CKEDITOR.dom.range.moveToPosition</a>,\n<a href=\"#!/api/CKEDITOR.dom.range-method-setStartAt\" rel=\"CKEDITOR.dom.range-method-setStartAt\" class=\"docClass\">CKEDITOR.dom.range.setStartAt</a> and <a href=\"#!/api/CKEDITOR.dom.range-method-setEndAt\" rel=\"CKEDITOR.dom.range-method-setEndAt\" class=\"docClass\">CKEDITOR.dom.range.setEndAt</a>.</p>\n"
  },
  "POSITION_BEFORE_START": {
   "!type": "number",
   "!doc": "<p>Indicates a position before start of a node.</p>\n\n<pre><code>// When used according to an element:\n// ^&lt;element&gt;contents&lt;/element&gt; (range is anchored in element's parent)\n\n// When used according to a text node:\n// ^\"text\" (range is anchored in text node's parent)\n</code></pre>\n\n<p>It is used as a parameter of methods like: <a href=\"#!/api/CKEDITOR.dom.range-method-moveToPosition\" rel=\"CKEDITOR.dom.range-method-moveToPosition\" class=\"docClass\">CKEDITOR.dom.range.moveToPosition</a>,\n<a href=\"#!/api/CKEDITOR.dom.range-method-setStartAt\" rel=\"CKEDITOR.dom.range-method-setStartAt\" class=\"docClass\">CKEDITOR.dom.range.setStartAt</a> and <a href=\"#!/api/CKEDITOR.dom.range-method-setEndAt\" rel=\"CKEDITOR.dom.range-method-setEndAt\" class=\"docClass\">CKEDITOR.dom.range.setEndAt</a>.</p>\n"
  },
  "SELECTION_ELEMENT": {
   "!type": "number",
   "!doc": "<p>Element selection.</p>\n\n<pre><code>if ( editor.getSelection().getType() == <a href=\"#!/api/CKEDITOR-property-SELECTION_ELEMENT\" rel=\"CKEDITOR-property-SELECTION_ELEMENT\" class=\"docClass\">CKEDITOR.SELECTION_ELEMENT</a> )\n    alert( 'An element is selected' );\n</code></pre>\n"
  },
  "SELECTION_NONE": {
   "!type": "number",
   "!doc": "<p>No selection.</p>\n\n<pre><code>if ( editor.getSelection().getType() == <a href=\"#!/api/CKEDITOR-property-SELECTION_NONE\" rel=\"CKEDITOR-property-SELECTION_NONE\" class=\"docClass\">CKEDITOR.SELECTION_NONE</a> )\n    alert( 'Nothing is selected' );\n</code></pre>\n"
  },
  "SELECTION_TEXT": {
   "!type": "number",
   "!doc": "<p>A text or a collapsed selection.</p>\n\n<pre><code>if ( editor.getSelection().getType() == <a href=\"#!/api/CKEDITOR-property-SELECTION_TEXT\" rel=\"CKEDITOR-property-SELECTION_TEXT\" class=\"docClass\">CKEDITOR.SELECTION_TEXT</a> )\n    alert( 'A text is selected' );\n</code></pre>\n"
  },
  "SHIFT": {
   "!type": "number",
   "!doc": "<p>SHIFT key (0x220000).</p>\n"
  },
  "SHRINK_ELEMENT": {
   "!type": "number",
   "!doc": "<p>See <a href=\"#!/api/CKEDITOR.dom.range-method-shrink\" rel=\"CKEDITOR.dom.range-method-shrink\" class=\"docClass\">CKEDITOR.dom.range.shrink</a>.</p>\n"
  },
  "SHRINK_TEXT": {
   "!type": "number",
   "!doc": "<p>See <a href=\"#!/api/CKEDITOR.dom.range-method-shrink\" rel=\"CKEDITOR.dom.range-method-shrink\" class=\"docClass\">CKEDITOR.dom.range.shrink</a>.</p>\n"
  },
  "START": {
   "!type": "number",
   "!doc": "<p>See <a href=\"#!/api/CKEDITOR.dom.range-method-checkBoundaryOfElement\" rel=\"CKEDITOR.dom.range-method-checkBoundaryOfElement\" class=\"docClass\">CKEDITOR.dom.range.checkBoundaryOfElement</a>.</p>\n"
  },
  "STYLE_BLOCK": {
   "!type": "number",
   "!doc": "<p>Block style type.</p>\n\n<p>Read more in the <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> class documentation.</p>\n"
  },
  "STYLE_INLINE": {
   "!type": "number",
   "!doc": "<p>Inline style type.</p>\n\n<p>Read more in the <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> class documentation.</p>\n"
  },
  "STYLE_OBJECT": {
   "!type": "number",
   "!doc": "<p>Object style type.</p>\n\n<p>Read more in the <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> class documentation.</p>\n"
  },
  "TRISTATE_DISABLED": {
   "!type": "number",
   "!doc": "<p>Used to indicate the DISABLED state.</p>\n"
  },
  "TRISTATE_OFF": {
   "!type": "number",
   "!doc": "<p>Used to indicate the OFF or INACTIVE state.</p>\n"
  },
  "TRISTATE_ON": {
   "!type": "number",
   "!doc": "<p>Used to indicate the ON or ACTIVE state.</p>\n"
  },
  "_": {
   "!type": "?",
   "!doc": "<p>Private object used to hold core stuff. It should not be used outside of\nthe API code as properties defined here may change at any time\nwithout notice.</p>\n"
  },
  "basePath": {
   "!type": "string",
   "!doc": "<p>The full URL for the CKEditor installation directory.\nIt is possible to manually provide the base path by setting a\nglobal variable named <code>CKEDITOR_BASEPATH</code>. This global variable\nmust be set <strong>before</strong> the editor script loading.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR-property-basePath\" rel=\"CKEDITOR-property-basePath\" class=\"docClass\">CKEDITOR.basePath</a> ); // e.g. 'http://www.example.com/ckeditor/'\n</code></pre>\n"
  },
  "currentInstance": {
   "!type": "fn()",
   "!doc": "<p>Fired when the <a href=\"#!/api/CKEDITOR-property-currentInstance\" rel=\"CKEDITOR-property-currentInstance\" class=\"docClass\">CKEDITOR.currentInstance</a> object reference changes. This may\nhappen when setting the focus on different editor instances in the page.</p>\n\n<pre><code>var editor; // A variable to store a reference to the current editor.\nCKEDITOR.on( 'currentInstance', function() {\n    editor = <a href=\"#!/api/CKEDITOR-property-currentInstance\" rel=\"CKEDITOR-property-currentInstance\" class=\"docClass\">CKEDITOR.currentInstance</a>;\n} );\n</code></pre>\n"
  },
  "document": {
   "!type": "+CKEDITOR.dom.document",
   "!doc": "<p>The document of the window storing the CKEDITOR object.</p>\n\n<pre><code>alert( CKEDITOR.document.getBody().getName() ); // 'body'\n</code></pre>\n"
  },
  "instances": {
   "!type": "?",
   "!doc": "<p>Stores references to all editor instances created. The name of the properties\nin this object correspond to instance names, and their values contain the\n<a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">CKEDITOR.editor</a> object representing them.</p>\n\n<pre><code>alert( CKEDITOR.instances.editor1.name ); // 'editor1'\n</code></pre>\n"
  },
  "loadFullCoreTimeout": {
   "!type": "number",
   "!doc": "<p>The time to wait (in seconds) to load the full editor code after the\npage load, if the \"ckeditor_basic\" file is used. If set to zero, the\neditor is loaded on demand, as soon as an instance is created.</p>\n\n<p>This value must be set on the page before the page load completion.</p>\n\n<pre><code>// Loads the full source after five seconds.\n<a href=\"#!/api/CKEDITOR-property-loadFullCoreTimeout\" rel=\"CKEDITOR-property-loadFullCoreTimeout\" class=\"docClass\">CKEDITOR.loadFullCoreTimeout</a> = 5;\n</code></pre>\n"
  },
  "revision": {
   "!type": "string",
   "!doc": "<p>Contains the CKEditor revision number.\nThe revision number is incremented automatically, following each\nmodification to the CKEditor source code.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR-property-revision\" rel=\"CKEDITOR-property-revision\" class=\"docClass\">CKEDITOR.revision</a> ); // e.g. '3975'\n</code></pre>\n"
  },
  "rnd": {
   "!type": "number",
   "!doc": "<p>A 3-digit random integer, valid for the entire life of the CKEDITOR object.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR-property-rnd\" rel=\"CKEDITOR-property-rnd\" class=\"docClass\">CKEDITOR.rnd</a> ); // e.g. 319\n</code></pre>\n"
  },
  "status": {
   "!type": "string",
   "!doc": "<p>Indicates the API loading status. The following statuses are available:</p>\n\n<ul>\n<li><strong>unloaded</strong>: the API is not yet loaded.</li>\n<li><strong>basic_loaded</strong>: the basic API features are available.</li>\n<li><strong>basic_ready</strong>: the basic API is ready to load the full core code.</li>\n<li><strong>loaded</strong>: the API can be fully used.</li>\n</ul>\n\n\n<p>Example:</p>\n\n<pre><code>if ( <a href=\"#!/api/CKEDITOR-property-status\" rel=\"CKEDITOR-property-status\" class=\"docClass\">CKEDITOR.status</a> == 'loaded' ) {\n    // The API can now be fully used.\n    doSomething();\n} else {\n    // Wait for the full core to be loaded and fire its loading.\n    CKEDITOR.on( 'load', doSomething );\n    <a href=\"#!/api/CKEDITOR-method-loadFullCore\" rel=\"CKEDITOR-method-loadFullCore\" class=\"docClass\">CKEDITOR.loadFullCore</a> &amp;&amp; <a href=\"#!/api/CKEDITOR-method-loadFullCore\" rel=\"CKEDITOR-method-loadFullCore\" class=\"docClass\">CKEDITOR.loadFullCore</a>();\n}\n</code></pre>\n"
  },
  "timestamp": {
   "!type": "string",
   "!doc": "<p>A constant string unique for each release of CKEditor. Its value\nis used, by default, to build the URL for all resources loaded\nby the editor code, guaranteeing clean cache results when\nupgrading.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR-property-timestamp\" rel=\"CKEDITOR-property-timestamp\" class=\"docClass\">CKEDITOR.timestamp</a> ); // e.g. '87dm'\n</code></pre>\n"
  },
  "version": {
   "!type": "string",
   "!doc": "<p>Contains the CKEditor version number.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR-property-version\" rel=\"CKEDITOR-property-version\" class=\"docClass\">CKEDITOR.version</a> ); // e.g. 'CKEditor 3.4.1'\n</code></pre>\n"
  },
  "add": {
   "!type": "fn(editor: +CKEDITOR.editor) -> !this",
   "!doc": "<p>Adds an editor instance to the global <a href=\"#!/api/CKEDITOR\" rel=\"CKEDITOR\" class=\"docClass\">CKEDITOR</a> object. This function\nis available for internal use mainly.</p>\n"
  },
  "addCss": {
   "!type": "fn(css: string) -> !this",
   "!doc": "<p>Adds CSS rules to be appended to the editor document.\nThis method is mostly used by plugins to add custom styles to the editor\ndocument. For basic content styling the <code>contents.css</code> file should be\nused instead.</p>\n\n<p><strong>Note:</strong> This function should be called before the creation of editor instances.</p>\n\n<pre><code>// Add styles for all headings inside editable contents.\n<a href=\"#!/api/CKEDITOR-method-addCss\" rel=\"CKEDITOR-method-addCss\" class=\"docClass\">CKEDITOR.addCss</a>( '.cke_editable h1,.cke_editable h2,.cke_editable h3 { border-bottom: 1px dotted red }' );\n</code></pre>\n"
  },
  "addTemplate": {
   "!type": "fn(name: string, source: string) -> +CKEDITOR.template",
   "!doc": "<p>Adds a named <a href=\"#!/api/CKEDITOR.template\" rel=\"CKEDITOR.template\" class=\"docClass\">CKEDITOR.template</a> instance to be reused among all editors.\nThis will return the existing one if a template with same name is already\ndefined. Additionally, it fires the \"template\" event to allow template source customization.</p>\n"
  },
  "appendTo": {
   "!type": "fn(element: ?|string, config?: ?, data?: string) -> +CKEDITOR.editor",
   "!doc": "<p>Creates a new editor instance at the end of a specific DOM element.</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n    &lt;html&gt;\n        &lt;head&gt;\n            &lt;meta charset=\"utf-8\"&gt;\n            &lt;title&gt;CKEditor&lt;/title&gt;\n            &lt;!-- Make sure the path to CKEditor is correct. --&gt;\n        &lt;script src=\"/ckeditor/ckeditor.js\"&gt;&lt;/script&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n        &lt;div id=\"editorSpace\"&gt;&lt;/div&gt;\n        &lt;script&gt;\n            <a href=\"#!/api/CKEDITOR-method-appendTo\" rel=\"CKEDITOR-method-appendTo\" class=\"docClass\">CKEDITOR.appendTo</a>( 'editorSpace' );\n        &lt;/script&gt;\n    &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n"
  },
  "domReady": {
   "!type": "fn() -> !this",
   "!doc": "<p>Specify a function to execute when the DOM is fully loaded.</p>\n\n<p>If called after the DOM has been initialized, the function passed in will\nbe executed immediately.</p>\n\n<p>@todo</p>\n"
  },
  "editorConfig": {
   "!type": "fn(config: +CKEDITOR.config)",
   "!doc": "<p>Function called upon loading a custom configuration file that can\nmodify the editor instance configuration (<a href=\"#!/api/CKEDITOR.editor-property-config\" rel=\"CKEDITOR.editor-property-config\" class=\"docClass\">CKEDITOR.editor.config</a>).\nIt is usually defined inside the custom configuration files that can\ninclude developer defined settings.</p>\n\n<pre><code>// This is supposed to be placed in the config.js file.\n<a href=\"#!/api/CKEDITOR-method-editorConfig\" rel=\"CKEDITOR-method-editorConfig\" class=\"docClass\">CKEDITOR.editorConfig</a> = function( config ) {\n    // Define changes to default configuration here. For example:\n    config.language = 'fr';\n    config.uiColor = '#AADC6E';\n};\n</code></pre>\n"
  },
  "getCss": {
   "!type": "fn() -> string",
   "!doc": "<p>Returns a string will all CSS rules passed to the <a href=\"#!/api/CKEDITOR-method-addCss\" rel=\"CKEDITOR-method-addCss\" class=\"docClass\">addCss</a> method.</p>\n"
  },
  "getTemplate": {
   "!type": "fn(name: string) -> !this",
   "!doc": "<p>Retrieves a defined template created with <a href=\"#!/api/CKEDITOR-method-addTemplate\" rel=\"CKEDITOR-method-addTemplate\" class=\"docClass\">addTemplate</a>.</p>\n"
  },
  "getUrl": {
   "!type": "fn(resource: string) -> string",
   "!doc": "<p>Gets the full URL for CKEditor resources. By default, URLs\nreturned by this function contain a querystring parameter (\"t\")\nset to the <a href=\"#!/api/CKEDITOR-property-timestamp\" rel=\"CKEDITOR-property-timestamp\" class=\"docClass\">timestamp</a> value.</p>\n\n<p>It is possible to provide a custom implementation of this\nfunction by setting a global variable named <code>CKEDITOR_GETURL</code>.\nThis global variable must be set <strong>before</strong> the editor script\nloading. If the custom implementation returns nothing (<code>==null</code>), the\ndefault implementation is used.</p>\n\n<pre><code>// e.g. 'http://www.example.com/ckeditor/skins/default/editor.css?t=87dm'\nalert( <a href=\"#!/api/CKEDITOR-method-getUrl\" rel=\"CKEDITOR-method-getUrl\" class=\"docClass\">CKEDITOR.getUrl</a>( 'skins/default/editor.css' ) );\n\n// e.g. 'http://www.example.com/skins/default/editor.css?t=87dm'\nalert( <a href=\"#!/api/CKEDITOR-method-getUrl\" rel=\"CKEDITOR-method-getUrl\" class=\"docClass\">CKEDITOR.getUrl</a>( '/skins/default/editor.css' ) );\n\n// e.g. 'http://www.somesite.com/skins/default/editor.css?t=87dm'\nalert( <a href=\"#!/api/CKEDITOR-method-getUrl\" rel=\"CKEDITOR-method-getUrl\" class=\"docClass\">CKEDITOR.getUrl</a>( 'http://www.somesite.com/skins/default/editor.css' ) );\n</code></pre>\n"
  },
  "inline": {
   "!type": "fn(element: ?|string, instanceConfig?: ?) -> +CKEDITOR.editor",
   "!doc": "<p>Turns a DOM element with the <code>contenteditable</code> attribute set to <code>true</code> into a\nCKEditor instance. Check <a href=\"#!/api/CKEDITOR.dtd-property-S-editable\" rel=\"CKEDITOR.dtd-property-S-editable\" class=\"docClass\">CKEDITOR.dtd.$editable</a> for a list of\nallowed element names.</p>\n\n<p><strong>Note:</strong> If the DOM element for which inline editing is being enabled does not have\nthe <code>contenteditable</code> attribute set to <code>true</code>, the editor will start in read-only mode.</p>\n\n<pre><code>&lt;div contenteditable=\"true\" id=\"content\"&gt;...&lt;/div&gt;\n...\n<a href=\"#!/api/CKEDITOR-method-inline\" rel=\"CKEDITOR-method-inline\" class=\"docClass\">CKEDITOR.inline</a>( 'content' );\n</code></pre>\n\n<p>It is also possible to create an inline editor from the <code>&lt;textarea&gt;</code> element.\nIf you do so, an additional <code>&lt;div&gt;</code> element with editable content will be created\ndirectly after the <code>&lt;textarea&gt;</code> element and the <code>&lt;textarea&gt;</code> element will be hidden.</p>\n"
  },
  "inlineAll": {
   "!type": "fn() -> !this",
   "!doc": "<p>Calls <a href=\"#!/api/CKEDITOR-method-inline\" rel=\"CKEDITOR-method-inline\" class=\"docClass\">inline</a> for all page elements with\nthe <code>contenteditable</code> attribute set to <code>true</code>.</p>\n"
  },
  "loadFullCore": {
   "!type": "fn() -> !this",
   "!doc": "<p>Forces the full CKEditor core code, in the case only the basic code has been\nloaded (<code>ckeditor_basic.js</code>). This method self-destroys (becomes undefined) in\nthe first call or as soon as the full code is available.</p>\n\n<pre><code>// Check if the full core code has been loaded and load it.\nif ( <a href=\"#!/api/CKEDITOR-method-loadFullCore\" rel=\"CKEDITOR-method-loadFullCore\" class=\"docClass\">CKEDITOR.loadFullCore</a> )\n    <a href=\"#!/api/CKEDITOR-method-loadFullCore\" rel=\"CKEDITOR-method-loadFullCore\" class=\"docClass\">CKEDITOR.loadFullCore</a>();\n</code></pre>\n"
  },
  "remove": {
   "!type": "fn(editor: +CKEDITOR.editor) -> !this",
   "!doc": "<p>Removes an editor instance from the global <a href=\"#!/api/CKEDITOR\" rel=\"CKEDITOR\" class=\"docClass\">CKEDITOR</a> object. This function\nis available for internal use only. External code must use <a href=\"#!/api/CKEDITOR.editor-method-destroy\" rel=\"CKEDITOR.editor-method-destroy\" class=\"docClass\">CKEDITOR.editor.destroy</a>.</p>\n"
  },
  "replace": {
   "!type": "fn(element: ?|string, config?: ?) -> +CKEDITOR.editor",
   "!doc": "<p>Replaces a <code>&lt;textarea&gt;</code> or a DOM element (<code>&lt;div&gt;</code>) with a CKEditor\ninstance. For textareas, the initial value in the editor will be the\ntextarea value. For DOM elements, their <code>innerHTML</code> will be used\ninstead. We recommend using <code>&lt;textarea&gt;</code> and <code>&lt;div&gt;</code> elements only.</p>\n\n<pre><code>&lt;textarea id=\"myfield\" name=\"myfield\"&gt;&lt;/textarea&gt;\n...\n<a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( 'myfield' );\n\nvar textarea = document.body.appendChild( document.createElement( 'textarea' ) );\n<a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( textarea );\n</code></pre>\n"
  },
  "replaceAll": {
   "!type": "fn(className?: string, function?: fn()) -> !this",
   "!doc": "<p>Replaces all <code>&lt;textarea&gt;</code> elements available in the document with\neditor instances.</p>\n\n<pre><code>// Replace all &lt;textarea&gt; elements in the page.\n<a href=\"#!/api/CKEDITOR-method-replaceAll\" rel=\"CKEDITOR-method-replaceAll\" class=\"docClass\">CKEDITOR.replaceAll</a>();\n\n// Replace all &lt;textarea class=\"myClassName\"&gt; elements in the page.\n<a href=\"#!/api/CKEDITOR-method-replaceAll\" rel=\"CKEDITOR-method-replaceAll\" class=\"docClass\">CKEDITOR.replaceAll</a>( 'myClassName' );\n\n// Selectively replace &lt;textarea&gt; elements, based on custom assertions.\n<a href=\"#!/api/CKEDITOR-method-replaceAll\" rel=\"CKEDITOR-method-replaceAll\" class=\"docClass\">CKEDITOR.replaceAll</a>( function( textarea, config ) {\n    // An assertion function that needs to be evaluated for the &lt;textarea&gt;\n    // to be replaced. It must explicitely return \"false\" to ignore a\n    // specific &lt;textarea&gt;.\n    // You can also customize the editor instance by having the function\n    // modify the \"config\" parameter.\n} );\n\n// Full page example where three &lt;textarea&gt; elements are replaced.\n&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n    &lt;head&gt;\n        &lt;meta charset=\"utf-8\"&gt;\n        &lt;title&gt;CKEditor&lt;/title&gt;\n        &lt;!-- Make sure the path to CKEditor is correct. --&gt;\n        &lt;script src=\"/ckeditor/ckeditor.js\"&gt;&lt;/script&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n        &lt;textarea name=\"editor1\"&gt;&lt;/textarea&gt;\n        &lt;textarea name=\"editor2\"&gt;&lt;/textarea&gt;\n        &lt;textarea name=\"editor3\"&gt;&lt;/textarea&gt;\n        &lt;script&gt;\n            // Replace all three &lt;textarea&gt; elements above with CKEditor instances.\n            <a href=\"#!/api/CKEDITOR-method-replaceAll\" rel=\"CKEDITOR-method-replaceAll\" class=\"docClass\">CKEDITOR.replaceAll</a>();\n        &lt;/script&gt;\n    &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n"
  },
  "instanceCreated": {
   "!type": "fn(editor: +CKEDITOR.editor)",
   "!doc": "<p>Fired when a CKEDITOR instance is created, but still before initializing it.\nTo interact with a fully initialized instance, use the\n<a href=\"#!/api/CKEDITOR-event-instanceReady\" rel=\"CKEDITOR-event-instanceReady\" class=\"docClass\">instanceReady</a> event instead.</p>\n"
  },
  "instanceDestroyed": {
   "!type": "fn(editor: +CKEDITOR.editor)",
   "!doc": "<p>Fired when a CKEDITOR instance is destroyed.</p>\n"
  },
  "instanceLoaded": {
   "!type": "fn(editor: +CKEDITOR.editor)",
   "!doc": "<p>Fired when CKEDITOR instance's components (configuration, languages and plugins) are fully\nloaded and initialized. However, the editor will be fully ready for interaction\non <a href=\"#!/api/CKEDITOR-event-instanceReady\" rel=\"CKEDITOR-event-instanceReady\" class=\"docClass\">instanceReady</a>.</p>\n"
  },
  "instanceReady": {
   "!type": "fn(editor: +CKEDITOR.editor)",
   "!doc": "<p>Fired when a CKEDITOR instance is created, fully initialized and ready for interaction.</p>\n"
  },
  "loaded": {
   "!type": "fn()",
   "!doc": "<p>Fired when a CKEDITOR core object is fully loaded and ready for interaction.</p>\n"
  },
  "reset": {
   "!type": "fn()",
   "!doc": "<p>Fired when the last instance has been destroyed. This event is used to perform\nglobal memory cleanup.</p>\n"
  },
  "keystrokeHandler": {
   "!doc": "<p>Controls keystrokes typing in an editor instance.</p>\n",
   "prototype": {
    "!type": "fn(editor: +CKEDITOR.editor)",
    "blockedKeystrokes": {
     "!type": "?",
     "!doc": "<p>A list of keystrokes that should be blocked if not defined in\n<a href=\"#!/api/CKEDITOR.keystrokeHandler-property-keystrokes\" rel=\"CKEDITOR.keystrokeHandler-property-keystrokes\" class=\"docClass\">keystrokes</a>. In this way it is possible to block the default\nbrowser behavior for those keystrokes.</p>\n"
    },
    "keystrokes": {
     "!type": "?",
     "!doc": "<p>A list of keystrokes associated with commands. Each entry points to the\ncommand to be executed.</p>\n\n<p>Since CKEditor 4 there is no need to modify this property directly during the runtime.\nUse <a href=\"#!/api/CKEDITOR.editor-method-setKeystroke\" rel=\"CKEDITOR.editor-method-setKeystroke\" class=\"docClass\">CKEDITOR.editor.setKeystroke</a> instead.</p>\n"
    },
    "attach": {
     "!type": "fn(domObject: +CKEDITOR.dom.domObject) -> !this",
     "!doc": "<p>Attaches this keystroke handle to a DOM object. Keystrokes typed\nover this object will be handled by this keystrokeHandler.</p>\n"
    }
   }
  },
  "lang": {
   "!doc": "<p>Stores language-related functions.</p>\n",
   "languages": {
    "!type": "?",
    "!doc": "<p>The list of languages available in the editor core.</p>\n\n<pre><code>alert( CKEDITOR.lang.languages.en ); // 1\n</code></pre>\n"
   },
   "rtl": {
    "!type": "?",
    "!doc": "<p>The list of languages that are written Right-To-Left (RTL) and are supported by the editor.</p>\n"
   },
   "detect": {
    "!type": "fn(defaultLanguage: string, probeLanguage?: string) -> string",
    "!doc": "<p>Returns the language that best fits the user language. For example,\nsuppose that the user language is \"pt-br\". If this language is\nsupported by the editor, it is returned. Otherwise, if only \"pt\" is\nsupported, it is returned instead. If none of the previous are\nsupported, a default language is then returned.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.lang-method-detect\" rel=\"CKEDITOR.lang-method-detect\" class=\"docClass\">CKEDITOR.lang.detect</a>( 'en' ) ); // e.g., in a German browser: 'de'\n</code></pre>\n"
   },
   "load": {
    "!type": "fn(languageCode: string, defaultLanguage: string, callback: fn()) -> !this",
    "!doc": "<p>Loads a specific language file, or auto detects it. A callback is\nthen called when the file gets loaded.</p>\n"
   }
  },
  "loader": {
   "!doc": "<p>Load core scripts and their dependencies from _source.</p>\n",
   "loadedScripts": {
    "!type": "[?]",
    "!doc": "<p>The list of loaded scripts in their loading order.</p>\n\n<pre><code>// Alert the loaded script names.\nalert( <a href=\"#!/api/CKEDITOR.loader-property-loadedScripts\" rel=\"CKEDITOR.loader-property-loadedScripts\" class=\"docClass\">CKEDITOR.loader.loadedScripts</a> );\n</code></pre>\n"
   },
   "scripts": {
    "!type": "[?]",
    "!doc": "<p>Table of script names and their dependencies.</p>\n"
   },
   "load": {
    "!type": "fn(scriptName: string, defer?: bool) -> !this",
    "!doc": "<p>Loads a specific script, including its dependencies. This is not a\nsynchronous loading, which means that the code to be loaded will\nnot necessarily be available after this call.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.loader-method-load\" rel=\"CKEDITOR.loader-method-load\" class=\"docClass\">CKEDITOR.loader.load</a>( 'dom/element' );\n</code></pre>\n"
   },
   "loadPending": {
    "!type": "fn() -> !this",
    "!doc": "<p>@todo</p>\n"
   }
  },
  "pluginDefinition": {
   "!doc": "<p>A virtual class that just illustrates the features of plugin objects which are\npassed to the <a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a> method.</p>\n\n<p>This class is not really a part of the API, so its constructor should not be called.</p>\n\n<p>See also:</p>\n\n<ul>\n<li><a href=\"#!/guide/plugin_sdk_intro\">The Plugin SDK</a></li>\n<li><a href=\"#!/guide/plugin_sdk_sample\">Creating a CKEditor plugin in 20 Lines of Code</a></li>\n<li><a href=\"#!/guide/plugin_sdk_sample_1\">Creating a Simple Plugin Tutorial</a></li>\n</ul>\n\n",
   "prototype": {
    "hidpi": {
     "!type": "bool",
     "!doc": "<p>Announces the plugin as HiDPI-ready (optimized for high pixel density screens, e.g. <em>Retina</em>)\nby providing high-resolution icons and images. HiDPI icons must be twice as big\n(defaults are <code>16px x 16px</code>) and stored under <code>plugin_name/icons/hidpi/</code> directory.</p>\n\n<p>The common place for additional HiDPI images used by the plugin (<strong>but not icons</strong>)\nis the <code>plugin_name/images/hidpi/</code> directory.</p>\n\n<p>This property is optional and only makes sense if <code>32px x 32px</code> icons\nand high-resolution images actually exist. If this flag is set to <code>true</code>, the editor\nwill automatically detect the HiDPI environment and attempt to load the\nhigh-resolution resources.</p>\n"
    },
    "lang": {
     "!type": "string|[string]",
     "!doc": "<p>The list of language files available for this plugin. These files are stored inside\nthe <code>lang</code> directory in the plugin directory, follow the name\npattern of <code>langCode.js</code>, and contain the language definition created with\n<a href=\"#!/api/CKEDITOR.plugins-method-setLang\" rel=\"CKEDITOR.plugins-method-setLang\" class=\"docClass\">CKEDITOR.plugins.setLang</a>.</p>\n\n<p>When the plugin is being loaded, the editor checks this list to see if\na language file in the current editor language (<a href=\"#!/api/CKEDITOR.editor-property-langCode\" rel=\"CKEDITOR.editor-property-langCode\" class=\"docClass\">CKEDITOR.editor.langCode</a>)\nis available, and if so, loads it. Otherwise, the file represented by the first item\nin the list is loaded.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample', {\n    lang: 'en,fr'\n} );\n</code></pre>\n\n<p>Or:</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample', {\n    lang: [ 'en', 'fr' ]\n} );\n</code></pre>\n"
    },
    "requires": {
     "!type": "string|[string]",
     "!doc": "<p>A list of plugins that are required by this plugin. Note that this property\ndoes not determine the loading order of the plugins.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample', {\n    requires: 'button,selection'\n} );\n</code></pre>\n\n<p>Or:</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample', {\n    requires: [ 'button', 'selection' ]\n} );\n</code></pre>\n"
    },
    "afterInit": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>A function called on initialization of every editor instance created on the\npage after the <a href=\"#!/api/CKEDITOR.pluginDefinition-method-init\" rel=\"CKEDITOR.pluginDefinition-method-init\" class=\"docClass\">init</a> call task. This feature makes it possible to use things\nthat were initialized in the <code>init</code> function of other plugins.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample1', {\n    afterInit: function( editor ) {\n        // This will work regardless of order in which\n        // plugins sample1 and sample2 where initialized.\n        console.log( editor.foo ); // 'bar'\n    }\n} );\n\n<a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample2', {\n    init: function( editor ) {\n        editor.foo = 'bar';\n    }\n} );\n</code></pre>\n\n<p>Read more about the initialization order in the <a href=\"#!/api/CKEDITOR.pluginDefinition-method-init\" rel=\"CKEDITOR.pluginDefinition-method-init\" class=\"docClass\">init</a> method documentation.</p>\n"
    },
    "beforeInit": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>A function called on initialization of every editor instance created on the\npage before the <a href=\"#!/api/CKEDITOR.pluginDefinition-method-init\" rel=\"CKEDITOR.pluginDefinition-method-init\" class=\"docClass\">init</a> call task. This feature makes it possible to\ninitialize things that could be used in the <code>init</code> function of other plugins.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample1', {\n    beforeInit: function( editor ) {\n        editor.foo = 'bar';\n    }\n} );\n\n<a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample2', {\n    init: function( editor ) {\n        // This will work regardless of order in which\n        // plugins sample1 and sample2 where initialized.\n        console.log( editor.foo ); // 'bar'\n    }\n} );\n</code></pre>\n\n<p>Read more about the initialization order in the <a href=\"#!/api/CKEDITOR.pluginDefinition-method-init\" rel=\"CKEDITOR.pluginDefinition-method-init\" class=\"docClass\">init</a> method documentation.</p>\n"
    },
    "init": {
     "!type": "fn(editor: +CKEDITOR.editor)",
     "!doc": "<p>A function called on initialization of every editor instance created on the page.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample', {\n    init: function( editor ) {\n        console.log( 'Editor \"' + editor.name + '\" is being initialized!' );\n    }\n} );\n</code></pre>\n\n<p>Initialization order:</p>\n\n<ol>\n<li>The <a href=\"#!/api/CKEDITOR.pluginDefinition-method-beforeInit\" rel=\"CKEDITOR.pluginDefinition-method-beforeInit\" class=\"docClass\">beforeInit</a> methods of all enabled plugins are executed.</li>\n<li>The <a href=\"#!/api/CKEDITOR.pluginDefinition-method-init\" rel=\"CKEDITOR.pluginDefinition-method-init\" class=\"docClass\">init</a> methods of all enabled plugins are executed.</li>\n<li>The <a href=\"#!/api/CKEDITOR.pluginDefinition-method-afterInit\" rel=\"CKEDITOR.pluginDefinition-method-afterInit\" class=\"docClass\">afterInit</a> methods of all enabled plugins are executed.</li>\n<li>The <a href=\"#!/api/CKEDITOR.editor-event-pluginsLoaded\" rel=\"CKEDITOR.editor-event-pluginsLoaded\" class=\"docClass\">CKEDITOR.editor.pluginsLoaded</a> event is fired.</li>\n</ol>\n\n\n<p><strong>Note:</strong> The order in which the <code>init</code> methods are called does not depend on the plugins' <a href=\"#!/api/CKEDITOR.pluginDefinition-property-requires\" rel=\"CKEDITOR.pluginDefinition-property-requires\" class=\"docClass\">requirements</a>\nor the order set in the <a href=\"#!/api/CKEDITOR.config-cfg-plugins\" rel=\"CKEDITOR.config-cfg-plugins\" class=\"docClass\">CKEDITOR.config.plugins</a> option. It may be random and therefore it is\nrecommended to use the <a href=\"#!/api/CKEDITOR.pluginDefinition-method-beforeInit\" rel=\"CKEDITOR.pluginDefinition-method-beforeInit\" class=\"docClass\">beforeInit</a> and <a href=\"#!/api/CKEDITOR.pluginDefinition-method-afterInit\" rel=\"CKEDITOR.pluginDefinition-method-afterInit\" class=\"docClass\">afterInit</a> methods in order to ensure\nthe right execution sequence.</p>\n\n<p>See also the <a href=\"#!/api/CKEDITOR.pluginDefinition-method-onLoad\" rel=\"CKEDITOR.pluginDefinition-method-onLoad\" class=\"docClass\">onLoad</a> method.</p>\n"
    },
    "onLoad": {
     "!type": "fn()",
     "!doc": "<p>A function called when the plugin definition is loaded for the first time.\nIt is usually used to execute some code once for the entire page,\nfor instance code that uses the <a href=\"#!/api/CKEDITOR\" rel=\"CKEDITOR\" class=\"docClass\">CKEDITOR</a>'s methods such as the <a href=\"#!/api/CKEDITOR-method-addCss\" rel=\"CKEDITOR-method-addCss\" class=\"docClass\">CKEDITOR.addCss</a> method.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample', {\n    onLoad: function() {\n        <a href=\"#!/api/CKEDITOR-method-addCss\" rel=\"CKEDITOR-method-addCss\" class=\"docClass\">CKEDITOR.addCss</a>( '.cke_some_class { ... }' );\n    }\n} );\n</code></pre>\n\n<p>Read more about the initialization order in the <a href=\"#!/api/CKEDITOR.pluginDefinition-method-init\" rel=\"CKEDITOR.pluginDefinition-method-init\" class=\"docClass\">init</a> method documentation.</p>\n"
    }
   }
  },
  "plugins": {
   "!doc": "<p>Manages plugins registration and loading.</p>\n",
   "prototype": {
    "!type": "fn(basePath: string, fileName: string)"
   },
   "setLang": {
    "!type": "fn(pluginName: string, languageCode: string, languageEntries: ?) -> !this",
    "!doc": "<p>Loads a specific language file, or auto detect it. A callback is\nthen called when the file gets loaded.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-setLang\" rel=\"CKEDITOR.plugins-method-setLang\" class=\"docClass\">CKEDITOR.plugins.setLang</a>( 'myPlugin', 'en', {\n    title: 'My plugin',\n    selectOption: 'Please select an option'\n} );\n</code></pre>\n"
   }
  },
  "resourceManager": {
   "_": {
    "!type": "?"
   },
   "basePath": {
    "!type": "string",
    "!doc": "<p>The base directory containing all resources.</p>\n"
   },
   "externals": {
    "!type": "?",
    "!doc": "<p>Contains references to all resources that have already been registered\nwith <a href=\"#!/api/CKEDITOR.resourceManager-method-addExternal\" rel=\"CKEDITOR.resourceManager-method-addExternal\" class=\"docClass\">addExternal</a>.</p>\n"
   },
   "fileName": {
    "!type": "string",
    "!doc": "<p>The name used for resource files.</p>\n"
   },
   "loaded": {
    "!type": "?",
    "!doc": "<p>Contains references to all resources that have already been loaded\nwith <a href=\"#!/api/CKEDITOR.resourceManager-method-load\" rel=\"CKEDITOR.resourceManager-method-load\" class=\"docClass\">load</a>.</p>\n"
   },
   "registered": {
    "!type": "?",
    "!doc": "<p>Contains references to all resources that have already been registered\nwith <a href=\"#!/api/CKEDITOR.resourceManager-method-add\" rel=\"CKEDITOR.resourceManager-method-add\" class=\"docClass\">add</a>.</p>\n"
   },
   "add": {
    "!type": "fn(name: string, definition?: ?) -> !this",
    "!doc": "<p>Registers a resource.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample', { ... plugin definition ... } );\n</code></pre>\n"
   },
   "addExternal": {
    "!type": "fn(names: string, path: string, fileName?: string) -> !this",
    "!doc": "<p>Registers one or more resources to be loaded from an external path\ninstead of the core base path.</p>\n\n<pre><code>// Loads a plugin from '/myplugin/samples/plugin.js'.\n<a href=\"#!/api/CKEDITOR.plugins-method-addExternal\" rel=\"CKEDITOR.plugins-method-addExternal\" class=\"docClass\">CKEDITOR.plugins.addExternal</a>( 'sample', '/myplugins/sample/' );\n\n// Loads a plugin from '/myplugin/samples/my_plugin.js'.\n<a href=\"#!/api/CKEDITOR.plugins-method-addExternal\" rel=\"CKEDITOR.plugins-method-addExternal\" class=\"docClass\">CKEDITOR.plugins.addExternal</a>( 'sample', '/myplugins/sample/', 'my_plugin.js' );\n\n// Loads a plugin from '/myplugin/samples/my_plugin.js'.\n<a href=\"#!/api/CKEDITOR.plugins-method-addExternal\" rel=\"CKEDITOR.plugins-method-addExternal\" class=\"docClass\">CKEDITOR.plugins.addExternal</a>( 'sample', '/myplugins/sample/my_plugin.js', '' );\n</code></pre>\n"
   },
   "get": {
    "!type": "fn(name: string) -> ?",
    "!doc": "<p>Gets the definition of a specific resource.</p>\n\n<pre><code>var definition = <a href=\"#!/api/CKEDITOR.plugins-method-get\" rel=\"CKEDITOR.plugins-method-get\" class=\"docClass\">CKEDITOR.plugins.get</a>( 'sample' );\n</code></pre>\n"
   },
   "getFilePath": {
    "!type": "fn(name: string) -> string",
    "!doc": "<p>Get the file path for a specific loaded resource.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.plugins-method-getFilePath\" rel=\"CKEDITOR.plugins-method-getFilePath\" class=\"docClass\">CKEDITOR.plugins.getFilePath</a>( 'sample' ) ); // '&lt;editor path&gt;/plugins/sample/plugin.js'\n</code></pre>\n"
   },
   "getPath": {
    "!type": "fn(name: string) -> string",
    "!doc": "<p>Get the folder path for a specific loaded resource.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.plugins-method-getPath\" rel=\"CKEDITOR.plugins-method-getPath\" class=\"docClass\">CKEDITOR.plugins.getPath</a>( 'sample' ) ); // '&lt;editor path&gt;/plugins/sample/'\n</code></pre>\n"
   },
   "load": {
    "!type": "fn(name: string|[?], callback: fn(), scope?: ?) -> !this",
    "!doc": "<p>Loads one or more resources.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-load\" rel=\"CKEDITOR.plugins-method-load\" class=\"docClass\">CKEDITOR.plugins.load</a>( 'myplugin', function( plugins ) {\n    alert( plugins[ 'myplugin' ] ); // object\n} );\n</code></pre>\n"
   },
   "!doc": "<p>Base class for resource managers, like plugins. This class is not\nintended to be used out of the CKEditor core code.</p>\n",
   "prototype": {
    "!type": "fn(basePath: string, fileName: string)",
    "_": {
     "!type": "?"
    },
    "basePath": {
     "!type": "string",
     "!doc": "<p>The base directory containing all resources.</p>\n"
    },
    "externals": {
     "!type": "?",
     "!doc": "<p>Contains references to all resources that have already been registered\nwith <a href=\"#!/api/CKEDITOR.resourceManager-method-addExternal\" rel=\"CKEDITOR.resourceManager-method-addExternal\" class=\"docClass\">addExternal</a>.</p>\n"
    },
    "fileName": {
     "!type": "string",
     "!doc": "<p>The name used for resource files.</p>\n"
    },
    "loaded": {
     "!type": "?",
     "!doc": "<p>Contains references to all resources that have already been loaded\nwith <a href=\"#!/api/CKEDITOR.resourceManager-method-load\" rel=\"CKEDITOR.resourceManager-method-load\" class=\"docClass\">load</a>.</p>\n"
    },
    "registered": {
     "!type": "?",
     "!doc": "<p>Contains references to all resources that have already been registered\nwith <a href=\"#!/api/CKEDITOR.resourceManager-method-add\" rel=\"CKEDITOR.resourceManager-method-add\" class=\"docClass\">add</a>.</p>\n"
    },
    "add": {
     "!type": "fn(name: string, definition?: ?) -> !this",
     "!doc": "<p>Registers a resource.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-add\" rel=\"CKEDITOR.plugins-method-add\" class=\"docClass\">CKEDITOR.plugins.add</a>( 'sample', { ... plugin definition ... } );\n</code></pre>\n"
    },
    "addExternal": {
     "!type": "fn(names: string, path: string, fileName?: string) -> !this",
     "!doc": "<p>Registers one or more resources to be loaded from an external path\ninstead of the core base path.</p>\n\n<pre><code>// Loads a plugin from '/myplugin/samples/plugin.js'.\n<a href=\"#!/api/CKEDITOR.plugins-method-addExternal\" rel=\"CKEDITOR.plugins-method-addExternal\" class=\"docClass\">CKEDITOR.plugins.addExternal</a>( 'sample', '/myplugins/sample/' );\n\n// Loads a plugin from '/myplugin/samples/my_plugin.js'.\n<a href=\"#!/api/CKEDITOR.plugins-method-addExternal\" rel=\"CKEDITOR.plugins-method-addExternal\" class=\"docClass\">CKEDITOR.plugins.addExternal</a>( 'sample', '/myplugins/sample/', 'my_plugin.js' );\n\n// Loads a plugin from '/myplugin/samples/my_plugin.js'.\n<a href=\"#!/api/CKEDITOR.plugins-method-addExternal\" rel=\"CKEDITOR.plugins-method-addExternal\" class=\"docClass\">CKEDITOR.plugins.addExternal</a>( 'sample', '/myplugins/sample/my_plugin.js', '' );\n</code></pre>\n"
    },
    "get": {
     "!type": "fn(name: string) -> ?",
     "!doc": "<p>Gets the definition of a specific resource.</p>\n\n<pre><code>var definition = <a href=\"#!/api/CKEDITOR.plugins-method-get\" rel=\"CKEDITOR.plugins-method-get\" class=\"docClass\">CKEDITOR.plugins.get</a>( 'sample' );\n</code></pre>\n"
    },
    "getFilePath": {
     "!type": "fn(name: string) -> string",
     "!doc": "<p>Get the file path for a specific loaded resource.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.plugins-method-getFilePath\" rel=\"CKEDITOR.plugins-method-getFilePath\" class=\"docClass\">CKEDITOR.plugins.getFilePath</a>( 'sample' ) ); // '&lt;editor path&gt;/plugins/sample/plugin.js'\n</code></pre>\n"
    },
    "getPath": {
     "!type": "fn(name: string) -> string",
     "!doc": "<p>Get the folder path for a specific loaded resource.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.plugins-method-getPath\" rel=\"CKEDITOR.plugins-method-getPath\" class=\"docClass\">CKEDITOR.plugins.getPath</a>( 'sample' ) ); // '&lt;editor path&gt;/plugins/sample/'\n</code></pre>\n"
    },
    "load": {
     "!type": "fn(name: string|[?], callback: fn(), scope?: ?) -> !this",
     "!doc": "<p>Loads one or more resources.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.plugins-method-load\" rel=\"CKEDITOR.plugins-method-load\" class=\"docClass\">CKEDITOR.plugins.load</a>( 'myplugin', function( plugins ) {\n    alert( plugins[ 'myplugin' ] ); // object\n} );\n</code></pre>\n"
    }
   }
  },
  "scriptLoader": {
   "!doc": "<p>Load scripts asynchronously.</p>\n",
   "load": {
    "!type": "fn(scriptUrl: string|[?], callback?: fn(), scope?: ?, showBusy?: bool) -> !this",
    "!doc": "<p>Loads one or more external script checking if not already loaded\npreviously by this function.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.scriptLoader-method-load\" rel=\"CKEDITOR.scriptLoader-method-load\" class=\"docClass\">CKEDITOR.scriptLoader.load</a>( '/myscript.js' );\n\n<a href=\"#!/api/CKEDITOR.scriptLoader-method-load\" rel=\"CKEDITOR.scriptLoader-method-load\" class=\"docClass\">CKEDITOR.scriptLoader.load</a>( '/myscript.js', function( success ) {\n    // Alerts true if the script has been properly loaded.\n    // HTTP error 404 should return false.\n    alert( success );\n} );\n\n<a href=\"#!/api/CKEDITOR.scriptLoader-method-load\" rel=\"CKEDITOR.scriptLoader-method-load\" class=\"docClass\">CKEDITOR.scriptLoader.load</a>( [ '/myscript1.js', '/myscript2.js' ], function( completed, failed ) {\n    alert( 'Number of scripts loaded: ' + completed.length );\n    alert( 'Number of failures: ' + failed.length );\n} );\n</code></pre>\n"
   },
   "queue": {
    "!type": "fn(scriptUrl: string, callback?: fn()) -> !this",
    "!doc": "<p>Loads a script in a queue, so only one is loaded at the same time.</p>\n"
   }
  },
  "skin": {
   "!doc": "<p>Manages the loading of skin parts among all editor instances.</p>\n",
   "icons": {
    "!type": "?",
    "!doc": "<p>The list of registered icons. To add new icons to this list, use <a href=\"#!/api/CKEDITOR.skin-method-addIcon\" rel=\"CKEDITOR.skin-method-addIcon\" class=\"docClass\">addIcon</a>.</p>\n"
   },
   "name": {
    "!type": "string",
    "!doc": "<p>The name of the skin that is currently used.@todo</p>\n"
   },
   "ua": {
    "!type": "?",
    "!doc": "<p>The list of file names matching the browser user agent string from\n<a href=\"#!/api/CKEDITOR.env\" rel=\"CKEDITOR.env\" class=\"docClass\">CKEDITOR.env</a>. This is used to load the skin part file in addition\nto the \"main\" skin file for a particular browser.</p>\n\n<p><strong>Note:</strong> For each of the defined skin parts the corresponding\nCSS file with the same name as the user agent must exist inside\nthe skin directory.@todo type?</p>\n"
   },
   "addIcon": {
    "!type": "fn(name: string, path: string, offset?: number, bgsize?: string) -> !this",
    "!doc": "<p>Registers an icon.</p>\n"
   },
   "chameleon": {
    "!type": "fn(editor: string, part: string)",
    "!doc": "<p>A function that supports the chameleon (skin color switch) feature, providing\nthe skin color style updates to be applied in runtime.</p>\n\n<p><strong>Note:</strong> The embedded <code>$color</code> variable is to be substituted with a specific UI color.</p>\n"
   },
   "getIconStyle": {
    "!type": "fn(name: string, rtl?: bool, overridePath?: string, overrideOffset?: number, overrideBgsize?: string) -> !this",
    "!doc": "<p>Gets the CSS background styles to be used to render a specific icon.</p>\n"
   },
   "getPath": {
    "!type": "fn(part: string) -> !this",
    "!doc": "<p>Retrieves the real URL of a (CSS) skin part.</p>\n"
   },
   "loadPart": {
    "!type": "fn(part: string, fn: fn()) -> !this",
    "!doc": "<p>Loads a skin part into the page. Does nothing if the part has already been loaded.</p>\n\n<p><strong>Note:</strong> The \"editor\" part is always auto loaded upon instance creation,\nthus this function is mainly used to <strong>lazy load</strong> other parts of the skin\nthat do not have to be displayed until requested.</p>\n\n<pre><code>// Load the dialog part.\neditor.skin.loadPart( 'dialog' );\n</code></pre>\n"
   },
   "path": {
    "!type": "fn() -> !this",
    "!doc": "<p>Returns the root path to the skin directory.</p>\n\n<p>@todo</p>\n"
   }
  },
  "style": {
   "customHandlers": {
    "!doc": "<p>Namespace containing custom style handlers added with <a href=\"#!/api/CKEDITOR.style-static-method-addCustomHandler\" rel=\"CKEDITOR.style-static-method-addCustomHandler\" class=\"docClass\">CKEDITOR.style.addCustomHandler</a>.</p>\n"
   },
   "!doc": "<p>A class representing a style instance for the specific style definition.\nIn this approach, a style is a set of properties, like attributes and styles,\nwhich can be applied to and removed from a <a href=\"#!/api/CKEDITOR.dom.selection\" rel=\"CKEDITOR.dom.selection\" class=\"docClass\">selection</a> through\n<a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">editor</a> methods: <a href=\"#!/api/CKEDITOR.editor-method-applyStyle\" rel=\"CKEDITOR.editor-method-applyStyle\" class=\"docClass\">CKEDITOR.editor.applyStyle</a> and <a href=\"#!/api/CKEDITOR.editor-method-removeStyle\" rel=\"CKEDITOR.editor-method-removeStyle\" class=\"docClass\">CKEDITOR.editor.removeStyle</a>,\nrespectively.</p>\n\n<p>Three default style types are available: <a href=\"#!/api/CKEDITOR-property-STYLE_BLOCK\" rel=\"CKEDITOR-property-STYLE_BLOCK\" class=\"docClass\">STYLE_BLOCK</a>, <a href=\"#!/api/CKEDITOR-property-STYLE_INLINE\" rel=\"CKEDITOR-property-STYLE_INLINE\" class=\"docClass\">STYLE_INLINE</a>,\nand <a href=\"#!/api/CKEDITOR-property-STYLE_OBJECT\" rel=\"CKEDITOR-property-STYLE_OBJECT\" class=\"docClass\">STYLE_OBJECT</a>. Based on its type, a style heavily changes its behavior.\nYou can read more about style types in the <a href=\"#!/guide/dev_styles-section-style-types\">Style Types section of the Styles guide</a>.</p>\n\n<p>It is possible to define a custom style type by subclassing this class by using the <a href=\"#!/api/CKEDITOR.style-static-method-addCustomHandler\" rel=\"CKEDITOR.style-static-method-addCustomHandler\" class=\"docClass\">addCustomHandler</a> method.\nHowever, because of great complexity of the styles handling job, it is only possible in very specific cases.</p>\n\n<h3>Usage</h3>\n\n<p>Basic usage:</p>\n\n<pre><code>// Define a block style.\nvar style = new <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>( { element: 'h1' } );\n\n// Considering the following selection:\n// &lt;p&gt;Foo&lt;/p&gt;&lt;p&gt;Bar^&lt;/p&gt;\n// Executing:\neditor.applyStyle( style );\n// Will give:\n// &lt;p&gt;Foo&lt;/p&gt;&lt;h1&gt;Bar^&lt;/h1&gt;\nstyle.checkActive( editor.elementPath(), editor ); // -&gt; true\n\neditor.removeStyle( style );\n// Will give:\n// &lt;p&gt;Foo&lt;/p&gt;&lt;p&gt;Bar^&lt;/p&gt;\n\nstyle.checkActive( editor.elementPath(), editor ); // -&gt; false\n</code></pre>\n\n<p>Object style:</p>\n\n<pre><code>// Define an object style.\nvar style = new <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>( { element: 'img', attributes: { 'class': 'foo' } } );\n\n// Considering the following selection:\n// &lt;p&gt;&lt;img src=\"bar.png\" alt=\"\" /&gt;Foo^&lt;/p&gt;\n// Executing:\neditor.applyStyle( style );\n// Will not apply the style, because the image is not selected.\n// You can check if a style can be applied on the current selection with:\nstyle.checkApplicable( editor.elementPath(), editor ); // -&gt; false\n\n// Considering the following selection:\n// &lt;p&gt;[&lt;img src=\"bar.png\" alt=\"\" /&gt;]Foo&lt;/p&gt;\n// Executing\neditor.applyStyle( style );\n// Will give:\n// &lt;p&gt;[&lt;img src=\"bar.png\" alt=\"\" class=\"foo\" /&gt;]Foo&lt;/p&gt;\n</code></pre>\n\n<h3>API changes introduced in CKEditor 4.4</h3>\n\n<p>Before CKEditor 4.4 all style instances had no access at all to the <a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">editor instance</a>\nwithin which the style is used. Neither the style constructor, nor style methods were requiring\npassing the editor instance which made styles independent of the editor and hence its settings and state.\nThis design decision came from CKEditor 3; it started causing problems and became an unsolvable obstacle for\nthe widget style handler which we introduced in CKEditor 4.4.</p>\n\n<p>There were two possible solutions. Passing an editor instance to the style constructor or to every method.\nThe first approach would be clean, however, having in mind the backward compatibility, we did not decide\nto go for it. It would bind the style to one editor instance, making it unusable with other editor instances.\nThat could break many implementations reusing styles between editors. Therefore, we decided to take the longer\nbut safer path &mdash; the editor instance became an argument for nearly all style methods, however,\nfor backward compatibility reasons, all these methods will work without it. Even the newly\nimplemented widget style handler's methods will not fail,\nalthough they will also not work by aborting at an early stage.</p>\n\n<p>Therefore, you can safely upgrade to CKEditor 4.4 even if you use style methods without providing\nthe editor instance. You must only align your code if your implementation should handle widget styles\nor any other custom style handler. Of course, we recommend doing this in any case to avoid potential\nproblems in the future.</p>\n",
   "prototype": {
    "!type": "fn(styleDefinition: ?, variablesValues: ?)",
    "alwaysRemoveElement": {
     "!type": "bool",
     "!doc": "<p>Indicates that any matches element of this style will be eventually removed\nwhen calling <a href=\"#!/api/CKEDITOR.editor-method-removeStyle\" rel=\"CKEDITOR.editor-method-removeStyle\" class=\"docClass\">CKEDITOR.editor.removeStyle</a>.</p>\n"
    },
    "includeReadonly": {
     "!type": "bool",
     "!doc": "<p>Indicates that fully selected read-only elements will be included when\napplying the style (for inline styles only).</p>\n"
    },
    "apply": {
     "!type": "fn(editor: +CKEDITOR.editor|+CKEDITOR.dom.document) -> !this",
     "!doc": "<p>Applies the style on the editor's current selection.</p>\n\n<p>Before the style is applied, the method checks if the <a href=\"#!/api/CKEDITOR.style-method-checkApplicable\" rel=\"CKEDITOR.style-method-checkApplicable\" class=\"docClass\">style is applicable</a>.</p>\n\n<p><strong>Note:</strong> The recommended way of applying the style is by using the\n<a href=\"#!/api/CKEDITOR.editor-method-applyStyle\" rel=\"CKEDITOR.editor-method-applyStyle\" class=\"docClass\">CKEDITOR.editor.applyStyle</a> method, which is a shorthand for this method.</p>\n"
    },
    "applyToObject": {
     "!type": "fn(element: +CKEDITOR.dom.element, editor: +CKEDITOR.editor) -> !this",
     "!doc": "<p>Applies the style to the element. This method bypasses all checks\nand applies the style attributes directly on the provided element. Use with caution.</p>\n\n<p>See <a href=\"#!/api/CKEDITOR.editor-method-applyStyle\" rel=\"CKEDITOR.editor-method-applyStyle\" class=\"docClass\">CKEDITOR.editor.applyStyle</a>.</p>\n"
    },
    "applyToRange": {
     "!type": "fn(range: +CKEDITOR.dom.range, editor: +CKEDITOR.editor) -> !this",
     "!doc": "<p>Applies the style on the provided range. Unlike <a href=\"#!/api/CKEDITOR.style-method-apply\" rel=\"CKEDITOR.style-method-apply\" class=\"docClass\">apply</a> this\nmethod does not take care of setting the selection, however, the range\nis updated to the correct place.</p>\n\n<p><strong>Note:</strong> If you want to apply the style on the editor selection,\nyou probably want to use <a href=\"#!/api/CKEDITOR.editor-method-applyStyle\" rel=\"CKEDITOR.editor-method-applyStyle\" class=\"docClass\">CKEDITOR.editor.applyStyle</a>.</p>\n"
    },
    "buildPreview": {
     "!type": "fn(label?: string) -> string",
     "!doc": "<p>Builds the preview HTML based on the styles definition.</p>\n"
    },
    "checkActive": {
     "!type": "fn(elementPath: +CKEDITOR.dom.elementPath, editor: +CKEDITOR.editor) -> bool",
     "!doc": "<p>Gets the style state inside the elements path.</p>\n"
    },
    "checkApplicable": {
     "!type": "fn(elementPath: +CKEDITOR.dom.elementPath, editor: +CKEDITOR.editor, filter?: +CKEDITOR.filter) -> bool",
     "!doc": "<p>Whether this style can be applied at the specified elements path.</p>\n"
    },
    "checkElementMatch": {
     "!type": "fn(element: +CKEDITOR.dom.element, fullMatch: bool, editor: +CKEDITOR.editor) -> bool",
     "!doc": "<p>Checks if the element matches the current style definition.</p>\n"
    },
    "checkElementRemovable": {
     "!type": "fn(element: +CKEDITOR.dom.element, fullMatch: bool, editor: +CKEDITOR.editor) -> bool",
     "!doc": "<p>Checks if an element, or any of its attributes, is removable by the\ncurrent style definition.</p>\n"
    },
    "getDefinition": {
     "!type": "fn() -> ?",
     "!doc": "<p>Returns the style definition.</p>\n"
    },
    "remove": {
     "!type": "fn(editor: +CKEDITOR.editor|+CKEDITOR.dom.document) -> !this",
     "!doc": "<p>Removes the style from the editor's current selection.</p>\n\n<p>Before the style is applied, the method checks if <a href=\"#!/api/CKEDITOR.style-method-checkApplicable\" rel=\"CKEDITOR.style-method-checkApplicable\" class=\"docClass\">style could be applied</a>.</p>\n\n<p><strong>Note:</strong> The recommended way of removing the style is by using the\n<a href=\"#!/api/CKEDITOR.editor-method-removeStyle\" rel=\"CKEDITOR.editor-method-removeStyle\" class=\"docClass\">CKEDITOR.editor.removeStyle</a> method, which is a shorthand for this method.</p>\n"
    },
    "removeFromRange": {
     "!type": "fn(range: +CKEDITOR.dom.range, editor: +CKEDITOR.editor) -> !this",
     "!doc": "<p>Removes the style from the provided range. Unlike <a href=\"#!/api/CKEDITOR.style-method-remove\" rel=\"CKEDITOR.style-method-remove\" class=\"docClass\">remove</a> this\nmethod does not take care of setting the selection, however, the range\nis updated to the correct place.</p>\n\n<p><strong>Note:</strong> If you want to remove the style from the editor selection,\nyou probably want to use <a href=\"#!/api/CKEDITOR.editor-method-removeStyle\" rel=\"CKEDITOR.editor-method-removeStyle\" class=\"docClass\">CKEDITOR.editor.removeStyle</a>.</p>\n"
    },
    "toAllowedContentRules": {
     "!type": "fn(editor?: +CKEDITOR.editor) -> +CKEDITOR.filter.allowedContentRules",
     "!doc": "<p>If defined (for example by <a href=\"#!/api/CKEDITOR.style-static-method-addCustomHandler\" rel=\"CKEDITOR.style-static-method-addCustomHandler\" class=\"docClass\">custom style handler</a>), it returns\nthe <a href=\"#!/api/CKEDITOR.filter.allowedContentRules\" rel=\"CKEDITOR.filter.allowedContentRules\" class=\"docClass\">allowed content rules</a> which should be added to the\n<a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a> when enabling this style.</p>\n\n<p><strong>Note:</strong> This method is not defined in the <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> class.</p>\n"
    }
   },
   "addCustomHandler": {
    "!type": "fn(definition: ?) -> +CKEDITOR.style",
    "!doc": "<p>Creates a <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> subclass and registers it in the style system.\nRegistered class will be used as a handler for a style of this type. This allows\nto extend the styles system, which by default uses only the <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>, with\nnew functionality. Registered classes are accessible in the <a href=\"#!/api/CKEDITOR.style.customHandlers\" rel=\"CKEDITOR.style.customHandlers\" class=\"docClass\">CKEDITOR.style.customHandlers</a>.</p>\n\n<h3>The Style Class Definition</h3>\n\n<p>The definition object is used to override properties in a prototype inherited\nfrom the <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> class. It must contain a <code>type</code> property which is\na name of the new type and therefore it must be unique. The default style types\n(<a href=\"#!/api/CKEDITOR-property-STYLE_BLOCK\" rel=\"CKEDITOR-property-STYLE_BLOCK\" class=\"docClass\">STYLE_BLOCK</a>, <a href=\"#!/api/CKEDITOR-property-STYLE_INLINE\" rel=\"CKEDITOR-property-STYLE_INLINE\" class=\"docClass\">STYLE_INLINE</a>,\nand <a href=\"#!/api/CKEDITOR-property-STYLE_OBJECT\" rel=\"CKEDITOR-property-STYLE_OBJECT\" class=\"docClass\">STYLE_OBJECT</a>) are integers, but for easier identification\nit is recommended to use strings as custom type names.</p>\n\n<p>Besides <code>type</code>, the definition may contain two more special properties:</p>\n\n<ul>\n<li><code>setup {Function}</code> &ndash; An optional callback executed when a style instance is created.\nLike the style constructor, it is executed in style context and with the style definition as an argument.</li>\n<li><code>assignedTo {Number}</code> &ndash; Can be set to one of the default style types. Some editor\nfeatures like the Styles drop-down assign styles to one of the default groups based on\nthe style type. By using this property it is possible to notify them to which group this\ncustom style should be assigned. It defaults to the <a href=\"#!/api/CKEDITOR-property-STYLE_OBJECT\" rel=\"CKEDITOR-property-STYLE_OBJECT\" class=\"docClass\">CKEDITOR.STYLE_OBJECT</a>.</li>\n</ul>\n\n\n<p>Other properties of the definition object will just be used to extend the prototype inherited\nfrom the <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> class. So if the definition contains an <code>apply</code> method, it will\noverride the <a href=\"#!/api/CKEDITOR.style-method-apply\" rel=\"CKEDITOR.style-method-apply\" class=\"docClass\">apply</a> method.</p>\n\n<h3>Usage</h3>\n\n<p>Registering a basic handler:</p>\n\n<pre><code>var styleClass = <a href=\"#!/api/CKEDITOR.style-static-method-addCustomHandler\" rel=\"CKEDITOR.style-static-method-addCustomHandler\" class=\"docClass\">CKEDITOR.style.addCustomHandler</a>( {\n    type: 'custom'\n} );\n\nvar style = new styleClass( { ... } );\nstyle instanceof styleClass; // -&gt; true\nstyle instanceof <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>; // -&gt; true\nstyle.type; // -&gt; 'custom'\n</code></pre>\n\n<p>The <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> constructor used as a factory:</p>\n\n<pre><code>var styleClass = <a href=\"#!/api/CKEDITOR.style-static-method-addCustomHandler\" rel=\"CKEDITOR.style-static-method-addCustomHandler\" class=\"docClass\">CKEDITOR.style.addCustomHandler</a>( {\n    type: 'custom'\n} );\n\n// Style constructor accepts style definition (do not confuse with style class definition).\nvar style = new <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>( { type: 'custom', attributes: ... } );\nstyle instanceof styleClass; // -&gt; true\n</code></pre>\n\n<p>Thanks to that, integration code using styles does not need to know\nwhich style handler it should use. It is determined by the <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> constructor.</p>\n\n<p>Overriding existing <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a> methods:</p>\n\n<pre><code>var styleClass = <a href=\"#!/api/CKEDITOR.style-static-method-addCustomHandler\" rel=\"CKEDITOR.style-static-method-addCustomHandler\" class=\"docClass\">CKEDITOR.style.addCustomHandler</a>( {\n    type: 'custom',\n    apply: function( editor ) {\n        console.log( 'apply' );\n    },\n    remove: function( editor ) {\n        console.log( 'remove' );\n    }\n} );\n\nvar style = new <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>( { type: 'custom', attributes: ... } );\neditor.applyStyle( style ); // logged 'apply'\n\nstyle = new <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>( { element: 'img', attributes: { 'class': 'foo' } } );\neditor.applyStyle( style ); // style is really applied if image was selected\n</code></pre>\n\n<h3>Practical Recommendations</h3>\n\n<p>The style handling job, which includes such tasks as applying, removing, checking state, and\nchecking if a style can be applied, is very complex. Therefore without deep knowledge\nabout DOM and especially <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">ranges</a> and <a href=\"#!/api/CKEDITOR.dom.walker\" rel=\"CKEDITOR.dom.walker\" class=\"docClass\">DOM walker</a> it is impossible\nto implement a completely custom style handler able to handle block, inline, and object type styles.\nHowever, it is possible to customize the default implementation by overriding default methods and\nreusing them.</p>\n\n<p>The only style handler which can be implemented from scratch without huge effort is a style\napplicable to objects (<a href=\"http://docs.ckeditor.com/#!/guide/dev_styles-section-style-types\">read more about types</a>).\nSuch style can only be applied when a specific object is selected. An example implementation can\nbe found in the <a href=\"https://github.com/ckeditor/ckeditor-dev/blob/master/plugins/widget/plugin.js\">widget plugin</a>.</p>\n\n<p>When implementing a style handler from scratch at least the following methods must be defined:</p>\n\n<ul>\n<li><a href=\"#!/api/CKEDITOR.style-method-apply\" rel=\"CKEDITOR.style-method-apply\" class=\"docClass\">apply</a> and <a href=\"#!/api/CKEDITOR.style-method-remove\" rel=\"CKEDITOR.style-method-remove\" class=\"docClass\">remove</a>,</li>\n<li><a href=\"#!/api/CKEDITOR.style-method-checkElementRemovable\" rel=\"CKEDITOR.style-method-checkElementRemovable\" class=\"docClass\">checkElementRemovable</a> and\n<a href=\"#!/api/CKEDITOR.style-method-checkElementMatch\" rel=\"CKEDITOR.style-method-checkElementMatch\" class=\"docClass\">checkElementMatch</a> &ndash; Note that both methods reuse the same logic,</li>\n<li><a href=\"#!/api/CKEDITOR.style-method-checkActive\" rel=\"CKEDITOR.style-method-checkActive\" class=\"docClass\">checkActive</a> &ndash; Reuses\n<a href=\"#!/api/CKEDITOR.style-method-checkElementMatch\" rel=\"CKEDITOR.style-method-checkElementMatch\" class=\"docClass\">checkElementMatch</a>,</li>\n<li><a href=\"#!/api/CKEDITOR.style-method-toAllowedContentRules\" rel=\"CKEDITOR.style-method-toAllowedContentRules\" class=\"docClass\">toAllowedContentRules</a> &ndash; Not required, but very useful in\ncase of a custom style that has to notify the <a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a> which rules it allows when registered.</li>\n</ul>\n\n"
   },
   "getStyleText": {
    "!type": "fn(styleDefinition: ?) -> string",
    "!doc": "<p>Builds the inline style text based on the style definition.</p>\n"
   }
  },
  "styleCommand": {
   "!doc": "<p>Generic style command. It applies a specific style when executed.</p>\n\n<pre><code>var boldStyle = new <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a>( { element: 'strong' } );\n// Register the \"bold\" command, which applies the bold style.\neditor.addCommand( 'bold', new CKEDITOR.dialogCommand( boldStyle ) );\n</code></pre>\n",
   "prototype": {
    "!type": "fn(style: +CKEDITOR.style, ext?: ?)",
    "exec": {
     "!type": "fn(editor: +CKEDITOR.editor) -> !this"
    }
   }
  },
  "stylesSet": {
   "!doc": "<p>Manages styles registration and loading. See also <a href=\"#!/api/CKEDITOR.config-cfg-stylesSet\" rel=\"CKEDITOR.config-cfg-stylesSet\" class=\"docClass\">CKEDITOR.config.stylesSet</a>.</p>\n\n<pre><code>// The set of styles for the &lt;b&gt;Styles&lt;/b&gt; drop-down list.\n<a href=\"#!/api/CKEDITOR.stylesSet-method-add\" rel=\"CKEDITOR.stylesSet-method-add\" class=\"docClass\">CKEDITOR.stylesSet.add</a>( 'default', [\n    // Block Styles\n    { name: 'Blue Title',       element: 'h3',      styles: { 'color': 'Blue' } },\n    { name: 'Red Title',        element: 'h3',      styles: { 'color': 'Red' } },\n\n    // Inline Styles\n    { name: 'Marker: Yellow',   element: 'span',    styles: { 'background-color': 'Yellow' } },\n    { name: 'Marker: Green',    element: 'span',    styles: { 'background-color': 'Lime' } },\n\n    // Object Styles\n    {\n        name: 'Image on Left',\n        element: 'img',\n        attributes: {\n            style: 'padding: 5px; margin-right: 5px',\n            border: '2',\n            align: 'left'\n        }\n    }\n] );\n</code></pre>\n",
   "prototype": {
    "!type": "fn(basePath: string, fileName: string)"
   }
  },
  "template": {
   "!doc": "<p>Lightweight template used to build the output string from variables.</p>\n\n<pre><code>// HTML template for presenting a label UI.\nvar tpl = new <a href=\"#!/api/CKEDITOR.template\" rel=\"CKEDITOR.template\" class=\"docClass\">CKEDITOR.template</a>( '&lt;div class=\"{cls}\"&gt;{label}&lt;/div&gt;' );\nalert( tpl.output( { cls: 'cke-label', label: 'foo'} ) ); // '&lt;div class=\"cke-label\"&gt;foo&lt;/div&gt;'\n</code></pre>\n",
   "prototype": {
    "!type": "fn(source: string)",
    "output": {
     "!type": "fn(data: ?, buffer?: [?]) -> string|number",
     "!doc": "<p>Processes the template, filling its variables with the provided data.</p>\n"
    }
   }
  },
  "tools": {
   "!doc": "<p>Utility functions.</p>\n",
   "transparentImageData": {
    "!type": "string",
    "!doc": "<p>The data URI of a transparent image. May be used e.g. in HTML as an image source or in CSS in <code>url()</code>.</p>\n"
   },
   "addFunction": {
    "!type": "fn(fn: fn(), scope?: ?) -> number",
    "!doc": "<p>Creates a function reference that can be called later using\n<a href=\"#!/api/CKEDITOR.tools-method-callFunction\" rel=\"CKEDITOR.tools-method-callFunction\" class=\"docClass\">callFunction</a>. This approach is especially useful to\nmake DOM attribute function calls to JavaScript-defined functions.</p>\n\n<pre><code>var ref = <a href=\"#!/api/CKEDITOR.tools-method-addFunction\" rel=\"CKEDITOR.tools-method-addFunction\" class=\"docClass\">CKEDITOR.tools.addFunction</a>( function() {\n    alert( 'Hello!');\n} );\n<a href=\"#!/api/CKEDITOR.tools-method-callFunction\" rel=\"CKEDITOR.tools-method-callFunction\" class=\"docClass\">CKEDITOR.tools.callFunction</a>( ref ); // 'Hello!'\n</code></pre>\n"
   },
   "arrayCompare": {
    "!type": "fn(arrayA: [?], arrayB: [?]) -> bool",
    "!doc": "<p>Compares the elements of two arrays.</p>\n\n<pre><code>var a = [ 1, 'a', 3 ];\nvar b = [ 1, 3, 'a' ];\nvar c = [ 1, 'a', 3 ];\nvar d = [ 1, 'a', 3, 4 ];\n\nalert( <a href=\"#!/api/CKEDITOR.tools-method-arrayCompare\" rel=\"CKEDITOR.tools-method-arrayCompare\" class=\"docClass\">CKEDITOR.tools.arrayCompare</a>( a, b ) );  // false\nalert( <a href=\"#!/api/CKEDITOR.tools-method-arrayCompare\" rel=\"CKEDITOR.tools-method-arrayCompare\" class=\"docClass\">CKEDITOR.tools.arrayCompare</a>( a, c ) );  // true\nalert( <a href=\"#!/api/CKEDITOR.tools-method-arrayCompare\" rel=\"CKEDITOR.tools-method-arrayCompare\" class=\"docClass\">CKEDITOR.tools.arrayCompare</a>( a, d ) );  // false\n</code></pre>\n"
   },
   "bind": {
    "!type": "fn(func: fn(), obj: ?) -> fn()",
    "!doc": "<p>Creates a function that will always execute in the context of a\nspecified object.</p>\n\n<pre><code>var obj = { text: 'My Object' };\n\nfunction alertText() {\n    alert( this.text );\n}\n\nvar newFunc = <a href=\"#!/api/CKEDITOR.tools-method-bind\" rel=\"CKEDITOR.tools-method-bind\" class=\"docClass\">CKEDITOR.tools.bind</a>( alertText, obj );\nnewFunc(); // Alerts 'My Object'.\n</code></pre>\n"
   },
   "buildStyleHtml": {
    "!type": "fn(css: string|[?]) -> string",
    "!doc": "<p>Builds a HTML snippet from a set of <code>&lt;style&gt;/&lt;link&gt;</code>.</p>\n"
   },
   "callFunction": {
    "!type": "fn(ref: number, params: +Mixed) -> +Mixed",
    "!doc": "<p>Executes a function based on the reference created with <a href=\"#!/api/CKEDITOR.tools-method-addFunction\" rel=\"CKEDITOR.tools-method-addFunction\" class=\"docClass\">addFunction</a>.</p>\n\n<pre><code>var ref = <a href=\"#!/api/CKEDITOR.tools-method-addFunction\" rel=\"CKEDITOR.tools-method-addFunction\" class=\"docClass\">CKEDITOR.tools.addFunction</a>( function() {\n    alert( 'Hello!');\n} );\n<a href=\"#!/api/CKEDITOR.tools-method-callFunction\" rel=\"CKEDITOR.tools-method-callFunction\" class=\"docClass\">CKEDITOR.tools.callFunction</a>( ref ); // 'Hello!'\n</code></pre>\n"
   },
   "capitalize": {
    "!type": "fn(str: string, keepCase?: bool) -> string",
    "!doc": "<p>Turns the first letter of a string to upper-case.</p>\n"
   },
   "checkIfAnyArrayItemMatches": {
    "!type": "fn(arr: [?], regexp: +RegExp) -> bool",
    "!doc": "<p>Checks if any of the <code>arr</code> items match the provided regular expression.</p>\n"
   },
   "checkIfAnyObjectPropertyMatches": {
    "!type": "fn(obj: ?, regexp: +RegExp) -> bool",
    "!doc": "<p>Checks if any of the <code>obj</code> properties match the provided regular expression.</p>\n"
   },
   "clone": {
    "!type": "fn(object: ?) -> ?",
    "!doc": "<p>Creates a deep copy of an object.</p>\n\n<p><strong>Note</strong>: Recursive references are not supported.</p>\n\n<pre><code>var obj = {\n    name: 'John',\n    cars: {\n        Mercedes: { color: 'blue' },\n        Porsche: { color: 'red' }\n    }\n};\nvar clone = <a href=\"#!/api/CKEDITOR.tools-method-clone\" rel=\"CKEDITOR.tools-method-clone\" class=\"docClass\">CKEDITOR.tools.clone</a>( obj );\nclone.name = 'Paul';\nclone.cars.Porsche.color = 'silver';\n\nalert( obj.name );                  // 'John'\nalert( clone.name );                // 'Paul'\nalert( obj.cars.Porsche.color );    // 'red'\nalert( clone.cars.Porsche.color );  // 'silver'\n</code></pre>\n"
   },
   "convertArrayToObject": {
    "!type": "fn(arr: [?], fillWith?: ?) -> !this",
    "!doc": "<p>Converts an array to an object by rewriting array items\nto object properties.</p>\n\n<pre><code>var arr = [ 'foo', 'bar', 'foo' ];\nconsole.log( <a href=\"#!/api/CKEDITOR.tools-method-convertArrayToObject\" rel=\"CKEDITOR.tools-method-convertArrayToObject\" class=\"docClass\">CKEDITOR.tools.convertArrayToObject</a>( arr ) );\n// -&gt; { foo: true, bar: true }\nconsole.log( <a href=\"#!/api/CKEDITOR.tools-method-convertArrayToObject\" rel=\"CKEDITOR.tools-method-convertArrayToObject\" class=\"docClass\">CKEDITOR.tools.convertArrayToObject</a>( arr, 1 ) );\n// -&gt; { foo: 1, bar: 1 }\n</code></pre>\n"
   },
   "convertRgbToHex": {
    "!type": "fn(styleText: string) -> string",
    "!doc": "<p>Finds and converts <code>rgb(x,x,x)</code> color definition to hexadecimal notation.</p>\n"
   },
   "convertToPx": {
    "!type": "fn(cssLength: string) -> !this",
    "!doc": "<p>Converts the specified CSS length value to the calculated pixel length inside this page.</p>\n\n<p><strong>Note:</strong> Percentage-based value is left intact.</p>\n"
   },
   "copy": {
    "!type": "fn(source: ?) -> ?",
    "!doc": "<p>Makes fast (shallow) copy of an object.\nThis method is faster than <a href=\"#!/api/CKEDITOR.tools-method-clone\" rel=\"CKEDITOR.tools-method-clone\" class=\"docClass\">clone</a> which does\na deep copy of an object (including arrays).</p>\n"
   },
   "createClass": {
    "!type": "fn(definition: ?) -> fn()",
    "!doc": "<p>Class creation based on prototype inheritance which supports of the\nfollowing features:</p>\n\n<ul>\n<li>Static fields</li>\n<li>Private fields</li>\n<li>Public (prototype) fields</li>\n<li>Chainable base class constructor</li>\n</ul>\n\n"
   },
   "cssLength": {
    "!type": "fn(length: number|string|bool) -> !this",
    "!doc": "<p>Appends the <code>px</code> length unit to the size value if it is missing.</p>\n\n<pre><code>var cssLength = <a href=\"#!/api/CKEDITOR.tools-method-cssLength\" rel=\"CKEDITOR.tools-method-cssLength\" class=\"docClass\">CKEDITOR.tools.cssLength</a>;\ncssLength( 42 );        // '42px'\ncssLength( '42' );      // '42px'\ncssLength( '42px' );    // '42px'\ncssLength( '42%' );     // '42%'\ncssLength( 'bold' );    // 'bold'\ncssLength( false );     // ''\ncssLength( NaN );       // ''\n</code></pre>\n"
   },
   "cssStyleToDomStyle": {
    "!type": "fn(cssName: string) -> string",
    "!doc": "<p>Transforms a CSS property name to its relative DOM style name.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-cssStyleToDomStyle\" rel=\"CKEDITOR.tools-method-cssStyleToDomStyle\" class=\"docClass\">CKEDITOR.tools.cssStyleToDomStyle</a>( 'background-color' ) );   // 'backgroundColor'\nalert( <a href=\"#!/api/CKEDITOR.tools-method-cssStyleToDomStyle\" rel=\"CKEDITOR.tools-method-cssStyleToDomStyle\" class=\"docClass\">CKEDITOR.tools.cssStyleToDomStyle</a>( 'float' ) );              // 'cssFloat'\n</code></pre>\n"
   },
   "cssVendorPrefix": {
    "!type": "fn(property: string, value: string, asString?: bool) -> ?|string",
    "!doc": "<p>Generates an object or a string containing vendor-specific and vendor-free CSS properties.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.tools-method-cssVendorPrefix\" rel=\"CKEDITOR.tools-method-cssVendorPrefix\" class=\"docClass\">CKEDITOR.tools.cssVendorPrefix</a>( 'border-radius', '0', true );\n// On Firefox: '-moz-border-radius:0;border-radius:0'\n// On Chrome: '-webkit-border-radius:0;border-radius:0'\n</code></pre>\n"
   },
   "defer": {
    "!type": "fn(fn: fn()) -> fn()",
    "!doc": "<p>Creates a \"deferred\" function which will not run immediately,\nbut rather runs as soon as the interpreter’s call stack is empty.\nBehaves much like <code>window.setTimeout</code> with a delay.</p>\n\n<p><strong>Note:</strong> The return value of the original function will be lost.</p>\n"
   },
   "enableHtml5Elements": {
    "!type": "fn(doc: ?, withAppend?: bool) -> !this",
    "!doc": "<p>Enables HTML5 elements for older browsers (IE8) in the passed document.</p>\n\n<p>In IE8 this method can also be executed on a document fragment.</p>\n\n<p><strong>Note:</strong> This method has to be used in the <code>&lt;head&gt;</code> section of the document.</p>\n"
   },
   "eventsBuffer": {
    "!type": "fn(minInterval: number, output: fn()) -> ?",
    "!doc": "<p>Buffers <code>input</code> events (or any <code>input</code> calls)\nand triggers <code>output</code> not more often than once per <code>minInterval</code>.</p>\n\n<pre><code>var buffer = <a href=\"#!/api/CKEDITOR.tools-method-eventsBuffer\" rel=\"CKEDITOR.tools-method-eventsBuffer\" class=\"docClass\">CKEDITOR.tools.eventsBuffer</a>( 200, function() {\n    console.log( 'foo!' );\n} );\n\nbuffer.input();\n// 'foo!' logged immediately.\nbuffer.input();\n// Nothing logged.\nbuffer.input();\n// Nothing logged.\n// ... after 200ms a single 'foo!' will be logged.\n</code></pre>\n\n<p>Can be easily used with events:</p>\n\n<pre><code>var buffer = <a href=\"#!/api/CKEDITOR.tools-method-eventsBuffer\" rel=\"CKEDITOR.tools-method-eventsBuffer\" class=\"docClass\">CKEDITOR.tools.eventsBuffer</a>( 200, function() {\n    console.log( 'foo!' );\n} );\n\neditor.on( 'key', buffer.input );\n// Note: There is no need to bind buffer as a context.\n</code></pre>\n"
   },
   "extend": {
    "!type": "fn(target: ?, source: +Object..., overwrite?: bool, properties?: ?) -> ?",
    "!doc": "<p>Copies the properties from one object to another. By default, properties\nalready present in the target object <strong>are not</strong> overwritten.</p>\n\n<pre><code>// Create the sample object.\nvar myObject = {\n    prop1: true\n};\n\n// Extend the above object with two properties.\n<a href=\"#!/api/CKEDITOR.tools-method-extend\" rel=\"CKEDITOR.tools-method-extend\" class=\"docClass\">CKEDITOR.tools.extend</a>( myObject, {\n    prop2: true,\n    prop3: true\n} );\n\n// Alert 'prop1', 'prop2' and 'prop3'.\nfor ( var p in myObject )\n    alert( p );\n</code></pre>\n"
   },
   "fixDomain": {
    "!type": "fn() -> bool",
    "!doc": "<p>Tries to fix the <code>document.domain</code> of the current document to match the\nparent window domain, avoiding \"Same Origin\" policy issues.\nThis is an Internet Explorer only requirement.</p>\n"
   },
   "genKey": {
    "!type": "fn(subKey: string) -> string",
    "!doc": "<p>Generates a combined key from a series of params.</p>\n\n<pre><code>var key = <a href=\"#!/api/CKEDITOR.tools-method-genKey\" rel=\"CKEDITOR.tools-method-genKey\" class=\"docClass\">CKEDITOR.tools.genKey</a>( 'key1', 'key2', 'key3' );\nalert( key ); // 'key1-key2-key3'.\n</code></pre>\n"
   },
   "getNextId": {
    "!type": "fn() -> string",
    "!doc": "<p>Gets a unique ID for CKEditor interface elements. It returns a\nstring with the \"cke_\" prefix and a consecutive number.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-getNextId\" rel=\"CKEDITOR.tools-method-getNextId\" class=\"docClass\">CKEDITOR.tools.getNextId</a>() ); // (e.g.) 'cke_1'\nalert( <a href=\"#!/api/CKEDITOR.tools-method-getNextId\" rel=\"CKEDITOR.tools-method-getNextId\" class=\"docClass\">CKEDITOR.tools.getNextId</a>() ); // 'cke_2'\n</code></pre>\n"
   },
   "getNextNumber": {
    "!type": "fn() -> number",
    "!doc": "<p>Gets a unique number for this CKEDITOR execution session. It returns\nconsecutive numbers starting from 1.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-getNextNumber\" rel=\"CKEDITOR.tools-method-getNextNumber\" class=\"docClass\">CKEDITOR.tools.getNextNumber</a>() ); // (e.g.) 1\nalert( <a href=\"#!/api/CKEDITOR.tools-method-getNextNumber\" rel=\"CKEDITOR.tools-method-getNextNumber\" class=\"docClass\">CKEDITOR.tools.getNextNumber</a>() ); // 2\n</code></pre>\n"
   },
   "htmlDecode": {
    "!type": "fn(The: string) -> string",
    "!doc": "<p>Decodes HTML entities.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-htmlDecode\" rel=\"CKEDITOR.tools-method-htmlDecode\" class=\"docClass\">CKEDITOR.tools.htmlDecode</a>( '&amp;lt;a &amp;amp; b &amp;gt;' ) ); // '&lt;a &amp; b &gt;'\n</code></pre>\n"
   },
   "htmlDecodeAttr": {
    "!type": "fn(text: string) -> string",
    "!doc": "<p>Replace HTML entities previously encoded by\n<a href=\"#!/api/CKEDITOR.tools-method-htmlEncodeAttr\" rel=\"CKEDITOR.tools-method-htmlEncodeAttr\" class=\"docClass\">htmlEncodeAttr</a> back to their plain character\nrepresentation.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-htmlDecodeAttr\" rel=\"CKEDITOR.tools-method-htmlDecodeAttr\" class=\"docClass\">CKEDITOR.tools.htmlDecodeAttr</a>( '&amp;lt;a &amp;quot; b&amp;gt;' ) ); // '&lt;a \" b&gt;'\n</code></pre>\n"
   },
   "htmlEncode": {
    "!type": "fn(text: string) -> string",
    "!doc": "<p>Replaces special HTML characters in a string with their relative HTML\nentity values.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-htmlEncode\" rel=\"CKEDITOR.tools-method-htmlEncode\" class=\"docClass\">CKEDITOR.tools.htmlEncode</a>( 'A &gt; B &amp; C &lt; D' ) ); // 'A &amp;gt; B &amp;amp; C &amp;lt; D'\n</code></pre>\n"
   },
   "htmlEncodeAttr": {
    "!type": "fn(The: string) -> string",
    "!doc": "<p>Replaces special HTML characters in HTMLElement attribute with their relative HTML entity values.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-htmlEncodeAttr\" rel=\"CKEDITOR.tools-method-htmlEncodeAttr\" class=\"docClass\">CKEDITOR.tools.htmlEncodeAttr</a>( '&lt;a \" b &gt;' ) ); // '&amp;lt;a &amp;quot; b &amp;gt;'\n</code></pre>\n"
   },
   "indexOf": {
    "!type": "fn(array: [?], value: ?|fn()) -> number",
    "!doc": "<p>Returns the index of an element in an array.</p>\n\n<pre><code>var letters = [ 'a', 'b', 0, 'c', false ];\nalert( <a href=\"#!/api/CKEDITOR.tools-method-indexOf\" rel=\"CKEDITOR.tools-method-indexOf\" class=\"docClass\">CKEDITOR.tools.indexOf</a>( letters, '0' ) );        // -1 because 0 !== '0'\nalert( <a href=\"#!/api/CKEDITOR.tools-method-indexOf\" rel=\"CKEDITOR.tools-method-indexOf\" class=\"docClass\">CKEDITOR.tools.indexOf</a>( letters, false ) );      // 4 because 0 !== false\n</code></pre>\n"
   },
   "isArray": {
    "!type": "fn(object: ?) -> bool",
    "!doc": "<p>Checks if an object is an Array.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-isArray\" rel=\"CKEDITOR.tools-method-isArray\" class=\"docClass\">CKEDITOR.tools.isArray</a>( [] ) );      // true\nalert( <a href=\"#!/api/CKEDITOR.tools-method-isArray\" rel=\"CKEDITOR.tools-method-isArray\" class=\"docClass\">CKEDITOR.tools.isArray</a>( 'Test' ) );  // false\n</code></pre>\n"
   },
   "isEmpty": {
    "!type": "fn(object: ?) -> bool",
    "!doc": "<p>Whether the object contains no properties of its own.</p>\n"
   },
   "ltrim": {
    "!type": "fn(str: string) -> string",
    "!doc": "<p>Removes spaces from the start (left) of a string. The following\ncharacters are removed: space, tab, line break, line feed.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-ltrim\" rel=\"CKEDITOR.tools-method-ltrim\" class=\"docClass\">CKEDITOR.tools.ltrim</a>( '  example ' ); // 'example '\n</code></pre>\n"
   },
   "normalizeCssText": {
    "!type": "fn(styleText: string, nativeNormalize?: bool) -> string",
    "!doc": "<p>Normalizes CSS data in order to avoid differences in the style attribute.</p>\n"
   },
   "objectCompare": {
    "!type": "fn(left: ?, right: ?, onlyLeft?: bool) -> bool",
    "!doc": "<p>Compares two objects.</p>\n\n<p><strong>Note:</strong> This method performs shallow, non-strict comparison.</p>\n"
   },
   "objectKeys": {
    "!type": "fn(obj: ?) -> [?]",
    "!doc": "<p>Returns an array of passed object's keys.</p>\n\n<pre><code>console.log( <a href=\"#!/api/CKEDITOR.tools-method-objectKeys\" rel=\"CKEDITOR.tools-method-objectKeys\" class=\"docClass\">CKEDITOR.tools.objectKeys</a>( { foo: 1, bar: false } );\n// -&gt; [ 'foo', 'bar' ]\n</code></pre>\n"
   },
   "override": {
    "!type": "fn(originalFunction: fn(), functionBuilder: fn()) -> fn()",
    "!doc": "<p>Creates a function override.</p>\n\n<pre><code>var obj = {\n    myFunction: function( name ) {\n        alert( 'Name: ' + name );\n    }\n};\n\nobj.myFunction = <a href=\"#!/api/CKEDITOR.tools-method-override\" rel=\"CKEDITOR.tools-method-override\" class=\"docClass\">CKEDITOR.tools.override</a>( obj.myFunction, function( myFunctionOriginal ) {\n    return function( name ) {\n        alert( 'Overriden name: ' + name );\n        myFunctionOriginal.call( this, name );\n    };\n} );\n</code></pre>\n"
   },
   "parseCssText": {
    "!type": "fn(styleText: string, normalize?: bool, nativeNormalize?: bool) -> ?",
    "!doc": "<p>Turns inline style text properties into one hash.</p>\n"
   },
   "prototypedCopy": {
    "!type": "fn(source: ?) -> ?",
    "!doc": "<p>Creates an object which is an instance of a class whose prototype is a\npredefined object. All properties defined in the source object are\nautomatically inherited by the resulting object, including future\nchanges to it.</p>\n"
   },
   "removeFunction": {
    "!type": "fn(ref: number) -> !this",
    "!doc": "<p>Removes the function reference created with <a href=\"#!/api/CKEDITOR.tools-method-addFunction\" rel=\"CKEDITOR.tools-method-addFunction\" class=\"docClass\">addFunction</a>.</p>\n"
   },
   "repeat": {
    "!type": "fn(str: string, times: number) -> string",
    "!doc": "<p>String specified by <code>str</code> repeats <code>times</code> times.</p>\n"
   },
   "rtrim": {
    "!type": "fn(str: string) -> string",
    "!doc": "<p>Removes spaces from the end (right) of a string. The following\ncharacters are removed: space, tab, line break, line feed.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-ltrim\" rel=\"CKEDITOR.tools-method-ltrim\" class=\"docClass\">CKEDITOR.tools.ltrim</a>( '  example ' ); // '  example'\n</code></pre>\n"
   },
   "search": {
    "!type": "fn(array: [?], value: ?|fn()) -> ?",
    "!doc": "<p>Returns the index of an element in an array.</p>\n\n<pre><code>var obj = { prop: true };\nvar letters = [ 'a', 'b', 0, obj, false ];\n\nalert( <a href=\"#!/api/CKEDITOR.tools-method-indexOf\" rel=\"CKEDITOR.tools-method-indexOf\" class=\"docClass\">CKEDITOR.tools.indexOf</a>( letters, '0' ) ); // null\nalert( <a href=\"#!/api/CKEDITOR.tools-method-indexOf\" rel=\"CKEDITOR.tools-method-indexOf\" class=\"docClass\">CKEDITOR.tools.indexOf</a>( letters, function( value ) {\n    // Return true when passed value has property 'prop'.\n    return value &amp;&amp; 'prop' in value;\n} ) );                                          // obj\n</code></pre>\n"
   },
   "setTimeout": {
    "!type": "fn(func: fn(), milliseconds?: number, scope?: ?, args?: ?|[?], ownerWindow?: ?) -> ?",
    "!doc": "<p>Executes a function after specified delay.</p>\n\n<pre><code><a href=\"#!/api/CKEDITOR.tools-method-setTimeout\" rel=\"CKEDITOR.tools-method-setTimeout\" class=\"docClass\">CKEDITOR.tools.setTimeout</a>( function() {\n    alert( 'Executed after 2 seconds' );\n}, 2000 );\n</code></pre>\n"
   },
   "trim": {
    "!type": "fn(str: string) -> string",
    "!doc": "<p>Removes spaces from the start and the end of a string. The following\ncharacters are removed: space, tab, line break, line feed.</p>\n\n<pre><code>alert( <a href=\"#!/api/CKEDITOR.tools-method-trim\" rel=\"CKEDITOR.tools-method-trim\" class=\"docClass\">CKEDITOR.tools.trim</a>( '  example ' ); // 'example'\n</code></pre>\n"
   },
   "tryThese": {
    "!type": "fn(fn: +Function...) -> +Mixed",
    "!doc": "<p>Returns the first successfully executed return value of a function that\ndoes not throw any exception.</p>\n"
   },
   "writeCssText": {
    "!type": "fn(styles: ?, sort?: bool) -> string",
    "!doc": "<p>Serializes the <code>style name =&gt; value</code> hash to a style text.</p>\n\n<pre><code>var styleObj = <a href=\"#!/api/CKEDITOR.tools-method-parseCssText\" rel=\"CKEDITOR.tools-method-parseCssText\" class=\"docClass\">CKEDITOR.tools.parseCssText</a>( 'color: red; border: none' );\nconsole.log( styleObj.color ); // -&gt; 'red'\n<a href=\"#!/api/CKEDITOR.tools-method-writeCssText\" rel=\"CKEDITOR.tools-method-writeCssText\" class=\"docClass\">CKEDITOR.tools.writeCssText</a>( styleObj ); // -&gt; 'color:red; border:none'\n<a href=\"#!/api/CKEDITOR.tools-method-writeCssText\" rel=\"CKEDITOR.tools-method-writeCssText\" class=\"docClass\">CKEDITOR.tools.writeCssText</a>( styleObj, true ); // -&gt; 'border:none; color:red'\n</code></pre>\n"
   }
  },
  "ui": {
   "handlerDefinition": {
    "!doc": "<p>Virtual class which just illustrates the features of handler objects to be\npassed to the <a href=\"#!/api/CKEDITOR.ui-method-addHandler\" rel=\"CKEDITOR.ui-method-addHandler\" class=\"docClass\">CKEDITOR.ui.addHandler</a> function.\nThis class is not really part of the API, so don't call its constructor.</p>\n",
    "prototype": {
     "create": {
      "!type": "fn(definition: ?) -> ?",
      "!doc": "<p>Transforms an item definition into an UI item object.</p>\n\n<pre><code>editorInstance.ui.addHandler( CKEDITOR.UI_BUTTON, {\n    create: function( definition ) {\n        return new CKEDITOR.ui.button( definition );\n    }\n} );\n</code></pre>\n"
     }
    }
   },
   "!doc": "<p>Contains UI features related to an editor instance.</p>\n",
   "prototype": {
    "!type": "fn(editor: +CKEDITOR.editor)",
    "_": {
     "!type": "?",
     "!doc": "<p>Object used to hold private stuff.</p>\n"
    },
    "add": {
     "!type": "fn(name: string, type: ?, definition: ?) -> !this",
     "!doc": "<p>Adds a UI item to the items collection. These items can be later used in\nthe interface.</p>\n\n<pre><code>// Add a new button named 'MyBold'.\neditorInstance.ui.add( 'MyBold', CKEDITOR.UI_BUTTON, {\n    label: 'My Bold',\n    command: 'bold'\n} );\n</code></pre>\n"
    },
    "addHandler": {
     "!type": "fn(type: ?, handler: ?) -> !this",
     "!doc": "<p>Adds a handler for a UI item type. The handler is responsible for\ntransforming UI item definitions in UI objects.</p>\n"
    },
    "create": {
     "!type": "fn(name: string) -> ?",
     "!doc": "<p>Gets a UI object.</p>\n"
    },
    "get": {
     "!type": "fn(name: string) -> !this",
     "!doc": "<p>Retrieve the created ui objects by name.</p>\n"
    },
    "space": {
     "!type": "fn(name: string) -> +CKEDITOR.dom.element",
     "!doc": "<p>Returns the unique DOM element that represents one editor's UI part, as\nthe editor UI is made completely decoupled from DOM (no DOM reference hold),\nthis method is mainly used to retrieve the rendered DOM part by name.</p>\n\n<pre><code>// Hide the bottom space in the UI.\nvar bottom = editor.ui.getSpace( 'bottom' );\nbottom.setStyle( 'display', 'none' );\n</code></pre>\n"
    },
    "spaceId": {
     "!type": "fn(name: ?) -> !this",
     "!doc": "<p>Generate the HTML ID from a specific UI space name.</p>\n"
    },
    "ready": {
     "!type": "fn(data: ?)",
     "!doc": "<p>Internal event fired when a new UI element is ready.</p>\n"
    }
   }
  }
 }
}

});  
