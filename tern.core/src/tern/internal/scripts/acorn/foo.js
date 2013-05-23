var acorn = require("./acorn.js");
var fs = require("fs");
acorn.parse(fs.readFileSync("./test/jquery-string.js", "utf8"));
