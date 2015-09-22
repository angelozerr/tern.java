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
package tern.server.j2v8;

import java.io.IOException;
import java.util.List;

import com.eclipsesource.json.Json;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.v8.V8;

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
 * Tern server implemented with J2V8
 * 
 */
public class J2V8TernServer extends AbstractScriptEngineTernServer {

	private V8 v8;

	public J2V8TernServer(ITernProject project) {
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
		V8 v8 = getV8();
		try {
			v8.getLocker().acquire();
			String script = new StringBuilder("server.request(")
					.append(doc.toString()).append(");").toString();
			String json = v8.executeStringScript(script);
			return Json.parse(json).asObject();
		} catch (Throwable e) {
			throw new TernException(e);
		} finally {
			v8.getLocker().release();
		}
	}

	@Override
	public IJSONObjectHelper getJSONObjectHelper() {
		return MinimalJSONHelper.INSTANCE;
	}

	@Override
	protected void doDispose() {
		if (v8 != null) {
			try {
				v8.getLocker().acquire();
				v8.release();
				if (V8.getActiveRuntimes() != 0) {
					throw new IllegalStateException(
							"V8Runtimes not properly released.");
				}
			} finally {
				v8 = null;
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

	private synchronized V8 getV8() throws TernException {
		if (v8 == null) {
			v8 = loadV8();
		}
		return v8;
	}

	private V8 loadV8() throws TernException {
		V8 v8 = null;
		TernResources resources = loadTern();
		try {
			v8 = V8.createV8Runtime();
			v8.getLocker().acquire();

			// Load tern scripts (acorn + ternjs) + plugins scripts
			List<TernResource> scripts = resources.getScripts();
			for (TernResource script : scripts) {
				v8.executeScript(script.getContent(), script.getFilename(), 0);
			}
			// Get defs
			String defs = resources.getDefsAsString();

			v8.registerJavaMethod(this, "log", "_javaConsole", new Class<?>[] {
					String.class, Integer.class });
			v8.executeScript(IOUtils.toString(J2V8TernServer.class
					.getResourceAsStream("tern-j2v8.js")), "tern-j2v8.js", 0);

			StringBuilder script = new StringBuilder(
					"var server = new J2V8TernServer(");
			script.append("[");
			script.append(defs.toString());
			script.append("],");
			script.append(getProject().getPlugins() != null ? getProject()
					.getPlugins().toString() : "");
			script.append(");");
			v8.executeScript(script.toString());
			return v8;
		} catch (IOException e) {
			throw new TernException(e);
		} finally {
			if (v8 != null) {
				v8.getLocker().release();
			}
		}
	}

}
