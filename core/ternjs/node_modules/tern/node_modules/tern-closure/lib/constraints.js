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
 * A constraint for specifying that a superclass method is overriden by the
 * target method AVal. This sets up forwarding of parameter types, return types,
 * and description information.
 */
var IsParentMethod = infer.constraint('childMethod', {
  addType: function(parentMethodType) {
    // TODO: Consider making this more forceful by changing the number of
    // parameters or the presence of a return type. That would handle
    // manufactured methods (i.e. goog.abstractMethod).
    var childMethodType = this.childMethod.getType();
    if (!(childMethodType instanceof infer.Fn) ||
        !(parentMethodType instanceof infer.Fn)) {
      return;
    }
    // TODO: Solve issue with propagating docs further down the chain.
    if (!childMethodType.doc) {
      childMethodType.doc = parentMethodType.doc;
    }
    if (parentMethodType.retval) {
      parentMethodType.retval.propagate(childMethodType.retval);
    }
    if (parentMethodType.args) {
      for (var i = 0; i < parentMethodType.args.length; i++) {
        if (childMethodType.args[i]) {
          parentMethodType.args[i].propagate(childMethodType.args[i]);
        }
      }
    }
  }
});


/**
 * A constraint for specifying that an AVal is the instance of the superclass of
 * the target function type (i.e. the AVal object type should be used as the
 * function's prototype's proto).
 */
exports.IsParentInstance = infer.constraint('childCtor', {
  addType: function(parentInstanceType) {
    // TODO: Set up Class.base to point to parent class.
    // TODO: Interface multiple inheritance #21.
    if (!(parentInstanceType instanceof infer.Obj)) {
      return;
    }
    var childProtoType = this.childCtor.getProp('prototype').getType();
    if (!(childProtoType instanceof infer.Obj)) {
      console.log('Forcing proto on non-object!');
      return;
    }
    // Detach the old proto and replace it with the new one.
    if (childProtoType.proto.onNewProp) {
      childProtoType.proto.unregPropHandler(childProtoType);
      parentInstanceType.forAllProps(childProtoType);
    }
    childProtoType.proto = parentInstanceType;

    // Set up for inheritance of type information for overriden methods.
    childProtoType.forAllProps(function(prop, val, local) {
      if (local) {
        // For each child method, look for overriden methods up the prototype
        // chain.
        var protoPropVal = childProtoType.proto.hasProp(prop);
        if (protoPropVal && !val._closureHasParent) {
          protoPropVal.propagate(new IsParentMethod(val));
          val._closureHasParent = true;
        }
      } else {
        // As properties are added up the chain (parent classes are loaded),
        // watch for overriden methods.
        var localPropVal =
            childProtoType.hasProp(prop, false /* searchProto */);
        if (localPropVal && !localPropVal._closureHasParent) {
          val.propagate(new IsParentMethod(localPropVal));
          localPropVal._closureHasParent = true;
        }
      }
    });
  }
});


/**
 * A constraint for specifying that an interface is implemented by the target
 * constructor. This sets up type forwarding for implemented methods.
 */
exports.IsInterface = infer.constraint('implCtor', {
  addType: function(interfaceInstanceType) {
    // TODO: Set up Class.base to point to parent class.
    if (!(interfaceInstanceType instanceof infer.Obj)) {
      return;
    }
    var implProtoType = this.implCtor.getProp('prototype').getType();
    if (!(implProtoType instanceof infer.Obj)) {
      return;
    }

    // Set up for inheritance of type information for overriden methods.
    interfaceInstanceType.forAllProps(function(prop, val) {
      // As properties are added to the interface, look for overriding methods
      // on the implementor.
      var implPropVal = implProtoType.hasProp(prop);
      if (implPropVal && !implPropVal._closureHasParent) {
        val.propagate(new IsParentMethod(implPropVal));
        implPropVal._closureHasParent = true;
      }
    });

    implProtoType.forAllProps(function(prop, val) {
      // For each child method, look for overriden interface methods.
      var interfacePropVal = interfaceInstanceType.hasProp(prop);
      if (interfacePropVal && !val._closureHasParent) {
        interfacePropVal.propagate(new IsParentMethod(val));
        val._closureHasParent = true;
      }
    });
  }
});
