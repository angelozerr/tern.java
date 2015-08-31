var util    = require('util'),
    events = require('events'),
    dgram   = require('dgram');

function Carrier(reader, listener, encoding, separator) {
  var self = this;
  encoding = encoding || 'utf-8';

  var event = reader.constructor === dgram.Socket ? 'message' : 'data';

  var onEvent = function carrierOnEvent(data) {
    var args = Array.prototype.slice.call(arguments, 1);

    if (data instanceof Buffer) {
      data = data.toString(encoding);
    }

    data = buffer + data;
    var lines = data.split(separator);
    buffer = lines.pop();

    lines.forEach(function(line, index) {
      var _args = args.slice(0);

      _args.unshift(line);
      _args.unshift('line');

      defferredEmit.apply(self, _args);
    });
  }

  self.reader = reader;

  if (!separator) {
    separator = /\r?\n/;
  }

  if (listener) {
    self.addListener('line', listener);
  }

  var buffer = '';

  if (typeof reader.setEncoding === 'function')
      reader.setEncoding(encoding);

  reader.on(event, onEvent);

  var ender = function() {
    if (buffer.length > 0) {
      defferredEmit.call(self, 'line', buffer);
      buffer = '';
    }
    defferredEmit.call(self, 'end');
  }

  reader.on('end', ender);

}

util.inherits(Carrier, events.EventEmitter);

exports.carry = function(reader, listener, encoding, separator) {
  return new Carrier(reader, listener, encoding, separator);
}

function defferredEmit() {
  var self = this;
  var args = arguments;
  process.nextTick(function() {
    self.emit.apply(self, args);
  });
}