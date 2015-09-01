This sandbox folder contains the idea to highlight ECMAScripvt 6 code inside JSDT Editor.
See https://github.com/angelozerr/tern.java/issues/310

To highlight ES6 inside JSDT Editor : 

 * import org.eclipse.wst.jsdt.ui which is the JSDT UI project that I have modified : 
 
  ** JSDT UI provides [IJavaScanner](https://github.com/angelozerr/tern.java/blob/master/sandbox/org.eclipse.wst.jsdt.ui/src/org/eclipse/wst/jsdt/ui/text/IJavaScanner.java) and [IJavaScannerFactory](https://github.com/angelozerr/tern.java/blob/master/sandbox/org.eclipse.wst.jsdt.ui/src/org/eclipse/wst/jsdt/ui/text/IJavaScannerFactory.java)
  ** the [SCANNER](https://github.com/angelozerr/tern.java/blob/master/sandbox/org.eclipse.wst.jsdt.ui/src/org/eclipse/wst/jsdt/ui/text/SCANNER.java) is the manager of scanner (should be replaced with an extension point!). It i sused in [JavaScriptSourceViewerConfiguration#initializeScanners](https://github.com/angelozerr/tern.java/blob/master/sandbox/org.eclipse.wst.jsdt.ui/src/org/eclipse/wst/jsdt/ui/text/JavaScriptSourceViewerConfiguration.java#L279) to get the well Java code scanner (it implements [IJavaScannerFactory](https://github.com/angelozerr/tern.java/blob/master/sandbox/org.eclipse.wst.jsdt.ui/src/org/eclipse/wst/jsdt/ui/text/IJavaScannerFactory.java)). By default it uses the existinh JSDT JavaCodeScanner.
  
 *  import tern.eclipse.ide.jsdt.ui.editor which implements [IJavaScannerFactory](https://github.com/angelozerr/tern.java/blob/master/sandbox/org.eclipse.wst.jsdt.ui/src/org/eclipse/wst/jsdt/ui/text/IJavaScannerFactory.java) with tern/acorn.
 
 
 * your MUST SELECT **highlight** tern project in your tern modules!!! Open your JSDT Editor and it should highlight JS code (color are hard coded).