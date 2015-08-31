var net     = require('net'),
    tap     = require('tap'),
    carrier = require('../lib/carrier.js');

tap.test("test Buffer handling (when setEncoding is not supported.)", function(t) {
  var server;
  var port = 4001;
  var expected_line = 'hello world';
  var to_be_sent = new Buffer('hello world\r\n');

  t.plan(1);

  server = net.createServer(function(conn) {
    conn.setEncoding = function() { }; // simulate bad setEncoding impl.
    carrier.carry(conn, function(line) {
      t.equal(line, expected_line);
    });
  });
  server.listen(port);

  var client = net.createConnection(port);
  client.on('connect', function() {
    client.end(to_be_sent);
  });

  t.on("end", function() {
    server.close();
  });
});
