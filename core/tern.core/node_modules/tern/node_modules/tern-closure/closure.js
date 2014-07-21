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
var infer = require('tern/lib/infer');
var tern = require('tern/lib/tern');
var getCommentsBefore = require('tern/lib/comment').commentsBefore;
var walk = require('acorn/util/walk');
var constraints = require('./lib/constraints');
var Comment = require('./lib/comment');
var TypeManager = require('./lib/typemanager');


var typeManager;


tern.registerPlugin('closure', function(server, options) {
  var finder = null;
  if (options.finder) {
    var Finder;
    try {
      Finder = require('./lib/finder/' + options.finder.name);
    } catch (e) {
      Finder = require(options.finder.name);
    }
    finder = new Finder(server.options.projectDir, options.finder.options);
  }

  typeManager = new TypeManager(server, finder);

  var defs = {
    '!name': 'closure',
    goog: {
      provide: 'fn(name: string) -> !custom:closureProvide',
      require: 'fn(name: string) -> !custom:closureRequire'
    }
  };

  return {
    passes: {
      'postParse': postParse,
      'postInfer': postInfer
    },
    defs: defs
  };
});


infer.registerFunction('closureProvide', function(_self, args, argNodes) {
  if (!argNodes || !argNodes.length || argNodes[0].type != 'Literal' ||
      typeof argNodes[0].value != 'string') {
    return infer.ANull;
  }
  typeManager.defineQualifiedName(argNodes[0].value);
  return infer.ANull;
});


infer.registerFunction('closureRequire', function(_self, args, argNodes) {
  if (!argNodes || !argNodes.length || argNodes[0].type != 'Literal' ||
      typeof argNodes[0].value != 'string') {
    return infer.ANull;
  }
  typeManager.defineQualifiedName(argNodes[0].value);
  return infer.ANull;
});


/**
 * Walks the syntax tree after the Acorn parsing pass, finding comments and
 * attaching them to their corresponding nodes.
 * @param {!acorn.Node} ast
 * @param {string} text The file text.
 */
function postParse(ast, text) {
  function attachComments(node) {
    // TODO: Do our own comment-finding, handling casts.
    var comments = getCommentsBefore(text, node.start);
    if (comments) {
      node._closureComment =
          new Comment('/*' + comments[comments.length - 1] + '*/');
    }
  }

  walk.simple(ast, {
    VariableDeclaration: attachComments,
    FunctionDeclaration: attachComments,
    AssignmentExpression: function(node) {
      if (node.operator == '=') {
        attachComments(node);
      }
    },
    ObjectExpression: function(node) {
      for (var i = 0; i < node.properties.length; ++i) {
        attachComments(node.properties[i].key);
      }
    },
    MemberExpression: function(node) {
      // Grab "dead end" declarations: Blah.prototype.prop;
      if (text.charAt(node.property.end) == ';') {
        var testFn = function(t, n) {
          return n.start <= node.start - 1;
        };
        // If the expression value is not being used in any way, it's just a
        // declaration.
        // TODO: Assess perf impact of this approach, maybe optimize.
        var found = walk.findNodeAround(ast, node.end - 1, testFn);
        if (found.node.type == 'Program' ||
            found.node.type == 'BlockStatement') {
          attachComments(node);
        }
      }
    }
  });
}


/**
 * Applies type information from JSDoc comments to the initialized values after
 * Tern's type inference pass.
 * @param {!acorn.Node} ast
 * @param {!infer.Scope} scope
 */
function postInfer(ast, scope) {
  walk.simple(ast, {
    VariableDeclaration: function(node, scope) {
      interpretComments(node, node._closureComment,
          scope.getProp(node.declarations[0].id.name));
    },
    FunctionDeclaration: function(node, scope) {
      interpretComments(
          node, node._closureComment, scope.getProp(node.id.name));
    },
    AssignmentExpression: function(node, scope) {
      interpretComments(node, node._closureComment,
          infer.expressionType({node: node.left, state: scope}));
    },
    ObjectExpression: function(node) {
      for (var i = 0; i < node.properties.length; ++i) {
        var prop = node.properties[i], key = prop.key;
        interpretComments(
            prop, key._closureComment, node.objType.getProp(key.name));
      }
    },
    MemberExpression: function(node, scope) {
      if (node._closureComment) {
        var obj = infer.expressionType({node: node.object, state: scope});
        // Create and populate an AVal with the comment type information.
        var propAval = new infer.AVal();
        interpretComments(node, node._closureComment, propAval);
        obj.propagate(new infer.PropHasSubset(
            node.property.name, propAval, node.property));
      }
    }
  }, infer.searchVisitor, scope);
}


