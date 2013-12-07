package tern.server.rhino;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;

import org.json.simple.JSONObject;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.NativeJSON;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.Scriptable;

import tern.TernException;
import tern.TernProject;
import tern.doc.IJSDocument;
import tern.server.AbstractTernServer;
import tern.server.DefaultResponseHandler;
import tern.server.IResponseHandler;
import tern.server.ITernCompletionCollector;
import tern.server.TernDef;
import tern.server.TernPlugin;
import tern.server.protocol.TernDoc;
import tern.server.rhino.loader.ClassPathScriptLoader;
import tern.server.rhino.loader.IScriptLoader;
import tern.utils.IOUtils;

public class RhinoTernServer extends AbstractTernServer {

	private final Scriptable ternScope;

	private final IScriptLoader loader;

	private final String[] TERN_SCRIPTS = { "env.rhino.1.2.js", "json/json.js",
			"acorn/acorn.js", "acorn/acorn_loose.js", "acorn/util/walk.js",
			"tern/lib/signal.js", "tern/lib/tern.js", "tern/lib/def.js",
			"tern/lib/comment.js", "tern/lib/infer.js", "tern-server.js" };

	public RhinoTernServer(TernProject project) throws IOException {
		this();
	}

	public RhinoTernServer() throws IOException {
		this(ClassPathScriptLoader.getInstance());
	}

	public RhinoTernServer(IScriptLoader loader) throws IOException {
		this.loader = loader;
		Context cx = Context.enter();
		try {

			// Initialize the standard objects (Object, Function, etc.)
			// This must be done before scripts can be executed. Returns
			// a scope object that we use in later calls.
			this.ternScope = cx.initStandardObjects();

			// acorn uses self variables, define it here.
			cx.evaluateString(ternScope, "var self = this;", "", 1, null);

			cx.setOptimizationLevel(-1);
			loadTernScripts(cx, loader);

			ternScope.put("_server", ternScope, this);
		} finally {
			// Exit from the context.
			Context.exit();
		}
	}

	public String getFile(String name) {
		try {
			return IOUtils.toString(new FileInputStream(new File(name)));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "";
		}
	}

	protected void loadTernScripts(Context cx, IScriptLoader loader)
			throws IOException {
		for (int i = 0; i < TERN_SCRIPTS.length; i++) {
			loadScript(cx, loader, TERN_SCRIPTS[i]);
		}
	}

	protected void loadScript(Context cx, IScriptLoader loader, String src)
			throws IOException {
		loader.loadScript(cx, ternScope, src);
	}

	public void addDef(TernDef def) throws IOException {
		addDef(def, loader);
	}

	public void addDef(TernDef def, IScriptLoader loader) throws IOException {
		addDef(def.getPath(), loader);
	}

	public void addDef(String def) throws IOException {
		addDef(def, loader);
	}

	public void addDef(String def, IScriptLoader loader) throws IOException {
		Context cx = Context.enter();
		try {
			addDef(cx, def, loader);
		} finally {
			// Exit from the context.
			Context.exit();
		}
	}

	protected void addDef(Context cx, String def, IScriptLoader loader)
			throws IOException {
		loader.loadScript(cx, ternScope, def, "(function() {var def = ",
				"addDef(def);})();");
	}

	public void addPlugin(TernPlugin plugin) throws IOException {
		addPlugin(plugin.name());
	}

	public void addPlugin(String plugin) throws IOException {
		Context cx = Context.enter();
		try {
			Object functionArgs[] = { plugin };
			Object fObj = ternScope.get("addPlugin", ternScope);
			Function f = (Function) fObj;
			f.call(cx, ternScope, ternScope, functionArgs);
		} finally {
			// Exit from the context.
			Context.exit();
		}
	}

	protected void addPlugin(Context cx, String plugin, IScriptLoader loader)
			throws IOException {
		loader.loadScript(cx, ternScope, plugin, "(function() {var plugin = ",
				"addPlugin(plugin);})();");
	}

	public void sendDoc(IJSDocument doc, IResponseHandler handler) {
		Context cx = Context.enter();
		try {
			Object jsObject = Context.javaToJS(doc, ternScope);
			Object functionArgs[] = { jsObject, handler };
			Object fObj = ternScope.get("sendDoc", ternScope);
			Function f = (Function) fObj;
			f.call(cx, ternScope, ternScope, functionArgs);
		} finally {
			// Exit from the context.
			Context.exit();
		}
	}

