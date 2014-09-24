/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.nodejs;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import tern.TernException;
import tern.TernProject;
import tern.server.AbstractTernServer;
import tern.server.IInterceptor;
import tern.server.IResponseHandler;
import tern.server.ITernDef;
import tern.server.ITernPlugin;
import tern.server.nodejs.process.INodejsProcessListener;
import tern.server.nodejs.process.NodejsProcess;
import tern.server.nodejs.process.NodejsProcessAdapter;
import tern.server.nodejs.process.NodejsProcessException;
import tern.server.nodejs.process.NodejsProcessManager;
import tern.server.protocol.JsonHelper;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.server.protocol.html.ScriptTagRegion;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.type.ITernTypeCollector;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * Tern server implemented with node.js
 * 
 */
public class NodejsTernServer extends AbstractTernServer {

	private String baseURL;

	private List<IInterceptor> interceptors;

	private NodejsProcess process;
	private List<INodejsProcessListener> listeners;

	private long timeout = NodejsTernHelper.DEFAULT_TIMEOUT;

	private int testNumber = NodejsTernHelper.DEFAULT_TEST_NUMBER;

	private final INodejsProcessListener listener = new NodejsProcessAdapter() {

		@Override
		public void onStart(NodejsProcess server) {
			NodejsTernServer.this.fireStartServer();
		}

		@Override
		public void onStop(NodejsProcess server) {
			dispose();
		}

	};

	private boolean persistent;

	public NodejsTernServer(File projectDir, int port) {
		this(new TernProject(projectDir), port);
	}

	public NodejsTernServer(TernProject project, int port) {
		super(project);
		this.baseURL = computeBaseURL(port);
	}

	public NodejsTernServer(TernProject project) throws TernException {
		this(project, NodejsProcessManager.getInstance().create(
				project.getProjectDir()));
	}

	public NodejsTernServer(TernProject project, File nodejsBaseDir)
			throws TernException {
		this(project, NodejsProcessManager.getInstance().create(
				project.getProjectDir(), nodejsBaseDir));
	}

	public NodejsTernServer(TernProject project, File nodejsBaseDir,
			File nodejsTernBaseDir) throws TernException {
		this(project, NodejsProcessManager.getInstance().create(
				project.getProjectDir(), nodejsBaseDir, nodejsTernBaseDir));
	}

	public NodejsTernServer(TernProject project, NodejsProcess process) {
		super(project);
		this.process = process;
		process.setPersistent(persistent);
		process.addProcessListener(listener);
	}

	private String computeBaseURL(Integer port) {
		return new StringBuilder("http://localhost:").append(port).append("/")
				.toString();
	}

	@Override
	public void addDef(ITernDef def) throws TernException {
		TernProject project = getProject();
		project.addLib(def);
		try {
			project.save();
		} catch (IOException e) {
			throw new TernException(e);
		}
	}

	@Override
	public void addPlugin(ITernPlugin plugin) throws TernException {
		TernProject project = getProject();
		project.addPlugin(plugin);
		try {
			project.save();
		} catch (IOException e) {
			throw new TernException(e);
		}
	}

