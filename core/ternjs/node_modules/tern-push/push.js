(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define(["tern/lib/tern" ], mod);
    mod(tern);
})(function(tern) {
    "use strict";
  
  function createWebSocketServer(server) {
    var WebSocketServer = require('ws').Server;
    return new WebSocketServer({ server: server.parent.httpServer });
  }
  
  tern.Server.prototype.sendToClient = function(type, data) {
    var wss = this.wss;
    if (wss) wss.clients.forEach(function each(client) { client.send(JSON.stringify({"type": type, "data": data})); }); // node context
    else this.signal(type, data); // browser context
  };
  
  tern.registerPlugin("push", function(server, options) {
    if (server.parent && server.parent.httpServer) {
      server.wss = createWebSocketServer(server);
    }  
  });
    
})