/**
 * Interpret the comments before an expression and apply type information from
 * the comments.
 * @param {!acorn.Node} node An Acorn AST node.
 * @param {Comment} comment The comment info.
 *     comment before the node if present.
 * @param {!infer.AVal} aval An abtract type value to which type information
 *     should be applied.
 */
function interpretComments(node, comment, aval) {
  if (!comment) {
    return;
  }
  comment.parse(typeManager);
  if (comment.valueType) {
    // This comment applies to a variable or property.
    comment.valueType.propagate(aval);
    setDoc(aval, comment.description || comment.valueDoc);
  } else if (!('valueType' in comment)) {
    // Without a value type, assume the doc comment applies to a function.
    var fnType = getFnType(node);
    if (!fnType) {
      // If a function type isn't found, create a synthetic one and propagate it
      // to the target AVal.
      var args = [];
      var argNames = [];
      if (comment.argNames) {
        for (var i = 0; i < comment.argNames.length; i++) {
          argNames.push(comment.argNames[i]);
          args.push(new infer.AVal());
        }
      }
      // TODO: Get a name in here. (see AssignmentExpression in infer.js)
      fnType = new infer.Fn(null /* name */, new infer.AVal() /* self */, args,
          argNames, new infer.AVal() /* retVal */);
      fnType.propagate(aval);
    }
    applyFnTypeInfo(fnType, comment);
    if (comment.description) {
      fnType.doc = comment.description;
    }
  }
}


/**
 * Applies the given argument and return type information to the given function
 * type.
 * @param {!infer.Fn} fnType The function type to propagate to.
 * @param {!Comment} comment The comment type info.
 */
function applyFnTypeInfo(fnType, comment) {
  if (comment.args) {
    for (var i = 0; i < fnType.argNames.length; i++) {
      var name = fnType.argNames[i];
      var arg = comment.args[name];
      // Propagate the documented type info to the inferred argument type.
      if (arg) {
        arg.propagate(fnType.args[i]);
        setDoc(fnType.args[i], comment.argDocs[name]);
      }
    }
  }
  // Propagate any return type info.
  if (comment.returnType) {
    comment.returnType.propagate(fnType.retval);
    setDoc(fnType.retval, comment.returnDoc);
  }
  if (comment.superType) {
    comment.superType.propagate(new constraints.IsParentInstance(fnType));
  }
  if (comment.interfaces) {
    for (var j = 0; j < comment.interfaces.length; j++) {
      comment.interfaces[j].propagate(new constraints.IsInterface(fnType));
    }
  }
}


/**
 * If the given node is associated with a function, gets the type value for the
 * function.
 * @param {!acorn.Node} node
 * @return {infer.Fn}
 */
function getFnType(node) {
  if (node.type == 'VariableDeclaration') {
    var decl = node.declarations[0];
    if (decl.init && decl.init.type == 'FunctionExpression') {
      return decl.init.body.scope.fnType;
    }
  } else if (node.type == 'FunctionDeclaration') {
    return node.body.scope.fnType;
  } else if (node.type == 'AssignmentExpression' &&
      node.right.type == 'FunctionExpression') {
    return node.right.body.scope.fnType;
  } else if (node.value && node.value.type == 'FunctionExpression') {
    // Object property.
    return node.value.body.scope.fnType;
  }
  return null;
}


/**
 * Sets the doc property for a type, but only if it is not a type literal (a doc
 * set on a type literal will be associated with all values of that type).
 * TODO: Consider indirection of type literals through AVals to store docs.
 * @param {(infer.AVal|infer.ANull|infer.Type)} type
 * @param {string} doc
 */
function setDoc(type, doc) {
  if (type instanceof infer.AVal) {
    type.doc = doc;
  }
}
