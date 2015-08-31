var net     = require('net'),
    tap     = require('tap'),
    carrier = require('../lib/carrier.js');

tap.test("strips CR", function(t) {
  var server;
  var port = 4001;
  var to_be_sents = ["ONE\r\nTWO\r", "\nTHREE\r\n"];
  var expected = ["ONE", "TWO", "THREE"]

  t.plan(3);

  server = net.createServer(function(conn) {
    carrier.carry(conn, function(line) {
      var e = expected.shift();
      t.equal(line, e);
    }, 'utf8', /\r?\n/);
  });
  server.listen(port);

  var client = net.createConnection(port);
  var sendOne = function () {
  	if (to_be_sents.length > 0) {
		client.write(to_be_sents.shift());
		setTimeout(sendOne, 100);
	} else {
		client.end();
	}
  }
  client.once('connect', sendOne);

  t.once("end", function() {
    server.close();
  });
});
