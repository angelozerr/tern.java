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

/** @type {?MyClass} */
var nullable;
nullable;//: MyClass

/** @type {!MyClass} */
var nonNullable;
nonNullable;//: MyClass

/** @type {(MyClass|YourClass)} */
var union;
union;//: YourClass

/** @type {(!MyClass|!YourClass|{prop:(Blah|Blam)})} */
var nested;
nested; //: YourClass

/**
 * @param {ParamType=} opt_param
 */
var fnOptParam = function(opt_param) {
  opt_param; //: ParamType
};
fnOptParam; //: fn(opt_param: ParamType)

/**
 * @param {...ParamType} var_args
 */
var fnVarArgs = function(var_args) {
  var_args; //: ParamType
};
fnVarArgs; //: fn(var_args: ParamType)

/** @type {function(ParamType): ReturnType} */
var fnTypeExpr;
fnTypeExpr; //: ?

// Tests support for a literal void return type.
/** @type {function(ParamType): void} */
var voidFnTypeExpr;
voidFnTypeExpr; //: ?

/** @type {{prop1: Prop1Type, prop2: Prop2Type}} */
var recordTypeExpr;
recordTypeExpr; //: ?
