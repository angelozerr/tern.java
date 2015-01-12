(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
    "use strict";
    
  function getModule(data, name) {   
    return data.modules[name] || (data.modules[name] = new infer.AVal);
  }
  
  function findModule(data, name) {   
    return data.modules[name];
  }
  
  function copyModules(modules, Y) {
    for (var name in modules) {
      copyModule(modules[name], Y);	  
    }
  }
  
  function copyModule(module, Y) {
    var type = module.getType();
    var yuiType = type.hasProp('A');
    var from  = yuiType ? yuiType : type;  
    from.forAllProps(function(prop, val, local) {
      if (local && prop != "<i>") {
        var t = new infer.PropHasSubset(prop, val);
        t.origin = from.origin;
        Y.propagate(t);
      }
    });	
  }  
  
  function injectModules(Y, name) {
    var cx = infer.cx(), server = cx.parent, data = server._yui;
    if (name == '*') {
      // inject local YUI modules
      var defs = cx.definitions["yui3"];
      copyModules(defs, Y);
      // inject contributed modules (like AUI)
      copyModules(data.modules, Y);      
    } else {
        var module = findModule(data, name);
    }
  }
      
  function getFnIndex(argNodes) {
    for ( var i = 0; i < argNodes.length; i++) if (argNodes[i].type == "FunctionExpression") return i;
  }

  infer.registerFunction("yui_use", function(self, args, argNodes) {
    var yui = self.getType();
    if (yui && argNodes) {
      var index = getFnIndex(argNodes);
      if (index) {
        var fn = args[index];
        if (fn.argNames  && fn.argNames.length > 0) {              
          // Inject local and contributed modules.
          var Y = fn.args[0];
          injectModules(Y, '*');
          
          for ( var i = 0; i < argNodes.length - 1; i++) {
            var node = argNodes[i];
            if (node.type == "Literal" && typeof node.value == "string") {
              injectModules(Y, node.value);
            } else if (node.type == "ArrayExpression") for (var i = 0; i < node.elements.length; ++i) {
              var elt = node.elements[i];
              if (elt.type == "Literal" && typeof elt.value == "string") {
                injectModules(Y, elt.value);
              }
            }
          }
        }        
      }
    }
  });
  
  tern.registerPlugin("yui3", function(server, options) {
    server._yui = {
      modules: Object.create(null)		
    };
    
    server.on("reset", function() {
	  this._yui.modules = Object.create(null);      
	});
    
    return {defs: defs,
        passes: {postLoadDef: postLoadDef}};
  });        
	  
  function postLoadDef(data) {
    var cx = infer.cx(), mods = cx.definitions[data["!name"]]["!yui"];
    var data = cx.parent._yui;
    if (mods) for (var name in mods.props) {
      var origin = name.replace(/`/g, ".");
      var mod = getModule(data, origin);
      mod.origin = origin;
      mods.props[name].propagate(mod);
    }
  }
  
  var defs = {
 "!name": "yui3",
 "!define": {
  "anim": {
   "Anim": {
    "!type": "fn() -> +anim.Anim",
    "prototype": {
     "!proto": "base.Base.prototype",
     "node": {
      "!type": "+node.Node",
      "!doc": "The object to be animated."
     },
     "duration": {
      "!type": "number",
      "!doc": "The length of the animation.  Defaults to \"1\" (second)."
     },
     "easing": {
      "!type": "fn()",
      "!doc": "The method that will provide values to the attribute(s) during the animation.\nDefaults to \"Easing.easeNone\"."
     },
     "from": {
      "!type": "+yui.Object",
      "!doc": "The starting values for the animated properties.\n\nFields may be strings, numbers, or functions.\nIf a function is used, the return value becomes the from value.\nIf no from value is specified, the DEFAULT_GETTER will be used.\nSupports any unit, provided it matches the \"to\" (or default)\nunit (e.g. `{width: 10em, color: rgb(0, 0, 0), borderColor: #ccc}`).\n\nIf using the default (px for length-based units), the unit may be omitted\n(e.g. `{width: 100}, borderColor: ccc}`, which defaults to pixels\nand hex, respectively)."
     },
     "to": {
      "!type": "+yui.Object",
      "!doc": "The ending values for the animated properties.\n\nFields may be strings, numbers, or functions.\nSupports any unit, provided it matches the \"from\" (or default)\nunit (e.g. `{width: 50%, color: red, borderColor: #ccc}`).\n\nIf using the default (px for length-based units), the unit may be omitted\n(e.g. `{width: 100, borderColor: ccc}`, which defaults to pixels\nand hex, respectively)."
     },
     "startTime": {
      "!type": "number",
      "!doc": "Date stamp for the first frame of the animation."
     },
     "elapsedTime": {
      "!type": "number",
      "!doc": "Current time the animation has been running."
     },
     "running": {
      "!type": "bool",
      "!doc": "Whether or not the animation is currently running."
     },
     "iterations": {
      "!type": "number",
      "!doc": "The number of times the animation should run"
     },
     "iterationCount": {
      "!type": "number",
      "!doc": "The number of iterations that have occurred.\nResets when an animation ends (reaches iteration count or stop() called)."
     },
     "direction": {
      "!type": "string",
      "!doc": "How iterations of the animation should behave.\nPossible values are \"normal\" and \"alternate\".\nNormal will repeat the animation, alternate will reverse on every other pass."
     },
     "paused": {
      "!type": "bool",
      "!doc": "Whether or not the animation is currently paused."
     },
     "reverse": {
      "!type": "bool",
      "!doc": "If true, the `from` and `to` attributes are swapped, \nand the animation is then run starting from `from`."
     },
     "run": {
      "!type": "fn() -> !this",
      "!doc": "Starts or resumes an animation."
     },
     "pause": {
      "!type": "fn() -> !this",
      "!doc": "Pauses the animation and\nfreezes it in its current state and time.\nCalling run() will continue where it left off."
     },
     "stop": {
      "!type": "fn(finish: bool) -> !this",
      "!doc": "Stops the animation and resets its time."
     }
    },
    "getBezier": {
     "!type": "fn(points: [number], t: number) -> [number]",
     "!doc": "Get the current position of the animated element based on t.\nEach point is an array of \"x\" and \"y\" values (0 = x, 1 = y)\nAt least 2 points are required (start and end).\nFirst point is start. Last point is end.\nAdditional control points are optional."
    },
    "RE_DEFAULT_UNIT": {
     "!type": "?",
     "!doc": "Regex of properties that should use the default unit."
    },
    "DEFAULT_UNIT": {
     "!type": "?",
     "!doc": "The default unit to use with properties that pass the RE_DEFAULT_UNIT test."
    },
    "intervalTime": {
     "!type": "?",
     "!doc": "Time in milliseconds passed to setInterval for frame processing"
    },
    "behaviors": {
     "!type": "?",
     "!doc": "Bucket for custom getters and setters"
    },
    "DEFAULT_SETTER": {
     "!type": "?",
     "!doc": "The default setter to use when setting object properties."
    },
    "DEFAULT_GETTER": {
     "!type": "?",
     "!doc": "The default getter to use when getting object properties."
    },
    "run": {
     "!type": "fn()",
     "!doc": "Runs all animation instances."
    },
    "pause": {
     "!type": "fn()",
     "!doc": "Pauses all animation instances."
    },
    "stop": {
     "!type": "fn()",
     "!doc": "Stops all animation instances."
    }
   },
   "Easing": {
    "!type": "fn()",
    "prototype": {
     "easeNone": {
      "!type": "fn(t: number, b: number, c: number, d: number) -> number",
      "!doc": "Uniform speed between points."
     },
     "easeIn": {
      "!type": "fn(t: number, b: number, c: number, d: number) -> number",
      "!doc": "Begins slowly and accelerates towards end. (quadratic)"
     },
     "easeOut": {
      "!type": "fn(t: number, b: number, c: number, d: number) -> number",
      "!doc": "Begins quickly and decelerates towards end.  (quadratic)"
     },
     "easeBoth": {
      "!type": "fn(t: number, b: number, c: number, d: number) -> number",
      "!doc": "Begins slowly and decelerates towards end. (quadratic)"
     },
     "easeInStrong": {
      "!type": "fn(t: number, b: number, c: number, d: number) -> number",
      "!doc": "Begins slowly and accelerates towards end. (quartic)"
     },
     "easeOutStrong": {
      "!type": "fn(t: number, b: number, c: number, d: number) -> number",
      "!doc": "Begins quickly and decelerates towards end.  (quartic)"
     },
     "easeBothStrong": {
      "!type": "fn(t: number, b: number, c: number, d: number) -> number",
      "!doc": "Begins slowly and decelerates towards end. (quartic)"
     },
     "elasticIn": {
      "!type": "fn(t: number, b: number, c: number, d: number, a: number, p: number) -> number",
      "!doc": "Snap in elastic effect."
     },
     "elasticOut": {
      "!type": "fn(t: number, b: number, c: number, d: number, a: number, p: number) -> number",
      "!doc": "Snap out elastic effect."
     },
     "elasticBoth": {
      "!type": "fn(t: number, b: number, c: number, d: number, a: number, p: number) -> number",
      "!doc": "Snap both elastic effect."
     },
     "backIn": {
      "!type": "fn(t: number, b: number, c: number, d: number, s: number) -> number",
      "!doc": "Backtracks slightly, then reverses direction and moves to end."
     },
     "backOut": {
      "!type": "fn(t: number, b: number, c: number, d: number, s: number) -> number",
      "!doc": "Overshoots end, then reverses and comes back to end."
     },
     "backBoth": {
      "!type": "fn(t: number, b: number, c: number, d: number, s: number) -> number",
      "!doc": "Backtracks slightly, then reverses direction, overshoots end,\nthen reverses and comes back to end."
     },
     "bounceIn": {
      "!type": "fn(t: number, b: number, c: number, d: number) -> number",
      "!doc": "Bounce off of start."
     },
     "bounceOut": {
      "!type": "fn(t: number, b: number, c: number, d: number) -> number",
      "!doc": "Bounces off end."
     },
     "bounceBoth": {
      "!type": "fn(t: number, b: number, c: number, d: number) -> number",
      "!doc": "Bounces off start and end."
     }
    }
   }
  },
  "app": {
   "App": {
    "!type": "fn(config?: +yui.Object) -> +app.App",
    "prototype": {
     "!proto": "app.App.Base.prototype"
    },
    "Content": {
     "!type": "fn()",
     "route": {
      "!type": "+yui.Array",
      "!doc": "A stack of middleware which forms a pjax-style content route.\n\nThis route will load the rendered HTML content from the server, then create and\nshow a new view using those contents."
     },
     "prototype": {
      "showContent": {
       "!type": "fn(content: +HTMLElement, options?: +yui.Object, callback?: fn(view: +app.View)) -> !this",
       "!doc": "Sets this apps `activeView` attribute using the specified `content`.\n\nThis provides an easy way to view-ify HTML content which should be shown as\nthis apps active/visible view. This method will determine the appropriate\nview `container` node based on the specified `content`. By default, a new\n`Y.View` instance will be created unless `options.view` is specified.\n\nUnder the hood, this method calls the `showView()` method, so refer to its\ndocs for more information."
      }
     }
    },
    "Transitions": {
     "!type": "fn()",
     "prototype": {
      "transitions": {
       "!type": "+yui.Object",
       "!doc": "Default transitions to use when the `activeView` changes.\n\nThe following are types of changes for which transitions can be defined that\ncorrespond to the relationship between the new and previous `activeView`:\n\n  * `navigate`: The default transition to use when changing the `activeView`\n    of the application.\n\n  * `toChild`: The transition to use when the new `activeView` is configured\n    as a child of the previously active view via its `parent` property as\n    defined in this apps `views`.\n\n  * `toParent`: The transition to use when the new `activeView` is\n    configured as the `parent` of the previously active view as defined in\n    this apps `views`.\n\n**Note:** Transitions are an opt-in feature and will only be used in\nbrowsers which support native CSS3 transitions."
      },
      "showView": {
       "!type": "fn(view: string, config?: +yui.Object, options?: +yui.Object, callback?: fn(view: +app.View)) -> !this",
       "!doc": "Sets which view is active/visible for the application. This will set the\napps `activeView` attribute to the specified `view`.\n\nThe `view` will be \"attached\" to this app, meaning it will be both rendered\ninto this apps `viewContainer` node and all of its events will bubble to\nthe app. The previous `activeView` will be \"detached\" from this app.\n\nWhen a string-name is provided for a view which has been registered on this\napps `views` object, the referenced metadata will be used and the\n`activeView` will be set to either a preserved view instance, or a new\ninstance of the registered view will be created using the specified `config`\nobject passed-into this method.\n\nA callback function can be specified as either the third or fourth argument,\nand this function will be called after the new `view` becomes the\n`activeView`, is rendered to the `viewContainer`, and is ready to use."
      }
     },
     "FX": {
      "!type": "+yui.Object",
      "!doc": "Collect of transitions -> fx.\n\nA transition (e.g. \"fade\") is a simple name given to a configuration of fx to\napply, consisting of `viewIn` and `viewOut` properties whos values are names of\nfx registered on `Y.Transition.fx`.\n\nBy default transitions: `fade`, `slideLeft`, and `slideRight` have fx defined."
     }
    },
    "Base": {
     "!type": "fn(config?: +yui.Object) -> +app.App.Base",
     "prototype": {
      "!proto": "base.Base.prototype",
      "views": {
       "!type": "+yui.Object",
       "!doc": "Hash of view-name to metadata used to declaratively describe an\napplications views and their relationship with the app and its other views.\n\nThe view metadata is composed of Objects keyed to a view-name that can have\nany or all of the following properties:\n\n  * `type`: Function or a string representing the view constructor to use to\n    create view instances. If a string is used, the constructor function is\n    assumed to be on the `Y` object; e.g. `\"SomeView\"` -> `Y.SomeView`.\n\n  * `preserve`: Boolean for whether the view instance should be retained. By\n    default, the view instance will be destroyed when it is no longer the\n    `activeView`. If `true` the view instance will simply be `removed()`\n    from the DOM when it is no longer active. This is useful when the view\n    is frequently used and may be expensive to re-create.\n\n  * `parent`: String to another named view in this hash that represents the\n    parent view within the applications view hierarchy; e.g. a `\"photo\"`\n    view could have `\"album\"` has its `parent` view. This parent/child\n    relationship is a useful cue for things like transitions.\n\n  * `instance`: Used internally to manage the current instance of this named\n    view. This can be used if your view instance is created up-front, or if\n    you would rather manage the View lifecycle, but you probably should just\n    let this be handled for you.\n\nIf `views` are specified at instantiation time, the metadata in the `views`\nObject here will be used as defaults when creating the instances `views`.\n\nEvery `Y.App` instance gets its own copy of a `views` object so this Object\non the prototype will not be polluted."
      },
      "createView": {
       "!type": "fn(name: string, config?: +yui.Object) -> +app.View",
       "!doc": "Creates and returns a new view instance using the provided `name` to look up\nthe view info metadata defined in the `views` object. The passed-in `config`\nobject is passed to the view constructor function.\n\nThis function also maps a view instance back to its view info metadata."
      },
      "getViewInfo": {
       "!type": "fn(view: +app.View) -> +yui.Object",
       "!doc": "Returns the metadata associated with a view instance or view name defined on\nthe `views` object."
      },
      "navigate": {
       "!type": "fn(url: string, options?: +yui.Object)",
       "!doc": "Navigates to the specified URL if there is a route handler that matches. In\nbrowsers capable of using HTML5 history or when `serverRouting` is falsy,\nthe navigation will be enhanced by firing the `navigate` event and having\nthe app handle the \"request\". When `serverRouting` is `true`, non-HTML5\nbrowsers will navigate to the new URL via a full page reload.\n\nWhen there is a route handler for the specified URL and it is being\nnavigated to, this method will return `true`, otherwise it will return\n`false`.\n\n**Note:** The specified URL _must_ be of the same origin as the current URL,\notherwise an error will be logged and navigation will not occur. This is\nintended as both a security constraint and a purposely imposed limitation as\nit does not make sense to tell the app to navigate to a URL on a\ndifferent scheme, host, or port."
      },
      "render": {
       "!type": "fn() -> !this",
       "!doc": "Renders this application by appending the `viewContainer` node to the\n`container` node if it isnt already a child of the container, and the\n`activeView` will be appended the view container, if it isnt already.\n\nYou should call this method at least once, usually after the initialization\nof your app instance so the proper DOM structure is setup and optionally\nappend the container to the DOM if its not there already.\n\nYou may override this method to customize the apps rendering, but you\nshould expect that the `viewContainer`s contents will be modified by the\napp for the purpose of rendering the `activeView` when it changes."
      },
      "showView": {
       "!type": "fn(view: string, config?: +yui.Object, options?: +yui.Object, callback?: fn(view: +app.View)) -> !this",
       "!doc": "Sets which view is active/visible for the application. This will set the\napps `activeView` attribute to the specified `view`.\n\nThe `view` will be \"attached\" to this app, meaning it will be both rendered\ninto this apps `viewContainer` node and all of its events will bubble to\nthe app. The previous `activeView` will be \"detached\" from this app.\n\nWhen a string-name is provided for a view which has been registered on this\napps `views` object, the referenced metadata will be used and the\n`activeView` will be set to either a preserved view instance, or a new\ninstance of the registered view will be created using the specified `config`\nobject passed-into this method.\n\nA callback function can be specified as either the third or fourth argument,\nand this function will be called after the new `view` becomes the\n`activeView`, is rendered to the `viewContainer`, and is ready to use."
      },
      "activeView": {
       "!type": "+app.View",
       "!doc": "The applications active/visible view.\n\nThis attribute is read-only, to set the `activeView` use the\n`showView()` method."
      },
      "container": {
       "!type": "+HTMLElement",
       "!doc": "Container node which represents the applications bounding-box, into\nwhich this apps content will be rendered.\n\nThe container node serves as the host for all DOM events attached by the\napp. Delegation is used to handle events on children of the container,\nallowing the containers contents to be re-rendered at any time without\nlosing event subscriptions.\n\nThe default container is the `<body>` Node, but you can override this in\na subclass, or by passing in a custom `container` config value at\ninstantiation time.\n\nWhen `container` is overridden by a subclass or passed as a config\noption at instantiation time, it may be provided as a selector string, a\nDOM element, or a `Y.Node` instance. During initialization, this apps\n`create()` method will be called to convert the container into a\n`Y.Node` instance if it isnt one already and stamp it with the CSS\nclass: `\"yui3-app\"`.\n\nThe container is not added to the page automatically. This allows you to\nhave full control over how and when your app is actually rendered to\nthe page."
      },
      "html5": {
       "!type": "bool",
       "!doc": "Whether or not this browser is capable of using HTML5 history.\n\nThis value is dependent on the value of `serverRouting` and will default\naccordingly.\n\nSetting this to `false` will force the use of hash-based history even on\nHTML5 browsers, but please dont do this unless you understand the\nconsequences."
      },
      "linkSelector": {
       "!type": "string",
       "!doc": "CSS selector string used to filter link click events so that only the\nlinks which match it will have the enhanced-navigation behavior of pjax\napplied.\n\nWhen a link is clicked and that link matches this selector, navigating\nto the links `href` URL using the enhanced, pjax, behavior will be\nattempted; and the browsers default way to navigate to new pages will\nbe the fallback.\n\nBy default this selector will match _all_ links on the page."
      },
      "serverRouting": {
       "!type": "bool",
       "!doc": "Whether or not this applications server is capable of properly routing\nall requests and rendering the initial state in the HTML responses.\n\nThis can have three different values, each having particular\nimplications on how the app will handle routing and navigation:\n\n  * `undefined`: The best form of URLs will be chosen based on the\n    capabilities of the browser. Given no information about the server\n    environmentm a balanced approach to routing and navigation is\n    chosen.\n\n    The server should be capable of handling full-path requests, since\n    full-URLs will be generated by browsers using HTML5 history. If this\n    is a client-side-only app the server could handle full-URL requests\n    by sending a redirect back to the root with a hash-based URL, e.g:\n\n        Request:     http://example.com/users/1\n        Redirect to: http://example.com/#/users/1\n\n  * `true`: The server is *fully* capable of properly handling requests\n    to all full-path URLs the app can produce.\n\n    This is the best option for progressive-enhancement because it will\n    cause **all URLs to always have full-paths**, which means the server\n    will be able to accurately handle all URLs this app produces. e.g.\n\n        http://example.com/users/1\n\n    To meet this strict full-URL requirement, browsers which are not\n    capable of using HTML5 history will make requests to the server\n    resulting in full-page reloads.\n\n  * `false`: The server is *not* capable of properly handling requests\n    to all full-path URLs the app can produce, therefore all routing\n    will be handled by this App instance.\n\n    Be aware that this will cause **all URLs to always be hash-based**,\n    even in browsers that are capable of using HTML5 history. e.g.\n\n        http://example.com/#/users/1\n\n    A single-page or client-side-only app where the server sends a\n    \"shell\" page with JavaScript to the client might have this\n    restriction. If youre setting this to `false`, read the following:\n\n**Note:** When this is set to `false`, the server will *never* receive\nthe full URL because browsers do not send the fragment-part to the\nserver, that is everything after and including the \"#\".\n\nConsider the following example:\n\n    URL shown in browser: http://example.com/#/users/1\n    URL sent to server:   http://example.com/\n\nYou should feel bad about hurting our precious web if you forcefully set\neither `serverRouting` or `html5` to `false`, because youre basically\npunching the web in the face here with your lossy URLs! Please make sure\nyou know what youre doing and that you understand the implications.\n\nIdeally you should always prefer full-path URLs (not /#/foo/), and want\nfull-page reloads when the clients browser is not capable of enhancing\nthe experience using the HTML5 history APIs. Setting this to `true` is\nthe best option for progressive-enhancement (and graceful-degradation)."
      },
      "viewContainer": {
       "!type": "+HTMLElement",
       "!doc": "The node into which this apps `views` will be rendered when they become\nthe `activeView`.\n\nThe view container node serves as the container to hold the apps\n`activeView`. Each time the `activeView` is set via `showView()`, the\nprevious view will be removed from this node, and the new active views\n`container` node will be appended.\n\nThe default view container is a `<div>` Node, but you can override this\nin a subclass, or by passing in a custom `viewContainer` config value at\ninstantiation time. The `viewContainer` may be provided as a selector\nstring, DOM element, or a `Y.Node` instance (having the `viewContainer`\nand the `container` be the same node is also supported).\n\nThe apps `render()` method will stamp the view container with the CSS\nclass `\"yui3-app-views\"` and append it to the apps `container` node if\nit isnt already, and any `activeView` will be appended to this node if\nit isnt already."
      }
     }
    },
    "CLASS_NAMES": {
     "!type": "+yui.Object",
     "!doc": "CSS classes used by `Y.App`."
    },
    "serverRouting": {
     "!type": "bool",
     "!doc": "Default `serverRouting` attribute value for all apps."
    }
   },
   "ModelSync": {
    "Local": {
     "!type": "fn()",
     "prototype": {
      "root": {
       "!type": "string",
       "!doc": "Root used as the key inside of localStorage and/or the in-memory store."
      },
      "storage": {
       "!type": "+Storage",
       "!doc": "Shortcut for access to localStorage."
      },
      "sync": {
       "!type": "fn(action: string, options?: +yui.Object, callback?: fn(err: +Error, response?: ?))",
       "!doc": "Creates a synchronization layer with the localStorage API, if available.\nOtherwise, falls back to a in-memory data store.\n\nThis method is called internally by load(), save(), and destroy()."
      }
     }
    },
    "REST": {
     "!type": "fn()",
     "CSRF_TOKEN": {
      "!type": "string",
      "!doc": "A request authenticity token to validate HTTP requests made by this extension\nwith the server when the request results in changing persistent state. This\nallows you to protect your server from Cross-Site Request Forgery attacks.\n\nA CSRF token provided by the server can be embedded in the HTML document and\nassigned to `YUI.Env.CSRF_TOKEN` like this:\n\n    <script>\n        YUI.Env.CSRF_TOKEN = {{session.authenticityToken}};\n    </script>\n\nThe above should come after YUI seed file so that `YUI.Env` will be defined.\n\n**Note:** This can be overridden on a per-request basis. See `sync()` method.\n\nWhen a value for the CSRF token is provided, either statically or via `options`\npassed to the `save()` and `destroy()` methods, the applicable HTTP requests\nwill have a `X-CSRF-Token` header added with the token value."
     },
     "EMULATE_HTTP": {
      "!type": "bool",
      "!doc": "Static flag to use the HTTP POST method instead of PUT or DELETE.\n\nIf the server-side HTTP framework isnt RESTful, setting this flag to `true`\nwill cause all PUT and DELETE requests to instead use the POST HTTP method, and\nadd a `X-HTTP-Method-Override` HTTP header with the value of the method type\nwhich was overridden."
     },
     "HTTP_HEADERS": {
      "!type": "+yui.Object",
      "!doc": "Default headers used with all XHRs.\n\nBy default the `Accept` and `Content-Type` headers are set to\n\"application/json\", this signals to the HTTP server to process the request\nbodies as JSON and send JSON responses. If youre sending and receiving content\nother than JSON, you can override these headers and the `parse()` and\n`serialize()` methods.\n\n**Note:** These headers will be merged with any request-specific headers, and\nthe request-specific headers will take precedence."
     },
     "HTTP_METHODS": {
      "!type": "+yui.Object",
      "!doc": "Static mapping of RESTful HTTP methods corresponding to CRUD actions."
     },
     "HTTP_TIMEOUT": {
      "!type": "number",
      "!doc": "The number of milliseconds before the XHRs will timeout/abort. This defaults to\n30 seconds.\n\n**Note:** This can be overridden on a per-request basis. See `sync()` method."
     },
     "prototype": {
      "root": {
       "!type": "string",
       "!doc": "A string which represents the root or collection part of the URL which\nrelates to a Model or ModelList. Usually this value should be same for all\ninstances of a specific Model/ModelList subclass.\n\nWhen sub-classing `Y.Model`, usually youll only need to override this\nproperty, which lets the URLs for the XHRs be generated by convention. If\nthe `root` string ends with a trailing-slash, XHR URLs will also end with a\n\"/\", and if the `root` does not end with a slash, neither will the XHR URLs."
      },
      "url": {
       "!type": "string",
       "!doc": "A string which specifies the URL to use when making XHRs, if not value is\nprovided, the URLs used to make XHRs will be generated by convention.\n\nWhile a `url` can be provided for each Model/ModelList instance, usually\nyoull want to either rely on the default convention or provide a tokenized\nstring on the prototype which can be used for all instances.\n\nWhen sub-classing `Y.Model`, you will probably be able to rely on the\ndefault convention of generating URLs in conjunction with the `root`\nproperty and whether the model is new or not (i.e. has an `id`). If the\n`root` property ends with a trailing-slash, the generated URL for the\nspecific model will also end with a trailing-slash."
      },
      "getURL": {
       "!type": "fn(action?: string, options?: +yui.Object) -> string",
       "!doc": "Returns the URL for this model or model list for the given `action` and\n`options`, if specified.\n\nThis method correctly handles the variations of `root` and `url` values and\nis called by the `sync()` method to get the URLs used to make the XHRs.\n\nYou can override this method if you need to provide a specific\nimplementation for how the URLs of your Model and ModelList subclasses need\nto be generated."
      },
      "parseIOResponse": {
       "!type": "fn(response: +yui.Object) -> ?",
       "!doc": "Called to parse the response object returned from `Y.io()`. This method\nreceives the full response object and is expected to \"prep\" a response which\nis suitable to pass to the `parse()` method.\n\nBy default the response body is returned (`responseText`), because it\nusually represents the entire entity of this model on the server.\n\nIf you need to parse data out of the responses headers you should do so by\noverriding this method. If youd like the entire response object from the\nXHR to be passed to your `parse()` method, you can simply assign this\nproperty to `false`."
      },
      "serialize": {
       "!type": "fn(action?: string) -> string",
       "!doc": "Serializes `this` model to be used as the HTTP request entity body.\n\nBy default this model will be serialized to a JSON string via its `toJSON()`\nmethod.\n\nYou can override this method when the HTTP server expects a different\nrepresentation of this models data that is different from the default JSON\nserialization. If youre sending and receive content other than JSON, be\nsure change the `Accept` and `Content-Type` `HTTP_HEADERS` as well.\n\n**Note:** A models `toJSON()` method can also be overridden. If you only\nneed to modify which attributes are serialized to JSON, thats a better\nplace to start."
      },
      "sync": {
       "!type": "fn(action: string, options?: +yui.Object, callback?: fn(err: +Error, response?: ?))",
       "!doc": "Communicates with a RESTful HTTP server by sending and receiving data via\nXHRs. This method is called internally by load(), save(), and destroy().\n\nThe URL used for each XHR will be retrieved by calling the `getURL()` method\nand passing it the specified `action` and `options`.\n\nThis method relies heavily on standard RESTful HTTP conventions"
      }
     }
    }
   },
   "View": {
    "!type": "fn() -> +app.View",
    "prototype": {
     "!proto": "base.Base.prototype",
     "containerTemplate": {
      "!type": "string",
      "!doc": "Template for this views container."
     },
     "events": {
      "!type": "+yui.Object",
      "!doc": "Hash of CSS selectors mapped to events to delegate to elements matching\nthose selectors.\n\nCSS selectors are relative to the `container` element. Events are attached\nto the container, and delegation is used so that subscribers are only\nnotified of events that occur on elements inside the container that match\nthe specified selectors. This allows the containers contents to be re-\nrendered as needed without losing event subscriptions.\n\nEvent handlers can be specified either as functions or as strings that map\nto function names on this view instance or its prototype.\n\nThe `this` object in event handlers will refer to this view instance. If\nyoud prefer `this` to be something else, use `Y.bind()` to bind a custom\n`this` object."
     },
     "template": {
      "!type": "+mixed",
      "!doc": "Template for this views contents.\n\nThis is a convenience property that has no default behavior of its own.\nIts only provided as a convention to allow you to store whatever you\nconsider to be a template, whether thats an HTML string, a `Y.Node`\ninstance, a Mustache template, or anything else your little heart\ndesires.\n\nHow this template gets used is entirely up to you and your custom\n`render()` method."
     },
     "destroy": {
      "!type": "fn(options?: +yui.Object) -> !this",
      "!doc": "Destroys this View, detaching any DOM events and optionally also destroying\nits container node.\n\nBy default, the container node will not be destroyed. Pass an _options_\nobject with a truthy `remove` property to destroy the container as well."
     },
     "attachEvents": {
      "!type": "fn(events?: +yui.Object) -> !this",
      "!doc": "Attaches delegated event handlers to this views container element. This\nmethod is called internally to subscribe to events configured in the\n`events` attribute when the view is initialized.\n\nYou may override this method to customize the event attaching logic."
     },
     "create": {
      "!type": "fn(container?: +HTMLElement) -> +node.Node",
      "!doc": "Creates and returns a container node for this view.\n\nBy default, the container is created from the HTML template specified in the\n`containerTemplate` property, and is _not_ added to the DOM automatically.\n\nYou may override this method to customize how the container node is created\n(such as by rendering it from a custom template format). Your method must\nreturn a `Y.Node` instance."
     },
     "detachEvents": {
      "!type": "fn() -> !this",
      "!doc": "Detaches DOM events that have previously been attached to the container by\n`attachEvents()`."
     },
     "remove": {
      "!type": "fn() -> !this",
      "!doc": "Removes this views container element from the DOM (if its in the DOM),\nbut doesnt destroy it or any event listeners attached to it."
     },
     "render": {
      "!type": "fn() -> !this",
      "!doc": "Renders this view.\n\nThis method is a noop by default. Override it to provide a custom\nimplementation that renders this views content and appends it to the\ncontainer element. Ideally your `render` method should also return `this` as\nthe end to allow chaining, but thats up to you.\n\nSince theres no default renderer, youre free to render your view however\nyou see fit, whether that means manipulating the DOM directly, dumping\nstrings into `innerHTML`, or using a template language of some kind.\n\nFor basic templating needs, `Y.Node.create()` and `Y.Lang.sub()` may\nsuffice, but there are no restrictions on what tools or techniques you can\nuse to render your view. All you need to do is append something to the\ncontainer element at some point, and optionally append the container\nto the DOM if its not there already."
     },
     "container": {
      "!type": "+HTMLElement",
      "!doc": "Container node into which this views content will be rendered.\n\nThe container node serves as the host for all DOM events attached by the\nview. Delegation is used to handle events on children of the container,\nallowing the containers contents to be re-rendered at any time without\nlosing event subscriptions.\n\nThe default container is a `<div>` Node, but you can override this in\na subclass, or by passing in a custom `container` config value at\ninstantiation time. If you override the default container in a subclass\nusing `ATTRS`, you must use the `valueFn` property. The views constructor\nwill ignore any assignments using `value`.\n\nWhen `container` is overridden by a subclass or passed as a config\noption at instantiation time, you can provide it as a selector string, a\nDOM element, a `Y.Node` instance, or (if you are subclassing and modifying\nthe attribute), a `valueFn` function that returns a `Y.Node` instance.\nThe value will be converted into a `Y.Node` instance if it isnt one\nalready.\n\nThe container is not added to the page automatically. This allows you to\nhave full control over how and when your view is actually rendered to\nthe page."
     }
    },
    "NodeMap": {
     "!type": "fn()",
     "getByNode": {
      "!type": "fn(node: +node.Node) -> +app.View",
      "!doc": "Returns the nearest View instance associated with the given Node. The Node may\nbe a View container or any child of a View container.\n\nNote that only instances of Views that have the Y.View.NodeMap extension mixed\nin will be returned. The base View class doesnt provide this functionality by\ndefault due to the additional memory management overhead involved in maintaining\na mapping of Nodes to View instances."
     }
    }
   },
   "LazyModelList": {
    "!type": "fn() -> +app.LazyModelList",
    "prototype": {
     "!proto": "app.ModelList.prototype",
     "free": {
      "!type": "fn(model?: +app.Model) -> !this",
      "!doc": "Deletes the specified model from the model cache to release memory. The\nmodel wont be destroyed or removed from the list, just freed from the\ncache; it can still be instantiated again using `revive()`.\n\nIf no model or model index is specified, all cached models in this list will\nbe freed.\n\nNote: Specifying an index is faster than specifying a model instance, since\nthe latter requires an `indexOf()` call."
     },
     "get": {
      "!type": "fn(name: string) -> [string]",
      "!doc": "Overrides ModelList#get() to return a map of property values rather than\nperforming attribute lookups."
     },
     "getAsHTML": {
      "!type": "fn(name: string) -> [string]",
      "!doc": "Overrides ModelList#getAsHTML() to return a map of HTML-escaped property\nvalues rather than performing attribute lookups."
     },
     "getAsURL": {
      "!type": "fn(name: string) -> [string]",
      "!doc": "Overrides ModelList#getAsURL() to return a map of URL-encoded property\nvalues rather than performing attribute lookups."
     },
     "indexOf": {
      "!type": "fn(needle: +app.Model) -> number",
      "!doc": "Returns the index of the given object or Model instance in this\nLazyModelList."
     },
     "reset": {
      "!type": "fn(models?: [+yui.Object], options?: +yui.Object) -> !this",
      "!doc": "Overrides ModelList#reset() to work with plain objects."
     },
     "revive": {
      "!type": "fn(item?: number) -> +app.Model",
      "!doc": "Revives an item (or all items) into a full Model instance. The _item_\nargument may be the index of an object in this list, an actual object (which\nmust exist in the list), or may be omitted to revive all items in the list.\n\nOnce revived, Model instances are attached to this list and cached so that\nreviving them in the future doesnt require another Model instantiation. Use\nthe `free()` method to explicitly uncache and detach a previously revived\nModel instance.\n\nNote: Specifying an index rather than an object will be faster, since\nobjects require an `indexOf()` lookup in order to retrieve the index."
     },
     "toJSON": {
      "!type": "fn() -> [+yui.Object]",
      "!doc": "Overrides ModelList#toJSON() to use toArray() instead, since its more\nefficient for LazyModelList."
     }
    }
   },
   "ModelList": {
    "!type": "fn(config: +yui.Object) -> +app.ModelList",
    "prototype": {
     "!proto": "base.Base.prototype",
     "model": {
      "!type": "+app.Model",
      "!doc": "The `Model` class or subclass of the models in this list.\n\nThe class specified here will be used to create model instances\nautomatically based on attribute hashes passed to the `add()`, `create()`,\nand `reset()` methods.\n\nYou may specify the class as an actual class reference or as a string that\nresolves to a class reference at runtime (the latter can be useful if the\nspecified class will be loaded lazily)."
     },
     "add": {
      "!type": "fn(models: +app.Model, options?: +yui.Object) -> +app.Model",
      "!doc": "Adds the specified model or array of models to this list. You may also pass\nanother ModelList instance, in which case all the models in that list will\nbe added to this one as well."
     },
     "comparator": {
      "!type": "fn(model: +app.Model) -> number",
      "!doc": "Define this method to provide a function that takes a model as a parameter\nand returns a value by which that model should be sorted relative to other\nmodels in this list.\n\nBy default, no comparator is defined, meaning that models will not be sorted\n(theyll be stored in the order theyre added)."
     },
     "create": {
      "!type": "fn(model: +app.Model, options?: +yui.Object, callback?: fn(err: +Error, response: ?)) -> +app.Model",
      "!doc": "Creates or updates the specified model on the server, then adds it to this\nlist if the server indicates success."
     },
     "each": {
      "!type": "fn(callback: fn(model: +app.Model, index: number, list: +app.ModelList), thisObj?: +yui.Object) -> !this",
      "!doc": "Executes the supplied function on each model in this list.\n\nBy default, the callback functions `this` object will refer to the model\ncurrently being iterated. Specify a `thisObj` to override the `this` object\nif desired.\n\nNote: Iteration is performed on a copy of the internal array of models, so\nits safe to delete a model from the list during iteration."
     },
     "filter": {
      "!type": "fn(options?: +yui.Object, callback: fn(model: +app.Model, index: number, list: +app.ModelList)) -> [+app.Model]",
      "!doc": "Executes the supplied function on each model in this list. Returns an array\ncontaining the models for which the supplied function returned a truthy\nvalue.\n\nThe callback functions `this` object will refer to this ModelList. Use\n`Y.bind()` to bind the `this` object to another object if desired."
     },
     "get": {
      "!type": "fn(name: string) -> ?",
      "!doc": "If _name_ refers to an attribute on this ModelList instance, returns the\nvalue of that attribute. Otherwise, returns an array containing the values\nof the specified attribute from each model in this list."
     },
     "getAsHTML": {
      "!type": "fn(name: string) -> string",
      "!doc": "If _name_ refers to an attribute on this ModelList instance, returns the\nHTML-escaped value of that attribute. Otherwise, returns an array containing\nthe HTML-escaped values of the specified attribute from each model in this\nlist.\n\nThe values are escaped using `Escape.html()`."
     },
     "getAsURL": {
      "!type": "fn(name: string) -> string",
      "!doc": "If _name_ refers to an attribute on this ModelList instance, returns the\nURL-encoded value of that attribute. Otherwise, returns an array containing\nthe URL-encoded values of the specified attribute from each model in this\nlist.\n\nThe values are encoded using the native `encodeURIComponent()` function."
     },
     "getByClientId": {
      "!type": "fn(clientId: string) -> +app.Model",
      "!doc": "Returns the model with the specified _clientId_, or `null` if not found."
     },
     "getById": {
      "!type": "fn(id: string) -> +app.Model",
      "!doc": "Returns the model with the specified _id_, or `null` if not found.\n\nNote that models arent expected to have an id until theyre saved, so if\nyoure working with unsaved models, it may be safer to call\n`getByClientId()`."
     },
     "invoke": {
      "!type": "fn(name: string, args?: ?) -> ?",
      "!doc": "Calls the named method on every model in the list. Any arguments provided\nafter _name_ will be passed on to the invoked method."
     },
     "item": {
      "!type": "fn(index: number) -> +app.Model",
      "!doc": "Returns the model at the specified _index_."
     },
     "load": {
      "!type": "fn(options?: +yui.Object, callback?: fn(err: +Error, response: ?)) -> !this",
      "!doc": "Loads this list of models from the server.\n\nThis method delegates to the `sync()` method to perform the actual load\noperation, which is an asynchronous action. Specify a _callback_ function to\nbe notified of success or failure.\n\nIf the load operation succeeds, a `reset` event will be fired."
     },
     "map": {
      "!type": "fn(fn: fn(model: +app.Model, index: number, models: [+app.Model]), thisObj?: +yui.Object) -> +yui.Array",
      "!doc": "Executes the specified function on each model in this list and returns an\narray of the functions collected return values."
     },
     "parse": {
      "!type": "fn(response: ?) -> [+yui.Object]",
      "!doc": "Called to parse the _response_ when the list is loaded from the server.\nThis method receives a server _response_ and is expected to return an array\nof model attribute hashes.\n\nThe default implementation assumes that _response_ is either an array of\nattribute hashes or a JSON string that can be parsed into an array of\nattribute hashes. If _response_ is a JSON string and either `Y.JSON` or the\nnative `JSON` object are available, it will be parsed automatically. If a\nparse error occurs, an `error` event will be fired and the model will not be\nupdated.\n\nYou may override this method to implement custom parsing logic if necessary."
     },
     "remove": {
      "!type": "fn(models: +app.Model, options?: +yui.Object) -> +app.Model",
      "!doc": "Removes the specified model or array of models from this list. You may also\npass another ModelList instance to remove all the models that are in both\nthat instance and this instance, or pass numerical indices to remove the\nmodels at those indices."
     },
     "reset": {
      "!type": "fn(models?: [+app.Model], options?: +yui.Object) -> !this",
      "!doc": "Completely replaces all models in the list with those specified, and fires a\nsingle `reset` event.\n\nUse `reset` when you want to add or remove a large number of items at once\nwith less overhead, and without firing `add` or `remove` events for each\none."
     },
     "some": {
      "!type": "fn(callback: fn(model: +app.Model, index: number, list: +app.ModelList), thisObj?: +yui.Object) -> bool",
      "!doc": "Executes the supplied function on each model in this list, and stops\niterating if the callback returns `true`.\n\nBy default, the callback functions `this` object will refer to the model\ncurrently being iterated. Specify a `thisObj` to override the `this` object\nif desired.\n\nNote: Iteration is performed on a copy of the internal array of models, so\nits safe to delete a model from the list during iteration."
     },
     "sort": {
      "!type": "fn(options?: +yui.Object) -> !this",
      "!doc": "Forcibly re-sorts the list.\n\nUsually it shouldnt be necessary to call this method since the list\nmaintains its sort order when items are added and removed, but if you change\nthe `comparator` function after items are already in the list, youll need\nto re-sort."
     },
     "sync": {
      "!type": "fn(action: string, options?: +yui.Object, callback?: fn(err: +Error, response?: ?))",
      "!doc": "Override this method to provide a custom persistence implementation for this\nlist. The default method just calls the callback without actually doing\nanything.\n\nThis method is called internally by `load()` and its implementations relies\non the callback being called. This effectively means that when a callback is\nprovided, it must be called at some point for the class to operate correctly."
     },
     "toArray": {
      "!type": "fn() -> [+app.Model]",
      "!doc": "Returns an array containing the models in this list."
     },
     "toJSON": {
      "!type": "fn() -> [+yui.Object]",
      "!doc": "Returns an array containing attribute hashes for each model in this list,\nsuitable for being passed to `Y.JSON.stringify()`.\n\nUnder the hood, this method calls `toJSON()` on each model in the list and\npushes the results into an array."
     }
    }
   },
   "Model": {
    "!type": "fn() -> +app.Model",
    "prototype": {
     "!proto": "base.Base.prototype",
     "changed": {
      "!type": "+yui.Object",
      "!doc": "Hash of attributes that have changed since the last time this model was\nsaved."
     },
     "idAttribute": {
      "!type": "string",
      "!doc": "Name of the attribute to use as the unique id (or primary key) for this\nmodel.\n\nThe default is `id`, but if your persistence layer uses a different name for\nthe primary key (such as `_id` or `uid`), you can specify that here.\n\nThe built-in `id` attribute will always be an alias for whatever attribute\nname you specify here, so getting and setting `id` will always behave the\nsame as getting and setting your custom id attribute."
     },
     "lastChange": {
      "!type": "+yui.Object",
      "!doc": "Hash of attributes that were changed in the last `change` event. Each item\nin this hash is an object with the following properties:\n\n  * `newVal`: The new value of the attribute after it changed.\n  * `prevVal`: The old value of the attribute before it changed.\n  * `src`: The source of the change, or `null` if no source was specified."
     },
     "lists": {
      "!type": "[+app.ModelList]",
      "!doc": "Array of `ModelList` instances that contain this model.\n\nWhen a model is in one or more lists, the models events will bubble up to\nthose lists. You can subscribe to a model event on a list to be notified\nwhen any model in the list fires that event.\n\nThis property is updated automatically when this model is added to or\nremoved from a `ModelList` instance. You shouldnt alter it manually. When\nworking with models in a list, you should always add and remove models using\nthe lists `add()` and `remove()` methods."
     },
     "destroy": {
      "!type": "fn(options?: +yui.Object, callback?: fn(err: +Error)) -> !this",
      "!doc": "Destroys this model instance and removes it from its containing lists, if\nany.\n\nThe _callback_, if one is provided, will be called after the model is\ndestroyed.\n\nIf `options.remove` is `true`, then this method delegates to the `sync()`\nmethod to delete the model from the persistence layer, which is an\nasynchronous action. In this case, the _callback_ (if provided) will be\ncalled after the sync layer indicates success or failure of the delete\noperation."
     },
     "generateClientId": {
      "!type": "fn() -> string",
      "!doc": "Returns a clientId string thats unique among all models on the current page\n(even models in other YUI instances). Uniqueness across pageviews is\nunlikely."
     },
     "get": {
      "!type": "fn(name: string) -> ?",
      "!doc": "Returns the value of the specified attribute.\n\nIf the attributes value is an object, _name_ may use dot notation to\nspecify the path to a specific property within the object, and the value of\nthat property will be returned."
     },
     "getAsHTML": {
      "!type": "fn(name: string) -> string",
      "!doc": "Returns an HTML-escaped version of the value of the specified string\nattribute. The value is escaped using `Y.Escape.html()`."
     },
     "getAsURL": {
      "!type": "fn(name: string) -> string",
      "!doc": "Returns a URL-encoded version of the value of the specified string\nattribute. The value is encoded using the native `encodeURIComponent()`\nfunction."
     },
     "isModified": {
      "!type": "fn() -> bool",
      "!doc": "Returns `true` if any attribute of this model has been changed since the\nmodel was last saved.\n\nNew models (models for which `isNew()` returns `true`) are implicitly\nconsidered to be \"modified\" until the first time theyre saved."
     },
     "isNew": {
      "!type": "fn() -> bool",
      "!doc": "Returns `true` if this model is \"new\", meaning it hasnt been saved since it\nwas created.\n\nNewness is determined by checking whether the models `id` attribute has\nbeen set. An empty id is assumed to indicate a new model, whereas a\nnon-empty id indicates a model that was either loaded or has been saved\nsince it was created."
     },
     "load": {
      "!type": "fn(options?: +yui.Object, callback?: fn(err: +Error, response: ?)) -> !this",
      "!doc": "Loads this model from the server.\n\nThis method delegates to the `sync()` method to perform the actual load\noperation, which is an asynchronous action. Specify a _callback_ function to\nbe notified of success or failure.\n\nA successful load operation will fire a `load` event, while an unsuccessful\nload operation will fire an `error` event with the `src` value \"load\".\n\nIf the load operation succeeds and one or more of the loaded attributes\ndiffer from this models current attributes, a `change` event will be fired."
     },
     "parse": {
      "!type": "fn(response: ?) -> +yui.Object",
      "!doc": "Called to parse the _response_ when the model is loaded from the server.\nThis method receives a server _response_ and is expected to return an\nattribute hash.\n\nThe default implementation assumes that _response_ is either an attribute\nhash or a JSON string that can be parsed into an attribute hash. If\n_response_ is a JSON string and either `Y.JSON` or the native `JSON` object\nare available, it will be parsed automatically. If a parse error occurs, an\n`error` event will be fired and the model will not be updated.\n\nYou may override this method to implement custom parsing logic if necessary."
     },
     "save": {
      "!type": "fn(options?: +yui.Object, callback?: fn(err: +Error, response: ?)) -> !this",
      "!doc": "Saves this model to the server.\n\nThis method delegates to the `sync()` method to perform the actual save\noperation, which is an asynchronous action. Specify a _callback_ function to\nbe notified of success or failure.\n\nA successful save operation will fire a `save` event, while an unsuccessful\nsave operation will fire an `error` event with the `src` value \"save\".\n\nIf the save operation succeeds and one or more of the attributes returned in\nthe servers response differ from this models current attributes, a\n`change` event will be fired."
     },
     "set": {
      "!type": "fn(name: string, value: ?, options?: +yui.Object) -> !this",
      "!doc": "Sets the value of a single attribute. If model validation fails, the\nattribute will not be set and an `error` event will be fired.\n\nUse `setAttrs()` to set multiple attributes at once."
     },
     "setAttrs": {
      "!type": "fn(attributes: +yui.Object, options?: +yui.Object) -> !this",
      "!doc": "Sets the values of multiple attributes at once. If model validation fails,\nthe attributes will not be set and an `error` event will be fired."
     },
     "sync": {
      "!type": "fn(action: string, options?: +yui.Object, callback?: fn(err: +Error, response?: ?))",
      "!doc": "Override this method to provide a custom persistence implementation for this\nmodel. The default just calls the callback without actually doing anything.\n\nThis method is called internally by `load()`, `save()`, and `destroy()`, and\ntheir implementations rely on the callback being called. This effectively\nmeans that when a callback is provided, it must be called at some point for\nthe class to operate correctly."
     },
     "toJSON": {
      "!type": "fn() -> +yui.Object",
      "!doc": "Returns a copy of this models attributes that can be passed to\n`Y.JSON.stringify()` or used for other nefarious purposes.\n\nThe `clientId` attribute is not included in the returned object.\n\nIf youve specified a custom attribute name in the `idAttribute` property,\nthe default `id` attribute will not be included in the returned object.\n\nNote: The ECMAScript 5 specification states that objects may implement a\n`toJSON` method to provide an alternate object representation to serialize\nwhen passed to `JSON.stringify(obj)`.  This allows class instances to be\nserialized as if they were plain objects.  This is why Models `toJSON`\nreturns an object, not a JSON string.\n\nSee <http://es5.github.com/#x15.12.3> for details."
     },
     "undo": {
      "!type": "fn(attrNames?: [string], options?: +yui.Object) -> !this",
      "!doc": "Reverts the last change to the model.\n\nIf an _attrNames_ array is provided, then only the named attributes will be\nreverted (and only if they were modified in the previous change). If no\n_attrNames_ array is provided, then all changed attributes will be reverted\nto their previous values.\n\nNote that only one level of undo is available: from the current state to the\nprevious state. If `undo()` is called when no previous state is available,\nit will simply do nothing."
     },
     "validate": {
      "!type": "fn(attrs: +yui.Object, callback: fn(err?: ?))",
      "!doc": "Override this method to provide custom validation logic for this model.\n\nWhile attribute-specific validators can be used to validate individual\nattributes, this method gives you a hook to validate a hash of all\nattributes before the model is saved. This method is called automatically\nbefore `save()` takes any action. If validation fails, the `save()` call\nwill be aborted.\n\nIn your validation method, call the provided `callback` function with no\narguments to indicate success. To indicate failure, pass a single argument,\nwhich may contain an error message, an array of error messages, or any other\nvalue. This value will be passed along to the `error` event."
     },
     "clientId": {
      "!type": "string",
      "!doc": "A client-only identifier for this model.\n\nLike the `id` attribute, `clientId` may be used to retrieve model\ninstances from lists. Unlike the `id` attribute, `clientId` is\nautomatically generated, and is only intended to be used on the client\nduring the current pageview."
     },
     "id": {
      "!type": "string",
      "!doc": "A unique identifier for this model. Among other things, this id may be\nused to retrieve model instances from lists, so it should be unique.\n\nIf the id is empty, this model instance is assumed to represent a new\nitem that hasnt yet been saved.\n\nIf you would prefer to use a custom attribute as this models id instead\nof using the `id` attribute (for example, maybe youd rather use `_id`\nor `uid` as the primary id), you may set the `idAttribute` property to\nthe name of your custom id attribute. The `id` attribute will then\nact as an alias for your custom attribute."
     }
    }
   },
   "Router": {
    "!type": "fn(config?: +yui.Object) -> +app.Router",
    "prototype": {
     "!proto": "base.Base.prototype",
     "dispatch": {
      "!type": "fn() -> !this",
      "!doc": "Dispatches to the first route handler that matches the current URL, if any.\n\nIf `dispatch()` is called before the `ready` event has fired, it will\nautomatically wait for the `ready` event before dispatching. Otherwise it\nwill dispatch immediately."
     },
     "getPath": {
      "!type": "fn() -> string",
      "!doc": "Gets the current route path."
     },
     "hasRoute": {
      "!type": "fn(url: string) -> bool",
      "!doc": "Returns `true` if this router has at least one route that matches the\nspecified URL, `false` otherwise.\n\nThis method enforces the same-origin security constraint on the specified\n`url`; any URL which is not from the same origin as the current URL will\nalways return `false`."
     },
     "match": {
      "!type": "fn(path: string) -> [+yui.Object]",
      "!doc": "Returns an array of route objects that match the specified URL path.\n\nIf this router has a `root`, then the specified `path` _must_ be\nsemantically within the `root` path to match any routes.\n\nThis method is called internally to determine which routes match the current\npath whenever the URL changes. You may override it if you want to customize\nthe route matching logic, although this usually shouldnt be necessary.\n\nEach returned route object has the following properties:\n\n  * `callback`: A function or a string representing the name of a function\n    this router that should be executed when the route is triggered.\n\n  * `keys`: An array of strings representing the named parameters defined in\n    the routes path specification, if any.\n\n  * `path`: The routes path specification, which may be either a string or\n    a regex.\n\n  * `regex`: A regular expression version of the routes path specification.\n    This regex is used to determine whether the route matches a given path."
     },
     "param": {
      "!type": "fn(name: string, handler: fn(value: string, name: string)) -> !this",
      "!doc": "Adds a handler for a route param specified by _name_.\n\nParam handlers can be registered via this method and are used to\nvalidate/format values of named params in routes before dispatching to the\nroutes handler functions. Using param handlers allows routes to defined\nusing string paths which allows for `req.params` to use named params, but\nstill applying extra validation or formatting to the param values parsed\nfrom the URL.\n\nIf a param handler regex or function returns a value of `false`, `null`,\n`undefined`, or `NaN`, the current route will not match and be skipped. All\nother return values will be used in place of the original param value parsed\nfrom the URL."
     },
     "removeRoot": {
      "!type": "fn(url: string) -> string",
      "!doc": "Removes the `root` URL from the front of _url_ (if its there) and returns\nthe result. The returned path will always have a leading `/`."
     },
     "removeQuery": {
      "!type": "fn(url: string) -> string",
      "!doc": "Removes a query string from the end of the _url_ (if one exists) and returns\nthe result."
     },
     "replace": {
      "!type": "fn(url?: string) -> !this",
      "!doc": "Replaces the current browser history entry with a new one, and dispatches to\nthe first matching route handler, if any.\n\nBehind the scenes, this method uses HTML5 `pushState()` in browsers that\nsupport it (or the location hash in older browsers and IE) to change the\nURL.\n\nThe specified URL must share the same origin (i.e., protocol, host, and\nport) as the current page, or an error will occur."
     },
     "route": {
      "!type": "fn(route: string, callbacks: +yui.Array) -> !this",
      "!doc": "Adds a route handler for the specified `route`.\n\nThe `route` parameter may be a string or regular expression to represent a\nURL path, or a route object. If its a string (which is most common), it may\ncontain named parameters: `:param` will match any single part of a URL path\n(not including `/` characters), and `*param` will match any number of parts\nof a URL path (including `/` characters). These named parameters will be\nmade available as keys on the `req.params` object thats passed to route\nhandlers.\n\nIf the `route` parameter is a regex, all pattern matches will be made\navailable as numbered keys on `req.params`, starting with `0` for the full\nmatch, then `1` for the first subpattern match, and so on.\n\nAlternatively, an object can be provided to represent the route and it may\ncontain a `path` property which is a string or regular expression which\ncauses the route to be process as described above. If the route object\nalready contains a `regex` or `regexp` property, the route will be\nconsidered fully-processed and will be associated with any `callacks`\nspecified on the object and those specified as parameters to this method.\n**Note:** Any additional data contained on the route object will be\npreserved.\n\nHeres a set of sample routes along with URL paths that they match:\n\n  * Route: `/photos/:tag/:page`\n    * URL: `/photos/kittens/1`, params: `{tag: kittens, page: 1}`\n    * URL: `/photos/puppies/2`, params: `{tag: puppies, page: 2}`\n\n  * Route: `/file/*path`\n    * URL: `/file/foo/bar/baz.txt`, params: `{path: foo/bar/baz.txt}`\n    * URL: `/file/foo`, params: `{path: foo}`\n\n**Middleware**: Routes also support an arbitrary number of callback\nfunctions. This allows you to easily reuse parts of your route-handling code\nwith different route. This method is liberal in how it processes the\nspecified `callbacks`, you can specify them as separate arguments, or as\narrays, or both.\n\nIf multiple route match a given URL, they will be executed in the order they\nwere added. The first route that was added will be the first to be executed.\n\n**Passing Control**: Invoking the `next()` function within a route callback\nwill pass control to the next callback function (if any) or route handler\n(if any). If a value is passed to `next()`, its assumed to be an error,\ntherefore stopping the dispatch chain, unless that value is: `\"route\"`,\nwhich is special case and dispatching will skip to the next route handler.\nThis allows middleware to skip any remaining middleware for a particular\nroute."
     },
     "save": {
      "!type": "fn(url?: string) -> !this",
      "!doc": "Saves a new browser history entry and dispatches to the first matching route\nhandler, if any.\n\nBehind the scenes, this method uses HTML5 `pushState()` in browsers that\nsupport it (or the location hash in older browsers and IE) to change the\nURL and create a history entry.\n\nThe specified URL must share the same origin (i.e., protocol, host, and\nport) as the current page, or an error will occur."
     },
     "upgrade": {
      "!type": "fn() -> bool",
      "!doc": "Upgrades a hash-based URL to an HTML5 URL if necessary. In non-HTML5\nbrowsers, this method is a noop."
     },
     "html5": {
      "!type": "bool",
      "!doc": "Whether or not this browser is capable of using HTML5 history.\n\nSetting this to `false` will force the use of hash-based history even on\nHTML5 browsers, but please dont do this unless you understand the\nconsequences."
     },
     "params": {
      "!type": "+yui.Object",
      "!doc": "Map of params handlers in the form: `name` -> RegExp | Function.\n\nIf a param handler regex or function returns a value of `false`, `null`,\n`undefined`, or `NaN`, the current route will not match and be skipped.\nAll other return values will be used in place of the original param\nvalue parsed from the URL.\n\nThis attribute is intended to be used to set params at init time, or to\ncompletely reset all params after init. To add params after init without\nresetting all existing params, use the `param()` method."
     },
     "root": {
      "!type": "string",
      "!doc": "Absolute root path from which all routes should be evaluated.\n\nFor example, if your router is running on a page at\n`http://example.com/myapp/` and you add a route with the path `/`, your\nroute will never execute, because the path will always be preceded by\n`/myapp`. Setting `root` to `/myapp` would cause all routes to be\nevaluated relative to that root URL, so the `/` route would then execute\nwhen the user browses to `http://example.com/myapp/`."
     },
     "routes": {
      "!type": "[+yui.Object]",
      "!doc": "Array of route objects.\n\nEach item in the array must be an object with the following properties\nin order to be processed by the router:\n\n  * `path`: String or regex representing the path to match. See the docs\n    for the `route()` method for more details.\n\n  * `callbacks`: Function or a string representing the name of a\n    function on this router instance that should be called when the\n    route is triggered. An array of functions and/or strings may also be\n    provided. See the docs for the `route()` method for more details.\n\nIf a route object contains a `regex` or `regexp` property, or if its\n`path` is a regular express, then the route will be considered to be\nfully-processed. Any fully-processed routes may contain the following\nproperties:\n\n  * `regex`: The regular expression representing the path to match, this\n    property may also be named `regexp` for greater compatibility.\n\n  * `keys`: Array of named path parameters used to populate `req.params`\n    objects when dispatching to route handlers.\n\nAny additional data contained on these route objects will be retained.\nThis is useful to store extra metadata about a route; e.g., a `name` to\ngive routes logical names.\n\nThis attribute is intended to be used to set routes at init time, or to\ncompletely reset all routes after init. To add routes after init without\nresetting all existing routes, use the `route()` method."
     }
    },
    "dispatch": {
     "!type": "fn()",
     "!doc": "Dispatches to the first route handler that matches the specified `path` for\nall active router instances.\n\nThis provides a mechanism to cause all active router instances to dispatch\nto their route handlers without needing to change the URL or fire the\n`history:change` or `hashchange` event."
    }
   }
  },
  "arraysort": {
   "ArraySort": {
    "!type": "fn()",
    "compare": {
     "!type": "fn(a: +yui.Object, b: +yui.Object, desc: bool) -> bool",
     "!doc": "Comparator function for simple case-insensitive sorting of an array of\nstrings."
    },
    "naturalCompare": {
     "!type": "fn(a: number, b: number, options?: +yui.Object) -> number",
     "!doc": "Performs a natural-order comparison of two strings or numbers (or a string\nand a number). This ensures that a value like foo2 will be sorted before\nfoo10, whereas a standard ASCII sort would sort foo10 first."
    }
   }
  },
  "async_queue": {
   "AsyncQueue": {
    "!type": "fn(callback: fn()) -> +async_queue.AsyncQueue",
    "prototype": {
     "!proto": "event_custom.EventTarget.prototype",
     "defaults": {
      "!type": "+yui.Object",
      "!doc": "Callback defaults for this instance.  Static defaults that are not\noverridden are also included."
     },
     "next": {
      "!type": "fn() -> fn()",
      "!doc": "Returns the next callback needing execution.  If a callback is\nconfigured to repeat via iterations or until, it will be returned until\nthe completion criteria is met.\n\nWhen the queue is empty, null is returned."
     },
     "run": {
      "!type": "fn() -> !this",
      "!doc": "Sets the queue in motion.  All queued callbacks will be executed in\norder unless pause() or stop() is called or if one of the callbacks is\nconfigured with autoContinue: false."
     },
     "isRunning": {
      "!type": "fn() -> bool",
      "!doc": "Determines if the queue is waiting for a callback to complete execution."
     },
     "add": {
      "!type": "fn(callback: fn()) -> !this",
      "!doc": "Add any number of callbacks to the end of the queue. Callbacks may be\nprovided as functions or objects."
     },
     "pause": {
      "!type": "fn() -> !this",
      "!doc": "Pause the execution of the queue after the execution of the current\ncallback completes.  If called from code outside of a queued callback,\nclears the timeout for the pending callback. Paused queue can be\nrestarted with q.run()"
     },
     "stop": {
      "!type": "fn() -> !this",
      "!doc": "Stop and clear the queue after the current execution of the\ncurrent callback completes."
     },
     "indexOf": {
      "!type": "fn(callback: string) -> number",
      "!doc": "Returns the current index of a callback.  Pass in either the id or\ncallback function from getCallback."
     },
     "getCallback": {
      "!type": "fn(id: string) -> +yui.Object",
      "!doc": "Retrieve a callback by its id.  Useful to modify the configuration\nwhile the queue is running."
     },
     "promote": {
      "!type": "fn(callback: string) -> !this",
      "!doc": "Promotes the named callback to the top of the queue. If a callback is\ncurrently executing or looping (via until or iterations), the promotion\nis scheduled to occur after the current callback has completed."
     },
     "remove": {
      "!type": "fn(callback: string) -> !this",
      "!doc": "Removes the callback from the queue.  If the queue is active, the\nremoval is scheduled to occur after the current callback has completed."
     },
     "size": {
      "!type": "fn() -> number",
      "!doc": "Returns the number of callbacks in the queue."
     }
    },
    "defaults": {
     "!type": "+yui.Object",
     "!doc": "<p>Static default values used to populate callback configuration properties.\nPreconfigured defaults include:</p>\n\n<ul>\n <li><code>autoContinue</code>: <code>true</code></li>\n <li><code>iterations</code>: 1</li>\n <li><code>timeout</code>: 10 (10ms between callbacks)</li>\n <li><code>until</code>: (function to run until iterations &lt;= 0)</li>\n</ul>"
    }
   }
  },
  "attribute": {
   "Attribute": {
    "!type": "fn(attrs: +yui.Object, values: +yui.Object, lazy: bool)",
    "INVALID_VALUE": {
     "!type": "+yui.Object",
     "!doc": "<p>The value to return from an attribute setter in order to prevent the set from going through.</p>\n\n<p>You can return this value from your setter if you wish to combine validator and setter\nfunctionality into a single setter function, which either returns the massaged value to be stored or\nAttributeCore.INVALID_VALUE to prevent invalid values from being stored.</p>"
    },
    "protectAttrs": {
     "!type": "fn(attrs: +yui.Object) -> +yui.Object",
     "!doc": "Utility method to protect an attribute configuration hash, by merging the\nentire object and the individual attr config objects."
    }
   },
   "AttributeCore": {
    "!type": "fn(attrs: +yui.Object, values: +yui.Object, lazy: bool)",
    "INVALID_VALUE": {
     "!type": "+yui.Object",
     "!doc": "<p>The value to return from an attribute setter in order to prevent the set from going through.</p>\n\n<p>You can return this value from your setter if you wish to combine validator and setter\nfunctionality into a single setter function, which either returns the massaged value to be stored or\nAttributeCore.INVALID_VALUE to prevent invalid values from being stored.</p>"
    },
    "protectAttrs": {
     "!type": "fn(attrs: +yui.Object) -> +yui.Object",
     "!doc": "Utility method to protect an attribute configuration hash, by merging the\nentire object and the individual attr config objects."
    },
    "prototype": {
     "addAttr": {
      "!type": "fn(name: string, config: +yui.Object, lazy: bool) -> !this",
      "!doc": "<p>\nAdds an attribute with the provided configuration to the host object.\n</p>\n<p>\nThe config argument object supports the following properties:\n</p>\n\n<dl>\n   <dt>value &#60;Any&#62;</dt>\n   <dd>The initial value to set on the attribute</dd>\n\n   <dt>valueFn &#60;Function | String&#62;</dt>\n   <dd>\n   <p>A function, which will return the initial value to set on the attribute. This is useful\n   for cases where the attribute configuration is defined statically, but needs to\n   reference the host instance (\"this\") to obtain an initial value. If both the value and valueFn properties are defined,\n   the value returned by the valueFn has precedence over the value property, unless it returns undefined, in which\n   case the value property is used.</p>\n\n   <p>valueFn can also be set to a string, representing the name of the instance method to be used to retrieve the value.</p>\n   </dd>\n\n   <dt>readOnly &#60;boolean&#62;</dt>\n   <dd>Whether or not the attribute is read only. Attributes having readOnly set to true\n       cannot be modified by invoking the set method.</dd>\n\n   <dt>writeOnce &#60;boolean&#62; or &#60;string&#62;</dt>\n   <dd>\n       Whether or not the attribute is \"write once\". Attributes having writeOnce set to true,\n       can only have their values set once, be it through the default configuration,\n       constructor configuration arguments, or by invoking set.\n       <p>The writeOnce attribute can also be set to the string \"initOnly\",\n        in which case the attribute can only be set during initialization\n       (when used with Base, this means it can only be set during construction)</p>\n   </dd>\n\n   <dt>setter &#60;Function | String&#62;</dt>\n   <dd>\n   <p>The setter function used to massage or normalize the value passed to the set method for the attribute.\n   The value returned by the setter will be the final stored value. Returning\n   <a href=\"#property_Attribute.INVALID_VALUE\">Attribute.INVALID_VALUE</a>, from the setter will prevent\n   the value from being stored.\n   </p>\n\n   <p>setter can also be set to a string, representing the name of the instance method to be used as the setter function.</p>\n   </dd>\n\n   <dt>getter &#60;Function | String&#62;</dt>\n   <dd>\n   <p>\n   The getter function used to massage or normalize the value returned by the get method for the attribute.\n   The value returned by the getter function is the value which will be returned to the user when they\n   invoke get.\n   </p>\n\n   <p>getter can also be set to a string, representing the name of the instance method to be used as the getter function.</p>\n   </dd>\n\n   <dt>validator &#60;Function | String&#62;</dt>\n   <dd>\n   <p>\n   The validator function invoked prior to setting the stored value. Returning\n   false from the validator function will prevent the value from being stored.\n   </p>\n\n   <p>validator can also be set to a string, representing the name of the instance method to be used as the validator function.</p>\n   </dd>\n\n   <dt>lazyAdd &#60;boolean&#62;</dt>\n   <dd>Whether or not to delay initialization of the attribute until the first call to get/set it.\n   This flag can be used to over-ride lazy initialization on a per attribute basis, when adding multiple attributes through\n   the <a href=\"#method_addAttrs\">addAttrs</a> method.</dd>\n\n</dl>\n\n<p>The setter, getter and validator are invoked with the value and name passed in as the first and second arguments, and with\nthe context (\"this\") set to the host object.</p>\n\n<p>Configuration properties outside of the list mentioned above are considered private properties used internally by attribute,\nand are not intended for public use.</p>"
     },
     "attrAdded": {
      "!type": "fn(name: string) -> bool",
      "!doc": "Checks if the given attribute has been added to the host"
     },
     "get": {
      "!type": "fn(name: string) -> ?",
      "!doc": "Returns the current value of the attribute. If the attribute\nhas been configured with a getter function, this method will delegate\nto the getter to obtain the value of the attribute."
     },
     "set": {
      "!type": "fn(name: string, value: ?, opts?: +yui.Object) -> !this",
      "!doc": "Sets the value of an attribute."
     },
     "setAttrs": {
      "!type": "fn(attrs: +yui.Object, opts?: +yui.Object) -> !this",
      "!doc": "Sets multiple attribute values."
     },
     "getAttrs": {
      "!type": "fn(attrs: [string]) -> +yui.Object",
      "!doc": "Gets multiple attribute values."
     },
     "addAttrs": {
      "!type": "fn(cfgs: +yui.Object, values: +yui.Object, lazy: bool) -> !this",
      "!doc": "Configures a group of attributes, and sets initial values.\n\n<p>\n<strong>NOTE:</strong> This method does not isolate the configuration object by merging/cloning.\nThe caller is responsible for merging/cloning the configuration object if required.\n</p>"
     }
    }
   },
   "AttributeExtras": {
    "!type": "fn()",
    "prototype": {
     "modifyAttr": {
      "!type": "fn(name: string, config: +yui.Object)",
      "!doc": "Updates the configuration of an attribute which has already been added.\n<p>\nThe properties which can be modified through this interface are limited\nto the following subset of attributes, which can be safely modified\nafter a value has already been set on the attribute: readOnly, writeOnce,\nbroadcast and getter.\n</p>"
     },
     "removeAttr": {
      "!type": "fn(name: string)",
      "!doc": "Removes an attribute from the host object"
     },
     "reset": {
      "!type": "fn(name: string) -> !this",
      "!doc": "Resets the attribute (or all attributes) to its initial value, as long as\nthe attribute is not readOnly, or writeOnce."
     }
    }
   },
   "AttributeObservable": {
    "!type": "fn()",
    "prototype": {
     "set": {
      "!type": "fn(name: string, value: ?, opts: +yui.Object) -> !this",
      "!doc": "Sets the value of an attribute."
     },
     "setAttrs": {
      "!type": "fn(attrs: +yui.Object, opts: +yui.Object) -> !this",
      "!doc": "Sets multiple attribute values."
     }
    }
   },
   "State": {
    "!type": "fn() -> +attribute.State",
    "prototype": {
     "data": {
      "!type": "?",
      "!doc": "Hash of attributes"
     },
     "add": {
      "!type": "fn(name: string, key: string, val: ?)",
      "!doc": "Adds a property to an item."
     },
     "addAll": {
      "!type": "fn(name: string, obj: +yui.Object)",
      "!doc": "Adds multiple properties to an item."
     },
     "remove": {
      "!type": "fn(name: string, key: string)",
      "!doc": "Removes a property from an item."
     },
     "removeAll": {
      "!type": "fn(name: string, obj: +yui.Object)",
      "!doc": "Removes multiple properties from an item, or removes the item completely."
     },
     "get": {
      "!type": "fn(name: string, key: string) -> ?",
      "!doc": "For a given item, returns the value of the property requested, or undefined if not found."
     },
     "getAll": {
      "!type": "fn(name: string, reference: bool) -> +yui.Object",
      "!doc": "For the given item, returns an object with all of the\nitems property/value pairs. By default the object returned\nis a shallow copy of the stored data, but passing in true\nas the second parameter will return a reference to the stored\ndata."
     }
    }
   }
  },
  "autocomplete": {
   "AutoCompleteBase": {
    "!type": "fn()",
    "prototype": {
     "clearCache": {
      "!type": "fn() -> !this",
      "!doc": "Clears the result cache."
     },
     "sendRequest": {
      "!type": "fn(query?: string, requestTemplate?: fn()) -> !this",
      "!doc": "Sends a request to the configured source. If no source is configured, this\nmethod wont do anything.\n\nUsually theres no reason to call this method manually; it will be called\nautomatically when user input causes a `query` event to be fired. The only\ntime youll need to call this method manually is if you want to force a\nrequest to be sent when no user input has occurred."
     },
     "allowBrowserAutocomplete": {
      "!type": "bool",
      "!doc": "Whether or not to enable the browsers built-in autocomplete functionality\nfor input fields."
     },
     "allowTrailingDelimiter": {
      "!type": "bool",
      "!doc": "When a `queryDelimiter` is set, trailing delimiters will automatically be\nstripped from the input value by default when the input node loses focus.\nSet this to `true` to allow trailing delimiters."
     },
     "enableCache": {
      "!type": "bool",
      "!doc": "Whether or not to enable in-memory caching in result sources that support\nit."
     },
     "inputNode": {
      "!type": "+node.Node",
      "!doc": "Node to monitor for changes, which will generate `query` events when\nappropriate. May be either an `<input>` or a `<textarea>`."
     },
     "maxResults": {
      "!type": "number",
      "!doc": "Maximum number of results to return. A value of `0` or less will allow an\nunlimited number of results."
     },
     "minQueryLength": {
      "!type": "number",
      "!doc": "Minimum number of characters that must be entered before a `query` event\nwill be fired. A value of `0` allows empty queries; a negative value will\neffectively disable all `query` events."
     },
     "query": {
      "!type": "string",
      "!doc": "Current query, or `null` if there is no current query.\n\nThe query might not be the same as the current value of the input node, both\nfor timing reasons (due to `queryDelay`) and because when one or more\n`queryDelimiter` separators are in use, only the last portion of the\ndelimited input string will be used as the query value."
     },
     "queryDelay": {
      "!type": "number",
      "!doc": "Number of milliseconds to delay after input before triggering a `query`\nevent. If new input occurs before this delay is over, the previous input\nevent will be ignored and a new delay will begin.\n\nThis can be useful both to throttle queries to a remote data source and to\navoid distracting the user by showing them less relevant results before\ntheyve paused their typing."
     },
     "queryDelimiter": {
      "!type": "string",
      "!doc": "Query delimiter string. When a delimiter is configured, the input value\nwill be split on the delimiter, and only the last portion will be used in\nautocomplete queries and updated when the `query` attribute is\nmodified."
     },
     "requestTemplate": {
      "!type": "fn()",
      "!doc": "Source request template. This can be a function that accepts a query as a\nparameter and returns a request string, or it can be a string containing the\nplaceholder \"{query}\", which will be replaced with the actual URI-encoded\nquery. In either case, the resulting string will be appended to the request\nURL when the `source` attribute is set to a remote DataSource, JSONP URL, or\nXHR URL (it will not be appended to YQL URLs).\n\nWhile `requestTemplate` may be set to either a function or a string, it will\nalways be returned as a function that accepts a query argument and returns a\nstring."
     },
     "resultFilters": {
      "!type": "+yui.Array",
      "!doc": "Array of local result filter functions. If provided, each filter will be\ncalled with two arguments when results are received: the query and an array\nof result objects. See the documentation for the `results` event for a list\nof the properties available on each result object.\n\nEach filter is expected to return a filtered or modified version of the\nresults array, which will then be passed on to subsequent filters, then the\n`resultHighlighter` function (if set), then the `resultFormatter` function\n(if set), and finally to subscribers to the `results` event.\n\nIf no `source` is set, result filters will not be called.\n\nPrepackaged result filters provided by the autocomplete-filters and\nautocomplete-filters-accentfold modules can be used by specifying the filter\nname as a string, such as `phraseMatch` (assuming the necessary filters\nmodule is loaded)."
     },
     "resultFormatter": {
      "!type": "fn()",
      "!doc": "Function which will be used to format results. If provided, this function\nwill be called with two arguments after results have been received and\nfiltered: the query and an array of result objects. The formatter is\nexpected to return an array of HTML strings or Node instances containing the\ndesired HTML for each result.\n\nSee the documentation for the `results` event for a list of the properties\navailable on each result object.\n\nIf no `source` is set, the formatter will not be called."
     },
     "resultHighlighter": {
      "!type": "fn()",
      "!doc": "Function which will be used to highlight results. If provided, this function\nwill be called with two arguments after results have been received and\nfiltered: the query and an array of filtered result objects. The highlighter\nis expected to return an array of highlighted result text in the form of\nHTML strings.\n\nSee the documentation for the `results` event for a list of the properties\navailable on each result object.\n\nIf no `source` is set, the highlighter will not be called."
     },
     "resultListLocator": {
      "!type": "fn()",
      "!doc": "Locator that should be used to extract an array of results from a non-array\nresponse.\n\nBy default, no locator is applied, and all responses are assumed to be\narrays by default. If all responses are already arrays, you dont need to\ndefine a locator.\n\nThe locator may be either a function (which will receive the raw response as\nan argument and must return an array) or a string representing an object\npath, such as \"foo.bar.baz\" (which would return the value of\n`result.foo.bar.baz` if the response is an object).\n\nWhile `resultListLocator` may be set to either a function or a string, it\nwill always be returned as a function that accepts a response argument and\nreturns an array."
     },
     "results": {
      "!type": "+yui.Array",
      "!doc": "Current results, or an empty array if there are no results."
     },
     "resultTextLocator": {
      "!type": "fn()",
      "!doc": "Locator that should be used to extract a plain text string from a non-string\nresult item. The resulting text value will typically be the value that ends\nup being inserted into an input field or textarea when the user of an\nautocomplete implementation selects a result.\n\nBy default, no locator is applied, and all results are assumed to be plain\ntext strings. If all results are already plain text strings, you dont need\nto define a locator.\n\nThe locator may be either a function (which will receive the raw result as\nan argument and must return a string) or a string representing an object\npath, such as \"foo.bar.baz\" (which would return the value of\n`result.foo.bar.baz` if the result is an object).\n\nWhile `resultTextLocator` may be set to either a function or a string, it\nwill always be returned as a function that accepts a result argument and\nreturns a string."
     },
     "source": {
      "!type": "+yui.Array",
      "!doc": "Source for autocomplete results. The following source types are supported:\n\n<dl>\n  <dt>Array</dt>\n  <dd>\n    <p>\n    The full array will be provided to any configured filters for each\n    query. This is an easy way to create a fully client-side autocomplete\n    implementation.\n    </p>\n\n    <p>\n    Example: `[first result, second result, etc]`\n    </p>\n  </dd>\n\n  <dt>DataSource</dt>\n  <dd>\n    A `DataSource` instance or other object that provides a DataSource-like\n    `sendRequest` method. See the `DataSource` documentation for details.\n  </dd>\n\n  <dt>Function</dt>\n  <dd>\n    <p>\n    A function source will be called with the current query and a\n    callback function as parameters, and should either return an array of\n    results (for synchronous operation) or return nothing and pass an\n    array of results to the provided callback (for asynchronous\n    operation).\n    </p>\n\n    <p>\n    Example (synchronous):\n    </p>\n\n    <pre>\n    function (query) {\n        return [foo, bar];\n    }\n    </pre>\n\n    <p>\n    Example (async):\n    </p>\n\n    <pre>\n    function (query, callback) {\n        callback([foo, bar]);\n    }\n    </pre>\n  </dd>\n\n  <dt>Object</dt>\n  <dd>\n    <p>\n    An object will be treated as a query hashmap. If a property on the\n    object matches the current query, the value of that property will be\n    used as the response.\n    </p>\n\n    <p>\n    The response is assumed to be an array of results by default. If the\n    response is not an array, provide a `resultListLocator` to\n    process the response and return an array.\n    </p>\n\n    <p>\n    Example: `{foo: [foo result 1, foo result 2], bar: [bar result]}`\n    </p>\n  </dd>\n</dl>\n\nIf the optional `autocomplete-sources` module is loaded, then\nthe following additional source types will be supported as well:\n\n<dl>\n  <dt>&lt;select&gt; Node</dt>\n  <dd>\n    You may provide a YUI Node instance wrapping a &lt;select&gt;\n    element, and the options in the list will be used as results. You\n    will also need to specify a `resultTextLocator` of text\n    or value, depending on what you want to use as the text of the\n    result.\n\n    Each result will be an object with the following properties:\n\n    <dl>\n      <dt>html (String)</dt>\n      <dd>\n        <p>HTML content of the &lt;option&gt; element.</p>\n      </dd>\n\n      <dt>index (Number)</dt>\n      <dd>\n        <p>Index of the &lt;option&gt; element in the list.</p>\n      </dd>\n\n      <dt>node (Y.Node)</dt>\n      <dd>\n        <p>Node instance referring to the original &lt;option&gt; element.</p>\n      </dd>\n\n      <dt>selected (Boolean)</dt>\n      <dd>\n        <p>Whether or not this item is currently selected in the\n        &lt;select&gt; list.</p>\n      </dd>\n\n      <dt>text (String)</dt>\n      <dd>\n        <p>Text content of the &lt;option&gt; element.</p>\n      </dd>\n\n      <dt>value (String)</dt>\n      <dd>\n        <p>Value of the &lt;option&gt; element.</p>\n      </dd>\n    </dl>\n  </dd>\n\n  <dt>String (JSONP URL)</dt>\n  <dd>\n    <p>\n    If a URL with a `{callback}` placeholder is provided, it will be used to\n    make a JSONP request. The `{query}` placeholder will be replaced with\n    the current query, and the `{callback}` placeholder will be replaced\n    with an internally-generated JSONP callback name. Both placeholders must\n    appear in the URL, or the request will fail. An optional `{maxResults}`\n    placeholder may also be provided, and will be replaced with the value of\n    the maxResults attribute (or 1000 if the maxResults attribute is 0 or\n    less).\n    </p>\n\n    <p>\n    The response is assumed to be an array of results by default. If the\n    response is not an array, provide a `resultListLocator` to process the\n    response and return an array.\n    </p>\n\n    <p>\n    <strong>The `jsonp` module must be loaded in order for\n    JSONP URL sources to work.</strong> If the `jsonp` module\n    is not already loaded, it will be loaded on demand if possible.\n    </p>\n\n    <p>\n    Example: `http://example.com/search?q={query}&callback={callback}`\n    </p>\n  </dd>\n\n  <dt>String (XHR URL)</dt>\n  <dd>\n    <p>\n    If a URL without a `{callback}` placeholder is provided, it will be used\n    to make a same-origin XHR request. The `{query}` placeholder will be\n    replaced with the current query. An optional `{maxResults}` placeholder\n    may also be provided, and will be replaced with the value of the\n    maxResults attribute (or 1000 if the maxResults attribute is 0 or less).\n    </p>\n\n    <p>\n    The response is assumed to be a JSON array of results by default. If the\n    response is a JSON object and not an array, provide a\n    `resultListLocator` to process the response and return an array. If the\n    response is in some form other than JSON, you will need to use a custom\n    DataSource instance as the source.\n    </p>\n\n    <p>\n    <strong>The `io-base` and `json-parse` modules\n    must be loaded in order for XHR URL sources to work.</strong> If\n    these modules are not already loaded, they will be loaded on demand\n    if possible.\n    </p>\n\n    <p>\n    Example: `http://example.com/search?q={query}`\n    </p>\n  </dd>\n\n  <dt>String (YQL query)</dt>\n  <dd>\n    <p>\n    If a YQL query is provided, it will be used to make a YQL request. The\n    `{query}` placeholder will be replaced with the current autocomplete\n    query. This placeholder must appear in the YQL query, or the request\n    will fail. An optional `{maxResults}` placeholder may also be provided,\n    and will be replaced with the value of the maxResults attribute (or 1000\n    if the maxResults attribute is 0 or less).\n    </p>\n\n    <p>\n    <strong>The `yql` module must be loaded in order for YQL\n    sources to work.</strong> If the `yql` module is not\n    already loaded, it will be loaded on demand if possible.\n    </p>\n\n    <p>\n    Example: `select * from search.suggest where query=\"{query}\"`\n    </p>\n  </dd>\n</dl>\n\nAs an alternative to providing a source, you could simply listen for `query`\nevents and handle them any way you see fit. Providing a source is optional,\nbut will usually be simpler."
     },
     "sourceType": {
      "!type": "string",
      "!doc": "May be used to force a specific source type, overriding the automatic source\ntype detection. It should almost never be necessary to do this, but as they\ntaught us in the Boy Scouts, one should always be prepared, so its here if\nyou need it. Be warned that if you set this attribute and something breaks,\nits your own fault.\n\nSupported `sourceType` values are: array, datasource, function, and\nobject.\n\nIf the `autocomplete-sources` module is loaded, the following additional\nsource types are supported: io, jsonp, select, string, yql"
     },
     "tokenInput": {
      "!type": "+Plugin.TokenInput",
      "!doc": "If the `inputNode` specified at instantiation time has a `node-tokeninput`\nplugin attached to it, this attribute will be a reference to the\n`Y.Plugin.TokenInput` instance."
     },
     "value": {
      "!type": "string",
      "!doc": "Current value of the input node."
     },
     "yqlEnv": {
      "!type": "string",
      "!doc": "YQL environment file URL to load when the `source` is set to a YQL query.\nSet this to `null` to use the default Open Data Tables environment file\n(http://datatables.org/alltables.env)."
     },
     "yqlProtocol": {
      "!type": "string",
      "!doc": "URL protocol to use when the `source` is set to a YQL query."
     }
    },
    "SOURCE_TYPES": {
     "!type": "+yui.Object",
     "!doc": "Mapping of built-in source types to their setter functions. DataSource instances\nand DataSource-like objects are handled natively, so are not mapped here."
    }
   },
   "AutoCompleteFilters": {
    "!type": "fn()",
    "charMatchFold": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Accent folding version of `charMatch()`."
    },
    "phraseMatchFold": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Accent folding version of `phraseMatch()`."
    },
    "startsWithFold": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Accent folding version of `startsWith()`."
    },
    "subWordMatchFold": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Accent folding version of `subWordMatch()`."
    },
    "wordMatchFold": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Accent folding version of `wordMatch()`."
    },
    "charMatch": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Returns an array of results that contain all of the characters in the query,\nin any order (not necessarily consecutive). Case-insensitive."
    },
    "charMatchCase": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Case-sensitive version of `charMatch()`."
    },
    "phraseMatch": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Returns an array of results that contain the complete query as a phrase.\nCase-insensitive."
    },
    "phraseMatchCase": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Case-sensitive version of `phraseMatch()`."
    },
    "startsWith": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Returns an array of results that start with the complete query as a phrase.\nCase-insensitive."
    },
    "startsWithCase": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Case-sensitive version of `startsWith()`."
    },
    "subWordMatch": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Returns an array of results in which all the words of the query match either\nwhole words or parts of words in the result. Non-word characters like\nwhitespace and certain punctuation are ignored. Case-insensitive.\n\nThis is basically a combination of `wordMatch()` (by ignoring whitespace and\nword order) and `phraseMatch()` (by allowing partial matching instead of\nrequiring the entire word to match).\n\nExample use case: Trying to find personal names independently of name order\n(Western or Eastern order) and supporting immediate feedback by allowing\npartial occurences. So queries like \"J. Doe\", \"Doe, John\", and \"J. D.\" would\nall match \"John Doe\"."
    },
    "subWordMatchCase": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Case-sensitive version of `subWordMatch()`."
    },
    "wordMatch": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Returns an array of results that contain all of the words in the query, in\nany order. Non-word characters like whitespace and certain punctuation are\nignored. Case-insensitive."
    },
    "wordMatchCase": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Case-sensitive version of `wordMatch()`."
    }
   },
   "AutoCompleteHighlighters": {
    "!type": "fn()",
    "charMatchFold": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Accent-folding version of `charMatch()`."
    },
    "phraseMatchFold": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Accent-folding version of `phraseMatch()`."
    },
    "startsWithFold": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Accent-folding version of `startsWith()`."
    },
    "subWordMatchFold": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Accent-folding version of `subWordMatch()`."
    },
    "wordMatchFold": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Accent-folding version of `wordMatch()`."
    },
    "charMatch": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Highlights any individual query character that occurs anywhere in a result.\nCase-insensitive."
    },
    "charMatchCase": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Case-sensitive version of `charMatch()`."
    },
    "phraseMatch": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Highlights the complete query as a phrase anywhere within a result. Case-\ninsensitive."
    },
    "phraseMatchCase": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Case-sensitive version of `phraseMatch()`."
    },
    "startsWith": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Highlights the complete query as a phrase at the beginning of a result.\nCase-insensitive."
    },
    "startsWithCase": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Case-sensitive version of `startsWith()`."
    },
    "subWordMatch": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Highlights portions of results in which words from the query match either\nwhole words or parts of words in the result. Non-word characters like\nwhitespace and certain punctuation are ignored. Case-insensitive."
    },
    "subWordMatchCase": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Case-sensitive version of `subWordMatch()`."
    },
    "wordMatch": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Highlights individual words in results that are also in the query. Non-word\ncharacters like punctuation are ignored. Case-insensitive."
    },
    "wordMatchCase": {
     "!type": "fn(query: string, results: +yui.Array) -> +yui.Array",
     "!doc": "Case-sensitive version of `wordMatch()`."
    }
   },
   "AutoCompleteList": {
    "!type": "fn(config: +yui.Object) -> +autocomplete.AutoCompleteList",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "hide": {
      "!type": "fn() -> !this",
      "!doc": "Hides the list, unless the `alwaysShowList` attribute is `true`."
     },
     "selectItem": {
      "!type": "fn(itemNode?: +node.Node, originEvent?: +event_custom.EventFacade) -> !this",
      "!doc": "Selects the specified _itemNode_, or the current `activeItem` if _itemNode_\nis not specified."
     },
     "activateFirstItem": {
      "!type": "bool",
      "!doc": "If `true`, the first item in the list will be activated by default when\nthe list is initially displayed and when results change."
     },
     "activeItem": {
      "!type": "+node.Node",
      "!doc": "Item thats currently active, if any. When the user presses enter, this\nis the item that will be selected."
     },
     "alwaysShowList": {
      "!type": "bool",
      "!doc": "If `true`, the list will remain visible even when there are no results\nto display."
     },
     "circular": {
      "!type": "bool",
      "!doc": "If `true`, keyboard navigation will wrap around to the opposite end of\nthe list when navigating past the first or last item."
     },
     "hoveredItem": {
      "!type": "+node.Node",
      "!doc": "Item currently being hovered over by the mouse, if any."
     },
     "listNode": {
      "!type": "+node.Node",
      "!doc": "Node that will contain result items."
     },
     "scrollIntoView": {
      "!type": "bool",
      "!doc": "If `true`, the viewport will be scrolled to ensure that the active list\nitem is visible when necessary."
     },
     "strings": {
      "!type": "+yui.Object",
      "!doc": "Translatable strings used by the AutoCompleteList widget."
     },
     "tabSelect": {
      "!type": "bool",
      "!doc": "If `true`, pressing the tab key while the list is visible will select\nthe active item, if any."
     }
    }
   }
  },
  "base": {
   "Base": {
    "!type": "fn(config: +yui.Object) -> +base.Base",
    "NAME": {
     "!type": "string",
     "!doc": "<p>\nThe string to be used to identify instances of\nthis class, for example in prefixing events.\n</p>\n<p>\nClasses extending Base, should define their own\nstatic NAME property, which should be camelCase by\nconvention (e.g. MyClass.NAME = \"myClass\";).\n</p>"
    },
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "The default set of attributes which will be available for instances of this class, and\ntheir configuration. In addition to the configuration properties listed by\nAttributes <a href=\"Attribute.html#method_addAttr\">addAttr</a> method, the attribute\ncan also be configured with a \"cloneDefaultValue\" property, which defines how the statically\ndefined value field should be protected (\"shallow\", \"deep\" and false are supported values).\n\nBy default if the value is an object literal or an array it will be \"shallow\" cloned, to\nprotect the default value."
    },
    "modifyAttrs": {
     "!type": "fn(ctor?: fn(), configs: +yui.Object)",
     "!doc": "Provides a way to safely modify a `Y.Base` subclass static `ATTRS` after\nthe class has been defined or created.\n\nBase-based classes cache information about the class hierarchy in order to\nefficiently create instances. This cache includes includes the aggregated\n`ATTRS` configs. If the static `ATTRS` configs need to be modified after the\nclass has been defined or create, then use this method which will make sure\nto clear any cached data before making any modifications."
    },
    "build": {
     "!type": "fn(name: fn(), main: fn(), extensions: fn(), cfg: +yui.Object) -> fn()",
     "!doc": "<p>\nBuilds a custom constructor function (class) from the\nmain function, and array of extension functions (classes)\nprovided. The NAME field for the constructor function is\ndefined by the first argument passed in.\n</p>\n<p>\nThe cfg object supports the following properties\n</p>\n<dl>\n   <dt>dynamic &#60;boolean&#62;</dt>\n   <dd>\n   <p>If true (default), a completely new class\n   is created which extends the main class, and acts as the\n   host on which the extension classes are augmented.</p>\n   <p>If false, the extensions classes are augmented directly to\n   the main class, modifying the main class prototype.</p>\n   </dd>\n   <dt>aggregates &#60;String[]&#62;</dt>\n   <dd>An array of static property names, which will get aggregated\n   on to the built class, in addition to the default properties build\n   will always aggregate as defined by the main class static _buildCfg\n   property.\n   </dd>\n</dl>"
    },
    "create": {
     "!type": "fn(name: string, main: fn(), extensions: fn(), px: +yui.Object, sx: +yui.Object) -> fn()",
     "!doc": "Creates a new class (constructor function) which extends the base class passed in as the second argument,\nand mixes in the array of extensions provided.\n\nPrototype properties or methods can be added to the new class, using the px argument (similar to Y.extend).\n\nStatic properties or methods can be added to the new class, using the sx argument (similar to Y.extend).\n\n**NOTE FOR COMPONENT DEVELOPERS**: Both the `base` class, and `extensions` can define static a `_buildCfg`\nproperty, which acts as class creation meta-data, and drives how special static properties from the base\nclass, or extensions should be copied, aggregated or (custom) mixed into the newly created class.\n\nThe `_buildCfg` property is a hash with 3 supported properties: `statics`, `aggregates` and `custom`, e.g:\n\n    // If the Base/Main class is the thing introducing the property:\n\n    MyBaseClass._buildCfg = {\n\n       // Static properties/methods to copy (Alias) to the built class.\n       statics: [\"CopyThisMethod\", \"CopyThisProperty\"],\n\n       // Static props to aggregate onto the built class.\n       aggregates: [\"AggregateThisProperty\"],\n\n       // Static properties which need custom handling (e.g. deep merge etc.)\n       custom: {\n          \"CustomProperty\" : function(property, Receiver, Supplier) {\n             ...\n             var triggers = Receiver.CustomProperty.triggers;\n             Receiver.CustomProperty.triggers = triggers.concat(Supplier.CustomProperty.triggers);\n             ...\n          }\n       }\n    };\n\n    MyBaseClass.CopyThisMethod = function() {...};\n    MyBaseClass.CopyThisProperty = \"foo\";\n    MyBaseClass.AggregateThisProperty = {...};\n    MyBaseClass.CustomProperty = {\n       triggers: [...]\n    }\n\n    // Or, if the Extension is the thing introducing the property:\n\n    MyExtension._buildCfg = {\n        statics : ...\n        aggregates : ...\n        custom : ...\n    }\n\nThis way, when users pass your base or extension class to `Y.Base.create` or `Y.Base.mix`, they dont need to\nknow which properties need special handling. `Y.Base` has a buildCfg which defines `ATTRS` for custom mix handling\n(to protect the static config objects), and `Y.Widget` has a buildCfg which specifies `HTML_PARSER` for\nstraight up aggregation."
    },
    "mix": {
     "!type": "fn(main: fn(), extensions: fn()) -> fn()",
     "!doc": "<p>Mixes in a list of extensions to an existing class.</p>"
    },
    "plug": {
     "!type": "fn()",
     "!doc": "Alias for <a href=\"Plugin.Host.html#method_Plugin.Host.plug\">Plugin.Host.plug</a>. See aliased\nmethod for argument and return value details."
    },
    "unplug": {
     "!type": "fn()",
     "!doc": "Alias for <a href=\"Plugin.Host.html#method_Plugin.Host.unplug\">Plugin.Host.unplug</a>. See the\naliased method for argument and return value details."
    }
   },
   "BaseCore": {
    "!type": "fn(cfg: +yui.Object) -> +base.BaseCore",
    "NAME": {
     "!type": "string",
     "!doc": "The string to be used to identify instances of this class.\n\nClasses extending BaseCore, should define their own\nstatic NAME property, which should be camelCase by\nconvention (e.g. MyClass.NAME = \"myClass\";)."
    },
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "The default set of attributes which will be available for instances of this class, and\ntheir configuration. In addition to the configuration properties listed by\nAttributeCores <a href=\"AttributeCore.html#method_addAttr\">addAttr</a> method,\nthe attribute can also be configured with a \"cloneDefaultValue\" property, which\ndefines how the statically defined value field should be protected\n(\"shallow\", \"deep\" and false are supported values).\n\nBy default if the value is an object literal or an array it will be \"shallow\"\ncloned, to protect the default value."
    },
    "prototype": {
     "initialized": {
      "!type": "bool",
      "!doc": "Flag indicating whether or not this object\nhas been through the init lifecycle phase."
     },
     "destroyed": {
      "!type": "bool",
      "!doc": "Flag indicating whether or not this object\nhas been through the destroy lifecycle phase."
     },
     "name": {
      "!type": "string",
      "!doc": "The string used to identify the class of this object."
     },
     "init": {
      "!type": "fn(cfg: +yui.Object) -> !this",
      "!doc": "Init lifecycle method, invoked during construction. Sets up attributes\nand invokes initializers for the class hierarchy."
     },
     "destroy": {
      "!type": "fn() -> !this",
      "!doc": "Destroy lifecycle method. Invokes destructors for the class hierarchy."
     },
     "toString": {
      "!type": "fn() -> string",
      "!doc": "Default toString implementation. Provides the constructor NAME\nand the instance guid, if set."
     }
    },
    "modifyAttrs": {
     "!type": "fn(ctor?: fn(), configs: +yui.Object)",
     "!doc": "Provides a way to safely modify a `Y.BaseCore` subclass static `ATTRS`\nafter the class has been defined or created.\n\nBaseCore-based classes cache information about the class hierarchy in order\nto efficiently create instances. This cache includes includes the aggregated\n`ATTRS` configs. If the static `ATTRS` configs need to be modified after the\nclass has been defined or create, then use this method which will make sure\nto clear any cached data before making any modifications."
    }
   },
   "BaseObservable": {
    "!type": "fn()",
    "prototype": {
     "init": {
      "!type": "fn(config: +yui.Object) -> !this",
      "!doc": "Init lifecycle method, invoked during construction.\nFires the init event prior to setting up attributes and\ninvoking initializers for the class hierarchy."
     },
     "destroy": {
      "!type": "fn() -> !this",
      "!doc": "<p>\nDestroy lifecycle method. Fires the destroy\nevent, prior to invoking destructors for the\nclass hierarchy.\n</p>\n<p>\nSubscribers to the destroy\nevent can invoke preventDefault on the event object, to prevent destruction\nfrom proceeding.\n</p>"
     }
    }
   }
  },
  "button": {
   "Button": {
    "!type": "fn(config: +yui.Object) -> +button.Button",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "BOUNDING_TEMPLATE": {
      "!type": "string",
      "!doc": "Bounding box template that will contain the Buttons DOM subtree."
     },
     "CONTENT_TEMPLATE": {
      "!type": "string",
      "!doc": "Content box template"
     },
     "label": {
      "!type": "string",
      "!doc": "The text of the buttons label"
     },
     "labelHTML": {
      "!type": "+HTML",
      "!doc": "The HTML of the buttons label\n\nThis attribute accepts HTML and inserts it into the DOM **without**\nsanitization.  This attribute should only be used with HTML that has\neither been escaped (using `Y.Escape.html`), or sanitized according to\nthe requirements of your application.\n\nIf all you need is support for text labels, please use the `label`\nattribute instead."
     }
    },
    "CLASS_NAMES": {
     "!type": "+yui.Object",
     "!doc": "List of class names used in the Buttons DOM"
    }
   },
   "ToggleButton": {
    "!type": "fn(config: +yui.Object) -> +button.ToggleButton",
    "prototype": {
     "!proto": "button.Button.prototype",
     "trigger": {
      "!type": "string"
     },
     "selectedAttrName": {
      "!type": "string"
     },
     "initializer": {
      "!type": "fn()"
     },
     "destructor": {
      "!type": "fn()"
     },
     "bindUI": {
      "!type": "fn()",
      "!doc": "Hooks up events for the widget"
     },
     "syncUI": {
      "!type": "fn()",
      "!doc": "Syncs the UI for the widget"
     },
     "toggle": {
      "!type": "fn()",
      "!doc": "Toggles the selected/pressed/checked state of a ToggleButton"
     },
     "type": {
      "!type": "string"
     }
    },
    "CLASS_NAMES": {
     "!type": "+yui.Object",
     "!doc": "Array of static constants used to identify the classnames applied to DOM nodes"
    }
   }
  },
  "button_core": {
   "ButtonCore": {
    "!type": "fn(config: +yui.Object) -> +button_core.ButtonCore",
    "prototype": {
     "TEMPLATE": {
      "!type": "string"
     },
     "enable": {
      "!type": "fn()",
      "!doc": "Sets the buttons `disabled` DOM attribute to `false`"
     },
     "disable": {
      "!type": "fn()",
      "!doc": "Sets the buttons `disabled` DOM attribute to `true`"
     },
     "getNode": {
      "!type": "fn() -> +node.Node",
      "!doc": "Gets the buttons host node"
     },
     "label": {
      "!type": "string",
      "!doc": "The text of the buttons label"
     },
     "labelHTML": {
      "!type": "+HTML",
      "!doc": "The HTML of the buttons label\n\nThis attribute accepts HTML and inserts it into the DOM **without**\nsanitization.  This attribute should only be used with HTML that has\neither been escaped (using `Y.Escape.html`), or sanitized according to\nthe requirements of your application.\n\nIf all you need is support for text labels, please use the `label`\nattribute instead."
     },
     "disabled": {
      "!type": "bool",
      "!doc": "The buttons enabled/disabled state"
     }
    },
    "NAME": {
     "!type": "string",
     "!doc": "Name of this component."
    },
    "CLASS_NAMES": {
     "!type": "+yui.Object",
     "!doc": "Array of static constants used to identify the classnames applied to DOM nodes"
    }
   }
  },
  "button_group": {
   "ButtonGroup": {
    "!type": "fn(config: +yui.Object) -> +button_group.ButtonGroup",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "renderUI": {
      "!type": "fn()",
      "!doc": "Creates a visual representation of the widget based on existing parameters."
     },
     "bindUI": {
      "!type": "fn()",
      "!doc": "Hooks up events for the widget"
     },
     "getButtons": {
      "!type": "fn()",
      "!doc": "Returns all buttons inside this this button group"
     },
     "getSelectedButtons": {
      "!type": "fn()",
      "!doc": "Returns all Y.Buttons instances that are selected"
     },
     "getSelectedValues": {
      "!type": "fn()",
      "!doc": "Returns the values of all Y.Button instances that are selected"
     },
     "type": {
      "!type": "string"
     },
     "BUTTON_SELECTOR": {
      "!type": "string",
      "!doc": "Selector used to find buttons inside a ButtonGroup"
     }
    },
    "CLASS_NAMES": {
     "!type": "+yui.Object",
     "!doc": "List of class names to use for ButtonGroups"
    }
   }
  },
  "button_plugin": {
   "Plugin": {
    "Button": {
     "!type": "fn(config: +yui.Object) -> +button_plugin.Plugin.Button",
     "prototype": {
      "!proto": "button_core.ButtonCore.prototype",
      "createNode": {
       "!type": "fn(node: +yui.Object, config: +yui.Object) -> +yui.Object",
       "!doc": "A factory that plugs a Y.Node instance with Y.Plugin.Button"
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Name of this component."
     },
     "NS": {
      "!type": "string",
      "!doc": "Namespace of this component."
     }
    }
   }
  },
  "cache": {
   "Cache": {
    "!type": "fn() -> +cache.Cache",
    "prototype": {
     "!proto": "base.Base.prototype",
     "max": {
      "!type": "number",
      "!doc": "Maximum number of entries the Cache can hold.\nSet to 0 to turn off caching."
     },
     "size": {
      "!type": "number",
      "!doc": "Number of entries currently cached."
     },
     "uniqueKeys": {
      "!type": "bool",
      "!doc": "Validate uniqueness of stored keys. Default is false and\nis more performant."
     },
     "expires": {
      "!type": "+datatype_date.Date",
      "!doc": "Absolute Date when data expires or\nrelative number of milliseconds. Zero disables expiration."
     },
     "entries": {
      "!type": "+yui.Array",
      "!doc": "Cached entries."
     },
     "add": {
      "!type": "fn(request: +yui.Object, response: +yui.Object)",
      "!doc": "Adds a new entry to the cache of the format\n{request:request, response:response, cached:cached, expires:expires}.\nIf cache is full, evicts the stalest entry before adding the new one."
     },
     "flush": {
      "!type": "fn()",
      "!doc": "Flushes cache."
     },
     "retrieve": {
      "!type": "fn(request: +yui.Object) -> +yui.Object",
      "!doc": "Retrieves cached object for given request, if available, and refreshes\nentry in the cache. Returns null if there is no cache match."
     }
    },
    "NAME": {
     "!type": "string",
     "!doc": "Class name."
    }
   },
   "CacheOffline": {
    "!type": "fn() -> +cache.CacheOffline",
    "prototype": {
     "!proto": "cache.Cache.prototype",
     "sandbox": {
      "!type": "string",
      "!doc": "A string that must be passed in via the constructor.\nThis identifier is used to sandbox one cache instances entries\nfrom another. Calling the cache instances flush and length methods\nor get(\"entries\") will apply to only these sandboxed entries."
     },
     "expires": {
      "!type": "+datatype_date.Date",
      "!doc": "Absolute Date when data expires or\nrelative number of milliseconds. Zero disables expiration."
     },
     "max": {
      "!type": "?",
      "!doc": "Disabled."
     },
     "uniqueKeys": {
      "!type": "?",
      "!doc": "Always true for CacheOffline."
     },
     "add": {
      "!type": "fn(request: +yui.Object, response: +yui.Object)",
      "!doc": "Adds a new entry to the cache of the format\n{request:request, response:response, cached:cached, expires: expires}."
     },
     "retrieve": {
      "!type": "fn(request: +yui.Object) -> +yui.Object",
      "!doc": "Retrieves cached object for given request, if available.\nReturns null if there is no cache match."
     }
    },
    "NAME": {
     "!type": "string",
     "!doc": "Class name."
    },
    "flushAll": {
     "!type": "fn()",
     "!doc": "Removes all items from all sandboxes. Useful if localStorage has\nexceeded quota. Only supported on browsers that implement HTML 5\nlocalStorage."
    }
   },
   "Plugin": {
    "Cache": {
     "!type": "fn()",
     "prototype": {
      "!proto": "cache.Cache.prototype"
     },
     "NS": {
      "!type": "string",
      "!doc": "The namespace for the plugin. This will be the property on the host which\nreferences the plugin instance."
     },
     "NAME": {
      "!type": "string",
      "!doc": "Class name."
     }
    }
   }
  },
  "calendar": {
   "CalendarBase": {
    "!type": "fn(config: +yui.Object) -> +calendar.CalendarBase",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "initializer": {
      "!type": "fn()",
      "!doc": "Designated initializer\nInitializes instance-level properties of\ncalendar."
     },
     "renderUI": {
      "!type": "fn()",
      "!doc": "renderUI implementation\n\nCreates a visual representation of the calendar based on existing parameters."
     },
     "bindUI": {
      "!type": "fn()",
      "!doc": "bindUI implementation\n\nAssigns listeners to relevant events that change the state\nof the calendar."
     },
     "selectDates": {
      "!type": "fn(dates: +datatype_date.Date) -> !this",
      "!doc": "Selects a given date or array of dates."
     },
     "deselectDates": {
      "!type": "fn(dates?: +datatype_date.Date) -> !this",
      "!doc": "Deselects a given date or array of dates, or deselects\nall dates if no argument is specified."
     },
     "date": {
      "!type": "+datatype_date.Date",
      "!doc": "The date corresponding to the current calendar view. Always\nnormalized to the first of the month that contains the date\nat assignment time. Used as the first date visible in the\ncalendar."
     },
     "showPrevMonth": {
      "!type": "bool",
      "!doc": "A setting specifying whether to shows days from the previous\nmonth in the visible months grid, if there are empty preceding\ncells available."
     },
     "showNextMonth": {
      "!type": "bool",
      "!doc": "A setting specifying whether to shows days from the next\nmonth in the visible months grid, if there are empty\ncells available at the end."
     },
     "headerRenderer": {
      "!type": "string",
      "!doc": "Custom header renderer for the calendar."
     },
     "enabledDatesRule": {
      "!type": "string",
      "!doc": "The name of the rule which all enabled dates should match.\nEither disabledDatesRule or enabledDatesRule should be specified,\nor neither, but not both."
     },
     "disabledDatesRule": {
      "!type": "string",
      "!doc": "The name of the rule which all disabled dates should match.\nEither disabledDatesRule or enabledDatesRule should be specified,\nor neither, but not both."
     },
     "selectedDates": {
      "!type": "+yui.Array",
      "!doc": "A read-only attribute providing a list of currently selected dates."
     },
     "customRenderer": {
      "!type": "+yui.Object",
      "!doc": "An object of the form {rules:Object, filterFunction:Function},\nproviding  set of rules and a custom rendering function for\ncustomizing specific calendar cells."
     }
    }
   },
   "Calendar": {
    "!type": "fn(config: +yui.Object) -> +calendar.Calendar",
    "prototype": {
     "!proto": "calendar.CalendarBase.prototype",
     "initializer": {
      "!type": "fn()",
      "!doc": "Designated initializer. Activates the navigation plugin for the calendar."
     },
     "subtractMonth": {
      "!type": "fn() -> !this",
      "!doc": "Subtracts one month from the current calendar view."
     },
     "subtractYear": {
      "!type": "fn() -> !this",
      "!doc": "Subtracts one year from the current calendar view."
     },
     "addMonth": {
      "!type": "fn() -> !this",
      "!doc": "Adds one month to the current calendar view."
     },
     "addYear": {
      "!type": "fn() -> !this",
      "!doc": "Adds one year to the current calendar view."
     },
     "selectionMode": {
      "!type": "string",
      "!doc": "A setting specifying the type of selection the calendar allows.\nPossible values include:\n<ul>\n  <li>`single` - One date at a time</li>\n  <li>`multiple-sticky` - Multiple dates, selected one at a time (the dates \"stick\"). This option\n  is appropriate for mobile devices, where function keys from the keyboard are not available.</li>\n  <li>`multiple` - Multiple dates, selected with Ctrl/Meta keys for additional single\n  dates, and Shift key for date ranges.</li>"
     },
     "date": {
      "!type": "+datatype_date.Date",
      "!doc": "The date corresponding to the current calendar view. Always\nnormalized to the first of the month that contains the date\nat assignment time. Used as the first date visible in the\ncalendar."
     },
     "minimumDate": {
      "!type": "+datatype_date.Date",
      "!doc": "Unless minimumDate is null, it will not be possible to display and select dates earlier than this one."
     },
     "maximumDate": {
      "!type": "+datatype_date.Date",
      "!doc": "Unless maximumDate is null, it will not be possible to display and select dates later than this one."
     }
    }
   }
  },
  "calendarnavigator": {
   "Plugin": {
    "CalendarNavigator": {
     "!type": "fn()",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "shiftByMonths": {
       "!type": "number",
       "!doc": "The number of months to shift by when the control arrows are clicked."
      },
      "initializer": {
       "!type": "fn()",
       "!doc": "The initializer lifecycle implementation. Modifies the host widgets\nrender to add navigation controls."
      },
      "destructor": {
       "!type": "fn()",
       "!doc": "The initializer destructor implementation. Responsible for destroying the initialized\ncontrol mechanisms."
      }
     },
     "NS": {
      "!type": "string",
      "!doc": "The namespace for the plugin. This will be the property on the widget, which will\nreference the plugin instance, when its plugged in."
     },
     "NAME": {
      "!type": "string",
      "!doc": "The NAME of the CalendarNavigator class. Used to prefix events generated\nby the plugin class."
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the plugin."
     }
    }
   }
  },
  "charts": {
   "AreaSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.AreaSeries",
    "prototype": {
     "!proto": "charts.CartesianSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing area fills. This attribute is inherited from `Renderer`. Below are the default values:\n\n <dl>\n     <dt>color</dt><dd>The color of the fill. The default value is determined by the order of the series on the graph. The color will be\n     retrieved from the following array:\n     `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n     </dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1</dd>\n </dl>"
     }
    }
   },
   "AreaSplineSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.AreaSplineSeries",
    "prototype": {
     "!proto": "charts.AreaSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing area fills. This attribute is inherited from `Renderer`. Below are the default values:\n\n <dl>\n     <dt>color</dt><dd>The color of the fill. The default value is determined by the order of the series on the graph. The color will be\n     retrieved from the following array:\n     `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n     </dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1</dd>\n </dl>"
     }
    }
   },
   "Axis": {
    "!type": "fn(config: +yui.Object) -> +charts.Axis",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "getLabelByIndex": {
      "!type": "fn(i: number, l: number) -> ?",
      "!doc": "Calculates and returns a value based on the number of labels and the index of\nthe current label."
     },
     "getMaxLabelBounds": {
      "!type": "fn() -> ?",
      "!doc": "Returns the coordinates (top, right, bottom, left) for the bounding box of the last label."
     },
     "getMinLabelBounds": {
      "!type": "fn() -> ?",
      "!doc": "Returns the coordinates (top, right, bottom, left) for the bounding box of the first label."
     },
     "getTotalMajorUnits": {
      "!type": "fn() -> ?",
      "!doc": "Returns the total number of majorUnits that will appear on an axis."
     },
     "getMajorUnitDistance": {
      "!type": "fn(len: number, uiLen: number, majorUnit: +yui.Object) -> ?",
      "!doc": "Returns the distance between major units on an axis."
     },
     "getMinimumValue": {
      "!type": "fn() -> ?",
      "!doc": "Returns a string corresponding to the first label on an\naxis."
     },
     "getMaximumValue": {
      "!type": "fn() -> ?",
      "!doc": "Returns a string corresponding to the last label on an\naxis."
     },
     "width": {
      "!type": "number",
      "!doc": "When set, defines the width of a vertical axis instance. By default, vertical axes automatically size based\non their contents. When the width attribute is set, the axis will not calculate its width. When the width\nattribute is explicitly set, axis labels will postion themselves off of the the inner edge of the axis and the\ntitle, if present, will position itself off of the outer edge. If a specified width is less than the sum of\nthe axis contents, excess content will overflow."
     },
     "height": {
      "!type": "number",
      "!doc": "When set, defines the height of a horizontal axis instance. By default, horizontal axes automatically size based\non their contents. When the height attribute is set, the axis will not calculate its height. When the height\nattribute is explicitly set, axis labels will postion themselves off of the the inner edge of the axis and the\ntitle, if present, will position itself off of the outer edge. If a specified height is less than the sum of\nthe axis contents, excess content will overflow."
     },
     "graphic": {
      "!type": "+graphics.Graphic",
      "!doc": "The graphic in which the axis line and ticks will be rendered."
     },
     "node": {
      "!type": "+HTMLElement",
      "!doc": "Contains the contents of the axis."
     },
     "position": {
      "!type": "string",
      "!doc": "Direction of the axis."
     },
     "topTickOffset": {
      "!type": "number",
      "!doc": "Distance determined by the tick styles used to calculate the distance between the axis\nline in relation to the top of the axis."
     },
     "bottomTickOffset": {
      "!type": "number",
      "!doc": "Distance determined by the tick styles used to calculate the distance between the axis\nline in relation to the bottom of the axis."
     },
     "leftTickOffset": {
      "!type": "number",
      "!doc": "Distance determined by the tick styles used to calculate the distance between the axis\nline in relation to the left of the axis."
     },
     "rightTickOffset": {
      "!type": "number",
      "!doc": "Distance determined by the tick styles used to calculate the distance between the axis\nline in relation to the right side of the axis."
     },
     "labels": {
      "!type": "+yui.Array",
      "!doc": "Collection of labels used to render the axis."
     },
     "tickPoints": {
      "!type": "+yui.Array",
      "!doc": "Collection of points used for placement of labels and ticks along the axis."
     },
     "overlapGraph": {
      "!type": "bool",
      "!doc": "Indicates whether the axis overlaps the graph. If an axis is the inner most axis on a given\nposition and the tick position is inside or cross, the axis will need to overlap the graph."
     },
     "title": {
      "!type": "string",
      "!doc": "Title for the axis. When specified, the title will display. The position of the title is determined by the axis position.\n<dl>\n    <dt>top</dt><dd>Appears above the axis and it labels. The default rotation is 0.</dd>\n    <dt>right</dt><dd>Appears to the right of the axis and its labels. The default rotation is 90.</dd>\n    <dt>bottom</dt><dd>Appears below the axis and its labels. The default rotation is 0.</dd>\n    <dt>left</dt><dd>Appears to the left of the axis and its labels. The default rotation is -90.</dd>\n</dl>"
     },
     "appendLabelFunction": {
      "!type": "fn()",
      "!doc": "Function used to append an axis value to an axis label. This function has the following signature:\n <dl>\n     <dt>textField</dt><dd>The axis label to be appended. (`HTMLElement`)</dd>\n     <dt>val</dt><dd>The value to attach to the text field. This method will accept an `HTMLELement`\n     or a `String`. This method does not use (`HTMLElement` | `String`)</dd>\n </dl>\nThe default method appends a value to the `HTMLElement` using the `appendChild` method. If the given\nvalue is a `String`, the method will convert the the value to a `textNode` before appending to the\n`HTMLElement`. This method will not convert an `HTMLString` to an `HTMLElement`."
     },
     "appendTitleFunction": {
      "!type": "fn()",
      "!doc": "Function used to append a title value to the title object. This function has the following signature:\n <dl>\n     <dt>textField</dt><dd>The title text field to be appended. (`HTMLElement`)</dd>\n     <dt>val</dt><dd>The value to attach to the text field. This method will accept an `HTMLELement`\n     or a `String`. This method does not use (`HTMLElement` | `String`)</dd>\n </dl>\nThe default method appends a value to the `HTMLElement` using the `appendChild` method. If the given\nvalue is a `String`, the method will convert the the value to a `textNode` before appending to the\n`HTMLElement` element. This method will not convert an `HTMLString` to an `HTMLElement`."
     },
     "labelValues": {
      "!type": "+yui.Array",
      "!doc": "An array containing the unformatted values of the axis labels. By default, TimeAxis, NumericAxis and\nStackedAxis labelValues are determined by the majorUnit style. By default, CategoryAxis labels are\ndetermined by the values of the dataProvider.\n<p>When the labelValues attribute is explicitly set, the labelValues are dictated by the set value and\nthe position of ticks and labels are determined by where those values would fall on the axis. </p>"
     },
     "hideFirstMajorUnit": {
      "!type": "bool",
      "!doc": "Suppresses the creation of the the first visible label and tick."
     },
     "hideLastMajorUnit": {
      "!type": "bool",
      "!doc": "Suppresses the creation of the the last visible label and tick."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing an axis. This attribute is inherited from `Renderer`. Below are the default values:\n <dl>\n     <dt>majorTicks</dt><dd>Properties used for drawing ticks.\n         <dl>\n             <dt>display</dt><dd>Position of the tick. Possible values are `inside`, `outside`, `cross` and `none`.\n             The default value is `inside`.</dd>\n             <dt>length</dt><dd>The length (in pixels) of the tick. The default value is 4.</dd>\n             <dt>color</dt><dd>The color of the tick. The default value is `#dad8c9`</dd>\n             <dt>weight</dt><dd>Number indicating the width of the tick. The default value is 1.</dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the tick. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>line</dt><dd>Properties used for drawing the axis line.\n         <dl>\n             <dt>weight</dt><dd>Number indicating the width of the axis line. The default value is 1.</dd>\n             <dt>color</dt><dd>The color of the axis line. The default value is `#dad8c9`.</dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the tick. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>majorUnit</dt><dd>Properties used to calculate the `majorUnit` for the axis.\n         <dl>\n             <dt>determinant</dt><dd>The algorithm used for calculating distance between ticks. The possible options are\n             `count` and `distance`. If the `determinant` is `count`, the axis ticks will spaced so that a specified number\n             of ticks appear on the axis. If the `determinant` is `distance`, the axis ticks will spaced out according to\n             the specified distance. The default value is `count`.</dd>\n             <dt>count</dt><dd>Number of ticks to appear on the axis when the `determinant` is `count`. The default value is 11.</dd>\n             <dt>distance</dt><dd>The distance (in pixels) between ticks when the `determinant` is `distance`. The default\n             value is 75.</dd>\n         </dl>\n     </dd>\n     <dt>label</dt><dd>Properties and styles applied to the axis labels.\n         <dl>\n             <dt>color</dt><dd>The color of the labels. The default value is `#808080`.</dd>\n             <dt>alpha</dt><dd>Number between 0 and 1 indicating the opacity of the labels. The default value is 1.</dd>\n             <dt>fontSize</dt><dd>The font-size of the labels. The default value is 85%</dd>\n             <dt>rotation</dt><dd>The rotation, in degrees (between -90 and 90) of the labels. The default value is 0.</dd>\n             <dt>offset</td><dd>A number between 0 and 1 indicating the relationship of the label to a tick. For a horizontal axis\n             label, a value of 0 will position the labels left side even to the the tick. A position of 1 would position the\n             right side of the label with the tick. A position of 0.5 would center the label horizontally with the tick. For a\n             vertical axis, a value of 0 would position the top of the label with the tick, a value of 1 would position the bottom\n             of the label with the tick and a value 0 would center the label vertically with the tick. The default value is 0.5.</dd>\n             <dt>margin</dt><dd>The distance between the label and the axis/tick. Depending on the position of the `Axis`,\n             only one of the properties used.\n                 <dl>\n                     <dt>top</dt><dd>Pixel value used for an axis with a `position` of `bottom`. The default value is 4.</dd>\n                     <dt>right</dt><dd>Pixel value used for an axis with a `position` of `left`. The default value is 4.</dd>\n                     <dt>bottom</dt><dd>Pixel value used for an axis with a `position` of `top`. The default value is 4.</dd>\n                     <dt>left</dt><dd>Pixel value used for an axis with a `position` of `right`. The default value is 4.</dd>\n                 </dl>\n             </dd>\n         </dl>\n     </dd>\n </dl>"
     }
    }
   },
   "AxisBase": {
    "!type": "fn(config: +yui.Object) -> +charts.AxisBase",
    "prototype": {
     "!proto": "base.Base.prototype",
     "getOrigin": {
      "!type": "fn() -> ?",
      "!doc": "Returns the value corresponding to the origin on the axis."
     },
     "addKey": {
      "!type": "fn(value: ?)",
      "!doc": "Adds an array to the key hash."
     },
     "removeKey": {
      "!type": "fn(value: string)",
      "!doc": "Removes an array from the key hash."
     },
     "getKeyValueAt": {
      "!type": "fn(key: string, index: number) -> ?",
      "!doc": "Returns a value based of a key value and an index."
     },
     "getDataByKey": {
      "!type": "fn(value: string) -> ?",
      "!doc": "Returns values based on key identifiers. When a string is passed as an argument, an array of values is returned.\nWhen an array of keys is passed as an argument, an object literal with an array of values mapped to each key is\nreturned."
     },
     "getTotalMajorUnits": {
      "!type": "fn() -> ?",
      "!doc": "Returns the total number of majorUnits that will appear on an axis."
     },
     "getEdgeOffset": {
      "!type": "fn(ct: number, l: number) -> ?",
      "!doc": "Gets the distance that the first and last ticks are offset from there respective\nedges."
     },
     "calculateEdgeOffset": {
      "!type": "bool",
      "!doc": "Determines whether and offset is automatically calculated for the edges of the axis."
     },
     "keys": {
      "!type": "+yui.Object",
      "!doc": "Hash of array identifed by a string value."
     },
     "type": {
      "!type": "string",
      "!doc": "Returns the type of axis data\n  <dl>\n      <dt>time</dt><dd>Manages time data</dd>\n      <dt>stacked</dt><dd>Manages stacked numeric data</dd>\n      <dt>numeric</dt><dd>Manages numeric data</dd>\n      <dt>category</dt><dd>Manages categorical data</dd>\n  </dl>"
     },
     "dataProvider": {
      "!type": "+yui.Array",
      "!doc": "Instance of `ChartDataProvider` that the class uses\nto build its own data."
     },
     "dataMaximum": {
      "!type": "number",
      "!doc": "The maximum value contained in the `data` array. Used for\n`maximum` when `autoMax` is true."
     },
     "maximum": {
      "!type": "number",
      "!doc": "The maximum value that will appear on an axis."
     },
     "dataMinimum": {
      "!type": "number",
      "!doc": "The minimum value contained in the `data` array. Used for\n`minimum` when `autoMin` is true."
     },
     "minimum": {
      "!type": "number",
      "!doc": "The minimum value that will appear on an axis."
     },
     "setMax": {
      "!type": "bool",
      "!doc": "Determines whether the maximum is calculated or explicitly\nset by the user."
     },
     "setMin": {
      "!type": "bool",
      "!doc": "Determines whether the minimum is calculated or explicitly\nset by the user."
     },
     "data": {
      "!type": "+yui.Array",
      "!doc": "Array of axis data"
     },
     "keyCollection": {
      "!type": "+yui.Array",
      "!doc": "Array containing all the keys in the axis."
     },
     "labelFunctionScope": {
      "!type": "+yui.Object",
      "!doc": "Object which should have by the labelFunction"
     }
    }
   },
   "BarSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.BarSeries",
    "prototype": {
     "!proto": "charts.MarkerSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "direction": {
      "!type": "string",
      "!doc": "Indicates the direction of the category axis that the bars are plotted against."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing markers. This attribute is inherited from `MarkerSeries`. Below are the default values:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>height</dt><dd>indicates the width of the marker. The default value is 12.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default\n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
     }
    }
   },
   "CandlestickSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.CandlestickSeries",
    "prototype": {
     "!proto": "charts.RangeSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "graphic": {
      "!type": "+graphics.Graphic",
      "!doc": "The graphic in which drawings will be rendered."
     },
     "upcandle": {
      "!type": "+graphics.Path",
      "!doc": "Reference to the candlestick used when the close value is higher than the open value."
     },
     "downcandle": {
      "!type": "+graphics.Path",
      "!doc": "Reference to the candlestick used when the open value is higher than the close value."
     },
     "wick": {
      "!type": "+graphics.Path",
      "!doc": "Reference to the line drawn between the high and low values."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing candles and wicks. This attribute is inherited from `RangeSeries`. Below are the default values:\n <dl>\n     <dt>upcandle</dt><dd>Properties for a candle representing a period that closes higher than it opens.\n         <dl>\n             <dt>fill</dt><dd>A hash containing the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the fill. The default value is \"#00aa00\".</dd>\n                     </dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n                 </dl>\n             </dd>\n             <dt>border</dt><dd>A hash containing the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the border. The default value is \"#000000\".</dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n                     <dt>weight</dt><dd>Number indicating the width of the border. The default value is 0.</dd>\n                 </dl>\n             </dd>\n         </dl>\n     </dd>\n     <dt>downcandle</dt><dd>Properties for a candle representing a period that opens higher than it closes.\n         <dl>\n             <dt>fill</dt><dd>A hash containing the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the fill. The default value is \"#aa0000\".</dd>\n                     </dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n                 </dl>\n             </dd>\n             <dt>border</dt><dd>A hash containing the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the border. The default value is \"#000000\".</dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n                     <dt>weight</dt><dd>Number indicating the width of the border. The default value is 0.</dd>\n                 </dl>\n             </dd>\n         </dl>\n     </dd>\n     <dt>wick</dt><dd>Properties for the wick, which is a line drawn from the high point of the period to the low point of the period.\n         <dl>\n             <dt>color</dt><dd>The color of the wick. The default value is \"#000000\".</dd>\n             <dt>weight</dt><dd>The weight of the wick. The default value is 1.</dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the wick. The default value is 1.</dd>\n         </dl>\n     </dd>\n </dl>"
     }
    }
   },
   "CartesianChart": {
    "!type": "fn() -> +charts.CartesianChart",
    "prototype": {
     "!proto": "charts.ChartBase.prototype",
     "_addToAxesCollection": {
      "!type": "fn(position: string, axis: +charts.Axis)",
      "!doc": "Adds axis instance to the appropriate array based on position"
     },
     "getSeriesItems": {
      "!type": "fn(series: +charts.CartesianSeries, index: number) -> ?",
      "!doc": "Returns an object literal containing a categoryItem and a valueItem for a given series index. Below is the structure of each:"
     },
     "_getAriaMessage": {
      "!type": "fn(key: number) -> ?",
      "!doc": "Returns the appropriate message based on the key press."
     },
     "allowContentOverflow": {
      "!type": "bool",
      "!doc": "Indicates whether axis labels are allowed to overflow beyond the bounds of the charts content box."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties for the chart. Contains a key indexed hash of the following:\n <dl>\n     <dt>series</dt><dd>A key indexed hash containing references to the `styles` attribute for each series in the chart.\n     Specific style attributes vary depending on the series:\n     <ul>\n         <li><a href=\"AreaSeries.html#attr_styles\">AreaSeries</a></li>\n         <li><a href=\"BarSeries.html#attr_styles\">BarSeries</a></li>\n         <li><a href=\"ColumnSeries.html#attr_styles\">ColumnSeries</a></li>\n         <li><a href=\"ComboSeries.html#attr_styles\">ComboSeries</a></li>\n         <li><a href=\"LineSeries.html#attr_styles\">LineSeries</a></li>\n         <li><a href=\"MarkerSeries.html#attr_styles\">MarkerSeries</a></li>\n         <li><a href=\"SplineSeries.html#attr_styles\">SplineSeries</a></li>\n     </ul>\n     </dd>\n     <dt>axes</dt><dd>A key indexed hash containing references to the `styles` attribute for each axes in the chart. Specific\n     style attributes can be found in the <a href=\"Axis.html#attr_styles\">Axis</a> class.</dd>\n     <dt>graph</dt><dd>A reference to the `styles` attribute in the chart. Specific style attributes can be found in the\n     <a href=\"Graph.html#attr_styles\">Graph</a> class.</dd>\n </dl>"
     },
     "axes": {
      "!type": "+yui.Object",
      "!doc": "Axes to appear in the chart. This can be a key indexed hash of axis instances or object literals\nused to construct the appropriate axes."
     },
     "seriesCollection": {
      "!type": "+yui.Array",
      "!doc": "Collection of series to appear on the chart. This can be an array of Series instances or object literals\nused to construct the appropriate series."
     },
     "stacked": {
      "!type": "bool",
      "!doc": "Indicates whether or not the chart is stacked."
     },
     "direction": {
      "!type": "string",
      "!doc": "Direction of charts category axis when there is no series collection specified. Charts can\nbe horizontal or vertical. When the chart type is column, the chart is horizontal.\nWhen the chart type is bar, the chart is vertical."
     },
     "showAreaFill": {
      "!type": "bool",
      "!doc": "Indicates whether or not an area is filled in a combo chart."
     },
     "showMarkers": {
      "!type": "bool",
      "!doc": "Indicates whether to display markers in a combo chart."
     },
     "showLines": {
      "!type": "bool",
      "!doc": "Indicates whether to display lines in a combo chart."
     },
     "categoryAxisName": {
      "!type": "string",
      "!doc": "Indicates the key value used to identify a category axis in the `axes` hash. If\nnot specified, the categoryKey attribute value will be used."
     },
     "valueAxisName": {
      "!type": "string",
      "!doc": "Indicates the key value used to identify a the series axis when an axis not generated."
     },
     "horizontalGridlines": {
      "!type": "+charts.Gridlines",
      "!doc": "Reference to the horizontalGridlines for the chart."
     },
     "verticalGridlines": {
      "!type": "+charts.Gridlines",
      "!doc": "Reference to the verticalGridlines for the chart."
     },
     "type": {
      "!type": "string",
      "!doc": "Type of chart when there is no series collection specified."
     },
     "categoryAxis": {
      "!type": "+charts.Axis",
      "!doc": "Reference to the category axis used by the chart."
     }
    }
   },
   "CartesianSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.CartesianSeries",
    "prototype": {
     "!proto": "charts.SeriesBase.prototype",
     "seriesTypeCollection": {
      "!type": "+yui.Array",
      "!doc": "An array of all series of the same type used within a chart application."
     },
     "xDisplayName": {
      "!type": "string",
      "!doc": "Name used for for displaying data related to the x-coordinate."
     },
     "yDisplayName": {
      "!type": "string",
      "!doc": "Name used for for displaying data related to the y-coordinate."
     },
     "categoryDisplayName": {
      "!type": "string",
      "!doc": "Name used for for displaying category data"
     },
     "valueDisplayName": {
      "!type": "string",
      "!doc": "Name used for for displaying value data"
     },
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "order": {
      "!type": "number",
      "!doc": "Order of this instance of this `type`."
     },
     "graphOrder": {
      "!type": "number",
      "!doc": "Order of the instance"
     },
     "xcoords": {
      "!type": "+yui.Array",
      "!doc": "x coordinates for the series."
     },
     "ycoords": {
      "!type": "+yui.Array",
      "!doc": "y coordinates for the series"
     },
     "xAxis": {
      "!type": "+charts.Axis",
      "!doc": "Reference to the `Axis` instance used for assigning\nx-values to the graph."
     },
     "yAxis": {
      "!type": "+charts.Axis",
      "!doc": "Reference to the `Axis` instance used for assigning\ny-values to the graph."
     },
     "xKey": {
      "!type": "string",
      "!doc": "Indicates which array to from the hash of value arrays in\nthe x-axis `Axis` instance."
     },
     "yKey": {
      "!type": "string",
      "!doc": "Indicates which array to from the hash of value arrays in\nthe y-axis `Axis` instance."
     },
     "xData": {
      "!type": "+yui.Array",
      "!doc": "Array of x values for the series."
     },
     "yData": {
      "!type": "+yui.Array",
      "!doc": "Array of y values for the series."
     },
     "xMarkerPlane": {
      "!type": "+yui.Array",
      "!doc": "Collection of area maps along the xAxis. Used to determine mouseover for multiple\nseries."
     },
     "yMarkerPlane": {
      "!type": "+yui.Array",
      "!doc": "Collection of area maps along the yAxis. Used to determine mouseover for multiple\nseries."
     },
     "xMarkerPlaneOffset": {
      "!type": "number",
      "!doc": "Distance from a data coordinate to the left/right for setting a hotspot."
     },
     "yMarkerPlaneOffset": {
      "!type": "number",
      "!doc": "Distance from a data coordinate to the top/bottom for setting a hotspot."
     },
     "direction": {
      "!type": "string",
      "!doc": "Direction of the series"
     }
    }
   },
   "CategoryAxis": {
    "!type": "fn(config: +yui.Object) -> +charts.CategoryAxis",
    "prototype": {
     "!proto": "charts.Axis.prototype",
     "getMinimumValue": {
      "!type": "fn() -> ?",
      "!doc": "Returns a string corresponding to the first label on an\naxis."
     },
     "getMaximumValue": {
      "!type": "fn() -> ?",
      "!doc": "Returns a string corresponding to the last label on an\naxis."
     }
    }
   },
   "CategoryImpl": {
    "!type": "fn() -> +charts.CategoryImpl",
    "prototype": {
     "labelFormat": {
      "!type": "+yui.Object",
      "!doc": "Pattern used by the `labelFunction` to format a label. The default `labelFunction` values for\n`CategoryAxis` and `CategoryAxisBase` do not accept a format object. This value can be used by\na custom method."
     },
     "calculateEdgeOffset": {
      "!type": "bool",
      "!doc": "Determines whether and offset is automatically calculated for the edges of the axis."
     },
     "labelFunction": {
      "!type": "fn()",
      "!doc": "Method used for formatting a label. This attribute allows for the default label formatting method to overridden.\nThe method use would need to implement the arguments below and return a `String` or `HTMLElement`.\n<dl>\n     <dt>val</dt><dd>Label to be formatted. (`String`)</dd>\n     <dt>format</dt><dd>Template for formatting label. (optional)</dd>\n</dl>"
     },
     "formatLabel": {
      "!type": "fn(value: +yui.Object) -> ?",
      "!doc": "Formats a label based on the axis type and optionally specified format."
     },
     "getDataByKey": {
      "!type": "fn(value: string) -> ?",
      "!doc": "Returns an array of values based on an identifier key."
     },
     "getTotalMajorUnits": {
      "!type": "fn(majorUnit: +yui.Object, len: number) -> ?",
      "!doc": "Returns the total number of majorUnits that will appear on an axis."
     },
     "getKeyValueAt": {
      "!type": "fn(key: string, index: number) -> ?",
      "!doc": "Returns a value based of a key value and an index."
     }
    }
   },
   "ChartBase": {
    "!type": "fn() -> +charts.ChartBase",
    "prototype": {
     "dataProvider": {
      "!type": "+yui.Array",
      "!doc": "Data used to generate the chart."
     },
     "seriesKeys": {
      "!type": "+yui.Array",
      "!doc": "A collection of keys that map to the series axes. If no keys are set,\nthey will be generated automatically depending on the data structure passed into\nthe chart."
     },
     "ariaLabel": {
      "!type": "string",
      "!doc": "Sets the `aria-label` for the chart."
     },
     "ariaDescription": {
      "!type": "string",
      "!doc": "Sets the aria description for the chart."
     },
     "tooltip": {
      "!type": "+yui.Object",
      "!doc": "Reference to the default tooltip available for the chart.\n<p>Contains the following properties:</p>\n <dl>\n     <dt>node</dt><dd>Reference to the actual dom node</dd>\n     <dt>showEvent</dt><dd>Event that should trigger the tooltip</dd>\n     <dt>hideEvent</dt><dd>Event that should trigger the removal of a tooltip (can be an event or an array of events)</dd>\n     <dt>styles</dt><dd>A hash of style properties that will be applied to the tooltip node</dd>\n     <dt>show</dt><dd>Indicates whether or not to show the tooltip</dd>\n     <dt>markerEventHandler</dt><dd>Displays and hides tooltip based on marker events</dd>\n     <dt>planarEventHandler</dt><dd>Displays and hides tooltip based on planar events</dd>\n     <dt>markerLabelFunction</dt><dd>Reference to the function used to format a marker event triggered tooltips text.\n     The method contains the following arguments:\n <dl>\n     <dt>categoryItem</dt><dd>An object containing the following:\n <dl>\n     <dt>axis</dt><dd>The axis to which the category is bound.</dd>\n     <dt>displayName</dt><dd>The display name set to the category (defaults to key if not provided).</dd>\n     <dt>key</dt><dd>The key of the category.</dd>\n     <dt>value</dt><dd>The value of the category.</dd>\n </dl>\n </dd>\n <dt>valueItem</dt><dd>An object containing the following:\n     <dl>\n         <dt>axis</dt><dd>The axis to which the items series is bound.</dd>\n         <dt>displayName</dt><dd>The display name of the series. (defaults to key if not provided)</dd>\n         <dt>key</dt><dd>The key for the series.</dd>\n         <dt>value</dt><dd>The value for the series item.</dd>\n     </dl>\n </dd>\n <dt>itemIndex</dt><dd>The index of the item within the series.</dd>\n <dt>series</dt><dd> The `CartesianSeries` instance of the item.</dd>\n <dt>seriesIndex</dt><dd>The index of the series in the `seriesCollection`.</dd>\n </dl>\n The method returns an `HTMLElement` which is written into the DOM using `appendChild`. If you override this method and choose\n to return an html string, you will also need to override the tooltips `setTextFunction` method to accept an html string.\n </dd>\n <dt>planarLabelFunction</dt><dd>Reference to the function used to format a planar event triggered tooltips text\n <dl>\n     <dt>categoryAxis</dt><dd> `CategoryAxis` Reference to the categoryAxis of the chart.\n     <dt>valueItems</dt><dd>Array of objects for each series that has a data point in the coordinate plane of the event. Each\n     object contains the following data:\n <dl>\n     <dt>axis</dt><dd>The value axis of the series.</dd>\n     <dt>key</dt><dd>The key for the series.</dd>\n     <dt>value</dt><dd>The value for the series item.</dd>\n     <dt>displayName</dt><dd>The display name of the series. (defaults to key if not provided)</dd>\n </dl>\n </dd>\n     <dt>index</dt><dd>The index of the item within its series.</dd>\n     <dt>seriesArray</dt><dd>Array of series instances for each value item.</dd>\n     <dt>seriesIndex</dt><dd>The index of the series in the `seriesCollection`.</dd>\n </dl>\n </dd>\n </dl>\n The method returns an `HTMLElement` which is written into the DOM using `appendChild`. If you override this method and choose\n to return an html string, you will also need to override the tooltips `setTextFunction` method to accept an html string.\n </dd>\n <dt>setTextFunction</dt><dd>Method that writes content returned from `planarLabelFunction` or `markerLabelFunction` into the\n the tooltip node. Has the following signature:\n <dl>\n     <dt>label</dt><dd>The `HTMLElement` that the content is to be added.</dd>\n     <dt>val</dt><dd>The content to be rendered into tooltip. This can be a `String` or `HTMLElement`. If an HTML string is used,\n     it will be rendered as a string.</dd>\n </dl>\n </dd>\n </dl>"
     },
     "categoryKey": {
      "!type": "string",
      "!doc": "The key value used for the charts category axis."
     },
     "categoryType": {
      "!type": "string",
      "!doc": "Indicates the type of axis to use for the category axis.\n\n <dl>\n     <dt>category</dt><dd>Specifies a `CategoryAxis`.</dd>\n     <dt>time</dt><dd>Specifies a `TimeAxis</dd>\n </dl>"
     },
     "interactionType": {
      "!type": "string",
      "!doc": "Indicates the the type of interactions that will fire events.\n\n <dl>\n     <dt>marker</dt><dd>Events will be broadcasted when the mouse interacts with individual markers.</dd>\n     <dt>planar</dt><dd>Events will be broadcasted when the mouse intersects the plane of any markers on the chart.</dd>\n     <dt>none</dt><dd>No events will be broadcasted.</dd>\n </dl>"
     },
     "axesCollection": {
      "!type": "+yui.Array",
      "!doc": "Reference to all the axes in the chart."
     },
     "graph": {
      "!type": "+charts.Graph",
      "!doc": "Reference to graph instance."
     },
     "groupMarkers": {
      "!type": "bool",
      "!doc": "Indicates whether or not markers for a series will be grouped and rendered in a single complex shape instance."
     },
     "getSeries": {
      "!type": "fn(val: ?) -> ?",
      "!doc": "Returns a series instance by index or key value."
     },
     "getAxisByKey": {
      "!type": "fn(val: string) -> ?",
      "!doc": "Returns an `Axis` instance by key reference. If the axis was explicitly set through the `axes` attribute,\nthe key will be the same as the key used in the `axes` object. For default axes, the key for\nthe category axis is the value of the `categoryKey` (`category`). For the value axis, the default\nkey is `values`."
     },
     "getCategoryAxis": {
      "!type": "fn() -> ?",
      "!doc": "Returns the category axis for the chart."
     },
     "toggleTooltip": {
      "!type": "fn(e: +yui.Object)",
      "!doc": "Event listener for toggling the tooltip. If a tooltip is visible, hide it. If not, it\nwill create and show a tooltip based on the event object."
     },
     "hideTooltip": {
      "!type": "fn()",
      "!doc": "Hides the default tooltip"
     },
     "_getAllKeys": {
      "!type": "fn(dp: +yui.Array) -> ?",
      "!doc": "Returns all the keys contained in a  `dataProvider`."
     }
    }
   },
   "ChartLegend": {
    "!type": "fn()",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "chart": {
      "!type": "+charts.Chart",
      "!doc": "Reference to the `Chart` instance."
     },
     "direction": {
      "!type": "string",
      "!doc": "Indicates the direction in relation of the legends layout. The `direction` of the legend is determined by its\n`position` value."
     },
     "position": {
      "!type": "string",
      "!doc": "Indicates the position and direction of the legend. Possible values are `left`, `top`, `right` and `bottom`.\nValues of `left` and `right` values have a `direction` of `vertical`. Values of `top` and `bottom` values have\na `direction` of `horizontal`."
     },
     "width": {
      "!type": "number",
      "!doc": "The width of the legend. Depending on the implementation of the ChartLegend, this value is `readOnly`.\nBy default, the legend is included in the layout of the `Chart` that it references. Under this circumstance,\n`width` is always `readOnly`. When the legend is rendered in its own dom element, the `readOnly` status is\ndetermined by the direction of the legend. If the `position` is `left` or `right` or the `direction` is\n`vertical`, width is `readOnly`. If the position is `top` or `bottom` or the `direction` is `horizontal`,\nwidth can be explicitly set. If width is not explicitly set, the width will be determined by the width of the\nlegends parent element."
     },
     "height": {
      "!type": "number",
      "!doc": "The height of the legend. Depending on the implementation of the ChartLegend, this value is `readOnly`.\nBy default, the legend is included in the layout of the `Chart` that it references. Under this circumstance,\n`height` is always `readOnly`. When the legend is rendered in its own dom element, the `readOnly` status is\ndetermined by the direction of the legend. If the `position` is `top` or `bottom` or the `direction` is\n`horizontal`, height is `readOnly`. If the position is `left` or `right` or the `direction` is `vertical`,\nheight can be explicitly set. If height is not explicitly set, the height will be determined by the width of the\nlegends parent element."
     },
     "x": {
      "!type": "number",
      "!doc": "Indicates the x position of legend."
     },
     "y": {
      "!type": "number",
      "!doc": "Indicates the y position of legend."
     },
     "items": {
      "!type": "+yui.Array",
      "!doc": "Array of items contained in the legend. Each item is an object containing the following properties:\n\n<dl>\n     <dt>node</dt><dd>Node containing text for the legend item.</dd>\n     <dt>marker</dt><dd>Shape for the legend item.</dd>\n</dl>"
     },
     "background": {
      "!type": "+graphics.Rect",
      "!doc": "Background for the legend."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Properties used to display and style the ChartLegend.  This attribute is inherited from `Renderer`.\nBelow are the default values:\n\n <dl>\n     <dt>gap</dt><dd>Distance, in pixels, between the `ChartLegend` instance and the charts content. When `ChartLegend`\n     is rendered within a `Chart` instance this value is applied.</dd>\n     <dt>hAlign</dt><dd>Defines the horizontal alignment of the `items` in a `ChartLegend` rendered in a horizontal direction.\n     This value is applied when the instances `position` is set to top or bottom. This attribute can be set to left, center\n     or right. The default value is center.</dd>\n     <dt>vAlign</dt><dd>Defines the vertical alignment of the `items` in a `ChartLegend` rendered in vertical direction. This\n     value is applied when the instances `position` is set to left or right. The attribute can be set to top, middle or\n     bottom. The default value is middle.</dd>\n     <dt>item</dt><dd>Set of style properties applied to the `items` of the `ChartLegend`.\n         <dl>\n             <dt>hSpacing</dt><dd>Horizontal distance, in pixels, between legend `items`.</dd>\n             <dt>vSpacing</dt><dd>Vertical distance, in pixels, between legend `items`.</dd>\n             <dt>label</dt><dd>Properties for the text of an `item`.\n                 <dl>\n                     <dt>color</dt><dd>Color of the text. The default values is \"#808080\".</dd>\n                     <dt>fontSize</dt><dd>Font size for the text. The default value is \"85%\".</dd>\n                 </dl>\n             </dd>\n             <dt>marker</dt><dd>Properties for the `item` markers.\n                 <dl>\n                     <dt>width</dt><dd>Specifies the width of the markers.</dd>\n                     <dt>height</dt><dd>Specifies the height of the markers.</dd>\n                 </dl>\n             </dd>\n         </dl>\n     </dd>\n     <dt>background</dt><dd>Properties for the `ChartLegend` background.\n         <dl>\n             <dt>fill</dt><dd>Properties for the background fill.\n                 <dl>\n                     <dt>color</dt><dd>Color for the fill. The default value is \"#faf9f2\".</dd>\n                 </dl>\n             </dd>\n             <dt>border</dt><dd>Properties for the background border.\n                 <dl>\n                     <dt>color</dt><dd>Color for the border. The default value is \"#dad8c9\".</dd>\n                     <dt>weight</dt><dd>Weight of the border. The default values is 1.</dd>\n                 </dl>\n             </dd>\n         </dl>\n     </dd>\n</dl>"
     }
    }
   },
   "ColumnSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.ColumnSeries",
    "prototype": {
     "!proto": "charts.MarkerSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing markers. This attribute is inherited from `MarkerSeries`. Below are the default values:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>width</dt><dd>indicates the width of the marker. The default value is 12.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default\n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
     }
    }
   },
   "ComboSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.ComboSeries",
    "prototype": {
     "!proto": "charts.CartesianSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "showAreaFill": {
      "!type": "bool",
      "!doc": "Indicates whether a fill is displayed."
     },
     "showLines": {
      "!type": "bool",
      "!doc": "Indicates whether lines are displayed."
     },
     "showMarkers": {
      "!type": "bool",
      "!doc": "Indicates whether markers are displayed."
     },
     "marker": {
      "!type": "+yui.Object",
      "!doc": "Reference to the styles of the markers. These styles can also\nbe accessed through the `styles` attribute. Below are default\nvalues:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the\n             graph. The color will be retrieved from the below array:<br/>\n             `[\"#6084d0\", \"#eeb647\", \"#6c6b5f\", \"#d6484f\", \"#ce9ed1\", \"#ff9f3b\", \"#93b7ff\", \"#e0ddd0\", \"#94ecba\", \"#309687\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph.\n             The color will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>width</dt><dd>indicates the width of the marker. The default value is 10.</dd>\n     <dt>height</dt><dd>indicates the height of the marker The default value is 10.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default\n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
     },
     "line": {
      "!type": "+yui.Object",
      "!doc": "Reference to the styles of the lines. These styles can also be accessed through the `styles` attribute.\nBelow are the default values:\n <dl>\n     <dt>color</dt><dd>The color of the line. The default value is determined by the order of the series on the graph. The color\n     will be retrieved from the following array:\n     `[\"#426ab3\", \"#d09b2c\", \"#000000\", \"#b82837\", \"#b384b5\", \"#ff7200\", \"#779de3\", \"#cbc8ba\", \"#7ed7a6\", \"#007a6c\"]`\n     <dt>weight</dt><dd>Number that indicates the width of the line. The default value is 6.</dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the line. The default value is 1.</dd>\n     <dt>lineType</dt><dd>Indicates whether the line is solid or dashed. The default value is solid.</dd>\n     <dt>dashLength</dt><dd>When the `lineType` is dashed, indicates the length of the dash. The default value is 10.</dd>\n     <dt>gapSpace</dt><dd>When the `lineType` is dashed, indicates the distance between dashes. The default value is 10.</dd>\n     <dt>connectDiscontinuousPoints</dt><dd>Indicates whether or not to connect lines when there is a missing or null value\n     between points. The default value is true.</dd>\n     <dt>discontinuousType</dt><dd>Indicates whether the line between discontinuous points is solid or dashed. The default\n     value is solid.</dd>\n     <dt>discontinuousDashLength</dt><dd>When the `discontinuousType` is dashed, indicates the length of the dash. The default\n     value is 10.</dd>\n     <dt>discontinuousGapSpace</dt><dd>When the `discontinuousType` is dashed, indicates the distance between dashes. The default\n     value is 10.</dd>\n </dl>"
     },
     "area": {
      "!type": "+yui.Object",
      "!doc": "Reference to the styles of the area fills. These styles can also be accessed through the `styles` attribute.\nBelow are the default values:\n\n <dl>\n     <dt>color</dt><dd>The color of the fill. The default value is determined by the order of the series on the\n     graph. The color will be retrieved from the following array:\n     `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n     </dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1</dd>\n </dl>"
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties for the series. Contains a key indexed hash of the following:\n <dl>\n     <dt>marker</dt><dd>Style properties for the markers in the series. Specific style attributes are listed\n     <a href=\"#attr_marker\">here</a>.</dd>\n     <dt>line</dt><dd>Style properties for the lines in the series. Specific\n     style attributes are listed <a href=\"#attr_line\">here</a>.</dd>\n     <dt>area</dt><dd>Style properties for the area fills in the series. Specific style attributes are listed\n     <a href=\"#attr_area\">here</a>.</dd>\n </dl>"
     }
    }
   },
   "ComboSplineSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.ComboSplineSeries",
    "prototype": {
     "!proto": "charts.ComboSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     }
    }
   },
   "Graph": {
    "!type": "fn() -> +charts.Graph",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "getSeriesByIndex": {
      "!type": "fn(val: number) -> ?",
      "!doc": "Returns a series instance based on an index."
     },
     "getSeriesByKey": {
      "!type": "fn(val: string) -> ?",
      "!doc": "Returns a series instance based on a key value."
     },
     "chart": {
      "!type": "+charts.ChartBase",
      "!doc": "Reference to the chart instance using the graph."
     },
     "seriesCollection": {
      "!type": "+charts.CartesianSeries",
      "!doc": "Collection of series. When setting the `seriesCollection` the array can contain a combination of either\n`CartesianSeries` instances or object literals with properties that will define a series."
     },
     "showBackground": {
      "!type": "bool",
      "!doc": "Indicates whether the `Graph` has a background."
     },
     "seriesDictionary": {
      "!type": "+yui.Object",
      "!doc": "Read-only hash lookup for all series on in the `Graph`."
     },
     "horizontalGridlines": {
      "!type": "+charts.Gridlines",
      "!doc": "Reference to the horizontal `Gridlines` instance."
     },
     "verticalGridlines": {
      "!type": "+charts.Gridlines",
      "!doc": "Reference to the vertical `Gridlines` instance."
     },
     "background": {
      "!type": "+graphics.Graphic",
      "!doc": "Reference to graphic instance used for the background."
     },
     "gridlines": {
      "!type": "+graphics.Graphic",
      "!doc": "Reference to graphic instance used for gridlines."
     },
     "graphic": {
      "!type": "+graphics.Graphic",
      "!doc": "Reference to graphic instance used for series."
     },
     "groupMarkers": {
      "!type": "bool",
      "!doc": "Indicates whether or not markers for a series will be grouped and rendered in a single complex shape instance."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing a background. Below are the default values:\n <dl>\n     <dt>background</dt><dd>An object containing the following values:\n         <dl>\n             <dt>fill</dt><dd>Defines the style properties for the fill. Contains the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the fill. The default value is #faf9f2.</dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the background fill.\n                     The default value is 1.</dd>\n                 </dl>\n             </dd>\n             <dt>border</dt><dd>Defines the style properties for the border. Contains the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the border. The default value is #dad8c9.</dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the background border.\n                     The default value is 1.</dd>\n                     <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n                 </dl>\n             </dd>\n         </dl>\n     </dd>\n </dl>"
     }
    }
   },
   "Gridlines": {
    "!type": "fn(config: +yui.Object) -> +charts.Gridlines",
    "prototype": {
     "!proto": "base.Base.prototype",
     "direction": {
      "!type": "string",
      "!doc": "Indicates the direction of the gridline."
     },
     "axis": {
      "!type": "+charts.Axis",
      "!doc": "Indicate the `Axis` in which to bind\nthe gridlines."
     },
     "graph": {
      "!type": "+charts.Graph",
      "!doc": "Indicates the `Graph` in which the gridlines\nare drawn."
     },
     "count": {
      "!type": "number",
      "!doc": "Indicates the number of gridlines to display. If no value is set, gridlines will equal the number of ticks in\nthe corresponding axis."
     }
    }
   },
   "LineSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.LineSeries",
    "prototype": {
     "!proto": "charts.CartesianSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing lines. This attribute is inherited from `Renderer`. Below are the\ndefault values:\n <dl>\n     <dt>color</dt><dd>The color of the line. The default value is determined by the order of the series\n     on the graph. The color will be retrieved from the following array:\n     `[\"#426ab3\", \"#d09b2c\", \"#000000\", \"#b82837\", \"#b384b5\", \"#ff7200\", \"#779de3\", \"#cbc8ba\", \"#7ed7a6\", \"#007a6c\"]`\n     <dt>weight</dt><dd>Number that indicates the width of the line. The default value is 6.</dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the line. The default value is 1.</dd>\n     <dt>lineType</dt><dd>Indicates whether the line is solid or dashed. The default value is solid.</dd>\n     <dt>dashLength</dt><dd>When the `lineType` is dashed, indicates the length of the dash. The default\n     value is 10.</dd>\n     <dt>gapSpace</dt><dd>When the `lineType` is dashed, indicates the distance between dashes. The default\n     value is 10.</dd>\n     <dt>connectDiscontinuousPoints</dt><dd>Indicates whether or not to connect lines when there is a missing\n     or null value between points. The default value is true.</dd>\n     <dt>discontinuousType</dt><dd>Indicates whether the line between discontinuous points is solid or dashed.\n     The default value is solid.</dd>\n     <dt>discontinuousDashLength</dt><dd>When the `discontinuousType` is dashed, indicates the length of the\n     dash. The default value is 10.</dd>\n     <dt>discontinuousGapSpace</dt><dd>When the `discontinuousType` is dashed, indicates the distance between\n     dashes. The default value is 10.</dd>\n </dl>"
     }
    }
   },
   "MarkerSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.MarkerSeries",
    "prototype": {
     "!proto": "charts.CartesianSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing markers. This attribute is inherited from `Renderer`. Below are the default\nvalues:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on\n             the graph. The color will be retrieved from the below array:<br/>\n             `[\"#6084d0\", \"#eeb647\", \"#6c6b5f\", \"#d6484f\", \"#ce9ed1\", \"#ff9f3b\", \"#93b7ff\", \"#e0ddd0\", \"#94ecba\", \"#309687\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on\n             the graph. The color will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>width</dt><dd>indicates the width of the marker. The default value is 10.</dd>\n     <dt>height</dt><dd>indicates the height of the marker The default value is 10.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default\n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
     }
    }
   },
   "NumericImpl": {
    "!type": "fn() -> +charts.NumericImpl",
    "prototype": {
     "alwaysShowZero": {
      "!type": "bool",
      "!doc": "Indicates whether 0 should always be displayed."
     },
     "labelFunction": {
      "!type": "fn()",
      "!doc": "Method used for formatting a label. This attribute allows for the default label formatting method to overridden.\nThe method use would need to implement the arguments below and return a `String` or an `HTMLElement`. The default\nimplementation of the method returns a `String`. The output of this method will be rendered to the DOM using\n`appendChild`. If you override the `labelFunction` method and return an html string, you will also need to override\nthe Data `appendLabelFunction` to accept html as a `String`.\n<dl>\n     <dt>val</dt><dd>Label to be formatted. (`String`)</dd>\n     <dt>format</dt><dd>Object containing properties used to format the label. (optional)</dd>\n</dl>"
     },
     "labelFormat": {
      "!type": "+yui.Object",
      "!doc": "Object containing properties used by the `labelFunction` to format a\nlabel."
     },
     "roundingMethod": {
      "!type": "string",
      "!doc": "Indicates how to round unit values.\n  <dl>\n      <dt>niceNumber</dt><dd>Units will be smoothed based on the number of ticks and data range.</dd>\n      <dt>auto</dt><dd>If the range is greater than 1, the units will be rounded.</dd>\n      <dt>numeric value</dt><dd>Units will be equal to the numeric value.</dd>\n      <dt>null</dt><dd>No rounding will occur.</dd>\n  </dl>"
     },
     "": {
      "!type": "fn(value: +yui.Object, format: +yui.Object) -> ?",
      "!doc": "Formats a label based on the axis type and optionally specified format."
     },
     "getTotalByKey": {
      "!type": "fn(key: string) -> ?",
      "!doc": "Returns the sum of all values per key."
     },
     "getOrigin": {
      "!type": "fn() -> ?",
      "!doc": "Returns the value corresponding to the origin on the axis."
     }
    }
   },
   "OHLCSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.OHLCSeries",
    "prototype": {
     "!proto": "charts.RangeSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "graphic": {
      "!type": "+graphics.Graphic",
      "!doc": "The graphic in which drawings will be rendered."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing markers. This attribute is inherited from `RangeSeries`. Below are the default values:\n <dl>\n     <dt>upmarker</dt><dd>Properties for a marker representing a period that closes higher than it opens.\n         <dl>\n             <dt>fill</dt><dd>A hash containing the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the fill. The default value is \"#00aa00\".</dd>\n                     </dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n                 </dl>\n             </dd>\n             <dt>border</dt><dd>A hash containing the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the border. The default value is \"#000000\".</dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n                     <dt>weight</dt><dd>Number indicating the width of the border. The default value is 0.</dd>\n                 </dl>\n             </dd>\n         </dl>\n     </dd>\n     <dt>downmarker</dt><dd>Properties for a marker representing a period that opens higher than it closes.\n         <dl>\n             <dt>fill</dt><dd>A hash containing the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the fill. The default value is \"#aa0000\".</dd>\n                     </dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n                 </dl>\n             </dd>\n             <dt>border</dt><dd>A hash containing the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the border. The default value is \"#000000\".</dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n                     <dt>weight</dt><dd>Number indicating the width of the border. The default value is 0.</dd>\n                 </dl>\n             </dd>\n         </dl>\n     </dd>\n </dl>"
     }
    }
   },
   "PieChart": {
    "!type": "fn() -> +charts.PieChart",
    "prototype": {
     "!proto": "charts.ChartBase.prototype",
     "getSeriesItem": {
      "!type": "fn(series: ?, index: ?) -> ?",
      "!doc": "Returns an object literal containing a categoryItem and a valueItem for a given series index."
     },
     "_getAriaMessage": {
      "!type": "fn(key: number) -> ?",
      "!doc": "Returns the appropriate message based on the key press."
     },
     "ariaDescription": {
      "!type": "string",
      "!doc": "Sets the aria description for the chart."
     },
     "axes": {
      "!type": "+yui.Object",
      "!doc": "Axes to appear in the chart."
     },
     "seriesCollection": {
      "!type": "+yui.Array",
      "!doc": "Collection of series to appear on the chart. This can be an array of Series instances or object literals\nused to describe a Series instance."
     },
     "type": {
      "!type": "string",
      "!doc": "Type of chart when there is no series collection specified."
     }
    }
   },
   "PieSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.PieSeries",
    "prototype": {
     "!proto": "charts.SeriesBase.prototype",
     "": {
      "!type": "+Legend",
      "!doc": "The legend for the chart."
     },
     "getTotalValues": {
      "!type": "fn() -> ?",
      "!doc": "Returns the sum of all values for the series."
     },
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "order": {
      "!type": "number",
      "!doc": "Order of this instance of this `type`."
     },
     "graph": {
      "!type": "+charts.Graph",
      "!doc": "Reference to the `Graph` in which the series is drawn into."
     },
     "categoryAxis": {
      "!type": "+charts.Axis",
      "!doc": "Reference to the `Axis` instance used for assigning\nseries values to the graph."
     },
     "categoryKey": {
      "!type": "string",
      "!doc": "Indicates which array to from the hash of value arrays in\nthe category `Axis` instance."
     },
     "valueKey": {
      "!type": "string",
      "!doc": "Indicates which array to from the hash of value arrays in\nthe value `Axis` instance."
     },
     "categoryDisplayName": {
      "!type": "string",
      "!doc": "Name used for for displaying category data"
     },
     "valueDisplayName": {
      "!type": "string",
      "!doc": "Name used for for displaying value data"
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing markers. This attribute is inherited from `MarkerSeries`. Below are  the default\nvalues:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>colors</dt><dd>An array of colors to be used for the marker fills. The color for each marker  is\n             retrieved from the array below:<br/>\n             `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n             </dd>\n             <dt>alphas</dt><dd>An array of alpha references (Number from 0 to 1) indicating the opacity of each marker\n             fill. The default value is [1].</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>An array of colors to be used for the marker borders. The color for each marker is\n             retrieved from the array below:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default\n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
     }
    }
   },
   "RangeSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.RangeSeries",
    "prototype": {
     "!proto": "charts.CartesianSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "ohlc": {
      "!type": "+yui.Object",
      "!doc": "Values to be used for open, high, low and close keys."
     }
    }
   },
   "Renderer": {
    "!type": "fn()",
    "prototype": {
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties for class"
     },
     "graphic": {
      "!type": "+graphics.Graphic",
      "!doc": "The graphic in which drawings will be rendered."
     }
    }
   },
   "SeriesBase": {
    "!type": "fn(config: +yui.Object) -> +charts.SeriesBase",
    "prototype": {
     "!proto": "base.Base.prototype",
     "getTotalValues": {
      "!type": "fn() -> ?",
      "!doc": "Returns the sum of all values for the series."
     },
     "height": {
      "!type": "number",
      "!doc": "Returns the height of the parent graph"
     },
     "graphic": {
      "!type": "+graphics.Graphic",
      "!doc": "The graphic in which drawings will be rendered."
     },
     "chart": {
      "!type": "+charts.ChartBase",
      "!doc": "Reference to the `Chart` application. If no `Chart` application is present,\na reference to the `Graphic` instance that the series is drawn into will be returned."
     },
     "graph": {
      "!type": "+charts.Graph",
      "!doc": "Reference to the `Graph` in which the series is drawn into."
     },
     "rendered": {
      "!type": "bool",
      "!doc": "Indicates whether the Series has been through its initial set up."
     },
     "visible": {
      "!type": "bool",
      "!doc": "Indicates whether to show the series"
     },
     "groupMarkers": {
      "!type": "bool",
      "!doc": "Indicates whether or not markers for a series will be grouped and rendered in a single complex shape instance."
     }
    }
   },
   "SplineSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.SplineSeries",
    "prototype": {
     "!proto": "charts.LineSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing lines. This attribute is inherited from `Renderer`.\nBelow are the default values:\n <dl>\n     <dt>color</dt><dd>The color of the line. The default value is determined by the order of the series on\n     the graph. The color will be retrieved from the following array:\n     `[\"#426ab3\", \"#d09b2c\", \"#000000\", \"#b82837\", \"#b384b5\", \"#ff7200\", \"#779de3\", \"#cbc8ba\", \"#7ed7a6\", \"#007a6c\"]`\n     <dt>weight</dt><dd>Number that indicates the width of the line. The default value is 6.</dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the line. The default value is 1.</dd>\n     <dt>lineType</dt><dd>Indicates whether the line is solid or dashed. The default value is solid.</dd>\n     <dt>dashLength</dt><dd>When the `lineType` is dashed, indicates the length of the dash. The default value\n     is 10.</dd>\n     <dt>gapSpace</dt><dd>When the `lineType` is dashed, indicates the distance between dashes. The default value is\n     10.</dd>\n     <dt>connectDiscontinuousPoints</dt><dd>Indicates whether or not to connect lines when there is a missing or null\n     value between points. The default value is true.</dd>\n     <dt>discontinuousType</dt><dd>Indicates whether the line between discontinuous points is solid or dashed. The\n     default value is solid.</dd>\n     <dt>discontinuousDashLength</dt><dd>When the `discontinuousType` is dashed, indicates the length of the dash.\n     The default value is 10.</dd>\n     <dt>discontinuousGapSpace</dt><dd>When the `discontinuousType` is dashed, indicates the distance between dashes.\n     The default value is 10.</dd>\n </dl>"
     }
    }
   },
   "StackedAreaSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.StackedAreaSeries",
    "prototype": {
     "!proto": "charts.AreaSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     }
    }
   },
   "StackedAreaSplineSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.StackedAreaSplineSeries",
    "prototype": {
     "!proto": "charts.AreaSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     }
    }
   },
   "StackedBarSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.StackedBarSeries",
    "prototype": {
     "!proto": "charts.BarSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "direction": {
      "!type": "string",
      "!doc": "Direction of the series"
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing markers. This attribute is inherited from `BarSeries`. Below are the default values:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>height</dt><dd>indicates the width of the marker. The default value is 24.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default\n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
     }
    }
   },
   "StackedColumnSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.StackedColumnSeries",
    "prototype": {
     "!proto": "charts.ColumnSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "styles": {
      "!type": "+yui.Object",
      "!doc": "Style properties used for drawing markers. This attribute is inherited from `ColumnSeries`. Below are the default values:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>width</dt><dd>indicates the width of the marker. The default value is 24.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default\n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
     }
    }
   },
   "StackedComboSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.StackedComboSeries",
    "prototype": {
     "!proto": "charts.ComboSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "showAreaFill": {
      "!type": "bool",
      "!doc": "Indicates whether a fill is displayed."
     }
    }
   },
   "StackedComboSplineSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.StackedComboSplineSeries",
    "prototype": {
     "!proto": "charts.StackedComboSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     },
     "showAreaFill": {
      "!type": "bool",
      "!doc": "Indicates whether a fill is displayed."
     }
    }
   },
   "StackedLineSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.StackedLineSeries",
    "prototype": {
     "!proto": "charts.LineSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     }
    }
   },
   "StackedMarkerSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.StackedMarkerSeries",
    "prototype": {
     "!proto": "charts.MarkerSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     }
    }
   },
   "StackedSplineSeries": {
    "!type": "fn(config: +yui.Object) -> +charts.StackedSplineSeries",
    "prototype": {
     "!proto": "charts.SplineSeries.prototype",
     "type": {
      "!type": "string",
      "!doc": "Read-only attribute indicating the type of series."
     }
    }
   },
   "TimeImpl": {
    "!type": "fn() -> +charts.TimeImpl",
    "prototype": {
     "labelFunction": {
      "!type": "fn()",
      "!doc": "Method used for formatting a label. This attribute allows for the default label formatting method to overridden.\nThe method use would need to implement the arguments below and return a `String` or an `HTMLElement`. The default\nimplementation of the method returns a `String`. The output of this method will be rendered to the DOM using\n`appendChild`. If you override the `labelFunction` method and return an html string, you will also need to override\nthe Axis `appendLabelFunction` to accept html as a `String`.\n<dl>\n     <dt>val</dt><dd>Label to be formatted. (`String`)</dd>\n     <dt>format</dt><dd>STRFTime string used to format the label. (optional)</dd>\n</dl>"
     },
     "labelFormat": {
      "!type": "string",
      "!doc": "Pattern used by the `labelFunction` to format a label."
     },
     "formatLabel": {
      "!type": "fn(value: +yui.Object, format: +yui.Object) -> ?",
      "!doc": "Formats a label based on the axis type and optionally specified format."
     }
    }
   }
  },
  "classnamemanager": {
   "ClassNameManager": {
    "!type": "fn()",
    "classNamePrefix": {
     "!type": "string",
     "!doc": "Configuration property indicating the prefix for all CSS class names in this YUI instance."
    },
    "classNameDelimiter": {
     "!type": "string",
     "!doc": "Configuration property indicating the delimiter used to compose all CSS class names in\nthis YUI instance."
    },
    "prototype": {
     "getClassName": {
      "!type": "fn(classnameSection?: string, skipPrefix: bool)",
      "!doc": "Returns a class name prefixed with the the value of the\n<code>Y.config.classNamePrefix</code> attribute + the provided strings.\nUses the <code>Y.config.classNameDelimiter</code> attribute to delimit the\nprovided strings. E.g. Y.ClassNameManager.getClassName(foo,bar); // yui-foo-bar"
     }
    }
   }
  },
  "yui": {
   "Array": {
    "!type": "fn(thing: ?, startIndex?: number, force?: bool) -> +yui.Array",
    "lastIndexOf": {
     "!type": "fn(a: +yui.Array, val: ?, fromIndex?: number) -> number",
     "!doc": "Returns the index of the last item in the array that contains the specified\nvalue, or `-1` if the value isnt found."
    },
    "unique": {
     "!type": "fn(array: +yui.Array, testFn?: fn(a: ?, b: ?, index: number, array: +yui.Array)) -> +yui.Array",
     "!doc": "Returns a copy of the input array with duplicate items removed.\n\nNote: If the input array only contains strings, the `Y.Array.dedupe()` method is\na much faster alternative."
    },
    "filter": {
     "!type": "fn(a: +yui.Array, f: fn(), o?: +yui.Object) -> +yui.Array",
     "!doc": "Executes the supplied function on each item in the array. Returns a new array\ncontaining the items for which the supplied function returned a truthy value."
    },
    "reject": {
     "!type": "fn(a: +yui.Array, f: fn(), o?: +yui.Object) -> +yui.Array",
     "!doc": "The inverse of `Array.filter()`. Executes the supplied function on each item.\nReturns a new array containing the items for which the supplied function\nreturned `false`."
    },
    "every": {
     "!type": "fn(a: +yui.Array, f: fn(), o?: +yui.Object) -> bool",
     "!doc": "Executes the supplied function on each item in the array. Iteration stops if the\nsupplied function does not return a truthy value."
    },
    "map": {
     "!type": "fn(a: +yui.Array, f: fn(), o?: +yui.Object) -> +yui.Array",
     "!doc": "Executes the supplied function on each item in the array and returns a new array\ncontaining all the values returned by the supplied function."
    },
    "reduce": {
     "!type": "fn(a: +yui.Array, init: ?, f: fn(previousValue: ?, currentValue: ?, index: number, array: +yui.Array), o?: +yui.Object) -> ?",
     "!doc": "Executes the supplied function on each item in the array, \"folding\" the array\ninto a single value."
    },
    "find": {
     "!type": "fn(a: +yui.Array, f: fn(), o?: +yui.Object) -> +yui.Object",
     "!doc": "Executes the supplied function on each item in the array, searching for the\nfirst item that matches the supplied function."
    },
    "grep": {
     "!type": "fn(a: +yui.Array, pattern: +RegExp) -> +yui.Array",
     "!doc": "Iterates over an array, returning a new array of all the elements that match the\nsupplied regular expression."
    },
    "partition": {
     "!type": "fn(a: +yui.Array, f: fn(item: ?, index: number, array: +yui.Array), o?: +yui.Object) -> +yui.Object",
     "!doc": "Partitions an array into two new arrays, one with the items for which the\nsupplied function returns `true`, and one with the items for which the function\nreturns `false`."
    },
    "zip": {
     "!type": "fn(a: +yui.Array, a2: +yui.Array) -> +yui.Array",
     "!doc": "Creates an array of arrays by pairing the corresponding elements of two arrays\ntogether into a new array."
    },
    "flatten": {
     "!type": "fn(a: +yui.Array) -> +yui.Array",
     "!doc": "Flattens an array of nested arrays at any abitrary depth into a single, flat\narray."
    },
    "invoke": {
     "!type": "fn(items: +yui.Array, name: string, args?: ?) -> +yui.Array",
     "!doc": "Executes a named method on each item in an array of objects. Items in the array\nthat do not have a function by that name will be skipped."
    },
    "dedupe": {
     "!type": "fn(array: [string]) -> +yui.Array",
     "!doc": "Dedupes an array of strings, returning an array thats guaranteed to contain\nonly one copy of a given string.\n\nThis method differs from `Array.unique()` in that its optimized for use only\nwith arrays consisting entirely of strings or entirely of numbers, whereas\n`unique` may be used with other value types (but is slower).\n\nUsing `dedupe()` with values other than strings or numbers, or with arrays\ncontaining a mix of strings and numbers, may result in unexpected behavior."
    },
    "each": {
     "!type": "fn(array: +yui.Array, fn: fn(item: ?, index: number, array: +yui.Array), thisObj?: +yui.Object) -> +yui.YUI",
     "!doc": "Executes the supplied function on each item in the array. This method wraps\nthe native ES5 `Array.forEach()` method if available."
    },
    "forEach": {
     "!type": "fn()",
     "!doc": "Alias for `each()`."
    },
    "hash": {
     "!type": "fn(keys: [string], values?: +yui.Array) -> +yui.Object",
     "!doc": "Returns an object using the first array as keys and the second as values. If\nthe second array is not provided, or if it doesnt contain the same number of\nvalues as the first array, then `true` will be used in place of the missing\nvalues."
    },
    "indexOf": {
     "!type": "fn(array: +yui.Array, value: ?, from?: number) -> number",
     "!doc": "Returns the index of the first item in the array thats equal (using a strict\nequality check) to the specified _value_, or `-1` if the value isnt found.\n\nThis method wraps the native ES5 `Array.indexOf()` method if available."
    },
    "numericSort": {
     "!type": "fn(a: number, b: number) -> number",
     "!doc": "Numeric sort convenience function.\n\nThe native `Array.prototype.sort()` function converts values to strings and\nsorts them in lexicographic order, which is unsuitable for sorting numeric\nvalues. Provide `Array.numericSort` as a custom sort function when you want\nto sort values in numeric order."
    },
    "some": {
     "!type": "fn(array: +yui.Array, fn: fn(value: ?, index: number, array: +yui.Array), thisObj?: +yui.Object) -> bool",
     "!doc": "Executes the supplied function on each item in the array. Returning a truthy\nvalue from the function will stop the processing of remaining items."
    },
    "test": {
     "!type": "fn(obj: +yui.Object) -> number",
     "!doc": "Evaluates _obj_ to determine if its an array, an array-like collection, or\nsomething else. This is useful when working with the function `arguments`\ncollection and `HTMLElement` collections.\n\nNote: This implementation doesnt consider elements that are also\ncollections, such as `<form>` and `<select>`, to be array-like."
    }
   },
   "YUI": {
    "!type": "fn(config?: +yui.Object) -> +yui.YUI",
    "prototype": {
     "dump": {
      "!type": "fn(o: +yui.Object, d: number) -> string",
      "!doc": "Returns a simple string representation of the object or array.\nOther types of objects will be returned unprocessed.  Arrays\nare expected to be indexed."
     },
     "Global": {
      "!type": "+event_custom.EventTarget",
      "!doc": "Hosts YUI page level events.  This is where events bubble to\nwhen the broadcast config is set to 2.  This property is\nonly available if the custom event module is loaded."
     },
     "on": {
      "!type": "fn(type: string, fn: fn(), context?: +yui.Object, arg?: ?) -> +event_custom.EventHandle",
      "!doc": "`Y.on()` can do many things:\n\n<ul>\n    <li>Subscribe to custom events `publish`ed and `fire`d from Y</li>\n    <li>Subscribe to custom events `publish`ed with `broadcast` 1 or 2 and\n        `fire`d from any object in the YUI instance sandbox</li>\n    <li>Subscribe to DOM events</li>\n    <li>Subscribe to the execution of a method on any object, effectively\n    treating that method as an event</li>\n</ul>\n\nFor custom event subscriptions, pass the custom event name as the first argument\nand callback as the second. The `this` object in the callback will be `Y` unless\nan override is passed as the third argument.\n\n    Y.on(io:complete, function () {\n        Y.MyApp.updateStatus(Transaction complete);\n    });\n\nTo subscribe to DOM events, pass the name of a DOM event as the first argument\nand a CSS selector string as the third argument after the callback function.\nAlternately, the third argument can be a `Node`, `NodeList`, `HTMLElement`,\narray, or simply omitted (the default is the `window` object).\n\n    Y.on(click, function (e) {\n        e.preventDefault();\n\n        // proceed with ajax form submission\n        var url = this.get(action);\n        ...\n    }, #my-form);\n\nThe `this` object in DOM event callbacks will be the `Node` targeted by the CSS\nselector or other identifier.\n\n`on()` subscribers for DOM events or custom events `publish`ed with a\n`defaultFn` can prevent the default behavior with `e.preventDefault()` from the\nevent object passed as the first parameter to the subscription callback.\n\nTo subscribe to the execution of an object method, pass arguments corresponding to the call signature for\n<a href=\"../classes/Do.html#methods_before\">`Y.Do.before(...)`</a>.\n\nNOTE: The formal parameter list below is for events, not for function\ninjection.  See `Y.Do.before` for that signature."
     },
     "once": {
      "!type": "fn(type: string, fn: fn(), context?: +yui.Object, arg?: ?) -> +event_custom.EventHandle",
      "!doc": "Listen for an event one time.  Equivalent to `on()`, except that\nthe listener is immediately detached when executed.\n\nSee the <a href=\"#methods_on\">`on()` method</a> for additional subscription\noptions."
     },
     "onceAfter": {
      "!type": "fn(type: string, fn: fn(), context?: +yui.Object, arg?: ?) -> +event_custom.EventHandle",
      "!doc": "Listen for an event one time.  Equivalent to `once()`, except, like `after()`,\nthe subscription callback executes after all `on()` subscribers and the events\n`defaultFn` (if configured) have executed.  Like `after()` if any `on()` phase\nsubscriber calls `e.preventDefault()`, neither the `defaultFn` nor the `after()`\nsubscribers will execute.\n\nThe listener is immediately detached when executed.\n\nSee the <a href=\"#methods_on\">`on()` method</a> for additional subscription\noptions."
     },
     "after": {
      "!type": "fn(type: string, fn: fn(), context?: +yui.Object, args?: ?) -> +event_custom.EventHandle",
      "!doc": "Like `on()`, this method creates a subscription to a custom event or to the\nexecution of a method on an object.\n\nFor events, `after()` subscribers are executed after the events\n`defaultFn` unless `e.preventDefault()` was called from an `on()` subscriber.\n\nSee the <a href=\"#methods_on\">`on()` method</a> for additional subscription\noptions.\n\nNOTE: The subscription signature shown is for events, not for function\ninjection.  See <a href=\"../classes/Do.html#methods_after\">`Y.Do.after`</a>\nfor that signature."
     },
     "delegate": {
      "!type": "fn(type: string, fn: fn(), el: string, filter: string, context: ?, args: ?) -> +event_custom.EventHandle",
      "!doc": "Sets up event delegation on a container element.  The delegated event\nwill use a supplied filter to test if the callback should be executed.\nThis filter can be either a selector string or a function that returns\na Node to use as the currentTarget for the event.\n\nThe event object for the delegated event is supplied to the callback\nfunction.  It is modified slightly in order to support all properties\nthat may be needed for event delegation.  currentTarget is set to\nthe element that matched the selector string filter or the Node returned\nfrom the filter function.  container is set to the element that the\nlistener is delegated from (this normally would be the currentTarget).\n\nFilter functions will be called with the arguments that would be passed to\nthe callback function, including the event object as the first parameter.\nThe function should return false (or a falsey value) if the success criteria\narent met, and the Node to use as the events currentTarget and this\nobject if they are."
     },
     "meta": {
      "!type": "?",
      "!doc": "The component metadata is stored in Y.Env.meta.\nPart of the loader module."
     },
     "all": {
      "!type": "fn(selector: string) -> +node.NodeList",
      "!doc": "Retrieves a NodeList based on the given CSS selector."
     },
     "one": {
      "!type": "fn(node: string) -> +node.Node",
      "!doc": "Returns a single Node instance bound to the node or the\nfirst element matching the given selector. Returns null if no match found.\n<strong>Note:</strong> For chaining purposes you may want to\nuse <code>Y.all</code>, which returns a NodeList when no match is found."
     },
     "augment": {
      "!type": "fn(receiver: fn(), supplier: fn(), overwrite?: bool, whitelist?: [string], args?: +yui.Array) -> fn()",
      "!doc": "Augments the _receiver_ with prototype properties from the _supplier_. The\nreceiver may be a constructor function or an object. The supplier must be a\nconstructor function.\n\nIf the _receiver_ is an object, then the _supplier_ constructor will be called\nimmediately after _receiver_ is augmented, with _receiver_ as the `this` object.\n\nIf the _receiver_ is a constructor function, then all prototype methods of\n_supplier_ that are copied to _receiver_ will be sequestered, and the\n_supplier_ constructor will not be called immediately. The first time any\nsequestered method is called on the _receiver_s prototype, all sequestered\nmethods will be immediately copied to the _receiver_s prototype, the\n_supplier_s constructor will be executed, and finally the newly unsequestered\nmethod that was called will be executed.\n\nThis sequestering logic sounds like a bunch of complicated voodoo, but it makes\nit cheap to perform frequent augmentation by ensuring that suppliers\nconstructors are only called if a supplied method is actually used. If none of\nthe supplied methods is ever used, then theres no need to take the performance\nhit of calling the _supplier_s constructor."
     },
     "aggregate": {
      "!type": "fn(receiver: +yui.Object, supplier: +yui.Object, overwrite?: bool, whitelist?: [string]) -> +yui.Object",
      "!doc": "Copies object properties from the supplier to the receiver. If the target has\nthe property, and the property is an object, the target object will be\naugmented with the suppliers value."
     },
     "extend": {
      "!type": "fn(r: fn(), s: fn(), px: +yui.Object, sx: +yui.Object) -> +yui.Object",
      "!doc": "Utility to set up the prototype, constructor and superclass properties to\nsupport an inheritance strategy that can chain constructors and methods.\nStatic members will not be inherited."
     },
     "each": {
      "!type": "fn(o: +yui.Object, f: fn(), c: +yui.Object, proto: bool) -> +yui.YUI",
      "!doc": "Executes the supplied function for each item in\na collection.  Supports arrays, objects, and\nNodeLists"
     },
     "some": {
      "!type": "fn(o: +yui.Object, f: fn(), c: +yui.Object, proto: bool) -> bool",
      "!doc": "Executes the supplied function for each item in\na collection.  The operation stops if the function\nreturns true. Supports arrays, objects, and\nNodeLists."
     },
     "clone": {
      "!type": "fn(o: +yui.Object, safe: bool, f: fn(), c: +yui.Object, owner: +yui.Object, cloned: +yui.Object) -> +yui.Array",
      "!doc": "Deep object/array copy. Function clones are actually wrappers around the\noriginal function. Array-like objects are treated as arrays. Primitives are\nreturned untouched. Optionally, a function can be provided to handle other data\ntypes, filter keys, validate values, etc.\n\n**Note:** Cloning a non-trivial object is a reasonably heavy operation, due to\nthe need to recursively iterate down non-primitive properties. Clone should be\nused only when a deep clone down to leaf level properties is explicitly\nrequired. This method will also\n\nIn many cases (for example, when trying to isolate objects used as hashes for\nconfiguration properties), a shallow copy, using `Y.merge()` is normally\nsufficient. If more than one level of isolation is required, `Y.merge()` can be\nused selectively at each level which needs to be isolated from the original\nwithout going all the way to leaf properties."
     },
     "bind": {
      "!type": "fn(f: fn(), c: +yui.Object, args: ?) -> fn()",
      "!doc": "Returns a function that will execute the supplied function in the\nsupplied objects context, optionally adding any additional\nsupplied parameters to the beginning of the arguments collection the\nsupplied to the function."
     },
     "rbind": {
      "!type": "fn(f: fn(), c: +yui.Object, args: ?) -> fn()",
      "!doc": "Returns a function that will execute the supplied function in the\nsupplied objects context, optionally adding any additional\nsupplied parameters to the end of the arguments the function\nis executed with."
     },
     "batch": {
      "!type": "fn(operation: ?) -> +promise.Promise",
      "!doc": "Returns a new promise that will be resolved when all operations have completed.\nTakes both any numer of values as arguments. If an argument is a not a promise,\nit will be wrapped in a new promise, same as in `Y.when()`."
     },
     "when": {
      "!type": "fn(promise: ?, callback?: fn(), errback?: fn()) -> +promise.Promise",
      "!doc": "Abstraction API allowing you to interact with promises or raw values as if they\nwere promises. If a non-promise object is passed in, a new Resolver is created\nand scheduled to resolve asynchronously with the provided value.\n\nIn either case, a promise is returned.  If either _callback_ or _errback_ are\nprovided, the promise returned is the one returned from calling\n`promise.then(callback, errback)` on the provided or created promise.  If neither\nare provided, the original promise is returned."
     },
     "soon": {
      "!type": "fn(callbackFunction: fn()) -> +yui.Object",
      "!doc": "Y.soon accepts a callback function.  The callback function will be called\nonce in a future turn of the JavaScript event loop.  If the function\nrequires a specific execution context or arguments, wrap it with Y.bind.\nY.soon returns an object with a cancel method.  If the cancel method is\ncalled before the callback function, the callback function wont be\ncalled."
     },
     "throttle": {
      "!type": "fn(fn: fn(), ms: number) -> fn()",
      "!doc": "Throttles a call to a method based on the time between calls."
     },
     "cached": {
      "!type": "fn(source: fn(), cache?: +yui.Object, refetch?: ?) -> fn()",
      "!doc": "Returns a wrapper for a function which caches the return value of that function,\nkeyed off of the combined string representation of the argument values provided\nwhen the wrapper is called.\n\nCalling this function again with the same arguments will return the cached value\nrather than executing the wrapped function.\n\nNote that since the cache is keyed off of the string representation of arguments\npassed to the wrapper function, arguments that arent strings and dont provide\na meaningful `toString()` method may result in unexpected caching behavior. For\nexample, the objects `{}` and `{foo: bar}` would both be converted to the\nstring `[object Object]` when used as a cache key."
     },
     "getLocation": {
      "!type": "fn() -> +Location",
      "!doc": "Returns the `location` object from the window/frame in which this YUI instance\noperates, or `undefined` when executing in a non-browser environment\n(e.g. Node.js).\n\nIt is _not_ recommended to hold references to the `window.location` object\noutside of the scope of a function in which its properties are being accessed or\nits methods are being called. This is because of a nasty bug/issue that exists\nin both Safari and MobileSafari browsers:\n[WebKit Bug 34679](https://bugs.webkit.org/show_bug.cgi?id=34679)."
     },
     "merge": {
      "!type": "fn(objects: +yui.Object) -> +yui.Object",
      "!doc": "Returns a new object containing all of the properties of all the supplied\nobjects. The properties from later objects will overwrite those in earlier\nobjects.\n\nPassing in a single object will create a shallow copy of it. For a deep copy,\nuse `clone()`."
     },
     "mix": {
      "!type": "fn(receiver: fn(), supplier: fn(), overwrite?: bool, whitelist?: [string], mode?: number, merge?: bool) -> fn()",
      "!doc": "Mixes _supplier_s properties into _receiver_.\n\nProperties on _receiver_ or _receiver_s prototype will not be overwritten or\nshadowed unless the _overwrite_ parameter is `true`, and will not be merged\nunless the _merge_ parameter is `true`.\n\nIn the default mode (0), only properties the supplier owns are copied (prototype\nproperties are not copied). The following copying modes are available:\n\n  * `0`: _Default_. Object to object.\n  * `1`: Prototype to prototype.\n  * `2`: Prototype to prototype and object to object.\n  * `3`: Prototype to object.\n  * `4`: Object to prototype."
     },
     "later": {
      "!type": "fn(when: number, o: ?, fn: fn(), data: ?, periodic: bool) -> +yui.Object",
      "!doc": "Executes the supplied function in the context of the supplied\nobject when milliseconds later.  Executes the function a\nsingle time unless periodic is set to true."
     },
     "log": {
      "!type": "fn(msg: string, cat: string, src: string, silent: bool) -> +yui.YUI",
      "!doc": "If the debug config is true, a yui:log event will be\ndispatched, which the Console widget and anything else\ncan consume.  If the useBrowserConsole config is true, it will\nwrite to the browser console if available.  YUI-specific log\nmessages will only be present in the -debug versions of the\nJS files.  The build system is supposed to remove log statements\nfrom the raw and minified versions of the files."
     },
     "message": {
      "!type": "fn(msg: string, cat: string, src: string, silent: bool) -> +yui.YUI",
      "!doc": "Write a system message.  This message will be preserved in the\nminified and raw versions of the YUI files, unlike log statements."
     },
     "YUI_config": {
      "!type": "+yui.Object",
      "!doc": "Page-level config applied to all YUI instances created on the\ncurrent page. This is applied after `YUI.GlobalConfig` and before\nany instance-level configuration."
     },
     "applyConfig": {
      "!type": "fn(o: +yui.Object)",
      "!doc": "Applies a new configuration object to the config of this YUI instance. This\nwill merge new group/module definitions, and will also update the loader\ncache if necessary. Updating `Y.config` directly will not update the cache."
     },
     "version": {
      "!type": "string",
      "!doc": "The version number of this YUI instance.\n\nThis value is typically updated by a script when a YUI release is built,\nso it may not reflect the correct version number when YUI is run from\nthe development source tree."
     },
     "applyTo": {
      "!type": "fn(id: string, method: string, args: +yui.Array) -> +Mixed",
      "!doc": "Executes the named method on the specified YUI instance if that method is\nwhitelisted."
     },
     "add": {
      "!type": "fn(name: string, fn: fn(Y: +yui.YUI, name: string), version: string, config?: +yui.Object) -> +yui.YUI",
      "!doc": "Registers a YUI module and makes it available for use in a `YUI().use()` call or\nas a dependency for other modules.\n\nThe easiest way to create a first-class YUI module is to use\n<a href=\"http://yui.github.com/shifter/\">Shifter</a>, the YUI component build\ntool.\n\nShifter will automatically wrap your module code in a `YUI.add()` call along\nwith any configuration info required for the module."
     },
     "use": {
      "!type": "fn(modules: string, callback?: fn(Y: +yui.YUI)) -> !this",
      "!effects": [
       "custom yui_use"
      ],
      "!doc": "Attaches one or more modules to this YUI instance. When this is executed,\nthe requirements of the desired modules are analyzed, and one of several\nthings can happen:\n\n\n  * All required modules have already been loaded, and just need to be\n    attached to this YUI instance. In this case, the `use()` callback will\n    be executed synchronously after the modules are attached.\n\n  * One or more modules have not yet been loaded, or the Get utility is not\n    available, or the `bootstrap` config option is `false`. In this case,\n    a warning is issued indicating that modules are missing, but all\n    available modules will still be attached and the `use()` callback will\n    be executed synchronously.\n\n  * One or more modules are missing and the Loader is not available but the\n    Get utility is, and `bootstrap` is not `false`. In this case, the Get\n    utility will be used to load the Loader, and we will then proceed to\n    the following state:\n\n  * One or more modules are missing and the Loader is available. In this\n    case, the Loader will be used to resolve the dependency tree for the\n    missing modules and load them and their dependencies. When the Loader is\n    finished loading modules, the `use()` callback will be executed\n    asynchronously."
     },
     "require": {
      "!type": "fn(modules?: string, callback: fn())",
      "!doc": "Sugar for loading both legacy and ES6-based YUI modules."
     },
     "namespace": {
      "!type": "fn(namespace: string) -> +yui.Object",
      "!doc": "Utility method for safely creating namespaces if they dont already exist.\nMay be called statically on the YUI global object or as a method on a YUI\ninstance.\n\nWhen called statically, a namespace will be created on the YUI global\nobject:\n\n    // Create `YUI.your.namespace.here` as nested objects, preserving any\n    // objects that already exist instead of overwriting them.\n    YUI.namespace(your.namespace.here);\n\nWhen called as a method on a YUI instance, a namespace will be created on\nthat instance:\n\n    // Creates `Y.property.package`.\n    Y.namespace(property.package);\n\nDots in the input string cause `namespace` to create nested objects for each\ntoken. If any part of the requested namespace already exists, the current\nobject will be left in place and will not be overwritten. This allows\nmultiple calls to `namespace` to preserve existing namespaced properties.\n\nIf the first token in the namespace string is \"YAHOO\", that token is\ndiscarded. This is legacy behavior for backwards compatibility with YUI 2.\n\nBe careful with namespace tokens. Reserved words may work in some browsers\nand not others. For instance, the following will fail in some browsers\nbecause the supported version of JavaScript reserves the word \"long\":\n\n    Y.namespace(really.long.nested.namespace);\n\nNote: If you pass multiple arguments to create multiple namespaces, only the\nlast one created is returned from this function."
     },
     "error": {
      "!type": "fn(msg: string, e?: +Error, src?: string) -> !this",
      "!doc": "Reports an error.\n\nThe reporting mechanism is controlled by the `throwFail` configuration\nattribute. If `throwFail` is falsy, the message is logged. If `throwFail` is\ntruthy, a JS exception is thrown.\n\nIf an `errorFn` is specified in the config it must return `true` to indicate\nthat the exception was handled and keep it from being thrown."
     },
     "guid": {
      "!type": "fn(pre?: string) -> string",
      "!doc": "Generates an id string that is unique among all YUI instances in this\nexecution context."
     },
     "stamp": {
      "!type": "fn(o: +yui.Object, readOnly: bool) -> string",
      "!doc": "Returns a unique id associated with the given object and (if *readOnly* is\nfalsy) stamps the object with that id so it can be identified in the future.\n\nStamping an object involves adding a `_yuid` property to it that contains\nthe objects id. One exception to this is that in Internet Explorer, DOM\nnodes have a `uniqueID` property that contains a browser-generated unique\nid, which will be used instead of a YUI-generated id when available."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Destroys this YUI instance."
     },
     "instanceOf": {
      "!type": "fn(o: +yui.Object, type: +yui.Object)",
      "!doc": "Safe `instanceof` wrapper that works around a memory leak in IE when the\nobject being tested is `window` or `document`.\n\nUnless you are testing objects that may be `window` or `document`, you\nshould use the native `instanceof` operator instead of this method."
     }
    },
    "io": {
     "!type": "fn(url: string, config: +yui.Object) -> +yui.Object",
     "!doc": "Method for initiating an ajax call.  The first argument is the url end\npoint for the call.  The second argument is an object to configure the\ntransaction and attach event subscriptions.  The configuration object\nsupports the following properties:\n\n<dl>\n  <dt>method</dt>\n    <dd>HTTP method verb (e.g., GET or POST). If this property is not\n        not defined, the default value will be GET.</dd>\n\n  <dt>data</dt>\n    <dd>This is the name-value string that will be sent as the\n    transaction data. If the request is HTTP GET, the data become\n    part of querystring. If HTTP POST, the data are sent in the\n    message body.</dd>\n\n  <dt>xdr</dt>\n    <dd>Defines the transport to be used for cross-domain requests.\n    By setting this property, the transaction will use the specified\n    transport instead of XMLHttpRequest. The properties of the\n    transport object are:\n    <dl>\n      <dt>use</dt>\n        <dd>The transport to be used: flash or native</dd>\n      <dt>dataType</dt>\n        <dd>Set the value to XML if that is the expected response\n        content type.</dd>\n    </dl></dd>\n\n  <dt>form</dt>\n    <dd>Form serialization configuration object.  Its properties are:\n    <dl>\n      <dt>id</dt>\n        <dd>Node object or id of HTML form</dd>\n      <dt>useDisabled</dt>\n        <dd>`true` to also serialize disabled form field values\n        (defaults to `false`)</dd>\n    </dl></dd>\n\n  <dt>on</dt>\n    <dd>Assigns transaction event subscriptions. Available events are:\n    <dl>\n      <dt>start</dt>\n        <dd>Fires when a request is sent to a resource.</dd>\n      <dt>complete</dt>\n        <dd>Fires when the transaction is complete.</dd>\n      <dt>success</dt>\n        <dd>Fires when the HTTP response status is within the 2xx\n        range.</dd>\n      <dt>failure</dt>\n        <dd>Fires when the HTTP response status is outside the 2xx\n        range, if an exception occurs, if the transation is aborted,\n        or if the transaction exceeds a configured `timeout`.</dd>\n      <dt>end</dt>\n        <dd>Fires at the conclusion of the transaction\n           lifecycle, after `success` or `failure`.</dd>\n    </dl>\n\n    <p>Callback functions for `start` and `end` receive the id of the\n    transaction as a first argument. For `complete`, `success`, and\n    `failure`, callbacks receive the id and the response object\n    (usually the XMLHttpRequest instance).  If the `arguments`\n    property was included in the configuration object passed to\n    `Y.io()`, the configured data will be passed to all callbacks as\n    the last argument.</p>\n    </dd>\n\n  <dt>sync</dt>\n    <dd>Pass `true` to make a same-domain transaction synchronous.\n    <strong>CAVEAT</strong>: This will negatively impact the user\n    experience. Have a <em>very</em> good reason if you intend to use\n    this.</dd>\n\n  <dt>context</dt>\n    <dd>The \"`this\" object for all configured event handlers. If a\n    specific context is needed for individual callbacks, bind the\n    callback to a context using `Y.bind()`.</dd>\n\n  <dt>headers</dt>\n    <dd>Object map of transaction headers to send to the server. The\n    object keys are the header names and the values are the header\n    values.</dd>\n\n  <dt>timeout</dt>\n    <dd>Millisecond threshold for the transaction before being\n    automatically aborted.</dd>\n\n  <dt>arguments</dt>\n    <dd>User-defined data passed to all registered event handlers.\n    This value is available as the second argument in the \"start\" and\n    \"end\" event handlers. It is the third argument in the \"complete\",\n    \"success\", and \"failure\" event handlers. <strong>Be sure to quote\n    this property name in the transaction configuration as\n    \"arguments\" is a reserved word in JavaScript</strong> (e.g.\n    `Y.io({ ..., \"arguments\": stuff })`).</dd>\n</dl>"
    },
    "header": {
     "!type": "fn(name: string, value: string)",
     "!doc": "Method for setting and deleting IO HTTP headers to be sent with every\nrequest.\n\nHosted as a property on the `io` function (e.g. `Y.io.header`)."
    },
    "jsonp": {
     "!type": "fn(url: string, c: fn(), args: ?) -> +jsonp.JSONPRequest"
    },
    "assert": {
     "!type": "fn(condition: bool, message: string)",
     "!doc": "Asserts that a given condition is true. If not, then a Y.Assert.Error object is thrown\nand the test fails."
    },
    "fail": {
     "!type": "fn(message: string)",
     "!doc": "Forces an assertion error to occur. Shortcut for Y.Assert.fail()."
    },
    "GlobalConfig": {
     "!type": "+yui.Object",
     "!doc": "Master configuration that might span multiple contexts in a non-\nbrowser environment. It is applied first to all instances in all\ncontexts."
    },
    "applyConfig": {
     "!type": "fn(o: +yui.Object)",
     "!doc": "Applies a configuration to all YUI instances in this execution context.\n\nThe main use case for this method is in \"mashups\" where several third-party\nscripts need to write to a global YUI config, but cannot share a single\ncentrally-managed config object. This way they can all call\n`YUI.applyConfig({})` instead of overwriting the single global config."
    },
    "setLoadHook": {
     "!type": "fn(fn: fn(data: string, path: string))",
     "!doc": "Set a method to be called when `Get.script` is called in Node.js\n`Get` will open the file, then pass its content and its path\nto this method before attaching it. Commonly used for code coverage\ninstrumentation. <strong>Calling this multiple times will only\nattach the last hook method</strong>. This method is only\navailable in Node.js."
    }
   },
   "config": {
    "!type": "fn()",
    "prototype": {
     "useHistoryHTML5": {
      "!type": "bool",
      "!doc": "<p>\nIf <code>true</code>, the <code>Y.History</code> alias will always point to\n<code>Y.HistoryHTML5</code> when the history-html5 module is loaded, even if\nthe current browser doesnt support HTML5 history.\n</p>\n\n<p>\nIf <code>false</code>, the <code>Y.History</code> alias will always point to\n<code>Y.HistoryHash</code> when the history-hash module is loaded, even if\nthe current browser supports HTML5 history.\n</p>\n\n<p>\nIf neither <code>true</code> nor <code>false</code>, the\n<code>Y.History</code> alias will point to the best available history adapter\nthat the browser supports. This is the default behavior.\n</p>"
     },
     "bootstrap": {
      "!type": "bool",
      "!doc": "If `true` (the default), YUI will \"bootstrap\" the YUI Loader and module metadata\nif theyre needed to load additional dependencies and arent already available.\n\nSetting this to `false` will prevent YUI from automatically loading the Loader\nand module metadata, so you will need to manually ensure that theyre available\nor handle dependency resolution yourself."
     },
     "debug": {
      "!type": "bool",
      "!doc": "If `true`, `Y.log()` messages will be written to the browsers debug console\nwhen available and when `useBrowserConsole` is also `true`."
     },
     "useBrowserConsole": {
      "!type": "bool",
      "!doc": "Log messages to the browser console if `debug` is `true` and the browser has a\nsupported console."
     },
     "logInclude": {
      "!type": "+object",
      "!doc": "A hash of log sources that should be logged. If specified, only messages from\nthese sources will be logged. Others will be discarded."
     },
     "logExclude": {
      "!type": "+yui.Object",
      "!doc": "A hash of log sources that should be not be logged. If specified, all sources\nwill be logged *except* those on this list."
     },
     "injected": {
      "!type": "bool",
      "!doc": "When the YUI seed file is dynamically loaded after the `window.onload` event has\nfired, set this to `true` to tell YUI that it shouldnt wait for `window.onload`\nto occur.\n\nThis ensures that components that rely on `window.onload` and the `domready`\ncustom event will work as expected even when YUI is dynamically injected."
     },
     "throwFail": {
      "!type": "bool",
      "!doc": "If `true`, `Y.error()` will generate or re-throw a JavaScript error. Otherwise,\nerrors are merely logged silently."
     },
     "global": {
      "!type": "+yui.Object",
      "!doc": "Reference to the global object for this execution context.\n\nIn a browser, this is the current `window` object. In Node.js, this is the\nNode.js `global` object."
     },
     "win": {
      "!type": "+Window",
      "!doc": "The browser window or frame that this YUI instance should operate in.\n\nWhen running in Node.js, this property is `undefined`, since there is no\n`window` object. Use `global` to get a reference to the global object that will\nwork in both browsers and Node.js."
     },
     "doc": {
      "!type": "+Document",
      "!doc": "The browser `document` object associated with this YUI instances `win` object.\n\nWhen running in Node.js, this property is `undefined`, since there is no\n`document` object."
     },
     "core": {
      "!type": "+yui.Array",
      "!doc": "A list of modules that defines the YUI core (overrides the default list)."
     },
     "lang": {
      "!type": "string",
      "!doc": "A list of languages to use in order of preference.\n\nThis list is matched against the list of available languages in modules that the\nYUI instance uses to determine the best possible localization of language\nsensitive modules.\n\nLanguages are represented using BCP 47 language tags, such as \"en-GB\" for\nEnglish as used in the United Kingdom, or \"zh-Hans-CN\" for simplified Chinese as\nused in China. The list may be provided as a comma-separated string or as an\narray."
     },
     "dateFormat": {
      "!type": "string",
      "!doc": "Default date format."
     },
     "locale": {
      "!type": "string",
      "!doc": "Default locale."
     },
     "pollInterval": {
      "!type": "number",
      "!doc": "Default generic polling interval in milliseconds."
     },
     "purgethreshold": {
      "!type": "number",
      "!doc": "The number of dynamic `<script>` nodes to insert by default before automatically\nremoving them when loading scripts.\n\nThis applies only to script nodes because removing the node will not make the\nevaluated script unavailable. Dynamic CSS nodes are not auto purged, because\nremoving a linked style sheet will also remove the style definitions."
     },
     "windowResizeDelay": {
      "!type": "number",
      "!doc": "Delay in milliseconds to wait after a window `resize` event before firing the\nevent. If another `resize` event occurs before this delay has elapsed, the\ndelay will start over to ensure that `resize` events are throttled."
     },
     "base": {
      "!type": "string",
      "!doc": "Base directory for dynamic loading."
     },
     "comboBase": {
      "!type": "string",
      "!doc": "Base URL for a dynamic combo handler. This will be used to make combo-handled\nmodule requests if `combine` is set to `true."
     },
     "root": {
      "!type": "string",
      "!doc": "Root path to prepend to each module path when creating a combo-handled request.\n\nThis is updated for each YUI release to point to a specific version of the\nlibrary; for example: \"3.8.0/build/\"."
     },
     "filter": {
      "!type": "+yui.Object",
      "!doc": "Filter to apply to module urls. This filter will modify the default path for all\nmodules.\n\nThe default path for the YUI library is the minified version of the files (e.g.,\nevent-min.js). The filter property can be a predefined filter or a custom\nfilter. The valid predefined filters are:\n\n  - **debug**: Loads debug versions of modules (e.g., event-debug.js).\n  - **raw**: Loads raw, non-minified versions of modules without debug logging\n    (e.g., event.js).\n\nYou can also define a custom filter, which must be an object literal containing\na search regular expression and a replacement string:\n\n    myFilter: {\n        searchExp : \"-min\\\\.js\",\n        replaceStr: \"-debug.js\"\n    }"
     },
     "skin": {
      "!type": "+yui.Object",
      "!doc": "Skin configuration and customizations."
     },
     "filters": {
      "!type": "+yui.Object",
      "!doc": "Hash of per-component filter specifications. If specified for a given component,\nthis overrides the global `filter` config."
     },
     "combine": {
      "!type": "bool",
      "!doc": "If `true`, YUI will use a combo handler to load multiple modules in as few\nrequests as possible.\n\nThe YUI CDN (which YUI uses by default) supports combo handling, but other\nservers may not. If the server from which youre loading YUI does not support\ncombo handling, set this to `false`.\n\nProviding a value for the `base` config property will cause `combine` to default\nto `false` instead of `true`."
     },
     "ignore": {
      "!type": "[string]",
      "!doc": "Array of module names that should never be dynamically loaded."
     },
     "force": {
      "!type": "[string]",
      "!doc": "Array of module names that should always be loaded when required, even if\nalready present on the page."
     },
     "insertBefore": {
      "!type": "+HTMLElement",
      "!doc": "DOM element or id that should be used as the insertion point for dynamically\nadded `<script>` and `<link>` nodes."
     },
     "jsAttributes": {
      "!type": "+yui.Object",
      "!doc": "Object hash containing attributes to add to dynamically added `<script>` nodes."
     },
     "cssAttributes": {
      "!type": "+yui.Object",
      "!doc": "Object hash containing attributes to add to dynamically added `<link>` nodes."
     },
     "timeout": {
      "!type": "number",
      "!doc": "Timeout in milliseconds before a dynamic JS or CSS request will be considered a\nfailure. If not set, no timeout will be enforced."
     },
     "onCSS": {
      "!type": "fn()",
      "!doc": "Callback for the CSSComplete event. When dynamically loading YUI components\nwith CSS, this property fires when the CSS is finished loading.\n\nThis provides an opportunity to enhance the presentation of a loading page a\nlittle bit before the entire loading process is done."
     },
     "modules": {
      "!type": "+yui.Object",
      "!doc": "A hash of module definitions to add to the list of available YUI modules. These\nmodules can then be dynamically loaded via the `use()` method.\n\nThis is a hash in which keys are module names and values are objects containing\nmodule metadata.\n\nSee `Loader.addModule()` for the supported module metadata fields. Also see\n`groups`, which provides a way to configure the base and combo spec for a set of\nmodules."
     },
     "aliases": {
      "!type": "+yui.Object",
      "!doc": "Aliases are dynamic groups of modules that can be used as shortcuts."
     },
     "groups": {
      "!type": "+yui.Object",
      "!doc": "A hash of module group definitions.\n\nFor each group you can specify a list of modules and the base path and\ncombo spec to use when dynamically loading the modules."
     },
     "loaderPath": {
      "!type": "string",
      "!doc": "Path to the Loader JS file, relative to the `base` path.\n\nThis is used to dynamically bootstrap the Loader when its needed and isnt yet\navailable."
     },
     "fetchCSS": {
      "!type": "bool",
      "!doc": "If `true`, YUI will attempt to load CSS dependencies and skins. Set this to\n`false` to prevent YUI from loading any CSS, or set it to the string `\"force\"`\nto force CSS dependencies to be loaded even if their associated JS modules are\nalready loaded."
     },
     "gallery": {
      "!type": "string",
      "!doc": "Default gallery version used to build gallery module urls."
     },
     "yui2": {
      "!type": "string",
      "!doc": "Default YUI 2 version used to build YUI 2 module urls.\n\nThis is used for intrinsic YUI 2 support via the 2in3 project. Also see the\n`2in3` config for pulling different revisions of the wrapped YUI 2 modules."
     },
     "2in3": {
      "!type": "string",
      "!doc": "Revision number of YUI 2in3 modules that should be used when loading YUI 2in3."
     },
     "logFn": {
      "!type": "fn()",
      "!doc": "Alternate console log function that should be used in environments without a\nsupported native console. This function is executed with the YUI instance as its\n`this` object."
     },
     "logLevel": {
      "!type": "string",
      "!doc": "The minimum log level to log messages for. Log levels are defined\nincrementally. Messages greater than or equal to the level specified will\nbe shown. All others will be discarded. The order of log levels in\nincreasing priority is:\n\n    debug\n    info\n    warn\n    error"
     },
     "errorFn": {
      "!type": "fn()",
      "!doc": "Callback to execute when `Y.error()` is called. It receives the error message\nand a JavaScript error object if one was provided.\n\nThis function is executed with the YUI instance as its `this` object.\n\nReturning `true` from this function will prevent an exception from being thrown."
     },
     "loadErrorFn": {
      "!type": "fn()",
      "!doc": "A callback to execute when Loader fails to load one or more resources.\n\nThis could be because of a script load failure. It could also be because a\nmodule fails to register itself when the `requireRegistration` config is `true`.\n\nIf this function is defined, the `use()` callback will only be called when the\nloader succeeds. Otherwise, `use()` will always executes unless there was a\nJavaScript error when attaching a module."
     },
     "requireRegistration": {
      "!type": "bool",
      "!doc": "If `true`, Loader will expect all loaded scripts to be first-class YUI modules\nthat register themselves with the YUI global, and will trigger a failure if a\nloaded script does not register a YUI module."
     },
     "cacheUse": {
      "!type": "bool",
      "!doc": "Cache serviced use() requests."
     },
     "useNativeES5": {
      "!type": "bool",
      "!doc": "Whether or not YUI should use native ES5 functionality when available for\nfeatures like `Y.Array.each()`, `Y.Object()`, etc.\n\nWhen `false`, YUI will always use its own fallback implementations instead of\nrelying on ES5 functionality, even when ES5 functionality is available."
     },
     "useNativeJSONStringify": {
      "!type": "bool",
      "!doc": "Leverage native JSON stringify if the browser has a native\nimplementation.  In general, this is a good idea.  See the Known Issues\nsection in the JSON user guide for caveats.  The default value is true\nfor browsers with native JSON support."
     },
     "useNativeJSONParse": {
      "!type": "bool",
      "!doc": "Leverage native JSON parse if the browser has a native implementation.\nIn general, this is a good idea.  See the Known Issues section in the\nJSON user guide for caveats.  The default value is true for browsers with\nnative JSON support."
     },
     "delayUntil": {
      "!type": "+yui.Object",
      "!doc": "Delay the `use` callback until a specific event has passed (`load`, `domready`, `contentready` or `available`)"
     }
    }
   },
   "Queue": {
    "!type": "fn(item: +MIXED) -> +yui.Queue",
    "prototype": {
     "indexOf": {
      "!type": "fn(needle: +MIXED) -> number",
      "!doc": "Returns the current index in the queue of the specified item"
     },
     "promote": {
      "!type": "fn(item: +MIXED)",
      "!doc": "Moves the referenced item to the head of the queue"
     },
     "remove": {
      "!type": "fn(item: +MIXED)",
      "!doc": "Removes the referenced item from the queue"
     },
     "next": {
      "!type": "fn() -> +MIXED",
      "!doc": "Get the next item in the queue. FIFO support"
     },
     "last": {
      "!type": "fn() -> +MIXED",
      "!doc": "Get the last in the queue. LIFO support."
     },
     "add": {
      "!type": "fn(item: +MIXED) -> +yui.Object",
      "!doc": "Add 0..n items to the end of the queue."
     },
     "size": {
      "!type": "fn() -> number",
      "!doc": "Returns the current number of queued items."
     }
    }
   },
   "Lang": {
    "!type": "fn()",
    "isArray": {
     "!type": "fn(o: ?) -> bool",
     "!doc": "Determines whether or not the provided item is an array.\n\nReturns `false` for array-like collections such as the function `arguments`\ncollection or `HTMLElement` collections. Use `Y.Array.test()` if you want to\ntest for an array-like collection."
    },
    "isBoolean": {
     "!type": "fn(o: ?) -> bool",
     "!doc": "Determines whether or not the provided item is a boolean."
    },
    "isDate": {
     "!type": "fn(o: ?) -> bool",
     "!doc": "Determines whether or not the supplied item is a date instance."
    },
    "isFunction": {
     "!type": "fn(o: ?) -> bool",
     "!doc": "<p>\nDetermines whether or not the provided item is a function.\nNote: Internet Explorer thinks certain functions are objects:\n</p>\n\n<pre>\nvar obj = document.createElement(\"object\");\nY.Lang.isFunction(obj.getAttribute) // reports false in IE\n&nbsp;\nvar input = document.createElement(\"input\"); // append to body\nY.Lang.isFunction(input.focus) // reports false in IE\n</pre>\n\n<p>\nYou will have to implement additional tests if these functions\nmatter to you.\n</p>"
    },
    "isNull": {
     "!type": "fn(o: ?) -> bool",
     "!doc": "Determines whether or not the provided item is null."
    },
    "isNumber": {
     "!type": "fn(o: ?) -> bool",
     "!doc": "Determines whether or not the provided item is a legal number."
    },
    "isObject": {
     "!type": "fn(o: ?, failfn: bool) -> bool",
     "!doc": "Determines whether or not the provided item is of type object\nor function. Note that arrays are also objects, so\n<code>Y.Lang.isObject([]) === true</code>."
    },
    "isRegExp": {
     "!type": "fn(value: ?) -> bool",
     "!doc": "Determines whether or not the provided value is a regexp."
    },
    "isString": {
     "!type": "fn(o: ?) -> bool",
     "!doc": "Determines whether or not the provided item is a string."
    },
    "isUndefined": {
     "!type": "fn(o: ?) -> bool",
     "!doc": "Determines whether or not the provided item is undefined."
    },
    "isValue": {
     "!type": "fn(o: ?) -> bool",
     "!doc": "A convenience method for detecting a legitimate non-null value.\nReturns false for null/undefined/NaN, true for other values,\nincluding 0/false/"
    },
    "now": {
     "!type": "fn() -> number",
     "!doc": "Returns the current time in milliseconds."
    },
    "sub": {
     "!type": "fn(s: string, o: +yui.Object) -> string",
     "!doc": "Performs `{placeholder}` substitution on a string. The object passed as the \nsecond parameter provides values to replace the `{placeholder}`s.\n`{placeholder}` token names must match property names of the object. For example,\n\n`var greeting = Y.Lang.sub(\"Hello, {who}!\", { who: \"World\" });`\n\n`{placeholder}` tokens that are undefined on the object map will be left \nin tact (leaving unsightly `{placeholder}`s in the output string)."
    },
    "trim": {
     "!type": "fn(s: string) -> string",
     "!doc": "Returns a string without any leading or trailing whitespace.  If\nthe input is not a string, the input will be returned untouched."
    },
    "trimLeft": {
     "!type": "fn(s: string) -> string",
     "!doc": "Returns a string without any leading whitespace."
    },
    "trimRight": {
     "!type": "fn(s: string) -> string",
     "!doc": "Returns a string without any trailing whitespace."
    },
    "type": {
     "!type": "fn(o: ?) -> string",
     "!doc": "Returns one of the following strings, representing the type of the item passed\nin:\n\n * \"array\"\n * \"boolean\"\n * \"date\"\n * \"error\"\n * \"function\"\n * \"null\"\n * \"number\"\n * \"object\"\n * \"regexp\"\n * \"string\"\n * \"undefined\"\n\nKnown issues:\n\n * `typeof HTMLElementCollection` returns function in Safari, but\n    `Y.Lang.type()` reports \"object\", which could be a good thing --\n    but it actually caused the logic in <code>Y.Lang.isObject</code> to fail."
    }
   },
   "Object": {
    "!type": "fn()",
    "()": {
     "!type": "fn(obj: +yui.Object) -> +yui.Object",
     "!doc": "Returns a new object that uses _obj_ as its prototype. This method wraps the\nnative ES5 `Object.create()` method if available, but doesnt currently\npass through `Object.create()`s second argument (properties) in order to\nensure compatibility with older browsers."
    },
    "owns": {
     "!type": "fn(obj: +yui.Object, key: string) -> bool",
     "!doc": "Returns `true` if _key_ exists on _obj_, `false` if _key_ doesnt exist or\nexists only on _obj_s prototype. This is essentially a safer version of\n`obj.hasOwnProperty()`."
    },
    "hasKey": {
     "!type": "fn(obj: +yui.Object, key: string) -> bool",
     "!doc": "Alias for `owns()`."
    },
    "keys": {
     "!type": "fn(obj: +yui.Object) -> [string]",
     "!doc": "Returns an array containing the objects enumerable keys. Does not include\nprototype keys or non-enumerable keys.\n\nNote that keys are returned in enumeration order (that is, in the same order\nthat they would be enumerated by a `for-in` loop), which may not be the same\nas the order in which they were defined.\n\nThis method is an alias for the native ES5 `Object.keys()` method if\navailable and non-buggy. The Opera 11.50 and Android 2.3.x versions of\n`Object.keys()` have an inconsistency as they consider `prototype` to be\nenumerable, so a non-native shim is used to rectify the difference."
    },
    "values": {
     "!type": "fn(obj: +yui.Object) -> +yui.Array",
     "!doc": "Returns an array containing the values of the objects enumerable keys.\n\nNote that values are returned in enumeration order (that is, in the same\norder that they would be enumerated by a `for-in` loop), which may not be the\nsame as the order in which they were defined."
    },
    "size": {
     "!type": "fn(obj: +yui.Object) -> number",
     "!doc": "Returns the number of enumerable keys owned by an object."
    },
    "hasValue": {
     "!type": "fn(obj: +yui.Object, value: ?) -> bool",
     "!doc": "Returns `true` if the object owns an enumerable property with the specified\nvalue."
    },
    "each": {
     "!type": "fn(obj: +yui.Object, fn: fn(value: +Mixed, key: string, obj: +yui.Object), thisObj?: +yui.Object, proto?: bool) -> !this",
     "!doc": "Executes a function on each enumerable property in _obj_. The function\nreceives the value, the key, and the object itself as parameters (in that\norder).\n\nBy default, only properties owned by _obj_ are enumerated. To include\nprototype properties, set the _proto_ parameter to `true`."
    },
    "some": {
     "!type": "fn(obj: +yui.Object, fn: fn(value: +Mixed, key: string, obj: +yui.Object), thisObj?: +yui.Object, proto?: bool) -> bool",
     "!doc": "Executes a function on each enumerable property in _obj_, but halts if the\nfunction returns a truthy value. The function receives the value, the key,\nand the object itself as paramters (in that order).\n\nBy default, only properties owned by _obj_ are enumerated. To include\nprototype properties, set the _proto_ parameter to `true`."
    },
    "getValue": {
     "!type": "fn(o: ?, path: +yui.Array) -> ?",
     "!doc": "Retrieves the sub value at the provided path,\nfrom the value object provided."
    },
    "setValue": {
     "!type": "fn(o: ?, path: +yui.Array, val: ?) -> +yui.Object",
     "!doc": "Sets the sub-attribute value at the provided path on the\nvalue object.  Returns the modified value object, or\nundefined if the path is invalid."
    },
    "isEmpty": {
     "!type": "fn(obj: +yui.Object) -> bool",
     "!doc": "Returns `true` if the object has no enumerable properties of its own."
    }
   },
   "UA": {
    "!type": "fn()",
    "parseUA": {
     "!type": "fn(subUA?: string) -> +yui.Object",
     "!doc": "Static method on `YUI.Env` for parsing a UA string.  Called at instantiation\nto populate `Y.UA`."
    },
    "ie": {
     "!type": "number",
     "!doc": "Internet Explorer version number or 0.  Example: 6"
    },
    "opera": {
     "!type": "number",
     "!doc": "Opera version number or 0.  Example: 9.2"
    },
    "gecko": {
     "!type": "number",
     "!doc": "Gecko engine revision number.  Will evaluate to 1 if Gecko\nis detected but the revision could not be found. Other browsers\nwill be 0.  Example: 1.8\n<pre>\nFirefox 1.0.0.4: 1.7.8   <-- Reports 1.7\nFirefox 1.5.0.9: 1.8.0.9 <-- 1.8\nFirefox 2.0.0.3: 1.8.1.3 <-- 1.81\nFirefox 3.0   <-- 1.9\nFirefox 3.5   <-- 1.91\n</pre>"
    },
    "webkit": {
     "!type": "number",
     "!doc": "AppleWebKit version.  KHTML browsers that are not WebKit browsers\nwill evaluate to 1, other browsers 0.  Example: 418.9\n<pre>\nSafari 1.3.2 (312.6): 312.8.1 <-- Reports 312.8 -- currently the\n                                  latest available for Mac OSX 10.3.\nSafari 2.0.2:         416     <-- hasOwnProperty introduced\nSafari 2.0.4:         418     <-- preventDefault fixed\nSafari 2.0.4 (419.3): 418.9.1 <-- One version of Safari may run\n                                  different versions of webkit\nSafari 2.0.4 (419.3): 419     <-- Tiger installations that have been\n                                  updated, but not updated\n                                  to the latest patch.\nWebkit 212 nightly:   522+    <-- Safari 3.0 precursor (with native\nSVG and many major issues fixed).\nSafari 3.0.4 (523.12) 523.12  <-- First Tiger release - automatic\nupdate from 2.x via the 10.4.11 OS patch.\nWebkit nightly 1/2008:525+    <-- Supports DOMContentLoaded event.\n                                  yahoo.com user agent hack removed.\n</pre>\nhttp://en.wikipedia.org/wiki/Safari_version_history"
    },
    "safari": {
     "!type": "number",
     "!doc": "Safari will be detected as webkit, but this property will also\nbe populated with the Safari version number"
    },
    "chrome": {
     "!type": "number",
     "!doc": "Chrome will be detected as webkit, but this property will also\nbe populated with the Chrome version number"
    },
    "mobile": {
     "!type": "string",
     "!doc": "The mobile property will be set to a string containing any relevant\nuser agent information when a modern mobile browser is detected.\nCurrently limited to Safari on the iPhone/iPod Touch, Nokia N-series\ndevices with the WebKit-based browser, and Opera Mini."
    },
    "prototype": {
     "air": {
      "!type": "number",
      "!doc": "Adobe AIR version number or 0.  Only populated if webkit is detected.\nExample: 1.0"
     },
     "phantomjs": {
      "!type": "number",
      "!doc": "PhantomJS version number or 0.  Only populated if webkit is detected.\nExample: 1.0"
     },
     "caja": {
      "!type": "number",
      "!doc": "Google Caja version number or 0."
     },
     "compareVersions": {
      "!type": "fn(a: number, b: number) -> ?",
      "!doc": "Performs a simple comparison between two version numbers, accounting for\nstandard versioning logic such as the fact that \"535.8\" is a lower version than\n\"535.24\", even though a simple numerical comparison would indicate that its\ngreater. Also accounts for cases such as \"1.1\" vs. \"1.1.0\", which are\nconsidered equivalent.\n\nReturns -1 if version _a_ is lower than version _b_, 0 if theyre equivalent,\n1 if _a_ is higher than _b_.\n\nVersions may be numbers or strings containing numbers and dots. For example,\nboth `535` and `\"535.8.10\"` are acceptable. A version string containing\nnon-numeric characters, like `\"535.8.beta\"`, may produce unexpected results."
     }
    },
    "ipad": {
     "!type": "number",
     "!doc": "Detects Apple iPads OS version"
    },
    "iphone": {
     "!type": "number",
     "!doc": "Detects Apple iPhones OS version"
    },
    "ipod": {
     "!type": "number",
     "!doc": "Detects Apples iPods OS version"
    },
    "ios": {
     "!type": "bool",
     "!doc": "General truthy check for iPad, iPhone or iPod"
    },
    "android": {
     "!type": "number",
     "!doc": "Detects Googles Android OS version"
    },
    "silk": {
     "!type": "number",
     "!doc": "Detects Kindle Silk"
    },
    "accel": {
     "!type": "bool",
     "!doc": "Detects Kindle Silk Acceleration"
    },
    "webos": {
     "!type": "number",
     "!doc": "Detects Palms WebOS version"
    },
    "secure": {
     "!type": "bool",
     "!doc": "Set to true if the page appears to be in SSL"
    },
    "os": {
     "!type": "string",
     "!doc": "The operating system.  Currently only detecting windows or macintosh"
    },
    "nodejs": {
     "!type": "number",
     "!doc": "The Nodejs Version"
    },
    "winjs": {
     "!type": "bool",
     "!doc": "Window8/IE10 Application host environment"
    },
    "touchEnabled": {
     "!type": "bool",
     "!doc": "Are touch/msPointer events available on this device"
    },
    "userAgent": {
     "!type": "string",
     "!doc": "The User Agent string that was parsed"
    }
   }
  },
  "collection": {
   "ArrayList": {
    "!type": "fn(items: +yui.Array) -> +collection.ArrayList",
    "prototype": {
     "add": {
      "!type": "fn(item: +Mixed, index: number) -> !this",
      "!doc": "Add a single item to the ArrayList.  Does not prevent duplicates."
     },
     "remove": {
      "!type": "fn(needle: +Mixed, all: bool, comparator: fn()) -> !this",
      "!doc": "Removes first or all occurrences of an item to the ArrayList.  If a\ncomparator is not provided, uses itemsAreEqual method to determine\nmatches."
     },
     "itemsAreEqual": {
      "!type": "fn(a: +Mixed, b: +Mixed) -> bool",
      "!doc": "Default comparator for items stored in this list.  Used by remove()."
     },
     "filter": {
      "!type": "fn(validator: fn()) -> +collection.ArrayList",
      "!doc": "<p>Create a new ArrayList (or augmenting class instance) from a subset\nof items as determined by the boolean function passed as the\nargument.  The original ArrayList is unchanged.</p>\n\n<p>The validator signature is <code>validator( item )</code>.</p>"
     },
     "item": {
      "!type": "fn(i: +Integer) -> +Mixed",
      "!doc": "Get an item by index from the list.  Override this method if managing a\nlist of objects that have a different public representation (e.g. Node\ninstances vs DOM nodes).  The iteration methods that accept a user\nfunction will use this method for access list items for operation."
     },
     "each": {
      "!type": "fn(fn: fn(), context: +Mixed) -> !this",
      "!doc": "<p>Execute a function on each item of the list, optionally providing a\ncustom execution context.  Default context is the item.</p>\n\n<p>The callback signature is <code>callback( item, index )</code>.</p>"
     },
     "some": {
      "!type": "fn(fn: fn(), context: +Mixed) -> bool",
      "!doc": "<p>Execute a function on each item of the list, optionally providing a\ncustom execution context.  Default context is the item.</p>\n\n<p>The callback signature is <code>callback( item, index )</code>.</p>\n\n<p>Unlike <code>each</code>, if the callback returns true, the\niteration will stop.</p>"
     },
     "indexOf": {
      "!type": "fn(needle: +Mixed) -> +Integer",
      "!doc": "Finds the first index of the needle in the managed array of items."
     },
     "size": {
      "!type": "fn() -> +Integer",
      "!doc": "How many items are in this list?"
     },
     "isEmpty": {
      "!type": "fn() -> bool",
      "!doc": "Is this instance managing any items?"
     },
     "toJSON": {
      "!type": "fn() -> +yui.Array",
      "!doc": "Provides an array-like representation for JSON.stringify."
     }
    },
    "addMethod": {
     "!type": "fn(dest: +yui.Object, name: string)",
     "!doc": "<p>Adds a pass through method to dest (typically the prototype of a list\nclass) that calls the named method on each item in the list with\nwhatever parameters are passed in.  Allows for API indirection via list\ninstances.</p>\n\n<p>Accepts a single string name or an array of string names.</p>\n\n<pre><code>list.each( function ( item ) {\n    item.methodName( 1, 2, 3 );\n} );\n// becomes\nlist.methodName( 1, 2, 3 );</code></pre>\n\n<p>Additionally, the pass through methods use the item retrieved by the\n<code>_item</code> method in case there is any special behavior that is\nappropriate for API mirroring.</p>\n\n<p>If the iterated method returns a value, the return value from the\nadded method will be an array of values with each value being at the\ncorresponding index for that item.  If the iterated method does not\nreturn a value, the added method will be chainable."
    }
   }
  },
  "color": {
   "Color": {
    "!type": "fn()",
    "KEYWORDS": {
     "!type": "+yui.Object"
    },
    "REGEX_HEX": {
     "!type": "+RegExp",
     "!doc": "NOTE: `(\\ufffe)?` is added to the Regular Expression to carve out a\nplace for the alpha channel that is returned from toArray\nwithout compromising any usage of the Regular Expression"
    },
    "REGEX_HEX3": {
     "!type": "+RegExp",
     "!doc": "NOTE: `(\\ufffe)?` is added to the Regular Expression to carve out a\nplace for the alpha channel that is returned from toArray\nwithout compromising any usage of the Regular Expression"
    },
    "REGEX_RGB": {
     "!type": "+RegExp"
    },
    "STR_HEX": {
     "!type": "string"
    },
    "STR_RGB": {
     "!type": "string"
    },
    "STR_RGBA": {
     "!type": "string"
    },
    "TYPES": {
     "!type": "+yui.Object"
    },
    "CONVERTS": {
     "!type": "+yui.Object"
    },
    "prototype": {
     "convert": {
      "!type": "fn(str: string, to: string) -> string",
      "!doc": "Converts the provided string to the provided type.\nYou can use the `Y.Color.TYPES` to get a valid `to` type.\nIf the color cannot be converted, the original color will be returned."
     },
     "toHex": {
      "!type": "fn(str: string) -> string",
      "!doc": "Converts provided color value to a hex value string"
     },
     "toRGB": {
      "!type": "fn(str: string) -> string",
      "!doc": "Converts provided color value to an RGB value string"
     },
     "toRGBA": {
      "!type": "fn(str: string) -> string",
      "!doc": "Converts provided color value to an RGB value string"
     },
     "toArray": {
      "!type": "fn(str: string) -> +yui.Array",
      "!doc": "Converts the provided color string to an array of values where the\n    last value is the alpha value. Will return an empty array if\n    the provided string is not able to be parsed.\n\n    NOTE: `(\\ufffe)?` is added to `HEX` and `HEX3` Regular Expressions to\n    carve out a place for the alpha channel that is returned from\n    toArray without compromising any usage of the Regular Expression\n\n    Y.Color.toArray(fff);              // [ff, ff, ff, 1]\n    Y.Color.toArray(rgb(0, 0, 0));     // [0, 0, 0, 1]\n    Y.Color.toArray(rgba(0, 0, 0, 0)); // [0, 0, 0, 1]"
     },
     "fromArray": {
      "!type": "fn(arr: +yui.Array, template: string) -> string",
      "!doc": "Converts the array of values to a string based on the provided template."
     },
     "findType": {
      "!type": "fn(str: string) -> string",
      "!doc": "Finds the value type based on the str value provided."
     }
    },
    "Harmony": {
     "!type": "fn()",
     "prototype": {
      "getComplementary": {
       "!type": "fn(str: string, to?: string) -> +yui.Array",
       "!doc": "Returns an Array of two colors. The first color in the Array\n  will be the color passed in. The second will be the\n  complementary color of the color provided"
      },
      "getSplit": {
       "!type": "fn(str: string, offset?: number, to?: string) -> string",
       "!doc": "Returns an Array of three colors. The first color in the Array\n  will be the color passed in. The second two will be split\n  complementary colors."
      },
      "getAnalogous": {
       "!type": "fn(str: string, offset?: number, to?: string) -> string",
       "!doc": "Returns an Array of five colors. The first color in the Array\n  will be the color passed in. The remaining four will be\n  analogous colors two in either direction from the initially\n  provided color."
      },
      "getTriad": {
       "!type": "fn(str: string, to?: string) -> string",
       "!doc": "Returns an Array of three colors. The first color in the Array\n  will be the color passed in. The second two will be equidistant\n  from the start color and each other."
      },
      "getTetrad": {
       "!type": "fn(str: string, offset?: number, to?: string) -> string",
       "!doc": "Returns an Array of four colors. The first color in the Array\n  will be the color passed in. The remaining three colors are\n  equidistant offsets from the starting color and each other."
      },
      "getSquare": {
       "!type": "fn(str: string, to?: string) -> string",
       "!doc": "Returns an Array of four colors. The first color in the Array\n  will be the color passed in. The remaining three colors are\n  equidistant offsets from the starting color and each other."
      },
      "getMonochrome": {
       "!type": "fn(str: string, count?: number, to?: string) -> string",
       "!doc": "Calculates lightness offsets resulting in a monochromatic Array\n  of values."
      },
      "getSimilar": {
       "!type": "fn(str: string, offset?: number, count?: number, to?: string) -> string",
       "!doc": "Creates an Array of similar colors. Returned Array is prepended\n   with the color provided followed a number of colors decided\n   by count"
      },
      "getOffset": {
       "!type": "fn(str: string, adjust: +yui.Object, to?: string) -> string",
       "!doc": "Adjusts the provided color by the offset(s) given. You may\n  adjust hue, saturation, and/or luminance in one step."
      },
      "getBrightness": {
       "!type": "fn(str: string) -> number",
       "!doc": "Returns 0 - 100 percentage of brightness from `0` (black) being the\n  darkest to `100` (white) being the brightest."
      },
      "getSimilarBrightness": {
       "!type": "fn(str: string, match: string, to?: string) -> string",
       "!doc": "Returns a new color value with adjusted luminance so that the\n  brightness of the return color matches the perceived brightness\n  of the `match` color provided."
      }
     }
    },
    "HSL": {
     "!type": "fn()",
     "REGEX_HSL": {
      "!type": "+RegExp"
     },
     "STR_HSL": {
      "!type": "string"
     },
     "STR_HSLA": {
      "!type": "string"
     },
     "prototype": {
      "toHSL": {
       "!type": "fn(str: string) -> string",
       "!doc": "Converts provided color value to an HSL string."
      },
      "toHSLA": {
       "!type": "fn(str: string) -> string",
       "!doc": "Converts provided color value to an HSLA string."
      }
     }
    },
    "HSV": {
     "!type": "fn()",
     "REGEX_HSV": {
      "!type": "+RegExp"
     },
     "STR_HSV": {
      "!type": "string"
     },
     "STR_HSVA": {
      "!type": "string"
     },
     "prototype": {
      "toHSV": {
       "!type": "fn(str: string) -> string",
       "!doc": "Converts provided color value to an HSV string."
      },
      "toHSVA": {
       "!type": "fn(str: string) -> string",
       "!doc": "Converts provided color value to an HSVA string."
      }
     }
    }
   }
  },
  "console_filters": {
   "Plugin": {
    "ConsoleFilters": {
     "!type": "fn()",
     "prototype": {
      "syncUI": {
       "!type": "fn()",
       "!doc": "Updates the UI to be in accordance with the current state of the plugin."
      },
      "refreshConsole": {
       "!type": "fn()",
       "!doc": "Repopulates the Console with entries appropriate to the current filter\nsettings."
      },
      "hideCategory": {
       "!type": "fn(cat: string)",
       "!doc": "Hides any number of categories from the UI.  Convenience method for\nmyConsole.filter.set(category.foo, false); set(category.bar, false);\nand so on."
      },
      "showCategory": {
       "!type": "fn(cat: string)",
       "!doc": "Shows any number of categories in the UI.  Convenience method for\nmyConsole.filter.set(category.foo, true); set(category.bar, true);\nand so on."
      },
      "hideSource": {
       "!type": "fn(src: string)",
       "!doc": "Hides any number of sources from the UI.  Convenience method for\nmyConsole.filter.set(source.foo, false); set(source.bar, false);\nand so on."
      },
      "showSource": {
       "!type": "fn(src: string)",
       "!doc": "Shows any number of sources in the UI.  Convenience method for\nmyConsole.filter.set(source.foo, true); set(source.bar, true);\nand so on."
      },
      "defaultVisibility": {
       "!type": "bool",
       "!doc": "Default visibility applied to new categories and sources."
      },
      "category": {
       "!type": "+yui.Object",
       "!doc": "<p>Map of entry categories to their visibility status.  Update a\nparticular categorys visibility by setting the subattribute to true\n(visible) or false (hidden).</p>\n\n<p>For example, yconsole.filter.set(category.info, false) to hide\nlog entries with the category/logLevel of info.</p>\n\n<p>Similarly, yconsole.filter.get(category.warn) will return a\nboolean indicating whether that category is currently being included\nin the UI.</p>\n\n<p>Unlike the YUI instance configurations logInclude and logExclude\nproperties, filtered entries are only hidden from the UI, but\ncan be made visible again.</p>"
      },
      "source": {
       "!type": "+yui.Object",
       "!doc": "<p>Map of entry sources to their visibility status.  Update a\nparticular sourcess visibility by setting the subattribute to true\n(visible) or false (hidden).</p>\n\n<p>For example, yconsole.filter.set(sources.slider, false) to hide\nlog entries originating from Y.Slider.</p>"
      },
      "cacheLimit": {
       "!type": "number",
       "!doc": "Maximum number of entries to store in the message cache.  Use this to\nlimit the memory footprint in environments with heavy log usage.\nBy default, there is no limit (Number.POSITIVE_INFINITY)."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Plugin name."
     },
     "NS": {
      "!type": "string",
      "!doc": "The namespace hung off the host object that this plugin will inhabit."
     },
     "CATEGORIES_TEMPLATE": {
      "!type": "string",
      "!doc": "Markup template used to create the container for the category filters."
     },
     "SOURCES_TEMPLATE": {
      "!type": "string",
      "!doc": "Markup template used to create the container for the source filters."
     },
     "FILTER_TEMPLATE": {
      "!type": "string",
      "!doc": "Markup template used to create the category and source filter checkboxes."
     }
    }
   }
  },
  "console": {
   "Console": {
    "!type": "fn(config?: +yui.Object) -> +console.Console",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "log": {
      "!type": "fn(arg: +MIXED) -> !this",
      "!doc": "Wrapper for <code>Y.log</code>."
     },
     "clearConsole": {
      "!type": "fn() -> !this",
      "!doc": "Clear the console of messages and flush the buffer of pending messages."
     },
     "reset": {
      "!type": "fn() -> !this",
      "!doc": "Clears the console and resets internal timers."
     },
     "collapse": {
      "!type": "fn() -> !this",
      "!doc": "Collapses the body and footer."
     },
     "expand": {
      "!type": "fn() -> !this",
      "!doc": "Expands the body and footer if collapsed."
     },
     "printBuffer": {
      "!type": "fn(limit: number) -> !this",
      "!doc": "Outputs buffered messages to the console UI.  This is typically called\nfrom a scheduled interval until the buffer is empty (referred to as the\nprint loop).  The number of buffered messages output to the Console is\nlimited to the number provided as an argument.  If no limit is passed,\nall buffered messages are rendered."
     },
     "syncUI": {
      "!type": "fn()",
      "!doc": "Sync the UI state to the current attribute state."
     },
     "scrollToLatest": {
      "!type": "fn() -> !this",
      "!doc": "Scrolls to the most recent entry"
     },
     "logEvent": {
      "!type": "string",
      "!doc": "Name of the custom event that will communicate log messages."
     },
     "logSource": {
      "!type": "+event_custom.EventTarget",
      "!doc": "Object that will emit the log events.  By default the YUI instance.\nTo have a single Console capture events from all YUI instances, set\nthis to the Y.Global object."
     },
     "strings": {
      "!type": "+yui.Object",
      "!doc": "Collection of strings used to label elements in the Console UI.\nDefault collection contains the following name:value pairs:\n\n<ul>\n  <li>title : &quot;Log Console&quot;</li>\n  <li>pause : &quot;Pause&quot;</li>\n  <li>clear : &quot;Clear&quot;</li>\n  <li>collapse : &quot;Collapse&quot;</li>\n  <li>expand : &quot;Expand&quot;</li>\n</ul>"
     },
     "paused": {
      "!type": "bool",
      "!doc": "Boolean to pause the outputting of new messages to the console.\nWhen paused, messages will accumulate in the buffer."
     },
     "defaultCategory": {
      "!type": "string",
      "!doc": "If a category is not specified in the Y.log(..) statement, this\ncategory will be used. Categories &quot;info&quot;,\n&quot;warn&quot;, and &quot;error&quot; are also called log level."
     },
     "defaultSource": {
      "!type": "string",
      "!doc": "If a source is not specified in the Y.log(..) statement, this\nsource will be used."
     },
     "entryTemplate": {
      "!type": "string",
      "!doc": "Markup template used to create the DOM structure for Console entries."
     },
     "logLevel": {
      "!type": "string",
      "!doc": "Minimum entry log level to render into the Console.  The initial\nlogLevel value for all Console instances defaults from the\nY.config.logLevel YUI configuration, or Console.LOG_LEVEL_INFO if\nthat configuration is not set.\n\nPossible values are &quot;info&quot;, &quot;warn&quot;,\n&quot;error&quot; (case insensitive), or their corresponding statics\nConsole.LOG_LEVEL_INFO and so on."
     },
     "printTimeout": {
      "!type": "number",
      "!doc": "Millisecond timeout between iterations of the print loop, moving\nentries from the buffer to the UI."
     },
     "printLimit": {
      "!type": "number",
      "!doc": "Maximum number of entries printed in each iteration of the print\nloop. This is used to prevent excessive logging locking the page UI."
     },
     "consoleLimit": {
      "!type": "number",
      "!doc": "Maximum number of Console entries allowed in the Console body at one\ntime.  This is used to keep acquired messages from exploding the\nDOM tree and impacting page performance."
     },
     "newestOnTop": {
      "!type": "bool",
      "!doc": "New entries should display at the top of the Console or the bottom?"
     },
     "scrollIntoView": {
      "!type": "bool",
      "!doc": "When new entries are added to the Console UI, should they be\nscrolled into view?"
     },
     "startTime": {
      "!type": "+datatype_date.Date",
      "!doc": "The baseline time for this Console instance, used to measure elapsed\ntime from the moment the console module is <code>use</code>d to the\nmoment each new entry is logged (not rendered).\n\nThis value is reset by the instance method myConsole.reset()."
     },
     "lastTime": {
      "!type": "+datatype_date.Date",
      "!doc": "The precise time the last entry was logged.  Used to measure elapsed\ntime between log messages."
     },
     "collapsed": {
      "!type": "bool",
      "!doc": "Controls the collapsed state of the Console"
     },
     "height": {
      "!type": "string",
      "!doc": "String with units, or number, representing the height of the Console,\ninclusive of header and footer. If a number is provided, the default\nunit, defined by Widgets DEF_UNIT, property is used."
     },
     "width": {
      "!type": "string",
      "!doc": "String with units, or number, representing the width of the Console.\nIf a number is provided, the default unit, defined by Widgets\nDEF_UNIT, property is used."
     },
     "useBrowserConsole": {
      "!type": "bool",
      "!doc": "Pass through to the YUI instance useBrowserConsole configuration.\nBy default this is set to false, which will disable logging to the\nbrowser console when a Console instance is created.  If the\nlogSource is not a YUI instance, this has no effect."
     },
     "style": {
      "!type": "string",
      "!doc": "Allows the Console to flow in the document.  Available values are\ninline, block, and separate (the default)."
     }
    },
    "NAME": {
     "!type": "string",
     "!doc": "The identity of the widget."
    },
    "LOG_LEVEL_INFO": {
     "!type": "string",
     "!doc": "Static identifier for logLevel configuration setting to allow all\nincoming messages to generate Console entries."
    },
    "LOG_LEVEL_WARN": {
     "!type": "string",
     "!doc": "Static identifier for logLevel configuration setting to allow only\nincoming messages of logLevel &quot;warn&quot; or &quot;error&quot;\nto generate Console entries."
    },
    "LOG_LEVEL_ERROR": {
     "!type": "string",
     "!doc": "Static identifier for logLevel configuration setting to allow only\nincoming messages of logLevel &quot;error&quot; to generate\nConsole entries."
    },
    "ENTRY_CLASSES": {
     "!type": "+yui.Object",
     "!doc": "Map (object) of classNames used to populate the placeholders in the\nConsole.ENTRY_TEMPLATE markup when rendering a new Console entry.\n\n<p>By default, the keys contained in the object are:</p>\n<ul>\n   <li>entry_class</li>\n   <li>entry_meta_class</li>\n   <li>entry_cat_class</li>\n   <li>entry_src_class</li>\n   <li>entry_time_class</li>\n   <li>entry_content_class</li>\n</ul>"
    },
    "CHROME_CLASSES": {
     "!type": "+yui.Object",
     "!doc": "Map (object) of classNames used to populate the placeholders in the\nConsole.HEADER_TEMPLATE, Console.BODY_TEMPLATE, and\nConsole.FOOTER_TEMPLATE markup when rendering the Console UI.\n\n<p>By default, the keys contained in the object are:</p>\n<ul>\n  <li>console_hd_class</li>\n  <li>console_bd_class</li>\n  <li>console_ft_class</li>\n  <li>console_controls_class</li>\n  <li>console_checkbox_class</li>\n  <li>console_pause_class</li>\n  <li>console_pause_label_class</li>\n  <li>console_button_class</li>\n  <li>console_clear_class</li>\n  <li>console_collapse_class</li>\n  <li>console_title_class</li>\n</ul>"
    },
    "HEADER_TEMPLATE": {
     "!type": "string",
     "!doc": "Markup template used to generate the DOM structure for the header\nsection of the Console when it is rendered.  The template includes\nthese {placeholder}s:\n\n<ul>\n  <li>console_button_class - contributed by Console.CHROME_CLASSES</li>\n  <li>console_collapse_class - contributed by Console.CHROME_CLASSES</li>\n  <li>console_hd_class - contributed by Console.CHROME_CLASSES</li>\n  <li>console_title_class - contributed by Console.CHROME_CLASSES</li>\n  <li>str_collapse - pulled from attribute strings.collapse</li>\n  <li>str_title - pulled from attribute strings.title</li>\n</ul>"
    },
    "BODY_TEMPLATE": {
     "!type": "string",
     "!doc": "Markup template used to generate the DOM structure for the Console body\n(where the messages are inserted) when it is rendered.  The template\nincludes only the {placeholder} &quot;console_bd_class&quot;, which is\nconstributed by Console.CHROME_CLASSES."
    },
    "FOOTER_TEMPLATE": {
     "!type": "string",
     "!doc": "Markup template used to generate the DOM structure for the footer\nsection of the Console when it is rendered.  The template includes\nmany of the {placeholder}s from Console.CHROME_CLASSES as well as:\n\n<ul>\n  <li>id_guid - generated unique id, relates the label and checkbox</li>\n  <li>str_pause - pulled from attribute strings.pause</li>\n  <li>str_clear - pulled from attribute strings.clear</li>\n</ul>"
    },
    "ENTRY_TEMPLATE": {
     "!type": "string",
     "!doc": "Default markup template used to create the DOM structure for Console\nentries. The markup contains {placeholder}s for content and classes\nthat are replaced via Y.Lang.sub.  The default template contains\nthe {placeholder}s identified in Console.ENTRY_CLASSES as well as the\nfollowing placeholders that will be populated by the log entry data:\n\n<ul>\n  <li>cat_class</li>\n  <li>src_class</li>\n  <li>totalTime</li>\n  <li>elapsedTime</li>\n  <li>localTime</li>\n  <li>sourceAndDetail</li>\n  <li>message</li>\n</ul>"
    },
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "Static property used to define the default attribute configuration of\nthe Widget."
    }
   }
  },
  "cookie": {
   "Cookie": {
    "!type": "fn()",
    "exists": {
     "!type": "fn(name: string) -> bool",
     "!doc": "Determines if the cookie with the given name exists. This is useful for\nBoolean cookies (those that do not follow the name=value convention)."
    },
    "get": {
     "!type": "fn(name: string, options: fn()) -> ?",
     "!doc": "Returns the cookie value for the given name."
    },
    "getSub": {
     "!type": "fn(name: string, subName: string, converter: fn(), options: +yui.Object) -> ?",
     "!doc": "Returns the value of a subcookie."
    },
    "getSubs": {
     "!type": "fn(name: string, options: +yui.Object) -> +yui.Object",
     "!doc": "Returns an object containing name-value pairs stored in the cookie with the given name."
    },
    "remove": {
     "!type": "fn(name: string, options: +yui.Object) -> string",
     "!doc": "Removes a cookie from the machine by setting its expiration date to\nsometime in the past."
    },
    "removeSub": {
     "!type": "fn(name: string, subName: string, options: +yui.Object) -> string",
     "!doc": "Removes a sub cookie with a given name."
    },
    "set": {
     "!type": "fn(name: string, value: ?, options: +yui.Object) -> string",
     "!doc": "Sets a cookie with a given name and value."
    },
    "setSub": {
     "!type": "fn(name: string, subName: string, value: ?, options: +yui.Object) -> string",
     "!doc": "Sets a sub cookie with a given name to a particular value."
    },
    "setSubs": {
     "!type": "fn(name: string, value: +yui.Object, options: +yui.Object) -> string",
     "!doc": "Sets a cookie with a given name to contain a hash of name-value pairs."
    }
   }
  },
  "dataschema": {
   "DataSchema": {
    "Array": {
     "!type": "fn()",
     "prototype": {
      "!proto": "dataschema.DataSchema.Base.prototype"
     },
     "apply": {
      "!type": "fn(schema?: +yui.Object, data: +yui.Array) -> +yui.Object",
      "!doc": "Applies a schema to an array of data, returning a normalized object\nwith results in the `results` property. The `meta` property of the\nresponse object is present for consistency, but is assigned an empty\nobject.  If the input data is absent or not an array, an `error`\nproperty will be added.\n\nThe input array is expected to contain objects, arrays, or strings.\n\nIf _schema_ is not specified or _schema.resultFields_ is not an array,\n`response.results` will be assigned the input array unchanged.\n\nWhen a _schema_ is specified, the following will occur:\n\nIf the input array contains strings, they will be copied as-is into the\n`response.results` array.\n\nIf the input array contains arrays, `response.results` will contain an\narray of objects with key:value pairs assuming the fields in\n_schema.resultFields_ are ordered in accordance with the data array\nvalues.\n\nIf the input array contains objects, the identified\n_schema.resultFields_ will be used to extract a value from those\nobjects for the output result.\n\n_schema.resultFields_ field identifiers are objects with the following properties:\n\n  * `key`   : <strong>(required)</strong> The locator name (String)\n  * `parser`: A function or the name of a function on `Y.Parsers` used\n        to convert the input value into a normalized type.  Parser\n        functions are passed the value as input and are expected to\n        return a value.\n\nIf no value parsing is needed, you can use strings as identifiers\ninstead of objects (see example below)."
     }
    },
    "Base": {
     "!type": "fn()",
     "apply": {
      "!type": "fn(schema: +yui.Object, data: +yui.Object) -> +yui.Object",
      "!doc": "Overridable method returns data as-is."
     },
     "prototype": {
      "parse": {
       "!type": "fn(value: +yui.Object, field: +yui.Object) -> +yui.Object",
       "!doc": "Applies field parser, if defined"
      }
     }
    },
    "JSON": {
     "!type": "fn()",
     "prototype": {
      "!proto": "dataschema.DataSchema.Base.prototype"
     },
     "getPath": {
      "!type": "fn(locator: string) -> [string]",
      "!doc": "Utility function converts JSON locator strings into walkable paths"
     },
     "getLocationValue": {
      "!type": "fn(path: [string], data: string) -> +yui.Object",
      "!doc": "Utility function to walk a path and return the value located there."
     },
     "apply": {
      "!type": "fn(schema?: +yui.Object, data: +yui.Object) -> +yui.Object",
      "!doc": "Applies a schema to an array of data located in a JSON structure, returning\na normalized object with results in the `results` property. Additional\ninformation can be parsed out of the JSON for inclusion in the `meta`\nproperty of the response object.  If an error is encountered during\nprocessing, an `error` property will be added.\n\nThe input _data_ is expected to be an object or array.  If it is a string,\nit will be passed through `Y.JSON.parse()`.\n\nIf _data_ contains an array of data records to normalize, specify the\n_schema.resultListLocator_ as a dot separated path string just as you would\nreference it in JavaScript.  So if your _data_ object has a record array at\n_data.response.results_, use _schema.resultListLocator_ =\n\"response.results\". Bracket notation can also be used for array indices or\nobject properties (e.g. \"response[results]\");  This is called a \"path\nlocator\"\n\nField data in the result list is extracted with field identifiers in\n_schema.resultFields_.  Field identifiers are objects with the following\nproperties:\n\n  * `key`   : <strong>(required)</strong> The path locator (String)\n  * `parser`: A function or the name of a function on `Y.Parsers` used\n        to convert the input value into a normalized type.  Parser\n        functions are passed the value as input and are expected to\n        return a value.\n\nIf no value parsing is needed, you can use path locators (strings)\ninstead of field identifiers (objects) -- see example below.\n\nIf no processing of the result list array is needed, _schema.resultFields_\ncan be omitted; the `response.results` will point directly to the array.\n\nIf the result list contains arrays, `response.results` will contain an\narray of objects with key:value pairs assuming the fields in\n_schema.resultFields_ are ordered in accordance with the data array\nvalues.\n\nIf the result list contains objects, the identified _schema.resultFields_\nwill be used to extract a value from those objects for the output result.\n\nTo extract additional information from the JSON, include an array of\npath locators in _schema.metaFields_.  The collected values will be\nstored in `response.meta`."
     }
    },
    "Text": {
     "!type": "fn()",
     "prototype": {
      "!proto": "dataschema.DataSchema.Base.prototype"
     },
     "apply": {
      "!type": "fn(schema: +yui.Object, data: string) -> +yui.Object",
      "!doc": "Applies a schema to a string of delimited data, returning a normalized\nobject with results in the `results` property. The `meta` property of\nthe response object is present for consistency, but is assigned an\nempty object.  If the input data is absent or not a string, an `error`\nproperty will be added.\n\nUse _schema.resultDelimiter_ and _schema.fieldDelimiter_ to instruct\n`apply` how to split up the string into an array of data arrays for\nprocessing.\n\nUse _schema.resultFields_ to specify the keys in the generated result\nobjects in `response.results`. The key:value pairs will be assigned\nin the order of the _schema.resultFields_ array, assuming the values\nin the data records are defined in the same order.\n\n_schema.resultFields_ field identifiers are objects with the following\nproperties:\n\n  * `key`   : <strong>(required)</strong> The property name you want\n        the data value assigned to in the result object (String)\n  * `parser`: A function or the name of a function on `Y.Parsers` used\n        to convert the input value into a normalized type.  Parser\n        functions are passed the value as input and are expected to\n        return a value.\n\nIf no value parsing is needed, you can use just the desired property\nname string as the field identifier instead of an object (see example\nbelow)."
     }
    },
    "XML": {
     "!type": "fn()",
     "prototype": {
      "!proto": "dataschema.DataSchema.Base.prototype"
     },
     "apply": {
      "!type": "fn(schema: +yui.Object, data: +XMLDocument) -> +yui.Object",
      "!doc": "Applies a schema to an XML data tree, returning a normalized object with\nresults in the `results` property. Additional information can be parsed out\nof the XML for inclusion in the `meta` property of the response object.  If\nan error is encountered during processing, an `error` property will be\nadded.\n\nField data in the nodes captured by the XPath in _schema.resultListLocator_\nis extracted with the field identifiers described in _schema.resultFields_.\nField identifiers are objects with the following properties:\n\n  * `key`    : <strong>(required)</strong> The desired property name to use\n        store the retrieved value in the result object.  If `locator` is\n        not specified, `key` is also used as the XPath locator (String)\n  * `locator`: The XPath locator to the node or attribute within each\n        result node found by _schema.resultListLocator_ containing the\n        desired field data (String)\n  * `parser` : A function or the name of a function on `Y.Parsers` used\n        to convert the input value into a normalized type.  Parser\n        functions are passed the value as input and are expected to\n        return a value.\n  * `schema` : Used to retrieve nested field data into an array for\n        assignment as the result field value.  This object follows the same\n        conventions as _schema_.\n\nIf no value parsing or nested parsing is needed, you can use XPath locators\n(strings) instead of field identifiers (objects) -- see example below.\n\n`response.results` will contain an array of objects with key:value pairs.\nThe keys are the field identifier `key`s, and the values are the data\nvalues extracted from the nodes or attributes found by the field `locator`\n(or `key` fallback).\n\nTo extract additional information from the XML, include an array of\nXPath locators in _schema.metaFields_.  The collected values will be\nstored in `response.meta` with the XPath locator as keys."
     }
    }
   }
  },
  "datasource": {
   "DataSourceArraySchema": {
    "!type": "fn()",
    "prototype": {
     "!proto": "plugin.Plugin.Base.prototype"
    },
    "NS": {
     "!type": "string",
     "!doc": "The namespace for the plugin. This will be the property on the host which\nreferences the plugin instance."
    },
    "NAME": {
     "!type": "string",
     "!doc": "Class name."
    }
   },
   "DataSourceCacheExtension": {
    "!type": "fn()",
    "NS": {
     "!type": "string",
     "!doc": "The namespace for the plugin. This will be the property on the host which\nreferences the plugin instance."
    },
    "NAME": {
     "!type": "string",
     "!doc": "Class name."
    }
   },
   "DataSourceCache": {
    "!type": "fn()",
    "prototype": {
     "!proto": "cache.Cache.prototype"
    },
    "NS": {
     "!type": "string",
     "!doc": "The namespace for the plugin. This will be the property on the host which\nreferences the plugin instance."
    },
    "NAME": {
     "!type": "string",
     "!doc": "Class name."
    }
   },
   "DataSource": {
    "Function": {
     "!type": "fn() -> +datasource.DataSource.Function",
     "prototype": {
      "!proto": "datasource.DataSource.Local.prototype",
      "source": {
       "!type": "?",
       "!doc": "Stores the function that will serve the response data."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Class name."
     }
    },
    "Get": {
     "!type": "fn() -> +datasource.DataSource.Get",
     "prototype": {
      "!proto": "datasource.DataSource.Local.prototype",
      "get": {
       "!type": "+Y.Get",
       "!doc": "Pointer to Get Utility."
      },
      "asyncMode": {
       "!type": "string",
       "!doc": "Defines request/response management in the following manner:\n<dl>\n    <!--<dt>queueRequests</dt>\n    <dd>If a request is already in progress, wait until response is\n    returned before sending the next request.</dd>\n    <dt>cancelStaleRequests</dt>\n    <dd>If a request is already in progress, cancel it before\n    sending the next request.</dd>-->\n    <dt>ignoreStaleResponses</dt>\n    <dd>Send all requests, but handle only the response for the most\n    recently sent request.</dd>\n    <dt>allowAll</dt>\n    <dd>Send all requests and handle all responses.</dd>\n</dl>"
      },
      "scriptCallbackParam": {
       "!type": "string",
       "!doc": "Callback string parameter name sent to the remote script. By default,\nrequests are sent to\n&#60;URI&#62;?&#60;scriptCallbackParam&#62;=callbackFunction"
      },
      "generateRequestCallback": {
       "!type": "fn()",
       "!doc": "Accepts the DataSource instance and a callback ID, and returns a callback\nparam/value string that gets appended to the script URI. Implementers\ncan customize this string to match their servers query syntax."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Class name."
     }
    },
    "IO": {
     "!type": "fn() -> +datasource.DataSource.IO",
     "prototype": {
      "!proto": "datasource.DataSource.Local.prototype",
      "io": {
       "!type": "+Y.io",
       "!doc": "Pointer to IO Utility."
      },
      "ioConfig": {
       "!type": "+yui.Object",
       "!doc": "Default IO Config."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Class name."
     }
    },
    "Local": {
     "!type": "fn() -> +datasource.DataSource.Local",
     "prototype": {
      "!proto": "base.Base.prototype",
      "source": {
       "!type": "+MIXED",
       "!doc": "Pointer to live data."
      },
      "sendRequest": {
       "!type": "fn(request?: +yui.Object) -> number",
       "!doc": "Generates a unique transaction ID and fires <code>request</code> event.\n<strong>Note</strong>: the property <code>callback</code> is a\ndeprecated alias for the <code>on</code> transaction configuration\nproperty described below."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Class name."
     },
     "transactions": {
      "!type": "+yui.Object",
      "!doc": "Global in-progress transaction objects."
     },
     "issueCallback": {
      "!type": "fn(e: +event_custom.EventFacade, caller: +DataSource)",
      "!doc": "Returns data to callback."
     }
    }
   },
   "DataSourceJSONSchema": {
    "!type": "fn()",
    "prototype": {
     "!proto": "plugin.Plugin.Base.prototype"
    },
    "NS": {
     "!type": "string",
     "!doc": "The namespace for the plugin. This will be the property on the host which\nreferences the plugin instance."
    },
    "NAME": {
     "!type": "string",
     "!doc": "Class name."
    }
   },
   "Pollable": {
    "!type": "fn()",
    "prototype": {
     "!proto": "datasource.DataSource.Local.prototype",
     "setInterval": {
      "!type": "fn(msec: number, request?: +yui.Object) -> number",
      "!doc": "Sets up a polling mechanism to send requests at set intervals and\nforward responses to given callback."
     },
     "clearInterval": {
      "!type": "fn(id: number)",
      "!doc": "Disables polling mechanism associated with the given interval ID."
     },
     "clearAllIntervals": {
      "!type": "fn()",
      "!doc": "Clears all intervals."
     }
    }
   },
   "DataSourceTextSchema": {
    "!type": "fn()",
    "prototype": {
     "!proto": "plugin.Plugin.Base.prototype"
    },
    "NS": {
     "!type": "string",
     "!doc": "The namespace for the plugin. This will be the property on the host which\nreferences the plugin instance."
    },
    "NAME": {
     "!type": "string",
     "!doc": "Class name."
    }
   },
   "DataSourceXMLSchema": {
    "!type": "fn()",
    "prototype": {
     "!proto": "plugin.Plugin.Base.prototype"
    },
    "NS": {
     "!type": "string",
     "!doc": "The namespace for the plugin. This will be the property on the host which\nreferences the plugin instance."
    },
    "NAME": {
     "!type": "string",
     "!doc": "Class name."
    }
   }
  },
  "datatable": {
   "DataTable": {
    "!type": "fn()",
    "prototype": {
     "!proto": "datatable.DataTable.Base.prototype",
     "COL_TEMPLATE": {
      "!type": "string",
      "!doc": "The HTML template used to create the tables `<col>`s."
     },
     "COLGROUP_TEMPLATE": {
      "!type": "string",
      "!doc": "The HTML template used to create the tables `<colgroup>`."
     },
     "setColumnWidth": {
      "!type": "fn(id: number, width: number) -> !this",
      "!doc": "Assigns the style width of the `<col>` representing the column identifed by\n`id` and updates the column configuration.\n\nPass the empty string for `width` to return a column to auto sizing.\n\nThis does not trigger a `columnsChange` event today, but I can be convinced\nthat it should."
     },
     "columns": {
      "!type": "[+yui.Object]",
      "!doc": "Columns to include in the rendered table.\n\nIf omitted, the attributes on the configured `recordType` or the first item\nin the `data` collection will be used as a source.\n\nThis attribute takes an array of strings or objects (mixing the two is\nfine).  Each string or object is considered a column to be rendered.\nStrings are converted to objects, so `columns: [first, last]` becomes\n`columns: [{ key: first }, { key: last }]`.\n\nDataTable.Core only concerns itself with a few properties of columns.\nThese properties are:\n\n* `key` - Used to identify the record field/attribute containing content for\n  this column.  Also used to create a default Model if no `recordType` or\n  `data` are provided during construction.  If `name` is not specified, this\n  is assigned to the `_id` property (with added incrementer if the key is\n  used by multiple columns).\n* `children` - Traversed to initialize nested column objects\n* `name` - Used in place of, or in addition to, the `key`.  Useful for\n  columns that arent bound to a field/attribute in the record data.  This\n  is assigned to the `_id` property.\n* `id` - For backward compatibility.  Implementers can specify the id of\n  the header cell.  This should be avoided, if possible, to avoid the\n  potential for creating DOM elements with duplicate IDs.\n* `field` - For backward compatibility.  Implementers should use `name`.\n* `_id` - Assigned unique-within-this-instance id for a column.  By order\n  of preference, assumes the value of `name`, `key`, `id`, or `_yuid`.\n  This is used by the rendering views as well as feature module\n  as a means to identify a specific column without ambiguity (such as\n  multiple columns using the same `key`.\n* `_yuid` - Guid stamp assigned to the column object.\n* `_parent` - Assigned to all child columns, referencing their parent\n  column."
     },
     "recordType": {
      "!type": "fn()",
      "!doc": "Model subclass to use as the `model` for the ModelList stored in the `data`\nattribute.\n\nIf not provided, it will try really hard to figure out what to use.  The\nfollowing attempts will be made to set a default value:\n\n1. If the `data` attribute is set with a ModelList instance and its `model`\n   property is set, that will be used.\n2. If the `data` attribute is set with a ModelList instance, and its\n   `model` property is unset, but it is populated, the `ATTRS` of the\n   `constructor of the first item will be used.\n3. If the `data` attribute is set with a non-empty array, a Model subclass\n   will be generated using the keys of the first item as its `ATTRS` (see\n   the `_createRecordClass` method).\n4. If the `columns` attribute is set, a Model subclass will be generated\n   using the columns defined with a `key`. This is least desirable because\n   columns can be duplicated or nested in a way thats not parsable.\n5. If neither `data` nor `columns` is set or populated, a change event\n   subscriber will listen for the first to be changed and try all over\n   again."
     },
     "data": {
      "!type": "+app.ModelList",
      "!doc": "The ModelList that manages the tables data."
     },
     "summary": {
      "!type": "string",
      "!doc": "Content for the `<table summary=\"ATTRIBUTE VALUE HERE\">`.  Values assigned\nto this attribute will be HTML escaped for security."
     },
     "caption": {
      "!type": "+HTML",
      "!doc": "HTML content of an optional `<caption>` element to appear above the table.\nLeave this config unset or set to a falsy value to remove the caption."
     },
     "recordset": {
      "!type": "[+yui.Object]",
      "!doc": "Deprecated as of 3.5.0. Passes through to the `data` attribute.\n\nWARNING: `get(recordset)` will NOT return a Recordset instance as of\n3.5.0.  This is a break in backward compatibility."
     },
     "columnset": {
      "!type": "[+yui.Object]",
      "!doc": "Deprecated as of 3.5.0. Passes through to the `columns` attribute.\n\nWARNING: `get(columnset)` will NOT return a Columnset instance as of\n3.5.0.  This is a break in backward compatibility."
     },
     "getColumn": {
      "!type": "fn(name: string) -> +yui.Object",
      "!doc": "Gets the column configuration object for the given key, name, or index.  For\nnested columns, `name` can be an array of indexes, each identifying the index\nof that column in the respective parents \"children\" array.\n\nIf you pass a column object, it will be returned.\n\nFor columns with keys, you can also fetch the column with\n`instance.get(columns.foo)`."
     },
     "getRecord": {
      "!type": "fn(seed: number) -> +app.Model",
      "!doc": "Returns the Model associated to the record `id`, `clientId`, or index (not\nrow index).  If none of those yield a Model from the `data` ModelList, the\narguments will be passed to the `view` instances `getRecord` method\nif it has one.\n\nIf no Model can be found, `null` is returned."
     },
     "_getRecordType": {
      "!type": "fn(val: +app.Model) -> +app.Model",
      "!doc": "Returns the Model class of the instances `data` attribute ModelList.  If\nnot set, returns the explicitly configured value."
     },
     "booleanLabels": {
      "!type": "+yui.Object",
      "!doc": "Determines the texts to be shown to represent Boolean values when the\n[boolean](DataTable.BodyView.Formatters.html#method_boolean) formatter\nis used on any column.\n\nIt works like the column-specific\n[booleanLabels](DataTable.Column.html#property_booleanLabels) but\nfor all columns using the\n[boolean](DataTable.BodyView.Formatters.html#method_boolean) formatter at once.\nThe values are often retrieved from a resource of localized texts."
     },
     "currencyFormat": {
      "!type": "+yui.Object",
      "!doc": "Format specification for columns using the\n[currency](DataTable.BodyView.Formatters.html#method_currency) formatter.\nIt contains an object as described in\n[Number.format](Number.html#method_format).\n\nIt is similar to\n[currencyFormat](DataTable.Column.html#property_currencyFormat)\nbut it applies to any column using the\n[currency](DataTable.BodyView.Formatters.html#method_currency) formatter.\n The values are often retrieved from a resource of localized configuration."
     },
     "dateFormat": {
      "!type": "string",
      "!doc": "Format specification for columns using the\n[date](DataTable.BodyView.Formatters.html#method_date) formatter.\nIt contains an object as described in\n[Date.format](Date.html#method_format).\n\nIt is similar to\n[dateFormat](DataTable.Column.html#property_dateFormat)\nbut it applies to any column using the\n[date](DataTable.BodyView.Formatters.html#method_date) formatter.\n The values are often retrieved from a resource of localized configuration."
     },
     "numberFormat": {
      "!type": "+yui.Object",
      "!doc": "Format specification for columns using the\n[number](DataTable.BodyView.Formatters.html#method_number) formatter.\nIt contains an object as described in\n[Number.format](Number.html#method_format).\n\nIt is similar to\n[numberFormat](DataTable.Column.html#property_numberFormat)\nbut it applies to any column using the\n[number](DataTable.BodyView.Formatters.html#method_number) formatter.\n The values are often retrieved from a resource of localized configuration."
     },
     "focusedCell": {
      "!type": "+node.Node",
      "!doc": "Cell thats currently either focused or\nfocusable when the DataTable gets the focus."
     },
     "keyIntoHeaders": {
      "!type": "bool",
      "!doc": "Determines whether it is possible to navigate into the header area.\nThe examples referenced in the document show both behaviors so it seems\nit is optional."
     },
     "keyActions": {
      "!type": "+yui.Object",
      "!doc": "Table of actions to be performed for each key.  It is loaded with a clone\nof [ARIA_ACTIONS](#property_ARIA_ACTIONS) by default.\n\nThe key for each entry is either a key-code or an alias from the\n[KEY_NAMES](#property_KEY_NAMES) table. They can be prefixed with any combination\nof the modifier keys `alt`, `ctrl`, `meta` or `shift` each followed by a hyphen,\nsuch as `\"ctrl-shift-up\"` (modifiers, if more than one, should appear in alphabetical order).\n\nThe value for each entry should be a function or the name of a method in\nthe DataTable instance.  The method will receive the original keyboard\nEventFacade as its only argument.\n\nIf the value is a string and it cannot be resolved into a method,\nit will be assumed to be the name of an event to fire. The listener for that\nevent will receive an EventFacade containing references to the cell that has the focus,\nthe row, column and, unless it is a header row, the record it corresponds to.\nThe second argument will be the original EventFacade for the keyboard event."
     },
     "showMessages": {
      "!type": "bool",
      "!doc": "Enables the display of messages in the table.  Setting this to false will\nprevent the message Node from being created and `showMessage` from doing\nanything."
     },
     "MESSAGE_TEMPLATE": {
      "!type": "string",
      "!doc": "Template used to generate the node that will be used to report messages."
     },
     "hideMessage": {
      "!type": "fn() -> !this",
      "!doc": "Hides the message node."
     },
     "showMessage": {
      "!type": "fn(message: string) -> !this",
      "!doc": "Display the message node and set its content to `message`.  If there is a\nlocalized `strings` entry for the value of `message`, that string will be\nused."
     },
     "_messageNode": {
      "!type": "+node.Node",
      "!doc": "Node used to display messages from `showMessage`."
     },
     "autoSync": {
      "!type": "bool",
      "!doc": "Controls whether `addRow`, `removeRow`, and `modifyRow` should trigger the\nunderlying Models sync layer by default.\n\nWhen `true`, it is unnecessary to pass the \"sync\" configuration property to\nthose methods to trigger per-operation sync."
     },
     "addColumn": {
      "!type": "fn(config: +yui.Object, index?: number) -> !this",
      "!doc": "Adds the column configuration to the DataTables `columns` configuration.\nIf the `index` parameter is supplied, it is injected at that index.  If the\ntable has nested headers, inject a subcolumn by passing an array of indexes\nto identify the new columns final location.\n\nThe `index` parameter is required if adding a nested column.\n\nThis method is a convienience method for fetching the DataTables `columns`\nattribute, updating it, and calling\n`table.set(columns, _updatedColumnsDefs_)`\n\nFor example:\n\n<pre><code>// Becomes last column\ntable.addColumn(name);\n\n// Inserted after the current second column, moving the current third column\n// to index 4\ntable.addColumn({ key: price, formatter: currencyFormatter }, 2 );\n\n// Insert a new column in a set of headers three rows deep.  The index array\n// translates to\n// [ 2, --  in the third columns children\n//   1, --  in the second childs children\n//   3 ] -- as the fourth child column\ntable.addColumn({ key: age, sortable: true }, [ 2, 1, 3 ]);\n</code></pre>"
     },
     "modifyColumn": {
      "!type": "fn(name: string, config: +yui.Object) -> !this",
      "!doc": "Updates an existing column definition. Fires the `modifyColumn` event.\n\nFor example:\n\n<pre><code>// Add a formatter to the existing price column definition\ntable.modifyColumn(price, { formatter: currencyFormatter });\n\n// Change the label on a header cell in a set of nested headers three rows\n// deep.  The index array translates to\n// [ 2,  -- in the third columns children\n//   1,  -- the second child\n//   3 ] -- the fourth child column\ntable.modifyColumn([2, 1, 3], { label: Experience });\n</code></pre>"
     },
     "moveColumn": {
      "!type": "fn(name: string, index: number) -> !this",
      "!doc": "Moves an existing column to a new location. Fires the `moveColumn` event.\n\nThe destination index can be a number or array of numbers to place a column\nheader in a nested header row."
     },
     "removeColumn": {
      "!type": "fn(name: string) -> !this",
      "!doc": "Removes an existing column. Fires the `removeColumn` event."
     },
     "addRow": {
      "!type": "fn(data: +yui.Object, config?: +yui.Object, callback?: fn(err: +Error, response: ?)) -> !this",
      "!doc": "Adds a new record to the DataTables `data` ModelList.  Record data can be\nan object of field values or an instance of the DataTables configured\n`recordType` class.\n\nThis relays all parameters to the `data` ModelLists `add` method.\n\nIf a configuration object is passed as a second argument, and that object\nhas `sync: true` set, the underlying Model will be `save()`d.\n\nIf the DataTables `autoSync` attribute is set to `true`, the additional\nargument is not needed.\n\nIf syncing and the last argument is a function, that function will be used\nas a callback to the Models `save()` method."
     },
     "removeRow": {
      "!type": "fn(id: +yui.Object, config?: +yui.Object, callback?: fn(err: +Error, response: ?)) -> !this",
      "!doc": "Removes a record from the DataTables `data` ModelList.  The record can be\nprovided explicitly or targeted by its `id` (see ModelLists `getById`\nmethod), `clientId`, or index in the ModelList.\n\nAfter locating the target Model, this relays the Model and all other passed\narguments to the `data` ModelLists `remove` method.\n\nIf a configuration object is passed as a second argument, and that object\nhas `sync: true` set, the underlying Model will be destroyed, passing\n`{ delete: true }` to trigger calling the Models sync layer.\n\nIf the DataTables `autoSync` attribute is set to `true`, the additional\nargument is not needed.\n\nIf syncing and the last argument is a function, that function will be used\nas a callback to the Models `destroy()` method."
     },
     "modifyRow": {
      "!type": "fn(id: +yui.Object, data: +yui.Object, config?: +yui.Object, callback?: fn(err: +Error, response: ?)) -> !this",
      "!doc": "Updates an existing record in the DataTables `data` ModelList.  The record\ncan be provided explicitly or targeted by its `id` (see ModelLists\n`getById` method), `clientId`, or index in the ModelList.\n\nAfter locating the target Model, this relays the all other passed\narguments to the Models `setAttrs` method.\n\nIf a configuration object is passed as a second argument, and that object\nhas `sync: true` set, the underlying Model will be `save()`d.\n\nIf the DataTables `autoSync` attribute is set to `true`, the additional\nargument is not needed.\n\nIf syncing and the last argument is a function, that function will be used\nas a callback to the Models `save()` method."
     },
     "addRows": {
      "!type": "fn(data: [+yui.Object], config?: +yui.Object, callback?: fn(err: +Error, response: ?)) -> !this",
      "!doc": "Adds an array of new records to the DataTables `data` ModelList.  Record data\ncan be an array of objects containing field values or an array of instance of\nthe DataTables configured `recordType` class.\n\nThis relays all parameters to the `data` ModelLists `add` method.\n\nTechnically, this is an alias to `addRow`, but please use the appropriately\nnamed method for readability.\n\nIf a configuration object is passed as a second argument, and that object\nhas `sync: true` set, the underlying Models will be `save()`d.\n\nIf the DataTables `autoSync` attribute is set to `true`, the additional\nargument is not needed.\n\nIf syncing and the last argument is a function, that function will be used\nas a callback to each Models `save()` method."
     },
     "scrollable": {
      "!type": "string",
      "!doc": "Activates or deactivates scrolling in the table.  Acceptable values are:\n\n * `false` - (default) Scrolling is disabled.\n * `true` or xy - If `height` is set, vertical scrolling will be\n   activated, if `width` is set, horizontal scrolling will be activated.\n * x - Activate horizontal scrolling only. Requires the `width` attribute\n   is also set.\n * y - Activate vertical scrolling only. Requires the `height` attribute\n   is also set."
     },
     "scrollTo": {
      "!type": "fn(id: string) -> !this",
      "!doc": "Scrolls a given row or cell into view if the table is scrolling.  Pass the\n`clientId` of a Model from the DataTables `data` ModelList or its row\nindex to scroll to a row or a [row index, column index] array to scroll to\na cell.  Alternately, to scroll to any element contained within the tables\nscrolling areas, pass its ID, or the Node itself (though you could just as\nwell call `node.scrollIntoView()` yourself, but hey, whatever)."
     },
     "sortable": {
      "!type": "string",
      "!doc": "Controls which column headers can trigger sorting by user clicks.\n\nAcceptable values are:\n\n * \"auto\" - (default) looks for `sortable: true` in the column configurations\n * `true` - all columns are enabled\n * `false - no UI sortable is enabled\n * {String[]} - array of key names to give sortable headers"
     },
     "sortBy": {
      "!type": "string",
      "!doc": "The current sort configuration to maintain in the data.\n\nAccepts column `key` strings or objects with a single property, the column\n`key`, with a value of 1, -1, \"asc\", or \"desc\".  E.g. `{ username: asc\n}`.  String values are assumed to be ascending.\n\nExample values would be:\n\n * `\"username\"` - sort by the datas `username` field or the `key`\n   associated to a column with that `name`.\n * `{ username: \"desc\" }` - sort by `username` in descending order.\n   Alternately, use values \"asc\", 1 (same as \"asc\"), or -1 (same as \"desc\").\n * `[\"lastName\", \"firstName\"]` - ascending sort by `lastName`, but for\n   records with the same `lastName`, ascending subsort by `firstName`.\n   Array can have as many items as you want.\n * `[{ lastName: -1 }, \"firstName\"]` - descending sort by `lastName`,\n   ascending subsort by `firstName`. Mixed types are ok."
     },
     "strings": {
      "!type": "+yui.Object",
      "!doc": "Strings containing language for sorting tooltips."
     },
     "sort": {
      "!type": "fn(fields: string, payload?: +yui.Object) -> !this",
      "!doc": "Sort the data in the `data` ModelList and refresh the table with the new\norder.\n\nAcceptable values for `fields` are `key` strings or objects with a single\nproperty, the column `key`, with a value of 1, -1, \"asc\", or \"desc\".  E.g.\n`{ username: asc }`.  String values are assumed to be ascending.\n\nExample values would be:\n\n * `\"username\"` - sort by the datas `username` field or the `key`\n   associated to a column with that `name`.\n * `{ username: \"desc\" }` - sort by `username` in descending order.\n   Alternately, use values \"asc\", 1 (same as \"asc\"), or -1 (same as \"desc\").\n * `[\"lastName\", \"firstName\"]` - ascending sort by `lastName`, but for\n   records with the same `lastName`, ascending subsort by `firstName`.\n   Array can have as many items as you want.\n * `[{ lastName: -1 }, \"firstName\"]` - descending sort by `lastName`,\n   ascending subsort by `firstName`. Mixed types are ok."
     },
     "SORTABLE_HEADER_TEMPLATE": {
      "!type": "string",
      "!doc": "Template for the node that will wrap the header content for sortable\ncolumns."
     },
     "toggleSort": {
      "!type": "fn(fields: string, payload?: +yui.Object) -> !this",
      "!doc": "Reverse the current sort direction of one or more fields currently being\nsorted by.\n\nPass the `key` of the column or columns you want the sort order reversed\nfor."
     }
    },
    "Base": {
     "!type": "fn()",
     "prototype": {
      "!proto": "widget.Widget.prototype",
      "delegate": {
       "!type": "fn(type: string, fn: fn(), spec: string, context: +yui.Object, args: ?) -> +event_custom.EventHandle",
       "!doc": "Pass through to `delegate()` called from the `contentBox`."
      },
      "getCell": {
       "!type": "fn(seed: [number], shift?: [number]) -> +node.Node",
       "!doc": "Returns the `<td>` Node from the given row and column index.  Alternately,\nthe `seed` can be a Node.  If so, the nearest ancestor cell is returned.\nIf the `seed` is a cell, it is returned.  If there is no cell at the given\ncoordinates, `null` is returned.\n\nOptionally, include an offset array or string to return a cell near the\ncell identified by the `seed`.  The offset can be an array containing the\nnumber of rows to shift followed by the number of columns to shift, or one\nof \"above\", \"below\", \"next\", or \"previous\".\n\n<pre><code>// Previous cell in the previous row\nvar cell = table.getCell(e.target, [-1, -1]);\n\n// Next cell\nvar cell = table.getCell(e.target, next);\nvar cell = table.getCell(e.taregt, [0, 1];</pre></code>\n\nThis is actually just a pass through to the `view` instances method\nby the same name."
      },
      "getRow": {
       "!type": "fn(id: number) -> +node.Node",
       "!doc": "Returns the `<tr>` Node from the given row index, Model, or Models\n`clientId`.  If the rows havent been rendered yet, or if the row cant be\nfound by the input, `null` is returned.\n\nThis is actually just a pass through to the `view` instances method\nby the same name."
      },
      "_displayColumns": {
       "!type": "[+yui.Object]",
       "!doc": "Array of the columns that correspond to those with value cells in the\ndata rows. Excludes colspan header columns (configured with `children`)."
      },
      "syncUI": {
       "!type": "fn()",
       "!doc": "Fires the `renderView` event, delegating UI updates to the configured View."
      },
      "view": {
       "!type": "fn()",
       "!doc": "The View class used to render the `<table>` into the Widgets\n`contentBox`.  This View can handle the entire table rendering itself\nor delegate to other Views.\n\nIt is not strictly necessary that the class function assigned here be\na View subclass.  It must however have a `render()` method.\n\nWhen the DataTable is rendered, an instance of this View will be\ncreated and its `render()` method called.  The View instance will be\nassigned to the DataTable instances `view` property."
      },
      "headerView": {
       "!type": "fn()",
       "!doc": "If the View class assigned to the DataTables `view` attribute supports\nit, this class will be used for rendering the contents of the\n`<thead>`&mdash;the column headers for the table.\n\nSimilar to `view`, the instance of this View will be assigned to the\nDataTable instances `head` property.\n\nIt is not strictly necessary that the class function assigned here be\na View subclass.  It must however have a `render()` method."
      },
      "footerView": {
       "!type": "fn()",
       "!doc": "If the View class assigned to the DataTables `view` attribute supports\nit, this class will be used for rendering the contents of the `<tfoot>`.\n\nSimilar to `view`, the instance of this View will be assigned to the\nDataTable instances `foot` property.\n\nIt is not strictly necessary that the class function assigned here be\na View subclass.  It must however have a `render()` method."
      },
      "bodyView": {
       "!type": "fn()",
       "!doc": "If the View class assigned to the DataTables `view` attribute supports\nit, this class will be used for rendering the contents of the `<tbody>`\nincluding all data rows.\n\nSimilar to `view`, the instance of this View will be assigned to the\nDataTable instances `body` property.\n\nIt is not strictly necessary that the class function assigned here be\na View subclass.  It must however have a `render()` method."
      }
     }
    },
    "BodyView": {
     "!type": "fn()",
     "prototype": {
      "!proto": "app.View.prototype",
      "CELL_TEMPLATE": {
       "!type": "string",
       "!doc": "HTML template used to create table cells."
      },
      "CLASS_EVEN": {
       "!type": "string",
       "!doc": "CSS class applied to even rows.  This is assigned at instantiation.\n\nFor DataTable, this will be `yui3-datatable-even`."
      },
      "CLASS_ODD": {
       "!type": "string",
       "!doc": "CSS class applied to odd rows.  This is assigned at instantiation.\n\nWhen used by DataTable instances, this will be `yui3-datatable-odd`."
      },
      "ROW_TEMPLATE": {
       "!type": "string",
       "!doc": "HTML template used to create table rows."
      },
      "host": {
       "!type": "+yui.Object",
       "!doc": "The object that serves as the source of truth for column and row data.\nThis property is assigned at instantiation from the `host` property of\nthe configuration object passed to the constructor."
      },
      "TBODY_TEMPLATE": {
       "!type": "string",
       "!doc": "HTML templates used to create the `<tbody>` containing the table rows."
      },
      "getCell": {
       "!type": "fn(seed: [number], shift?: [number]) -> +node.Node",
       "!doc": "Returns the `<td>` Node from the given row and column index.  Alternately,\nthe `seed` can be a Node.  If so, the nearest ancestor cell is returned.\nIf the `seed` is a cell, it is returned.  If there is no cell at the given\ncoordinates, `null` is returned.\n\nOptionally, include an offset array or string to return a cell near the\ncell identified by the `seed`.  The offset can be an array containing the\nnumber of rows to shift followed by the number of columns to shift, or one\nof \"above\", \"below\", \"next\", or \"previous\".\n\n<pre><code>// Previous cell in the previous row\nvar cell = table.getCell(e.target, [-1, -1]);\n\n// Next cell\nvar cell = table.getCell(e.target, next);\nvar cell = table.getCell(e.target, [0, 1];</pre></code>"
      },
      "getRecord": {
       "!type": "fn(seed: string) -> +app.Model",
       "!doc": "Returns the Model associated to the row Node or id provided. Passing the\nNode or id for a descendant of the row also works.\n\nIf no Model can be found, `null` is returned."
      },
      "getRow": {
       "!type": "fn(id: number) -> +node.Node",
       "!doc": "Returns the `<tr>` Node from the given row index, Model, or Models\n`clientId`.  If the rows havent been rendered yet, or if the row cant be\nfound by the input, `null` is returned."
      },
      "render": {
       "!type": "fn() -> !this",
       "!doc": "Creates the tables `<tbody>` content by assembling markup generated by\npopulating the `ROW\\_TEMPLATE`, and `CELL\\_TEMPLATE` templates with content\nfrom the `columns` and `modelList` attributes.\n\nThe rendering process happens in three stages:\n\n1. A row template is assembled from the `columns` attribute (see\n   `_createRowTemplate`)\n\n2. An HTML string is built up by concatenating the application of the data in\n   each Model in the `modelList` to the row template. For cells with\n   `formatter`s, the function is called to generate cell content. Cells\n   with `nodeFormatter`s are ignored. For all other cells, the data value\n   from the Model attribute for the given column key is used.  The\n   accumulated row markup is then inserted into the container.\n\n3. If any column is configured with a `nodeFormatter`, the `modelList` is\n   iterated again to apply the `nodeFormatter`s.\n\nSupported properties of the column objects include:\n\n  * `key` - Used to link a column to an attribute in a Model.\n  * `name` - Used for columns that dont relate to an attribute in the Model\n    (`formatter` or `nodeFormatter` only) if the implementer wants a\n    predictable name to refer to in their CSS.\n  * `cellTemplate` - Overrides the instances `CELL_TEMPLATE` for cells in\n    this column only.\n  * `formatter` - Used to customize or override the content value from the\n    Model.  These do not have access to the cell or row Nodes and should\n    return string (HTML) content.\n  * `nodeFormatter` - Used to provide content for a cell as well as perform\n    any custom modifications on the cell or row Node that could not be\n    performed by `formatter`s.  Should be used sparingly for better\n    performance.\n  * `emptyCellValue` - String (HTML) value to use if the Model data for a\n    column, or the content generated by a `formatter`, is the empty string,\n    `null`, or `undefined`.\n  * `allowHTML` - Set to `true` if a column value, `formatter`, or\n    `emptyCellValue` can contain HTML.  This defaults to `false` to protect\n    against XSS.\n  * `className` - Space delimited CSS classes to add to all `<td>`s in a\n    column.\n\nColumn `formatter`s are passed an object (`o`) with the following\nproperties:\n\n  * `value` - The current value of the columns associated attribute, if\n    any.\n  * `data` - An object map of Model keys to their current values.\n  * `record` - The Model instance.\n  * `column` - The column configuration object for the current column.\n  * `className` - Initially empty string to allow `formatter`s to add CSS\n    classes to the cells `<td>`.\n  * `rowIndex` - The zero-based row number.\n  * `rowClass` - Initially empty string to allow `formatter`s to add CSS\n    classes to the cells containing row `<tr>`.\n\nThey may return a value or update `o.value` to assign specific HTML\ncontent.  A returned value has higher precedence.\n\nColumn `nodeFormatter`s are passed an object (`o`) with the following\nproperties:\n\n  * `value` - The current value of the columns associated attribute, if\n    any.\n  * `td` - The `<td>` Node instance.\n  * `cell` - The `<div>` liner Node instance if present, otherwise, the\n    `<td>`.  When adding content to the cell, prefer appending into this\n    property.\n  * `data` - An object map of Model keys to their current values.\n  * `record` - The Model instance.\n  * `column` - The column configuration object for the current column.\n  * `rowIndex` - The zero-based row number.\n\nThey are expected to inject content into the cells Node directly, including\nany \"empty\" cell content.  Each `nodeFormatter` will have access through the\nNode API to all cells and rows in the `<tbody>`, but not to the `<table>`,\nas it will not be attached yet.\n\nIf a `nodeFormatter` returns `false`, the `o.td` and `o.cell` Nodes will be\n`destroy()`ed to remove them from the Node cache and free up memory.  The\nDOM elements will remain as will any content added to them.  _It is highly\nadvisable to always return `false` from your `nodeFormatter`s_."
      },
      "refreshRow": {
       "!type": "fn(row: +node.Node, model: +app.Model, colKeys: [string]) -> !this",
       "!doc": "Refreshes the provided row against the provided model and the Array of\ncolumns to be updated."
      },
      "refreshCell": {
       "!type": "fn(cell: +node.Node, model?: +app.Model, col?: +yui.Object) -> !this",
       "!doc": "Refreshes the given cell with the provided model data and the provided\ncolumn configuration.\n\nUses the provided column formatter if aviable."
      },
      "getColumn": {
       "!type": "fn(name: string) -> +yui.Object",
       "!doc": "Returns column data from this.get(columns). If a Y.Node is provided as\nthe key, will try to determine the key from the classname"
      },
      "undefined": {
       "!type": "fn(row: +node.Node) -> number",
       "!doc": "Locates the row within the tbodyNode and returns the found index, or Null\nif it is not found in the tbodyNode"
      }
     },
     "Formatters": {
      "!type": "+yui.Object",
      "!doc": "Hash of formatting functions for cell contents.\n\nThis property can be populated with a hash of formatting functions by the developer\nor a set of pre-defined functions can be loaded via the `datatable-formatters` module.\n\nSee: [DataTable.BodyView.Formatters](./DataTable.BodyView.Formatters.html)"
     }
    },
    "Column": {
     "!type": "fn()",
     "prototype": {
      "width": {
       "!type": "string",
       "!doc": "Adds a style `width` setting to an associated `<col>`\nelement for the column.\n\nNote, the assigned width will not truncate cell content, and\nit will not preserve the configured width if doing so would\ncompromise either the instances `width` configuration or\nthe natural width of the tables containing DOM elements.\n\nIf absolute widths are required, it can be accomplished with\nsome custom CSS and the use of a `cellTemplate`, or\n`formatter`.  \n\nSee the description of \n[datatable-column-widths](DataTable.ColumnWidths.html) \nfor an example of how to do this.\n\n    { key: a, width: 400px },\n    { key: b, width: 10em }"
      },
      "key": {
       "!type": "string",
       "!doc": "Binds the column values to the named property in the [data](DataTable.html#attr_data).\n\nOptional if [formatter](#property_formatter), [nodeFormatter](#property_nodeFormatter),\nor [cellTemplate](#property_cellTemplate) is used to populate the content.\n\nIt should not be set if [children](#property_children) is set.\n\nThe value is used for the [\\_id](#property__id) property unless the [name](#property_name)\nproperty is also set.\n\n    { key: username }\n\nThe above column definition can be reduced to this:\n\n    username"
      },
      "name": {
       "!type": "string",
       "!doc": "An identifier that can be used to locate a column via\n[getColumn](DataTable.html#method_getColumn)\nor style columns with class `yui3-datatable-col-NAME` after dropping characters\nthat are not valid for CSS class names.\n\nIt defaults to the [key](#property_key).\n\nThe value is used for the [\\_id](#property__id) property.\n\n    { name: fullname, formatter: ... }"
      },
      "field": {
       "!type": "string",
       "!doc": "An alias for [name](#property_name) for backward compatibility.\n\n    { field: fullname, formatter: ... }"
      },
      "id": {
       "!type": "string",
       "!doc": "Overrides the default unique id assigned `<th id=\"HERE\">`.\n\n__Use this with caution__, since it can result in\nduplicate ids in the DOM.\n\n    {\n        name: checkAll,\n        id: check-all,\n        label: ...\n        formatter: ...\n    }"
      },
      "label": {
       "!type": "string",
       "!doc": "HTML to populate the header `<th>` for the column.\nIt defaults to the value of the [key](#property_key) property or the text\n`Column n` where _n_ is an ordinal number.\n\n    { key: MfgvaPrtNum, label: Part Number }"
      },
      "children": {
       "!type": "+yui.Array",
       "!doc": "Used to create stacked headers.\n\nChild columns may also contain `children`. There is no limit\nto the depth of nesting.\n\nColumns configured with `children` are for display only and\n<strong>should not</strong> be configured with a [key](#property_key).\nConfigurations relating to the display of data, such as\n[formatter](#property_formatter), [nodeFormatter](#property_nodeFormatter),\n[emptyCellValue](#property_emptyCellValue), etc. are ignored.\n\n    { label: Name, children: [\n        { key: firstName, label: First`},\n        { key: lastName, label: Last`}\n    ]}"
      },
      "abbr": {
       "!type": "string",
       "!doc": "Assigns the value `<th abbr=\"HERE\">`.\n\n    {\n      key  : forecast,\n      label: 1yr Target Forecast,\n      abbr : Forecast\n    }"
      },
      "title": {
       "!type": "string",
       "!doc": "Assigns the value `<th title=\"HERE\">`.\n\n    {\n      key  : forecast,\n      label: 1yr Target Forecast,\n      title: Target Forecast for the Next 12 Months\n    }"
      },
      "headerTemplate": {
       "!type": "+HTML",
       "!doc": "Overrides the default [CELL_TEMPLATE](DataTable.HeaderView.html#property_CELL_TEMPLATE)\nused by `Y.DataTable.HeaderView` to render the header cell\nfor this column.  This is necessary when more control is\nneeded over the markup for the header itself, rather than\nits content.\n\nUse the [label](#property_label) configuration if you dont need to\ncustomize the `<th>` iteself.\n\nImplementers are strongly encouraged to preserve at least\nthe `{id}` and `{_id}` placeholders in the custom value.\n\n    {\n        headerTemplate:\n            <th id=\"{id}\"  +\n                title=\"Unread\"  +\n                class=\"{className}\"  +\n                {_id}>&#9679;</th>\n    }"
      },
      "cellTemplate": {
       "!type": "string",
       "!doc": "Overrides the default [CELL_TEMPLATE](DataTable.BodyView.html#property_CELL_TEMPLATE)\nused by `Y.DataTable.BodyView` to render the data cells\nfor this column.  This is necessary when more control is\nneeded over the markup for the `<td>` itself, rather than\nits content.\n\n    {\n        key: id,\n        cellTemplate:\n            <td class=\"{className}\"> +\n              <input type=\"checkbox\"  +\n                     id=\"{content}\"> +\n            </td>\n    }"
      },
      "formatter": {
       "!type": "string",
       "!doc": "String or function used to translate the raw record data for each cell in a\ngiven column into a format better suited to display.\n\nIf it is a string, it will initially be assumed to be the name of one of the\nformatting functions in\n[Y.DataTable.BodyView.Formatters](DataTable.BodyView.Formatters.html).\nIf one such formatting function exists, it will be used.\n\nIf no such named formatter is found, it will be assumed to be a template\nstring and will be expanded.  The placeholders can contain the key to any\nfield in the record or the placeholder `{value}` which represents the value\nof the current field.\n\nIf the value is a function, it will be assumed to be a formatting function.\nA formatting function receives a single argument, an object with the following properties:\n\n* __value__ The raw value from the record Model to populate this cell.\n  Equivalent to `o.record.get(o.column.key)` or `o.data[o.column.key]`.\n* __data__ The Model data for this row in simple object format.\n* __record__ The Model for this row.\n* __column__ The column configuration object.\n* __className__ A string of class names to add `<td class=\"HERE\">` in addition to\n  the column class and any classes in the columns className configuration.\n* __rowIndex__ The index of the current Model in the ModelList.\n  Typically correlates to the row index as well.\n* __rowClass__ A string of css classes to add `<tr class=\"HERE\"><td....`\n  This is useful to avoid the need for nodeFormatters to add classes to the containing row.\n\nThe formatter function may return a string value that will be used for the cell\ncontents or it may change the value of the `value`, `className` or `rowClass`\nproperties which well then be used to format the cell.  If the value for the cell\nis returned in the `value` property of the input argument, no value should be returned.\n\n    {\n        key: name,\n        formatter: link,  // named formatter\n        linkFrom: website // extra column property for link formatter\n    },\n    {\n        key: cost,\n        formatter: {value} // formatter template string\n      //formatter: {cost}  // same result but less portable\n    },\n    {\n        name: Name,          // column does not have associated field value\n                               // thus, it uses name instead of key\n        formatter: {firstName} {lastName} // template references other fields\n    },\n    {\n        key: price,\n        formatter: function (o) { // function both returns a string to show\n            if (o.value > 3) {    // and a className to apply to the cell\n                o.className += expensive;\n            }\n\n            return  + o.value.toFixed(2);\n        }\n    },"
      },
      "nodeFormatter": {
       "!type": "fn()",
       "!doc": "Used to customize the content of the data cells for this column.\n\n`nodeFormatter` is significantly slower than [formatter](#property_formatter)\nand should be avoided if possible. Unlike [formatter](#property_formatter),\n`nodeFormatter` has access to the `<td>` element and its ancestors.\n\nThe function provided is expected to fill in the `<td>` element itself.\n__Node formatters should return `false`__ except in certain conditions as described\nin the users guide.\n\nThe function receives a single object\nargument with the following properties:\n\n* __td__\tThe `<td>` Node for this cell.\n* __cell__\tIf the cell `<td> contains an element with class `yui3-datatable-liner,\n  this will refer to that Node. Otherwise, it is equivalent to `td` (default behavior).\n* __value__\tThe raw value from the record Model to populate this cell.\n  Equivalent to `o.record.get(o.column.key)` or `o.data[o.column.key]`.\n* __data__\tThe Model data for this row in simple object format.\n* __record__\tThe Model for this row.\n* __column__\tThe column configuration object.\n* __rowIndex__\tThe index of the current Model in the ModelList.\n _Typically_ correlates to the row index as well."
      },
      "emptyCellValue": {
       "!type": "string",
       "!doc": "Provides the default value to populate the cell if the data\nfor that cell is `undefined`, `null`, or an empty string.\n\n    {\n        key: price,\n        emptyCellValue: ???\n    }"
      },
      "allowHTML": {
       "!type": "bool",
       "!doc": "Skips the security step of HTML escaping the value for cells\nin this column.\n\nThis is also necessary if [emptyCellValue](#property_emptyCellValue)\nis set with an HTML string.\n`nodeFormatter`s ignore this configuration.  If using a\n`nodeFormatter`, it is recommended to use\n[Y.Escape.html()](Escape.html#method_html)\non any user supplied content that is to be displayed.\n\n    {\n        key: preview,\n        allowHTML: true\n    }"
      },
      "className": {
       "!type": "string",
       "!doc": "A string of CSS classes that will be added to the `<td>`s\n`class` attribute.\n\nNote, all cells will automatically have a class in the\nform of \"yui3-datatable-col-XXX\" added to the `<td>`, where\nXXX is the columns configured `name`, `key`, or `id` (in\nthat order of preference) sanitized from invalid characters.\n\n    {\n        key: symbol,\n        className: no-hide\n    }"
      },
      "buttonLabel": {
       "!type": "string",
       "!doc": "Label to be shown in the face of a button produced by the\n[button](DataTable.BodyView.Formatters.html#method_button) formatter"
      },
      "booleanLabels": {
       "!type": "+yui.Object",
       "!doc": "Determines the texts to be shown to represent Boolean values when the\n[boolean](DataTable.BodyView.Formatters.html#method_boolean) formatter\nis used.\n\nThe attribute is an object with text values for properties `true` and `false`.\n\n    {key:\"active\", formatter: \"boolean\", booleanLabels: {\n        \"true\": \"yes\",\n        \"false\": \"no\"\n    }}"
      },
      "currencyFormat": {
       "!type": "+yui.Object",
       "!doc": "Format specification for columns using the\n[currency](DataTable.BodyView.Formatters.html#method_currency) formatter.\nIt contains an object as described in\n[Number.format](Number.html#method_format)."
      },
      "dateFormat": {
       "!type": "string",
       "!doc": "Format specification for columns using the\n[date](DataTable.BodyView.Formatters.html#method_date) formatter.\nIt contains a string as described in\n[Date.format](Date.html#method_format)."
      },
      "linkFrom": {
       "!type": "string",
       "!doc": "Name of the field that is to provide the link for a column using the\n[email](DataTable.BodyView.Formatters.html#method_email) or\n[link](DataTable.BodyView.Formatters.html#method_link)\nformatters."
      },
      "numberFormat": {
       "!type": "+yui.Object",
       "!doc": "Format specification for columns using the\n[number](DataTable.BodyView.Formatters.html#method_number) formatter.\nIt contains an object as described in\n[Number.format](Number.html#method_format)."
      },
      "lookupTable": {
       "!type": "+yui.Object",
       "!doc": "Map of values to text used to translate internal values to human readable text\nin columns using the [lookup](DataTable.BodyView.Formatters.html#method_lookup)\nformatter.\n\nThe map can be given in either of two formats:\n\n    {key: \"status\", formatter: \"lookup\", lookupTable: {\n        0: \"unknown\",\n        1: \"requested\",\n        2: \"approved\",\n        3: \"delivered\"\n    }},\n    {key: \"otherStatus\", formatter: \"lookup\", lookupTable: [\n        {value:0, text: \"unknown\"},\n        {value:1, text: \"requested\"},\n        {value:2, text: \"approved\"},\n        {value:3, text: \"delivered\"}\n    ]}\n\nThe last format is compatible with the [dropdown](DataTable.Editors.html#property_dropdown)\nand autocomplete-based editors, where the order of the items in the dropdown matters."
      },
      "sortable": {
       "!type": "bool",
       "!doc": "Used when the instances `sortable` attribute is set to\n\"auto\" (the default) to determine which columns will support\nuser sorting by clicking on the header.\n\nIf the instances `key` attribute is not set, this\nconfiguration is ignored.\n\n    { key: lastLogin, sortable: true }"
      },
      "caseSensitive": {
       "!type": "bool",
       "!doc": "When the instances `caseSensitive` attribute is set to\n`true` the sort order is case sensitive (relevant to string columns only).\n\nCase sensitive sort is marginally more efficient and should be considered\nfor large data sets when case insensitive sort is not required.\n\n    { key: lastLogin, sortable: true, caseSensitive: true }"
      },
      "sortFn": {
       "!type": "fn()",
       "!doc": "Allows a column to be sorted using a custom algorithm.  The\nfunction receives three parameters, the first two being the\ntwo record Models to compare, and the third being a boolean\n`true` if the sort order should be descending.\n\nThe function should return `1` to sort `a` above `b`, `-1`\nto sort `a` below `b`, and `0` if they are equal.  Keep in\nmind that the order should be reversed when `desc` is\n`true`.\n\nThe `desc` parameter is provided to allow `sortFn`s to\nalways sort certain values above or below others, such as\nalways sorting `null`s on top.\n\n    {\n      label: Name,\n      sortFn: function (a, b, desc) {\n        var an = a.get(lname) + b.get(fname),\n            bn = a.get(lname) + b.get(fname),\n            order = (an > bn) ? 1 : -(an < bn);\n\n        return desc ? -order : order;\n      },\n      formatter: function (o) {\n        return o.data.lname + ,  + o.data.fname;\n      }\n    }"
      },
      "sortDir": {
       "!type": "number",
       "!doc": "(__read-only__) If a column is sorted, this\nwill be set to `1` for ascending order or `-1` for\ndescending.  This configuration is public for inspection,\nbut cant be used during DataTable instantiation to set the\nsort direction of the column.  Use the tables\n[sortBy](DataTable.html#attr_sortBy)\nattribute for that."
      }
     }
    },
    "HeaderView": {
     "!type": "fn()",
     "prototype": {
      "!proto": "app.View.prototype",
      "CELL_TEMPLATE": {
       "!type": "string",
       "!doc": "Template used to create the tables header cell markup.  Override this to\ncustomize how header cell markup is created."
      },
      "columns": {
       "!type": "[+yui.Array]",
       "!doc": "The data representation of the header rows to render.  This is assigned by\nparsing the `columns` configuration array, and is used by the render()\nmethod."
      },
      "ROW_TEMPLATE": {
       "!type": "string",
       "!doc": "Template used to create the tables header row markup.  Override this to\ncustomize the row markup."
      },
      "source": {
       "!type": "+yui.Object",
       "!doc": "The object that serves as the source of truth for column and row data.\nThis property is assigned at instantiation from the `source` property of\nthe configuration object passed to the constructor."
      },
      "THEAD_TEMPLATE": {
       "!type": "string",
       "!doc": "HTML templates used to create the `<thead>` containing the table headers."
      },
      "render": {
       "!type": "fn() -> !this",
       "!doc": "Creates the `<thead>` Node content by assembling markup generated by\npopulating the `ROW_TEMPLATE` and `CELL_TEMPLATE` templates with content\nfrom the `columns` property."
      }
     }
    },
    "Highlight": {
     "!type": "fn()",
     "prototype": {
      "highlightRows": {
       "!type": "?",
       "!doc": "Setting this to true will create a delegate on the DataTable adding the\ndefault classname to the row when the mouse is over the row."
      },
      "highlightCols": {
       "!type": "?",
       "!doc": "Setting this to true will create a delegate on the DataTable adding the\ndefault classname to the column when the mouse is over the column."
      },
      "highlightCells": {
       "!type": "?",
       "!doc": "Setting this to true will create a delegate on the DataTable adding the\ndefault classname to the cell when the mouse is over it."
      },
      "highlightClassNames": {
       "!type": "+yui.Object",
       "!doc": "An object consisting of classnames for a `row`, a `col` and a `cell` to\nbe applied to their respective objects when the user moves the mouse over\nthe item and the attribute is set to true."
      }
     }
    },
    "KEY_NAMES": {
     "!type": "+yui.Object",
     "!doc": "Mapping of key codes to friendly key names that can be used in the\n[keyActions](#property_keyActions) property and [ARIA_ACTIONS](#property_ARIA_ACTIONS)\nproperty.\n\nIt contains aliases for the following keys:\n    <ul>\n    <li>backspace</li>\n    <li>tab</li>\n    <li>enter</li>\n    <li>esc</li>\n    <li>space</li>\n    <li>pgup</li>\n    <li>pgdown</li>\n    <li>end</li>\n    <li>home</li>\n    <li>left</li>\n    <li>up</li>\n    <li>right</li>\n    <li>down</li>\n    <li>f1 .. f12</li>\n    </ul>"
    },
    "ARIA_ACTIONS": {
     "!type": "+yui.Object",
     "!doc": "Mapping of key codes to actions according to the WAI-ARIA suggestion for the\n[Grid Widget](http://www.w3.org/WAI/PF/aria-practices/#grid).\n\nThe key for each entry is a key-code or [keyName](#property_KEY_NAMES) while the\nvalue can be a function that performs the action or a string.  If a string,\nit can either correspond to the name of a method in this module (or  any\nmethod in a DataTable instance) or the name of an event to fire."
    },
    "Paginator": {
     "!type": "fn()",
     "View": {
      "!type": "fn()",
      "prototype": {
       "!proto": "app.View.prototype",
       "containerTemplate": {
        "!type": "string",
        "!doc": "Template for this views container."
       },
       "contentTemplate": {
        "!type": "string",
        "!doc": "Template for content. Helps maintain order of controls."
       },
       "initializer": {
        "!type": "fn()",
        "!doc": "Sets classnames on the templates and bind events"
       },
       "render": {
        "!type": "fn() -> !this"
       },
       "attachEvents": {
        "!type": "fn()"
       },
       "pageSizes": {
        "!type": "+yui.Array",
        "!doc": "Array of values used to populate the drop down for items per page"
       },
       "model": {
        "!type": "+app.Model",
        "!doc": "Model used for this view"
       }
      }
     },
     "prototype": {
      "paginatorModel": {
       "!type": "+app.Model",
       "!doc": "A model instance or a configuration object for the Model."
      },
      "paginatorModelType": {
       "!type": "+app.Model",
       "!doc": "A pointer to a Model object to be instantiated, or a String off of the\n`Y` namespace.\n\nThis is only used if the `paginatorModel` is a configuration object or\nis null."
      },
      "paginatorView": {
       "!type": "+app.View",
       "!doc": "A pointer to a `Y.View` object to be instantiated. A new view will be\ncreated for each location provided. Each view created will be given the\nsame model instance."
      },
      "pageSizes": {
       "!type": "+yui.Array",
       "!doc": "Array of values used to populate the values in the Paginator UI allowing\nthe end user to select the number of items to display per page."
      },
      "rowsPerPage": {
       "!type": "number",
       "!doc": "Number of rows to display per page. As the UI changes the number of pages\nto display, this will update to reflect the value selected in the UI"
      },
      "paginatorLocation": {
       "!type": "string",
       "!doc": "String of `footer` or `header`, a Y.Node, or an Array or any combination\nof those values."
      },
      "firstPage": {
       "!type": "fn() -> !this",
       "!doc": "Sets the `paginatorModel` to the first page."
      },
      "lastPage": {
       "!type": "fn() -> !this",
       "!doc": "Sets the `paginatorModel` to the last page."
      },
      "previousPage": {
       "!type": "fn() -> !this",
       "!doc": "Sets the `paginatorModel` to the previous page."
      },
      "nextPage": {
       "!type": "fn() -> !this",
       "!doc": "Sets the `paginatorModel` to the next page."
      }
     }
    },
    "TableView": {
     "!type": "fn()",
     "prototype": {
      "!proto": "app.View.prototype",
      "CAPTION_TEMPLATE": {
       "!type": "string",
       "!doc": "The HTML template used to create the caption Node if the `caption`\nattribute is set."
      },
      "TABLE_TEMPLATE": {
       "!type": "string",
       "!doc": "The HTML template used to create the table Node."
      },
      "body": {
       "!type": "+yui.Object",
       "!doc": "The object or instance of the class assigned to `bodyView` that is\nresponsible for rendering and managing the tables `<tbody>`(s) and its\ncontent."
      },
      "foot": {
       "!type": "+yui.Object",
       "!doc": "The object or instance of the class assigned to `footerView` that is\nresponsible for rendering and managing the tables `<tfoot>` and its\ncontent."
      },
      "head": {
       "!type": "+yui.Object",
       "!doc": "The object or instance of the class assigned to `headerView` that is\nresponsible for rendering and managing the tables `<thead>` and its\ncontent."
      },
      "getCell": {
       "!type": "fn(seed: [number], shift?: [number]) -> +node.Node",
       "!doc": "Returns the `<td>` Node from the given row and column index.  Alternately,\nthe `seed` can be a Node.  If so, the nearest ancestor cell is returned.\nIf the `seed` is a cell, it is returned.  If there is no cell at the given\ncoordinates, `null` is returned.\n\nOptionally, include an offset array or string to return a cell near the\ncell identified by the `seed`.  The offset can be an array containing the\nnumber of rows to shift followed by the number of columns to shift, or one\nof \"above\", \"below\", \"next\", or \"previous\".\n\n<pre><code>// Previous cell in the previous row\nvar cell = table.getCell(e.target, [-1, -1]);\n\n// Next cell\nvar cell = table.getCell(e.target, next);\nvar cell = table.getCell(e.taregt, [0, 1];</pre></code>\n\nThis is actually just a pass through to the `bodyView` instances method\nby the same name."
      },
      "getRecord": {
       "!type": "fn(seed: string) -> +app.Model",
       "!doc": "Relays call to the `bodyView`s `getRecord` method if it has one."
      },
      "getRow": {
       "!type": "fn(id: number) -> +node.Node",
       "!doc": "Returns the `<tr>` Node from the given row index, Model, or Models\n`clientId`.  If the rows havent been rendered yet, or if the row cant be\nfound by the input, `null` is returned.\n\nThis is actually just a pass through to the `bodyView` instances method\nby the same name."
      },
      "displayColumns": {
       "!type": "[+yui.Object]",
       "!doc": "Array of the columns that correspond to those with value cells in the\ndata rows. Excludes colspan header columns (configured with `children`)."
      },
      "render": {
       "!type": "fn() -> !this",
       "!doc": "Creates the UI in the configured `container`."
      },
      "summary": {
       "!type": "string",
       "!doc": "Content for the `<table summary=\"ATTRIBUTE VALUE HERE\">`.  Values\nassigned to this attribute will be HTML escaped for security."
      },
      "caption": {
       "!type": "+HTML",
       "!doc": "HTML content of an optional `<caption>` element to appear above the\ntable.  Leave this config unset or set to a falsy value to remove the\ncaption."
      },
      "columns": {
       "!type": "[+yui.Object]",
       "!doc": "Columns to include in the rendered table.\n\nThis attribute takes an array of objects. Each object is considered a\ndata column or header cell to be rendered.  How the objects are\ntranslated into markup is delegated to the `headerView`, `bodyView`,\nand `footerView`.\n\nThe raw value is passed to the `headerView` and `footerView`.  The\n`bodyView` receives the instances `displayColumns` array, which is\nparsed from the columns array.  If there are no nested columns (columns\nconfigured with a `children` array), the `displayColumns` is the same\nas the raw value."
      },
      "width": {
       "!type": "string",
       "!doc": "Width of the table including borders.  This value requires units, so\n`200` is invalid, but `200px` is valid.  Setting the empty string\n(the default) will allow the browser to set the table width."
      },
      "headerView": {
       "!type": "fn()",
       "!doc": "An instance of this class is used to render the contents of the\n`<thead>`&mdash;the column headers for the table.\n\nThe instance of this View will be assigned to the instances `head`\nproperty.\n\nIt is not strictly necessary that the class function assigned here be\na View subclass.  It must however have a `render()` method."
      },
      "headerConfig": {
       "!type": "+yui.Object",
       "!doc": "Configuration overrides used when instantiating the `headerView`\ninstance."
      },
      "footerView": {
       "!type": "fn()",
       "!doc": "An instance of this class is used to render the contents of the\n`<tfoot>` (if appropriate).\n\nThe instance of this View will be assigned to the instances `foot`\nproperty.\n\nIt is not strictly necessary that the class function assigned here be\na View subclass.  It must however have a `render()` method."
      },
      "footerConfig": {
       "!type": "+yui.Object",
       "!doc": "Configuration overrides used when instantiating the `footerView`\ninstance."
      },
      "bodyView": {
       "!type": "fn()",
       "!doc": "An instance of this class is used to render the contents of the tables\n`<tbody>`&mdash;the data cells in the table.\n\nThe instance of this View will be assigned to the instances `body`\nproperty.\n\nIt is not strictly necessary that the class function assigned here be\na View subclass.  It must however have a `render()` method."
      },
      "bodyConfig": {
       "!type": "+yui.Object",
       "!doc": "Configuration overrides used when instantiating the `bodyView`\ninstance."
      }
     }
    }
   },
   "Plugin": {
    "DataTableDataSource": {
     "!type": "fn()",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "datasource": {
       "!type": "+DataSource",
       "!doc": "Pointer to DataSource instance."
      },
      "initialRequest": {
       "!type": "+yui.Object",
       "!doc": "Request sent to DataSource immediately upon initialization."
      },
      "load": {
       "!type": "fn(config: +yui.Object)",
       "!doc": "Load data by calling DataSources sendRequest() method under the hood."
      },
      "onDataReturnInitializeTable": {
       "!type": "fn(e: +event_custom.EventFacade)",
       "!doc": "Callback function passed to DataSources sendRequest() method populates\nan entire DataTable with new data, clearing previous data, if any."
      }
     },
     "NS": {
      "!type": "string",
      "!doc": "The namespace for the plugin. This will be the property on the host which\nreferences the plugin instance."
     },
     "NAME": {
      "!type": "string",
      "!doc": "Class name."
     }
    }
   }
  },
  "datatable_formatters": {
   "DataTable": {
    "!type": "fn()",
    "prototype": {
     "!proto": "datatable.DataTable.Base.prototype"
    },
    "BodyView": {
     "Formatters": {
      "!type": "fn()",
      "prototype": {
       "TFOOT_TEMPLATE": {
        "!type": "string",
        "!doc": "HTML templates used to create the `<tfoot>` containing the table footers."
       },
       "render": {
        "!type": "fn() -> !this",
        "!doc": "Creates the `<tfoot>` Node and inserts it after the `<thead>` Node."
       }
      },
      "button": {
       "!type": "fn(col: +yui.Object) -> fn()",
       "!doc": "Returns a formatter that produces a BUTTON element using the value of\nthe [buttonLabel](DataTable.Column.html#property_buttonLabel)\ncolumn definition attribute as its label or the text\n`Click` if not found.\n\nApplies the CSS className `yui3-datatable-button` to the cell."
      },
      "boolean": {
       "!type": "fn(col: +yui.Object) -> fn()",
       "!doc": "Returns a formatter function that returns the texts `\"true\"` or `\"false\"`\nand assigns the CSS classNames `yui3-datatable-true` or `yui3-datatable-false`\nbased on the value of the cell.\n\nIf either a [booleanLabels](DataTable.Column.html#property_booleanLabels)\n configuration object is defined for the column\nor a [booleanLabels](DataTable.html#attr_booleanLabels)\nconfiguration attribute is defined for the datatable,\nthe formatter will use the values for the properties `true` or `false`\nof either of those objects as the text to show.\n\nIt returns `null`s or `undefined`s unchanged so that the `emptyCellValue`\nconfiguration attribute will eventually apply.\n\n     {key:\"active\", formatter: \"boolean\", booleanLabels: {\n         \"true\": \"yes\",\n         \"false\": \"no\"\n     }}"
      },
      "currency": {
       "!type": "fn(col: +yui.Object) -> fn()",
       "!doc": "Returns a formatter function that formats values as currency using\nthe [Number.format](Number.html#method_format) method.\nIt looks for the format to apply in the\n[currencyFormat](DataTable.Column.html#property_currencyFormat) property\nof the column or in the\n[currencyFormat](DataTable.html#attr_currencyFormat)\n attribute of the whole table.\n\n    {key: \"amount\", formatter: \"currency\", currencyFormat: {\n        decimalPlaces:2,\n        decimalSeparator: \",\",\n        thousandsSeparator: \".\",\n        suffix: \"&euro;\"\n    }}\n\nSee [Number.format](Number.html#method_format) for the available format specs.\n\nAnything that cannot be parsed as a number will be returned unchanged.\n\nApplies the CSS className `yui3-datatable-currency` to the cell."
      },
      "date": {
       "!type": "fn(col: +yui.Object) -> fn()",
       "!doc": "Returns a date formatting function.\nIt looks for the format to apply in the\n[dateFormat](DataTable.Column.html#property_dateFormat)\nproperty of the column or in the\n[dateFormat](DataTable.html#attr_dateFormat)\n attribute of the whole table.\n\n    {key: \"DOB\", formatter: \"date\", dateFormat: \"%I:%M:%S %p\"}\n\nSee [Date.format](Date.html#method_format) for the available format specs.\n\nAnything that is not a date is returned unchanged.\n\nApplies the CSS className `yui3-datatable-date` to the cell."
      },
      "localDate": {
       "!type": "fn() -> fn()",
       "!doc": "Returns a date-only (no time part) formatting function using the current locale.\n\n    {key: \"DOB\", formatter: \"localDate\"}\n\nAnything that is not a date is returned unchanged.\n\nApplies the CSS className `yui3-datatable-date` to the cell."
      },
      "localTime": {
       "!type": "fn() -> fn()",
       "!doc": "Returns a time-only (no date part) formatting function using the current locale.\n\n    {key: \"startTime\", formatter: \"localTime\"}\n\nAnything that is not a date is returned unchanged.\n\nApplies the CSS className `yui3-datatable-date` to the cell."
      },
      "localDateTime": {
       "!type": "fn() -> fn()",
       "!doc": "Returns a date formatting function using the current locale.\n\n    {key: \"DOB\", formatter: \"localDateTime\"}\n\nAnything that is not a date is returned unchanged.\n\nApplies the CSS className `yui3-datatable-date` to the cell."
      },
      "email": {
       "!type": "fn(col: +yui.Object) -> fn()",
       "!doc": "Returns a function that produces email links.\nIf the column definition contains a property\n[linkFrom](DataTable.Column.html#property_linkFrom) it will use the value\nin that field for the link, otherwise, the same column value will be used for both\nlink and text.\n\n    {key: \"contact\", formatter: \"email\", linkFrom: \"contactEmail\"}\n\nIt will use the respective\n[emptyCellValue](DataTable.Column.html#property_emptyCellValue)\ncolumn configuration attribute\nfor each of the value and the link if either is empty.\nIf the link value is still empty, it will return the value with no link.\n\nApplies the CSS className `yui3-datatable-email` to the cell."
      },
      "link": {
       "!type": "fn(col: +yui.Object) -> fn()",
       "!doc": "Returns a function that produces links.\nIf the column definition contains a property\n[linkFrom](DataTable.Column.html#property_linkFrom) it will use the value\nin that field for the link, otherwise, the same column value will be used for both\nlink and text.\n\n    {key: \"company\", formatter: \"link\", linkFrom: \"webSite\"}\n\nIt will use the respective\n[emptyCellValue](DataTable.Column.html#property_emptyCellValue)\n column configuration attribute\nfor each of the value and the link if either is empty.\nIf the link value is still empty, it will return the value with no link.\n\nApplies the CSS className `yui3-datatable-link` to the cell."
      },
      "number": {
       "!type": "fn(col: +yui.Object) -> fn()",
       "!doc": "Returns a formatter function that formats values using\nthe [Number.format](Number.html#method_format) method.\nIt looks for the format to apply in the\n[numberFormat](DataTable.Column.html#property_numberFormat)\nproperty of the column or in the\n[numberFormat](DataTable.html#attr_numberFormat)\nattribute of the whole table.\n\n     {key: \"weight\", formatter: \"number\", numberFormat: {\n         decimalPlaces:2,\n         decimalSeparator: \",\",\n         thousandsSeparator: \",\",\n         suffix: \"kg\"\n     }}\n\nSee [Number.format](Number.html#method_format) for the available format specs.\n\nAnything that cannot be parsed as a number will be returned unchanged.\n\nApplies the CSS className `yui3-datatable-number` to the cell."
      },
      "lookup": {
       "!type": "fn(col: +yui.Object) -> fn()",
       "!doc": "Returns a formatter function that returns texts from a lookup table\nbased on the stored value.\n\nIt looks for the translation to apply in the\n[lookupTable](DataTable.Column.html#property_lookupTable) property of the\ncolumn in either of these two formats:\n\n    {key: \"status\", formatter: \"lookup\", lookupTable: {\n        0: \"unknown\",\n        1: \"requested\",\n        2: \"approved\",\n        3: \"delivered\"\n    }},\n    {key: \"otherStatus\", formatter: \"lookup\", lookupTable: [\n        {value:0, text: \"unknown\"},\n        {value:1, text: \"requested\"},\n        {value:2, text: \"approved\"},\n        {value:3, text: \"delivered\"}\n    ]}\n\nApplies the CSS className `yui3-datatable-lookup` to the cell."
      }
     }
    }
   }
  },
  "datatype_date": {
   "Date": {
    "!type": "fn()",
    "prototype": {
     "format": {
      "!type": "fn(oDate: +datatype_date.Date, oConfig: +yui.Object) -> +HTML",
      "!doc": "Takes a native JavaScript Date and formats it as a string for display to user."
     },
     "isValidDate": {
      "!type": "fn(oDate: +datatype_date.Date) -> bool",
      "!doc": "Checks whether a native JavaScript Date contains a valid value."
     },
     "areEqual": {
      "!type": "fn(aDate: +datatype_date.Date, bDate: +datatype_date.Date) -> bool",
      "!doc": "Checks whether two dates correspond to the same date and time."
     },
     "isGreater": {
      "!type": "fn(aDate: +datatype_date.Date, bDate: +datatype_date.Date) -> bool",
      "!doc": "Checks whether the first date comes later than the second."
     },
     "isGreaterOrEqual": {
      "!type": "fn(aDate: +datatype_date.Date, bDate: +datatype_date.Date) -> bool",
      "!doc": "Checks whether the first date comes later than or is the same as\nthe second."
     },
     "isInRange": {
      "!type": "fn(aDate: +datatype_date.Date, bDate: +datatype_date.Date, cDate: +datatype_date.Date) -> bool",
      "!doc": "Checks whether the date is between two other given dates."
     },
     "addDays": {
      "!type": "fn(oDate: +datatype_date.Date, numDays: number) -> +datatype_date.Date",
      "!doc": "Adds a specified number of days to the given date."
     },
     "addMonths": {
      "!type": "fn(oDate: +datatype_date.Date, numMonths: number) -> +datatype_date.Date",
      "!doc": "Adds a specified number of months to the given date."
     },
     "addYears": {
      "!type": "fn(oDate: +datatype_date.Date, numYears: number) -> +datatype_date.Date",
      "!doc": "Adds a specified number of years to the given date."
     },
     "listOfDatesInMonth": {
      "!type": "fn(oDate: +datatype_date.Date) -> +yui.Array",
      "!doc": "Lists all dates in a given month."
     },
     "daysInMonth": {
      "!type": "fn(oDate: +datatype_date.Date) -> number",
      "!doc": "Takes a native JavaScript Date and returns the number of days\nin the month that the given date belongs to."
     },
     "parse": {
      "!type": "fn(data: +datatype_date.Date) -> +datatype_date.Date",
      "!doc": "Converts data to type Date."
     }
    }
   }
  },
  "dd": {
   "Plugin": {
    "DDConstrained": {
     "!type": "fn() -> +dd.Plugin.DDConstrained",
     "prototype": {
      "!proto": "base.Base.prototype",
      "stickX": {
       "!type": "bool",
       "!doc": "Stick the drag movement to the X-Axis. Default: false"
      },
      "stickY": {
       "!type": "bool",
       "!doc": "Stick the drag movement to the Y-Axis"
      },
      "tickX": {
       "!type": "number",
       "!doc": "The X tick offset the drag node should snap to on each drag move. False for no ticks. Default: false"
      },
      "tickY": {
       "!type": "number",
       "!doc": "The Y tick offset the drag node should snap to on each drag move. False for no ticks. Default: false"
      },
      "tickXArray": {
       "!type": "+yui.Array",
       "!doc": "An array of page coordinates to use as X ticks for drag movement."
      },
      "tickYArray": {
       "!type": "+yui.Array",
       "!doc": "An array of page coordinates to use as Y ticks for drag movement."
      },
      "gutter": {
       "!type": "string",
       "!doc": "CSS style string for the gutter of a region (supports negative values): 5 0\n(sets top and bottom to 5px, left and right to 0px), 1 2 3 4 (top 1px, right 2px, bottom 3px, left 4px)"
      },
      "constrain": {
       "!type": "string",
       "!doc": "Will attempt to constrain the drag node to the boundaries. Arguments:<br>\nview: Contrain to Viewport<br>\n#selector_string: Constrain to this node<br>\n{Region Object}: An Object Literal containing a valid region (top, right, bottom, left) of page positions"
      },
      "constrain2region": {
       "!type": "+yui.Object",
       "!doc": "An Object Literal containing a valid region (top, right, bottom, left) of page positions to constrain the drag node to."
      },
      "constrain2node": {
       "!type": "+yui.Object",
       "!doc": "Will attempt to constrain the drag node to the boundaries of this node."
      },
      "constrain2view": {
       "!type": "+yui.Object",
       "!doc": "Will attempt to constrain the drag node to the boundaries of the viewport region."
      },
      "cacheRegion": {
       "!type": "bool",
       "!doc": "Should the region be cached for performace. Default: true"
      },
      "resetCache": {
       "!type": "fn()",
       "!doc": "Reset the internal region cache."
      },
      "getRegion": {
       "!type": "fn(inc: bool) -> +yui.Object",
       "!doc": "Get the active region: viewport, node, custom region"
      },
      "inRegion": {
       "!type": "fn(xy: +yui.Array) -> bool",
       "!doc": "Checks if the XY passed or the dragNode is inside the active region."
      },
      "align": {
       "!type": "fn()",
       "!doc": "Modifies the Drag.actXY method from the after drag:align event. This is where the constraining happens."
      },
      "drag": {
       "!type": "fn()",
       "!doc": "Fires after drag:drag. Handle the tickX and tickX align events."
      }
     }
    },
    "Drop": {
     "!type": "fn() -> +dd.Plugin.Drop",
     "prototype": {
      "!proto": "dd.DD.Drop.prototype",
      "NAME": {
       "!type": "string",
       "!doc": "dd-drop-plugin"
      },
      "NS": {
       "!type": "string",
       "!doc": "The Drop instance will be placed on the Node instance under the drop namespace. It can be accessed via Node.drop;"
      }
     }
    },
    "Drag": {
     "!type": "fn() -> +dd.Plugin.Drag",
     "prototype": {
      "!proto": "dd.DD.Drag.prototype",
      "NAME": {
       "!type": "string",
       "!doc": "dd-plugin"
      },
      "NS": {
       "!type": "string",
       "!doc": "The Drag instance will be placed on the Node instance under the dd namespace. It can be accessed via Node.dd;"
      }
     }
    },
    "DDProxy": {
     "!type": "fn() -> +dd.Plugin.DDProxy",
     "prototype": {
      "!proto": "base.Base.prototype",
      "moveOnEnd": {
       "!type": "bool",
       "!doc": "Move the original node at the end of the drag. Default: true"
      },
      "hideOnEnd": {
       "!type": "bool",
       "!doc": "Hide the drag node at the end of the drag. Default: true"
      },
      "resizeFrame": {
       "!type": "bool",
       "!doc": "Make the Proxy node assume the size of the original node. Default: true"
      },
      "positionProxy": {
       "!type": "bool",
       "!doc": "Make the Proxy node appear in the same place as the original node. Default: true"
      },
      "borderStyle": {
       "!type": "bool",
       "!doc": "The default border style for the border of the proxy. Default: 1px solid #808080"
      },
      "cloneNode": {
       "!type": "bool",
       "!doc": "Should the node be cloned into the proxy for you. Default: false"
      }
     }
    },
    "DDWindowScroll": {
     "!type": "fn() -> +dd.Plugin.DDWindowScroll",
     "prototype": {
      "!proto": "Scroll.prototype",
      "windowScroll": {
       "!type": "bool",
       "!doc": "Turn on window scroll support, default: true"
      }
     }
    },
    "DDNodeScroll": {
     "!type": "fn() -> +dd.Plugin.DDNodeScroll",
     "prototype": {
      "!proto": "Scroll.prototype",
      "node": {
       "!type": "+node.Node",
       "!doc": "The node we want to scroll. Used to set the internal parentScroll attribute."
      }
     }
    }
   },
   "DD": {
    "DDM": {
     "!type": "fn() -> +dd.DD.DDM",
     "prototype": {
      "!proto": "base.Base.prototype",
      "dragCursor": {
       "!type": "string",
       "!doc": "The cursor to apply when dragging, if shimmed the shim will get the cursor."
      },
      "clickPixelThresh": {
       "!type": "number",
       "!doc": "The number of pixels to move to start a drag operation, default is 3."
      },
      "clickTimeThresh": {
       "!type": "number",
       "!doc": "The number of milliseconds a mousedown has to pass to start a drag operation, default is 1000."
      },
      "throttleTime": {
       "!type": "number",
       "!doc": "The number of milliseconds to throttle the mousemove event. Default: 150"
      },
      "dragMode": {
       "!type": "string",
       "!doc": "This attribute only works if the dd-drop module is active. It will set the dragMode (point, intersect, strict) of all future Drag instances."
      },
      "_active": {
       "!type": "bool",
       "!doc": "flag set when we activate our first drag, so DDM can start listening for events."
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!doc": "The PREFIX to attach to all DD CSS class names"
      },
      "activeDrag": {
       "!type": "+Drag",
       "!doc": "A reference to the currently active draggable object."
      },
      "stopDrag": {
       "!type": "fn() -> !this",
       "!doc": "Method will forcefully stop a drag operation. For example calling this from inside an ESC keypress handler will stop this drag."
      },
      "getDrag": {
       "!type": "fn(node: string) -> +yui.Object",
       "!doc": "Get a valid Drag instance back from a Node or a selector string, false otherwise"
      },
      "swapPosition": {
       "!type": "fn(n1: +node.Node, n2: +node.Node) -> +node.Node",
       "!doc": "Swap the position of 2 nodes based on their CSS positioning."
      },
      "getNode": {
       "!type": "fn(n: +node.Node) -> +node.Node",
       "!doc": "Return a node instance from the given node, selector string or Y.Base extended object."
      },
      "swapNode": {
       "!type": "fn(n1: +node.Node, n2: +node.Node) -> +node.Node",
       "!doc": "Swap the position of 2 nodes based on their DOM location."
      },
      "syncActiveShims": {
       "!type": "fn(force: bool)",
       "!doc": "This method will sync the position of the shims on the Drop Targets that are currently active."
      },
      "useHash": {
       "!type": "bool",
       "!doc": "Should we only check targets that are in the viewport on drags (for performance), default: true"
      },
      "activeDrop": {
       "!type": "+yui.Object",
       "!doc": "A reference to the active Drop Target"
      },
      "validDrops": {
       "!type": "+yui.Array",
       "!doc": "An array of the valid Drop Targets for this interaction."
      },
      "otherDrops": {
       "!type": "+yui.Object",
       "!doc": "An object literal of Other Drop Targets that we encountered during this interaction (in the case of overlapping Drop Targets)"
      },
      "targets": {
       "!type": "+yui.Array",
       "!doc": "All of the Targets"
      },
      "isOverTarget": {
       "!type": "fn(drop: +yui.Object) -> bool",
       "!doc": "Check to see if the Drag element is over the target, method varies on current mode"
      },
      "clearCache": {
       "!type": "fn()",
       "!doc": "Clears the cache data used for this interaction."
      },
      "getBestMatch": {
       "!type": "fn(drops: +yui.Array, all: bool) -> +Object or Array",
       "!doc": "This method will gather the area for all potential targets and see which has the hightest covered area and return it."
      },
      "getDrop": {
       "!type": "fn(node: string) -> +yui.Object",
       "!doc": "Get a valid Drop instance back from a Node or a selector string, false otherwise"
      },
      "regDelegate": {
       "!type": "fn()",
       "!doc": "Register a Delegate with the DDM"
      },
      "getDelegate": {
       "!type": "fn() -> ?",
       "!doc": "Get a delegate instance from a container node"
      }
     }
    },
    "Delegate": {
     "!type": "fn() -> +dd.DD.Delegate",
     "prototype": {
      "!proto": "base.Base.prototype",
      "dd": {
       "!type": "?",
       "!doc": "A reference to the temporary dd instance used under the hood."
      },
      "syncTargets": {
       "!type": "fn() -> !this",
       "!doc": "Applies the Y.Plugin.Drop to all nodes matching the cont + nodes selector query."
      },
      "createDrop": {
       "!type": "fn(node: +node.Node, groups: +yui.Array) -> ?",
       "!doc": "Apply the Drop plugin to this node"
      },
      "container": {
       "!type": "string",
       "!doc": "A selector query to get the container to listen for mousedown events on. All \"nodes\" should be a child of this container."
      },
      "nodes": {
       "!type": "string",
       "!doc": "A selector query to get the children of the \"container\" to make draggable elements from."
      },
      "invalid": {
       "!type": "string",
       "!doc": "A selector query to test a node to see if its an invalid item."
      },
      "lastNode": {
       "!type": "+node.Node",
       "!doc": "Y.Node instance of the last item dragged."
      },
      "currentNode": {
       "!type": "+node.Node",
       "!doc": "Y.Node instance of the dd node."
      },
      "dragNode": {
       "!type": "+node.Node",
       "!doc": "Y.Node instance of the dd dragNode."
      },
      "over": {
       "!type": "bool",
       "!doc": "Is the mouse currently over the container"
      },
      "target": {
       "!type": "bool",
       "!doc": "Should the items also be a drop target."
      },
      "dragConfig": {
       "!type": "+yui.Object",
       "!doc": "The default config to be used when creating the DD instance."
      },
      "handles": {
       "!type": "+yui.Array",
       "!doc": "The handles config option added to the temp DD instance."
      }
     }
    },
    "Drag": {
     "!type": "fn() -> +dd.DD.Drag",
     "prototype": {
      "!proto": "base.Base.prototype",
      "node": {
       "!type": "+node.Node",
       "!doc": "Y.Node instance to use as the element to initiate a drag operation"
      },
      "dragNode": {
       "!type": "+node.Node",
       "!doc": "Y.Node instance to use as the draggable element, defaults to node"
      },
      "offsetNode": {
       "!type": "bool",
       "!doc": "Offset the drag element by the difference in cursor position: default true"
      },
      "startCentered": {
       "!type": "bool",
       "!doc": "Center the dragNode to the mouse position on drag:start: default false"
      },
      "clickPixelThresh": {
       "!type": "number",
       "!doc": "The number of pixels to move to start a drag operation, default is 3."
      },
      "clickTimeThresh": {
       "!type": "number",
       "!doc": "The number of milliseconds a mousedown has to pass to start a drag operation, default is 1000."
      },
      "lock": {
       "!type": "bool",
       "!doc": "Set to lock this drag element so that it cant be dragged: default false."
      },
      "data": {
       "!type": "+Mixed",
       "!doc": "A payload holder to store arbitrary data about this drag object, can be used to store any value."
      },
      "move": {
       "!type": "bool",
       "!doc": "If this is false, the drag element will not move with the cursor: default true. Can be used to \"resize\" the element."
      },
      "useShim": {
       "!type": "bool",
       "!doc": "Use the protective shim on all drag operations: default true. Only works with dd-ddm, not dd-ddm-base."
      },
      "activeHandle": {
       "!type": "+node.Node",
       "!doc": "Config option is set by Drag to inform you of which handle fired the drag event (in the case that there are several handles): default false."
      },
      "primaryButtonOnly": {
       "!type": "bool",
       "!doc": "By default a drag operation will only begin if the mousedown occurred with the primary mouse button.\nSetting this to false will allow for all mousedown events to trigger a drag."
      },
      "dragging": {
       "!type": "bool",
       "!doc": "This attribute is not meant to be used by the implementor, it is meant to be used as an Event tracker so you can listen for it to change."
      },
      "target": {
       "!type": "+yui.Object",
       "!doc": "This will be a reference to the Drop instance associated with this drag if the target: true config attribute is set.."
      },
      "dragMode": {
       "!type": "string",
       "!doc": "This attribute only works if the dd-drop module is active. It will set the dragMode (point, intersect, strict) of this Drag instance."
      },
      "groups": {
       "!type": "+yui.Array",
       "!doc": "Array of groups to add this drag into."
      },
      "handles": {
       "!type": "+yui.Array",
       "!doc": "Array of valid handles to add. Adding something here will set all handles, even if previously added with addHandle"
      },
      "bubbles": {
       "!type": "+yui.Object",
       "!doc": "Controls the default bubble parent for this Drag instance. Default: Y.DD.DDM. Set to false to disable bubbling. Use bubbleTargets in config"
      },
      "haltDown": {
       "!type": "bool",
       "!doc": "Should the mousedown event be halted. Default: true"
      },
      "addToGroup": {
       "!type": "fn(g: string) -> !this",
       "!doc": "Add this Drag instance to a group, this should be used for on-the-fly group additions."
      },
      "removeFromGroup": {
       "!type": "fn(g: string) -> !this",
       "!doc": "Remove this Drag instance from a group, this should be used for on-the-fly group removals."
      },
      "deltaXY": {
       "!type": "+yui.Array",
       "!doc": "The offset of the mouse position to the elements position"
      },
      "startXY": {
       "!type": "+yui.Array",
       "!doc": "The initial mouse position"
      },
      "nodeXY": {
       "!type": "+yui.Array",
       "!doc": "The initial element position"
      },
      "lastXY": {
       "!type": "+yui.Array",
       "!doc": "The position of the element as its moving (for offset calculations)"
      },
      "actXY": {
       "!type": "+yui.Array",
       "!doc": "The xy that the node will be set to. Changing this will alter the position as its dragged."
      },
      "realXY": {
       "!type": "+yui.Array",
       "!doc": "The real xy position of the node."
      },
      "mouseXY": {
       "!type": "+yui.Array",
       "!doc": "The XY coords of the mousemove"
      },
      "region": {
       "!type": "+yui.Object",
       "!doc": "A region object associated with this drag, used for checking regions while dragging."
      },
      "validClick": {
       "!type": "fn(ev: +event_custom.EventFacade) -> bool",
       "!doc": "Method first checks to see if we have handles, if so it validates the click\nagainst the handle. Then if it finds a valid handle, it checks it against\nthe invalid handles list. Returns true if a good handle was used, false otherwise."
      },
      "removeHandle": {
       "!type": "fn(str: string) -> !this",
       "!doc": "Remove a Selector added by addHandle"
      },
      "addHandle": {
       "!type": "fn(str: string) -> !this",
       "!doc": "Add a handle to a drag element. Drag only initiates when a mousedown happens on this element."
      },
      "removeInvalid": {
       "!type": "fn(str: string) -> !this",
       "!doc": "Remove an invalid handle added by addInvalid"
      },
      "addInvalid": {
       "!type": "fn(str: string) -> !this",
       "!doc": "Add a selector string to test the handle against. If the test passes the drag operation will not continue."
      },
      "start": {
       "!type": "fn() -> !this",
       "!doc": "Starts the drag operation"
      },
      "end": {
       "!type": "fn() -> !this",
       "!doc": "Ends the drag operation"
      },
      "stopDrag": {
       "!type": "fn() -> !this",
       "!doc": "Method will forcefully stop a drag operation. For example calling this from inside an ESC keypress handler will stop this drag."
      }
     },
     "START_EVENT": {
      "!type": "?",
      "!doc": "This property defaults to \"mousedown\", but when drag-gestures is loaded, it is changed to \"gesturemovestart\""
     }
    },
    "Drop": {
     "!type": "fn() -> +dd.DD.Drop",
     "prototype": {
      "!proto": "base.Base.prototype",
      "node": {
       "!type": "+node.Node",
       "!doc": "Y.Node instance to use as the element to make a Drop Target"
      },
      "groups": {
       "!type": "+yui.Array",
       "!doc": "Array of groups to add this drop into."
      },
      "padding": {
       "!type": "string",
       "!doc": "CSS style padding to make the Drop Target bigger than the node."
      },
      "lock": {
       "!type": "bool",
       "!doc": "Set to lock this drop element."
      },
      "bubbles": {
       "!type": "+yui.Object",
       "!doc": "Controls the default bubble parent for this Drop instance. Default: Y.DD.DDM. Set to false to disable bubbling.\nUse bubbleTargets in config."
      },
      "useShim": {
       "!type": "bool",
       "!doc": "Use the Drop shim. Default: true"
      },
      "addToGroup": {
       "!type": "fn(g: string) -> !this",
       "!doc": "Add this Drop instance to a group, this should be used for on-the-fly group additions."
      },
      "removeFromGroup": {
       "!type": "fn(g: string) -> !this",
       "!doc": "Remove this Drop instance from a group, this should be used for on-the-fly group removals."
      },
      "shim": {
       "!type": "+yui.Object",
       "!doc": "Node reference to the targets shim"
      },
      "region": {
       "!type": "+yui.Object",
       "!doc": "A region object associated with this target, used for checking regions while dragging."
      },
      "overTarget": {
       "!type": "bool",
       "!doc": "This flag is tripped when a drag element is over this target."
      },
      "inGroup": {
       "!type": "fn(groups: +yui.Array) -> ?",
       "!doc": "Check if this target is in one of the supplied groups."
      },
      "sizeShim": {
       "!type": "fn()",
       "!doc": "Positions and sizes the shim with the raw data from the node,\nthis can be used to programatically adjust the Targets shim for Animation.."
      }
     }
    },
    "Scroll": {
     "!type": "fn() -> +dd.DD.Scroll",
     "prototype": {
      "!proto": "base.Base.prototype",
      "buffer": {
       "!type": "number",
       "!doc": "The number of pixels from the edge of the screen to turn on scrolling. Default: 30"
      },
      "scrollDelay": {
       "!type": "number",
       "!doc": "The number of milliseconds delay to pass to the auto scroller. Default: 235"
      },
      "host": {
       "!type": "+yui.Object",
       "!doc": "The host we are plugged into."
      },
      "windowScroll": {
       "!type": "bool",
       "!doc": "Turn on window scroll support, default: false"
      },
      "vertical": {
       "!type": "bool",
       "!doc": "Allow vertical scrolling, default: true."
      },
      "horizontal": {
       "!type": "bool",
       "!doc": "Allow horizontal scrolling, default: true."
      },
      "align": {
       "!type": "fn()",
       "!doc": "Called from the drag:align event to determine if we need to scroll."
      },
      "start": {
       "!type": "fn()",
       "!doc": "Called from the drag:start event"
      },
      "end": {
       "!type": "fn()",
       "!doc": "Called from the drag:end event"
      }
     }
    }
   }
  },
  "dial": {
   "Dial": {
    "!type": "fn(config: +yui.Object) -> +dial.Dial",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "min": {
      "!type": "number",
      "!doc": "minimum value allowed"
     },
     "max": {
      "!type": "number",
      "!doc": "maximum value allowed"
     },
     "diameter": {
      "!type": "number",
      "!doc": "diameter of the circular background object.\nOther objects scale accordingly.\nSet this only before rendering."
     },
     "handleDiameter": {
      "!type": "number",
      "!doc": "diameter of the handle object which users drag to change the value.\nDial sets the pixel dimension of the handle equal to handleDiameter * diameter.\nSet this only before rendering."
     },
     "markerDiameter": {
      "!type": "number",
      "!doc": "diameter of the marker object which follows the angle of the handle during value changes.\nDial sets the pixel dimension of the marker equal to markerDiameter * diameter.\nSet this only before rendering."
     },
     "centerButtonDiameter": {
      "!type": "number",
      "!doc": "diameter of the center button object.\nDial sets the pixel dimension of the centerButton equal to centerButtonDiameter * diameter.\nSet this only before rendering."
     },
     "value": {
      "!type": "number",
      "!doc": "initial value of the Dial"
     },
     "minorStep": {
      "!type": "number",
      "!doc": "amount to increment/decrement the dial value\nwhen the arrow up/down/left/right keys are pressed"
     },
     "majorStep": {
      "!type": "number",
      "!doc": "amount to increment/decrement the dial value\nwhen the page up/down keys are pressed"
     },
     "stepsPerRevolution": {
      "!type": "number",
      "!doc": "number of value increments in one 360 degree revolution\nof the handle around the dial"
     },
     "decimalPlaces": {
      "!type": "number",
      "!doc": "number of decimal places of accuracy in the value"
     },
     "strings": {
      "!type": "+yui.Object",
      "!doc": "visible strings for the dial UI. This attribute is\ndefined by the base Widget class but has an empty value. The\nDial is simply providing a default value for the attribute.\nGets localized strings in the current language"
     },
     "handleDistance": {
      "!type": "number",
      "!doc": "distance from the center of the dial to the\ncenter of the marker and handle, when at rest.\nThe value is a percent of the radius of the dial."
     },
     "syncUI": {
      "!type": "fn()",
      "!doc": "Synchronizes the DOM state with the attribute settings."
     }
    }
   }
  },
  "dom": {
   "DOM": {
    "!type": "fn()",
    "prototype": {
     "getText": {
      "!type": "fn(element: +HTMLElement) -> string",
      "!doc": "Returns the text content of the HTMLElement."
     },
     "setText": {
      "!type": "fn(element: +HTMLElement, content: string)",
      "!doc": "Sets the text content of the HTMLElement."
     },
     "setAttribute": {
      "!type": "fn(el: +HTMLElement, attr: string, val: string)",
      "!doc": "Provides a normalized attribute interface."
     },
     "getAttribute": {
      "!type": "fn(el: +HTMLElement, attr: string) -> string",
      "!doc": "Provides a normalized attribute interface."
     },
     "hasClass": {
      "!type": "fn(element: +HTMLElement, className: string) -> bool",
      "!doc": "Determines whether a DOM element has the given className."
     },
     "addClass": {
      "!type": "fn(element: +HTMLElement, className: string)",
      "!doc": "Adds a class name to a given DOM element."
     },
     "removeClass": {
      "!type": "fn(element: +HTMLElement, className: string)",
      "!doc": "Removes a class name from a given element."
     },
     "replaceClass": {
      "!type": "fn(element: +HTMLElement, oldClassName: string, newClassName: string)",
      "!doc": "Replace a class with another class for a given element.\nIf no oldClassName is present, the newClassName is simply added."
     },
     "toggleClass": {
      "!type": "fn(element: +HTMLElement, className: string, addClass: bool)",
      "!doc": "If the className exists on the node it is removed, if it doesnt exist it is added."
     },
     "byId": {
      "!type": "fn(id: string, doc: +yui.Object) -> +HTMLElement",
      "!doc": "Returns the HTMLElement with the given ID (Wrapper for document.getElementById)."
     },
     "elementByAxis": {
      "!type": "fn(element: +HTMLElement, axis: string, fn?: fn(), all?: bool) -> +HTMLElement",
      "!doc": "Searches the element by the given axis for the first matching element."
     },
     "contains": {
      "!type": "fn(element: +HTMLElement, needle: +HTMLElement) -> bool",
      "!doc": "Determines whether or not one HTMLElement is or contains another HTMLElement."
     },
     "inDoc": {
      "!type": "fn(element: +HTMLElement, doc: +HTMLElement) -> bool",
      "!doc": "Determines whether or not the HTMLElement is part of the document."
     },
     "create": {
      "!type": "fn(html: string, doc: +HTMLDocument) -> +HTMLElement",
      "!doc": "Creates a new dom node using the provided markup string."
     },
     "addHTML": {
      "!type": "fn(node: +HTMLElement, content: +HTMLElement, where: +HTMLElement)",
      "!doc": "Inserts content in a node at the given location"
     },
     "region": {
      "!type": "fn(element: +HTMLElement) -> +yui.Object",
      "!doc": "Returns an Object literal containing the following about this element: (top, right, bottom, left)"
     },
     "intersect": {
      "!type": "fn(element: +HTMLElement, element2: +HTMLElement, altRegion: +yui.Object) -> +yui.Object",
      "!doc": "Find the intersect information for the passed nodes."
     },
     "inRegion": {
      "!type": "fn(node: +yui.Object, node2: +yui.Object, all: bool, altRegion: +yui.Object) -> bool",
      "!doc": "Check if any part of this node is in the passed region"
     },
     "inViewportRegion": {
      "!type": "fn(element: +HTMLElement, all: bool, altRegion: +yui.Object) -> bool",
      "!doc": "Check if any part of this element is in the viewport"
     },
     "viewportRegion": {
      "!type": "fn() -> +yui.Object",
      "!doc": "Returns an Object literal containing the following about the visible region of viewport: (top, right, bottom, left)"
     },
     "winHeight": {
      "!type": "fn() -> number",
      "!doc": "Returns the inner height of the viewport (exludes scrollbar)."
     },
     "winWidth": {
      "!type": "fn() -> number",
      "!doc": "Returns the inner width of the viewport (exludes scrollbar)."
     },
     "docHeight": {
      "!type": "fn() -> number",
      "!doc": "Document height"
     },
     "docWidth": {
      "!type": "fn() -> number",
      "!doc": "Document width"
     },
     "docScrollX": {
      "!type": "fn() -> number",
      "!doc": "Amount page has been scroll horizontally"
     },
     "docScrollY": {
      "!type": "fn() -> number",
      "!doc": "Amount page has been scroll vertically"
     },
     "getXY": {
      "!type": "fn(element: ?) -> +yui.Array",
      "!doc": "Gets the current position of an element based on page coordinates.\nElement must be part of the DOM tree to have page coordinates\n(display:none or elements not appended return false)."
     },
     "getScrollbarWidth": {
      "!type": "fn() -> number",
      "!doc": "Gets the width of vertical scrollbars on overflowed containers in the body\ncontent."
     },
     "getX": {
      "!type": "fn(element: ?) -> number",
      "!doc": "Gets the current X position of an element based on page coordinates.\nElement must be part of the DOM tree to have page coordinates\n(display:none or elements not appended return false)."
     },
     "getY": {
      "!type": "fn(element: ?) -> number",
      "!doc": "Gets the current Y position of an element based on page coordinates.\nElement must be part of the DOM tree to have page coordinates\n(display:none or elements not appended return false)."
     },
     "setXY": {
      "!type": "fn(element: ?, xy: +yui.Array, noRetry: bool)",
      "!doc": "Set the position of an html element in page coordinates.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false)."
     },
     "setX": {
      "!type": "fn(element: ?, x: number)",
      "!doc": "Set the X position of an html element in page coordinates, regardless of how the element is positioned.\nThe element(s) must be part of the DOM tree to have page coordinates (display:none or elements not appended return false)."
     },
     "setY": {
      "!type": "fn(element: ?, y: number)",
      "!doc": "Set the Y position of an html element in page coordinates, regardless of how the element is positioned.\nThe element(s) must be part of the DOM tree to have page coordinates (display:none or elements not appended return false)."
     },
     "swapXY": {
      "!type": "fn(node: +node.Node, otherNode: +node.Node) -> +node.Node",
      "!doc": "Swap the xy position with another node"
     },
     "setWidth": {
      "!type": "fn(element: +HTMLElement, size: string)",
      "!doc": "Sets the width of the element to the given size, regardless\nof box model, border, padding, etc."
     },
     "setHeight": {
      "!type": "fn(element: +HTMLElement, size: string)",
      "!doc": "Sets the height of the element to the given size, regardless\nof box model, border, padding, etc."
     },
     "setStyle": {
      "!type": "fn(node: +HTMLElement, att: string, val: string, style?: +yui.Object)",
      "!doc": "Sets a style property for a given element."
     },
     "getStyle": {
      "!type": "fn(node: +HTMLElement, att: string, style?: +yui.Object)",
      "!doc": "Returns the current style value for the given property."
     },
     "setStyles": {
      "!type": "fn(node: +HTMLElement, hash: +yui.Object)",
      "!doc": "Sets multiple style properties."
     },
     "getComputedStyle": {
      "!type": "fn(node: +HTMLElement, att: string) -> string",
      "!doc": "Returns the computed style for the given node."
     }
    }
   },
   "Selector": {
    "!type": "fn()",
    "prototype": {
     "shorthand": {
      "!type": "+object",
      "!doc": "Mapping of shorthand tokens to corresponding attribute selector"
     },
     "operators": {
      "!type": "+object",
      "!doc": "List of operators and corresponding boolean functions.\nThese functions are passed the attribute and the current nodes value of the attribute."
     }
    },
    "useNative": {
     "!type": "?",
     "!doc": "Use the native version of `querySelectorAll`, if it exists."
    },
    "query": {
     "!type": "fn(selector: string, root: +HTMLElement, firstOnly: bool) -> [+HTMLElement]",
     "!doc": "Retrieves a set of nodes based on a given CSS selector."
    },
    "filter": {
     "!type": "fn(nodes: [+HTMLElement], selector: string) -> [+HTMLElement]",
     "!doc": "Filters out nodes that do not match the given CSS selector."
    },
    "test": {
     "!type": "fn(node: +HTMLElement, selector: string, root: +HTMLElement) -> bool",
     "!doc": "Determines whether or not the given node matches the given CSS selector."
    },
    "ancestor": {
     "!type": "fn(node: +HTMLElement, selector: string, testSelf: bool) -> +HTMLElement",
     "!doc": "A convenience method to emulate Y.Nodes aNode.ancestor(selector)."
    }
   }
  },
  "editor": {
   "ContentEditable": {
    "!type": "fn() -> +editor.ContentEditable",
    "prototype": {
     "!proto": "Y.Plugin.Base.prototype",
     "use": {
      "!type": "+yui.Array",
      "!doc": "Array of modules to include in the scoped YUI instance at render time. Default: [node-base, editor-selection, stylesheet]"
     },
     "delegate": {
      "!type": "fn(type: string, fn: fn(), cont: +String, Node, sel: string) -> +event_custom.EventHandle",
      "!doc": "A delegate method passed to the instances delegate method"
     },
     "getInstance": {
      "!type": "fn() -> +yui.YUI",
      "!doc": "Get a reference to the internal YUI instance."
     },
     "render": {
      "!type": "fn(node: string) -> !this"
     },
     "focus": {
      "!type": "fn(fn: fn()) -> !this",
      "!doc": "Set the focus to the container"
     },
     "show": {
      "!type": "fn() -> !this",
      "!doc": "Show the iframe instance"
     },
     "hide": {
      "!type": "fn() -> !this",
      "!doc": "Hide the iframe instance"
     },
     "dir": {
      "!type": "string",
      "!doc": "The default text direction for this ContentEditable element. Default: ltr"
     },
     "container": {
      "!type": "string",
      "!doc": "The container to set contentEditable=true or to create on render."
     },
     "content": {
      "!type": "string",
      "!doc": "The string to inject as Editor content. Default <br>"
     },
     "defaultblock": {
      "!type": "string",
      "!doc": "The default tag to use for block level items, defaults to: p"
     },
     "extracss": {
      "!type": "string",
      "!doc": "A string of CSS to add to the Head of the Editor"
     },
     "id": {
      "!type": "string",
      "!doc": "Set the id of the new Node. (optional)"
     },
     "lang": {
      "!type": "string",
      "!doc": "The default language. Default: en-US"
     },
     "linkedcss": {
      "!type": "string",
      "!doc": "An array of urls to external linked style sheets"
     },
     "node": {
      "!type": "+node.Node",
      "!doc": "The Node instance of the container."
     }
    },
    "THROTTLE_TIME": {
     "!type": "number",
     "!doc": "The throttle time for key events in IE"
    },
    "DOM_EVENTS": {
     "!type": "+yui.Object",
     "!doc": "The DomEvents that the frame automatically attaches and bubbles"
    },
    "HTML": {
     "!type": "string",
     "!doc": "The template string used to create the ContentEditable element"
    },
    "NAME": {
     "!type": "string",
     "!doc": "The name of the class (contentEditable)"
    },
    "NS": {
     "!type": "string",
     "!doc": "The namespace on which ContentEditable plugin will reside."
    }
   },
   "Plugin": {
    "CreateLinkBase": {
     "!type": "fn()",
     "STRINGS": {
      "!type": "?",
      "!doc": "Strings used by the plugin"
     },
     "PROMPT": {
      "!type": "?",
      "!doc": "String used for the Prompt"
     },
     "DEFAULT": {
      "!type": "?",
      "!doc": "String used as the default value of the Prompt"
     }
    },
    "ExecCommand": {
     "COMMANDS": {
      "!type": "fn()",
      "createlink": {
       "!type": "fn(cmd: string) -> +node.Node",
       "!doc": "Override for the createlink method from the <a href=\"Plugin.CreateLinkBase.html\">CreateLinkBase</a> plugin."
      },
      "wrap": {
       "!type": "fn(cmd: string, tag: string) -> +node.NodeList",
       "!doc": "Wraps the content with a new element of type (tag)"
      },
      "inserthtml": {
       "!type": "fn(cmd: string, html: string) -> +node.Node",
       "!doc": "Inserts the provided HTML at the cursor, should be a single element."
      },
      "insertandfocus": {
       "!type": "fn(cmd: string, html: string) -> +node.Node",
       "!doc": "Inserts the provided HTML at the cursor, and focuses the cursor afterwards."
      },
      "insertbr": {
       "!type": "fn(cmd: string)",
       "!doc": "Inserts a BR at the current cursor position"
      },
      "insertimage": {
       "!type": "fn(cmd: string, img: string) -> +node.Node",
       "!doc": "Inserts an image at the cursor position"
      },
      "addclass": {
       "!type": "fn(cmd: string, cls: string) -> +node.NodeList",
       "!doc": "Add a class to all of the elements in the selection"
      },
      "removeclass": {
       "!type": "fn(cmd: string, cls: string) -> +node.NodeList",
       "!doc": "Remove a class from all of the elements in the selection"
      },
      "forecolor": {
       "!type": "fn(cmd: string, val: string) -> +node.NodeList",
       "!doc": "Adds a forecolor to the current selection, or creates a new element and applies it"
      },
      "backcolor": {
       "!type": "fn(cmd: string, val: string) -> +node.NodeList",
       "!doc": "Adds a background color to the current selection, or creates a new element and applies it"
      },
      "hilitecolor": {
       "!type": "fn(cmd: string, val: string) -> +node.NodeList",
       "!doc": "Sugar method, calles backcolor"
      },
      "fontname2": {
       "!type": "fn(cmd: string, val: string) -> +node.NodeList",
       "!doc": "Adds a font name to the current selection, or creates a new element and applies it"
      },
      "fontsize2": {
       "!type": "fn(cmd: string, val: string) -> +node.NodeList",
       "!doc": "Adds a fontsize to the current selection, or creates a new element and applies it"
      },
      "insertorderedlist": {
       "!type": "fn(cmd: string)",
       "!doc": "Overload for list"
      },
      "insertunorderedlist": {
       "!type": "fn(cmd: string)",
       "!doc": "Overload for list"
      },
      "list": {
       "!type": "fn(cmd: string, tag: string)",
       "!doc": "Noramlizes lists creation/destruction for IE. All others pass through to native calls"
      },
      "justify": {
       "!type": "fn(cmd: string, val: string)",
       "!doc": "Noramlizes alignment for Webkit Browsers"
      },
      "justifycenter": {
       "!type": "fn()",
       "!doc": "Override method for justify"
      },
      "justifyleft": {
       "!type": "fn()",
       "!doc": "Override method for justify"
      },
      "justifyright": {
       "!type": "fn()",
       "!doc": "Override method for justify"
      },
      "justifyfull": {
       "!type": "fn()",
       "!doc": "Override method for justify"
      }
     },
     "prototype": {
      "bidi": {
       "!type": "?",
       "!doc": "bidi execCommand override for setting the text direction of a node.\nThis property is added to the `Y.Plugin.ExecCommands.COMMANDS`\ncollection."
      },
      "command": {
       "!type": "fn(action: string, value: string) -> +node.Node",
       "!doc": "Execute a command on the frames document."
      },
      "getInstance": {
       "!type": "fn() -> +yui.YUI",
       "!doc": "Gets the instance of YUI bound to the parent frame"
      }
     },
     "NAME": {
      "!type": "?",
      "!doc": "execCommand"
     },
     "NS": {
      "!type": "?",
      "!doc": "exec"
     }
    },
    "EditorBidi": {
     "!type": "fn() -> +editor.Plugin.EditorBidi",
     "prototype": {
      "!proto": "base.Base.prototype"
     },
     "EVENTS": {
      "!type": "?",
      "!doc": "The events to check for a direction change on"
     },
     "BLOCKS": {
      "!type": "?",
      "!doc": "More elements may be needed. BODY *must* be in the list to take care of the special case.\n\nblockParent could be changed to use inst.EditorSelection.BLOCKS\ninstead, but that would make Y.Plugin.EditorBidi.blockParent\nunusable in non-RTE contexts (it being usable is a nice\nside-effect)."
     },
     "DIV_WRAPPER": {
      "!type": "?",
      "!doc": "Template for creating a block element"
     },
     "blockParent": {
      "!type": "fn()",
      "!doc": "Returns a block parent for a given element"
     },
     "_NODE_SELECTED": {
      "!type": "?",
      "!doc": "The data key to store on the node."
     },
     "addParents": {
      "!type": "fn()",
      "!doc": "Generates a list of all the block parents of the current NodeList"
     },
     "NAME": {
      "!type": "?",
      "!doc": "editorBidi"
     },
     "NS": {
      "!type": "?",
      "!doc": "editorBidi"
     },
     "RE_TEXT_ALIGN": {
      "!type": "?",
      "!doc": "Regex for testing/removing text-align style from an element"
     },
     "removeTextAlign": {
      "!type": "fn()",
      "!doc": "Method to test a nodes style attribute for text-align and removing it."
     }
    },
    "EditorBR": {
     "!type": "fn() -> +editor.Plugin.EditorBR",
     "prototype": {
      "!proto": "base.Base.prototype"
     },
     "NAME": {
      "!type": "?",
      "!doc": "editorBR"
     },
     "NS": {
      "!type": "?",
      "!doc": "editorBR"
     }
    },
    "EditorParaBase": {
     "!type": "fn() -> +editor.Plugin.EditorParaBase",
     "prototype": {
      "!proto": "base.Base.prototype"
     },
     "NAME": {
      "!type": "?",
      "!doc": "editorPara"
     },
     "NS": {
      "!type": "?",
      "!doc": "editorPara"
     }
    },
    "EditorParaIE": {
     "!type": "fn() -> +editor.Plugin.EditorParaIE",
     "prototype": {
      "!proto": "editor.Plugin.EditorParaBase.prototype"
     },
     "NAME": {
      "!type": "?",
      "!doc": "editorPara"
     },
     "NS": {
      "!type": "?",
      "!doc": "editorPara"
     }
    },
    "EditorPara": {
     "!type": "fn() -> +editor.Plugin.EditorPara",
     "prototype": {
      "!proto": "editor.Plugin.EditorParaBase.prototype"
     },
     "NAME": {
      "!type": "?",
      "!doc": "editorPara"
     },
     "NS": {
      "!type": "?",
      "!doc": "editorPara"
     }
    },
    "EditorTab": {
     "!type": "fn() -> +editor.Plugin.EditorTab",
     "prototype": {
      "!proto": "base.Base.prototype"
     },
     "NAME": {
      "!type": "?",
      "!doc": "editorTab"
     },
     "NS": {
      "!type": "?",
      "!doc": "tab"
     }
    },
    "EditorLists": {
     "!type": "fn() -> +editor.Plugin.EditorLists",
     "prototype": {
      "!proto": "base.Base.prototype"
     },
     "NON": {
      "!type": "?",
      "!doc": "The non element placeholder, used for positioning the cursor and filling empty items"
     },
     "NONSEL": {
      "!type": "?",
      "!doc": "The selector query to get all non elements"
     },
     "REMOVE": {
      "!type": "?",
      "!doc": "The items to removed from a list when a list item is moved, currently removes BR nodes"
     },
     "NAME": {
      "!type": "?",
      "!doc": "editorLists"
     },
     "NS": {
      "!type": "?",
      "!doc": "lists"
     }
    }
   },
   "EditorBase": {
    "!type": "fn() -> +editor.EditorBase",
    "prototype": {
     "!proto": "base.Base.prototype",
     "frame": {
      "!type": "?",
      "!doc": "Internal reference to the Y.ContentEditable instance"
     },
     "copyStyles": {
      "!type": "fn(from: +node.Node, to: +node.Node)",
      "!doc": "Copy certain styles from one node instance to another (used for new paragraph creation mainly)"
     },
     "getDomPath": {
      "!type": "fn(node: +node.Node)",
      "!doc": "Walk the dom tree from this node up to body, returning a reversed array of parents."
     },
     "execCommand": {
      "!type": "fn(cmd: string, val: string) -> +node.Node",
      "!doc": "Pass through to the frame.execCommand method"
     },
     "getInstance": {
      "!type": "fn() -> +yui.YUI",
      "!doc": "Get the YUI instance of the frame"
     },
     "render": {
      "!type": "fn(node: +dom.Selector) -> !this",
      "!doc": "Renders the Y.ContentEditable to the passed node."
     },
     "focus": {
      "!type": "fn(fn: fn()) -> !this",
      "!doc": "Focus the contentWindow of the iframe"
     },
     "show": {
      "!type": "fn() -> !this",
      "!doc": "Handles the showing of the Editor instance. Currently only handles the iframe"
     },
     "hide": {
      "!type": "fn() -> !this",
      "!doc": "Handles the hiding of the Editor instance. Currently only handles the iframe"
     },
     "getContent": {
      "!type": "fn() -> string",
      "!doc": "(Un)Filters the content of the Editor, cleaning YUI related code. //TODO better filtering"
     },
     "content": {
      "!type": "?",
      "!doc": "The content to load into the Editor Frame"
     },
     "dir": {
      "!type": "?",
      "!doc": "The value of the dir attribute on the HTML element of the frame. Default: ltr"
     },
     "linkedcss": {
      "!type": "string",
      "!doc": "An array of urls to external linked style sheets"
     },
     "extracss": {
      "!type": "string",
      "!doc": "A string of CSS to add to the Head of the Editor"
     },
     "defaultblock": {
      "!type": "string",
      "!doc": "The default tag to use for block level items, defaults to: p"
     }
    },
    "NORMALIZE_FONTSIZE": {
     "!type": "fn()",
     "!doc": "Pulls the fontSize from a node, then checks for string values (x-large, x-small)\nand converts them to pixel sizes. If the parsed size is different from the original, it calls\nnode.setStyle to update the node with a pixel size for normalization."
    },
    "TABKEY": {
     "!type": "?",
     "!doc": "The HTML markup to use for the tabkey"
    },
    "FILTER_RGB": {
     "!type": "fn(String: ?) -> ?",
     "!doc": "Converts an RGB color string to a hex color, example: rgb(0, 255, 0) converts to #00ff00"
    },
    "TAG2CMD": {
     "!type": "?",
     "!doc": "A hash table of tags to their execcomands"
    },
    "NC_KEYS": {
     "!type": "+yui.Object",
     "!doc": "Hash table of keys to fire a nodeChange event for."
    },
    "USE": {
     "!type": "+yui.Array",
     "!doc": "The default modules to use inside the Frame"
    },
    "NAME": {
     "!type": "?",
     "!doc": "The Class Name: editorBase"
    },
    "STRINGS": {
     "!type": "?",
     "!doc": "Editor Strings.  By default contains only the `title` property for the\nTitle of frame document (default \"Rich Text Editor\")."
    }
   },
   "EditorSelection": {
    "!type": "fn() -> +editor.EditorSelection",
    "removeFontFamily": {
     "!type": "fn()",
     "!doc": "Utility method to remove dead font-family styles from an element."
    },
    "filter": {
     "!type": "fn()",
     "!doc": "Performs a prefilter on all nodes in the editor. Looks for nodes with a style: fontFamily or font face\nIt then creates a dynamic class assigns it and removed the property. This is so that we dont lose\nthe fontFamily when selecting nodes."
    },
    "filterBlocks": {
     "!type": "fn()",
     "!doc": "Method attempts to replace all \"orphined\" text nodes in the main body by wrapping them with a <p>. Called from filter."
    },
    "REG_FONTFAMILY": {
     "!type": "?",
     "!doc": "Regular Expression used to find dead font-family styles"
    },
    "REG_CHAR": {
     "!type": "?",
     "!doc": "Regular Expression to determine if a string has a character in it"
    },
    "REG_NON": {
     "!type": "?",
     "!doc": "Regular Expression to determine if a string has a non-character in it"
    },
    "REG_NOHTML": {
     "!type": "?",
     "!doc": "Regular Expression to remove all HTML from a string"
    },
    "unfilter": {
     "!type": "fn() -> string",
     "!doc": "Undoes what filter does enough to return the HTML from the Editor, then re-applies the filter."
    },
    "resolve": {
     "!type": "fn(n: +HTMLElement) -> +node.Node",
     "!doc": "Resolve a node from the selection object and return a Node instance"
    },
    "getText": {
     "!type": "fn(node: +node.Node) -> string",
     "!doc": "Returns the innerHTML of a node with all HTML tags removed."
    },
    "ALL": {
     "!type": "?",
     "!doc": "The selector to use when looking for Nodes to cache the value of: [style],font[face]"
    },
    "BLOCKS": {
     "!type": "?",
     "!doc": "The selector to use when looking for block level items."
    },
    "TMP": {
     "!type": "?",
     "!doc": "The temporary fontname applied to a selection to retrieve their values: yui-tmp"
    },
    "DEFAULT_TAG": {
     "!type": "?",
     "!doc": "The default tag to use when creating elements: span"
    },
    "CURID": {
     "!type": "?",
     "!doc": "The id of the outer cursor wrapper"
    },
    "CUR_WRAPID": {
     "!type": "?",
     "!doc": "The id used to wrap the inner space of the cursor position"
    },
    "CURSOR": {
     "!type": "?",
     "!doc": "The default HTML used to focus the cursor.."
    },
    "ROOT": {
     "!type": "?",
     "!doc": "The default HTML element from which data will be retrieved. Default: body"
    },
    "cleanCursor": {
     "!type": "fn()",
     "!doc": "Called from Editor keydown to remove the \"extra\" space before the cursor."
    },
    "prototype": {
     "text": {
      "!type": "string",
      "!doc": "Range text value"
     },
     "isCollapsed": {
      "!type": "bool",
      "!doc": "Flag to show if the range is collapsed or not"
     },
     "anchorNode": {
      "!type": "+node.Node",
      "!doc": "A Node instance of the parentNode of the anchorNode of the range"
     },
     "anchorOffset": {
      "!type": "number",
      "!doc": "The offset from the range object"
     },
     "anchorTextNode": {
      "!type": "+node.Node",
      "!doc": "A Node instance of the actual textNode of the range."
     },
     "focusNode": {
      "!type": "+node.Node",
      "!doc": "A Node instance of the parentNode of the focusNode of the range"
     },
     "focusOffset": {
      "!type": "number",
      "!doc": "The offset from the range object"
     },
     "focusTextNode": {
      "!type": "+node.Node",
      "!doc": "A Node instance of the actual textNode of the range."
     },
     "getSelected": {
      "!type": "fn() -> +node.NodeList",
      "!doc": "Get all the nodes in the current selection. This method will actually perform a filter first.\nThen it calls doc.execCommand(fontname, null, yui-tmp) to touch all nodes in the selection.\nThe it compiles a list of all nodes affected by the execCommand and builds a NodeList to return."
     },
     "insertContent": {
      "!type": "fn(html: string) -> +node.Node",
      "!doc": "Insert HTML at the current cursor position and return a Node instance of the newly inserted element."
     },
     "insertAtCursor": {
      "!type": "fn(html: string, node: +node.Node, offset: number, collapse: bool) -> +node.Node",
      "!doc": "Insert HTML at the current cursor position, this method gives you control over the text node to insert into and the offset where to put it."
     },
     "wrapContent": {
      "!type": "fn(tag: string) -> +node.NodeList",
      "!doc": "Get all elements inside a selection and wrap them with a new element and return a NodeList of all elements touched."
     },
     "replace": {
      "!type": "fn(se: string, re: string) -> +node.Node",
      "!doc": "Find and replace a string inside a text node and replace it with HTML focusing the node after\nto allow you to continue to type."
     },
     "remove": {
      "!type": "fn() -> !this",
      "!doc": "Destroy the range."
     },
     "createRange": {
      "!type": "fn() -> +Range",
      "!doc": "Wrapper for the different range creation methods."
     },
     "selectNode": {
      "!type": "fn(node: +node.Node, collapse: bool) -> !this",
      "!doc": "Select a Node (hilighting it)."
     },
     "setCursor": {
      "!type": "fn() -> +node.Node",
      "!doc": "Put a placeholder in the DOM at the current cursor position."
     },
     "getCursor": {
      "!type": "fn() -> +node.Node",
      "!doc": "Get the placeholder in the DOM at the current cursor position."
     },
     "removeCursor": {
      "!type": "fn(keep: bool) -> +node.Node",
      "!doc": "Remove the cursor placeholder from the DOM."
     },
     "focusCursor": {
      "!type": "fn() -> +node.Node",
      "!doc": "Gets a stored cursor and focuses it for editing, must be called sometime after setCursor"
     },
     "toString": {
      "!type": "fn() -> string",
      "!doc": "Generic toString for logging."
     },
     "getEditorOffset": {
      "!type": "fn(node?: +Y.Node) -> ?",
      "!doc": "Gets the offset of the selection for the selection within the current\neditor"
     }
    }
   },
   "Frame": {
    "!type": "fn() -> +editor.Frame",
    "prototype": {
     "!proto": "base.Base.prototype",
     "use": {
      "!type": "+yui.Array",
      "!doc": "Array of modules to include in the scoped YUI instance at render time. Default: [none, selector-css2]"
     },
     "delegate": {
      "!type": "fn(type: string, fn: fn(), cont: string, sel: string) -> +event_custom.EventHandle",
      "!doc": "A delegate method passed to the instances delegate method"
     },
     "getInstance": {
      "!type": "fn() -> +yui.YUI",
      "!doc": "Get a reference to the internal YUI instance."
     },
     "render": {
      "!type": "fn(node: string) -> !this",
      "!doc": "Render the iframe into the container config option or open the window."
     },
     "focus": {
      "!type": "fn(fn: fn()) -> !this",
      "!doc": "Set the focus to the iframe"
     },
     "show": {
      "!type": "fn() -> !this",
      "!doc": "Show the iframe instance"
     },
     "hide": {
      "!type": "fn() -> !this",
      "!doc": "Hide the iframe instance"
     },
     "title": {
      "!type": "string",
      "!doc": "The title to give the blank page."
     },
     "dir": {
      "!type": "string",
      "!doc": "The default text direction for this new frame. Default: ltr"
     },
     "lang": {
      "!type": "string",
      "!doc": "The default language. Default: en-US"
     },
     "src": {
      "!type": "string",
      "!doc": "The src of the iframe/window. Defaults to javascript:;"
     },
     "designMode": {
      "!type": "bool",
      "!doc": "Should designMode be turned on after creation."
     },
     "content": {
      "!type": "string",
      "!doc": "The string to inject into the body of the new frame/window."
     },
     "basehref": {
      "!type": "string",
      "!doc": "The base href to use in the iframe."
     },
     "container": {
      "!type": "string",
      "!doc": "The container to append the iFrame to on render."
     },
     "node": {
      "!type": "+node.Node",
      "!doc": "The Node instance of the iframe."
     },
     "id": {
      "!type": "string",
      "!doc": "Set the id of the new Node. (optional)"
     },
     "linkedcss": {
      "!type": "string",
      "!doc": "An array of urls to external linked style sheets"
     },
     "extracss": {
      "!type": "string",
      "!doc": "A string of CSS to add to the Head of the Editor"
     },
     "defaultblock": {
      "!type": "string",
      "!doc": "The default tag to use for block level items, defaults to: p"
     }
    },
    "THROTTLE_TIME": {
     "!type": "number",
     "!doc": "The throttle time for key events in IE"
    },
    "DOM_EVENTS": {
     "!type": "+yui.Object",
     "!doc": "The DomEvents that the frame automatically attaches and bubbles"
    },
    "DEFAULT_CSS": {
     "!type": "string",
     "!doc": "The default css used when creating the document."
    },
    "HTML": {
     "!type": "string",
     "!doc": "The template string used to create the iframe, deprecated to use DOM instead of innerHTML"
    },
    "IFRAME_ATTRS": {
     "!type": "+yui.Object",
     "!doc": "Attributes to auto add to the dynamic iframe under the hood"
    },
    "PAGE_HTML": {
     "!type": "string",
     "!doc": "The template used to create the page when created dynamically."
    },
    "getDocType": {
     "!type": "fn() -> string",
     "!doc": "Parses document.doctype and generates a DocType to match the parent page, if supported.\nFor IE8, it grabs document.all[0].nodeValue and uses that. For IE < 8, it falls back to Frame.DOC_TYPE."
    },
    "DOC_TYPE": {
     "!type": "string",
     "!doc": "The DOCTYPE to prepend to the new document when created. Should match the one on the page being served."
    },
    "META": {
     "!type": "string",
     "!doc": "The meta-tag for Content-Type to add to the dynamic document"
    },
    "NAME": {
     "!type": "string",
     "!doc": "The name of the class (frame)"
    },
    "NS": {
     "!type": "string",
     "!doc": "The namespace on which Frame plugin will reside."
    }
   }
  },
  "escape": {
   "Escape": {
    "!type": "fn()",
    "html": {
     "!type": "fn(string: string) -> string",
     "!doc": "Returns a copy of the specified string with special HTML characters\nescaped. The following characters will be converted to their\ncorresponding character entities:\n\n    & < > \"  / `\n\nThis implementation is based on the [OWASP HTML escaping\nrecommendations][1]. In addition to the characters in the OWASP\nrecommendations, we also escape the <code>&#x60;</code> character, since IE\ninterprets it as an attribute delimiter.\n\nIf _string_ is not already a string, it will be coerced to a string.\n\n[1]: http://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet"
    },
    "regex": {
     "!type": "fn(string: string) -> string",
     "!doc": "Returns a copy of the specified string with special regular expression\ncharacters escaped, allowing the string to be used safely inside a regex.\nThe following characters, and all whitespace characters, are escaped:\n\n    -  ^ * ( ) + [ ] { } | \\ , . ?\n\nIf _string_ is not already a string, it will be coerced to a string."
    }
   }
  },
  "event_custom": {
   "CustomEvent": {
    "!type": "fn(type: string, defaults: +yui.Object) -> +event_custom.CustomEvent",
    "prototype": {
     "type": {
      "!type": "string",
      "!doc": "The type of event, returned to subscribers when the event fires"
     },
     "silent": {
      "!type": "bool",
      "!doc": "By default all custom events are logged in the debug build, set silent\nto true to disable debug outpu for this event."
     },
     "subscribers": {
      "!type": "+Subscriber {}",
      "!doc": "The subscribers to this event"
     },
     "afters": {
      "!type": "+Subscriber {}",
      "!doc": "After subscribers"
     },
     "monitored": {
      "!type": "bool",
      "!doc": "Monitor when an event is attached or detached."
     },
     "broadcast": {
      "!type": "number",
      "!doc": "If 0, this event does not broadcast.  If 1, the YUI instance is notified\nevery time this event fires.  If 2, the YUI instance and the YUI global\n(if event is enabled on the global) are notified every time this event\nfires."
     },
     "queuable": {
      "!type": "bool",
      "!doc": "Specifies whether this event should be queued when the host is actively\nprocessing an event.  This will effect exectution order of the callbacks\nfor the various events."
     },
     "fired": {
      "!type": "bool",
      "!doc": "This event has fired if true"
     },
     "firedWith": {
      "!type": "+yui.Array",
      "!doc": "An array containing the arguments the custom event\nwas last fired with."
     },
     "fireOnce": {
      "!type": "bool",
      "!doc": "This event should only fire one time if true, and if\nit has fired, any new subscribers should be notified\nimmediately."
     },
     "async": {
      "!type": "bool",
      "!doc": "fireOnce listeners will fire syncronously unless async\nis set to true"
     },
     "stopped": {
      "!type": "number",
      "!doc": "Flag for stopPropagation that is modified during fire()\n1 means to stop propagation to bubble targets.  2 means\nto also stop additional subscribers on this target."
     },
     "prevented": {
      "!type": "number",
      "!doc": "Flag for preventDefault that is modified during fire().\nif it is not 0, the default behavior for this event"
     },
     "host": {
      "!type": "+event_custom.EventTarget",
      "!doc": "Specifies the host for this custom event.  This is used\nto enable event bubbling"
     },
     "defaultFn": {
      "!type": "fn()",
      "!doc": "The default function to execute after event listeners\nhave fire, but only if the default action was not\nprevented."
     },
     "defaultTargetOnly": {
      "!type": "bool",
      "!doc": "Flag for the default function to execute only if the\nfiring event is the current target. This happens only\nwhen using custom event delegation and setting the\nflag to `true` mimics the behavior of event delegation\nin the DOM."
     },
     "stoppedFn": {
      "!type": "fn()",
      "!doc": "The function to execute if a subscriber calls\nstopPropagation or stopImmediatePropagation"
     },
     "preventedFn": {
      "!type": "fn()",
      "!doc": "The function to execute if a subscriber calls\npreventDefault"
     },
     "emitFacade": {
      "!type": "bool",
      "!doc": "If set to true, the custom event will deliver an EventFacade object\nthat is similar to a DOM event object."
     },
     "signature": {
      "!type": "number",
      "!doc": "Supports multiple options for listener signatures in order to\nport YUI 2 apps."
     },
     "context": {
      "!type": "+object",
      "!doc": "The context the the event will fire from by default.  Defaults to the YUI\ninstance."
     },
     "preventable": {
      "!type": "bool",
      "!doc": "Specifies whether or not this events default function\ncan be cancelled by a subscriber by executing preventDefault()\non the event facade"
     },
     "bubbles": {
      "!type": "bool",
      "!doc": "Specifies whether or not a subscriber can stop the event propagation\nvia stopPropagation(), stopImmediatePropagation(), or halt()\n\nEvents can only bubble if emitFacade is true."
     },
     "hasSubs": {
      "!type": "fn() -> ?",
      "!doc": "Returns the number of subscribers for this event as the sum of the on()\nsubscribers and after() subscribers."
     },
     "monitor": {
      "!type": "fn(what: string) -> +event_custom.EventHandle",
      "!doc": "Monitor the event state for the subscribed event.  The first parameter\nis what should be monitored, the rest are the normal parameters when\nsubscribing to an event."
     },
     "getSubs": {
      "!type": "fn() -> +yui.Array",
      "!doc": "Get all of the subscribers to this event and any sibling event"
     },
     "applyConfig": {
      "!type": "fn(o: ?, force: bool)",
      "!doc": "Apply configuration properties.  Only applies the CONFIG whitelist"
     },
     "subscribe": {
      "!type": "fn(fn: fn()) -> +event_custom.EventHandle",
      "!doc": "Listen for this event"
     },
     "on": {
      "!type": "fn(fn: fn(), context: +yui.Object, arg: +Mixed) -> +event_custom.EventHandle",
      "!doc": "Listen for this event"
     },
     "after": {
      "!type": "fn(fn: fn(), context: +yui.Object, arg: +Mixed) -> +event_custom.EventHandle",
      "!doc": "Listen for this event after the normal subscribers have been notified and\nthe default behavior has been applied.  If a normal subscriber prevents the\ndefault behavior, it also prevents after listeners from firing."
     },
     "detach": {
      "!type": "fn(fn: fn(), context: +yui.Object) -> number",
      "!doc": "Detach listeners."
     },
     "unsubscribe": {
      "!type": "fn(fn: fn(), context: +yui.Object) -> number",
      "!doc": "Detach listeners."
     },
     "log": {
      "!type": "fn(msg: string, cat: string)",
      "!doc": "Logger abstraction to centralize the application of the silent flag"
     },
     "fire": {
      "!type": "fn(arguments: +yui.Object) -> bool",
      "!doc": "Notifies the subscribers.  The callback functions will be executed\nfrom the context specified when the event was created, and with the\nfollowing parameters:\n  <ul>\n  <li>The type of event</li>\n  <li>All of the arguments fire() was executed with as an array</li>\n  <li>The custom object (if any) that was passed into the subscribe()\n      method</li>\n  </ul>"
     },
     "unsubscribeAll": {
      "!type": "fn() -> number",
      "!doc": "Removes all listeners"
     },
     "detachAll": {
      "!type": "fn() -> number",
      "!doc": "Removes all listeners"
     },
     "stopPropagation": {
      "!type": "fn()",
      "!doc": "Stop propagation to bubble targets"
     },
     "stopImmediatePropagation": {
      "!type": "fn()",
      "!doc": "Stops propagation to bubble targets, and prevents any remaining\nsubscribers on the current target from executing."
     },
     "preventDefault": {
      "!type": "fn()",
      "!doc": "Prevents the execution of this events defaultFn"
     },
     "halt": {
      "!type": "fn(immediate: bool)",
      "!doc": "Stops the event propagation and prevents the default\nevent behavior."
     }
    },
    "keepDeprecatedSubs": {
     "!type": "bool",
     "!doc": "Static flag to enable population of the <a href=\"#property_subscribers\">`subscribers`</a>\nand  <a href=\"#property_subscribers\">`afters`</a> properties held on a `CustomEvent` instance.\n\nThese properties were changed to private properties (`_subscribers` and `_afters`), and\nconverted from objects to arrays for performance reasons.\n\nSetting this property to true will populate the deprecated `subscribers` and `afters`\nproperties for people who may be using them (which is expected to be rare). There will\nbe a performance hit, compared to the new array based implementation.\n\nIf you are using these deprecated properties for a use case which the public API\ndoes not support, please file an enhancement request, and we can provide an alternate\npublic implementation which doesnt have the performance cost required to maintiain the\nproperties as objects."
    }
   },
   "Do": {
    "!type": "fn()",
    "objs": {
     "!type": "?",
     "!doc": "Cache of objects touched by the utility"
    },
    "before": {
     "!type": "fn(fn: fn(), obj: ?, sFn: string, c: ?, arg: +Mixed) -> string",
     "!doc": "<p>Execute the supplied method before the specified function.  Wrapping\nfunction may optionally return an instance of the following classes to\nfurther alter runtime behavior:</p>\n<dl>\n    <dt></code>Y.Do.Halt(message, returnValue)</code></dt>\n        <dd>Immediatly stop execution and return\n        <code>returnValue</code>.  No other wrapping functions will be\n        executed.</dd>\n    <dt></code>Y.Do.AlterArgs(message, newArgArray)</code></dt>\n        <dd>Replace the arguments that the original function will be\n        called with.</dd>\n    <dt></code>Y.Do.Prevent(message)</code></dt>\n        <dd>Dont execute the wrapped function.  Other before phase\n        wrappers will be executed.</dd>\n</dl>"
    },
    "after": {
     "!type": "fn(fn: fn(), obj: ?, sFn: string, c: ?, arg: +Mixed) -> string",
     "!doc": "<p>Execute the supplied method after the specified function.  Wrapping\nfunction may optionally return an instance of the following classes to\nfurther alter runtime behavior:</p>\n<dl>\n    <dt></code>Y.Do.Halt(message, returnValue)</code></dt>\n        <dd>Immediatly stop execution and return\n        <code>returnValue</code>.  No other wrapping functions will be\n        executed.</dd>\n    <dt></code>Y.Do.AlterReturn(message, returnValue)</code></dt>\n        <dd>Return <code>returnValue</code> instead of the wrapped\n        methods original return value.  This can be further altered by\n        other after phase wrappers.</dd>\n</dl>\n\n<p>The static properties <code>Y.Do.originalRetVal</code> and\n<code>Y.Do.currentRetVal</code> will be populated for reference.</p>"
    },
    "detach": {
     "!type": "fn(handle: string)",
     "!doc": "Detach a before or after subscription."
    },
    "originalRetVal": {
     "!type": "?",
     "!doc": "Contains the return value from the wrapped method, accessible\nby after event listeners."
    },
    "currentRetVal": {
     "!type": "?",
     "!doc": "Contains the current state of the return value, consumable by\nafter event listeners, and updated if an after subscriber\nchanges the return value generated by the wrapped function."
    },
    "Method": {
     "!type": "fn(obj: ?, sFn: ?) -> +event_custom.Do.Method",
     "prototype": {
      "register": {
       "!type": "fn(sid: string, fn: fn(), when: string)",
       "!doc": "Register a aop subscriber"
      },
      "delete": {
       "!type": "fn(sid: string, fn: fn(), when: string)",
       "!doc": "Unregister a aop subscriber"
      },
      "exec": {
       "!type": "fn(arg: ?) -> ?",
       "!doc": "<p>Execute the wrapped method.  All arguments are passed into the wrapping\nfunctions.  If any of the before wrappers return an instance of\n<code>Y.Do.Halt</code> or <code>Y.Do.Prevent</code>, neither the wrapped\nfunction nor any after phase subscribers will be executed.</p>\n\n<p>The return value will be the return value of the wrapped function or one\nprovided by a wrapper function via an instance of <code>Y.Do.Halt</code> or\n<code>Y.Do.AlterReturn</code>."
      }
     }
    }
   },
   "EventFacade": {
    "!type": "fn(e: +event.Event, currentTarget: +HTMLElement)",
    "prototype": {
     "details": {
      "!type": "+yui.Array",
      "!doc": "The arguments passed to fire"
     },
     "type": {
      "!type": "string",
      "!doc": "The event type, this can be overridden by the fire() payload"
     },
     "target": {
      "!type": "+node.Node",
      "!doc": "Node reference for the targeted eventtarget"
     },
     "currentTarget": {
      "!type": "+node.Node",
      "!doc": "Node reference for the element that the listener was attached to."
     },
     "relatedTarget": {
      "!type": "+node.Node",
      "!doc": "Node reference to the relatedTarget"
     },
     "stopPropagation": {
      "!type": "fn()",
      "!doc": "Stops the propagation to the next bubble target"
     },
     "stopImmediatePropagation": {
      "!type": "fn()",
      "!doc": "Stops the propagation to the next bubble target and\nprevents any additional listeners from being exectued\non the current target."
     },
     "preventDefault": {
      "!type": "fn()",
      "!doc": "Prevents the events default behavior"
     },
     "halt": {
      "!type": "fn(immediate: bool)",
      "!doc": "Stops the event propagation and prevents the default\nevent behavior."
     }
    }
   },
   "EventTarget": {
    "!type": "fn(opts: ?)",
    "prototype": {
     "addTarget": {
      "!type": "fn(o: +event_custom.EventTarget) -> !this",
      "!doc": "Registers another EventTarget as a bubble target.  Bubble order\nis determined by the order registered.  Multiple targets can\nbe specified.\n\nEvents can only bubble if emitFacade is true.\n\nIncluded in the event-custom-complex submodule."
     },
     "getTargets": {
      "!type": "fn() -> ?",
      "!doc": "Returns an array of bubble targets for this object."
     },
     "removeTarget": {
      "!type": "fn(o: +event_custom.EventTarget) -> !this",
      "!doc": "Removes a bubble target"
     },
     "bubble": {
      "!type": "fn(evt: +event_custom.CustomEvent) -> bool",
      "!doc": "Propagate an event.  Requires the event-custom-complex module."
     },
     "once": {
      "!type": "fn(type: string, fn: fn(), context?: +yui.Object, arg?: ?) -> +event_custom.EventHandle",
      "!doc": "Listen to a custom event hosted by this object one time.\nThis is the equivalent to <code>on</code> except the\nlistener is immediatelly detached when it is executed."
     },
     "onceAfter": {
      "!type": "fn(type: string, fn: fn(), context?: +yui.Object, arg?: ?) -> +event_custom.EventHandle",
      "!doc": "Listen to a custom event hosted by this object one time.\nThis is the equivalent to <code>after</code> except the\nlistener is immediatelly detached when it is executed."
     },
     "parseType": {
      "!type": "fn(type: string, pre?: string) -> +yui.Array",
      "!doc": "Takes the type parameter passed to on and parses out the\nvarious pieces that could be included in the type.  If the\nevent type is passed without a prefix, it will be expanded\nto include the prefix one is supplied or the event target\nis configured with a default prefix."
     },
     "on": {
      "!type": "fn(type: string, fn: fn(), context?: +yui.Object, arg?: ?) -> +event_custom.EventHandle",
      "!doc": "Subscribe a callback function to a custom event fired by this object or\nfrom an object that bubbles its events to this object.\n\nCallback functions for events published with `emitFacade = true` will\nreceive an `EventFacade` as the first argument (typically named \"e\").\nThese callbacks can then call `e.preventDefault()` to disable the\nbehavior published to that events `defaultFn`.  See the `EventFacade`\nAPI for all available properties and methods. Subscribers to\nnon-`emitFacade` events will receive the arguments passed to `fire()`\nafter the event name.\n\nTo subscribe to multiple events at once, pass an object as the first\nargument, where the key:value pairs correspond to the eventName:callback,\nor pass an array of event names as the first argument to subscribe to\nall listed events with the same callback.\n\nReturning `false` from a callback is supported as an alternative to\ncalling `e.preventDefault(); e.stopPropagation();`.  However, it is\nrecommended to use the event methods whenever possible."
     },
     "subscribe": {
      "!type": "fn()",
      "!doc": "subscribe to an event"
     },
     "detach": {
      "!type": "fn(type: string, fn: fn(), context: +yui.Object) -> +event_custom.EventTarget",
      "!doc": "Detach one or more listeners the from the specified event"
     },
     "unsubscribe": {
      "!type": "fn()",
      "!doc": "detach a listener"
     },
     "detachAll": {
      "!type": "fn(type: string)",
      "!doc": "Removes all listeners from the specified event.  If the event type\nis not specified, all listeners from all hosted custom events will\nbe removed."
     },
     "unsubscribeAll": {
      "!type": "fn(type: string)",
      "!doc": "Removes all listeners from the specified event.  If the event type\nis not specified, all listeners from all hosted custom events will\nbe removed."
     },
     "publish": {
      "!type": "fn(type: string, opts: +yui.Object) -> +event_custom.CustomEvent",
      "!doc": "Creates a new custom event of the specified type.  If a custom event\nby that name already exists, it will not be re-created.  In either\ncase the custom event is returned."
     },
     "fire": {
      "!type": "fn(type: string, arguments: +yui.Object) -> bool",
      "!doc": "Fire a custom event by name.  The callback functions will be executed\nfrom the context specified when the event was created, and with the\nfollowing parameters.\n\nThe first argument is the event type, and any additional arguments are\npassed to the listeners as parameters.  If the first of these is an\nobject literal, and the event is configured to emit an event facade,\nthat object is mixed into the event facade and the facade is provided\nin place of the original object.\n\nIf the custom event object hasnt been created, then the event hasnt\nbeen published and it has no subscribers.  For performance sake, we\nimmediate exit in this case.  This means the event wont bubble, so\nif the intention is that a bubble target be notified, the event must\nbe published on this object first."
     },
     "getEvent": {
      "!type": "fn(type: string, prefixed: string) -> +event_custom.CustomEvent",
      "!doc": "Returns the custom event of the provided type has been created, a\nfalsy value otherwise"
     },
     "after": {
      "!type": "fn(type: string, fn: fn(), context?: +yui.Object, arg?: ?) -> +event_custom.EventHandle",
      "!doc": "Subscribe to a custom event hosted by this object.  The\nsupplied callback will execute after any listeners add\nvia the subscribe method, and after the default function,\nif configured for the event, has executed."
     },
     "before": {
      "!type": "fn() -> ?",
      "!doc": "Executes the callback before a DOM event, custom event\nor method.  If the first argument is a function, it\nis assumed the target is a method.  For DOM and custom\nevents, this is an alias for Y.on.\n\nFor DOM and custom events:\ntype, callback, context, 0-n arguments\n\nFor methods:\ncallback, object (method host), methodName, context, 0-n arguments"
     }
    }
   },
   "EventHandle": {
    "!type": "fn(evt: +event_custom.CustomEvent, sub: +event_custom.Subscriber) -> +event_custom.EventHandle",
    "prototype": {
     "evt": {
      "!type": "+event_custom.CustomEvent",
      "!doc": "The custom event"
     },
     "sub": {
      "!type": "+event_custom.Subscriber",
      "!doc": "The subscriber object"
     },
     "detach": {
      "!type": "fn() -> number",
      "!doc": "Detaches this subscriber"
     },
     "monitor": {
      "!type": "fn(what: string) -> +event_custom.EventHandle",
      "!doc": "Monitor the event state for the subscribed event.  The first parameter\nis what should be monitored, the rest are the normal parameters when\nsubscribing to an event."
     }
    }
   },
   "Subscriber": {
    "!type": "fn(fn: fn(), context: +yui.Object, args: +yui.Array) -> +event_custom.Subscriber",
    "prototype": {
     "fn": {
      "!type": "fn()",
      "!doc": "The callback that will be execute when the event fires\nThis is wrapped by Y.rbind if obj was supplied."
     },
     "context": {
      "!type": "+yui.Object",
      "!doc": "Optional this keyword for the listener"
     },
     "id": {
      "!type": "string",
      "!doc": "Unique subscriber id"
     },
     "args": {
      "!type": "+yui.Array",
      "!doc": "Additional arguments to propagate to the subscriber"
     },
     "events": {
      "!type": "+event_custom.EventTarget",
      "!doc": "Custom events for a given fire transaction."
     },
     "once": {
      "!type": "?",
      "!doc": "This listener only reacts to the event once"
     },
     "notify": {
      "!type": "fn(args: +yui.Array, ce: +event_custom.CustomEvent)",
      "!doc": "Executes the subscriber."
     },
     "contains": {
      "!type": "fn(fn: fn(), context: +yui.Object) -> bool",
      "!doc": "Returns true if the fn and obj match this objects properties.\nUsed by the unsubscribe method to match the right subscriber."
     }
    }
   }
  },
  "event": {
   "Event": {
    "!type": "fn()",
    "simulate": {
     "!type": "fn(target: +HTMLElement, type: string, options: +yui.Object)",
     "!doc": "Simulates the event or gesture with the given name on a target."
    },
    "delegate": {
     "!type": "fn(node: +node.Node, subscription: +yui.Array, notifier: bool, filter: string)",
     "!doc": "Event delegation for the tap event. The delegated event will use a\nsupplied selector or filtering function to test if the event references at least one\nnode that should trigger the subscription callback.\n\nUsage:\n\n    node.delegate(tap, function (e) {\n        Y.log(li a inside node was tapped.);\n    }, li a);"
    },
    "compileFilter": {
     "!type": "fn(selector: string) -> fn()",
     "!doc": "Compiles a selector string into a filter function to identify whether\nNodes along the parent axis of an events target should trigger event\nnotification.\n\nThis function is memoized, so previously compiled filter functions are\nreturned if the same selector string is provided.\n\nThis function may be useful when defining synthetic events for delegate\nhandling.\n\nHosted as a property of the `delegate` method (e.g. `Y.delegate.compileFilter`)."
    },
    "POLL_RETRYS": {
     "!type": "number",
     "!doc": "The number of times we should look for elements that are not\nin the DOM at the time the event is requested after the document\nhas been loaded.  The default is 1000@amp;40 ms, so it will poll\nfor 40 seconds or until all outstanding handlers are bound\n(whichever comes first)."
    },
    "POLL_INTERVAL": {
     "!type": "number",
     "!doc": "The poll interval in milliseconds"
    },
    "lastError": {
     "!type": "+Error",
     "!doc": "addListener/removeListener can throw errors in unexpected scenarios.\nThese errors are suppressed, the method returns false, and this property\nis set"
    },
    "DOMReady": {
     "!type": "bool",
     "!doc": "True when the document is initially usable"
    },
    "onAvailable": {
     "!type": "fn(id: string, fn: fn(), p_obj: +yui.Object, p_override: bool, checkContent: bool)",
     "!doc": "Executes the supplied callback when the item with the supplied\nid is found.  This is meant to be used to execute behavior as\nsoon as possible as the page loads.  If you use this after the\ninitial page load it will poll for a fixed time for the element.\nThe number of times it will poll and the frequency are\nconfigurable.  By default it will poll for 10 seconds.\n\n<p>The callback is executed with a single parameter:\nthe custom object parameter, if provided.</p>"
    },
    "onContentReady": {
     "!type": "fn(id: string, fn: fn(), obj: +yui.Object, override: bool)",
     "!doc": "Works the same way as onAvailable, but additionally checks the\nstate of sibling elements to determine if the content of the\navailable element is safe to modify.\n\n<p>The callback is executed with a single parameter:\nthe custom object parameter, if provided.</p>"
    },
    "attach": {
     "!type": "fn(type: string, fn: fn(), el: string, context: +yui.Object, args: bool) -> +event_custom.EventHandle",
     "!doc": "Adds an event listener"
    },
    "detach": {
     "!type": "fn(node: +node.Node, subscription: +yui.Array, notifier: bool)",
     "!doc": "Detaches all event subscriptions set up by the event-tap module"
    },
    "getEvent": {
     "!type": "fn(e: +event.Event, el: +HTMLElement) -> +event.Event",
     "!doc": "Finds the event in the window object, the callers arguments, or\nin the arguments of another method in the callstack.  This is\nexecuted automatically for events registered through the event\nmanager, so the implementer should not normally need to execute\nthis function at all."
    },
    "generateId": {
     "!type": "fn(el: ?) -> string",
     "!doc": "Generates an unique ID for the element if it does not already\nhave one."
    },
    "purgeElement": {
     "!type": "fn(el: +HTMLElement, recurse: bool, type: string)",
     "!doc": "Removes all listeners attached to the given element via addListener.\nOptionally, the nodes children can also be purged.\nOptionally, you can specify a specific type of event to remove."
    },
    "getListeners": {
     "!type": "fn(el: +HTMLElement, type: string) -> +event_custom.CustomEvent",
     "!doc": "Returns all listeners attached to the given element via addListener.\nOptionally, you can specify a specific type of event to return."
    },
    "defineOutside": {
     "!type": "fn(event: string, name: string)",
     "!doc": "Defines a new outside event to correspond with the given DOM event.\n\nBy default, the created synthetic event name will be the name of the event\nwith \"outside\" appended (e.g. \"click\" becomes \"clickoutside\"). If you want\na different name for the created Event, pass it as a second argument like so:\n<code>Y.Event.defineOutside(eventType, \"yonderclick\")</code>."
    },
    "define": {
     "!type": "fn(type: string, config: +yui.Object, force: bool) -> +event.SyntheticEvent",
     "!doc": "<p>Defines a new event in the DOM event system.  Implementers are\nresponsible for monitoring for a scenario whereby the event is fired.  A\nnotifier object is provided to the functions identified below.  When the\ncriteria defining the event are met, call notifier.fire( [args] ); to\nexecute event subscribers.</p>\n\n<p>The first parameter is the name of the event.  The second parameter is a\nconfiguration object which define the behavior of the event system when the\nnew event is subscribed to or detached from.  The methods that should be\ndefined in this configuration object are <code>on</code>,\n<code>detach</code>, <code>delegate</code>, and <code>detachDelegate</code>.\nYou are free to define any other methods or properties needed to define your\nevent.  Be aware, however, that since the object is used to subclass\nSyntheticEvent, you should avoid method names used by SyntheticEvent unless\nyour intention is to override the default behavior.</p>\n\n<p>This is a list of properties and methods that you can or should specify\nin the configuration object:</p>\n\n<dl>\n  <dt><code>on</code></dt>\n      <dd><code>function (node, subscription, notifier)</code> The\n      implementation logic for subscription.  Any special setup you need to\n      do to create the environment for the event being fired--E.g. native\n      DOM event subscriptions.  Store subscription related objects and\n      state on the <code>subscription</code> object.  When the\n      criteria have been met to fire the synthetic event, call\n      <code>notifier.fire(e)</code>.  See Notifiers <code>fire()</code>\n      method for details about what to pass as parameters.</dd>\n\n  <dt><code>detach</code></dt>\n      <dd><code>function (node, subscription, notifier)</code> The\n      implementation logic for cleaning up a detached subscription. E.g.\n      detach any DOM subscriptions added in <code>on</code>.</dd>\n\n  <dt><code>delegate</code></dt>\n      <dd><code>function (node, subscription, notifier, filter)</code> The\n      implementation logic for subscription via <code>Y.delegate</code> or\n      <code>node.delegate</code>.  The filter is typically either a selector\n      string or a function.  You can use\n      <code>Y.delegate.compileFilter(selectorString)</code> to create a\n      filter function from a selector string if needed.  The filter function\n      expects an event object as input and should output either null, a\n      matching Node, or an array of matching Nodes.  Otherwise, this acts\n      like <code>on</code> DOM event subscriptions.  Store subscription\n      related objects and information on the <code>subscription</code>\n      object.  When the criteria have been met to fire the synthetic event,\n      call <code>notifier.fire(e)</code> as noted above.</dd>\n\n  <dt><code>detachDelegate</code></dt>\n      <dd><code>function (node, subscription, notifier)</code> The\n      implementation logic for cleaning up a detached delegate subscription.\n      E.g. detach any DOM delegate subscriptions added in\n      <code>delegate</code>.</dd>\n\n  <dt><code>publishConfig</code></dt>\n      <dd>(Object) The configuration object that will be used to instantiate\n      the underlying CustomEvent. See Notifiers <code>fire</code> method\n      for details.</dd>\n\n  <dt><code>processArgs</code></dt\n      <dd>\n         <p><code>function (argArray, fromDelegate)</code> Optional method\n         to extract any additional arguments from the subscription\n         signature.  Using this allows <code>on</code> or\n         <code>delegate</code> signatures like\n         <code>node.on(&quot;hover&quot;, overCallback,\n         outCallback)</code>.</p>\n         <p>When processing an atypical argument signature, make sure the\n         args array is returned to the normal signature before returning\n         from the function.  For example, in the &quot;hover&quot; example\n         above, the <code>outCallback</code> needs to be <code>splice</code>d\n         out of the array.  The expected signature of the args array for\n         <code>on()</code> subscriptions is:</p>\n         <pre>\n             <code>[type, callback, target, contextOverride, argN...]</code>\n         </pre>\n         <p>And for <code>delegate()</code>:</p>\n         <pre>\n             <code>[type, callback, target, filter, contextOverride, argN...]</code>\n         </pre>\n         <p>where <code>target</code> is the node the event is being\n         subscribed for.  You can see these signatures documented for\n         <code>Y.on()</code> and <code>Y.delegate()</code> respectively.</p>\n         <p>Whatever gets returned from the function will be stored on the\n         <code>subscription</code> object under\n         <code>subscription._extra</code>.</p></dd>\n  <dt><code>subMatch</code></dt>\n      <dd>\n          <p><code>function (sub, args)</code>  Compares a set of\n          subscription arguments against a Subscription object to determine\n          if they match.  The default implementation compares the callback\n          function against the second argument passed to\n          <code>Y.on(...)</code> or <code>node.detach(...)</code> etc.</p>\n      </dd>\n</dl>"
    },
    "on": {
     "!type": "fn(node: +node.Node, subscription: +yui.Array, notifier: bool)",
     "!doc": "This function should set up the node that will eventually fire the event.\n\nUsage:\n\n    node.on(tap, function (e) {\n        Y.log(the node was tapped on);\n    });"
    },
    "detachDelegate": {
     "!type": "fn(node: +node.Node, subscription: +yui.Array, notifier: bool)",
     "!doc": "Detaches the delegated event subscriptions set up by the event-tap module.\nOnly used if you use node.delegate(...) instead of node.on(...);"
    },
    "prototype": {
     "rotate": {
      "!type": "fn(cb: fn(), center: +yui.Array, startRadius: number, endRadius: number, duration: number, start: number, rotation: number)",
      "!doc": "The \"rotate\" and \"pinch\" methods are essencially same with the exact same\narguments. Only difference is the required parameters. The rotate method\nrequires \"rotation\" parameter while the pinch method requires \"startRadius\"\nand \"endRadius\" parameters."
     },
     "pinch": {
      "!type": "fn(cb: fn(), center: +yui.Array, startRadius: number, endRadius: number, duration: number, start: number, rotation: number)",
      "!doc": "The \"rotate\" and \"pinch\" methods are essencially same with the exact same\narguments. Only difference is the required parameters. The rotate method\nrequires \"rotation\" parameter while the pinch method requires \"startRadius\"\nand \"endRadius\" parameters.\n\nThe \"pinch\" gesture can simulate various 2 finger gestures such as pinch,\nspread and/or rotation. The \"startRadius\" and \"endRadius\" are required.\nIf endRadius is larger than startRadius, it becomes a spread gesture\notherwise a pinch gesture."
     },
     "tap": {
      "!type": "fn(cb: fn(), point: +yui.Array, times: number, hold: number, delay: number)",
      "!doc": "The \"tap\" gesture can be used for various single touch point gestures\nsuch as single tap, N number of taps, long press. The default is a single\ntap."
     },
     "flick": {
      "!type": "fn(cb: fn(), point: +yui.Array, axis: string, distance: number, duration: number)",
      "!doc": "The \"flick\" gesture is a specialized \"move\" that has some velocity\nand the movement always runs either x or y axis. The velocity is calculated\nwith \"distance\" and \"duration\" arguments. If the calculated velocity is\nbelow than the minimum velocity, the given duration will be ignored and\nnew duration will be created to make a valid flick gesture."
     },
     "move": {
      "!type": "fn(cb: fn(), path: +yui.Object, duration: number)",
      "!doc": "The \"move\" gesture simulate the movement of any direction between\nthe straight line of start and end point for the given duration.\nThe path argument is an object with \"point\", \"xdist\" and \"ydist\" properties.\nThe \"point\" property is an array with x and y coordinations(relative to the\ntop left corner of the target node element) while \"xdist\" and \"ydist\"\nproperties are used for the distance along the x and y axis. A negative\ndistance number can be used to drag either left or up direction.\n\nIf no arguments are given, it will simulate the default move, which\nis moving 200 pixels from the center of the element to the positive X-axis\ndirection for 1 sec."
     }
    },
    "simulateGesture": {
     "!type": "fn(node: +HTMLElement, name: string, options?: +yui.Object, cb?: fn(err: +Error))",
     "!doc": "Simulates the higher user level gesture of the given name on a target.\nThis method generates a set of low level touch events(Apple specific gesture\nevents as well for the iOS platforms) asynchronously. Note that gesture\nsimulation is relying on `Y.Event.simulate()` method to generate\nthe touch events under the hood. The `Y.Event.simulate()` method\nitself is a synchronous method.\n\nUsers are suggested to use `Node.simulateGesture()` method which\nbasically calls this method internally. Supported gestures are `tap`,\n`doubletap`, `press`, `move`, `flick`, `pinch` and `rotate`.\n\nThe `pinch` gesture is used to simulate the pinching and spreading of two\nfingers. During a pinch simulation, rotation is also possible. Essentially\n`pinch` and `rotate` simulations share the same base implementation to allow\nboth pinching and rotation at the same time. The only difference is `pinch`\nrequires `start` and `end` option properties while `rotate` requires `rotation`\noption property.\n\nThe `pinch` and `rotate` gestures can be described as placing 2 fingers along a\ncircle. Pinching and spreading can be described by start and end circles while\nrotation occurs on a single circle. If the radius of the start circle is greater\nthan the end circle, the gesture becomes a pinch, otherwise it is a spread spread."
    }
   },
   "DOMEventFacade": {
    "!type": "fn(ev: +event.Event, currentTarget: +HTMLElement, wrapper: +event_custom.CustomEvent)",
    "prototype": {
     "touches": {
      "!type": "[+event.DOMEventFacade]",
      "!doc": "Array of individual touch events for touch points that are still in\ncontact with the touch surface."
     },
     "targetTouches": {
      "!type": "[+event.DOMEventFacade]",
      "!doc": "Array of individual touch events still in contact with the touch\nsurface and whose `touchstart` event occurred inside the same taregt\nelement as the current target element."
     },
     "changedTouches": {
      "!type": "[+event.DOMEventFacade]",
      "!doc": "An array of event-specific touch events.\n\nFor `touchstart`, the touch points that became active with the current\nevent.\n\nFor `touchmove`, the touch points that have changed since the last\nevent.\n\nFor `touchend`, the touch points that have been removed from the touch\nsurface."
     },
     "type": {
      "!type": "string",
      "!doc": "The name of the event (e.g. \"click\")"
     },
     "altKey": {
      "!type": "bool",
      "!doc": "`true` if the \"alt\" or \"option\" key is pressed."
     },
     "shiftKey": {
      "!type": "bool",
      "!doc": "`true` if the shift key is pressed."
     },
     "metaKey": {
      "!type": "bool",
      "!doc": "`true` if the \"Windows\" key on a Windows keyboard, \"command\" key on an\nApple keyboard, or \"meta\" key on other keyboards is pressed."
     },
     "ctrlKey": {
      "!type": "bool",
      "!doc": "`true` if the \"Ctrl\" or \"control\" key is pressed."
     },
     "pageX": {
      "!type": "number",
      "!doc": "The X location of the event on the page (including scroll)"
     },
     "pageY": {
      "!type": "number",
      "!doc": "The Y location of the event on the page (including scroll)"
     },
     "clientX": {
      "!type": "number",
      "!doc": "The X location of the event in the viewport"
     },
     "clientY": {
      "!type": "number",
      "!doc": "The Y location of the event in the viewport"
     },
     "keyCode": {
      "!type": "number",
      "!doc": "The keyCode for key events.  Uses charCode if keyCode is not available"
     },
     "charCode": {
      "!type": "number",
      "!doc": "The charCode for key events.  Same as keyCode"
     },
     "button": {
      "!type": "number",
      "!doc": "The button that was pushed. 1 for left click, 2 for middle click, 3 for\nright click.  This is only reliably populated on `mouseup` events."
     },
     "which": {
      "!type": "number",
      "!doc": "The button that was pushed.  Same as button."
     },
     "target": {
      "!type": "+node.Node",
      "!doc": "Node reference for the targeted element"
     },
     "currentTarget": {
      "!type": "+node.Node",
      "!doc": "Node reference for the element that the listener was attached to."
     },
     "relatedTarget": {
      "!type": "+node.Node",
      "!doc": "Node reference to the relatedTarget"
     },
     "wheelDelta": {
      "!type": "number",
      "!doc": "Number representing the direction and velocity of the movement of the mousewheel.\nNegative is down, the higher the number, the faster.  Applies to the mousewheel event."
     },
     "stopPropagation": {
      "!type": "fn()",
      "!doc": "Stops the propagation to the next bubble target"
     },
     "stopImmediatePropagation": {
      "!type": "fn()",
      "!doc": "Stops the propagation to the next bubble target and\nprevents any additional listeners from being exectued\non the current target."
     },
     "preventDefault": {
      "!type": "fn(returnValue: string)",
      "!doc": "Prevents the events default behavior"
     },
     "halt": {
      "!type": "fn(immediate: bool)",
      "!doc": "Stops the event propagation and prevents the default\nevent behavior."
     }
    },
    "_GESTURE_MAP": {
     "!type": "+yui.Object",
     "!doc": "A object literal with keys \"start\", \"end\", and \"move\". The value for each key is a\nstring representing the event for that environment. For touch environments, the respective\nvalues are \"touchstart\", \"touchend\" and \"touchmove\". Mouse and MSPointer environments are also\nsupported via feature detection."
    }
   },
   "SynthRegistry": {
    "!type": "fn(el: +HTMLElement, yuid: string, key: string) -> +event.SynthRegistry",
    "prototype": {
     "register": {
      "!type": "fn(handle: +event_custom.EventHandle)",
      "!doc": "Adds a subscription from the Notifier registry."
     },
     "_unregisterSub": {
      "!type": "fn(sub: +Subscription)",
      "!doc": "Removes the subscription from the Notifier registry."
     }
    }
   },
   "SyntheticEvent": {
    "!type": "fn(cfg: +yui.Object) -> +event.SyntheticEvent",
    "prototype": {
     "processArgs": {
      "!type": "fn(args: +yui.Array, delegate: bool) -> ?",
      "!doc": "<p>Implementers MAY provide this method definition.</p>\n\n<p>Implement this function if the event supports a different\nsubscription signature.  This function is used by both\n<code>on()</code> and <code>delegate()</code>.  The second parameter\nindicates that the event is being subscribed via\n<code>delegate()</code>.</p>\n\n<p>Implementations must remove extra arguments from the args list\nbefore returning.  The required args for <code>on()</code>\nsubscriptions are</p>\n<pre><code>[type, callback, target, context, argN...]</code></pre>\n\n<p>The required args for <code>delegate()</code>\nsubscriptions are</p>\n\n<pre><code>[type, callback, target, filter, context, argN...]</code></pre>\n\n<p>The return value from this function will be stored on the\nsubscription in the _extra property for reference elsewhere.</p>"
     },
     "preventDups": {
      "!type": "bool",
      "!doc": "<p>Implementers MAY override this property.</p>\n\n<p>Whether to prevent multiple subscriptions to this event that are\nclassified as being the same.  By default, this means the subscribed\ncallback is the same function.  See the <code>subMatch</code>\nmethod.  Setting this to true will impact performance for high volume\nevents.</p>"
     },
     "on": {
      "!type": "fn(node: +node.Node, sub: +Subscription, notifier: +event.SyntheticEvent.Notifier)",
      "!doc": "<p>Implementers SHOULD provide this method definition.</p>\n\nImplementation logic for subscriptions done via <code>node.on(type,\nfn)</code> or <code>Y.on(type, fn, target)</code>.  This\nfunction should set up the monitor(s) that will eventually fire the\nevent.  Typically this involves subscribing to at least one DOM\nevent.  It is recommended to store detach handles from any DOM\nsubscriptions to make for easy cleanup in the <code>detach</code>\nmethod.  Typically these handles are added to the <code>sub</code>\nobject.  Also for SyntheticEvents that leverage a single DOM\nsubscription under the hood, it is recommended to pass the DOM event\nobject to <code>notifier.fire(e)</code>.  (The event name on the\nobject will be updated)."
     },
     "detach": {
      "!type": "fn(node: +node.Node, sub: +Subscription, notifier: +event.SyntheticEvent.Notifier)",
      "!doc": "<p>Implementers SHOULD provide this method definition.</p>\n\n<p>Implementation logic for detaching subscriptions done via\n<code>node.on(type, fn)</code>.  This function should clean up any\nsubscriptions made in the <code>on()</code> phase.</p>"
     },
     "delegate": {
      "!type": "fn(node: +node.Node, sub: +Subscription, notifier: +event.SyntheticEvent.Notifier, filter: string)",
      "!doc": "<p>Implementers SHOULD provide this method definition.</p>\n\n<p>Implementation logic for subscriptions done via\n<code>node.delegate(type, fn, filter)</code> or\n<code>Y.delegate(type, fn, container, filter)</code>.  Like with\n<code>on()</code> above, this function should monitor the environment\nfor the event being fired, and trigger subscription execution by\ncalling <code>notifier.fire(e)</code>.</p>\n\n<p>This function receives a fourth argument, which is the filter\nused to identify which Nodes are of interest to the subscription.\nThe filter will be either a boolean function that accepts a target\nNode for each hierarchy level as the event bubbles, or a selector\nstring.  To translate selector strings into filter functions, use\n<code>Y.delegate.compileFilter(filter)</code>.</p>"
     },
     "detachDelegate": {
      "!type": "fn(node: +node.Node, sub: +Subscription, notifier: +event.SyntheticEvent.Notifier, filter: string)",
      "!doc": "<p>Implementers SHOULD provide this method definition.</p>\n\n<p>Implementation logic for detaching subscriptions done via\n<code>node.delegate(type, fn, filter)</code> or\n<code>Y.delegate(type, fn, container, filter)</code>.  This function\nshould clean up any subscriptions made in the\n<code>delegate()</code> phase.</p>"
     },
     "applyArgExtras": {
      "!type": "fn(extra: ?, sub: +Subscription)",
      "!doc": "<p>Implementers MAY provide this method definition.</p>\n\n<p>Implement this function if you want extra data extracted during\nprocessArgs to be propagated to subscriptions on a per-node basis.\nThat is to say, if you call <code>Y.on(xyz, fn, xtra, div)</code>\nthe data returned from processArgs will be shared\nacross the subscription objects for all the divs.  If you want each\nsubscription to receive unique information, do that processing\nhere.</p>\n\n<p>The default implementation adds the data extracted by processArgs\nto the subscription object as <code>sub._extra</code>.</p>"
     },
     "getSubs": {
      "!type": "fn(node: +node.Node, args: +yui.Array, filter: fn(), first: bool) -> [+event_custom.EventHandle]",
      "!doc": "Returns the detach handles of subscriptions on a node that satisfy a\nsearch/filter function.  By default, the filter used is the\n<code>subMatch</code> method."
     },
     "subMatch": {
      "!type": "fn(sub: +Subscription, args: +yui.Array) -> bool",
      "!doc": "<p>Implementers MAY override this to define what constitutes a\n&quot;same&quot; subscription.  Override implementations should\nconsider the lack of a comparator as a match, so calling\n<code>getSubs()</code> with no arguments will return all subs.</p>\n\n<p>Compares a set of subscription arguments against a Subscription\nobject to determine if they match.  The default implementation\ncompares the callback function against the second argument passed to\n<code>Y.on(...)</code> or <code>node.detach(...)</code> etc.</p>"
     }
    }
   }
  },
  "event_valuechange": {
   "ValueChange": {
    "!type": "fn()",
    "POLL_INTERVAL": {
     "!type": "number",
     "!doc": "Interval (in milliseconds) at which to poll for changes to the value of an\nelement with one or more `valuechange` subscribers when the user is likely\nto be interacting with it."
    },
    "TIMEOUT": {
     "!type": "number",
     "!doc": "Timeout (in milliseconds) after which to stop polling when there hasnt been\nany new activity (keypresses, mouse clicks, etc.) on an element."
    }
   }
  },
  "file_flash": {
   "FileFlash": {
    "!type": "fn(config: +yui.Object) -> +file_flash.FileFlash",
    "prototype": {
     "!proto": "base.Base.prototype",
     "startUpload": {
      "!type": "fn(url: string, parameters: +yui.Object, fileFieldName: string)",
      "!doc": "Starts the upload of a specific file."
     },
     "cancelUpload": {
      "!type": "fn()",
      "!doc": "Cancels the upload of a specific file, if currently in progress."
     },
     "id": {
      "!type": "string",
      "!doc": "A String containing the unique id of the file wrapped by the FileFlash instance.\nThe id is supplied by the Flash player uploader."
     },
     "size": {
      "!type": "number",
      "!doc": "The size of the file wrapped by FileFlash. This value is supplied by the Flash player uploader."
     },
     "name": {
      "!type": "string",
      "!doc": "The name of the file wrapped by FileFlash. This value is supplied by the Flash player uploader."
     },
     "dateCreated": {
      "!type": "+datatype_date.Date",
      "!doc": "The date that the file wrapped by FileFlash was created on. This value is supplied by the Flash player uploader."
     },
     "dateModified": {
      "!type": "+datatype_date.Date",
      "!doc": "The date that the file wrapped by FileFlash was last modified on. This value is supplied by the Flash player uploader."
     },
     "bytesUploaded": {
      "!type": "+datatype_date.Date",
      "!doc": "The number of bytes of the file that has been uploaded to the server. This value is\nnon-zero only while a file is being uploaded."
     },
     "type": {
      "!type": "string",
      "!doc": "The type of the file wrapped by FileFlash. This value is provided by the Flash player\nuploader."
     },
     "uploder": {
      "!type": "+swf.SWF",
      "!doc": "The instance of Y.SWF wrapping the Flash player uploader associated with this file."
     }
    }
   }
  },
  "file_html5": {
   "FileHTML5": {
    "!type": "fn(config: +yui.Object) -> +file_html5.FileHTML5",
    "prototype": {
     "!proto": "base.Base.prototype",
     "startUpload": {
      "!type": "fn(url: string, parameters: +yui.Object, fileFieldName: string)",
      "!doc": "Starts the upload of a specific file."
     },
     "cancelUpload": {
      "!type": "fn()",
      "!doc": "Cancels the upload of a specific file, if currently in progress."
     },
     "id": {
      "!type": "string",
      "!doc": "A String containing the unique id of the file wrapped by the FileFlash instance.\nThe id is supplied by the Flash player uploader."
     },
     "size": {
      "!type": "number",
      "!doc": "The size of the file wrapped by FileHTML5. This value is supplied by the instance of File()."
     },
     "name": {
      "!type": "string",
      "!doc": "The name of the file wrapped by FileHTML5. This value is supplied by the instance of File()."
     },
     "dateCreated": {
      "!type": "+datatype_date.Date",
      "!doc": "The date that the file wrapped by FileHTML5 was created on. This value is supplied by the instance of File()."
     },
     "dateModified": {
      "!type": "+datatype_date.Date",
      "!doc": "The date that the file wrapped by FileHTML5 was last modified on. This value is supplied by the instance of File()."
     },
     "bytesUploaded": {
      "!type": "+datatype_date.Date",
      "!doc": "The number of bytes of the file that has been uploaded to the server. This value is\nnon-zero only while a file is being uploaded."
     },
     "type": {
      "!type": "string",
      "!doc": "The type of the file wrapped by FileHTML. This value is provided by the instance of File()"
     },
     "file": {
      "!type": "+file.File",
      "!doc": "The pointer to the instance of File() wrapped by FileHTML5."
     },
     "xhr": {
      "!type": "+XMLHttpRequest",
      "!doc": "The pointer to the instance of XMLHttpRequest used by FileHTML5 to upload the file."
     },
     "xhrHeaders": {
      "!type": "+yui.Object",
      "!doc": "The dictionary of headers that should be set on the XMLHttpRequest object before\nsending it."
     },
     "xhrWithCredentials": {
      "!type": "bool",
      "!doc": "A Boolean indicating whether the XMLHttpRequest should be sent with user credentials.\nThis does not affect same-site requests."
     },
     "boundEventHandler": {
      "!type": "fn()",
      "!doc": "The bound event handler used to handle events from XMLHttpRequest."
     }
    },
    "isValidFile": {
     "!type": "fn(file: +file.File)",
     "!doc": "Checks whether a specific native file instance is valid"
    },
    "canUpload": {
     "!type": "fn()",
     "!doc": "Checks whether the browser has a native upload capability\nvia XMLHttpRequest Level 2."
    }
   }
  },
  "get_nodejs": {
   "GetNodeJS": {
    "!type": "fn()",
    "prototype": {
     "js": {
      "!type": "fn(s: +yui.Array, options: +yui.Object)",
      "!doc": "Override for Get.script for loading local or remote YUI modules."
     },
     "script": {
      "!type": "fn()",
      "!doc": "Alias for `Y.Get.js`"
     }
    }
   }
  },
  "get": {
   "Get": {
    "!type": "fn()",
    "cssOptions": {
     "!type": "+yui.Object",
     "!doc": "Default options for CSS requests. Options specified here will override\nglobal defaults for CSS requests.\n\nSee the `options` property for all available options."
    },
    "jsOptions": {
     "!type": "+yui.Object",
     "!doc": "Default options for JS requests. Options specified here will override global\ndefaults for JS requests.\n\nSee the `options` property for all available options."
    },
    "options": {
     "!type": "+yui.Object",
     "!doc": "Default options to use for all requests.\n\nNote that while all available options are documented here for ease of\ndiscovery, some options (like callback functions) only make sense at the\ntransaction level.\n\nCallback functions specified via the options object or the `options`\nparameter of the `css()`, `js()`, or `load()` methods will receive the\ntransaction object as a parameter. See `Y.Get.Transaction` for details on\nthe properties and methods available on transactions."
    },
    "abort": {
     "!type": "fn(transaction: +get.Get.Transaction)",
     "!doc": "Aborts the specified transaction.\n\nThis will cause the transactions `onFailure` callback to be called and\nwill prevent any new script and link nodes from being added to the document,\nbut any resources that have already been requested will continue loading\n(theres no safe way to prevent this, unfortunately).\n\n*Note:* This method is deprecated as of 3.5.0, and will be removed in a\nfuture version of YUI. Use the transaction-level `abort()` method instead."
    },
    "css": {
     "!type": "fn(urls: string, options?: +yui.Object, callback?: fn(err: +yui.Array, transaction: +get.Get.Transaction)) -> +get.Get.Transaction",
     "!doc": "Loads one or more CSS files.\n\nThe _urls_ parameter may be provided as a URL string, a request object,\nor an array of URL strings and/or request objects.\n\nA request object is just an object that contains a `url` property and zero\nor more options that should apply specifically to that request.\nRequest-specific options take priority over transaction-level options and\ndefault options.\n\nURLs may be relative or absolute, and do not have to have the same origin\nas the current page.\n\nThe `options` parameter may be omitted completely and a callback passed in\nits place, if desired."
    },
    "js": {
     "!type": "fn(urls: string, options?: +yui.Object, callback?: fn(err: +yui.Array, transaction: +get.Get.Transaction)) -> +get.Get.Transaction",
     "!doc": "Loads one or more JavaScript resources.\n\nThe _urls_ parameter may be provided as a URL string, a request object,\nor an array of URL strings and/or request objects.\n\nA request object is just an object that contains a `url` property and zero\nor more options that should apply specifically to that request.\nRequest-specific options take priority over transaction-level options and\ndefault options.\n\nURLs may be relative or absolute, and do not have to have the same origin\nas the current page.\n\nThe `options` parameter may be omitted completely and a callback passed in\nits place, if desired.\n\nScripts will be executed in the order theyre specified unless the `async`\noption is `true`, in which case theyll be loaded in parallel and executed\nin whatever order they finish loading."
    },
    "load": {
     "!type": "fn(urls: string, options?: +yui.Object, callback?: fn(), err: +yui.Array, Transaction: +get.Get.Transaction) -> +get.Get.Transaction",
     "!doc": "Loads one or more CSS and/or JavaScript resources in the same transaction.\n\nUse this method when you want to load both CSS and JavaScript in a single\ntransaction and be notified when all requested URLs have finished loading,\nregardless of type.\n\nBehavior and options are the same as for the `css()` and `js()` methods. If\na resource type isnt specified in per-request options or transaction-level\noptions, Get will guess the file type based on the URLs extension (`.css`\nor `.js`, with or without a following query string). If the file type cant\nbe guessed from the URL, a warning will be logged and Get will assume the\nURL is a JavaScript resource."
    },
    "script": {
     "!type": "fn()",
     "!doc": "Alias for `js()`."
    },
    "Transaction": {
     "!type": "fn() -> +get.Get.Transaction",
     "prototype": {
      "data": {
       "!type": "+yui.Object",
       "!doc": "Arbitrary data object associated with this transaction.\n\nThis object comes from the options passed to `Get.css()`, `Get.js()`, or\n`Get.load()`, and will be `undefined` if no data object was specified."
      },
      "errors": {
       "!type": "[+yui.Object]",
       "!doc": "Array of errors that have occurred during this transaction, if any. Each error\nobject has the following properties:\n`errors.error`: Error message.\n`errors.request`: Request object related to the error."
      },
      "id": {
       "!type": "number",
       "!doc": "Numeric id for this transaction, unique among all transactions within the same\nYUI sandbox in the current pageview."
      },
      "nodes": {
       "!type": "[+HTMLElement]",
       "!doc": "HTMLElement nodes (native ones, not YUI Node instances) that have been inserted\nduring the current transaction."
      },
      "options": {
       "!type": "+yui.Object",
       "!doc": "Options associated with this transaction.\n\nSee `Get.options` for the full list of available options."
      },
      "requests": {
       "!type": "+yui.Object",
       "!doc": "Request objects contained in this transaction. Each request object represents\none CSS or JS URL that will be (or has been) requested and loaded into the page."
      },
      "abort": {
       "!type": "fn(msg?: string)",
       "!doc": "Aborts this transaction.\n\nThis will cause the transactions `onFailure` callback to be called and\nwill prevent any new script and link nodes from being added to the document,\nbut any resources that have already been requested will continue loading\n(theres no safe way to prevent this, unfortunately)."
      },
      "execute": {
       "!type": "fn(callback: fn())",
       "!doc": "Begins execting the transaction.\n\nTheres usually no reason to call this manually, since Get will call it\nautomatically when other pending transactions have finished. If you really\nwant to execute your transaction before Get does, you can, but be aware that\nthis transactions scripts may end up executing before the scripts in other\npending transactions.\n\nIf the transaction is already executing, the specified callback (if any)\nwill be queued and called after execution finishes. If the transaction has\nalready finished, the callback will be called immediately (the transaction\nwill not be executed again)."
      },
      "purge": {
       "!type": "fn()",
       "!doc": "Manually purges any `<script>` or `<link>` nodes this transaction has\ncreated.\n\nBe careful when purging a transaction that contains CSS requests, since\nremoving `<link>` nodes will also remove any styles they applied."
      }
     }
    }
   }
  },
  "graphics": {
   "CanvasCircle": {
    "!type": "fn()",
    "prototype": {
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the shape"
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the shape"
     },
     "radius": {
      "!type": "number",
      "!doc": "Radius of the circle"
     }
    }
   },
   "CanvasDrawing": {
    "!type": "fn()",
    "prototype": {
     "lineTo": {
      "!type": "fn(point1: number, point2: number) -> !this",
      "!doc": "Draws a line segment from the current drawing position to the specified x and y coordinates."
     },
     "relativeLineTo": {
      "!type": "fn(point1: number, point2: number) -> !this",
      "!doc": "Draws a line segment from the current drawing position to the relative x and y coordinates."
     },
     "moveTo": {
      "!type": "fn(x: number, y: number) -> !this",
      "!doc": "Moves the current drawing position to specified x and y coordinates."
     },
     "relativeMoveTo": {
      "!type": "fn(x: number, y: number) -> !this",
      "!doc": "Moves the current drawing position relative to specified x and y coordinates."
     },
     "curveTo": {
      "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) -> !this",
      "!doc": "Draws a bezier curve."
     },
     "relativeCurveTo": {
      "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) -> !this",
      "!doc": "Draws a bezier curve relative to the current coordinates."
     },
     "quadraticCurveTo": {
      "!type": "fn(cpx: number, cpy: number, x: number, y: number) -> !this",
      "!doc": "Draws a quadratic bezier curve."
     },
     "relativeQuadraticCurveTo": {
      "!type": "fn(cpx: number, cpy: number, x: number, y: number) -> !this",
      "!doc": "Draws a quadratic bezier curve relative to the current position."
     },
     "drawRect": {
      "!type": "fn(x: number, y: number, w: number, h: number, ew: number, eh: number) -> !this",
      "!doc": "Draws a rectangle with rounded corners."
     },
     "end": {
      "!type": "fn() -> !this",
      "!doc": "Completes a drawing operation."
     },
     "closePath": {
      "!type": "fn() -> !this",
      "!doc": "Ends a fill and stroke"
     },
     "clear": {
      "!type": "fn() -> !this",
      "!doc": "Clears the graphics object."
     }
    }
   },
   "CanvasEllipse": {
    "!type": "fn()",
    "prototype": {
     "xRadius": {
      "!type": "number",
      "!doc": "Horizontal radius for the ellipse."
     },
     "yRadius": {
      "!type": "number",
      "!doc": "Vertical radius for the ellipse."
     }
    }
   },
   "CanvasGraphic": {
    "!type": "fn()",
    "prototype": {
     "render": {
      "!type": "fn(parentNode: +HTMLElement)",
      "!doc": "Adds the graphics node to the dom."
     },
     "id": {
      "!type": "string",
      "!doc": "Unique id for class instance."
     },
     "shapes": {
      "!type": "+yui.Object",
      "!doc": "Key value pairs in which a shape instance is associated with its id."
     },
     "contentBounds": {
      "!type": "+yui.Object",
      "!doc": "Object containing size and coordinate data for the content of a Graphic in relation to the graphic instances position."
     },
     "node": {
      "!type": "+HTMLElement",
      "!doc": "The outermost html element of the Graphic instance."
     },
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the `Graphic`."
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the `Graphic`."
     },
     "autoSize": {
      "!type": "bool",
      "!doc": "Determines the sizing of the Graphic.\n\n<dl>\n    <dt>sizeContentToGraphic</dt><dd>The Graphics width and height attributes are, either explicitly set through the\n    <code>width</code> and <code>height</code> attributes or are determined by the dimensions of the parent element. The\n    content contained in the Graphic will be sized to fit with in the Graphic instances dimensions. When using this\n    setting, the <code>preserveAspectRatio</code> attribute will determine how the contents are sized.</dd>\n    <dt>sizeGraphicToContent</dt><dd>(Also accepts a value of true) The Graphics width and height are determined by the\n    size and positioning of the content.</dd>\n    <dt>false</dt><dd>The Graphics width and height attributes are, either explicitly set through the <code>width</code>\n    and <code>height</code> attributes or are determined by the dimensions of the parent element. The contents of the\n    Graphic instance are not affected by this setting.</dd>\n</dl>"
     },
     "preserveAspectRatio": {
      "!type": "string",
      "!doc": "Determines how content is sized when <code>autoSize</code> is set to <code>sizeContentToGraphic</code>.\n\n <dl>\n     <dt>none<dt><dd>Do not force uniform scaling. Scale the graphic content of the given element non-uniformly if necessary\n     such that the elements bounding box exactly matches the viewport rectangle.</dd>\n     <dt>xMinYMin</dt><dd>Force uniform scaling position along the top left of the Graphics node.</dd>\n     <dt>xMidYMin</dt><dd>Force uniform scaling horizontally centered and positioned at the top of the Graphics node.<dd>\n     <dt>xMaxYMin</dt><dd>Force uniform scaling positioned horizontally from the right and vertically from the top.</dd>\n     <dt>xMinYMid</dt>Force uniform scaling positioned horizontally from the left and vertically centered.</dd>\n     <dt>xMidYMid (the default)</dt><dd>Force uniform scaling with the content centered.</dd>\n     <dt>xMaxYMid</dt><dd>Force uniform scaling positioned horizontally from the right and vertically centered.</dd>\n     <dt>xMinYMax</dt><dd>Force uniform scaling positioned horizontally from the left and vertically from the bottom.</dd>\n     <dt>xMidYMax</dt><dd>Force uniform scaling horizontally centered and position vertically from the bottom.</dd>\n     <dt>xMaxYMax</dt><dd>Force uniform scaling positioned horizontally from the right and vertically from the bottom.</dd>\n </dl>"
     },
     "resizeDown": {
      "!type": "bool",
      "!doc": "The contentBounds will resize to greater values but not smaller values. (for performance)\nWhen resizing the contentBounds down is desirable, set the resizeDown value to true."
     },
     "x": {
      "!type": "number",
      "!doc": "Indicates the x-coordinate for the instance."
     },
     "y": {
      "!type": "number",
      "!doc": "Indicates the y-coordinate for the instance."
     },
     "visible": {
      "!type": "bool",
      "!doc": "Indicates whether the `Graphic` and its children are visible."
     },
     "set": {
      "!type": "fn(name: string, value: ?)",
      "!doc": "Sets the value of an attribute."
     },
     "getXY": {
      "!type": "fn() -> ?",
      "!doc": "Gets the current position of the graphic instance in page coordinates."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Removes all nodes."
     },
     "addShape": {
      "!type": "fn(cfg: +yui.Object) -> ?",
      "!doc": "Generates a shape instance by type."
     },
     "removeShape": {
      "!type": "fn(shape: +graphics.Shape)",
      "!doc": "Removes a shape instance from from the graphic instance."
     },
     "removeAllShapes": {
      "!type": "fn()",
      "!doc": "Removes all shape instances from the dom."
     },
     "clear": {
      "!type": "fn()",
      "!doc": "Clears the graphics object."
     },
     "getShapeById": {
      "!type": "fn(id: string) -> ?",
      "!doc": "Returns a shape based on the id of its dom node."
     },
     "batch": {
      "!type": "fn(method: fn())",
      "!doc": "Allows for creating multiple shapes in order to batch appending and redraw operations."
     }
    }
   },
   "CanvasPath": {
    "!type": "fn()",
    "prototype": {
     "end": {
      "!type": "fn()",
      "!doc": "Completes a drawing operation."
     },
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the shape"
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the shape"
     },
     "path": {
      "!type": "string",
      "!doc": "Indicates the path used for the node."
     }
    }
   },
   "CanvasPieSlice": {
    "!type": "fn()",
    "prototype": {
     "startAngle": {
      "!type": "number",
      "!doc": "Starting angle in relation to a circle in which to begin the pie slice drawing."
     },
     "arc": {
      "!type": "number",
      "!doc": "Arc of the slice."
     },
     "radius": {
      "!type": "number",
      "!doc": "Radius of the circle in which the pie slice is drawn"
     }
    }
   },
   "CanvasShape": {
    "!type": "fn()",
    "prototype": {
     "addClass": {
      "!type": "fn(className: string)",
      "!doc": "Add a class name to each node."
     },
     "removeClass": {
      "!type": "fn(className: string)",
      "!doc": "Removes a class name from each node."
     },
     "getXY": {
      "!type": "fn() -> ?",
      "!doc": "Gets the current position of the node in page coordinates."
     },
     "setXY": {
      "!type": "fn(Contains: +yui.Array)",
      "!doc": "Set the position of the shape in page coordinates, regardless of how the node is positioned."
     },
     "contains": {
      "!type": "fn(needle: +graphics.CanvasShape) -> ?",
      "!doc": "Determines whether the node is an ancestor of another HTML element in the DOM hierarchy."
     },
     "test": {
      "!type": "fn(selector: string) -> ?",
      "!doc": "Test if the supplied node matches the supplied selector."
     },
     "compareTo": {
      "!type": "fn(refNode: +HTMLElement) -> bool",
      "!doc": "Compares nodes to determine if they match.\nNode instances can be compared to each other and/or HTMLElements."
     },
     "set": {
      "!type": "fn(name: string, value: ?)",
      "!doc": "Sets the value of an attribute."
     },
     "translate": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Specifies a 2d translation."
     },
     "translateX": {
      "!type": "fn(x: number)",
      "!doc": "Translates the shape along the x-axis. When translating x and y coordinates,\nuse the `translate` method."
     },
     "translateY": {
      "!type": "fn(y: number)",
      "!doc": "Performs a translate on the y-coordinate. When translating x and y coordinates,\nuse the `translate` method."
     },
     "skew": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Skews the shape around the x-axis and y-axis."
     },
     "skewX": {
      "!type": "fn(x: number)",
      "!doc": "Skews the shape around the x-axis."
     },
     "skewY": {
      "!type": "fn(y: number)",
      "!doc": "Skews the shape around the y-axis."
     },
     "rotate": {
      "!type": "fn(deg: number)",
      "!doc": "Rotates the shape clockwise around it transformOrigin."
     },
     "scale": {
      "!type": "fn(val: number)",
      "!doc": "Specifies a 2d scaling operation."
     },
     "getBounds": {
      "!type": "fn() -> ?",
      "!doc": "Returns the bounds for a shape.\n\nCalculates the a new bounding box from the original corner coordinates (base on size and position) and the transform matrix.\nThe calculated bounding box is used by the graphic instance to calculate its viewBox."
     },
     "toFront": {
      "!type": "fn()",
      "!doc": "Places the shape underneath all other shapes."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Destroys the shape instance."
     },
     "transformOrigin": {
      "!type": "+yui.Array",
      "!doc": "An array of x, y values which indicates the transformOrigin in which to rotate the shape. Valid values range between 0 and 1 representing a\nfraction of the shapes corresponding bounding box dimension. The default value is [0.5, 0.5]."
     },
     "transform": {
      "!type": "string",
      "!doc": "<p>A string containing, in order, transform operations applied to the shape instance. The `transform` string can contain the following values:\n\n   <dl>\n       <dt>rotate</dt><dd>Rotates the shape clockwise around it transformOrigin.</dd>\n       <dt>translate</dt><dd>Specifies a 2d translation.</dd>\n       <dt>skew</dt><dd>Skews the shape around the x-axis and y-axis.</dd>\n       <dt>scale</dt><dd>Specifies a 2d scaling operation.</dd>\n       <dt>translateX</dt><dd>Translates the shape along the x-axis.</dd>\n       <dt>translateY</dt><dd>Translates the shape along the y-axis.</dd>\n       <dt>skewX</dt><dd>Skews the shape around the x-axis.</dd>\n       <dt>skewY</dt><dd>Skews the shape around the y-axis.</dd>\n       <dt>matrix</dt><dd>Specifies a 2D transformation matrix comprised of the specified six values.</dd>\n   </dl>\n</p>\n<p>Applying transforms through the transform attribute will reset the transform matrix and apply a new transform. The shape class also contains\ncorresponding methods for each transform that will apply the transform to the current matrix. The below code illustrates how you might use the\n`transform` attribute to instantiate a recangle with a rotation of 45 degrees.</p>\n           var myRect = new Y.Rect({\n               type:\"rect\",\n               width: 50,\n               height: 40,\n               transform: \"rotate(45)\"\n           };\n<p>The code below would apply `translate` and `rotate` to an existing shape.</p>\n\n       myRect.set(\"transform\", \"translate(40, 50) rotate(45)\");"
     },
     "node": {
      "!type": "+HTMLElement",
      "!doc": "Dom node for the shape"
     },
     "id": {
      "!type": "string",
      "!doc": "Unique id for class instance."
     },
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the shape"
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the shape"
     },
     "x": {
      "!type": "number",
      "!doc": "Indicates the x position of shape."
     },
     "y": {
      "!type": "number",
      "!doc": "Indicates the y position of shape."
     },
     "visible": {
      "!type": "bool",
      "!doc": "Indicates whether the shape is visible."
     },
     "fill": {
      "!type": "+yui.Object",
      "!doc": "Contains information about the fill of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the fill.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1.</dd>\n     <dt>type</dt><dd>Type of fill.\n         <dl>\n             <dt>solid</dt><dd>Solid single color fill. (default)</dd>\n             <dt>linear</dt><dd>Linear gradient fill.</dd>\n             <dt>radial</dt><dd>Radial gradient fill.</dd>\n         </dl>\n     </dd>\n </dl>\n <p>If a `linear` or `radial` is specified as the fill type. The following additional property is used:\n <dl>\n     <dt>stops</dt><dd>An array of objects containing the following properties:\n         <dl>\n             <dt>color</dt><dd>The color of the stop.</dd>\n             <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stop. The default value is 1.\n             Note: No effect for IE 6 - 8</dd>\n             <dt>offset</dt><dd>Number between 0 and 1 indicating where the color stop is positioned.</dd>\n         </dl>\n     </dd>\n     <p>Linear gradients also have the following property:</p>\n     <dt>rotation</dt><dd>Linear gradients flow left to right by default. The rotation property allows you to change the\n     flow by rotation. (e.g. A rotation of 180 would make the gradient pain from right to left.)</dd>\n     <p>Radial gradients have the following additional properties:</p>\n     <dt>r</dt><dd>Radius of the gradient circle.</dd>\n     <dt>fx</dt><dd>Focal point x-coordinate of the gradient.</dd>\n     <dt>fy</dt><dd>Focal point y-coordinate of the gradient.</dd>\n </dl>\n <p>The corresponding `SVGShape` class implements the following additional properties.</p>\n <dl>\n     <dt>cx</dt><dd>\n         <p>The x-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and\n         `VMLShape` classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n     <dt>cy</dt><dd>\n         <p>The y-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and `VMLShape`\n         classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n </dl>\n <p>These properties are not currently implemented in `CanvasShape` or `VMLShape`.</p>"
     },
     "stroke": {
      "!type": "+yui.Object",
      "!doc": "Contains information about the stroke of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the stroke.</dd>\n     <dt>weight</dt><dd>Number that indicates the width of the stroke.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stroke. The default value is 1.</dd>\n     <dt>dashstyle</dt>Indicates whether to draw a dashed stroke. When set to \"none\", a solid stroke is drawn. When set\n     to an array, the first index indicates the length of the dash. The second index indicates the length of gap.\n     <dt>linecap</dt><dd>Specifies the linecap for the stroke. The following values can be specified:\n         <dl>\n             <dt>butt (default)</dt><dd>Specifies a butt linecap.</dd>\n             <dt>square</dt><dd>Specifies a sqare linecap.</dd>\n             <dt>round</dt><dd>Specifies a round linecap.</dd>\n         </dl>\n     </dd>\n     <dt>linejoin</dt><dd>Specifies a linejoin for the stroke. The following values can be specified:\n         <dl>\n             <dt>round (default)</dt><dd>Specifies that the linejoin will be round.</dd>\n             <dt>bevel</dt><dd>Specifies a bevel for the linejoin.</dd>\n             <dt>miter limit</dt><dd>An integer specifying the miter limit of a miter linejoin. If you want to specify a linejoin\n             of miter, you simply specify the limit as opposed to having separate miter and miter limit values.</dd>\n         </dl>\n     </dd>\n </dl>"
     },
     "data": {
      "!type": "string",
      "!doc": "Represents an SVG Path string. This will be parsed and added to shapes API to represent the SVG data across all\nimplementations. Note that when using VML or SVG implementations, part of this content will be added to the DOM using\nrespective VML/SVG attributes. If your content comes from an untrusted source, you will need to ensure that no\nmalicious code is included in that content."
     },
     "graphic": {
      "!type": "+graphics.Graphic",
      "!doc": "Reference to the container Graphic."
     }
    }
   },
   "CircleGroup": {
    "!type": "fn() -> +graphics.CircleGroup",
    "prototype": {
     "drawShape": {
      "!type": "fn(cfg: +yui.Object)",
      "!doc": "Algorithm for drawing shape."
     }
    }
   },
   "AttributeLite": {
    "!type": "fn() -> +graphics.AttributeLite",
    "prototype": {
     "addAttrs": {
      "!type": "fn(cfg: +yui.Object)",
      "!doc": "Initializes the attributes for a shape. If an attribute config is passed into the constructor of the host,\nthe initial values will be overwritten."
     },
     "get": {
      "!type": "fn(name: string) -> ?",
      "!doc": "For a given item, returns the value of the property requested, or undefined if not found."
     },
     "set": {
      "!type": "fn(name: string, value: ?)",
      "!doc": "Sets the value of an attribute."
     }
    }
   },
   "Drawing": {
    "!type": "fn() -> +graphics.Drawing",
    "prototype": {
     "curveTo": {
      "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) -> !this",
      "!doc": "Draws a bezier curve."
     },
     "quadraticCurveTo": {
      "!type": "fn(cpx: number, cpy: number, x: number, y: number) -> !this",
      "!doc": "Draws a quadratic bezier curve."
     },
     "drawRect": {
      "!type": "fn(x: number, y: number, w: number, h: number) -> !this",
      "!doc": "Draws a rectangle."
     },
     "drawRoundRect": {
      "!type": "fn(x: number, y: number, w: number, h: number, ew: number, eh: number) -> !this",
      "!doc": "Draws a rectangle with rounded corners."
     },
     "lineTo": {
      "!type": "fn(point1: number, point2: number) -> !this",
      "!doc": "Draws a line segment using the current line style from the current drawing position to the specified x and y coordinates."
     },
     "relativeLineTo": {
      "!type": "fn(point1: number, point2: number) -> !this",
      "!doc": "Draws a line segment using the current line style from the current drawing position to the relative x and y coordinates."
     },
     "moveTo": {
      "!type": "fn(x: number, y: number) -> !this",
      "!doc": "Moves the current drawing position to specified x and y coordinates."
     },
     "relativeMoveTo": {
      "!type": "fn(x: number, y: number) -> !this",
      "!doc": "Moves the current drawing position relative to specified x and y coordinates."
     },
     "end": {
      "!type": "fn() -> !this",
      "!doc": "Completes a drawing operation."
     },
     "clear": {
      "!type": "fn() -> !this",
      "!doc": "Clears the path."
     },
     "closePath": {
      "!type": "fn() -> !this",
      "!doc": "Ends a fill and stroke"
     }
    }
   },
   "Shape": {
    "!type": "fn(cfg: +yui.Object) -> +graphics.Shape",
    "prototype": {
     "addClass": {
      "!type": "fn(className: string)",
      "!doc": "Add a class name to each node."
     },
     "removeClass": {
      "!type": "fn(className: string)",
      "!doc": "Removes a class name from each node."
     },
     "getXY": {
      "!type": "fn() -> ?",
      "!doc": "Gets the current position of the node in page coordinates."
     },
     "setXY": {
      "!type": "fn(Contains: +yui.Array)",
      "!doc": "Set the position of the shape in page coordinates, regardless of how the node is positioned."
     },
     "contains": {
      "!type": "fn(needle: +graphics.Shape) -> ?",
      "!doc": "Determines whether the node is an ancestor of another HTML element in the DOM hierarchy."
     },
     "compareTo": {
      "!type": "fn(refNode: +HTMLElement) -> bool",
      "!doc": "Compares nodes to determine if they match.\nNode instances can be compared to each other and/or HTMLElements."
     },
     "test": {
      "!type": "fn(selector: string) -> ?",
      "!doc": "Test if the supplied node matches the supplied selector."
     },
     "set": {
      "!type": "fn(name: string, value: ?)",
      "!doc": "Sets the value of an attribute."
     },
     "translate": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Specifies a 2d translation."
     },
     "translateX": {
      "!type": "fn(x: number)",
      "!doc": "Translates the shape along the x-axis. When translating x and y coordinates,\nuse the `translate` method."
     },
     "translateY": {
      "!type": "fn(y: number)",
      "!doc": "Translates the shape along the y-axis. When translating x and y coordinates,\nuse the `translate` method."
     },
     "skew": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Skews the shape around the x-axis and y-axis."
     },
     "skewX": {
      "!type": "fn(x: number)",
      "!doc": "Skews the shape around the x-axis."
     },
     "skewY": {
      "!type": "fn(y: number)",
      "!doc": "Skews the shape around the y-axis."
     },
     "rotate": {
      "!type": "fn(deg: number)",
      "!doc": "Rotates the shape clockwise around it transformOrigin."
     },
     "scale": {
      "!type": "fn(val: number)",
      "!doc": "Specifies a 2d scaling operation."
     },
     "getBounds": {
      "!type": "fn() -> ?",
      "!doc": "Returns the bounds for a shape.\n\nCalculates the a new bounding box from the original corner coordinates (base on size and position) and the transform matrix.\nThe calculated bounding box is used by the graphic instance to calculate its viewBox."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Destroys the instance."
     },
     "transformOrigin": {
      "!type": "+yui.Array",
      "!doc": "An array of x, y values which indicates the transformOrigin in which to rotate the shape. Valid values range between 0 and 1 representing a\nfraction of the shapes corresponding bounding box dimension. The default value is [0.5, 0.5]."
     },
     "transform": {
      "!type": "string",
      "!doc": "<p>A string containing, in order, transform operations applied to the shape instance. The `transform` string can contain the following values:\n\n   <dl>\n       <dt>rotate</dt><dd>Rotates the shape clockwise around it transformOrigin.</dd>\n       <dt>translate</dt><dd>Specifies a 2d translation.</dd>\n       <dt>skew</dt><dd>Skews the shape around the x-axis and y-axis.</dd>\n       <dt>scale</dt><dd>Specifies a 2d scaling operation.</dd>\n       <dt>translateX</dt><dd>Translates the shape along the x-axis.</dd>\n       <dt>translateY</dt><dd>Translates the shape along the y-axis.</dd>\n       <dt>skewX</dt><dd>Skews the shape around the x-axis.</dd>\n       <dt>skewY</dt><dd>Skews the shape around the y-axis.</dd>\n       <dt>matrix</dt><dd>Specifies a 2D transformation matrix comprised of the specified six values.</dd>\n   </dl>\n</p>\n<p>Applying transforms through the transform attribute will reset the transform matrix and apply a new transform. The shape class also contains\ncorresponding methods for each transform that will apply the transform to the current matrix. The below code illustrates how you might use the\n`transform` attribute to instantiate a recangle with a rotation of 45 degrees.</p>\n           var myRect = new Y.Rect({\n               type:\"rect\",\n               width: 50,\n               height: 40,\n               transform: \"rotate(45)\"\n           };\n<p>The code below would apply `translate` and `rotate` to an existing shape.</p>\n\n       myRect.set(\"transform\", \"translate(40, 50) rotate(45)\");"
     },
     "id": {
      "!type": "string",
      "!doc": "Unique id for class instance."
     },
     "x": {
      "!type": "number",
      "!doc": "Indicates the x position of shape."
     },
     "y": {
      "!type": "number",
      "!doc": "Indicates the y position of shape."
     },
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the shape"
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the shape"
     },
     "visible": {
      "!type": "bool",
      "!doc": "Indicates whether the shape is visible."
     },
     "fill": {
      "!type": "+yui.Object",
      "!doc": "Contains information about the fill of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the fill.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1.</dd>\n     <dt>type</dt><dd>Type of fill.\n         <dl>\n             <dt>solid</dt><dd>Solid single color fill. (default)</dd>\n             <dt>linear</dt><dd>Linear gradient fill.</dd>\n             <dt>radial</dt><dd>Radial gradient fill.</dd>\n         </dl>\n     </dd>\n </dl>\n <p>If a `linear` or `radial` is specified as the fill type. The following additional property is used:\n <dl>\n     <dt>stops</dt><dd>An array of objects containing the following properties:\n         <dl>\n             <dt>color</dt><dd>The color of the stop.</dd>\n             <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stop. The default value is 1.\n             Note: No effect for IE 6 - 8</dd>\n             <dt>offset</dt><dd>Number between 0 and 1 indicating where the color stop is positioned.</dd>\n         </dl>\n     </dd>\n     <p>Linear gradients also have the following property:</p>\n     <dt>rotation</dt><dd>Linear gradients flow left to right by default. The rotation property allows you to change the\n     flow by rotation. (e.g. A rotation of 180 would make the gradient pain from right to left.)</dd>\n     <p>Radial gradients have the following additional properties:</p>\n     <dt>r</dt><dd>Radius of the gradient circle.</dd>\n     <dt>fx</dt><dd>Focal point x-coordinate of the gradient.</dd>\n     <dt>fy</dt><dd>Focal point y-coordinate of the gradient.</dd>\n     <dt>cx</dt><dd>\n         <p>The x-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and\n         `VMLShape` classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n     <dt>cy</dt><dd>\n         <p>The y-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and `VMLShape`\n         classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n </dl>"
     },
     "stroke": {
      "!type": "+yui.Object",
      "!doc": "Contains information about the stroke of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the stroke.</dd>\n     <dt>weight</dt><dd>Number that indicates the width of the stroke.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stroke. The default value is 1.</dd>\n     <dt>dashstyle</dt>Indicates whether to draw a dashed stroke. When set to \"none\", a solid stroke is drawn. When set\n     to an array, the first index indicates the length of the dash. The second index indicates the length of gap.\n     <dt>linecap</dt><dd>Specifies the linecap for the stroke. The following values can be specified:\n         <dl>\n             <dt>butt (default)</dt><dd>Specifies a butt linecap.</dd>\n             <dt>square</dt><dd>Specifies a sqare linecap.</dd>\n             <dt>round</dt><dd>Specifies a round linecap.</dd>\n         </dl>\n     </dd>\n     <dt>linejoin</dt><dd>Specifies a linejoin for the stroke. The following values can be specified:\n         <dl>\n             <dt>round (default)</dt><dd>Specifies that the linejoin will be round.</dd>\n             <dt>bevel</dt><dd>Specifies a bevel for the linejoin.</dd>\n             <dt>miter limit</dt><dd>An integer specifying the miter limit of a miter linejoin. If you want to specify a linejoin\n             of miter, you simply specify the limit as opposed to having separate miter and miter limit values.</dd>\n         </dl>\n     </dd>\n </dl>"
     },
     "node": {
      "!type": "+HTMLElement",
      "!doc": "Dom node for the shape."
     },
     "data": {
      "!type": "string",
      "!doc": "Represents an SVG Path string. This will be parsed and added to shapes API to represent the SVG data across all\nimplementations. Note that when using VML or SVG implementations, part of this content will be added to the DOM using\nrespective VML/SVG attributes. If your content comes from an untrusted source, you will need to ensure that no\nmalicious code is included in that content."
     },
     "graphic": {
      "!type": "+graphics.Graphic",
      "!doc": "Reference to the parent graphic instance"
     }
    }
   },
   "Circle": {
    "!type": "fn() -> +graphics.Circle",
    "prototype": {
     "!proto": "graphics.Shape.prototype",
     "radius": {
      "!type": "number",
      "!doc": "Radius of the circle"
     }
    }
   },
   "Path": {
    "!type": "fn() -> +graphics.Path",
    "prototype": {
     "!proto": "graphics.Shape.prototype",
     "path": {
      "!type": "string",
      "!doc": "Indicates the path used for the node."
     }
    }
   },
   "Graphic": {
    "!type": "fn() -> +graphics.Graphic",
    "prototype": {
     "render": {
      "!type": "fn(parentNode: +node.Node)",
      "!doc": "Adds the graphics node to the dom."
     },
     "id": {
      "!type": "string",
      "!doc": "Unique id for class instance."
     },
     "shapes": {
      "!type": "+yui.Object",
      "!doc": "Key value pairs in which a shape instance is associated with its id."
     },
     "contentBounds": {
      "!type": "+yui.Object",
      "!doc": "Object containing size and coordinate data for the content of a Graphic in relation to the coordSpace node."
     },
     "node": {
      "!type": "+HTMLElement",
      "!doc": "The html element that represents to coordinate system of the Graphic instance."
     },
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the `Graphic`."
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the `Graphic`."
     },
     "autoSize": {
      "!type": "bool",
      "!doc": "Determines the sizing of the Graphic.\n\n<dl>\n    <dt>sizeContentToGraphic</dt><dd>The Graphics width and height attributes are, either explicitly set through the\n    <code>width</code> and <code>height</code> attributes or are determined by the dimensions of the parent element. The\n    content contained in the Graphic will be sized to fit with in the Graphic instances dimensions. When using this\n    setting, the <code>preserveAspectRatio</code> attribute will determine how the contents are sized.</dd>\n    <dt>sizeGraphicToContent</dt><dd>(Also accepts a value of true) The Graphics width and height are determined by the\n    size and positioning of the content.</dd>\n    <dt>false</dt><dd>The Graphics width and height attributes are, either explicitly set through the <code>width</code>\n    and <code>height</code> attributes or are determined by the dimensions of the parent element. The contents of the\n    Graphic instance are not affected by this setting.</dd>\n</dl>"
     },
     "preserveAspectRatio": {
      "!type": "string",
      "!doc": "Determines how content is sized when <code>autoSize</code> is set to <code>sizeContentToGraphic</code>.\n\n <dl>\n     <dt>none<dt><dd>Do not force uniform scaling. Scale the graphic content of the given element non-uniformly if necessary\n     such that the elements bounding box exactly matches the viewport rectangle.</dd>\n     <dt>xMinYMin</dt><dd>Force uniform scaling position along the top left of the Graphics node.</dd>\n     <dt>xMidYMin</dt><dd>Force uniform scaling horizontally centered and positioned at the top of the Graphics node.<dd>\n     <dt>xMaxYMin</dt><dd>Force uniform scaling positioned horizontally from the right and vertically from the top.</dd>\n     <dt>xMinYMid</dt>Force uniform scaling positioned horizontally from the left and vertically centered.</dd>\n     <dt>xMidYMid (the default)</dt><dd>Force uniform scaling with the content centered.</dd>\n     <dt>xMaxYMid</dt><dd>Force uniform scaling positioned horizontally from the right and vertically centered.</dd>\n     <dt>xMinYMax</dt><dd>Force uniform scaling positioned horizontally from the left and vertically from the bottom.</dd>\n     <dt>xMidYMax</dt><dd>Force uniform scaling horizontally centered and position vertically from the bottom.</dd>\n     <dt>xMaxYMax</dt><dd>Force uniform scaling positioned horizontally from the right and vertically from the bottom.</dd>\n </dl>"
     },
     "resizeDown": {
      "!type": "bool",
      "!doc": "The contentBounds will resize to greater values but not to smaller values. (for performance)\nWhen resizing the contentBounds down is desirable, set the resizeDown value to true."
     },
     "x": {
      "!type": "number",
      "!doc": "Indicates the x-coordinate for the instance."
     },
     "y": {
      "!type": "number",
      "!doc": "Indicates the y-coordinate for the instance."
     },
     "visible": {
      "!type": "bool",
      "!doc": "Indicates whether the `Graphic` and its children are visible."
     },
     "getXY": {
      "!type": "fn() -> ?",
      "!doc": "Gets the current position of the graphic instance in page coordinates."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Removes all nodes."
     },
     "addShape": {
      "!type": "fn(cfg: +yui.Object) -> ?",
      "!doc": "<p>Generates a shape instance by type. The method accepts an object that contains the shapes\ntype and attributes to be customized. For example, the code below would create a rectangle:</p>\n\n           var myRect = myGraphic.addShape({\n               type: \"rect\",\n               width: 40,\n               height: 30,\n               fill: {\n                   color: \"#9aa\"\n               },\n               stroke: {\n                   weight: 1,\n                   color: \"#000\"\n               }\n           });\n\n<p>The `Graphics` module includes a few basic shapes. More information on their creation\ncan be found in each shapes documentation:\n\n <ul>\n     <li><a href=\"Circle.html\">`Circle`</a></li>\n     <li><a href=\"Ellipse.html\">`Ellipse`</a></li>\n     <li><a href=\"Rect.html\">`Rect`</a></li>\n     <li><a href=\"Path.html\">`Path`</a></li>\n </ul>\n\n The `Graphics` module also allows for the creation of custom shapes. If a custom shape\n has been created, it can be instantiated with the `addShape` method as well. The attributes,\n required and optional, would need to be defined in the custom shape.\n\n           var myCustomShape = myGraphic.addShape({\n               type: Y.MyCustomShape,\n               width: 50,\n               height: 50,\n               fill: {\n                   color: \"#9aa\"\n               },\n               stroke: {\n                   weight: 1,\n                   color: \"#000\"\n               }\n           });"
     },
     "removeShape": {
      "!type": "fn(shape: +graphics.Shape)",
      "!doc": "Removes a shape instance from from the graphic instance."
     },
     "removeAllShapes": {
      "!type": "fn()",
      "!doc": "Removes all shape instances from the dom."
     },
     "getShapeById": {
      "!type": "fn(id: string) -> ?",
      "!doc": "Returns a shape based on the id of its dom node."
     },
     "batch": {
      "!type": "fn(method: fn())",
      "!doc": "Allows for creating multiple shapes in order to batch appending and redraw operations."
     }
    }
   },
   "SVGCircle": {
    "!type": "fn()",
    "prototype": {
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the shape"
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the shape"
     },
     "radius": {
      "!type": "number",
      "!doc": "Radius of the circle"
     }
    }
   },
   "SVGDrawing": {
    "!type": "fn()",
    "prototype": {
     "curveTo": {
      "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) -> !this",
      "!doc": "Draws a bezier curve."
     },
     "relativeCurveTo": {
      "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) -> !this",
      "!doc": "Draws a bezier curve relative to the current coordinates."
     },
     "quadraticCurveTo": {
      "!type": "fn(cpx: number, cpy: number, x: number, y: number) -> !this",
      "!doc": "Draws a quadratic bezier curve relative to the current position."
     },
     "drawRect": {
      "!type": "fn(x: number, y: number, w: number, h: number) -> !this",
      "!doc": "Draws a rectangle."
     },
     "drawRoundRect": {
      "!type": "fn(x: number, y: number, w: number, h: number, ew: number, eh: number) -> !this",
      "!doc": "Draws a rectangle with rounded corners."
     },
     "lineTo": {
      "!type": "fn(point1: number, point2: number) -> !this",
      "!doc": "Draws a line segment using the current line style from the current drawing position to the specified x and y coordinates."
     },
     "relativeLineTo": {
      "!type": "fn(point1: number, point2: number) -> !this",
      "!doc": "Draws a line segment using the current line style from the current drawing position to the relative x and y coordinates."
     },
     "moveTo": {
      "!type": "fn(x: number, y: number) -> !this",
      "!doc": "Moves the current drawing position to specified x and y coordinates."
     },
     "relativeMoveTo": {
      "!type": "fn(x: number, y: number) -> !this",
      "!doc": "Moves the current drawing position relative to specified x and y coordinates."
     },
     "end": {
      "!type": "fn() -> !this",
      "!doc": "Completes a drawing operation."
     },
     "clear": {
      "!type": "fn() -> !this",
      "!doc": "Clears the path."
     },
     "closePath": {
      "!type": "fn() -> !this",
      "!doc": "Ends a fill and stroke"
     }
    }
   },
   "SVGEllipse": {
    "!type": "fn()",
    "prototype": {
     "xRadius": {
      "!type": "number",
      "!doc": "Horizontal radius for the ellipse."
     },
     "yRadius": {
      "!type": "number",
      "!doc": "Vertical radius for the ellipse."
     }
    }
   },
   "SVGGraphic": {
    "!type": "fn()",
    "prototype": {
     "render": {
      "!type": "fn(parentNode: +HTMLElement)",
      "!doc": "Adds the graphics node to the dom."
     },
     "id": {
      "!type": "string",
      "!doc": "Unique id for class instance."
     },
     "shapes": {
      "!type": "+yui.Object",
      "!doc": "Key value pairs in which a shape instance is associated with its id."
     },
     "contentBounds": {
      "!type": "+yui.Object",
      "!doc": "Object containing size and coordinate data for the content of a Graphic in relation to the coordSpace node."
     },
     "node": {
      "!type": "+HTMLElement",
      "!doc": "The html element that represents to coordinate system of the Graphic instance."
     },
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the `Graphic`."
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the `Graphic`."
     },
     "autoSize": {
      "!type": "bool",
      "!doc": "Determines the sizing of the Graphic.\n\n<dl>\n    <dt>sizeContentToGraphic</dt><dd>The Graphics width and height attributes are, either explicitly set through the\n    <code>width</code> and <code>height</code> attributes or are determined by the dimensions of the parent element. The\n    content contained in the Graphic will be sized to fit with in the Graphic instances dimensions. When using this\n    setting, the <code>preserveAspectRatio</code> attribute will determine how the contents are sized.</dd>\n    <dt>sizeGraphicToContent</dt><dd>(Also accepts a value of true) The Graphics width and height are determined by the\n    size and positioning of the content.</dd>\n    <dt>false</dt><dd>The Graphics width and height attributes are, either explicitly set through the <code>width</code>\n    and <code>height</code> attributes or are determined by the dimensions of the parent element. The contents of the\n    Graphic instance are not affected by this setting.</dd>\n</dl>"
     },
     "preserveAspectRatio": {
      "!type": "string",
      "!doc": "Determines how content is sized when <code>autoSize</code> is set to <code>sizeContentToGraphic</code>.\n\n <dl>\n     <dt>none<dt><dd>Do not force uniform scaling. Scale the graphic content of the given element non-uniformly if necessary\n     such that the elements bounding box exactly matches the viewport rectangle.</dd>\n     <dt>xMinYMin</dt><dd>Force uniform scaling position along the top left of the Graphics node.</dd>\n     <dt>xMidYMin</dt><dd>Force uniform scaling horizontally centered and positioned at the top of the Graphics node.<dd>\n     <dt>xMaxYMin</dt><dd>Force uniform scaling positioned horizontally from the right and vertically from the top.</dd>\n     <dt>xMinYMid</dt>Force uniform scaling positioned horizontally from the left and vertically centered.</dd>\n     <dt>xMidYMid (the default)</dt><dd>Force uniform scaling with the content centered.</dd>\n     <dt>xMaxYMid</dt><dd>Force uniform scaling positioned horizontally from the right and vertically centered.</dd>\n     <dt>xMinYMax</dt><dd>Force uniform scaling positioned horizontally from the left and vertically from the bottom.</dd>\n     <dt>xMidYMax</dt><dd>Force uniform scaling horizontally centered and position vertically from the bottom.</dd>\n     <dt>xMaxYMax</dt><dd>Force uniform scaling positioned horizontally from the right and vertically from the bottom.</dd>\n </dl>"
     },
     "resizeDown": {
      "!type": "bool",
      "!doc": "The contentBounds will resize to greater values but not to smaller values. (for performance)\nWhen resizing the contentBounds down is desirable, set the resizeDown value to true."
     },
     "x": {
      "!type": "number",
      "!doc": "Indicates the x-coordinate for the instance."
     },
     "y": {
      "!type": "number",
      "!doc": "Indicates the y-coordinate for the instance."
     },
     "set": {
      "!type": "fn(name: string, value: ?)",
      "!doc": "Sets the value of an attribute."
     },
     "getXY": {
      "!type": "fn() -> ?",
      "!doc": "Gets the current position of the graphic instance in page coordinates."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Removes all nodes."
     },
     "addShape": {
      "!type": "fn(cfg: +yui.Object) -> ?",
      "!doc": "Generates a shape instance by type."
     },
     "removeShape": {
      "!type": "fn(shape: +graphics.Shape)",
      "!doc": "Removes a shape instance from from the graphic instance."
     },
     "removeAllShapes": {
      "!type": "fn()",
      "!doc": "Removes all shape instances from the dom."
     },
     "clear": {
      "!type": "fn()",
      "!doc": "Clears the graphics object."
     },
     "getShapeById": {
      "!type": "fn(id: string) -> ?",
      "!doc": "Returns a shape based on the id of its dom node."
     },
     "batch": {
      "!type": "fn(method: fn())",
      "!doc": "Allows for creating multiple shapes in order to batch appending and redraw operations."
     }
    }
   },
   "SVGPath": {
    "!type": "fn()",
    "prototype": {
     "path": {
      "!type": "string",
      "!doc": "Indicates the path used for the node."
     },
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the shape"
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the shape"
     }
    }
   },
   "SVGPieSlice": {
    "!type": "fn()",
    "prototype": {
     "startAngle": {
      "!type": "number",
      "!doc": "Starting angle in relation to a circle in which to begin the pie slice drawing."
     },
     "arc": {
      "!type": "number",
      "!doc": "Arc of the slice."
     },
     "radius": {
      "!type": "number",
      "!doc": "Radius of the circle in which the pie slice is drawn"
     }
    }
   },
   "SVGShape": {
    "!type": "fn()",
    "prototype": {
     "addClass": {
      "!type": "fn(className: string)",
      "!doc": "Add a class name to each node."
     },
     "removeClass": {
      "!type": "fn(className: string)",
      "!doc": "Removes a class name from each node."
     },
     "getXY": {
      "!type": "fn() -> ?",
      "!doc": "Gets the current position of the node in page coordinates."
     },
     "setXY": {
      "!type": "fn(Contains: +yui.Array)",
      "!doc": "Set the position of the shape in page coordinates, regardless of how the node is positioned."
     },
     "contains": {
      "!type": "fn(needle: +graphics.SVGShape) -> ?",
      "!doc": "Determines whether the node is an ancestor of another HTML element in the DOM hierarchy."
     },
     "compareTo": {
      "!type": "fn(refNode: +HTMLElement) -> bool",
      "!doc": "Compares nodes to determine if they match.\nNode instances can be compared to each other and/or HTMLElements."
     },
     "test": {
      "!type": "fn(selector: string) -> ?",
      "!doc": "Test if the supplied node matches the supplied selector."
     },
     "set": {
      "!type": "fn(name: string, value: ?)",
      "!doc": "Sets the value of an attribute."
     },
     "translate": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Specifies a 2d translation."
     },
     "translateX": {
      "!type": "fn(x: number)",
      "!doc": "Translates the shape along the x-axis. When translating x and y coordinates,\nuse the `translate` method."
     },
     "translateY": {
      "!type": "fn(y: number)",
      "!doc": "Translates the shape along the y-axis. When translating x and y coordinates,\nuse the `translate` method."
     },
     "skew": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Skews the shape around the x-axis and y-axis."
     },
     "skewX": {
      "!type": "fn(x: number)",
      "!doc": "Skews the shape around the x-axis."
     },
     "skewY": {
      "!type": "fn(y: number)",
      "!doc": "Skews the shape around the y-axis."
     },
     "rotate": {
      "!type": "fn(deg: number)",
      "!doc": "Rotates the shape clockwise around it transformOrigin."
     },
     "scale": {
      "!type": "fn(val: number)",
      "!doc": "Specifies a 2d scaling operation."
     },
     "getBounds": {
      "!type": "fn() -> ?",
      "!doc": "Returns the bounds for a shape.\n\nCalculates the a new bounding box from the original corner coordinates (base on size and position) and the transform matrix.\nThe calculated bounding box is used by the graphic instance to calculate its viewBox."
     },
     "toFront": {
      "!type": "fn()",
      "!doc": "Places the shape underneath all other shapes."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Destroys the shape instance."
     },
     "transformOrigin": {
      "!type": "+yui.Array",
      "!doc": "An array of x, y values which indicates the transformOrigin in which to rotate the shape. Valid values range between 0 and 1 representing a\nfraction of the shapes corresponding bounding box dimension. The default value is [0.5, 0.5]."
     },
     "transform": {
      "!type": "string",
      "!doc": "<p>A string containing, in order, transform operations applied to the shape instance. The `transform` string can contain the following values:\n\n   <dl>\n       <dt>rotate</dt><dd>Rotates the shape clockwise around it transformOrigin.</dd>\n       <dt>translate</dt><dd>Specifies a 2d translation.</dd>\n       <dt>skew</dt><dd>Skews the shape around the x-axis and y-axis.</dd>\n       <dt>scale</dt><dd>Specifies a 2d scaling operation.</dd>\n       <dt>translateX</dt><dd>Translates the shape along the x-axis.</dd>\n       <dt>translateY</dt><dd>Translates the shape along the y-axis.</dd>\n       <dt>skewX</dt><dd>Skews the shape around the x-axis.</dd>\n       <dt>skewY</dt><dd>Skews the shape around the y-axis.</dd>\n       <dt>matrix</dt><dd>Specifies a 2D transformation matrix comprised of the specified six values.</dd>\n   </dl>\n</p>\n<p>Applying transforms through the transform attribute will reset the transform matrix and apply a new transform. The shape class also contains\ncorresponding methods for each transform that will apply the transform to the current matrix. The below code illustrates how you might use the\n`transform` attribute to instantiate a recangle with a rotation of 45 degrees.</p>\n           var myRect = new Y.Rect({\n               type:\"rect\",\n               width: 50,\n               height: 40,\n               transform: \"rotate(45)\"\n           };\n<p>The code below would apply `translate` and `rotate` to an existing shape.</p>\n\n       myRect.set(\"transform\", \"translate(40, 50) rotate(45)\");"
     },
     "id": {
      "!type": "string",
      "!doc": "Unique id for class instance."
     },
     "x": {
      "!type": "number",
      "!doc": "Indicates the x position of shape."
     },
     "y": {
      "!type": "number",
      "!doc": "Indicates the y position of shape."
     },
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the shape"
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the shape"
     },
     "visible": {
      "!type": "bool",
      "!doc": "Indicates whether the shape is visible."
     },
     "shapeRendering": {
      "!type": "string",
      "!doc": "Only implemented in SVG implementation.\nApplies the SVG shape-rendering attribute to the shape.\n <dl>\n     <dt>auto</dt>\n     <dd>Indicates that the user agent shall make appropriate tradeoffs to balance speed,\n     crisp edges and geometric precision, but with geometric precision given more importance than speed and crisp edges.</dd>\n     <dt>optimizeSpeed</dt>\n     <dd>Indicates that the user agent shall emphasize rendering speed over geometric precision and crisp edges.\n     This option will sometimes cause the user agent to turn off shape anti-aliasing.</dd>\n     <dt>crispEdges</dt>\n     <dd>Indicates that the user agent shall attempt to emphasize the contrast between clean edges of artwork over rendering\n     speed and geometric precision. To achieve crisp edges, the user agent might turn off anti-aliasing for all lines and curves\n     or possibly just for straight lines which are close to vertical or horizontal. Also, the user agent might adjust line\n     positions and line widths to align edges with device pixels.</dd>\n     <dt>geometricPrecision</dt>\n     <dd>Indicates that the user agent shall emphasize geometric precision over speed and crisp edges.</dd>\n </dl>"
     },
     "fill": {
      "!type": "+yui.Object",
      "!doc": "Contains information about the fill of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the fill.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1.</dd>\n     <dt>type</dt><dd>Type of fill.\n         <dl>\n             <dt>solid</dt><dd>Solid single color fill. (default)</dd>\n             <dt>linear</dt><dd>Linear gradient fill.</dd>\n             <dt>radial</dt><dd>Radial gradient fill.</dd>\n         </dl>\n     </dd>\n </dl>\n <p>If a `linear` or `radial` is specified as the fill type. The following additional property is used:\n <dl>\n     <dt>stops</dt><dd>An array of objects containing the following properties:\n         <dl>\n             <dt>color</dt><dd>The color of the stop.</dd>\n             <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stop. The default value is 1.\n             Note: No effect for IE 6 - 8</dd>\n             <dt>offset</dt><dd>Number between 0 and 1 indicating where the color stop is positioned.</dd>\n         </dl>\n     </dd>\n     <p>Linear gradients also have the following property:</p>\n     <dt>rotation</dt><dd>Linear gradients flow left to right by default. The rotation property allows you to change the\n     flow by rotation. (e.g. A rotation of 180 would make the gradient pain from right to left.)</dd>\n     <p>Radial gradients have the following additional properties:</p>\n     <dt>r</dt><dd>Radius of the gradient circle.</dd>\n     <dt>fx</dt><dd>Focal point x-coordinate of the gradient.</dd>\n     <dt>fy</dt><dd>Focal point y-coordinate of the gradient.</dd>\n     <dt>cx</dt><dd>\n         <p>The x-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and\n         `VMLShape` classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n     <dt>cy</dt><dd>\n         <p>The y-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and `VMLShape`\n         classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n </dl>"
     },
     "stroke": {
      "!type": "+yui.Object",
      "!doc": "Contains information about the stroke of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the stroke.</dd>\n     <dt>weight</dt><dd>Number that indicates the width of the stroke.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stroke. The default value is 1.</dd>\n     <dt>dashstyle</dt>Indicates whether to draw a dashed stroke. When set to \"none\", a solid stroke is drawn. When set\n     to an array, the first index indicates the length of the dash. The second index indicates the length of gap.\n     <dt>linecap</dt><dd>Specifies the linecap for the stroke. The following values can be specified:\n         <dl>\n             <dt>butt (default)</dt><dd>Specifies a butt linecap.</dd>\n             <dt>square</dt><dd>Specifies a sqare linecap.</dd>\n             <dt>round</dt><dd>Specifies a round linecap.</dd>\n         </dl>\n     </dd>\n     <dt>linejoin</dt><dd>Specifies a linejoin for the stroke. The following values can be specified:\n         <dl>\n             <dt>round (default)</dt><dd>Specifies that the linejoin will be round.</dd>\n             <dt>bevel</dt><dd>Specifies a bevel for the linejoin.</dd>\n             <dt>miter limit</dt><dd>An integer specifying the miter limit of a miter linejoin. If you want to specify a linejoin\n             of miter, you simply specify the limit as opposed to having separate miter and miter limit values.</dd>\n         </dl>\n     </dd>\n </dl>"
     },
     "node": {
      "!type": "+HTMLElement",
      "!doc": "Dom node for the shape."
     },
     "data": {
      "!type": "string",
      "!doc": "Represents an SVG Path string. This will be parsed and added to shapes API to represent the SVG data across all\nimplementations. Note that when using VML or SVG implementations, part of this content will be added to the DOM using\nrespective VML/SVG attributes. If your content comes from an untrusted source, you will need to ensure that no\nmalicious code is included in that content."
     },
     "graphic": {
      "!type": "+graphics.SVGGraphic",
      "!doc": "Reference to the parent graphic instance"
     }
    }
   },
   "VMLCircle": {
    "!type": "fn()",
    "prototype": {
     "radius": {
      "!type": "number",
      "!doc": "Radius for the circle."
     },
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the shape"
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the shape"
     }
    }
   },
   "VMLDrawing": {
    "!type": "fn()",
    "prototype": {
     "curveTo": {
      "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) -> !this",
      "!doc": "Draws a bezier curve."
     },
     "relativeCurveTo": {
      "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) -> !this",
      "!doc": "Draws a bezier curve."
     },
     "quadraticCurveTo": {
      "!type": "fn(cpx: number, cpy: number, x: number, y: number) -> !this",
      "!doc": "Draws a quadratic bezier curve."
     },
     "relativeQuadraticCurveTo": {
      "!type": "fn(cpx: number, cpy: number, x: number, y: number) -> !this",
      "!doc": "Draws a quadratic bezier curve relative to the current position."
     },
     "drawRect": {
      "!type": "fn(x: number, y: number, w: number, h: number, ew: number, eh: number) -> !this",
      "!doc": "Draws a rectangle with rounded corners."
     },
     "lineTo": {
      "!type": "fn(point1: number, point2: number) -> !this",
      "!doc": "Draws a line segment from the current drawing position to the specified x and y coordinates."
     },
     "relativeLineTo": {
      "!type": "fn(point1: number, point2: number) -> !this",
      "!doc": "Draws a line segment using the current line style from the current drawing position to the relative x and y coordinates."
     },
     "moveTo": {
      "!type": "fn(x: number, y: number) -> !this",
      "!doc": "Moves the current drawing position to specified x and y coordinates."
     },
     "relativeMoveTo": {
      "!type": "fn(x: number, y: number) -> !this",
      "!doc": "Moves the current drawing position relative to specified x and y coordinates."
     },
     "end": {
      "!type": "fn() -> !this",
      "!doc": "Completes a drawing operation."
     },
     "closePath": {
      "!type": "fn() -> !this",
      "!doc": "Ends a fill and stroke"
     },
     "clear": {
      "!type": "fn() -> !this",
      "!doc": "Clears the path."
     }
    }
   },
   "VMLEllipse": {
    "!type": "fn()",
    "prototype": {
     "xRadius": {
      "!type": "number",
      "!doc": "Horizontal radius for the ellipse."
     },
     "yRadius": {
      "!type": "number",
      "!doc": "Vertical radius for the ellipse."
     }
    }
   },
   "VMLGraphic": {
    "!type": "fn()",
    "prototype": {
     "render": {
      "!type": "fn(parentNode: +HTMLElement)",
      "!doc": "Adds the graphics node to the dom."
     },
     "id": {
      "!type": "string",
      "!doc": "Unique id for class instance."
     },
     "shapes": {
      "!type": "+yui.Object",
      "!doc": "Key value pairs in which a shape instance is associated with its id."
     },
     "contentBounds": {
      "!type": "+yui.Object",
      "!doc": "Object containing size and coordinate data for the content of a Graphic in relation to the coordSpace node."
     },
     "node": {
      "!type": "+HTMLElement",
      "!doc": "The html element that represents to coordinate system of the Graphic instance."
     },
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the `Graphic`."
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the `Graphic`."
     },
     "autoSize": {
      "!type": "bool",
      "!doc": "Determines the sizing of the Graphic.\n\n<dl>\n    <dt>sizeContentToGraphic</dt><dd>The Graphics width and height attributes are, either explicitly set through the\n    <code>width</code> and <code>height</code> attributes or are determined by the dimensions of the parent element. The\n    content contained in the Graphic will be sized to fit with in the Graphic instances dimensions. When using this\n    setting, the <code>preserveAspectRatio</code> attribute will determine how the contents are sized.</dd>\n    <dt>sizeGraphicToContent</dt><dd>(Also accepts a value of true) The Graphics width and height are determined by the\n    size and positioning of the content.</dd>\n    <dt>false</dt><dd>The Graphics width and height attributes are, either explicitly set through the <code>width</code>\n    and <code>height</code> attributes or are determined by the dimensions of the parent element. The contents of the\n    Graphic instance are not affected by this setting.</dd>\n</dl>"
     },
     "preserveAspectRatio": {
      "!type": "string",
      "!doc": "Determines how content is sized when <code>autoSize</code> is set to <code>sizeContentToGraphic</code>.\n\n <dl>\n     <dt>none<dt><dd>Do not force uniform scaling. Scale the graphic content of the given element non-uniformly if necessary\n     such that the elements bounding box exactly matches the viewport rectangle.</dd>\n     <dt>xMinYMin</dt><dd>Force uniform scaling position along the top left of the Graphics node.</dd>\n     <dt>xMidYMin</dt><dd>Force uniform scaling horizontally centered and positioned at the top of the Graphics node.<dd>\n     <dt>xMaxYMin</dt><dd>Force uniform scaling positioned horizontally from the right and vertically from the top.</dd>\n     <dt>xMinYMid</dt>Force uniform scaling positioned horizontally from the left and vertically centered.</dd>\n     <dt>xMidYMid (the default)</dt><dd>Force uniform scaling with the content centered.</dd>\n     <dt>xMaxYMid</dt><dd>Force uniform scaling positioned horizontally from the right and vertically centered.</dd>\n     <dt>xMinYMax</dt><dd>Force uniform scaling positioned horizontally from the left and vertically from the bottom.</dd>\n     <dt>xMidYMax</dt><dd>Force uniform scaling horizontally centered and position vertically from the bottom.</dd>\n     <dt>xMaxYMax</dt><dd>Force uniform scaling positioned horizontally from the right and vertically from the bottom.</dd>\n </dl>"
     },
     "resizeDown": {
      "!type": "bool",
      "!doc": "The contentBounds will resize to greater values but not values. (for performance)\nWhen resizing the contentBounds down is desirable, set the resizeDown value to true."
     },
     "x": {
      "!type": "number",
      "!doc": "Indicates the x-coordinate for the instance."
     },
     "y": {
      "!type": "number",
      "!doc": "Indicates the y-coordinate for the instance."
     },
     "set": {
      "!type": "fn(name: string, value: ?)",
      "!doc": "Sets the value of an attribute."
     },
     "getXY": {
      "!type": "fn() -> ?",
      "!doc": "Gets the current position of the graphic instance in page coordinates."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Removes all nodes."
     },
     "addShape": {
      "!type": "fn(cfg: +yui.Object) -> ?",
      "!doc": "Generates a shape instance by type."
     },
     "removeShape": {
      "!type": "fn(shape: +graphics.Shape)",
      "!doc": "Removes a shape instance from from the graphic instance."
     },
     "removeAllShapes": {
      "!type": "fn()",
      "!doc": "Removes all shape instances from the dom."
     },
     "clear": {
      "!type": "fn()",
      "!doc": "Clears the graphics object."
     },
     "setSize": {
      "!type": "fn(w: number, h: number)",
      "!doc": "Sets the size of the graphics object."
     },
     "setPosition": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Sets the positon of the graphics object."
     },
     "getShapeById": {
      "!type": "fn(id: string) -> ?",
      "!doc": "Returns a shape based on the id of its dom node."
     },
     "batch": {
      "!type": "fn(method: fn())",
      "!doc": "Allows for creating multiple shapes in order to batch appending and redraw operations."
     }
    }
   },
   "VMLPath": {
    "!type": "fn()",
    "prototype": {
     "width": {
      "!type": "number",
      "!doc": "Indicates the width of the shape"
     },
     "height": {
      "!type": "number",
      "!doc": "Indicates the height of the shape"
     },
     "path": {
      "!type": "string",
      "!doc": "Indicates the path used for the node."
     }
    }
   },
   "VMLPieSlice": {
    "!type": "fn()",
    "prototype": {
     "startAngle": {
      "!type": "number",
      "!doc": "Starting angle in relation to a circle in which to begin the pie slice drawing."
     },
     "arc": {
      "!type": "number",
      "!doc": "Arc of the slice."
     },
     "radius": {
      "!type": "number",
      "!doc": "Radius of the circle in which the pie slice is drawn"
     }
    }
   },
   "VMLShape": {
    "!type": "fn()",
    "prototype": {
     "addClass": {
      "!type": "fn(className: string)",
      "!doc": "Add a class name to each node."
     },
     "removeClass": {
      "!type": "fn(className: string)",
      "!doc": "Removes a class name from each node."
     },
     "getXY": {
      "!type": "fn() -> ?",
      "!doc": "Gets the current position of the node in page coordinates."
     },
     "setXY": {
      "!type": "fn(Contains: +yui.Array)",
      "!doc": "Set the position of the shape in page coordinates, regardless of how the node is positioned."
     },
     "contains": {
      "!type": "fn(needle: +graphics.VMLShape) -> ?",
      "!doc": "Determines whether the node is an ancestor of another HTML element in the DOM hierarchy."
     },
     "compareTo": {
      "!type": "fn(refNode: +HTMLElement) -> bool",
      "!doc": "Compares nodes to determine if they match.\nNode instances can be compared to each other and/or HTMLElements."
     },
     "test": {
      "!type": "fn(selector: string) -> ?",
      "!doc": "Test if the supplied node matches the supplied selector."
     },
     "translate": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Specifies a 2d translation."
     },
     "translateX": {
      "!type": "fn(x: number)",
      "!doc": "Translates the shape along the x-axis. When translating x and y coordinates,\nuse the `translate` method."
     },
     "translateY": {
      "!type": "fn(y: number)",
      "!doc": "Performs a translate on the y-coordinate. When translating x and y coordinates,\nuse the `translate` method."
     },
     "skew": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Skews the shape around the x-axis and y-axis."
     },
     "skewX": {
      "!type": "fn(x: number)",
      "!doc": "Skews the shape around the x-axis."
     },
     "skewY": {
      "!type": "fn(y: number)",
      "!doc": "Skews the shape around the y-axis."
     },
     "rotate": {
      "!type": "fn(deg: number)",
      "!doc": "Rotates the shape clockwise around it transformOrigin."
     },
     "scale": {
      "!type": "fn(val: number)",
      "!doc": "Specifies a 2d scaling operation."
     },
     "set": {
      "!type": "fn(name: string, value: ?)",
      "!doc": "Sets the value of an attribute."
     },
     "getBounds": {
      "!type": "fn() -> ?",
      "!doc": "Returns the bounds for a shape.\n\nCalculates the a new bounding box from the original corner coordinates (base on size and position) and the transform matrix.\nThe calculated bounding box is used by the graphic instance to calculate its viewBox."
     },
     "toFront": {
      "!type": "fn()",
      "!doc": "Places the shape underneath all other shapes."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Destroys shape"
     },
     "transformOrigin": {
      "!type": "+yui.Array",
      "!doc": "An array of x, y values which indicates the transformOrigin in which to rotate the shape. Valid values range between 0 and 1 representing a\nfraction of the shapes corresponding bounding box dimension. The default value is [0.5, 0.5]."
     },
     "transform": {
      "!type": "string",
      "!doc": "<p>A string containing, in order, transform operations applied to the shape instance. The `transform` string can contain the following values:\n\n   <dl>\n       <dt>rotate</dt><dd>Rotates the shape clockwise around it transformOrigin.</dd>\n       <dt>translate</dt><dd>Specifies a 2d translation.</dd>\n       <dt>skew</dt><dd>Skews the shape around the x-axis and y-axis.</dd>\n       <dt>scale</dt><dd>Specifies a 2d scaling operation.</dd>\n       <dt>translateX</dt><dd>Translates the shape along the x-axis.</dd>\n       <dt>translateY</dt><dd>Translates the shape along the y-axis.</dd>\n       <dt>skewX</dt><dd>Skews the shape around the x-axis.</dd>\n       <dt>skewY</dt><dd>Skews the shape around the y-axis.</dd>\n       <dt>matrix</dt><dd>Specifies a 2D transformation matrix comprised of the specified six values.</dd>\n   </dl>\n</p>\n<p>Applying transforms through the transform attribute will reset the transform matrix and apply a new transform. The shape class also contains\ncorresponding methods for each transform that will apply the transform to the current matrix. The below code illustrates how you might use the\n`transform` attribute to instantiate a recangle with a rotation of 45 degrees.</p>\n           var myRect = new Y.Rect({\n               type:\"rect\",\n               width: 50,\n               height: 40,\n               transform: \"rotate(45)\"\n           };\n<p>The code below would apply `translate` and `rotate` to an existing shape.</p>\n\n       myRect.set(\"transform\", \"translate(40, 50) rotate(45)\");"
     },
     "x": {
      "!type": "number",
      "!doc": "Indicates the x position of shape."
     },
     "y": {
      "!type": "number",
      "!doc": "Indicates the y position of shape."
     },
     "id": {
      "!type": "string",
      "!doc": "Unique id for class instance."
     },
     "width": {
      "!type": "?"
     },
     "height": {
      "!type": "?"
     },
     "visible": {
      "!type": "bool",
      "!doc": "Indicates whether the shape is visible."
     },
     "fill": {
      "!type": "+yui.Object",
      "!doc": "Contains information about the fill of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the fill.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1.</dd>\n     <dt>type</dt><dd>Type of fill.\n         <dl>\n             <dt>solid</dt><dd>Solid single color fill. (default)</dd>\n             <dt>linear</dt><dd>Linear gradient fill.</dd>\n             <dt>radial</dt><dd>Radial gradient fill.</dd>\n         </dl>\n     </dd>\n </dl>\n <p>If a `linear` or `radial` is specified as the fill type. The following additional property is used:\n <dl>\n     <dt>stops</dt><dd>An array of objects containing the following properties:\n         <dl>\n             <dt>color</dt><dd>The color of the stop.</dd>\n             <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stop. The default value is 1.\n             Note: No effect for IE 6 - 8</dd>\n             <dt>offset</dt><dd>Number between 0 and 1 indicating where the color stop is positioned.</dd>\n         </dl>\n     </dd>\n     <p>Linear gradients also have the following property:</p>\n     <dt>rotation</dt><dd>Linear gradients flow left to right by default. The rotation property allows you to change the\n     flow by rotation. (e.g. A rotation of 180 would make the gradient pain from right to left.)</dd>\n     <p>Radial gradients have the following additional properties:</p>\n     <dt>r</dt><dd>Radius of the gradient circle.</dd>\n     <dt>fx</dt><dd>Focal point x-coordinate of the gradient.</dd>\n     <dt>fy</dt><dd>Focal point y-coordinate of the gradient.</dd>\n </dl>\n <p>The corresponding `SVGShape` class implements the following additional properties.</p>\n <dl>\n     <dt>cx</dt><dd>\n         <p>The x-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and\n         `VMLShape` classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n     <dt>cy</dt><dd>\n         <p>The y-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and `VMLShape`\n         classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n </dl>\n <p>These properties are not currently implemented in `CanvasShape` or `VMLShape`.</p>"
     },
     "stroke": {
      "!type": "+yui.Object",
      "!doc": "Contains information about the stroke of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the stroke.</dd>\n     <dt>weight</dt><dd>Number that indicates the width of the stroke.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stroke. The default value is 1.</dd>\n     <dt>dashstyle</dt>Indicates whether to draw a dashed stroke. When set to \"none\", a solid stroke is drawn. When set\n     to an array, the first index indicates the length of the dash. The second index indicates the length of gap.\n     <dt>linecap</dt><dd>Specifies the linecap for the stroke. The following values can be specified:\n         <dl>\n             <dt>butt (default)</dt><dd>Specifies a butt linecap.</dd>\n             <dt>square</dt><dd>Specifies a sqare linecap.</dd>\n             <dt>round</dt><dd>Specifies a round linecap.</dd>\n         </dl>\n     </dd>\n     <dt>linejoin</dt><dd>Specifies a linejoin for the stroke. The following values can be specified:\n         <dl>\n             <dt>round (default)</dt><dd>Specifies that the linejoin will be round.</dd>\n             <dt>bevel</dt><dd>Specifies a bevel for the linejoin.</dd>\n             <dt>miter limit</dt><dd>An integer specifying the miter limit of a miter linejoin. If you want to specify a linejoin\n             of miter, you simply specify the limit as opposed to having separate miter and miter limit values.</dd>\n         </dl>\n     </dd>\n </dl>"
     },
     "node": {
      "!type": "+HTMLElement",
      "!doc": "Dom node for the shape."
     },
     "data": {
      "!type": "string",
      "!doc": "Represents an SVG Path string. This will be parsed and added to shapes API to represent the SVG data across all\nimplementations. Note that when using VML or SVG implementations, part of this content will be added to the DOM using\nrespective VML/SVG attributes. If your content comes from an untrusted source, you will need to ensure that no\nmalicious code is included in that content."
     },
     "graphic": {
      "!type": "+graphics.Graphic",
      "!doc": "Reference to the container Graphic."
     }
    }
   }
  },
  "handlebars": {
   "Handlebars": {
    "!type": "fn()",
    "prototype": {
     "registerHelper": {
      "!type": "fn(name: string, fn: fn(), inverse?: bool)",
      "!doc": "Registers a helper function that will be made available to all templates.\n\nHelper functions receive the current template context as the `this` object, and\ncan also receive arguments passed by the template."
     },
     "registerPartial": {
      "!type": "fn(name: string, partial: fn())",
      "!doc": "Registers a partial that will be made available to all templates.\n\nA partial is another template that can be used to render part of a larger\ntemplate. For example, a website with a common header and footer across all its\npages might use a template for each page, which would call shared partials to\nrender the headers and footers.\n\nPartials may be specified as uncompiled template strings or as compiled template\nfunctions."
     },
     "template": {
      "!type": "fn(template: fn()) -> fn()",
      "!doc": "Converts a precompiled template into a renderable template function."
     },
     "log": {
      "!type": "fn(level: string, message: string)",
      "!doc": "Logs a debugging message. Note that messages will only be logged when the\nhandlebars module is loaded in \"debug\" mode."
     },
     "render": {
      "!type": "fn(string: string, context: +yui.Object, options?: +yui.Object) -> string",
      "!doc": "Compiles and renders a Handlebars template string in a single step.\n\nIf youll be using a template more than once, its more efficient to compile it\ninto a function once using `compile()`, and then render it whenever you need to\nby simply executing the compiled function. However, if you only need to compile\nand render a template once, `render()` is a handy shortcut for doing both in a\nsingle step."
     },
     "compile": {
      "!type": "fn(string: string, options?: +yui.Object) -> fn()",
      "!doc": "Compiles a Handlebars template string into a function. To render the template,\ncall the function and pass in a context object."
     },
     "precompile": {
      "!type": "fn(string: string, options?: +yui.Object) -> string",
      "!doc": "Precompiles a Handlebars template string into a string of JavaScript code. This\ncan be used to precompile a template at build time or on the server, and the\nresulting template can then be rendered at runtime or on the client without\nneeding to go through a compile step.\n\nTo render a precompiled template, evaluate the code and then pass the resulting\nfunction to `Y.Handlebars.template()` to get back an executable template\nfunction."
     }
    }
   }
  },
  "highlight": {
   "Highlight": {
    "!type": "fn()",
    "allFold": {
     "!type": "fn(haystack: string, needles: string, options?: +yui.Object) -> string",
     "!doc": "Accent-folding version of `all()`."
    },
    "startFold": {
     "!type": "fn(haystack: string, needles: string) -> string",
     "!doc": "Accent-folding version of `start()`."
    },
    "wordsFold": {
     "!type": "fn(haystack: string, needles: string) -> string",
     "!doc": "Accent-folding version of `words()`."
    },
    "all": {
     "!type": "fn(haystack: string, needles: string, options?: +yui.Object) -> string",
     "!doc": "Highlights all occurrences in the _haystack_ string of the items in the\n_needles_ array, regardless of where they occur. The returned string will\nhave all HTML characters escaped except for the highlighting markup."
    },
    "allCase": {
     "!type": "fn(haystack: string, needles: string, options?: +yui.Object) -> string",
     "!doc": "Same as `all()`, but case-sensitive by default."
    },
    "start": {
     "!type": "fn(haystack: string, needles: string, options?: +yui.Object) -> string",
     "!doc": "Highlights _needles_ that occur at the start of _haystack_. The returned\nstring will have all HTML characters escaped except for the highlighting\nmarkup."
    },
    "startCase": {
     "!type": "fn(haystack: string, needles: string) -> string",
     "!doc": "Same as `start()`, but case-sensitive by default."
    },
    "words": {
     "!type": "fn(haystack: string, needles: string, options?: +yui.Object) -> string",
     "!doc": "Highlights complete words in the _haystack_ string that are also in the\n_needles_ array. The returned string will have all HTML characters escaped\nexcept for the highlighting markup."
    },
    "wordsCase": {
     "!type": "fn(haystack: string, needles: string) -> string",
     "!doc": "Same as `words()`, but case-sensitive by default."
    }
   }
  },
  "history": {
   "HistoryBase": {
    "!type": "fn()",
    "NAME": {
     "!type": "string",
     "!doc": "Name of this component."
    },
    "SRC_ADD": {
     "!type": "string",
     "!doc": "Constant used to identify state changes originating from the\n<code>add()</code> method."
    },
    "SRC_REPLACE": {
     "!type": "string",
     "!doc": "Constant used to identify state changes originating from the\n<code>replace()</code> method."
    },
    "html5": {
     "!type": "bool",
     "!doc": "Whether or not this browser supports the HTML5 History API."
    },
    "nativeHashChange": {
     "!type": "bool",
     "!doc": "Whether or not this browser supports the <code>window.onhashchange</code>\nevent natively. Note that even if this is <code>true</code>, you may\nstill want to use HistoryHashs synthetic <code>hashchange</code> event\nsince it normalizes implementation differences and fixes spec violations\nacross various browsers."
    },
    "prototype": {
     "force": {
      "!type": "bool",
      "!doc": "If `true`, a `history:change` event will be fired whenever the URL\nchanges, even if there is no associated state change."
     },
     "add": {
      "!type": "fn(state: +yui.Object, options: +yui.Object) -> !this",
      "!doc": "Adds a state entry with new values for the specified keys. By default,\nthe new state will be merged into the existing state, and new values will\noverride existing values. Specifying a <code>null</code> or\n<code>undefined</code> value will cause that key to be removed from the\nnew state entry."
     },
     "addValue": {
      "!type": "fn(key: string, value: string, options: +yui.Object) -> !this",
      "!doc": "Adds a state entry with a new value for a single key. By default, the new\nvalue will be merged into the existing state values, and will override an\nexisting value with the same key if there is one. Specifying a\n<code>null</code> or <code>undefined</code> value will cause the key to\nbe removed from the new state entry."
     },
     "get": {
      "!type": "fn(key: string) -> +yui.Object",
      "!doc": "Returns the current value of the state parameter specified by <i>key</i>,\nor an object hash of key/value pairs for all current state parameters if\nno key is specified."
     },
     "replace": {
      "!type": "fn(state: +yui.Object, options: +yui.Object) -> !this",
      "!doc": "Same as <code>add()</code> except that a new browser history entry will\nnot be created. Instead, the current history entry will be replaced with\nthe new state."
     },
     "replaceValue": {
      "!type": "fn(key: string, value: string, options: +yui.Object) -> !this",
      "!doc": "Same as <code>addValue()</code> except that a new browser history entry\nwill not be created. Instead, the current history entry will be replaced\nwith the new state."
     }
    }
   },
   "HistoryHash": {
    "!type": "fn()",
    "getIframeHash": {
     "!type": "fn() -> string",
     "!doc": "Gets the raw (not decoded) current location hash from the IE iframe,\nminus the preceding # character and the hashPrefix (if one is set)."
    },
    "SRC_HASH": {
     "!type": "string",
     "!doc": "Constant used to identify state changes originating from\n<code>hashchange</code> events."
    },
    "hashPrefix": {
     "!type": "string",
     "!doc": "<p>\nPrefix to prepend when setting the hash fragment. For example, if the\nprefix is <code>!</code> and the hash fragment is set to\n<code>#foo=bar&baz=quux</code>, the final hash fragment in the URL will\nbecome <code>#!foo=bar&baz=quux</code>. This can be used to help make an\nAjax application crawlable in accordance with Googles guidelines at\n<a href=\"http://code.google.com/web/ajaxcrawling/\">http://code.google.com/web/ajaxcrawling/</a>.\n</p>\n\n<p>\nNote that this prefix applies to all HistoryHash instances. Its not\npossible for individual instances to use their own prefixes since they\nall operate on the same URL.\n</p>"
    },
    "createHash": {
     "!type": "fn(params: +yui.Object) -> string",
     "!doc": "Creates a location hash string from the specified object of key/value\npairs."
    },
    "decode": {
     "!type": "fn(string: string) -> string",
     "!doc": "Wrapper around <code>decodeURIComponent()</code> that also converts +\nchars into spaces."
    },
    "encode": {
     "!type": "fn(string: string) -> string",
     "!doc": "Wrapper around <code>encodeURIComponent()</code> that converts spaces to\n+ chars."
    },
    "getHash": {
     "!type": "fn() -> string",
     "!doc": "Gets the raw (not decoded) current location hash, minus the preceding #\ncharacter and the hashPrefix (if one is set)."
    },
    "getUrl": {
     "!type": "fn() -> string",
     "!doc": "Gets the current bookmarkable URL."
    },
    "parseHash": {
     "!type": "fn(hash: string) -> +yui.Object",
     "!doc": "Parses a location hash string into an object of key/value parameter\npairs. If <i>hash</i> is not specified, the current location hash will\nbe used."
    },
    "replaceHash": {
     "!type": "fn(hash: string)",
     "!doc": "Replaces the browsers current location hash with the specified hash\nand removes all forward navigation states, without creating a new browser\nhistory entry. Automatically prepends the <code>hashPrefix</code> if one\nis set."
    },
    "setHash": {
     "!type": "fn(hash: string)",
     "!doc": "Sets the browsers location hash to the specified string. Automatically\nprepends the <code>hashPrefix</code> if one is set."
    }
   },
   "HistoryHTML5": {
    "!type": "fn(config: +yui.Object) -> +history.HistoryHTML5",
    "prototype": {
     "!proto": "history.HistoryBase.prototype"
    },
    "SRC_POPSTATE": {
     "!type": "string",
     "!doc": "Constant used to identify state changes originating from\n<code>popstate</code> events."
    }
   }
  },
  "imageloader": {
   "ImgLoadGroup": {
    "!type": "fn() -> +imageloader.ImgLoadGroup",
    "prototype": {
     "!proto": "base.Base.prototype",
     "name": {
      "!type": "string",
      "!doc": "Name for the group. Only used to identify the group in logging statements."
     },
     "timeLimit": {
      "!type": "number",
      "!doc": "Time limit, in seconds, after which images are fetched regardless of trigger events."
     },
     "foldDistance": {
      "!type": "number",
      "!doc": "Distance below the fold for which images are loaded. Images are not loaded until they are at most this distance away from (or above) the fold.\nThis check is performed at page load (domready) and after any window scroll or window resize event (until all images are loaded)."
     },
     "className": {
      "!type": "string",
      "!doc": "Class name that will identify images belonging to the group. This class name will be removed from each element in order to fetch images.\nThis class should have, in its CSS style definition, \"<code>background:none !important;</code>\"."
     },
     "classNameAction": {
      "!type": "string",
      "!doc": "Determines how to act when className is used as the way to delay load images. The \"default\" action is to just\nremove the class name. The \"enhanced\" action is to remove the class name and also set the src attribute if\nthe element is an img."
     },
     "addTrigger": {
      "!type": "fn(obj: +yui.Object, type: string) -> !this",
      "!doc": "Adds a trigger to the group. Arguments are passed to <code>Y.on</code>."
     },
     "addCustomTrigger": {
      "!type": "fn(name: string, obj: +yui.Object) -> !this",
      "!doc": "Adds a custom event trigger to the group."
     },
     "registerImage": {
      "!type": "fn(config: +yui.Object) -> +yui.Object",
      "!doc": "Registers an image with the group.\nArguments are passed through to a <code>Y.ImgLoadImgObj</code> constructor; see that class attribute documentation for detailed information. \"<code>domId</code>\" is a required attribute."
     },
     "fetch": {
      "!type": "fn()",
      "!doc": "Displays the images in the group.\nThis method is called when a trigger fires or the time limit expires; it shouldnt be called externally, but is not private in the rare event that it needs to be called immediately."
     }
    }
   },
   "ImgLoadImgObj": {
    "!type": "fn() -> +imageloader.ImgLoadImgObj",
    "prototype": {
     "!proto": "base.Base.prototype",
     "domId": {
      "!type": "string",
      "!doc": "HTML DOM id of the image element."
     },
     "bgUrl": {
      "!type": "string",
      "!doc": "Background URL for the image.\nFor an image whose URL is specified by \"<code>background-image</code>\" in the elements style."
     },
     "srcUrl": {
      "!type": "string",
      "!doc": "Source URL for the image.\nFor an image whose URL is specified by a \"<code>src</code>\" attribute in the DOM element."
     },
     "width": {
      "!type": "number",
      "!doc": "Pixel width of the image. Will be set as a <code>width</code> attribute on the DOM element after the image is fetched.\nDefaults to the natural width of the image (no <code>width</code> attribute will be set).\nUsually only used with src images."
     },
     "height": {
      "!type": "number",
      "!doc": "Pixel height of the image. Will be set as a <code>height</code> attribute on the DOM element after the image is fetched.\nDefaults to the natural height of the image (no <code>height</code> attribute will be set).\nUsually only used with src images."
     },
     "setVisible": {
      "!type": "bool",
      "!doc": "Whether the images <code>style.visibility</code> should be set to <code>visible</code> after the image is fetched.\nUsed when setting images as <code>visibility:hidden</code> prior to image fetching."
     },
     "isPng": {
      "!type": "bool",
      "!doc": "Whether the image is a PNG.\nPNG images get special treatment in that the URL is specified through AlphaImageLoader for IE, versions 6 and earlier.\nOnly used with background images."
     },
     "sizingMethod": {
      "!type": "string",
      "!doc": "AlphaImageLoader <code>sizingMethod</code> property to be set for the image.\nOnly set if <code>isPng</code> value for this image is set to <code>true</code>.\nDefaults to <code>scale</code>."
     },
     "enabled": {
      "!type": "string",
      "!doc": "AlphaImageLoader <code>enabled</code> property to be set for the image.\nOnly set if <code>isPng</code> value for this image is set to <code>true</code>.\nDefaults to <code>true</code>."
     },
     "fetch": {
      "!type": "fn(withinY: number) -> bool",
      "!doc": "Displays the image; puts the URL into the DOM.\nThis method shouldnt be called externally, but is not private in the rare event that it needs to be called immediately."
     }
    }
   }
  },
  "features": {
   "Intl": {
    "!type": "fn()",
    "prototype": {
     "setLang": {
      "!type": "fn(module: string, lang: string) -> ?",
      "!doc": "Sets the active language for the given module.\n\nReturns false on failure, which would happen if the language had not been registered through the <a href=\"#method_add\">add()</a> method."
     },
     "getLang": {
      "!type": "fn(module: string) -> string",
      "!doc": "Get the currently active language for the given module."
     },
     "add": {
      "!type": "fn(module: string, lang: string, strings: +yui.Object)",
      "!doc": "Register a hash of localized resources for the given module and language"
     },
     "get": {
      "!type": "fn(module: string, key: string, lang: string) -> ?",
      "!doc": "Gets the modules localized resources for the currently active language (as provided by the <a href=\"#method_getLang\">getLang</a> method).\n<p>\nOptionally, the localized resources for alternate languages which have been added to Intl (see the <a href=\"#method_add\">add</a> method) can\nbe retrieved by providing the BCP 47 language tag as the lang parameter.\n</p>"
     },
     "getAvailableLangs": {
      "!type": "fn(module: string) -> +yui.Array",
      "!doc": "Gets the list of languages for which localized resources are available for a given module, based on the module\nmeta-data (part of loader). If loader is not on the page, returns an empty array."
     },
     "lookupBestLang": {
      "!type": "fn(preferredLanguages: [string], availableLanguages: [string]) -> string",
      "!doc": "Returns the language among those available that\nbest matches the preferred language list, using the Lookup\nalgorithm of BCP 47.\nIf none of the available languages meets the users preferences,\nthen \"\" is returned.\nExtended language ranges are not supported."
     }
    }
   },
   "Features": {
    "!type": "fn()",
    "prototype": {
     "tests": {
      "!type": "+yui.Object",
      "!doc": "Object hash of all registered feature tests"
     },
     "add": {
      "!type": "fn(cat: string, name: string, o: +yui.Object)",
      "!doc": "Add a test to the system\n\n  ```\n  Y.Features.add(\"load\", \"1\", {});\n  ```"
     },
     "all": {
      "!type": "fn(cat: string, args: +yui.Array) -> string",
      "!doc": "Execute all tests of a given category and return the serialized results\n\n  ```\n  caps=1:1;2:1;3:0\n  ```"
     },
     "test": {
      "!type": "fn(cat: string, name: string, args: +yui.Array) -> bool",
      "!doc": "Run a sepecific test and return a Boolean response.\n\n  ```\n  Y.Features.test(\"load\", \"1\");\n  ```"
     }
    }
   }
  },
  "io": {
   "IO": {
    "!type": "fn(config: +yui.Object) -> +io.IO",
    "prototype": {
     "start": {
      "!type": "fn(transaction: +yui.Object, config: +yui.Object)",
      "!doc": "Fires event \"io:start\" and creates, fires a transaction-specific\nstart event, if `config.on.start` is defined."
     },
     "complete": {
      "!type": "fn(transaction: +yui.Object, config: +yui.Object)",
      "!doc": "Fires event \"io:complete\" and creates, fires a\ntransaction-specific \"complete\" event, if config.on.complete is\ndefined."
     },
     "end": {
      "!type": "fn(transaction: +yui.Object, config: +yui.Object)",
      "!doc": "Fires event \"io:end\" and creates, fires a transaction-specific \"end\"\nevent, if config.on.end is defined."
     },
     "success": {
      "!type": "fn(transaction: +yui.Object, config: +yui.Object)",
      "!doc": "Fires event \"io:success\" and creates, fires a transaction-specific\n\"success\" event, if config.on.success is defined."
     },
     "failure": {
      "!type": "fn(transaction: +yui.Object, config: +yui.Object)",
      "!doc": "Fires event \"io:failure\" and creates, fires a transaction-specific\n\"failure\" event, if config.on.failure is defined."
     },
     "progress": {
      "!type": "fn(transaction: +yui.Object, progress: +yui.Object, config: +yui.Object)",
      "!doc": "Fires event \"io:progress\" and creates, fires a transaction-specific\n\"progress\" event -- for XMLHttpRequest file upload -- if\nconfig.on.progress is defined."
     },
     "load": {
      "!type": "fn(transaction: +yui.Object, load: +yui.Object, config: +yui.Object)",
      "!doc": "Fires event \"io:complete\" and creates, fires a transaction-specific\n\"complete\" event -- for XMLHttpRequest file upload -- if\nconfig.on.complete is defined."
     },
     "error": {
      "!type": "fn(transaction: +yui.Object, error: +yui.Object, config: +yui.Object)",
      "!doc": "Fires event \"io:failure\" and creates, fires a transaction-specific\n\"failure\" event -- for XMLHttpRequest file upload -- if\nconfig.on.failure is defined."
     },
     "setHeader": {
      "!type": "fn(name: string, value: string)",
      "!doc": "Stores default client headers for all transactions. If a label is\npassed with no value argument, the header will be deleted."
     },
     "send": {
      "!type": "fn(uri: string, config: +yui.Object, id: number) -> +yui.Object",
      "!doc": "Requests a transaction. `send()` is implemented as `Y.io()`.  Each\ntransaction may include a configuration object.  Its properties are:\n\n<dl>\n  <dt>method</dt>\n    <dd>HTTP method verb (e.g., GET or POST). If this property is not\n        not defined, the default value will be GET.</dd>\n\n  <dt>data</dt>\n    <dd>This is the name-value string that will be sent as the\n    transaction data. If the request is HTTP GET, the data become\n    part of querystring. If HTTP POST, the data are sent in the\n    message body.</dd>\n\n  <dt>xdr</dt>\n    <dd>Defines the transport to be used for cross-domain requests.\n    By setting this property, the transaction will use the specified\n    transport instead of XMLHttpRequest. The properties of the\n    transport object are:\n    <dl>\n      <dt>use</dt>\n        <dd>The transport to be used: flash or native</dd>\n      <dt>dataType</dt>\n        <dd>Set the value to XML if that is the expected response\n        content type.</dd>\n      <dt>credentials</dt>\n        <dd>Set the value to true to set XHR.withCredentials property to true.</dd>\n    </dl></dd>\n\n  <dt>form</dt>\n    <dd>Form serialization configuration object.  Its properties are:\n    <dl>\n      <dt>id</dt>\n        <dd>Node object or id of HTML form</dd>\n      <dt>useDisabled</dt>\n        <dd>`true` to also serialize disabled form field values\n        (defaults to `false`)</dd>\n    </dl></dd>\n\n  <dt>on</dt>\n    <dd>Assigns transaction event subscriptions. Available events are:\n    <dl>\n      <dt>start</dt>\n        <dd>Fires when a request is sent to a resource.</dd>\n      <dt>complete</dt>\n        <dd>Fires when the transaction is complete.</dd>\n      <dt>success</dt>\n        <dd>Fires when the HTTP response status is within the 2xx\n        range.</dd>\n      <dt>failure</dt>\n        <dd>Fires when the HTTP response status is outside the 2xx\n        range, if an exception occurs, if the transation is aborted,\n        or if the transaction exceeds a configured `timeout`.</dd>\n      <dt>end</dt>\n        <dd>Fires at the conclusion of the transaction\n           lifecycle, after `success` or `failure`.</dd>\n    </dl>\n\n    <p>Callback functions for `start` and `end` receive the id of the\n    transaction as a first argument. For `complete`, `success`, and\n    `failure`, callbacks receive the id and the response object\n    (usually the XMLHttpRequest instance).  If the `arguments`\n    property was included in the configuration object passed to\n    `Y.io()`, the configured data will be passed to all callbacks as\n    the last argument.</p>\n    </dd>\n\n  <dt>sync</dt>\n    <dd>Pass `true` to make a same-domain transaction synchronous.\n    <strong>CAVEAT</strong>: This will negatively impact the user\n    experience. Have a <em>very</em> good reason if you intend to use\n    this.</dd>\n\n  <dt>context</dt>\n    <dd>The \"`this\" object for all configured event handlers. If a\n    specific context is needed for individual callbacks, bind the\n    callback to a context using `Y.bind()`.</dd>\n\n  <dt>headers</dt>\n    <dd>Object map of transaction headers to send to the server. The\n    object keys are the header names and the values are the header\n    values.</dd>\n\n  <dt>timeout</dt>\n    <dd>Millisecond threshold for the transaction before being\n    automatically aborted.</dd>\n\n  <dt>arguments</dt>\n    <dd>User-defined data passed to all registered event handlers.\n    This value is available as the second argument in the \"start\" and\n    \"end\" event handlers. It is the third argument in the \"complete\",\n    \"success\", and \"failure\" event handlers. <strong>Be sure to quote\n    this property name in the transaction configuration as\n    \"arguments\" is a reserved word in JavaScript</strong> (e.g.\n    `Y.io({ ..., \"arguments\": stuff })`).</dd>\n</dl>"
     },
     "xdr": {
      "!type": "fn(uri: string, o: +yui.Object, c: +yui.Object)",
      "!doc": "Method for accessing the transports interface for making a\ncross-domain transaction."
     },
     "xdrResponse": {
      "!type": "fn(e: string, o: +yui.Object, c: +yui.Object) -> +yui.Object",
      "!doc": "Response controller for cross-domain requests when using the\nFlash transport or IE8s XDomainRequest object."
     },
     "transport": {
      "!type": "fn(o: +yui.Object)",
      "!doc": "Initializes the desired transport."
     }
    },
    "stringify": {
     "!type": "fn(form: +node.Node, options?: +yui.Object) -> string",
     "!doc": "Enumerate through an HTML forms elements collection\nand return a string comprised of key-value pairs."
    },
    "request": {
     "!type": "fn()",
     "!doc": "Passthru to the NodeJS <a href=\"https://github.com/mikeal/request\">request</a> module.\nThis method is return of `require(request)` so you can use it inside NodeJS without\nthe IO abstraction."
    },
    "transports.nodejs": {
     "!type": "fn() -> +yui.Object",
     "!doc": "NodeJS IO transport, uses the NodeJS <a href=\"https://github.com/mikeal/request\">request</a>\nmodule under the hood to perform all network IO."
    },
    "queue": {
     "!type": "fn() -> +yui.Object",
     "!doc": "Method for queueing a transaction before the request is sent to the\nresource, to ensure sequential processing."
    },
    "promote": {
     "!type": "fn()",
     "!doc": "Method for promoting a transaction to the top of the queue."
    },
    "empty": {
     "!type": "fn()",
     "!doc": "Method for cancel all pending transaction from\nthe queue."
    },
    "delay": {
     "!type": "number",
     "!doc": "Delay value to calling the Flash transport, in the\nevent io.swf has not finished loading.  Once the E_XDR_READY\nevent is fired, this value will be set to 0."
    }
   }
  },
  "json": {
   "JSON": {
    "!type": "fn()",
    "_default": {
     "!type": "string",
     "!doc": "The ID of the default IO transport, defaults to `xhr`"
    },
    "defaultTransport": {
     "!type": "fn(id?: string) -> +yui.Object"
    },
    "transports": {
     "!type": "+yui.Object",
     "!doc": "An object hash of custom transports available to IO"
    },
    "customTransport": {
     "!type": "fn(id: string)",
     "!doc": "Create a custom transport of type and return its object"
    },
    "prototype": {
     "notify": {
      "!type": "fn(event: string, transaction: +yui.Object, config: +yui.Object)",
      "!doc": "Fired from the notify method of the transport which in turn fires\nthe event on the IO object."
     }
    },
    "parse": {
     "!type": "fn(s: string, reviver: fn()) -> +MIXED",
     "!doc": "Parse a JSON string, returning the native JavaScript representation."
    },
    "dateToString": {
     "!type": "fn(d: +datatype_date.Date) -> string",
     "!doc": "Serializes a Date instance as a UTC date string.  Used internally by\nstringify.  Override this method if you need Dates serialized in a\ndifferent format."
    },
    "stringify": {
     "!type": "fn(o: +MIXED, w: +yui.Array, ind: number) -> string",
     "!doc": "<p>Converts an arbitrary value to a JSON string representation.</p>\n\n<p>Objects with cyclical references will trigger an exception.</p>\n\n<p>If a whitelist is provided, only matching object keys will be\nincluded.  Alternately, a replacer function may be passed as the\nsecond parameter.  This function is executed on every value in the\ninput, and its return value will be used in place of the original value.\nThis is useful to serialize specialized objects or class instances.</p>\n\n<p>If a positive integer or non-empty string is passed as the third\nparameter, the output will be formatted with carriage returns and\nindentation for readability.  If a String is passed (such as \"\\t\") it\nwill be used once for each indentation level.  If a number is passed,\nthat number of spaces will be used.</p>"
    },
    "charCacheThreshold": {
     "!type": "number",
     "!doc": "<p>Number of occurrences of a special character within a single call to\nstringify that should trigger promotion of that character to a dedicated\npreprocess step for future calls.  This is only used in environments\nthat dont support native JSON, or when useNativeJSONStringify is set to\nfalse.</p>\n\n<p>So, if set to 50 and an object is passed to stringify that includes\nstrings containing the special character \\x07 more than 50 times,\nsubsequent calls to stringify will process object strings through a\nfaster serialization path for \\x07 before using the generic, slower,\nreplacement process for all special characters.</p>\n\n<p>To prime the preprocessor cache, set this value to 1, then call\n<code>Y.JSON.stringify(\"<em>(all special characters to\ncache)</em>\");</code>, then return this setting to a more conservative\nvalue.</p>\n\n<p>Special characters \\ \" \\b \\t \\n \\f \\r are already cached.</p>"
    }
   }
  },
  "jsonp": {
   "JSONPRequest": {
    "!type": "fn()",
    "prototype": {
     "_defaultCallback": {
      "!type": "fn(url: string, config: +yui.Object) -> fn()",
      "!doc": "Override this method to provide logic to default the success callback if\nit is not provided at construction.  This is overridden by jsonp-url to\nparse the callback from the url string."
     },
     "send": {
      "!type": "fn(args: ?) -> !this",
      "!doc": "Issues the JSONP request."
     }
    }
   }
  },
  "loader": {
   "Loader": {
    "!type": "fn(config: +yui.Object) -> +loader.Loader",
    "prototype": {
     "onSuccess": {
      "!type": "fn()",
      "!doc": "Callback that will be executed when the loader is finished\nwith an insert"
     },
     "onFailure": {
      "!type": "fn()",
      "!doc": "Callback that will be executed if there is a failure"
     },
     "onCSS": {
      "!type": "fn()",
      "!doc": "Callback for the CSSComplete event.  When loading YUI components\nwith CSS the CSS is loaded first, then the script.  This provides\na moment you can tie into to improve the presentation of the page\nwhile the script is loading."
     },
     "onProgress": {
      "!type": "fn()",
      "!doc": "Callback executed each time a script or css file is loaded"
     },
     "onTimeout": {
      "!type": "fn()",
      "!doc": "Callback that will be executed if a timeout occurs"
     },
     "context": {
      "!type": "?",
      "!doc": "The execution context for all callbacks"
     },
     "data": {
      "!type": "?",
      "!doc": "Data that is passed to all callbacks"
     },
     "insertBefore": {
      "!type": "string",
      "!doc": "Node reference or id where new nodes should be inserted before"
     },
     "charset": {
      "!type": "string",
      "!doc": "The charset attribute for inserted nodes"
     },
     "cssAttributes": {
      "!type": "+object",
      "!doc": "An object literal containing attributes to add to link nodes"
     },
     "jsAttributes": {
      "!type": "+object",
      "!doc": "An object literal containing attributes to add to script nodes"
     },
     "base": {
      "!type": "string",
      "!doc": "The base directory."
     },
     "comboBase": {
      "!type": "string",
      "!doc": "Base path for the combo service"
     },
     "combine": {
      "!type": "bool",
      "!doc": "If configured, the loader will attempt to use the combo\nservice for YUI resources and configured external resources."
     },
     "comboSep": {
      "!type": "string",
      "!doc": "The default seperator to use between files in a combo URL"
     },
     "maxURLLength": {
      "!type": "number",
      "!doc": "Max url length for combo urls.  The default is 1024. This is the URL\nlimit for the Yahoo! hosted combo servers.  If consuming\na different combo service that has a different URL limit\nit is possible to override this default by supplying\nthe maxURLLength config option.  The config option will\nonly take effect if lower than the default."
     },
     "ignoreRegistered": {
      "!type": "?",
      "!doc": "Ignore modules registered on the YUI global"
     },
     "root": {
      "!type": "string",
      "!doc": "Root path to prepend to module path for the combo\nservice"
     },
     "timeout": {
      "!type": "number",
      "!doc": "Timeout value in milliseconds.  If set, self value will be used by\nthe get utility.  the timeout event will fire if\na timeout occurs."
     },
     "ignore": {
      "!type": "[string]",
      "!doc": "A list of modules that should not be loaded, even if\nthey turn up in the dependency tree"
     },
     "force": {
      "!type": "[string]",
      "!doc": "A list of modules that should always be loaded, even\nif they have already been inserted into the page."
     },
     "allowRollup": {
      "!type": "bool",
      "!doc": "Should we allow rollups"
     },
     "filter": {
      "!type": "string",
      "!doc": "A filter to apply to result urls.  This filter will modify the default\npath for all modules.  The default path for the YUI library is the\nminified version of the files (e.g., event-min.js).  The filter property\ncan be a predefined filter or a custom filter.  The valid predefined\nfilters are:\n<dl>\n <dt>DEBUG</dt>\n <dd>Selects the debug versions of the library (e.g., event-debug.js).\n     This option will automatically include the Logger widget</dd>\n <dt>RAW</dt>\n <dd>Selects the non-minified version of the library (e.g., event.js).\n </dd>\n</dl>\nYou can also define a custom filter, which must be an object literal\ncontaining a search expression and a replace string:\n\n     myFilter: {\n         searchExp: \"-min\\\\.js\",\n         replaceStr: \"-debug.js\"\n     }"
     },
     "filters": {
      "!type": "+object",
      "!doc": "per-component filter specification.  If specified for a given\ncomponent, this overrides the filter config."
     },
     "required": {
      "!type": "string",
      "!doc": "The list of requested modules"
     },
     "patterns": {
      "!type": "+yui.Object",
      "!doc": "If a module name is predefined when requested, it is checked againsts\nthe patterns provided in this property.  If there is a match, the\nmodule is added with the default configuration.\n\nAt the moment only supporting module prefixes, but anticipate\nsupporting at least regular expressions."
     },
     "moduleInfo": {
      "!type": "?",
      "!doc": "The library metadata"
     },
     "skin": {
      "!type": "+yui.Object",
      "!doc": "Provides the information used to skin the skinnable components.\nThe following skin definition would result in skin1 and skin2\nbeing loaded for calendar (if calendar was requested), and\nsam for all other skinnable components:\n\n     skin: {\n         // The default skin, which is automatically applied if not\n         // overriden by a component-specific skin definition.\n         // Change this in to apply a different skin globally\n         defaultSkin: sam,\n\n         // This is combined with the loader base property to get\n         // the default root directory for a skin. ex:\n         // http://yui.yahooapis.com/2.3.0/build/assets/skins/sam/\n         base: assets/skins/,\n\n         // Any component-specific overrides can be specified here,\n         // making it possible to load different skins for different\n         // components.  It is possible to load more than one skin\n         // for a given component as well.\n         overrides: {\n             calendar: [skin1, skin2]\n         }\n     }"
     },
     "loaded": {
      "!type": "string",
      "!doc": "Set when beginning to compute the dependency tree.\nComposed of what YUI reports to be loaded combined\nwith what has been loaded by any instance on the page\nwith the version number specified in the metadata."
     },
     "async": {
      "!type": "?",
      "!doc": "Should Loader fetch scripts in `async`, defaults to `true`"
     },
     "rollups": {
      "!type": "?",
      "!doc": "List of rollup files found in the library metadata"
     },
     "loadOptional": {
      "!type": "bool",
      "!doc": "Whether or not to load optional dependencies for\nthe requested modules"
     },
     "sorted": {
      "!type": "[string]",
      "!doc": "All of the derived dependencies in sorted order, which\nwill be populated when either calculate() or insert()\nis called"
     },
     "dirty": {
      "!type": "bool",
      "!doc": "Flag to indicate the dependency tree needs to be recomputed\nif insert is called again."
     },
     "inserted": {
      "!type": "string",
      "!doc": "List of modules inserted by the utility"
     },
     "skipped": {
      "!type": "?",
      "!doc": "List of skipped modules during insert() because the module\nwas not defined"
     },
     "formatSkin": {
      "!type": "fn(skin: string, mod: string) -> string",
      "!doc": "Returns the skin module name for the specified skin name.  If a\nmodule name is supplied, the returned skin module name is\nspecific to the module passed in."
     },
     "addAlias": {
      "!type": "fn(use: +yui.Array, name: string)",
      "!doc": "Adds an alias module to the system"
     },
     "addGroup": {
      "!type": "fn(config: +yui.Object, name: string)",
      "!doc": "Add a new module group"
     },
     "addModule": {
      "!type": "fn(config: +yui.Object, name?: string) -> +yui.Object",
      "!doc": "Add a new module to the component metadata."
     },
     "require": {
      "!type": "fn(what: [string])",
      "!doc": "Add a requirement for one or more module"
     },
     "filterRequires": {
      "!type": "fn(r: +yui.Array) -> +yui.Array",
      "!doc": "Explodes the required array to remove aliases and replace them with real modules"
     },
     "getRequires": {
      "!type": "fn(mod: +yui.Object) -> +yui.Array",
      "!doc": "Returns an object containing properties for all modules required\nin order to load the requested module"
     },
     "isCSSLoaded": {
      "!type": "fn(name: string) -> ?",
      "!doc": "Check to see if named css module is already loaded on the page"
     },
     "getProvides": {
      "!type": "fn(name: string) -> +yui.Object",
      "!doc": "Returns a hash of module names the supplied module satisfies."
     },
     "calculate": {
      "!type": "fn(o: +yui.Object, type: string)",
      "!doc": "Calculates the dependency tree, the result is stored in the sorted\nproperty."
     },
     "getLangPackName": {
      "!type": "fn(lang: string, mname: string) -> string",
      "!doc": "Builds a module name for a language pack"
     },
     "getModule": {
      "!type": "fn(mname: string) -> +yui.Object",
      "!doc": "Gets the loader meta data for the requested module"
     },
     "insert": {
      "!type": "fn(o: +yui.Object, type: string)",
      "!doc": "inserts the requested modules and their dependencies.\n<code>type</code> can be \"js\" or \"css\".  Both script and\ncss are inserted if type is not provided."
     },
     "loadNext": {
      "!type": "fn(mname: string)",
      "!doc": "Executed every time a module is loaded, and if we are in a load\ncycle, we attempt to load the next script.  Public so that it\nis possible to call this if using a method other than\nY.register to determine when scripts are fully loaded"
     },
     "resolve": {
      "!type": "fn(calc?: bool, s?: +yui.Array) -> +yui.Object",
      "!doc": "Returns an Object hash of file arrays built from `loader.sorted` or from an arbitrary list of sorted modules."
     },
     "load": {
      "!type": "fn(cb: fn())",
      "!doc": "Shortcut to calculate, resolve and load all modules.\n\n    var loader = new Y.Loader({\n        ignoreRegistered: true,\n        modules: {\n            mod: {\n                path: mod.js\n            }\n        },\n        requires: [ mod ]\n    });\n    loader.load(function() {\n        console.log(All modules have loaded..);\n    });"
     }
    }
   }
  },
  "matrix": {
   "Matrix": {
    "!type": "fn() -> +matrix.Matrix",
    "prototype": {
     "multiple": {
      "!type": "fn(a: number, b: number, c: number, d: number, dx: number, dy: number)",
      "!doc": "Updates the matrix."
     },
     "applyCSSText": {
      "!type": "fn(val: string)",
      "!doc": "Parses a string and updates the matrix."
     },
     "getTransformArray": {
      "!type": "fn(val: string) -> ?",
      "!doc": "Parses a string and returns an array of transform arrays."
     },
     "init": {
      "!type": "fn(config: +yui.Object)",
      "!doc": "Initializes a matrix."
     },
     "scale": {
      "!type": "fn(val: number)",
      "!doc": "Applies a scale transform"
     },
     "skew": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Applies a skew transformation."
     },
     "skewX": {
      "!type": "fn(x: number)",
      "!doc": "Applies a skew to the x-coordinate"
     },
     "skewY": {
      "!type": "fn(y: number)",
      "!doc": "Applies a skew to the y-coordinate"
     },
     "toCSSText": {
      "!type": "fn() -> ?",
      "!doc": "Returns a string of text that can be used to populate a the css transform property of an element."
     },
     "toFilterText": {
      "!type": "fn() -> ?",
      "!doc": "Returns a string that can be used to populate the css filter property of an element."
     },
     "rad2deg": {
      "!type": "fn(rad: number) -> ?",
      "!doc": "Converts a radian value to a degree."
     },
     "deg2rad": {
      "!type": "fn(deg: number) -> ?",
      "!doc": "Converts a degree value to a radian."
     },
     "rotate": {
      "!type": "fn(deg: number)",
      "!doc": "Applies a rotate transform."
     },
     "translate": {
      "!type": "fn(x: number, y: number)",
      "!doc": "Applies translate transformation."
     },
     "translateX": {
      "!type": "fn(x: number)",
      "!doc": "Applies a translate to the x-coordinate"
     },
     "translateY": {
      "!type": "fn(y: number)",
      "!doc": "Applies a translate to the y-coordinate"
     },
     "identity": {
      "!type": "fn() -> ?",
      "!doc": "Returns an identity matrix."
     },
     "getMatrixArray": {
      "!type": "fn() -> ?",
      "!doc": "Returns a 3x3 Matrix array\n\n/                                             \\\n| matrix[0][0]   matrix[1][0]    matrix[2][0] |\n| matrix[0][1]   matrix[1][1]    matrix[2][1] |\n| matrix[0][2]   matrix[1][2]    matrix[2][2] |\n\\                                             /"
     },
     "getContentRect": {
      "!type": "fn(width: number, height: number, x: number, y: number) -> ?",
      "!doc": "Returns the left, top, right and bottom coordinates for a transformed\nitem."
     },
     "getDeterminant": {
      "!type": "fn() -> ?",
      "!doc": "Returns the determinant of the matrix."
     },
     "inverse": {
      "!type": "fn() -> ?",
      "!doc": "Returns the inverse (in array form) of the matrix."
     },
     "transpose": {
      "!type": "fn() -> ?",
      "!doc": "Returns the transpose of the matrix"
     },
     "decompose": {
      "!type": "fn() -> ?",
      "!doc": "Returns an array of transform commands that represent the matrix."
     }
    }
   },
   "MatrixUtil": {
    "!type": "fn()",
    "prototype": {
     "rad2deg": {
      "!type": "fn(rad: number) -> ?",
      "!doc": "Converts a radian value to a degree."
     },
     "deg2rad": {
      "!type": "fn(deg: number) -> ?",
      "!doc": "Converts a degree value to a radian."
     },
     "angle2rad": {
      "!type": "fn(val: +Objecxt) -> ?",
      "!doc": "Converts an angle to a radian"
     },
     "getnxn": {
      "!type": "fn() -> ?",
      "!doc": "Converts a transform object to an array of column vectors.\n\n/                                             \\\n| matrix[0][0]   matrix[1][0]    matrix[2][0] |\n| matrix[0][1]   matrix[1][1]    matrix[2][1] |\n| matrix[0][2]   matrix[1][2]    matrix[2][2] |\n\\                                             /"
     },
     "getDeterminant": {
      "!type": "fn(matrix: +yui.Array) -> ?",
      "!doc": "Returns the determinant of a given matrix.\n\n/                                             \\\n| matrix[0][0]   matrix[1][0]    matrix[2][0] |\n| matrix[0][1]   matrix[1][1]    matrix[2][1] |\n| matrix[0][2]   matrix[1][2]    matrix[2][2] |\n| matrix[0][3]   matrix[1][3]    matrix[2][3] |\n\\                                             /"
     },
     "inverse": {
      "!type": "fn(Array: ?) -> ?",
      "!doc": "Returns the inverse of a matrix"
     },
     "scalarMultiply": {
      "!type": "fn(matrix: +yui.Array, multiplier: number) -> ?",
      "!doc": "Multiplies a matrix by a numeric value."
     },
     "transpose": {
      "!type": "fn(matrix: ?) -> ?",
      "!doc": "Returns the transpose for an nxn matrix."
     },
     "getMinors": {
      "!type": "fn(matrix: +yui.Array, columnIndex: number, rowIndex: number) -> ?",
      "!doc": "Returns a matrix of minors based on a matrix, column index and row index."
     },
     "sign": {
      "!type": "fn(val: number) -> ?",
      "!doc": "Returns the sign of value"
     },
     "vectorMatrixProduct": {
      "!type": "fn(vector: +yui.Array, matrix: +yui.Array) -> ?",
      "!doc": "Multiplies a vector and a matrix"
     },
     "decompose": {
      "!type": "fn(matrix: +yui.Array) -> ?",
      "!doc": "Breaks up a 2d transform matrix into a series of transform operations."
     },
     "getTransformArray": {
      "!type": "fn(val: string) -> ?",
      "!doc": "Parses a transform string and returns an array of transform arrays."
     },
     "getTransformFunctionArray": {
      "!type": "fn() -> ?",
      "!doc": "Returns an array of transform arrays representing transform functions and arguments."
     },
     "compareTransformSequence": {
      "!type": "fn(list1: +yui.Array, list2: +yui.Array) -> ?",
      "!doc": "Compares to arrays or transform functions to ensure both contain the same functions in the same\norder."
     },
     "transformMethods": {
      "!type": "+yui.Object",
      "!doc": "Mapping of possible transform method names."
     }
    }
   }
  },
  "node_flick": {
   "Plugin": {
    "Flick": {
     "!type": "fn(config: +yui.Object)",
     "prototype": {
      "deceleration": {
       "!type": "?",
       "!doc": "Drag coefficent for inertial scrolling. The closer to 1 this\nvalue is, the less friction during scrolling."
      },
      "bounce": {
       "!type": "number",
       "!doc": "Drag coefficient for intertial scrolling at the upper\nand lower boundaries of the scrollview. Set to 0 to\ndisable \"rubber-banding\"."
      },
      "bounceDistance": {
       "!type": "number",
       "!doc": "The bounce distance in pixels"
      },
      "minVelocity": {
       "!type": "number",
       "!doc": "The minimum flick gesture distance (px) for which to trigger the flick response"
      },
      "boundingBox": {
       "!type": "+node.Node",
       "!doc": "The constraining box relative to which the flick animation and bounds should be calculated."
      },
      "step": {
       "!type": "number",
       "!doc": "Time between flick animation frames."
      },
      "duration": {
       "!type": "number",
       "!doc": "The custom duration to apply to the flick animation. By default,\nthe animation duration is controlled by the deceleration factor."
      },
      "easing": {
       "!type": "string",
       "!doc": "The custom transition easing to use for the flick animation. If not\nprovided defaults to internally to Flick.EASING, or Flick.SNAP_EASING based\non whether or not were animating the flick or bounce step."
      },
      "initializer": {
       "!type": "fn(config: +yui.Object)",
       "!doc": "The initializer lifecycle implementation."
      },
      "setBounds": {
       "!type": "fn()",
       "!doc": "Sets the min/maxÂ boundaries for the flick animation,\nbased on the boundingBox dimensions."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "The NAME of the Flick class. Used to prefix events generated\nby the plugin."
     },
     "NS": {
      "!type": "string",
      "!doc": "The namespace for the plugin. This will be the property on the node, which will\nreference the plugin instance, when its plugged in."
     },
     "VELOCITY_THRESHOLD": {
      "!type": "number",
      "!doc": "The threshold used to determine when the decelerated velocity of the node\nis practically 0."
     },
     "SNAP_DURATION": {
      "!type": "number",
      "!doc": "The duration to use for the bounce snap-back transition"
     },
     "EASING": {
      "!type": "string",
      "!doc": "The default easing to use for the main flick movement transition"
     },
     "SNAP_EASING": {
      "!type": "string",
      "!doc": "The default easing to use for the bounce snap-back transition"
     },
     "CLASS_NAMES": {
      "!type": "+yui.Object",
      "!doc": "The default CSS class names used by the plugin"
     }
    }
   }
  },
  "node_focusmanager": {
   "plugin": {
    "NodeFocusManager": {
     "!type": "fn()",
     "prototype": {
      "focused": {
       "!type": "bool",
       "!doc": "Boolean indicating that one of the descendants is focused."
      },
      "descendants": {
       "!type": "+Y.NodeList",
       "!doc": "String representing the CSS selector used to define the descendant Nodes\nwhose focus should be managed."
      },
      "activeDescendant": {
       "!type": "number",
       "!doc": "<p>Node, or index of the Node, representing the descendant that is either\nfocused or is focusable (<code>tabIndex</code> attribute is set to 0).\nThe value cannot represent a disabled descendant Node.  Use a value of -1\nto remove all descendant Nodes from the default tab flow.\nIf no value is specified, the active descendant will be inferred using\nthe following criteria:</p>\n<ol>\n<li>Examining the <code>tabIndex</code> attribute of each descendant and\nusing the first descendant whose <code>tabIndex</code> attribute is set\nto 0</li>\n<li>If no default can be inferred then the value is set to either 0 or\nthe index of the first enabled descendant.</li>\n</ol>"
      },
      "keys": {
       "!type": "+yui.Object",
       "!doc": "Object literal representing the keys to be used to navigate between the\nnext/previous descendant.  The format for the attributes value is\n<code>{ next: \"down:40\", previous: \"down:38\" }</code>.  The value for the\n\"next\" and \"previous\" properties are used to attach\n<a href=\"event/#keylistener\"><code>key</code></a> event listeners. See\nthe <a href=\"event/#keylistener\">Using the key Event</a> section of\nthe Event documentation for more information on \"key\" event listeners."
      },
      "focusClass": {
       "!type": "string",
       "!doc": "String representing the name of class applied to the focused active\ndescendant Node.  Can also be an object literal used to define both the\nclass name, and the Node to which the class should be applied.  If using\nan object literal, the format is:\n<code>{ className: \"focus\", fn: myFunction }</code>.  The function\nreferenced by the <code>fn</code> property in the object literal will be\npassed a reference to the currently focused active descendant Node."
      },
      "circular": {
       "!type": "bool",
       "!doc": "Boolean indicating if focus should be set to the first/last descendant\nwhen the end or beginning of the descendants has been reached."
      },
      "focus": {
       "!type": "fn(index: number)",
       "!doc": "Focuses the active descendant and sets the\n<code>focused</code> attribute to true."
      },
      "blur": {
       "!type": "fn()",
       "!doc": "Blurs the current active descendant and sets the\n<code>focused</code> attribute to false."
      },
      "start": {
       "!type": "fn()",
       "!doc": "Enables the Focus Manager."
      },
      "stop": {
       "!type": "fn()",
       "!doc": "Disables the Focus Manager by detaching all event handlers."
      },
      "refresh": {
       "!type": "fn()",
       "!doc": "Refreshes the Focus Managers descendants by re-executing the\nCSS selector query specified by the <code>descendants</code> attribute."
      }
     }
    }
   }
  },
  "node_menunav": {
   "plugin": {
    "NodeMenuNav": {
     "!type": "fn()",
     "prototype": {
      "SHIM_TEMPLATE_TITLE": {
       "!type": "string",
       "!doc": "String representing the value for the <code>title</code>\nattribute for the shim used to prevent <code>&#60;select&#62;</code> elements\nfrom poking through menus in IE 6."
      },
      "SHIM_TEMPLATE": {
       "!type": "string",
       "!doc": "String representing the HTML used to create the\n<code>&#60;iframe&#62;</code> shim used to prevent\n<code>&#60;select&#62;</code> elements from poking through menus in IE 6."
      },
      "useARIA": {
       "!type": "bool",
       "!doc": "Boolean indicating if use of the WAI-ARIA Roles and States should be\nenabled for the menu."
      },
      "autoSubmenuDisplay": {
       "!type": "bool",
       "!doc": "Boolean indicating if submenus are automatically made visible when the\nuser mouses over the menus items."
      },
      "submenuShowDelay": {
       "!type": "number",
       "!doc": "Number indicating the time (in milliseconds) that should expire before a\nsubmenu is made visible when the user mouses over the menus label."
      },
      "submenuHideDelay": {
       "!type": "number",
       "!doc": "Number indicating the time (in milliseconds) that should expire before a\nsubmenu is hidden when the user mouses out of a menu label heading in the\ndirection of a submenu."
      },
      "mouseOutHideDelay": {
       "!type": "number",
       "!doc": "Number indicating the time (in milliseconds) that should expire before a\nsubmenu is hidden when the user mouses out of it."
      }
     }
    }
   }
  },
  "node_scroll_info": {
   "Plugin": {
    "ScrollInfo": {
     "!type": "fn()",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "getOffscreenNodes": {
       "!type": "fn(selector?: string, margin?: number) -> +node.NodeList",
       "!doc": "Returns a NodeList containing all offscreen nodes inside the host node that\nmatch the given CSS selector. An offscreen node is any node that is entirely\noutside the visible (onscreen) region of the host node based on the current\nscroll location."
      },
      "getOnscreenNodes": {
       "!type": "fn(selector?: string, margin?: number) -> +node.NodeList",
       "!doc": "Returns a NodeList containing all onscreen nodes inside the host node that\nmatch the given CSS selector. An onscreen node is any node that is fully or\npartially within the visible (onscreen) region of the host node based on the\ncurrent scroll location."
      },
      "getScrollInfo": {
       "!type": "fn() -> +yui.Object",
       "!doc": "Returns an object hash containing information about the current scroll\nposition of the host node. This is the same information thats mixed into\nthe event facade of the `scroll` event and other scroll-related events."
      },
      "isNodeOnscreen": {
       "!type": "fn(node: +HTMLElement, margin?: number) -> bool",
       "!doc": "Returns `true` if _node_ is at least partially onscreen within the host\nnode, `false` otherwise."
      },
      "refreshDimensions": {
       "!type": "fn()",
       "!doc": "Refreshes cached position, height, and width dimensions for the host node.\nIf the host node is the body, then the viewport height and width will be\nused.\n\nThis info is cached to improve performance during scroll events, since its\nexpensive to touch the DOM for these values. Dimensions are automatically\nrefreshed whenever the browser is resized, but if you change the dimensions\nor position of the host node in JS, you may need to call\n`refreshDimensions()` manually to cache the new dimensions."
      },
      "scrollDelay": {
       "!type": "number",
       "!doc": "Number of milliseconds to wait after a native `scroll` event before\nfiring local scroll events. If another native scroll event occurs during\nthis time, previous events will be ignored. This ensures that we dont\nfire thousands of events when the user is scrolling quickly."
      },
      "scrollMargin": {
       "!type": "number",
       "!doc": "Additional margin in pixels beyond the onscreen region of the host node\nthat should be considered \"onscreen\".\n\nFor example, if set to 50, then a `scrollToBottom` event would be fired\nwhen the user scrolls to within 50 pixels of the bottom of the\nscrollable region, even if they dont actually scroll completely to the\nvery bottom pixel.\n\nThis margin also applies to the `getOffscreenNodes()` and\n`getOnscreenNodes()` methods by default."
      }
     }
    }
   }
  },
  "align_plugin": {
   "Plugin": {
    "Align": {
     "!type": "fn(User: +yui.Object)",
     "prototype": {
      "to": {
       "!type": "fn(region: string, regionPoint: string, point: string, resize: bool)",
       "!doc": "Aligns node with a point on another node or region.\nPossible alignment points are:\n<dl>\n     <dt>tl</dt>\n     <dd>top left</dd>\n     <dt>tr</dt>\n     <dd>top right</dd>\n     <dt>bl</dt>\n     <dd>bottom left</dd>\n     <dt>br</dt>\n     <dd>bottom right</dd>\n     <dt>tc</dt>\n     <dd>top center</dd>\n     <dt>bc</dt>\n     <dd>bottom center</dd>\n     <dt>rc</dt>\n     <dd>right center</dd>\n     <dt>lc</dt>\n     <dd>left center</dd>\n     <dt>cc</dt>\n     <dd>center center</dd>\n</dl>"
      },
      "center": {
       "!type": "fn(region: +node.Node)",
       "!doc": "Aligns the center of a node to the center of another node or region."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Removes the resize handler, if any. This is called automatically\nwhen unplugged from the host node."
      }
     }
    }
   }
  },
  "node": {
   "Node": {
    "!type": "fn(node: +HTMLElement) -> +node.Node",
    "ATTRS": {
     "!type": "+object",
     "!doc": "Static collection of configuration attributes for special handling"
    },
    "prototype": {
     "text": {
      "!type": "string",
      "!doc": "Allows for getting and setting the text of an element.\nFormatting is preserved and special characters are treated literally."
     },
     "for": {
      "!type": "string",
      "!doc": "Allows for getting and setting the text of an element.\nFormatting is preserved and special characters are treated literally."
     },
     "children": {
      "!type": "+node.NodeList",
      "!doc": "Returns a NodeList instance of all HTMLElement children."
     },
     "hasClass": {
      "!type": "fn(className: string) -> bool",
      "!doc": "Determines whether each node has the given className."
     },
     "addClass": {
      "!type": "fn(className: string) -> !this",
      "!doc": "Adds a class name to each node."
     },
     "removeClass": {
      "!type": "fn(className: string) -> !this",
      "!doc": "Removes a class name from each node."
     },
     "replaceClass": {
      "!type": "fn(oldClassName: string, newClassName: string) -> !this",
      "!doc": "Replace a class with another class for each node.\nIf no oldClassName is present, the newClassName is simply added."
     },
     "toggleClass": {
      "!type": "fn(className: string, force: bool) -> !this",
      "!doc": "If the className exists on the node it is removed, if it doesnt exist it is added."
     },
     "toString": {
      "!type": "fn() -> string",
      "!doc": "The method called when outputting Node instances as strings"
     },
     "get": {
      "!type": "fn(attr: string) -> ?",
      "!doc": "Returns an attribute value on the Node instance.\nUnless pre-configured (via `Node.ATTRS`), get hands\noff to the underlying DOM node.  Only valid\nattributes/properties for the node will be queried."
     },
     "set": {
      "!type": "fn(attr: string, val: ?) -> !this",
      "!doc": "Sets an attribute on the Node instance.\nUnless pre-configured (via Node.ATTRS), set hands\noff to the underlying DOM node.  Only valid\nattributes/properties for the node will be set.\nTo set custom attributes use setAttribute."
     },
     "setAttrs": {
      "!type": "fn(attrMap: +yui.Object) -> !this",
      "!doc": "Sets multiple attributes."
     },
     "getAttrs": {
      "!type": "fn(attrs: +yui.Array) -> +yui.Object",
      "!doc": "Returns an object containing the values for the requested attributes."
     },
     "compareTo": {
      "!type": "fn(refNode: +HTMLElement) -> bool",
      "!doc": "Compares nodes to determine if they match.\nNode instances can be compared to each other and/or HTMLElements."
     },
     "inDoc": {
      "!type": "fn(doc: +node.Node) -> bool",
      "!doc": "Determines whether the node is appended to the document."
     },
     "ancestor": {
      "!type": "fn(fn: string, testSelf: bool, stopFn: string) -> +node.Node",
      "!doc": "Returns the nearest ancestor that passes the test applied by supplied boolean method."
     },
     "ancestors": {
      "!type": "fn(fn: string, testSelf: bool) -> +node.NodeList",
      "!doc": "Returns the ancestors that pass the test applied by supplied boolean method."
     },
     "previous": {
      "!type": "fn(fn: string, all?: bool) -> +node.Node",
      "!doc": "Returns the previous matching sibling.\nReturns the nearest element node sibling if no method provided."
     },
     "next": {
      "!type": "fn(fn: string, all?: bool) -> +node.Node",
      "!doc": "Returns the next matching sibling.\nReturns the nearest element node sibling if no method provided."
     },
     "siblings": {
      "!type": "fn(fn: string) -> +node.NodeList",
      "!doc": "Returns all matching siblings.\nReturns all siblings if no method provided."
     },
     "one": {
      "!type": "fn(selector: string) -> +node.Node",
      "!doc": "Retrieves a single Node instance, the first element matching the given\nCSS selector.\nReturns null if no match found."
     },
     "all": {
      "!type": "fn(selector: string) -> +node.NodeList",
      "!doc": "Retrieves a NodeList based on the given CSS selector."
     },
     "test": {
      "!type": "fn(selector: string) -> bool",
      "!doc": "Test if the supplied node matches the supplied selector."
     },
     "remove": {
      "!type": "fn(destroy: bool) -> !this",
      "!doc": "Removes the node from its parent.\nShortcut for myNode.get(parentNode).removeChild(myNode);"
     },
     "replace": {
      "!type": "fn(newNode: +node.Node) -> !this",
      "!doc": "Replace the node with the other node. This is a DOM update only\nand does not change the node bound to the Node instance.\nShortcut for myNode.get(parentNode).replaceChild(newNode, myNode);"
     },
     "replaceChild": {
      "!type": "fn(node: string, refNode: +HTMLElement) -> +node.Node"
     },
     "destroy": {
      "!type": "fn(recursivePurge: bool)",
      "!doc": "Nulls internal node references, removes any plugins and event listeners.\nNote that destroy() will not remove the node from its parent or from the DOM. For that\nfunctionality, call remove(true)."
     },
     "invoke": {
      "!type": "fn(method: string, args?: ?) -> ?",
      "!doc": "Invokes a method on the Node instance"
     },
     "swap": {
      "!type": "fn(otherNode: +node.Node) -> !this",
      "!doc": "Swap DOM locations with the given node.\nThis does not change which DOM node each Node instance refers to."
     },
     "empty": {
      "!type": "fn() -> !this",
      "!doc": "Removes and destroys all of the nodes within the node."
     },
     "getDOMNode": {
      "!type": "fn() -> +HTMLElement",
      "!doc": "Returns the DOM node bound to the Node instance"
     },
     "create": {
      "!type": "fn(html: string, doc: +HTMLDocument) -> +node.Node",
      "!doc": "Creates a new Node using the provided markup string."
     },
     "insert": {
      "!type": "fn(content: string, where: number) -> !this",
      "!doc": "Inserts the content before the reference node."
     },
     "prepend": {
      "!type": "fn(content: string) -> !this",
      "!doc": "Inserts the content as the firstChild of the node."
     },
     "append": {
      "!type": "fn(content: string) -> !this",
      "!doc": "Inserts the content as the lastChild of the node."
     },
     "appendChild": {
      "!type": "fn(node: string) -> +node.Node"
     },
     "insertBefore": {
      "!type": "fn(newNode: string, refNode: +HTMLElement) -> +node.Node"
     },
     "appendTo": {
      "!type": "fn(node: +node.Node) -> !this",
      "!doc": "Appends the node to the given node."
     },
     "setHTML": {
      "!type": "fn(content: string) -> !this",
      "!doc": "Replaces the nodes current html content with the content provided.\nNote that this passes to innerHTML and is not escaped.\nUse <a href=\"../classes/Escape.html#method_html\">`Y.Escape.html()`</a>\nto escape html content or `set(text)` to add as text."
     },
     "getHTML": {
      "!type": "fn() -> string",
      "!doc": "Returns the nodes current html content (e.g. innerHTML)"
     },
     "getData": {
      "!type": "fn(name: string) -> ?",
      "!doc": "Retrieves arbitrary data stored on a Node instance.\nIf no data is associated with the Node, it will attempt to retrieve\na value from the corresponding HTML data attribute. (e.g. node.getData(foo)\nwill check node.getAttribute(data-foo))."
     },
     "setData": {
      "!type": "fn(name: string, val: ?) -> !this",
      "!doc": "Stores arbitrary data on a Node instance.\nThis is not stored with the DOM node."
     },
     "clearData": {
      "!type": "fn(name: string) -> !this",
      "!doc": "Clears internally stored data."
     },
     "delegate": {
      "!type": "fn(type: string, fn: fn(), spec: string, context: +yui.Object, args: ?) -> +event_custom.EventHandle",
      "!doc": "<p>Sets up a delegation listener for an event occurring inside the Node.\nThe delegated event will be verified against a supplied selector or\nfiltering function to test if the event references at least one node that\nshould trigger the subscription callback.</p>\n\n<p>Selector string filters will trigger the callback if the event originated\nfrom a node that matches it or is contained in a node that matches it.\nFunction filters are called for each Node up the parent axis to the\nsubscribing container node, and receive at each level the Node and the event\nobject.  The function should return true (or a truthy value) if that Node\nshould trigger the subscription callback.  Note, it is possible for filters\nto match multiple Nodes for a single event.  In this case, the delegate\ncallback will be executed for each matching Node.</p>\n\n<p>For each matching Node, the callback will be executed with its this\nobject set to the Node matched by the filter (unless a specific context was\nprovided during subscription), and the provided events\n<code>currentTarget</code> will also be set to the matching Node.  The\ncontaining Node from which the subscription was originally made can be\nreferenced as <code>e.container</code>."
     },
     "simulate": {
      "!type": "fn(type: string, options: +yui.Object)",
      "!doc": "Simulates an event on the node."
     },
     "simulateGesture": {
      "!type": "fn(name: string, options?: +yui.Object, cb?: fn(err: +Error))",
      "!doc": "Simulates the higher user level gesture of the given name on this node.\nThis method generates a set of low level touch events(Apple specific gesture\nevents as well for the iOS platforms) asynchronously. Note that gesture\nsimulation is relying on `Y.Event.simulate()` method to generate\nthe touch events under the hood. The `Y.Event.simulate()` method\nitself is a synchronous method.\n\nSupported gestures are `tap`, `doubletap`, `press`, `move`, `flick`, `pinch`\nand `rotate`.\n\nThe `pinch` gesture is used to simulate the pinching and spreading of two\nfingers. During a pinch simulation, rotation is also possible. Essentially\n`pinch` and `rotate` simulations share the same base implementation to allow\nboth pinching and rotation at the same time. The only difference is `pinch`\nrequires `start` and `end` option properties while `rotate` requires `rotation`\noption property.\n\nThe `pinch` and `rotate` gestures can be described as placing 2 fingers along a\ncircle. Pinching and spreading can be described by start and end circles while\nrotation occurs on a single circle. If the radius of the start circle is greater\nthan the end circle, the gesture becomes a pinch, otherwise it is a spread spread."
     },
     "purge": {
      "!type": "fn(recurse: bool, type: string) -> !this",
      "!doc": "Removes event listeners from the node and (optionally) its subtree"
     },
     "on": {
      "!type": "fn(type: string, fn: fn(), context?: +yui.Object, arg?: ?) -> +event_custom.EventHandle",
      "!doc": "Subscribe a callback function to execute in response to a DOM event or custom\nevent.\n\nMost DOM events are associated with a preventable default behavior such as\nlink clicks navigating to a new page.  Callbacks are passed a `DOMEventFacade`\nobject as their first argument (usually called `e`) that can be used to\nprevent this default behavior with `e.preventDefault()`. See the\n`DOMEventFacade` API for all available properties and methods on the object.\n\nIf the event name passed as the first parameter is not a whitelisted DOM event,\nit will be treated as a custom event subscriptions, allowing\n`node.fire(customEventName)` later in the code.  Refer to the Event user guide\nfor the full DOM event whitelist.\n\nBy default, the `this` object in the callback will refer to the subscribed\n`Node`.\n\nReturning `false` from a callback is supported as an alternative to calling\n`e.preventDefault(); e.stopPropagation();`.  However, it is recommended to use\nthe event methods."
     },
     "removeChild": {
      "!type": "fn(node: +HTMLElement) -> +node.Node",
      "!doc": "Passes through to DOM method."
     },
     "hasChildNodes": {
      "!type": "fn() -> bool",
      "!doc": "Passes through to DOM method."
     },
     "cloneNode": {
      "!type": "fn(deep: bool) -> +node.Node",
      "!doc": "Passes through to DOM method."
     },
     "hasAttribute": {
      "!type": "fn(attribute: string) -> bool",
      "!doc": "Passes through to DOM method."
     },
     "scrollIntoView": {
      "!type": "fn() -> !this",
      "!doc": "Passes through to DOM method."
     },
     "getElementsByTagName": {
      "!type": "fn(tagName: string) -> +node.NodeList",
      "!doc": "Passes through to DOM method."
     },
     "focus": {
      "!type": "fn() -> !this",
      "!doc": "Passes through to DOM method."
     },
     "blur": {
      "!type": "fn() -> !this",
      "!doc": "Passes through to DOM method."
     },
     "submit": {
      "!type": "fn() -> !this",
      "!doc": "Passes through to DOM method.\nOnly valid on FORM elements"
     },
     "reset": {
      "!type": "fn() -> !this",
      "!doc": "Passes through to DOM method.\nOnly valid on FORM elements"
     },
     "select": {
      "!type": "fn() -> !this",
      "!doc": "Passes through to DOM method."
     },
     "createCaption": {
      "!type": "fn() -> !this",
      "!doc": "Passes through to DOM method.\nOnly valid on TABLE elements"
     },
     "removeAttribute": {
      "!type": "fn(attribute: string) -> !this",
      "!doc": "Passes through to DOM method."
     },
     "contains": {
      "!type": "fn(needle: +node.Node) -> bool",
      "!doc": "Determines whether the node is an ancestor of another HTML element in the DOM hierarchy."
     },
     "setAttribute": {
      "!type": "fn(name: string, value: string) -> !this",
      "!doc": "Allows setting attributes on DOM nodes, normalizing in some cases.\nThis passes through to the DOM node, allowing for custom attributes."
     },
     "getAttribute": {
      "!type": "fn(name: string) -> string",
      "!doc": "Allows getting attributes on DOM nodes, normalizing in some cases.\nThis passes through to the DOM node, allowing for custom attributes."
     },
     "wrap": {
      "!type": "fn(html: string) -> !this",
      "!doc": "Wraps the given HTML around the node."
     },
     "unwrap": {
      "!type": "fn() -> !this",
      "!doc": "Removes the nodes parent node."
     },
     "generateID": {
      "!type": "fn() -> string",
      "!doc": "Applies a unique ID to the node if none exists"
     },
     "load": {
      "!type": "fn(url: string, selector: string, callback: fn()) -> !this",
      "!doc": "Loads content from the given url and replaces the Nodes\nexisting content with the remote content."
     },
     "region": {
      "!type": "+node.Node",
      "!doc": "Returns a region object for the node"
     },
     "viewportRegion": {
      "!type": "+node.Node",
      "!doc": "Returns a region object for the nodes viewport"
     },
     "intersect": {
      "!type": "fn(node2: +node.Node, altRegion: +yui.Object) -> +yui.Object",
      "!doc": "Compares the intersection of the node with another node or region"
     },
     "inRegion": {
      "!type": "fn(node2: +node.Node, all: bool, altRegion: +yui.Object) -> bool",
      "!doc": "Determines whether or not the node is within the giving region."
     },
     "winWidth": {
      "!type": "number",
      "!doc": "Returns the inner width of the viewport (exludes scrollbar)."
     },
     "winHeight": {
      "!type": "number",
      "!doc": "Returns the inner height of the viewport (exludes scrollbar)."
     },
     "docWidth": {
      "!type": "number",
      "!doc": "Document width"
     },
     "docHeight": {
      "!type": "number",
      "!doc": "Document height"
     },
     "docScrollX": {
      "!type": "number",
      "!doc": "Pixel distance the page has been scrolled horizontally"
     },
     "docScrollY": {
      "!type": "number",
      "!doc": "Pixel distance the page has been scrolled vertically"
     },
     "getXY": {
      "!type": "fn() -> +yui.Array",
      "!doc": "Gets the current position of the node in page coordinates."
     },
     "setXY": {
      "!type": "fn(xy: +yui.Array) -> !this",
      "!doc": "Set the position of the node in page coordinates, regardless of how the node is positioned."
     },
     "getX": {
      "!type": "fn() -> number",
      "!doc": "Gets the current position of the node in page coordinates."
     },
     "setX": {
      "!type": "fn(x: number) -> !this",
      "!doc": "Set the position of the node in page coordinates, regardless of how the node is positioned."
     },
     "getY": {
      "!type": "fn() -> number",
      "!doc": "Gets the current position of the node in page coordinates."
     },
     "setY": {
      "!type": "fn(y: number) -> !this",
      "!doc": "Set the position of the node in page coordinates, regardless of how the node is positioned."
     },
     "swapXY": {
      "!type": "fn(otherNode: +node.Node) -> !this",
      "!doc": "Swaps the XY position of this node with another node."
     },
     "setStyle": {
      "!type": "fn(attr: string, val: string) -> !this",
      "!doc": "Sets a style property of the node.\nUse camelCase (e.g. backgroundColor) for multi-word properties."
     },
     "setStyles": {
      "!type": "fn(hash: +yui.Object) -> !this",
      "!doc": "Sets multiple style properties on the node.\nUse camelCase (e.g. backgroundColor) for multi-word properties."
     },
     "getStyle": {
      "!type": "fn(attr: string) -> string",
      "!doc": "Returns the styles current value.\nUse camelCase (e.g. backgroundColor) for multi-word properties."
     },
     "getComputedStyle": {
      "!type": "fn(attr: string) -> string",
      "!doc": "Returns the computed value for the given style property.\nUse camelCase (e.g. backgroundColor) for multi-word properties."
     },
     "show": {
      "!type": "fn(name: string, config: +yui.Object, callback: fn()) -> !this",
      "!doc": "Makes the node visible.\nIf the \"transition\" module is loaded, show optionally\nanimates the showing of the node using either the default\ntransition effect (fadeIn), or the given named effect."
     },
     "toggleView": {
      "!type": "fn(on?: bool, callback?: fn()) -> !this",
      "!doc": "Displays or hides the node.\nIf the \"transition\" module is loaded, toggleView optionally\nanimates the toggling of the node using given named effect."
     },
     "hide": {
      "!type": "fn(name: string, config: +yui.Object, callback: fn()) -> !this",
      "!doc": "Hides the node.\nIf the \"transition\" module is loaded, hide optionally\nanimates the hiding of the node using either the default\ntransition effect (fadeOut), or the given named effect."
     },
     "transition": {
      "!type": "fn(config: +yui.Object, callback: fn()) -> !this",
      "!doc": "Animate one or more css properties to a given value. Requires the \"transition\" module.\n<pre>example usage:\n    Y.one(#demo).transition({\n        duration: 1, // in seconds, default is 0.5\n        easing: ease-out, // default is ease\n        delay: 1, // delay start for 1 second, default is 0\n\n        height: 10px,\n        width: 10px,\n\n        opacity: { // per property\n            value: 0,\n            duration: 2,\n            delay: 2,\n            easing: ease-in\n        }\n    });\n</pre>"
     }
    },
    "NAME": {
     "!type": "string",
     "!doc": "The name of the component"
    },
    "getDOMNode": {
     "!type": "fn(node: +node.Node) -> +HTMLElement",
     "!doc": "Retrieves the DOM node bound to a Node instance"
    },
    "scrubVal": {
     "!type": "fn(node: +HTMLElement) -> +node.Node",
     "!doc": "Checks Node return values and wraps DOM Nodes as Y.Node instances\nand DOM Collections / Arrays as Y.NodeList instances.\nOther return values just pass thru.  If undefined is returned (e.g. no return)\nthen the Node instance is returned for chainability."
    },
    "addMethod": {
     "!type": "fn(name: string, fn: fn(), context: +yui.Object) -> ?",
     "!doc": "Adds methods to the Y.Node prototype, routing through scrubVal."
    },
    "importMethod": {
     "!type": "fn(host: +yui.Object, name: string, altName: string, context: +yui.Object)",
     "!doc": "Imports utility methods to be added as Y.Node methods."
    },
    "one": {
     "!type": "fn(node: string) -> +node.Node",
     "!doc": "Returns a single Node instance bound to the node or the\nfirst element matching the given selector. Returns null if no match found.\n<strong>Note:</strong> For chaining purposes you may want to\nuse <code>Y.all</code>, which returns a NodeList when no match is found."
    },
    "DEFAULT_SETTER": {
     "!type": "fn(name: string, val: ?) -> ?",
     "!doc": "The default setter for DOM properties\nCalled with instance context (this === the Node instance)"
    },
    "DEFAULT_GETTER": {
     "!type": "fn(name: string) -> ?",
     "!doc": "The default getter for DOM properties\nCalled with instance context (this === the Node instance)"
    },
    "create": {
     "!type": "fn(html: string, doc: +HTMLDocument) -> +node.Node",
     "!doc": "Returns a new dom node using the provided markup string."
    },
    "DOM_EVENTS": {
     "!type": "?",
     "!doc": "List of events that route to DOM events"
    },
    "plug": {
     "!type": "fn(plugin: fn(), config: +yui.Object)",
     "!doc": "Registers plugins to be instantiated at the class level (plugins\nwhich should be plugged into every instance of Node by default)."
    },
    "unplug": {
     "!type": "fn(plugin: fn())",
     "!doc": "Unregisters any class level plugins which have been registered by the Node"
    }
   },
   "NodeList": {
    "!type": "fn(nodes: string) -> +node.NodeList",
    "prototype": {
     "setAttribute": {
      "!type": "fn(name: string, value: string) -> !this",
      "!doc": "Allows setting attributes on DOM nodes, normalizing in some cases.\nThis passes through to the DOM node, allowing for custom attributes."
     },
     "getAttribute": {
      "!type": "fn(name: string) -> string",
      "!doc": "Allows getting attributes on DOM nodes, normalizing in some cases.\nThis passes through to the DOM node, allowing for custom attributes."
     },
     "hasClass": {
      "!type": "fn(className: string) -> +yui.Array",
      "!doc": "Determines whether each node has the given className."
     },
     "addClass": {
      "!type": "fn(className: string) -> !this",
      "!doc": "Adds a class name to each node."
     },
     "removeClass": {
      "!type": "fn(className: string) -> !this",
      "!doc": "Removes a class name from each node."
     },
     "replaceClass": {
      "!type": "fn(oldClassName: string, newClassName: string) -> !this",
      "!doc": "Replace a class with another class for each node.\nIf no oldClassName is present, the newClassName is simply added."
     },
     "toggleClass": {
      "!type": "fn(className: string) -> !this",
      "!doc": "If the className exists on the node it is removed, if it doesnt exist it is added."
     },
     "append": {
      "!type": "fn()",
      "!doc": "Called on each Node instance"
     },
     "insert": {
      "!type": "fn()",
      "!doc": "Called on each Node instance"
     },
     "appendChild": {
      "!type": "fn()",
      "!doc": "Called on each Node instance"
     },
     "insertBefore": {
      "!type": "fn()",
      "!doc": "Called on each Node instance"
     },
     "prepend": {
      "!type": "fn()",
      "!doc": "Called on each Node instance"
     },
     "setHTML": {
      "!type": "fn()",
      "!doc": "Called on each Node instance\nNote that this passes to innerHTML and is not escaped.\nUse <a href=\"../classes/Escape.html#method_html\">`Y.Escape.html()`</a>\nto escape html content or `set(text)` to add as text."
     },
     "getHTML": {
      "!type": "fn()",
      "!doc": "Called on each Node instance"
     },
     "getData": {
      "!type": "fn(name: string) -> +yui.Array",
      "!doc": "Retrieves arbitrary data stored on each Node instance\nbound to the NodeList."
     },
     "setData": {
      "!type": "fn(name: string, val: ?) -> !this",
      "!doc": "Stores arbitrary data on each Node instance bound to the\n NodeList. This is not stored with the DOM node."
     },
     "clearData": {
      "!type": "fn(name: string) -> !this",
      "!doc": "Clears data on all Node instances bound to the NodeList."
     },
     "on": {
      "!type": "fn(type: string, fn: fn(), context?: +yui.Object, arg?: ?) -> +event_custom.EventHandle",
      "!doc": "Subscribe a callback function for each `Node` in the collection to execute\nin response to a DOM event.\n\nNOTE: Generally, the `on()` method should be avoided on `NodeLists`, in\nfavor of using event delegation from a parent Node.  See the Event user\nguide for details.\n\nMost DOM events are associated with a preventable default behavior, such as\nlink clicks navigating to a new page.  Callbacks are passed a\n`DOMEventFacade` object as their first argument (usually called `e`) that\ncan be used to prevent this default behavior with `e.preventDefault()`. See\nthe `DOMEventFacade` API for all available properties and methods on the\nobject.\n\nBy default, the `this` object will be the `NodeList` that the subscription\ncame from, <em>not the `Node` that received the event</em>.  Use\n`e.currentTarget` to refer to the `Node`.\n\nReturning `false` from a callback is supported as an alternative to calling\n`e.preventDefault(); e.stopPropagation();`.  However, it is recommended to\nuse the event methods."
     },
     "once": {
      "!type": "fn(type: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
      "!doc": "Applies an one-time event listener to each Node bound to the NodeList."
     },
     "after": {
      "!type": "fn(type: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
      "!doc": "Applies an event listener to each Node bound to the NodeList.\nThe handler is called only after all on() handlers are called\nand the event is not prevented."
     },
     "onceAfter": {
      "!type": "fn(type: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
      "!doc": "Applies an one-time event listener to each Node bound to the NodeList\nthat will be called only after all on() handlers are called and the\nevent is not prevented."
     },
     "detach": {
      "!type": "fn()",
      "!doc": "Called on each Node instance"
     },
     "detachAll": {
      "!type": "fn()"
     },
     "removeAttribute": {
      "!type": "fn(name: string)",
      "!doc": "Allows for removing attributes on DOM nodes.\nThis passes through to the DOM node, allowing for custom attributes."
     },
     "unwrap": {
      "!type": "fn() -> !this",
      "!doc": "Removes the parent node from node in the list."
     },
     "wrap": {
      "!type": "fn(html: string) -> !this",
      "!doc": "Wraps the given HTML around each node."
     },
     "generateID": {
      "!type": "fn() -> string",
      "!doc": "Applies a unique ID to each node if none exists"
     },
     "plug": {
      "!type": "fn(P: fn(), config: ?) -> !this",
      "!doc": "Adds a plugin to each node in the NodeList.\nThis will instantiate the plugin and attach it to the configured namespace on each node"
     },
     "unplug": {
      "!type": "fn(plugin: string) -> !this",
      "!doc": "Removes a plugin from all nodes in the NodeList. This will destroy the\nplugin instance and delete the namespace each node."
     },
     "getStyle": {
      "!type": "fn(attr: string) -> +yui.Array",
      "!doc": "Returns an array of values for each node.\nUse camelCase (e.g. backgroundColor) for multi-word properties."
     },
     "getComputedStyle": {
      "!type": "fn(attr: string) -> +yui.Array",
      "!doc": "Returns an array of the computed value for each node.\nUse camelCase (e.g. backgroundColor) for multi-word properties."
     },
     "setStyle": {
      "!type": "fn(attr: string, val: string) -> !this",
      "!doc": "Sets a style property on each node.\nUse camelCase (e.g. backgroundColor) for multi-word properties."
     },
     "setStyles": {
      "!type": "fn(hash: +yui.Object) -> !this",
      "!doc": "Sets multiple style properties on each node.\nUse camelCase (e.g. backgroundColor) for multi-word properties."
     },
     "show": {
      "!type": "fn(name: string, config: +yui.Object, callback: fn()) -> !this",
      "!doc": "Makes each node visible.\nIf the \"transition\" module is loaded, show optionally\nanimates the showing of the node using either the default\ntransition effect (fadeIn), or the given named effect."
     },
     "hide": {
      "!type": "fn(name: string, config: +yui.Object, callback: fn()) -> !this",
      "!doc": "Hides each node.\nIf the \"transition\" module is loaded, hide optionally\nanimates the hiding of the node using either the default\ntransition effect (fadeOut), or the given named effect."
     },
     "toggleView": {
      "!type": "fn(on?: bool, callback?: fn()) -> !this",
      "!doc": "Displays or hides each node.\nIf the \"transition\" module is loaded, toggleView optionally\nanimates the toggling of the nodes using given named effect."
     },
     "concat": {
      "!type": "fn(valueN: +node.NodeList) -> +node.NodeList"
     },
     "pop": {
      "!type": "fn() -> +node.Node"
     },
     "push": {
      "!type": "fn(nodes: +node.Node)"
     },
     "shift": {
      "!type": "fn() -> +node.Node"
     },
     "slice": {
      "!type": "fn(begin: number, end: number) -> +node.NodeList"
     },
     "splice": {
      "!type": "fn(index: number, howMany: number) -> +node.NodeList"
     },
     "unshift": {
      "!type": "fn(nodes: +node.Node)"
     },
     "item": {
      "!type": "fn(index: number) -> +node.Node",
      "!doc": "Retrieves the Node instance at the given index."
     },
     "each": {
      "!type": "fn(fn: fn(), context: +yui.Object) -> !this",
      "!doc": "Applies the given function to each Node in the NodeList."
     },
     "some": {
      "!type": "fn(fn: fn(), context: +yui.Object) -> bool",
      "!doc": "Executes the function once for each node until a true value is returned."
     },
     "toFrag": {
      "!type": "fn() -> +node.Node",
      "!doc": "Creates a documenFragment from the nodes bound to the NodeList instance"
     },
     "indexOf": {
      "!type": "fn(node: +node.Node) -> number",
      "!doc": "Returns the index of the node in the NodeList instance\nor -1 if the node isnt found."
     },
     "filter": {
      "!type": "fn(selector: string) -> +node.NodeList",
      "!doc": "Filters the NodeList instance down to only nodes matching the given selector."
     },
     "modulus": {
      "!type": "fn(n: number, r: number) -> +node.NodeList",
      "!doc": "Creates a new NodeList containing all nodes at every n indices, where\nremainder n % index equals r.\n(zero-based index)."
     },
     "odd": {
      "!type": "fn() -> +node.NodeList",
      "!doc": "Creates a new NodeList containing all nodes at odd indices\n(zero-based index)."
     },
     "even": {
      "!type": "fn() -> +node.NodeList",
      "!doc": "Creates a new NodeList containing all nodes at even indices\n(zero-based index), including zero."
     },
     "refresh": {
      "!type": "fn() -> !this",
      "!doc": "Reruns the initial query, when created using a selector query"
     },
     "size": {
      "!type": "fn() -> number",
      "!doc": "Returns the current number of items in the NodeList."
     },
     "isEmpty": {
      "!type": "fn() -> bool",
      "!doc": "Determines if the instance is bound to any nodes"
     },
     "getDOMNodes": {
      "!type": "fn() -> +yui.Array",
      "!doc": "Returns the DOM node bound to the Node instance"
     },
     "destroy": {
      "!type": "fn(recursivePurge: bool)",
      "!doc": "Called on each Node instance. Nulls internal node references,\nremoves any plugins and event listeners"
     },
     "empty": {
      "!type": "fn() -> !this",
      "!doc": "Called on each Node instance. Removes and destroys all of the nodes\nwithin the node"
     },
     "remove": {
      "!type": "fn(destroy: bool) -> !this",
      "!doc": "Called on each Node instance. Removes the node from its parent.\nShortcut for myNode.get(parentNode).removeChild(myNode);"
     },
     "set": {
      "!type": "fn(attr: string, val: ?) -> !this",
      "!doc": "Called on each Node instance. Sets an attribute on the Node instance.\nUnless pre-configured (via Node.ATTRS), set hands\noff to the underlying DOM node.  Only valid\nattributes/properties for the node will be set.\nTo set custom attributes use setAttribute."
     },
     "get": {
      "!type": "fn()"
     },
     "transition": {
      "!type": "fn(config: +yui.Object, callback: fn(), callbackOnce: bool) -> !this",
      "!doc": "Animate one or more css properties to a given value. Requires the \"transition\" module.\n<pre>example usage:\n    Y.all(.demo).transition({\n        duration: 1, // in seconds, default is 0.5\n        easing: ease-out, // default is ease\n        delay: 1, // delay start for 1 second, default is 0\n\n        height: 10px,\n        width: 10px,\n\n        opacity: { // per property\n            value: 0,\n            duration: 2,\n            delay: 2,\n            easing: ease-in\n        }\n    });\n</pre>"
     }
    },
    "getDOMNodes": {
     "!type": "fn(nodelist: +node.NodeList) -> +yui.Array",
     "!doc": "Retrieves the DOM nodes bound to a NodeList instance"
    }
   }
  },
  "shim_plugin": {
   "Plugin": {
    "Shim": {
     "!type": "fn(User: +yui.Object)",
     "CLASS_NAME": {
      "!type": "string",
      "!doc": "Default class used to mark the shim element"
     },
     "TEMPLATE": {
      "!type": "string",
      "!doc": "Default markup template used to generate the shim element."
     },
     "prototype": {
      "sync": {
       "!type": "fn()",
       "!doc": "Updates the size of the shim to fill its container"
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Removes the shim and destroys the plugin"
      }
     }
    }
   }
  },
  "datatype_number": {
   "Number": {
    "!type": "fn()",
    "prototype": {
     "format": {
      "!type": "fn(data: number, config: +yui.Object) -> string",
      "!doc": "Takes a Number and formats to string for display to user."
     },
     "parse": {
      "!type": "fn(data: string, config?: +yui.Object) -> number",
      "!doc": "Converts data to type Number.\nIf a `config` argument is used, it will strip the `data` of the prefix,\nthe suffix and the thousands separator, if any of them are found,\nreplace the decimal separator by a dot and parse the resulting string.\nExtra whitespace around the prefix and suffix will be ignored."
     }
    }
   }
  },
  "paginator": {
   "Paginator": {
    "!type": "fn()",
    "prototype": {
     "page": {
      "!type": "number",
      "!doc": "Current page count. First page is 1."
     },
     "totalPages": {
      "!type": "number",
      "!doc": "Total number of pages to display"
     },
     "itemsPerPage": {
      "!type": "number",
      "!doc": "Maximum number of items per page. A value of negative one (-1) indicates\n    all items on one page."
     },
     "totalItems": {
      "!type": "number",
      "!doc": "Total number of items in all pages."
     },
     "prevPage": {
      "!type": "fn() -> !this",
      "!doc": "Sets the page to the previous page in the set, if there is a previous page."
     },
     "nextPage": {
      "!type": "fn() -> !this",
      "!doc": "Sets the page to the next page in the set, if there is a next page."
     },
     "hasPrevPage": {
      "!type": "fn() -> bool",
      "!doc": "Returns True if there is a previous page in the set."
     },
     "hasNextPage": {
      "!type": "fn() -> bool",
      "!doc": "Returns True if there is a next page in the set.\n\nIf totalItems isnt set, assume there is always next page."
     }
    },
    "Url": {
     "!type": "fn()",
     "prototype": {
      "pageUrl": {
       "!type": "string",
       "!doc": "URL to return formatted with the page number. URL uses `Y.Lang.sub` for page number stubstitutions.\n\nFor example, if the page number is `3`, setting the `pageUrl` to `\"?pg={page}\"`, will result in `?pg=3`"
      },
      "prevPageUrl": {
       "!type": "fn() -> string",
       "!doc": "Returns a formated URL for the previous page."
      },
      "nextPageUrl": {
       "!type": "fn() -> string",
       "!doc": "Returns a formated URL for the next page."
      },
      "formatPageUrl": {
       "!type": "fn(page?: number) -> string",
       "!doc": "Returns a formated URL for the provided page number."
      }
     }
    }
   }
  },
  "panel": {
   "Panel": {
    "!type": "fn() -> +panel.Panel",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "BUTTONS": {
      "!type": "+yui.Object",
      "!doc": "Collection of predefined buttons mapped from name => config.\n\nPanel includes a \"close\" button which can be use by name. When the close\nbutton is in the header (which is the default), it will look like: [x].\n\nSee `addButton()` for a list of possible configuration values."
     }
    }
   }
  },
  "parallel": {
   "Parallel": {
    "!type": "fn(o: +yui.Object)",
    "prototype": {
     "results": {
      "!type": "+yui.Array",
      "!doc": "An Array of results from all the callbacks in the stack"
     },
     "total": {
      "!type": "number",
      "!doc": "The total items in the stack"
     },
     "finished": {
      "!type": "number",
      "!doc": "The number of stacked callbacks executed"
     },
     "add": {
      "!type": "fn(fn: fn())",
      "!doc": "Add a callback to the stack"
     },
     "test": {
      "!type": "fn()",
      "!doc": "Test to see if all registered items in the stack have completed, if so call the callback to `done`"
     },
     "done": {
      "!type": "fn(callback: fn(results: +Mixed, data?: +Mixed), data: +Mixed)",
      "!doc": "The method to call when all the items in the stack are complete."
     }
    }
   }
  },
  "pjax": {
   "PjaxBase": {
    "!type": "fn()",
    "prototype": {
     "navigate": {
      "!type": "fn(url: string, options?: +yui.Object) -> bool",
      "!doc": "Navigates to the specified URL if there is a route handler that matches. In\nbrowsers capable of using HTML5 history, the navigation will be enhanced by\nfiring the `navigate` event and having the router handle the \"request\".\nNon-HTML5 browsers will navigate to the new URL via manipulation of\n`window.location`.\n\nWhen there is a route handler for the specified URL and it is being\nnavigated to, this method will return `true`, otherwise it will return\n`false`.\n\n**Note:** The specified URL _must_ be of the same origin as the current URL,\notherwise an error will be logged and navigation will not occur. This is\nintended as both a security constraint and a purposely imposed limitation as\nit does not make sense to tell the router to navigate to a URL on a\ndifferent scheme, host, or port."
     },
     "linkSelector": {
      "!type": "string",
      "!doc": "CSS selector string used to filter link click events so that only the links\nwhich match it will have the enhanced navigation behavior of Pjax applied.\n\nWhen a link is clicked and that link matches this selector, Pjax will\nattempt to dispatch to any route handlers matching the links `href` URL. If\nHTML5 history is not supported or if no route handlers match, the link click\nwill be handled by the browser just like any old link."
     },
     "navigateOnHash": {
      "!type": "bool",
      "!doc": "Whether navigating to a hash-fragment identifier on the current page should\nbe enhanced and cause the `navigate` event to fire.\n\nBy default Pjax allows the browser to perform its default action when a user\nis navigating within a page by clicking in-page links\n(e.g. `<a href=\"#top\">Top of page</a>`) and does not attempt to interfere or\nenhance in-page navigation."
     },
     "scrollToTop": {
      "!type": "bool",
      "!doc": "Whether the page should be scrolled to the top after navigating to a URL.\n\nWhen the user clicks the browsers back button, the previous scroll position\nwill be maintained."
     }
    }
   },
   "PjaxContent": {
    "!type": "fn()",
    "prototype": {
     "getContent": {
      "!type": "fn(responseText: string) -> +yui.Object",
      "!doc": "Extracts and returns the relevant HTML content from an Ajax response. The\ncontent is extracted using the `contentSelector` attribute as a CSS\nselector. If `contentSelector` is `null`, the entire response will be\nreturned.\n\nThe return value is an object containing two properties:\n\n  * `node`: A `Y.Node` instance for a document fragment containing the\n    extracted HTML content.\n\n  * `title`: The title of the HTML page, if any, extracted using the\n    `titleSelector` attribute (which defaults to looking for a `<title>`\n    element). If `titleSelector` is not set or if a title could not be\n    found, this property will be `undefined`."
     },
     "loadContent": {
      "!type": "fn(req: +yui.Object, res: +yui.Object, next: fn())",
      "!doc": "Pjax route middleware to load content from a server. This makes an Ajax\nrequest for the requested URL, parses the returned content and puts it on\nthe routes response object.\n\nThis is route middleware and not intended to be the final callback for a\nroute. This will add the following information to the routes request and\nresponse objects:\n\n  - `req.ioURL`: The full URL that was used to make the `Y.io()` XHR. This\n    may contain `\"pjax=1\"` if the `addPjaxParam` option is set.\n\n  - `res.content`: An object containing `node` and `title` properties for\n    the content extracted from the servers response. See `getContent()` for\n    more details.\n\n  - `res.ioResponse`: The full `Y.io()` response object. This is useful if\n    you need access to the XHRs response `status` or HTTP headers."
     },
     "addPjaxParam": {
      "!type": "bool",
      "!doc": "If `true`, a \"pjax=1\" query parameter will be appended to all URLs\nrequested via Pjax.\n\nBrowsers ignore HTTP request headers when caching content, so if the\nsame URL is used to request a partial Pjax page and a full page, the\nbrowser will cache them under the same key and may later load the\ncached partial page when the user actually requests a full page (or vice\nversa).\n\nTo prevent this, we can add a bogus query parameter to the URL so that\nPjax URLs will always be cached separately from non-Pjax URLs."
     },
     "contentSelector": {
      "!type": "string",
      "!doc": "CSS selector used to extract a specific portion of the content of a page\nloaded via Pjax.\n\nFor example, if you wanted to load the page `example.html` but only use\nthe content within an element with the id \"pjax-content\", youd set\n`contentSelector` to \"#pjax-content\".\n\nIf not set, the entire page will be used."
     },
     "titleSelector": {
      "!type": "string",
      "!doc": "CSS selector used to extract a page title from the content of a page\nloaded via Pjax.\n\nBy default this is set to extract the title from the `<title>` element,\nbut you could customize it to extract the title from an `<h1>`, or from\nany other element, if thats more appropriate for the content youre\nloading."
     },
     "timeout": {
      "!type": "number",
      "!doc": "Time in milliseconds after which an Ajax request should time out."
     }
    }
   },
   "Pjax": {
    "!type": "fn(config?: +yui.Object) -> +pjax.Pjax",
    "prototype": {
     "!proto": "app.Router.prototype",
     "container": {
      "!type": "+node.Node",
      "!doc": "Node into which content should be inserted when a page is loaded via\nPjax. This nodes existing contents will be removed to make way for the\nnew content.\n\nIf not set, loaded content will not be automatically inserted into the\npage."
     }
    },
    "defaultRoute": {
     "!type": "+yui.Array",
     "!doc": "A stack of middleware which forms the default Pjax route."
    }
   }
  },
  "plugin": {
   "Plugin": {
    "Base": {
     "!type": "fn(config: +yui.Object)",
     "prototype": {
      "!proto": "base.Base.prototype",
      "host": {
       "!type": "+pluginhost_base.Plugin.Host",
       "!doc": "The plugins host object."
      },
      "initializer": {
       "!type": "fn(config: +yui.Object)",
       "!doc": "Initializer lifecycle implementation."
      },
      "destructor": {
       "!type": "fn()",
       "!doc": "Destructor lifecycle implementation.\n\nRemoves any event listeners or injected methods applied by the Plugin"
      },
      "doBefore": {
       "!type": "fn(strMethod: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
       "!doc": "Listens for the \"on\" moment of events fired by the host,\nor injects code \"before\" a given method on the host."
      },
      "doAfter": {
       "!type": "fn(strMethod: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
       "!doc": "Listens for the \"after\" moment of events fired by the host,\nor injects code \"after\" a given method on the host."
      },
      "onHostEvent": {
       "!type": "fn(type: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
       "!doc": "Listens for the \"on\" moment of events fired by the host object.\n\nListeners attached through this method will be detached when the plugin is unplugged."
      },
      "onceHostEvent": {
       "!type": "fn(type: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
       "!doc": "Listens for the \"on\" moment of events fired by the host object one time only.\nThe listener is immediately detached when it is executed.\n\nListeners attached through this method will be detached when the plugin is unplugged."
      },
      "afterHostEvent": {
       "!type": "fn(type: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
       "!doc": "Listens for the \"after\" moment of events fired by the host object.\n\nListeners attached through this method will be detached when the plugin is unplugged."
      },
      "onceAfterHostEvent": {
       "!type": "fn(type: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
       "!doc": "Listens for the \"after\" moment of events fired by the host object one time only.\nThe listener is immediately detached when it is executed.\n\nListeners attached through this method will be detached when the plugin is unplugged."
      },
      "beforeHostMethod": {
       "!type": "fn(method: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
       "!doc": "Injects a function to be executed before a given method on host object.\n\nThe function will be detached when the plugin is unplugged."
      },
      "afterHostMethod": {
       "!type": "fn(method: string, fn: fn(), context: +yui.Object) -> +event_custom.EventHandle",
       "!doc": "Injects a function to be executed after a given method on host object.\n\nThe function will be detached when the plugin is unplugged."
      }
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Object defining the set of attributes supported by the Plugin.Base class"
     },
     "NAME": {
      "!type": "string",
      "!doc": "The string identifying the Plugin.Base class. Plugins extending\nPlugin.Base should set their own NAME value."
     },
     "NS": {
      "!type": "string",
      "!doc": "The name of the property the the plugin will be attached to\nwhen plugged into a Plugin Host. Plugins extending Plugin.Base,\nshould set their own NS value."
     }
    }
   }
  },
  "pluginhost_base": {
   "Plugin": {
    "Host": {
     "!type": "fn()",
     "prototype": {
      "plug": {
       "!type": "fn(P: fn(), config: ?) -> !this",
       "!doc": "Adds a plugin to the host object. This will instantiate the\nplugin and attach it to the configured namespace on the host object."
      },
      "unplug": {
       "!type": "fn(plugin: string) -> !this",
       "!doc": "Removes a plugin from the host object. This will destroy the\nplugin instance and delete the namespace from the host object."
      },
      "hasPlugin": {
       "!type": "fn(ns: string) -> +Plugin",
       "!doc": "Determines if a plugin has plugged into this host."
      }
     },
     "plug": {
      "!type": "fn(hostClass: fn(), plugin: fn(), config: +yui.Object)",
      "!doc": "Registers plugins to be instantiated at the class level (plugins\nwhich should be plugged into every instance of the class by default)."
     },
     "unplug": {
      "!type": "fn(hostClass: fn(), plugin: fn())",
      "!doc": "Unregisters any class level plugins which have been registered by the host class, or any\nother class in the hierarchy."
     }
    }
   }
  },
  "promise": {
   "Promise": {
    "!type": "fn(fn: fn()) -> +promise.Promise",
    "prototype": {
     "then": {
      "!type": "fn(callback?: fn(), errback?: fn()) -> +promise.Promise",
      "!doc": "Schedule execution of a callback to either or both of \"fulfill\" and\n\"reject\" resolutions for this promise. The callbacks are wrapped in a new\npromise and that promise is returned.  This allows operation chaining ala\n`functionA().then(functionB).then(functionC)` where `functionA` returns\na promise, and `functionB` and `functionC` _may_ return promises.\n\nAsynchronicity of the callbacks is guaranteed."
     },
     "getStatus": {
      "!type": "fn() -> string",
      "!doc": "Returns the current status of the operation. Possible results are\n\"pending\", \"fulfilled\", and \"rejected\"."
     }
    },
    "isPromise": {
     "!type": "fn(obj: ?) -> bool",
     "!doc": "Checks if an object or value is a promise. This is cross-implementation\ncompatible, so promises returned from other libraries or native components\nthat are compatible with the Promises A+ spec should be recognized by this\nmethod."
    },
    "Resolver": {
     "!type": "fn(promise: +promise.Promise) -> +promise.Promise.Resolver",
     "prototype": {
      "promise": {
       "!type": "+promise.Promise",
       "!doc": "The promise for this Resolver."
      },
      "fulfill": {
       "!type": "fn(value: ?)",
       "!doc": "Resolves the promise, signaling successful completion of the\nrepresented operation. All \"onFulfilled\" subscriptions are executed and passed\nthe value provided to this method. After calling `fulfill()`, `reject()` and\n`notify()` are disabled."
      },
      "reject": {
       "!type": "fn(value: ?)",
       "!doc": "Resolves the promise, signaling *un*successful completion of the\nrepresented operation. All \"onRejected\" subscriptions are executed with\nthe value provided to this method. After calling `reject()`, `resolve()`\nand `notify()` are disabled."
      },
      "then": {
       "!type": "fn(callback?: fn(), errback?: fn()) -> +promise.Promise",
       "!doc": "Schedule execution of a callback to either or both of \"resolve\" and\n\"reject\" resolutions for the Resolver.  The callbacks\nare wrapped in a new Resolver and that Resolvers corresponding promise\nis returned.  This allows operation chaining ala\n`functionA().then(functionB).then(functionC)` where `functionA` returns\na promise, and `functionB` and `functionC` _may_ return promises."
      },
      "getStatus": {
       "!type": "fn() -> string",
       "!doc": "Returns the current status of the Resolver as a string \"pending\",\n\"fulfilled\", or \"rejected\"."
      }
     }
    }
   }
  },
  "querystring": {
   "QueryString": {
    "!type": "fn()",
    "parse": {
     "!type": "fn(qs: string, sep: string, eq: string)",
     "!doc": "Accept Query Strings and return native JavaScript objects."
    },
    "unescape": {
     "!type": "fn(s: string)",
     "!doc": "Provides Y.QueryString.unescape method to be able to override default decoding\nmethod.  This is important in cases where non-standard delimiters are used, if\nthe delimiters would not normally be handled properly by the builtin\n(en|de)codeURIComponent functions.\nDefault: replace \"+\" with \" \", and then decodeURIComponent behavior."
    },
    "escape": {
     "!type": "fn()",
     "!doc": "Provides Y.QueryString.escape method to be able to override default encoding\nmethod.  This is important in cases where non-standard delimiters are used, if\nthe delimiters would not normally be handled properly by the builtin\n(en|de)codeURIComponent functions.\nDefault: encodeURIComponent"
    },
    "stringify": {
     "!type": "fn(obj: ?, cfg: +yui.Object, name: string)",
     "!doc": "<p>Converts an arbitrary value to a Query String representation.</p>\n\n<p>Objects with cyclical references will trigger an exception.</p>"
    }
   }
  },
  "queue_promote": {
   "Record": {
    "!type": "fn()",
    "prototype": {
     "getValue": {
      "!type": "fn(field: string)",
      "!doc": "Retrieve a particular (or all) values from the object"
     },
     "id": {
      "!type": "string",
      "!doc": "Unique ID of the record instance"
     },
     "data": {
      "!type": "+object",
      "!doc": "The object stored within the record instance"
     }
    }
   }
  },
  "recordset": {
   "Recordset": {
    "!type": "fn(config: +yui.Object) -> +recordset.Recordset",
    "prototype": {
     "!proto": "base.Base.prototype",
     "getRecord": {
      "!type": "fn(i: +String, Number) -> +queue_promote.Record",
      "!doc": "Returns the record with particular ID or index"
     },
     "getRecordByIndex": {
      "!type": "fn(i: number) -> +queue_promote.Record",
      "!doc": "Returns the record at a particular index"
     },
     "getRecordsByIndex": {
      "!type": "fn(index: number, range: number) -> +yui.Array",
      "!doc": "Returns a range of records beginning at particular index"
     },
     "getLength": {
      "!type": "fn() -> number",
      "!doc": "Returns the length of the recordset"
     },
     "getValuesByKey": {
      "!type": "fn(key?: string) -> +yui.Array",
      "!doc": "Gets an array of values for a data _key_ in the sets records.  If no _key_\nis supplied, the returned array will contain the full data object for each\nrecord."
     },
     "add": {
      "!type": "fn(oData: +queue_promote.Record, index?: number) -> +recordset.Recordset",
      "!doc": "Adds one or more Records to the RecordSet at the given index. If index is null, then adds the Records to the end of the RecordSet."
     },
     "remove": {
      "!type": "fn(index?: number, range?: number) -> +recordset.Recordset",
      "!doc": "Removes one or more Records to the RecordSet at the given index. If index\nis null, then removes a single Record from the end of the RecordSet."
     },
     "empty": {
      "!type": "fn() -> +recordset.Recordset",
      "!doc": "Empties the recordset"
     },
     "update": {
      "!type": "fn(data: +queue_promote.Record, index?: number) -> +recordset.Recordset",
      "!doc": "Updates the recordset with the new records passed in. Overwrites existing\nrecords when updating the index with the new records."
     },
     "_setRecords": {
      "!type": "fn(items: [+queue_promote.Record]) -> [+queue_promote.Record]",
      "!doc": "Ensures the value being set is an array of Record instances. If array items\nare raw object data, they are turned into Records."
     },
     "records": {
      "!type": "[+queue_promote.Record]",
      "!doc": "An array of Records that the Recordset is storing.  Passing an array\nof raw record data is also accepted.  The data for each item will be\nwrapped in a Record instance."
     },
     "table": {
      "!type": "+object",
      "!doc": "A hash table where the ID of the record is the key, and the record\ninstance is the value."
     },
     "key": {
      "!type": "string",
      "!doc": "The ID to use as the key in the hash table."
     }
    }
   },
   "RecordsetFilter": {
    "!type": "fn()",
    "prototype": {
     "filter": {
      "!type": "fn(filter: fn(), value?: ?) -> +recordset.Recordset",
      "!doc": "Filter through the recordset with a custom filter function, or a key-value\npair."
     },
     "reject": {
      "!type": "fn(filter: fn()) -> +recordset.Recordset",
      "!doc": "The inverse of filter. Executes the supplied function on each item. Returns\na new Recordset containing the items that the supplied function returned\n`false` for."
     },
     "grep": {
      "!type": "fn(pattern: +RegExp) -> +recordset.Recordset",
      "!doc": "Iterates over the Recordset, returning a new Recordset of all the elements\nthat match the supplied regular expression"
     }
    }
   },
   "RecordsetIndexer": {
    "!type": "fn()",
    "prototype": {
     "hashTables": {
      "!type": "+object",
      "!doc": "Collection of all the hashTables created by the plugin.\nThe individual tables can be accessed by the key they are hashing against."
     },
     "createTable": {
      "!type": "fn(key: string) -> +yui.Object",
      "!doc": "Creates a new hash table."
     },
     "getTable": {
      "!type": "fn(key: string) -> +yui.Object",
      "!doc": "Get a hash table that hashes records by a given key."
     }
    }
   },
   "RecordsetSort": {
    "!type": "fn()",
    "prototype": {
     "lastSortProperties": {
      "!type": "+object",
      "!doc": "The last properties used to sort. Consists of an object literal with the keys \"field\", \"desc\", and \"sorter\""
     },
     "defaultSorter": {
      "!type": "fn()",
      "!doc": "A boolean telling if the recordset is in a sorted state."
     },
     "sort": {
      "!type": "fn(field: string, desc: bool)",
      "!doc": "Sorts the recordset."
     },
     "resort": {
      "!type": "fn()",
      "!doc": "Resorts the recordset based on the last-used sort parameters (stored in lastSortProperties ATTR)"
     },
     "reverse": {
      "!type": "fn()",
      "!doc": "Reverses the recordset calling the standard array.reverse() method."
     },
     "flip": {
      "!type": "fn()",
      "!doc": "Sorts the recordset based on the last-used sort parameters, but flips the order. (ie: Descending becomes ascending, and vice versa)."
     }
    }
   }
  },
  "resize": {
   "Resize": {
    "!type": "fn(config: +yui.Object) -> +resize.Resize",
    "prototype": {
     "!proto": "base.Base.prototype",
     "autoHide": {
      "!type": "bool",
      "!doc": "False to ensure that the resize handles are always visible, true to\ndisplay them only when the user mouses over the resizable borders."
     },
     "defMinHeight": {
      "!type": "number",
      "!doc": "The default minimum height of the element. Only used when\nResizeConstrained is not plugged."
     },
     "defMinWidth": {
      "!type": "number",
      "!doc": "The default minimum width of the element. Only used when\nResizeConstrained is not plugged."
     },
     "handles": {
      "!type": "+yui.Array",
      "!doc": "The handles to use (any combination of): t, b, r, l, bl,\nbr, tl, tr. Can use a shortcut of All."
     },
     "handlesWrapper": {
      "!type": "+node.Node",
      "!doc": "Node to wrap the resize handles."
     },
     "node": {
      "!type": "+node.Node",
      "!doc": "The selector or element to resize. Required."
     },
     "resizing": {
      "!type": "bool",
      "!doc": "True when the element is being Resized."
     },
     "wrap": {
      "!type": "bool",
      "!doc": "True to wrap an element with a div if needed (required for textareas\nand images, defaults to false) in favor of the handles config option.\nThe wrapper element type (default div) could be over-riden passing the\n<code>wrapper</code> attribute."
     },
     "wrapTypes": {
      "!type": "+Regex",
      "!doc": "Elements that requires a wrapper by default. Normally are elements\nwhich cannot have children elements."
     },
     "wrapper": {
      "!type": "string",
      "!doc": "Element to wrap the <code>wrapTypes</code>. This element will house\nthe handles elements."
     },
     "ALL_HANDLES": {
      "!type": "string",
      "!doc": "Array containing all possible resizable handles."
     },
     "REGEX_CHANGE_HEIGHT": {
      "!type": "string",
      "!doc": "Regex which matches with the handles that could change the height of\nthe resizable element."
     },
     "REGEX_CHANGE_LEFT": {
      "!type": "string",
      "!doc": "Regex which matches with the handles that could change the left of\nthe resizable element."
     },
     "REGEX_CHANGE_TOP": {
      "!type": "string",
      "!doc": "Regex which matches with the handles that could change the top of\nthe resizable element."
     },
     "REGEX_CHANGE_WIDTH": {
      "!type": "string",
      "!doc": "Regex which matches with the handles that could change the width of\nthe resizable element."
     },
     "HANDLES_WRAP_TEMPLATE": {
      "!type": "string",
      "!doc": "Template used to create the resize wrapper for the handles."
     },
     "WRAP_TEMPLATE": {
      "!type": "string",
      "!doc": "Template used to create the resize wrapper node when needed."
     },
     "HANDLE_TEMPLATE": {
      "!type": "string",
      "!doc": "Template used to create each resize handle."
     },
     "totalHSurrounding": {
      "!type": "number",
      "!doc": "Each box has a content area and optional surrounding padding and\nborder areas. This property stores the sum of all horizontal\nsurrounding * information needed to adjust the node height."
     },
     "totalVSurrounding": {
      "!type": "number",
      "!doc": "Each box has a content area and optional surrounding padding and\nborder areas. This property stores the sum of all vertical\nsurrounding * information needed to adjust the node height."
     },
     "nodeSurrounding": {
      "!type": "+yui.Object",
      "!doc": "Stores the <a href=\"Resize.html#attr_node\">node</a>\nsurrounding information retrieved from\n<a href=\"Resize.html#method__getBoxSurroundingInfo\">_getBoxSurroundingInfo</a>."
     },
     "wrapperSurrounding": {
      "!type": "+yui.Object",
      "!doc": "Stores the <a href=\"Resize.html#attr_wrapper\">wrapper</a>\nsurrounding information retrieved from\n<a href=\"Resize.html#method__getBoxSurroundingInfo\">_getBoxSurroundingInfo</a>."
     },
     "changeHeightHandles": {
      "!type": "bool",
      "!doc": "Whether the handle being dragged can change the height."
     },
     "changeLeftHandles": {
      "!type": "bool",
      "!doc": "Whether the handle being dragged can change the left."
     },
     "changeTopHandles": {
      "!type": "bool",
      "!doc": "Whether the handle being dragged can change the top."
     },
     "changeWidthHandles": {
      "!type": "bool",
      "!doc": "Whether the handle being dragged can change the width."
     },
     "delegate": {
      "!type": "+yui.Object",
      "!doc": "Store DD.Delegate reference for the respective Resize instance."
     },
     "eachHandle": {
      "!type": "fn(fn: fn())",
      "!doc": "<p>Loop through each handle which is being used and executes a callback.</p>\n<p>Example:</p>\n<pre><code>instance.eachHandle(\n     function(handleName, index) { ... }\n );</code></pre>"
     }
    },
    "NAME": {
     "!type": "string",
     "!doc": "Static property provides a string to identify the class."
    },
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "Static property used to define the default attribute\nconfiguration for the Resize."
    }
   },
   "Plugin": {
    "ResizeConstrained": {
     "!type": "fn()",
     "prototype": {
      "constrain": {
       "!type": "string",
       "!doc": "Will attempt to constrain the resize node to the boundaries. Arguments:<br>\nview: Contrain to Viewport<br>\n#selector_string: Constrain to this node<br>\n{Region Object}: An Object Literal containing a valid region (top, right, bottom, left) of page positions"
      },
      "minHeight": {
       "!type": "number",
       "!doc": "The minimum height of the element"
      },
      "minWidth": {
       "!type": "number",
       "!doc": "The minimum width of the element"
      },
      "maxHeight": {
       "!type": "number",
       "!doc": "The maximum height of the element"
      },
      "maxWidth": {
       "!type": "number",
       "!doc": "The maximum width of the element"
      },
      "preserveRatio": {
       "!type": "bool",
       "!doc": "Maintain the elements ratio when resizing."
      },
      "tickX": {
       "!type": "number",
       "!doc": "The number of x ticks to span the resize to."
      },
      "tickY": {
       "!type": "number",
       "!doc": "The number of y ticks to span the resize to."
      },
      "constrainSurrounding": {
       "!type": "+yui.Object",
       "!doc": "Stores the <code>constrain</code>\nsurrounding information retrieved from\n<a href=\"Resize.html#method__getBoxSurroundingInfo\">_getBoxSurroundingInfo</a>."
      }
     }
    },
    "Resize": {
     "!type": "fn()",
     "prototype": {
      "!proto": "resize.Resize.prototype",
      "NAME": {
       "!type": "string",
       "!doc": "resize-plugin"
      },
      "NS": {
       "!type": "string",
       "!doc": "The Resize instance will be placed on the Node instance under\nthe resize namespace. It can be accessed via Node.resize or Widget.resize;"
      },
      "node": {
       "!type": "?",
       "!doc": "Stores the node that is being resized"
      },
      "widget": {
       "!type": "?",
       "!doc": "Stores the widget that the node belongs to, if one exists"
      }
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Resize plugin."
     }
    },
    "ResizeProxy": {
     "!type": "fn() -> +resize.Plugin.ResizeProxy",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "proxyNode": {
       "!type": "string",
       "!doc": "The Resize proxy element."
      },
      "PROXY_TEMPLATE": {
       "!type": "string",
       "!doc": "Template used to create the resize proxy."
      }
     }
    }
   }
  },
  "scrollview_list": {
   "Plugin": {
    "ScrollViewList": {
     "!type": "fn() -> +scrollview_list.Plugin.ScrollViewList",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "isAttached": {
       "!type": "bool",
       "!doc": "Specifies whether the list elements (the immediate <ul>s and the\n immediate <li>s inside those <ul>s) have class names attached to\n them or not"
      },
      "initializer": {
       "!type": "fn()",
       "!doc": "Designated initializer"
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "The identity of the plugin"
     },
     "NS": {
      "!type": "string",
      "!doc": "The namespace on which the plugin will reside."
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "The default attribute configuration for the plugin"
     }
    }
   }
  },
  "scrollview_paginator": {
   "Plugin": {
    "ScrollViewPaginator": {
     "!type": "fn() -> +scrollview_paginator.Plugin.ScrollViewPaginator",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "initializer": {
       "!type": "fn(Configuration: +yui.Object)",
       "!doc": "Designated initializer"
      },
      "next": {
       "!type": "fn()",
       "!doc": "Scroll to the next page, with animation"
      },
      "prev": {
       "!type": "fn()",
       "!doc": "Scroll to the previous page, with animation"
      },
      "scrollTo": {
       "!type": "fn()",
       "!doc": "Deprecated for 3.7.0."
      },
      "scrollToIndex": {
       "!type": "fn(index: number, duration?: number, easing?: string)",
       "!doc": "Scroll to a given page in the scrollview"
      },
      "axis": {
       "!type": "string",
       "!doc": "Specifies ability to scroll on x, y, or x and y axis/axes.\n If unspecified, it inherits from the host instance."
      },
      "selector": {
       "!type": "string",
       "!doc": "CSS selector for a page inside the scrollview. The scrollview\nwill snap to the closest page."
      },
      "index": {
       "!type": "number",
       "!doc": "The active page number for a paged scrollview"
      },
      "total": {
       "!type": "number",
       "!doc": "The total number of pages"
      }
     },
     "NS": {
      "!type": "string",
      "!doc": "The namespace on which the plugin will reside"
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "The default attribute configuration for the plugin"
     },
     "SNAP_TO_CURRENT": {
      "!type": "?",
      "!doc": "The default snap to current duration and easing values used on scroll end."
     }
    }
   }
  },
  "scrollview": {
   "Plugin": {
    "ScrollViewScrollbars": {
     "!type": "fn() -> +scrollview.Plugin.ScrollViewScrollbars",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "verticalNode": {
       "!type": "+Y.Node",
       "!doc": "Vertical scrollbar node"
      },
      "horizontalNode": {
       "!type": "+Y.Node",
       "!doc": "Horizontal scrollbar node"
      },
      "initializer": {
       "!type": "fn()",
       "!doc": "Designated initializer"
      },
      "show": {
       "!type": "fn(animated: bool)",
       "!doc": "Show the scroll bar indicators"
      },
      "hide": {
       "!type": "fn(animated: bool)",
       "!doc": "Hide the scroll bar indicators"
      },
      "flash": {
       "!type": "fn()",
       "!doc": "Momentarily flash the scroll bars to indicate current scroll position"
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "The identity of the plugin"
     },
     "NS": {
      "!type": "string",
      "!doc": "The namespace on which the plugin will reside."
     },
     "SCROLLBAR_TEMPLATE": {
      "!type": "+yui.Object",
      "!doc": "HTML template for the scrollbar"
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "The default attribute configuration for the plugin"
     }
    }
   },
   "ScrollView": {
    "!type": "fn(config: +yui.Object) -> +scrollview.ScrollView",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "lastScrolledAmt": {
      "!type": "number",
      "!doc": "Contains the distance (postive or negative) in pixels by which\n the scrollview was last scrolled. This is useful when setting up\n click listeners on the scrollview content, which on mouse based\n devices are always fired, even after a drag/flick.\n\n<p>Touch based devices dont currently fire a click event,\n if the finger has been moved (beyond a threshold) so this\n check isnt required, if working in a purely touch based environment</p>"
     },
     "initializer": {
      "!type": "fn(Configuration: +yui.Object)",
      "!doc": "Designated initializer"
     },
     "bindUI": {
      "!type": "fn()",
      "!doc": "bindUI implementation\n\nHooks up events for the widget"
     },
     "syncUI": {
      "!type": "fn()",
      "!doc": "syncUI implementation.\n\nUpdate the scroll position, based on the current value of scrollX/scrollY."
     },
     "scrollTo": {
      "!type": "fn(x: number, y: number, duration?: number, easing?: string, node?: string)",
      "!doc": "Scroll the element to a given xy coordinate"
     },
     "axis": {
      "!type": "string",
      "!doc": "Specifies ability to scroll on x, y, or x and y axis/axes."
     },
     "scrollX": {
      "!type": "number",
      "!doc": "The current scroll position in the x-axis"
     },
     "scrollY": {
      "!type": "number",
      "!doc": "The current scroll position in the y-axis"
     },
     "deceleration": {
      "!type": "?",
      "!doc": "Drag coefficent for inertial scrolling. The closer to 1 this\nvalue is, the less friction during scrolling."
     },
     "bounce": {
      "!type": "number",
      "!doc": "Drag coefficient for intertial scrolling at the upper\nand lower boundaries of the scrollview. Set to 0 to\ndisable \"rubber-banding\"."
     },
     "flick": {
      "!type": "+yui.Object",
      "!doc": "The minimum distance and/or velocity which define a flick. Can be set to false,\nto disable flick support (note: drag support is enabled/disabled separately)"
     },
     "drag": {
      "!type": "bool",
      "!doc": "Enable/Disable dragging the ScrollView content (note: flick support is enabled/disabled separately)"
     },
     "snapDuration": {
      "!type": "number",
      "!doc": "The default duration to use when animating the bounce snap back."
     },
     "snapEasing": {
      "!type": "string",
      "!doc": "The default easing to use when animating the bounce snap back."
     },
     "easing": {
      "!type": "string",
      "!doc": "The default easing used when animating the flick"
     },
     "frameDuration": {
      "!type": "number",
      "!doc": "The interval (ms) used when animating the flick for JS-timer animations"
     },
     "bounceRange": {
      "!type": "number",
      "!doc": "The default bounce distance in pixels"
     }
    },
    "CLASS_NAMES": {
     "!type": "+yui.Object",
     "!doc": "List of class names used in the scrollviews DOM"
    },
    "UI_SRC": {
     "!type": "string",
     "!doc": "Flag used to source property changes initiated from the DOM"
    },
    "BOUNCE_RANGE": {
     "!type": "number",
     "!doc": "The default bounce distance in pixels"
    },
    "FRAME_STEP": {
     "!type": "number",
     "!doc": "The interval (ms) used when animating the flick"
    },
    "EASING": {
     "!type": "string",
     "!doc": "The default easing used when animating the flick"
    },
    "SNAP_EASING": {
     "!type": "string",
     "!doc": "The default easing to use when animating the bounce snap back."
    },
    "SNAP_DURATION": {
     "!type": "number",
     "!doc": "The default duration to use when animating the bounce snap back."
    }
   }
  },
  "slider": {
   "ClickableRail": {
    "!type": "fn()",
    "prototype": {
     "clickableRail": {
      "!type": "bool",
      "!doc": "Enable or disable clickable rail support."
     }
    }
   },
   "SliderBase": {
    "!type": "fn(config: +yui.Object) -> +slider.SliderBase",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "rail": {
      "!type": "+node.Node",
      "!doc": "The Node instance of the Sliders rail element.  Do not write to\nthis property."
     },
     "thumb": {
      "!type": "+node.Node",
      "!doc": "The Node instance of the Sliders thumb element.  Do not write to\nthis property."
     },
     "renderRail": {
      "!type": "fn() -> +node.Node",
      "!doc": "Creates the Slider rail DOM subtree for insertion into the Sliders\n<code>contentBox</code>.  Override this method if you want to provide\nthe rail element (presumably from existing markup)."
     },
     "renderThumb": {
      "!type": "fn() -> +node.Node",
      "!doc": "Creates the Slider thumb DOM subtree for insertion into the Sliders\nrail.  Override this method if you want to provide the thumb element\n(presumably from existing markup)."
     },
     "syncUI": {
      "!type": "fn()",
      "!doc": "Synchronizes the DOM state with the attribute settings."
     },
     "BOUNDING_TEMPLATE": {
      "!type": "string",
      "!doc": "Bounding box template that will contain the Sliders DOM subtree.  &lt;span&gt;s are used to support inline-block styling."
     },
     "CONTENT_TEMPLATE": {
      "!type": "string",
      "!doc": "Content box template that will contain the Sliders rail and thumb."
     },
     "RAIL_TEMPLATE": {
      "!type": "string",
      "!doc": "Rail template that will contain the end caps and the thumb.\n{placeholder}s are used for template substitution at render time."
     },
     "THUMB_TEMPLATE": {
      "!type": "string",
      "!doc": "Thumb template that will contain the thumb image and shadow. &lt;img>\ntags are used instead of background images to avoid a flicker bug in IE.\n{placeholder}s are used for template substitution at render time."
     },
     "axis": {
      "!type": "string",
      "!doc": "Axis upon which the Sliders thumb moves.  &quot;x&quot; for\nhorizontal, &quot;y&quot; for vertical."
     },
     "length": {
      "!type": "string",
      "!doc": "The length of the rail (exclusive of the end caps if positioned by\nCSS).  This corresponds to the movable range of the thumb."
     },
     "thumbUrl": {
      "!type": "string",
      "!doc": "Path to the thumb image.  This will be used as both the thumb and\nshadow as a sprite.  Defaults at render() to thumb-x.png or\nthumb-y.png in the skin directory of the current skin."
     }
    }
   },
   "SliderValueRange": {
    "!type": "fn()",
    "prototype": {
     "getValue": {
      "!type": "fn() -> number",
      "!doc": "Returns the current value.  Override this if you want to introduce\noutput formatting. Otherwise equivalent to slider.get( \"value\" );"
     },
     "setValue": {
      "!type": "fn(val: number) -> !this",
      "!doc": "Updates the current value.  Override this if you want to introduce\ninput value parsing or preprocessing.  Otherwise equivalent to\nslider.set( \"value\", v );"
     },
     "min": {
      "!type": "number",
      "!doc": "The value associated with the farthest top, left position of the\nrail.  Can be greater than the configured <code>max</code> if you\nwant values to increase from right-to-left or bottom-to-top."
     },
     "max": {
      "!type": "number",
      "!doc": "The value associated with the farthest bottom, right position of\nthe rail.  Can be less than the configured <code>min</code> if\nyou want values to increase from right-to-left or bottom-to-top."
     },
     "minorStep": {
      "!type": "number",
      "!doc": "amount to increment/decrement the Slider value\nwhen the arrow up/down/left/right keys are pressed"
     },
     "majorStep": {
      "!type": "number",
      "!doc": "amount to increment/decrement the Slider value\nwhen the page up/down keys are pressed"
     },
     "value": {
      "!type": "number",
      "!doc": "The value associated with the thumbs current position on the\nrail. Defaults to the value inferred from the thumbs current\nposition. Specifying value in the constructor will move the\nthumb to the position that corresponds to the supplied value."
     }
    }
   }
  },
  "sortable": {
   "Sortable": {
    "!type": "fn() -> +sortable.Sortable",
    "prototype": {
     "!proto": "base.Base.prototype",
     "delegate": {
      "!type": "+dd.DD.Delegate",
      "!doc": "A reference to the DD.Delegate instance."
     },
     "drop": {
      "!type": "+dd.DD.Drop",
      "!doc": "A reference to the DD.Drop instance"
     },
     "plug": {
      "!type": "fn(Class: ?, Object: ?) -> !this",
      "!doc": "Passthrough to the DD.Delegate.ddplug method"
     },
     "sync": {
      "!type": "fn() -> !this",
      "!doc": "Passthrough to the DD.Delegate syncTargets method."
     },
     "join": {
      "!type": "fn(Sortable: ?, String: ?) -> !this",
      "!doc": "Join this Sortable with another Sortable instance.\n<ul>\n  <li>full: Exchange nodes with both lists.</li>\n  <li>inner: Items can go into this list from the joined list.</li>\n  <li>outer: Items can go out of the joined list into this list.</li>\n  <li>none: Removes the join.</li>\n</ul>"
     },
     "getOrdering": {
      "!type": "fn(Function: ?) -> ?",
      "!doc": "A custom callback to allow a user to extract some sort of id or any other data\nfrom the node to use in the \"ordering list\" and then that data should be returned from the callback."
     },
     "handles": {
      "!type": "+yui.Array",
      "!doc": "Drag handles to pass on to the internal DD.Delegate instance."
     },
     "container": {
      "!type": "string",
      "!doc": "A selector query to get the container to listen for mousedown events on. All \"nodes\" should be a child of this container."
     },
     "nodes": {
      "!type": "string",
      "!doc": "A selector query to get the children of the \"container\" to make draggable elements from."
     },
     "opacity": {
      "!type": "string",
      "!doc": "The opacity to change the proxy item to when dragging."
     },
     "opacityNode": {
      "!type": "string",
      "!doc": "The node to set opacity on when dragging (dragNode or currentNode). Default: currentNode."
     },
     "id": {
      "!type": "string",
      "!doc": "The id of this Sortable, used to get a reference to this Sortable list from another list."
     },
     "moveType": {
      "!type": "string",
      "!doc": "How should an item move to another list: insert, swap, move, copy. Default: insert"
     },
     "invalid": {
      "!type": "string",
      "!doc": "A selector string to test if a list item is invalid and not sortable"
     }
    },
    "_test": {
     "!type": "fn(node: +node.Node, test: string)",
     "!doc": "Test a Node or a selector for the container"
    },
    "getSortable": {
     "!type": "fn(node: string)",
     "!doc": "Get a Sortable instance back from a node reference or a selector string."
    },
    "reg": {
     "!type": "fn(Sortable: ?, String: ?)",
     "!doc": "Register a Sortable instance with the singleton to allow lookups later."
    },
    "unreg": {
     "!type": "fn(Sortable: ?, String: ?)",
     "!doc": "Unregister a Sortable instance with the singleton."
    }
   }
  },
  "stylesheet": {
   "StyleSheet": {
    "!type": "fn(seed: string, name: string) -> +stylesheet.StyleSheet",
    "prototype": {
     "getId": {
      "!type": "fn() -> number",
      "!doc": "Get the unique stamp for this StyleSheet instance"
     },
     "enable": {
      "!type": "fn() -> !this",
      "!doc": "Enable all the rules in the sheet"
     },
     "disable": {
      "!type": "fn() -> !this",
      "!doc": "Disable all the rules in the sheet.  Rules may be changed while the\nStyleSheet is disabled."
     },
     "isEnabled": {
      "!type": "fn() -> bool",
      "!doc": "Returns false if the StyleSheet is disabled.  Otherwise true."
     },
     "set": {
      "!type": "fn(sel: string, css: +yui.Object) -> !this",
      "!doc": "<p>Set style properties for a provided selector string.\nIf the selector includes commas, it will be split into individual\nselectors and applied accordingly.  If the selector string does not\nhave a corresponding rule in the sheet, it will be added.</p>\n\n<p>The object properties in the second parameter must be the JavaScript\nnames of style properties.  E.g. fontSize rather than font-size.</p>\n\n<p>The float style property will be set by any of &quot;float&quot;,\n&quot;styleFloat&quot;, or &quot;cssFloat&quot;.</p>"
     },
     "unset": {
      "!type": "fn(sel: string, css: string) -> !this",
      "!doc": "<p>Unset style properties for a provided selector string, removing\ntheir effect from the style cascade.</p>\n\n<p>If the selector includes commas, it will be split into individual\nselectors and applied accordingly.  If there are no properties\nremaining in the rule after unsetting, the rule is removed.</p>\n\n<p>The style property or properties in the second parameter must be the\nJavaScript style property names. E.g. fontSize rather than font-size.</p>\n\n<p>The float style property will be unset by any of &quot;float&quot;,\n&quot;styleFloat&quot;, or &quot;cssFloat&quot;.</p>"
     },
     "getCssText": {
      "!type": "fn(sel: string) -> string",
      "!doc": "Get the current cssText for a rule or the entire sheet.  If the\nselector param is supplied, only the cssText for that rule will be\nreturned, if found.  If the selector string targets multiple\nselectors separated by commas, the cssText of the first rule only\nwill be returned.  If no selector string, the stylesheets full\ncssText will be returned."
     }
    },
    "toCssText": {
     "!type": "fn(css: +yui.Object, cssText: string) -> string",
     "!doc": "<p>Converts an object literal of style properties and values into a string\nof css text.  This can then be assigned to el.style.cssText.</p>\n\n<p>The optional second parameter is a cssText string representing the\nstarting state of the style prior to alterations.  This is most often\nextracted from the eventual targets current el.style.cssText.</p>"
    },
    "register": {
     "!type": "fn(name: string, sheet: +stylesheet.StyleSheet) -> bool",
     "!doc": "Registers a StyleSheet instance in the static registry by the given name"
    },
    "isValidSelector": {
     "!type": "fn(sel: string) -> bool",
     "!doc": "<p>Determines if a selector string is safe to use.  Used internally\nin set to prevent IE from locking up when attempting to add a rule for a\n&quot;bad selector&quot;.</p>\n\n<p>Bad selectors are considered to be any string containing unescaped\n`~!@%^&()+=|{}[];\"?< or space. Also forbidden are . or # followed by\nanything other than an alphanumeric.  Additionally -abc or .-abc or\n#_abc or #  all fail.  There are likely more failure cases, so\nplease file a bug if you encounter one.</p>"
    }
   }
  },
  "substitute": {
   "YUI~substitute": {
    "!type": "fn()",
    "prototype": {
     "substitute": {
      "!type": "fn(s: string, o: +yui.Object, f: fn(), recurse: bool) -> string",
      "!doc": "<strong>Use `Y.Lang.sub` or `Y.Template` instead.</strong>\n\n\n\nDoes `{placeholder}` substitution on a string.  The object passed as the\nsecond parameter provides values to replace the `{placeholder}`s.\n{placeholder} token names must match property names of the object.  For\nexample\n\n`var greeting = Y.substitute(\"Hello, {who}!\", { who: \"World\" });`\n\n`{placeholder}` tokens that are undefined on the object map will be left in\ntact (leaving unsightly \"{placeholder}\"s in the output string).  If your\nreplacement strings *should* include curly braces, use `{LBRACE}` and\n`{RBRACE}` in your object map string value.\n\nIf a function is passed as a third argument, it will be called for each\n{placeholder} found.  The {placeholder} name is passed as the first value\nand the value from the object map is passed as the second.  If the\n{placeholder} contains a space, the first token will be used to identify\nthe object map property and the remainder will be passed as a third\nargument to the function.  See below for an example.\n\nIf the value in the object map for a given {placeholder} is an object and\nthe `dump` module is loaded, the replacement value will be the string\nresult of calling `Y.dump(...)` with the object as input.  Include a\nnumeric second token in the {placeholder} to configure the depth of the call\nto `Y.dump(...)`, e.g. \"{someObject 2}\".  See the\n<a href=\"../classes/YUI.html#method_dump\">`dump`</a> method for details."
     }
    }
   }
  },
  "swf": {
   "SWF": {
    "!type": "fn(id: string, swfURL: string, p_oAttributes: +yui.Object) -> +swf.SWF",
    "prototype": {
     "callSWF": {
      "!type": "fn(func: string, args: +yui.Array)",
      "!doc": "Calls a specific function exposed by the SWFs\nExternalInterface."
     },
     "toString": {
      "!type": "fn() -> string",
      "!doc": "Public accessor to the unique name of the SWF instance."
     }
    }
   },
   "UploaderFlash": {
    "!type": "fn(config: +yui.Object) -> +swf.UploaderFlash",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "queue": {
      "!type": "+uploader_queue.Uploader.Queue",
      "!doc": "Stored reference to the instance of Uploader.Queue used to manage\nthe upload process. This is a read-only property that only exists\nduring an active upload process. Only one queue can be active at\na time; if an upload start is attempted while a queue is active,\nit will be ignored."
     },
     "upload": {
      "!type": "fn(file: +file_flash.FileFlash, url: string, postVars?: +yui.Object)",
      "!doc": "Starts the upload of a specific file."
     },
     "uploadAll": {
      "!type": "fn(url: string, postVars?: +yui.Object)",
      "!doc": "Starts the upload of all files on the file list, using an automated queue."
     },
     "uploadThese": {
      "!type": "fn(files: +yui.Array, url: string, postVars?: +yui.Object)",
      "!doc": "Starts the upload of the files specified in the first argument, using an automated queue."
     },
     "appendNewFiles": {
      "!type": "bool",
      "!doc": "A Boolean indicating whether newly selected files should be appended\nto the existing file list, or whether they should replace it."
     },
     "buttonClassNames": {
      "!type": "+yui.Object",
      "!doc": "The names of CSS classes that correspond to different button states\nof the \"Select Files\" control. These classes are assigned to the\n\"Select Files\" control based on the mouse states reported by the\nFlash player. The keys for the class names are:\n<ul>\n  <li> <strong>`hover`</strong>: the class corresponding to mouse hovering over\n     the \"Select Files\" button.</li>\n  <li> <strong>`active`</strong>: the class corresponding to mouse down state of\n     the \"Select Files\" button.</li>\n  <li> <strong>`disabled`</strong>: the class corresponding to the disabled state\n     of the \"Select Files\" button.</li>\n  <li> <strong>`focus`</strong>: the class corresponding to the focused state of\n     the \"Select Files\" button.</li>\n</ul>"
     },
     "enabled": {
      "!type": "bool",
      "!doc": "A Boolean indicating whether the uploader is enabled or disabled for user input."
     },
     "errorAction": {
      "!type": "string",
      "!doc": "The action  performed when an upload error occurs for a specific file being uploaded.\nThe possible values are:\n<ul>\n  <li> <strong>`UploaderQueue.CONTINUE`</strong>: the error is ignored and the upload process is continued.</li>\n  <li> <strong>`UploaderQueue.STOP`</strong>: the upload process is stopped as soon as any other parallel file\n    uploads are finished.</li>\n  <li> <strong>`UploaderQueue.RESTART_ASAP`</strong>: the file is added back to the front of the queue.</li>\n  <li> <strong>`UploaderQueue.RESTART_AFTER`</strong>: the file is added to the back of the queue.</li>\n</ul>"
     },
     "fileFilters": {
      "!type": "+yui.Array",
      "!doc": "An array indicating what fileFilters should be applied to the file\nselection dialog. Each element in the array should be an object with\nthe following key-value pairs:\n{\n  description : String\n        extensions: String of the form &lquot;*.ext1;*.ext2;*.ext3;...&rquot;\n}"
     },
     "fileFilterFunction": {
      "!type": "fn()",
      "!doc": "A filtering function that is applied to every file selected by the user.\nThe function receives the `Y.File` object and must return a Boolean value.\nIf a `false` value is returned, the file in question is not added to the\nlist of files to be uploaded.\nUse this function to put limits on file sizes or check the file names for\ncorrect extension, but make sure that a server-side check is also performed,\nsince any client-side restrictions are only advisory and can be circumvented."
     },
     "fileFieldName": {
      "!type": "string",
      "!doc": "A String specifying what should be the POST field name for the file\ncontent in the upload request."
     },
     "fileList": {
      "!type": "+yui.Array",
      "!doc": "The array of files to be uploaded. All elements in the array\nmust be instances of `Y.FileFlash` and be instantiated with a `fileId`\nretrieved from an instance of the uploader."
     },
     "multipleFiles": {
      "!type": "bool",
      "!doc": "A Boolean indicating whether multiple file selection is enabled."
     },
     "postVarsPerFile": {
      "!type": "+yui.Object",
      "!doc": "An object, keyed by `fileId`, containing sets of key-value pairs\nthat should be passed as POST variables along with each corresponding\nfile. This attribute is only used if no POST variables are specifed\nin the upload method call."
     },
     "selectButtonLabel": {
      "!type": "string",
      "!doc": "The label for the \"Select Files\" widget. This is the value that replaces the\n`{selectButtonLabel}` token in the `SELECT_FILES_BUTTON` template."
     },
     "selectFilesButton": {
      "!type": "+node.Node",
      "!doc": "The widget that serves as the \"Select Files\" control for the file uploader"
     },
     "simLimit": {
      "!type": "number",
      "!doc": "The number of files that can be uploaded\nsimultaneously if the automatic queue management\nis used. This value can be in the range between 2\nand 5."
     },
     "swfURL": {
      "!type": "string",
      "!doc": "The URL to the SWF file of the flash uploader. A copy local to\nthe server that hosts the page on which the uploader appears is\nrecommended."
     },
     "tabElements": {
      "!type": "+yui.Object",
      "!doc": "The ids or `Node` references of the DOM elements that precede\nand follow the `Select Files` button in the tab order. Specifying\nthese allows keyboard navigation to and from the Flash player\nlayer of the uploader.\nThe two keys corresponding to the DOM elements are:\n       <ul>\n  <li> `from`: the id or the `Node` reference corresponding to the\n    DOM element that precedes the `Select Files` button in the tab order.</li>\n  <li> `to`: the id or the `Node` reference corresponding to the\n    DOM element that follows the `Select Files` button in the tab order.</li>\n</ul>"
     },
     "uploadURL": {
      "!type": "string",
      "!doc": "The URL to which file upload requested are POSTed. Only used if a different url is not passed to the upload method call."
     },
     "retryCount": {
      "!type": "number",
      "!doc": "The number of times to try re-uploading a file that failed to upload before\ncancelling its upload."
     }
    },
    "FLASH_CONTAINER": {
     "!type": "string",
     "!doc": "The template for the Flash player container. Since the Flash player container needs\nto completely overlay the &lquot;Select Files&rqot; control, its positioned absolutely,\nwith width and height set to 100% of the parent."
    },
    "SELECT_FILES_BUTTON": {
     "!type": "string",
     "!doc": "The template for the \"Select Files\" button."
    },
    "TYPE": {
     "!type": "string",
     "!doc": "The static property reflecting the type of uploader that `Y.Uploader`\naliases. The UploaderFlash value is `\"flash\"`."
    }
   }
  },
  "swfdetect": {
   "SWFDetect": {
    "!type": "fn() -> +swfdetect.SWFDetect",
    "prototype": {
     "getFlashVersion": {
      "!type": "fn()",
      "!doc": "Returns the version of either the Flash Player plugin (in Mozilla/WebKit/Opera browsers),\nor the Flash Player ActiveX control (in IE), as a String of the form \"MM.mm.rr\", where\nMM is the major version, mm is the minor version, and rr is the revision."
     },
     "isFlashVersionAtLeast": {
      "!type": "fn(flashMajor: number, flashMinor: number, flashRev: number) -> bool",
      "!doc": "Checks whether the version of the Flash player installed on the users machine is greater\nthan or equal to the one specified. If it is, this method returns true; it is false otherwise."
     }
    }
   },
   "Tab": {
    "!type": "fn(config: +yui.Object) -> +swfdetect.Tab",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "triggerEvent": {
      "!type": "string"
     },
     "label": {
      "!type": "+HTML"
     },
     "content": {
      "!type": "+HTML"
     },
     "panelNode": {
      "!type": "+Y.Node"
     }
    }
   }
  },
  "template": {
   "Template": {
    "!type": "fn(engine?: +Mixed, defaults?: +yui.Object) -> +template.Template",
    "prototype": {
     "defaults": {
      "!type": "+yui.Object",
      "!doc": "Default options."
     },
     "engine": {
      "!type": "+Mixed",
      "!doc": "Template engine class."
     },
     "compile": {
      "!type": "fn(text: string, options?: +yui.Object) -> fn()",
      "!doc": "Compiles a template with the current template engine and returns a compiled\ntemplate function."
     },
     "precompile": {
      "!type": "fn(text: string, options?: +yui.Object) -> string",
      "!doc": "Precompiles a template with the current template engine and returns a string\ncontaining JavaScript source code for the precompiled template."
     },
     "render": {
      "!type": "fn(text: string, data: +yui.Object, options?: +yui.Object) -> string",
      "!doc": "Compiles and renders a template with the current template engine in a single\nstep, and returns the rendered result."
     },
     "revive": {
      "!type": "fn(precompiled: fn(), options?: +yui.Object) -> fn()",
      "!doc": "Revives a precompiled template function into an executable template function\nusing the current template engine. The precompiled code must already have\nbeen evaluated; this method wont evaluate it for you."
     }
    },
    "register": {
     "!type": "fn(templateName: string, template: fn(data?: +yui.Object, options?: +yui.Object)) -> fn()",
     "!doc": "Registers a pre-compiled template into the central template registry with a\ngiven template string, allowing that template to be called and rendered by\nthat name using the `Y.Template.render()` static method.\n\nFor example, given the following simple Handlebars template, in `foo.hbs`:"
    },
    "get": {
     "!type": "fn(templateName: string) -> fn()",
     "!doc": "Returns the registered template function, given the template name. If an\nunregistered template is accessed, this will return `undefined`."
    },
    "render": {
     "!type": "fn(templateName: string, data?: +yui.Object, options?: +yui.Object) -> string",
     "!doc": "Renders a template into a string, given the registered template name and data\nto be interpolated. The template name must have been registered previously with\n`register()`.\n\nOnce the template has been registered and built into a YUI module, it can be\nlisted as a dependency for any other YUI module. Continuing from the above\nexample, the registered template can be used in the following way:"
    },
    "Micro": {
     "!type": "fn()",
     "options": {
      "!type": "+yui.Object",
      "!doc": "Default options for `Y.Template.Micro`."
     },
     "compile": {
      "!type": "fn(text: string, options?: +yui.Object) -> fn()",
      "!doc": "Compiles a template string into a JavaScript function. Pass a data object to the\nfunction to render the template using the given data and get back a rendered\nstring.\n\nWithin a template, use `<%= ... %>` to output the value of an expression (where\n`...` is the JavaScript expression or data variable to evaluate). The output\nwill be HTML-escaped by default. To output a raw value without escaping, use\n`<%== ... %>`, but be careful not to do this with untrusted user input.\n\nTo execute arbitrary JavaScript code within the template without rendering its\noutput, use `<% ... %>`, where `...` is the code to be executed. This allows the\nuse of if/else blocks, loops, function calls, etc., although its recommended\nthat you avoid embedding anything beyond basic flow control logic in your\ntemplates.\n\nProperties of the data object passed to a template function are made available\non a `data` variable within the scope of the template. So, if you pass in\nthe object `{message: hello!}`, you can print the value of the `message`\nproperty using `<%= data.message %>`."
     },
     "precompile": {
      "!type": "fn(text: string, options?: +yui.Object) -> string",
      "!doc": "Precompiles the given template text into a string of JavaScript source code that\ncan be evaluated later in another context (or on another machine) to render the\ntemplate.\n\nA common use case is to precompile templates at build time or on the server,\nthen evaluate the code on the client to render a template. The client only needs\nto revive and render the template, avoiding the work of the compilation step."
     },
     "render": {
      "!type": "fn(text: string, data: +yui.Object, options?: +yui.Object) -> string",
      "!doc": "Compiles and renders the given template text in a single step.\n\nThis can be useful for single-use templates, but if you plan to render the same\ntemplate multiple times, its much better to use `compile()` to compile it once,\nthen simply call the compiled function multiple times to avoid recompiling."
     },
     "revive": {
      "!type": "fn(precompiled: fn()) -> fn()",
      "!doc": "Revives a precompiled template function into a normal compiled template function\nthat can be called to render the template. The precompiled function must already\nhave been evaluated to a function -- you cant pass raw JavaScript code to\n`revive()`."
     }
    }
   }
  },
  "test_console": {
   "Test": {
    "Console": {
     "!type": "fn()",
     "prototype": {
      "_isIstanbul": {
       "!type": "fn(json: +yui.Object) -> bool",
       "!doc": "Scans the coverage data to determine if its an Istanbul coverage object."
      },
      "parseYUITest": {
       "!type": "fn(coverage: +yui.Object)",
       "!doc": "Parses and logs a summary of YUITest coverage data."
      },
      "_blankSummary": {
       "!type": "fn() -> +yui.Object",
       "!doc": "Generates a generic summary object used for Istanbul conversions."
      },
      "parseInstanbul": {
       "!type": "fn(coverage: +yui.Object)",
       "!doc": "Takes an Istanbul coverage object, normalizes it and prints a log with a summary"
      }
     }
    }
   }
  },
  "test": {
   "Test": {
    "ArrayAssert": {
     "!type": "fn()",
     "contains": {
      "!type": "fn(needle: +yui.Object, haystack: +yui.Array, message: string)",
      "!doc": "Asserts that a value is present in an array. This uses the triple equals\nsign so no type coercion may occur."
     },
     "containsItems": {
      "!type": "fn(needles: [+yui.Object], haystack: +yui.Array, message: string)",
      "!doc": "Asserts that a set of values are present in an array. This uses the triple equals\nsign so no type coercion may occur. For this assertion to pass, all values must\nbe found."
     },
     "containsMatch": {
      "!type": "fn(matcher: fn(), haystack: +yui.Array, message: string)",
      "!doc": "Asserts that a value matching some condition is present in an array. This uses\na function to determine a match."
     },
     "doesNotContain": {
      "!type": "fn(needle: +yui.Object, haystack: +yui.Array, message: string)",
      "!doc": "Asserts that a value is not present in an array. This uses the triple equals\nAsserts that a value is not present in an array. This uses the triple equals\nsign so no type coercion may occur."
     },
     "doesNotContainItems": {
      "!type": "fn(needles: [+yui.Object], haystack: +yui.Array, message: string)",
      "!doc": "Asserts that a set of values are not present in an array. This uses the triple equals\nsign so no type coercion may occur. For this assertion to pass, all values must\nnot be found."
     },
     "doesNotContainMatch": {
      "!type": "fn(matcher: fn(), haystack: +yui.Array, message: string)",
      "!doc": "Asserts that no values matching a condition are present in an array. This uses\na function to determine a match."
     },
     "indexOf": {
      "!type": "fn(needle: +yui.Object, haystack: +yui.Array, index: number, message: string)",
      "!doc": "Asserts that the given value is contained in an array at the specified index.\nThis uses the triple equals sign so no type coercion will occur."
     },
     "itemsAreEqual": {
      "!type": "fn(expected: +yui.Array, actual: +yui.Array, message: string)",
      "!doc": "Asserts that the values in an array are equal, and in the same position,\nas values in another array. This uses the double equals sign\nso type coercion may occur. Note that the array objects themselves\nneed not be the same for this test to pass."
     },
     "itemsAreEquivalent": {
      "!type": "fn(expected: +yui.Array, actual: +yui.Array, comparator: fn(), message: string)",
      "!doc": "Asserts that the values in an array are equivalent, and in the same position,\nas values in another array. This uses a function to determine if the values\nare equivalent. Note that the array objects themselves\nneed not be the same for this test to pass."
     },
     "isEmpty": {
      "!type": "fn(actual: +yui.Array, message: string)",
      "!doc": "Asserts that an array is empty."
     },
     "isNotEmpty": {
      "!type": "fn(actual: +yui.Array, message: string)",
      "!doc": "Asserts that an array is not empty."
     },
     "itemsAreSame": {
      "!type": "fn(expected: +yui.Array, actual: +yui.Array, message: string)",
      "!doc": "Asserts that the values in an array are the same, and in the same position,\nas values in another array. This uses the triple equals sign\nso no type coercion will occur. Note that the array objects themselves\nneed not be the same for this test to pass."
     },
     "lastIndexOf": {
      "!type": "fn(needle: +yui.Object, haystack: +yui.Array, index: number, message: string)",
      "!doc": "Asserts that the given value is contained in an array at the specified index,\nstarting from the back of the array.\nThis uses the triple equals sign so no type coercion will occur."
     },
     "isUnique": {
      "!type": "fn(array: +yui.Array, comparator?: fn(), message?: string)",
      "!doc": "Asserts that given array doesnt contain duplicate items."
     }
    },
    "Assert": {
     "!type": "fn()",
     "fail": {
      "!type": "fn(message: string)",
      "!doc": "Forces an assertion error to occur."
     },
     "pass": {
      "!type": "fn()",
      "!doc": "A marker that the test should pass."
     },
     "areEqual": {
      "!type": "fn(expected: +yui.Object, actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is equal to another. This uses the double equals sign\nso type coercion may occur."
     },
     "areNotEqual": {
      "!type": "fn(unexpected: +yui.Object, actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is not equal to another. This uses the double equals sign\nso type coercion may occur."
     },
     "areNotSame": {
      "!type": "fn(unexpected: +yui.Object, actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is not the same as another. This uses the triple equals sign\nso no type coercion may occur."
     },
     "areSame": {
      "!type": "fn(expected: +yui.Object, actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is the same as another. This uses the triple equals sign\nso no type coercion may occur."
     },
     "isFalse": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is false. This uses the triple equals sign\nso no type coercion may occur."
     },
     "isTrue": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is true. This uses the triple equals sign\nso no type coercion may occur."
     },
     "isNaN": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is not a number."
     },
     "isNotNaN": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is not the special NaN value."
     },
     "isNotNull": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is not null. This uses the triple equals sign\nso no type coercion may occur."
     },
     "isNotUndefined": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is not undefined. This uses the triple equals sign\nso no type coercion may occur."
     },
     "isNull": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is null. This uses the triple equals sign\nso no type coercion may occur."
     },
     "isUndefined": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is undefined. This uses the triple equals sign\nso no type coercion may occur."
     },
     "isArray": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is an array."
     },
     "isBoolean": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is a Boolean."
     },
     "isFunction": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is a function."
     },
     "isInstanceOf": {
      "!type": "fn(expected: fn(), actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is an instance of a particular object. This may return\nincorrect results when comparing objects from one frame to constructors in\nanother frame. For best results, dont use in a cross-frame manner."
     },
     "isNumber": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is a number."
     },
     "isObject": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is an object."
     },
     "isString": {
      "!type": "fn(actual: +yui.Object, message: string)",
      "!doc": "Asserts that a value is a string."
     },
     "isTypeOf": {
      "!type": "fn(expectedType: string, actualValue: +yui.Object, message: string)",
      "!doc": "Asserts that a value is of a particular type."
     },
     "throwsError": {
      "!type": "fn(expectedError: string, method: fn(), message: string)",
      "!doc": "Asserts that executing a particular method should throw an error of\na specific type. This is a replacement for _should.error."
     }
    },
    "AssertionError": {
     "!type": "fn(message: string)",
     "prototype": {
      "message": {
       "!type": "string",
       "!doc": "Error message. Must be duplicated to ensure browser receives it."
      },
      "name": {
       "!type": "string",
       "!doc": "The name of the error that occurred."
      },
      "getMessage": {
       "!type": "fn() -> string",
       "!doc": "Returns a fully formatted error for an assertion failure. This should\nbe overridden by all subclasses to provide specific information."
      },
      "toString": {
       "!type": "fn() -> string",
       "!doc": "Returns a string representation of the error."
      }
     }
    },
    "ComparisonFailure": {
     "!type": "fn(message: string, expected: +yui.Object, actual: +yui.Object)",
     "prototype": {
      "!proto": "AssertionError.prototype",
      "expected": {
       "!type": "+yui.Object",
       "!doc": "The expected value."
      },
      "actual": {
       "!type": "+yui.Object",
       "!doc": "The actual value."
      },
      "name": {
       "!type": "string",
       "!doc": "The name of the error that occurred."
      },
      "getMessage": {
       "!type": "fn() -> string",
       "!doc": "Returns a fully formatted error for an assertion failure. This message\nprovides information about the expected and actual values."
      }
     }
    },
    "CoverageFormat": {
     "!type": "fn()",
     "prototype": {
      "JSON": {
       "!type": "fn(coverage: +yui.Object) -> string",
       "!doc": "Returns the coverage report in JSON format. This is the straight\nJSON representation of the native coverage report."
      },
      "XdebugJSON": {
       "!type": "fn(coverage: +yui.Object) -> string",
       "!doc": "Returns the coverage report in a JSON format compatible with\nXdebug. See <a href=\"http://www.xdebug.com/docs/code_coverage\">Xdebug Documentation</a>\nfor more information. Note: function coverage is not available\nin this format."
      }
     }
    },
    "DateAssert": {
     "!type": "fn()",
     "datesAreEqual": {
      "!type": "fn(expected: +datatype_date.Date, actual: +datatype_date.Date, message: string)",
      "!doc": "Asserts that a dates month, day, and year are equal to another dates."
     },
     "timesAreEqual": {
      "!type": "fn(expected: +datatype_date.Date, actual: +datatype_date.Date, message: string)",
      "!doc": "Asserts that a dates hour, minutes, and seconds are equal to another dates."
     }
    },
    "EventTarget": {
     "!type": "fn()",
     "prototype": {
      "attach": {
       "!type": "fn(type: string, listener: fn())",
       "!doc": "Adds a listener for a given event type."
      },
      "subscribe": {
       "!type": "fn(type: string, listener: fn())",
       "!doc": "Adds a listener for a given event type."
      },
      "fire": {
       "!type": "fn(event: +yui.Object)",
       "!doc": "Fires an event based on the passed-in object."
      },
      "detach": {
       "!type": "fn(type: string, listener: fn())",
       "!doc": "Removes a listener for a given event type."
      },
      "unsubscribe": {
       "!type": "fn(type: string, listener: fn())",
       "!doc": "Removes a listener for a given event type."
      }
     }
    },
    "Mock": {
     "!type": "fn()",
     "expect": {
      "!type": "fn(mock: +yui.Object, expectation: +yui.Object)",
      "!doc": "Assigns an expectation to a mock object. This is used to create\nmethods and properties on the mock object that are monitored for\ncalls and changes, respectively."
     },
     "verify": {
      "!type": "fn(mock: +yui.Object)",
      "!doc": "Verifies that all expectations of a mock object have been met and\nthrows an assertion error if not."
     },
     "Value": {
      "!type": "fn(method: fn(), originalArgs: +yui.Array, message: string)",
      "Any": {
       "!type": "fn()",
       "!doc": "Predefined matcher to match any value."
      },
      "Boolean": {
       "!type": "fn()",
       "!doc": "Predefined matcher to match boolean values."
      },
      "Number": {
       "!type": "fn()",
       "!doc": "Predefined matcher to match number values."
      },
      "String": {
       "!type": "fn()",
       "!doc": "Predefined matcher to match string values."
      },
      "Object": {
       "!type": "fn()",
       "!doc": "Predefined matcher to match object values."
      },
      "Function": {
       "!type": "fn()",
       "!doc": "Predefined matcher to match function values."
      }
     }
    },
    "ObjectAssert": {
     "!type": "fn()",
     "areEqual": {
      "!type": "fn(expected: +yui.Object, actual: +yui.Object, message: string)",
      "!doc": "Asserts that an object has all of the same properties\nand property values as the other."
     },
     "hasKey": {
      "!type": "fn(propertyName: string, object: +yui.Object, message: string)",
      "!doc": "Asserts that an object has a property with the given name."
     },
     "hasKeys": {
      "!type": "fn(properties: +yui.Array, object: +yui.Object, message: string)",
      "!doc": "Asserts that an object has all properties of a reference object."
     },
     "inheritsKey": {
      "!type": "fn(propertyName: string, object: +yui.Object, message: string)",
      "!doc": "Asserts that a property with the given name exists on an objects prototype."
     },
     "inheritsKeys": {
      "!type": "fn(properties: +yui.Array, object: +yui.Object, message: string)",
      "!doc": "Asserts that all properties exist on an object prototype."
     },
     "ownsKey": {
      "!type": "fn(propertyName: string, object: +yui.Object, message: string)",
      "!doc": "Asserts that a property with the given name exists on an object instance (not on its prototype)."
     },
     "ownsKeys": {
      "!type": "fn(properties: +yui.Array, object: +yui.Object, message: string)",
      "!doc": "Asserts that all properties exist on an object instance (not on its prototype)."
     },
     "ownsNoKeys": {
      "!type": "fn(object: +yui.Object, message: string)",
      "!doc": "Asserts that an object owns no properties."
     },
     "ownsOrInheritsKey": {
      "!type": "fn(propertyName: string, object: +yui.Object, message: string)",
      "!doc": "Asserts that an object has a property with the given name."
     },
     "ownsOrInheritsKeys": {
      "!type": "fn(properties: +yui.Array, object: +yui.Object, message: string)",
      "!doc": "Asserts that an object has all properties of a reference object."
     }
    },
    "Reporter": {
     "!type": "fn(url: string, format: fn()) -> +test.Test.Reporter",
     "prototype": {
      "url": {
       "!type": "string",
       "!doc": "The URL to submit the data to."
      },
      "format": {
       "!type": "fn()",
       "!doc": "The formatting function to call when submitting the data."
      },
      "addField": {
       "!type": "fn(name: string, value: ?)",
       "!doc": "Adds a field to the form that submits the results."
      },
      "clearFields": {
       "!type": "fn()",
       "!doc": "Removes all previous defined fields."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Cleans up the memory associated with the TestReporter, removing DOM elements\nthat were created."
      },
      "report": {
       "!type": "fn(results: +yui.Object)",
       "!doc": "Sends the report to the server."
      }
     }
    },
    "Results": {
     "!type": "fn()",
     "prototype": {
      "name": {
       "!type": "string",
       "!doc": "Name of the test, test case, or test suite."
      },
      "passed": {
       "!type": "number",
       "!doc": "Number of passed tests."
      },
      "failed": {
       "!type": "number",
       "!doc": "Number of failed tests."
      },
      "errors": {
       "!type": "number",
       "!doc": "Number of errors that occur in non-test methods."
      },
      "ignored": {
       "!type": "number",
       "!doc": "Number of ignored tests."
      },
      "total": {
       "!type": "number",
       "!doc": "Number of total tests."
      },
      "duration": {
       "!type": "number",
       "!doc": "Amount of time (ms) it took to complete testing."
      },
      "include": {
       "!type": "fn(result: +test.Test.Results)",
       "!doc": "Includes results from another results object into this one."
      }
     }
    },
    "ShouldError": {
     "!type": "fn(message: string)",
     "prototype": {
      "!proto": "AssertionError.prototype",
      "name": {
       "!type": "string",
       "!doc": "The name of the error that occurred."
      }
     }
    },
    "ShouldFail": {
     "!type": "fn(message: string)",
     "prototype": {
      "!proto": "YUITest.AssertionError.prototype",
      "name": {
       "!type": "string",
       "!doc": "The name of the error that occurred."
      }
     }
    },
    "TestCase": {
     "!type": "fn(template: ?)",
     "DEFAULT_WAIT": {
      "!type": "number",
      "!doc": "Default delay for a test failure when `wait()` is called without a _delay_."
     },
     "prototype": {
      "callback": {
       "!type": "fn() -> fn()",
       "!doc": "Method to call from an async init method to\nrestart the test case. When called, returns a function\nthat should be called when tests are ready to continue."
      },
      "resume": {
       "!type": "fn(segment: fn())",
       "!doc": "Resumes a paused test and runs the given function."
      },
      "wait": {
       "!type": "fn(segment: fn(), delay: number)",
       "!doc": "Causes the test case to wait a specified amount of time and then\ncontinue executing the given code."
      },
      "next": {
       "!type": "fn(callback: fn(), context?: +yui.Object) -> fn()",
       "!doc": "Creates a callback that automatically resumes the test. Parameters as passed\non to the callback."
      },
      "waitFor": {
       "!type": "fn(condition: fn(), segment: fn(), timeout?: number, increment?: number)",
       "!doc": "Delays the current test until _condition_ returns a truthy value. If\n_condition_ fails to return a truthy value before _timeout_ milliseconds\nhave passed, the test fails. Default _timeout_ is 10s.\n\n_condition_ will be executed every _increment_ milliseconds (default 100)."
      },
      "assert": {
       "!type": "fn(condition: bool, message: string)",
       "!doc": "Asserts that a given condition is true. If not, then a YUITest.AssertionError object is thrown\nand the test fails."
      },
      "fail": {
       "!type": "fn(message: string)",
       "!doc": "Forces an assertion error to occur. Shortcut for YUITest.Assert.fail()."
      },
      "init": {
       "!type": "fn()",
       "!doc": "Function to run once before tests start to run.\nThis executes before the first call to setUp()."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Function to run once after tests finish running.\nThis executes after the last call to tearDown()."
      },
      "setUp": {
       "!type": "fn()",
       "!doc": "Function to run before each test is executed."
      },
      "tearDown": {
       "!type": "fn()",
       "!doc": "Function to run after each test is executed."
      }
     }
    },
    "TestFormat": {
     "!type": "fn()",
     "JSON": {
      "!type": "fn(result: +yui.Object) -> string",
      "!doc": "Returns test results formatted as a JSON string. Requires JSON utility."
     },
     "XML": {
      "!type": "fn(result: +yui.Object) -> string",
      "!doc": "Returns test results formatted as an XML string."
     },
     "JUnitXML": {
      "!type": "fn(result: +yui.Object) -> string",
      "!doc": "Returns test results formatted in JUnit XML format."
     },
     "TAP": {
      "!type": "fn(result: +yui.Object) -> string",
      "!doc": "Returns test results formatted in TAP format.\nFor more information, see <a href=\"http://testanything.org/\">Test Anything Protocol</a>."
     }
    },
    "Runner": {
     "!type": "fn()",
     "prototype": {
      "getName": {
       "!type": "fn() -> string",
       "!doc": "Retrieves the name of the current result set."
      },
      "setName": {
       "!type": "fn(name: string)",
       "!doc": "The name assigned to the master suite of the TestRunner. This is the name\nthat is output as the roots name when results are retrieved."
      },
      "isRunning": {
       "!type": "fn() -> bool",
       "!doc": "Indicates that the TestRunner is busy running tests and therefore cant\nbe stopped and results cannot be gathered."
      },
      "getResults": {
       "!type": "fn(format: fn()) -> +yui.Object",
       "!doc": "Returns the last complete results set from the TestRunner. Null is returned\nif the TestRunner is running or no tests have been run."
      },
      "getCoverage": {
       "!type": "fn(format: fn()) -> +yui.Object",
       "!doc": "Returns the coverage report for the files that have been executed.\nThis returns only coverage information for files that have been\ninstrumented using YUI Test Coverage and only those that were run\nin the same pass."
      }
     },
     "add": {
      "!type": "fn(testObject: ?)",
      "!doc": "Adds a test suite or test case to the list of test objects to run."
     },
     "clear": {
      "!type": "fn()",
      "!doc": "Removes all test objects from the runner."
     },
     "isWaiting": {
      "!type": "fn() -> bool",
      "!doc": "Indicates if the TestRunner is waiting for a test to resume"
     },
     "resume": {
      "!type": "fn(segment: fn())",
      "!doc": "Resumes the TestRunner after wait() was called."
     },
     "run": {
      "!type": "fn(options: +yui.Object)",
      "!doc": "Runs the test suite."
     }
    },
    "TestSuite": {
     "!type": "fn(data: string)",
     "prototype": {
      "name": {
       "!type": "string",
       "!doc": "The name of the test suite."
      },
      "add": {
       "!type": "fn(testObject: +test.Test.TestSuite)",
       "!doc": "Adds a test suite or test case to the test suite."
      },
      "setUp": {
       "!type": "fn()",
       "!doc": "Function to run before each test is executed."
      },
      "tearDown": {
       "!type": "fn()",
       "!doc": "Function to run after each test is executed."
      }
     }
    },
    "UnexpectedError": {
     "!type": "fn(cause: +Error)",
     "prototype": {
      "!proto": "YUITest.AssertionError.prototype",
      "cause": {
       "!type": "+Error",
       "!doc": "The unexpected error that occurred."
      },
      "name": {
       "!type": "string",
       "!doc": "The name of the error that occurred."
      },
      "stack": {
       "!type": "string",
       "!doc": "Stack information for the error (if provided)."
      }
     }
    },
    "UnexpectedValue": {
     "!type": "fn(message: string, unexpected: +yui.Object)",
     "prototype": {
      "!proto": "AssertionError.prototype",
      "unexpected": {
       "!type": "+yui.Object",
       "!doc": "The unexpected value."
      },
      "name": {
       "!type": "string",
       "!doc": "The name of the error that occurred."
      },
      "getMessage": {
       "!type": "fn() -> string",
       "!doc": "Returns a fully formatted error for an assertion failure. This message\nprovides information about the expected and actual values."
      }
     }
    },
    "Wait": {
     "!type": "fn(segment: fn(), delay: number)",
     "prototype": {
      "segment": {
       "!type": "fn()",
       "!doc": "The segment of code to run when the wait is over."
      },
      "delay": {
       "!type": "number",
       "!doc": "The delay before running the segment of code."
      }
     }
    }
   },
   "TestNode": {
    "prototype": {
     "testObject": {
      "!type": "?",
      "!doc": "The TestSuite, TestCase, or test function represented by this node."
     },
     "firstChild": {
      "!type": "+TestNode",
      "!doc": "Pointer to this nodes first child."
     },
     "lastChild": {
      "!type": "+TestNode",
      "!doc": "Pointer to this nodes last child."
     },
     "parent": {
      "!type": "+TestNode",
      "!doc": "Pointer to this nodes parent."
     },
     "next": {
      "!type": "+TestNode",
      "!doc": "Pointer to this nodes next sibling."
     },
     "results": {
      "!type": "+object",
      "!doc": "Test results for this test object."
     },
     "appendChild": {
      "!type": "fn(testObject: ?)",
      "!doc": "Appends a new test object (TestSuite, TestCase, or test function name) as a child\nof this node."
     }
    }
   }
  },
  "text": {
   "Text": {
    "AccentFold": {
     "!type": "fn()",
     "canFold": {
      "!type": "fn(string: string) -> bool",
      "!doc": "Returns <code>true</code> if the specified string contains one or more\ncharacters that can be folded, <code>false</code> otherwise."
     },
     "compare": {
      "!type": "fn(a: string, b: string, func: fn()) -> bool",
      "!doc": "Compares the accent-folded versions of two strings and returns\n<code>true</code> if theyre the same, <code>false</code> otherwise. If\na custom comparison function is supplied, the accent-folded strings will\nbe passed to that function for comparison."
     },
     "filter": {
      "!type": "fn(haystack: +yui.Array, func: fn()) -> +yui.Array",
      "!doc": "<p>\nReturns a copy of <em>haystack</em> containing only the strings for which\nthe supplied function returns <code>true</code>.\n</p>\n\n<p>\nWhile comparisons will be made using accent-folded strings, the returned\narray of matches will contain the original strings that were passed in.\n</p>"
     },
     "fold": {
      "!type": "fn(input: string) -> string",
      "!doc": "Accent-folds the specified string or array of strings and returns a copy\nin which common accented letters have been converted to their closest\nnon-accented, lowercase forms."
     }
    },
    "WordBreak": {
     "!type": "fn()",
     "getWords": {
      "!type": "fn(string: string, options: +yui.Object) -> +yui.Array",
      "!doc": "Splits the specified string into an array of individual words."
     },
     "getUniqueWords": {
      "!type": "fn(string: string, options: +yui.Object) -> +yui.Array",
      "!doc": "Returns an array containing only unique words from the specified string.\nFor example, the string <code>foo bar baz foo</code> would result in\nthe array <code>[foo, bar, baz]</code>."
     },
     "isWordBoundary": {
      "!type": "fn(string: string, index: number) -> bool",
      "!doc": "<p>\nReturns <code>true</code> if there is a word boundary between the\nspecified character index and the next character index (or the end of the\nstring).\n</p>\n\n<p>\nNote that there are always word breaks at the beginning and end of a\nstring, so <code>isWordBoundary(, 0)</code> and\n<code>isWordBoundary(a, 0)</code> will both return <code>true</code>.\n</p>"
     }
    }
   }
  },
  "tree": {
   "Tree": {
    "!type": "fn(config?: +yui.Object) -> +tree.Tree",
    "prototype": {
     "!proto": "base.Base.prototype",
     "children": {
      "!type": "[+tree.Tree.Node]",
      "!doc": "Reference to the `children` array of this Trees `rootNode`.\n\nThis is a convenience property to allow you to type `tree.children` instead\nof `tree.rootNode.children`."
     },
     "nodeClass": {
      "!type": "string",
      "!doc": "The `Tree.Node` class or subclass that should be used for nodes created by\nthis tree.\n\nYou may specify an actual class reference or a string that resolves to a\nclass reference at runtime."
     },
     "nodeExtensions": {
      "!type": "+yui.Array",
      "!doc": "Optional array containing one or more extension classes that should be mixed\ninto the `nodeClass` when this Tree is instantiated. The resulting composed\nnode class will be unique to this Tree instance and will not affect any\nother instances, nor will it modify the defined `nodeClass` itself.\n\nThis provides a late-binding extension mechanism for nodes that doesnt\nrequire them to extend `Y.Base`, which would incur a significant performance\nhit."
     },
     "rootNode": {
      "!type": "+tree.Tree.Node",
      "!doc": "Root node of this Tree."
     },
     "appendNode": {
      "!type": "fn(parent: +tree.Tree.Node, node: +yui.Object, options?: +yui.Object) -> +tree.Tree.Node",
      "!doc": "Appends a node or array of nodes as the last child of the specified parent\nnode.\n\nIf a node being appended is from another tree, it and all its children will\nbe removed from that tree and moved to this one."
     },
     "clear": {
      "!type": "fn(rootNode?: +yui.Object, options?: +yui.Object) -> !this",
      "!doc": "Clears this tree by destroying the root node and all its children. If a\n`rootNode` argument is provided, that node will become the root node of this\ntree; otherwise, a new root node will be created."
     },
     "createNode": {
      "!type": "fn(config?: +yui.Object) -> +tree.Tree.Node",
      "!doc": "Creates and returns a new `Tree.Node` instance associated with (but not\nyet appended to) this tree."
     },
     "destroyNode": {
      "!type": "fn(node: +tree.Tree.Node, options?: +yui.Object) -> !this",
      "!doc": "Removes and destroys a node and all its child nodes. Once destroyed, a node\nis eligible for garbage collection and cannot be reused or re-added to the\ntree."
     },
     "emptyNode": {
      "!type": "fn(node: +tree.Tree.Node, options?: +yui.Object) -> [+tree.Tree.Node]",
      "!doc": "Removes all children from the specified node. The removed children will\nstill be reusable unless the `destroy` option is truthy."
     },
     "findNode": {
      "!type": "fn(node: +tree.Tree.Node, options?: +yui.Object, callback: fn(node: +tree.Tree.Node), thisObj?: +yui.Object) -> +tree.Tree.Node",
      "!doc": "Performs a depth-first traversal of _node_, passing it and each of its\ndescendants to the specified _callback_, and returning the first node for\nwhich the callback returns a truthy value.\n\nTraversal will stop as soon as a truthy value is returned from the callback.\n\nSee `traverseNode()` for more details on how depth-first traversal works."
     },
     "getNodeById": {
      "!type": "fn(id: string) -> +tree.Tree.Node",
      "!doc": "Returns the tree node with the specified id, or `undefined` if the node\ndoesnt exist in this tree."
     },
     "insertNode": {
      "!type": "fn(parent: +tree.Tree.Node, node: +yui.Object, options?: +yui.Object) -> +tree.Tree.Node",
      "!doc": "Inserts a node or array of nodes at the specified index under the given\nparent node, or appends them to the parent if no index is specified.\n\nIf a node being inserted is from another tree, it and all its children will\nbe removed from that tree and moved to this one."
     },
     "prependNode": {
      "!type": "fn(parent: +tree.Tree.Node, node: +yui.Object, options?: +yui.Object) -> +tree.Tree.Node",
      "!doc": "Prepends a node or array of nodes at the beginning of the specified parent\nnode.\n\nIf a node being prepended is from another tree, it and all its children will\nbe removed from that tree and moved to this one."
     },
     "removeNode": {
      "!type": "fn(node: +tree.Tree.Node, options?: +yui.Object) -> +tree.Tree.Node",
      "!doc": "Removes the specified node from its parent node. The removed node will still\nbe reusable unless the `destroy` option is truthy."
     },
     "size": {
      "!type": "fn() -> number",
      "!doc": "Returns the total number of nodes in this tree, at all levels.\n\nUse `rootNode.children.length` to get only the number of top-level nodes."
     },
     "toJSON": {
      "!type": "fn() -> +yui.Object",
      "!doc": "Serializes this tree to an object suitable for use in JSON."
     },
     "traverseNode": {
      "!type": "fn(node: +tree.Tree.Node, options?: +yui.Object, callback: fn(node: +tree.Tree.Node), thisObj?: +yui.Object) -> +Mixed",
      "!doc": "Performs a depth-first traversal of _node_, passing it and each of its\ndescendants to the specified _callback_.\n\nIf the callback function returns `Tree.STOP_TRAVERSAL`, traversal will be\nstopped immediately. Otherwise, it will continue until the deepest\ndescendant of _node_ has been traversed, or until each branch has been\ntraversed to the optional maximum depth limit.\n\nSince traversal is depth-first, that means nodes are traversed like this:\n\n            1\n          / | \\\n         2  8  9\n        / \\     \\\n       3   7    10\n     / | \\      / \\\n    4  5  6    11 12"
     }
    },
    "Node": {
     "!type": "fn(node: +HTMLElement) -> +node.Node",
     "Labelable": {
      "!type": "fn(tree: +tree.Tree, config?: +yui.Object) -> +tree.Tree.Node.Labelable",
      "prototype": {
       "label": {
        "!type": "string",
        "!doc": "Label for this node.\n\n**Security note:** The label is stored in raw, unescaped form. If you choose\nto render the label as HTML, be sure to escape it first with\n`Y.Escape.html()` unless you actually intend to render raw HTML contained in\nthe label."
       }
      }
     },
     "Openable": {
      "!type": "fn() -> +tree.Tree.Node.Openable",
      "prototype": {
       "close": {
        "!type": "fn(options?: +yui.Object) -> !this",
        "!doc": "Closes this node if its currently open."
       },
       "isOpen": {
        "!type": "fn() -> bool",
        "!doc": "Returns `true` if this node is currently open.\n\nNote: the root node of a tree is always considered to be open."
       },
       "open": {
        "!type": "fn(options?: +yui.Object) -> !this",
        "!doc": "Opens this node if its currently closed."
       },
       "toggleOpen": {
        "!type": "fn(options?: +yui.Object) -> !this",
        "!doc": "Toggles the open/closed state of this node, closing it if its currently\nopen or opening it if its currently closed."
       }
      }
     },
     "Selectable": {
      "!type": "fn() -> +tree.Tree.Node.Selectable",
      "prototype": {
       "isSelected": {
        "!type": "fn() -> bool",
        "!doc": "Returns `true` if this node is currently selected."
       },
       "select": {
        "!type": "fn(options?: +yui.Object) -> !this",
        "!doc": "Selects this node."
       },
       "unselect": {
        "!type": "fn(options?: +yui.Object) -> !this",
        "!doc": "Unselects this node."
       }
      }
     },
     "Sortable": {
      "!type": "fn() -> +tree.Tree.Node.Sortable",
      "prototype": {
       "sort": {
        "!type": "fn(options?: +yui.Object) -> !this",
        "!doc": "Sorts this nodes children."
       }
      }
     },
     "prototype": {
      "canHaveChildren": {
       "!type": "bool",
       "!doc": "Whether or not this node can contain child nodes.\n\nThis value is falsy by default unless child nodes are added at instantiation\ntime, in which case it will be automatically set to `true`. You can also\nmanually set it to `true` to indicate that a node can have children even\nthough it might not currently have any children.\n\nNote that regardless of the value of this property, appending, prepending,\nor inserting a node into this node will cause `canHaveChildren` to be set to\ntrue automatically."
      },
      "children": {
       "!type": "[+tree.Tree.Node]",
       "!doc": "Child nodes contained within this node."
      },
      "data": {
       "!type": "+yui.Object",
       "!doc": "Arbitrary serializable data related to this node.\n\nUse this property to store any data that should accompany this node when it\nis serialized to JSON."
      },
      "id": {
       "!type": "string",
       "!doc": "Unique id for this node."
      },
      "parent": {
       "!type": "+tree.Tree.Node",
       "!doc": "Parent node of this node, or `undefined` if this is an unattached node or\nthe root node."
      },
      "state": {
       "!type": "+yui.Object",
       "!doc": "Current state of this node.\n\nUse this property to store state-specific info -- such as whether this node\nis \"open\", \"selected\", or any other arbitrary state -- that should accompany\nthis node when it is serialized to JSON."
      },
      "tree": {
       "!type": "+tree.Tree",
       "!doc": "The Tree instance with which this node is associated."
      },
      "append": {
       "!type": "fn(node: +yui.Object, options?: +yui.Object) -> +tree.Tree.Node",
       "!doc": "Appends the given tree node or array of nodes to the end of this nodes\nchildren."
      },
      "depth": {
       "!type": "fn() -> number",
       "!doc": "Returns this nodes depth.\n\nThe root node of a tree always has a depth of 0. A child of the root has a\ndepth of 1, a child of that child will have a depth of 2, and so on."
      },
      "empty": {
       "!type": "fn(options?: +yui.Object) -> [+tree.Tree.Node]",
       "!doc": "Removes all children from this node. The removed children will still be\nreusable unless the `destroy` option is truthy."
      },
      "find": {
       "!type": "fn(options?: +yui.Object, callback: fn(node: +tree.Tree.Node), thisObj?: +yui.Object) -> +tree.Tree.Node",
       "!doc": "Performs a depth-first traversal of this node, passing it and each of its\ndescendants to the specified _callback_, and returning the first node for\nwhich the callback returns a truthy value.\n\nTraversal will stop as soon as a truthy value is returned from the callback.\n\nSee `Tree#traverseNode()` for more details on how depth-first traversal\nworks."
      },
      "hasChildren": {
       "!type": "fn() -> bool",
       "!doc": "Returns `true` if this node has one or more child nodes."
      },
      "index": {
       "!type": "fn() -> number",
       "!doc": "Returns the numerical index of this node within its parent node, or `-1` if\nthis node doesnt have a parent node."
      },
      "indexOf": {
       "!type": "fn(node: +tree.Tree.Node) -> number",
       "!doc": "Returns the numerical index of the given child node, or `-1` if the node is\nnot a child of this node."
      },
      "insert": {
       "!type": "fn(node: +yui.Object, options?: +yui.Object) -> [+tree.Tree.Node]",
       "!doc": "Inserts a node or array of nodes at the specified index under this node, or\nappends them to this node if no index is specified.\n\nIf a node being inserted is from another tree, it and all its children will\nbe removed from that tree and moved to this one."
      },
      "isInTree": {
       "!type": "fn() -> bool",
       "!doc": "Returns `true` if this node has been inserted into a tree, `false` if it is\nmerely associated with a tree and has not yet been inserted."
      },
      "isRoot": {
       "!type": "fn() -> bool",
       "!doc": "Returns `true` if this node is the root of the tree."
      },
      "next": {
       "!type": "fn() -> +tree.Tree.Node",
       "!doc": "Returns this nodes next sibling, or `undefined` if this node is the last\nchild."
      },
      "prepend": {
       "!type": "fn(node: +yui.Object, options?: +yui.Object) -> +tree.Tree.Node",
       "!doc": "Prepends a node or array of nodes at the beginning of this nodes children.\n\nIf a node being prepended is from another tree, it and all its children will\nbe removed from that tree and moved to this one."
      },
      "previous": {
       "!type": "fn() -> +tree.Tree.Node",
       "!doc": "Returns this nodes previous sibling, or `undefined` if this node is the\nfirst child"
      },
      "remove": {
       "!type": "fn(options?: +yui.Object) -> !this",
       "!doc": "Removes this node from its parent node."
      },
      "size": {
       "!type": "fn() -> number",
       "!doc": "Returns the total number of nodes contained within this node, including all\ndescendants of this nodes children."
      },
      "toJSON": {
       "!type": "fn() -> +yui.Object",
       "!doc": "Serializes this node to an object suitable for use in JSON."
      },
      "traverse": {
       "!type": "fn(options?: +yui.Object, callback: fn(node: +tree.Tree.Node), thisObj?: +yui.Object) -> +Mixed",
       "!doc": "Performs a depth-first traversal of this node, passing it and each of its\ndescendants to the specified _callback_.\n\nIf the callback function returns `Tree.STOP_TRAVERSAL`, traversal will be\nstopped immediately. Otherwise, it will continue until the deepest\ndescendant of _node_ has been traversed, or until each branch has been\ntraversed to the optional maximum depth limit.\n\nSince traversal is depth-first, that means nodes are traversed like this:\n\n            1\n          / | \\\n         2  8  9\n        / \\     \\\n       3   7    10\n     / | \\      / \\\n    4  5  6    11 12"
      }
     }
    },
    "Openable": {
     "!type": "fn() -> +tree.Tree.Openable",
     "prototype": {
      "closeNode": {
       "!type": "fn(node: +tree.Tree.Node, options?: +yui.Object) -> !this",
       "!doc": "Closes the specified node if it isnt already closed."
      },
      "openNode": {
       "!type": "fn(node: +tree.Tree.Node, options?: +yui.Object) -> !this",
       "!doc": "Opens the specified node if it isnt already open."
      },
      "toggleOpenNode": {
       "!type": "fn(node: +tree.Tree.Node, options?: +yui.Object) -> !this",
       "!doc": "Toggles the open/closed state of the specified node, closing it if its\ncurrently open or opening it if its currently closed."
      }
     }
    },
    "Selectable": {
     "!type": "fn() -> +tree.Tree.Selectable",
     "prototype": {
      "getSelectedNodes": {
       "!type": "fn() -> [+tree.Tree.Node.Selectable]",
       "!doc": "Returns an array of nodes that are currently selected."
      },
      "selectNode": {
       "!type": "fn(node: +tree.Tree.Node.Selectable, options?: +yui.Object) -> !this",
       "!doc": "Selects the specified node."
      },
      "unselect": {
       "!type": "fn(options?: +yui.Object) -> !this",
       "!doc": "Unselects all selected nodes."
      },
      "unselectNode": {
       "!type": "fn(node: +tree.Tree.Node.Selectable, options?: +yui.Object) -> !this",
       "!doc": "Unselects the specified node."
      },
      "multiSelect": {
       "!type": "bool",
       "!doc": "Whether or not to allow multiple nodes to be selected at once."
      }
     }
    },
    "Sortable": {
     "!type": "fn(config?: +yui.Object) -> +tree.Tree.Sortable",
     "prototype": {
      "sortReverse": {
       "!type": "bool",
       "!doc": "If `true`, node children will be sorted in reverse (descending) order by\ndefault. Otherwise theyll be sorted in ascending order."
      },
      "sort": {
       "!type": "fn(options?: +yui.Object) -> !this",
       "!doc": "Sorts the children of every node in this tree.\n\nA `sort` event will be fired for each node whose children are sorted, which\ncan get very noisy. If this is a large tree, you may want to set the\n`silent` option to `true` to suppress these events."
      },
      "sortComparator": {
       "!type": "fn(node: +tree.Tree.Node) -> number",
       "!doc": "Default comparator function to use when sorting a nodes children if the\nnode itself doesnt have a custom comparator function.\n\nIf not specified, insertion order will be used by default."
      },
      "sortNode": {
       "!type": "fn(node: +tree.Tree.Node, options?: +yui.Object) -> !this",
       "!doc": "Sorts the children of the specified node.\n\nBy default, only the nodes direct children are sorted. To sort all nodes in\nthe hierarchy (children, childrens children, etc.), set the `deep` option\nto `true`. If this is a very deep hierarchy, you may also want to set\n`silent` to true to avoid generating a flood of `sort` events."
      }
     }
    },
    "STOP_TRAVERSAL": {
     "!type": "?",
     "!doc": "Return this value from a `Tree#traverseNode()` or `Tree.Node#traverse()`\ncallback to immediately stop traversal."
    }
   }
  },
  "uploader_html5": {
   "UploaderHTML5": {
    "!type": "fn() -> +uploader_html5.UploaderHTML5",
    "prototype": {
     "!proto": "widget.Widget.prototype",
     "queue": {
      "!type": "+uploader_queue.Uploader.Queue",
      "!doc": "Stored reference to the instance of Uploader.Queue used to manage\nthe upload process. This is a read-only property that only exists\nduring an active upload process. Only one queue can be active at\na time; if an upload start is attempted while a queue is active,\nit will be ignored."
     },
     "openFileSelectDialog": {
      "!type": "fn()",
      "!doc": "Opens the File Selection dialog by simulating a click on the file input field."
     },
     "upload": {
      "!type": "fn(file: +file.File, url: string, postVars: +yui.Object)",
      "!doc": "Starts the upload of a specific file."
     },
     "uploadAll": {
      "!type": "fn(url: string, postVars?: +yui.Object)",
      "!doc": "Starts the upload of all files on the file list, using an automated queue."
     },
     "uploadThese": {
      "!type": "fn(files: +yui.Array, url: string, postVars?: +yui.Object)",
      "!doc": "Starts the upload of the files specified in the first argument, using an automated queue."
     },
     "appendNewFiles": {
      "!type": "bool",
      "!doc": "A Boolean indicating whether newly selected files should be appended\nto the existing file list, or whether they should replace it."
     },
     "buttonClassNames": {
      "!type": "+yui.Object",
      "!doc": "The names of CSS classes that correspond to different button states\nof the \"Select Files\" control. These classes are assigned to the\n\"Select Files\" control based on the configuration of the uploader.\nCurrently, the only class name used is that corresponding to the\n`disabled` state of the uploader. Other button states should be managed\ndirectly via CSS selectors.\n<ul>\n  <li> <strong>`disabled`</strong>: the class corresponding to the disabled state\n     of the \"Select Files\" button.</li>\n</ul>"
     },
     "dragAndDropArea": {
      "!type": "+node.Node",
      "!doc": "The node that serves as the drop target for files."
     },
     "enabled": {
      "!type": "bool",
      "!doc": "A Boolean indicating whether the uploader is enabled or disabled for user input."
     },
     "errorAction": {
      "!type": "string",
      "!doc": "The action  performed when an upload error occurs for a specific file being uploaded.\nThe possible values are:\n<ul>\n  <li> <strong>`UploaderQueue.CONTINUE`</strong>: the error is ignored and the upload process is continued.</li>\n  <li> <strong>`UploaderQueue.STOP`</strong>: the upload process is stopped as soon as any other parallel file\n    uploads are finished.</li>\n  <li> <strong>`UploaderQueue.RESTART_ASAP`</strong>: the file is added back to the front of the queue.</li>\n  <li> <strong>`UploaderQueue.RESTART_AFTER`</strong>: the file is added to the back of the queue.</li>\n</ul>"
     },
     "fileFilters": {
      "!type": "+yui.Array",
      "!doc": "An array indicating what fileFilters should be applied to the file\nselection dialog. Each element in the array should be a string\nindicating the Media (MIME) type for the files that should be supported\nfor selection. The Media type strings should be properly formatted\nor this parameter will be ignored. Examples of valid strings include:\n\"audio/*\", \"video/*\", \"application/pdf\", etc. More information\non valid Media type strings is available here:\nhttp://www.iana.org/assignments/media-types/index.html"
     },
     "fileFilterFunction": {
      "!type": "fn()",
      "!doc": "A filtering function that is applied to every file selected by the user.\nThe function receives the `Y.File` object and must return a Boolean value.\nIf a `false` value is returned, the file in question is not added to the\nlist of files to be uploaded.\nUse this function to put limits on file sizes or check the file names for\ncorrect extension, but make sure that a server-side check is also performed,\nsince any client-side restrictions are only advisory and can be circumvented."
     },
     "fileFieldName": {
      "!type": "string",
      "!doc": "A String specifying what should be the POST field name for the file\ncontent in the upload request."
     },
     "fileList": {
      "!type": "+yui.Array",
      "!doc": "The array of files to be uploaded. All elements in the array\nmust be instances of `Y.File` and be instantiated with an instance\nof native JavaScript File() class."
     },
     "multipleFiles": {
      "!type": "bool",
      "!doc": "A Boolean indicating whether multiple file selection is enabled."
     },
     "postVarsPerFile": {
      "!type": "+yui.Object",
      "!doc": "An object, keyed by `fileId`, containing sets of key-value pairs\nthat should be passed as POST variables along with each corresponding\nfile. This attribute is only used if no POST variables are specifed\nin the upload method call."
     },
     "selectButtonLabel": {
      "!type": "string",
      "!doc": "The label for the \"Select Files\" widget. This is the value that replaces the\n`{selectButtonLabel}` token in the `SELECT_FILES_BUTTON` template."
     },
     "selectFilesButton": {
      "!type": "+node.Node",
      "!doc": "The widget that serves as the \"Select Files control for the file uploader"
     },
     "simLimit": {
      "!type": "number",
      "!doc": "The number of files that can be uploaded\nsimultaneously if the automatic queue management\nis used. This value can be in the range between 2\nand 5."
     },
     "uploadURL": {
      "!type": "string",
      "!doc": "The URL to which file upload requested are POSTed. Only used if a different url is not passed to the upload method call."
     },
     "uploadHeaders": {
      "!type": "+yui.Object",
      "!doc": "Additional HTTP headers that should be included\nin the upload request."
     },
     "withCredentials": {
      "!type": "bool",
      "!doc": "A Boolean that specifies whether the file should be\nuploaded with the appropriate user credentials for the\ndomain."
     },
     "retryCount": {
      "!type": "number",
      "!doc": "The number of times to try re-uploading a file that failed to upload before\ncancelling its upload."
     }
    },
    "HTML5FILEFIELD_TEMPLATE": {
     "!type": "string",
     "!doc": "The template for the hidden file input field container. The file input field will only\naccept clicks if its visibility is set to hidden (and will not if its `display` value\nis set to `none`)"
    },
    "SELECT_FILES_BUTTON": {
     "!type": "string",
     "!doc": "The template for the \"Select Files\" button."
    },
    "TYPE": {
     "!type": "string",
     "!doc": "The static property reflecting the type of uploader that `Y.Uploader`\naliases. The UploaderHTML5 value is `\"html5\"`."
    }
   }
  },
  "uploader_queue": {
   "Uploader": {
    "!type": "fn()",
    "Queue": {
     "!type": "fn() -> +uploader_queue.Uploader.Queue",
     "prototype": {
      "!proto": "base.Base.prototype",
      "startUpload": {
       "!type": "fn()",
       "!doc": "Starts uploading the queued up file list."
      },
      "pauseUpload": {
       "!type": "fn()",
       "!doc": "Pauses the upload process. The ongoing file uploads\nwill complete after this method is called, but no\nnew ones will be launched."
      },
      "restartUpload": {
       "!type": "fn()",
       "!doc": "Restarts a paused upload process."
      },
      "forceReupload": {
       "!type": "fn(file: +file.File)",
       "!doc": "If a particular file is stuck in an ongoing upload without\nany progress events, this method allows to force its reupload\nby cancelling its upload and immediately relaunching it."
      },
      "addToQueueTop": {
       "!type": "fn(file: +file.File)",
       "!doc": "Add a new file to the top of the queue (the upload will be\nlaunched as soon as the current number of uploading files\ndrops below the maximum permissible value)."
      },
      "addToQueueBottom": {
       "!type": "fn(file: +file.File)",
       "!doc": "Add a new file to the bottom of the queue (the upload will be\nlaunched after all the other queued files are uploaded.)"
      },
      "cancelUpload": {
       "!type": "fn(file: +file.File)",
       "!doc": "Cancels a specific files upload. If no argument is passed,\nall ongoing uploads are cancelled and the upload process is\nstopped."
      },
      "simUploads": {
       "!type": "number",
       "!doc": "Maximum number of simultaneous uploads; must be in the\nrange between 1 and 5. The value of `2` is default. It\nis recommended that this value does not exceed 3."
      },
      "errorAction": {
       "!type": "string",
       "!doc": "The action to take in case of error. The valid values for this attribute are:\n`Y.Uploader.Queue.CONTINUE` (the upload process should continue on other files,\nignoring the error), `Y.Uploader.Queue.STOP` (the upload process\nshould stop completely), `Y.Uploader.Queue.RESTART_ASAP` (the upload\nshould restart immediately on the errored out file and continue as planned), or\nY.Uploader.Queue.RESTART_AFTER (the upload of the errored out file should restart\nafter all other files have uploaded)"
      },
      "bytesUploaded": {
       "!type": "number",
       "!doc": "The total number of bytes that has been uploaded."
      },
      "bytesTotal": {
       "!type": "number",
       "!doc": "The total number of bytes in the queue."
      },
      "fileList": {
       "!type": "+yui.Array",
       "!doc": "The queue file list. This file list should only be modified\nbefore the upload has been started; modifying it after starting\nthe upload has no effect, and `addToQueueTop` or `addToQueueBottom` methods\nshould be used instead."
      },
      "fileFieldName": {
       "!type": "string",
       "!doc": "A String specifying what should be the POST field name for the file\ncontent in the upload request."
      },
      "uploadURL": {
       "!type": "string",
       "!doc": "The URL to POST the file upload requests to."
      },
      "uploadHeaders": {
       "!type": "+yui.Object",
       "!doc": "Additional HTTP headers that should be included\nin the upload request. Due to Flash Player security\nrestrictions, this attribute is only honored in the\nHTML5 Uploader."
      },
      "withCredentials": {
       "!type": "bool",
       "!doc": "A Boolean that specifies whether the file should be\nuploaded with the appropriate user credentials for the\ndomain. Due to Flash Player security restrictions, this\nattribute is only honored in the HTML5 Uploader."
      },
      "perFileParameters": {
       "!type": "+yui.Object",
       "!doc": "An object, keyed by `fileId`, containing sets of key-value pairs\nthat should be passed as POST variables along with each corresponding\nfile."
      },
      "retryCount": {
       "!type": "number",
       "!doc": "The number of times to try re-uploading a file that failed to upload before\ncancelling its upload."
      }
     },
     "CONTINUE": {
      "!type": "string",
      "!doc": "Static constant for the value of the `errorAction` attribute:\nprescribes the queue to continue uploading files in case of\nan error."
     },
     "STOP": {
      "!type": "string",
      "!doc": "Static constant for the value of the `errorAction` attribute:\nprescribes the queue to stop uploading files in case of\nan error."
     },
     "RESTART_ASAP": {
      "!type": "string",
      "!doc": "Static constant for the value of the `errorAction` attribute:\nprescribes the queue to restart a file upload immediately in case of\nan error."
     },
     "RESTART_AFTER": {
      "!type": "string",
      "!doc": "Static constant for the value of the `errorAction` attribute:\nprescribes the queue to restart an errored out file upload after\nother files have finished uploading."
     },
     "STOPPED": {
      "!type": "string",
      "!doc": "Static constant for the value of the `_currentState` property:\nimplies that the queue is currently not uploading files."
     },
     "UPLOADING": {
      "!type": "string",
      "!doc": "Static constant for the value of the `_currentState` property:\nimplies that the queue is currently uploading files."
     }
    }
   }
  },
  "uploader": {
   "Uploader": {
    "!type": "fn()",
    "TYPE": {
     "!type": "string",
     "!doc": "The static property reflecting the type of uploader that `Y.Uploader`\naliases. The possible values are:\n<ul>\n<li><strong>`\"html5\"`</strong>: Y.Uploader is an alias for <a href=\"UploaderHTML5.html\">Y.UploaderHTML5</a></li>\n<li><strong>`\"flash\"`</strong>: Y.Uploader is an alias for <a href=\"UploaderFlash.html\">Y.UploaderFlash</a></li>\n<li><strong>`\"none\"`</strong>: Neither Flash not HTML5 are available, and Y.Uploader does\nnot reference an actual implementation.</li>\n</ul>"
    }
   }
  },
  "widget_anim": {
   "Plugin": {
    "WidgetAnim": {
     "!type": "fn()",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "duration": {
       "!type": "number",
       "!doc": "Default duration in seconds. Used as the default duration for the default animation implementations"
      },
      "animShow": {
       "!type": "+anim.Anim",
       "!doc": "Default animation instance used for showing the widget (opacity fade-in)"
      },
      "animHide": {
       "!type": "+anim.Anim",
       "!doc": "Default animation instance used for hiding the widget (opacity fade-out)"
      },
      "initializer": {
       "!type": "fn(config: +yui.Object)",
       "!doc": "The initializer lifecycle implementation. Modifies the host widgets\nvisibililty implementation to add animation."
      },
      "destructor": {
       "!type": "fn()",
       "!doc": "The initializer destructor implementation. Responsible for destroying the configured\nanimation instances."
      }
     },
     "NS": {
      "!type": "string",
      "!doc": "The namespace for the plugin. This will be the property on the widget, which will\nreference the plugin instance, when its plugged in."
     },
     "NAME": {
      "!type": "string",
      "!doc": "The NAME of the WidgetAnim class. Used to prefix events generated\nby the plugin class."
     },
     "ANIMATIONS": {
      "!type": "+yui.Object",
      "!doc": "Pre-Packaged Animation implementations, which can be used for animShow and animHide attribute\nvalues."
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the plugin."
     }
    }
   }
  },
  "widget_autohide": {
   "WidgetAutohide": {
    "!type": "fn(config: +yui.Object)",
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "Static property used to define the default attribute\nconfiguration introduced by WidgetAutohide."
    },
    "prototype": {
     "hideOn": {
      "!type": "+array",
      "!doc": "An array of objects corresponding to the nodes, events, and keycodes to hide the widget on.\nThe implementer can supply an array of objects, with each object having the following properties:\n<p>eventName: (string, required): The eventName to listen to.</p>\n<p>node: (Y.Node, optional): The Y.Node that will fire the event (defaults to the boundingBox of the widget)</p>\n<p>keyCode: (string, optional): If listening for key events, specify the keyCode</p>\n<p>By default, this attribute consists of one object which will cause the widget to hide if the\nescape key is pressed.</p>"
     }
    }
   }
  },
  "widget_buttons": {
   "WidgetButtons": {
    "!type": "fn()",
    "prototype": {
     "buttons": {
      "!type": "+yui.Object",
      "!doc": "Collection containing a widgets buttons.\n\nThe collection is an Object which contains an Array of `Y.Node`s for every\n`WidgetStdMod` section (header, body, footer) which has one or more buttons.\nAll button nodes have the `Y.Plugin.Button` plugin applied.\n\nThis attribute is very flexible in the values it will accept. `buttons` can\nbe specified as a single Array, or an Object of Arrays keyed to a particular\nsection.\n\nAll specified values will be normalized to this type of structure:\n\n    {\n        header: [...],\n        footer: [...]\n    }\n\nA button can be specified as a `Y.Node`, config Object, or String name for a\npredefined button on the `BUTTONS` prototype property. When a config Object\nis provided, it will be merged with any defaults provided by a button with\nthe same `name` defined on the `BUTTONS` property.\n\nSee `addButton()` for the detailed list of configuration properties.\n\nFor convenience, a widgets buttons will always persist and remain rendered\nafter header/body/footer content updates. Buttons should be removed by\nupdating this attribute or using the `removeButton()` method."
     },
     "defaultButton": {
      "!type": "+node.Node",
      "!doc": "The current default button as configured through this widgets `buttons`.\n\nA button can be configured as the default button in the following ways:\n\n  * As a config Object with an `isDefault` property:\n    `{label: Okay, isDefault: true}`.\n\n  * As a Node with a `data-default` attribute:\n    `<button data-default=\"true\">Okay</button>`.\n\nThis attribute is **read-only**; anytime there are changes to this widgets\n`buttons`, the `defaultButton` will be updated if needed.\n\n**Note:** If two or more buttons are configured to be the default button,\nthe last one wins."
     },
     "BUTTONS": {
      "!type": "+yui.Object",
      "!doc": "Collection of predefined buttons mapped by name -> config.\n\nThese button configurations will serve as defaults for any button added to a\nwidgets buttons which have the same `name`.\n\nSee `addButton()` for a list of possible configuration values."
     },
     "BUTTONS_TEMPLATE": {
      "!type": "string",
      "!doc": "The HTML template to use when creating the node which wraps all buttons of a\nsection. By default it will have the CSS class: \"yui3-widget-buttons\"."
     },
     "DEFAULT_BUTTONS_SECTION": {
      "!type": "string",
      "!doc": "The default section to render buttons in when no section is specified."
     },
     "addButton": {
      "!type": "fn(button: +node.Node, section?: string, index?: number) -> !this",
      "!doc": "Adds a button to this widget.\n\nThe new button node will have the `Y.Plugin.Button` plugin applied, be added\nto this widgets `buttons`, and rendered in the specified `section` at the\nspecified `index` (or end of the section when no `index` is provided). If\nthe section does not exist, it will be created.\n\nThis fires the `buttonsChange` event and adds the following properties to\nthe event facade:\n\n  * `button`: The button node or config object to add.\n\n  * `section`: The `WidgetStdMod` section (header/body/footer) where the\n    button will be added.\n\n  * `index`: The index at which the button will be in the section.\n\n  * `src`: \"add\"\n\n**Note:** The `index` argument will be passed to the Array `splice()`\nmethod, therefore a negative value will insert the `button` that many items\nfrom the end. The `index` property on the `buttonsChange` event facade is\nthe index at which the `button` was added."
     },
     "getButton": {
      "!type": "fn(name: number, section?: string) -> +node.Node",
      "!doc": "Returns a button node from this widgets `buttons`."
     },
     "removeButton": {
      "!type": "fn(button: +node.Node, section?: string) -> !this",
      "!doc": "Removes a button from this widget.\n\nThe button will be removed from this widgets `buttons` and its DOM. Any\nevent subscriptions on the button which were created by this widget will be\ndetached. If the content section becomes empty after removing the button\nnode, then the section will also be removed.\n\nThis fires the `buttonsChange` event and adds the following properties to\nthe event facade:\n\n  * `button`: The button node to remove.\n\n  * `section`: The `WidgetStdMod` section (header/body/footer) where the\n    button should be removed from.\n\n  * `index`: The index at which the button exists in the section.\n\n  * `src`: \"remove\""
     }
    },
    "CLASS_NAMES": {
     "!type": "+yui.Object",
     "!doc": "CSS classes used by `WidgetButtons`."
    },
    "NON_BUTTON_NODE_CFG": {
     "!type": "+yui.Array",
     "!doc": "The list of button configuration properties which are specific to\n`WidgetButtons` and should not be passed to `Y.Plugin.Button.createNode()`."
    }
   }
  },
  "widget_child": {
   "WidgetChild": {
    "!type": "fn(config: +yui.Object)",
    "prototype": {
     "selected": {
      "!type": "number",
      "!doc": "Number indicating if the Widget is selected.  Possible\nvalues are:\n<dl>\n<dt>0</dt> <dd>(Default) Not selected</dd>\n<dt>1</dt> <dd>Fully selected</dd>\n<dt>2</dt> <dd>Partially selected</dd>\n</dl>"
     },
     "index": {
      "!type": "number",
      "!doc": "Number representing the Widgets ordinal position in its\nparent Widget."
     },
     "parent": {
      "!type": "+widget.Widget",
      "!doc": "Retrieves the parent of the Widget in the object hierarchy."
     },
     "depth": {
      "!type": "number",
      "!doc": "Number representing the depth of this Widget relative to\nthe root Widget in the object heirarchy."
     },
     "root": {
      "!type": "+widget.Widget",
      "!doc": "Returns the root Widget in the object hierarchy.  If the\nROOT_TYPE property is set, the search for the root Widget will be\nconstrained to parent Widgets of the specified type."
     },
     "ROOT_TYPE": {
      "!type": "+yui.Object",
      "!doc": "Constructor reference used to determine the root of a Widget-based\nobject tree.\n<p>\nCurrently used to control the behavior of the <code>root</code>\nattribute so that recursing up the object heirarchy can be constrained\nto a specific type of Widget.  Widget authors should set this property\nto the constructor function for a given Widget implementation.\n</p>"
     }
    }
   }
  },
  "widget": {
   "Widget": {
    "!type": "fn(config: +yui.Object) -> +widget.Widget",
    "prototype": {
     "!proto": "base.Base.prototype",
     "next": {
      "!type": "fn(circular: bool) -> +widget.Widget",
      "!doc": "Returns the Widgets next sibling."
     },
     "previous": {
      "!type": "fn(circular: bool) -> +widget.Widget",
      "!doc": "Returns the Widgets previous sibling."
     },
     "isRoot": {
      "!type": "fn() -> bool",
      "!doc": "Determines if the Widget is the root Widget in the\nobject hierarchy."
     },
     "ancestor": {
      "!type": "fn(depth: number) -> +widget.Widget",
      "!doc": "Returns the Widget instance at the specified depth."
     },
     "id": {
      "!type": "string"
     },
     "rendered": {
      "!type": "bool",
      "!doc": "Flag indicating whether or not this Widget\nhas been through the render lifecycle phase."
     },
     "boundingBox": {
      "!type": "string",
      "!doc": "The outermost DOM node for the Widget, used for sizing and positioning\nof a Widget as well as a containing element for any decorator elements used\nfor skinning."
     },
     "contentBox": {
      "!type": "string",
      "!doc": "A DOM node that is a direct descendant of a Widgets bounding box that\nhouses its content."
     },
     "tabIndex": {
      "!type": "number",
      "!doc": "Number (between -32767 to 32767) indicating the widgets\nposition in the default tab flow.  The value is used to set the\n\"tabIndex\" attribute on the widgets bounding box.  Negative values allow\nthe widget to receive DOM focus programmatically (by calling the focus\nmethod), while being removed from the default tab flow.  A value of\nnull removes the \"tabIndex\" attribute from the widgets bounding box."
     },
     "focused": {
      "!type": "bool",
      "!doc": "Boolean indicating if the Widget, or one of its descendants,\nhas focus."
     },
     "disabled": {
      "!type": "bool",
      "!doc": "Boolean indicating if the Widget should be disabled. The disabled implementation\nis left to the specific classes extending widget."
     },
     "visible": {
      "!type": "bool",
      "!doc": "Boolean indicating whether or not the Widget is visible."
     },
     "height": {
      "!type": "string",
      "!doc": "String with units, or number, representing the height of the Widget. If a number is provided,\nthe default unit, defined by the Widgets DEF_UNIT, property is used."
     },
     "width": {
      "!type": "string",
      "!doc": "String with units, or number, representing the width of the Widget. If a number is provided,\nthe default unit, defined by the Widgets DEF_UNIT, property is used."
     },
     "strings": {
      "!type": "+yui.Object",
      "!doc": "Collection of strings used to label elements of the Widgets UI."
     },
     "render": {
      "!type": "fn(parentNode: +yui.Object) -> !this",
      "!doc": "Establishes the initial DOM for the widget. Invoking this\nmethod will lead to the creating of all DOM elements for\nthe widget (or the manipulation of existing DOM elements\nfor the progressive enhancement use case).\n<p>\nThis method should only be invoked once for an initialized\nwidget.\n</p>\n<p>\nIt delegates to the widget specific renderer method to do\nthe actual work.\n</p>"
     },
     "getClassName": {
      "!type": "fn(classnames?: string)",
      "!doc": "Returns a class name prefixed with the the value of the\n<code>YUI.config.classNamePrefix</code> attribute + the instances <code>NAME</code> property.\nUses <code>YUI.config.classNameDelimiter</code> attribute to delimit the provided strings.\ne.g.\n<code>\n<pre>\n   // returns \"yui-slider-foo-bar\", for a slider instance\n   var scn = slider.getClassName(foo,bar);\n\n   // returns \"yui-overlay-foo-bar\", for an overlay instance\n   var ocn = overlay.getClassName(foo,bar);\n</pre>\n</code>"
     },
     "destroy": {
      "!type": "fn(destroyAllNodes: bool) -> !this",
      "!doc": "<p>\nDestroy lifecycle method. Fires the destroy\nevent, prior to invoking destructors for the\nclass hierarchy.\n\nOverrides Bases implementation, to support arguments to destroy\n</p>\n<p>\nSubscribers to the destroy\nevent can invoke preventDefault on the event object, to prevent destruction\nfrom proceeding.\n</p>"
     },
     "hide": {
      "!type": "fn() -> !this",
      "!doc": "Hides the Widget by setting the \"visible\" attribute to \"false\"."
     },
     "show": {
      "!type": "fn() -> !this",
      "!doc": "Shows the Widget by setting the \"visible\" attribute to \"true\"."
     },
     "focus": {
      "!type": "fn() -> !this",
      "!doc": "Causes the Widget to receive the focus by setting the \"focused\"\nattribute to \"true\"."
     },
     "blur": {
      "!type": "fn() -> !this",
      "!doc": "Causes the Widget to lose focus by setting the \"focused\" attribute\nto \"false\""
     },
     "enable": {
      "!type": "fn() -> !this",
      "!doc": "Set the Widgets \"disabled\" attribute to \"false\"."
     },
     "disable": {
      "!type": "fn() -> !this",
      "!doc": "Set the Widgets \"disabled\" attribute to \"true\"."
     },
     "toString": {
      "!type": "fn() -> string",
      "!doc": "Generic toString implementation for all widgets."
     },
     "DEF_UNIT": {
      "!type": "string",
      "!doc": "Default unit to use for dimension values"
     },
     "DEF_PARENT_NODE": {
      "!type": "string",
      "!doc": "Default node to render the bounding box to. If not set,\nwill default to the current document body."
     },
     "CONTENT_TEMPLATE": {
      "!type": "string",
      "!doc": "Property defining the markup template for content box. If your Widget doesnt\nneed the dual boundingBox/contentBox structure, set CONTENT_TEMPLATE to null,\nand contentBox and boundingBox will both point to the same Node."
     },
     "BOUNDING_TEMPLATE": {
      "!type": "string",
      "!doc": "Property defining the markup template for bounding box."
     },
     "getString": {
      "!type": "fn(key: string) -> string",
      "!doc": "Helper method to get a specific string value"
     },
     "getStrings": {
      "!type": "fn(key: string) -> string",
      "!doc": "Helper method to get the complete set of strings for the widget"
     },
     "srcNode": {
      "!type": "string",
      "!doc": "The DOM node to parse for configuration values, passed to the Widgets HTML_PARSER definition"
     },
     "getSkinName": {
      "!type": "fn(skinPrefix?: string) -> string",
      "!doc": "Returns the name of the skin thats currently applied to the widget.\n\nSearches up the Widgets ancestor axis for, by default, a class\nyui3-skin-(name), and returns the (name) portion. Otherwise, returns null.\n\nThis is only really useful after the widgets DOM structure is in the\ndocument, either by render or by progressive enhancement."
     },
     "UI_EVENTS": {
      "!type": "+yui.Object",
      "!doc": "Map of DOM events that should be fired as Custom Events by the\nWidget instance."
     }
    },
    "NAME": {
     "!type": "string",
     "!doc": "Static property provides a string to identify the class.\n<p>\nCurrently used to apply class identifiers to the bounding box\nand to classify events fired by the widget.\n</p>"
    },
    "UI_SRC": {
     "!type": "string",
     "!doc": "Constant used to identify state changes originating from\nthe DOM (as opposed to the JavaScript model)."
    },
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "Static property used to define the default attribute\nconfiguration for the Widget."
    },
    "getByNode": {
     "!type": "fn(node: +node.Node) -> +widget.Widget",
     "!doc": "Returns the widget instance whose bounding box contains, or is, the given node.\n<p>\nIn the case of nested widgets, the nearest bounding box ancestor is used to\nreturn the widget instance.\n</p>"
    },
    "HTML_PARSER": {
     "!type": "+yui.Object",
     "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box. e.g.:\n<pre>\n  {\n      // Set single Node references using selector syntax\n      // (selector is run through node.one)\n      titleNode: \"span.yui-title\",\n      // Set NodeList references using selector syntax\n      // (array indicates selector is to be run through node.all)\n      listNodes: [\"li.yui-item\"],\n      // Set other attribute types, using a parse function.\n      // Context is set to the widget instance.\n      label: function(contentBox) {\n          return contentBox.one(\"span.title\").get(\"innerHTML\");\n      }\n  }\n</pre>"
    }
   }
  },
  "widget_modality": {
   "WidgetModality": {
    "!type": "fn(config: +yui.Object)",
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "Static property used to define the default attribute\nconfiguration introduced by WidgetModality."
    },
    "prototype": {
     "maskNode": {
      "!type": "+Y.Node",
      "!doc": "Returns a Y.Node instance of the node being used as the mask."
     },
     "modal": {
      "!type": "bool",
      "!doc": "Whether the widget should be modal or not."
     },
     "focusOn": {
      "!type": "+array",
      "!doc": "An array of objects corresponding to the nodes and events that will trigger a re-focus back on the widget.\nThe implementer can supply an array of objects, with each object having the following properties:\n<p>eventName: (string, required): The eventName to listen to.</p>\n<p>node: (Y.Node, optional): The Y.Node that will fire the event (defaults to the boundingBox of the widget)</p>\n<p>By default, this attribute consists of two objects which will cause the widget to re-focus if anything\noutside the widget is clicked on or focussed upon.</p>"
     },
     "STACK": {
      "!type": "?",
      "!doc": "A stack of Y.Widget objects representing the current hierarchy of modal widgets presently displayed on the screen"
     },
     "_focus": {
      "!type": "fn()",
      "!doc": "Provides mouse and tab focus to the widgets bounding box."
     },
     "_blur": {
      "!type": "fn()",
      "!doc": "Blurs the widget."
     },
     "_getMaskNode": {
      "!type": "fn() -> +node.Node",
      "!doc": "Returns the Y.Node instance of the maskNode"
     },
     "_uiSetHostVisibleModal": {
      "!type": "fn(Whether: bool)",
      "!doc": "Performs events attaching/detaching, stack shifting and mask repositioning based on the visibility of the widget"
     },
     "_uiSetHostZIndexModal": {
      "!type": "fn(ZIndex: number)",
      "!doc": "Sets the z-index of the mask node."
     },
     "_attachUIHandlesModal": {
      "!type": "fn()",
      "!doc": "Attaches UI Listeners for \"clickoutside\" and \"focusoutside\" on the\nwidget. When these events occur, and the widget is modal, focus is\nshifted back onto the widget."
     },
     "_detachUIHandlesModal": {
      "!type": "fn()",
      "!doc": "Detaches all UI Listeners that were set in _attachUIHandlesModal from the widget."
     },
     "_afterHostVisibleChangeModal": {
      "!type": "fn(e: +event_custom.EventFacade)",
      "!doc": "Default function that is called when visibility is changed on the widget."
     },
     "_afterHostZIndexChangeModal": {
      "!type": "fn(e: +event_custom.EventFacade)",
      "!doc": "Default function that is called when z-index is changed on the widget."
     },
     "isNested": {
      "!type": "fn()",
      "!doc": "Returns a boolean representing whether the current widget is in a \"nested modality\" state.\nThis is done by checking the number of widgets currently on the stack."
     },
     "_repositionMask": {
      "!type": "fn(nextElem: +widget.Widget)",
      "!doc": "Repositions the mask in the DOM for nested modality cases."
     },
     "_afterFocusOnChange": {
      "!type": "fn()",
      "!doc": "Default function called when focusOn Attribute is changed. Remove existing listeners and create new listeners."
     }
    },
    "_GET_MASK": {
     "!type": "fn()",
     "!doc": "Returns the mask if it exists on the page - otherwise creates a mask. Theres only\none mask on a page at a given time.\n<p>\nThis method in invoked internally by the getter of the maskNode ATTR.\n</p>"
    }
   }
  },
  "widget_parent": {
   "WidgetParent": {
    "!type": "fn(config: +yui.Object) -> +widget_parent.WidgetParent",
    "prototype": {
     "defaultChildType": {
      "!type": "string",
      "!doc": "String representing the default type of the children\nmanaged by this Widget.  Can also supply default type as a constructor\nreference."
     },
     "activeDescendant": {
      "!type": "+widget.Widget",
      "!doc": "Returns the Widgets currently focused descendant Widget."
     },
     "multiple": {
      "!type": "bool",
      "!doc": "Boolean indicating if multiple children can be selected at\nonce.  Whether or not multiple selection is enabled is always delegated\nto the value of the <code>multiple</code> attribute of the root widget\nin the object hierarchy."
     },
     "selection": {
      "!type": "+collection.ArrayList",
      "!doc": "Returns the currently selected child Widget.  If the\n<code>mulitple</code> attribte is set to <code>true</code> will\nreturn an Y.ArrayList instance containing the currently selected\nchildren.  If no children are selected, will return null."
     },
     "destructor": {
      "!type": "fn()",
      "!doc": "The destructor implementation for Parent widgets. Destroys all children."
     },
     "add": {
      "!type": "fn(child: +widget.Widget, child: +yui.Array, index: number) -> +collection.ArrayList",
      "!doc": "Adds a Widget as a child.  If the specified Widget already\nhas a parent it will be removed from its current parent before\nbeing added as a child."
     },
     "remove": {
      "!type": "fn(index: number) -> +widget.Widget",
      "!doc": "Removes the Widget from its parent.  Optionally, can remove\na child by specifying its index."
     },
     "removeAll": {
      "!type": "fn() -> +collection.ArrayList",
      "!doc": "Removes all of the children from the Widget."
     },
     "selectChild": {
      "!type": "fn(i: number)",
      "!doc": "Selects the child at the given index (zero-based)."
     },
     "selectAll": {
      "!type": "fn()",
      "!doc": "Selects all children."
     },
     "deselectAll": {
      "!type": "fn()",
      "!doc": "Deselects all children."
     }
    }
   }
  },
  "widget_position_align": {
   "WidgetPositionAlign": {
    "!type": "fn(config: +yui.Object) -> +widget_position_align.WidgetPositionAlign",
    "prototype": {
     "align": {
      "!type": "fn(node?: +node.Node, points?: [+yui.Array]) -> !this",
      "!doc": "Aligns this widget to the provided `Node` (or viewport) using the provided\npoints. This method can be invoked with no arguments which will cause the\nwidgets current `align` Attribute value to be synced to the DOM."
     },
     "centered": {
      "!type": "fn(node?: +node.Node) -> !this",
      "!doc": "Centers the widget in the viewport, or if a `Node` is passed in, it will\nbe centered to that `Node`."
     },
     "alignOn": {
      "!type": "+yui.Array",
      "!doc": "An Array of Objects corresponding to the `Node`s and events that will cause\nthe alignment of this widget to be synced to the DOM.\n\nThe `alignOn` Attribute is expected to be an Array of Objects with the\nfollowing properties:\n\n  * __`eventName`__: The String event name to listen for.\n\n  * __`node`__: The optional `Node` that will fire the event, it can be a\n    `Node` reference or a selector String. This will default to the widgets\n    `boundingBox`."
     }
    },
    "TL": {
     "!type": "string",
     "!doc": "Constant used to specify the top-left corner for alignment"
    },
    "TR": {
     "!type": "string",
     "!doc": "Constant used to specify the top-right corner for alignment"
    },
    "BL": {
     "!type": "string",
     "!doc": "Constant used to specify the bottom-left corner for alignment"
    },
    "BR": {
     "!type": "string",
     "!doc": "Constant used to specify the bottom-right corner for alignment"
    },
    "TC": {
     "!type": "string",
     "!doc": "Constant used to specify the top edge-center point for alignment"
    },
    "RC": {
     "!type": "string",
     "!doc": "Constant used to specify the right edge, center point for alignment"
    },
    "BC": {
     "!type": "string",
     "!doc": "Constant used to specify the bottom edge, center point for alignment"
    },
    "LC": {
     "!type": "string",
     "!doc": "Constant used to specify the left edge, center point for alignment"
    },
    "CC": {
     "!type": "string",
     "!doc": "Constant used to specify the center of widget/node/viewport for alignment"
    }
   }
  },
  "widget_position_constrain": {
   "WidgetPositionConstrain": {
    "!type": "fn(User: +yui.Object)",
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "Static property used to define the default attribute\nconfiguration introduced by WidgetPositionConstrain."
    },
    "prototype": {
     "constrain": {
      "!type": "fn(xy: +yui.Array, node: +node.Node)",
      "!doc": "Constrains the widgets bounding box to a node (or the viewport). If xy or node are not\npassed in, the current position and the value of \"constrain\" will be used respectively.\n\nThe widgets position will be changed to the constrained position."
     },
     "preventOverlap": {
      "!type": "bool",
      "!doc": "If set to true, and WidgetPositionAlign is also added to the Widget,\nconstrained positioning will attempt to prevent the widgets bounding box from overlapping\nthe element to which it has been aligned, by flipping the orientation of the alignment\nfor corner based alignments"
     },
     "getConstrainedXY": {
      "!type": "fn(xy: +yui.Array, node: +node.Node) -> +yui.Array",
      "!doc": "Calculates the constrained positions for the XY positions provided, using\nthe provided node argument is passed in. If no node value is passed in, the value of\nthe \"constrain\" attribute is used."
     }
    }
   }
  },
  "widget_position": {
   "WidgetPosition": {
    "!type": "fn(config: +yui.Object)",
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "Static property used to define the default attribute\nconfiguration introduced by WidgetPosition."
    },
    "prototype": {
     "x": {
      "!type": "number",
      "!doc": "Page X co-ordinate for the widget. This attribute acts as a facade for the\nxy attribute. Changes in position can be monitored by listening for xyChange events."
     },
     "y": {
      "!type": "number",
      "!doc": "Page Y co-ordinate for the widget. This attribute acts as a facade for the\nxy attribute. Changes in position can be monitored by listening for xyChange events."
     },
     "xy": {
      "!type": "+yui.Array",
      "!doc": "Page XY co-ordinate pair for the widget."
     },
     "move": {
      "!type": "fn(x: number, y?: number)",
      "!doc": "Moves the Widget to the specified page xy co-ordinate position."
     },
     "syncXY": {
      "!type": "fn()",
      "!doc": "Synchronizes the Panels \"xy\", \"x\", and \"y\" properties with the\nWidgets position in the DOM."
     }
    },
    "POSITIONED_CLASS_NAME": {
     "!type": "string",
     "!doc": "Default class used to mark the boundingBox of a positioned widget."
    }
   }
  },
  "widget_stack": {
   "WidgetStack": {
    "!type": "fn(User: +yui.Object)",
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "Static property used to define the default attribute\nconfiguration introduced by WidgetStack."
    },
    "prototype": {
     "shim": {
      "!type": "bool",
      "!doc": "Boolean flag to indicate whether or not a shim should be added to the Widgets\nboundingBox, to protect it from select box bleedthrough."
     },
     "zIndex": {
      "!type": "number",
      "!doc": "The z-index to apply to the Widgets boundingBox. Non-numerical values for\nzIndex will be converted to 0"
     },
     "sizeShim": {
      "!type": "fn()",
      "!doc": "For IE6, synchronizes the size and position of iframe shim to that of\nWidget bounding box which it is protecting. For all other browsers,\nthis method does not do anything."
     }
    },
    "HTML_PARSER": {
     "!type": "+yui.Object",
     "!doc": "The HTML parsing rules for the WidgetStack class."
    },
    "SHIM_CLASS_NAME": {
     "!type": "string",
     "!doc": "Default class used to mark the shim element"
    },
    "STACKED_CLASS_NAME": {
     "!type": "string",
     "!doc": "Default class used to mark the boundingBox of a stacked widget."
    },
    "SHIM_TEMPLATE": {
     "!type": "string",
     "!doc": "Default markup template used to generate the shim element."
    }
   }
  },
  "widget_stdmod": {
   "WidgetStdMod": {
    "!type": "fn(The: +yui.Object)",
    "HEADER": {
     "!type": "string",
     "!doc": "Constant used to refer the the standard module header, in methods which expect a section specifier"
    },
    "BODY": {
     "!type": "string",
     "!doc": "Constant used to refer the the standard module body, in methods which expect a section specifier"
    },
    "FOOTER": {
     "!type": "string",
     "!doc": "Constant used to refer the the standard module footer, in methods which expect a section specifier"
    },
    "AFTER": {
     "!type": "string",
     "!doc": "Constant used to specify insertion position, when adding content to sections of the standard module in\nmethods which expect a \"where\" argument.\n<p>\nInserts new content <em>before</em> the sections existing content.\n</p>"
    },
    "BEFORE": {
     "!type": "string",
     "!doc": "Constant used to specify insertion position, when adding content to sections of the standard module in\nmethods which expect a \"where\" argument.\n<p>\nInserts new content <em>before</em> the sections existing content.\n</p>"
    },
    "REPLACE": {
     "!type": "string",
     "!doc": "Constant used to specify insertion position, when adding content to sections of the standard module in\nmethods which expect a \"where\" argument.\n<p>\n<em>Replaces</em> the sections existing content, with new content.\n</p>"
    },
    "ATTRS": {
     "!type": "+yui.Object",
     "!doc": "Static property used to define the default attribute\nconfiguration introduced by WidgetStdMod."
    },
    "prototype": {
     "headerContent": {
      "!type": "+HTML",
      "!doc": "The content to be added to the header section. This will replace any existing content\nin the header. If you want to append, or insert new content, use the <a href=\"#method_setStdModContent\">setStdModContent</a> method."
     },
     "footerContent": {
      "!type": "+HTML",
      "!doc": "The content to be added to the footer section. This will replace any existing content\nin the footer. If you want to append, or insert new content, use the <a href=\"#method_setStdModContent\">setStdModContent</a> method."
     },
     "bodyContent": {
      "!type": "+HTML",
      "!doc": "The content to be added to the body section. This will replace any existing content\nin the body. If you want to append, or insert new content, use the <a href=\"#method_setStdModContent\">setStdModContent</a> method."
     },
     "fillHeight": {
      "!type": "fn(node: +node.Node)",
      "!doc": "Sets the height on the provided header, body or footer element to\nfill out the height of the Widget. It determines the height of the\nwidgets bounding box, based on its configured height value, and\nsets the height of the provided section to fill out any\nspace remaining after the other standard module section heights\nhave been accounted for.\n\n<p><strong>NOTE:</strong> This method is not designed to work if an explicit\nheight has not been set on the Widget, since for an \"auto\" height Widget,\nthe heights of the header/body/footer will drive the height of the Widget.</p>"
     },
     "setStdModContent": {
      "!type": "fn(section: string, content: string, where: string)",
      "!doc": "Updates the body section of the standard module with the content provided (either an HTML string, or node reference).\n<p>\nThis method can be used instead of the corresponding section content attribute if youd like to retain the current content of the section,\nand insert content before or after it, by specifying the <code>where</code> argument.\n</p>"
     },
     "getStdModNode": {
      "!type": "fn(section: string, forceCreate: bool) -> +node.Node",
      "!doc": "Returns the node reference for the specified `section`.\n\n**Note:** The DOM is not queried for the node reference. The reference\nstored by the widget instance is returned if it was set. Passing a\ntruthy for `forceCreate` will create the section node if it does not\nalready exist."
     }
    },
    "HTML_PARSER": {
     "!type": "+yui.Object",
     "!doc": "The HTML parsing rules for the WidgetStdMod class."
    },
    "SECTION_CLASS_NAMES": {
     "!type": "+yui.Object",
     "!doc": "Static hash of default class names used for the header,\nbody and footer sections of the standard module, keyed by\nthe section identifier (WidgetStdMod.STD_HEADER, WidgetStdMod.STD_BODY, WidgetStdMod.STD_FOOTER)"
    },
    "TEMPLATES": {
     "!type": "+yui.Object",
     "!doc": "The template HTML strings for each of the standard module sections. Section entries are keyed by the section constants,\nWidgetStdMod.HEADER, WidgetStdMod.BODY, WidgetStdMod.FOOTER, and contain the HTML to be added for each section.\ne.g.\n<pre>\n   {\n      header : &lt;div class=\"yui-widget-hd\"&gt;&lt;/div&gt;,\n      body : &lt;div class=\"yui-widget-bd\"&gt;&lt;/div&gt;,\n      footer : &lt;div class=\"yui-widget-ft\"&gt;&lt;/div&gt;\n   }\n</pre>"
    }
   }
  },
  "datatype_xml": {
   "XML": {
    "!type": "fn()",
    "prototype": {
     "format": {
      "!type": "fn(data: +XMLDocument) -> string",
      "!doc": "Converts data to type XMLDocument."
     },
     "parse": {
      "!type": "fn(data: string) -> +XMLDocument",
      "!doc": "Converts data to type XMLDocument."
     }
    }
   }
  },
  "yql": {
   "YQLRequest": {
    "!type": "fn(sql: string, callback: fn(), params: +yui.Object, opts: +yui.Object) -> +yql.YQLRequest",
    "prototype": {
     "send": {
      "!type": "fn() -> !this",
      "!doc": "The method that executes the YQL Request."
     }
    },
    "FORMAT": {
     "!type": "?",
     "!doc": "Default format to use: json"
    },
    "PROTO": {
     "!type": "?",
     "!doc": "Default protocol to use: http"
    },
    "BASE_URL": {
     "!type": "?",
     "!doc": "The base URL to query: query.yahooapis.com/v1/public/yql?"
    },
    "ENV": {
     "!type": "?",
     "!doc": "The environment file to load: http://datatables.org/alltables.env"
    }
   }
  }
 },
 "YUI": "fn() -> +yui.YUI"
};
    
})