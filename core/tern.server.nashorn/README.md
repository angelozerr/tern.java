tern.server.nashorn
=========

[tern.server.nashorn](https://github.com/angelozerr/tern.java/tree/master/core/tern.server.nashorn) is a tern server implementation based on Nashorn.

## Sample with SWT
 
[tern.eclipse.swt.samples.java8](https://github.com/angelozerr/tern.java/tree/master/samples/tern.eclipse.swt.samples.java8) provides a sample with a simple SWT Text & the Nashorn tern server implementation. To use it : 

* use Java8

* import the following projects in your workspace :
 
 * minimal-json. You can find it at https://github.com/angelozerr/tern.java/tree/master/thirdparties/minimal-json
 * tern.core
 * tern.eclipse
 * tern.eclipse.swt.samples.java8
 * tern.server.nashorn
 * ternjs
 
* Run the main https://github.com/angelozerr/tern.java/blob/master/samples/tern.eclipse.swt.samples.java8/src/tern/eclipse/swt/samples/nashorn/NashornTernEditor.java

You can play with Ctrl+Space to open tern completion :

![SWT Tern Editor](https://github.com/angelozerr/tern.java/wiki/images/SWTTernEditor.png)
 

# Nashorn Integration

* no need to implement require AMD function, because ternjs is able to execute without node.js inside Web Browser. The Nashorn tern server implementation works like if ternjs was executed in a Web Browser.   

* implement basic console.log. I think Nashorn should provide that.
 
# Limitation
	
* not tested, but is it working if there are several Nashorn tern server (several v8 instances)? Because in Eclipse IDE, there are a tern server per Eclipse project.
* some tern plugin requires **require** node function to support their features like : 

 * the **node** tern plugin which uses require to retrieve list of node module by completion inside require.
* tern-closure which works only in node.js context
* I will implement soon angular completion for templateUrl which will use require('fs') to retrieve list of HTML files.

# TODO

* integrate the thern server Nashorn inside Eclipse IDE 