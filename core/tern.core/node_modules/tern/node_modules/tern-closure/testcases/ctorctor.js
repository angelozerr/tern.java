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

// Test inference with a class with a constructed constructor.
// plugin=closure
// plugin=doc_comment null

goog.provide('ConstructedClass');

/**
 * A test class with a constructed constructor.
 * @param {Property} first The first argument.
 * @constructor
 */
ConstructedClass = ctorCtor();

/**
 * A method for this test class.
 * @param {Property} param The method parameter.
 * @return {ReturnType} The return value.
 */
ConstructedClass.prototype.myMethod = function(param) {
  this.myProperty = param;
  this.myBlah; //: Blah
  return typelessVal;
}

/**
 * A method for this test class.
 * @param {Blah} blah The blah
 */
ConstructedClass.prototype.yourMethod = function(blah) {
  this.myProperty; //: Property
  this.myBlah = blah;
}

var instance = new ConstructedClass();
// TODO: Fix instance type names for constructed constructors.
instance; //: {myBlah, myProperty}
instance.myProperty; //: Property
instance.myBlah; //: Blah
instance.myMethod; //: fn(param: Property) -> ReturnType

/** @type {ConstructedClass} */
var instance2;
instance2.myProperty; //: Property
instance2.myBlah; //: Blah
instance2.myMethod; //: fn(param: Property) -> ReturnType