	@Override
	public void addFile(String name, String text, ScriptTagRegion[] tags) {
		TernDoc t = new TernDoc();
		t.addFile(name, text, tags, null);
		try {
			JsonObject json = makeRequest(t);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public void request(TernDoc doc, IResponseHandler handler) {
		try {
			JsonObject json = makeRequest(doc);
			handler.onSuccess(json,
					handler.isDataAsJsonString() ? json.toString() : null);
		} catch (Exception e) {
			handler.onError(e.getMessage());
		}
	}

	private JsonObject makeRequest(TernDoc doc) throws IOException,
			InterruptedException, TernException {
		String baseURL = null;
		try {
			baseURL = getBaseURL();
		} catch (NodejsProcessException e) {
			// the nodejs process cannot start => not a valid node path, dispose
			// the server.
			dispose();
			throw e;
		}

		JsonObject json = NodejsTernHelper.makeRequest(baseURL, doc, false,
				interceptors, this);
		return json;
	}

	public void addInterceptor(IInterceptor interceptor) {
		if (interceptors == null) {
			interceptors = new ArrayList<IInterceptor>();
		}
		interceptors.add(interceptor);
	}

	public void removeInterceptor(IInterceptor interceptor) {
		if (interceptors != null) {
			interceptors.remove(interceptor);
		}
	}

	public String getBaseURL() throws InterruptedException, TernException {
		if (baseURL == null) {
			int port = getProcess().start(timeout, testNumber);
			this.baseURL = computeBaseURL(port);
		}
		return baseURL;
	}

	private NodejsProcess getProcess() throws TernException {
		if (process != null) {
			process.setPersistent(persistent);
			return process;
		}
		TernProject project = super.getProject();
		process = NodejsProcessManager.getInstance().create(
				project.getProjectDir());
		process.setPersistent(persistent);
		process.addProcessListener(listener);
		return process;
	}

	public void addProcessListener(INodejsProcessListener listener) {
		if (listeners == null) {
			listeners = new ArrayList<INodejsProcessListener>();
		}
		listeners.add(listener);
		if (process != null) {
			process.addProcessListener(listener);
		}
	}

	public void removeProcessListener(INodejsProcessListener listener) {
		if (listeners != null && listener != null) {
			listeners.remove(listener);
		}
		if (process != null) {
			process.removeProcessListener(listener);
		}
	}

	@Override
	public void request(TernDoc doc, ITernCompletionCollector collector)
			throws TernException {
		try {
			JsonObject jsonObject = makeRequest(doc);
			if (jsonObject != null) {
				Long startCh = getCh(jsonObject, "start");
				Long endCh = getCh(jsonObject, "end");
				int pos = 0;
				if (startCh != null && endCh != null) {
					pos = endCh.intValue() - startCh.intValue();
				}
				JsonArray completions = (JsonArray) jsonObject
						.get("completions");
				if (completions != null) {
					for (JsonValue value : completions) {
						if (value.isString()) {
							collector.addProposal(value.asString(), null, null,
									null, null, pos, value, this);
						} else {
							super.addProposal(value, pos, collector);
						}
					}
				}
			}
		} catch (TernException e) {
			throw e;
		} catch (Throwable e) {
			throw new TernException(e);
		}
	}

	@Override
	public String getText(Object value) {
		return JsonHelper.getString((JsonValue) value);
	}

	@Override
	public Object getValue(Object value, String name) {
		return ((JsonObject) value).get(name);
	}

	private Long getCh(JsonObject data, String name) {
		JsonValue loc = data.get(name);
		if (loc == null) {
			return null;
		}
		if (loc.isNumber()) {
			return loc.asLong();
		}
		return loc != null ? JsonHelper.getLong((JsonObject) loc, "ch") : null;
	}

	@Override
	public void request(TernDoc doc, ITernDefinitionCollector collector)
			throws TernException {
		try {
			JsonObject jsonObject = makeRequest(doc);
			if (jsonObject != null) {
				Long startCh = getCh(jsonObject, "start");
				Long endCh = getCh(jsonObject, "end");
				String file = getText(jsonObject.get("file"));
				collector.setDefinition(file, startCh, endCh);
			}
		} catch (Throwable e) {
			throw new TernException(e);
		}
	}

	@Override
	public void request(TernDoc doc, ITernTypeCollector collector)
			throws TernException {
		try {
			JsonObject jsonObject = makeRequest(doc);
			if (jsonObject != null) {
				String type = getText(jsonObject.get("type"));
				boolean guess = JsonHelper.getBoolean(jsonObject, "guess",
						false);
				String name = getText(jsonObject.get("name"));
				String exprName = getText(jsonObject.get("exprName"));
				String documentation = getText(jsonObject.get("doc"));
				String url = getText(jsonObject.get("url"));
				String origin = getText(jsonObject.get("origin"));
				collector.setType(type, guess, name, exprName, documentation,
						url, origin, jsonObject, this);
			}
		} catch (Throwable e) {
			throw new TernException(e);
		}
	}

	@Override
	public void request(TernDoc doc, ITernLintCollector collector)
			throws TernException {
		try {
			JsonObject jsonObject = makeRequest(doc);
			if (jsonObject != null) {
				JsonArray messages = (JsonArray) jsonObject.get("messages");
				if (messages != null) {
					String message = null;
					String severity = null;
					JsonObject messageObject = null;
					for (JsonValue value : messages) {
						messageObject = (JsonObject) value;
						message = getText(messageObject.get("message"));
						severity = getText(messageObject.get("severity"));
						Long startCh = getCh(messageObject, "from");
						Long endCh = getCh(messageObject, "to");
						collector.addMessage(message, startCh, endCh, severity);
					}
				}
			}
		} catch (Throwable e) {
			throw new TernException(e);
		}

	}

	@Override
	public void doDispose() {
		if (process != null) {
			process.kill();
		}
		this.baseURL = null;
		this.process = null;
	}

	/**
	 * Set the timeout to use when node.js starts to retrieve the node.js port
	 * in {@link NodejsProcess#start(long, int)} from the given project.
	 */
	public void setTimeout(long timeout) {
		this.timeout = timeout;
	}

	/**
	 * Returns the timeout to use when node.js starts to retrieve the node.js
	 * port in {@link NodejsProcess#start(long, int)} from the given project.
	 * 
	 * @return
	 */
	public long getTimeout() {
		return timeout;
	}

	public void setTestNumber(int testNumber) {
		this.testNumber = testNumber;
	}

	public int getTestNumber() {
		return testNumber;
	}

	/**
	 * Set false if the server will shut itself down after five minutes of
	 * inactivity and true otherwise.
	 * 
	 * @param persistent
	 */
	public void setPersistent(boolean persistent) {
		this.persistent = persistent;
	}

	/**
	 * Returns false if the server will shut itself down after five minutes of
	 * inactivity and true otherwise.
	 * 
	 * @return
	 */
	public boolean isPersistent() {
		return persistent;
	}

}
