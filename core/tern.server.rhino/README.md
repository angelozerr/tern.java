## Rhino version

As [tern.js](https://github.com/marijnh/tern) uses [ECMAScript5](http://fr.wikipedia.org/wiki/ECMAScript), the Rhino version should support it. The [org.mozilla.javascript](https://github.com/angelozerr/tern.java/tree/master/org.mozilla.javascript) is an OSGi bundle which wraps the JAR
**Rhino 1.7R4** which supports ECMAScript5.

## Sample

```java
import java.io.File;

import tern.EcmaVersion;
import tern.ITernProject;
import tern.TernException;
import tern.TernResourcesManager;
import tern.repository.ITernRepository;
import tern.repository.TernRepository;
import tern.server.ITernServer;
import tern.server.TernPlugin;
import tern.server.protocol.TernDoc;
import tern.server.protocol.outline.JSNodeRoot;
import tern.server.protocol.outline.TernOutlineCollector;
import tern.server.protocol.outline.TernOutlineQuery;
import tern.server.rhino.RhinoTernServer;

public class Main {

	public static void main(String[] args) throws TernException {

		// Create tern repository.
		File ternBaseDir = new File("../../core/ternjs");
		ITernRepository repository = new TernRepository("ternjs", ternBaseDir);
		// Create tern project by setting the tern repository
		File projectDir = new File(".");
		ITernProject project = TernResourcesManager.getTernProject(projectDir);
		project.setEcmaVersion(EcmaVersion.ES5);
		project.setRepository(repository);

		// Add outline plugin
		project.addPlugin(TernPlugin.outline);

		ITernServer server = new RhinoTernServer(project);
		server.addFile("main.js", "var a = 10;");

		TernDoc doc = new TernDoc(new TernOutlineQuery("main.js"));
		TernOutlineCollector collector = new TernOutlineCollector();
		server.request(doc, collector);

		JSNodeRoot root = collector.getRoot();
		System.err.println(root.getChildren().get(0).getName() + ":" + root.getChildren().get(0).getType());
	}
}
```