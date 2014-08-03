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

var path = require('path');
var runcases = require('tern/test/runcases');
var closure = require('../closure');
// Locate the Tern distribution installed with this repo and initialize the
// tern-closure plugin.
var ternDir = path.resolve(require.resolve('tern/lib/tern'), '../..');
closure.initialize(ternDir);

var filter = process.argv[2];
var caseDir = path.resolve(__dirname, 'cases');
runcases.runTests(filter, caseDir);
