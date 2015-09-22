/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.rhino;

import java.io.IOException;
import java.util.List;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.UniqueTag;

import tern.ITernProject;
import tern.TernException;
import tern.server.AbstractScriptEngineTernServer;
import tern.server.IResponseHandler;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.TernDoc;
import tern.server.protocol.html.ScriptTagRegion;
import tern.server.rhino.loader.ClassPathScriptLoader;

public class RhinoTernServer extends AbstractScriptEngineTernServer {

	private Scriptable ternScope;

	private final String[] BEFORE_SCRIPTS = { "env.rhino.1.2.js", "json.js" };
	private final String[] AFTER_SCRIPTS = { "tern-server.js" };

	public RhinoTernServer(ITernProject project) {
		super(project);
	}

	@Override
	public void addFile(String name, String text, ScriptTagRegion[] tags) {
		TernDoc doc = new TernDoc();
		doc.addFile(name, text, tags, null);
		request(doc, new IResponseHandler() {
			
			@Override
			public void onSuccess(Object data, String dataAsJsonString) {
				//System.err.println(data);
			}
			
			@Override
			public void onError(String error, Throwable t) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public boolean isDataAsJsonString() {
				// TODO Auto-generated method stub
				return true;
			}
		});
	}

	@Override
	public void request(TernDoc doc, IResponseHandler handler) {
		Context cx = Context.enter();
		try {
			// tern.js checks if file.text is typeof string
			// set java primitive wrap to false, otherwise tern.js throws error
			// ".files[n].text must be a string"
			cx.getWrapFactory().setJavaPrimitiveWrap(false);

			Scriptable ternScope = getTernSope();
			Object jsObject = Context.javaToJS(doc.toString(), ternScope);
			Object functionArgs[] = { jsObject, handler, handler.isDataAsJsonString() };
			Object fObj = ((Scriptable)ternScope.get("server", ternScope)).get("request2", ternScope);
			Function f = (Function) fObj;
			f.call(cx, ternScope, ternScope, functionArgs);
		} catch (Exception e) {
			handler.onError(e.getMessage(), e);
		} finally {
			// Exit from the context.
			Context.exit();
		}
	}

	@Override
	public IJSONObjectHelper getJSONObjectHelper() {
		return RhinoJSONHelper.INSTANCE;
	}

	@Override
	protected void doDispose() {
		fireEndServer();
	}

	private Scriptable loadRhinoTern() throws TernException, IOException {

		Scriptable ternScope;
		Context cx = Context.enter();
		try {

			// Initialize the standard objects (Object, Function, etc.)
			// This must be done before scripts can be executed. Returns
			// a scope object that we use in later calls.
			ternScope = cx.initStandardObjects();

			// acorn uses self variables, define it here.
			cx.evaluateString(ternScope, "var self = this;", "", 1, null);
			cx.setOptimizationLevel(-1);

			// Env scripts
			loadScripts(cx, ternScope, BEFORE_SCRIPTS);

			// Tern, acorn scripts
			TernResources resources = loadTern();
			// Load tern scripts (acorn + ternjs) + plugins scripts
			List<TernResource> scripts = resources.getScripts();
			for (TernResource script : scripts) {
				cx.evaluateString(ternScope, script.getContent(), script.getFilename(), 0, null);
			}
			
			// tern-server
			String defs = resources.getDefsAsString();
			loadScripts(cx, ternScope, AFTER_SCRIPTS);
			StringBuilder script = new StringBuilder(
					"var server = new J2V8TernServer(");
			script.append("[");
			script.append(defs.toString());
			script.append("],");
			script.append(getProject().getPlugins() != null ? getProject()
					.getPlugins().toString() : "");
			script.append(");");
			cx.evaluateString(ternScope, script.toString(), "init", 0, null);
			
		} finally {
			// Exit from the context.
			Context.exit();
		}
		return ternScope;
	}

	private void loadScripts(Context cx, Scriptable ternScope, String[] srcs) throws IOException {
		for (int i = 0; i < srcs.length; i++) {
			ClassPathScriptLoader.getInstance().loadScript(cx, ternScope, srcs[i]);
		}
	}

	private synchronized Scriptable getTernSope() throws TernException, IOException {
		if (ternScope == null) {
			ternScope = loadRhinoTern();
		}
		return ternScope;
	}

	private static class RhinoJSONHelper implements IJSONObjectHelper {

		public static RhinoJSONHelper INSTANCE = new RhinoJSONHelper();

		@SuppressWarnings("unchecked")
		@Override
		public Iterable<Object> getList(Object jsonObj, String name) {
			return (Iterable<Object>) ((NativeObject) jsonObj).get("completions", //$NON-NLS-1$
					(NativeObject) jsonObj);
		}

		@Override
		public Long getCh(Object data, String name) {
			Double d;
			if (data instanceof Double) {
				d = (Double) data;
			} else {
				NativeObject loc = (NativeObject) ((NativeObject) data).get(name, (NativeObject) data);
				d = (Double) loc.get("ch", loc); //$NON-NLS-1$
			}
			if (d != null) {
				return d.longValue();
			}
			return null;
		}

		@Override
		public String getText(Object jsonObj, String property) {
			Object text = ((Scriptable) jsonObj).get(property, (Scriptable) jsonObj);
			if (text == null || (text instanceof UniqueTag)) {
				return null;
			}
			return text.toString();
		}

		@Override
		public Long getLong(Object jsonObject, String name) {
			return null;
		}

		@Override
		public boolean isString(Object value) {
			return value instanceof String;
		}

		@Override
		public String getText(Object value) {
			if (value == null) {
				return null;
			}
			return value.toString();
		}

		@Override
		public boolean getBoolean(Object jsonObject, String name, boolean defaultValue) {
			String val = getText(jsonObject, name);
			return val != null ? Boolean.valueOf(val) : defaultValue;
		}

	}
}
