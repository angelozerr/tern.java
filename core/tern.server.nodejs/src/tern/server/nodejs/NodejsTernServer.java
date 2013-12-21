/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.server.nodejs;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONObject;

import tern.TernException;
import tern.TernProject;
import tern.server.AbstractTernServer;
import tern.server.IResponseHandler;
import tern.server.ITernDef;
import tern.server.ITernPlugin;
import tern.server.nodejs.process.NodejsProcess;
import tern.server.nodejs.process.INodejsProcessListener;
import tern.server.nodejs.process.NodejsProcessAdapter;
import tern.server.nodejs.process.NodejsProcessManager;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.server.protocol.type.ITernTypeCollector;

/**
 * Tern server implemented with node.js
 * 
 */
public class NodejsTernServer extends AbstractTernServer {

	private final TernProject project;

	private String baseURL;

	private List<IInterceptor> interceptors;

	private NodejsProcess process;
	private List<INodejsProcessListener> listeners;

	private long timeout = 1000;

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

	public NodejsTernServer(File projectDir, int port) {
		this(new TernProject(projectDir), port);
	}

	public NodejsTernServer(TernProject project, int port) {
		this.project = project;
		this.baseURL = computeBaseURL(port);
	}

	public NodejsTernServer(TernProject project) throws TernException {
		this(project, NodejsProcessManager.getInstance().create(
				project.getProjectDir()));
	}

	public NodejsTernServer(TernProject project, NodejsProcess process) {
		this.project = project;
		this.process = process;
		process.addProcessListener(listener);
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

	private String computeBaseURL(Integer port) {
		return new StringBuilder("http://localhost:").append(port).append("/")
				.toString();
	}

	@Override
	public void addDef(ITernDef def) throws TernException {
		project.addLib(def.getName());
		try {
			project.save();
		} catch (IOException e) {
			throw new TernException(e);
		}
	}

	@Override
	public void addPlugin(ITernPlugin plugin) throws TernException {
		project.addPlugin(plugin);
		try {
			project.save();
		} catch (IOException e) {
			throw new TernException(e);
		}
	}

	@Override
	public void addFile(String name, String text) {
		TernDoc t = new TernDoc();
		t.addFile(name, text, null);
		try {
			JSONObject json = makeRequest(t);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public void request(TernDoc doc, IResponseHandler handler) {
		try {
			JSONObject json = makeRequest(doc);
			handler.onSuccess(json,
					handler.isDataAsJsonString() ? json.toJSONString() : null);
		} catch (Exception e) {
			handler.onError(e.getMessage());
		}
	}

	private JSONObject makeRequest(TernDoc doc) throws IOException,
			InterruptedException, TernException {
		JSONObject json = TernProtocolHelper.makeRequest(getBaseURL(), doc,
				false, interceptors, this);
		return json;
	}

	public TernProject getProject() {
		return project;
	}

	public void addInterceptor(IInterceptor interceptor) {
		if (interceptors == null) {
			interceptors = new ArrayList<IInterceptor>();
		}
		interceptors.add(interceptor);
	}

	public String getBaseURL() throws InterruptedException, IOException,
			TernException {
		if (baseURL == null) {
			int port = getProcess().start(timeout);
			this.baseURL = computeBaseURL(port);
		}
		return baseURL;
	}

	private NodejsProcess getProcess() throws TernException {
		if (process != null) {
			return process;
		}
		process = NodejsProcessManager.getInstance().create(
				project.getProjectDir());
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
			JSONObject jsonObject = makeRequest(doc);
			if (jsonObject != null) {
				Long startCh = getCh(jsonObject, "start");
				Long endCh = getCh(jsonObject, "end");
				int pos = 0;
				if (startCh != null && endCh != null) {
					pos = endCh.intValue() - startCh.intValue();
				}
				List completions = (List) jsonObject.get("completions");
				if (completions != null) {
					Boolean isString = null;
					for (Object object : completions) {
						if (isString == null) {
							isString = (object instanceof String);
						}
						if (isString) {
							collector.addProposal((String) object, null, null,
									null, pos);
						} else {
							addProposal((JSONObject) object, pos, collector);
						}
					}
				}
			}
		} catch (Throwable e) {
			throw new TernException(e);
		}
	}

	protected void addProposal(JSONObject completion, int pos,
			ITernCompletionCollector collector) {
		String name = getText(completion.get("name"));
		String type = getText(completion.get("type"));
		String origin = getText(completion.get("origin"));
		Object doc = completion.get("doc");
		collector.addProposal(name, type, origin, doc, pos);
	}

	private String getText(Object value) {
		if (value == null) {
			return null;
		}
		return value.toString();
	}

	private Long getCh(JSONObject data, String pos) {
		Object loc = data.get(pos);
		if (loc instanceof Long) {
			return (Long) loc;
		}
		return loc != null ? (Long) ((JSONObject) loc).get("ch") : null;
	}

	@Override
	public void request(TernDoc doc, ITernDefinitionCollector collector)
			throws TernException {
		try {
			JSONObject jsonObject = makeRequest(doc);
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
			JSONObject jsonObject = makeRequest(doc);
			if (jsonObject != null) {
				String name = getText(jsonObject.get("name"));
				String type = getText(jsonObject.get("type"));
				String origin = getText(jsonObject.get("origin"));
				collector.setType(name, type, origin);
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

}
