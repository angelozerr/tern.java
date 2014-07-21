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

// Test inference with inherited methods and properties.
// plugin=closure
// plugin=doc_comment null

goog.provide('name.space.Parent');
goog.provide('name.space.Child');
goog.provide('name.space.Grandchild');
goog.provide('name.space.Sibling');
goog.provide('name.space.Cousin');

/**
 * The parent class.
 * @constructor
 * @struct
 */
name.space.Parent = function() {
  /** @protected {Property} The parent property. */
  this.parentProp = parentProp;
};

/**
 * The parent method.
 */
name.space.Parent.prototype.parentMethod = function() {
  this.parentProp; //: Property
  this.parentMethod; //: fn()
  this.childProperty; //: ?
  this.childMethod; //: ?
  this.grandchildProperty; //: ?
  this.grandchildMethod; //: ?
  this.siblingProperty; //: ?
  this.siblingMethod; //: ?
};

/**
 * A method to override.
 * @param {ParamType} param The param type.
 * @return {ReturnType} The return type.
 */
name.space.Parent.prototype.overrideMethod = function(param) {
  return retVal;
}

/**
 * The child class.
 * @extends {name.space.Parent}
 * @constructor
 * @struct
 */
name.space.Child = function() {
  /** @protected {Property} The child property. */
  this.childProperty = childProp;
};
goog.inherits(name.space.Child, name.space.Parent);

/** The child method. */
name.space.Child.prototype.childMethod = function() {
  this.parentProp; //: Property
  this.parentMethod; //: fn()
  this.childProperty; //: Property
  this.childMethod; //: fn()
  this.grandchildProperty; //: ?
  this.grandchildMethod; //: ?
  this.siblingProperty; //: ?
  this.siblingMethod; //: ?
};

/** @override */
name.space.Child.prototype.overrideMethod = function(param) {
  param; //: ParamType
  return retVal;
}
name.space.Child.prototype.overrideMethod; //: fn(param: ParamType) -> ReturnType
name.space.Child.prototype.overrideMethod; //doc: A method to override.

/**
 * The grandchild class.
 * @extends {name.space.Child}
 * @constructor
 * @struct
 */
name.space.Grandchild = function() {
  /** @protected {Property} The grandchild property. */
  this.grandchildProperty = grandchildProp;
};
goog.inherits(name.space.Grandchild, name.space.Child);

/** The grandchild method. */
name.space.Grandchild.prototype.grandchildMethod = function() {
  this.parentProp; //: Property
  this.parentMethod; //: fn()
  this.childProperty; //: Property
  this.childMethod; //: fn()
  this.grandchildProperty; //: Property
  this.grandchildMethod; //: fn()
  this.siblingProperty; //: ?
  this.siblingMethod; //: ?
};

/** @override */
name.space.Grandchild.prototype.overrideMethod = function(param) {
  param; //: ParamType
  return retVal;
}
name.space.Grandchild.prototype.overrideMethod; //: fn(param: ParamType) -> ReturnType
name.space.Grandchild.prototype.overrideMethod; //doc: A method to override.

/**
 * The sibling class.
 * @extends {name.space.Parent}
 * @constructor
 * @struct
 */
name.space.Sibling = function() {
  /** @protected {Property} The sibling property. */
  this.siblingProperty = siblingProp;
};
goog.inherits(name.space.Sibling, name.space.Parent);

/** The sibling method. */
name.space.Sibling.prototype.siblingMethod = function() {
  this.parentProp; //: Property
  this.parentMethod; //: fn()
  this.childProperty; //: ?
  this.childMethod; //: ?
  this.grandchildProperty; //: ?
  this.grandchildMethod; //: ?
  this.siblingProperty; //: Property
  this.siblingMethod; //: fn()
};

/**
 * The cousin class.
 * @extends {name.space.Sibling}
 * @constructor
 * @struct
 */
name.space.Cousin = function() {
  /** @protected {Property} The sibling property. */
  this.siblingProperty = siblingProp;
};
goog.inherits(name.space.Cousin, name.space.Parent);

/** @override */
name.space.Cousin.prototype.overrideMethod = function(param) {
  param; //: ParamType
  return retVal;
}
name.space.Cousin.prototype.overrideMethod; //: fn(param: ParamType) -> ReturnType
name.space.Cousin.prototype.overrideMethod; //doc: A method to override.

