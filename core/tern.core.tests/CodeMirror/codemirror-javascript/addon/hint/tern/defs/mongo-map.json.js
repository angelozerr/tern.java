(function() {
var def = {
  "!name": "mongo-map",
  "!define": {
    
  },
  "emit": {
    "!type": "fn(key: ?, value: ?)",
    "!url": "http://docs.mongodb.org/manual/reference/command/mapReduce/#requirements-for-the-map-function",
    "!doc": "the emit(key,value) function associates the key with a value."
  }
}
CodeMirror.tern.addDef(def);
})();