	public void addFile(String name, String text) {
		Context cx = Context.enter();
		try {
			// tern.js checks if file.text is typeof string
			// set java primitive wrap to false, otherwise tern.js throws error
			// ".files[n].text must be a string"
			cx.getWrapFactory().setJavaPrimitiveWrap(false);

			Object functionArgs[] = { name, text };
			Object fObj = ternScope.get("addFile", ternScope);
			Function f = (Function) fObj;
			f.call(cx, ternScope, ternScope, functionArgs);
		} finally {
			// Exit from the context.
			Context.exit();
		}
	}

	public void requestCompletion(IJSDocument doc, IResponseHandler handler) {
		Context cx = Context.enter();
		try {
			// tern.js checks if file.text is typeof string
			// set java primitive wrap to false, otherwise tern.js throws error
			// ".files[n].text must be a string"
			cx.getWrapFactory().setJavaPrimitiveWrap(false);

			Object jsObject = Context.javaToJS(doc, ternScope);
			Object functionArgs[] = { jsObject, handler };
			Object fObj = ternScope.get("ternHints", ternScope);
			Function f = (Function) fObj;
			f.call(cx, ternScope, ternScope, functionArgs);

		} finally {
			// Exit from the context.
			Context.exit();
		}
	}

	public void loadJS(File baseDir) {
		Context cx = Context.enter();
		try {
			Object fObj = ternScope.get("addFile", ternScope);
			Function f = (Function) fObj;
			loadJS(baseDir, f, cx);
		} finally {
			// Exit from the context.
			Context.exit();
		}
	}

	private void loadJS(File baseDir, Function f, Context cx) {
		if (baseDir.isFile()) {
			try {
				if (baseDir.getName().endsWith(".js")) {
					long start = System.currentTimeMillis();
					Object functionArgs[] = { baseDir.getPath(),
							IOUtils.toString(new FileInputStream(baseDir)) };
					f.call(cx, ternScope, ternScope, functionArgs);
					System.err.println(baseDir.getPath() + " =>"
							+ (System.currentTimeMillis() - start) + "ms");
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			if (!baseDir.getName().startsWith(".")
					&& !baseDir.getName().startsWith("test")) {
				for (File file : baseDir.listFiles()) {
					loadJS(file, f, cx);
				}
			}
		}

	}

	@Override
	public void request(TernDoc doc, IResponseHandler handler) {

		Context cx = Context.enter();
		try {
			// tern.js checks if file.text is typeof string
			// set java primitive wrap to false, otherwise tern.js throws error
			// ".files[n].text must be a string"
			cx.getWrapFactory().setJavaPrimitiveWrap(false);
			
			//Object jsObject = NativeJSON.parse(cx, ternScope, doc.toJSONString(), null); 
			Object jsObject = Context.javaToJS(doc.toJSONString(), ternScope);
			Object functionArgs[] = { jsObject, handler, handler.isDataAsJsonString() };
			Object fObj = ternScope.get("request2", ternScope);
			Function f = (Function) fObj;
			f.call(cx, ternScope, ternScope, functionArgs);

		} finally {
			// Exit from the context.
			Context.exit();
		}

	}

	@Override
	public void request(TernDoc doc, ITernCompletionCollector collector)
			throws TernException {
		DefaultResponseHandler handler = new DefaultResponseHandler(
				true);
		request(doc, handler);
		Object data = handler.getData();
		NativeObject rhinoObject = (NativeObject) data;
		if (rhinoObject != null) {
			Double startCh = getCh(rhinoObject, "start");
			Double endCh = getCh(rhinoObject, "end");
			int pos = endCh.intValue() - startCh.intValue();
			List completions = (List) rhinoObject.get("completions",
					rhinoObject);
			for (Object object : completions) {
				
				addProposal((NativeObject) object, pos, collector);
			}
		}
	}
	
	protected void addProposal(NativeObject completion, int pos,
			ITernCompletionCollector collector) {
		String name = completion.get("name").toString();
		String type = completion.get("type").toString();
		Object doc = completion.get("doc");
		collector.addProposal(name, type, doc, pos);
	}

	private Double getCh(NativeObject data, String pos) {
		NativeObject loc = (NativeObject) data.get(pos, data);
		return (Double) loc.get("ch", loc);
	}

	@Override
	public void dispose() {
		super.dispose();
	}
}
