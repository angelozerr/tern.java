(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
    "use strict";
    
  tern.registerPlugin("aui1.5.x", function(server, options) {
    server._aui = {};
    return { defs : defs };
  });
    
  var defs = {
 "!name": "aui1.5.x",
 "!define": {
  "_yui": {
   "anim": {
    "Anim": {
     "!type": "fn() -> +_yui.anim.Anim",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
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
       "!doc": "The method that will provide values to the attribute(s) during the animation. \nDefaults to \"Easing.easeNone\"."
      },
      "from": {
       "!type": "+yui.Object",
       "!doc": "The starting values for the animated properties.\n\nFields may be strings, numbers, or functions.\nIf a function is used, the return value becomes the from value.\nIf no from value is specified, the DEFAULT_GETTER will be used.\nSupports any unit, provided it matches the \"to\" (or default)\nunit (e.g. `{width: 10em, color: rgb(0, 0 0), borderColor: #ccc}`).\n\nIf using the default (px for length-based units), the unit may be omitted\n(e.g. `{width: 100}, borderColor: ccc}`, which defaults to pixels\nand hex, respectively)."
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
       "!doc": "How iterations of the animation should behave. \nPossible values are \"normal\" and \"alternate\".\nNormal will repeat the animation, alternate will reverse on every other pass."
      },
      "paused": {
       "!type": "bool",
       "!doc": "Whether or not the animation is currently paused."
      },
      "reverse": {
       "!type": "bool",
       "!doc": "If true, animation begins from last frame"
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
      "!type": "fn(points: +_yui.yui.Array, t: number) -> +yui.Array",
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
       "!doc": "Backtracks slightly, then reverses direction, overshoots end, \nthen reverses and comes back to end."
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
    "Controller": {
     "!type": "fn() -> +_yui.app.Controller",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "html5": {
       "!type": "bool",
       "!doc": "Whether or not this browser is capable of using HTML5 history.\n\nThis property is for informational purposes only. Its not configurable, and\nchanging it will have no effect."
      },
      "root": {
       "!type": "string",
       "!doc": "Absolute root path from which all routes should be evaluated.\n\nFor example, if your controller is running on a page at\n`http://example.com/myapp/` and you add a route with the path `/`, your\nroute will never execute, because the path will always be preceded by\n`/myapp`. Setting `root` to `/myapp` would cause all routes to be evaluated\nrelative to that root URL, so the `/` route would then execute when the\nuser browses to `http://example.com/myapp/`.\n\nThis property may be overridden in a subclass, set after instantiation, or\npassed as a config attribute when instantiating a `Y.Controller`-based\nclass."
      },
      "routes": {
       "!type": "[+yui.Object]",
       "!doc": "Array of route objects specifying routes to be created at instantiation\ntime.\n\nEach item in the array must be an object with the following properties:\n\n  * `path`: String or regex representing the path to match. See the docs for\n    the `route()` method for more details.\n  * `callback`: Function or a string representing the name of a function on\n    this controller instance that should be called when the route is\n    triggered. See the docs for the `route()` method for more details.\n\nThis property may be overridden in a subclass or passed as a config\nattribute when instantiating a `Y.Controller`-based class, but setting it\nafter instantiation will have no effect (use the `route()` method instead).\n\nIf routes are passed at instantiation time, they will override any routes\nset on the prototype."
      },
      "dispatch": {
       "!type": "fn() -> !this",
       "!doc": "Dispatches to the first route handler that matches the current URL, if any.\n\nIf `dispatch()` is called before the `ready` event has fired, it will\nautomatically wait for the `ready` event before dispatching. Otherwise it\nwill dispatch immediately."
      },
      "getPath": {
       "!type": "fn() -> string",
       "!doc": "Gets the current route path, relative to the `root` (if any)."
      },
      "hasRoute": {
       "!type": "fn(path: string) -> bool",
       "!doc": "Returns `true` if this controller has at least one route that matches the\nspecified URL path, `false` otherwise."
      },
      "match": {
       "!type": "fn(path: string) -> [+yui.Object]",
       "!doc": "Returns an array of route objects that match the specified URL path.\n\nThis method is called internally to determine which routes match the current\npath whenever the URL changes. You may override it if you want to customize\nthe route matching logic, although this usually shouldnt be necessary.\n\nEach returned route object has the following properties:\n\n  * `callback`: A function or a string representing the name of a function\n    this controller that should be executed when the route is triggered.\n  * `keys`: An array of strings representing the named parameters defined in\n    the routes path specification, if any.\n  * `path`: The routes path specification, which may be either a string or\n    a regex.\n  * `regex`: A regular expression version of the routes path specification.\n    This regex is used to determine whether the route matches a given path."
      },
      "removeRoot": {
       "!type": "fn(path: string) -> string",
       "!doc": "Removes the `root` URL from the from of _path_ (if its there) and returns\nthe result. The returned path will always have a leading `/`."
      },
      "replace": {
       "!type": "fn(url?: string) -> !this",
       "!doc": "Replaces the current browser history entry with a new one, and dispatches to\nthe first matching route handler, if any.\n\nBehind the scenes, this method uses HTML5 `pushState()` in browsers that\nsupport it (or the location hash in older browsers and IE) to change the\nURL.\n\nThe specified URL must share the same origin (i.e., protocol, host, and\nport) as the current page, or an error will occur."
      },
      "route": {
       "!type": "fn(path: string, callback: fn(req: +_yui.yui.Object, next: fn())) -> !this",
       "!doc": "Adds a route handler for the specified URL _path_.\n\nThe _path_ parameter may be either a string or a regular expression. If its\na string, it may contain named parameters: `:param` will match any single\npart of a URL path (not including `/` characters), and `*param` will match\nany number of parts of a URL path (including `/` characters). These named\nparameters will be made available as keys on the `req.params` object thats\npassed to route handlers.\n\nIf the _path_ parameter is a regex, all pattern matches will be made\navailable as numbered keys on `req.params`, starting with `0` for the full\nmatch, then `1` for the first subpattern match, and so on.\n\nHeres a set of sample routes along with URL paths that they match:\n\n  * Route: `/photos/:tag/:page`\n    * URL: `/photos/kittens/1`, params: `{tag: kittens, page: 1}`\n    * URL: `/photos/puppies/2`, params: `{tag: puppies, page: 2}`\n\n  * Route: `/file/*path`\n    * URL: `/file/foo/bar/baz.txt`, params: `{path: foo/bar/baz.txt}`\n    * URL: `/file/foo`, params: `{path: foo}`\n\nIf multiple route handlers match a given URL, they will be executed in the\norder they were added. The first route that was added will be the first to\nbe executed."
      },
      "save": {
       "!type": "fn(url?: string) -> !this",
       "!doc": "Saves a new browser history entry and dispatches to the first matching route\nhandler, if any.\n\nBehind the scenes, this method uses HTML5 `pushState()` in browsers that\nsupport it (or the location hash in older browsers and IE) to change the\nURL and create a history entry.\n\nThe specified URL must share the same origin (i.e., protocol, host, and\nport) as the current page, or an error will occur."
      },
      "upgrade": {
       "!type": "fn() -> bool",
       "!doc": "Upgrades a hash-based URL to an HTML5 URL if necessary. In non-HTML5\nbrowsers, this method is a noop."
      }
     }
    },
    "ModelList": {
     "!type": "fn() -> +_yui.app.ModelList",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "model": {
       "!type": "+app.Model",
       "!doc": "The `Model` class or subclass of the models in this list.\n\nThis property is `null` by default, and is intended to be overridden in a\nsubclass or specified as a config property at instantiation time. It will be\nused to create model instances automatically based on attribute hashes\npassed to the `add()`, `create()`, and `reset()` methods."
      },
      "add": {
       "!type": "fn(models: +_yui.app.Model, options?: +_yui.yui.Object) -> +app.Model",
       "!doc": "Adds the specified model or array of models to this list."
      },
      "comparator": {
       "!type": "fn(model: +_yui.app.Model) -> number",
       "!doc": "Define this method to provide a function that takes a model as a parameter\nand returns a value by which that model should be sorted relative to other\nmodels in this list.\n\nBy default, no comparator is defined, meaning that models will not be sorted\n(theyll be stored in the order theyre added)."
      },
      "create": {
       "!type": "fn(model: +_yui.app.Model, options?: +_yui.yui.Object, callback?: +Callback) -> +app.Model",
       "!doc": "Creates or updates the specified model on the server, then adds it to this\nlist if the server indicates success."
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
       "!type": "fn(name: string, args?: ?) -> +yui.Array",
       "!doc": "Calls the named method on every model in the list. Any arguments provided\nafter _name_ will be passed on to the invoked method."
      },
      "item": {
       "!type": "fn(index: number) -> +app.Model",
       "!doc": "Returns the model at the specified _index_."
      },
      "load": {
       "!type": "fn(options?: +_yui.yui.Object, callback?: fn(err: +Error, response: ?)) -> !this",
       "!doc": "Loads this list of models from the server.\n\nThis method delegates to the `sync()` method to perform the actual load\noperation, which is an asynchronous action. Specify a _callback_ function to\nbe notified of success or failure.\n\nIf the load operation succeeds, a `reset` event will be fired."
      },
      "map": {
       "!type": "fn(fn: fn(model: +_yui.app.Model, index: number, models: [+_yui.app.Model]), thisObj?: +_yui.yui.Object) -> +yui.Array",
       "!doc": "Executes the specified function on each model in this list and returns an\narray of the functions collected return values."
      },
      "parse": {
       "!type": "fn(response: ?) -> [+yui.Object]",
       "!doc": "Called to parse the _response_ when the list is loaded from the server.\nThis method receives a server _response_ and is expected to return an array\nof model attribute hashes.\n\nThe default implementation assumes that _response_ is either an array of\nattribute hashes or a JSON string that can be parsed into an array of\nattribute hashes. If _response_ is a JSON string and either `Y.JSON` or the\nnative `JSON` object are available, it will be parsed automatically. If a\nparse error occurs, an `error` event will be fired and the model will not be\nupdated.\n\nYou may override this method to implement custom parsing logic if necessary."
      },
      "remove": {
       "!type": "fn(models: +_yui.app.Model, options?: +_yui.yui.Object) -> +app.Model",
       "!doc": "Removes the specified model or array of models from this list."
      },
      "reset": {
       "!type": "fn(models?: [+_yui.app.Model], options?: +_yui.yui.Object) -> !this",
       "!doc": "Completely replaces all models in the list with those specified, and fires a\nsingle `reset` event.\n\nUse `reset` when you want to add or remove a large number of items at once\nwithout firing `add` or `remove` events for each one."
      },
      "sort": {
       "!type": "fn(options?: +_yui.yui.Object) -> !this",
       "!doc": "Forcibly re-sorts the list.\n\nUsually it shouldnt be necessary to call this method since the list\nmaintains its sort order when items are added and removed, but if you change\nthe `comparator` function after items are already in the list, youll need\nto re-sort."
      },
      "sync": {
       "!type": "fn(action: string, options?: +_yui.yui.Object, callback?: fn(err: +Error, response?: ?))",
       "!doc": "Override this method to provide a custom persistence implementation for this\nlist. The default method just calls the callback without actually doing\nanything.\n\nThis method is called internally by `load()`."
      },
      "toArray": {
       "!type": "fn() -> +yui.Array",
       "!doc": "Returns an array containing the models in this list."
      },
      "toJSON": {
       "!type": "fn() -> [+yui.Object]",
       "!doc": "Returns an array containing attribute hashes for each model in this list,\nsuitable for being passed to `Y.JSON.stringify()`.\n\nUnder the hood, this method calls `toJSON()` on each model in the list and\npushes the results into an array."
      }
     }
    },
    "Model": {
     "!type": "fn() -> +_yui.app.Model",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
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
       "!type": "fn(options?: +_yui.yui.Object, callback?: +Callback) -> !this",
       "!doc": "Destroys this model instance and removes it from its containing lists, if\nany.\n\nIf `options[delete]` is `true`, then this method also delegates to the\n`sync()` method to delete the model from the persistence layer, which is an\nasynchronous action. Provide a _callback_ function to be notified of success\nor failure."
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
       "!type": "fn(options?: +_yui.yui.Object, callback?: +Callback) -> !this",
       "!doc": "Loads this model from the server.\n\nThis method delegates to the `sync()` method to perform the actual load\noperation, which is an asynchronous action. Specify a _callback_ function to\nbe notified of success or failure.\n\nIf the load operation succeeds and one or more of the loaded attributes\ndiffer from this models current attributes, a `change` event will be fired."
      },
      "parse": {
       "!type": "fn(response: ?) -> +yui.Object",
       "!doc": "Called to parse the _response_ when the model is loaded from the server.\nThis method receives a server _response_ and is expected to return an\nattribute hash.\n\nThe default implementation assumes that _response_ is either an attribute\nhash or a JSON string that can be parsed into an attribute hash. If\n_response_ is a JSON string and either `Y.JSON` or the native `JSON` object\nare available, it will be parsed automatically. If a parse error occurs, an\n`error` event will be fired and the model will not be updated.\n\nYou may override this method to implement custom parsing logic if necessary."
      },
      "save": {
       "!type": "fn(fn?: fn(err: +Error, product: +model.Model, numberAffected: number))",
       "!doc": "Saves this model to the server.\n\nThis method delegates to the `sync()` method to perform the actual save\noperation, which is an asynchronous action. Specify a _callback_ function to\nbe notified of success or failure.\n\nIf the save operation succeeds and one or more of the attributes returned in\nthe servers response differ from this models current attributes, a\n`change` event will be fired."
      },
      "set": {
       "!type": "fn(name: string, value: ?, options?: +_yui.yui.Object) -> !this",
       "!doc": "Sets the value of a single attribute. If model validation fails, the\nattribute will not be set and an `error` event will be fired.\n\nUse `setAttrs()` to set multiple attributes at once."
      },
      "setAttrs": {
       "!type": "fn(attributes: +_yui.yui.Object, options?: +_yui.yui.Object) -> !this",
       "!doc": "Sets the values of multiple attributes at once. If model validation fails,\nthe attributes will not be set and an `error` event will be fired."
      },
      "sync": {
       "!type": "fn(action: string, options?: +_yui.yui.Object, callback?: +Callback)",
       "!doc": "Override this method to provide a custom persistence implementation for this\nmodel. The default just calls the callback without actually doing anything.\n\nThis method is called internally by `load()`, `save()`, and `destroy()`."
      },
      "toJSON": {
       "!type": "fn() -> +yui.Object",
       "!doc": "Returns a copy of this models attributes that can be passed to\n`Y.JSON.stringify()` or used for other nefarious purposes.\n\nThe `clientId` attribute is not included in the returned object.\n\nIf youve specified a custom attribute name in the `idAttribute` property,\nthe default `id` attribute will not be included in the returned object."
      },
      "undo": {
       "!type": "fn(attrNames?: +_yui.yui.Array, options?: +_yui.yui.Object) -> !this",
       "!doc": "Reverts the last change to the model.\n\nIf an _attrNames_ array is provided, then only the named attributes will be\nreverted (and only if they were modified in the previous change). If no\n_attrNames_ array is provided, then all changed attributes will be reverted\nto their previous values.\n\nNote that only one level of undo is available: from the current state to the\nprevious state. If `undo()` is called when no previous state is available,\nit will simply do nothing."
      },
      "validate": {
       "!type": "fn(attributes: +_yui.yui.Object) -> ?",
       "!doc": "Override this method to provide custom validation logic for this model.\nWhile attribute-specific validators can be used to validate individual\nattributes, this method gives you a hook to validate a hash of all\nattributes before the model is saved. This method is called automatically\nbefore `save()` takes any action. If validation fails, the `save()` call\nwill be aborted.\n\nA call to `validate` that doesnt return anything (or that returns `null`)\nwill be treated as a success. If the `validate` method returns a value, it\nwill be treated as a failure, and the returned value (which may be a string\nor an object containing information about the failure) will be passed along\nto the `error` event."
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
    "View": {
     "!type": "fn() -> +_yui.app.View",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "container": {
       "!type": "+HTMLElement",
       "!doc": "Container node into which this views content will be rendered.\n\nThe container node serves as the host for all DOM events attached by the\nview. Delegation is used to handle events on children of the container,\nallowing the containers contents to be re-rendered at any time without\nlosing event subscriptions.\n\nThe default container is a simple `<div>`, but you can override this in a\nsubclass, or by passing in a custom `container` config value at\ninstantiation time.\n\nWhen `container` is overridden by a subclass or passed as a config option at\ninstantiation time, it may be provided as an HTML string, a DOM element, or\na `Y.Node` instance. During initialization, this views `create()` method\nwill be called to convert the container into a `Y.Node` instance if it isnt\none already.\n\nThe container is not added to the page automatically. This allows you to\nhave full control over how and when your view is actually rendered to the\npage."
      },
      "events": {
       "!type": "+yui.Object",
       "!doc": "Hash of CSS selectors mapped to events to delegate to elements matching\nthose selectors.\n\nCSS selectors are relative to the `container` element. Events are attached\nto the container, and delegation is used so that subscribers are only\nnotified of events that occur on elements inside the container that match\nthe specified selectors. This allows the containers contents to be\nre-rendered as needed without losing event subscriptions.\n\nEvent handlers can be specified either as functions or as strings that map\nto function names on this view instance or its prototype.\n\nThe `this` object in event handlers will refer to this view instance. If\nyoud prefer `this` to be something else, use `Y.bind()` to bind a custom\n`this` object."
      },
      "model": {
       "!type": "+app.Model",
       "!doc": "Model instance associated with this view instance.\n\nThis is entirely optional. Theres no requirement that views be associated\nwith models, but if you do intend to associate your view with a model, then\nspecifying that model instance at instantiation time will cause a reference\nto be stored here for convenience."
      },
      "modelList": {
       "!type": "+app.ModelList",
       "!doc": "ModelList instance associated with this view instance.\n\nThis is entirely optional. Theres no requirement that views be associated\nwith model lists, but if you do intend to associate your view with a model\nlist, then specifying that list instance at instantiation time will cause a\nreference to be stored here for convenience."
      },
      "template": {
       "!type": "?",
       "!doc": "Template for this view.\n\nThis is a convenience property that has no default behavior of its own. Its\nonly provided as a convention to allow you to store whatever you consider to\nbe a template, whether thats an HTML string, a `Y.Node` instance, a\nMustache template, or anything else your little heart desires.\n\nHow this template gets used is entirely up to you and your custom `render()`\nmethod."
      },
      "attachEvents": {
       "!type": "fn(events: +_yui.yui.Object)",
       "!doc": "Attaches delegated event handlers to this views `container` element. This\nmethod is called internally to subscribe to events configured in the\n`events` property or config attribute when the view is initialized.\n\nYou may override this method to customize the event attaching logic."
      },
      "create": {
       "!type": "fn(container: +HTMLElement) -> +node.Node",
       "!doc": "Creates and returns this views `container` node from the specified HTML\nstring, DOM element, or existing `Y.Node` instance. This method is called\ninternally when the view is initialized.\n\nBy default, the created node is _not_ added to the DOM automatically.\n\nYou may override this method to customize how the container node is created\n(such as by rendering it from a template). Your method should return a\n`Y.Node` instance."
      },
      "remove": {
       "!type": "fn() -> !this",
       "!doc": "Removes this views `container` element from the DOM (if its in the DOM),\nbut doesnt destroy it or any event listeners attached to it."
      },
      "render": {
       "!type": "fn() -> !this",
       "!doc": "Renders the view.\n\nThis method is a noop by default. Override it in your subclass to provide a\ncustom implementation that renders this views content and appends it to the\n`container` element. Ideally your `render` method should also return `this`\nas the end to allow chaining, but thats up to you.\n\nSince theres no default renderer, youre free to render your view however\nyou see fit, whether that means manipulating the DOM directly, dumping\nstrings into `innerHTML`, or using a template language of some kind.\n\nFor basic templating needs, `Y.Node.create()` and `Y.Lang.sub()` may\nsuffice, but there are no restrictions on what tools or techniques you can\nuse to render your view. All you need to do is append something to the\n`container` element at some point, and optionally append the `container`\nto the DOM if its not there already."
      }
     }
    }
   },
   "arraysort": {
    "ArraySort": {
     "!type": "fn()",
     "prototype": {
      "compare": {
       "!type": "fn(a: +_yui.yui.Object, b: +_yui.yui.Object, desc: bool) -> bool",
       "!doc": "Comparator function for simple case-insensitive string sorting."
      }
     }
    }
   },
   "async_queue": {
    "AsyncQueue": {
     "!type": "fn(callback: fn()) -> +_yui.async_queue.AsyncQueue",
     "prototype": {
      "!proto": "_yui.node.EventTarget.prototype",
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
     "!type": "fn(attrs: +_yui.yui.Object, values: +_yui.yui.Object, lazy: bool)",
     "INVALID_VALUE": {
      "!type": "+yui.Object",
      "!doc": "<p>The value to return from an attribute setter in order to prevent the set from going through.</p>\n\n<p>You can return this value from your setter if you wish to combine validator and setter \nfunctionality into a single setter function, which either returns the massaged value to be stored or \nAttribute.INVALID_VALUE to prevent invalid values from being stored.</p>"
     },
     "prototype": {
      "addAttr": {
       "!type": "fn(name: string, config: +_yui.yui.Object, lazy: bool) -> !this",
       "!doc": "<p>\nAdds an attribute with the provided configuration to the host object.\n</p>\n<p>\nThe config argument object supports the following properties:\n</p>\n\n<dl>\n   <dt>value &#60;Any&#62;</dt>\n   <dd>The initial value to set on the attribute</dd>\n\n   <dt>valueFn &#60;Function | String&#62;</dt>\n   <dd>\n   <p>A function, which will return the initial value to set on the attribute. This is useful\n   for cases where the attribute configuration is defined statically, but needs to \n   reference the host instance (\"this\") to obtain an initial value. If both the value and valueFn properties are defined, \n   the value returned by the valueFn has precedence over the value property, unless it returns undefined, in which \n   case the value property is used.</p>\n\n   <p>valueFn can also be set to a string, representing the name of the instance method to be used to retrieve the value.</p>\n   </dd>\n\n   <dt>readOnly &#60;boolean&#62;</dt>\n   <dd>Whether or not the attribute is read only. Attributes having readOnly set to true\n       cannot be modified by invoking the set method.</dd>\n\n   <dt>writeOnce &#60;boolean&#62; or &#60;string&#62;</dt>\n   <dd>\n       Whether or not the attribute is \"write once\". Attributes having writeOnce set to true, \n       can only have their values set once, be it through the default configuration, \n       constructor configuration arguments, or by invoking set.\n       <p>The writeOnce attribute can also be set to the string \"initOnly\", in which case the attribute can only be set during initialization\n       (when used with Base, this means it can only be set during construction)</p>\n   </dd>\n\n   <dt>setter &#60;Function | String&#62;</dt>\n   <dd>\n   <p>The setter function used to massage or normalize the value passed to the set method for the attribute. \n   The value returned by the setter will be the final stored value. Returning\n   <a href=\"#property_Attribute.INVALID_VALUE\">Attribute.INVALID_VALUE</a>, from the setter will prevent\n   the value from being stored.\n   </p>\n   \n   <p>setter can also be set to a string, representing the name of the instance method to be used as the setter function.</p>\n   </dd>\n     \n   <dt>getter &#60;Function | String&#62;</dt>\n   <dd>\n   <p>\n   The getter function used to massage or normalize the value returned by the get method for the attribute.\n   The value returned by the getter function is the value which will be returned to the user when they \n   invoke get.\n   </p>\n\n   <p>getter can also be set to a string, representing the name of the instance method to be used as the getter function.</p>\n   </dd>\n\n   <dt>validator &#60;Function | String&#62;</dt>\n   <dd>\n   <p>\n   The validator function invoked prior to setting the stored value. Returning\n   false from the validator function will prevent the value from being stored.\n   </p>\n   \n   <p>validator can also be set to a string, representing the name of the instance method to be used as the validator function.</p>\n   </dd>\n   \n   <dt>broadcast &#60;int&#62;</dt>\n   <dd>If and how attribute change events for this attribute should be broadcast. See CustomEvents <a href=\"CustomEvent.html#property_broadcast\">broadcast</a> property for \n   valid values. By default attribute change events are not broadcast.</dd>\n\n  <dt>lazyAdd &#60;boolean&#62;</dt>\n   <dd>Whether or not to delay initialization of the attribute until the first call to get/set it. \n   This flag can be used to over-ride lazy initialization on a per attribute basis, when adding multiple attributes through \n   the <a href=\"#method_addAttrs\">addAttrs</a> method.</dd>\n\n</dl>\n\n<p>The setter, getter and validator are invoked with the value and name passed in as the first and second arguments, and with\nthe context (\"this\") set to the host object.</p>\n\n<p>Configuration properties outside of the list mentioned above are considered private properties used internally by attribute, and are not intended for public use.</p>"
      },
      "attrAdded": {
       "!type": "fn(name: string) -> bool",
       "!doc": "Checks if the given attribute has been added to the host"
      },
      "modifyAttr": {
       "!type": "fn(name: string, config: +_yui.yui.Object)",
       "!doc": "Updates the configuration of an attribute which has already been added.\n<p>\nThe properties which can be modified through this interface are limited\nto the following subset of attributes, which can be safely modified\nafter a value has already been set on the attribute: readOnly, writeOnce, \nbroadcast and getter.\n</p>"
      },
      "removeAttr": {
       "!type": "fn(name: string)",
       "!doc": "Removes an attribute from the host object"
      },
      "get": {
       "!type": "fn(name: string) -> ?",
       "!doc": "Returns the current value of the attribute. If the attribute\nhas been configured with a getter function, this method will delegate\nto the getter to obtain the value of the attribute."
      },
      "set": {
       "!type": "fn(name: string, value: ?, opts: +_yui.yui.Object) -> !this",
       "!doc": "Sets the value of an attribute."
      },
      "reset": {
       "!type": "fn(name: string) -> !this",
       "!doc": "Resets the attribute (or all attributes) to its initial value, as long as\nthe attribute is not readOnly, or writeOnce."
      },
      "setAttrs": {
       "!type": "fn(attrs: +_yui.yui.Object) -> !this",
       "!doc": "Sets multiple attribute values."
      },
      "getAttrs": {
       "!type": "fn(attrs: +_yui.yui.Array) -> +yui.Object",
       "!doc": "Gets multiple attribute values."
      },
      "addAttrs": {
       "!type": "fn(cfgs: +_yui.yui.Object, values: +_yui.yui.Object, lazy: bool) -> !this",
       "!doc": "Configures a group of attributes, and sets initial values.\n\n<p>\n<strong>NOTE:</strong> This method does not isolate the configuration object by merging/cloning. \nThe caller is responsible for merging/cloning the configuration object if required.\n</p>"
      }
     }
    },
    "State": {
     "!type": "fn() -> +_yui.attribute.State",
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
       "!type": "fn(name: string, o: +_yui.yui.Object)",
       "!doc": "Adds multiple properties to an item."
      },
      "remove": {
       "!type": "fn(name: string, key: string)",
       "!doc": "Removes a property from an item."
      },
      "removeAll": {
       "!type": "fn(name: string, o: +_yui.yui.Object)",
       "!doc": "Removes multiple properties from an item, or remove the item completely."
      },
      "get": {
       "!type": "fn(name: string, key: string) -> ?",
       "!doc": "For a given item, returns the value of the property requested, or undefined if not found."
      },
      "getAll": {
       "!type": "fn(name: string) -> +yui.Object",
       "!doc": "For the given item, returns a disposable object with all of the\nitems property/value pairs."
      }
     }
    }
   },
   "autocomplete": {
    "AutoCompleteBase": {
     "!type": "fn()",
     "prototype": {
      "allowBrowserAutocomplete": {
       "!type": "bool",
       "!doc": "Whether or not to enable the browsers built-in autocomplete\nfunctionality for input fields."
      },
      "allowTrailingDelimiter": {
       "!type": "bool",
       "!doc": "When a <code>queryDelimiter</code> is set, trailing delimiters will\nautomatically be stripped from the input value by default when the\ninput node loses focus. Set this to <code>true</code> to allow trailing\ndelimiters."
      },
      "inputNode": {
       "!type": "+node.Node",
       "!doc": "Node to monitor for changes, which will generate <code>query</code>\nevents when appropriate. May be either an input field or a textarea."
      },
      "maxResults": {
       "!type": "number",
       "!doc": "Maximum number of results to return. A value of <code>0</code> or less\nwill allow an unlimited number of results."
      },
      "minQueryLength": {
       "!type": "number",
       "!doc": "Minimum number of characters that must be entered before a\n<code>query</code> event will be fired. A value of <code>0</code>\nallows empty queries; a negative value will effectively disable all\n<code>query</code> events."
      },
      "query": {
       "!type": "string",
       "!doc": "<p>\nCurrent query, or <code>null</code> if there is no current query.\n</p>\n\n<p>\nThe query might not be the same as the current value of the input\nnode, both for timing reasons (due to <code>queryDelay</code>) and\nbecause when one or more <code>queryDelimiter</code> separators are\nin use, only the last portion of the delimited input string will be\nused as the query value.\n</p>"
      },
      "queryDelay": {
       "!type": "number",
       "!doc": "<p>\nNumber of milliseconds to delay after input before triggering a\n<code>query</code> event. If new input occurs before this delay is\nover, the previous input event will be ignored and a new delay will\nbegin.\n</p>\n\n<p>\nThis can be useful both to throttle queries to a remote data source\nand to avoid distracting the user by showing them less relevant\nresults before theyve paused their typing.\n</p>"
      },
      "queryDelimiter": {
       "!type": "string",
       "!doc": "Query delimiter string. When a delimiter is configured, the input value\nwill be split on the delimiter, and only the last portion will be used in\nautocomplete queries and updated when the <code>query</code> attribute is\nmodified."
      },
      "requestTemplate": {
       "!type": "fn()",
       "!doc": "<p>\nSource request template. This can be a function that accepts a query as a\nparameter and returns a request string, or it can be a string containing\nthe placeholder \"{query}\", which will be replaced with the actual\nURI-encoded query. In either case, the resulting string will be appended\nto the request URL when the <code>source</code> attribute is set to a\nremote DataSource, JSONP URL, or XHR URL (it will not be appended to YQL\nURLs).\n</p>\n\n<p>\nWhile <code>requestTemplate</code> may be set to either a function or\na string, it will always be returned as a function that accepts a\nquery argument and returns a string.\n</p>"
      },
      "resultFilters": {
       "!type": "+yui.Array",
       "!doc": "<p>\nArray of local result filter functions. If provided, each filter\nwill be called with two arguments when results are received: the query\nand an array of result objects. See the documentation for the\n<code>results</code> event for a list of the properties available on each\nresult object.\n</p>\n\n<p>\nEach filter is expected to return a filtered or modified version of the\nresults array, which will then be passed on to subsequent filters, then\nthe <code>resultHighlighter</code> function (if set), then the\n<code>resultFormatter</code> function (if set), and finally to\nsubscribers to the <code>results</code> event.\n</p>\n\n<p>\nIf no <code>source</code> is set, result filters will not be called.\n</p>\n\n<p>\nPrepackaged result filters provided by the autocomplete-filters and\nautocomplete-filters-accentfold modules can be used by specifying the\nfilter name as a string, such as <code>phraseMatch</code> (assuming\nthe necessary filters module is loaded).\n</p>"
      },
      "resultFormatter": {
       "!type": "fn()",
       "!doc": "<p>\nFunction which will be used to format results. If provided, this function\nwill be called with two arguments after results have been received and\nfiltered: the query and an array of result objects. The formatter is\nexpected to return an array of HTML strings or Node instances containing\nthe desired HTML for each result.\n</p>\n\n<p>\nSee the documentation for the <code>results</code> event for a list of\nthe properties available on each result object.\n</p>\n\n<p>\nIf no <code>source</code> is set, the formatter will not be called.\n</p>"
      },
      "resultHighlighter": {
       "!type": "fn()",
       "!doc": "<p>\nFunction which will be used to highlight results. If provided, this\nfunction will be called with two arguments after results have been\nreceived and filtered: the query and an array of filtered result objects.\nThe highlighter is expected to return an array of highlighted result\ntext in the form of HTML strings.\n</p>\n\n<p>\nSee the documentation for the <code>results</code> event for a list of\nthe properties available on each result object.\n</p>\n\n<p>\nIf no <code>source</code> is set, the highlighter will not be called.\n</p>"
      },
      "resultListLocator": {
       "!type": "fn()",
       "!doc": "<p>\nLocator that should be used to extract an array of results from a\nnon-array response.\n</p>\n\n<p>\nBy default, no locator is applied, and all responses are assumed to be\narrays by default. If all responses are already arrays, you dont need to\ndefine a locator.\n</p>\n\n<p>\nThe locator may be either a function (which will receive the raw response\nas an argument and must return an array) or a string representing an\nobject path, such as \"foo.bar.baz\" (which would return the value of\n<code>result.foo.bar.baz</code> if the response is an object).\n</p>\n\n<p>\nWhile <code>resultListLocator</code> may be set to either a function or a\nstring, it will always be returned as a function that accepts a response\nargument and returns an array.\n</p>"
      },
      "results": {
       "!type": "+yui.Array",
       "!doc": "Current results, or an empty array if there are no results."
      },
      "resultTextLocator": {
       "!type": "fn()",
       "!doc": "<p>\nLocator that should be used to extract a plain text string from a\nnon-string result item. The resulting text value will typically be the\nvalue that ends up being inserted into an input field or textarea when\nthe user of an autocomplete implementation selects a result.\n</p>\n\n<p>\nBy default, no locator is applied, and all results are assumed to be\nplain text strings. If all results are already plain text strings, you\ndont need to define a locator.\n</p>\n\n<p>\nThe locator may be either a function (which will receive the raw result\nas an argument and must return a string) or a string representing an\nobject path, such as \"foo.bar.baz\" (which would return the value of\n<code>result.foo.bar.baz</code> if the result is an object).\n</p>\n\n<p>\nWhile <code>resultTextLocator</code> may be set to either a function or a\nstring, it will always be returned as a function that accepts a result\nargument and returns a string.\n</p>"
      },
      "source": {
       "!type": "+yui.Array",
       "!doc": "<p>\nSource for autocomplete results. The following source types are\nsupported:\n</p>\n\n<dl>\n  <dt>Array</dt>\n  <dd>\n    <p>\n    <i>Example:</i> <code>[first result, second result, etc]</code>\n    </p>\n\n    <p>\n    The full array will be provided to any configured filters for each\n    query. This is an easy way to create a fully client-side autocomplete\n    implementation.\n    </p>\n  </dd>\n\n  <dt>DataSource</dt>\n  <dd>\n    <p>\n    A <code>DataSource</code> instance or other object that provides a\n    DataSource-like <code>sendRequest</code> method. See the\n    <code>DataSource</code> documentation for details.\n    </p>\n  </dd>\n\n  <dt>Function</dt>\n  <dd>\n    <p>\n    <i>Example (synchronous):</i> <code>function (query) { return [foo, bar]; }</code><br>\n          <i>Example (async):</i> <code>function (query, callback) { callback([foo, bar]); }</code>\n    </p>\n\n    <p>\n    A function source will be called with the current query and a\n    callback function as parameters, and should either return an array of\n    results (for synchronous operation) or return nothing and pass an\n    array of results to the provided callback (for asynchronous\n    operation).\n    </p>\n  </dd>\n\n  <dt>Object</dt>\n  <dd>\n    <p>\n    <i>Example:</i> <code>{foo: [foo result 1, foo result 2], bar: [bar result]}</code>\n    </p>\n\n    <p>\n    An object will be treated as a query hashmap. If a property on the\n    object matches the current query, the value of that property will be\n    used as the response.\n    </p>\n\n    <p>\n    The response is assumed to be an array of results by default. If the\n    response is not an array, provide a <code>resultListLocator</code> to\n    process the response and return an array.\n    </p>\n  </dd>\n</dl>\n\n<p>\nIf the optional <code>autocomplete-sources</code> module is loaded, then\nthe following additional source types will be supported as well:\n</p>\n\n<dl>\n  <dt>&lt;select&gt; Node</dt>\n  <dd>\n    <p>\n    You may provide a YUI Node instance wrapping a &lt;select&gt;\n    element, and the options in the list will be used as results. You\n    will also need to specify a <code>resultTextLocator</code> of text\n    or value, depending on what you want to use as the text of the\n    result.\n    </p>\n\n    <p>\n    Each result will be an object with the following properties:\n    </p>\n\n    <dl>\n      <dt>html (String)</dt>\n      <dd>\n        <p>HTML content of the &lt;option&gt; element.</p>\n      </dd>\n\n      <dt>index (Number)</dt>\n      <dd>\n        <p>Index of the &lt;option&gt; element in the list.</p>\n      </dd>\n\n      <dt>node (Y.Node)</dt>\n      <dd>\n        <p>Node instance referring to the original &lt;option&gt; element.</p>\n      </dd>\n\n      <dt>selected (Boolean)</dt>\n      <dd>\n        <p>Whether or not this item is currently selected in the\n        &lt;select&gt; list.</p>\n      </dd>\n\n      <dt>text (String)</dt>\n      <dd>\n        <p>Text content of the &lt;option&gt; element.</p>\n      </dd>\n\n      <dt>value (String)</dt>\n      <dd>\n        <p>Value of the &lt;option&gt; element.</p>\n      </dd>\n    </dl>\n  </dd>\n\n  <dt>String (JSONP URL)</dt>\n  <dd>\n    <p>\n    <i>Example:</i> <code>http://example.com/search?q={query}&callback={callback}</code>\n    </p>\n\n    <p>\n    If a URL with a <code>{callback}</code> placeholder is provided, it\n    will be used to make a JSONP request. The <code>{query}</code>\n    placeholder will be replaced with the current query, and the\n    <code>{callback}</code> placeholder will be replaced with an\n    internally-generated JSONP callback name. Both placeholders must\n    appear in the URL, or the request will fail. An optional\n    <code>{maxResults}</code> placeholder may also be provided, and will\n    be replaced with the value of the maxResults attribute (or 1000 if\n    the maxResults attribute is 0 or less).\n    </p>\n\n    <p>\n    The response is assumed to be an array of results by default. If the\n    response is not an array, provide a <code>resultListLocator</code> to\n    process the response and return an array.\n    </p>\n\n    <p>\n    <strong>The <code>jsonp</code> module must be loaded in order for\n    JSONP URL sources to work.</strong> If the <code>jsonp</code> module\n    is not already loaded, it will be loaded on demand if possible.\n    </p>\n  </dd>\n\n  <dt>String (XHR URL)</dt>\n  <dd>\n    <p>\n    <i>Example:</i> <code>http://example.com/search?q={query}</code>\n    </p>\n\n    <p>\n    If a URL without a <code>{callback}</code> placeholder is provided,\n    it will be used to make a same-origin XHR request. The\n    <code>{query}</code> placeholder will be replaced with the current\n    query. An optional <code>{maxResults}</code> placeholder may also be\n    provided, and will be replaced with the value of the maxResults\n    attribute (or 1000 if the maxResults attribute is 0 or less).\n    </p>\n\n    <p>\n    The response is assumed to be a JSON array of results by default. If\n    the response is a JSON object and not an array, provide a\n    <code>resultListLocator</code> to process the response and return an\n    array. If the response is in some form other than JSON, you will\n    need to use a custom DataSource instance as the source.\n    </p>\n\n    <p>\n    <strong>The <code>io-base</code> and <code>json-parse</code> modules\n    must be loaded in order for XHR URL sources to work.</strong> If\n    these modules are not already loaded, they will be loaded on demand\n    if possible.\n    </p>\n  </dd>\n\n  <dt>String (YQL query)</dt>\n  <dd>\n    <p>\n    <i>Example:</i> <code>select * from search.suggest where query=\"{query}\"</code>\n    </p>\n\n    <p>\n    If a YQL query is provided, it will be used to make a YQL request.\n    The <code>{query}</code> placeholder will be replaced with the\n    current autocomplete query. This placeholder must appear in the YQL\n    query, or the request will fail. An optional\n    <code>{maxResults}</code> placeholder may also be provided, and will\n    be replaced with the value of the maxResults attribute (or 1000 if\n    the maxResults attribute is 0 or less).\n    </p>\n\n    <p>\n    <strong>The <code>yql</code> module must be loaded in order for YQL\n    sources to work.</strong> If the <code>yql</code> module is not\n    already loaded, it will be loaded on demand if possible.\n    </p>\n  </dd>\n</dl>\n\n<p>\nAs an alternative to providing a source, you could simply listen for\n<code>query</code> events and handle them any way you see fit. Providing\na source is optional, but will usually be simpler.\n</p>"
      },
      "sourceType": {
       "!type": "string",
       "!doc": "<p>\nMay be used to force a specific source type, overriding the automatic\nsource type detection. It should almost never be necessary to do this,\nbut as they taught us in the Boy Scouts, one should always be prepared,\nso its here if you need it. Be warned that if you set this attribute and\nsomething breaks, its your own fault.\n</p>\n\n<p>\nSupported <code>sourceType</code> values are: array, datasource,\nfunction, and object.\n</p>\n\n<p>\nIf the <code>autocomplete-sources</code> module is loaded, the following\nadditional source types are supported: io, jsonp, select,\nstring, yql\n</p>"
      },
      "tokenInput": {
       "!type": "+Plugin.TokenInput",
       "!doc": "If the <code>inputNode</code> specified at instantiation time has a\n<code>node-tokeninput</code> plugin attached to it, this attribute will\nbe a reference to the <code>Y.Plugin.TokenInput</code> instance."
      },
      "value": {
       "!type": "string",
       "!doc": "Current value of the input node."
      },
      "sendRequest": {
       "!type": "fn(query: string, requestTemplate: fn()) -> !this",
       "!doc": "<p>\nSends a request to the configured source. If no source is configured,\nthis method wont do anything.\n</p>\n\n<p>\nUsually theres no reason to call this method manually; it will be\ncalled automatically when user input causes a <code>query</code> event to\nbe fired. The only time youll need to call this method manually is if\nyou want to force a request to be sent when no user input has occurred.\n</p>"
      },
      "yqlEnv": {
       "!type": "string",
       "!doc": "YQL environment file URL to load when the <code>source</code> is set to\na YQL query. Set this to <code>null</code> to use the default Open Data\nTables environment file (http://datatables.org/alltables.env)."
      },
      "yqlProtocol": {
       "!type": "string",
       "!doc": "URL protocol to use when the <code>source</code> is set to a YQL query."
      }
     },
     "SOURCE_TYPES": {
      "!type": "+yui.Object",
      "!doc": "Mapping of built-in source types to their setter functions. DataSource\ninstances and DataSource-like objects are handled natively, so are not\nmapped here."
     }
    },
    "AutoCompleteFilters": {
     "!type": "fn()",
     "charMatchFold": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Accent folding version of <code>charMatch()</code>."
     },
     "phraseMatchFold": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Accent folding version of <code>phraseMatch()</code>."
     },
     "startsWithFold": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Accent folding version of <code>startsWith()</code>."
     },
     "subWordMatchFold": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Accent folding version of <code>subWordMatch()</code>."
     },
     "wordMatchFold": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Accent folding version of <code>wordMatch()</code>."
     },
     "charMatch": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Returns an array of results that contain all of the characters in the\nquery, in any order (not necessarily consecutive). Case-insensitive."
     },
     "charMatchCase": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Case-sensitive version of <code>charMatch()</code>."
     },
     "phraseMatch": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Returns an array of results that contain the complete query as a phrase.\nCase-insensitive."
     },
     "phraseMatchCase": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Case-sensitive version of <code>phraseMatch()</code>."
     },
     "startsWith": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Returns an array of results that start with the complete query as a\nphrase. Case-insensitive."
     },
     "startsWithCase": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Case-sensitive version of <code>startsWith()</code>."
     },
     "subWordMatch": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Returns an array of results in which all the words of the query match\neither whole words or parts of words in the result. Non-word characters\nlike whitespace and certain punctuation are ignored. Case-insensitive.\n\nThis is basically a combination of <code>wordMatch()</code> (by ignoring\nwhitespace and word order) and <code>phraseMatch()</code> (by allowing\npartial matching instead of requiring the entire word to match).\n\nExample use case: Trying to find personal names independently of name\norder (Western or Eastern order) and supporting immediate feedback by\nallowing partial occurences. So queries like \"J. Doe\", \"Doe, John\", and\n\"J. D.\" would all match \"John Doe\"."
     },
     "subWordMatchCase": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Case-sensitive version of <code>subWordMatch()</code>."
     },
     "wordMatch": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Returns an array of results that contain all of the words in the query,\nin any order. Non-word characters like whitespace and certain punctuation\nare ignored. Case-insensitive."
     },
     "wordMatchCase": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Case-sensitive version of <code>wordMatch()</code>."
     }
    },
    "AutoCompleteHighlighters": {
     "!type": "fn()",
     "charMatchFold": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Accent-folding version of <code>charMatch()</code>."
     },
     "phraseMatchFold": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Accent-folding version of <code>phraseMatch()</code>."
     },
     "startsWithFold": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Accent-folding version of <code>startsWith()</code>."
     },
     "subWordMatchFold": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Accent-folding version of <code>subWordMatch()</code>."
     },
     "wordMatchFold": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Accent-folding version of <code>wordMatch()</code>."
     },
     "charMatch": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Highlights any individual query character that occurs anywhere in a\nresult. Case-insensitive."
     },
     "charMatchCase": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Case-sensitive version of <code>charMatch()</code>."
     },
     "phraseMatch": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Highlights the complete query as a phrase anywhere within a result.\nCase-insensitive."
     },
     "phraseMatchCase": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Case-sensitive version of <code>phraseMatch()</code>."
     },
     "startsWith": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Highlights the complete query as a phrase at the beginning of a result.\nCase-insensitive."
     },
     "startsWithCase": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Case-sensitive version of <code>startsWith()</code>."
     },
     "subWordMatch": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Highlights portions of results in which words from the query match either\nwhole words or parts of words in the result. Non-word characters like\nwhitespace and certain punctuation are ignored. Case-insensitive."
     },
     "subWordMatchCase": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Case-sensitive version of <code>subWordMatch()</code>."
     },
     "wordMatch": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Highlights individual words in results that are also in the query.\nNon-word characters like punctuation are ignored. Case-insensitive."
     },
     "wordMatchCase": {
      "!type": "fn(query: string, results: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Case-sensitive version of <code>wordMatch()</code>."
     }
    },
    "AutoCompleteList": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.autocomplete.AutoCompleteList",
     "prototype": {
      "!proto": "_yui.widget.Widget.prototype",
      "hide": {
       "!type": "fn() -> !this",
       "!doc": "Hides the list, unless the <code>alwaysShowList</code> attribute is\n<code>true</code>."
      },
      "selectItem": {
       "!type": "fn(itemNode: +_yui.node.Node, originEvent: +_yui.event_custom.EventFacade) -> !this",
       "!doc": "Selects the specified <i>itemNode</i>, or the current\n<code>activeItem</code> if <i>itemNode</i> is not specified."
      },
      "activateFirstItem": {
       "!type": "bool",
       "!doc": "If <code>true</code>, the first item in the list will be activated by\ndefault when the list is initially displayed and when results change."
      },
      "activeItem": {
       "!type": "+node.Node",
       "!doc": "Item thats currently active, if any. When the user presses enter,\nthis is the item that will be selected."
      },
      "alwaysShowList": {
       "!type": "bool",
       "!doc": "If <code>true</code>, the list will remain visible even when there\nare no results to display."
      },
      "circular": {
       "!type": "bool",
       "!doc": "If <code>true</code>, keyboard navigation will wrap around to the\nopposite end of the list when navigating past the first or last item."
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
       "!doc": "If <code>true</code>, the viewport will be scrolled to ensure that\nthe active list item is visible when necessary."
      },
      "strings": {
       "!type": "+yui.Object",
       "!doc": "Translatable strings used by the AutoCompleteList widget."
      },
      "tabSelect": {
       "!type": "bool",
       "!doc": "If <code>true</code>, pressing the tab key while the list is visible\nwill select the active item, if any."
      }
     }
    }
   },
   "base": {
    "Base": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.base.Base",
     "prototype": {
      "name": {
       "!type": "string",
       "!doc": "The string used to identify the class of this object."
      },
      "initialized": {
       "!type": "bool",
       "!doc": "Flag indicating whether or not this object\nhas been through the init lifecycle phase."
      },
      "destroyed": {
       "!type": "bool",
       "!doc": "Flag indicating whether or not this object\nhas been through the destroy lifecycle phase."
      },
      "init": {
       "!type": "fn(config: +_yui.yui.Object) -> !this",
       "!doc": "Init lifecycle method, invoked during construction.\nFires the init event prior to setting up attributes and \ninvoking initializers for the class hierarchy."
      },
      "destroy": {
       "!type": "fn() -> !this",
       "!doc": "<p>\nDestroy lifecycle method. Fires the destroy\nevent, prior to invoking destructors for the\nclass hierarchy.\n</p>\n<p>\nSubscribers to the destroy\nevent can invoke preventDefault on the event object, to prevent destruction\nfrom proceeding.\n</p>"
      },
      "toString": {
       "!type": "fn() -> string",
       "!doc": "Default toString implementation. Provides the constructor NAME\nand the instance guid, if set."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "<p>\nThe string to be used to identify instances of \nthis class, for example in prefixing events.\n</p>\n<p>\nClasses extending Base, should define their own\nstatic NAME property, which should be camelCase by\nconvention (e.g. MyClass.NAME = \"myClass\";).\n</p>"
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "The default set of attributes which will be available for instances of this class, and \ntheir configuration. In addition to the configuration properties listed by \nAttributes <a href=\"Attribute.html#method_addAttr\">addAttr</a> method, the attribute \ncan also be configured with a \"cloneDefaultValue\" property, which defines how the statically\ndefined value field should be protected (\"shallow\", \"deep\" and false are supported values). \n\nBy default if the value is an object literal or an array it will be \"shallow\" cloned, to \nprotect the default value."
     },
     "build": {
      "!type": "fn(name: fn(), main: fn(), extensions: fn(), cfg: +_yui.yui.Object) -> fn()",
      "!doc": "<p>\nBuilds a custom constructor function (class) from the\nmain function, and array of extension functions (classes)\nprovided. The NAME field for the constructor function is \ndefined by the first argument passed in.\n</p>\n<p>\nThe cfg object supports the following properties\n</p>\n<dl>\n   <dt>dynamic &#60;boolean&#62;</dt>\n   <dd>\n   <p>If true (default), a completely new class\n   is created which extends the main class, and acts as the \n   host on which the extension classes are augmented.</p>\n  <p>If false, the extensions classes are augmented directly to\n   the main class, modifying the main class prototype.</p>\n   </dd>\n   <dt>aggregates &#60;String[]&#62;</dt>\n   <dd>An array of static property names, which will get aggregated\n   on to the built class, in addition to the default properties build \n   will always aggregate as defined by the main class static _buildCfg\n   property.\n   </dd>\n</dl>"
     },
     "create": {
      "!type": "fn(name: fn(), main: fn(), extensions: fn(), px: +_yui.yui.Object, sx: +_yui.yui.Object) -> fn()",
      "!doc": "<p>Creates a new class (constructor function) which extends the base class passed in as the second argument, \nand mixes in the array of extensions provided.</p>\n<p>Prototype properties or methods can be added to the new class, using the px argument (similar to Y.extend).</p>\n<p>Static properties or methods can be added to the new class, using the sx argument (similar to Y.extend).</p>\n<p>\n\n</p>"
     },
     "mix": {
      "!type": "fn(main: fn(), extensions: fn()) -> fn()",
      "!doc": "<p>Mixes in a list of extensions to an existing class.</p>"
     },
     "plug": {
      "!type": "fn()",
      "!doc": "Alias for <a href=\"Plugin.Host.html#method_Plugin.Host.plug\">Plugin.Host.plug</a>. See aliased \nmethod for argument and return value details."
     },
     "unplug": {
      "!type": "fn()",
      "!doc": "Alias for <a href=\"Plugin.Host.html#method_Plugin.Host.unplug\">Plugin.Host.unplug</a>. See the \naliased method for argument and return value details."
     }
    }
   },
   "cache": {
    "Cache": {
     "!type": "fn() -> +_yui.cache.Cache",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
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
       "!type": "+Date",
       "!doc": "Absolute Date when data expires or\nrelative number of milliseconds. Zero disables expiration."
      },
      "entries": {
       "!type": "+yui.Array",
       "!doc": "Cached entries."
      },
      "add": {
       "!type": "fn(request: +_yui.yui.Object, response: +_yui.yui.Object)",
       "!doc": "Adds a new entry to the cache of the format\n{request:request, response:response, cached:cached, expires:expires}.\nIf cache is full, evicts the stalest entry before adding the new one."
      },
      "flush": {
       "!type": "fn()",
       "!doc": "Flushes cache."
      },
      "retrieve": {
       "!type": "fn(request: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Retrieves cached object for given request, if available, and refreshes\nentry in the cache. Returns null if there is no cache match."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Class name."
     }
    },
    "CacheOffline": {
     "!type": "fn() -> +_yui.cache.CacheOffline",
     "prototype": {
      "!proto": "_yui.cache.Cache.prototype",
      "sandbox": {
       "!type": "string",
       "!doc": "A string that must be passed in via the constructor.\nThis identifier is used to sandbox one cache instances entries\nfrom another. Calling the cache instances flush and length methods\nor get(\"entries\") will apply to only these sandboxed entries."
      },
      "expires": {
       "!type": "+Date",
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
       "!type": "fn(request: +_yui.yui.Object, response: +_yui.yui.Object)",
       "!doc": "Adds a new entry to the cache of the format\n{request:request, response:response, cached:cached, expires: expires}."
      },
      "retrieve": {
       "!type": "fn(request: +_yui.yui.Object) -> +yui.Object",
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
       "!proto": "_yui.cache.Cache.prototype"
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
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.calendar.CalendarBase",
     "prototype": {
      "!proto": "_yui.widget.Widget.prototype",
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
      "syncUI": {
       "!type": "fn()",
       "!doc": "syncUI implementation\n\nUpdate the scroll position, based on the current value of scrollY"
      },
      "selectDates": {
       "!type": "fn(dates: +Date)",
       "!doc": "Selects a given date or array of dates."
      },
      "deselectDates": {
       "!type": "fn(dates?: +Date)",
       "!doc": "Deselects a given date or array of dates, or deselects\nall dates if no argument is specified."
      },
      "date": {
       "!type": "+Date",
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
       "!doc": "An object of the form {rules:Object, filterFunction:Function},\nproviding  set of rules and a custom rendering function for \ncustomizing specific calendar cells."
      }
     }
    }
   },
   "aui_calendar": {
    "Calendar": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_calendar.Calendar",
     "prototype": {
      "!proto": "_yui.calendar.CalendarBase.prototype",
      "initializer": {
       "!type": "fn()",
       "!doc": "Designated initializer. Activates the navigation plugin for the calendar."
      },
      "syncUI": {
       "!type": "fn()",
       "!doc": "syncUI implementation\n\nUpdate the scroll position, based on the current value of scrollY"
      },
      "subtractMonth": {
       "!type": "fn()",
       "!doc": "Subtracts one month from the current calendar view."
      },
      "subtractYear": {
       "!type": "fn()",
       "!doc": "Subtracts one year from the current calendar view."
      },
      "addMonth": {
       "!type": "fn()",
       "!doc": "Adds one month to the current calendar view."
      },
      "addYear": {
       "!type": "fn()",
       "!doc": "Adds one year to the current calendar view."
      },
      "selectionMode": {
       "!type": "string",
       "!doc": "A setting specifying the type of selection the calendar allows.\nPossible values include:\n<ul>\n  <li>`single`</li> - One date at a time\n  <li>`multiple-sticky</li> - Multiple dates, selected one at a time (the dates \"stick\")\n  <li>`multiple`</li> - Multiple dates, selected with Ctrl/Meta keys for additional single\n  dates, and Shift key for date ranges."
      },
      "date": {
       "!type": "+Date",
       "!doc": "The date corresponding to the current calendar view. Always\nnormalized to the first of the month that contains the date\nat assignment time. Used as the first date visible in the\ncalendar."
      },
      "minimumDate": {
       "!type": "+Date",
       "!doc": "The minimum date that can be displayed by the calendar. The calendar will not\nallow dates earlier than this one to be set, and will reset any earlier date to\nthis date. Should be `null` if no minimum date is needed."
      },
      "maximumDate": {
       "!type": "+Date",
       "!doc": "The maximum date that can be displayed by the calendar. The calendar will not\nallow dates later than this one to be set, and will reset any later date to\nthis date. Should be `null` if no maximum date is needed."
      },
      "allowNone": {
       "!type": "bool",
       "!doc": "Wheather displays the \"none\" link on the Calendar footer."
      },
      "blankDays": {
       "!type": "+dom.NodeList",
       "!doc": "NodeList containing all the DOM elements for\neach blank day. If not specified try to query using HTML_PARSER\nan element inside contentBox which matches\n<code>aui-calendar-day-blank</code>."
      },
      "currentDay": {
       "!type": "number",
       "!doc": "Current day number."
      },
      "currentMonth": {
       "!type": "number",
       "!doc": "Current month number."
      },
      "currentYear": {
       "!type": "number",
       "!doc": "Current year number."
      },
      "dateFormat": {
       "!type": "string",
       "!doc": "The default date format string which can be overriden for\nlocalization support. The format must be valid according to\n<a href=\"DataType.Date.html\">A.DataType.Date.format</a>."
      },
      "dates": {
       "!type": "+yui.Array",
       "!doc": "Dates which the calendar will show as selected by default."
      },
      "firstDayOfWeek": {
       "!type": "number",
       "!doc": "First day of the week: Sunday is 0, Monday is 1."
      },
      "headerContentNode": {
       "!type": "+node.Node",
       "!doc": "DOM node reference to be the header of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-hd</code>."
      },
      "headerTitleNode": {
       "!type": "+node.Node",
       "!doc": "DOM node reference to be the title of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-title</code>."
      },
      "iconNextNode": {
       "!type": "+node.Node",
       "!doc": "DOM node reference to be the icon next of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-prev</code>."
      },
      "iconPrevNode": {
       "!type": "+node.Node",
       "!doc": "DOM node reference to be the icon prev of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-prev</code>."
      },
      "maxDate": {
       "!type": "string",
       "!doc": "Maximum allowable date. Values supported by the Date\nconstructor are supported."
      },
      "minDate": {
       "!type": "+Date",
       "!doc": "Minimum allowable date. Values supported by the Date\nconstructor are supported."
      },
      "monthDays": {
       "!type": "+dom.NodeList",
       "!doc": "NodeList reference containing the days of the month of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-day</code>."
      },
      "monthDaysNode": {
       "!type": "+node.Node",
       "!doc": "DOM node reference which contains all month days nodes of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-monthdays</code>."
      },
      "noneLinkNode": {
       "!type": "+node.Node",
       "!doc": "DOM node reference to be the \"none\" link of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-title</code>."
      },
      "paddingDaysEnd": {
       "!type": "+dom.NodeList",
       "!doc": "NodeList containing all the DOM elements for\neach blank day. If not specified try to query using HTML_PARSER\nan element inside contentBox which matches\n<code>aui-calendar-day-blank</code>."
      },
      "paddingDaysStart": {
       "!type": "+dom.NodeList",
       "!doc": "NodeList containing all the DOM elements for\neach blank day. If not specified try to query using HTML_PARSER\nan element inside contentBox which matches\n<code>aui-calendar-day-blank</code>."
      },
      "selectMultipleDates": {
       "!type": "bool",
       "!doc": "Wether accepts to select multiple dates."
      },
      "setValue": {
       "!type": "bool",
       "!doc": "If true set the selected date with the correct\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a> to the\nvalue of the input field which is hosting the Calendar."
      },
      "showOtherMonth": {
       "!type": "bool",
       "!doc": "Wheather displays the days for the other months."
      },
      "showToday": {
       "!type": "bool",
       "!doc": "Wheather displays the \"today\" link on the Calendar footer."
      },
      "todayLinkNode": {
       "!type": "+node.Node",
       "!doc": "DOM node reference to be the \"today\" link of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-title</code>."
      },
      "weekDays": {
       "!type": "+dom.NodeList",
       "!doc": "NodeList reference containing the days of the week of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-week</code>."
      },
      "weekDaysNode": {
       "!type": "+node.Node",
       "!doc": "DOM node reference which contains all week days nodes of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-weekdays</code>."
      },
      "clear": {
       "!type": "fn()",
       "!doc": "Clear all selected dates on the Calendar."
      },
      "eachSelectedDate": {
       "!type": "fn(fn: fn(), dates: +Dates)",
       "!doc": "Loop each date from <a href=\"Calendar.html#config_dates\">dates</a> and\nexecutes a callback."
      },
      "findMonthStart": {
       "!type": "fn(year: number, month: number) -> number",
       "!doc": "Get the first day of the month of the passed year."
      },
      "formatDate": {
       "!type": "fn(date: +Date, mask: string) -> string",
       "!doc": "Format a date with the passed mask. Used on\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a>."
      },
      "getCurrentDate": {
       "!type": "fn() -> +Date",
       "!doc": "Get current date."
      },
      "getDaysInMonth": {
       "!type": "fn(year: number, month: number) -> number",
       "!doc": "Get the number of days in the passed year and month."
      },
      "getDetailedSelectedDates": {
       "!type": "fn() -> +yui.Array",
       "!doc": "Get an Array with selected dates with detailed information (day, month, year).\n<pre><code>[{\n   year: date.getFullYear(),\n   month: date.getMonth(),\n   day: date.getDate()\n}]</code></pre>"
      },
      "getFirstDayOfWeek": {
       "!type": "fn(year: number, month: number) -> number",
       "!doc": "Get the first day of week of the passed year and month."
      },
      "getFormattedSelectedDates": {
       "!type": "fn() -> +yui.Array",
       "!doc": "Get the selected dates formatted by the\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a>."
      },
      "getSelectedDates": {
       "!type": "fn() -> +yui.Array",
       "!doc": "Get the selected dates."
      },
      "isAlreadySelected": {
       "!type": "fn(date: +Date) -> bool",
       "!doc": "Check if a date is already selected."
      },
      "isOutOfRangeDate": {
       "!type": "fn(date: +Date)",
       "!doc": "Check if the passed date is out of range. Compared with the\n<a href=\"Calendar.html#config_minDate\">minDate</a> and\n<a href=\"Calendar.html#config_maxDate\">maxDate</a>."
      },
      "navigateMonth": {
       "!type": "fn(offset: number)",
       "!doc": "Navigate through months and re-sync the UI."
      },
      "removeDate": {
       "!type": "fn(date: +Date)",
       "!doc": "Remove the passed date from\n<a href=\"Calendar.html#config_dates\">dates</a>."
      },
      "selectNextMonth": {
       "!type": "fn()",
       "!doc": "Navigate to the next month. Fired from the next icon on the Calendar\nheader."
      },
      "selectPrevMonth": {
       "!type": "fn()",
       "!doc": "Navigate to the previous month. Fired from the previous icon on the\nCalendar header."
      },
      "selectToday": {
       "!type": "fn()",
       "!doc": "Select today date on the Calendar."
      },
      "setCurrentDate": {
       "!type": "fn(date: +Date)",
       "!doc": "Update the currentDay, currentMonth and currentYear values."
      }
     },
     "Calendar.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Calendar.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Calendar."
     },
     "ProgressBar.HTML_PARSER": {
      "!type": "+yui.Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    },
    "DatePickerSelect": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_calendar.DatePickerSelect",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "appendOrder": {
       "!type": "+yui.Array",
       "!doc": "The order the selects elements are appended to the\n<a href=\"DatePickerSelect.html#config_srcNode\">srcNode</a>."
      },
      "buttonNode": {
       "!type": "string",
       "!doc": "DOM Node to display the button of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-buttonitem</code>."
      },
      "calendar": {
       "!type": "+yui.Object",
       "!doc": "<a href=\"Calendar.html\">Calendar</a> configuration Object.</a>"
      },
      "dayNode": {
       "!type": "string",
       "!doc": "DOM Node to display the day of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
      },
      "dayNodeName": {
       "!type": "string",
       "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_dayNode\">dayNode</a>."
      },
      "monthNode": {
       "!type": "string",
       "!doc": "DOM Node to display the month of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
      },
      "monthNodeName": {
       "!type": "string",
       "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_monthNode\">monthNode</a>."
      },
      "nullableDay": {
       "!type": "bool",
       "!doc": "If true the select element for the day will be nullable"
      },
      "nullableMonth": {
       "!type": "bool",
       "!doc": "If true the select element for the month will be nullable"
      },
      "nullableYear": {
       "!type": "bool",
       "!doc": "If true the select element for the year will be nullable"
      },
      "populateDay": {
       "!type": "bool",
       "!doc": "If true the select element for the days will be automatic\npopulated."
      },
      "populateMonth": {
       "!type": "bool",
       "!doc": "If true the select element for the month will be automatic\npopulated."
      },
      "populateYear": {
       "!type": "bool",
       "!doc": "If true the select element for the year will be automatic\npopulated."
      },
      "selectWrapperNode": {
       "!type": "string",
       "!doc": "DOM Node to display the selects of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-select-wrapper</code>."
      },
      "trigger": {
       "!type": "+node.Node",
       "!doc": "Trigger element to open the calendar. Inherited from\n<a href=\"OverlayContext.html#config_trigger\">OverlayContext</a>."
      },
      "yearNode": {
       "!type": "string",
       "!doc": "DOM Node to display the year of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
      },
      "yearNodeName": {
       "!type": "string",
       "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_yearNode\">yearNode</a>."
      },
      "yearRange": {
       "!type": "+yui.Array",
       "!doc": "Year range to be displayed on the year select element. By default\nit displays from -10 to +10 years from the current year."
      }
     },
     "DatePickerSelect.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "DatePickerSelect.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the DatePickerSelect."
     },
     "DatePickerSelect.HTML_PARSER": {
      "!type": "+yui.Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "calendarnavigator": {
    "Plugin": {
     "CalendarNavigator": {
      "!type": "fn()",
      "prototype": {
       "!proto": "_yui.plugin.Plugin.Base.prototype",
       "shiftByMonths": {
        "!type": "number",
        "!doc": "The number of months to shift by when the control arrows are clicked."
       },
       "initializer": {
        "!type": "fn(config: +_yui.yui.Object)",
        "!doc": "The initializer lifecycle implementation. Modifies the host widgets \nrender to add navigation controls."
       },
       "destructor": {
        "!type": "fn()",
        "!doc": "The initializer destructor implementation. Responsible for destroying the initialized\ncontrol mechanisms."
       }
      },
      "NS": {
       "!type": "string",
       "!doc": "The namespace for the plugin. This will be the property on the widget, which will \nreference the plugin instance, when its plugged in."
      },
      "NAME": {
       "!type": "string",
       "!doc": "The NAME of the CalendarNavigator class. Used to prefix events generated\nby the plugin class."
      },
      "ATTRS": {
       "!type": "+yui.Object",
       "!doc": "Static property used to define the default attribute \nconfiguration for the plugin."
      }
     }
    }
   },
   "charts": {
    "AreaSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      },
      "styles": {
       "!type": "+yui.Object",
       "!doc": "Style properties used for drawing area fills. This attribute is inherited from `Renderer`. Below are the default values:\n\n <dl>\n     <dt>color</dt><dd>The color of the fill. The default value is determined by the order of the series on the graph. The color will be \n     retrieved from the following array:\n     `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n     </dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1</dd>\n </dl>"
      }
     }
    },
    "AreaSplineSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      },
      "styles": {
       "!type": "+yui.Object",
       "!doc": "Style properties used for drawing area fills. This attribute is inherited from `Renderer`. Below are the default values:\n\n <dl>\n     <dt>color</dt><dd>The color of the fill. The default value is determined by the order of the series on the graph. The color will be \n     retrieved from the following array:\n     `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n     </dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1</dd>\n </dl>"
      }
     }
    },
    "Axis": {
     "!type": "fn()",
     "prototype": {
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
      "labelFunctionScope": {
       "!type": "+yui.Object",
       "!doc": "Object which should have by the labelFunction"
      },
      "title": {
       "!type": "string",
       "!doc": "Title for the axis. When specified, the title will display. The position of the title is determined by the axis position. \n<dl>\n    <dt>top</dt><dd>Appears above the axis and it labels. The default rotation is 0.</dd>\n    <dt>right</dt><dd>Appears to the right of the axis and its labels. The default rotation is 90.</dd>\n    <dt>bottom</dt><dd>Appears below the axis and its labels. The default rotation is 0.</dd>\n    <dt>left</dt><dd>Appears to the left of the axis and its labels. The default rotation is -90.</dd>\n</dl>"
      },
      "styles": {
       "!type": "+yui.Object",
       "!doc": "Style properties used for drawing an axis. This attribute is inherited from `Renderer`. Below are the default values:\n <dl>\n     <dt>majorTicks</dt><dd>Properties used for drawing ticks.\n         <dl>\n             <dt>display</dt><dd>Position of the tick. Possible values are `inside`, `outside`, `cross` and `none`. The\n             default value is `inside`.</dd>\n             <dt>length</dt><dd>The length (in pixels) of the tick. The default value is 4.</dd>\n             <dt>color</dt><dd>The color of the tick. The default value is `#dad8c9`</dd>\n             <dt>weight</dt><dd>Number indicating the width of the tick. The default value is 1.</dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the tick. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>line</dt><dd>Properties used for drawing the axis line. \n         <dl>\n             <dt>weight</dt><dd>Number indicating the width of the axis line. The default value is 1.</dd>\n             <dt>color</dt><dd>The color of the axis line. The default value is `#dad8c9`.</dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the tick. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>majorUnit</dt><dd>Properties used to calculate the `majorUnit` for the axis. \n         <dl>\n             <dt>determinant</dt><dd>The algorithm used for calculating distance between ticks. The possible options are `count` and `distance`. If\n             the `determinant` is `count`, the axis ticks will spaced so that a specified number of ticks appear on the axis. If the `determinant`\n             is `distance`, the axis ticks will spaced out according to the specified distance. The default value is `count`.</dd>\n             <dt>count</dt><dd>Number of ticks to appear on the axis when the `determinant` is `count`. The default value is 11.</dd>\n             <dt>distance</dt><dd>The distance (in pixels) between ticks when the `determinant` is `distance`. The default value is 75.</dd>\n         </dl>\n     </dd>\n     <dt>label</dt><dd>Properties and styles applied to the axis labels.\n         <dl>\n             <dt>color</dt><dd>The color of the labels. The default value is `#808080`.</dd>\n             <dt>alpha</dt><dd>Number between 0 and 1 indicating the opacity of the labels. The default value is 1.</dd>\n             <dt>fontSize</dt><dd>The font-size of the labels. The default value is 85%</dd>\n             <dt>rotation</dt><dd>The rotation, in degrees (between -90 and 90) of the labels. The default value is 0.</dd>\n             <dt>margin</dt><dd>The distance between the label and the axis/tick. Depending on the position of the `Axis`, only one of the properties used.\n                 <dl>\n                     <dt>top</dt><dd>Pixel value used for an axis with a `position` of `bottom`. The default value is 4.</dd>\n                     <dt>right</dt><dd>Pixel value used for an axis with a `position` of `left`. The default value is 4.</dd>\n                     <dt>bottom</dt><dd>Pixel value used for an axis with a `position` of `top`. The default value is 4.</dd>\n                     <dt>left</dt><dd>Pixel value used for an axis with a `position` of `right`. The default value is 4.</dd>\n                 </dl>\n             </dd>\n         </dl>\n     </dd>\n </dl>"
      }
     }
    },
    "AxisType": {
     "!type": "fn()",
     "prototype": {
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
       "!doc": "Returns an array of values based on an identifier key."
      },
      "getTotalMajorUnits": {
       "!type": "fn() -> ?",
       "!doc": "Returns the total number of majorUnits that will appear on an axis."
      },
      "getMajorUnitDistance": {
       "!type": "fn(len: number, uiLen: number, majorUnit: +_yui.yui.Object) -> ?",
       "!doc": "Returns the distance between major units on an axis."
      },
      "getEdgeOffset": {
       "!type": "fn(ct: number, l: number) -> ?",
       "!doc": "Gets the distance that the first and last ticks are offset from there respective\nedges."
      },
      "getLabelByIndex": {
       "!type": "fn(i: number, l: number) -> ?",
       "!doc": "Calculates and returns a value based on the number of labels and the index of\nthe current label."
      },
      "keys": {
       "!type": "+yui.Object",
       "!doc": "Hash of array identifed by a string value."
      },
      "roundingMethod": {
       "!type": "string",
       "!doc": "Indicates how to round unit values.\n  <dl>\n      <dt>niceNumber</dt><dd>Units will be smoothed based on the number of ticks and data range.</dd>\n      <dt>auto</dt><dd>If the range is greater than 1, the units will be rounded.</dd>\n      <dt>numeric value</dt><dd>Units will be equal to the numeric value.</dd>\n      <dt>null</dt><dd>No rounding will occur.</dd>\n  </dl>"
      },
      "type": {
       "!type": "string",
       "!doc": "Returns the type of axis data\n  <dl>\n      <dt>time</dt><dd>Manages time data</dd>\n      <dt>stacked</dt><dd>Manages stacked numeric data</dd>      \n      <dt>numeric</dt><dd>Manages numeric data</dd>\n      <dt>category</dt><dd>Manages categorical data</dd>\n  </dl>"
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
       "!doc": "Determines whether the maximum is calculated or explicitly \nset by the user."
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
      "labelFunction": {
       "!type": "fn()",
       "!doc": "Method used for formatting a label. This attribute allows for the default label formatting method to overridden. The method use would need\nto implement the arguments below and return a `String`.\n<dl>\n     <dt>val</dt><dd>Label to be formatted. (`String`)</dd>\n     <dt>format</dt><dd>Template for formatting label. (optional)</dd>\n</dl>"
      }
     }
    },
    "BarSeries": {
     "!type": "fn()",
     "prototype": {
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
       "!doc": "Style properties used for drawing markers. This attribute is inherited from `MarkerSeries`. Below are the default values:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>height</dt><dd>indicates the width of the marker. The default value is 12.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default \n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
      }
     }
    },
    "CartesianChart": {
     "!type": "fn()",
     "prototype": {
      "getSeriesItem": {
       "!type": "fn(series: +_yui.charts.CartesianSeries, index: number) -> ?",
       "!doc": "Returns an object literal containing a categoryItem and a valueItem for a given series index."
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
     "!type": "fn()",
     "prototype": {
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
      "chart": {
       "!type": "+charts.ChartBase",
       "!doc": "Reference to the `Chart` application."
      },
      "graph": {
       "!type": "+charts.Graph",
       "!doc": "Reference to the `Graph` in which the series is drawn into."
      },
      "xAxis": {
       "!type": "+charts.Axis",
       "!doc": "Reference to the `Axis` instance used for assigning \nx-values to the graph."
      },
      "yAxis": {
       "!type": "+charts.Axis",
       "!doc": "Reference to the `Axis` instance used for assigning \ny-values to the graph."
      },
      "xKey": {
       "!type": "string",
       "!doc": "Indicates which array to from the hash of value arrays in \nthe x-axis `Axis` instance."
      },
      "yKey": {
       "!type": "string",
       "!doc": "Indicates which array to from the hash of value arrays in \nthe y-axis `Axis` instance."
      },
      "xData": {
       "!type": "+yui.Array",
       "!doc": "Array of x values for the series."
      },
      "yData": {
       "!type": "+yui.Array",
       "!doc": "Array of y values for the series."
      },
      "rendered": {
       "!type": "bool",
       "!doc": "Indicates whether the Series has been through its initial set up."
      },
      "height": {
       "!type": "number",
       "!doc": "Returns the height of the parent graph"
      },
      "visible": {
       "!type": "bool",
       "!doc": "Indicates whether to show the series"
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
     "!type": "fn()",
     "prototype": {
      "getDataByKey": {
       "!type": "fn(value: string) -> ?",
       "!doc": "Returns an array of values based on an identifier key."
      },
      "getTotalMajorUnits": {
       "!type": "fn(majorUnit: +_yui.yui.Object, len: number) -> ?",
       "!doc": "Returns the total number of majorUnits that will appear on an axis."
      },
      "getMajorUnitDistance": {
       "!type": "fn(len: number, uiLen: number, majorUnit: +_yui.yui.Object) -> ?",
       "!doc": "Returns the distance between major units on an axis."
      },
      "getEdgeOffset": {
       "!type": "fn(ct: number, l: number) -> ?",
       "!doc": "Gets the distance that the first and last ticks are offset from there respective\nedges."
      },
      "getLabelByIndex": {
       "!type": "fn(i: number, l: number) -> ?",
       "!doc": "Calculates and returns a value based on the number of labels and the index of\nthe current label."
      }
     }
    },
    "ChartBase": {
     "!type": "fn()",
     "prototype": {
      "tooltip": {
       "!type": "+yui.Object",
       "!doc": "Reference to the default tooltip available for the chart.\n<p>Contains the following properties:</p>\n <dl>\n     <dt>node</dt><dd>Reference to the actual dom node</dd>\n     <dt>showEvent</dt><dd>Event that should trigger the tooltip</dd>\n     <dt>hideEvent</dt><dd>Event that should trigger the removal of a tooltip (can be an event or an array of events)</dd>\n     <dt>styles</dt><dd>A hash of style properties that will be applied to the tooltip node</dd>\n     <dt>show</dt><dd>Indicates whether or not to show the tooltip</dd>\n     <dt>markerEventHandler</dt><dd>Displays and hides tooltip based on marker events</dd>\n     <dt>planarEventHandler</dt><dd>Displays and hides tooltip based on planar events</dd>\n     <dt>markerLabelFunction</dt><dd>Reference to the function used to format a marker event triggered tooltips text</dd>\n     <dt>planarLabelFunction</dt><dd>Reference to the function used to format a planar event triggered tooltips text</dd>\n </dl>"
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
      "dataProvider": {
       "!type": "+yui.Array",
       "!doc": "Data used to generate the chart."
      },
      "seriesKeys": {
       "!type": "+yui.Array",
       "!doc": "A collection of keys that map to the series axes. If no keys are set,\nthey will be generated automatically depending on the data structure passed into \nthe chart."
      },
      "axesCollection": {
       "!type": "+yui.Array",
       "!doc": "Reference to all the axes in the chart."
      },
      "graph": {
       "!type": "+charts.Graph",
       "!doc": "Reference to graph instance."
      },
      "getSeries": {
       "!type": "fn(val: ?) -> ?",
       "!doc": "Returns a series instance by index or key value."
      },
      "getAxisByKey": {
       "!type": "fn(val: string) -> ?",
       "!doc": "Returns an `Axis` instance by key reference. If the axis was explicitly set through the `axes` attribute,\nthe key will be the same as the key used in the `axes` object. For default axes, the key for\nthe category axis is the value of the `categoryKey` (`category`). For the value axis, the default \nkey is `values`."
      },
      "getCategoryAxis": {
       "!type": "fn() -> ?",
       "!doc": "Returns the category axis for the chart."
      },
      "toggleTooltip": {
       "!type": "fn(e: +_yui.yui.Object)",
       "!doc": "Event listener for toggling the tooltip. If a tooltip is visible, hide it. If not, it \nwill create and show a tooltip based on the event object."
      },
      "hideTooltip": {
       "!type": "fn()",
       "!doc": "Hides the default tooltip"
      }
     }
    },
    "ColumnSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      },
      "styles": {
       "!type": "+yui.Object",
       "!doc": "Style properties used for drawing markers. This attribute is inherited from `MarkerSeries`. Below are the default values:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>width</dt><dd>indicates the width of the marker. The default value is 12.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default \n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
      }
     }
    },
    "ComboSeries": {
     "!type": "fn()",
     "prototype": {
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
       "!doc": "Reference to the styles of the markers. These styles can also\nbe accessed through the `styles` attribute. Below are default\nvalues:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#6084d0\", \"#eeb647\", \"#6c6b5f\", \"#d6484f\", \"#ce9ed1\", \"#ff9f3b\", \"#93b7ff\", \"#e0ddd0\", \"#94ecba\", \"#309687\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>width</dt><dd>indicates the width of the marker. The default value is 10.</dd>\n     <dt>height</dt><dd>indicates the height of the marker The default value is 10.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default \n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
      },
      "line": {
       "!type": "+yui.Object",
       "!doc": "Reference to the styles of the lines. These styles can also be accessed through the `styles` attribute.\nBelow are the default values:\n <dl>\n     <dt>color</dt><dd>The color of the line. The default value is determined by the order of the series on the graph. The color will be\n     retrieved from the following array: \n     `[\"#426ab3\", \"#d09b2c\", \"#000000\", \"#b82837\", \"#b384b5\", \"#ff7200\", \"#779de3\", \"#cbc8ba\", \"#7ed7a6\", \"#007a6c\"]`\n     <dt>weight</dt><dd>Number that indicates the width of the line. The default value is 6.</dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the line. The default value is 1.</dd>\n     <dt>lineType</dt><dd>Indicates whether the line is solid or dashed. The default value is solid.</dd> \n     <dt>dashLength</dt><dd>When the `lineType` is dashed, indicates the length of the dash. The default value is 10.</dd>\n     <dt>gapSpace</dt><dd>When the `lineType` is dashed, indicates the distance between dashes. The default value is 10.</dd>\n     <dt>connectDiscontinuousPoints</dt><dd>Indicates whether or not to connect lines when there is a missing or null value between points. The default value is true.</dd> \n     <dt>discontinuousType</dt><dd>Indicates whether the line between discontinuous points is solid or dashed. The default value is solid.</dd>\n     <dt>discontinuousDashLength</dt><dd>When the `discontinuousType` is dashed, indicates the length of the dash. The default value is 10.</dd>\n     <dt>discontinuousGapSpace</dt><dd>When the `discontinuousType` is dashed, indicates the distance between dashes. The default value is 10.</dd>\n </dl>"
      },
      "area": {
       "!type": "+yui.Object",
       "!doc": "Reference to the styles of the area fills. These styles can also be accessed through the `styles` attribute.\nBelow are the default values:\n\n <dl>\n     <dt>color</dt><dd>The color of the fill. The default value is determined by the order of the series on the graph. The color will be \n     retrieved from the following array:\n     `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n     </dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1</dd>\n </dl>"
      },
      "styles": {
       "!type": "+yui.Object",
       "!doc": "Style properties for the series. Contains a key indexed hash of the following:\n <dl>\n     <dt>marker</dt><dd>Style properties for the markers in the series. Specific style attributes are listed\n     <a href=\"#attr_marker\">here</a>.</dd>\n     <dt>line</dt><dd>Style properties for the lines in the series. Specific\n     style attributes are listed <a href=\"#attr_line\">here</a>.</dd>\n     <dt>area</dt><dd>Style properties for the area fills in the series. Specific style attributes are listed\n     <a href=\"#attr_area\">here</a>.</dd>\n </dl>"
      }
     }
    },
    "ComboSplineSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      }
     }
    },
    "Graph": {
     "!type": "fn()",
     "prototype": {
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
      "styles": {
       "!type": "+yui.Object",
       "!doc": "Style properties used for drawing a background. Below are the default values:\n <dl>\n     <dt>background</dt><dd>An object containing the following values:\n         <dl>\n             <dt>fill</dt><dd>Defines the style properties for the fill. Contains the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the fill. The default value is #faf9f2.</dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the background fill. The default value is 1.</dd>\n                 </dl>\n             </dd>\n             <dt>border</dt><dd>Defines the style properties for the border. Contains the following values:\n                 <dl>\n                     <dt>color</dt><dd>Color of the border. The default value is #dad8c9.</dd>\n                     <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the background border. The default value is 1.</dd>\n                     <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n                 </dl>\n             </dd>\n         </dl>\n     </dd>\n </dl>"
      }
     }
    },
    "Gridlines": {
     "!type": "fn()",
     "prototype": {
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
       "!doc": "Indicates the `Graph` in which the gridlines \nare drawn."
      }
     }
    },
    "LineSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      },
      "styles": {
       "!type": "+yui.Object",
       "!doc": "Style properties used for drawing lines. This attribute is inherited from `Renderer`. Below are the default values:\n <dl>\n     <dt>color</dt><dd>The color of the line. The default value is determined by the order of the series on the graph. The color will be\n     retrieved from the following array: \n     `[\"#426ab3\", \"#d09b2c\", \"#000000\", \"#b82837\", \"#b384b5\", \"#ff7200\", \"#779de3\", \"#cbc8ba\", \"#7ed7a6\", \"#007a6c\"]`\n     <dt>weight</dt><dd>Number that indicates the width of the line. The default value is 6.</dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the line. The default value is 1.</dd>\n     <dt>lineType</dt><dd>Indicates whether the line is solid or dashed. The default value is solid.</dd> \n     <dt>dashLength</dt><dd>When the `lineType` is dashed, indicates the length of the dash. The default value is 10.</dd>\n     <dt>gapSpace</dt><dd>When the `lineType` is dashed, indicates the distance between dashes. The default value is 10.</dd>\n     <dt>connectDiscontinuousPoints</dt><dd>Indicates whether or not to connect lines when there is a missing or null value between points. The default value is true.</dd> \n     <dt>discontinuousType</dt><dd>Indicates whether the line between discontinuous points is solid or dashed. The default value is solid.</dd>\n     <dt>discontinuousDashLength</dt><dd>When the `discontinuousType` is dashed, indicates the length of the dash. The default value is 10.</dd>\n     <dt>discontinuousGapSpace</dt><dd>When the `discontinuousType` is dashed, indicates the distance between dashes. The default value is 10.</dd>\n </dl>"
      }
     }
    },
    "MarkerSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      },
      "styles": {
       "!type": "+yui.Object",
       "!doc": "Style properties used for drawing markers. This attribute is inherited from `Renderer`. Below are the default values:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#6084d0\", \"#eeb647\", \"#6c6b5f\", \"#d6484f\", \"#ce9ed1\", \"#ff9f3b\", \"#93b7ff\", \"#e0ddd0\", \"#94ecba\", \"#309687\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>width</dt><dd>indicates the width of the marker. The default value is 10.</dd>\n     <dt>height</dt><dd>indicates the height of the marker The default value is 10.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default \n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
      }
     }
    },
    "NumericAxis": {
     "!type": "fn()",
     "prototype": {
      "alwaysShowZero": {
       "!type": "bool",
       "!doc": "Indicates whether 0 should always be displayed."
      },
      "labelFunction": {
       "!type": "fn()",
       "!doc": "Method used for formatting a label. This attribute allows for the default label formatting method to overridden. The method use would need\nto implement the arguments below and return a `String`.\n<dl>\n     <dt>val</dt><dd>Label to be formatted. (`String`)</dd>\n     <dt>format</dt><dd>Object containing properties used to format the label. (optional)</dd>\n</dl>"
      },
      "labelFormat": {
       "!type": "+yui.Object",
       "!doc": "Object containing properties used by the `labelFunction` to format a\nlabel."
      },
      "getKeyValueAt": {
       "!type": "fn(key: string, index: number) -> ?",
       "!doc": "Returns a value based of a key value and an index."
      },
      "getLabelByIndex": {
       "!type": "fn(i: number, l: number) -> ?",
       "!doc": "Calculates and returns a value based on the number of labels and the index of\nthe current label."
      }
     }
    },
    "PieChart": {
     "!type": "fn()",
     "prototype": {
      "getSeriesItem": {
       "!type": "fn(series: ?, index: ?) -> ?",
       "!doc": "Returns an object literal containing a categoryItem and a valueItem for a given series index."
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
     "!type": "fn()",
     "prototype": {
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
       "!doc": "Reference to the `Axis` instance used for assigning \nseries values to the graph."
      },
      "categoryKey": {
       "!type": "string",
       "!doc": "Indicates which array to from the hash of value arrays in \nthe category `Axis` instance."
      },
      "valueKey": {
       "!type": "string",
       "!doc": "Indicates which array to from the hash of value arrays in \nthe value `Axis` instance."
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
       "!doc": "Style properties used for drawing markers. This attribute is inherited from `MarkerSeries`. Below are the default values:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>colors</dt><dd>An array of colors to be used for the marker fills. The color for each marker is retrieved from the \n             array below:<br/>\n             `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n             </dd>\n             <dt>alphas</dt><dd>An array of alpha references (Number from 0 to 1) indicating the opacity of each marker fill. The default value is [1].</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>An array of colors to be used for the marker borders. The color for each marker is retrieved from the\n             array below:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default \n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
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
    "SplineSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      },
      "styles": {
       "!type": "+yui.Object",
       "!doc": "Style properties used for drawing lines. This attribute is inherited from `Renderer`. Below are the default values:\n <dl>\n     <dt>color</dt><dd>The color of the line. The default value is determined by the order of the series on the graph. The color will be\n     retrieved from the following array: \n     `[\"#426ab3\", \"#d09b2c\", \"#000000\", \"#b82837\", \"#b384b5\", \"#ff7200\", \"#779de3\", \"#cbc8ba\", \"#7ed7a6\", \"#007a6c\"]`\n     <dt>weight</dt><dd>Number that indicates the width of the line. The default value is 6.</dd>\n     <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the line. The default value is 1.</dd>\n     <dt>lineType</dt><dd>Indicates whether the line is solid or dashed. The default value is solid.</dd> \n     <dt>dashLength</dt><dd>When the `lineType` is dashed, indicates the length of the dash. The default value is 10.</dd>\n     <dt>gapSpace</dt><dd>When the `lineType` is dashed, indicates the distance between dashes. The default value is 10.</dd>\n     <dt>connectDiscontinuousPoints</dt><dd>Indicates whether or not to connect lines when there is a missing or null value between points. The default value is true.</dd> \n     <dt>discontinuousType</dt><dd>Indicates whether the line between discontinuous points is solid or dashed. The default value is solid.</dd>\n     <dt>discontinuousDashLength</dt><dd>When the `discontinuousType` is dashed, indicates the length of the dash. The default value is 10.</dd>\n     <dt>discontinuousGapSpace</dt><dd>When the `discontinuousType` is dashed, indicates the distance between dashes. The default value is 10.</dd>\n </dl>"
      }
     }
    },
    "StackedAreaSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      }
     }
    },
    "StackedAreaSplineSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      }
     }
    },
    "StackedBarSeries": {
     "!type": "fn()",
     "prototype": {
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
       "!doc": "Style properties used for drawing markers. This attribute is inherited from `BarSeries`. Below are the default values:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>height</dt><dd>indicates the width of the marker. The default value is 24.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default \n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
      }
     }
    },
    "StackedColumnSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      },
      "styles": {
       "!type": "+yui.Object",
       "!doc": "Style properties used for drawing markers. This attribute is inherited from `ColumnSeries`. Below are the default values:\n <dl>\n     <dt>fill</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the fill. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`\n             </dd>\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker fill. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>border</dt><dd>A hash containing the following values:\n         <dl>\n             <dt>color</dt><dd>Color of the border. The default value is determined by the order of the series on the graph. The color\n             will be retrieved from the below array:<br/>\n             `[\"#205096\", \"#b38206\", \"#000000\", \"#94001e\", \"#9d6fa0\", \"#e55b00\", \"#5e85c9\", \"#adab9e\", \"#6ac291\", \"#006457\"]`\n             <dt>alpha</dt><dd>Number from 0 to 1 indicating the opacity of the marker border. The default value is 1.</dd>\n             <dt>weight</dt><dd>Number indicating the width of the border. The default value is 1.</dd>\n         </dl>\n     </dd>\n     <dt>width</dt><dd>indicates the width of the marker. The default value is 24.</dd>\n     <dt>over</dt><dd>hash containing styles for markers when highlighted by a `mouseover` event. The default \n     values for each style is null. When an over style is not set, the non-over value will be used. For example,\n     the default value for `marker.over.fill.color` is equivalent to `marker.fill.color`.</dd>\n </dl>"
      }
     }
    },
    "StackedComboSeries": {
     "!type": "fn()",
     "prototype": {
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
     "!type": "fn()",
     "prototype": {
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
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      }
     }
    },
    "StackedMarkerSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      }
     }
    },
    "StackedSplineSeries": {
     "!type": "fn()",
     "prototype": {
      "type": {
       "!type": "string",
       "!doc": "Read-only attribute indicating the type of series."
      }
     }
    },
    "TimeAxis": {
     "!type": "fn()",
     "prototype": {
      "maximum": {
       "!type": "number",
       "!doc": "The maximum value that will appear on an axis. Unless explicitly set, this value is calculated by the `Axis`."
      },
      "minimum": {
       "!type": "number",
       "!doc": "The minimum value that will appear on an axis. Unless explicitly set, this value is calculated by the `Axis`."
      },
      "labelFunction": {
       "!type": "fn()",
       "!doc": "Method used for formatting a label. This attribute allows for the default label formatting method to overridden. The method use would need\nto implement the arguments below and return a `String`.\n<dl>\n     <dt>val</dt><dd>Label to be formatted. (`String`)</dd>\n     <dt>format</dt><dd>STRFTime string used to format the label. (optional)</dd>\n</dl>"
      },
      "labelFormat": {
       "!type": "string",
       "!doc": "Pattern used by the `labelFunction` to format a label."
      },
      "getLabelByIndex": {
       "!type": "fn(i: number, l: number) -> ?",
       "!doc": "Calculates and returns a value based on the number of labels and the index of\nthe current label."
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
       "!type": "fn(arg: string, skipPrefix: bool)",
       "!doc": "Returns a class name prefixed with the the value of the \n<code>Y.config.classNamePrefix</code> attribute + the provided strings.\nUses the <code>Y.config.classNameDelimiter</code> attribute to delimit the \nprovided strings. E.g. Y.ClassNameManager.getClassName(foo,bar); // yui-foo-bar"
      }
     }
    }
   },
   "yui": {
    "Array": {
     "!type": "fn(thing: ?, startIndex?: number, force?: bool) -> +_yui.yui.Array",
     "lastIndexOf": {
      "!type": "fn(a: +_yui.yui.Array, val: ?, fromIndex?: number) -> number",
      "!doc": "Returns the index of the last item in the array that contains the specified\nvalue, or `-1` if the value isnt found."
     },
     "unique": {
      "!type": "fn(a: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Returns a copy of the specified array with duplicate items removed."
     },
     "filter": {
      "!type": "fn(a: +_yui.yui.Array, f: fn(), o?: +_yui.yui.Object) -> +yui.Array",
      "!doc": "Executes the supplied function on each item in the array. Returns a new array\ncontaining the items for which the supplied function returned a truthy value."
     },
     "reject": {
      "!type": "fn(a: +_yui.yui.Array, f: fn(), o?: +_yui.yui.Object) -> +yui.Array",
      "!doc": "The inverse of `Array.filter()`. Executes the supplied function on each item.\nReturns a new array containing the items for which the supplied function\nreturned `false`."
     },
     "every": {
      "!type": "fn(a: +_yui.yui.Array, f: fn(), o?: +_yui.yui.Object) -> bool",
      "!doc": "Executes the supplied function on each item in the array. Iteration stops if the\nsupplied function does not return a truthy value."
     },
     "map": {
      "!type": "fn(a: +_yui.yui.Array, f: fn(), o?: +_yui.yui.Object) -> +yui.Array",
      "!doc": "Executes the supplied function on each item in the array and returns a new array\ncontaining all the values returned by the supplied function."
     },
     "reduce": {
      "!type": "fn(a: +_yui.yui.Array, init: ?, f: fn(previousValue: ?, currentValue: ?, index: number, array: +_yui.yui.Array), o?: +_yui.yui.Object) -> ?",
      "!doc": "Executes the supplied function on each item in the array, \"folding\" the array\ninto a single value."
     },
     "find": {
      "!type": "fn(a: +_yui.yui.Array, f: fn(), o?: +_yui.yui.Object) -> +yui.Object",
      "!doc": "Executes the supplied function on each item in the array, searching for the\nfirst item that matches the supplied function."
     },
     "grep": {
      "!type": "fn(a: +_yui.yui.Array, pattern: +RegExp) -> +yui.Array",
      "!doc": "Iterates over an array, returning a new array of all the elements that match the\nsupplied regular expression."
     },
     "partition": {
      "!type": "fn(a: +_yui.yui.Array, f: fn(item: ?, index: number, array: +_yui.yui.Array), o?: +_yui.yui.Object) -> +yui.Object",
      "!doc": "Partitions an array into two new arrays, one with the items for which the\nsupplied function returns `true`, and one with the items for which the function\nreturns `false`."
     },
     "zip": {
      "!type": "fn(a: +_yui.yui.Array, a2: +_yui.yui.Array) -> +yui.Array",
      "!doc": "Creates an array of arrays by pairing the corresponding elements of two arrays\ntogether into a new array."
     },
     "invoke": {
      "!type": "fn(items: +_yui.yui.Array, name: string, args?: ?) -> +yui.Array",
      "!doc": "Executes a named method on each item in an array of objects. Items in the array\nthat do not have a function by that name will be skipped."
     },
     "test": {
      "!type": "fn(obj: +_yui.yui.Object) -> number",
      "!doc": "Evaluates _obj_ to determine if its an array, an array-like collection, or\nsomething else. This is useful when working with the function `arguments`\ncollection and `HTMLElement` collections.\n\nNote: This implementation doesnt consider elements that are also\ncollections, such as `<form>` and `<select>`, to be array-like."
     },
     "dedupe": {
      "!type": "fn(array: [string]) -> +yui.Array",
      "!doc": "Dedupes an array of strings, returning an array thats guaranteed to contain\nonly one copy of a given string.\n\nThis method differs from `Array.unique()` in that its optimized for use only\nwith strings, whereas `unique` may be used with other types (but is slower).\nUsing `dedupe()` with non-string values may result in unexpected behavior."
     },
     "each": {
      "!type": "fn(array: +_yui.yui.Array, fn: fn(item: ?, index: number, array: +_yui.yui.Array), thisObj?: +_yui.yui.Object) -> +yui.YUI",
      "!doc": "Executes the supplied function on each item in the array. This method wraps\nthe native ES5 `Array.forEach()` method if available."
     },
     "forEach": {
      "!type": "fn()",
      "!doc": "Alias for `each()`."
     },
     "hash": {
      "!type": "fn(keys: [string], values?: +_yui.yui.Array) -> +yui.Object",
      "!doc": "Returns an object using the first array as keys and the second as values. If\nthe second array is not provided, or if it doesnt contain the same number of\nvalues as the first array, then `true` will be used in place of the missing\nvalues."
     },
     "indexOf": {
      "!type": "fn(array: +_yui.yui.Array, value: ?) -> number",
      "!doc": "Returns the index of the first item in the array thats equal (using a strict\nequality check) to the specified _value_, or `-1` if the value isnt found.\n\nThis method wraps the native ES5 `Array.indexOf()` method if available."
     },
     "numericSort": {
      "!type": "fn(a: number, b: number) -> number",
      "!doc": "Numeric sort convenience function.\n\nThe native `Array.prototype.sort()` function converts values to strings and\nsorts them in lexicographic order, which is unsuitable for sorting numeric\nvalues. Provide `Array.numericSort` as a custom sort function when you want\nto sort values in numeric order."
     },
     "some": {
      "!type": "fn(array: +_yui.yui.Array, fn: fn(value: ?, index: number, array: +_yui.yui.Array), thisObj?: +_yui.yui.Object) -> bool",
      "!doc": "Executes the supplied function on each item in the array. Returning a truthy\nvalue from the function will stop the processing of remaining items."
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
       "!doc": "List of operators and corresponding boolean functions. \nThese functions are passed the attribute and the current nodes value of the attribute."
      },
      "undefined": {
       "!type": "fn()",
       "!doc": "Break selector into token units per simple selector.\nCombinator is attached to the previous token."
      }
     },
     "query": {
      "!type": "fn(selector: string, root: +HTMLElement, firstOnly: bool) -> +yui.Array",
      "!doc": "Retrieves a set of nodes based on a given CSS selector."
     },
     "ancestor": {
      "!type": "fn(element: +HTMLElement, selector: string, testSelf: bool) -> +HTMLElement",
      "!doc": "A convenience function to emulate Y.Nodes aNode.ancestor(selector)."
     }
    },
    "YUI": {
     "!type": "fn(o: +_yui.yui.Object) -> +_yui.yui.YUI",
     "prototype": {
      "dump": {
       "!type": "fn(o: +_yui.yui.Object, d: number) -> string",
       "!doc": "Returns a simple string representation of the object or array.\nOther types of objects will be returned unprocessed.  Arrays\nare expected to be indexed."
      },
      "delegate": {
       "!type": "fn(type: string, fn: fn(), el: string, filter: string, context: ?, args: ?) -> +event_custom.EventHandle",
       "!doc": "Sets up event delegation on a container element.  The delegated event\nwill use a supplied filter to test if the callback should be executed.\nThis filter can be either a selector string or a function that returns\na Node to use as the currentTarget for the event.\n\nThe event object for the delegated event is supplied to the callback\nfunction.  It is modified slightly in order to support all properties\nthat may be needed for event delegation.  currentTarget is set to\nthe element that matched the selector string filter or the Node returned\nfrom the filter function.  container is set to the element that the\nlistener is delegated from (this normally would be the currentTarget).\n\nFilter functions will be called with the arguments that would be passed to\nthe callback function, including the event object as the first parameter.\nThe function should return false (or a falsey value) if the success criteria\narent met, and the Node to use as the events currentTarget and this\nobject if they are."
      },
      "Global": {
       "!type": "+node.EventTarget",
       "!doc": "Hosts YUI page level events.  This is where events bubble to\nwhen the broadcast config is set to 2.  This property is\nonly available if the custom event module is loaded."
      },
      "on": {
       "!type": "fn(type: ?, fn: ?, context: ?, args: ?) -> ?",
       "!doc": "<code>YUI</code>s <code>on</code> method is a unified interface for subscribing to\nmost events exposed by YUI.  This includes custom events, DOM events, and\nfunction events.  <code>detach</code> is also provided to remove listeners\nserviced by this function.\n\nThe signature that <code>on</code> accepts varies depending on the type\nof event being consumed.  Refer to the specific methods that will\nservice a specific request for additional information about subscribing\nto that type of event.\n\n<ul>\n<li>Custom events.  These events are defined by various\nmodules in the library.  This type of event is delegated to\n<code>EventTarget</code>s <code>on</code> method.\n  <ul>\n    <li>The type of the event</li>\n    <li>The callback to execute</li>\n    <li>An optional context object</li>\n    <li>0..n additional arguments to supply the callback.</li>\n  </ul>\n  Example:\n  <code>Y.on(drag:drophit, function() { // start work });</code>\n</li>\n<li>DOM events.  These are moments reported by the browser related\nto browser functionality and user interaction.\nThis type of event is delegated to <code>Event</code>s\n<code>attach</code> method.\n  <ul>\n    <li>The type of the event</li>\n    <li>The callback to execute</li>\n    <li>The specification for the Node(s) to attach the listener\n    to.  This can be a selector, collections, or Node/Element\n    refereces.</li>\n    <li>An optional context object</li>\n    <li>0..n additional arguments to supply the callback.</li>\n  </ul>\n  Example:\n  <code>Y.on(click, function(e) { // something was clicked }, #someelement);</code>\n</li>\n<li>Function events.  These events can be used to react before or after a\nfunction is executed.  This type of event is delegated to <code>Event.Do</code>s\n<code>before</code> method.\n  <ul>\n    <li>The callback to execute</li>\n    <li>The object that has the function that will be listened for.</li>\n    <li>The name of the function to listen for.</li>\n    <li>An optional context object</li>\n    <li>0..n additional arguments to supply the callback.</li>\n  </ul>\n  Example <code>Y.on(function(arg1, arg2, etc) { // obj.methodname was executed }, obj methodname);</code>\n</li>\n</ul>\n\n<code>on</code> corresponds to the moment before any default behavior of\nthe event.  <code>after</code> works the same way, but these listeners\nexecute after the events default behavior.  <code>before</code> is an\nalias for <code>on</code>."
      },
      "once": {
       "!type": "fn(type: ?, fn: ?, context: ?, args: ?) -> ?",
       "!doc": "Listen for an event one time.  Equivalent to <code>on</code>, except that\nthe listener is immediately detached when executed."
      },
      "onceAfter": {
       "!type": "fn(type: string, fn: fn(), context?: +_yui.yui.Object, arg?: ?) -> +event_custom.EventHandle",
       "!doc": "Listen for an event one time.  Equivalent to `once()`, except, like `after()`,\nthe subscription callback executes after all `on()` subscribers and the events\n`defaultFn` (if configured) have executed.  Like `after()` if any `on()` phase\nsubscriber calls `e.preventDefault()`, neither the `defaultFn` nor the `after()`\nsubscribers will execute.\n\nThe listener is immediately detached when executed.\n\nSee the <a href=\"#methods_on\">`on()` method</a> for additional subscription\noptions."
      },
      "after": {
       "!type": "fn(type: ?, fn: ?, context: ?, args: ?) -> ?",
       "!doc": "after() is a unified interface for subscribing to\nmost events exposed by YUI.  This includes custom events,\nDOM events, and AOP events.  This works the same way as\nthe on() function, only it operates after any default\nbehavior for the event has executed. @see <code>on</code> for more\ninformation."
      },
      "meta": {
       "!type": "?",
       "!doc": "The component metadata is stored in Y.Env.meta.\nPart of the loader module."
      },
      "all": {
       "!type": "fn(selector: string) -> +dom.NodeList",
       "!doc": "Retrieves a NodeList based on the given CSS selector."
      },
      "one": {
       "!type": "fn(node: string) -> +Y.Node",
       "!doc": "Returns a single Node instance bound to the node or the\nfirst element matching the given selector. Returns null if no match found.\n<strong>Note:</strong> For chaining purposes you may want to\nuse <code>Y.all</code>, which returns a NodeList when no match is found."
      },
      "augment": {
       "!type": "fn(receiver: fn(), supplier: fn(), overwrite?: bool, whitelist?: [string], args?: +_yui.yui.Array) -> fn()",
       "!doc": "Augments the _receiver_ with prototype properties from the _supplier_. The\nreceiver may be a constructor function or an object. The supplier must be a\nconstructor function.\n\nIf the _receiver_ is an object, then the _supplier_ constructor will be called\nimmediately after _receiver_ is augmented, with _receiver_ as the `this` object.\n\nIf the _receiver_ is a constructor function, then all prototype methods of\n_supplier_ that are copied to _receiver_ will be sequestered, and the\n_supplier_ constructor will not be called immediately. The first time any\nsequestered method is called on the _receiver_s prototype, all sequestered\nmethods will be immediately copied to the _receiver_s prototype, the\n_supplier_s constructor will be executed, and finally the newly unsequestered\nmethod that was called will be executed.\n\nThis sequestering logic sounds like a bunch of complicated voodoo, but it makes\nit cheap to perform frequent augmentation by ensuring that suppliers\nconstructors are only called if a supplied method is actually used. If none of\nthe supplied methods is ever used, then theres no need to take the performance\nhit of calling the _supplier_s constructor."
      },
      "aggregate": {
       "!type": "fn(r: fn(), s: fn(), ov: bool, wl: [string]) -> +yui.Object",
       "!doc": "Applies object properties from the supplier to the receiver.  If\nthe target has the property, and the property is an object, the target\nobject will be augmented with the suppliers value.  If the property\nis an array, the suppliers value will be appended to the target."
      },
      "extend": {
       "!type": "fn(r: fn(), s: fn(), px: +_yui.yui.Object, sx: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Utility to set up the prototype, constructor and superclass properties to\nsupport an inheritance strategy that can chain constructors and methods.\nStatic members will not be inherited."
      },
      "each": {
       "!type": "fn(o: +_yui.yui.Object, f: fn(), c: +_yui.yui.Object, proto: bool) -> +yui.YUI",
       "!doc": "Executes the supplied function for each item in\na collection.  Supports arrays, objects, and\nNodeLists"
      },
      "some": {
       "!type": "fn(o: +_yui.yui.Object, f: fn(), c: +_yui.yui.Object, proto: bool) -> bool",
       "!doc": "Executes the supplied function for each item in\na collection.  The operation stops if the function\nreturns true. Supports arrays, objects, and\nNodeLists."
      },
      "clone": {
       "!type": "fn(o: +_yui.yui.Object, safe: bool, f: fn(), c: +_yui.yui.Object, owner: +_yui.yui.Object, cloned: +_yui.yui.Object) -> +yui.Array",
       "!doc": "Deep object/array copy.  Function clones are actually\nwrappers around the original function.\nArray-like objects are treated as arrays.\nPrimitives are returned untouched.  Optionally, a\nfunction can be provided to handle other data types,\nfilter keys, validate values, etc."
      },
      "bind": {
       "!type": "fn(f: fn(), c: +_yui.yui.Object, args: ?) -> fn()",
       "!doc": "Returns a function that will execute the supplied function in the\nsupplied objects context, optionally adding any additional\nsupplied parameters to the beginning of the arguments collection the\nsupplied to the function."
      },
      "rbind": {
       "!type": "fn(f: fn(), c: +_yui.yui.Object, args: ?) -> fn()",
       "!doc": "Returns a function that will execute the supplied function in the\nsupplied objects context, optionally adding any additional\nsupplied parameters to the end of the arguments the function\nis executed with."
      },
      "applyConfig": {
       "!type": "fn(o: +_yui.yui.Object)",
       "!doc": "Applies a new configuration object to the YUI instance config.\nThis will merge new group/module definitions, and will also\nupdate the loader cache if necessary.  Updating Y.config directly\nwill not update the cache."
      },
      "version": {
       "!type": "string",
       "!doc": "The version number of the YUI instance."
      },
      "applyTo": {
       "!type": "fn(id: string, method: string, args: +_yui.yui.Array) -> +yui.Object",
       "!doc": "Executes a method on a YUI instance with\nthe specified id if the specified method is whitelisted."
      },
      "add": {
       "!type": "fn(name: string, fn: fn(Y: +_yui.yui.YUI, name: string), version: string, details: +_yui.yui.Object) -> +yui.YUI",
       "!doc": "Registers a module with the YUI global.  The easiest way to create a\nfirst-class YUI module is to use the YUI component build tool.\n\nhttp://yuilibrary.com/projects/builder\n\nThe build system will produce the `YUI.add` wrapper for you module, along\nwith any configuration info required for the module."
      },
      "use": {
       "!type": "fn(modules: string, callback: fn()) -> +yui.YUI",
       "!doc": "Attaches one or more modules to the YUI instance.  When this\nis executed, the requirements are analyzed, and one of\nseveral things can happen:\n\n * All requirements are available on the page --  The modules\n  are attached to the instance.  If supplied, the use callback\n  is executed synchronously.\n\n * Modules are missing, the Get utility is not available OR\n  the bootstrap config is false -- A warning is issued about\n  the missing modules and all available modules are attached.\n\n * Modules are missing, the Loader is not available but the Get\n  utility is and boostrap is not false -- The loader is bootstrapped\n  before doing the following....\n\n * Modules are missing and the Loader is available -- The loader\n  expands the dependency tree and fetches missing modules.  When\n  the loader is finshed the callback supplied to use is executed\n  asynchronously."
      },
      "namespace": {
       "!type": "fn(namespace: string) -> +yui.Object",
       "!doc": "Adds a namespace object onto the YUI global if called statically.\n\n    // creates YUI.your.namespace.here as nested objects\n    YUI.namespace(\"your.namespace.here\");\n\nIf called as a method on a YUI <em>instance</em>, it creates the\nnamespace on the instance.\n\n     // creates Y.property.package\n     Y.namespace(\"property.package\");\n\nDots in the input string cause `namespace` to create nested objects for\neach token. If any part of the requested namespace already exists, the\ncurrent object will be left in place.  This allows multiple calls to\n`namespace` to preserve existing namespaced properties.\n\nIf the first token in the namespace string is \"YAHOO\", the token is\ndiscarded.\n\nBe careful with namespace tokens. Reserved words may work in some browsers\nand not others. For instance, the following will fail in some browsers\nbecause the supported version of JavaScript reserves the word \"long\":\n\n     Y.namespace(\"really.long.nested.namespace\");"
      },
      "error": {
       "!type": "fn(msg: string, e: +Error, data: ?) -> +yui.YUI",
       "!doc": "Report an error.  The reporting mechanism is controled by\nthe `throwFail` configuration attribute.  If throwFail is\nnot specified, the message is written to the Logger, otherwise\na JS error is thrown"
      },
      "guid": {
       "!type": "fn(pre: string) -> string",
       "!doc": "Generate an id that is unique among all YUI instances"
      },
      "stamp": {
       "!type": "fn(o: +_yui.yui.Object, readOnly: bool) -> string",
       "!doc": "Returns a `guid` associated with an object.  If the object\ndoes not have one, a new one is created unless `readOnly`\nis specified."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Destroys the YUI instance"
      },
      "instanceOf": {
       "!type": "fn()",
       "!doc": "instanceof check for objects that works around\nmemory leak in IE when the item tested is\nwindow/document"
      },
      "cached": {
       "!type": "fn(source: fn(), cache?: +_yui.yui.Object, refetch?: ?) -> fn()",
       "!doc": "Returns a wrapper for a function which caches the return value of that function,\nkeyed off of the combined string representation of the argument values provided\nwhen the wrapper is called.\n\nCalling this function again with the same arguments will return the cached value\nrather than executing the wrapped function.\n\nNote that since the cache is keyed off of the string representation of arguments\npassed to the wrapper function, arguments that arent strings and dont provide\na meaningful `toString()` method may result in unexpected caching behavior. For\nexample, the objects `{}` and `{foo: bar}` would both be converted to the\nstring `[object Object]` when used as a cache key."
      },
      "merge": {
       "!type": "fn(objects: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Returns a new object containing all of the properties of all the supplied\nobjects. The properties from later objects will overwrite those in earlier\nobjects.\n\nPassing in a single object will create a shallow copy of it. For a deep copy,\nuse `clone()`."
      },
      "mix": {
       "!type": "fn(receiver: fn(), supplier: fn(), overwrite?: bool, whitelist?: [string], mode?: number, merge?: bool) -> fn()",
       "!doc": "Mixes _supplier_s properties into _receiver_.\n\nProperties on _receiver_ or _receiver_s prototype will not be overwritten or\nshadowed unless the _overwrite_ parameter is `true`, and will not be merged\nunless the _merge_ parameter is `true`.\n\nIn the default mode (0), only properties the supplier owns are copied (prototype\nproperties are not copied). The following copying modes are available:\n\n  * `0`: _Default_. Object to object.\n  * `1`: Prototype to prototype.\n  * `2`: Prototype to prototype and object to object.\n  * `3`: Prototype to object.\n  * `4`: Object to prototype."
      },
      "log": {
       "!type": "fn(msg: string, cat: string, src: string, silent: bool) -> +yui.YUI",
       "!doc": "If the debug config is true, a yui:log event will be\ndispatched, which the Console widget and anything else\ncan consume.  If the useBrowserConsole config is true, it will\nwrite to the browser console if available.  YUI-specific log\nmessages will only be present in the -debug versions of the\nJS files.  The build system is supposed to remove log statements\nfrom the raw and minified versions of the files."
      },
      "message": {
       "!type": "fn(msg: string, cat: string, src: string, silent: bool) -> +yui.YUI",
       "!doc": "Write a system message.  This message will be preserved in the\nminified and raw versions of the YUI files, unlike log statements."
      },
      "later": {
       "!type": "fn(when: number, o: ?, fn: fn(), data: ?, periodic: bool) -> +yui.Object",
       "!doc": "Executes the supplied function in the context of the supplied\nobject when milliseconds later.  Executes the function a\nsingle time unless periodic is set to true."
      },
      "YUI_config": {
       "!type": "+yui.Object",
       "!doc": "YUI_config is a page-level config.  It is applied to all\ninstances created on the page.  This is applied after\nYUI.GlobalConfig, and before the instance level configuration\nobjects."
      },
      "throttle": {
       "!type": "fn(fn: fn(), ms: number) -> fn()",
       "!doc": "Throttles a call to a method based on the time between calls."
      }
     },
     "compileFilter": {
      "!type": "fn(selector: string) -> fn()",
      "!doc": "Compiles a selector string into a filter function to identify whether\nNodes along the parent axis of an events target should trigger event\nnotification.\n\nThis function is memoized, so previously compiled filter functions are\nreturned if the same selector string is provided.\n\nThis function may be useful when defining synthetic events for delegate\nhandling.\n\nHosted as a property of the `delegate` method (e.g. `Y.delegate.compileFilter`)."
     },
     "io": {
      "!type": "fn(url: string, config: +_yui.yui.Object) -> +yui.Object",
      "!doc": "Method for initiating an ajax call.  The first argument is the url end\npoint for the call.  The second argument is an object to configure the\ntransaction and attach event subscriptions.  The configuration object\nsupports the following properties:\n\n<dl>\n  <dt>method</dt>\n    <dd>HTTP method verb (e.g., GET or POST). If this property is not\n        not defined, the default value will be GET.</dd>\n\n  <dt>data</dt>\n    <dd>This is the name-value string that will be sent as the\n    transaction data. If the request is HTTP GET, the data become\n    part of querystring. If HTTP POST, the data are sent in the\n    message body.</dd>\n\n  <dt>xdr</dt>\n    <dd>Defines the transport to be used for cross-domain requests.\n    By setting this property, the transaction will use the specified\n    transport instead of XMLHttpRequest. The properties of the\n    transport object are:\n    <dl>\n      <dt>use</dt>\n        <dd>The transport to be used: flash or native</dd>\n      <dt>dataType</dt>\n        <dd>Set the value to XML if that is the expected response\n        content type.</dd>\n    </dl></dd>\n\n  <dt>form</dt>\n    <dd>Form serialization configuration object.  Its properties are:\n    <dl>\n      <dt>id</dt>\n        <dd>Node object or id of HTML form</dd>\n      <dt>useDisabled</dt>\n        <dd>`true` to also serialize disabled form field values\n        (defaults to `false`)</dd>\n    </dl></dd>\n\n  <dt>on</dt>\n    <dd>Assigns transaction event subscriptions. Available events are:\n    <dl>\n      <dt>start</dt>\n        <dd>Fires when a request is sent to a resource.</dd>\n      <dt>complete</dt>\n        <dd>Fires when the transaction is complete.</dd>\n      <dt>success</dt>\n        <dd>Fires when the HTTP response status is within the 2xx\n        range.</dd>\n      <dt>failure</dt>\n        <dd>Fires when the HTTP response status is outside the 2xx\n        range, if an exception occurs, if the transation is aborted,\n        or if the transaction exceeds a configured `timeout`.</dd>\n      <dt>end</dt>\n        <dd>Fires at the conclusion of the transaction\n           lifecycle, after `success` or `failure`.</dd>\n    </dl>\n\n    <p>Callback functions for `start` and `end` receive the id of the\n    transaction as a first argument. For `complete`, `success`, and\n    `failure`, callbacks receive the id and the response object\n    (usually the XMLHttpRequest instance).  If the `arguments`\n    property was included in the configuration object passed to\n    `Y.io()`, the configured data will be passed to all callbacks as\n    the last argument.</p>\n    </dd>\n\n  <dt>sync</dt>\n    <dd>Pass `true` to make a same-domain transaction synchronous.\n    <strong>CAVEAT</strong>: This will negatively impact the user\n    experience. Have a <em>very</em> good reason if you intend to use\n    this.</dd>\n\n  <dt>context</dt>\n    <dd>The \"`this\" object for all configured event handlers. If a\n    specific context is needed for individual callbacks, bind the\n    callback to a context using `Y.bind()`.</dd>\n\n  <dt>headers</dt>\n    <dd>Object map of transaction headers to send to the server. The\n    object keys are the header names and the values are the header\n    values.</dd>\n\n  <dt>timeout</dt>\n    <dd>Millisecond threshold for the transaction before being\n    automatically aborted.</dd>\n\n  <dt>arguments</dt>\n    <dd>User-defined data passed to all registered event handlers.\n    This value is available as the second argument in the \"start\" and\n    \"end\" event handlers. It is the third argument in the \"complete\",\n    \"success\", and \"failure\" event handlers. <strong>Be sure to quote\n    this property name in the transaction configuration as\n    \"arguments\" is a reserved word in JavaScript</strong> (e.g.\n    `Y.io({ ..., \"arguments\": stuff })`).</dd>\n</dl>"
     },
     "header": {
      "!type": "fn(name: string, value: string)",
      "!doc": "Method for setting and deleting IO HTTP headers to be sent with every\nrequest.\n\nHosted as a property on the `io` function (e.g. `Y.io.header`)."
     },
     "jsonp": {
      "!type": "fn(url: string, c: fn(), args: ?) -> +jsonp.JSONPRequest"
     },
     "get": {
      "!type": "fn(node: string, doc: +_yui.node.Node)",
      "!doc": "Returns a single Node instance bound to the node or the\nfirst element matching the given selector."
     },
     "delegate.compileFilter": {
      "!type": "fn(selector: string) -> fn()",
      "!doc": "<p>Compiles a selector string into a filter function to identify whether\nNodes along the parent axis of an events target should trigger event\nnotification.</p>\n\n<p>This function is memoized, so previously compiled filter functions are\nreturned if the same selector string is provided.</p>\n\n<p>This function may be useful when defining synthetic events for delegate\nhandling.</p>"
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
      "!doc": "YUI.GlobalConfig is a master configuration that might span\nmultiple contexts in a non-browser environment.  It is applied\nfirst to all instances in all contexts."
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
       "!doc": "Allows the YUI seed file to fetch the loader component and library\nmetadata to dynamically load additional dependencies."
      },
      "useBrowserConsole": {
       "!type": "bool",
       "!doc": "Log to the browser console if debug is on and the browser has a\nsupported console."
      },
      "logInclude": {
       "!type": "+object",
       "!doc": "A hash of log sources that should be logged.  If specified, only\nlog messages from these sources will be logged."
      },
      "logExclude": {
       "!type": "+object",
       "!doc": "A hash of log sources that should be not be logged.  If specified,\nall sources are logged if not on this list."
      },
      "injected": {
       "!type": "bool",
       "!doc": "Set to true if the yui seed file was dynamically loaded in\norder to bootstrap components relying on the window load event\nand the `domready` custom event."
      },
      "throwFail": {
       "!type": "bool",
       "!doc": "If `throwFail` is set, `Y.error` will generate or re-throw a JS Error.\nOtherwise the failure is logged."
      },
      "win": {
       "!type": "+Window",
       "!doc": "The window/frame that this instance should operate in."
      },
      "doc": {
       "!type": "+Document",
       "!doc": "The document associated with the win configuration."
      },
      "core": {
       "!type": "[string]",
       "!doc": "A list of modules that defines the YUI core (overrides the default)."
      },
      "lang": {
       "!type": "string",
       "!doc": "A list of languages in order of preference. This list is matched against\nthe list of available languages in modules that the YUI instance uses to\ndetermine the best possible localization of language sensitive modules.\nLanguages are represented using BCP 47 language tags, such as \"en-GB\" for\nEnglish as used in the United Kingdom, or \"zh-Hans-CN\" for simplified\nChinese as used in China. The list can be provided as a comma-separated\nlist or as an array."
      },
      "dateFormat": {
       "!type": "string",
       "!doc": "The default date format"
      },
      "locale": {
       "!type": "string",
       "!doc": "The default locale"
      },
      "pollInterval": {
       "!type": "number",
       "!doc": "The default interval when polling in milliseconds."
      },
      "purgethreshold": {
       "!type": "number",
       "!doc": "The number of dynamic nodes to insert by default before\nautomatically removing them.  This applies to script nodes\nbecause removing the node will not make the evaluated script\nunavailable.  Dynamic CSS is not auto purged, because removing\na linked style sheet will also remove the style definitions."
      },
      "windowResizeDelay": {
       "!type": "number",
       "!doc": "The default interval when polling in milliseconds."
      },
      "base": {
       "!type": "string",
       "!doc": "Base directory for dynamic loading"
      },
      "comboBase": {
       "!type": "string",
       "!doc": "The YUI combo service base dir. Ex: `http://yui.yahooapis.com/combo?`\nFor dynamic loading."
      },
      "root": {
       "!type": "string",
       "!doc": "The root path to prepend to module path for the combo service.\nEx: 3.0.0b1/build/\nFor dynamic loading."
      },
      "filter": {
       "!type": "string",
       "!doc": "A filter to apply to result urls.  This filter will modify the default\npath for all modules.  The default path for the YUI library is the\nminified version of the files (e.g., event-min.js).  The filter property\ncan be a predefined filter or a custom filter.  The valid predefined\nfilters are:\n<dl>\n <dt>DEBUG</dt>\n <dd>Selects the debug versions of the library (e.g., event-debug.js).\n     This option will automatically include the Logger widget</dd>\n <dt>RAW</dt>\n <dd>Selects the non-minified version of the library (e.g., event.js).</dd>\n</dl>\nYou can also define a custom filter, which must be an object literal\ncontaining a search expression and a replace string:\n\n     myFilter: {\n         searchExp: \"-min\\\\.js\",\n         replaceStr: \"-debug.js\"\n     }\n\nFor dynamic loading."
      },
      "skin": {
       "!type": "?",
       "!doc": "The `skin` config lets you configure application level skin\ncustomizations.  It contains the following attributes which\ncan be specified to override the defaults:\n\n     // The default skin, which is automatically applied if not\n     // overriden by a component-specific skin definition.\n     // Change this in to apply a different skin globally\n     defaultSkin: sam,\n\n     // This is combined with the loader base property to get\n     // the default root directory for a skin.\n     base: assets/skins/,\n\n     // Any component-specific overrides can be specified here,\n     // making it possible to load different skins for different\n     // components.  It is possible to load more than one skin\n     // for a given component as well.\n     overrides: {\n         slider: [capsule, round]\n     }\n\nFor dynamic loading."
      },
      "filters": {
       "!type": "?",
       "!doc": "Hash of per-component filter specification.  If specified for a given\ncomponent, this overrides the filter config.\n\nFor dynamic loading."
      },
      "combine": {
       "!type": "bool",
       "!doc": "Use the YUI combo service to reduce the number of http connections\nrequired to load your dependencies.  Turning this off will\ndisable combo handling for YUI and all module groups configured\nwith a combo service.\n\nFor dynamic loading."
      },
      "ignore": {
       "!type": "[string]",
       "!doc": "A list of modules that should never be dynamically loaded"
      },
      "force": {
       "!type": "[string]",
       "!doc": "A list of modules that should always be loaded when required, even if already\npresent on the page."
      },
      "insertBefore": {
       "!type": "string",
       "!doc": "Node or id for a node that should be used as the insertion point for new\nnodes.  For dynamic loading."
      },
      "jsAttributes": {
       "!type": "string",
       "!doc": "Object literal containing attributes to add to dynamically loaded script\nnodes."
      },
      "cssAttributes": {
       "!type": "string",
       "!doc": "Object literal containing attributes to add to dynamically loaded link\nnodes."
      },
      "timeout": {
       "!type": "number",
       "!doc": "Number of milliseconds before a timeout occurs when dynamically\nloading nodes. If not set, there is no timeout."
      },
      "onCSS": {
       "!type": "fn()",
       "!doc": "Callback for the CSSComplete event.  When dynamically loading YUI\ncomponents with CSS, this property fires when the CSS is finished\nloading but script loading is still ongoing.  This provides an\nopportunity to enhance the presentation of a loading page a little\nbit before the entire loading process is done."
      },
      "modules": {
       "!type": "+object",
       "!doc": "A hash of module definitions to add to the list of YUI components.\nThese components can then be dynamically loaded side by side with\nYUI via the `use()` method. This is a hash, the key is the module\nname, and the value is an object literal specifying the metdata\nfor the module.  See `Loader.addModule` for the supported module\nmetadata fields.  Also see groups, which provides a way to\nconfigure the base and combo spec for a set of modules.\n\n     modules: {\n         mymod1: {\n             requires: [node],\n             fullpath: http://myserver.mydomain.com/mymod1/mymod1.js\n         },\n         mymod2: {\n             requires: [mymod1],\n             fullpath: http://myserver.mydomain.com/mymod2/mymod2.js\n         }\n     }"
      },
      "groups": {
       "!type": "+object",
       "!doc": "A hash of module group definitions.  It for each group you\ncan specify a list of modules and the base path and\ncombo spec to use when dynamically loading the modules.\n\n     groups: {\n         yui2: {\n             // specify whether or not this group has a combo service\n             combine: true,\n\n             // the base path for non-combo paths\n             base: http://yui.yahooapis.com/2.8.0r4/build/,\n\n             // the path to the combo service\n             comboBase: http://yui.yahooapis.com/combo?,\n\n             // a fragment to prepend to the path attribute when\n             // when building combo urls\n             root: 2.8.0r4/build/,\n\n             // the module definitions\n             modules:  {\n                 yui2_yde: {\n                     path: \"yahoo-dom-event/yahoo-dom-event.js\"\n                 },\n                 yui2_anim: {\n                     path: \"animation/animation.js\",\n                     requires: [yui2_yde]\n                 }\n             }\n         }\n     }"
      },
      "loaderPath": {
       "!type": "string",
       "!doc": "The loader path attribute to the loader itself.  This is combined\nwith the base attribute to dynamically load the loader component\nwhen boostrapping with the get utility alone."
      },
      "fetchCSS": {
       "!type": "bool",
       "!doc": "Specifies whether or not YUI().use(...) will attempt to load CSS\nresources at all.  Any truthy value will cause CSS dependencies\nto load when fetching script.  The special value force will\ncause CSS dependencies to be loaded even if no script is needed."
      },
      "gallery": {
       "!type": "string",
       "!doc": "The default gallery version to build gallery module urls"
      },
      "yui2": {
       "!type": "string",
       "!doc": "The default YUI 2 version to build yui2 module urls.  This is for\nintrinsic YUI 2 support via the 2in3 project.  Also see the 2in3\nconfig for pulling different revisions of the wrapped YUI 2\nmodules."
      },
      "2in3": {
       "!type": "string",
       "!doc": "The 2in3 project is a deployment of the various versions of YUI 2\ndeployed as first-class YUI 3 modules.  Eventually, the wrapper\nfor the modules will change (but the underlying YUI 2 code will\nbe the same), and you can select a particular version of\nthe wrapper modules via this config."
      },
      "logFn": {
       "!type": "fn()",
       "!doc": "Alternative console log function for use in environments without\na supported native console.  The function is executed in the\nYUI instance context."
      },
      "errorFn": {
       "!type": "fn()",
       "!doc": "A callback to execute when Y.error is called.  It receives the\nerror message and an javascript error object if Y.error was\nexecuted because a javascript error was caught.  The function\nis executed in the YUI instance context."
      },
      "loadErrorFn": {
       "!type": "fn()",
       "!doc": "A callback to execute when the loader fails to load one or\nmore resource.  This could be because of a script load\nfailure.  It can also fail if a javascript module fails\nto register itself, but only when the requireRegistration\nis true.  If this function is defined, the use() callback will\nonly be called when the loader succeeds, otherwise it always\nexecutes unless there was a javascript error when attaching\na module."
      },
      "requireRegistration": {
       "!type": "bool",
       "!doc": "When set to true, the YUI loader will expect that all modules\nit is responsible for loading will be first-class YUI modules\nthat register themselves with the YUI global.  If this is\nset to true, loader will fail if the module registration fails\nto happen after the script is loaded."
      },
      "cacheUse": {
       "!type": "bool",
       "!doc": "Cache serviced use() requests."
      },
      "rls": {
       "!type": "+yui.Object",
       "!doc": "The parameter defaults for the remote loader service. **Requires the rls seed file.** The properties that are supported:\n\n * `m`: comma separated list of module requirements.  This\n   must be the param name even for custom implemetations.\n * `v`: the version of YUI to load.  Defaults to the version\n   of YUI that is being used.\n * `gv`: the version of the gallery to load (see the gallery config)\n * `env`: comma separated list of modules already on the page.\n     this must be the param name even for custom implemetations.\n * `lang`: the languages supported on the page (see the lang config)\n * `2in3v`:  the version of the 2in3 wrapper to use (see the 2in3 config).\n * `2v`: the version of yui2 to use in the yui 2in3 wrappers\n * `filt`: a filter def to apply to the urls (see the filter config).\n * `filts`: a list of custom filters to apply per module\n * `tests`: this is a map of conditional module test function id keys\nwith the values of 1 if the test passes, 0 if not.  This must be\nthe name of the querystring param in custom templates."
      },
      "rls_base": {
       "!type": "string",
       "!doc": "The base path to the remote loader service. **Requires the rls seed file.**"
      },
      "rls_tmpl": {
       "!type": "string",
       "!doc": "The template to use for building the querystring portion\nof the remote loader service url.  The default is determined\nby the rls config -- each property that has a value will be\nrepresented. **Requires the rls seed file.**"
      },
      "use_rls": {
       "!type": "bool",
       "!doc": "Configure the instance to use a remote loader service instead of\nthe client loader. **Requires the rls seed file.**"
      }
     }
    },
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
       "!type": "fn(module: string, lang: string, strings: +_yui.yui.Object)",
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
    "Queue": {
     "!type": "fn(item: +MIXED) -> +_yui.yui.Queue",
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
     "isFunction": {
      "!type": "fn(o: ?) -> bool",
      "!doc": "<p>\nDetermines whether or not the provided item is a function.\nNote: Internet Explorer thinks certain functions are objects:\n</p>\n\n<pre>\nvar obj = document.createElement(\"object\");\nY.Lang.isFunction(obj.getAttribute) // reports false in IE\n&nbsp;\nvar input = document.createElement(\"input\"); // append to body\nY.Lang.isFunction(input.focus) // reports false in IE\n</pre>\n\n<p>\nYou will have to implement additional tests if these functions\nmatter to you.\n</p>"
     },
     "isDate": {
      "!type": "fn(o: ?) -> bool",
      "!doc": "Determines whether or not the supplied item is a date instance."
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
     "isString": {
      "!type": "fn(o: ?) -> bool",
      "!doc": "Determines whether or not the provided item is a string."
     },
     "isUndefined": {
      "!type": "fn(o: ?) -> bool",
      "!doc": "Determines whether or not the provided item is undefined."
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
     "isValue": {
      "!type": "fn(o: ?) -> bool",
      "!doc": "A convenience method for detecting a legitimate non-null value.\nReturns false for null/undefined/NaN, true for other values,\nincluding 0/false/"
     },
     "type": {
      "!type": "fn(o: ?) -> string",
      "!doc": "<p>\nReturns a string representing the type of the item passed in.\n</p>\n\n<p>\nKnown issues:\n</p>\n\n<ul>\n  <li>\n    <code>typeof HTMLElementCollection</code> returns function in Safari, but\n    <code>Y.type()</code> reports object, which could be a good thing --\n    but it actually caused the logic in <code>Y.Lang.isObject</code> to fail.\n  </li>\n</ul>"
     },
     "sub": {
      "!type": "fn(s: string, o: +_yui.yui.Object) -> string",
      "!doc": "Lightweight version of <code>Y.substitute</code>. Uses the same template\nstructure as <code>Y.substitute</code>, but doesnt support recursion,\nauto-object coersion, or formats."
     },
     "now": {
      "!type": "fn() -> number",
      "!doc": "Returns the current time in milliseconds."
     }
    },
    "Object": {
     "!type": "fn()",
     "()": {
      "!type": "fn(obj: +_yui.yui.Object) -> +yui.Object",
      "!doc": "Returns a new object that uses _obj_ as its prototype. This method wraps the\nnative ES5 `Object.create()` method if available, but doesnt currently\npass through `Object.create()`s second argument (properties) in order to\nensure compatibility with older browsers."
     },
     "owns": {
      "!type": "fn(obj: +_yui.yui.Object, key: string) -> bool",
      "!doc": "Returns `true` if _key_ exists on _obj_, `false` if _key_ doesnt exist or\nexists only on _obj_s prototype. This is essentially a safer version of\n`obj.hasOwnProperty()`."
     },
     "hasKey": {
      "!type": "fn(obj: +_yui.yui.Object, key: string) -> bool",
      "!doc": "Alias for `owns()`."
     },
     "keys": {
      "!type": "fn(obj: +_yui.yui.Object) -> [string]",
      "!doc": "Returns an array containing the objects enumerable keys. Does not include\nprototype keys or non-enumerable keys.\n\nNote that keys are returned in enumeration order (that is, in the same order\nthat they would be enumerated by a `for-in` loop), which may not be the same\nas the order in which they were defined.\n\nThis method is an alias for the native ES5 `Object.keys()` method if\navailable."
     },
     "values": {
      "!type": "fn(obj: +_yui.yui.Object) -> +yui.Array",
      "!doc": "Returns an array containing the values of the objects enumerable keys.\n\nNote that values are returned in enumeration order (that is, in the same\norder that they would be enumerated by a `for-in` loop), which may not be the\nsame as the order in which they were defined."
     },
     "size": {
      "!type": "fn(obj: +_yui.yui.Object) -> number",
      "!doc": "Returns the number of enumerable keys owned by an object."
     },
     "hasValue": {
      "!type": "fn(obj: +_yui.yui.Object, value: ?) -> bool",
      "!doc": "Returns `true` if the object owns an enumerable property with the specified\nvalue."
     },
     "each": {
      "!type": "fn(obj: +_yui.yui.Object, fn: fn(value: +Mixed, key: string, obj: +_yui.yui.Object), thisObj?: +_yui.yui.Object, proto?: bool) -> !this",
      "!doc": "Executes a function on each enumerable property in _obj_. The function\nreceives the value, the key, and the object itself as parameters (in that\norder).\n\nBy default, only properties owned by _obj_ are enumerated. To include\nprototype properties, set the _proto_ parameter to `true`."
     },
     "some": {
      "!type": "fn(obj: +_yui.yui.Object, fn: fn(value: +Mixed, key: string, obj: +_yui.yui.Object), thisObj?: +_yui.yui.Object, proto?: bool) -> bool",
      "!doc": "Executes a function on each enumerable property in _obj_, but halts if the\nfunction returns a truthy value. The function receives the value, the key,\nand the object itself as paramters (in that order).\n\nBy default, only properties owned by _obj_ are enumerated. To include\nprototype properties, set the _proto_ parameter to `true`."
     },
     "getValue": {
      "!type": "fn(o: ?, path: +_yui.yui.Array) -> ?",
      "!doc": "Retrieves the sub value at the provided path,\nfrom the value object provided."
     },
     "setValue": {
      "!type": "fn(o: ?, path: +_yui.yui.Array, val: ?) -> +yui.Object",
      "!doc": "Sets the sub-attribute value at the provided path on the\nvalue object.  Returns the modified value object, or\nundefined if the path is invalid."
     },
     "isEmpty": {
      "!type": "fn(obj: +_yui.yui.Object) -> bool",
      "!doc": "Returns `true` if the object has no enumerable properties of its own."
     }
    },
    "UA": {
     "!type": "fn()",
     "Env.parseUA": {
      "!type": "fn(subUA: string) -> +yui.Object",
      "!doc": "Static method for parsing the UA string. Defaults to assigning its value to Y.UA"
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
      "caja": {
       "!type": "number",
       "!doc": "Google Caja version number or 0."
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
      "!type": "number",
      "!doc": "General truthy check for iPad, iPhone or iPod"
     },
     "android": {
      "!type": "number",
      "!doc": "Detects Googles Android OS version"
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
     "parseUA": {
      "!type": "fn(subUA?: string) -> +yui.Object",
      "!doc": "Static method on `YUI.Env` for parsing a UA string.  Called at instantiation\nto populate `Y.UA`."
     },
     "userAgent": {
      "!type": "string",
      "!doc": "The User Agent string that was parsed"
     }
    },
    "Get": {
     "!type": "fn()",
     "abort": {
      "!type": "fn(o: string)",
      "!doc": "Abort a transaction"
     },
     "script": {
      "!type": "fn(url: string, opts: +_yui.yui.Object) -> +TId",
      "!doc": "Fetches and inserts one or more script nodes into the head\nof the current document or the document in a specified window."
     },
     "css": {
      "!type": "fn(url: string, opts: +_yui.yui.Object) -> +TId",
      "!doc": "Fetches and inserts one or more css link nodes into the\nhead of the current document or the document in a specified\nwindow."
     }
    },
    "rls": {
     "!type": "fn()",
     "prototype": {
      "rls_oncomplete": {
       "!type": "fn(cb: +Callback)"
      },
      "rls_done": {
       "!type": "fn(data: +_yui.yui.Array)",
       "!doc": "Calls the callback registered with Y.rls_oncomplete when the RLS request (and its dependency requests) is done."
      }
     }
    }
   },
   "collection": {
    "ArrayList": {
     "!type": "fn(items: +_yui.yui.Array) -> +_yui.collection.ArrayList",
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
       "!doc": "<p>Execute a function on each item of the list, optionally providing a\ncustom execution context.  Default context is the item.</p>\n\n<p>The callback signature is <code>callback( item, index )</code>.</p>\n\n<p>Unlike <code>each</code>, if the callback returns true, the\niteratation will stop.</p>"
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
      "!type": "fn(dest: +_yui.yui.Object, name: string)",
      "!doc": "<p>Adds a pass through method to dest (typically the prototype of a list\nclass) that calls the named method on each item in the list with\nwhatever parameters are passed in.  Allows for API indirection via list\ninstances.</p>\n\n<p>Accepts a single string name or an array of string names.</p>\n\n<pre><code>list.each( function ( item ) {\n    item.methodName( 1, 2, 3 );\n} );\n// becomes\nlist.methodName( 1, 2, 3 );</code></pre>\n\n<p>Additionally, the pass through methods use the item retrieved by the\n<code>_item</code> method in case there is any special behavior that is\nappropriate for API mirroring.</p>\n\n<p>If the iterated method returns a value, the return value from the\nadded method will be an array of values with each value being at the\ncorresponding index for that item.  If the iterated method does not\nreturn a value, the added method will be chainable."
     }
    }
   },
   "console": {
    "Console": {
     "!type": "fn()",
     "prototype": {
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
       "!type": "+node.EventTarget",
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
       "!type": "+Date",
       "!doc": "The baseline time for this Console instance, used to measure elapsed\ntime from the moment the console module is <code>use</code>d to the\nmoment each new entry is logged (not rendered).\n\nThis value is reset by the instance method myConsole.reset()."
      },
      "lastTime": {
       "!type": "+Date",
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
      "!doc": "Default markup template used to create the DOM structure for Console\nentries. The markup contains {placeholder}s for content and classes\nthat are replaced via Y.substitute.  The default template contains\nthe {placeholder}s identified in Console.ENTRY_CLASSES as well as the\nfollowing placeholders that will be populated by the log entry data:\n\n<ul>\n  <li>cat_class</li>\n  <li>src_class</li>\n  <li>totalTime</li>\n  <li>elapsedTime</li>\n  <li>localTime</li>\n  <li>sourceAndDetail</li>\n  <li>message</li>\n</ul>"
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute configuration of\nthe Widget."
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
   "cookie": {
    "Cookie": {
     "!type": "fn()",
     "exists": {
      "!type": "fn(name: string) -> bool",
      "!doc": "Determines if the cookie with the given name exists. This is useful for\nBoolean cookies (those that do not follow the name=value convention)."
     },
     "get": {
      "!type": "fn(name: string, options: fn()) -> +Variant",
      "!doc": "Returns the cookie value for the given name."
     },
     "getSub": {
      "!type": "fn(name: string, subName: string, converter: fn()) -> +Variant",
      "!doc": "Returns the value of a subcookie."
     },
     "getSubs": {
      "!type": "fn(name: string) -> +yui.Object",
      "!doc": "Returns an object containing name-value pairs stored in the cookie with the given name."
     },
     "remove": {
      "!type": "fn(name: string, options: +_yui.yui.Object) -> string",
      "!doc": "Removes a cookie from the machine by setting its expiration date to\nsometime in the past."
     },
     "removeSub": {
      "!type": "fn(name: string, subName: string, options: +_yui.yui.Object) -> string",
      "!doc": "Removes a sub cookie with a given name."
     },
     "set": {
      "!type": "fn(name: string, value: +Variant, options: +_yui.yui.Object) -> string",
      "!doc": "Sets a cookie with a given name and value."
     },
     "setSub": {
      "!type": "fn(name: string, subName: string, value: +Variant, options: +_yui.yui.Object) -> string",
      "!doc": "Sets a sub cookie with a given name to a particular value."
     },
     "setSubs": {
      "!type": "fn(name: string, value: +_yui.yui.Object, options: +_yui.yui.Object) -> string",
      "!doc": "Sets a cookie with a given name to contain a hash of name-value pairs."
     }
    }
   },
   "dataschema": {
    "DataSchema": {
     "Array": {
      "!type": "fn()",
      "prototype": {
       "!proto": "_yui.dataschema.DataSchema.Base.prototype"
      },
      "apply": {
       "!type": "fn(schema?: +_yui.yui.Object, data: +_yui.yui.Array) -> +yui.Object",
       "!doc": "Applies a schema to an array of data, returning a normalized object\nwith results in the `results` property. The `meta` property of the\nresponse object is present for consistency, but is assigned an empty\nobject.  If the input data is absent or not an array, an `error`\nproperty will be added.\n\nThe input array is expected to contain objects, arrays, or strings.\n\nIf _schema_ is not specified or _schema.resultFields_ is not an array,\n`response.results` will be assigned the input array unchanged.\n\nWhen a _schema_ is specified, the following will occur:\n\nIf the input array contains strings, they will be copied as-is into the\n`response.results` array.\n\nIf the input array contains arrays, `response.results` will contain an\narray of objects with key:value pairs assuming the fields in\n_schema.resultFields_ are ordered in accordance with the data array\nvalues.\n\nIf the input array contains objects, the identified\n_schema.resultFields_ will be used to extract a value from those\nobjects for the output result.\n\n_schema.resultFields_ field identifiers are objects with the following properties:\n\n  * `key`   : <strong>(required)</strong> The locator name (String)\n  * `parser`: A function or the name of a function on `Y.Parsers` used\n        to convert the input value into a normalized type.  Parser\n        functions are passed the value as input and are expected to\n        return a value.\n\nIf no value parsing is needed, you can use strings as identifiers\ninstead of objects (see example below)."
      }
     },
     "Base": {
      "!type": "fn()",
      "apply": {
       "!type": "fn(schema: +_yui.yui.Object, data: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Overridable method returns data as-is."
      },
      "prototype": {
       "parse": {
        "!type": "fn(value: +_yui.yui.Object, field: +_yui.yui.Object) -> +yui.Object",
        "!doc": "Applies field parser, if defined"
       }
      }
     },
     "JSON": {
      "!type": "fn()",
      "prototype": {
       "!proto": "_yui.dataschema.DataSchema.Base.prototype"
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
       "!type": "fn(schema?: +_yui.yui.Object, data: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Applies a schema to an array of data located in a JSON structure, returning\na normalized object with results in the `results` property. Additional\ninformation can be parsed out of the JSON for inclusion in the `meta`\nproperty of the response object.  If an error is encountered during\nprocessing, an `error` property will be added.\n\nThe input _data_ is expected to be an object or array.  If it is a string,\nit will be passed through `Y.JSON.parse()`.\n\nIf _data_ contains an array of data records to normalize, specify the\n_schema.resultListLocator_ as a dot separated path string just as you would\nreference it in JavaScript.  So if your _data_ object has a record array at\n_data.response.results_, use _schema.resultListLocator_ =\n\"response.results\". Bracket notation can also be used for array indices or\nobject properties (e.g. \"response[results]\");  This is called a \"path\nlocator\"\n\nField data in the result list is extracted with field identifiers in\n_schema.resultFields_.  Field identifiers are objects with the following\nproperties:\n\n  * `key`   : <strong>(required)</strong> The path locator (String)\n  * `parser`: A function or the name of a function on `Y.Parsers` used\n        to convert the input value into a normalized type.  Parser\n        functions are passed the value as input and are expected to\n        return a value.\n\nIf no value parsing is needed, you can use path locators (strings) \ninstead of field identifiers (objects) -- see example below.\n\nIf no processing of the result list array is needed, _schema.resultFields_\ncan be omitted; the `response.results` will point directly to the array.\n\nIf the result list contains arrays, `response.results` will contain an\narray of objects with key:value pairs assuming the fields in\n_schema.resultFields_ are ordered in accordance with the data array\nvalues.\n\nIf the result list contains objects, the identified _schema.resultFields_\nwill be used to extract a value from those objects for the output result.\n\nTo extract additional information from the JSON, include an array of\npath locators in _schema.metaFields_.  The collected values will be\nstored in `response.meta`."
      }
     },
     "Text": {
      "!type": "fn()",
      "prototype": {
       "!proto": "_yui.dataschema.DataSchema.Base.prototype"
      },
      "apply": {
       "!type": "fn(schema: +_yui.yui.Object, data: string) -> +yui.Object",
       "!doc": "Applies a schema to a string of delimited data, returning a normalized\nobject with results in the `results` property. The `meta` property of\nthe response object is present for consistency, but is assigned an\nempty object.  If the input data is absent or not a string, an `error`\nproperty will be added.\n\nUse _schema.resultDelimiter_ and _schema.fieldDelimiter_ to instruct\n`apply` how to split up the string into an array of data arrays for\nprocessing.\n\nUse _schema.resultFields_ to specify the keys in the generated result\nobjects in `response.results`. The key:value pairs will be assigned\nin the order of the _schema.resultFields_ array, assuming the values\nin the data records are defined in the same order.\n\n_schema.resultFields_ field identifiers are objects with the following\nproperties:\n\n  * `key`   : <strong>(required)</strong> The property name you want\n        the data value assigned to in the result object (String)\n  * `parser`: A function or the name of a function on `Y.Parsers` used\n        to convert the input value into a normalized type.  Parser\n        functions are passed the value as input and are expected to\n        return a value.\n\nIf no value parsing is needed, you can use just the desired property\nname string as the field identifier instead of an object (see example\nbelow)."
      }
     },
     "XML": {
      "!type": "fn()",
      "prototype": {
       "!proto": "_yui.dataschema.DataSchema.Base.prototype"
      },
      "apply": {
       "!type": "fn(schema: +_yui.yui.Object, data: +XMLDoc) -> +yui.Object",
       "!doc": "Applies a schema to an XML data tree, returning a normalized object with\nresults in the `results` property. Additional information can be parsed out\nof the XML for inclusion in the `meta` property of the response object.  If\nan error is encountered during processing, an `error` property will be\nadded.\n\nField data in the nodes captured by the XPath in _schema.resultListLocator_\nis extracted with the field identifiers described in _schema.resultFields_.\nField identifiers are objects with the following properties:\n\n  * `key`    : <strong>(required)</strong> The desired property name to use\n        store the retrieved value in the result object.  If `locator` is\n        not specified, `key` is also used as the XPath locator (String)\n  * `locator`: The XPath locator to the node or attribute within each\n        result node found by _schema.resultListLocator_ containing the\n        desired field data (String)\n  * `parser` : A function or the name of a function on `Y.Parsers` used\n        to convert the input value into a normalized type.  Parser\n        functions are passed the value as input and are expected to\n        return a value.\n  * `schema` : Used to retrieve nested field data into an array for\n        assignment as the result field value.  This object follows the same\n        conventions as _schema_.\n\nIf no value parsing or nested parsing is needed, you can use XPath locators\n(strings) instead of field identifiers (objects) -- see example below.\n\n`response.results` will contain an array of objects with key:value pairs.\nThe keys are the field identifier `key`s, and the values are the data\nvalues extracted from the nodes or attributes found by the field `locator`\n(or `key` fallback).\n\nTo extract additional information from the XML, include an array of\nXPath locators in _schema.metaFields_.  The collected values will be\nstored in `response.meta` with the XPath locator as keys."
      }
     }
    }
   },
   "datasource": {
    "DataSourceArraySchema": {
     "!type": "fn()",
     "prototype": {
      "!proto": "_yui.plugin.Plugin.Base.prototype"
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
      "!proto": "_yui.cache.Cache.prototype"
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
      "!type": "fn() -> +_yui.datasource.DataSource.Function",
      "prototype": {
       "!proto": "_yui.datasource.DataSource.Local.prototype",
       "source": {
        "!type": "+MIXED",
        "!doc": "Pointer to live data."
       }
      },
      "NAME": {
       "!type": "string",
       "!doc": "Class name."
      }
     },
     "Get": {
      "!type": "fn() -> +_yui.datasource.DataSource.Get",
      "prototype": {
       "!proto": "_yui.datasource.DataSource.Local.prototype",
       "get": {
        "!type": "+Y.Get",
        "!doc": "Pointer to Get Utility."
       },
       "asyncMode": {
        "!type": "string",
        "!doc": "Defines request/response management in the following manner:\n<dl>\n    <!--<dt>queueRequests</dt>\n    <dd>If a request is already in progress, wait until response is\n    returned before sending the next request.</dd>\n    <dt>cancelStaleRequests</dt>\n   <dd>If a request is already in progress, cancel it before\n    sending the next request.</dd>-->\n    <dt>ignoreStaleResponses</dt>\n    <dd>Send all requests, but handle only the response for the most\n    recently sent request.</dd>\n    <dt>allowAll</dt>\n    <dd>Send all requests and handle all responses.</dd>\n</dl>"
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
      "!type": "fn() -> +_yui.datasource.DataSource.IO",
      "prototype": {
       "!proto": "_yui.datasource.DataSource.Local.prototype",
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
      "!type": "fn() -> +_yui.datasource.DataSource.Local",
      "prototype": {
       "!proto": "_yui.base.Base.prototype",
       "source": {
        "!type": "+MIXED",
        "!doc": "Pointer to live data."
       },
       "sendRequest": {
        "!type": "fn(request: +_yui.yui.Object) -> number",
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
       "!type": "fn(e: +_yui.event_custom.EventFacade, caller: +DataSource)",
       "!doc": "Returns data to callback."
      }
     }
    },
    "DataSourceJSONSchema": {
     "!type": "fn()",
     "prototype": {
      "!proto": "_yui.plugin.Plugin.Base.prototype"
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
      "!proto": "_yui.datasource.DataSource.Local.prototype",
      "setInterval": {
       "!type": "fn(msec: number, request: +_yui.yui.Object) -> number",
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
      "!proto": "_yui.plugin.Plugin.Base.prototype"
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
      "!proto": "_yui.plugin.Plugin.Base.prototype"
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
    "Column": {
     "!type": "fn() -> +_yui.datasource.Column",
     "prototype": {
      "!proto": "_yui.widget.Widget.prototype",
      "undefined": {
       "!type": "fn()"
      },
      "id": {
       "!type": "string",
       "!doc": "Unique internal identifier, used to stamp ID on TH element."
      },
      "key": {
       "!type": "string",
       "!doc": "User-supplied identifier. Defaults to id."
      },
      "field": {
       "!type": "string",
       "!doc": "Points to underlying data field (for sorting or formatting, for\nexample). Useful when column doesnt hold any data itself, but is just\na visual representation of data from another column or record field.\nDefaults to key."
      },
      "label": {
       "!type": "string",
       "!doc": "Display label for column header. Defaults to key."
      },
      "children": {
       "!type": "string",
       "!doc": "Array of child column definitions (for nested headers)."
      },
      "abbr": {
       "!type": "string",
       "!doc": "TH abbr attribute."
      },
      "formatter": {
       "!type": "string",
       "!doc": "Formating template string or function for cells in this column.\n\nFunction formatters receive a single object (described below) and are\nexpected to output the `innerHTML` of the cell.\n\nString templates can include markup and {placeholder} tokens to be\nfilled in from the object passed to function formatters."
      },
      "emptyCellValue": {
       "!type": "string",
       "!doc": "The default markup to display in cells that have no corresponding record\ndata or content from formatters."
      },
      "keyIndex": {
       "!type": "number",
       "!doc": "Reference to Columns current position index within its Columnsets keys\narray, if applicable. This property only applies to non-nested and bottom-\nlevel child Columns. Value is set by Columnset code."
      },
      "headers": {
       "!type": "[string]",
       "!doc": "Array of TH IDs associated with this column, for TD \"headers\" attribute.\nValue is set by Columnset code"
      },
      "colSpan": {
       "!type": "number",
       "!doc": "Number of cells the header spans. Value is set by Columnset code."
      },
      "rowSpan": {
       "!type": "number",
       "!doc": "Number of rows the header spans. Value is set by Columnset code."
      },
      "parent": {
       "!type": "+datasource.Column",
       "!doc": "Columns parent Column instance, if applicable. Value is set by Columnset\ncode."
      },
      "thNode": {
       "!type": "+node.Node",
       "!doc": "The Node reference to the associated TH element."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Class name."
     }
    },
    "Columnset": {
     "!type": "fn() -> +_yui.datasource.Columnset",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "definitions": {
       "!type": "+yui.Array",
       "!doc": "Array of column definitions that will populate this Columnset."
      },
      "tree": {
       "!type": "[+datasource.Column]",
       "!doc": "Top-down tree representation of Column hierarchy. Used to create DOM\nelements."
      },
      "idHash": {
       "!type": "+yui.Object",
       "!doc": "Hash of all Columns by ID."
      },
      "keyHash": {
       "!type": "+yui.Object",
       "!doc": "Hash of all Columns by key."
      },
      "keys": {
       "!type": "[+datasource.Column]",
       "!doc": "Array of only Columns that are meant to be displayed in DOM."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Class name."
     }
    }
   },
   "datatable": {
    "DataTable": {
     "Base": {
      "!type": "fn() -> +_yui.datatable.DataTable.Base",
      "prototype": {
       "!proto": "_yui.widget.Widget.prototype",
       "columnset": {
        "!type": "+yui.Array",
        "!doc": "Pointer to Columnset instance."
       },
       "recordset": {
        "!type": "+yui.Array",
        "!doc": "Pointer to Recordset instance."
       },
       "summary": {
        "!type": "string",
        "!doc": "Summary."
       },
       "caption": {
        "!type": "string",
        "!doc": "Caption"
       },
       "thValueTemplate": {
        "!type": "string",
        "!doc": "Tokenized markup template for TH value."
       },
       "tdValueTemplate": {
        "!type": "string",
        "!doc": "Tokenized markup template for TD value."
       },
       "trTemplate": {
        "!type": "string",
        "!doc": "Tokenized markup template for TR node creation."
       },
       "thTemplate": {
        "!type": "string",
        "!doc": "Tokenized markup template for TH node creation."
       },
       "tdTemplate": {
        "!type": "string",
        "!doc": "Tokenized markup template for TD node creation."
       },
       "createCell": {
        "!type": "fn(data: +_yui.yui.Object) -> +node.Node",
        "!doc": "Creates a TD Node from the tdTemplate property using the input object as\ntemplate {placeholder} values.  The created Node is also assigned to the\n`td` property on the input object.\n\nIf the input object already has a `td` property, it is returned an no new\nNode is created."
       },
       "formatDataCell": {
        "!type": "fn(param: +_yui.yui.Object)",
        "!doc": "Returns markup to insert into data cell element."
       }
      },
      "NAME": {
       "!type": "string",
       "!doc": "Class name."
      }
     }
    },
    "DataTableDataSource": {
     "!type": "fn()",
     "prototype": {
      "!proto": "_yui.plugin.Plugin.Base.prototype",
      "datasource": {
       "!type": "+DataSource",
       "!doc": "Pointer to DataSource instance."
      },
      "initialRequest": {
       "!type": "+yui.Object",
       "!doc": "Request sent to DataSource immediately upon initialization."
      },
      "load": {
       "!type": "fn(config: +_yui.yui.Object)",
       "!doc": "Load data by calling DataSources sendRequest() method under the hood."
      },
      "onDataReturnInitializeTable": {
       "!type": "fn(e: +Event.Facade)",
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
    },
    "DataTableScroll": {
     "!type": "fn()",
     "prototype": {
      "!proto": "_yui.plugin.Plugin.Base.prototype",
      "width": {
       "!type": "string",
       "!doc": "The width for the table. Set to a string (ex: \"200px\", \"20em\") if you want the table to scroll in the x direction."
      },
      "height": {
       "!type": "string",
       "!doc": "The height for the table. Set to a string (ex: \"200px\", \"20em\") if you want the table to scroll in the y-direction."
      },
      "COLOR_COLUMNFILLER": {
       "!type": "string",
       "!doc": "The hexadecimal colour value to set on the top-right of the table if a scrollbar exists."
      },
      "renderUI": {
       "!type": "fn()",
       "!doc": "Primary rendering method that takes the datatable rendered in\n the host, and splits it up into two separate &lt;divs&gt; each containing two \n separate tables (one containing the head and one containing the body). \n This method fires after renderUI is called on datatable-base."
      },
      "bindUI": {
       "!type": "fn()",
       "!doc": "Binds event subscriptions to keep the state and UI in sync"
      },
      "syncUI": {
       "!type": "fn()",
       "!doc": "Post rendering method that is responsible for creating a column\n filler, and performing width and scroll synchronization between the &lt;th&gt; \n elements and the &lt;td&gt; elements.\n This method fires after syncUI is called on datatable-base"
      }
     }
    },
    "DataTableSort": {
     "!type": "fn()",
     "prototype": {
      "!proto": "_yui.plugin.Plugin.Base.prototype",
      "trigger": {
       "!type": "+yui.Object",
       "!doc": "Defines the trigger that causes a column to be sorted:\n{event, selector}, where \"event\" is an event type and \"selector\" is\nis a node query selector."
      },
      "lastSortedBy": {
       "!type": "+yui.Object",
       "!doc": "Describes last known sort state: {key,dir}, where\n\"key\" is column key and \"dir\" is either \"asc\" or \"desc\"."
      },
      "template": {
       "!type": "string",
       "!doc": "Tokenized markup template for TH sort element."
      },
      "strings": {
       "!type": "+yui.Object",
       "!doc": "Strings used in the UI elements.\n\nThe strings used are defaulted from the datatable-sort language pack\nfor the language identified in the YUI \"lang\" configuration (which\ndefaults to \"en\").\n\nConfigurable strings are \"sortBy\" and \"reverseSortBy\", which are\nassigned to the sort links title attribute."
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
   },
   "datatype": {
    "DataType": {
     "Date": {
      "!type": "fn()",
      "prototype": {
       "format": {
        "!type": "fn(oDate: +Date, oConfig: +_yui.yui.Object) -> +HTML",
        "!doc": "Takes a native JavaScript Date and formats it as a string for display to user."
       },
       "isValidDate": {
        "!type": "fn(oDate: +Date) -> bool",
        "!doc": "Checks whether a native JavaScript Date contains a valid value."
       },
       "areEqual": {
        "!type": "fn(aDate: +Date, bDate: +Date) -> bool",
        "!doc": "Checks whether two dates correspond to the same date and time."
       },
       "isGreater": {
        "!type": "fn(aDate: +Date, bDate: +Date) -> bool",
        "!doc": "Checks whether the first date comes later than the second."
       },
       "isGreaterOrEqual": {
        "!type": "fn(aDate: +Date, bDate: +Date) -> bool",
        "!doc": "Checks whether the first date comes later than or is the same as\nthe second."
       },
       "addMonths": {
        "!type": "fn(oDate: +Date, numMonths: number) -> +Date",
        "!doc": "Adds a specified number of months to the given date."
       },
       "addYears": {
        "!type": "fn(oDate: +Date, numYears: number) -> +Date",
        "!doc": "Adds a specified number of years to the given date."
       },
       "listOfDatesInMonth": {
        "!type": "fn(oDate: +Date) -> +yui.Array",
        "!doc": "Lists all dates in a given month."
       },
       "daysInMonth": {
        "!type": "fn(oDate: +Date) -> number",
        "!doc": "Takes a native JavaScript Date and returns the number of days\nin the month that the given date belongs to."
       },
       "parse": {
        "!type": "fn(data: string) -> +Date",
        "!doc": "Converts data to type Date."
       }
      }
     },
     "Number": {
      "!type": "fn()",
      "prototype": {
       "format": {
        "!type": "fn(data: number, config: +_yui.yui.Object) -> +HTML",
        "!doc": "Takes a Number and formats to string for display to user."
       },
       "parse": {
        "!type": "fn(data: string) -> number",
        "!doc": "Converts data to type Number."
       }
      }
     },
     "XML": {
      "!type": "fn()",
      "prototype": {
       "format": {
        "!type": "fn(data: +XMLDoc) -> string",
        "!doc": "Converts data to type XMLDocument."
       },
       "parse": {
        "!type": "fn(data: string) -> +XMLDoc",
        "!doc": "Converts data to type XMLDocument."
       }
      }
     }
    }
   },
   "dd": {
    "Plugin": {
     "DDConstrained": {
      "!type": "fn() -> +_yui.dd.Plugin.DDConstrained",
      "prototype": {
       "!proto": "_yui.base.Base.prototype",
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
        "!doc": "CSS style string for the gutter of a region (supports negative values): 5 0 (sets top and bottom to 5px, left and right to 0px), 1 2 3 4 (top 1px, right 2px, bottom 3px, left 4px)"
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
        "!type": "fn(xy: +_yui.yui.Array) -> bool",
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
      "!type": "fn() -> +_yui.dd.Plugin.Drop",
      "prototype": {
       "!proto": "_yui.dd.DD.Drop.prototype",
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
      "!type": "fn() -> +_yui.dd.Plugin.Drag",
      "prototype": {
       "!proto": "_yui.dd.DD.Drag.prototype",
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
      "!type": "fn() -> +_yui.dd.Plugin.DDProxy",
      "prototype": {
       "!proto": "_yui.base.Base.prototype",
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
      "!type": "fn() -> +_yui.dd.Plugin.DDWindowScroll",
      "prototype": {
       "!proto": "Scroll.prototype",
       "windowScroll": {
        "!type": "bool",
        "!doc": "Turn on window scroll support, default: true"
       }
      }
     },
     "DDNodeScroll": {
      "!type": "fn() -> +_yui.dd.Plugin.DDNodeScroll",
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
      "!type": "fn() -> +_yui.dd.DD.DDM",
      "prototype": {
       "!proto": "_yui.base.Base.prototype",
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
        "!type": "fn(n1: +_yui.node.Node, n2: +_yui.node.Node) -> +node.Node",
        "!doc": "Swap the position of 2 nodes based on their CSS positioning."
       },
       "getNode": {
        "!type": "fn(n: +_yui.node.Node) -> +node.Node",
        "!doc": "Return a node instance from the given node, selector string or Y.Base extended object."
       },
       "swapNode": {
        "!type": "fn(n1: +_yui.node.Node, n2: +_yui.node.Node) -> +node.Node",
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
        "!type": "fn(drop: +_yui.yui.Object) -> bool",
        "!doc": "Check to see if the Drag element is over the target, method varies on current mode"
       },
       "clearCache": {
        "!type": "fn()",
        "!doc": "Clears the cache data used for this interaction."
       },
       "getBestMatch": {
        "!type": "fn(drops: +_yui.yui.Array, all: bool) -> +Object or Array",
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
      "!type": "fn() -> +_yui.dd.DD.Delegate",
      "prototype": {
       "!proto": "_yui.base.Base.prototype",
       "dd": {
        "!type": "?",
        "!doc": "A reference to the temporary dd instance used under the hood."
       },
       "syncTargets": {
        "!type": "fn() -> !this",
        "!doc": "Applies the Y.Plugin.Drop to all nodes matching the cont + nodes selector query."
       },
       "createDrop": {
        "!type": "fn(node: +_yui.node.Node, groups: +_yui.yui.Array) -> ?",
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
      "!type": "fn() -> +_yui.dd.DD.Drag",
      "prototype": {
       "!proto": "_yui.base.Base.prototype",
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
        "!doc": "This config option is set by Drag to inform you of which handle fired the drag event (in the case that there are several handles): default false."
       },
       "primaryButtonOnly": {
        "!type": "bool",
        "!doc": "By default a drag operation will only begin if the mousedown occurred with the primary mouse button. Setting this to false will allow for all mousedown events to trigger a drag."
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
        "!type": "fn(ev: +_yui.event_custom.EventFacade) -> bool",
        "!doc": "Method first checks to see if we have handles, if so it validates the click against the handle. Then if it finds a valid handle, it checks it against the invalid handles list. Returns true if a good handle was used, false otherwise."
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
      "!type": "fn() -> +_yui.dd.DD.Drop",
      "prototype": {
       "!proto": "_yui.base.Base.prototype",
       "node": {
        "!type": "+node.Node",
        "!doc": "Y.Node instanace to use as the element to make a Drop Target"
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
        "!doc": "Controls the default bubble parent for this Drop instance. Default: Y.DD.DDM. Set to false to disable bubbling. Use bubbleTargets in config."
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
        "!type": "fn(groups: +_yui.yui.Array) -> ?",
        "!doc": "Check if this target is in one of the supplied groups."
       },
       "sizeShim": {
        "!type": "fn()",
        "!doc": "Positions and sizes the shim with the raw data from the node, this can be used to programatically adjust the Targets shim for Animation.."
       }
      }
     },
     "Scroll": {
      "!type": "fn() -> +_yui.dd.DD.Scroll",
      "prototype": {
       "!proto": "_yui.base.Base.prototype",
       "parentScroll": {
        "!type": "+node.Node",
        "!doc": "Internal config option to hold the node that we are scrolling. Should not be set by the developer."
       },
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
       },
       "toString": {
        "!type": "fn() -> ?",
        "!doc": "General toString method for logging"
       }
      }
     }
    }
   },
   "dial": {
    "Dial": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.dial.Dial",
     "prototype": {
      "!proto": "_yui.widget.Widget.prototype",
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
       "!doc": "number of value increments in one 360 degree revolution \nof the handle around the dial"
      },
      "decimalPlaces": {
       "!type": "number",
       "!doc": "number of decimal places of accuracy in the value"
      },
      "strings": {
       "!type": "+yui.Object",
       "!doc": "visible strings for the dial UI. This attribute is \ndefined by the base Widget class but has an empty value. The\nDial is simply providing a default value for the attribute.\nGets localized strings in the current language"
      },
      "handleDistance": {
       "!type": "number",
       "!doc": "distance from the center of the dial to the \ncenter of the marker and handle, when at rest. \nThe value is a percent of the radius of the dial."
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
      "getAttibute": {
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
       "!type": "fn(id: string, doc: +_yui.yui.Object) -> +HTMLElement",
       "!doc": "Returns the HTMLElement with the given ID (Wrapper for document.getElementById)."
      },
      "elementByAxis": {
       "!type": "fn(element: +HTMLElement, axis: string, fn: fn(), all: bool) -> +HTMLElement",
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
       "!type": "fn(element: +HTMLElement, element2: +HTMLElement, altRegion: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Find the intersect information for the passes nodes."
      },
      "inRegion": {
       "!type": "fn(node2: +_yui.yui.Object, altRegion: +_yui.yui.Object) -> bool",
       "!doc": "Check if any part of this node is in the passed region"
      },
      "inViewportRegion": {
       "!type": "fn(element: +HTMLElement, all: bool, altRegion: +_yui.yui.Object) -> bool",
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
       "!doc": "Gets the current position of an element based on page coordinates. \nElement must be part of the DOM tree to have page coordinates\n(display:none or elements not appended return false)."
      },
      "getX": {
       "!type": "fn(element: ?) -> number",
       "!doc": "Gets the current X position of an element based on page coordinates. \nElement must be part of the DOM tree to have page coordinates\n(display:none or elements not appended return false)."
      },
      "getY": {
       "!type": "fn(element: ?) -> number",
       "!doc": "Gets the current Y position of an element based on page coordinates. \nElement must be part of the DOM tree to have page coordinates\n(display:none or elements not appended return false)."
      },
      "setXY": {
       "!type": "fn(element: ?, xy: +_yui.yui.Array, noRetry: bool)",
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
       "!type": "fn(node: +_yui.node.Node, otherNode: +_yui.node.Node) -> +node.Node",
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
       "!type": "fn(An: +HTMLElement, att: string, val: string)",
       "!doc": "Sets a style property for a given element."
      },
      "getStyle": {
       "!type": "fn(An: +HTMLElement, att: string)",
       "!doc": "Returns the current style value for the given property."
      },
      "setStyles": {
       "!type": "fn(node: +HTMLElement, hash: +_yui.yui.Object)",
       "!doc": "Sets multiple style properties."
      },
      "getComputedStyle": {
       "!type": "fn(An: +HTMLElement, att: string) -> string",
       "!doc": "Returns the computed style for the given node."
      }
     }
    },
    "NodeList": {
     "!type": "fn() -> +_yui.dom.NodeList",
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
       "!type": "fn()"
      },
      "appendChild": {
       "!type": "fn()",
       "!doc": "Called on each Node instance"
      },
      "insertBefore": {
       "!type": "fn()"
      },
      "prepend": {
       "!type": "fn()"
      },
      "setContent": {
       "!type": "fn()"
      },
      "getContent": {
       "!type": "fn()"
      },
      "on": {
       "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object, context: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Applies an event listener to each Node bound to the NodeList."
      },
      "once": {
       "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Applies an one-time event listener to each Node bound to the NodeList."
      },
      "after": {
       "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Applies an event listener to each Node bound to the NodeList.\nThe handler is called only after all on() handlers are called\nand the event is not prevented."
      },
      "onceAfter": {
       "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object) -> +yui.Object",
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
      "getStyle": {
       "!type": "fn(attr: string) -> +yui.Array",
       "!doc": "Returns an array of values for each node."
      },
      "getComputedStyle": {
       "!type": "fn(attr: string) -> +yui.Array",
       "!doc": "Returns an array of the computed value for each node."
      },
      "setStyle": {
       "!type": "fn(attr: string, val: string) -> !this",
       "!doc": "Sets a style property on each node."
      },
      "setStyles": {
       "!type": "fn(hash: +_yui.yui.Object) -> !this",
       "!doc": "Sets multiple style properties on each node."
      },
      "show": {
       "!type": "fn(name: string, config: +_yui.yui.Object, callback: fn()) -> !this",
       "!doc": "Makes each node visible.\nIf the \"transition\" module is loaded, show optionally\nanimates the showing of the node using either the default\ntransition effect (fadeIn), or the given named effect."
      },
      "hide": {
       "!type": "fn(name: string, config: +_yui.yui.Object, callback: fn()) -> !this",
       "!doc": "Hides each node.\nIf the \"transition\" module is loaded, hide optionally\nanimates the hiding of the node using either the default\ntransition effect (fadeOut), or the given named effect."
      },
      "concat": {
       "!type": "fn(valueN: +_yui.dom.NodeList) -> +dom.NodeList"
      },
      "pop": {
       "!type": "fn() -> +node.Node"
      },
      "push": {
       "!type": "fn(nodes: +_yui.node.Node)"
      },
      "shift": {
       "!type": "fn() -> +node.Node"
      },
      "slice": {
       "!type": "fn(begin: number, end: number) -> +dom.NodeList"
      },
      "splice": {
       "!type": "fn(index: number, howMany: number) -> +dom.NodeList"
      },
      "unshift": {
       "!type": "fn(nodes: +_yui.node.Node)"
      },
      "item": {
       "!type": "fn(index: number) -> +node.Node",
       "!doc": "Retrieves the Node instance at the given index."
      },
      "each": {
       "!type": "fn(fn: fn(), context: +_yui.yui.Object) -> !this",
       "!doc": "Applies the given function to each Node in the NodeList."
      },
      "some": {
       "!type": "fn(fn: fn(), context: +_yui.yui.Object) -> bool",
       "!doc": "Executes the function once for each node until a true value is returned."
      },
      "toFrag": {
       "!type": "fn() -> ?",
       "!doc": "Creates a documenFragment from the nodes bound to the NodeList instance"
      },
      "indexOf": {
       "!type": "fn(node: +Y.Node) -> number",
       "!doc": "Returns the index of the node in the NodeList instance\nor -1 if the node isnt found."
      },
      "filter": {
       "!type": "fn(selector: string) -> +dom.NodeList",
       "!doc": "Filters the NodeList instance down to only nodes matching the given selector."
      },
      "modulus": {
       "!type": "fn(n: number, r: number) -> +dom.NodeList",
       "!doc": "Creates a new NodeList containing all nodes at every n indices, where\nremainder n % index equals r.\n(zero-based index)."
      },
      "odd": {
       "!type": "fn() -> +dom.NodeList",
       "!doc": "Creates a new NodeList containing all nodes at odd indices\n(zero-based index)."
      },
      "even": {
       "!type": "fn() -> +dom.NodeList",
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
       "!type": "fn()"
      },
      "empty": {
       "!type": "fn()"
      },
      "remove": {
       "!type": "fn()"
      },
      "set": {
       "!type": "fn()"
      },
      "get": {
       "!type": "fn()"
      },
      "text": {
       "!type": "string",
       "!doc": "Allows for getting and setting the text of an element.\nFormatting is preserved and special characters are treated literally."
      },
      "for": {
       "!type": "string",
       "!doc": "Allows for getting and setting the text of an element.\nFormatting is preserved and special characters are treated literally."
      },
      "children": {
       "!type": "+dom.NodeList",
       "!doc": "Returns a NodeList instance of all HTMLElement children."
      },
      "transition": {
       "!type": "fn(config: +_yui.yui.Object, callback: fn()) -> !this",
       "!doc": "Animate one or more css properties to a given value. Requires the \"transition\" module.\n<pre>example usage:\n    Y.all(.demo).transition({\n        duration: 1, // in seconds, default is 0.5\n        easing: ease-out, // default is ease\n        delay: 1, // delay start for 1 second, default is 0\n\n        height: 10px,\n        width: 10px,\n\n        opacity: { // per property\n            value: 0,\n            duration: 2,\n            delay: 2,\n            easing: ease-in\n        }\n    });\n</pre>"
      }
     },
     "getDOMNodes": {
      "!type": "fn(nodelist: +Y.NodeList) -> +yui.Array",
      "!doc": "Retrieves the DOM nodes bound to a NodeList instance"
     },
     "ATTRS": {
      "!type": "+object",
      "!doc": "Static collection of configuration attributes for special handling"
     }
    }
   },
   "editor": {
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
     "EditorBidi": {
      "!type": "fn() -> +_yui.editor.Plugin.EditorBidi",
      "prototype": {
       "!proto": "_yui.base.Base.prototype"
      },
      "EVENTS": {
       "!type": "?",
       "!doc": "The events to check for a direction change on"
      },
      "BLOCKS": {
       "!type": "?",
       "!doc": "More elements may be needed. BODY *must* be in the list to take care of the special case.\n\nblockParent could be changed to use inst.Selection.BLOCKS\ninstead, but that would make Y.Plugin.EditorBidi.blockParent\nunusable in non-RTE contexts (it being usable is a nice\nside-effect)."
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
     "ExecCommand": {
      "!type": "fn() -> +_yui.editor.Plugin.ExecCommand",
      "prototype": {
       "!proto": "_yui.base.Base.prototype",
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
      },
      "COMMANDS": {
       "!type": "?",
       "!doc": "Static object literal of execCommand overrides"
      },
      "COMMANDS.wrap": {
       "!type": "fn(cmd: string, tag: string) -> +dom.NodeList",
       "!doc": "Wraps the content with a new element of type (tag)"
      },
      "COMMANDS.inserthtml": {
       "!type": "fn(cmd: string, html: string) -> +node.Node",
       "!doc": "Inserts the provided HTML at the cursor, should be a single element."
      },
      "COMMANDS.insertandfocus": {
       "!type": "fn(cmd: string, html: string) -> +node.Node",
       "!doc": "Inserts the provided HTML at the cursor, and focuses the cursor afterwards."
      },
      "COMMANDS.insertbr": {
       "!type": "fn(cmd: string)",
       "!doc": "Inserts a BR at the current cursor position"
      },
      "COMMANDS.insertimage": {
       "!type": "fn(cmd: string, img: string) -> +node.Node",
       "!doc": "Inserts an image at the cursor position"
      },
      "COMMANDS.addclass": {
       "!type": "fn(cmd: string, cls: string) -> +dom.NodeList",
       "!doc": "Add a class to all of the elements in the selection"
      },
      "COMMANDS.removeclass": {
       "!type": "fn(cmd: string, cls: string) -> +dom.NodeList",
       "!doc": "Remove a class from all of the elements in the selection"
      },
      "COMMANDS.forecolor": {
       "!type": "fn(cmd: string, val: string) -> +dom.NodeList",
       "!doc": "Adds a forecolor to the current selection, or creates a new element and applies it"
      },
      "COMMANDS.backcolor": {
       "!type": "fn(cmd: string, val: string) -> +dom.NodeList",
       "!doc": "Adds a background color to the current selection, or creates a new element and applies it"
      },
      "COMMANDS.hilitecolor": {
       "!type": "fn(cmd: string, val: string) -> +dom.NodeList",
       "!doc": "Sugar method, calles backcolor"
      },
      "COMMANDS.fontname2": {
       "!type": "fn(cmd: string, val: string) -> +dom.NodeList",
       "!doc": "Adds a font name to the current selection, or creates a new element and applies it"
      },
      "COMMANDS.fontsize2": {
       "!type": "fn(cmd: string, val: string) -> +dom.NodeList",
       "!doc": "Adds a fontsize to the current selection, or creates a new element and applies it"
      },
      "COMMANDS.insertorderedlist": {
       "!type": "fn(cmd: string)",
       "!doc": "Overload for COMMANDS.list"
      },
      "COMMANDS.insertunorderedlist": {
       "!type": "fn(cmd: string)",
       "!doc": "Overload for COMMANDS.list"
      },
      "COMMANDS.list": {
       "!type": "fn(cmd: string, tag: string)",
       "!doc": "Noramlizes lists creation/destruction for IE. All others pass through to native calls"
      },
      "COMMANDS.justify": {
       "!type": "fn(cmd: string, val: string)",
       "!doc": "Noramlizes alignment for Webkit Browsers"
      },
      "COMMANDS.justifycenter": {
       "!type": "fn()",
       "!doc": "Override method for COMMANDS.justify"
      },
      "COMMANDS.justifyleft": {
       "!type": "fn()",
       "!doc": "Override method for COMMANDS.justify"
      },
      "COMMANDS.justifyright": {
       "!type": "fn()",
       "!doc": "Override method for COMMANDS.justify"
      },
      "COMMANDS.justifyfull": {
       "!type": "fn()",
       "!doc": "Override method for COMMANDS.justify"
      }
     },
     "EditorBR": {
      "!type": "fn() -> +_yui.editor.Plugin.EditorBR",
      "prototype": {
       "!proto": "_yui.base.Base.prototype"
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
     "EditorPara": {
      "!type": "fn() -> +_yui.editor.Plugin.EditorPara",
      "prototype": {
       "!proto": "_yui.base.Base.prototype"
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
      "!type": "fn() -> +_yui.editor.Plugin.EditorTab",
      "prototype": {
       "!proto": "_yui.base.Base.prototype"
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
      "!type": "fn() -> +_yui.editor.Plugin.EditorLists",
      "prototype": {
       "!proto": "_yui.base.Base.prototype"
      },
      "REMOVE": {
       "!type": "?",
       "!doc": "The items to removed from a list when a list item is moved, currently removes BR nodes"
      },
      "NONSEL": {
       "!type": "?",
       "!doc": "The selector query to get all non elements"
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
    "ExecCommand": {
     "!type": "fn()",
     "COMMANDS.createlink": {
      "!type": "fn(cmd: string) -> +node.Node",
      "!doc": "Override for the createlink method from the <a href=\"Plugin.CreateLinkBase.html\">CreateLinkBase</a> plugin."
     }
    },
    "EditorBase": {
     "!type": "fn() -> +_yui.editor.EditorBase",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "frame": {
       "!type": "?",
       "!doc": "Internal reference to the Y.Frame instance"
      },
      "copyStyles": {
       "!type": "fn(from: +_yui.node.Node, to: +_yui.node.Node)",
       "!doc": "Copy certain styles from one node instance to another (used for new paragraph creation mainly)"
      },
      "getDomPath": {
       "!type": "fn(node: +_yui.node.Node)",
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
       "!type": "fn(node: +_yui.yui.Selector) -> !this",
       "!doc": "Renders the Y.Frame to the passed node."
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
    "Frame": {
     "!type": "fn() -> +_yui.editor.Frame",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
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
      "host": {
       "!type": "+yui.Object",
       "!doc": "A reference to the Editor instance"
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
      "!doc": "The template string used to create the iframe"
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
     }
    },
    "Selection": {
     "!type": "fn() -> +_yui.editor.Selection",
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
      "!type": "fn(node: +_yui.node.Node) -> string",
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
       "!type": "fn() -> +dom.NodeList",
       "!doc": "Get all the nodes in the current selection. This method will actually perform a filter first.\nThen it calls doc.execCommand(fontname, null, yui-tmp) to touch all nodes in the selection.\nThe it compiles a list of all nodes affected by the execCommand and builds a NodeList to return."
      },
      "insertContent": {
       "!type": "fn(html: string) -> +node.Node",
       "!doc": "Insert HTML at the current cursor position and return a Node instance of the newly inserted element."
      },
      "insertAtCursor": {
       "!type": "fn(html: string, node: +_yui.node.Node, offset: number, collapse: bool) -> +node.Node",
       "!doc": "Insert HTML at the current cursor position, this method gives you control over the text node to insert into and the offset where to put it."
      },
      "wrapContent": {
       "!type": "fn(tag: string) -> +dom.NodeList",
       "!doc": "Get all elements inside a selection and wrap them with a new element and return a NodeList of all elements touched."
      },
      "replace": {
       "!type": "fn(se: string, re: string) -> +node.Node",
       "!doc": "Find and replace a string inside a text node and replace it with HTML focusing the node after \nto allow you to continue to type."
      },
      "remove": {
       "!type": "fn() -> !this",
       "!doc": "Destroy the range."
      },
      "createRange": {
       "!type": "fn() -> +RangeObject",
       "!doc": "Wrapper for the different range creation methods."
      },
      "selectNode": {
       "!type": "fn(node: +_yui.node.Node, collapse: bool) -> !this",
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
      }
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
      "!doc": "Returns a copy of the specified string with special regular expression\ncharacters escaped, allowing the string to be used safely inside a regex.\nThe following characters, and all whitespace characters, are escaped:\n\n    - #  ^ * ( ) + [ ] { } | \\ , . ?\n\nIf _string_ is not already a string, it will be coerced to a string."
     }
    }
   },
   "event": {
    "Event": {
     "!type": "fn()",
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
      "!type": "fn(id: string, fn: fn(), p_obj: +_yui.yui.Object, p_override: bool, checkContent: bool)",
      "!doc": "Executes the supplied callback when the item with the supplied\nid is found.  This is meant to be used to execute behavior as\nsoon as possible as the page loads.  If you use this after the\ninitial page load it will poll for a fixed time for the element.\nThe number of times it will poll and the frequency are\nconfigurable.  By default it will poll for 10 seconds.\n\n<p>The callback is executed with a single parameter:\nthe custom object parameter, if provided.</p>"
     },
     "onContentReady": {
      "!type": "fn(id: string, fn: fn(), obj: +_yui.yui.Object, override: bool)",
      "!doc": "Works the same way as onAvailable, but additionally checks the\nstate of sibling elements to determine if the content of the\navailable element is safe to modify.\n\n<p>The callback is executed with a single parameter:\nthe custom object parameter, if provided.</p>"
     },
     "attach": {
      "!type": "fn(type: string, fn: fn(), el: string, context: +_yui.yui.Object, args: bool) -> +event_custom.EventHandle",
      "!doc": "Adds an event listener"
     },
     "detach": {
      "!type": "fn(type: string, fn: fn(), el: string) -> bool",
      "!doc": "Removes an event listener.  Supports the signature the event was bound\nwith, but the preferred way to remove listeners is using the handle\nthat is returned when using Y.on"
     },
     "getEvent": {
      "!type": "fn(e: +_yui.event.Event, el: +HTMLElement) -> +event.Event",
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
      "!type": "fn(el: +HTMLElement, type: string) -> +Y.Custom.Event",
      "!doc": "Returns all listeners attached to the given element via addListener.\nOptionally, you can specify a specific type of event to return."
     },
     "defineOutside": {
      "!type": "fn(event: string, name: string)",
      "!doc": "Defines a new outside event to correspond with the given DOM event.\n\nBy default, the created synthetic event name will be the name of the event\nwith \"outside\" appended (e.g. \"click\" becomes \"clickoutside\"). If you want\na different name for the created Event, pass it as a second argument like so:\n<code>Y.Event.defineOutside(eventType, \"yonderclick\")</code>."
     },
     "define": {
      "!type": "fn(type: string, config: +_yui.yui.Object, force: bool) -> +event.SyntheticEvent",
      "!doc": "<p>Defines a new event in the DOM event system.  Implementers are\nresponsible for monitoring for a scenario whereby the event is fired.  A\nnotifier object is provided to the functions identified below.  When the\ncriteria defining the event are met, call notifier.fire( [args] ); to\nexecute event subscribers.</p>\n\n<p>The first parameter is the name of the event.  The second parameter is a\nconfiguration object which define the behavior of the event system when the\nnew event is subscribed to or detached from.  The methods that should be\ndefined in this configuration object are <code>on</code>,\n<code>detach</code>, <code>delegate</code>, and <code>detachDelegate</code>.\nYou are free to define any other methods or properties needed to define your\nevent.  Be aware, however, that since the object is used to subclass\nSyntheticEvent, you should avoid method names used by SyntheticEvent unless\nyour intention is to override the default behavior.</p>\n\n<p>This is a list of properties and methods that you can or should specify\nin the configuration object:</p>\n\n<dl>\n  <dt><code>on</code></dt>\n      <dd><code>function (node, subscription, notifier)</code> The\n      implementation logic for subscription.  Any special setup you need to\n      do to create the environment for the event being fired--E.g. native\n      DOM event subscriptions.  Store subscription related objects and\n      state on the <code>subscription</code> object.  When the\n      criteria have been met to fire the synthetic event, call\n      <code>notifier.fire(e)</code>.  See Notifiers <code>fire()</code>\n      method for details about what to pass as parameters.</dd>\n\n  <dt><code>detach</code></dt>\n      <dd><code>function (node, subscription, notifier)</code> The\n      implementation logic for cleaning up a detached subscription. E.g.\n      detach any DOM subscriptions added in <code>on</code>.</dd>\n\n  <dt><code>delegate</code></dt>\n      <dd><code>function (node, subscription, notifier, filter)</code> The\n      implementation logic for subscription via <code>Y.delegate</code> or\n      <code>node.delegate</code>.  The filter is typically either a selector\n      string or a function.  You can use\n      <code>Y.delegate.compileFilter(selectorString)</code> to create a\n      filter function from a selector string if needed.  The filter function\n      expects an event object as input and should output either null, a\n      matching Node, or an array of matching Nodes.  Otherwise, this acts\n      like <code>on</code> DOM event subscriptions.  Store subscription\n      related objects and information on the <code>subscription</code>\n      object.  When the criteria have been met to fire the synthetic event,\n      call <code>notifier.fire(e)</code> as noted above.</dd>\n\n  <dt><code>detachDelegate</code></dt>\n      <dd><code>function (node, subscription, notifier)</code> The\n      implementation logic for cleaning up a detached delegate subscription.\n      E.g. detach any DOM delegate subscriptions added in\n      <code>delegate</code>.</dd>\n\n  <dt><code>publishConfig</code></dt>\n      <dd>(Object) The configuration object that will be used to instantiate\n      the underlying CustomEvent. See Notifiers <code>fire</code> method\n      for details.</dd>\n\n  <dt><code>processArgs</code></dt\n      <dd>\n         <p><code>function (argArray, fromDelegate)</code> Optional method\n         to extract any additional arguments from the subscription\n         signature.  Using this allows <code>on</code> or\n         <code>delegate</code> signatures like\n         <code>node.on(&quot;hover&quot;, overCallback,\n         outCallback)</code>.</p>\n         <p>When processing an atypical argument signature, make sure the\n         args array is returned to the normal signature before returning\n         from the function.  For example, in the &quot;hover&quot; example\n         above, the <code>outCallback</code> needs to be <code>splice</code>d\n         out of the array.  The expected signature of the args array for\n         <code>on()</code> subscriptions is:</p>\n         <pre>\n             <code>[type, callback, target, contextOverride, argN...]</code>\n         </pre>\n         <p>And for <code>delegate()</code>:</p>\n         <pre>\n             <code>[type, callback, target, filter, contextOverride, argN...]</code>\n         </pre>\n         <p>where <code>target</code> is the node the event is being\n         subscribed for.  You can see these signatures documented for\n         <code>Y.on()</code> and <code>Y.delegate()</code> respectively.</p>\n         <p>Whatever gets returned from the function will be stored on the\n         <code>subscription</code> object under\n         <code>subscription._extra</code>.</p></dd>\n  <dt><code>subMatch</code></dt>\n      <dd>\n          <p><code>function (sub, args)</code>  Compares a set of\n          subscription arguments against a Subscription object to determine\n          if they match.  The default implementation compares the callback\n          function against the second argument passed to\n          <code>Y.on(...)</code> or <code>node.detach(...)</code> etc.</p>\n      </dd>\n</dl>"
     },
     "simulate": {
      "!type": "fn(target: +HTMLElement, type: string, options: +_yui.yui.Object) -> +Void",
      "!doc": "Simulates the event with the given name on a target."
     }
    },
    "DOMEventFacade": {
     "!type": "fn(ev: +_yui.event.Event, currentTarget: +HTMLElement, wrapper: +Event.Custom)",
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
       "!doc": "The button that was pushed."
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
      },
      "_event": {
       "!type": "?",
       "!doc": "The native event"
      }
     }
    },
    "SynthRegistry": {
     "!type": "fn(el: +HTMLElement, yuid: string, key: string) -> +_yui.event.SynthRegistry",
     "prototype": {
      "register": {
       "!type": "fn(handle: +_yui.event_custom.EventHandle)",
       "!doc": "Adds a subscription from the Notifier registry."
      },
      "_unregisterSub": {
       "!type": "fn(sub: +Subscription)",
       "!doc": "Removes the subscription from the Notifier registry."
      }
     }
    },
    "SyntheticEvent": {
     "!type": "fn(cfg: +_yui.yui.Object) -> +_yui.event.SyntheticEvent",
     "prototype": {
      "processArgs": {
       "!type": "fn(args: +_yui.yui.Array, delegate: bool) -> ?",
       "!doc": "<p>Implementers MAY provide this method definition.</p>\n\n<p>Implement this function if the event supports a different\nsubscription signature.  This function is used by both\n<code>on()</code> and <code>delegate()</code>.  The second parameter\nindicates that the event is being subscribed via\n<code>delegate()</code>.</p>\n\n<p>Implementations must remove extra arguments from the args list\nbefore returning.  The required args for <code>on()</code>\nsubscriptions are</p>\n<pre><code>[type, callback, target, context, argN...]</code></pre>\n\n<p>The required args for <code>delegate()</code>\nsubscriptions are</p>\n\n<pre><code>[type, callback, target, filter, context, argN...]</code></pre>\n\n<p>The return value from this function will be stored on the\nsubscription in the _extra property for reference elsewhere.</p>"
      },
      "preventDups": {
       "!type": "bool",
       "!doc": "<p>Implementers MAY override this property.</p>\n\n<p>Whether to prevent multiple subscriptions to this event that are\nclassified as being the same.  By default, this means the subscribed\ncallback is the same function.  See the <code>subMatch</code>\nmethod.  Setting this to true will impact performance for high volume\nevents.</p>"
      },
      "on": {
       "!type": "fn(node: +_yui.node.Node, sub: +Subscription, notifier: +_yui.event.SyntheticEvent.Notifier)",
       "!doc": "<p>Implementers SHOULD provide this method definition.</p>\n\nImplementation logic for subscriptions done via <code>node.on(type,\nfn)</code> or <code>Y.on(type, fn, target)</code>.  This\nfunction should set up the monitor(s) that will eventually fire the\nevent.  Typically this involves subscribing to at least one DOM\nevent.  It is recommended to store detach handles from any DOM\nsubscriptions to make for easy cleanup in the <code>detach</code>\nmethod.  Typically these handles are added to the <code>sub</code>\nobject.  Also for SyntheticEvents that leverage a single DOM\nsubscription under the hood, it is recommended to pass the DOM event\nobject to <code>notifier.fire(e)</code>.  (The event name on the\nobject will be updated)."
      },
      "detach": {
       "!type": "fn(node: +_yui.node.Node, sub: +Subscription, notifier: +_yui.event.SyntheticEvent.Notifier)",
       "!doc": "<p>Implementers SHOULD provide this method definition.</p>\n\n<p>Implementation logic for detaching subscriptions done via\n<code>node.on(type, fn)</code>.  This function should clean up any\nsubscriptions made in the <code>on()</code> phase.</p>"
      },
      "delegate": {
       "!type": "fn(node: +_yui.node.Node, sub: +Subscription, notifier: +_yui.event.SyntheticEvent.Notifier, filter: string)",
       "!doc": "<p>Implementers SHOULD provide this method definition.</p>\n\n<p>Implementation logic for subscriptions done via\n<code>node.delegate(type, fn, filter)</code> or\n<code>Y.delegate(type, fn, container, filter)</code>.  Like with\n<code>on()</code> above, this function should monitor the environment\nfor the event being fired, and trigger subscription execution by\ncalling <code>notifier.fire(e)</code>.</p>\n\n<p>This function receives a fourth argument, which is the filter\nused to identify which Nodes are of interest to the subscription.\nThe filter will be either a boolean function that accepts a target\nNode for each hierarchy level as the event bubbles, or a selector\nstring.  To translate selector strings into filter functions, use\n<code>Y.delegate.compileFilter(filter)</code>.</p>"
      },
      "detachDelegate": {
       "!type": "fn(node: +_yui.node.Node, sub: +Subscription, notifier: +_yui.event.SyntheticEvent.Notifier, filter: string)",
       "!doc": "<p>Implementers SHOULD provide this method definition.</p>\n\n<p>Implementation logic for detaching subscriptions done via\n<code>node.delegate(type, fn, filter)</code> or\n<code>Y.delegate(type, fn, container, filter)</code>.  This function\nshould clean up any subscriptions made in the\n<code>delegate()</code> phase.</p>"
      },
      "applyArgExtras": {
       "!type": "fn(extra: ?, sub: +Subscription)",
       "!doc": "<p>Implementers MAY provide this method definition.</p>\n\n<p>Implement this function if you want extra data extracted during\nprocessArgs to be propagated to subscriptions on a per-node basis.\nThat is to say, if you call <code>Y.on(xyz, fn, xtra, div)</code>\nthe data returned from processArgs will be shared\nacross the subscription objects for all the divs.  If you want each\nsubscription to receive unique information, do that processing\nhere.</p>\n\n<p>The default implementation adds the data extracted by processArgs\nto the subscription object as <code>sub._extra</code>.</p>"
      },
      "getSubs": {
       "!type": "fn(node: +_yui.node.Node, args: +_yui.yui.Array, filter: fn(), first: bool) -> [+event_custom.EventHandle]",
       "!doc": "Returns the detach handles of subscriptions on a node that satisfy a\nsearch/filter function.  By default, the filter used is the\n<code>subMatch</code> method."
      },
      "subMatch": {
       "!type": "fn(sub: +Subscription, args: +_yui.yui.Array) -> bool",
       "!doc": "<p>Implementers MAY override this to define what constitutes a\n&quot;same&quot; subscription.  Override implementations should\nconsider the lack of a comparator as a match, so calling\n<code>getSubs()</code> with no arguments will return all subs.</p>\n\n<p>Compares a set of subscription arguments against a Subscription\nobject to determine if they match.  The default implementation\ncompares the callback function against the second argument passed to\n<code>Y.on(...)</code> or <code>node.detach(...)</code> etc.</p>"
      }
     }
    },
    "Plugin": {
     "Host": {
      "!type": "fn()",
      "prototype": {
       "plug": {
        "!type": "fn(P: fn(), config: ?) -> !this",
        "!doc": "Adds a plugin to the host object. This will instantiate the \nplugin and attach it to the configured namespace on the host object."
       },
       "unplug": {
        "!type": "fn(plugin: string) -> !this",
        "!doc": "Removes a plugin from the host object. This will destroy the \nplugin instance and delete the namepsace from the host object."
       },
       "hasPlugin": {
        "!type": "fn(ns: string) -> bool",
        "!doc": "Determines if a plugin has plugged into this host."
       }
      },
      "plug": {
       "!type": "fn(hostClass: fn(), plugin: fn(), config: +_yui.yui.Object)",
       "!doc": "Registers plugins to be instantiated at the class level (plugins \nwhich should be plugged into every instance of the class by default)."
      },
      "unplug": {
       "!type": "fn(hostClass: fn(), plugin: fn())",
       "!doc": "Unregisters any class level plugins which have been registered by the host class, or any\nother class in the hierarchy."
      },
      "Plugin.Host.plug": {
       "!type": "fn(hostClass: fn(), plugin: fn(), config: +_yui.yui.Object)",
       "!doc": "Registers plugins to be instantiated at the class level (plugins \nwhich should be plugged into every instance of the class by default)."
      },
      "Plugin.Host.unplug": {
       "!type": "fn(hostClass: fn(), plugin: fn())",
       "!doc": "Unregisters any class level plugins which have been registered by the host class, or any\nother class in the hierarchy."
      }
     }
    }
   },
   "event_custom": {
    "CustomEvent": {
     "!type": "fn(type: string, o: +_yui.yui.Object) -> +_yui.event_custom.CustomEvent",
     "prototype": {
      "undefined": {
       "!type": "fn()"
      },
      "type": {
       "!type": "string",
       "!doc": "The type of event, returned to subscribers when the event fires"
      },
      "context": {
       "!type": "+object",
       "!doc": "The context the the event will fire from by default.  Defaults to the YUI\ninstance."
      },
      "monitored": {
       "!type": "bool",
       "!doc": "Monitor when an event is attached or detached."
      },
      "broadcast": {
       "!type": "number",
       "!doc": "If 0, this event does not broadcast.  If 1, the YUI instance is notified\nevery time this event fires.  If 2, the YUI instance and the YUI global\n(if event is enabled on the global) are notified every time this event\nfires."
      },
      "silent": {
       "!type": "bool",
       "!doc": "By default all custom events are logged in the debug build, set silent\nto true to disable debug outpu for this event."
      },
      "queuable": {
       "!type": "bool",
       "!doc": "Specifies whether this event should be queued when the host is actively\nprocessing an event.  This will effect exectution order of the callbacks\nfor the various events."
      },
      "subscribers": {
       "!type": "+Subscriber {}",
       "!doc": "The subscribers to this event"
      },
      "afters": {
       "!type": "+Subscriber {}",
       "!doc": "After subscribers"
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
       "!type": "+node.EventTarget",
       "!doc": "Specifies the host for this custom event.  This is used\nto enable event bubbling"
      },
      "defaultFn": {
       "!type": "fn()",
       "!doc": "The default function to execute after event listeners\nhave fire, but only if the default action was not\nprevented."
      },
      "stoppedFn": {
       "!type": "fn()",
       "!doc": "The function to execute if a subscriber calls\nstopPropagation or stopImmediatePropagation"
      },
      "preventedFn": {
       "!type": "fn()",
       "!doc": "The function to execute if a subscriber calls\npreventDefault"
      },
      "preventable": {
       "!type": "bool",
       "!doc": "Specifies whether or not this events default function\ncan be cancelled by a subscriber by executing preventDefault()\non the event facade"
      },
      "bubbles": {
       "!type": "bool",
       "!doc": "Specifies whether or not a subscriber can stop the event propagation\nvia stopPropagation(), stopImmediatePropagation(), or halt()\n\nEvents can only bubble if emitFacade is true."
      },
      "signature": {
       "!type": "number",
       "!doc": "Supports multiple options for listener signatures in order to\nport YUI 2 apps."
      },
      "emitFacade": {
       "!type": "bool",
       "!doc": "If set to true, the custom event will deliver an EventFacade object\nthat is similar to a DOM event object."
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
       "!type": "fn(fn: fn(), context: +_yui.yui.Object, arg: +Mixed) -> +event_custom.EventHandle",
       "!doc": "Listen for this event"
      },
      "after": {
       "!type": "fn(fn: fn(), context: +_yui.yui.Object, arg: +Mixed) -> +event_custom.EventHandle",
       "!doc": "Listen for this event after the normal subscribers have been notified and\nthe default behavior has been applied.  If a normal subscriber prevents the\ndefault behavior, it also prevents after listeners from firing."
      },
      "detach": {
       "!type": "fn(fn: fn(), context: +_yui.yui.Object) -> number",
       "!doc": "Detach listeners."
      },
      "unsubscribe": {
       "!type": "fn(fn: fn(), context: +_yui.yui.Object) -> number",
       "!doc": "Detach listeners."
      },
      "log": {
       "!type": "fn(msg: string, cat: string)",
       "!doc": "Logger abstraction to centralize the application of the silent flag"
      },
      "fire": {
       "!type": "fn(arguments: +_yui.yui.Object) -> bool",
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
      "!type": "fn(obj: ?, sFn: ?) -> +_yui.event_custom.Do.Method",
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
     },
     "Do.originalRetVal": {
      "!type": "?",
      "!doc": "Contains the return value from the wrapped method, accessible\nby after event listeners."
     },
     "Do.currentRetVal": {
      "!type": "?",
      "!doc": "Contains the current state of the return value, consumable by\nafter event listeners, and updated if an after subscriber\nchanges the return value generated by the wrapped function."
     }
    },
    "EventFacade": {
     "!type": "fn(e: +_yui.event.Event, currentTarget: +HTMLElement)",
     "prototype": {
      "details": {
       "!type": "+yui.Array",
       "!doc": "The arguments passed to fire"
      },
      "type": {
       "!type": "string",
       "!doc": "The real event type"
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
    "EventHandle": {
     "!type": "fn(evt: +_yui.event_custom.CustomEvent, sub: +_yui.event_custom.Subscriber) -> +_yui.event_custom.EventHandle",
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
      },
      "undefined": {
       "!type": "fn()",
       "!doc": "The subscriber object"
      }
     }
    },
    "Subscriber": {
     "!type": "fn(fn: fn(), context: +_yui.yui.Object, args: +_yui.yui.Array) -> +_yui.event_custom.Subscriber",
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
       "!type": "+node.EventTarget",
       "!doc": "Custom events for a given fire transaction."
      },
      "once": {
       "!type": "?",
       "!doc": "This listener only reacts to the event once"
      },
      "notify": {
       "!type": "fn(args: +_yui.yui.Array, ce: +_yui.event_custom.CustomEvent)",
       "!doc": "Executes the subscriber."
      },
      "contains": {
       "!type": "fn(fn: fn(), context: +_yui.yui.Object) -> bool",
       "!doc": "Returns true if the fn and obj match this objects properties.\nUsed by the unsubscribe method to match the right subscriber."
      }
     }
    }
   },
   "node": {
    "EventTarget": {
     "!type": "fn(opts: ?)",
     "prototype": {
      "addTarget": {
       "!type": "fn(o: +_yui.node.EventTarget)",
       "!doc": "Registers another EventTarget as a bubble target.  Bubble order\nis determined by the order registered.  Multiple targets can\nbe specified.\n\nEvents can only bubble if emitFacade is true.\n\nIncluded in the event-custom-complex submodule."
      },
      "getTargets": {
       "!type": "fn() -> ?",
       "!doc": "Returns an array of bubble targets for this object."
      },
      "removeTarget": {
       "!type": "fn(o: +_yui.node.EventTarget)",
       "!doc": "Removes a bubble target"
      },
      "bubble": {
       "!type": "fn(evt: +_yui.event_custom.CustomEvent) -> bool",
       "!doc": "Propagate an event.  Requires the event-custom-complex module."
      },
      "once": {
       "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object, arg: +Mixed) -> ?",
       "!doc": "Listen to a custom event hosted by this object one time.\nThis is the equivalent to <code>on</code> except the\nlistener is immediatelly detached when it is executed."
      },
      "onceAfter": {
       "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object, arg: +Mixed) -> ?",
       "!doc": "Listen to a custom event hosted by this object one time.\nThis is the equivalent to <code>after</code> except the\nlistener is immediatelly detached when it is executed."
      },
      "parseType": {
       "!type": "fn(type: string, pre?: string) -> +yui.Array",
       "!doc": "Takes the type parameter passed to on and parses out the\nvarious pieces that could be included in the type.  If the\nevent type is passed without a prefix, it will be expanded\nto include the prefix one is supplied or the event target\nis configured with a default prefix."
      },
      "on": {
       "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object, arg: +Mixed) -> ?",
       "!doc": "Subscribe to a custom event hosted by this object"
      },
      "subscribe": {
       "!type": "fn()",
       "!doc": "subscribe to an event"
      },
      "detach": {
       "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object) -> +node.EventTarget",
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
       "!type": "fn(type: string, opts: +_yui.yui.Object) -> +event_custom.CustomEvent",
       "!doc": "Creates a new custom event of the specified type.  If a custom event\nby that name already exists, it will not be re-created.  In either\ncase the custom event is returned."
      },
      "fire": {
       "!type": "fn(type: string, arguments: +_yui.yui.Object) -> +node.EventTarget",
       "!doc": "Fire a custom event by name.  The callback functions will be executed\nfrom the context specified when the event was created, and with the\nfollowing parameters.\n\nIf the custom event object hasnt been created, then the event hasnt\nbeen published and it has no subscribers.  For performance sake, we\nimmediate exit in this case.  This means the event wont bubble, so\nif the intention is that a bubble target be notified, the event must\nbe published on this object first.\n\nThe first argument is the event type, and any additional arguments are\npassed to the listeners as parameters.  If the first of these is an\nobject literal, and the event is configured to emit an event facade,\nthat object is mixed into the event facade and the facade is provided\nin place of the original object."
      },
      "getEvent": {
       "!type": "fn(type: string, prefixed: string) -> +event_custom.CustomEvent",
       "!doc": "Returns the custom event of the provided type has been created, a\nfalsy value otherwise"
      },
      "after": {
       "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object, arg: +Mixed) -> ?",
       "!doc": "Subscribe to a custom event hosted by this object.  The\nsupplied callback will execute after any listeners add\nvia the subscribe method, and after the default function,\nif configured for the event, has executed."
      },
      "before": {
       "!type": "fn() -> ?",
       "!doc": "Executes the callback before a DOM event, custom event\nor method.  If the first argument is a function, it\nis assumed the target is a method.  For DOM and custom\nevents, this is an alias for Y.on.\n\nFor DOM and custom events:\ntype, callback, context, 0-n arguments\n\nFor methods:\ncallback, object (method host), methodName, context, 0-n arguments"
      }
     }
    },
    "Node": {
     "!type": "fn(node: +DOMNode) -> +_yui.node.Node",
     "ATTRS": {
      "!type": "+object",
      "!doc": "Static collection of configuration attributes for special handling"
     },
     "prototype": {
      "text": {
       "!type": "fn(text: string)",
       "!doc": "<p>Get or Set the combined text contents of the node instance,\nincluding its descendants. If the <code>text</code>\nis passed its set the content of the element, otherwise it works as a\ngetter for the current content.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.text(Setting new text content);\n// Alert the value of the current content\nalert( node.text() );\n</code></pre>"
      },
      "for": {
       "!type": "string",
       "!doc": "Allows for getting and setting the text of an element.\nFormatting is preserved and special characters are treated literally."
      },
      "children": {
       "!type": "+dom.NodeList",
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
       "!type": "fn(attrMap: +_yui.yui.Object) -> !this",
       "!doc": "Sets multiple attributes."
      },
      "getAttrs": {
       "!type": "fn(attrs: +_yui.yui.Array) -> +yui.Object",
       "!doc": "Returns an object containing the values for the requested attributes."
      },
      "compareTo": {
       "!type": "fn(refNode: +HTMLElement) -> bool",
       "!doc": "Compares nodes to determine if they match.\nNode instances can be compared to each other and/or HTMLElements."
      },
      "inDoc": {
       "!type": "fn(doc: +_yui.node.Node) -> bool",
       "!doc": "Determines whether the node is appended to the document."
      },
      "ancestor": {
       "!type": "fn(fn: string, testSelf: bool) -> +node.Node",
       "!doc": "Returns the nearest ancestor that passes the test applied by supplied boolean method."
      },
      "ancestors": {
       "!type": "fn(fn: string, testSelf: bool) -> +dom.NodeList",
       "!doc": "Returns the ancestors that pass the test applied by supplied boolean method."
      },
      "previous": {
       "!type": "fn(fn: string) -> +node.Node",
       "!doc": "Returns the previous matching sibling.\nReturns the nearest element node sibling if no method provided."
      },
      "next": {
       "!type": "fn(fn: string) -> +node.Node",
       "!doc": "Returns the next matching sibling.\nReturns the nearest element node sibling if no method provided."
      },
      "siblings": {
       "!type": "fn(fn: string) -> +dom.NodeList",
       "!doc": "Returns all matching siblings.\nReturns all siblings if no method provided."
      },
      "one": {
       "!type": "fn(selector: string) -> +node.Node",
       "!doc": "Retrieves a Node instance of nodes based on the given CSS selector."
      },
      "all": {
       "!type": "fn(selector: string) -> +dom.NodeList",
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
       "!type": "fn(newNode: +Y.Node) -> !this",
       "!doc": "Replace the node with the other node. This is a DOM update only\nand does not change the node bound to the Node instance.\nShortcut for myNode.get(parentNode).replaceChild(newNode, myNode);"
      },
      "replaceChild": {
       "!type": "fn(node: string, refNode: +HTMLElement) -> +node.Node"
      },
      "destroy": {
       "!type": "fn(recursivePurge: bool)",
       "!doc": "Nulls internal node references, removes any plugins and event listeners"
      },
      "invoke": {
       "!type": "fn(method: string, a: ?) -> ?",
       "!doc": "Invokes a method on the Node instance"
      },
      "swap": {
       "!type": "fn(otherNode: +_yui.node.Node) -> !this",
       "!doc": "Swap DOM locations with the given node.\nThis does not change which DOM node each Node instance refers to."
      },
      "getData": {
       "!type": "fn(name: string) -> ?",
       "!doc": "Retrieves arbitrary data stored on a Node instance.\nThis is not stored with the DOM node."
      },
      "setData": {
       "!type": "fn(name: string, val: ?) -> !this",
       "!doc": "Stores arbitrary data on a Node instance.\nThis is not stored with the DOM node."
      },
      "clearData": {
       "!type": "fn(name: string) -> !this",
       "!doc": "Clears stored data."
      },
      "empty": {
       "!type": "fn() -> !this",
       "!doc": "Removes and destroys all of the nodes within the node."
      },
      "getDOMNode": {
       "!type": "fn() -> +DOMNode",
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
       "!type": "fn(node: +Y.Node) -> !this",
       "!doc": "Appends the node to the given node."
      },
      "setContent": {
       "!type": "fn(content: string) -> !this",
       "!doc": "Replaces the nodes current content with the content."
      },
      "getContent": {
       "!type": "fn() -> string",
       "!doc": "Returns the nodes current content (e.g. innerHTML)"
      },
      "query": {
       "!type": "fn(selector: string) -> +node.Node",
       "!doc": "Retrieves a Node instance of nodes based on the given CSS selector."
      },
      "queryAll": {
       "!type": "fn(selector: string) -> +dom.NodeList",
       "!doc": "Retrieves a nodeList based on the given CSS selector."
      },
      "each": {
       "!type": "fn(fn: fn(), context: +_yui.yui.Object) -> !this",
       "!doc": "Applies the given function to each Node in the NodeList."
      },
      "item": {
       "!type": "fn(index: number) -> +node.Node",
       "!doc": "Retrieves the Node instance at the given index."
      },
      "size": {
       "!type": "fn() -> number",
       "!doc": "Returns the current number of items in the Node."
      },
      "delegate": {
       "!type": "fn(type: string, fn: fn(), spec: string, context: +_yui.yui.Object, args: ?) -> +event_custom.EventHandle",
       "!doc": "<p>Sets up a delegation listener for an event occurring inside the Node.\nThe delegated event will be verified against a supplied selector or\nfiltering function to test if the event references at least one node that\nshould trigger the subscription callback.</p>\n\n<p>Selector string filters will trigger the callback if the event originated\nfrom a node that matches it or is contained in a node that matches it.\nFunction filters are called for each Node up the parent axis to the\nsubscribing container node, and receive at each level the Node and the event\nobject.  The function should return true (or a truthy value) if that Node\nshould trigger the subscription callback.  Note, it is possible for filters\nto match multiple Nodes for a single event.  In this case, the delegate\ncallback will be executed for each matching Node.</p>\n\n<p>For each matching Node, the callback will be executed with its this\nobject set to the Node matched by the filter (unless a specific context was\nprovided during subscription), and the provided events\n<code>currentTarget</code> will also be set to the matching Node.  The\ncontaining Node from which the subscription was originally made can be\nreferenced as <code>e.container</code>."
      },
      "simulate": {
       "!type": "fn(type: string, options: +_yui.yui.Object) -> +Void",
       "!doc": "Simulates an event on the node."
      },
      "purge": {
       "!type": "fn(recurse: bool, type: string) -> !this",
       "!doc": "Removes event listeners from the node and (optionally) its subtree"
      },
      "on": {
       "!type": "fn(type: string, fn: fn(), context?: +_yui.yui.Object, arg?: ?) -> +event_custom.EventHandle",
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
       "!type": "fn(tagName: string) -> +dom.NodeList",
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
       "!type": "fn(needle: +_yui.node.Node) -> bool",
       "!doc": "Determines whether the node is an ancestor of another HTML element in the DOM hierarchy."
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
       "!type": "fn(node2: +_yui.node.Node, altRegion: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Compares the intersection of the node with another node or region"
      },
      "inRegion": {
       "!type": "fn(node2: +_yui.node.Node, all: bool, altRegion: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Determines whether or not the node is within the giving region."
      },
      "winWidth": {
       "!type": "number",
       "!doc": "Returns the inner width of the viewport (exludes scrollbar)."
      },
      "winHeight": {
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
       "!type": "fn(xy: +_yui.yui.Array) -> !this",
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
       "!type": "fn(otherNode: +Y.Node) -> !this",
       "!doc": "Swaps the XY position of this node with another node."
      },
      "getStyle": {
       "!type": "fn(attr: string) -> string",
       "!doc": "Returns the styles current value."
      },
      "getComputedStyle": {
       "!type": "fn(attr: string) -> string",
       "!doc": "Returns the computed value for the given style property."
      },
      "setStyle": {
       "!type": "fn(attr: string, val: string) -> !this",
       "!doc": "Sets a style property of the node."
      },
      "setStyles": {
       "!type": "fn(hash: +_yui.yui.Object) -> !this",
       "!doc": "Sets multiple style properties on the node."
      },
      "show": {
       "!type": "fn(cssClass: string) -> !this",
       "!doc": "<p>Show the node removing a css class used to hide it. Use the same\nclassName added using the <a href=\"A.Node.html#method_hide\">hide</a>\nmethod. If <code>cssClass</code> is not passed as argument, the\nclassName aui-helper-hidden will be used by default.</p>\n\n<p><string>NOTE:</string> This method assume that your node were hidden\nbecause of the aui-helper-hidden css class were being used. This wont\nmanipulate the inline <code>style.display</code> property.</p>"
      },
      "hide": {
       "!type": "fn(cssClass: string) -> !this",
       "!doc": "<p>Hide the node adding a css class on it. If <code>cssClass</code> is not\npassed as argument, the className aui-helper-hidden will be used by\ndefault.</p>\n\n<p><string>NOTE:</string> This method assume that your node were visible\nbecause the absence of aui-helper-hidden css class. This wont\nmanipulate the inline <code>style.display</code> property.</p>"
      },
      "transition": {
       "!type": "fn(config: +_yui.yui.Object, callback: fn()) -> !this",
       "!doc": "Animate one or more css properties to a given value. Requires the \"transition\" module.\n<pre>example usage:\n    Y.one(#demo).transition({\n        duration: 1, // in seconds, default is 0.5\n        easing: ease-out, // default is ease\n        delay: 1, // delay start for 1 second, default is 0\n\n        height: 10px,\n        width: 10px,\n\n        opacity: { // per property\n            value: 0,\n            duration: 2,\n            delay: 2,\n            easing: ease-in\n        }\n    });\n</pre>"
      },
      "getCenterXY": {
       "!type": "fn() -> +yui.Array",
       "!doc": "Gets the current center position of the node in page coordinates."
      },
      "getMargin": {
       "!type": "fn(sides: string) -> number",
       "!doc": "Return the combined size of the margin for the specified sides."
      },
      "getPadding": {
       "!type": "fn(sides: string) -> number",
       "!doc": "Return the combined width of the border for the specified sides."
      },
      "guid": {
       "!type": "fn(prefix: string) -> string",
       "!doc": "Set the id of the Node instance if the object does not have one. The\ngenerated id is based on a guid created by the\n<a href=\"YUI.html#method_stamp\">stamp</a> method."
      },
      "hover": {
       "!type": "fn(overFn: string, outFn: string) -> +node.Node",
       "!doc": "Create a hover interaction."
      },
      "html": {
       "!type": "fn(value: string)",
       "!doc": "<p>Get or Set the HTML contents of the node. If the <code>value</code>\nis passed its set the content of the element, otherwise it works as a\ngetter for the current content.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.html(Setting new HTML);\n// Alert the value of the current content\nalert( node.html() );\n</code></pre>"
      },
      "undefined": {
       "!type": "fn() -> string",
       "!doc": "Gets the outerHTML of a node, which islike innerHTML, except that it\nactually contains the HTML of the node itself."
      },
      "placeAfter": {
       "!type": "fn(newNode: +_yui.node.Node) -> !this",
       "!doc": "<p>Inserts a <code>newNode</code> after the node instance (i.e., as the next\nsibling). If the reference node has no parent, then does nothing.</p>\n\nExample:\n\n<pre><code>var titleNode = A.one(#titleNode);\nvar descriptionNode = A.one(#descriptionNode);\n// the description is usually shown after the title\ntitleNode.placeAfter(descriptionNode);\n</code></pre>"
      },
      "placeBefore": {
       "!type": "fn(newNode: +_yui.node.Node) -> !this",
       "!doc": "<p>Inserts a <code>newNode</code> before the node instance (i.e., as the previous\nsibling). If the reference node has no parent, then does nothing.</p>\n\nExample:\n\n<pre><code>var descriptionNode = A.one(#descriptionNode);\nvar titleNode = A.one(#titleNode);\n// the title is usually shown before the description\ndescriptionNode.placeBefore(titleNode);\n</code></pre>"
      },
      "prependTo": {
       "!type": "fn(selector: +_yui.node.Node) -> !this",
       "!doc": "<p>Inserts the node instance to the begining of the <code>selector</code>\nnode (i.e., insert before the <code>firstChild</code> of the\n<code>selector</code>).</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.prependTo(body);\n</code></pre>"
      },
      "radioClass": {
       "!type": "fn(cssClass: string) -> !this",
       "!doc": "Add one or more CSS classes to an element and remove the class(es)\nfrom the siblings of the element."
      },
      "resetId": {
       "!type": "fn(prefix: string) -> !this",
       "!doc": "Generate an unique identifier and reset the id attribute of the node\ninstance using the new value. Invokes the\n<a href=\"Node.html#method_guid\">guid</a>."
      },
      "selectText": {
       "!type": "fn(start: number, end: number)",
       "!doc": "Selects a substring of text inside of the input element."
      },
      "selectable": {
       "!type": "fn() -> !this",
       "!doc": "Enables text selection for this element (normalized across browsers)."
      },
      "swallowEvent": {
       "!type": "fn(eventName: string, preventDefault: bool) -> !this",
       "!doc": "<p>Stops the specified event(s) from bubbling and optionally prevents the\ndefault action.</p>\n\nExample:\n\n<pre><code>var anchor = A.one(a#anchorId);\nanchor.swallowEvent(click);\n</code></pre>"
      },
      "toggle": {
       "!type": "fn(on: bool, callback: fn()) -> !this",
       "!doc": "<p>Displays or hide the node instance.</p>\n\n<p><string>NOTE:</string> This method assume that your node were hidden\nbecause of the aui-helper-hidden css class were being used. This wont\nmanipulate the inline <code>style.display</code> property.</p>"
      },
      "unselectable": {
       "!type": "fn() -> !this",
       "!doc": "Disables text selection for this element (normalized across browsers)."
      },
      "val": {
       "!type": "fn(value: string)",
       "!doc": "<p>Get or Set the value attribute of the node instance. If the\n<code>value</code> is passed its set the value of the element,\notherwise it works as a getter for the current value.</p>\n\nExample:\n\n<pre><code>var input = A.one(#inputId);\ninput.val(Setting new input value);\n// Alert the value of the input\nalert( input.val() );\n</code></pre>"
      },
      "_getBoxStyleAsNumber": {
       "!type": "fn(sides: string, map: string) -> number",
       "!doc": "Return the combined size of the box style for the specified sides."
      },
      "width": {
       "!type": "fn() -> number",
       "!doc": "Returns the width of the content, not including\nthe padding, border or margin. If a width is passed,\nthe nodes overall width is set to that size.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.width(); //returns content width\nnode.width(100); // sets box width\n</code></pre>"
      },
      "height": {
       "!type": "fn() -> number",
       "!doc": "Returns the height of the content, not including\nthe padding, border or margin. If a height is passed,\nthe nodes overall height is set to that size.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.height(); //returns content height\nnode.height(100); // sets box height\n</code></pre>"
      },
      "innerWidth": {
       "!type": "fn() -> number",
       "!doc": "Returns the size of the box from inside of the border,\nwhich is the offsetWidth plus the padding on the left and right.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.innerWidth();\n</code></pre>"
      },
      "innerHeight": {
       "!type": "fn() -> number",
       "!doc": "Returns the size of the box from inside of the border,\nwhich is offsetHeight plus the padding on the top and bottom.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.innerHeight();\n</code></pre>"
      },
      "outerWidth": {
       "!type": "fn() -> number",
       "!doc": "Returns the outer width of the box including the border,\nif true is passed as the first argument, the margin is included.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.outerWidth();\nnode.outerWidth(true); // includes margin\n</code></pre>"
      },
      "outerHeight": {
       "!type": "fn() -> number",
       "!doc": "Returns the outer height of the box including the border,\nif true is passed as the first argument, the margin is included.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.outerHeight();\nnode.outerHeight(true); // includes margin\n</code></pre>"
      }
     },
     "NAME": {
      "!type": "?",
      "!doc": "The name of the component"
     },
     "getDOMNode": {
      "!type": "fn(node: +Y.Node) -> +HTMLNode",
      "!doc": "Retrieves the DOM node bound to a Node instance"
     },
     "scrubVal": {
      "!type": "fn(node: ?) -> +Y.Node",
      "!doc": "Checks Node return values and wraps DOM Nodes as Y.Node instances\nand DOM Collections / Arrays as Y.NodeList instances.\nOther return values just pass thru.  If undefined is returned (e.g. no return)\nthen the Node instance is returned for chainability."
     },
     "addMethod": {
      "!type": "fn(name: string, fn: fn(), context: +_yui.yui.Object) -> ?",
      "!doc": "Adds methods to the Y.Node prototype, routing through scrubVal."
     },
     "importMethod": {
      "!type": "fn(host: +_yui.yui.Object, name: string, altName: string, context: +_yui.yui.Object)",
      "!doc": "Imports utility methods to be added as Y.Node methods."
     },
     "one": {
      "!type": "fn(node: string) -> +Y.Node",
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
     "get": {
      "!type": "fn(node: string, doc: +_yui.node.Node)",
      "!doc": "Returns a single Node instance bound to the node or the\nfirst element matching the given selector."
     },
     "DOM_EVENTS": {
      "!type": "?",
      "!doc": "List of events that route to DOM events"
     },
     "plug": {
      "!type": "fn(plugin: fn(), config: +_yui.yui.Object)",
      "!doc": "Registers plugins to be instantiated at the class level (plugins\nwhich should be plugged into every instance of Node by default)."
     },
     "unplug": {
      "!type": "fn(plugin: fn())",
      "!doc": "Unregisters any class level plugins which have been registered by the Node"
     }
    }
   },
   "event_valuechange": {
    "ValueChange": {
     "!type": "fn()",
     "POLL_INTERVAL": {
      "!type": "number",
      "!doc": "Interval (in milliseconds) at which to poll for changes to the value of\nan element with one or more <code>valueChange</code> subscribers when the\nuser is likely to be interacting with it."
     },
     "TIMEOUT": {
      "!type": "number",
      "!doc": "Timeout (in milliseconds) after which to stop polling when there hasnt\nbeen any new activity (keypresses, mouse clicks, etc.) on an element."
     }
    }
   },
   "graphics": {
    "Matrix": {
     "!type": "fn() -> +_yui.graphics.Matrix",
     "prototype": {
      "multiple": {
       "!type": "fn(a: number, b: number, c: number, d: number, dx: number, dy: number)",
       "!doc": "Updates the matrix."
      },
      "applyCSSText": {
       "!type": "fn(val: string) -> ?",
       "!doc": "Parses a string and returns an array of transform arrays."
      },
      "init": {
       "!type": "fn(config: +_yui.yui.Object)",
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
      }
     }
    },
    "AttributeLite": {
     "!type": "fn() -> +_yui.graphics.AttributeLite",
     "prototype": {
      "addAttrs": {
       "!type": "fn(cfg: +_yui.yui.Object)",
       "!doc": "Initializes the attributes for a shape. If an attribute config is passed into the constructor of the host, \nthe initial values will be overwritten."
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
     "!type": "fn() -> +_yui.graphics.Drawing",
     "prototype": {
      "lineTo": {
       "!type": "fn(point1: number, point2: number)",
       "!doc": "Draws a line segment using the current line style from the current drawing position to the specified x and y coordinates."
      },
      "moveTo": {
       "!type": "fn(x: number, y: number)",
       "!doc": "Moves the current drawing position to specified x and y coordinates."
      },
      "curveTo": {
       "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number)",
       "!doc": "Draws a bezier curve."
      },
      "quadraticCurveTo": {
       "!type": "fn(cpx: number, cpy: number, x: number, y: number)",
       "!doc": "Draws a quadratic bezier curve."
      },
      "drawRect": {
       "!type": "fn(x: number, y: number, w: number, h: number)",
       "!doc": "Draws a rectangle."
      },
      "drawRoundRect": {
       "!type": "fn(x: number, y: number, w: number, h: number, ew: number, eh: number)",
       "!doc": "Draws a rectangle with rounded corners."
      },
      "end": {
       "!type": "fn()",
       "!doc": "Completes a drawing operation."
      },
      "clear": {
       "!type": "fn()",
       "!doc": "Clears the path."
      }
     }
    },
    "Shape": {
     "!type": "fn(cfg: +_yui.yui.Object) -> +_yui.graphics.Shape",
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
       "!type": "fn(Contains: +_yui.yui.Array)",
       "!doc": "Set the position of the shape in page coordinates, regardless of how the node is positioned."
      },
      "contains": {
       "!type": "fn(needle: +_yui.graphics.Shape) -> ?",
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
       "!doc": "An array of x, y values which indicates the transformOrigin in which to rotate the shape. Valid values range between 0 and 1 representing a \nfraction of the shapes corresponding bounding box dimension. The default value is [0.5, 0.5]."
      },
      "transform": {
       "!type": "string",
       "!doc": "<p>A string containing, in order, transform operations applied to the shape instance. The `transform` string can contain the following values:\n    \n   <dl>\n       <dt>rotate</dt><dd>Rotates the shape clockwise around it transformOrigin.</dd>\n       <dt>translate</dt><dd>Specifies a 2d translation.</dd>\n       <dt>skew</dt><dd>Skews the shape around the x-axis and y-axis.</dd>\n       <dt>scale</dt><dd>Specifies a 2d scaling operation.</dd>\n       <dt>translateX</dt><dd>Translates the shape along the x-axis.</dd>\n       <dt>translateY</dt><dd>Translates the shape along the y-axis.</dd>\n       <dt>skewX</dt><dd>Skews the shape around the x-axis.</dd>\n       <dt>skewY</dt><dd>Skews the shape around the y-axis.</dd>\n   </dl>\n</p>\n<p>Applying transforms through the transform attribute will reset the transform matrix and apply a new transform. The shape class also contains corresponding methods for each transform\nthat will apply the transform to the current matrix. The below code illustrates how you might use the `transform` attribute to instantiate a recangle with a rotation of 45 degrees.</p>\n           var myRect = new Y.Rect({\n               type:\"rect\",\n               width: 50,\n               height: 40,\n               transform: \"rotate(45)\"\n           };\n<p>The code below would apply `translate` and `rotate` to an existing shape.</p>\n   \n       myRect.set(\"transform\", \"translate(40, 50) rotate(45)\");"
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
       "!doc": "Contains information about the fill of the shape. \n <dl>\n     <dt>color</dt><dd>The color of the fill.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1.</dd>\n     <dt>type</dt><dd>Type of fill.\n         <dl>\n             <dt>solid</dt><dd>Solid single color fill. (default)</dd>\n             <dt>linear</dt><dd>Linear gradient fill.</dd>\n             <dt>radial</dt><dd>Radial gradient fill.</dd>\n         </dl>\n     </dd>\n </dl>\n <p>If a `linear` or `radial` is specified as the fill type. The following additional property is used:\n <dl>\n     <dt>stops</dt><dd>An array of objects containing the following properties:\n         <dl>\n             <dt>color</dt><dd>The color of the stop.</dd>\n             <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stop. The default value is 1. Note: No effect for IE 6 - 8</dd>\n             <dt>offset</dt><dd>Number between 0 and 1 indicating where the color stop is positioned.</dd> \n         </dl>\n     </dd>\n     <p>Linear gradients also have the following property:</p>\n     <dt>rotation</dt><dd>Linear gradients flow left to right by default. The rotation property allows you to change the flow by rotation. (e.g. A rotation of 180 would make the gradient pain from right to left.)</dd>\n     <p>Radial gradients have the following additional properties:</p>\n     <dt>r</dt><dd>Radius of the gradient circle.</dd>\n     <dt>fx</dt><dd>Focal point x-coordinate of the gradient.</dd>\n     <dt>fy</dt><dd>Focal point y-coordinate of the gradient.</dd>\n     <dt>cx</dt><dd>\n         <p>The x-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and `VMLShape` classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n     <dt>cy</dt><dd>\n         <p>The y-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and `VMLShape` classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n </dl>"
      },
      "stroke": {
       "!type": "+yui.Object",
       "!doc": "Contains information about the stroke of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the stroke.</dd>\n     <dt>weight</dt><dd>Number that indicates the width of the stroke.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stroke. The default value is 1.</dd>\n     <dt>dashstyle</dt>Indicates whether to draw a dashed stroke. When set to \"none\", a solid stroke is drawn. When set to an array, the first index indicates the\n length of the dash. The second index indicates the length of gap.\n     <dt>linecap</dt><dd>Specifies the linecap for the stroke. The following values can be specified:\n         <dl>\n             <dt>butt (default)</dt><dd>Specifies a butt linecap.</dd>\n             <dt>square</dt><dd>Specifies a sqare linecap.</dd>\n             <dt>round</dt><dd>Specifies a round linecap.</dd>\n         </dl>\n     </dd>\n     <dt>linejoin</dt><dd>Specifies a linejoin for the stroke. The following values can be specified:\n         <dl>\n             <dt>round (default)</dt><dd>Specifies that the linejoin will be round.</dd>\n             <dt>bevel</dt><dd>Specifies a bevel for the linejoin.</dd>\n             <dt>miter limit</dt><dd>An integer specifying the miter limit of a miter linejoin. If you want to specify a linejoin of miter, you simply specify the limit as opposed to having\n separate miter and miter limit values.</dd>\n         </dl>\n     </dd>\n </dl>"
      },
      "node": {
       "!type": "+HTMLElement",
       "!doc": "Dom node for the shape."
      },
      "graphic": {
       "!type": "+graphics.Graphic",
       "!doc": "Reference to the parent graphic instance"
      }
     }
    },
    "Circle": {
     "!type": "fn() -> +_yui.graphics.Circle",
     "prototype": {
      "!proto": "_yui.graphics.Shape.prototype",
      "radius": {
       "!type": "number",
       "!doc": "Radius of the circle"
      }
     }
    },
    "Path": {
     "!type": "fn() -> +_yui.graphics.Path",
     "prototype": {
      "!proto": "_yui.graphics.Shape.prototype",
      "path": {
       "!type": "string",
       "!doc": "Indicates the path used for the node."
      }
     }
    },
    "Graphic": {
     "!type": "fn() -> +_yui.graphics.Graphic",
     "prototype": {
      "render": {
       "!type": "fn(parentNode: +_yui.node.Node)",
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
       "!doc": "Determines how the size of instance is calculated. If true, the width and height are determined by the size of the contents.\nIf false, the width and height values are either explicitly set or determined by the size of the parent nodes dimensions."
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
       "!type": "fn(cfg: +_yui.yui.Object) -> ?",
       "!doc": "<p>Generates a shape instance by type. The method accepts an object that contains the shapes\ntype and attributes to be customized. For example, the code below would create a rectangle:</p>\n\n           var myRect = myGraphic.addShape({\n               type: \"rect\",\n               width: 40,\n               height: 30,\n               fill: {\n                   color: \"#9aa\"\n               },\n               stroke: {\n                   weight: 1,\n                   color: \"#000\"\n               }\n          });\n\n<p>The `Graphics` module includes a few basic shapes. More information on their creation \ncan be found in each shapes documentation:\n\n <ul>\n     <li><a href=\"Circle.html\">`Circle`</a></li>\n     <li><a href=\"Ellipse.html\">`Ellipse`</a></li>\n     <li><a href=\"Rect.html\">`Rect`</a></li>\n     <li><a href=\"Path.html\">`Path`</a></li>\n </ul>\n\n The `Graphics` module also allows for the creation of custom shapes. If a custom shape\n has been created, it can be instantiated with the `addShape` method as well. The attributes,\n required and optional, would need to be defined in the custom shape.\n\n           var myCustomShape = myGraphic.addShape({\n               type: Y.MyCustomShape,\n               width: 50,\n               height: 50,\n               fill: {\n                   color: \"#9aa\"\n               },\n               stroke: {\n                   weight: 1,\n                   color: \"#000\"\n               }\n           });"
      },
      "removeShape": {
       "!type": "fn(shape: +_yui.graphics.Shape)",
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
       "!type": "fn(point1: number, point2: number)",
       "!doc": "Draws a line segment using the current line style from the current drawing position to the specified x and y coordinates."
      },
      "moveTo": {
       "!type": "fn(x: number, y: number)",
       "!doc": "Moves the current drawing position to specified x and y coordinates."
      },
      "curveTo": {
       "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number)",
       "!doc": "Draws a bezier curve."
      },
      "quadraticCurveTo": {
       "!type": "fn(cpx: number, cpy: number, x: number, y: number)",
       "!doc": "Draws a quadratic bezier curve."
      },
      "drawRect": {
       "!type": "fn(x: number, y: number, w: number, h: number, ew: number, eh: number)",
       "!doc": "Draws a rectangle with rounded corners."
      },
      "end": {
       "!type": "fn()",
       "!doc": "Completes a drawing operation."
      },
      "clear": {
       "!type": "fn()",
       "!doc": "Clears the graphics object."
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
       "!doc": "Determines how the size of instance is calculated. If true, the width and height are determined by the size of the contents.\nIf false, the width and height values are either explicitly set or determined by the size of the parent nodes dimensions."
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
      "getXY": {
       "!type": "fn() -> ?",
       "!doc": "Gets the current position of the graphic instance in page coordinates."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Removes all nodes."
      },
      "addShape": {
       "!type": "fn(cfg: +_yui.yui.Object) -> ?",
       "!doc": "Generates a shape instance by type."
      },
      "removeShape": {
       "!type": "fn(shape: +_yui.graphics.Shape)",
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
       "!type": "fn(Contains: +_yui.yui.Array)",
       "!doc": "Set the position of the shape in page coordinates, regardless of how the node is positioned."
      },
      "contains": {
       "!type": "fn(needle: +_yui.graphics.CanvasShape) -> ?",
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
      "destroy": {
       "!type": "fn()",
       "!doc": "Destroys the instance."
      },
      "transformOrigin": {
       "!type": "+yui.Array",
       "!doc": "An array of x, y values which indicates the transformOrigin in which to rotate the shape. Valid values range between 0 and 1 representing a \nfraction of the shapes corresponding bounding box dimension. The default value is [0.5, 0.5]."
      },
      "transform": {
       "!type": "string",
       "!doc": "<p>A string containing, in order, transform operations applied to the shape instance. The `transform` string can contain the following values:\n    \n   <dl>\n       <dt>rotate</dt><dd>Rotates the shape clockwise around it transformOrigin.</dd>\n       <dt>translate</dt><dd>Specifies a 2d translation.</dd>\n       <dt>skew</dt><dd>Skews the shape around the x-axis and y-axis.</dd>\n       <dt>scale</dt><dd>Specifies a 2d scaling operation.</dd>\n       <dt>translateX</dt><dd>Translates the shape along the x-axis.</dd>\n       <dt>translateY</dt><dd>Translates the shape along the y-axis.</dd>\n       <dt>skewX</dt><dd>Skews the shape around the x-axis.</dd>\n       <dt>skewY</dt><dd>Skews the shape around the y-axis.</dd>\n   </dl>\n</p>\n<p>Applying transforms through the transform attribute will reset the transform matrix and apply a new transform. The shape class also contains corresponding methods for each transform\nthat will apply the transform to the current matrix. The below code illustrates how you might use the `transform` attribute to instantiate a recangle with a rotation of 45 degrees.</p>\n           var myRect = new Y.Rect({\n               type:\"rect\",\n               width: 50,\n               height: 40,\n               transform: \"rotate(45)\"\n           };\n<p>The code below would apply `translate` and `rotate` to an existing shape.</p>\n   \n       myRect.set(\"transform\", \"translate(40, 50) rotate(45)\");"
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
       "!doc": "Contains information about the fill of the shape. \n <dl>\n     <dt>color</dt><dd>The color of the fill.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1.</dd>\n     <dt>type</dt><dd>Type of fill.\n         <dl>\n             <dt>solid</dt><dd>Solid single color fill. (default)</dd>\n             <dt>linear</dt><dd>Linear gradient fill.</dd>\n             <dt>radial</dt><dd>Radial gradient fill.</dd>\n         </dl>\n     </dd>\n </dl>\n <p>If a `linear` or `radial` is specified as the fill type. The following additional property is used:\n <dl>\n     <dt>stops</dt><dd>An array of objects containing the following properties:\n         <dl>\n             <dt>color</dt><dd>The color of the stop.</dd>\n             <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stop. The default value is 1. Note: No effect for IE 6 - 8</dd>\n             <dt>offset</dt><dd>Number between 0 and 1 indicating where the color stop is positioned.</dd> \n         </dl>\n     </dd>\n     <p>Linear gradients also have the following property:</p>\n     <dt>rotation</dt><dd>Linear gradients flow left to right by default. The rotation property allows you to change the flow by rotation. (e.g. A rotation of 180 would make the gradient pain from right to left.)</dd>\n     <p>Radial gradients have the following additional properties:</p>\n     <dt>r</dt><dd>Radius of the gradient circle.</dd>\n     <dt>fx</dt><dd>Focal point x-coordinate of the gradient.</dd>\n     <dt>fy</dt><dd>Focal point y-coordinate of the gradient.</dd>\n </dl>\n <p>The corresponding `SVGShape` class implements the following additional properties.</p>\n <dl>\n     <dt>cx</dt><dd>\n         <p>The x-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n     </dd>\n     <dt>cy</dt><dd>\n         <p>The y-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n     </dd>\n </dl>\n <p>These properties are not currently implemented in `CanvasShape` or `VMLShape`.</p>"
      },
      "stroke": {
       "!type": "+yui.Object",
       "!doc": "Contains information about the stroke of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the stroke.</dd>\n     <dt>weight</dt><dd>Number that indicates the width of the stroke.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stroke. The default value is 1.</dd>\n     <dt>dashstyle</dt>Indicates whether to draw a dashed stroke. When set to \"none\", a solid stroke is drawn. When set to an array, the first index indicates the\n length of the dash. The second index indicates the length of gap.\n     <dt>linecap</dt><dd>Specifies the linecap for the stroke. The following values can be specified:\n         <dl>\n             <dt>butt (default)</dt><dd>Specifies a butt linecap.</dd>\n             <dt>square</dt><dd>Specifies a sqare linecap.</dd>\n             <dt>round</dt><dd>Specifies a round linecap.</dd>\n         </dl>\n     </dd>\n     <dt>linejoin</dt><dd>Specifies a linejoin for the stroke. The following values can be specified:\n         <dl>\n             <dt>round (default)</dt><dd>Specifies that the linejoin will be round.</dd>\n             <dt>bevel</dt><dd>Specifies a bevel for the linejoin.</dd>\n             <dt>miter limit</dt><dd>An integer specifying the miter limit of a miter linejoin. If you want to specify a linejoin of miter, you simply specify the limit as opposed to having\n separate miter and miter limit values.</dd>\n         </dl>\n     </dd>\n </dl>"
      },
      "graphic": {
       "!type": "+graphics.Graphic",
       "!doc": "Reference to the container Graphic."
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
       "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number)",
       "!doc": "Draws a bezier curve."
      },
      "quadraticCurveTo": {
       "!type": "fn(cpx: number, cpy: number, x: number, y: number)",
       "!doc": "Draws a quadratic bezier curve."
      },
      "drawRect": {
       "!type": "fn(x: number, y: number, w: number, h: number, ew: number, eh: number)",
       "!doc": "Draws a rectangle with rounded corners."
      },
      "lineTo": {
       "!type": "fn(point1: number, point2: number)",
       "!doc": "Draws a line segment using the current line style from the current drawing position to the specified x and y coordinates."
      },
      "moveTo": {
       "!type": "fn(x: number, y: number)",
       "!doc": "Moves the current drawing position to specified x and y coordinates."
      },
      "end": {
       "!type": "fn()",
       "!doc": "Completes a drawing operation."
      },
      "clear": {
       "!type": "fn()",
       "!doc": "Clears the path."
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
       "!doc": "Determines how the size of instance is calculated. If true, the width and height are determined by the size of the contents.\nIf false, the width and height values are either explicitly set or determined by the size of the parent nodes dimensions."
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
      "getXY": {
       "!type": "fn() -> ?",
       "!doc": "Gets the current position of the graphic instance in page coordinates."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Removes all nodes."
      },
      "addShape": {
       "!type": "fn(cfg: +_yui.yui.Object) -> ?",
       "!doc": "Generates a shape instance by type."
      },
      "removeShape": {
       "!type": "fn(shape: +_yui.graphics.Shape)",
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
       "!type": "fn(Contains: +_yui.yui.Array)",
       "!doc": "Set the position of the shape in page coordinates, regardless of how the node is positioned."
      },
      "contains": {
       "!type": "fn(needle: +_yui.graphics.SVGShape) -> ?",
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
       "!doc": "An array of x, y values which indicates the transformOrigin in which to rotate the shape. Valid values range between 0 and 1 representing a \nfraction of the shapes corresponding bounding box dimension. The default value is [0.5, 0.5]."
      },
      "transform": {
       "!type": "string",
       "!doc": "<p>A string containing, in order, transform operations applied to the shape instance. The `transform` string can contain the following values:\n    \n   <dl>\n       <dt>rotate</dt><dd>Rotates the shape clockwise around it transformOrigin.</dd>\n       <dt>translate</dt><dd>Specifies a 2d translation.</dd>\n       <dt>skew</dt><dd>Skews the shape around the x-axis and y-axis.</dd>\n       <dt>scale</dt><dd>Specifies a 2d scaling operation.</dd>\n       <dt>translateX</dt><dd>Translates the shape along the x-axis.</dd>\n       <dt>translateY</dt><dd>Translates the shape along the y-axis.</dd>\n       <dt>skewX</dt><dd>Skews the shape around the x-axis.</dd>\n       <dt>skewY</dt><dd>Skews the shape around the y-axis.</dd>\n   </dl>\n</p>\n<p>Applying transforms through the transform attribute will reset the transform matrix and apply a new transform. The shape class also contains corresponding methods for each transform\nthat will apply the transform to the current matrix. The below code illustrates how you might use the `transform` attribute to instantiate a recangle with a rotation of 45 degrees.</p>\n           var myRect = new Y.Rect({\n               type:\"rect\",\n               width: 50,\n               height: 40,\n               transform: \"rotate(45)\"\n           };\n<p>The code below would apply `translate` and `rotate` to an existing shape.</p>\n   \n       myRect.set(\"transform\", \"translate(40, 50) rotate(45)\");"
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
       "!doc": "Contains information about the fill of the shape. \n <dl>\n     <dt>color</dt><dd>The color of the fill.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1.</dd>\n     <dt>type</dt><dd>Type of fill.\n         <dl>\n             <dt>solid</dt><dd>Solid single color fill. (default)</dd>\n             <dt>linear</dt><dd>Linear gradient fill.</dd>\n             <dt>radial</dt><dd>Radial gradient fill.</dd>\n         </dl>\n     </dd>\n </dl>\n <p>If a `linear` or `radial` is specified as the fill type. The following additional property is used:\n <dl>\n     <dt>stops</dt><dd>An array of objects containing the following properties:\n         <dl>\n             <dt>color</dt><dd>The color of the stop.</dd>\n             <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stop. The default value is 1. Note: No effect for IE 6 - 8</dd>\n             <dt>offset</dt><dd>Number between 0 and 1 indicating where the color stop is positioned.</dd> \n         </dl>\n     </dd>\n     <p>Linear gradients also have the following property:</p>\n     <dt>rotation</dt><dd>Linear gradients flow left to right by default. The rotation property allows you to change the flow by rotation. (e.g. A rotation of 180 would make the gradient pain from right to left.)</dd>\n     <p>Radial gradients have the following additional properties:</p>\n     <dt>r</dt><dd>Radius of the gradient circle.</dd>\n     <dt>fx</dt><dd>Focal point x-coordinate of the gradient.</dd>\n     <dt>fy</dt><dd>Focal point y-coordinate of the gradient.</dd>\n     <dt>cx</dt><dd>\n         <p>The x-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and `VMLShape` classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n     <dt>cy</dt><dd>\n         <p>The y-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n         <p><strong>Note: </strong>Currently, this property is not implemented for corresponding `CanvasShape` and `VMLShape` classes which are used on Android or IE 6 - 8.</p>\n     </dd>\n </dl>"
      },
      "stroke": {
       "!type": "+yui.Object",
       "!doc": "Contains information about the stroke of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the stroke.</dd>\n     <dt>weight</dt><dd>Number that indicates the width of the stroke.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stroke. The default value is 1.</dd>\n     <dt>dashstyle</dt>Indicates whether to draw a dashed stroke. When set to \"none\", a solid stroke is drawn. When set to an array, the first index indicates the\n length of the dash. The second index indicates the length of gap.\n     <dt>linecap</dt><dd>Specifies the linecap for the stroke. The following values can be specified:\n         <dl>\n             <dt>butt (default)</dt><dd>Specifies a butt linecap.</dd>\n             <dt>square</dt><dd>Specifies a sqare linecap.</dd>\n             <dt>round</dt><dd>Specifies a round linecap.</dd>\n         </dl>\n     </dd>\n     <dt>linejoin</dt><dd>Specifies a linejoin for the stroke. The following values can be specified:\n         <dl>\n             <dt>round (default)</dt><dd>Specifies that the linejoin will be round.</dd>\n             <dt>bevel</dt><dd>Specifies a bevel for the linejoin.</dd>\n             <dt>miter limit</dt><dd>An integer specifying the miter limit of a miter linejoin. If you want to specify a linejoin of miter, you simply specify the limit as opposed to having\n separate miter and miter limit values.</dd>\n         </dl>\n     </dd>\n </dl>"
      },
      "node": {
       "!type": "+HTMLElement",
       "!doc": "Dom node for the shape."
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
       "!type": "fn(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number)",
       "!doc": "Draws a bezier curve."
      },
      "quadraticCurveTo": {
       "!type": "fn(cpx: number, cpy: number, x: number, y: number)",
       "!doc": "Draws a quadratic bezier curve."
      },
      "drawRect": {
       "!type": "fn(x: number, y: number, w: number, h: number, ew: number, eh: number)",
       "!doc": "Draws a rectangle with rounded corners."
      },
      "lineTo": {
       "!type": "fn(point1: number, point2: number)",
       "!doc": "Draws a line segment using the current line style from the current drawing position to the specified x and y coordinates."
      },
      "moveTo": {
       "!type": "fn(x: number, y: number)",
       "!doc": "Moves the current drawing position to specified x and y coordinates."
      },
      "end": {
       "!type": "fn()",
       "!doc": "Completes a drawing operation."
      },
      "clear": {
       "!type": "fn()",
       "!doc": "Clears the path."
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
       "!doc": "Determines how the size of instance is calculated. If true, the width and height are determined by the size of the contents.\nIf false, the width and height values are either explicitly set or determined by the size of the parent nodes dimensions."
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
      "getXY": {
       "!type": "fn() -> ?",
       "!doc": "Gets the current position of the graphic instance in page coordinates."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Removes all nodes."
      },
      "addShape": {
       "!type": "fn(cfg: +_yui.yui.Object) -> ?",
       "!doc": "Generates a shape instance by type."
      },
      "removeShape": {
       "!type": "fn(shape: +_yui.graphics.Shape)",
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
       "!type": "fn(Contains: +_yui.yui.Array)",
       "!doc": "Set the position of the shape in page coordinates, regardless of how the node is positioned."
      },
      "contains": {
       "!type": "fn(needle: +_yui.graphics.VMLShape) -> ?",
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
       "!type": "fn(optional?: +_yui.graphics.Matrix) -> ?",
       "!doc": "Returns the bounds for a shape.\n\nCalculates the a new bounding box from the original corner coordinates (base on size and position) and the transform matrix.\nThe calculated bounding box is used by the graphic instance to calculate its viewBox."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Destroys shape"
      },
      "transformOrigin": {
       "!type": "+yui.Array",
       "!doc": "An array of x, y values which indicates the transformOrigin in which to rotate the shape. Valid values range between 0 and 1 representing a \nfraction of the shapes corresponding bounding box dimension. The default value is [0.5, 0.5]."
      },
      "transform": {
       "!type": "string",
       "!doc": "<p>A string containing, in order, transform operations applied to the shape instance. The `transform` string can contain the following values:\n    \n   <dl>\n       <dt>rotate</dt><dd>Rotates the shape clockwise around it transformOrigin.</dd>\n       <dt>translate</dt><dd>Specifies a 2d translation.</dd>\n       <dt>skew</dt><dd>Skews the shape around the x-axis and y-axis.</dd>\n       <dt>scale</dt><dd>Specifies a 2d scaling operation.</dd>\n       <dt>translateX</dt><dd>Translates the shape along the x-axis.</dd>\n       <dt>translateY</dt><dd>Translates the shape along the y-axis.</dd>\n       <dt>skewX</dt><dd>Skews the shape around the x-axis.</dd>\n       <dt>skewY</dt><dd>Skews the shape around the y-axis.</dd>\n   </dl>\n</p>\n<p>Applying transforms through the transform attribute will reset the transform matrix and apply a new transform. The shape class also contains corresponding methods for each transform\nthat will apply the transform to the current matrix. The below code illustrates how you might use the `transform` attribute to instantiate a recangle with a rotation of 45 degrees.</p>\n           var myRect = new Y.Rect({\n               type:\"rect\",\n               width: 50,\n               height: 40,\n               transform: \"rotate(45)\"\n           };\n<p>The code below would apply `translate` and `rotate` to an existing shape.</p>\n   \n       myRect.set(\"transform\", \"translate(40, 50) rotate(45)\");"
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
       "!doc": "Contains information about the fill of the shape. \n <dl>\n     <dt>color</dt><dd>The color of the fill.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1.</dd>\n     <dt>type</dt><dd>Type of fill.\n         <dl>\n             <dt>solid</dt><dd>Solid single color fill. (default)</dd>\n             <dt>linear</dt><dd>Linear gradient fill.</dd>\n             <dt>radial</dt><dd>Radial gradient fill.</dd>\n         </dl>\n     </dd>\n </dl>\n <p>If a `linear` or `radial` is specified as the fill type. The following additional property is used:\n <dl>\n     <dt>stops</dt><dd>An array of objects containing the following properties:\n         <dl>\n             <dt>color</dt><dd>The color of the stop.</dd>\n             <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stop. The default value is 1. Note: No effect for IE 6 - 8</dd>\n             <dt>offset</dt><dd>Number between 0 and 1 indicating where the color stop is positioned.</dd> \n         </dl>\n     </dd>\n     <p>Linear gradients also have the following property:</p>\n     <dt>rotation</dt><dd>Linear gradients flow left to right by default. The rotation property allows you to change the flow by rotation. (e.g. A rotation of 180 would make the gradient pain from right to left.)</dd>\n     <p>Radial gradients have the following additional properties:</p>\n     <dt>r</dt><dd>Radius of the gradient circle.</dd>\n     <dt>fx</dt><dd>Focal point x-coordinate of the gradient.</dd>\n     <dt>fy</dt><dd>Focal point y-coordinate of the gradient.</dd>\n </dl>\n <p>The corresponding `SVGShape` class implements the following additional properties.</p>\n <dl>\n     <dt>cx</dt><dd>\n         <p>The x-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n     </dd>\n     <dt>cy</dt><dd>\n         <p>The y-coordinate of the center of the gradient circle. Determines where the color stop begins. The default value 0.5.</p>\n     </dd>\n </dl>\n <p>These properties are not currently implemented in `CanvasShape` or `VMLShape`.</p>"
      },
      "stroke": {
       "!type": "+yui.Object",
       "!doc": "Contains information about the stroke of the shape.\n <dl>\n     <dt>color</dt><dd>The color of the stroke.</dd>\n     <dt>weight</dt><dd>Number that indicates the width of the stroke.</dd>\n     <dt>opacity</dt><dd>Number between 0 and 1 that indicates the opacity of the stroke. The default value is 1.</dd>\n     <dt>dashstyle</dt>Indicates whether to draw a dashed stroke. When set to \"none\", a solid stroke is drawn. When set to an array, the first index indicates the\n length of the dash. The second index indicates the length of gap.\n     <dt>linecap</dt><dd>Specifies the linecap for the stroke. The following values can be specified:\n         <dl>\n             <dt>butt (default)</dt><dd>Specifies a butt linecap.</dd>\n             <dt>square</dt><dd>Specifies a sqare linecap.</dd>\n             <dt>round</dt><dd>Specifies a round linecap.</dd>\n         </dl>\n     </dd>\n     <dt>linejoin</dt><dd>Specifies a linejoin for the stroke. The following values can be specified:\n         <dl>\n             <dt>round (default)</dt><dd>Specifies that the linejoin will be round.</dd>\n             <dt>bevel</dt><dd>Specifies a bevel for the linejoin.</dd>\n             <dt>miter limit</dt><dd>An integer specifying the miter limit of a miter linejoin. If you want to specify a linejoin of miter, you simply specify the limit as opposed to having\n separate miter and miter limit values.</dd>\n         </dl>\n     </dd>\n </dl>"
      },
      "node": {
       "!type": "+HTMLElement",
       "!doc": "Dom node for the shape."
      },
      "graphic": {
       "!type": "+graphics.Graphic",
       "!doc": "Reference to the container Graphic."
      }
     }
    }
   },
   "highlight": {
    "Highlight": {
     "!type": "fn()",
     "allFold": {
      "!type": "fn(haystack: string, needles: string, options?: +_yui.yui.Object) -> string",
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
      "!type": "fn(haystack: string, needles: string, options?: +_yui.yui.Object) -> string",
      "!doc": "Highlights all occurrences in the _haystack_ string of the items in the\n_needles_ array, regardless of where they occur. The returned string will\nhave all HTML characters escaped except for the highlighting markup."
     },
     "allCase": {
      "!type": "fn(haystack: string, needles: string, options?: +_yui.yui.Object) -> string",
      "!doc": "Same as `all()`, but case-sensitive by default."
     },
     "start": {
      "!type": "fn(haystack: string, needles: string, options?: +_yui.yui.Object) -> string",
      "!doc": "Highlights _needles_ that occur at the start of _haystack_. The returned\nstring will have all HTML characters escaped except for the highlighting\nmarkup."
     },
     "startCase": {
      "!type": "fn(haystack: string, needles: string) -> string",
      "!doc": "Same as `start()`, but case-sensitive by default."
     },
     "words": {
      "!type": "fn(haystack: string, needles: string, options?: +_yui.yui.Object) -> string",
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
       "!type": "fn(state: +_yui.yui.Object, options: +_yui.yui.Object) -> !this",
       "!doc": "Adds a state entry with new values for the specified keys. By default,\nthe new state will be merged into the existing state, and new values will\noverride existing values. Specifying a <code>null</code> or\n<code>undefined</code> value will cause that key to be removed from the\nnew state entry."
      },
      "addValue": {
       "!type": "fn(key: string, value: string, options: +_yui.yui.Object) -> !this",
       "!doc": "Adds a state entry with a new value for a single key. By default, the new\nvalue will be merged into the existing state values, and will override an\nexisting value with the same key if there is one. Specifying a\n<code>null</code> or <code>undefined</code> value will cause the key to\nbe removed from the new state entry."
      },
      "get": {
       "!type": "fn(key: string) -> +yui.Object",
       "!doc": "Returns the current value of the state parameter specified by <i>key</i>,\nor an object hash of key/value pairs for all current state parameters if\nno key is specified."
      },
      "replace": {
       "!type": "fn(state: +_yui.yui.Object, options: +_yui.yui.Object) -> !this",
       "!doc": "Same as <code>add()</code> except that a new browser history entry will\nnot be created. Instead, the current history entry will be replaced with\nthe new state."
      },
      "replaceValue": {
       "!type": "fn(key: string, value: string, options: +_yui.yui.Object) -> !this",
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
      "!type": "fn(params: +_yui.yui.Object) -> string",
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
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.history.HistoryHTML5",
     "prototype": {
      "!proto": "_yui.history.HistoryBase.prototype"
     },
     "SRC_POPSTATE": {
      "!type": "string",
      "!doc": "Constant used to identify state changes originating from\n<code>popstate</code> events."
     }
    }
   },
   "imageloader": {
    "ImgLoadGroup": {
     "!type": "fn() -> +_yui.imageloader.ImgLoadGroup",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
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
       "!type": "fn(obj: +_yui.yui.Object, type: string) -> !this",
       "!doc": "Adds a trigger to the group. Arguments are passed to <code>Y.on</code>."
      },
      "addCustomTrigger": {
       "!type": "fn(name: string, obj: +_yui.yui.Object) -> !this",
       "!doc": "Adds a custom event trigger to the group."
      },
      "registerImage": {
       "!type": "fn(arg: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Registers an image with the group.\nArguments are passed through to a <code>Y.ImgLoadImgObj</code> constructor; see that class attribute documentation for detailed information. \"<code>domId</code>\" is a required attribute."
      },
      "fetch": {
       "!type": "fn()",
       "!doc": "Displays the images in the group.\nThis method is called when a trigger fires or the time limit expires; it shouldnt be called externally, but is not private in the rare event that it needs to be called immediately."
      }
     }
    },
    "ImgLoadImgObj": {
     "!type": "fn() -> +_yui.imageloader.ImgLoadImgObj",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
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
   "json": {
    "IO": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.json.IO",
     "prototype": {
      "start": {
       "!type": "fn(o: +_yui.yui.Object, c: +_yui.yui.Object) -> ?",
       "!doc": "Fires event \"io:start\" and creates, fires a\ntransaction-specific start event, if config.on.start is\ndefined."
      },
      "complete": {
       "!type": "fn(o: +_yui.yui.Object, c: +_yui.yui.Object) -> ?",
       "!doc": "Fires event \"io:complete\" and creates, fires a\ntransaction-specific \"complete\" event, if config.on.complete is\ndefined."
      },
      "end": {
       "!type": "fn(o: +_yui.yui.Object, c: +_yui.yui.Object) -> ?",
       "!doc": "Fires event \"io:end\" and creates, fires a\ntransaction-specific \"end\" event, if config.on.end is\ndefined."
      },
      "success": {
       "!type": "fn(o: +_yui.yui.Object, c: +_yui.yui.Object) -> ?",
       "!doc": "Fires event \"io:success\" and creates, fires a\ntransaction-specific \"success\" event, if config.on.success is\ndefined."
      },
      "failure": {
       "!type": "fn(o: +_yui.yui.Object, c: +_yui.yui.Object) -> ?",
       "!doc": "Fires event \"io:failure\" and creates, fires a\ntransaction-specific \"failure\" event, if config.on.failure is\ndefined."
      },
      "setHeader": {
       "!type": "fn(name: string, value: string)",
       "!doc": "Stores default client headers for all transactions. If a label is\npassed with no value argument, the header will be deleted."
      },
      "send": {
       "!type": "fn(uri: string, config: +_yui.yui.Object, id: number) -> +yui.Object",
       "!doc": "Requests a transaction. `send()` is implemented as `Y.io()`.  Each\ntransaction may include a configuration object.  Its properties are:\n\n<dl>\n  <dt>method</dt>\n    <dd>HTTP method verb (e.g., GET or POST). If this property is not\n        not defined, the default value will be GET.</dd>\n\n  <dt>data</dt>\n    <dd>This is the name-value string that will be sent as the\n    transaction data. If the request is HTTP GET, the data become\n    part of querystring. If HTTP POST, the data are sent in the\n    message body.</dd>\n\n  <dt>xdr</dt>\n    <dd>Defines the transport to be used for cross-domain requests.\n    By setting this property, the transaction will use the specified\n    transport instead of XMLHttpRequest. The properties of the\n    transport object are:\n    <dl>\n      <dt>use</dt>\n        <dd>The transport to be used: flash or native</dd>\n      <dt>dataType</dt>\n        <dd>Set the value to XML if that is the expected response\n        content type.</dd>\n    </dl></dd>\n\n  <dt>form</dt>\n    <dd>Form serialization configuration object.  Its properties are:\n    <dl>\n      <dt>id</dt>\n        <dd>Node object or id of HTML form</dd>\n      <dt>useDisabled</dt>\n        <dd>`true` to also serialize disabled form field values\n        (defaults to `false`)</dd>\n    </dl></dd>\n\n  <dt>on</dt>\n    <dd>Assigns transaction event subscriptions. Available events are:\n    <dl>\n      <dt>start</dt>\n        <dd>Fires when a request is sent to a resource.</dd>\n      <dt>complete</dt>\n        <dd>Fires when the transaction is complete.</dd>\n      <dt>success</dt>\n        <dd>Fires when the HTTP response status is within the 2xx\n        range.</dd>\n      <dt>failure</dt>\n        <dd>Fires when the HTTP response status is outside the 2xx\n       range, if an exception occurs, if the transation is aborted,\n        or if the transaction exceeds a configured `timeout`.</dd>\n      <dt>end</dt>\n        <dd>Fires at the conclusion of the transaction\n           lifecycle, after `success` or `failure`.</dd>\n    </dl>\n\n    <p>Callback functions for `start` and `end` receive the id of the\n    transaction as a first argument. For `complete`, `success`, and\n    `failure`, callbacks receive the id and the response object\n    (usually the XMLHttpRequest instance).  If the `arguments`\n    property was included in the configuration object passed to\n    `Y.io()`, the configured data will be passed to all callbacks as\n    the last argument.</p>\n    </dd>\n\n  <dt>sync</dt>\n    <dd>Pass `true` to make a same-domain transaction synchronous.\n    <strong>CAVEAT</strong>: This will negatively impact the user\n    experience. Have a <em>very</em> good reason if you intend to use\n    this.</dd>\n\n  <dt>context</dt>\n    <dd>The \"`this\" object for all configured event handlers. If a\n    specific context is needed for individual callbacks, bind the\n    callback to a context using `Y.bind()`.</dd>\n\n  <dt>headers</dt>\n    <dd>Object map of transaction headers to send to the server. The\n    object keys are the header names and the values are the header\n    values.</dd>\n\n  <dt>timeout</dt>\n    <dd>Millisecond threshold for the transaction before being\n    automatically aborted.</dd>\n\n  <dt>arguments</dt>\n    <dd>User-defined data passed to all registered event handlers.\n    This value is available as the second argument in the \"start\" and\n    \"end\" event handlers. It is the third argument in the \"complete\",\n    \"success\", and \"failure\" event handlers. <strong>Be sure to quote\n    this property name in the transaction configuration as\n    \"arguments\" is a reserved word in JavaScript</strong> (e.g.\n    `Y.io({ ..., \"arguments\": stuff })`).</dd>\n</dl>"
      },
      "xdr": {
       "!type": "fn(uri: string, o: +_yui.yui.Object, c: +_yui.yui.Object)",
       "!doc": "Method for accessing the transports interface for making a\ncross-domain transaction."
      },
      "xdrResponse": {
       "!type": "fn(e: string, o: +_yui.yui.Object, c: +_yui.yui.Object) -> +yui.Object",
       "!doc": "Response controller for cross-domain requests when using the\nFlash transport or IE8s XDomainRequest object."
      },
      "transport": {
       "!type": "fn(o: +_yui.yui.Object)",
       "!doc": "Initializes the desired transport."
      }
     },
     "queue": {
      "!type": "fn() -> +yui.Object",
      "!doc": "Method for queueing a transaction before the request is sent to the\nresource, to ensure sequential processing."
     },
     "promote": {
      "!type": "fn()",
      "!doc": "Method for promoting a transaction to the top of the queue."
     },
     "delay": {
      "!type": "number",
      "!doc": "Delay value to calling the Flash transport, in the\nevent io.swf has not finished loading.  Once the E_XDR_READY\nevent is fired, this value will be set to 0."
     },
     "io": {
      "!type": "fn(u: string, c: +_yui.yui.Object) -> ?",
      "!doc": "Method for requesting a transaction."
     }
    }
   },
   "transition": {
    "JSON": {
     "!type": "fn()",
     "parse": {
      "!type": "fn(s: string, reviver: fn()) -> +MIXED",
      "!doc": "Parse a JSON string, returning the native JavaScript representation."
     },
     "useNativeParse": {
      "!type": "bool",
      "!doc": "Leverage native JSON parse if the browser has a native implementation.\nIn general, this is a good idea.  See the Known Issues section in the\nJSON user guide for caveats.  The default value is true for browsers with\nnative JSON support."
     },
     "useNativeStringify": {
      "!type": "bool",
      "!doc": "Leverage native JSON stringify if the browser has a native\nimplementation.  In general, this is a good idea.  See the Known Issues\nsection in the JSON user guide for caveats.  The default value is true\nfor browsers with native JSON support."
     },
     "dateToString": {
      "!type": "fn(d: +Date) -> string",
      "!doc": "Serializes a Date instance as a UTC date string.  Used internally by\nstringify.  Override this method if you need Dates serialized in a\ndifferent format."
     },
     "stringify": {
      "!type": "fn(o: +MIXED, w: +_yui.yui.Array, ind: number) -> string",
      "!doc": "<p>Converts an arbitrary value to a JSON string representation.</p>\n\n<p>Objects with cyclical references will trigger an exception.</p>\n\n<p>If a whitelist is provided, only matching object keys will be\nincluded.  Alternately, a replacer function may be passed as the\nsecond parameter.  This function is executed on every value in the\ninput, and its return value will be used in place of the original value.\nThis is useful to serialize specialized objects or class instances.</p>\n\n<p>If a positive integer or non-empty string is passed as the third\nparameter, the output will be formatted with carriage returns and\nindentation for readability.  If a String is passed (such as \"\\t\") it\nwill be used once for each indentation level.  If a number is passed,\nthat number of spaces will be used.</p>"
     },
     "charCacheThreshold": {
      "!type": "number",
      "!doc": "<p>Number of occurrences of a special character within a single call to\nstringify that should trigger promotion of that character to a dedicated\npreprocess step for future calls.  This is only used in environments\nthat dont support native JSON, or when useNativeStringify is set to\nfalse.</p>\n\n<p>So, if set to 50 and an object is passed to stringify that includes\nstrings containing the special character \\x07 more than 50 times,\nsubsequent calls to stringify will process object strings through a\nfaster serialization path for \\x07 before using the generic, slower,\nreplacement process for all special characters.</p>\n\n<p>To prime the preprocessor cache, set this value to 1, then call\n<code>Y.JSON.stringify(\"<em>(all special characters to\ncache)</em>\");</code>, then return this setting to a more conservative\nvalue.</p>\n\n<p>Special characters \\ \" \\b \\t \\n \\f \\r are already cached.</p>"
     }
    }
   },
   "jsonp": {
    "JSONPRequest": {
     "!type": "fn()",
     "prototype": {
      "undefined": {
       "!type": "fn()"
      },
      "_defaultCallback": {
       "!type": "fn(url: string, config: +_yui.yui.Object) -> fn()",
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
     "!type": "fn(o: +_yui.yui.Object) -> +_yui.loader.Loader",
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
       "!doc": "Max url length for combo urls.  The default is 2048. This is the URL\nlimit for the Yahoo! hosted combo servers.  If consuming\na different combo service that has a different URL limit\nit is possible to override this default by supplying\nthe maxURLLength config option.  The config option will\nonly take effect if lower than the default."
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
       "!doc": "A filter to apply to result urls.  This filter will modify the default\npath for all modules.  The default path for the YUI library is the\nminified version of the files (e.g., event-min.js).  The filter property\ncan be a predefined filter or a custom filter.  The valid predefined\nfilters are:\n<dl>\n <dt>DEBUG</dt>\n <dd>Selects the debug versions of the library (e.g., event-debug.js).\n     This option will automatically include the Logger widget</dd>\n <dt>RAW</dt>\n <dd>Selects the non-minified version of the library (e.g., event.js).\n </dd>\n</dl>\nYou can also define a custom filter, which must be an object literal\ncontaining a search expression and a replace string:\n<pre>\n myFilter: &#123;\n     searchExp: \"-min\\\\.js\",\n     replaceStr: \"-debug.js\"\n &#125;\n</pre>"
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
       "!type": "?",
       "!doc": "Provides the information used to skin the skinnable components.\nThe following skin definition would result in skin1 and skin2\nbeing loaded for calendar (if calendar was requested), and\nsam for all other skinnable components:\n\n  <code>\n  skin: {\n\n     // The default skin, which is automatically applied if not\n     // overriden by a component-specific skin definition.\n     // Change this in to apply a different skin globally\n     defaultSkin: sam,\n\n     // This is combined with the loader base property to get\n     // the default root directory for a skin. ex:\n     // http://yui.yahooapis.com/2.3.0/build/assets/skins/sam/\n     base: assets/skins/,\n\n     // Any component-specific overrides can be specified here,\n     // making it possible to load different skins for different\n     // components.  It is possible to load more than one skin\n     // for a given component as well.\n     overrides: {\n         calendar: [skin1, skin2]\n     }\n  }\n  </code>"
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
      "loaded": {
       "!type": "string",
       "!doc": "Set when beginning to compute the dependency tree.\nComposed of what YUI reports to be loaded combined\nwith what has been loaded by any instance on the page\nwith the version number specified in the metadata."
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
      "_config": {
       "!type": "fn(o: +_yui.yui.Object)",
       "!doc": "Apply a new config to the Loader instance"
      },
      "formatSkin": {
       "!type": "fn(skin: string, mod: string) -> string",
       "!doc": "Returns the skin module name for the specified skin name.  If a\nmodule name is supplied, the returned skin module name is\nspecific to the module passed in."
      },
      "addGroup": {
       "!type": "fn(o: +_yui.yui.Object, name: string)",
       "!doc": "Add a new module group\n<dl>\n  <dt>name:</dt>      <dd>required, the group name</dd>\n  <dt>base:</dt>      <dd>The base dir for this module group</dd>\n  <dt>root:</dt>      <dd>The root path to add to each combo\n  resource path</dd>\n  <dt>combine:</dt>   <dd>combo handle</dd>\n  <dt>comboBase:</dt> <dd>combo service base path</dd>\n  <dt>modules:</dt>   <dd>the group of modules</dd>\n</dl>"
      },
      "addModule": {
       "!type": "fn(o: +_yui.yui.Object, name: string) -> +yui.Object",
       "!doc": "Add a new module to the component metadata.\n<dl>\n    <dt>name:</dt>       <dd>required, the component name</dd>\n    <dt>type:</dt>       <dd>required, the component type (js or css)\n    </dd>\n    <dt>path:</dt>       <dd>required, the path to the script from\n    \"base\"</dd>\n    <dt>requires:</dt>   <dd>array of modules required by this\n    component</dd>\n    <dt>optional:</dt>   <dd>array of optional modules for this\n    component</dd>\n    <dt>supersedes:</dt> <dd>array of the modules this component\n    replaces</dd>\n    <dt>after:</dt>      <dd>array of modules the components which, if\n    present, should be sorted above this one</dd>\n    <dt>after_map:</dt>  <dd>faster alternative to after -- supply\n    a hash instead of an array</dd>\n    <dt>rollup:</dt>     <dd>the number of superseded modules required\n    for automatic rollup</dd>\n    <dt>fullpath:</dt>   <dd>If fullpath is specified, this is used\n    instead of the configured base + path</dd>\n    <dt>skinnable:</dt>  <dd>flag to determine if skin assets should\n    automatically be pulled in</dd>\n    <dt>submodules:</dt> <dd>a hash of submodules</dd>\n    <dt>group:</dt>      <dd>The group the module belongs to -- this\n    is set automatically when it is added as part of a group\n    configuration.</dd>\n    <dt>lang:</dt>\n      <dd>array of BCP 47 language tags of languages for which this\n          module has localized resource bundles,\n          e.g., [\"en-GB\",\"zh-Hans-CN\"]</dd>\n    <dt>condition:</dt>\n      <dd>Specifies that the module should be loaded automatically if\n          a condition is met.  This is an object with up to three fields:\n          [trigger] - the name of a module that can trigger the auto-load\n          [test] - a function that returns true when the module is to be\n          loaded.\n          [when] - specifies the load order of the conditional module\n          with regard to the position of the trigger module.\n          This should be one of three values: before, after, or\n          instead.  The default is after.\n      </dd>\n    <dt>testresults:</dt><dd>a hash of test results from Y.Features.all()</dd>\n</dl>"
      },
      "require": {
       "!type": "fn(what: [string])",
       "!doc": "Add a requirement for one or more module"
      },
      "filterRequires": {
       "!type": "fn(r: +_yui.yui.Array) -> +yui.Array",
       "!doc": "Explodes the required array to remove aliases and replace them with real modules"
      },
      "getRequires": {
       "!type": "fn(mod: +_yui.yui.Object) -> +yui.Array",
       "!doc": "Returns an object containing properties for all modules required\nin order to load the requested module"
      },
      "getProvides": {
       "!type": "fn(name: string) -> +yui.Object",
       "!doc": "Returns a hash of module names the supplied module satisfies."
      },
      "calculate": {
       "!type": "fn(o: +_yui.yui.Object, type: string)",
       "!doc": "Calculates the dependency tree, the result is stored in the sorted\nproperty."
      },
      "_addLangPack": {
       "!type": "fn(lang: string, m: +_yui.yui.Object, packName: string) -> +yui.Object",
       "!doc": "Creates a \"psuedo\" package for languages provided in the lang array"
      },
      "getLangPackName": {
       "!type": "fn(lang: string, mname: string) -> string",
       "!doc": "Builds a module name for a language pack"
      },
      "getModule": {
       "!type": "fn(mname: string) -> +yui.Object",
       "!doc": "Gets the loader meta data for the requested module"
      },
      "partial": {
       "!type": "fn()",
       "!doc": "(Unimplemented)"
      },
      "_insert": {
       "!type": "fn(source: +_yui.yui.Object, o: +_yui.yui.Object, type: string, skipcalc?: bool)",
       "!doc": "Handles the actual insertion of script/link tags"
      },
      "insert": {
       "!type": "fn(o: +_yui.yui.Object, type: string)",
       "!doc": "inserts the requested modules and their dependencies.\n<code>type</code> can be \"js\" or \"css\".  Both script and\ncss are inserted if type is not provided."
      },
      "loadNext": {
       "!type": "fn(mname: string)",
       "!doc": "Executed every time a module is loaded, and if we are in a load\ncycle, we attempt to load the next script.  Public so that it\nis possible to call this if using a method other than\nY.register to determine when scripts are fully loaded"
      },
      "resolve": {
       "!type": "fn(calc?: bool, s?: +_yui.yui.Array) -> +yui.Object",
       "!doc": "Returns an Object hash of file arrays built from `loader.sorted` or from an arbitrary list of sorted modules."
      }
     }
    }
   },
   "align_plugin": {
    "Plugin": {
     "Align": {
      "!type": "fn(User: +_yui.yui.Object)",
      "prototype": {
       "to": {
        "!type": "fn(region: string, regionPoint: string, point: string, resize: bool)",
        "!doc": "Aligns node with a point on another node or region.\nPossible alignment points are:\n<dl>\n     <dt>tl</dt>\n     <dd>top left</dd>\n     <dt>tr</dt>\n     <dd>top right</dd>\n     <dt>bl</dt>\n     <dd>bottom left</dd>\n     <dt>br</dt>\n     <dd>bottom right</dd>\n     <dt>tc</dt>\n     <dd>top center</dd>\n     <dt>bc</dt>\n     <dd>bottom center</dd>\n     <dt>rc</dt>\n     <dd>right center</dd>\n     <dt>lc</dt>\n     <dd>left center</dd>\n     <dt>cc</dt>\n     <dd>center center</dd>\n</dl>"
       },
       "center": {
        "!type": "fn(region: +_yui.node.Node)",
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
   "shim_plugin": {
    "Plugin": {
     "Shim": {
      "!type": "fn(User: +_yui.yui.Object)",
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
   "node_flick": {
    "Plugin": {
     "Flick": {
      "!type": "fn(config: +_yui.yui.Object)",
      "prototype": {
       "deceleration": {
        "!type": "?",
        "!doc": "Drag coefficent for inertial scrolling. The closer to 1 this\nvalue is, the less friction during scrolling."
       },
       "bounce": {
        "!type": "number",
        "!doc": "Drag coefficient for intertial scrolling at the upper\nand lower boundaries of the scrollview. Set to 0 to \ndisable \"rubber-banding\"."
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
       "duration": {
        "!type": "number",
        "!doc": "The custom duration to apply to the flick animation. By default,\nthe animation duration is controlled by the deceleration factor."
       },
       "easing": {
        "!type": "string",
        "!doc": "The custom transition easing to use for the flick animation. If not\nprovided defaults to internally to Flick.EASING, or Flick.SNAP_EASING based\non whether or not were animating the flick or bounce step."
       },
       "initializer": {
        "!type": "fn(config: +_yui.yui.Object)",
        "!doc": "The initializer lifecycle implementation."
       },
       "setBounds": {
        "!type": "fn()",
        "!doc": "Sets the min/max boundaries for the flick animation,\nbased on the boundingBox dimensions."
       }
      },
      "NAME": {
       "!type": "string",
       "!doc": "The NAME of the Flick class. Used to prefix events generated\nby the plugin."
      },
      "NS": {
       "!type": "string",
       "!doc": "The namespace for the plugin. This will be the property on the node, which will \nreference the plugin instance, when its plugged in."
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
        "!type": "fn(index: number, index: +_yui.node.Node)",
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
        "!doc": "String representing the value for the <code>title</code> \nattribute for the shim used to prevent <code>&#60;select&#62;</code> elements \nfrom poking through menus in IE 6."
       },
       "SHIM_TEMPLATE": {
        "!type": "string",
        "!doc": "String representing the HTML used to create the \n<code>&#60;iframe&#62;</code> shim used to prevent \n<code>&#60;select&#62;</code> elements from poking through menus in IE 6."
       },
       "useARIA": {
        "!type": "bool",
        "!doc": "Boolean indicating if use of the WAI-ARIA Roles and States should be \nenabled for the menu."
       },
       "autoSubmenuDisplay": {
        "!type": "bool",
        "!doc": "Boolean indicating if submenus are automatically made visible when the \nuser mouses over the menus items."
       },
       "submenuShowDelay": {
        "!type": "number",
        "!doc": "Number indicating the time (in milliseconds) that should expire before a \nsubmenu is made visible when the user mouses over the menus label."
       },
       "submenuHideDelay": {
        "!type": "number",
        "!doc": "Number indicating the time (in milliseconds) that should expire before a \nsubmenu is hidden when the user mouses out of a menu label heading in the \ndirection of a submenu."
       },
       "mouseOutHideDelay": {
        "!type": "number",
        "!doc": "Number indicating the time (in milliseconds) that should expire before a \nsubmenu is hidden when the user mouses out of it."
       }
      }
     }
    }
   },
   "plugin": {
    "Plugin": {
     "Base": {
      "!type": "fn(config: +_yui.yui.Object)",
      "prototype": {
       "!proto": "_yui.base.Base.prototype",
       "host": {
        "!type": "+event.Plugin.Host",
        "!doc": "The plugins host object."
       },
       "initializer": {
        "!type": "fn(config: +_yui.yui.Object)",
        "!doc": "Initializer lifecycle implementation."
       },
       "destructor": {
        "!type": "fn()",
        "!doc": "Destructor lifecycle implementation.\n\nRemoves any event listeners or injected methods applied by the Plugin"
       },
       "doBefore": {
        "!type": "fn(strMethod: string, fn: fn(), context: +_yui.yui.Object) -> +event_custom.EventHandle",
        "!doc": "Listens for the \"on\" moment of events fired by the host, \nor injects code \"before\" a given method on the host."
       },
       "doAfter": {
        "!type": "fn(strMethod: string, fn: fn(), context: +_yui.yui.Object) -> +event_custom.EventHandle",
        "!doc": "Listens for the \"after\" moment of events fired by the host, \nor injects code \"after\" a given method on the host."
       },
       "onHostEvent": {
        "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object) -> +event_custom.EventHandle",
        "!doc": "Listens for the \"on\" moment of events fired by the host object.\n\nListeners attached through this method will be detached when the plugin is unplugged."
       },
       "afterHostEvent": {
        "!type": "fn(type: string, fn: fn(), context: +_yui.yui.Object) -> +event_custom.EventHandle",
        "!doc": "Listens for the \"after\" moment of events fired by the host object.\n\nListeners attached through this method will be detached when the plugin is unplugged."
       },
       "beforeHostMethod": {
        "!type": "fn(method: string, fn: fn(), context: +_yui.yui.Object) -> +event_custom.EventHandle",
        "!doc": "Injects a function to be executed before a given method on host object.\n\nThe function will be detached when the plugin is unplugged."
       },
       "afterHostMethod": {
        "!type": "fn(method: string, fn: fn(), context: +_yui.yui.Object) -> +event_custom.EventHandle",
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
   "profiler": {
    "Profiler": {
     "!type": "fn()",
     "clear": {
      "!type": "fn(name: string) -> +Void",
      "!doc": "Removes all report data from the profiler."
     },
     "getOriginal": {
      "!type": "fn(name: string) -> fn()",
      "!doc": "Returns the uninstrumented version of a function/object."
     },
     "instrument": {
      "!type": "fn(name: string, method: fn()) -> fn()",
      "!doc": "Instruments a method to have profiling calls."
     },
     "pause": {
      "!type": "fn(name: string) -> +Void",
      "!doc": "Pauses profiling information for a given name."
     },
     "start": {
      "!type": "fn(name: string) -> +Void",
      "!doc": "Start profiling information for a given name. The name cannot be the name\nof a registered function or object. This is used to start timing for a\nparticular block of code rather than instrumenting the entire function."
     },
     "stop": {
      "!type": "fn(name: string) -> +Void",
      "!doc": "Stops profiling information for a given name."
     },
     "getAverage": {
      "!type": "fn(name: string) -> number",
      "!doc": "Returns the average amount of time (in milliseconds) that the function\nwith the given name takes to execute."
     },
     "getCallCount": {
      "!type": "fn(name: string) -> number",
      "!doc": "Returns the number of times that the given function has been called."
     },
     "getMax": {
      "!type": "fn(name: string) -> number",
      "!doc": "Returns the maximum amount of time (in milliseconds) that the function\nwith the given name takes to execute."
     },
     "getMin": {
      "!type": "fn(name: string) -> number",
      "!doc": "Returns the minimum amount of time (in milliseconds) that the function\nwith the given name takes to execute."
     },
     "getFunctionReport": {
      "!type": "fn() -> +yui.Object",
      "!doc": "Returns an object containing profiling data for a single function.\nThe object has an entry for min, max, avg, calls, and points)."
     },
     "getReport": {
      "!type": "fn() -> +yui.Object",
      "!doc": "Returns an object containing profiling data for a single function.\nThe object has an entry for min, max, avg, calls, and points)."
     },
     "getFullReport": {
      "!type": "fn() -> +yui.Object",
      "!doc": "Returns an object containing profiling data for all of the functions \nthat were profiled. The object has an entry for each function and \nreturns all information (min, max, average, calls, etc.) for each\nfunction."
     },
     "registerConstructor": {
      "!type": "fn(name: string, owner: +_yui.yui.Object) -> +Void",
      "!doc": "Sets up a constructor for profiling, including all properties and methods on the prototype."
     },
     "registerFunction": {
      "!type": "fn(name: string, owner: +_yui.yui.Object, registerPrototype: bool) -> +Void",
      "!doc": "Sets up a function for profiling. It essentially overwrites the function with one\nthat has instrumentation data. This method also creates an entry for the function\nin the profile report. The original function is stored on the container object."
     },
     "registerObject": {
      "!type": "fn(name: string, owner: +_yui.yui.Object, recurse: bool) -> +Void",
      "!doc": "Sets up an object for profiling. It takes the object and looks for functions.\nWhen a function is found, registerMethod() is called on it. If set to recrusive\nmode, it will also setup objects found inside of this object for profiling, \nusing the same methodology."
     },
     "unregisterFunction": {
      "!type": "fn(name: string) -> +Void",
      "!doc": "Removes function from profiling. Reverses the registerFunction() method."
     },
     "unregisterObject": {
      "!type": "fn(name: string, recurse: bool) -> +Void",
      "!doc": "Unregisters an object for profiling. It takes the object and looks for functions.\nWhen a function is found, unregisterMethod() is called on it. If set to recrusive\nmode, it will also unregister objects found inside of this object, \nusing the same methodology."
     }
    }
   },
   "io": {
    "QueryString": {
     "!type": "fn()",
     "stringify": {
      "!type": "fn(obj: +Variant, cfg: +_yui.yui.Object, name: string)",
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
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.recordset.Recordset",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
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
       "!type": "fn(oData: +_yui.queue_promote.Record, index?: number) -> +recordset.Recordset",
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
       "!type": "fn(data: +_yui.queue_promote.Record, index?: number) -> +recordset.Recordset",
       "!doc": "Updates the recordset with the new records passed in. Overwrites existing\nrecords when updating the index with the new records."
      },
      "_setRecords": {
       "!type": "fn(items: [+_yui.queue_promote.Record]) -> [+queue_promote.Record]",
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
       "!doc": "Collection of all the hashTables created by the plugin. \nThe individual tables can be accessed by the key they are hashing against."
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
   "aui_resize": {
    "Resize": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_resize.Resize",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
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
       "!doc": "Stores the <a href=\"Resize.html#config_node\">node</a>\nsurrounding information retrieved from\n<a href=\"Resize.html#method__getBoxSurroundingInfo\">_getBoxSurroundingInfo</a>."
      },
      "wrapperSurrounding": {
       "!type": "+yui.Object",
       "!doc": "Stores the <a href=\"Resize.html#config_wrapper\">wrapper</a>\nsurrounding information retrieved from\n<a href=\"Resize.html#method__getBoxSurroundingInfo\">_getBoxSurroundingInfo</a>."
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
      },
      "proxy": {
       "!type": "bool",
       "!doc": "Resize a proxy element instead of the real element."
      },
      "proxyEl": {
       "!type": "string",
       "!doc": "The Resize proxy element."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Resize."
     },
     "Resize.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Resize.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Resize."
     }
    }
   },
   "resize": {
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
       "!proto": "_yui.aui_resize.Resize.prototype",
       "NAME": {
        "!type": "string",
        "!doc": "resize-plugin"
       },
       "NS": {
        "!type": "string",
        "!doc": "The Resize instance will be placed on the Node instance under the resize namespace. It can be accessed via Node.resize or Widget.resize;"
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
      "!type": "fn() -> +_yui.resize.Plugin.ResizeProxy",
      "prototype": {
       "!proto": "_yui.plugin.Plugin.Base.prototype",
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
      "!type": "fn() -> +_yui.scrollview_list.Plugin.ScrollViewList",
      "prototype": {
       "!proto": "_yui.plugin.Plugin.Base.prototype",
       "isAttached": {
        "!type": "bool",
        "!doc": "Specifies whether the list elements (the immediate <ul>s and the immediate <li>s inside those <ul>s) have class names attached to them or not"
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
      "!type": "fn() -> +_yui.scrollview_paginator.Plugin.ScrollViewPaginator",
      "prototype": {
       "!proto": "_yui.plugin.Plugin.Base.prototype",
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
       },
       "initializer": {
        "!type": "fn()",
        "!doc": "Designated initializer"
       },
       "next": {
        "!type": "fn()",
        "!doc": "Scroll to the next page in the scrollview, with animation"
       },
       "prev": {
        "!type": "fn()",
        "!doc": "Scroll to the previous page in the scrollview, with animation"
       },
       "scrollTo": {
        "!type": "fn(index: number, duration: number, easing: string)",
        "!doc": "Scroll to a given page in the scrollview, with animation."
       },
       "snapToCurrent": {
        "!type": "fn(duration: number, easing: string)",
        "!doc": "Snaps the scrollview to the currently selected page"
       }
      },
      "NAME": {
       "!type": "string",
       "!doc": "The identity of the plugin"
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
   "scrollview_scrollbars": {
    "Plugin": {
     "ScrollViewScrollbars": {
      "!type": "fn() -> +_yui.scrollview_scrollbars.Plugin.ScrollViewScrollbars",
      "prototype": {
       "!proto": "_yui.plugin.Plugin.Base.prototype",
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
       "_hostScrollEnd": {
        "!type": "fn(e: +Event.Facade)",
        "!doc": "Handler for the scrollEnd event fired by the host. Default implementation flashes the scrollbar"
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
    }
   },
   "scrollview_base": {
    "ScrollView": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.scrollview_base.ScrollView",
     "prototype": {
      "!proto": "_yui.widget.Widget.prototype",
      "initializer": {
       "!type": "fn()",
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
       "!type": "fn(x: number, y: number, duration: number, easing: string)",
       "!doc": "Scroll the element to a given xy coordinate"
      },
      "lastScrolledAmt": {
       "!type": "number",
       "!doc": "Contains the distance (postive or negative) in pixels by which the scrollview was last scrolled. This is useful when\nsetting up click listeners on the scrollview content, which on mouse based devices are always fired, even after a\ndrag/flick. \n\n<p>Touch based devices dont currently fire a click event, if the finger has been moved (beyond a threshold) so this check isnt required,\nif working in a purely touch based environment</p>"
      },
      "scrollY": {
       "!type": "number",
       "!doc": "The scroll position in the y-axis"
      },
      "scrollX": {
       "!type": "number",
       "!doc": "The scroll position in the x-axis"
      },
      "deceleration": {
       "!type": "?",
       "!doc": "Drag coefficent for inertial scrolling. The closer to 1 this\nvalue is, the less friction during scrolling."
      },
      "bounce": {
       "!type": "number",
       "!doc": "Drag coefficient for intertial scrolling at the upper\nand lower boundaries of the scrollview. Set to 0 to \ndisable \"rubber-banding\"."
      },
      "flick": {
       "!type": "+yui.Object",
       "!doc": "The minimum distance and/or velocity which define a flick. Can be set to false,\nto disable flick support (note: drag support is enabled/disabled separately)"
      },
      "drag": {
       "!type": "bool",
       "!doc": "Enable/Disable dragging the ScrollView content (note: flick support is enabled/disabled separately)"
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
      "!doc": "The interval used when animating the flick"
     },
     "EASING": {
      "!type": "string",
      "!doc": "The default easing used when animating the flick"
     },
     "SNAP_EASING": {
      "!type": "string",
      "!doc": "The default easing to use when animating the bounce snap back."
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
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.slider.SliderBase",
     "prototype": {
      "!proto": "_yui.widget.Widget.prototype",
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
      "value": {
       "!type": "number",
       "!doc": "The value associated with the thumbs current position on the\nrail. Defaults to the value inferred from the thumbs current\nposition. Specifying value in the constructor will move the\nthumb to the position that corresponds to the supplied value."
      }
     }
    }
   },
   "sortable": {
    "Sortable": {
     "!type": "fn() -> +_yui.sortable.Sortable",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "delegate": {
       "!type": "+dd.DD.Delegate",
       "!doc": "A reference to the DD.Delegate instance."
      },
      "plug": {
       "!type": "fn() -> !this",
       "!doc": "Passthrough to the DD.Delegate syncTargets method."
      },
      "join": {
       "!type": "fn(Sortable: ?, String: ?) -> !this",
       "!doc": "Join this Sortable with another Sortable instance.\n<ul>\n  <li>full: Exchange nodes with both lists.</li>\n  <li>inner: Items can go into this list from the joined list.</li>\n  <li>outer: Items can go out of the joined list into this list.</li>\n  <li>none: Removes the join.</li>\n</ul>"
      },
      "getOrdering": {
       "!type": "fn(Function: ?) -> ?",
       "!doc": "A custom callback to allow a user to extract some sort of id or any other data from the node to use in the \"ordering list\" and then that data should be returned from the callback."
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
      "!type": "fn(node: +_yui.node.Node, test: string)",
      "!doc": "Test a Node or a selector for the container"
     },
     "getSortable": {
      "!type": "fn(node: string)",
      "!doc": "Get a Sortable instance back from a node reference or a selector string."
     },
     "reg": {
      "!type": "fn(Sortable: ?)",
      "!doc": "Register a Sortable instance with the singleton to allow lookups later."
     },
     "unreg": {
      "!type": "fn(Sortable: ?)",
      "!doc": "Unregister a Sortable instance with the singleton."
     }
    }
   },
   "stylesheet": {
    "StyleSheet": {
     "!type": "fn(seed: string, name: string) -> +_yui.stylesheet.StyleSheet",
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
       "!type": "fn(sel: string, css: +_yui.yui.Object) -> !this",
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
      "!type": "fn(css: +_yui.yui.Object, cssText: string) -> string",
      "!doc": "<p>Converts an object literal of style properties and values into a string\nof css text.  This can then be assigned to el.style.cssText.</p>\n\n<p>The optional second parameter is a cssText string representing the\nstarting state of the style prior to alterations.  This is most often\nextracted from the eventual targets current el.style.cssText.</p>"
     },
     "register": {
      "!type": "fn(name: string, sheet: +_yui.stylesheet.StyleSheet) -> bool",
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
       "!type": "fn(s: string, o: +_yui.yui.Object, f: fn(), recurse: bool) -> string",
       "!doc": "Does {placeholder} substitution on a string.  The object passed as the\nsecond parameter provides values to replace the {placeholder}s.\n{placeholder} token names must match property names of the object.  For\nexample\n\n`var greeting = Y.substitute(\"Hello, {who}!\", { who: \"World\" });`\n\n{placeholder} tokens that are undefined on the object map will be left in\ntact (leaving unsightly \"{placeholder}\"s in the output string).  If your\nreplacement strings *should* include curly braces, use `{LBRACE}` and\n`{RBRACE}` in your object map string value.\n\nIf a function is passed as a third argument, it will be called for each\n{placeholder} found.  The {placeholder} name is passed as the first value\nand the value from the object map is passed as the second.  If the\n{placeholder} contains a space, the first token will be used to identify\nthe object map property and the remainder will be passed as a third\nargument to the function.  See below for an example.\n\nIf the value in the object map for a given {placeholder} is an object and\nthe `dump` module is loaded, the replacement value will be the string\nresult of calling `Y.dump(...)` with the object as input.  Include a\nnumeric second token in the {placeholder} to configure the depth of the call\nto `Y.dump(...)`, e.g. \"{someObject 2}\".  See the\n<a href=\"../classes/YUI.html#method_dump\">`dump`</a> method for details."
      }
     }
    }
   },
   "swf": {
    "SWF": {
     "!type": "fn(id: string, swfURL: string, p_oAttributes: +_yui.yui.Object) -> +_yui.swf.SWF",
     "prototype": {
      "callSWF": {
       "!type": "fn(func: string, args: +_yui.yui.Object)",
       "!doc": "Calls a specific function exposed by the SWFs\nExternalInterface."
      },
      "toString": {
       "!type": "fn() -> string",
       "!doc": "Public accessor to the unique name of the SWF instance."
      }
     }
    }
   },
   "swfdetect": {
    "Tab": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.swfdetect.Tab",
     "prototype": {
      "!proto": "_yui.widget.Widget.prototype",
      "getFlashVersion": {
       "!type": "fn()",
       "!doc": "Returns the version of either the Flash Player plugin (in Mozilla/WebKit/Opera browsers),\nor the Flash Player ActiveX control (in IE), as a String of the form \"MM.mm.rr\", where\nMM is the major version, mm is the minor version, and rr is the revision."
      },
      "isFlashVersionAtLeast": {
       "!type": "fn(flashMajor: number, flashMinor: number, flashRev: number) -> bool",
       "!doc": "Checks whether the version of the Flash player installed on the users machine is greater\nthan or equal to the one specified. If it is, this method returns true; it is false otherwise."
      },
      "triggerEvent": {
       "!type": "string"
      },
      "label": {
       "!type": "string"
      },
      "content": {
       "!type": "string"
      },
      "panelNode": {
       "!type": "+Y.Node"
      }
     }
    }
   },
   "test": {
    "ArrayAssert": {
     "!type": "fn()",
     "contains": {
      "!type": "fn(needle: +_yui.yui.Object, haystack: +_yui.yui.Array, message: string)",
      "!doc": "Asserts that a value is present in an array. This uses the triple equals \nsign so no type cohersion may occur."
     },
     "containsItems": {
      "!type": "fn(needles: [+_yui.yui.Object], haystack: +_yui.yui.Array, message: string)",
      "!doc": "Asserts that a set of values are present in an array. This uses the triple equals \nsign so no type cohersion may occur. For this assertion to pass, all values must\nbe found."
     },
     "containsMatch": {
      "!type": "fn(matcher: fn(), haystack: +_yui.yui.Array, message: string)",
      "!doc": "Asserts that a value matching some condition is present in an array. This uses\na function to determine a match."
     },
     "doesNotContain": {
      "!type": "fn(needle: +_yui.yui.Object, haystack: +_yui.yui.Array, message: string)",
      "!doc": "Asserts that a value is not present in an array. This uses the triple equals \nAsserts that a value is not present in an array. This uses the triple equals \nsign so no type cohersion may occur."
     },
     "doesNotContainItems": {
      "!type": "fn(needles: [+_yui.yui.Object], haystack: +_yui.yui.Array, message: string)",
      "!doc": "Asserts that a set of values are not present in an array. This uses the triple equals \nsign so no type cohersion may occur. For this assertion to pass, all values must\nnot be found."
     },
     "doesNotContainMatch": {
      "!type": "fn(matcher: fn(), haystack: +_yui.yui.Array, message: string)",
      "!doc": "Asserts that no values matching a condition are present in an array. This uses\na function to determine a match."
     },
     "indexOf": {
      "!type": "fn(needle: +_yui.yui.Object, haystack: +_yui.yui.Array, index: number, message: string)",
      "!doc": "Asserts that the given value is contained in an array at the specified index.\nThis uses the triple equals sign so no type cohersion will occur."
     },
     "itemsAreEqual": {
      "!type": "fn(expected: +_yui.yui.Array, actual: +_yui.yui.Array, message: string)",
      "!doc": "Asserts that the values in an array are equal, and in the same position,\nas values in another array. This uses the double equals sign\nso type cohersion may occur. Note that the array objects themselves\nneed not be the same for this test to pass."
     },
     "itemsAreEquivalent": {
      "!type": "fn(expected: +_yui.yui.Array, actual: +_yui.yui.Array, comparator: fn(), message: string) -> +Void",
      "!doc": "Asserts that the values in an array are equivalent, and in the same position,\nas values in another array. This uses a function to determine if the values\nare equivalent. Note that the array objects themselves\nneed not be the same for this test to pass."
     },
     "isEmpty": {
      "!type": "fn(actual: +_yui.yui.Array, message: string)",
      "!doc": "Asserts that an array is empty."
     },
     "isNotEmpty": {
      "!type": "fn(actual: +_yui.yui.Array, message: string)",
      "!doc": "Asserts that an array is not empty."
     },
     "itemsAreSame": {
      "!type": "fn(expected: +_yui.yui.Array, actual: +_yui.yui.Array, message: string)",
      "!doc": "Asserts that the values in an array are the same, and in the same position,\nas values in another array. This uses the triple equals sign\nso no type cohersion will occur. Note that the array objects themselves\nneed not be the same for this test to pass."
     },
     "lastIndexOf": {
      "!type": "fn(needle: +_yui.yui.Object, haystack: +_yui.yui.Array, index: number, message: string)",
      "!doc": "Asserts that the given value is contained in an array at the specified index,\nstarting from the back of the array.\nThis uses the triple equals sign so no type cohersion will occur."
     }
    },
    "Assert": {
     "!type": "fn()",
     "fail": {
      "!type": "fn(message: string)",
      "!doc": "Forces an assertion error to occur."
     },
     "areEqual": {
      "!type": "fn(expected: +_yui.yui.Object, actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is equal to another. This uses the double equals sign\nso type cohersion may occur."
     },
     "areNotEqual": {
      "!type": "fn(unexpected: +_yui.yui.Object, actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is not equal to another. This uses the double equals sign\nso type cohersion may occur."
     },
     "areNotSame": {
      "!type": "fn(unexpected: +_yui.yui.Object, actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is not the same as another. This uses the triple equals sign\nso no type cohersion may occur."
     },
     "areSame": {
      "!type": "fn(expected: +_yui.yui.Object, actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is the same as another. This uses the triple equals sign\nso no type cohersion may occur."
     },
     "isFalse": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is false. This uses the triple equals sign\nso no type cohersion may occur."
     },
     "isTrue": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is true. This uses the triple equals sign\nso no type cohersion may occur."
     },
     "isNaN": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is not a number."
     },
     "isNotNaN": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is not the special NaN value."
     },
     "isNotNull": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is not null. This uses the triple equals sign\nso no type cohersion may occur."
     },
     "isNotUndefined": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is not undefined. This uses the triple equals sign\nso no type cohersion may occur."
     },
     "isNull": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is null. This uses the triple equals sign\nso no type cohersion may occur."
     },
     "isUndefined": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is undefined. This uses the triple equals sign\nso no type cohersion may occur."
     },
     "isArray": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is an array."
     },
     "isBoolean": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is a Boolean."
     },
     "isFunction": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is a function."
     },
     "isInstanceOf": {
      "!type": "fn(expected: fn(), actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is an instance of a particular object. This may return\nincorrect results when comparing objects from one frame to constructors in\nanother frame. For best results, dont use in a cross-frame manner."
     },
     "isNumber": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is a number."
     },
     "isObject": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is an object."
     },
     "isString": {
      "!type": "fn(actual: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is a string."
     },
     "isTypeOf": {
      "!type": "fn(expectedType: string, actualValue: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a value is of a particular type."
     },
     "Error": {
      "!type": "fn(message: string) -> +_yui.test.Assert.Error",
      "prototype": {
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
       },
       "valueOf": {
        "!type": "fn() -> string",
        "!doc": "Returns a primitive value version of the error. Same as toString()."
       }
      }
     },
     "ComparisonFailure": {
      "!type": "fn(message: string, expected: +_yui.yui.Object, actual: +_yui.yui.Object) -> +_yui.test.Assert.ComparisonFailure",
      "prototype": {
       "!proto": "_yui.test.Assert.Error.prototype",
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
       "toString": {
        "!type": "fn() -> string",
        "!doc": "Returns a fully formatted error for an assertion failure. This message\nprovides information about the expected and actual values."
       }
      }
     },
     "UnexpectedValue": {
      "!type": "fn(message: string, unexpected: +_yui.yui.Object) -> +_yui.test.Assert.UnexpectedValue",
      "prototype": {
       "!proto": "_yui.test.Assert.Error.prototype",
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
        "!doc": "Returns a fully formatted error for an assertion failure. The message\ncontains information about the unexpected value that was encountered."
       }
      }
     },
     "ShouldFail": {
      "!type": "fn(message: string) -> +_yui.test.Assert.ShouldFail",
      "prototype": {
       "!proto": "_yui.test.Assert.Error.prototype",
       "name": {
        "!type": "string",
        "!doc": "The name of the error that occurred."
       }
      }
     },
     "ShouldError": {
      "!type": "fn(message: string) -> +_yui.test.Assert.ShouldError",
      "prototype": {
       "!proto": "_yui.test.Assert.Error.prototype",
       "name": {
        "!type": "string",
        "!doc": "The name of the error that occurred."
       }
      }
     },
     "UnexpectedError": {
      "!type": "fn(cause: +Error) -> +_yui.test.Assert.UnexpectedError",
      "prototype": {
       "!proto": "_yui.test.Assert.Error.prototype",
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
     }
    },
    "Coverage": {
     "Format": {
      "!type": "fn()",
      "JSON": {
       "!type": "fn(coverage: +_yui.yui.Object) -> string",
       "!doc": "Returns the coverage report in JSON format. This is the straight\nJSON representation of the native coverage report."
      },
      "XdebugJSON": {
       "!type": "fn(coverage: +_yui.yui.Object) -> string",
       "!doc": "Returns the coverage report in a JSON format compatible with\nXdebug. See <a href=\"http://www.xdebug.com/docs/code_coverage\">Xdebug Documentation</a>\nfor more information. Note: function coverage is not available\nin this format."
      }
     }
    },
    "DateAssert": {
     "!type": "fn()",
     "datesAreEqual": {
      "!type": "fn(expected: +Date, actual: +Date, message: string)",
      "!doc": "Asserts that a dates month, day, and year are equal to another dates."
     },
     "timesAreEqual": {
      "!type": "fn(expected: +Date, actual: +Date, message: string)",
      "!doc": "Asserts that a dates hour, minutes, and seconds are equal to another dates."
     }
    },
    "Mock": {
     "!type": "fn(template: +_yui.yui.Object) -> +_yui.test.Mock",
     "expect": {
      "!type": "fn(mock: +_yui.yui.Object, expectation: +_yui.yui.Object) -> +Void",
      "!doc": "Assigns an expectation to a mock object. This is used to create\nmethods and properties on the mock object that are monitored for\ncalls and changes, respectively."
     },
     "verify": {
      "!type": "fn(mock: +_yui.yui.Object) -> +Void",
      "!doc": "Verifies that all expectations of a mock object have been met and\nthrows an assertion error if not."
     },
     "Value": {
      "!type": "fn(method: fn(), originalArgs: +_yui.yui.Array, message: string) -> +_yui.test.Mock.Value",
      "Any": {
       "!type": "fn()",
       "!doc": "Mock argument validator that accepts any value as valid."
      },
      "Boolean": {
       "!type": "fn()",
       "!doc": "Mock argument validator that accepts only Boolean values as valid."
      },
      "Number": {
       "!type": "fn()",
       "!doc": "Mock argument validator that accepts only numeric values as valid."
      },
      "String": {
       "!type": "fn()",
       "!doc": "Mock argument validator that accepts only String values as valid."
      },
      "Object": {
       "!type": "fn()",
       "!doc": "Mock argument validator that accepts only non-null objects values as valid."
      },
      "Function": {
       "!type": "fn()",
       "!doc": "Mock argument validator that accepts onlyfunctions as valid."
      }
     }
    },
    "ObjectAssert": {
     "!type": "fn()",
     "hasKey": {
      "!type": "fn(propertyName: string, object: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that an object has a property with the given name. The property may exist either\non the object instance or in its prototype chain. The same as testing \n\"property\" in object."
     },
     "hasKeys": {
      "!type": "fn(properties: +_yui.yui.Array, object: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that an object has all properties of a reference object. The properties may exist either\non the object instance or in its prototype chain. The same as testing \n\"property\" in object."
     },
     "ownsKey": {
      "!type": "fn(propertyName: string, object: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that a property with the given name exists on an object instance (not on its prototype)."
     },
     "ownsKeys": {
      "!type": "fn(properties: +_yui.yui.Array, object: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that all properties exist on an object instance (not on its prototype)."
     },
     "ownsNoKeys": {
      "!type": "fn(object: +_yui.yui.Object, message: string)",
      "!doc": "Asserts that an object owns no properties."
     }
    },
    "Test": {
     "Case": {
      "!type": "fn(template: ?) -> +_yui.test.Test.Case",
      "prototype": {
       "name": {
        "!type": "string",
        "!doc": "Name for the test case."
       },
       "resume": {
        "!type": "fn(segment: fn()) -> +Void",
        "!doc": "Resumes a paused test and runs the given function."
       },
       "wait": {
        "!type": "fn(segment: fn(), delay: number) -> +Void",
        "!doc": "Causes the test case to wait a specified amount of time and then\ncontinue executing the given code."
       },
       "setUp": {
        "!type": "fn() -> +Void",
        "!doc": "Function to run before each test is executed."
       },
       "tearDown": {
        "!type": "fn() -> +Void",
        "!doc": "Function to run after each test is executed."
       }
      }
     },
     "Wait": {
      "!type": "fn(segment: fn(), delay: number) -> +_yui.test.Test.Wait",
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
     },
     "Format": {
      "!type": "fn()",
      "JSON": {
       "!type": "fn(result: +_yui.yui.Object) -> string",
       "!doc": "Returns test results formatted as a JSON string. Requires JSON utility."
      },
      "XML": {
       "!type": "fn(result: +_yui.yui.Object) -> string",
       "!doc": "Returns test results formatted as an XML string."
      },
      "JUnitXML": {
       "!type": "fn(result: +_yui.yui.Object) -> string",
       "!doc": "Returns test results formatted in JUnit XML format."
      },
      "TAP": {
       "!type": "fn(result: +_yui.yui.Object) -> string",
       "!doc": "Returns test results formatted in TAP format.\nFor more information, see <a href=\"http://testanything.org/\">Test Anything Protocol</a>."
      }
     },
     "Manager": {
      "!type": "fn()",
      "TEST_PAGE_BEGIN_EVENT": {
       "!type": "string",
       "!doc": "Constant for the testpagebegin custom event"
      },
      "TEST_PAGE_COMPLETE_EVENT": {
       "!type": "string",
       "!doc": "Constant for the testpagecomplete custom event"
      },
      "TEST_MANAGER_BEGIN_EVENT": {
       "!type": "string",
       "!doc": "Constant for the testmanagerbegin custom event"
      },
      "TEST_MANAGER_COMPLETE_EVENT": {
       "!type": "string",
       "!doc": "Constant for the testmanagercomplete custom event"
      },
      "load": {
       "!type": "fn() -> +Void",
       "!doc": "Signals that a test page has been loaded. This should be called from\nwithin the test page itself to notify the TestManager that it is ready."
      },
      "setPages": {
       "!type": "fn(pages: [string]) -> +Void",
       "!doc": "Sets the pages to be loaded."
      },
      "start": {
       "!type": "fn() -> +Void",
       "!doc": "Begins the process of running the tests."
      },
      "stop": {
       "!type": "fn() -> +Void",
       "!doc": "Stops the execution of tests."
      }
     },
     "Reporter": {
      "!type": "fn(url: string, format: fn()) -> +_yui.test.Test.Reporter",
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
        "!type": "fn() -> +Void",
        "!doc": "Removes all previous defined fields."
       },
       "destroy": {
        "!type": "fn() -> +Void",
        "!doc": "Cleans up the memory associated with the TestReporter, removing DOM elements\nthat were created."
       },
       "report": {
        "!type": "fn(results: +_yui.yui.Object) -> +Void",
        "!doc": "Sends the report to the server."
       }
      }
     },
     "Runner": {
      "!type": "fn()",
      "disableLogging": {
       "!type": "fn() -> +Void",
       "!doc": "Disable logging via Y.log(). Test output will not be visible unless\nTestRunner events are subscribed to."
      },
      "enableLogging": {
       "!type": "fn() -> +Void",
       "!doc": "Enable logging via Y.log(). Test output is published and can be read via\nlogreader."
      },
      "prototype": {
       "getName": {
        "!type": "fn() -> string",
        "!doc": "Retrieves the name of the current result set."
       },
       "setName": {
        "!type": "fn(name: string) -> +Void",
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
       "!type": "fn(testObject: ?) -> +Void",
       "!doc": "Adds a test suite or test case to the list of test objects to run."
      },
      "clear": {
       "!type": "fn() -> +Void",
       "!doc": "Removes all test objects from the runner."
      },
      "isWaiting": {
       "!type": "fn() -> bool",
       "!doc": "Indicates if the TestRunner is waiting for a test to resume"
      },
      "resume": {
       "!type": "fn(segment: fn()) -> +Void",
       "!doc": "Resumes the TestRunner after wait() was called."
      },
      "run": {
       "!type": "fn(oldMode: bool) -> +Void",
       "!doc": "Runs the test suite."
      }
     },
     "Suite": {
      "!type": "fn(data: string) -> +_yui.test.Test.Suite",
      "prototype": {
       "name": {
        "!type": "string",
        "!doc": "The name of the test suite."
       },
       "add": {
        "!type": "fn(testObject: +_yui.test.Test.Suite) -> +Void",
        "!doc": "Adds a test suite or test case to the test suite."
       },
       "setUp": {
        "!type": "fn() -> +Void",
        "!doc": "Function to run before each test is executed."
       },
       "tearDown": {
        "!type": "fn() -> +Void",
        "!doc": "Function to run after each test is executed."
       }
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
       "!type": "fn(haystack: +_yui.yui.Array, func: fn()) -> +yui.Array",
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
       "!type": "fn(string: string, options: +_yui.yui.Object) -> +yui.Array",
       "!doc": "Splits the specified string into an array of individual words."
      },
      "getUniqueWords": {
       "!type": "fn(string: string, options: +_yui.yui.Object) -> +yui.Array",
       "!doc": "Returns an array containing only unique words from the specified string.\nFor example, the string <code>foo bar baz foo</code> would result in\nthe array <code>[foo, bar, baz]</code>."
      },
      "isWordBoundary": {
       "!type": "fn(string: string, index: number) -> bool",
       "!doc": "<p>\nReturns <code>true</code> if there is a word boundary between the\nspecified character index and the next character index (or the end of the\nstring).\n</p>\n\n<p>\nNote that there are always word breaks at the beginning and end of a\nstring, so <code>isWordBoundary(, 0)</code> and\n<code>isWordBoundary(a, 0)</code> will both return <code>true</code>.\n</p>"
      }
     }
    }
   },
   "uploader": {
    "Uploader": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.uploader.Uploader",
     "prototype": {
      "!proto": "Y.Base.prototype",
      "removeFile": {
       "!type": "fn(fileID: string) -> +yui.Object",
       "!doc": "Removes a specific file from the upload queue."
      },
      "clearFileList": {
       "!type": "fn() -> bool",
       "!doc": "Clears the upload queue."
      },
      "upload": {
       "!type": "fn(fileID: string, url: string, method: string, postVars: +_yui.yui.Object, postFileVarName: string) -> bool",
       "!doc": "Starts the upload of a specific file."
      },
      "uploadThese": {
       "!type": "fn(fileIDs: +_yui.yui.Array, url: string, method: string, postVars: +_yui.yui.Object, postFileVarName: string)",
       "!doc": "Starts the upload of a set of files, as specified in the first argument. \nThe upload queue is managed automatically."
      },
      "uploadAll": {
       "!type": "fn(url: string, method: string, postVars: +_yui.yui.Object, postFileVarName: string)",
       "!doc": "Starts the upload of the files in the upload queue. \nThe upload queue is managed automatically."
      },
      "cancel": {
       "!type": "fn(fileID: string)",
       "!doc": "Cancels the upload of a specific file, if currently in progress."
      },
      "enable": {
       "!type": "fn()",
       "!doc": "Disables the uploader user input (mouse clicks on the Browse button). If the button skin \nis applied, the sprite is set to the disabled state."
      },
      "log": {
       "!type": "bool",
       "!doc": "The flag that allows Flash player to \noutput debug messages to its trace stack \n(if the Flash debug player is used)."
      },
      "multiFiles": {
       "!type": "bool",
       "!doc": "The flag that allows the user to select\nmore than one files during the Browse\ndialog (using Shift or Ctrl keys)."
      },
      "simLimit": {
       "!type": "number",
       "!doc": "The number of files that can be uploaded\nsimultaneously if the automatic queue management\nis used. This value can be in the range between 2\nand 5."
      },
      "fileFilters": {
       "!type": "+yui.Array",
       "!doc": "The array of filters on file extensions for\nthe Browse dialog. These filters only provide\nconvenience for the user and do not strictly\nlimit the selection to certain file extensions.\nEach item in the array must contain a description\nproperty, and an extensions property that must be\nin the form \"*.ext;*.ext;*.ext;...\""
      },
      "boundingBox": {
       "!type": "+node.Node",
       "!doc": "The Node containing the uploaders Browse button."
      },
      "buttonSkin": {
       "!type": "string",
       "!doc": "The URL of the image sprite for skinning the uploaders Browse button."
      },
      "transparent": {
       "!type": "bool",
       "!doc": "The flag indicating whether the uploader is rendered \nwith a transparent background."
      },
      "swfURL": {
       "!type": "string",
       "!doc": "The URL of the uploaders SWF."
      }
     }
    }
   },
   "widget": {
    "Widget": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.widget.Widget",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "id": {
       "!type": "string"
      },
      "rendered": {
       "!type": "bool",
       "!doc": "Flag indicating whether or not this Widget\nhas been through the render lifecycle phase."
      },
      "boundingBox": {
       "!type": "string",
       "!doc": "The outermost DOM node for the Widget, used for sizing and positioning \nof a Widget as well as a containing element for any decorator elements used \nfor skinning."
      },
      "contentBox": {
       "!type": "string",
       "!doc": "A DOM node that is a direct descendant of a Widgets bounding box that \nhouses its content."
      },
      "tabIndex": {
       "!type": "number",
       "!doc": "Number (between -32767 to 32767) indicating the widgets \nposition in the default tab flow.  The value is used to set the \n\"tabIndex\" attribute on the widgets bounding box.  Negative values allow\nthe widget to receive DOM focus programmatically (by calling the focus\nmethod), while being removed from the default tab flow.  A value of \nnull removes the \"tabIndex\" attribute from the widgets bounding box."
      },
      "focused": {
       "!type": "bool",
       "!doc": "Boolean indicating if the Widget, or one of its descendants, \nhas focus."
      },
      "disabled": {
       "!type": "bool",
       "!doc": "Boolean indicating if the Widget should be disabled. The disabled implementation\nis left to the specific classes extending widget."
      },
      "visible": {
       "!type": "bool",
       "!doc": "Boolean indicating weather or not the Widget is visible."
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
       "!type": "fn(parentNode: +_yui.yui.Object) -> !this",
       "!doc": "Establishes the initial DOM for the widget. Invoking this\nmethod will lead to the creating of all DOM elements for\nthe widget (or the manipulation of existing DOM elements \nfor the progressive enhancement use case).\n<p>\nThis method should only be invoked once for an initialized\nwidget.\n</p>\n<p>\nIt delegates to the widget specific renderer method to do\nthe actual work.\n</p>"
      },
      "getClassName": {
       "!type": "fn(arg: string)",
       "!doc": "Returns a class name prefixed with the the value of the \n<code>YUI.config.classNamePrefix</code> attribute + the instances <code>NAME</code> property.\nUses <code>YUI.config.classNameDelimiter</code> attribute to delimit the provided strings.\ne.g. \n<code>\n<pre>\n   // returns \"yui-slider-foo-bar\", for a slider instance\n   var scn = slider.getClassName(foo,bar);\n\n   // returns \"yui-overlay-foo-bar\", for an overlay instance\n   var ocn = overlay.getClassName(foo,bar);\n</pre>\n</code>"
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
       "!doc": "Causes the Widget to receive the focus by setting the \"focused\" \nattribute to \"true\"."
      },
      "blur": {
       "!type": "fn() -> !this",
       "!doc": "Causes the Widget to lose focus by setting the \"focused\" attribute \nto \"false\""
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
       "!type": "fn(key: string, locale: string)",
       "!doc": "Gets the string for a particular key, for a particular locale, performing locale lookup.\n<p>\nIf no values if defined for the key, for the given locale, the value for the \ndefault locale (in initial locale set for the class) is returned.\n</p>"
      },
      "getStrings": {
       "!type": "fn(locale: string)",
       "!doc": "Gets the entire strings hash for a particular locale, performing locale lookup.\n<p>\nIf no values of the key are defined for a particular locale the value for the \ndefault locale (in initial locale set for the class) is returned.\n</p>"
      },
      "srcNode": {
       "!type": "string",
       "!doc": "The DOM node to parse for configuration values, passed to the Widgets HTML_PARSER definition"
      },
      "locale": {
       "!type": "string",
       "!doc": "The default locale for the widget. NOTE: Using get/set on the \"strings\" attribute will\nreturn/set strings for this locale."
      },
      "getDefaultLocale": {
       "!type": "fn() -> string",
       "!doc": "Returns the default locale for the widget (the locale value defined by the\nwidget class, or provided by the user during construction)."
      },
      "getSkinName": {
       "!type": "fn() -> string",
       "!doc": "Returns the name of the skin thats currently applied to the widget.\nThis is only really useful after the widgets DOM structure is in the\ndocument, either by render or by progressive enhancement.  Searches up\nthe Widgets ancestor axis for a class yui3-skin-(name), and returns the\n(name) portion.  Otherwise, returns null."
      },
      "UI_EVENTS": {
       "!type": "+yui.Object",
       "!doc": "Map of DOM events that should be fired as Custom Events by the  \nWidget instance."
      },
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
       "!doc": "Determines if the Widget is the root Widget in the \nobject hierarchy."
      },
      "ancestor": {
       "!type": "fn(depth: number) -> +widget.Widget",
       "!doc": "Returns the Widget instance at the specified depth."
      }
     },
     "NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class.\n<p>\nCurrently used to apply class identifiers to the bounding box \nand to classify events fired by the widget.\n</p>"
     },
     "UI_SRC": {
      "!type": "string",
      "!doc": "Constant used to identify state changes originating from\nthe DOM (as opposed to the JavaScript model)."
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute \nconfiguration for the Widget."
     },
     "getByNode": {
      "!type": "fn(node: +_yui.node.Node) -> +widget.Widget",
      "!doc": "Returns the widget instance whose bounding box contains, or is, the given node. \n<p>\nIn the case of nested widgets, the nearest bounding box ancestor is used to\nreturn the widget instance.\n</p>"
     },
     "HTML_PARSER": {
      "!type": "+yui.Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box. e.g.:\n<pre>\n  {\n      // Set single Node references using selector syntax \n      // (selector is run through node.one)\n      titleNode: \"span.yui-title\",\n      // Set NodeList references using selector syntax \n      // (array indicates selector is to be run through node.all)\n      listNodes: [\"li.yui-item\"],\n      // Set other attribute types, using a parse function. \n      // Context is set to the widget instance.\n      label: function(contentBox) {\n          return contentBox.one(\"span.title\").get(\"innerHTML\");\n      }\n  }\n</pre>"
     }
    }
   },
   "widget_anim": {
    "Plugin": {
     "WidgetAnim": {
      "!type": "fn()",
      "prototype": {
       "!proto": "_yui.plugin.Plugin.Base.prototype",
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
        "!type": "fn(config: +_yui.yui.Object)",
        "!doc": "The initializer lifecycle implementation. Modifies the host widgets \nvisibililty implementation to add animation."
       },
       "destructor": {
        "!type": "fn()",
        "!doc": "The initializer destructor implementation. Responsible for destroying the configured\nanimation instances."
       }
      },
      "NS": {
       "!type": "string",
       "!doc": "The namespace for the plugin. This will be the property on the widget, which will \nreference the plugin instance, when its plugged in."
      },
      "NAME": {
       "!type": "string",
       "!doc": "The NAME of the WidgetAnim class. Used to prefix events generated\nby the plugin class."
      },
      "ANIMATIONS": {
       "!type": "+yui.Object",
       "!doc": "Pre-Packaged Animation implementations, which can be used for animShow and animHide attribute \nvalues."
      },
      "ATTRS": {
       "!type": "+yui.Object",
       "!doc": "Static property used to define the default attribute \nconfiguration for the plugin."
      }
     }
    }
   },
   "widget_autohide": {
    "WidgetAutohide": {
     "!type": "fn(config: +_yui.yui.Object)",
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute \nconfiguration introduced by WidgetAutohide."
     },
     "prototype": {
      "hideOn": {
       "!type": "+array",
       "!doc": "An array of objects corresponding to the nodes, events, and keycodes to hide the widget on.\nThe implementer can supply an array of objects, with each object having the following properties:\n<p>eventName: (string, required): The eventName to listen to.</p>\n<p>node: (Y.Node, optional): The Y.Node that will fire the event (defaults to the boundingBox of the widget)</p>\n<p>keyCode: (string, optional): If listening for key events, specify the keyCode</p>\n<p>By default, this attribute consists of one object which will cause the widget to hide if the\nescape key is pressed.</p>"
      },
      "_afterHideOnChange": {
       "!type": "fn()",
       "!doc": "Default function called when hideOn Attribute is changed. Remove existing listeners and create new listeners."
      }
     }
    }
   },
   "widget_buttons": {
    "WidgetButtons": {
     "!type": "fn(config: +_yui.yui.Object)",
     "BUTTON_CLASS_NAMES": {
      "!type": "+object",
      "!doc": "Static hash of default class names used for the inner <span> (\"content\"),\nthe <a> (\"button\"), and the outer span (\"wrapper\")."
     },
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration introduced by WidgetButtons."
     },
     "prototype": {
      "buttons": {
       "!type": "+yui.Array",
       "!doc": "<p>An array of objects, with each object corresponding to a button that you want to be added to the widget. Each button can have upto 4 properties:</p>\n\n<p>type: {string} Use one of the default buttons provided by the WidgetButtons class. Set this to \"close\" if you want the\n[x] at the top-right corner of the window. If this key has a value, then values for the remaining properties below dont need to be provided.</p>\n\n<p>value: {string} HTML string or text that should be shown on the button</p>\n<p>action: {function} The callback function that should be executed when the button is clicked.</p>\n<p>href: {string} (optional) The link to redirect to if the button is clicked> If not supplied, defaults to \"#\"</p>\n<p>section: {String|Object} Whether the button should be placed in the header or footer. Represented as \"header\" or \"footer\"</p>\n<p>classNames: {String|Array[String]} A set of additional CSS class names which would be added to the button node.</p>"
      },
      "_bindUIButtons": {
       "!type": "fn(button: +_yui.yui.Object)",
       "!doc": "Add a button to the existing set of buttons"
      }
     },
     "DEFAULT_BUTTONS": {
      "!type": "+object",
      "!doc": "Static hash of buttons that have all their properties defined, so that they can be used by supplying a value to the \"type\" property in the button attribute.\nThe \"close\" button is currently defined in this object (sets the [x] in the top-right of the header)."
     },
     "TEMPLATES": {
      "!type": "+object",
      "!doc": "<p>Object used to specify the HTML template for the buttons. Consists of the following properties</p>\n<p>defaultTemplate: Specifies the HTML markup for each button</p>\n<p>wrapper: Specifies the HTML markup for the wrapper, which is a DOM Element that wraps around all the buttons</p>"
     }
    }
   },
   "widget_child": {
    "WidgetChild": {
     "!type": "fn(config: +_yui.yui.Object)",
     "prototype": {
      "selected": {
       "!type": "number",
       "!doc": "Number indicating if the Widget is selected.  Possible \nvalues are:\n<dl>\n<dt>0</dt> <dd>(Default) Not selected</dd>\n<dt>1</dt> <dd>Fully selected</dd>\n<dt>2</dt> <dd>Partially selected</dd>\n</dl>"
      },
      "index": {
       "!type": "number",
       "!doc": "Number representing the Widgets ordinal position in its \nparent Widget."
      },
      "parent": {
       "!type": "+widget.Widget",
       "!doc": "Retrieves the parent of the Widget in the object hierarchy."
      },
      "depth": {
       "!type": "number",
       "!doc": "Number representing the depth of this Widget relative to \nthe root Widget in the object heirarchy."
      },
      "root": {
       "!type": "+widget.Widget",
       "!doc": "Returns the root Widget in the object hierarchy.  If the\nROOT_TYPE property is set, the search for the root Widget will be \nconstrained to parent Widgets of the specified type."
      },
      "ROOT_TYPE": {
       "!type": "+yui.Object",
       "!doc": "Constructor reference used to determine the root of a Widget-based \nobject tree.\n<p>\nCurrently used to control the behavior of the <code>root</code>  \nattribute so that recursing up the object heirarchy can be constrained \nto a specific type of Widget.  Widget authors should set this property\nto the constructor function for a given Widget implementation.\n</p>"
      }
     }
    }
   },
   "widget_modality": {
    "WidgetModality": {
     "!type": "fn(config: +_yui.yui.Object)",
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
       "!doc": "Attaches UI Listeners for \"clickoutside\" and \"focusoutside\" on the widget. When these events occur, and the widget is modal, focus is shifted back onto the widget."
      },
      "_detachUIHandlesModal": {
       "!type": "fn()",
       "!doc": "Detaches all UI Listeners that were set in _attachUIHandlesModal from the widget."
      },
      "_afterHostVisibleChangeModal": {
       "!type": "fn(e: +_yui.event_custom.EventFacade)",
       "!doc": "Default function that is called when visibility is changed on the widget."
      },
      "_afterHostZIndexChangeModal": {
       "!type": "fn(e: +_yui.event_custom.EventFacade)",
       "!doc": "Default function that is called when z-index is changed on the widget."
      },
      "isNested": {
       "!type": "fn()",
       "!doc": "Returns a boolean representing whether the current widget is in a \"nested modality\" state.\nThis is done by checking the number of widgets currently on the stack."
      },
      "_repositionMask": {
       "!type": "fn(nextElem: +_yui.widget.Widget)",
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
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.widget_parent.WidgetParent",
     "prototype": {
      "defaultChildType": {
       "!type": "string",
       "!doc": "String representing the default type of the children \nmanaged by this Widget.  Can also supply default type as a constructor\nreference."
      },
      "activeDescendant": {
       "!type": "+widget.Widget",
       "!doc": "Returns the Widgets currently focused descendant Widget."
      },
      "multiple": {
       "!type": "bool",
       "!doc": "Boolean indicating if multiple children can be selected at \nonce.  Whether or not multiple selection is enabled is always delegated\nto the value of the <code>multiple</code> attribute of the root widget\nin the object hierarchy."
      },
      "selection": {
       "!type": "+collection.ArrayList",
       "!doc": "Returns the currently selected child Widget.  If the \n<code>mulitple</code> attribte is set to <code>true</code> will \nreturn an Y.ArrayList instance containing the currently selected \nchildren.  If no children are selected, will return null."
      },
      "destructor": {
       "!type": "fn()",
       "!doc": "The destructor implementation for Parent widgets. Destroys all children."
      },
      "add": {
       "!type": "fn(child: +_yui.widget.Widget, child: +_yui.yui.Array, index: number) -> +collection.ArrayList",
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
   "widget_position": {
    "WidgetPosition": {
     "!type": "fn(config: +_yui.yui.Object)",
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute \nconfiguration introduced by WidgetPosition."
     },
     "prototype": {
      "x": {
       "!type": "number",
       "!doc": "Page X co-ordinate for the widget. This attribute acts as a facade for the \nxy attribute. Changes in position can be monitored by listening for xyChange events."
      },
      "y": {
       "!type": "number",
       "!doc": "Page Y co-ordinate for the widget. This attribute acts as a facade for the \nxy attribute. Changes in position can be monitored by listening for xyChange events."
      },
      "xy": {
       "!type": "+yui.Array",
       "!doc": "Page XY co-ordinate pair for the widget."
      },
      "move": {
       "!type": "fn(x: number, y: number, x: +_yui.yui.Array)",
       "!doc": "Moves the Widget to the specified page xy co-ordinate position."
      },
      "syncXY": {
       "!type": "fn()",
       "!doc": "Synchronizes the Panels \"xy\", \"x\", and \"y\" properties with the \nWidgets position in the DOM."
      }
     },
     "POSITIONED_CLASS_NAME": {
      "!type": "string",
      "!doc": "Default class used to mark the boundingBox of a positioned widget."
     }
    }
   },
   "widget_position_align": {
    "WidgetPositionAlign": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.widget_position_align.WidgetPositionAlign",
     "prototype": {
      "align": {
       "!type": "fn(node?: +_yui.node.Node, points?: [+_yui.yui.Array]) -> !this",
       "!doc": "Aligns this widget to the provided `Node` (or viewport) using the provided\npoints. This method can be invoked with no arguments which will cause the \nwidgets current `align` Attribute value to be synced to the DOM."
      },
      "centered": {
       "!type": "fn(node?: +_yui.node.Node) -> !this",
       "!doc": "Centers the widget in the viewport, or if a `Node` is passed in, it will \nbe centered to that `Node`."
      },
      "alignOn": {
       "!type": "+yui.Array",
       "!doc": "An Array of Objects corresponding to the `Node`s and events that will cause\nthe alignment of this widget to be synced to the DOM.\n\nThe `alignOn` Attribute is expected to be an Array of Objects with the \nfollowing properties:\n\n  * __`eventName`__: The String event name to listen for.\n\n  * __`node`__: The optional `Node` that will fire the event, it can be a \n    `Node` reference or a selector String. This will default to the widgets \n    `boundingBox`."
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
     "!type": "fn(User: +_yui.yui.Object)",
     "ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute \nconfiguration introduced by WidgetPositionConstrain."
     },
     "prototype": {
      "constrain": {
       "!type": "fn(xy: +_yui.yui.Array, node: +_yui.node.Node)",
       "!doc": "Constrains the widgets bounding box to a node (or the viewport). If xy or node are not \npassed in, the current position and the value of \"constrain\" will be used respectively.\n\nThe widgets position will be changed to the constrained position."
      },
      "preventOverlap": {
       "!type": "bool",
       "!doc": "If set to true, and WidgetPositionAlign is also added to the Widget, \nconstrained positioning will attempt to prevent the widgets bounding box from overlapping \nthe element to which it has been aligned, by flipping the orientation of the alignment\nfor corner based alignments"
      },
      "getConstrainedXY": {
       "!type": "fn(xy: +_yui.yui.Array, node: +_yui.node.Node) -> +yui.Array",
       "!doc": "Calculates the constrained positions for the XY positions provided, using\nthe provided node argument is passed in. If no node value is passed in, the value of \nthe \"constrain\" attribute is used."
      }
     }
    }
   },
   "widget_stack": {
    "WidgetStack": {
     "!type": "fn(User: +_yui.yui.Object)",
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
     "!type": "fn(The: +_yui.yui.Object)",
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
      "!doc": "Constant used to specify insertion position, when adding content to sections of the standard module in \nmethods which expect a \"where\" argument.\n<p>\nInserts new content <em>before</em> the sections existing content.\n</p>"
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
      "!doc": "Static property used to define the default attribute \nconfiguration introduced by WidgetStdMod."
     },
     "prototype": {
      "headerContent": {
       "!type": "string",
       "!doc": "The content to be added to the header section. This will replace any existing content\nin the header. If you want to append, or insert new content, use the <a href=\"#method_setStdModContent\">setStdModContent</a> method."
      },
      "footerContent": {
       "!type": "string",
       "!doc": "The content to be added to the footer section. This will replace any existing content\nin the footer. If you want to append, or insert new content, use the <a href=\"#method_setStdModContent\">setStdModContent</a> method."
      },
      "bodyContent": {
       "!type": "string",
       "!doc": "The content to be added to the body section. This will replace any existing content\nin the body. If you want to append, or insert new content, use the <a href=\"#method_setStdModContent\">setStdModContent</a> method."
      },
      "fillHeight": {
       "!type": "fn(node: +_yui.node.Node)",
       "!doc": "Sets the height on the provided header, body or footer element to \nfill out the height of the Widget. It determines the height of the \nwidgets bounding box, based on its configured height value, and \nsets the height of the provided section to fill out any \nspace remaining after the other standard module section heights \nhave been accounted for.\n\n<p><strong>NOTE:</strong> This method is not designed to work if an explicit \nheight has not been set on the Widget, since for an \"auto\" height Widget, \nthe heights of the header/body/footer will drive the height of the Widget.</p>"
      },
      "setStdModContent": {
       "!type": "fn(section: string, content: string, where: string)",
       "!doc": "Updates the body section of the standard module with the content provided (either an HTML string, or node reference).\n<p>\nThis method can be used instead of the corresponding section content attribute if youd like to retain the current content of the section,\nand insert content before or after it, by specifying the <code>where</code> argument.\n</p>"
      },
      "getStdModNode": {
       "!type": "fn(section: string) -> +node.Node",
       "!doc": "Returns the node reference for the given section. Note: The DOM is not queried for the node reference. The reference\nstored by the widget instance is returned if set."
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
   "yql": {
    "YQLRequest": {
     "!type": "fn(sql: string, callback: fn(), params: +_yui.yui.Object, opts: +_yui.yui.Object) -> +_yui.yql.YQLRequest",
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
   },
   "features": {
    "Features": {
     "!type": "fn()",
     "prototype": {
      "tests": {
       "!type": "+yui.Object",
       "!doc": "Object hash of all registered feature tests"
      },
      "add": {
       "!type": "fn(cat: string, name: string, o: +_yui.yui.Object)",
       "!doc": "Add a test to the system\n\n  ```\n  Y.Features.add(\"load\", \"1\", {});\n  ```"
      },
      "all": {
       "!type": "fn(cat: string, args: +_yui.yui.Array) -> string",
       "!doc": "Execute all tests of a given category and return the serialized results\n\n  ```\n  caps=1:1;2:1;3:0\n  ```"
      },
      "test": {
       "!type": "fn(cat: string, name: string, args: +_yui.yui.Array) -> bool",
       "!doc": "Run a sepecific test and return a Boolean response.\n\n  ```\n  Y.Features.test(\"load\", \"1\");\n  ```"
      }
     }
    }
   },
   "aui_autocomplete": {
    "AutoComplete": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_autocomplete.AutoComplete",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "alwaysShowContainer": {
       "!type": "bool",
       "!doc": "Always show the results container, instead of only showing when the \nuser is requesting them."
      },
      "autoHighlight": {
       "!type": "bool",
       "!doc": "Automatically highlight the first item in the list when the results are\nmade visible."
      },
      "applyLocalFilter": {
       "!type": "bool",
       "!doc": "If set to true, the <a href=\"AutoComplete.html#method_filterResults\">filterResults</a> \nmethod will be run on the response from the data source."
      },
      "button": {
       "!type": "bool",
       "!doc": "To use a button"
      },
      "dataSource": {
       "!type": "+yui.Object",
       "!doc": "The data source that results will be read from. This can either be\nan existing <a href=\"DataSource.html\">DataSource</a> object, or it can be a\nvalue that would be passed to <a href=\"DataSource.html\">DataSource</a>."
      },
      "dataSourceType": {
       "!type": "string",
       "!doc": "The type of the data source passed into <a href=\"AutoComplete.html#config_dataSource\">dataSource</a>.\nThis can be used to explicitly declare what kind of <a href=\"DataSource.html\">DataSource</a> object will\nbe created."
      },
      "delimChar": {
       "!type": "string",
       "!doc": "The character used to indicate the beginning or ending of a new value. Most commonly used\nis a \",\"."
      },
      "forceSelection": {
       "!type": "bool",
       "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, this\nwill clear a selection when the overlay closes unless a user explicitly selects an item."
      },
      "input": {
       "!type": "string",
       "!doc": "The input field which will recieve the users input."
      },
      "matchKey": {
       "!type": "string",
       "!doc": "The key or numeric index in the schema to match the result against."
      },
      "maxResultsDisplayed": {
       "!type": "number",
       "!doc": "The maximum number of results to display."
      },
      "minQueryLength": {
       "!type": "number",
       "!doc": "The minimum number of characters required to query the data source."
      },
      "queryDelay": {
       "!type": "number",
       "!doc": "The amount of time in seconds to delay before submitting the query."
      },
      "queryInterval": {
       "!type": "number",
       "!doc": "When IME usage is detected or interval detection is explicitly enabled,\nAutoComplete will detect the input value at the given interval and send a\nquery if the value has changed."
      },
      "queryMatchCase": {
       "!type": "bool",
       "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match only results with the same case."
      },
      "queryMatchContains": {
       "!type": "bool",
       "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match results which contain the query anywhere in the text,\ninstead of just matching just items that start with the query."
      },
      "queryQuestionMark": {
       "!type": "bool",
       "!doc": "For IO DataSources, AutoComplete will automatically insert a \"?\" between the server URI and \nthe encoded query string. To prevent this behavior, you can\nset this value to false. If you need to customize this even further, you\ncan override the <a href=\"AutoComplete.html#method_generateRequest\">generateRequest</a> method."
      },
      "schema": {
       "!type": "+yui.Object",
       "!doc": "A valid configuration object for any of <a href=\"module_datasource.html\">DataSource</a> schema plugins."
      },
      "schemaType": {
       "!type": "string",
       "!doc": "A valid type of <a href=\"module_datasource.html\">DataSource</a> schema plugin, such as array, json, xml, etc."
      },
      "suppressInputUpdate": {
       "!type": "bool",
       "!doc": "Whether or not the input field should be updated with selections."
      },
      "typeAhead": {
       "!type": "bool",
       "!doc": "If <a href=\"AutoComplete.html#config_autoHighlight\">autoHighlight</a> is enabled, whether or not the \ninput field should be automatically updated with the first result as the user types, \nautomatically selecting the portion of the text the user has not typed yet."
      },
      "typeAheadDelay": {
       "!type": "number",
       "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, number of seconds \nto delay before updating the input. In order to prevent certain race conditions, this value must\nalways be greater than the <a href=\"AutoComplete.html#config_queryDelay\">queryDelay</a>."
      },
      "uniqueName": {
       "!type": "string",
       "!doc": "The unique ID of the input element."
      },
      "doBeforeExpandContainer": {
       "!type": "fn(query: string, allResults: +_yui.yui.Object) -> bool",
       "!doc": "An overridable method that is executed before the result container is shown.\nThe method can return false to prevent the container from being shown."
      },
      "doBeforeLoadData": {
       "!type": "fn(event: +_yui.event_custom.EventFacade) -> bool",
       "!doc": "An overridable method that is executed before the result overlay is loaded with results."
      },
      "filterResults": {
       "!type": "fn(event: +_yui.event_custom.EventFacade) -> +yui.Object",
       "!doc": "Executed by the data source as a mechanism to do simple client-side\nfiltering of the results."
      },
      "formatResult": {
       "!type": "fn(result: +_yui.yui.Object, request: string, resultMatch: string) -> string",
       "!doc": "An overridable method for formatting the result of the query before its displayed in the overlay."
      },
      "generateRequest": {
       "!type": "fn(query: string) -> +yui.Object",
       "!doc": "An overridable method that creates an object to be passed to the sendRequest\nmethod of the data source object. Useful to overwrite if you wish to create\na custom request object before its sent."
      },
      "handleResponse": {
       "!type": "fn(event: +_yui.event_custom.EventFacade)",
       "!doc": "Handles the response for the display of the results. This is a callback method\nthat is fired by the sendRequest method so that results are ready to be accessed."
      },
      "sendQuery": {
       "!type": "fn(query: string)",
       "!doc": "Sends a query request to the data source object."
      }
     },
     "AutoComplete.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "AutoComplete.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the AutoComplete."
     }
    }
   },
   "aui_button_item": {
    "ButtonItem": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_button_item.ButtonItem",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "undefined": {
       "!type": "fn()",
       "!doc": "Maps an array or object to a resulting array, using the\nreturn value of fn as the values for the new array.\nLike A.each, this function can accept an object or an array."
      },
      "activeState": {
       "!type": "bool",
       "!doc": "Whether to track the active state of the button."
      },
      "classNames": {
       "!type": "+yui.Object",
       "!doc": "An object map of the CSS class names to use for the different interaction states."
      },
      "defaultState": {
       "!type": "bool",
       "!doc": "Whether to apply the default interaction state to the button"
      },
      "handler": {
       "!type": "fn()",
       "!doc": "An event callback to handle when a user interacts with the button.\nThis can either be a function that will be attached on click, or\nan object map that accepts the following keys:\n<code>{fn: // The function to execute\ncontext: // The context to execute the function in\ntype: // The type of event to listen for (defaults to \"click\")\n}</code>"
      },
      "hoverState": {
       "!type": "bool",
       "!doc": "An id that can be used to identify a button."
      },
      "icon": {
       "!type": "string",
       "!doc": "The icon to use inside of the button. Possible values are:"
      },
      "iconNode": {
       "!type": "string",
       "!doc": "DOM Node to display the icon of the ButtonItem. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-button-icon</code>."
      },
      "label": {
       "!type": "string",
       "!doc": "Text to use inside of the button."
      },
      "labelNode": {
       "!type": "string",
       "!doc": "DOM Node to display the text of the ButtonItem. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-button-label</code>."
      },
      "title": {
       "!type": "string",
       "!doc": "Text to use as the title attribute of the button."
      },
      "type": {
       "!type": "string",
       "!doc": "Button type."
      }
     },
     "ButtonItem.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ButtonItem.AUGMENTS": {
      "!type": "+array",
      "!doc": "Static property provides an array to specify which classes augment this one."
     },
     "ButtonItem.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ButtonItem."
     },
     "ButtonItem.HTML_PARSER": {
      "!type": "+yui.Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "aui_char_counter": {
    "CharCounter": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_char_counter.CharCounter",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "counter": {
       "!type": "+node.Node",
       "!doc": "Node or Selector to display the information of the counter."
      },
      "maxLength": {
       "!type": "number",
       "!doc": "Max number of characters the <a\nhref=\"CharCounter.html#config_input\">input</a> can have."
      },
      "input": {
       "!type": "+node.Node",
       "!doc": "Node or Selector for the input field. Required."
      },
      "checkLength": {
       "!type": "fn()",
       "!doc": "Check the current value of the <a\nhref=\"CharCounter.html#config_input\">input</a>, truncate the data if\nneeded, and re-sync the UI. Fired from <a\n href=\"CharCounter.html#method__onInputChange\">_onInputChange</a>."
      }
     },
     "CharCounter.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "CharCounter.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the CharCounter."
     }
    }
   },
   "aui_color_picker": {
    "ColorPicker": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_color_picker.ColorPicker",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayContext.prototype"
     },
     "ColorPicker.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ColorPicker.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ColorPicker."
     }
    }
   },
   "aui_component": {
    "Component": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_component.Component",
     "prototype": {
      "!proto": "_yui.widget.Widget.prototype",
      "useARIA": {
       "!type": "bool",
       "!doc": "Boolean indicating if use of the WAI-ARIA Roles and States should be\nenabled for the Widget."
      },
      "cssClass": {
       "!type": "string",
       "!doc": "CSS class to be automatically added to the <code>boundingBox</code>."
      },
      "hideClass": {
       "!type": "string",
       "!doc": "css class added to hide the <code>boundingBox</code> when\n<a href=\"Component.html#config_visible\">visible</a> is set to\n<code>false</code>."
      },
      "render": {
       "!type": "bool",
       "!doc": "If <code>true</code> the render phase will be autimatically invoked\npreventing the <code>.render()</code> manual call."
      },
      "clone": {
       "!type": "fn(config: +_yui.yui.Object) -> +widget.Widget",
       "!doc": "Clone the current Component."
      },
      "toggle": {
       "!type": "fn(visible: ?)",
       "!doc": "Toggle the visibility of the Panel toggling the value of the\n<a href=\"Widget.html#config_visible\">visible</a> attribute."
      }
     },
     "Component.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Component.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Component."
     }
    },
    "CellEditorSupport": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_component.CellEditorSupport",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "dataSource": {
       "!type": "+yui.Object",
       "!doc": "The data source that results will be read from. This can either be\nan existing <a href=\"DataSource.html\">DataSource</a> object, or it can be a\nvalue that would be passed to <a href=\"DataSource.html\">DataSource</a>."
      },
      "dataSourceType": {
       "!type": "string",
       "!doc": "The type of the data source passed into <a href=\"AutoComplete.html#config_dataSource\">dataSource</a>.\nThis can be used to explicitly declare what kind of <a href=\"DataSource.html\">DataSource</a> object will\nbe created."
      },
      "schema": {
       "!type": "+yui.Object",
       "!doc": "A valid configuration object for any of <a href=\"module_datasource.html\">DataSource</a> schema plugins."
      },
      "schemaType": {
       "!type": "string",
       "!doc": "A valid type of <a href=\"module_datasource.html\">DataSource</a> schema plugin, such as array, json, xml, etc."
      },
      "button": {
       "!type": "bool",
       "!doc": "To use a button"
      },
      "delimChar": {
       "!type": "string",
       "!doc": "The character used to indicate the beginning or ending of a new value. Most commonly used\nis a \",\"."
      },
      "forceSelection": {
       "!type": "bool",
       "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, this\nwill clear a selection when the overlay closes unless a user explicitly selects an item."
      },
      "input": {
       "!type": "string",
       "!doc": "The input field which will recieve the users input."
      },
      "matchKey": {
       "!type": "string",
       "!doc": "The key or numeric index in the schema to match the result against."
      },
      "minQueryLength": {
       "!type": "number",
       "!doc": "The minimum number of characters required to query the data source."
      },
      "queryDelay": {
       "!type": "number",
       "!doc": "The amount of time in seconds to delay before submitting the query."
      },
      "queryInterval": {
       "!type": "number",
       "!doc": "When IME usage is detected or interval detection is explicitly enabled,\nAutoComplete will detect the input value at the given interval and send a\nquery if the value has changed."
      },
      "queryMatchCase": {
       "!type": "bool",
       "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match only results with the same case."
      },
      "queryMatchContains": {
       "!type": "bool",
       "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match results which contain the query anywhere in the text,\ninstead of just matching just items that start with the query."
      },
      "queryQuestionMark": {
       "!type": "bool",
       "!doc": "For IO DataSources, AutoComplete will automatically insert a \"?\" between the server URI and \nthe encoded query string. To prevent this behavior, you can\nset this value to false. If you need to customize this even further, you\ncan override the <a href=\"AutoComplete.html#method_generateRequest\">generateRequest</a> method."
      },
      "suppressInputUpdate": {
       "!type": "bool",
       "!doc": "Whether or not the input field should be updated with selections."
      },
      "typeAhead": {
       "!type": "bool",
       "!doc": "If <a href=\"AutoComplete.html#config_autoHighlight\">autoHighlight</a> is enabled, whether or not the \ninput field should be automatically updated with the first result as the user types, \nautomatically selecting the portion of the text the user has not typed yet."
      },
      "typeAheadDelay": {
       "!type": "number",
       "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, number of seconds \nto delay before updating the input. In order to prevent certain race conditions, this value must\nalways be greater than the <a href=\"AutoComplete.html#config_queryDelay\">queryDelay</a>."
      },
      "uniqueName": {
       "!type": "string",
       "!doc": "The unique ID of the input element."
      },
      "doBeforeLoadData": {
       "!type": "fn(event: +_yui.event_custom.EventFacade) -> bool",
       "!doc": "An overridable method that is executed before the result overlay is loaded with results."
      },
      "formatResult": {
       "!type": "fn(result: +_yui.yui.Object, request: string, resultMatch: string) -> string",
       "!doc": "An overridable method for formatting the result of the query before its displayed in the overlay."
      },
      "generateRequest": {
       "!type": "fn(query: string) -> +yui.Object",
       "!doc": "An overridable method that creates an object to be passed to the sendRequest\nmethod of the data source object. Useful to overwrite if you wish to create\na custom request object before its sent."
      },
      "handleResponse": {
       "!type": "fn(event: +_yui.event_custom.EventFacade)",
       "!doc": "Handles the response for the display of the results. This is a callback method\nthat is fired by the sendRequest method so that results are ready to be accessed."
      }
     },
     "AutoComplete.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the AutoComplete."
     }
    }
   },
   "aui_datatype": {
    "DataType": {
     "Boolean": {
      "!type": "fn()",
      "prototype": {
       "parse": {
        "!type": "fn(data: ?) -> bool",
        "!doc": "Parses any <code>falsey</code> value to <code>false</code> and\n<code>non-falsey</code> to <code>true</code>."
       }
      }
     },
     "String": {
      "!type": "fn()",
      "prototype": {
       "evaluate": {
        "!type": "fn(data: ?) -> bool",
        "!doc": "Evaluates a string to a primitive value (if possible). Supports\n<code>true</code> and <code>false</code> also. Unrecognized strings are\nreturned without any modification."
       }
      }
     }
    },
    "A": {
     "DataType": {
      "DateMath": {
       "!type": "fn()",
       "DAY": {
        "!type": "string",
        "!doc": "Constant field representing Day"
       },
       "WEEK": {
        "!type": "string",
        "!doc": "Constant field representing Week"
       },
       "YEAR": {
        "!type": "string",
        "!doc": "Constant field representing Year"
       },
       "MONTH": {
        "!type": "string",
        "!doc": "Constant field representing Month"
       },
       "MINUTES": {
        "!type": "string",
        "!doc": "Constant field representing Minutes"
       },
       "HOUR": {
        "!type": "string",
        "!doc": "Constant field representing Hour"
       },
       "SECONDS": {
        "!type": "string",
        "!doc": "Constant field representing Seconds"
       },
       "MAX_MONTH_LENGTH": {
        "!type": "number",
        "!doc": "Constant field representing the number of maximum days in a month"
       },
       "WEEK_LENGTH": {
        "!type": "number",
        "!doc": "Constant field representing the number of maximum days in a week"
       },
       "ONE_DAY_MS": {
        "!type": "number",
        "!doc": "Constant field representing one day, in milliseconds"
       },
       "ONE_HOUR_MS": {
        "!type": "number",
        "!doc": "Constant field representing one hour, in milliseconds"
       },
       "ONE_MINUTE_MS": {
        "!type": "number",
        "!doc": "Constant field representing one minute, in milliseconds"
       },
       "ONE_SECOND_MS": {
        "!type": "number",
        "!doc": "Constant field representing one second, in milliseconds"
       },
       "WEEK_ONE_JAN_DATE": {
        "!type": "number",
        "!doc": "Constant field representing the date in first week of January\nwhich identifies the first week of the year.\n<p>\nIn the U.S, Jan 1st is normally used based on a Sunday start of week.\nISO 8601, used widely throughout Europe, uses Jan 4th, based on a Monday start of week.\n</p>"
       },
       "prototype": {
        "add": {
         "!type": "fn(date: +Date, field: string, amount: number) -> +Date",
         "!doc": "Adds the specified amount of time to the this instance."
        },
        "compare": {
         "!type": "fn(d1: +Date, d2: +Date) -> bool",
         "!doc": "Compare dates."
        },
        "subtract": {
         "!type": "fn(date: +Date, field: number, amount: number) -> +Date",
         "!doc": "Subtracts the specified amount of time from the this instance."
        },
        "before": {
         "!type": "fn(date: +Date, compareTo: +Date) -> bool",
         "!doc": "Determines whether a given date is before another date on the calendar."
        },
        "after": {
         "!type": "fn(date: +Date, compareTo: +Date) -> bool",
         "!doc": "Determines whether a given date is after another date on the calendar."
        },
        "between": {
         "!type": "fn(date: +Date, dateBegin: +Date, dateEnd: +Date) -> bool",
         "!doc": "Determines whether a given date is between two other dates on the calendar."
        },
        "getJan1": {
         "!type": "fn(calendarYear: number) -> +Date",
         "!doc": "Retrieves a JavaScript Date object representing January 1 of any given year."
        },
        "getDayOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!doc": "Calculates the number of days between the specified dates."
        },
        "getHoursOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!doc": "Calculates the number of hours between the specified dates."
        },
        "getMinutesOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!doc": "Calculates the number of minutes between the specified dates."
        },
        "getSecondsOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!doc": "Calculates the number of seconds between the specified dates."
        },
        "getWeekNumber": {
         "!type": "fn(date: +Date, firstDayOfWeek: number, janDate: number) -> number",
         "!doc": "Calculates the week number for the given date. Can currently support standard\nU.S. week numbers, based on Jan 1st defining the 1st week of the year, and\nISO8601 week numbers, based on Jan 4th defining the 1st week of the year."
        },
        "undefined": {
         "!type": "fn(dt: +Date, startOfWeek: number) -> +Date",
         "!doc": "Get the first day of the week, for the give date."
        },
        "isWeekDay": {
         "!type": "fn(date: +Date) -> ?",
         "!doc": "Chechs if the passed date is a week day."
        },
        "isTueOrThu": {
         "!type": "fn(date: +Date) -> ?",
         "!doc": "Chechs if the passed date is a Tuesday or Thursday."
        },
        "isMonWedOrFri": {
         "!type": "fn(date: +Date) -> ?",
         "!doc": "Chechs if the passed date is a Monday, Wednesday or Friday."
        },
        "isNextDay": {
         "!type": "fn(date1: +Date, date2: +Date) -> ?",
         "!doc": "Chechs if the {date2} is the next day."
        },
        "isNextDayBoundary": {
         "!type": "fn(date1: +Date, date2: +Date) -> ?",
         "!doc": "Chechs if the {date2} is the next day at 00:00:00."
        },
        "isDayOverlap": {
         "!type": "fn(date1: +Date, date2: +Date) -> ?",
         "!doc": "Chechs if the passed date is between two days."
        },
        "isToday": {
         "!type": "fn(date: +Date) -> ?",
         "!doc": "Chechs if the passed date is today."
        },
        "isSameMonth": {
         "!type": "fn(d1: +Date, d2: +Date) -> ?",
         "!doc": "Chechs if the passed dates are in the same month."
        },
        "isYearOverlapWeek": {
         "!type": "fn(weekBeginDate: +Date) -> bool",
         "!doc": "Determines if a given week overlaps two different years."
        },
        "isMonthOverlapWeek": {
         "!type": "fn(weekBeginDate: +Date) -> bool",
         "!doc": "Determines if a given week overlaps two different months."
        },
        "findMonthStart": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Gets the first day of a month containing a given date."
        },
        "findMonthEnd": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Gets the last day of a month containing a given date."
        },
        "clearTime": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Clears the time fields from a given date, effectively setting the time to 12 noon."
        },
        "safeClearTime": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Clears the time fields from a given date, effectively setting the time to\n12 noon. This is \"safe\" because clones the date before clear, not affecting\nthe passed reference."
        },
        "toMidnight": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Set the time fields from a given date to midnight."
        },
        "clone": {
         "!type": "fn(date: +Date) -> +Date",
         "!doc": "Clone the passed date object."
        },
        "getDate": {
         "!type": "fn(y: number, m: number, d: number) -> +Date",
         "!doc": "Returns a new JavaScript Date object, representing the given year, month and date. Time fields (hr, min, sec, ms) on the new Date object\nare set to 0. The method allows Date instances to be created with the a year less than 100. \"new Date(year, month, date)\" implementations\nset the year to 19xx if a year (xx) which is less than 100 is provided.\n<p>\n<em>NOTE:</em>Validation on argument values is not performed. It is the callers responsibility to ensure\narguments are valid as per the ECMAScript-262 Date object specification for the new Date(year, month[, date]) constructor.\n</p>"
        }
       }
      }
     }
    },
    "DatepickerManager": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_datatype.DatepickerManager",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayManager.prototype",
      "calendar": {
       "!type": "+yui.Object",
       "!doc": "<a href=\"Calendar.html\">Calendar</a> configuration Object.</a>"
      },
      "formatter": {
       "!type": "fn()",
       "!doc": "Function to format the array of the selected dates before set the\nvalue of the input."
      },
      "setValue": {
       "!type": "bool",
       "!doc": "If true set the selected date with the correct\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a> to the\nvalue of the input field which is hosting the Calendar."
      },
      "stack": {
       "!type": "bool",
       "!doc": "If true is able to do stacking with another overlays."
      },
      "zIndexBase": {
       "!type": "number",
       "!doc": "ZIndex default value passed to the\n<a href=\"OverlayManager.html#config_zIndexBase\">zIndexBase</a> of\n<a href=\"OverlayManager.html\">OverlayManager</a>."
      }
     }
    }
   },
   "aui_delayed_task": {
    "DelayedTask": {
     "!type": "fn(config: +_yui.yui.Object, fn: fn(), scope: +_yui.yui.Object, args: ?) -> +_yui.aui_delayed_task.DelayedTask",
     "prototype": {
      "delay": {
       "!type": "fn(delay: number, newFn: fn(), newScope: +_yui.yui.Object, newArgs: ?)",
       "!doc": "<p>This function is responsible to execute the user callback, passed in\nthe <code>constructor</code> after <code>delay</code> milliseconds.</p>\n\nExample:\n\n<pre><code>// executes after 1000ms the callback\ndelayed.delay(1000);</code></pre>"
      },
      "cancel": {
       "!type": "fn()",
       "!doc": "Cancel the delayed task in case its running (i.e., clearInterval from\nthe current running <a href=\"DelayedTask.html#property__id\">_id</a>)."
      }
     }
    }
   },
   "aui_dialog": {
    "Dialog": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_dialog.Dialog",
     "prototype": {
      "!proto": "_yui.aui_panel.Panel.prototype",
      "bodyContent": {
       "!type": "+node.Node",
       "!doc": "See <a href=\"WidgetStdMod.html#config_bodyContent\">WidgetStdMod bodyContent</a>."
      },
      "buttons": {
       "!type": "+yui.Array",
       "!doc": "<p>Array of object literals, each containing a set of properties\ndefining a button to be appended into the Dialogs footer. Each\nbutton object in the buttons array can have two properties:</p>\n\n<dl>\n   <dt>text:</dt>\n   <dd>\n       The text that will display on the face of the button. The text can include\n       HTML, as long as it is compliant with HTML Button specifications.\n   </dd>\n   <dt>handler:</dt>\n   <dd>\n       A reference to a function that should fire when the button is clicked.\n       (In this case scope of this function is always its Dialog instance.)\n   </dd>\n</dl>"
      },
      "close": {
       "!type": "fn()",
       "!doc": "Fires the close event to close the Dialog."
      },
      "constrain2view": {
       "!type": "+yui.Object",
       "!doc": "Will attempt to constrain the dialog to the boundaries of the\nviewport region."
      },
      "destroyOnClose": {
       "!type": "bool",
       "!doc": "Invoke the <a href=\"Dialog.html#method_destroy\">destroy</a>\nmethod when the dialog is closed (i.e., remove the Dialog\n<code>boundingBox</code> from the body, purge events etc)."
      },
      "draggable": {
       "!type": "bool",
       "!doc": "Boolean specifying if the Panel should be draggable."
      },
      "dragConfig": {
       "!type": "?",
       "!doc": "Drag configuration."
      },
      "dragInstance": {
       "!type": "+A.DD.Drag",
       "!doc": "Stores the Drag instance for the <code>A.DD.Drag</code> used by\nthis Dialog."
      },
      "modal": {
       "!type": "bool",
       "!doc": "True if the Panel should be displayed in a modal fashion,\nautomatically creating a transparent mask over the document that\nwill not be removed until the Dialog is dismissed. Uses\n<a href=\"OverlayMask.html\">OverlayMask</a>."
      },
      "resizableConfig": {
       "!type": "?",
       "!doc": "Resize configuration."
      },
      "resizableInstance": {
       "!type": "+A.DD.Drag",
       "!doc": "Stores the Resize instance for the <code>A.Resize</code> used by\nthis Dialog."
      },
      "resizable": {
       "!type": "bool",
       "!doc": "Boolean specifying if the Panel should be resizable."
      },
      "stack": {
       "!type": "bool",
       "!doc": "If <code>true</code> give stacking habilities to the Dialog."
      },
      "strings": {
       "!type": "+yui.Object",
       "!doc": "Collection of strings used to label elements of the Dialogs UI."
      },
      "alignToViewport": {
       "!type": "fn(int: ?, int: ?)",
       "!doc": "Aligns the Dialog to the viewport."
      }
     },
     "Dialog.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Dialog.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Dialog."
     }
    },
    "DialogManager": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_dialog.DialogManager",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayManager.prototype",
      "findByChild": {
       "!type": "fn(child: +_yui.node.Node) -> +widget.Widget",
       "!doc": "Find the <a href=\"Widget.html\">Widget</a> instance based on a child\nelement."
      },
      "closeByChild": {
       "!type": "fn(child: +_yui.node.Node) -> +aui_dialog.Dialog",
       "!doc": "<p>Invoke the <a href=\"Dialog.html#method_close\">close</a> method from\nthe Dialog which contains the <code>child</code> element.</p>\n\nExample:\n\n<pre><code>A.DialogManager.closeByChild(#dialogContent1);</code></pre>"
      },
      "refreshByChild": {
       "!type": "fn(child: +_yui.node.Node)",
       "!doc": "<p>Invoke the <a href=\"IOPlugin.html#method_start\">start</a> method\nfrom the <a href=\"IOPlugin.html\">IOPlugin</a> plugged on this Dialog\ninstance. If there is no IOPlugin plugged it does nothing.</p>\n\nExample:\n\n<pre><code>A.DialogManager.refreshByChild(#dialogContent1);</code></pre>"
      }
     }
    }
   },
   "aui_editable": {
    "Editable": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_editable.Editable",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "cancelButton": {
       "!type": "string",
       "!doc": "<a href=\"ButtonItem.html\">ButtonItem</a> constructor Object for the\ncancelButton."
      },
      "contentText": {
       "!type": "string",
       "!doc": "Content text."
      },
      "formatInput": {
       "!type": "fn()",
       "!doc": "Function to format the input text displayed on the input."
      },
      "formatOutput": {
       "!type": "fn()",
       "!doc": "Function to format the output text displayed on the input."
      },
      "node": {
       "!type": "+node.Node",
       "!doc": "Node to setup the editable."
      },
      "eventType": {
       "!type": "string",
       "!doc": "Event type to initialize the editable."
      },
      "renderTo": {
       "!type": "string",
       "!doc": "Node to render the editable."
      },
      "saveButton": {
       "!type": "string",
       "!doc": "<a href=\"ButtonItem.html\">ButtonItem</a> constructor Object for the\nsaveButton."
      },
      "icons": {
       "!type": "+yui.Array",
       "!doc": "Array with icons for the <a href=\"Toolbar.html\">Toolbar</a>."
      },
      "inputType": {
       "!type": "string",
       "!doc": "Type of the input used to edit the <a\nhref=\"Editable.html#config_node\">node</a>."
      },
      "cancel": {
       "!type": "fn()",
       "!doc": "Cancel the editable. Return to the original state."
      },
      "save": {
       "!type": "fn()",
       "!doc": "Save the editable. Fires the\n<a href=\"Editable.html#event_save\">save</a> event."
      }
     },
     "Editable.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Editable.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Editable."
     }
    }
   },
   "aui_event": {
    "AUI~event~input": {
     "!type": "fn()",
     "A.Node.DOM_EVENTS.input": {
      "!type": "+Event.Handle",
      "!doc": "A.Node.DOM_EVENTS.input event."
     },
     "prototype": {
      "void();": {
       "!type": "fn()"
      }
     }
    }
   },
   "aui_image_viewer": {
    "ImageViewer": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_image_viewer.ImageViewer",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayBase.prototype",
      "anim": {
       "!type": "bool",
       "!doc": "If <code>true</code> the navigation is animated."
      },
      "caption": {
       "!type": "string",
       "!doc": "The caption of the displayed image."
      },
      "captionFromTitle": {
       "!type": "bool",
       "!doc": "If <code>true</code> the <a\nhref=\"ImageViewer.html#config_caption\">caption</a> will be pulled\nfrom the title DOM attribute."
      },
      "centered": {
       "!type": "bool",
       "!doc": "If <code>true</code> the Overlay with the image will be positioned\non the center of the viewport."
      },
      "currentIndex": {
       "!type": "number",
       "!doc": "Index of the current image."
      },
      "image": {
       "!type": "+node.Node",
       "!doc": "Image node element used to load the images."
      },
      "imageAnim": {
       "!type": "+yui.Object",
       "!doc": "Configuration attributes passed to the <a href=\"Anim.html\">Anim</a>\nclass."
      },
      "infoTemplate": {
       "!type": "string",
       "!doc": "String template used to display the information."
      },
      "links": {
       "!type": "string",
       "!doc": "Selector or NodeList containing the links where the ImageViewer\nextracts the information to generate the thumbnails."
      },
      "loading": {
       "!type": "bool",
       "!doc": "Whether the image is during a loading state."
      },
      "modal": {
       "!type": "bool",
       "!doc": "Displays the modal <a href=\"OverlayMask.html\">OverlayMask</a> on\nthe viewport. Set to <code>false</code> to disable."
      },
      "preloadAllImages": {
       "!type": "fn()",
       "!doc": "Preload all images."
      },
      "showClose": {
       "!type": "bool",
       "!doc": "Show close icon control."
      },
      "showArrows": {
       "!type": "bool",
       "!doc": "Show the arrow controls."
      },
      "totalLinks": {
       "!type": "bool",
       "!doc": "Helper attribute to get the <code>size</code> of the <a\nhref=\"ImageViewer.html#config_links\">links</a> NodeList."
      },
      "arrowLeftEl": {
       "!type": "+node.Node",
       "!doc": "The element to be used as arrow left."
      },
      "arrowRightEl": {
       "!type": "+node.Node",
       "!doc": "The element to be used as arrow right."
      },
      "captionEl": {
       "!type": "+node.Node",
       "!doc": "The element to be used as caption."
      },
      "closeEl": {
       "!type": "+node.Node",
       "!doc": "The element to be used as close."
      },
      "infoEl": {
       "!type": "+node.Node",
       "!doc": "The element to be used as info."
      },
      "loader": {
       "!type": "+node.Node",
       "!doc": "HTML element to house the <code>img</code> which is being loaded."
      },
      "loadingEl": {
       "!type": "+node.Node",
       "!doc": "The element to be used as loading."
      },
      "maxHeight": {
       "!type": "number",
       "!doc": "The maximum height of the element"
      },
      "maxWidth": {
       "!type": "number",
       "!doc": "The maximum width of the element"
      },
      "close": {
       "!type": "fn()",
       "!doc": "Close the ImageViewer."
      },
      "getLink": {
       "!type": "fn(currentIndex: number) -> +node.Node",
       "!doc": "Get the Node reference to the <code>currentIndex</code> element from\nthe <a href=\"ImageViewer.html#config_links\">links</a>."
      },
      "getCurrentLink": {
       "!type": "fn() -> +node.Node",
       "!doc": "Get the current loaded node link reference."
      },
      "loadImage": {
       "!type": "fn(src: string)",
       "!doc": "Load an image <code>src</code> on the ImageViewer."
      },
      "hasLink": {
       "!type": "fn(currentIndex: number) -> bool",
       "!doc": "Check if there is a node reference for the <code>currentIndex</code>."
      },
      "hasNext": {
       "!type": "fn() -> bool",
       "!doc": "Check if there is a next element to navigate."
      },
      "hasPrev": {
       "!type": "fn() -> bool",
       "!doc": "Check if there is a previous element to navigate."
      },
      "hideControls": {
       "!type": "fn()",
       "!doc": "Hide all UI controls (i.e., arrows, close icon etc)."
      },
      "hideMask": {
       "!type": "fn()",
       "!doc": "Hide the <a href=\"OverlayMask.html\">OverlayMask</a> used when <a\nhref=\"ImageViewer.html#config_modal\">modal</a> is <code>true</code>."
      },
      "next": {
       "!type": "fn()",
       "!doc": "Load the previous image."
      },
      "preloadImage": {
       "!type": "fn(currentIndex: number)",
       "!doc": "Preload an image based on its <code>index</code>."
      },
      "showLoading": {
       "!type": "fn()",
       "!doc": "Show the loading icon."
      },
      "showMask": {
       "!type": "fn()",
       "!doc": "Show the the OverlayMask used on the <a\nhref=\"ImageViewer.html#config_modal\">modal</a>."
      },
      "show": {
       "!type": "fn()",
       "!doc": "Show the ImageViewer UI."
      }
     },
     "ImageViewer.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ImageViewer.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ImageViewer."
     }
    },
    "ImageGallery": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_image_viewer.ImageGallery",
     "prototype": {
      "!proto": "_yui.aui_image_viewer.ImageViewer.prototype",
      "autoPlay": {
       "!type": "bool",
       "!doc": "If <code>true</code> the slide show will be played when the\nImageGallery is displayed."
      },
      "delay": {
       "!type": "number",
       "!doc": "Delay in milliseconds to change to the next image."
      },
      "paginator": {
       "!type": "+yui.Object",
       "!doc": "<a href=\"Paginator.html\">Paginator</a> configuration Object. The\n<code>Paginator</code> handles the thumbnails control."
      },
      "paginatorEl": {
       "!type": "+node.Node",
       "!doc": "Element which contains the <a href=\"Paginator.html\">Paginator</a>\nwith the thumbnails."
      },
      "paginatorInstance": {
       "!type": "+aui_paginator.Paginator",
       "!doc": "Stores the <a href=\"Paginator.html\">Paginator</a> instance."
      },
      "paused": {
       "!type": "bool",
       "!doc": "If <code>true</code> the slide show is paused."
      },
      "pausedLabel": {
       "!type": "string",
       "!doc": "Label to display when the slide show is paused."
      },
      "playing": {
       "!type": "bool",
       "!doc": "If <code>true</code> the slide show is playing."
      },
      "playingLabel": {
       "!type": "string",
       "!doc": "Label to display when the slide show is playing."
      },
      "repeat": {
       "!type": "bool",
       "!doc": "Restart the navigation when reach the last element."
      },
      "showPlayer": {
       "!type": "bool",
       "!doc": "Show the player controls (i.e., pause and show buttons)."
      },
      "toolbar": {
       "!type": "+Toolbar constructor.",
       "!doc": "<a href=\"Toolbar.html\">Toolbar</a> with a play, and pause buttons."
      },
      "useOriginalImage": {
       "!type": "bool",
       "!doc": "If <code>true</code> will use the original image as thumbnails."
      },
      "hidePaginator": {
       "!type": "fn()",
       "!doc": "Hide the <a href=\"Paginator.html\">Paginator</a> with the thumbnails\nlist."
      },
      "pause": {
       "!type": "fn()",
       "!doc": "Pause the slide show."
      },
      "play": {
       "!type": "fn()",
       "!doc": "Play the slide show."
      },
      "show": {
       "!type": "fn()",
       "!doc": "<p>Show the ImageGallery.</p>\n\n<p><strong>NOTE:</strong>Overloads the <a\nhref=\"ImageViewer.html\">ImageViewer</a> show method to not loadImage, the\nchangeRequest now is responsible to do that if we invoke the superclass\nshow method its loading the image, and the changeRequest loads again,\navoiding double request.</p>"
      },
      "showPaginator": {
       "!type": "fn()",
       "!doc": "Show the <a href=\"Paginator.html\">Paginator</a> with the thumbnails\nlist."
      }
     },
     "ImageGallery.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ImageGallery.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ImageGallery."
     }
    }
   },
   "aui_io": {
    "A": {
     "Plugin": {
      "IO": {
       "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_io.A.Plugin.IO",
       "prototype": {
        "!proto": "_yui.aui_io.IORequest.prototype",
        "node": {
         "!type": "+node.Node",
         "!doc": "Plug IO in any object we want, the setContent will use the node to\nset the content."
        },
        "failureMessage": {
         "!type": "string",
         "!doc": "Message to be set on the content when the transaction fails."
        },
        "loadingMask": {
         "!type": "+yui.Object",
         "!doc": "Options passed to the <a href=\"LoadingMask.html\">LoadingMask</a>."
        },
        "parseContent": {
         "!type": "bool",
         "!doc": "If true the <a href=\"ParseContent.html\">ParseContent</a> plugin\nwill be plugged to the <a href=\"A.Plugin.IO.html#config_node\">node</a>."
        },
        "showLoading": {
         "!type": "fn()",
         "!doc": "Invoke the <a href=\"OverlayMask.html#method_show\">OverlayMask show</a> method."
        },
        "section": {
         "!type": "string",
         "!doc": "Section where the content will be set in case you are plugging it\non a instace of <a href=\"WidgetStdMod.html\">WidgetStdMod</a>."
        },
        "type": {
         "!type": "string",
         "!doc": "Type of the <code>instance</code> we are pluggin the A.Plugin.IO.\nCould be a Node, or a Widget."
        },
        "where": {
         "!type": "string",
         "!doc": "Where to insert the content, AFTER, BEFORE or REPLACE. If youre plugging a Node, there is a fourth option called OUTER that will not only replace the entire node itself. This is different from REPLACE, in that REPLACE will replace the *contents* of the node, OUTER will replace the entire Node itself."
        },
        "hideLoading": {
         "!type": "fn()",
         "!doc": "Invoke the <a href=\"OverlayMask.html#method_hide\">OverlayMask hide</a> method."
        },
        "setContent": {
         "!type": "fn()",
         "!doc": "Set the content of the <a href=\"A.Plugin.IO.html#config_node\">node</a>."
        },
        "start": {
         "!type": "fn()",
         "!doc": "Overload to the <a href=\"IORequest.html#method_start\">IORequest\nstart</a> method. Check if the <code>host</code> is already rendered,\notherwise wait to after render phase and to show the LoadingMask."
        }
       },
       "A.Plugin.IO.NAME": {
        "!type": "string",
        "!doc": "Static property provides a string to identify the class."
       },
       "A.Plugin.IO.NS": {
        "!type": "string",
        "!doc": "Static property provides a string to identify the namespace."
       },
       "A.Plugin.IO.ATTRS": {
        "!type": "+yui.Object",
        "!doc": "Static property used to define the default attribute\nconfiguration for the A.Plugin.IO."
       }
      }
     },
     "io": {
      "!type": "fn()",
      "prototype": {
       "A.io.request": {
        "!type": "fn(uri: string, config: +_yui.yui.Object) -> +aui_io.IORequest",
        "!doc": "Static method to invoke the <a href=\"IORequest.html\">IORequest</a>. Likewise <a href=\"io.html#method_io\">io</a>."
       }
      }
     }
    },
    "IORequest": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_io.IORequest",
     "prototype": {
      "!proto": "_yui.plugin.Plugin.Base.prototype",
      "autoLoad": {
       "!type": "bool",
       "!doc": "If <code>true</code> invoke the\n<a href=\"IORequest.html#method_start\">start</a> method automatically,\ninitializing the IO transaction."
      },
      "cache": {
       "!type": "bool",
       "!doc": "If <code>false</code> the current timestamp will be appended to the\nurl, avoiding the url to be cached."
      },
      "dataType": {
       "!type": "string",
       "!doc": "The type of the request (i.e., could be xml, json, javascript, text)."
      },
      "responseData": {
       "!type": "string",
       "!doc": "This is a normalized attribute for the response data. Its useful\nto retrieve the correct type for the\n<a href=\"IORequest.html#config_dataType\">dataType</a> (i.e., in json\nrequests the <code>responseData</code>) is a JSONObject."
      },
      "uri": {
       "!type": "string",
       "!doc": "URI to be requested using AJAX."
      },
      "active": {
       "!type": "bool",
       "!doc": "Whether the transaction is active or not."
      },
      "cfg": {
       "!type": "string",
       "!doc": "Object containing all the\n<a href=\"io.html#configattributes\">IO Configuration Attributes</a>.\nThis Object is passed to the <code>A.io</code> internally."
      },
      "transaction": {
       "!type": "+yui.Object",
       "!doc": "Stores the IO Object of the current transaction."
      },
      "arguments": {
       "!type": "+yui.Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "context": {
       "!type": "+yui.Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "data": {
       "!type": "+yui.Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "form": {
       "!type": "+yui.Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "headers": {
       "!type": "+yui.Object",
       "!doc": "Set the correct ACCEPT header based on the dataType."
      },
      "method": {
       "!type": "string",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "selector": {
       "!type": "string",
       "!doc": "A selector to be used to query against the response of the\nrequest. Only works if the response is XML or HTML."
      },
      "sync": {
       "!type": "bool",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "timeout": {
       "!type": "number",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "xdr": {
       "!type": "+yui.Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "start": {
       "!type": "fn()",
       "!doc": "Starts the IO transaction. Used to refresh the content also."
      },
      "stop": {
       "!type": "fn()",
       "!doc": "Stops the IO transaction."
      }
     },
     "IORequest.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "IORequest.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the IORequest."
     }
    }
   },
   "aui_live_search": {
    "LiveSearch": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_live_search.LiveSearch",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "data": {
       "!type": "fn()",
       "!doc": "<p>Function to extract the content from the node for the indexing. The\ndefault uses the <code>node.html()</code>. In case if you need to\nindex the id of the nodes, here goes one example:</p>\n\nExample indexing the id of the node instead of the HTML:\n\n<pre><code>function(node) {\n return node.attr(id);\n}\n</code></pre>"
      },
      "delay": {
       "!type": "number",
       "!doc": "Number of milliseconds the filter will be applied to the node list\nafter the user stop typing."
      },
      "hide": {
       "!type": "fn()",
       "!doc": "Function to be executed to hide the node when the data of that node\nnot matches with the filter."
      },
      "index": {
       "!type": "+yui.Array",
       "!doc": "Index for the nodes content."
      },
      "input": {
       "!type": "+node.Node",
       "!doc": "The <code>value</code> of this input node is used to filter the\nresults."
      },
      "matchRegex": {
       "!type": "+RegExp",
       "!doc": "The input <code>value</code> need to matches with this RegExp to be\naccept as a filter (i.e., in order to accept only digits you\ncould use /\\d+/g)."
      },
      "nodes": {
       "!type": "+node.Node",
       "!doc": "Nodes to be indexed for the filtering."
      },
      "searchValue": {
       "!type": "string",
       "!doc": "The text value to search for"
      },
      "show": {
       "!type": "fn()",
       "!doc": "Function to be executed to show the node when the data of that node\nmatches with the filter."
      },
      "filter": {
       "!type": "fn(query: string) -> +yui.Array",
       "!doc": "Filter the <a href=\"LiveSearch.html#config_nodes\">nodes</a> based on\nthe input value."
      },
      "refreshIndex": {
       "!type": "fn()",
       "!doc": "Refreshes the <a href=\"LiveSearch.html#config_index\">index</a>."
      },
      "search": {
       "!type": "fn(value: string)",
       "!doc": "Searches for the user supplied value."
      }
     },
     "LiveSearch.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "LiveSearch.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the LiveSearch."
     }
    }
   },
   "aui_loading_mask": {
    "LoadingMask": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_loading_mask.LoadingMask",
     "prototype": {
      "!proto": "_yui.plugin.Plugin.Base.prototype",
      "messageEl": {
       "!type": "string",
       "!doc": "Node element to display the message."
      },
      "strings": {
       "!type": "+yui.Object",
       "!doc": "Strings used on the LoadingMask. See\n<a href=\"Widget.html#method_strings\">strings</a>."
      },
      "target": {
       "!type": "+node.Node",
       "!doc": "Node where the mask will be positioned and re-dimensioned."
      },
      "centerMessage": {
       "!type": "fn()",
       "!doc": "Center the\n<a href=\"LoadingMask.html#config_messageEl\">messageEl</a> with the\n<a href=\"LoadingMask.html#config_target\">target</a> node."
      },
      "refreshMask": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>refreshMask</code> method."
      },
      "hide": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>hide</code> method."
      },
      "show": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>show</code> method."
      },
      "toggle": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>toggle</code> method."
      }
     },
     "LoadingMask.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "LoadingMask.NS": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the namespace."
     },
     "LoadingMask.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the LoadingMask."
     }
    }
   },
   "aui_nested_list": {
    "NestedList": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_nested_list.NestedList",
     "prototype": {
      "!proto": "_yui.base.Base.prototype"
     },
     "NestedList.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "NestedList.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the NestedList."
     }
    }
   },
   "aui_node": {
    "A": {
     "Node": {
      "!type": "fn() -> +_yui.aui_node.A.Node",
      "prototype": {
       "ancestors": {
        "!type": "fn(selector: string) -> +dom.NodeList",
        "!doc": "<p>Returns the current ancestors of the node element filtered by a className.\nThis is an optimized method for finding ancestors by a specific CSS class name.</p>\n\nExample:\n\n<pre><code>\nA.one(#nodeId).ancestorsByClassName(aui-helper-hidden);\n</code></pre>"
       },
       "appendTo": {
        "!type": "fn(selector: +_yui.node.Node) -> !this",
        "!doc": "<p>Insert the node instance to the end of the <code>selector</code>\nelement.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\n// using another Node instance\nvar body = A.one(body);\nnode.appendTo(body);\n// using a CSS selector\nnode.appendTo(#container);\n</code></pre>"
       },
       "attr": {
        "!type": "fn(name: string, value: string) -> string",
        "!doc": "<p>Get or Set the value of an attribute for the first element in the\nset of matched elements. If only the <code>name</code> is passed it\nworks as a getter.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.attr(title, Setting a new title attribute);\n// Alert the value of the title attribute: Setting a new title attribute\nalert( node.attr(title) );\n</code></pre>"
       },
       "clone": {
        "!type": "fn() -> +node.Node",
        "!doc": "Normalizes the behavior of cloning a node, which by default should not clone\nthe events that are attached to it.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.clone().appendTo(body);\n</code></pre>"
       },
       "center": {
        "!type": "fn(val: +_yui.yui.Array) -> !this",
        "!doc": "<p>Centralize the current Node instance with the passed\n<code>val</code> Array, Node, String, or Region, if not specified, the body will be\nused.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\n// Center the <code>node</code> with the <code>#container</code>.\nnode.center(#container);\n</code></pre>"
       },
       "empty": {
        "!type": "fn() -> !this",
        "!doc": "<p>This method removes not only child (and other descendant) elements,\nbut also any text within the set of matched elements. This is because,\naccording to the DOM specification, any string of text within an element\nis considered a child node of that element.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.empty();\n</code></pre>"
       },
       "getDOM": {
        "!type": "fn() -> +HTMLNode",
        "!doc": "Retrieves the DOM node bound to a Node instance. See\n<a href=\"Node.html#method_getDOMNode\">getDOMNode</a>."
       },
       "getBorderWidth": {
        "!type": "fn(sides: string) -> number",
        "!doc": "Return the combined width of the border for the specified sides."
       }
      }
     },
     "NodeList": {
      "!type": "fn() -> +_yui.aui_node.A.NodeList",
      "prototype": {
       "all": {
        "!type": "fn()",
        "!doc": "See <a href=\"Node.html#method_all\">Node all</a>."
       },
       "first": {
        "!type": "fn() -> +node.Node",
        "!doc": "Returns the first element in the node list collection."
       },
       "getDOM": {
        "!type": "fn()",
        "!doc": "See <a href=\"Node.html#method_getDOM\">Node getDOM</a>."
       },
       "last": {
        "!type": "fn() -> +node.Node",
        "!doc": "Returns the last element in the node list collection."
       },
       "one": {
        "!type": "fn()",
        "!doc": "See <a href=\"Node.html#method_one\">Node one</a>."
       },
       "getBody": {
        "!type": "fn()",
        "!doc": "Get the body node. Shortcut to <code>A.one(body)</code>."
       },
       "getDoc": {
        "!type": "fn()",
        "!doc": "Get the document node. Shortcut to <code>A.one(document)</code>."
       },
       "getWin": {
        "!type": "fn()",
        "!doc": "Get the window node. Shortcut to <code>A.one(window)</code>."
       }
      }
     },
     "HTML5": {
      "!type": "fn()",
      "prototype": {
       "IECreateFix": {
        "!type": "fn(frag: +_yui.node.Node, content: string) -> +node.Node",
        "!doc": "Receives a <code>frag</code> and a HTML content. This method\nshivs the HTML5 nodes appended to a Node or fragment which is not\non the document yet."
       }
      }
     }
    }
   },
   "aui_overlay": {
    "OverlayContextPanel": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_overlay.OverlayContextPanel",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayContext.prototype",
      "anim": {
       "!type": "+yui.Object",
       "!doc": "Enable or disable the animation for hide and show. Used as the\n<a href=\"Anim.html\">Anim</a> configuration attributes.\n\n<pre><code>anim: {\n show: {\n \tduration: .9\n },\n hide: {\n \tduration: .2\n }\n}\n</code></pre>"
      },
      "arrow": {
       "!type": "string",
       "!doc": "Position where the arrow will be placed. See\n<a href=\"OverlayContextPanel.html#config_showArrow\">showArrow</a>. If its\nnot set, it will get the value set on the\n<a href=\"OverlayContext.html#config_align\">align</a> point. Here is a\nlist of valid arrows bc, bl, br, cc, lb, lc, lt, rb,\nrc, rl."
      },
      "hideOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_hideOn\">hideOn</a>."
      },
      "showOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_showOn\">showOn</a>."
      },
      "showArrow": {
       "!type": "bool",
       "!doc": "If true the OverlayContextPanel will show an arrow positioned on the\n<a href=\"OverlayContextPanel.html#config_arrow\">arrow</a> point."
      },
      "stack": {
       "!type": "bool",
       "!doc": "Gives stacking habilities to the OverlayContextPanel."
      },
      "align": {
       "!type": "fn(node: +_yui.node.Node, points: [+_yui.yui.Array])",
       "!doc": "Aligns the OverlayContextPanel to the provided node (or viewport) using the\nprovided points. Inherited from\n<a href=\"Overlay.html#method_align\">Overlay</a>."
      },
      "fixPointerColor": {
       "!type": "fn()",
       "!doc": "OverlayContextPanel uses a imageless arrow, which involves some CSS technics.\nThis method is meant to fix the color of the borders of the arrow."
      },
      "getAlignPoint": {
       "!type": "fn() -> string",
       "!doc": "Normalize the align point value. The align point cc is not a valid\nposition for the arrow and then its normalized to the bc point."
      },
      "hide": {
       "!type": "fn(event: +_yui.event_custom.EventFacade)",
       "!doc": "Hides the OverlayContextPanel."
      }
     },
     "OverlayContextPanel.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayContextPanel.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayContextPanel."
     }
    },
    "OverlayContext": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_overlay.OverlayContext",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayBase.prototype",
      "align": {
       "!type": "+yui.Object",
       "!doc": "Inherited from <a href=\"Overlay.html#config_align\">Overlay</a>."
      },
      "cancellableHide": {
       "!type": "bool",
       "!doc": "Cancel auto hide delay if the user interact with the Overlay\n(focus, click, mouseover)"
      },
      "currentNode": {
       "!type": "+node.Node",
       "!doc": "OverlayContext allow multiple elements to be the\n<a href=\"OverlayContext.html#config_trigger\">trigger</a>, the\ncurrentNode stores the current active one."
      },
      "hideOn": {
       "!type": "string",
       "!doc": "The event which is responsible to hide the OverlayContext."
      },
      "hideOnDocumentClick": {
       "!type": "bool",
       "!doc": "If true the instance is registered on the\n<a href=\"OverlayContextManager.html\">OverlayContextManager</a> static\nclass and will be hide when the user click on document."
      },
      "hideDelay": {
       "!type": "number",
       "!doc": "Number of milliseconds after the hide method is invoked to hide the\nOverlayContext."
      },
      "showOn": {
       "!type": "string",
       "!doc": "The event which is responsible to show the OverlayContext."
      },
      "showDelay": {
       "!type": "number",
       "!doc": "Number of milliseconds after the show method is invoked to show the\nOverlayContext."
      },
      "trigger": {
       "!type": "+node.Node",
       "!doc": "Node, NodeList or Selector which will be used as trigger elements\nto show or hide the OverlayContext."
      },
      "useARIA": {
       "!type": "bool",
       "!doc": "True if Overlay should use ARIA plugin"
      },
      "visible": {
       "!type": "bool",
       "!doc": "If true the OverlayContext is visible by default after the render phase.\nInherited from <a href=\"Overlay.html\">Overlay</a>."
      },
      "hide": {
       "!type": "fn()",
       "!doc": "Shows the OverlayContext."
      },
      "toggle": {
       "!type": "fn(event: +_yui.event_custom.EventFacade)",
       "!doc": "Toggles visibility of the OverlayContext."
      },
      "clearIntervals": {
       "!type": "fn()",
       "!doc": "Clear the intervals to show or hide the OverlayContext. See\n<a href=\"OverlayContext.html#config_hideDelay\">hideDelay</a> and\n<a href=\"OverlayContext.html#config_showDelay\">showDelay</a>."
      },
      "refreshAlign": {
       "!type": "fn()",
       "!doc": "Refreshes the alignment of the OverlayContext with the\n<a href=\"OverlayContext.html#config_currentNode\">currentNode</a>. See\nalso <a href=\"OverlayContext.html#config_align\">align</a>."
      },
      "updateCurrentNode": {
       "!type": "fn(event: +_yui.event_custom.EventFacade)",
       "!doc": "Update the\n<a href=\"OverlayContext.html#config_currentNode\">currentNode</a> with the\n<a href=\"OverlayContext.html#config_align\">align</a> node or the\nevent.currentTarget and in last case with the first item of the\n<a href=\"OverlayContext.html#config_trigger\">trigger</a>."
      }
     },
     "OverlayContext.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayContext.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayContext."
     }
    },
    "OverlayManager": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_overlay.OverlayManager",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "zIndexBase": {
       "!type": "number",
       "!doc": "The zIndex base to be used on the stacking for all overlays\nregistered on the OverlayManager."
      },
      "bringToTop": {
       "!type": "fn(overlay: +_yui.overlay.Overlay)",
       "!doc": "Set the passed overlay zIndex to the highest value."
      },
      "register": {
       "!type": "fn(overlay: +_yui.overlay.Overlay) -> +yui.Array",
       "!doc": "Register the passed <a href=\"Overlay.html\">Overlay</a> to this\nOverlayManager."
      },
      "remove": {
       "!type": "fn(overlay: +_yui.overlay.Overlay) -> +Null",
       "!doc": "Remove the passed <a href=\"Overlay.html\">Overlay</a> from this\nOverlayManager."
      },
      "each": {
       "!type": "fn(fn: fn()) -> +Null",
       "!doc": "Loop through all registered <a href=\"Overlay.html\">Overlay</a> and\nexecute a callback."
      },
      "showAll": {
       "!type": "fn()",
       "!doc": "Invoke the <a href=\"Overlay.html#method_show\">show</a> method from\nall registered Overlays."
      },
      "hideAll": {
       "!type": "fn()",
       "!doc": "Invoke the <a href=\"Overlay.html#method_hide\">hide</a> method from\nall registered Overlays."
      },
      "sortByZIndexDesc": {
       "!type": "fn(a: +_yui.overlay.Overlay, b: +_yui.overlay.Overlay) -> number",
       "!doc": "zIndex comparator. Used on Array.sort."
      }
     },
     "OverlayManager.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayManager.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayManager."
     }
    },
    "OverlayMask": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_overlay.OverlayMask",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayBase.prototype",
      "alignPoints": {
       "!type": "+yui.Array",
       "!doc": "Points to align the <a href=\"Overlay.html\">Overlay</a> used as\nmask."
      },
      "background": {
       "!type": "string",
       "!doc": "Background color of the mask."
      },
      "target": {
       "!type": "+node.Node",
       "!doc": "Node where the mask will be positioned and re-dimensioned. The\ndefault is the document, which means that if not specified the mask\ntakes the full screen."
      },
      "opacity": {
       "!type": "number",
       "!doc": "CSS opacity of the mask."
      },
      "shim": {
       "!type": "bool",
       "!doc": "Use shim option."
      },
      "visible": {
       "!type": "bool",
       "!doc": "If true the Overlay is visible by default after the render phase.\nInherited from <a href=\"Overlay.html\">Overlay</a>."
      },
      "zIndex": {
       "!type": "number",
       "!doc": "zIndex of the OverlayMask."
      },
      "getTargetSize": {
       "!type": "fn() -> +yui.Object",
       "!doc": "Get the size of the\n<a href=\"OverlayMask.html#config_target\">target</a>. Used to dimension\nthe mask node."
      },
      "refreshMask": {
       "!type": "fn()",
       "!doc": "Repaint the OverlayMask UI, respecting the\n<a href=\"OverlayMask.html#config_target\">target</a> size and the\n<a href=\"OverlayMask.html#config_alignPoints\">alignPoints</a>."
      }
     },
     "OverlayMask.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayMask.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayMask."
     }
    }
   },
   "aui_paginator": {
    "Paginator": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_paginator.Paginator",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "alwaysVisible": {
       "!type": "bool",
       "!doc": "If true the Paginator will be always visible, even when the number\nof pages is 0. To hide the paginator controls automatically when\nthere is no pages to display use <code>false</code>."
      },
      "containers": {
       "!type": "+node.Node",
       "!doc": "The Paginator controls UI could be displayed in more than one\ncontainer (i.e., in the header and footer of a list). Pass a\n<a href=\"NodeList.html\">NodeList</a> or a selector to grab the\ncontainers."
      },
      "firstPageLink": {
       "!type": "+node.Node",
       "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nfirst link element."
      },
      "firstPageLinkLabel": {
       "!type": "string",
       "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_firstPageLink\">firstPageLink</a> element."
      },
      "lastPageLink": {
       "!type": "+node.Node",
       "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nlast link element."
      },
      "lastPageLinkLabel": {
       "!type": "string",
       "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_lastPageLink\">lastPageLink</a> element."
      },
      "maxPageLinks": {
       "!type": "number",
       "!doc": "The max number of page links to be displayed. If lower than the\ntotal number of pages they are still navigable using next and prev\nlinks."
      },
      "nextPageLink": {
       "!type": "+node.Node",
       "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nnext link element."
      },
      "nextPageLinkLabel": {
       "!type": "string",
       "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_nextPageLink\">nextPageLink</a> element."
      },
      "page": {
       "!type": "number",
       "!doc": "Page to display on initial paint."
      },
      "pageContainerTemplate": {
       "!type": "string",
       "!doc": "HTML Template for the page links container."
      },
      "pageLinkContent": {
       "!type": "fn()",
       "!doc": "<p>Function which set the content of the each page element. The passed\nfunction receive as arguments the reference for the page element\nnode, the page number and the index of the page element.</p>\n\nExample:\n\n<pre><code>function(pageEl, pageNumber, index) {\n\t pageEl.html(pageNumber);\n\t}</code></pre>"
      },
      "pageLinkTemplate": {
       "!type": "string",
       "!doc": "HTML Template for the link elements."
      },
      "pageReportEl": {
       "!type": "string",
       "!doc": "Node element to display the page report (i.e., (1 of 100))."
      },
      "pageReportLabelTemplate": {
       "!type": "string",
       "!doc": "Template for the\n<a href=\"Paginator.html#config_pageReportEl\">pageReportEl</a> content.\nNote the placeholders for the page {page} and the total pages\n{totalPages}."
      },
      "prevPageLink": {
       "!type": "+node.Node",
       "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nprev link element."
      },
      "prevPageLinkLabel": {
       "!type": "string",
       "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_prevPageLink\">prevPageLink</a> element."
      },
      "rowsPerPageOptions": {
       "!type": "+yui.Array",
       "!doc": "Array to be displayed on the generated HTML Select element with the\n<a href=\"Paginator.html#config_rowsPerPage\">rowsPerPage</a>\ninformation. (i.e., [1,3,5,7], will display these values on the\nselect)"
      },
      "rowsPerPage": {
       "!type": "number",
       "!doc": "Number of records constituting a \"page\"."
      },
      "rowsPerPageEl": {
       "!type": "+node.Node",
       "!doc": "Node element to display the\n<a href=\"Paginator.html#config_rowsPerPage\">rowsPerPage</a>."
      },
      "state": {
       "!type": "+yui.Object",
       "!doc": "Generates information to the <code>changeRequest</code> event. See\n<a href=\"Paginator.html#method_changeRequest\">changeRequest</a>."
      },
      "template": {
       "!type": "string",
       "!doc": "Template used to render controls. The string will be used as\ninnerHTML on all specified container nodes. Bracketed keys (e.g.\n{pageLinks}) in the string will be replaced with an instance of the\nso named ui component."
      },
      "total": {
       "!type": "number",
       "!doc": "Total number of records to paginate through."
      },
      "totalEl": {
       "!type": "string",
       "!doc": "Node element to display the total information."
      },
      "totalLabel": {
       "!type": "string",
       "!doc": "The label markup to the total information."
      },
      "totalPages": {
       "!type": "number",
       "!doc": "Number of pages. Calculated based on the\n<a href=\"Paginator.html#config_total\">total</a> divided by the\n<a href=\"Paginator.html#config_rowsPerPage\">rowsPerPage</a>."
      },
      "calculateRange": {
       "!type": "fn(name: +Type) -> +yui.Object",
       "!doc": "Create a range to display on the pageLinks, keep the current page on\ncenter."
      },
      "changeRequest": {
       "!type": "fn()",
       "!doc": "Fires <a href=\"Paginator.html#event_changeRequest\">changeRequest</a>\nevent. This is the most important event because its responsible to\nupdate the UI, invoked <code>.setState(newState)</code> to update the\nUI."
      },
      "eachContainer": {
       "!type": "fn(fn: fn())",
       "!doc": "Loop through all\n<a href=\"Paginator.html#config_containers\">containers</a> and execute the\npassed callback."
      },
      "hasNextPage": {
       "!type": "fn() -> bool",
       "!doc": "Check if there is a next page."
      },
      "hasPage": {
       "!type": "fn(page: number) -> bool",
       "!doc": "Check if the <code>page</code> exists."
      },
      "hasPrevPage": {
       "!type": "fn() -> bool",
       "!doc": "Check if there is a previous page."
      },
      "setState": {
       "!type": "fn(v: +_yui.yui.Object)",
       "!doc": "Public setter for <a href=\"Paginator.html#config_state\">state</a>."
      }
     },
     "Paginator.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Paginator.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Paginator."
     }
    }
   },
   "aui_panel": {
    "Panel": {
     "!type": "fn(object: +_yui.yui.Object) -> +_yui.aui_panel.Panel",
     "prototype": {
      "!proto": "_yui.widget.Widget.prototype",
      "collapsed": {
       "!type": "bool",
       "!doc": "Whether the panel is displayed collapsed."
      },
      "collapsible": {
       "!type": "bool",
       "!doc": "Whether the panel is able to be collapsed."
      },
      "title": {
       "!type": "bool",
       "!doc": "The title to be displayed on the Panel."
      },
      "icons": {
       "!type": "+yui.Array",
       "!doc": "<p>Array of <a href=\"ButtonItem.html\">ButtonItem</a> configuration objects to be displayed as icons\non the Panel title.</p>\n\nExample:\n\n<pre><code>icons: [ { icon: close, id: close } ]</code></pre>\n\nFor more information how to use this option see\n<a href=\"ButtonItem.html\">ButtonItem</a>."
      },
      "strings": {
       "!type": "+yui.Object",
       "!doc": "Collection of strings used to label elements of the Panels UI."
      },
      "useARIA": {
       "!type": "bool",
       "!doc": "True if Panel should use ARIA plugin"
      },
      "collapse": {
       "!type": "fn()",
       "!doc": "Collapse the panel setting the\n<a href=\"Panel.html#config_collapsed\">collapsed</a> attribute to\n<code>true</code>."
      },
      "expand": {
       "!type": "fn()",
       "!doc": "Expand the panel setting the\n<a href=\"Panel.html#config_collapsed\">collapsed</a> attribute to\n<code>false</code>."
      },
      "toggle": {
       "!type": "fn()",
       "!doc": "Toggle the visibility of the Panel toggling the value of the\n<a href=\"Widget.html#config_visible\">visible</a> attribute."
      },
      "toggleCollapse": {
       "!type": "fn()",
       "!doc": "Toggle the <a href=\"Panel.html#config_collapsed\">collapsed</a> value.\nExpanding and collapsing the Panel."
      }
     },
     "Panel.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Panel."
     }
    }
   },
   "aui_parse_content": {
    "ParseContent": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_parse_content.ParseContent",
     "prototype": {
      "!proto": "_yui.plugin.Plugin.Base.prototype",
      "globalEval": {
       "!type": "fn(data: string)",
       "!doc": "Global eval the <data>data</data> passed."
      },
      "parseContent": {
       "!type": "fn(content: string) -> string",
       "!doc": "Extract the <code>script</code> tags from the string content and\nevaluate the chunks."
      }
     },
     "ParseContent.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ParseContent.NS": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the namespace."
     },
     "ParseContent.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ParseContent."
     }
    }
   },
   "aui_portal_layout": {
    "PortalLayout": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_portal_layout.PortalLayout",
     "prototype": {
      "!proto": "_yui.base.Base.prototype"
     },
     "PortalLayout.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "PortalLayout.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the PortalLayout."
     }
    }
   },
   "aui_progressbar": {
    "ProgressBar": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_progressbar.ProgressBar",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "height": {
       "!type": "number",
       "!doc": "Display height of the progressbar."
      },
      "label": {
       "!type": "string",
       "!doc": "Display label of the progressbar. If not specified try to query\nusing HTML_PARSER an element inside contentBox which matches\n<code>aui-progressbar-text</code> and get its innerHTML to be\nused as label."
      },
      "max": {
       "!type": "number",
       "!doc": "Represents the top value for the bar. The bar will be fully\nextended when reaching this value. Values higher than this will\nbe ignored."
      },
      "min": {
       "!type": "number",
       "!doc": "Represents the lowest value for the bar. The bar will be\ntotally collapsed when reaching this value. Values lower than\nthis will be ignored."
      },
      "orientation": {
       "!type": "string",
       "!doc": "Display orientation of the progressbar (i.e. vertical or\nhorizontal)."
      },
      "ratio": {
       "!type": "number",
       "!doc": "Calculate the ratio based on <code>max</code> and\n<code>min</code> values."
      },
      "step": {
       "!type": "number",
       "!doc": "Calculate the progressbar step based on <code>ratio</code>\nvalue."
      },
      "statusNode": {
       "!type": "string",
       "!doc": "DOM Node to display the satus bar of the progressbar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-progressbar-status</code>."
      },
      "textNode": {
       "!type": "string",
       "!doc": "DOM Node to display the text of the progressbar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-progressbar-text</code>."
      },
      "value": {
       "!type": "number",
       "!doc": "The value for the bar. Valid values are in between the minValue\nand maxValue attributes."
      }
     },
     "ProgressBar.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ProgressBar.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ProgressBar."
     },
     "ProgressBar.HTML_PARSER": {
      "!type": "+yui.Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "aui_rating": {
    "Rating": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_rating.Rating",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "disabled": {
       "!type": "bool",
       "!doc": "Whether the Rating is disabled or not. Disabled Ratings dont allow\nhover or click, just display selected stars."
      },
      "canReset": {
       "!type": "bool",
       "!doc": "If <code>true</code> could be reseted (i.e., have no values\nselected)."
      },
      "defaultSelected": {
       "!type": "number",
       "!doc": "The number of selected starts when the Rating render."
      },
      "elements": {
       "!type": "+dom.NodeList",
       "!doc": "<a href=\"NodeList.html\">NodeList</a> of elements used on the\nRating. Each element is one Star."
      },
      "hiddenInput": {
       "!type": "+node.Node",
       "!doc": "Hidden input to handle the selected value. This hidden input\nreplace the radio elements and keep the same name."
      },
      "inputName": {
       "!type": "string",
       "!doc": "Name of the <a\nhref=\"Rating.html#config_hiddenInput\">hiddenInput</a> element. If\nnot specified will use the name of the replaced radio."
      },
      "label": {
       "!type": "string",
       "!doc": "Label to be displayed with the Rating elements."
      },
      "labelNode": {
       "!type": "string",
       "!doc": "DOM Node to display the text of the StarRating. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-rating-label-element</code>."
      },
      "selectedIndex": {
       "!type": "number",
       "!doc": "Stores the index of the selected element."
      },
      "showTitle": {
       "!type": "bool",
       "!doc": "If <code>true</code> will extract the value of the\n<code>title</code> attribute on the radio, and use it on the\ngenerated Rating elements."
      },
      "size": {
       "!type": "number",
       "!doc": "Number of Rating elements to be displayed."
      },
      "title": {
       "!type": "string",
       "!doc": "If set, will be used when there is no DOM <code>title</code> on the\nradio elements."
      },
      "value": {
       "!type": "string",
       "!doc": "Stores the value of the current selected Rating element."
      },
      "clearSelection": {
       "!type": "fn()",
       "!doc": "Clear all selected starts to the default state."
      },
      "select": {
       "!type": "fn(index: number)",
       "!doc": "Selects the <code>index</code> Rating element."
      },
      "fillTo": {
       "!type": "fn(index: number, className: string)",
       "!doc": "Add the <code>className</code> on the the <code>index</code> element\nand all the previous Rating elements."
      },
      "indexOf": {
       "!type": "fn(elem: +_yui.node.Node) -> number",
       "!doc": "Finds the index of the <code>elem</code>."
      }
     },
     "Rating.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Rating.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Rating."
     },
     "StarRating.HTML_PARSER": {
      "!type": "+yui.Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    },
    "ThumbRating": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_rating.ThumbRating",
     "prototype": {
      "!proto": "_yui.aui_rating.Rating.prototype",
      "size": {
       "!type": "number",
       "!doc": "The size on ThumbRating is always 2 (i.e., thumb up and thumb down)."
      },
      "fillTo": {
       "!type": "fn(index: number, className: string)",
       "!doc": "Add the <code>className</code> on the the <code>index</code> element\nand all the previous Rating elements."
      }
     },
     "ThumbRating.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ThumbRating.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ThumbRating."
     }
    }
   },
   "aui_textboxlist": {
    "Textboxlist": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_textboxlist.Textboxlist",
     "prototype": {
      "!proto": "_yui.aui_autocomplete.AutoComplete.prototype",
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
      "constrainBorderInfo": {
       "!type": "+yui.Object",
       "!doc": "Cache the border widths of the contrain node if constrain\noption is being used."
      },
      "dateFormat": {
       "!type": "string",
       "!doc": "The default date format string which can be overriden for\nlocalization support. The format must be valid according to\n<a href=\"DataType.Date.html\">A.DataType.Date.format</a>."
      },
      "firstDayOfWeek": {
       "!type": "number",
       "!doc": "First day of the week: Sunday is 0, Monday is 1."
      },
      "undefined": {
       "!type": "fn()",
       "!doc": "Mapping UTF-8 groups of characters. Based on Steven Levithans XRegExp\nproject (http://xregexp.com)"
      },
      "match": {
       "!type": "fn(str: string, group: string, flags: string)",
       "!doc": "Tests a string against an Unicode pattern. Returns the first match."
      },
      "test": {
       "!type": "fn(str: string, group: string, flags: string)",
       "!doc": "Tests a string against an Unicode pattern. Returns true or false."
      }
     },
     "Textboxlist.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Textboxlist.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Textboxlist."
     }
    }
   },
   "aui_toolbar": {
    "Toolbar": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_toolbar.Toolbar",
     "prototype": {
      "!proto": "_yui.aui_component.Component.prototype",
      "activeState": {
       "!type": "bool",
       "!doc": "Receives an interaction state of active when the user clicks on it."
      },
      "children": {
       "!type": "+yui.Array",
       "!doc": "Receives the toolbar items."
      },
      "defaultState": {
       "!type": "bool",
       "!doc": "Receives a default interaction state."
      },
      "hoverState": {
       "!type": "bool",
       "!doc": "Receives an interaction state of hover during the\n<code>mouseover</code> event."
      },
      "defaultChildType": {
       "!type": "string",
       "!doc": "The default type of child widget to render into the Element"
      },
      "orientation": {
       "!type": "string",
       "!doc": "Representing the orientation of the progress bar. Could be\n<code>horizontal</code> or <code>vertical</code>."
      }
     }
    }
   },
   "aui_tooltip": {
    "Tooltip": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_tooltip.Tooltip",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayContextPanel.prototype",
      "anim": {
       "!type": "+yui.Object",
       "!doc": "See <a href=\"OverlayContextPanel.html#config_anim\">OverlayContextPanel anim</a>."
      },
      "align": {
       "!type": "+yui.Object",
       "!doc": "See <a href=\"Overlay.html#config_align\">OverlayContextPanel align</a>."
      },
      "showOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_showOn\">OverlayContext showOn</a>."
      },
      "hideOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_showOn\">OverlayContext showOn</a>."
      },
      "undefined": {
       "!type": "fn()",
       "!doc": "Prevents display:none from being applied to the tooltip when it is hidden because we\ncannot properly align a hidden tooltip with display:none since we cant accurately\nget its computed x and y position."
      },
      "hideDelay": {
       "!type": "number",
       "!doc": "See <a href=\"OverlayContext.html#config_hideDelay\">OverlayContext hideDelay</a>."
      },
      "title": {
       "!type": "bool",
       "!doc": "Use the content of the <code>title</code> attribute as the Tooltip\ncontent."
      },
      "show": {
       "!type": "fn()",
       "!doc": "Over-ride the <code>show</code> to invoke the\n<a href=\"Tooltip.html#method__loadBodyContentFromTitle\">_loadBodyContentFromTitle</a>.\nSee <a href=\"OverlayContext.html#config_show\">OverlayContext show</a>."
      }
     },
     "Tooltip.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Tooltip.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Tooltip."
     }
    }
   },
   "aui_tree": {
    "TreeData": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_tree.TreeData",
     "prototype": {
      "!proto": "_yui.base.Base.prototype",
      "container": {
       "!type": "+node.Node",
       "!doc": "Container to nest children nodes. If has cntainer its not a leaf."
      },
      "children": {
       "!type": "+yui.Array",
       "!doc": "Array of children (i.e. could be a JSON metadata object or a TreeNode instance)."
      },
      "index": {
       "!type": "+yui.Object",
       "!doc": "Index the nodes."
      },
      "getNodeById": {
       "!type": "fn(uid: string) -> +aui_tree.TreeNode",
       "!doc": "Get a TreeNode by id."
      },
      "isRegistered": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode) -> bool",
       "!doc": "Whether the TreeNode is registered on this TreeData."
      },
      "updateReferences": {
       "!type": "fn(TreeNode: +_yui.node.Node, TreeNode: +ParentNode, TreeView: +OwnerTree)",
       "!doc": "Update the references of the passed TreeNode."
      },
      "refreshIndex": {
       "!type": "fn()",
       "!doc": "Refresh the index (i.e. re-index all nodes)."
      },
      "registerNode": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode)",
       "!doc": "Register the passed TreeNode on this TreeData."
      },
      "updateIndex": {
       "!type": "fn(index: +_yui.yui.Object)",
       "!doc": "Update the <a href=\"TreeData.html#config_index\">index</a> attribute value."
      },
      "unregisterNode": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode)",
       "!doc": "Unregister the passed TreeNode from this TreeData."
      },
      "collapseAll": {
       "!type": "fn()",
       "!doc": "Collapse all children of the TreeData."
      },
      "expandAll": {
       "!type": "fn()",
       "!doc": "Expand all children of the TreeData."
      },
      "selectAll": {
       "!type": "fn()",
       "!doc": "Unselect all children of the TreeData."
      },
      "eachChildren": {
       "!type": "fn(fn: fn())",
       "!doc": "Loop each parent node and execute the <code>fn</code> callback."
      },
      "bubbleEvent": {
       "!type": "fn(eventType: string, args: +_yui.yui.Array, cancelBubbling: bool, stopActionPropagation: bool)",
       "!doc": "Bubble event to all parent nodes."
      },
      "createNode": {
       "!type": "fn(options: +_yui.yui.Object) -> +aui_tree.TreeNode",
       "!doc": "Create a TreeNode instance."
      },
      "appendChild": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode, cancelBubbling: bool)",
       "!doc": "Append a child node to the TreeData."
      },
      "item": {
       "!type": "fn(index: number) -> +aui_tree.TreeNode",
       "!doc": "Get a TreeNode children by index."
      },
      "indexOf": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode) -> number",
       "!doc": "Index of the passed TreeNode on the <a\nhref=\"TreeData.html#config_children\">children</a> attribute."
      },
      "hasChildNodes": {
       "!type": "fn() -> bool",
       "!doc": "Whether the TreeData contains children or not."
      },
      "getChildren": {
       "!type": "fn(deep: bool) -> +yui.Array",
       "!doc": "Get an Array of the children nodes of the current TreeData."
      },
      "getEventOutputMap": {
       "!type": "fn(node: +_yui.aui_tree.TreeData) -> +yui.Object",
       "!doc": "Get an object containing metadata for the custom events."
      },
      "removeChild": {
       "!type": "fn(node: +_yui.aui_tree.TreeData)",
       "!doc": "Remove the passed <code>node</code> from the current TreeData."
      },
      "_removeChild": {
       "!type": "fn(node: +_yui.aui_tree.TreeData)",
       "!doc": "Remove the passed <code>node</code> from the current TreeData."
      },
      "empty": {
       "!type": "fn()",
       "!doc": "Delete all children of the current TreeData."
      },
      "insert": {
       "!type": "fn(treeNode: +_yui.aui_tree.TreeNode, refTreeNode: +_yui.aui_tree.TreeNode, where: +_yui.aui_tree.TreeNode)",
       "!doc": "Insert <code>treeNode</code> before or after the <code>refTreeNode</code>."
      },
      "insertAfter": {
       "!type": "fn(treeNode: +_yui.aui_tree.TreeNode, refTreeNode: +_yui.aui_tree.TreeNode)",
       "!doc": "Insert <code>treeNode</code> after the <code>refTreeNode</code>."
      },
      "insertBefore": {
       "!type": "fn(treeNode: +_yui.aui_tree.TreeNode, refTreeNode: +_yui.aui_tree.TreeNode)",
       "!doc": "Insert <code>treeNode</code> before the <code>refTreeNode</code>."
      },
      "getNodeByChild": {
       "!type": "fn(child: +_yui.node.Node) -> +aui_tree.TreeNode",
       "!doc": "Get a TreeNode instance by a child DOM Node."
      }
     },
     "TreeData.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeData.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeData."
     }
    },
    "TreeNode": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_tree.TreeNode",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeData.prototype",
      "draggable": {
       "!type": "bool",
       "!doc": "If true the TreeNode is draggable."
      },
      "ownerTree": {
       "!type": "+aui_tree.TreeView",
       "!doc": "TreeView which contains the current TreeNode."
      },
      "label": {
       "!type": "string",
       "!doc": "Label of the TreeNode."
      },
      "expanded": {
       "!type": "bool",
       "!doc": "Whether the TreeNode is expanded by default."
      },
      "id": {
       "!type": "string",
       "!doc": "Id of the TreeNode."
      },
      "leaf": {
       "!type": "bool",
       "!doc": "Whether the TreeNode could have children or not (i.e. if any\nchildren is present the TreeNode is a leaf)."
      },
      "nextSibling": {
       "!type": "+aui_tree.TreeNode",
       "!doc": "Next sibling of the current TreeNode."
      },
      "prevSibling": {
       "!type": "+aui_tree.TreeNode",
       "!doc": "Previous sibling of the current TreeNode."
      },
      "parentNode": {
       "!type": "+aui_tree.TreeNode",
       "!doc": "Parent node of the current TreeNode."
      },
      "labelEl": {
       "!type": "+node.Node",
       "!doc": "Label element to house the <code>label</code> attribute."
      },
      "hitAreaEl": {
       "!type": "+node.Node",
       "!doc": "Hitarea element."
      },
      "alwaysShowHitArea": {
       "!type": "bool",
       "!doc": "Always show the hitarea icon."
      },
      "iconEl": {
       "!type": "+node.Node",
       "!doc": "Icon element."
      },
      "collapse": {
       "!type": "fn()",
       "!doc": "Collapse the current TreeNode."
      },
      "contains": {
       "!type": "fn(node: +_yui.aui_tree.TreeNode) -> bool",
       "!doc": "Check if the current TreeNode contains the passed <code>node</code>."
      },
      "expand": {
       "!type": "fn()",
       "!doc": "Expand the current TreeNode."
      },
      "getDepth": {
       "!type": "fn() -> number",
       "!doc": "Get the depth of the current TreeNode."
      },
      "isSelected": {
       "!type": "fn() -> bool",
       "!doc": "Whether the current TreeNode is selected or not."
      },
      "isLeaf": {
       "!type": "fn() -> bool",
       "!doc": "Whether the current TreeNode is ancestor of the passed <code>node</code> or not."
      },
      "toggle": {
       "!type": "fn()",
       "!doc": "Toggle the current TreeNode, <code>collapsed</code> or <code>expanded</code>."
      },
      "A.TreeNode.nodeTypes": {
       "!type": "+yui.Object",
       "!doc": "TreeNode types hash map.\n\n<pre><code>A.TreeNode.nodeTypes = {\n radio: A.TreeNodeRadio,\n task: A.TreeNodeTask,\n check: A.TreeNodeCheck,\n node: A.TreeNode,\n io: A.TreeNodeIO\n};</code></pre>"
      }
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeNode.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
     }
    },
    "TreeNodeIO": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_tree.TreeNodeIO",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeNode.prototype",
      "io": {
       "!type": "+yui.Object",
       "!doc": "IO options for the current TreeNode load the children."
      },
      "loading": {
       "!type": "bool",
       "!doc": "Whether the current TreeNode IO transaction is loading."
      },
      "loaded": {
       "!type": "bool",
       "!doc": "Whether the current TreeNode has loaded the content."
      },
      "cache": {
       "!type": "bool",
       "!doc": "Whether the current TreeNode should cache the loaded content or not."
      },
      "initIO": {
       "!type": "fn()",
       "!doc": "Initialize the IO transaction setup on the <a\nhref=\"TreeNode.html#config_io\">io</a> attribute."
      },
      "ioStartHandler": {
       "!type": "fn()",
       "!doc": "IO Start handler."
      },
      "ioCompleteHandler": {
       "!type": "fn()",
       "!doc": "IO Complete handler."
      },
      "ioSuccessHandler": {
       "!type": "fn()",
       "!doc": "IO Success handler."
      },
      "ioFailureHandler": {
       "!type": "fn()",
       "!doc": "IO Failure handler."
      }
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeNode.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
     }
    },
    "TreeNodeCheck": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_tree.TreeNodeCheck",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeNodeIO.prototype",
      "checked": {
       "!type": "bool",
       "!doc": "Whether the TreeNode is checked or not."
      },
      "checkName": {
       "!type": "string",
       "!doc": "Name of the checkbox element used on the current TreeNode."
      },
      "checkContainerEl": {
       "!type": "+node.Node",
       "!doc": "Container element for the checkbox."
      },
      "checkEl": {
       "!type": "+node.Node",
       "!doc": "Checkbox element."
      },
      "check": {
       "!type": "fn()",
       "!doc": "Check the current TreeNode."
      },
      "uncheck": {
       "!type": "fn()",
       "!doc": "Uncheck the current TreeNode."
      },
      "toggleCheck": {
       "!type": "fn()",
       "!doc": "Toggle the check status of the current TreeNode."
      }
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeNode.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
     }
    },
    "TreeNodeTask": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_tree.TreeNodeTask",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeNodeCheck.prototype"
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     }
    },
    "TreeNodeRadio": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_tree.TreeNodeRadio",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeNodeTask.prototype"
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     }
    },
    "TreeView": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_tree.TreeView",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeData.prototype",
      "type": {
       "!type": "string",
       "!doc": "Type of the treeview (i.e. could be file or normal)."
      },
      "lastSelected": {
       "!type": "+aui_tree.TreeNode",
       "!doc": "Last selected TreeNode."
      },
      "io": {
       "!type": "+yui.Object",
       "!doc": "IO metadata for loading the children using ajax."
      }
     },
     "TreeView.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeView.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeView."
     }
    },
    "TreeViewDD": {
     "!type": "fn(config: +_yui.yui.Object) -> +_yui.aui_tree.TreeViewDD",
     "prototype": {
      "!proto": "_yui.aui_tree.TreeView.prototype",
      "helper": {
       "!type": "+node.Node",
       "!doc": "Dragdrop helper element."
      },
      "scrollDelay": {
       "!type": "number",
       "!doc": "Delay of the scroll while dragging the TreeNodes."
      },
      "dropAction": {
       "!type": "string",
       "!doc": "Drop action (i.e. could be append, below or above)."
      },
      "lastY": {
       "!type": "number",
       "!doc": "Last Y."
      },
      "nodeContent": {
       "!type": "+node.Node",
       "!doc": "Reference for the current drop node."
      }
     },
     "TreeViewDD.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeViewDD.ATTRS": {
      "!type": "+yui.Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeViewDD."
     }
    }
   }
  }
 },
 "AUI": "fn() -> +yui.YUI"
};
    
})