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
package tern.server.nashorn;

import java.util.List;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import com.eclipsesource.json.Json;
import com.eclipsesource.json.JsonObject;

import tern.ITernProject;
import tern.TernException;
import tern.server.AbstractScriptEngineTernServer;
import tern.server.IResponseHandler;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.MinimalJSONHelper;
import tern.server.protocol.TernDoc;
import tern.server.protocol.html.ScriptTagRegion;
import tern.utils.IOUtils;

/**
 * Tern server implemented with Nashorn.
 * 
 */
public class NashornTernServer extends AbstractScriptEngineTernServer {

	private ScriptEngine engine;

	public NashornTernServer(ITernProject project) {
		super(project);
	}

	@Override
	public void addFile(String name, String text, ScriptTagRegion[] tags) {
		TernDoc doc = new TernDoc();
		doc.addFile(name, text, tags, null);
		try {
			request(doc);
		} catch (TernException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void request(TernDoc doc, IResponseHandler handler) {
		try {
			JsonObject data = request(doc);
			handler.onSuccess(data, null);
		} catch (Exception e) {
			handler.onError(e.getMessage(), e);
		}
	}

	private synchronized JsonObject request(TernDoc doc) throws TernException {
		ScriptEngine engine = getEngine();
		try {
			String script = new StringBuilder("server.request(").append(doc.toString()).append(");").toString();
			String json = (String) engine.eval(script);
			return Json.parse(json).asObject();
		} catch (Throwable e) {
			throw new TernException(e);
		}
	}

	@Override
	public IJSONObjectHelper getJSONObjectHelper() {
		return MinimalJSONHelper.INSTANCE;
	}

	@Override
	protected void doDispose() {
		if (engine != null) {
			try {

			} finally {
				engine = null;
			}
		}
		fireEndServer();
	}

	public void log(String message, Integer level) {
		if (level == 1) {
			System.err.println(message);
		} else {
			System.out.println(message);
		}
	}

	private synchronized ScriptEngine getEngine() throws TernException {
		if (engine == null) {
			engine = loadEngine();
		}
		return engine;
	}

	private ScriptEngine loadEngine() throws TernException {
		ScriptEngine engine = null;
		TernResources resources = loadTern();
		try {
			final ScriptEngineManager factory = new ScriptEngineManager();
			engine = factory.getEngineByName("nashorn");

			// Load tern scripts (acorn + ternjs) + plugins scripts
			List<TernResource> scripts = resources.getScripts();
			for (TernResource script : scripts) {
				eval(script.getFilename(), script.getContent(), engine);
			}
			// Get defs
			String defs = resources.getDefsAsString();

			// invocable.(this, "log", "_javaConsole", new Class<?>[] {
			// String.class, Integer.class });
			eval("tern-nashorn.js", IOUtils.toString(NashornTernServer.class.getResourceAsStream("tern-nashorn.js")),
					engine);

			StringBuilder script = new StringBuilder("var server = new J2V8TernServer(");
			script.append("[");
			script.append(defs.toString());
			script.append("],");
			script.append(getProject().getPlugins() != null ? getProject().getPlugins().toString() : "");
			script.append(");");
			eval("init.js", script.toString(), engine);
			return engine;
		} catch (Exception e) {
			throw new TernException(e);
		}
	}

	private static void eval(String filename, String content, ScriptEngine engine) throws ScriptException {
		engine.put(ScriptEngine.FILENAME, filename);
		engine.eval(content);
	}

}
