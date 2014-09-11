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

var File = require('lib/file'),
    Visibility = File.Visibility,
    Reason = File.Reason;

describe('File', function() {
  var file, loadFn;

  describe('construction', function() {
    it('should default to PUBLIC access', function() {
      var file = new File('test.js', function() {});
      expect(file.access).to.equal(Visibility.PUBLIC);
    });

    it('should should accept specified access', function() {
      var file = new File('test.js', function() {}, Visibility.PRIVATE);
      expect(file.access).to.equal(Visibility.PRIVATE);
    });
  });

  describe('#requestName', function() {
    describe('on a file with PUBLIC access', function() {
      beforeEach(function() {
        loadFn = sinon.spy();
        file = new File('test.js', loadFn, Visibility.PUBLIC);
      });

      it('should load PUBLIC names', function() {
        file.requestName('name', Reason.TYPE, Visibility.PUBLIC);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should defer loading PROTECTED names', function() {
        file.requestName('name', Reason.TYPE, Visibility.PROTECTED);
        expect(loadFn).not.called;
      });

      it('should defer loading PRIVATE names', function() {
        file.requestName('name', Reason.TYPE, Visibility.PRIVATE);
        expect(loadFn).not.called;
      });

      it('should defer loading PUBLIC PARAM names', function() {
        file.requestName('name', Reason.PARAM, Visibility.PUBLIC);
        expect(loadFn).not.called;
      });

      it('should load PUBLIC EXTENDS names with PUBLIC access', function() {
        file.requestName('name', Reason.EXTENDS, Visibility.PUBLIC);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });
    });

    describe('on a file with PROTECTED access', function() {
      beforeEach(function() {
        loadFn = sinon.spy();
        file = new File('test.js', loadFn, Visibility.PROTECTED);
      });

      it('should load PUBLIC names', function() {
        file.requestName('name', Reason.TYPE, Visibility.PUBLIC);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should load PROTECTED names', function() {
        file.requestName('name', Reason.TYPE, Visibility.PROTECTED);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should defer loading PRIVATE names', function() {
        file.requestName('name', Reason.REQUIRE, Visibility.PRIVATE);
        expect(loadFn).not.called;
      });

      it('should load PUBLIC PARAM names', function() {
        file.requestName('name', Reason.PARAM, Visibility.PUBLIC);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should load PUBLIC EXTENDS names with PROTECTED access', function() {
        file.requestName('name', Reason.EXTENDS, Visibility.PUBLIC);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PROTECTED, 'test.js');
      });
    });

    describe('on a file with PRIVATE access', function() {
      beforeEach(function() {
        loadFn = sinon.spy();
        file = new File('test.js', loadFn, Visibility.PRIVATE);
      });

      it('should load PUBLIC names', function() {
        file.requestName('name', Reason.TYPE, Visibility.PUBLIC);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should load PROTECTED names', function() {
        file.requestName('name', Reason.TYPE, Visibility.PROTECTED);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should load PRIVATE names', function() {
        file.requestName('name', Reason.REQUIRE, Visibility.PRIVATE);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should load PUBLIC PARAM names', function() {
        file.requestName('name', Reason.PARAM, Visibility.PUBLIC);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should load PUBLIC EXTENDS names with PROTECTED access', function() {
        file.requestName('name', Reason.EXTENDS, Visibility.PUBLIC);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PROTECTED, 'test.js');
      });

      it('should load PRIVATE EXTENDS names with PROTECTED access', function() {
        file.requestName('name', Reason.EXTENDS, Visibility.PRIVATE);
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PROTECTED, 'test.js');
      });
    });
  });

  describe('#updateAccess', function() {
    describe('on a file starting with PUBLIC access', function() {
      beforeEach(function() {
        loadFn = sinon.spy();
        file = new File('test.js', loadFn, Visibility.PUBLIC);
      });

      it('should not load any names if none are deferred', function() {
        file.requestName('name', Reason.TYPE, Visibility.PUBLIC);
        loadFn.reset();
        var changed = file.updateAccess(Visibility.PRIVATE);
        expect(changed).true;
        expect(loadFn).not.called;
      });

      it('should not load any names if new access is still PUBLIC', function() {
        file.requestName('name', Reason.TYPE, Visibility.PROTECTED);
        var changed = file.updateAccess(Visibility.PUBLIC);
        expect(changed).false;
        expect(loadFn).not.called;
      });

      it('should load PROTECTED names if new access is PROTECTED', function() {
        file.requestName('name', Reason.TYPE, Visibility.PROTECTED);
        var changed = file.updateAccess(Visibility.PROTECTED);
        expect(changed).true;
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should not load PRIVATE names if new access PROTECTED', function() {
        file.requestName('name', Reason.TYPE, Visibility.PRIVATE);
        var changed = file.updateAccess(Visibility.PROTECTED);
        expect(changed).true;
        expect(loadFn).not.called;
      });

      it('should load PROTECTED names if new access is PRIVATE', function() {
        file.requestName('name', Reason.TYPE, Visibility.PROTECTED);
        var changed = file.updateAccess(Visibility.PRIVATE);
        expect(changed).true;
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should load PRIVATE names if set to PRIVATE', function() {
        file.requestName('name', Reason.TYPE, Visibility.PRIVATE);
        var changed = file.updateAccess(Visibility.PRIVATE);
        expect(changed).true;
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should load EXTENDS names with PROTECTED access', function() {
        file.requestName('name', Reason.EXTENDS, Visibility.PUBLIC);
        loadFn.reset();
        var changed = file.updateAccess(Visibility.PROTECTED);
        expect(changed).true;
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PROTECTED, 'test.js');
      });
    });

    describe('on a file starting with PROTECTED access', function() {
      beforeEach(function() {
        loadFn = sinon.spy();
        file = new File('test.js', loadFn, Visibility.PROTECTED);
      });

      it('should not load any names if none are deferred', function() {
        file.requestName('name', Reason.TYPE, Visibility.PUBLIC);
        file.requestName('name', Reason.TYPE, Visibility.PROTECTED);
        loadFn.reset();
        var changed = file.updateAccess(Visibility.PRIVATE);
        expect(changed).true;
        expect(loadFn).not.called;
      });

      it('should not load PRIVATE names if new access PROTECTED', function() {
        file.requestName('name', Reason.TYPE, Visibility.PRIVATE);
        var changed = file.updateAccess(Visibility.PROTECTED);
        expect(changed).false;
        expect(loadFn).not.called;
      });

      it('should load PRIVATE names if set to PRIVATE', function() {
        file.requestName('name', Reason.TYPE, Visibility.PRIVATE);
        var changed = file.updateAccess(Visibility.PRIVATE);
        expect(changed).true;
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PUBLIC, 'test.js');
      });

      it('should load EXTENDS names with PROTECTED access', function() {
        file.requestName('name', Reason.EXTENDS, Visibility.PRIVATE);
        var changed = file.updateAccess(Visibility.PRIVATE);
        expect(changed).true;
        expect(loadFn).calledOnce;
        expect(loadFn).calledWith('name', Visibility.PROTECTED, 'test.js');
      });
    });

    describe('on a file starting with PRIVATE access', function() {
      beforeEach(function() {
        loadFn = sinon.spy();
        file = new File('test.js', loadFn, Visibility.PRIVATE);
      });

      it('should not load any names if none are deferred', function() {
        file.requestName('name', Reason.TYPE, Visibility.PUBLIC);
        file.requestName('name', Reason.TYPE, Visibility.PROTECTED);
        file.requestName('name', Reason.TYPE, Visibility.PRIVATE);
        loadFn.reset();
        var changed = file.updateAccess(Visibility.PUBLIC);
        expect(changed).false;
        changed = file.updateAccess(Visibility.PROTECTED);
        expect(changed).false;
        changed = file.updateAccess(Visibility.PRIVATE);
        expect(changed).false;
        expect(loadFn).not.called;
      });
    });
  });
});
