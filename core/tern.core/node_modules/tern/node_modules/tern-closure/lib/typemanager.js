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

var infer = require('./core').infer;


/**
 * Weights used for stand-in object and constructor types before the actual type
 * implementation is loaded.
 * @enum {number}
 */
var Weight = {
  TEMP_OBJ: 40,
  TEMP_CTOR: 50
};



/**
 * A class for managing Closure types.
 * @param {tern.Server} ternServer
 * @param {{findFile: function(name: string, cb: function(file: string))}}
 *     fileFinder
 * @constructor
 * @struct
 */
var TypeManager = function(ternServer, fileFinder) {
  /** @private {tern.Server} */
  this.ternServer_ = ternServer;

  /**
   * @private {{findFile: function(name: string, cb: function(file: string))}}
   */
  this.fileFinder_ = fileFinder;
};
module.exports = TypeManager;


/**
 * Gets an AVal for a type, given its qualified name. Creates stand-in
 * AVals for types and namespaces that have not been defined yet.
 * @param {string} name The type name.
 * @param {infer.AVal=} innerType In the case of a type application, the
 *     applied type.
 * @return {!infer.AVal}
 */
TypeManager.prototype.getQualifiedType = function(name, innerType) {
  // Handle primitives.
  if (/^(number|integer)$/i.test(name)) {
    return infer.cx().num;
  }
  if (/^bool(ean)?$/i.test(name)) {
    return infer.cx().bool;
  }
  if (/^string$/i.test(name)) {
    return infer.cx().str;
  }
  if (/^array$/i.test(name)) {
    return new infer.Arr(innerType);
  }
  if (/^object$/i.test(name)) {
    var objType = new infer.Obj(true /* null proto */);
    if (innerType) {
      innerType.propagate(objType.defProp('<i>'));
    }
    return objType;
  }

  // This is a class instance.
  var ctorType = this.defineQualifiedName(name);
  if (!(ctorType.getType() instanceof infer.Fn)) {
    // Create a fake constructor function to stand in for the real one.
    var fakeFnType = new infer.Fn(name, infer.ANull /* self */, [] /* args */,
        [] /* argNames */, infer.ANull /* retVal */);
    // Propagate it with reduced weight so it will be overriden if the real
    // constructor function loads.
    fakeFnType.propagate(ctorType, Weight.TEMP_CTOR);
  }

  var type = new infer.AVal();
  // Say that the final property type is the constructor of the commented value.
  ctorType.propagate(new infer.IsCtor(type));
  return type;
};


/**
 * Defines the given fully-qualified name as a property on the global scope. If
 * any part of the name is already defined, uses the existing value.
 * @param {string} name
 * @return {AVal} The abstract value for the name.
 */
TypeManager.prototype.defineQualifiedName = function(name) {
  // TODO: Deal with goog.scope by walking up the scope tree.
  // TODO: Put in temp origin nodes?
  // TODO: Investigate using getProp on AVals or infer.PropIsSubset directly.
  var parts = name.split('.');
  var base = infer.cx().topScope;
  var prop;
  for (var i = 0; i < parts.length; i++) {
    prop = base.defProp(parts[i]);
    if (prop.getType()) {
      base = prop.getType();
    } else {
      base = new infer.Obj(true, parts.slice(0, i + 1).join('.'));
      // Use a custom origin to prevent the purging of stand-in types on file
      // reload.
      base.origin = 'closure_temp';
      base.propagate(prop, Weight.TEMP_OBJ);
    }
  }
  // Try to load the file providing the name, if the name is not from a JSON
  // type definition file.
  if (this.fileFinder_ && !infer.cx().definitions[base.origin]) {
    this.fileFinder_.findFile(
        name, this.addFile_.bind(this, infer.cx().curOrigin));
  }
  return prop;
};


/**
 * Gets an AVal representing the union of the given AVals.
 * @param {!Array.<!infer.AVal>} types The types to unionize.
 * @return {!infer.AVal}
 */
TypeManager.prototype.getUnionType = function(types) {
  // TODO: Decide if this behaves better with a synthetic 'Union' type #18.
  var aval = new infer.AVal();
  for (var i = 0; i < types.length; i++) {
    types[i].propagate(aval);
  }
  return aval;
};


/**
 * Add a file to the server.
 * @param {string} parentFile The file this is being included from.
 * @param {string} file The path to the file.
 * @private
 */
TypeManager.prototype.addFile_ = function(parentFile, file) {
  if (file) {
    this.ternServer_.addFile(file, null /* text */, parentFile);
    // TODO: Group adds into fewer flushes, to help with prioritizing.
    this.ternServer_.flush(function() {});
  }
};
