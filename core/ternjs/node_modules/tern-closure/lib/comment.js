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

var doctrine = require('doctrine');
var File = require('./file'),
    Reason = File.Reason,
    Visibility = File.Visibility;



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
  var comment;
  try {
    comment = doctrine.parse(this.commentText, {unwrap: true});
  } catch (e) {
    console.log('tern-closure: ERROR parsing comment', e);
    console.log(e.stack);
    console.log(
        'tern-closure: Offending comment in', typeManager.getCurrentOrigin());
    console.log(this.commentText);
    return;
  }

  this.description = comment.description;
  // Visibility is public by default.
  this.visibility = Visibility.PUBLIC;
  var tag = null;
  for (var i = 0; i < comment.tags.length; i++) {
    tag = comment.tags[i];
    if (tag.title == 'private') {
      this.visibility = Visibility.PRIVATE;
      break;
    } else if (tag.title == 'protected') {
      this.visibility = Visibility.PROTECTED;
      break;
    }
  }

  for (var j = 0; j < comment.tags.length; j++) {
    tag = comment.tags[j];
    switch (tag.title) {
      case 'type': case 'private': case 'protected': case 'public':
        // TODO: Add completion filtering based on access restrictions?
        this.valueType =
            this.getExpressionAval(typeManager, tag.type, Reason.TYPE);
        this.valueDoc = tag.description;
        break;
      case 'return': case 'returns':
        this.returnType =
            this.getExpressionAval(typeManager, tag.type, Reason.RETURN);
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
        this.args[tag.name] =
            this.getExpressionAval(typeManager, tag.type, Reason.PARAM);
        if (!this.argDocs) {
          this.argDocs = {};
        }
        this.argDocs[tag.name] = tag.description;
        break;
      case 'extends':
        this.superType =
            this.getExpressionAval(typeManager, tag.type, Reason.EXTENDS);
        break;
      case 'implements':
        if (!this.interfaces) {
          this.interfaces = [];
        }
        this.interfaces.push(
            this.getExpressionAval(typeManager, tag.type, Reason.IMPLEMENTS));
        break;
    }
  }
};


/**
 * Recursively process a JSDoc type expression to assemble a corresponding AVal.
 * @param {!TypeManager} typeManager
 * @param {{type: string}} typeExpr A Doctrine parsed type expression.
 * @param {Reason} reason The reason for getting this type.
 * @param {infer.AVal=} innerType The inner type, for type applications.
 * @return {infer.AVal} An abstract value for the type expression.
 */
Comment.prototype.getExpressionAval =
    function(typeManager, typeExpr, reason, innerType) {
  if (!typeExpr) {
    return null;
  }
  switch (typeExpr.type) {
    case doctrine.Syntax.NameExpression:
      return typeManager.getInstanceType(
          typeExpr.name, reason, this.visibility, innerType);
    case doctrine.Syntax.NullableType:
    case doctrine.Syntax.NonNullableType:
      // TODO: Expose nullability information #17.
      return this.getExpressionAval(
          typeManager, typeExpr.expression, reason, innerType);
    case doctrine.Syntax.OptionalType:
      // TODO: Expose optional param info (orthogonal to nullability) #19.
      return this.getExpressionAval(
          typeManager, typeExpr.expression, reason, innerType);
    case doctrine.Syntax.UnionType:
      var types = [];
      typeExpr.elements.forEach(function(subExpr) {
        var t =
            this.getExpressionAval(typeManager, subExpr, reason, innerType);
        if (t) {
          types.push(t);
        }
      }, this);
      return typeManager.getUnionType(types);
    case doctrine.Syntax.RestType:
      // TODO: Expose varargs #20.
      return this.getExpressionAval(
          typeManager, typeExpr.expression, reason, innerType);
    case doctrine.Syntax.RecordType:
    case doctrine.Syntax.FieldType:
      // TODO: Handle records #15.
      return null;
    case doctrine.Syntax.FunctionType:
      // TODO: Handle functions #16.
      return null;
    case doctrine.Syntax.TypeApplication:
      // TODO: Handle more exotic type applications?
      // We support type applications for array and object values. In those
      // cases, only the last applied type (the value type) is meaningful.
      return this.getExpressionAval(typeManager, typeExpr.expression, reason,
          this.getExpressionAval(typeManager,
              typeExpr.applications[typeExpr.applications.length - 1],
              reason, innerType));
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
