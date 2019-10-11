__⚠️ Tern.java is now OUTDATED, it's recommended to use [Eclipse Wild Web Developer](https://github.com/eclipse/wildwebdeveloper) instead__


tern.java
=========

[![Build Status](https://secure.travis-ci.org/angelozerr/tern.java.png)](http://travis-ci.org/angelozerr/tern.java)
[![Eclipse install](https://marketplace.eclipse.org/sites/all/modules/custom/marketplace/images/installbutton.png)](http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=1784264)

[tern.js](https://github.com/marijnh/tern) is a stand-alone code-analysis engine for JavaScript written in Javascript.

[tern.java](https://github.com/angelozerr/tern.java) provides the capability to use 
[tern.js](https://github.com/marijnh/tern) with Java context. It provides several tern server implementation : 

 * [tern.server.j2v8](https://github.com/angelozerr/tern.java/tree/master/core/tern.server.j2v8) wraps tern.js with Java code by using [J2V8](https://github.com/eclipsesource/J2V8) to create a Tern Server with Java code.
 * [tern.server.rhino](https://github.com/angelozerr/tern.java/tree/master/core/tern.server.rhino) wraps tern.js with Java code by using [Rhino](https://developer.mozilla.org/en-US/docs/Rhino)  to create a Tern Server with Java code.
 * [tern.server.nashorn](https://github.com/angelozerr/tern.java/tree/master/core/tern.server.nashorn) wraps tern.js with Java code by using [Java 8 Nashorn JavaScript engine](https://blogs.oracle.com/nashorn/)  to create a Tern Server with Java code. 
 * [tern.server.nodejs](https://github.com/angelozerr/tern.java/tree/master/core/tern.server.nodejs) wraps tern.js with Java code by using [node.js](http://nodejs.org/) to create a Tern Server with Java code. 

As  Tern is *very* CPU and memory intensive, the implementation with Rhino is very slow when JavaScript document is big. So it's better to use node.js or javv8. Nashorn is a little slow compare to J2V8 or node.js 

## Core Features

Once that Tern Server is created with Java using `core` module, 
you can use it in any Java context (Eclipse, Netbeans, etc). 
tern.java provides the capability to use Tern Server with SWT : 

 * contentassist which uses tern.java. If you start the SWT [TernEditor](https://github.com/angelozerr/tern.java/blob/master/eclipse/tern.eclipse.swt.samples/src/tern/eclipse/swt/samples/rhino/RhinoTernEditor.java) demo, 
you will see contentassist available for JavaScript : 

![SWT Tern Editor](https://github.com/angelozerr/tern.java/wiki/images/SWTTernEditor.png)

## Eclipse IDE

On top of `core` module
Tern.java provides an Eclipse IDE integration with Tern. For more information please read [Tern Eclipse IDE](https://github.com/angelozerr/tern.java/wiki/Tern-Eclipse-IDE).

To install Tern IDE, please read [Installation - Update site](https://github.com/angelozerr/tern.java/wiki/Installation-Update-Site) section.

### Plugins based on Tern IDE

 * [AngularJS Eclipse](https://github.com/angelozerr/angularjs-eclipse) to give support for [AngularJS](https://angularjs.org/).
 * [JavaScript Build Eclipse](https://github.com/angelozerr/jsbuild-eclipse) to give support for [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com/).

## Tern Tooling

There are also advanced tools for creators of tern plugins,
see wiki pages [Tern-Toolings](https://github.com/angelozerr/tern.java/wiki/Tern-Toolings),
[Tern-Console](https://github.com/angelozerr/tern.java/wiki/Tern-Console) and 
[Debugging](https://github.com/angelozerr/tern.java/wiki/Debugging-tern.js-with-Nodeclipse).

# Who is using tern.java?

 * [JBoss Studio](http://www.jboss.org/products/devstudio/overview/) for : 
  * Cordova Support 
  * Angular Support
 
See http://tools.jboss.org/blog/2014-06-19-beta2-for-luna.html#better-javascript for more informations.

 * Liferay IDE 2.2 for : 
  *  YUI, AUI support
  *  Liferay support

See http://www.liferay.com/fr/web/gregory.amerson/blog/-/blogs/liferay-ide-2-2-release for more informations.

 * [Nodeclipse](http://www.nodeclipse.org/) for :
  * node, express, support
  * mongodb native, mongoose support
  
 * [MyEclipse](https://www.genuitec.com/products/myeclipse/) and [Webclipse (JSjet)] (https://www.genuitec.com/products/webclipse/) :
  * content assist
  * jump to definition
  * element documentation
  * tern.java is used as a base for:
    * refactoring
    * occurences highlighting
    * outline
    * type hierarchy
    * call hierarchy

See https://www.genuitec.com/tag/tern/ for more informations.

## Build

See cloudbees job: https://opensagres.ci.cloudbees.com/job/tern.java/
