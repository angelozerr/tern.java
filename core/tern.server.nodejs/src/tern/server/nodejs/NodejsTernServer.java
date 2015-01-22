/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genutiec.com> - asynchronous request processing and 
 *  									refactoring of collectors API 
 */
package tern.server.nodejs;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import tern.ITernProject;
import tern.TernException;
import tern.TernResourcesManager;
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
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.JsonHelper;
import tern.server.protocol.TernDoc;
import tern.server.protocol.html.ScriptTagRegion;

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
			fireEndServer();
		}

	};

	private boolean persistent;

	public NodejsTernServer(File projectDir, int port) {
		this(TernResourcesManager.getTernProject(projectDir), port);
	}

	public NodejsTernServer(ITernProject project, int port) {
		super(project);
		this.baseURL = computeBaseURL(port);
	}

	public NodejsTernServer(ITernProject project) throws TernException {
		this(project, NodejsProcessManager.getInstance().create(
				project.getProjectDir()));
	}

	public NodejsTernServer(ITernProject project, File nodejsBaseDir)
			throws TernException {
		this(project, NodejsProcessManager.getInstance().create(
				project.getProjectDir(), nodejsBaseDir));
	}

	public NodejsTernServer(ITernProject project, File nodejsBaseDir,
			File nodejsTernBaseDir) throws TernException {
		this(project, NodejsProcessManager.getInstance().create(
				project.getProjectDir(), nodejsBaseDir, nodejsTernBaseDir));
	}

	public NodejsTernServer(ITernProject project, NodejsProcess process) {
		super(project);
		this.process = process;
		process.addProcessListener(listener);
		initProcess(process);
	}

	private String computeBaseURL(Integer port) {
		return new StringBuilder("http://localhost:").append(port).append("/")
				.toString();
	}

	@Override
	public void addDef(ITernDef def) throws TernException {
		ITernProject project = getProject();
		project.addLib(def);
		try {
			project.save();
		} catch (IOException e) {
			throw new TernException(e);
		}
	}

	@Override
	public void addPlugin(ITernPlugin plugin) throws TernException {
		ITernProject project = getProject();
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
			handler.onError(e.getMessage(), e);
		}
	}

	private JsonObject makeRequest(TernDoc doc) throws IOException,
			InterruptedException, TernException {
		String baseURL = null;
		try {
			baseURL = getBaseURL();
			if (baseURL == null) {
				throw new TernException("Server has been disposed");
			}
		} catch (NodejsProcessException e) {
			// the nodejs process cannot start => not a valid node path, dispose
			// the server.
			dispose();
			throw e;
		}

		List<IInterceptor> interceptors;

		beginReadState();
		try {
			if (this.interceptors != null) {
				interceptors = new ArrayList<IInterceptor>(this.interceptors);
			} else {
				interceptors = null;
			}
		} finally {
			endReadState();
		}

		JsonObject json = NodejsTernHelper.makeRequest(baseURL, doc, false,
				interceptors, this);
		return json;
	}

	public void addInterceptor(IInterceptor interceptor) {
		beginWriteState();
		try {
			if (interceptors == null) {
				interceptors = new ArrayList<IInterceptor>();
			}
			interceptors.add(interceptor);
		} finally {
			endWriteState();
		}
	}

	public void removeInterceptor(IInterceptor interceptor) {
		beginWriteState();
		try {
			if (interceptors != null) {
				interceptors.remove(interceptor);
			}
		} finally {
			endWriteState();
		}
	}

	public String getBaseURL() throws InterruptedException, TernException {
		beginReadState();
		try {
			if (baseURL == null) {
				endReadState();
				beginWriteState();
				try {
					if (baseURL != null || isDisposed()) {// already initialized or disposed
						return baseURL;
					}
					int port = getProcess().start(timeout, testNumber);
					this.baseURL = computeBaseURL(port);
				} finally {
					endWriteState();
					beginReadState();
				}
			}
			return baseURL;
		} finally {
			endReadState();
		}
	}

	private NodejsProcess getProcess() throws TernException {
		if (process == null) {
			ITernProject project = super.getProject();
			process = NodejsProcessManager.getInstance().create(
					project.getProjectDir());
			process.addProcessListener(listener);
		}
		initProcess(process);
		return process;
	}

	private void initProcess(NodejsProcess process) {
		process.setPersistent(persistent);
		process.setLoadingLocalPlugins(isLoadingLocalPlugins());
	}

	public void addProcessListener(INodejsProcessListener listener) {
		beginWriteState();
		try {
			if (listeners == null) {
				listeners = new ArrayList<INodejsProcessListener>();
			}
			listeners.add(listener);
			if (process != null) {
				process.addProcessListener(listener);
			}
		} finally {
			endWriteState();
		}
	}

	public void removeProcessListener(INodejsProcessListener listener) {
		beginWriteState();
		try {
			if (listeners != null && listener != null) {
				listeners.remove(listener);
			}
			if (process != null) {
				process.removeProcessListener(listener);
			}
		} finally {
			endWriteState();
		}
	}

	@Override
	public IJSONObjectHelper getJSONObjectHelper() {
		return NodeJSJSONHelper.INSTANCE;
	}

	@Override
	public void doDispose() {
		beginWriteState();
		try {
			if (process != null) {
				process.kill();
			}
			this.baseURL = null;
			this.process = null;
		} finally {
			endWriteState();
		}
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

	private static class NodeJSJSONHelper implements IJSONObjectHelper {

		public static NodeJSJSONHelper INSTANCE = new NodeJSJSONHelper();

		@SuppressWarnings("unchecked")
		@Override
		public Iterable<Object> getList(Object jsonObj, String name) {
			JsonValue val = ((JsonObject) jsonObj).get(name);
			if (val.isArray()) {
				return (Iterable<Object>) val;
			}
			return null;
		}

		@Override
		public Long getCh(Object jsonObj, String name) {
			JsonValue loc = ((JsonObject) jsonObj).get(name);
			if (loc == null) {
				return null;
			}
			if (loc.isNumber()) {
				return loc.asLong();
			}
			return loc != null ? JsonHelper.getLong((JsonObject) loc, "ch")
					: null;
		}

		@Override
		public String getText(Object jsonObj, String property) {
			return JsonHelper.getString((JsonObject) jsonObj, property);
		}

		@Override
		public boolean isString(Object value) {
			return ((JsonValue) value).isString();
		}

		@Override
		public String getText(Object value) {
			return JsonHelper.getString((JsonValue) value);
		}

		@Override
		public boolean getBoolean(Object jsonObject, String name,
				boolean defaultValue) {
			return JsonHelper.getBoolean((JsonObject) jsonObject, name,
					defaultValue);
		}

	}

}
