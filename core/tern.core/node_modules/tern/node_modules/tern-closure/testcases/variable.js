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

// Test the simple application of types and docs to values.
// plugin=closure
// plugin=doc_comment null

/** @type {number} */
var num;
num; //: number

/** @type {boolean} */
var bool;
bool; //: bool

/** @type {string} */
var str;
str; //: string

/** @type {Array} */
var arr;
arr; //: [?]

/** @type {Array.<number>} */
var numArr;
numArr; //: [number]
numArr[0]; //: number

/** @type {Object} */
var obj;
obj; //: {}

/** @type {Object.<number>} */
var numObj;
numObj; //: {}
numObj['prop']; //: number

/** @type {null} */
var nullLiteral;
nullLiteral; //: ?

/** @type {undefined} */
var undefinedLiteral;
undefinedLiteral; //: ?

/** @type {?} */
var nullableLiteral;
nullableLiteral; //: ?

/** @type {*} */
var allLiteral;
allLiteral; //: ?

// Tests applying a not-yet-defined class.
/** @type {MyClass} */
var inst;
inst; //: MyClass
// Tests that a stand-in function type has been created.
MyClass; //: fn()

// Tests applying a namespaced class.
/** @type {name.spaced.Class} */
var nameInst;
nameInst; //: name.spaced.Class
name; //: name
name.spaced; //: name.spaced
name.spaced.Class; //: fn()

// Tests declaration without initialization.
/** @type {MyType} */
name.prop;
name.prop; //: MyType

/**
 * Docs for this var.
 * @type {Blah}
 */
var docs;
docs; //doc: Docs for this var.

/** @type {Blah} Some docs. */
var shortDocs;
shortDocs; //doc: Some docs.
