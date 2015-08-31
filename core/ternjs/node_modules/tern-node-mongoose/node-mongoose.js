(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
    "use strict";
    
  tern.registerPlugin("node-mongoose", function(server, options) {
    server._mongoose = {};
    return { defs : defs };
  });
    
  var defs = {
 "!name": "node-mongoose",
 "!define": {
  "!node": {
   "mongoose": {
    "!type": "+index.Mongoose"
   }
  },
  "aggregate": {
   "Aggregate": {
    "!type": "fn(ops?: +Object)",
    "!doc": "\n\nAggregate constructor used for building aggregation pipelines.",
    "prototype": {
     "Aggregate": {
      "!type": "fn(ops?: +Object)",
      "!doc": "\n\nAggregate constructor used for building aggregation pipelines."
     },
     "append": {
      "!type": "fn(ops: +Object) -> +aggregate.Aggregate",
      "!doc": "\n\nAppends new operators to this aggregate pipeline"
     },
     "project": {
      "!type": "fn(arg: +Object) -> +aggregate.Aggregate",
      "!doc": "\n\nAppends a new $project operator to this aggregate pipeline."
     },
     "near": {
      "!type": "fn(parameters: +Object) -> +aggregate.Aggregate",
      "!doc": "\n\nAppends a new $geoNear operator to this aggregate pipeline."
     },
     "unwind": {
      "!type": "fn(fields: string) -> +aggregate.Aggregate",
      "!doc": "\n\nAppends new custom $unwind operator(s) to this aggregate pipeline."
     },
     "sort": {
      "!type": "fn(arg: +Object) -> +query.Query",
      "!doc": "\n\nAppends a new $sort operator to this aggregate pipeline."
     },
     "read": {
      "!type": "fn(pref: string, tags?: [?])",
      "!doc": "\n\nSets the readPreference option for the aggregation query."
     },
     "allowDiskUse": {
      "!type": "fn(value: bool, tags?: [?])",
      "!doc": "\n\nSets the allowDiskUse option for the aggregation query (ignored for < 2.6.0)"
     },
     "cursor": {
      "!type": "fn(options: +Object)",
      "!doc": "\n\nSets the cursor option option for the aggregation query (ignored for < 2.6.0)"
     },
     "exec": {
      "!type": "fn(callback?: fn()) -> +promise.Promise",
      "!doc": "\n\nExecutes the aggregate pipeline on the currently bound Model."
     }
    }
   }
  },
  "browser": {},
  "browserDocument": {
   "Document": {
    "!type": "fn(obj: +Object, fields?: +Object, skipId?: bool)",
    "!doc": "\n\nDocument constructor."
   }
  },
  "cast": {},
  "collection": {
   "Collection": {
    "!type": "fn(name: string, conn: +connection.Connection, opts: +Object)",
    "!doc": "\n\nAbstract Collection constructor",
    "prototype": {
     "Collection": {
      "!type": "fn(name: string, conn: +connection.Connection, opts: +Object)",
      "!doc": "\n\nAbstract Collection constructor"
     },
     "name": {
      "!type": "?"
     },
     "conn": {
      "!type": "?"
     }
    }
   }
  },
  "connection": {
   "Connection": {
    "!type": "fn(base: +index.Mongoose)",
    "!doc": "\n\nConnection constructor",
    "prototype": {
     "Connection": {
      "!type": "fn(base: +index.Mongoose)",
      "!doc": "\n\nConnection constructor"
     },
     "readyState": {
      "!type": "?"
     },
     "collections": {
      "!type": "?"
     },
     "db": {
      "!type": "?"
     },
     "open": {
      "!type": "fn(connection_string: string, database?: string, port?: number, options?: +Object, callback?: fn())",
      "!doc": "\n\nOpens the connection to MongoDB."
     },
     "openSet": {
      "!type": "fn(uris: string, database?: string, options?: +Object, callback?: fn())",
      "!doc": "\n\nOpens the connection to a replica set."
     },
     "close": {
      "!type": "fn(callback?: fn()) -> +connection.Connection",
      "!doc": "\n\nCloses the connection"
     },
     "collection": {
      "!type": "fn(name: string, options?: +Object) -> +collection.Collection",
      "!doc": "\n\nRetrieves a collection, creating it if not cached."
     },
     "model": {
      "!type": "fn(name: string, schema?: +schema.Schema, collection?: string) -> +model.Model",
      "!doc": "\n\nDefines or retrieves a model."
     },
     "modelNames": {
      "!type": "fn() -> [?]",
      "!doc": "\n\nReturns an array of model names created on this connection."
     },
     "setProfiling": {
      "!type": "fn(level: number, ms?: number, callback: fn())",
      "!doc": "\n\nSet profiling level."
     }
    }
   }
  },
  "connectionstate": {},
  "document": {
   "Document": {
    "!type": "fn(obj: +Object, fields?: +Object, skipId?: bool)",
    "!doc": "\n\nDocument constructor.",
    "prototype": {
     "schema": {
      "!type": "?"
     },
     "isNew": {
      "!type": "?"
     },
     "id": {
      "!type": "?"
     },
     "errors": {
      "!type": "?"
     },
     "update": {
      "!type": "fn(doc: +Object, options: +Object, callback: fn()) -> +query.Query",
      "!doc": "\n\nSends an update command with this document <code>_id</code> as the query selector."
     },
     "set": {
      "!type": "fn(path: string, val: ?, type?: +schema.Schema, options?: +Object)",
      "!doc": "\n\nSets the value of a path, or many paths."
     },
     "get": {
      "!type": "fn(path: string, type?: +schema.Schema)",
      "!doc": "\n\nReturns the value of a path."
     },
     "markModified": {
      "!type": "fn(path: string)",
      "!doc": "\n\nMarks the path as having pending changes to write to the db."
     },
     "modifiedPaths": {
      "!type": "fn() -> [?]",
      "!doc": "\n\nReturns the list of paths that have been modified."
     },
     "isModified": {
      "!type": "fn(path?: string) -> bool",
      "!doc": "\n\nReturns true if this document was modified, else false."
     },
     "isDirectModified": {
      "!type": "fn(path: string) -> bool",
      "!doc": "\n\nReturns true if <code>path</code> was directly set and modified, else false."
     },
     "isInit": {
      "!type": "fn(path: string) -> bool",
      "!doc": "\n\nChecks if <code>path</code> was initialized."
     },
     "isSelected": {
      "!type": "fn(path: string) -> bool",
      "!doc": "\n\nChecks if <code>path</code> was selected in the source query which initialized this document."
     },
     "validate": {
      "!type": "fn(optional: fn()) -> +promise.Promise",
      "!doc": "\n\nExecutes registered validation rules for this document."
     },
     "invalidate": {
      "!type": "fn(path: string, errorMsg: string, value: +Object)",
      "!doc": "\n\nMarks a path as invalid, causing validation to fail."
     },
     "toObject": {
      "!type": "fn(options?: +Object) -> +Object",
      "!doc": "\n\nConverts this document into a plain javascript object, ready for storage in MongoDB."
     },
     "minimize": {
      "!type": "fn(object: +Object) -> +Object",
      "!doc": "\n\nMinimizes an object, removing undefined values and empty objects"
     },
     "applyGetters": {
      "!type": "fn(self: +document.Document, json: +Object, type: string) -> +Object",
      "!doc": "\n\nApplies virtuals properties to <code>json</code>."
     },
     "toJSON": {
      "!type": "fn(options: +Object) -> +Object",
      "!doc": "\n\nThe return value of this method is used in calls to JSON.stringify(doc)."
     },
     "inspect": {
      "!type": "fn()",
      "!doc": "\n\nHelper for console.log"
     },
     "toString": {
      "!doc": "\n\nHelper for console.log"
     },
     "equals": {
      "!type": "fn(doc: +document.Document) -> bool",
      "!doc": "\n\nReturns true if the Document stores the same data as doc."
     },
     "populate": {
      "!type": "fn(path?: string, callback?: fn()) -> +document.Document",
      "!doc": "\n\nPopulates document references, executing the <code>callback</code> when complete."
     },
     "populated": {
      "!type": "fn(path: string) -> [?]",
      "!doc": "\n\nGets _id(s) used during population of the given <code>path</code>."
     }
    }
   }
  },
  "document_provider": {},
  "drivers_node-mongodb-native_binary": {},
  "drivers_node-mongodb-native_collection": {
   "NativeCollection": {
    "!type": "fn()",
    "!doc": "\n\nA <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> collection implementation.",
    "prototype": {
     "getIndexes": {
      "!type": "?",
      "!doc": "\n\nRetreives information about this collections indexes."
     }
    }
   }
  },
  "drivers_node-mongodb-native_connection": {
   "NativeConnection": {
    "!type": "fn()",
    "!doc": "\n\nA <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> connection implementation.",
    "prototype": {
     "STATES": {
      "!type": "?",
      "!doc": "\n\nExpose the possible connection states."
     },
     "useDb": {
      "!type": "fn(name: string) -> +connection.Connection",
      "!doc": "\n\nSwitches to a different database using the same connection pool."
     },
     "validate": {
      "!type": "fn(o: +Object)",
      "!doc": "\n\nValidates the driver db options."
     }
    }
   }
  },
  "drivers_node-mongodb-native_objectid": {},
  "drivers_SPEC": {},
  "error_browserMissingSchema": {
   "MissingSchemaError": {
    "!type": "fn()",
    "!doc": "\n\nMissingSchema Error constructor.",
    "prototype": {
     "MissingSchemaError": {
      "!type": "fn()",
      "!doc": "\n\nMissingSchema Error constructor."
     }
    }
   }
  },
  "error_cast": {
   "CastError": {
    "!type": "fn(type: string, value: string)",
    "!doc": "\n\nCasting Error constructor."
   }
  },
  "error_divergentArray": {
   "DivergentArrayError": {
    "!type": "fn()",
    "!doc": "\n\nDivergentArrayError constructor.",
    "prototype": {
     "DivergentArrayError": {
      "!type": "fn()",
      "!doc": "\n\nDivergentArrayError constructor."
     }
    }
   }
  },
  "error_messages": {},
  "error_missingSchema": {
   "MissingSchemaError": {
    "!type": "fn()",
    "!doc": "\n\nMissingSchema Error constructor.",
    "prototype": {
     "MissingSchemaError": {
      "!type": "fn()",
      "!doc": "\n\nMissingSchema Error constructor."
     }
    }
   }
  },
  "error_overwriteModel": {
   "OverwriteModelError": {
    "!type": "fn()",
    "!doc": "\n\nOverwriteModel Error constructor.",
    "prototype": {
     "OverwriteModelError": {
      "!type": "fn()",
      "!doc": "\n\nOverwriteModel Error constructor."
     }
    }
   }
  },
  "error_validation": {
   "ValidationError": {
    "!type": "fn(instance: +document.Document)",
    "!doc": "\n\nDocument Validation Error"
   }
  },
  "error_validator": {
   "ValidatorError": {
    "!type": "fn(properties: +Object)",
    "!doc": "\n\nSchema validator error"
   }
  },
  "error_version": {
   "VersionError": {
    "!type": "fn()",
    "!doc": "\n\nVersion Error constructor."
   }
  },
  "error": {
   "MongooseError": {
    "!type": "fn(msg: string)",
    "!doc": "\n\nMongooseError constructor",
    "prototype": {
     "MongooseError": {
      "!type": "fn(msg: string)",
      "!doc": "\n\nMongooseError constructor"
     },
     "messages": {
      "!type": "?",
      "!doc": "\n\nThe default built-in validator error messages."
     }
    }
   }
  },
  "index": {
   "Mongoose": {
    "!type": "fn()",
    "!doc": "\n\nMongoose constructor.",
    "prototype": {
     "Mongoose": {
      "!type": "index.Mongoose",
      "!doc": "\n\nThe Mongoose constructor"
     },
     "STATES": {
      "!type": "?",
      "!doc": "\n\nExpose connection states for user-land"
     },
     "set": {
      "!type": "fn(key: string, value: string)",
      "!doc": "\n\nSets mongoose options"
     },
     "get": {
      "!type": "?",
      "!doc": "\n\nGets mongoose options"
     },
     "createConnection": {
      "!type": "fn(uri?: string, options?: +Object) -> +connection.Connection",
      "!doc": "\n\nCreates a Connection instance."
     },
     "connect": {
      "!type": "fn(uri: string, options?: +Object, callback?: fn()) -> +index.Mongoose",
      "!doc": "\n\nOpens the default mongoose connection."
     },
     "disconnect": {
      "!type": "fn(fn?: fn()) -> +index.Mongoose",
      "!doc": "\n\nDisconnects all connections."
     },
     "model": {
      "!type": "fn(name: string, schema?: +schema.Schema, collection?: string, skipInit?: bool) -> model.Model",
      "!doc": "\n\nDefines a model or retrieves it."
     },
     "modelNames": {
      "!type": "fn() -> [?]",
      "!doc": "\n\nReturns an array of model names created on this instance of Mongoose."
     },
     "plugin": {
      "!type": "fn(fn: fn(), opts?: +Object) -> +index.Mongoose",
      "!doc": "\n\nDeclares a global plugin executed on all Schemas."
     },
     "connection": {
      "!type": "?"
     },
     "Collection": {
      "!type": "collection.Collection",
      "!doc": "\n\nThe Mongoose Collection constructor"
     },
     "Connection": {
      "!type": "connection.Connection",
      "!doc": "\n\nThe Mongoose <a href=\"#connection_Connection\">Connection</a> constructor"
     },
     "version": {
      "!type": "?",
      "!doc": "\n\nThe Mongoose version"
     },
     "Schema": {
      "!type": "schema.Schema",
      "!doc": "\n\nThe Mongoose <a href=\"#schema_Schema\">Schema</a> constructor"
     },
     "SchemaType": {
      "!type": "schematype.SchemaType",
      "!doc": "\n\nThe Mongoose <a href=\"#schematype_SchemaType\">SchemaType</a> constructor"
     },
     "SchemaTypes": {
      "!type": "?",
      "!doc": "\n\nThe various Mongoose SchemaTypes."
     },
     "VirtualType": {
      "!type": "virtualtype.VirtualType",
      "!doc": "\n\nThe Mongoose <a href=\"#virtualtype_VirtualType\">VirtualType</a> constructor"
     },
     "Types": {
      "!type": "?",
      "!doc": "\n\nThe various Mongoose Types."
     },
     "Query": {
      "!type": "query.Query",
      "!doc": "\n\nThe Mongoose <a href=\"#query_Query\">Query</a> constructor."
     },
     "Promise": {
      "!type": "promise.Promise",
      "!doc": "\n\nThe Mongoose <a href=\"#promise_Promise\">Promise</a> constructor."
     },
     "Model": {
      "!type": "model.Model",
      "!doc": "\n\nThe Mongoose <a href=\"#model_Model\">Model</a> constructor."
     },
     "Document": {
      "!type": "document.Document",
      "!doc": "\n\nThe Mongoose <a href=\"#document-js\">Document</a> constructor."
     },
     "Error": {
      "!type": "?",
      "!doc": "\n\nThe <a href=\"#error_MongooseError\">MongooseError</a> constructor."
     },
     "mongo": {
      "!type": "?",
      "!doc": "\n\nThe <a href=\"https://github.com/mongodb/node-mongodb-native\">node-mongodb-native</a> driver Mongoose uses."
     },
     "mquery": {
      "!type": "?",
      "!doc": "\n\nThe <a href=\"https://github.com/aheckmann/mquery\">mquery</a> query builder Mongoose uses."
     }
    }
   }
  },
  "internal": {},
  "model": {
   "Model": {
    "!type": "fn(doc: +Object)",
    "!doc": "\n\nModel constructor",
    "prototype": {
     "Model": {
      "!type": "fn(doc: +Object)",
      "!doc": "\n\nModel constructor"
     },
     "db": {
      "!type": "?"
     },
     "collection": {
      "!type": "?"
     },
     "modelName": {
      "!type": "?"
     },
     "save": {
      "!type": "fn(fn?: fn(err: +Error, product: +model.Model, numberAffected: number))",
      "!doc": "\n\n@description Saves this document."
     },
     "operand": {
      "!type": "fn(self: +document.Document, where: +Object, delta: +Object, data: +Object, val: +schema_mixed.Mixed, operation?: string)",
      "!doc": "\n\nApply the operation to the delta (update) clause as\nwell as track versioning for our where clause."
     },
     "handleAtomics": {
      "!type": "fn(self: +document.Document, where: +Object, delta: +Object, data: +Object, value: [?])",
      "!doc": "\n\nCompiles an update and where clause for a <code>val</code> with _atomics."
     },
     "checkDivergentArray": {
      "!type": "fn(doc: +document.Document, path: string) -> string",
      "!doc": "\n\nDetermine if array was populated with some form of filter and is now\nbeing updated in a manner which could overwrite data unintentionally."
     },
     "increment": {
      "!type": "fn()",
      "!doc": "\n\nSignal that we desire an increment of this documents version."
     },
     "remove": {
      "!type": "fn(conditions: +Object, callback?: fn(err: +Error))",
      "!doc": "\n\n@description Removes this document from the db."
     },
     "model": {
      "!type": "fn(name: string)",
      "!doc": "\n\nReturns another Model instance."
     },
     "schema": {
      "!type": "?"
     },
     "base": {
      "!type": "?"
     },
     "discriminators": {
      "!type": "?"
     },
     "convertTo_id": {
      "!type": "fn(val: [?]) -> [?]",
      "!doc": "\n\nRetrieve the _id of <code>val</code> if a Document or Array of Documents."
     }
    },
    "discriminator": {
     "!type": "fn(name: string, schema: +schema.Schema)",
     "!doc": "\n\nAdds a discriminator type."
    },
    "ensureIndexes": {
     "!type": "fn(cb?: fn()) -> +promise.Promise",
     "!doc": "\n\nSends <code>ensureIndex</code> commands to mongo for each index declared in the schema."
    },
    "remove": {
     "!type": "fn(conditions: +Object, callback?: fn(err: +Error))",
     "!doc": "\n\nRemoves documents from the collection."
    },
    "find": {
     "!type": "fn(conditions: +Object, fields?: +Object, options?: +Object, callback?: fn()) -> +query.Query",
     "!doc": "\n\nFinds documents"
    },
    "findById": {
     "!type": "fn(id: +schema_objectid.ObjectId, fields?: +Object, options?: +Object, callback?: fn()) -> +query.Query",
     "!doc": "\n\nFinds a single document by id."
    },
    "findOne": {
     "!type": "fn(conditions: +Object, fields?: +Object, options?: +Object, callback?: fn()) -> +query.Query",
     "!doc": "\n\nFinds one document."
    },
    "count": {
     "!type": "fn(conditions: +Object, callback?: fn()) -> +query.Query",
     "!doc": "\n\nCounts number of matching documents in a database collection."
    },
    "distinct": {
     "!type": "fn(field: string, conditions?: +Object, callback?: fn()) -> +query.Query",
     "!doc": "\n\nCreates a Query for a <code>distinct</code> operation."
    },
    "where": {
     "!type": "fn(path: string, val?: +Object) -> +query.Query",
     "!doc": "\n\nCreates a Query, applies the passed conditions, and returns the Query."
    },
    "$where": {
     "!type": "fn(argument: string) -> +query.Query",
     "!doc": "\n\nCreates a <code>Query</code> and specifies a <code>$where</code> condition."
    },
    "findOneAndUpdate": {
     "!type": "fn(conditions?: +Object, update?: +Object, options?: +Object, callback?: fn()) -> +query.Query",
     "!doc": "\n\nIssues a mongodb findAndModify update command."
    },
    "findByIdAndUpdate": {
     "!type": "fn(id: +schema_objectid.ObjectId, update?: +Object, options?: +Object, callback?: fn()) -> +query.Query",
     "!doc": "\n\nIssues a mongodb findAndModify update command by a documents id."
    },
    "findOneAndRemove": {
     "!type": "fn(conditions: +Object, options?: +Object, callback?: fn()) -> +query.Query",
     "!doc": "\n\nIssue a mongodb findAndModify remove command."
    },
    "findByIdAndRemove": {
     "!type": "fn(id: +schema_objectid.ObjectId, options?: +Object, callback?: fn()) -> +query.Query",
     "!doc": "\n\nIssue a mongodb findAndModify remove command by a documents id."
    },
    "create": {
     "!type": "fn(doc: [?], fn?: fn()) -> +promise.Promise",
     "!doc": "\n\nShortcut for creating a new Document that is automatically saved to the db if valid."
    },
    "hydrate": {
     "!type": "fn(obj: +Object) -> +document.Document",
     "!doc": "\n\nShortcut for creating a new Document from existing raw data, pre-saved in the DB.\nThe document returned has no paths marked as modified initially."
    },
    "update": {
     "!type": "fn(conditions: +Object, doc: +Object, options?: +Object, callback?: fn()) -> +query.Query",
     "!doc": "\n\nUpdates documents in the database without returning them."
    },
    "mapReduce": {
     "!type": "fn(o: +Object, callback?: fn()) -> +promise.Promise",
     "!doc": "\n\nExecutes a mapReduce command."
    },
    "geoNear": {
     "!type": "fn(GeoJSON: +Object, options: +Object, callback?: fn()) -> +promise.Promise",
     "!doc": "\n\ngeoNear support for Mongoose"
    },
    "aggregate": {
     "!type": "fn(?: +Object, callback?: fn()) -> +aggregate.Aggregate",
     "!doc": "\n\nPerforms <a href=\"http://docs.mongodb.org/manual/applications/aggregation/\">aggregations</a> on the models collection."
    },
    "geoSearch": {
     "!type": "fn(condition: +Object, options: +Object, callback?: fn()) -> +promise.Promise",
     "!doc": "\n\nImplements <code>$geoSearch</code> functionality for Mongoose"
    },
    "populate": {
     "!type": "fn(docs: +document.Document, options: +Object, cb?: fn()) -> +promise.Promise",
     "!doc": "\n\nPopulates document references."
    },
    "compile": {
     "!type": "fn(name: string, schema: +schema.Schema, collectionName: string, connection: +connection.Connection, base: +index.Mongoose)",
     "!doc": "\n\nCompiler utility."
    },
    "__subclass": {
     "!type": "fn(conn: +connection.Connection, schema?: +schema.Schema, collection?: string) -> +model.Model",
     "!doc": "\n\nSubclass this model with <code>conn</code>, <code>schema</code>, and <code>collection</code> settings."
    }
   }
  },
  "promise": {
   "Promise": {
    "!type": "fn(fn: fn())",
    "!doc": "\n\nPromise constructor.",
    "prototype": {
     "Promise": {
      "!type": "fn(fn: fn())",
      "!doc": "\n\nPromise constructor."
     },
     "error": {
      "!type": "fn(err: string) -> +promise.Promise",
      "!doc": "\n\nRejects this promise with <code>err</code>."
     },
     "resolve": {
      "!type": "fn(err?: ?, val?: +Object)",
      "!doc": "\n\nResolves this promise to a rejected state if <code>err</code> is passed or a fulfilled state if no <code>err</code> is passed."
     },
     "addBack": {
      "!type": "?",
      "!doc": "\n\nAdds a single function as a listener to both err and complete."
     },
     "complete": {
      "!type": "?",
      "!doc": "\n\nFulfills this promise with passed arguments."
     },
     "addCallback": {
      "!type": "?",
      "!doc": "\n\nAdds a listener to the <code>complete</code> (success) event."
     },
     "addErrback": {
      "!type": "?",
      "!doc": "\n\nAdds a listener to the <code>err</code> (rejected) event."
     }
    }
   }
  },
  "query": {
   "Query": {
    "!type": "fn(options?: +Object, model?: +Object, conditions?: +Object, collection?: +Object)",
    "!doc": "\n\nQuery constructor used for building queries.",
    "prototype": {
     "use$geoWithin": {
      "!type": "?",
      "!doc": "\n\nFlag to opt out of using <code>$geoWithin</code>."
     },
     "toConstructor": {
      "!type": "fn() -> +query.Query",
      "!doc": "\n\nConverts this query to a customized, reusable query constructor with all arguments and options retained."
     },
     "read": {
      "!type": "fn(pref: string, tags?: [?]) -> +query.Query",
      "!doc": "\n\nDetermines the MongoDB nodes from which to read."
     },
     "setOptions": {
      "!type": "fn(options: +Object)",
      "!doc": "\n\nSets query options."
     },
     "lean": {
      "!type": "fn(bool: bool) -> +query.Query",
      "!doc": "\n\nSets the lean option."
     },
     "find": {
      "!type": "fn(criteria?: +Object, callback?: fn()) -> +query.Query",
      "!doc": "\n\nFinds documents."
     },
     "completeMany": {
      "!type": "fn(model: +model.Model, docs: [?], fields: +Object, self: +query.Query, pop?: [?], promise: +promise.Promise)",
      "!doc": "\n\nhydrates many documents"
     },
     "findOne": {
      "!type": "fn(criteria?: +Object, callback?: fn()) -> +query.Query",
      "!doc": "\n\nDeclares the query a findOne operation. When executed, the first found document is passed to the callback."
     },
     "count": {
      "!type": "fn(criteria?: +Object, callback?: fn()) -> +query.Query",
      "!doc": "\n\nSpecifying this query as a <code>count</code> query."
     },
     "distinct": {
      "!type": "fn(criteria?: +Object, field?: string, callback?: fn()) -> +query.Query",
      "!doc": "\n\nDeclares or executes a distict() operation."
     },
     "sort": {
      "!type": "fn(arg: +Object) -> +query.Query",
      "!doc": "\n\nSets the sort order"
     },
     "remove": {
      "!type": "fn(criteria?: +Object, callback?: fn()) -> +query.Query",
      "!doc": "\n\nDeclare and/or execute this query as a remove() operation."
     },
     "completeOne": {
      "!type": "fn(model: +model.Model, doc: +document.Document, fields: +Object, self: +query.Query, pop?: [?], promise: +promise.Promise)",
      "!doc": "\n\nhydrates a document"
     },
     "update": {
      "!type": "fn(criteria?: +Object, doc?: +Object, options?: +Object, callback?: fn()) -> +query.Query",
      "!doc": "\n\nDeclare and/or execute this query as an update() operation."
     },
     "exec": {
      "!type": "fn(operation?: string, callback?: fn()) -> +promise.Promise",
      "!doc": "\n\nExecutes the query"
     },
     "populate": {
      "!type": "fn(path: +Object, select?: +Object, model?: +model.Model, match?: +Object, options?: +Object) -> +query.Query",
      "!doc": "\n\nSpecifies paths which should be populated with other documents."
     },
     "cast": {
      "!type": "fn(model: +model.Model, obj?: +Object) -> +Object",
      "!doc": "\n\nCasts this query to the schema of <code>model</code>"
     },
     "stream": {
      "!type": "fn(options?: +Object) -> +querystream.QueryStream",
      "!doc": "\n\nReturns a Node.js 0.8 style <a href=\"http://nodejs.org/docs/v0.8.21/api/stream.html#stream_readable_stream\">read stream</a> interface."
     },
     "maxscan": {
      "!type": "?",
      "!doc": "\n\n*DEPRECATED* Alias of <code>maxScan</code>"
     },
     "tailable": {
      "!type": "fn(bool: bool)",
      "!doc": "\n\nSets the tailable option (for use with capped collections)."
     },
     "nearSphere": {
      "!type": "fn()",
      "!doc": "\n\n*DEPRECATED* Specifies a <code>$nearSphere</code> condition"
     },
     "center": {
      "!type": "?",
      "!doc": "\n\n*DEPRECATED* Alias for <a href=\"#query_Query-circle\">circle</a>"
     },
     "centerSphere": {
      "!type": "fn(path?: string, val: +Object) -> +query.Query",
      "!doc": "\n\n*DEPRECATED* Specifies a $centerSphere condition"
     }
    }
   }
  },
  "queryhelpers": {
   "makeLean": {
    "!type": "fn(option: +Object)",
    "!doc": "\n\nSet each path query option to lean",
    "preparePopulationOptions": {
     "!type": "fn(query: +query.Query, options: +Object) -> [?]",
     "!doc": "\n\nPrepare a set of path options for query population."
    },
    "preparePopulationOptionsMQ": {
     "!type": "fn(query: +query.Query, options: +Object) -> [?]",
     "!doc": "\n\nPrepare a set of path options for query population. This is the MongooseQuery\nversion"
    },
    "createModel": {
     "!type": "fn(model: +model.Model, doc: +Object, fields: +Object) -> +model.Model",
     "!doc": "\n\nIf the document is a mapped discriminator type, it returns a model instance for that type, otherwise,\nit returns an instance of the given model."
    },
    "prototype": {
     "makeLean": {
      "!type": "fn(option: +Object)",
      "!doc": "\n\nSet each path query option to lean"
     }
    }
   }
  },
  "querystream": {
   "QueryStream": {
    "!type": "fn(query: +query.Query, options?: +Object)",
    "!doc": "\n\nProvides a Node.js 0.8 style <a href=\"http://nodejs.org/docs/v0.8.21/api/stream.html#stream_readable_stream\">ReadStream</a> interface for Queries.",
    "prototype": {
     "QueryStream": {
      "!type": "fn(query: +query.Query, options?: +Object)",
      "!doc": "\n\nProvides a Node.js 0.8 style <a href=\"http://nodejs.org/docs/v0.8.21/api/stream.html#stream_readable_stream\">ReadStream</a> interface for Queries."
     },
     "readable": {
      "!type": "?"
     },
     "paused": {
      "!type": "?"
     },
     "pause": {
      "!type": "fn()",
      "!doc": "\n\nPauses this stream."
     },
     "resume": {
      "!type": "fn()",
      "!doc": "\n\nResumes this stream."
     },
     "destroy": {
      "!type": "fn(err?: ?)",
      "!doc": "\n\nDestroys the stream, closing the underlying cursor. No more events will be emitted."
     }
    }
   }
  },
  "schema_array": {
   "SchemaArray": {
    "!type": "fn(key: string, cast: +schematype.SchemaType, options: +Object)",
    "!doc": "\n\nArray SchemaType constructor"
   }
  },
  "schema_boolean": {
   "SchemaBoolean": {
    "!type": "fn(path: string, options: +Object)",
    "!doc": "\n\nBoolean SchemaType constructor."
   }
  },
  "schema_buffer": {
   "SchemaBuffer": {
    "!type": "fn(key: string, cast: +schematype.SchemaType)",
    "!doc": "\n\nBuffer SchemaType constructor"
   }
  },
  "schema_date": {
   "SchemaDate": {
    "!type": "fn(key: string, options: +Object)",
    "!doc": "\n\nDate SchemaType constructor.",
    "prototype": {
     "expires": {
      "!type": "fn(when: number) -> +schematype.SchemaType",
      "!doc": "\n\nDeclares a TTL index (rounded to the nearest second) for *Date* types only."
     }
    }
   }
  },
  "schema_documentarray": {
   "DocumentArray": {
    "!type": "fn(key: string, schema: +schema.Schema, options: +Object)",
    "!doc": "\n\nSubdocsArray SchemaType constructor",
    "prototype": {
     "scopePaths": {
      "!type": "fn(array: +schema_documentarray.DocumentArray, fields: +Object, init: bool)",
      "!doc": "\n\nScopes paths selected in a query to this array.\nNecessary for proper default application of subdocument values."
     }
    }
   }
  },
  "schema_index": {},
  "schema_mixed": {
   "Mixed": {
    "!type": "fn(path: string, options: +Object)",
    "!doc": "\n\nMixed SchemaType constructor."
   }
  },
  "schema_number": {
   "SchemaNumber": {
    "!type": "fn(key: string, options: +Object)",
    "!doc": "\n\nNumber SchemaType constructor.",
    "prototype": {
     "min": {
      "!type": "fn(value: number, message?: string) -> +schematype.SchemaType",
      "!doc": "\n\nSets a minimum number validator."
     },
     "max": {
      "!type": "fn(maximum: number, message?: string) -> +schematype.SchemaType",
      "!doc": "\n\nSets a maximum number validator."
     }
    }
   }
  },
  "schema_objectid": {
   "ObjectId": {
    "!type": "fn(key: string, options: +Object)",
    "!doc": "\n\nObjectId SchemaType constructor.",
    "prototype": {
     "auto": {
      "!type": "fn(turnOn: bool) -> +schematype.SchemaType",
      "!doc": "\n\nAdds an auto-generated ObjectId default if turnOn is true."
     }
    }
   }
  },
  "schema_string": {
   "SchemaString": {
    "!type": "fn(key: string, options: +Object)",
    "!doc": "\n\nString SchemaType constructor.",
    "prototype": {
     "enum": {
      "!type": "fn(args?: string) -> +schematype.SchemaType",
      "!doc": "\n\nAdds an enum validator"
     },
     "lowercase": {
      "!type": "fn() -> +schematype.SchemaType",
      "!doc": "\n\nAdds a lowercase setter."
     },
     "uppercase": {
      "!type": "fn() -> +schematype.SchemaType",
      "!doc": "\n\nAdds an uppercase setter."
     },
     "trim": {
      "!type": "fn() -> +schematype.SchemaType",
      "!doc": "\n\nAdds a trim setter."
     },
     "match": {
      "!type": "fn(regExp: ?, message?: string) -> +schematype.SchemaType",
      "!doc": "\n\nSets a regexp validator."
     }
    }
   }
  },
  "schema": {
   "Schema": {
    "!type": "fn(definition: +Object)",
    "!doc": "\n\nSchema constructor.",
    "prototype": {
     "Schema": {
      "!type": "fn(definition: +Object)",
      "!doc": "\n\nSchema constructor."
     },
     "paths": {
      "!type": "?"
     },
     "tree": {
      "!type": "?"
     },
     "add": {
      "!type": "fn(obj: +Object, prefix: string)",
      "!doc": "\n\nAdds key path / schema type pairs to this schema."
     },
     "reserved": {
      "!type": "?",
      "!doc": "\n\nReserved document keys."
     },
     "path": {
      "!type": "fn(path: string, constructor: +Object)",
      "!doc": "\n\nGets/sets schema paths."
     },
     "eachPath": {
      "!type": "fn(fn: fn()) -> +schema.Schema",
      "!doc": "\n\nIterates the schemas paths similar to Array#forEach."
     },
     "requiredPaths": {
      "!type": "fn() -> [?]",
      "!doc": "\n\nReturns an Array of path strings that are required by this schema."
     },
     "pathType": {
      "!type": "fn(path: string) -> string",
      "!doc": "\n\nReturns the pathType of <code>path</code> for this schema."
     },
     "pre": {
      "!type": "fn(method: string, callback: fn())",
      "!doc": "\n\nDefines a pre hook for the document."
     },
     "post": {
      "!type": "fn(method: string, fn: fn())",
      "!doc": "\n\nDefines a post hook for the document"
     },
     "plugin": {
      "!type": "fn(plugin: fn(), opts: +Object)",
      "!doc": "\n\nRegisters a plugin for this schema."
     },
     "method": {
      "!type": "fn(method: string, fn?: fn())",
      "!doc": "\n\nAdds an instance method to documents constructed from Models compiled from this schema."
     },
     "static": {
      "!type": "fn(name: string, fn: fn())",
      "!doc": "\n\nAdds static \"class\" methods to Models compiled from this schema."
     },
     "index": {
      "!type": "fn(fields: +Object, options?: +Object)",
      "!doc": "\n\nDefines an index (most likely compound) for this schema."
     },
     "set": {
      "!type": "fn(key: string, value?: +Object)",
      "!doc": "\n\nSets/gets a schema option."
     },
     "get": {
      "!type": "fn(key: string)",
      "!doc": "\n\nGets a schema option."
     },
     "indexes": {
      "!type": "fn()",
      "!doc": "\n\nCompiles indexes from fields and schema-level indexes"
     },
     "virtual": {
      "!type": "fn(name: string, options?: +Object) -> +virtualtype.VirtualType",
      "!doc": "\n\nCreates a virtual type with the given name."
     },
     "virtualpath": {
      "!type": "fn(name: string) -> +virtualtype.VirtualType",
      "!doc": "\n\nReturns the virtual type with the given <code>name</code>."
     },
     "Types": {
      "!type": "?",
      "!doc": "\n\nThe various built-in Mongoose Schema Types."
     }
    }
   }
  },
  "schemadefault": {},
  "schematype": {
   "SchemaType": {
    "!type": "fn(path: string, options?: +Object, instance?: string)",
    "!doc": "\n\nSchemaType constructor",
    "prototype": {
     "SchemaType": {
      "!type": "fn(path: string, options?: +Object, instance?: string)",
      "!doc": "\n\nSchemaType constructor"
     },
     "default": {
      "!type": "fn(val: fn()) -> ?",
      "!doc": "\n\nSets a default value for this SchemaType."
     },
     "index": {
      "!type": "fn(options: +Object) -> +schematype.SchemaType",
      "!doc": "\n\nDeclares the index options for this schematype."
     },
     "unique": {
      "!type": "fn(bool: bool) -> +schematype.SchemaType",
      "!doc": "\n\nDeclares an unique index."
     },
     "sparse": {
      "!type": "fn(bool: bool) -> +schematype.SchemaType",
      "!doc": "\n\nDeclares a sparse index."
     },
     "set": {
      "!type": "fn(fn: fn()) -> +schematype.SchemaType",
      "!doc": "\n\nAdds a setter to this schematype."
     },
     "get": {
      "!type": "fn(fn: fn()) -> +schematype.SchemaType",
      "!doc": "\n\nAdds a getter to this schematype."
     },
     "validate": {
      "!type": "fn(obj: fn(), errorMsg?: string, type?: string) -> +schematype.SchemaType",
      "!doc": "\n\nAdds validator(s) for this document path."
     },
     "required": {
      "!type": "fn(required: bool, message?: string) -> +schematype.SchemaType",
      "!doc": "\n\nAdds a required validator to this schematype."
     },
     "select": {
      "!type": "fn(val: bool) -> +schematype.SchemaType",
      "!doc": "\n\nSets default <code>select()</code> behavior for this path."
     }
    }
   }
  },
  "services_updateValidators": {},
  "statemachine": {},
  "types_array": {
   "MongooseArray": {
    "!type": "fn(values: [?], path: string, doc: +document.Document)",
    "!doc": "\n\nMongoose Array constructor.",
    "prototype": {
     "_atomics": {
      "!type": "?"
     },
     "_parent": {
      "!type": "?"
     }
    }
   }
  },
  "types_buffer": {
   "MongooseBuffer": {
    "!type": "fn(value: ?, encode: string, offset: number)",
    "!doc": "\n\nMongoose Buffer constructor.",
    "prototype": {
     "_parent": {
      "!type": "?"
     },
     "_subtype": {
      "!type": "?"
     }
    },
    "toObject": {
     "!type": "fn(subtype?: ?) -> ?",
     "!doc": "\n\nConverts this buffer to its Binary type representation."
    },
    "equals": {
     "!type": "fn(other: ?) -> bool",
     "!doc": "\n\nDetermines if this buffer is equals to <code>other</code> buffer"
    },
    "subtype": {
     "!type": "fn(subtype: ?)",
     "!doc": "\n\nSets the subtype option and marks the buffer modified."
    }
   }
  },
  "types_documentarray": {
   "MongooseDocumentArray": {
    "!type": "fn(values: [?], path: string, doc: +document.Document) -> +types_documentarray.MongooseDocumentArray",
    "!doc": "\n\nDocumentArray constructor",
    "id": {
     "!type": "fn(id: +schema_objectid.ObjectId) -> +types_embedded.EmbeddedDocument",
     "!doc": "\n\nSearches array items for the first document with a matching _id."
    },
    "toObject": {
     "!type": "fn(options?: +Object) -> [?]",
     "!doc": "\n\nReturns a native js Array of plain js objects"
    },
    "inspect": {
     "!type": "fn()",
     "!doc": "\n\nHelper for console.log"
    },
    "create": {
     "!type": "fn(obj: +Object)",
     "!doc": "\n\nCreates a subdocument casted to this schema."
    }
   }
  },
  "types_embedded": {
   "EmbeddedDocument": {
    "!type": "fn(obj: +Object, parentArr: +types_documentarray.MongooseDocumentArray, skipId: bool)",
    "!doc": "\n\nEmbeddedDocument constructor.",
    "prototype": {
     "markModified": {
      "!type": "fn(path: string)",
      "!doc": "\n\nMarks the embedded doc modified."
     },
     "remove": {
      "!type": "fn(fn?: fn())",
      "!doc": "\n\nRemoves the subdocument from its parent array."
     },
     "inspect": {
      "!type": "fn()",
      "!doc": "\n\nHelper for console.log"
     },
     "invalidate": {
      "!type": "fn(path: string, err: string) -> bool",
      "!doc": "\n\nMarks a path as invalid, causing validation to fail."
     },
     "ownerDocument": {
      "!type": "fn() -> +document.Document",
      "!doc": "\n\nReturns the top level document of this sub-document."
     },
     "parent": {
      "!type": "fn()",
      "!doc": "\n\nReturns this sub-documents parent document."
     },
     "parentArray": {
      "!type": "fn()",
      "!doc": "\n\nReturns this sub-documents parent array."
     }
    }
   }
  },
  "types_index": {},
  "types_objectid": {},
  "utils": {
   "pluralize": {
    "!type": "fn(string: string)",
    "!doc": "\n\nPluralize function.",
    "prototype": {
     "pluralization": {
      "!type": "?",
      "!doc": "\n\nPluralization rules."
     },
     "uncountables": {
      "!type": "?",
      "!doc": "\n\nUncountable words."
     }
    },
    "readPref": {
     "!type": "fn(pref: string, tags?: [?])",
     "!doc": "\n\nConverts arguments to ReadPrefs the driver\ncan understand."
    },
    "getValue": {
     "!type": "fn(path: string, obj: +Object)",
     "!doc": "\n\nReturn the value of <code>obj</code> at the given <code>path</code>."
    },
    "setValue": {
     "!type": "fn(path: string, val: ?, obj: +Object)",
     "!doc": "\n\nSets the value of <code>obj</code> at the given <code>path</code>."
    },
    "isNullOrUndefined": {
     "!type": "fn() -> bool",
     "!doc": "\n\nDetermine if <code>val</code> is null or undefined"
    },
    "flatten": {
     "!type": "fn(arr: [?], filter?: fn()) -> [?]",
     "!doc": "\n\nFlattens an array."
    }
   }
  },
  "virtualtype": {
   "VirtualType": {
    "!type": "fn()",
    "!doc": "\n\nVirtualType constructor",
    "prototype": {
     "VirtualType": {
      "!type": "fn()",
      "!doc": "\n\nVirtualType constructor"
     },
     "get": {
      "!type": "fn(fn: fn()) -> +virtualtype.VirtualType",
      "!doc": "\n\nDefines a getter."
     },
     "set": {
      "!type": "fn(fn: fn()) -> +virtualtype.VirtualType",
      "!doc": "\n\nDefines a setter."
     },
     "applyGetters": {
      "!type": "fn(value: +Object, scope: +Object) -> ?",
      "!doc": "\n\nApplies getters to <code>value</code> using optional <code>scope</code>."
     },
     "applySetters": {
      "!type": "fn(value: +Object, scope: +Object) -> ?",
      "!doc": "\n\nApplies setters to <code>value</code> using optional <code>scope</code>."
     }
    }
   }
  }
 }
};
    
})