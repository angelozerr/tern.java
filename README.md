tern.java
=========

[tern.js](https://github.com/marijnh/tern) is a stand-alone code-analysis engine for JavaScript written in Javascript.

## Features

**tern.java** wraps tern.js with Java code by using [Rhino](https://developer.mozilla.org/en-US/docs/Rhino) to create a Tern Server with Java code. 

Once that Tern Server is created you can use it in any context (Eclipse, Netbeans, etc). tern.java provides the capability to use
Tern Server with Eclipse : 

 * contentassist which uses tern.java. If you start the SWT [TernEditor](https://github.com/angelozerr/tern.java/blob/master/tern.eclipse.swt.samples/src/tern/eclipse/swt/samples/TernEditor.java) demo, 
you will see contentassist available for Javascript : 

![SWT Tern Editor](https://github.com/angelozerr/tern.java/wiki/images/SWTTernEditor.png)

## Rhino version

As [tern.js](https://github.com/marijnh/tern) uses [ECMAScript5](http://fr.wikipedia.org/wiki/ECMAScript), the Rhino version should support it. The [org.mozilla.javascript](https://github.com/angelozerr/tern.java/tree/master/org.mozilla.javascript) is an OSGi bundle which wraps the JAR
**Rhino 1.7R4** which supports ECMAScript5.
