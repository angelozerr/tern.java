tern.java
=========

[tern.js](https://github.com/marijnh/tern) is a stand-alone code-analysis engine for JavaScript written in Javascript.

[tern.java](https://github.com/angelozerr/tern.java) provides the capability to use 
[tern.js](https://github.com/marijnh/tern) with Java context. It provides several implementation : 

 * wraps tern.js with Java code by using [Rhino](https://developer.mozilla.org/en-US/docs/Rhino) to create a Tern Server with Java code. 
 * wraps tern.js with Java code by using [node.js](http://nodejs.org/) to create a Tern Server with Java code. 
 * an other idea is to use [javv8](https://code.google.com/p/jav8/) but it seems the project is dead and [I need win32 implementation](https://code.google.com/p/jav8/issues/detail?id=26).
 
As  Tern is *very* CPU and memory intensive, the implementation with Rhino is very slow when javascript document is big. So it's better to use
node.js or javv8.

## Features

Once that Tern Server is created with Java you can use it in any Java context (Eclipse, Netbeans, etc). tern.java provides the capability to use
Tern Server with Eclipse : 

 * contentassist which uses tern.java. If you start the SWT [TernEditor](https://github.com/angelozerr/tern.java/blob/master/tern.eclipse.swt.samples/src/tern/eclipse/swt/samples/rhino/RhinoTernEditor.java) demo, 
you will see contentassist available for Javascript : 

![SWT Tern Editor](https://github.com/angelozerr/tern.java/wiki/images/SWTTernEditor.png)

## Rhino version

As [tern.js](https://github.com/marijnh/tern) uses [ECMAScript5](http://fr.wikipedia.org/wiki/ECMAScript), the Rhino version should support it. The [org.mozilla.javascript](https://github.com/angelozerr/tern.java/tree/master/org.mozilla.javascript) is an OSGi bundle which wraps the JAR
**Rhino 1.7R4** which supports ECMAScript5.
