/**
 *  Copyright (c) 2013-2016 Angelo ZERRR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genutiec.com> - asynchronous request processing and 
- *  									refactoring of collectors API 
 */
package tern.server;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.ReentrantReadWriteLock;

import tern.ITernFileSynchronizer;
import tern.ITernProject;
import tern.TernException;
import tern.server.protocol.ITernResultsCollector;
import tern.server.protocol.TernDoc;
import tern.server.protocol.push.IMessageHandler;

/**
 * Abstract tern server.
 * 
 */
public abstract class AbstractTernServer implements ITernServer {

	private final ITernProject project;

	private final List<ITernServerListener> serverListeners;
	private final Map<String, List<IMessageHandler>> messageListeners;
	
	private boolean dataAsJsonString;
	private boolean dispose;
	private boolean loadingLocalPlugins;

	private ITernServerRequestProcessor reqProcessor;

	private ReentrantReadWriteLock stateLock = new ReentrantReadWriteLock();

	public AbstractTernServer(ITernProject project) {
		this.project = project;
		this.serverListeners = new ArrayList<ITernServerListener>();
		this.messageListeners = new HashMap<String, List<IMessageHandler>>();
		final ITernFileSynchronizer fileSynchronizer = getFileSynchronizer();
		if (fileSynchronizer != null) {
			this.addServerListener(new TernServerAdapter() {
				@Override
				public void onStop(ITernServer server) {
					fileSynchronizer.cleanIndexedFiles();
				}
			});
		}
	}

	protected void beginReadState() {
		stateLock.readLock().lock();
	}

	protected void endReadState() {
		stateLock.readLock().unlock();
	}

	protected void beginWriteState() {
		stateLock.writeLock().lock();
	}

	protected void endWriteState() {
		stateLock.writeLock().unlock();
	}

	public boolean isDataAsJsonString() {
		return dataAsJsonString;
	}

	public void setDataAsJsonString(boolean dataAsJsonString) {
		this.dataAsJsonString = dataAsJsonString;
	}

	@Override
	public void addServerListener(ITernServerListener listener) {
		synchronized (serverListeners) {
			serverListeners.add(listener);
		}
	}

	@Override
	public void removeServerListener(ITernServerListener listener) {
		synchronized (serverListeners) {
			serverListeners.remove(listener);
		}
	}

	protected void fireStartServer() {
		synchronized (serverListeners) {
			for (ITernServerListener listener : serverListeners) {
				listener.onStart(this);
			}
		}
	}

	protected void fireEndServer() {
		synchronized (serverListeners) {
			for (ITernServerListener listener : serverListeners) {
				listener.onStop(this);
			}
		}
	}

	@Override
	public final void dispose() {
		beginWriteState();
		try {
			if (!isDisposed()) {
				this.dispose = true;
				doDispose();
				// fireEndServer();
			}
		} finally {
			endWriteState();
		}
	}

	@Override
	public boolean isDisposed() {
		return dispose;
	}

	protected abstract void doDispose();

	@Override
	public ITernFileSynchronizer getFileSynchronizer() {
		if (project != null) {
			return project.getFileSynchronizer();
		}
		return null;
	}

	public ITernProject getProject() {
		return project;
	}

	@Override
	public void addFile(String name, String text) {
		addFile(name, text, null);
	}

	@Override
	public void setLoadingLocalPlugins(boolean loadingLocalPlugins) {
		this.loadingLocalPlugins = loadingLocalPlugins;
	}

	@Override
	public boolean isLoadingLocalPlugins() {
		return loadingLocalPlugins;
	}

	@Override
	public void request(TernDoc doc, ITernResultsCollector collector)
			throws TernException {
		try {
			if (reqProcessor == null) {
				// always provide request processor
				reqProcessor = new SynchronousRequestProcessor(this);
			}
			reqProcessor.processRequest(doc, collector);
		} catch (Exception e) {
			getFileSynchronizer().uploadFailed(doc);
			if (e instanceof TernException) {
				throw (TernException) e;
			}
			throw new TernException(e);
		}
	}

	@Override
	public ITernServerRequestProcessor getRequestProcessor() {
		return reqProcessor;
	}

	@Override
	public void setRequestProcessor(ITernServerRequestProcessor reqProcessor) {
		this.reqProcessor = reqProcessor;
	}

	@Override
	public void on(String type, IMessageHandler handler) {
		synchronized (messageListeners) {
			List<IMessageHandler> handlers = messageListeners.get(type);
			if (handlers == null) {
				handlers = new ArrayList<IMessageHandler>();
				messageListeners.put(type, handlers);
			}
			if (!handlers.contains(handler)) {
				handlers.add(handler);
			}
		}
	}

	@Override
	public void off(String type, IMessageHandler handler) {
		synchronized (messageListeners) {
			List<IMessageHandler> handlers = messageListeners.get(type);
			if (handlers != null) {
				handlers.remove(handler);
			}
		}
	}

	protected void fireOnMessage(String type, Object jsonObject) {
		synchronized (messageListeners) {
			List<IMessageHandler> handlers = messageListeners.get(type);
			if (handlers != null) {
				for (IMessageHandler handler : handlers) {
					handler.handleMessage(jsonObject, getJSONObjectHelper());
				}
			}
		}
	}

}
