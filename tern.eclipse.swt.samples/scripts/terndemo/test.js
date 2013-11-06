// Use ctrl-space to complete something
co
document.body.a

// Put the cursor in or after an expression, press ctrl-i to
// find its type

var foo = ["array", "of", "strings"];
var bar = foo.slice(0, 2).join("").split("a")[0];

// Works for locally defined types too.

function CTor() { this.size = 10; }
CTor.prototype.hallo = "hallo";

var baz = new CTor;
baz.

// You can press ctrl-q when the cursor is on a variable name to
// rename it. Try it with CTor...

// When the cursor is in an argument list, the arguments are
// shown below the editor.

[1].reduce(  );

// And a little more advanced code...

(function(exports) {
  exports.randomElt = function(arr) {
    return arr[Math.floor(arr.length * Math.random())];
  };
  exports.strList = "foo".split("");
  exports.intList = exports.strList.map(function(s) { return s.charCodeAt(0); });
})(window.myMod = {});

var randomStr = myMod.randomElt(myMod.strList);
var randomInt = myMod.randomElt(myMod.intList);

// A test of the requirejs plug-in. Check the 'test_dep.js' tab,
// notice that the test variable.

requirejs(["test_dep.js"], function(test) {
  var word = test.capitalize(test.garble("coconut"));
  console.log(word);
});
