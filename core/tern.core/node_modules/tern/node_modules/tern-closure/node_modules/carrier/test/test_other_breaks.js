var net     = require('net'),
    tap     = require('tap'),
    carrier = require('../lib/carrier.js');

tap.test("non-default breaks", function(t) {
  var server;
  var port = 4001;
  var to_be_sents = ["Hel", "lo\n", "Wor", "ld\n", "Glorious", " place"];
  var expecteds = to_be_sents.join('').split("l");

  t.plan(expecteds.length);

  server = net.createServer(function(conn) {
    var received_lines = -1;
    carrier.carry(conn, function(line) {
      received_lines ++;
      t.equal(line, expecteds[received_lines]);
    }, "ascii", "l");
  });
  server.listen(port);

  var client = net.createConnection(port);
  client.on('connect', function() {
    var sent_lines = 0;
    var next = function() {
      if (sent_lines !== to_be_sents.length) {
        client.write(to_be_sents[sent_lines], function() {
          sent_lines ++;
          next();
        });
      }
      else {
        client.end();
      }
    };
    next();
  });

  t.on("end", function() {
    server.close();
  });
});
