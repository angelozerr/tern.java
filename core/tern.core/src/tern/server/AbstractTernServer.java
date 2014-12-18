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
package tern.server;

import java.util.ArrayList;
import java.util.List;

import tern.ITernFileSynchronizer;
import tern.ITernProject;
import tern.server.protocol.completions.ITernCompletionCollector;

/**
 * Abstract tern server.
 *
 */
public abstract class AbstractTernServer implements ITernServer {

	/**
	 * Properties for JSON completion result.
	 */
	protected static final String NAME_PROPERTY = "name";
	protected static final String DISPLAY_NAME_PROPERTY = "displayName";
	protected static final String TYPE_PROPERTY = "type";
	protected static final String DOC_PROPERTY = "doc";
	protected static final String URL_PROPERTY = "url";
	protected static final String ORIGIN_PROPERTY = "origin";
	protected static final String IS_PROPERTY_PROPERTY = "isProperty";
	protected static final String IS_OBJECT_KEY_PROPERTY = "isObjectKey";

	private final ITernProject project;

	private final List<ITernServerListener> listeners;

	private boolean dataAsJsonString;
	private boolean dispose;
	private boolean loadingLocalPlugins;

	public AbstractTernServer(ITernProject project) {
		this.project = project;
		this.listeners = new ArrayList<ITernServerListener>();
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

	public boolean isDataAsJsonString() {
		return dataAsJsonString;
	}

	public void setDataAsJsonString(boolean dataAsJsonString) {
		this.dataAsJsonString = dataAsJsonString;
	}

	@Override
	public void addServerListener(ITernServerListener listener) {
		synchronized (listeners) {
			listeners.add(listener);
		}
	}

	@Override
	public void removeServerListener(ITernServerListener listener) {
		synchronized (listeners) {
			listeners.remove(listener);
		}
	}

	protected void fireStartServer() {
		synchronized (listeners) {
			for (ITernServerListener listener : listeners) {
				listener.onStart(this);
			}
		}
	}

	protected void fireEndServer() {
		synchronized (listeners) {
			for (ITernServerListener listener : listeners) {
				listener.onStop(this);
			}
		}
	}

	@Override
	public final void dispose() {
		if (!isDisposed()) {
			this.dispose = true;
			doDispose();
			// fireEndServer();
		}
	}

	@Override
	public boolean isDisposed() {
		return dispose;
	}

	protected abstract void doDispose();

	protected void addProposal(Object completion, int start, int end,
			boolean isProperty, boolean isObjectKey,
			ITernCompletionCollector collector) {
		String name = getText(completion, NAME_PROPERTY);
		String displayName = getText(completion, DISPLAY_NAME_PROPERTY);
		String type = getText(completion, TYPE_PROPERTY);
		String doc = getText(completion, DOC_PROPERTY);
		String url = getText(completion, URL_PROPERTY);
		String origin = getText(completion, ORIGIN_PROPERTY);
		collector.addProposal(name, displayName, type, doc, url, origin, start,
				end, isProperty, isObjectKey, completion, this);
	}

	public abstract String getText(Object value);

	public String getText(Object value, String name) {
		return getText(getValue(value, name));
	}

	public abstract Object getValue(Object value, String name);

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
}
