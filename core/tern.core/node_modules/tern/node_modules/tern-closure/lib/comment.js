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

var doctrine = require('doctrine');



/**
 * A class representing the pertinent data in a Closure doc comment.
 * @param {string} commentText The comment text.
 * @constructor
 */
var Comment = function(commentText) {
  this.commentText = commentText;
};
module.exports = Comment;


/**
 * Parse the comment text into meaningful information.
 * @param {!TypeManager} typeManager
 */
Comment.prototype.parse = function(typeManager) {
  var comment = doctrine.parse(this.commentText, {unwrap: true});
  this.description = comment.description;
  for (var i = 0; i < comment.tags.length; i++) {
    var tag = comment.tags[i];
    var type;
    if (tag.type) {
      type = this.getExpressionAval(typeManager, tag.type);
    }
    // TODO: Handle many other tags (implements, typedef, override...)
    switch (tag.title) {
      case 'type': case 'private': case 'protected': case 'public':
        // TODO: Add completion filtering based on access restrictions?
        this.valueType = type;
        this.valueDoc = tag.description;
        break;
      case 'return': case 'returns':
        this.returnType = type;
        this.returnDoc = tag.description;
        break;
      case 'param': case 'arg': case 'argument':
        if (!this.argNames) {
          this.argNames = [];
        }
        this.argNames.push(tag.name);
        if (!this.args) {
          this.args = {};
        }
        this.args[tag.name] = type;
        if (!this.argDocs) {
          this.argDocs = {};
        }
        this.argDocs[tag.name] = tag.description;
        break;
      case 'extends':
        this.superType = type;
        break;
      case 'implements':
        if (!this.interfaces) {
          this.interfaces = [];
        }
        this.interfaces.push(type);
        break;
    }
  }
};


/**
 * Recursively process a JSDoc type expression to assemble a corresponding AVal.
 * @param {!TypeManager} typeManager
 * @param {{type: string}} typeExpr A Doctrine parsed type expression.
 * @param {infer.AVal=} innerType The inner type, for type applications.
 * @return {infer.AVal} An abstract value for the type expression.
 */
Comment.prototype.getExpressionAval =
    function(typeManager, typeExpr, innerType) {
  switch (typeExpr.type) {
    case doctrine.Syntax.NameExpression:
      return typeManager.getQualifiedType(typeExpr.name, innerType);
    case doctrine.Syntax.NullableType:
    case doctrine.Syntax.NonNullableType:
      // TODO: Expose nullability information.
      return this.getExpressionAval(
          typeManager, typeExpr.expression, innerType);
    case doctrine.Syntax.OptionalType:
      // TODO: Expose optional param information (orthogonal to nullability).
      return this.getExpressionAval(
          typeManager, typeExpr.expression, innerType);
    case doctrine.Syntax.UnionType:
      var types = [];
      typeExpr.elements.forEach(function(subExpr) {
        var t = this.getExpressionAval(typeManager, subExpr, innerType);
        if (t) {
          types.push(t);
        }
      }, this);
      return typeManager.getUnionType(types);
    case doctrine.Syntax.RestType:
      // TODO: Expose varargs.
      return this.getExpressionAval(
          typeManager, typeExpr.expression, innerType);
    case doctrine.Syntax.RecordType:
    case doctrine.Syntax.FieldType:
      // TODO: Handle records.
      return null;
    case doctrine.Syntax.FunctionType:
      // TODO: Handle functions.
      return null;
    case doctrine.Syntax.TypeApplication:
      // TODO: Handle more exotic type applications?
      // We support type applications for array and object values. In those
      // cases, only the last applied type (the value type) is meaningful.
      return this.getExpressionAval(typeManager, typeExpr.expression,
          this.getExpressionAval(typeManager,
              typeExpr.applications[typeExpr.applications.length - 1],
              innerType));
    case doctrine.Syntax.NullLiteral:
    case doctrine.Syntax.UndefinedLiteral:
    case doctrine.Syntax.NullableLiteral:
    case doctrine.Syntax.AllLiteral:
    case doctrine.Syntax.VoidLiteral:
      // No type to apply.
      return null;
    default:
      console.log('Unknown expression type: ' + typeExpr.type);
      return null;
  }
};
