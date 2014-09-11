// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var path = require('path');


/**
 * This module simply keeps references to the core Tern modules, so that each
 * individual tern-closure module does not have to worry about where the core
 * Tern distribution is.
 */
exports.tern = null;
exports.infer = null;
exports.comment = null;


/**
 * Set the references to the core Tern modules by loading them from the given
 * Tern distribution location.
 * @param {string} ternDir The path to the Tern distribution loading the
 *     plugin.
 */
exports.initialize = function(ternDir) {
  exports.tern = require(path.resolve(ternDir, 'lib/tern'));
  exports.infer = require(path.resolve(ternDir, 'lib/infer'));
  exports.comment = require(path.resolve(ternDir, 'lib/comment'));
};


/**
 * Set the references to the core Tern modules, assuming that require will find
 * the right modules.
 */
exports.initializeForTesting = function() {
  exports.tern = require('tern/lib/tern');
  exports.infer = require('tern/lib/infer');
  exports.comment = require('tern/lib/comment');
};
