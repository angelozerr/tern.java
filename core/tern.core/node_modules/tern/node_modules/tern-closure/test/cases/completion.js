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

// Test qualified name completions in strings and comments added through custom
// completion path.
// plugin=closure
// plugin=doc_comment null

// Make some names available.
goog.provide('test.blah');
goog.provide('test.name1');
goog.provide('test.name2.bar');
goog.provide('test.name2.last1');
goog.provide('test.name2.last2');

/**
 * Test getting completions in comments.
 * @param {test.} //+ blah, name1, name2 @17
 * @param {test.b} //+ blah @18
 * @param {test.n} //+ name1, name2 @18
 * @param {test.name2.} //+ bar, last1, last2 @23
 * @param {test.name2.l} //+ last1, last2 @24
 * @param {test.name2.b} //+ bar @24
 */

// Test completing names in strings.
'test.'; //+ blah, name1, name2 @7
'test.b'; //+ blah @8
'test.n'; //+ name1, name2 @8
'test.name2.'; //+ bar, last1, last2 @13
'test.name2.l'; //+ last1, last2 @14
'test.name2.b'; //+ bar @14
