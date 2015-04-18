tern.server.j2v8
=========

[tern.server.j2v8](https://github.com/angelozerr/tern.java/tree/master/core/tern.server.j2v8) is a tern server implementation based on [J2V8](https://github.com/eclipsesource/J2V8).

# How to use it?

## Prerequisite

* **J2V8 jar** : as [J2V8](https://github.com/eclipsesource/J2V8) depends on the OS, you need to use the well J2V8 according your OS. See [Bundled Native Libraries](http://eclipsesource.com/blogs/2015/02/25/announcing-j2v8-2-0/) article. Note it exists now **j2v8_win32_x86_64.jar** for Windows 64 bits.

* **OSGify J2V8** : as J2V8 is not today an OSGi bundle (see [issue 37 of J2V8](https://github.com/eclipsesource/J2V8/issues/37)), you need to create yourself an OSGi bundle. I have done that at hand in [thirdparties/j2v8](https://github.com/angelozerr/tern.java/tree/master/thirdparties/j2v8/) (just for my need). The MANIFEST.MF **export the package** : 
 ```
 Export-Package: com.eclipsesource.v8,
 com.eclipsesource.v8.utils
 ```
 
 and **Eclipse-PlatformFilter** (which will be usefull for update site (see [issue 36 of J2V8](https://github.com/eclipsesource/J2V8/issues/36):
 
 ```
 Eclipse-PlatformFilter: (& (osgi.ws=win32)(osgi.os=win32)(osgi.arch=x86_64))
 ```
 
* have Java7 installed, because J2V8 depends on Java7. Hope it will change that. See [issue 38 of J2V8](https://github.com/eclipsesource/J2V8/issues/38)
 
## Sample with SWT
 
[tern.eclipse.swt.samples](https://github.com/angelozerr/tern.java/tree/master/eclipse/tern.eclipse.swt.samples) provides a sample with a simple SWT Text & the J2V8 tern server implementation. To use it : 

* import the following projects in your workspace :
 
 * the J2V8 bundle according your OS. If you have Windows 64 bits you can use https://github.com/angelozerr/tern.java/tree/master/thirdparties/j2v8/j2v8_win32_x86_64
 * minimal-json. You can find it at https://github.com/angelozerr/tern.java/tree/master/thirdparties/minimal-json
 * tern.core
 * tern.eclipse
 * tern.eclipse.swt.samples
 * tern.server.j2v8
 * ternjs
 
* Run the main https://github.com/angelozerr/tern.java/blob/master/eclipse/tern.eclipse.swt.samples/src/tern/eclipse/swt/samples/j2v8/J2V8TernEditor.java

You can play with Ctrl+Space to open tern completion :

![SWT Tern Editor](https://github.com/angelozerr/tern.java/wiki/images/SWTTernEditor.png)
 

# J2V8 Integration

* no need to implement require AMD function, because ternjs is able to execute without node.js inside Web Browser. The J2V8 tern server implementation works like if ternjs was executed in a Web Browser.
 
* don't use V80bject because we need every time release it. I have just use String (which follows JSON format) for tern request/response.   

* implement basic console.log. I think J2V8 should provide that.
 
# Limitation

* cannot be used with Eclipse IDE, because of async tern completion (with thread) and https://github.com/eclipsesource/J2V8/issues/33 , it throws error : 

```
java.lang.Error: Invalid V8 thread access.
	at com.eclipsesource.v8.V8.checkThread(V8.java:246)
	at com.eclipsesource.v8.V8.executeStringScript(V8.java:187)
	at com.eclipsesource.v8.V8.executeStringScript(V8.java:183)
	at tern.server.j2v8.J2V8TernServer.request(J2V8TernServer.java:79)
	at tern.server.j2v8.J2V8TernServer.request(J2V8TernServer.java:69)
	at tern.server.protocol.TernResultsProcessorsFactory.makeRequestAndProcess(TernResultsProcessorsFactory.java:36)
	at tern.eclipse.ide.internal.core.resources.IDETernServerAsyncReqProcessor.run(IDETernServerAsyncReqProcessor.java:104)
	at org.eclipse.core.internal.jobs.Worker.run(Worker.java:53)
```
	
* not tested, but is it working if there are several J2V8 tern server (several v8 instances)? Because in Eclipse IDE, there are a tern server per Eclipse project.
* some tern plugin requires **require** node function to support their features like : 

 * the **node** tern plugin which uses require to retrieve list of node module by completion inside require.
* tern-closure which works only in node.js context
* I will implement soon angular completion for templateUrl which will use require('fs') to retrieve list of HTML files.

# TODO

* clean code!
* integrate the thern server J2v8 inside Eclipse IDE 