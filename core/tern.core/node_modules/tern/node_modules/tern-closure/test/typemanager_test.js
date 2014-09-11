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

/*global describe,it,beforeEach */
// Suppress JSHint errors about unused expressions on Chai assertion chains.
/*jshint -W030 */

var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect,
    sinonChai = require('sinon-chai');
chai.use(sinonChai);

require('lib/core').initializeForTesting();

var infer = require('tern/lib/infer'),
    TypeManager = require('lib/typemanager'),
    File = require('lib/file'),
    Visibility = File.Visibility,
    Reason = File.Reason,
    Server = require('tern/lib/tern').Server;


describe('TypeManager', function() {
  var context;
  var server;
  var fileFinder;
  var typeManager;

  beforeEach(function() {
    context = new infer.Context();
    context.curOrigin = 'test.js';
    server = new Server({
      plugins: {
        closure: {}
      }
    });
    fileFinder = {findFile: sinon.stub()};
    typeManager = new TypeManager(server, fileFinder);
  });


  describe('#getFile', function() {
    it('should create a new file if none present', function() {
      expect(typeManager.getFile('test.js').name).to.equal('test.js');
    });

    it('should return an existing file if present', function() {
      var file = typeManager.getFile('test.js');
      expect(typeManager.getFile('test.js')).to.equal(file);
    });

    it('should return a file added with #addFile', function() {
      var file = new File('test.js', function() {});
      typeManager.addFile(file);
      expect(typeManager.getFile('test.js')).to.equal(file);
    });
  });


  describe('#openFile for file without a parent', function() {
    it('should add a new File with PRIVATE access if not present', function() {
      server.addFile('test.js', 'contents', null /* parent */);
      typeManager.openFile('test.js');
      var file = typeManager.getFile('test.js');
      expect(file.name).to.equal('test.js');
      expect(file.access).to.equal(Visibility.PRIVATE);
    });

    it('should update existing file acces to PRIVATE', function() {
      server.addFile('test.js', 'contents', null /* parent */);
      var file = new File('test.js', function() {}, Visibility.PUBLIC);
      typeManager.addFile(file);
      typeManager.openFile('test.js');
      expect(file.access).to.equal(Visibility.PRIVATE);
    });
  });


  describe('#openFile for a file with a parent', function() {
    it('should not update the file access level', function() {
      server.addFile('parent.js', 'parent contents', null /* parent */);
      server.addFile('test.js', 'contents', 'parent.js');
      var file = new File('test.js', function() {}, Visibility.PUBLIC);
      typeManager.addFile(file);
      typeManager.openFile('test.js');
      expect(file.access).to.equal(Visibility.PUBLIC);
    });
  });


  describe('#defType', function() {
    it('should find + load the name if we have access', function(done) {
      sinon.spy(typeManager, 'getFile');
      fileFinder.findFile.callsArgWithAsync(1, 'found.js');
      sinon.spy(server, 'addFile');
      sinon.stub(server, 'flush', function() {
        setTimeout(check);
      });
      infer.withContext(context, function() {
        typeManager.defType('name', Reason.TYPE, Visibility.PUBLIC);
      });
      var check = function() {
        expect(typeManager.getFile).calledWith('found.js');
        expect(typeManager.getFile().access).equal(Visibility.PUBLIC);
        expect(fileFinder.findFile).calledOnce.calledWith('name');
        expect(server.addFile).calledOnce.
            calledWith('found.js', null, 'test.js');
        done();
      };
    });

    it('should not find + load the name if we have no access', function() {
      infer.withContext(context, function() {
        typeManager.defType('name', Reason.TYPE, Visibility.PRIVATE);
      });
      expect(fileFinder.findFile).not.called;
    });

    it('should find + load the name once access is granted', function() {
      infer.withContext(context, function() {
        typeManager.defType('name', Reason.TYPE, Visibility.PRIVATE);
      });
      expect(fileFinder.findFile).not.called;
      server.addFile('test.js', 'content', null /* parent */);
      typeManager.openFile('test.js');
      expect(fileFinder.findFile).calledOnce.calledWith('name');
    });

    it('should update the access level of the found file', function(done) {
      var foundFile = typeManager.getFile('found.js');
      sinon.spy(foundFile, 'updateAccess');
      fileFinder.findFile.callsArgWithAsync(1, 'found.js');
      sinon.stub(server, 'flush', function() {
        setTimeout(check);
      });
      infer.withContext(context, function() {
        typeManager.defType('name', Reason.TYPE, Visibility.PUBLIC);
      });
      var check = function() {
        expect(foundFile.updateAccess).calledOnce.calledWith(Visibility.PUBLIC);
        done();
      };
    });
  });
});
