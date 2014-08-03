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

// Test inference using interfaces.
// plugin=closure
// plugin=doc_comment null

goog.provide('Interface');
goog.provide('Implementor');

/**
 * The interface.
 * @interface
 */
Interface = function() {};

/**
 * An interface method.
 * @param {ParamType} param The param.
 * @return {ReturnType} The retval.
 */
Interface.prototype.method;

Interface.prototype.method; //: fn(param: ParamType) -> ReturnType

/** @type {Interface} */
var instance;
instance; //: Interface
instance.method; //: fn(param: ParamType) -> ReturnType

/**
 * A class implementing Interface.
 * @constructor
 * @struct
 * @implements {Interface}
 */
Implementor = function() {};

/** @override */
Implementor.prototype.method = function(param) {
  param; //: ParamType
  return notaval;
};
Implementor.prototype.method; //: fn(param: ParamType) -> ReturnType
