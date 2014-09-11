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

/*global describe,it */

var expect = require('chai').expect;

// Wrap the script that runs the Tern test framework cases in a Mocha test.
describe('The Tern framework test cases', function() {
  it('should all pass.', function(done) {
    var child = require('child_process').fork(require.resolve('./runcases.js'));
    child.on('close', function(code) {
      expect(code, 'Exit code').to.equal(0);
      done();
    });
  });
});
