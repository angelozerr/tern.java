var net     = require('net'),
    tap     = require('tap'),
    carrier = require('../lib/carrier.js');

tap.test("concatentation of fragmented line", function(t) {
  var server;
  var port = 4001;
  var to_be_sents = ["Hel", "lo ", "Wor", "ld"];
  var expected = to_be_sents.join('');

  t.plan(1);

  server = net.createServer(function(conn) {
    carrier.carry(conn, function(line) {
      t.equal(line, expected);
    });
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
