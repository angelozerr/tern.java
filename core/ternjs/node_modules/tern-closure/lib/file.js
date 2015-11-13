/**
 * @license
 * Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';


/**
 * Visibility levels.
 * @enum {number}
 */
var Visibility = {
  PUBLIC: 0,
  PROTECTED: 1,
  PRIVATE: 2
};


/**
 * The reasons for which a type can be defined.
 * @enum {string}
 */
var Reason = {
  EXTENDS: 'extends',
  IMPLEMENTS: 'implements',
  PARAM: 'param',
  PROVIDE: 'provide',
  REQUIRE: 'require',
  RETURN: 'return',
  TYPE: 'type' // Includes typed visibility tags.
};



/**
 * A class for tracking the names referenced from a file.
 * @param {string} name The file name (a full path, matching Tern's origin
 *     string).
 * @param {fn(name: string, access: Visibility, requestingFileName: string)}
 *     loadFn The function to call to actually find and load a name.
 * @param {Visibility=} access The access level to this file. Default PUBLIC.
 * @constructor
 * @struct
 */
var File = function(name, loadFn, access) {
  /** @type {string} */
  this.name = name;

  /**
   * @private {fn(name: string, access: Visibility, requestingFileName: string)}
   */
  this.loadFn_ = loadFn;

  /**
   * The highest level of access any open file has to this file. A file with
   * PRIVATE access is one that has been opened by the user (directly added,
   * rather than included). A file with PROTECTED access contains a superclass
   * or interface extended in some file with PRIVATE access. A file with PUBLIC
   * access just provides a name that was referenced in some other way.
   * @type {Visibility}
   */
  this.access = access || Visibility.PUBLIC;

  /**
   * Maps from the names that are not exposed at the current access level to the
   * access level this file would have to that name, stored by the level of
   * access that will expose them.
   * @type {Array.<Object.<Visibility>>}
   */
  this.deferredRequests = [{}, {}, {}];
};
module.exports = File;
File.Visibility = Visibility;
File.Reason = Reason;


/**
 * Request to load the file providing a type name. Depending on the usage and
 * visibility of the name and the level of access to this file, the request may
 * be deferred until the level of access to this file is increased.
 * @param {string} name The type name.
 * @param {Reason} reason The reason for loading this name.
 * @param {Visibility} visibility The visibility of this use of the name.
 */
File.prototype.requestName = function(name, reason, visibility) {
  // Determine the level of access this request grants to the file containing
  // the name.
  // By default, we only have PUBLIC access to the loaded file.
  var requestedAccess = Visibility.PUBLIC;
  if (reason == Reason.EXTENDS || reason == Reason.IMPLEMENTS) {
    // But if it holds a superclass, we have PROTECTED access to it.
    requestedAccess = Visibility.PROTECTED;
  }
  if (this.access < requestedAccess) {
    // You can't gain a higher access to the loaded file than to the requesting
    // file. Once we have the higher level of access to this file, we will have
    // that level of access to the loaded file as well.
    this.deferRequest_(name, requestedAccess, requestedAccess);
    requestedAccess = this.access;
  }

  if (reason == Reason.PARAM && visibility == Visibility.PUBLIC) {
    // Parameter types are only relevant to subclasses (no object of that type
    // is made accessible by this class by clients - clients pass them in).
    visibility = Visibility.PROTECTED;
  }
  if (this.access < visibility) {
    // The current level of access to the requesting file is not high enough (no
    // open file can see this use of this name), so we defer loading this name
    // until the access level to the requesting file is increased.
    this.deferRequest_(name, visibility, requestedAccess);
    return;
  }
  // This name is visible to a currently open file, so try to load it.
  this.doRequest_(name, requestedAccess);
};


/**
 * Updates the access level of this file, loading any names that are newly
 * exposed.
 * @param {Visibility} access
 * @return {boolean} Whether the access actually changed.
 */
File.prototype.updateAccess = function(access) {
  if (this.access >= access) {
    return false;
  }
  this.access = access;
  for (var a = 0; a <= access; a++) {
    var requestsToExecute = this.deferredRequests[a];
    for (var name in requestsToExecute) {
      if (requestsToExecute.hasOwnProperty(name)) {
        this.doRequest_(name, this.deferredRequests[a][name]);
      }
    }
    this.deferredRequests[a] = {};
  }
  return true;
};


/**
 * Perform a request for the given name at the given access level.
 * @param {string} name The requested name.
 * @param {Visibility} access The requested access.
 * @private
 */
File.prototype.doRequest_ = function(name, access) {
  this.loadFn_(name, access, this.name);
};


/**
 * Defer a request until we have sufficient access to this file.
 * @param {string} name
 * @param {Visibility} requiredAccess The required access.
 * @param {Visibility} requestedAccess The requested access.
 * @private
 */
File.prototype.deferRequest_ =
    function(name, requiredAccess, requestedAccess) {
  if (!this.deferredRequests[requiredAccess].hasOwnProperty(name) ||
      this.deferredRequests[requiredAccess][name] < requestedAccess) {
    this.deferredRequests[requiredAccess][name] = requestedAccess;
  }
};
