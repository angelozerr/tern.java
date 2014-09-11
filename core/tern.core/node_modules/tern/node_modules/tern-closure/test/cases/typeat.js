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

// Tests integration with the Tern 'typeAt' pass for providing types in comments
// and string literals.
// plugin=closure
// plugin=doc_comment null

// Make some names available.
goog.provide('test.Bar');
goog.provide('test.Foo');

// TODO: Patch Tern case runner to allow position argument for type test.
'test.Foo';

/**
 * Test types in comments.
 * test.Foo //<: test.Foo
 * test.Bar //<: test.Bar
 */
