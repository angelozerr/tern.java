var net     = require('net'),
    tap     = require('tap'),
    carrier = require('../lib/carrier.js');

tap.test("trailing line break", function(t) {
  var server;
  var port = 4001;
  var expected_line = "Hello World";

  t.plan(1);

  server = net.createServer(function(conn) {
    carrier.carry(conn, function(line) {
      t.equal(line, expected_line);
    });
  });
  server.listen(port);

  var client = net.createConnection(port);
  client.on('connect', function() {
    client.end(expected_line + "\n");
  });

  t.on("end", function() {
    server.close();
  });
});
