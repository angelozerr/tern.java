/**
 * @license
 * Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
var spawn = require('child_process').spawn;
var path = require('path');
var carrier = require('carrier');
var os = require('os'), isWin = (os.platform() === 'win32');


/**
 * A regular expression for parsing goog.provide results from grep output.
 * @type {RegExp}
 */
var PROVIDE_RE = /^(.+\.js):goog\.provide\(['"](\S+)['"]\);/;



/**
 * A simple class for mapping class names to origin files which pre-populates a
 * map of names to files by delegating to grep.
 * @param {string} projectDir The Tern project directory.
 * @param {{name: string, debug: boolean, dirs: Array.<string>}} options
 * @constructor
 */
var GrepFileFinder = function(projectDir, options) {
  /**
   * A map of class names to canonical file paths.
   * @type {Object.<string>}
   * @private
   */
  this.files_ = {};

  /** @private {string} The project dir. */
  this.projectDir_ = projectDir;

  /** @private {{name: string, debug: boolean, dirs: Array.<string>}} */
  this.options_ = options;

  this.prepopulate_();
};
module.exports = GrepFileFinder;


/**
 * Pre-populates the internal file map.
 * @private
 */
GrepFileFinder.prototype.prepopulate_ = function() {
  var dirs;
  if (this.options_.dirs) {
    dirs = this.options_.dirs;
  } else {
    dirs = ['.'];
  }
  for (var i = 0; i < dirs.length; i++) {
    this.searchDir_(path.resolve(this.projectDir_, dirs[i]));
  }
};


/**
 * Search the given directory for goog.provide statements.
 * @param {string} dir
 * @private
 */
GrepFileFinder.prototype.searchDir_ = function(dir) {
  // TODO: Track when done prepopulating, defer calls that come in before done.
  if (this.options_.debug) {
    console.log('grep: searching ' + dir);
  }
  var search = isWin ?
      spawn('findstr', ['/S', '/R', '/D:' + dir, '/C:^goog.provide(', '*.js']) :
      spawn('grep', ['-R', '--include=*.js', '^goog.provide(', dir]);
  search.stdout.setEncoding('utf8');
  carrier.carry(search.stdout, function(line) {
    var match = line.match(PROVIDE_RE);
    if (!match) {
      // TODO: Deal with line-wrapped goog.provide statements #7.
      if (this.options_.debug) {
        console.log('grep: Failed to match line ' + line);
      }
      return;
    }
    var name = match[2];
    // Use the absolute path, unless under the project dir.
    var filePath = path.resolve(dir, match[1]);
    if (filePath.indexOf(this.projectDir_) === 0) {
      filePath = path.relative(this.projectDir_, filePath);
    }
    this.files_[name] = filePath;
  }.bind(this));
};


/**
 * @param {string} name
 * @param {fn(string)} cb
 */
GrepFileFinder.prototype.findFile = function(name, cb) {
  setTimeout(function() {
    cb(this.files_[name]);
  }.bind(this));
};
