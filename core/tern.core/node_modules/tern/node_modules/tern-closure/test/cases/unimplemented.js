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

// Tests for type expressions that are not yet fully supported. Basicallly, this
// is a TODO list, but these tests also verify that unsupported type expressions
// don't cause outright failures.
// plugin=closure
// plugin=doc_comment null

// Nullability #17
/** @type {?string} */
var nullable;
nullable;//: string
/** @type {!MyClass} */
var nonNullable;
nonNullable;//: MyClass

// Unions #18
/** @type {(MyClass|YourClass)} */
var union;
union;//: YourClass

/** @type {(!MyClass|!YourClass|{prop:(Blah|Blam)})} */
var nested;
nested; //: YourClass

// Optional parameters #19.
/** @param {ParamType=} opt_param */
var fnOptParam = function(opt_param) {
  opt_param; //: ParamType
};
fnOptParam; //: fn(opt_param: ParamType)

// Varargs #20.
/** @param {...ParamType} var_args */
var fnVarArgs = function(var_args) {
  arguments; //: [?]
  var_args; //: ParamType
};
fnVarArgs; //: fn(var_args: ParamType)

// Function type expressions #16
/** @type {function(ParamType): ReturnType} */
var fnTypeExpr;
fnTypeExpr; //: ?

// Tests support for a literal void return type.
/** @type {function(ParamType): void} */
var voidFnTypeExpr;
voidFnTypeExpr; //: ?

// Record types #15
/** @type {{prop1: Prop1Type, prop2: Prop2Type}} */
var recordTypeExpr;
recordTypeExpr; //: ?

// Casting #12
/** @type {Object} */
var genericObject;
var castObject = /** @type {CastClass} */ (genericObject);
castObject; //: {}

// Typedef #14
/** @typedef {{numProp: number}} */
var TypeDefType;
/** @type {TypeDefType} */
var typeDefVar;
typeDefVar; //: {}
typeDefVar.numProp; //: ?
