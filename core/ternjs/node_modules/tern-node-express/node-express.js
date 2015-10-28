(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  infer.registerFunction("express_render", function(_self, _args, argNodes) {
    if (argNodes && argNodes.length && argNodes.length== 2) {
      var arg = _args[1], argNode = argNodes[1], fn = getFunctionType(arg, argNode);
      if (fn) {
        // here we support the second signature.
        var params = fn.argNames, cx = infer.cx(), paths = cx.paths;
        var fnArgs = [];
        for (var j = 0; j < params.length; j++) {
          switch(j) {
          case 0: // Error
            fnArgs.push(new infer.Obj(paths["Error.prototype"]));
            break;
          case 1: // String
            fnArgs.push(new infer.Obj(paths["String.prototype"]));
            break;
          }
        }
        fn.propagate(new infer.IsCallee(infer.cx().topScope, fnArgs, null, infer.ANull))          
      }
    }
  });
  
  function getProto(name, paths) {
    var proto = paths[name + ".prototype"];
    if (proto) return proto;
    return paths[name + ".prototype"] = paths[name].getProp("prototype").types[0];
  }
  
  infer.registerFunction("express_callback", function(_self, _args, argNodes) {
    // router.use can have 2 signatures : 
    // - router.use(string, fn(req, resp, next))
    // - router.use(fn(req, resp, next))    
    // tern can support only one signature with JSON Type Definition. In your case
    // we support the first signature (see Router.prototype.use)
    if (argNodes && argNodes.length) {
      for (var i = 0; i < argNodes.length; i++) {
        var arg = _args[i], argNode = argNodes[i], fn = getFunctionType(arg, argNode);
        if (fn) {
          // here we support the second signature.
          var params = fn.argNames, cx = infer.cx(), paths = cx.paths;
          var fnArgs = [];
          for (var j = 0; j < params.length; j++) {
            switch(j) {
            case 0: // Request
              fnArgs.push(new infer.Obj(getProto("request.Request", paths)));
              break;
            case 1: // Response
              fnArgs.push(new infer.Obj(getProto("response.Response", paths)));
              break;
            case 2: // next
              fnArgs.push(new infer.Fn(null, infer.ANull, [], [], infer.ANull));
              break;
            }
          }
          fn.propagate(new infer.IsCallee(infer.cx().topScope, fnArgs, null, infer.ANull))          
        }
      }      
    }
  });
  
  function getFunctionType(arg, argNode) {
    if (argNode.type =="FunctionExpression") return arg.getFunctionType();
    if (argNode.type =="Identifier" && arg.getFunctionType) return arg.getFunctionType();
  }
  
  tern.registerPlugin("node-express", function(server, options) {
    server.on("preLoadDef", preLoadDef);
    server.addDefs(defs);
  });
  
  function preLoadDef(data) {
    var cx = infer.cx(), localDefs = cx.localDefs;
    if (cx.definitions["node"] && data["!define"] && data["!name"]== "node-express") {
      // copy node definition to localDefs to support "!proto" : "http.IncomingMessage.prototype", for request.Request
      for (var def in cx.definitions["node"]) {
        cx.localDefs[def] = cx.definitions["node"][def];
      }
    }
  }  

  var defs = {
    "!name": "node-express",
    "!define": {
      "!known_modules": {
        express: {
          "!type": "fn() -> application.Application",
          "!url": "http://expressjs.com/4x/api.html#express",
          "!doc": "Create an express application.",
          Router: {
            "!type": "fn(options?: router.RouterOptions) -> +router.Router"
          }
        }
      },
      application: {
        Application: {
          get: {
            "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
            "!effects": ["custom express_callback"],
            "!url": "http://expressjs.com/4x/api.html#app.VERB",
            "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.get()). "
          },
          post: {
            "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
            "!effects": ["custom express_callback"],
            "!url": "http://expressjs.com/4x/api.html#app.VERB",
            "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.post()). "
          },
          put: {
            "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
            "!effects": ["custom express_callback"],
            "!url": "http://expressjs.com/4x/api.html#app.VERB",
            "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.put()). "
          },
          set: {
            "!type": "fn(name: string, value: ?) -> !this",
            "!url": "http://expressjs.com/4x/api.html#app.set",
            "!doc": "Assigns setting name to value."
          },
          enable: {
            "!type": "fn(name: string) -> !this",
            "!url": "http://expressjs.com/4x/api.html#app.enable",
            "!doc": "Set setting name to true."
          },
          enabled: {
            "!type": "fn(name: string) -> bool",
            "!url": "http://expressjs.com/4x/api.html#app.enabled",
            "!doc": "Check if setting name is enabled."
          },
          disable: {
            "!type": "fn(name: string) -> !this",
            "!url": "http://expressjs.com/4x/api.html#app.disable",
            "!doc": "Set setting name to false."
          },
          disabled: {
            "!type": "fn(name: string) -> bool",
            "!url": "http://expressjs.com/4x/api.html#app.disabled",
            "!doc": "Check if setting name is disabled."
          },
          use: {
            "!type": "fn(path?: string, callback: fn(req: +request.Request, res: +response.Response, next: fn())) -> !this",
            "!effects": ["custom express_callback"],
            "!url": "http://expressjs.com/4x/api.html#app.use",
            "!doc" : "Mount the middleware function(s) at the path. If path is not specified, it defaults to \"/\". Mounting a middleware at a path will cause the middleware function to be executed whenever the base of the requested path matches the path."
          },
          engine: {
            "!type": "fn(ext: string, callback: fn()) -> !this",
            "!url": "http://expressjs.com/4x/api.html#app.engine",
            "!doc": "Register the given template engine callback as ext. By default, Express will require() the engine based on the file extension. For example if you try to render a \"foo.jade\" file Express will invoke the following internally, and cache the require() on subsequent calls to increase performance."
          },
          param: {
            "!type": "fn(name?: string, callback: fn(req: +request.Request, res: +response.Response, next: fn())) -> !this",
            "!effects": ["custom express_callback"],
            "!url": "http://expressjs.com/4x/api.html#app.param",
            "!doc" : "Map logic to route parameters. For example, when :user is present in a route path, you may map user loading logic to automatically provide req.user to the route, or perform validations on the parameter input."
          },
          all: {
            "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
            "!effects": ["custom express_callback"],
            "!url": "http://expressjs.com/4x/api.html#app.all",
            "!doc" : "This method functions just like the app.VERB() methods, however it matches all HTTP verbs. This method is extremely useful for mapping \"global\" logic for specific path prefixes or arbitrary matches. For example if you placed the following route at the top of all other route definitions, it would require that all routes from that point on would require authentication, and automatically load a user. Keep in mind that these callbacks do not have to act as end points, loadUser can perform a task, then next() to continue matching subsequent routes."
          },
          route: {
            "!type": "fn(path: string) -> +router.Route",
            "!url": "http://expressjs.com/4x/api.html#app.route",
            "!doc": "Returns an instance of a single route, which can then be used to handle HTTP verbs with optional middleware. Using app.route() is a recommended approach for avoiding duplicate route names (and thus typo errors)."
          },
          locals: {
            "!type": "+Object",
            "!url": "http://expressjs.com/4x/api.html#app.locals",
            "!doc": "Application local variables are provided to all templates rendered within the application. This is useful for providing helper functions to templates, as well as app-level data."
          },
          render: {
            "!type": "fn(view: string, options?: string, callback: fn(err: +Error, html: string)) -> !this",
            "!effects": ["custom express_render"],
            "!url": "http://expressjs.com/4x/api.html#app.render",
            "!doc" : "Render a view with a callback responding with the rendered string. This is the app-level variant of res.render(), and otherwise behaves the same way."
          },
          listen: {
            "!type": "fn(port: number, hostname?: string, backlog?: number, callback?: fn())",
            "!url": "http://expressjs.com/4x/api.html#app.listen",
            "!doc": "Bind and listen for connections on the given host and port. This method is identical to node's http.Server#listen()."
          },
          path: {
            "!type": "fn() -> string",
            "!url": "http://expressjs.com/4x/api.html#app.path",
            "!doc": "Returns the canonical path of the app."
          },
          mountpath: {
            "!type": "string",
            "!url": "http://expressjs.com/4x/api.html#app.mountpath",
            "!doc": "This property refers to the path pattern(s) on which a sub app was mounted."
          },
          on: {
            "!type": "fn(name: string, callback: fn(parent: Application))",
            "!url": "http://expressjs.com/4x/api.html#app.onmount",
            "!doc" : "The mount event is fired on a sub app, when it is mounted on a parent app. The parent app is passed to the callback function."
          }
        }
      },
      request: {
        Request: {
          "!type": "fn()",
          prototype : {
            "!proto" : "http.IncomingMessage.prototype",
            params: {
              "!type": "+Object",
              "!url": "http://expressjs.com/4x/api.html#req.params",
              "!doc": "This property is an object containing properties mapped to the named route \"parameters\". For example, if you have the route /user/:name, then the \"name\" property is available to you as req.params.name. This object defaults to {}."
            },
            query: {
              "!type": "+Object",
              "!url": "http://expressjs.com/4x/api.html#req.query",
              "!doc": "This property is an object containing the parsed query-string, defaulting to {}."
            },
            param: {
              "!type": "fn(name: string, defaultValue?: ?)",
              "!url": "http://expressjs.com/4x/api.html#req.param",
              "!doc": "Return the value of param name when present."
            },
            route: {
                "!type": "+router.Route",
                "!url": "http://expressjs.com/4x/api.html#req.route",
                "!doc": "The currently matched Route."                
            },
            cookies: {
                "!type": "+Object",
                "!url": "http://expressjs.com/4x/api.html#req.cookies",
                "!doc": "When the cookieParser() middleware is used, this object defaults to {}. Otherwise, it contains the cookies sent by the user-agent."                
            },
            signedCookies: {
                "!type": "+Object",
                "!url": "http://expressjs.com/4x/api.html#req.signedCookies",
                "!doc": "When the cookieParser(secret) middleware is used, this object defaults to {}. Otherwise, it contains the signed cookies sent by the user-agent, unsigned and ready for use. Signed cookies reside in a different object to show developer intent; otherwise, a malicious attack could be placed on req.cookie values (which are easy to spoof). Note that signing a cookie does not make it \"hidden\" or encrypted; this simply prevents tampering (because the secret used to sign is private)."                 
            },
            get: {
                "!type": "fn(field: string) -> string",
                "!url": "http://expressjs.com/4x/api.html#req.route",
                "!doc": "Get the case-insensitive request header field. The Referrer and Referer fields are interchangeable. Aliased as req.header(field)."                 
            },
            accepts: {
                "!type": "fn(type: string) -> string",
                "!url": "http://expressjs.com/4x/api.html#req.accepts",
                "!doc": "Check if the given types are acceptable, returning the best match when true, or else undefined (in which case you should respond with 406 \"Not Acceptable\"). The type value may be a single mime type string (such as \"application/json\"), the extension name such as \"json\", a comma-delimited list, or an array. When a list or array is given, the best match (if any) is returned."              
            },
            acceptsCharsets: {
                "!type": "fn(lang: string) -> bool",
                "!url": "http://expressjs.com/4x/api.html#req.acceptsCharsets",
                "!doc": "Check if the given charset are acceptable."                                
            },
            acceptsLanguages: {
                "!type": "fn(encoding: string) -> bool",
                "!url": "http://expressjs.com/4x/api.html#req.acceptsLanguages",
                "!doc": "Check if the given lang are acceptable."                                       
            },
            acceptsEncodings: {
                "!type": "fn(type: string) -> bool",
                "!url": "http://expressjs.com/4x/api.html#req.acceptsLanguages",
                "!doc": "Check if the given encoding are acceptable."                                               
            },
            is: {
                "!type": "fn(type: string) -> string",
                "!url": "http://expressjs.com/4x/api.html#req.is",
                "!doc": "Check if the incoming request contains the \"Content-Type\" header field, and if it matches the give mime type."                     
            },
            ip: {
                "!type": "fn() -> string",
                "!url": "http://expressjs.com/4x/api.html#req.ip",
                "!doc": "Return the remote address (or, if \"trust proxy\" is enabled, the upstream address)."                              
            },
            ips: {
                "!type": "fn() -> [string]",
                "!url": "http://expressjs.com/4x/api.html#req.ips",
                "!doc": "When \"trust proxy\" is true, parse the \"X-Forwarded-For\" ip address list and return an array. Otherwise, an empty array is returned."                                                   
            },
            path: {
                "!type": "fn() -> string",
                "!url": "http://expressjs.com/4x/api.html#req.path",
                "!doc": "Returns the request URL pathname."
            },
            hostname: {
                "!type": "fn() -> string",
                "!url": "http://expressjs.com/4x/api.html#req.hostname",
                "!doc": "Returns the hostname from the \"Host\" header field."              
            },
            fresh: {
                "!type": "fn() -> bool",
                "!url": "http://expressjs.com/4x/api.html#req.fresh",
                "!doc": "Check if the request is \"fresh\" (i.e. whether the Last-Modified and/or the ETag still match)."                           
            },
            stale: {
                "!type": "fn() -> bool",
                "!url": "http://expressjs.com/4x/api.html#req.stale",
                "!doc": "Check if the request is \"stale\" (i.e. the Last-Modified and/or ETag headers do not match)."                                              
            },
            xhr: {
                "!type": "fn() -> bool",
                "!url": "http://expressjs.com/4x/api.html#req.xhr",
                "!doc": "Check if the request was issued with the \"X-Requested-With\" header field set to \"XMLHttpRequest\" (jQuery etc)."                                                                
            },
            protocol: {
                "!type": "fn() -> string",
                "!url": "http://expressjs.com/4x/api.html#req.protocol",
                "!doc": "Return the protocol string \"http\" or \"https\" when requested with TLS. If the \"trust proxy\" setting is enabled, the \"X-Forwarded-Proto\" header field will be trusted. If you're running behind a reverse proxy that supplies https for you, this may be enabled."                   
            },
            secure: {
                "!type": "fn() -> bool",
                "!url": "http://expressjs.com/4x/api.html#req.secure",
                "!doc": "Check if a TLS connection is established."                                                                                 
            },
            subdomains: {
                "!type": "fn() -> [string]",
                "!url": "http://expressjs.com/4x/api.html#req.subdomains",
                "!doc": "Return subdomains as an array."                                                            
            },
            originalUrl: {
                "!type": "string",
                "!url": "http://expressjs.com/4x/api.html#req.originalUrl",
                "!doc": "This property is much like req.url; however, it retains the original request url, allowing you to rewrite req.url freely for internal routing purposes. For example, the \"mounting\" feature of app.use()) will rewrite req.url to strip the mount point."                                        
            },
            baseUrl: {
                "!type": "string",
                "!url": "http://expressjs.com/4x/api.html#req.baseUrl",
                "!doc": "This property refers to the URL path, on which a router instance was mounted.Even if a path pattern or a set of path patterns were used to load the router, the matched string is returned as the baseUrl, instead of the pattern(s)."                                                     
            }
          }
        }
      },
      response: {
        Response: {
          "!type": "fn()",
          prototype : {
            "!proto" : "http.ServerResponse.prototype",
            status: {
                "!type": "fn(statusCode: number)",
                "!url": "http://expressjs.com/4x/api.html#res.status",
                "!doc": "Chainable alias of node's res.statusCode. Use this method to set the HTTP status for the response."                
            },         
            set: {
                "!type": "fn(field: string, value: string)",
                "!url": "http://expressjs.com/4x/api.html#res.set",
                "!doc": "Set header field to value, or pass an object to set multiple fields at once."              
            },
            get: {
                "!type": "fn(field: string) -> string",
                "!url": "http://expressjs.com/4x/api.html#res.get",
                "!doc": "Get the case-insensitive response header field."                                   
            },
            cookie: {
                "!type": "fn(name: string, field: ?, options?: +Object)",
                "!url": "http://expressjs.com/4x/api.html#res.cookie",
                "!doc": "Set cookie name to value, which may be a string or object converted to JSON. The path option defaults to \"/\"."                                   
            },
            clearCookie: {
                "!type": "fn(name: string, options?: +Object)",
                "!url": "http://expressjs.com/4x/api.html#res.clearCookie",
                "!doc": "Clear cookie name. The path option defaults to "/"."                                               	
            },
            redirect: {
                "!type": "fn(status?: number, url: string)",
                "!url": "http://expressjs.com/4x/api.html#res.redirect",
                "!doc": "Redirect to the given url with optional status code defaulting to 302 \"Found\". Express passes the specified URL string as-is to the browser in the Location header, without any validation or manipulation, except in case of back. Redirects can be relative to the root of the host name. Pathname relative redirects are also possible."                                               	           	
            },
            location: {
                "!type": "fn(url: string)",
                "!url": "http://expressjs.com/4x/api.html#res.location",
                "!doc": "Set the location header. Express passes the specified URL string as-is to the browser in the Location header, without any validation or manipulation, except in case of back. Location can be relative to the root of the host name. Pathname relative locations are also possible."                                               	           	            	
            },
            send: {
                "!type": "fn(body?: ?)",
                "!url": "http://expressjs.com/4x/api.html#res.send",
                "!doc": "Send a response."
            },
            json: {
                "!type": "fn(body?: ?)",
                "!url": "http://expressjs.com/4x/api.html#res.json",
                "!doc": "Send a JSON response. This method is identical to res.send() when an object or array is passed. However, it may be used for explicit JSON conversion of non-objects, such as null, undefined, etc. (although these are technically not valid JSON)."
            },
            jsonp: {
                "!type": "fn(body?: ?)",
                "!url": "http://expressjs.com/4x/api.html#res.jsonp",
                "!doc": "Send a JSON response with JSONP support. This method is identical to res.json(), except that it opts-in to JSONP callback support."
            },
            type: {
                "!type": "fn(field: string)",
                "!url": "http://expressjs.com/4x/api.html#res.type",
                "!doc": "Sets the Content-Type to the mime lookup of type, or when "/" is present the Content-Type is simply set to this literal value."                                   
            },
            format: {
                "!type": "fn(object: +Object)",
                "!url": "http://expressjs.com/4x/api.html#res.format",
                "!doc": "Performs content-negotiation on the Accept HTTP header on the request object, when present. It uses req.accepts() to select a handler for the request, based on the acceptable types ordered by their quality values. If the header is not specified, the first callback is invoked. When no match is found, the server responds with 406 \"Not Acceptable\", or invokes the default callback."                                   
            },
            attachment: {
                "!type": "fn(filename?: string)",
                "!url": "http://expressjs.com/4x/api.html#res.attachment",
                "!doc": "Sets the Content-Disposition header field to \"attachment\". If a filename is given, then the Content-Type will be automatically set based on the extname via res.type(), and the Content-Disposition's \"filename=\" parameter will be set."           	
            },
            sendFile: {
                "!type": "fn(path: string, options?: +Object, callback?: fn(err: +Error))",
                "!effects": ["custom express_render"],
                "!url": "http://expressjs.com/4x/api.html#res.sendFile",
                "!doc" : "Transfer the file at the given path. The Content-Type response header field is automatically set based on the filename's extension. Unless the root option is set in the options object, path must be an absolute path of the file. Note: res.sendFile requires Express version to be at least 4.8.0"  	  
            },
            sendStatus: {
                "!type": "fn(statusCode?: number)",
                "!url": "http://expressjs.com/4x/api.html#res.sendStatus",
                "!doc": "Set the response HTTP status code to statusCode and send its string representation as the response body."     	
            },
            download: {
                "!type": "fn(path: string, filename?: string, callback?: fn(err: +Error))",
                "!effects": ["custom express_render"],
                "!url": "http://expressjs.com/4x/api.html#res.download",
                "!doc" : "Transfer the file at path as an \"attachment\". Typically, browsers will prompt the user for download. The Content-Disposition \"filename=\" parameter (i.e. the one that will appear in the brower dialog) is set to path by default. However, you may provide an override filename. When an error has ocurred or transfer is complete the optional callback fn is invoked. This method uses res.sendFile() to transfer the file."           	
            },
            links: {
                "!type": "fn(links: +Object)",
                "!url": "http://expressjs.com/4x/api.html#res.links",
                "!doc" : "Join the given links to populate the \"Link\" response header field."
            },
            locals: {
                "!type": "+Object",
                "!url": "http://expressjs.com/4x/api.html#res.locals",
                "!doc": "Response local variables are scoped to the request, and therefore only available to the view(s) rendered during that request / response cycle (if any). Otherwise, this API is identical to app.locals."
            },
            render: {
                "!type": "fn(view: string, locals?: +Object, callback: fn(err: +Error, html: string))",
                "!effects": ["custom express_render"],
                "!url": "http://expressjs.com/4x/api.html#res.render",
                "!doc" : "Render a view with a callback responding with the rendered string. When an error occurs next(err) is invoked internally. When a callback is provided both the possible error and rendered string are passed, and no automated response is performed."  	             	
            },
            vary: {
                "!type": "fn(field: string)",
                "!url": "http://expressjs.com/4x/api.html#res.vary",
                "!doc": "Adds the field to the Vary response header, if it is not there already."           	            	
            },
            end: {
                "!type": "fn(data: ?, encoding: ?)",
                "!url": "http://expressjs.com/4x/api.html#res.end",
                "!doc": "Inherited from node's http.ServerResponse, ends the response process. The only recommended use is for quickly ending the response without any data. If you need to respond with data, use Express' response methods such as res.send(), res.json() etc.."           	            	           	
            },
            headersSent: {
                "!type": "bool",
                "!url": "http://expressjs.com/4x/api.html#res.headersSent",
                "!doc": "Property indicating if HTTP headers has been sent for the response."          	
            }         
          },
        }
      },
      router: {
        Route: {
          "!type": "fn()",
          prototype : {
            all: {
              "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#app.all",
              "!doc" : "This method functions just like the app.VERB() methods, however it matches all HTTP verbs. This method is extremely useful for mapping \"global\" logic for specific path prefixes or arbitrary matches. For example if you placed the following route at the top of all other route definitions, it would require that all routes from that point on would require authentication, and automatically load a user. Keep in mind that these callbacks do not have to act as end points, loadUser can perform a task, then next() to continue matching subsequent routes."
            },
            get: {
              "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#app.VERB",
              "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.get()). "
            },
            post: {
              "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#app.VERB",
              "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.post()). "
            },
            put: {
              "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#app.VERB",
              "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.put()). "
            },
            "delete": {
              "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#app.VERB",
              "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.delete()). "
            }
          }
        },
        Router: {
          "!type": "fn()",
          prototype : {
            use: {
              "!type": "fn(path?: string, callback: fn(req: +request.Request, res: +response.Response, next: fn())) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#router.use",
              "!doc" : "Use the given middleware function, with optional mount path, defaulting to "/". Middleware is like a plumbing pipe, requests start at the first middleware you define and work their way \"down\" the middleware stack processing for each path they match."
            },
            param: {
              "!type": "fn(name?: string, callback: fn(req: +request.Request, res: +response.Response, next: fn(), id: ?)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#router.param",
              "!doc" : "Map logic to route parameters. For example, when :user is present in a route path you may map user loading logic to automatically provide req.user to the route, or perform validations on the parameter input."
            },
            route: {
              "!type": "fn(path: string) -> +router.Route",
              "!url": "http://expressjs.com/4x/api.html#router.route",
              "!doc": "Returns an instance of a single route, which can then be used to handle HTTP verbs with optional middleware. Using router.route() is a recommended approach to avoiding duplicate route naming and thus typo errors."
            },
            all: {
              "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#app.all",
              "!doc" : "This method functions just like the app.VERB() methods, however it matches all HTTP verbs. This method is extremely useful for mapping \"global\" logic for specific path prefixes or arbitrary matches. For example if you placed the following route at the top of all other route definitions, it would require that all routes from that point on would require authentication, and automatically load a user. Keep in mind that these callbacks do not have to act as end points, loadUser can perform a task, then next() to continue matching subsequent routes."
            },
            get: {
              "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#app.VERB",
              "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.get()). "
            },
            post: {
              "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#app.VERB",
              "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.post()). "
            },
            put: {
              "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#app.VERB",
              "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.put()). "
            },
            "delete": {
              "!type": "fn(path: string, callback: fn(req: +request.Request, res: +response.Response)) -> !this",
              "!effects": ["custom express_callback"],
              "!url": "http://expressjs.com/4x/api.html#app.VERB",
              "!doc": "The app.VERB() methods provide the routing functionality in Express, where VERB is one of the HTTP verbs (such as app.delete()). "
            }
          }
        },
        RouterOptions: {
          caseSensitive : {
            "!type": "bool"
          },
          strict : {
            "!type": "string"
          },
          mergeParams : {
            "!type": "bool"
          }
        }
      }
    }
  }
});
