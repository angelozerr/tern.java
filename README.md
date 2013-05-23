tern.java
=========

[tern.js](https://github.com/marijnh/tern) is a stand-alone code-analysis engine for JavaScript written in Javascript.

**tern.java** wraps tern.js with Java code by using [Rhino](https://developer.mozilla.org/en-US/docs/Rhino) to create a Tern Server with Java code. 

Once that Tern Server is created you can use it in any context (Eclipse, Netbeans, etc). tern.java provides the capability to use
Tern Server with Eclipse : 

 * contentassist which uses tern.java. If you start the SWT [TernEditor](https://github.com/angelozerr/tern.java/blob/master/tern.eclipse.swt.samples/src/tern/eclipse/swt/samples/TernEditor.java) demo, you will contentassist 
available for Javascript : 
