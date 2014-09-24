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

import tern.TernFileManager;
import tern.TernProject;
import tern.server.protocol.completions.ITernCompletionCollector;

public abstract class AbstractTernServer implements ITernServer {

	private final TernProject<?> project;

	private final List<ITernServerListener> listeners;

	private boolean dataAsJsonString;
	private boolean dispose;

	public AbstractTernServer(TernProject<?> project) {
		this.project = project;
		this.listeners = new ArrayList<ITernServerListener>();
		final TernFileManager<?> fileManager = getFileManager();
		if (fileManager != null) {
			this.addServerListener(new TernServerAdapter() {
				@Override
				public void onStop(ITernServer server) {
					fileManager.cleanIndexedFiles();
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
			fireEndServer();
		}
	}

	@Override
	public boolean isDisposed() {
		return dispose;
	}

	protected abstract void doDispose();

	protected void addProposal(Object completion, int pos,
			ITernCompletionCollector collector) {
		String name = getText(completion, "name");
		String type = getText(completion, "type");
		String doc = getText(completion, "doc");
		String url = getText(completion, "url");
		String origin = getText(completion, "origin");
		collector.addProposal(name, type, doc, url, origin, pos, completion,
				this);
	}

	public abstract String getText(Object value);

	public String getText(Object value, String name) {
		return getText(getValue(value, name));
	}

	public abstract Object getValue(Object value, String name);

	@Override
	public TernFileManager<?> getFileManager() {
		if (project != null) {
			return project.getFileManager();
		}
		return null;
	}

	public TernProject<?> getProject() {
		return project;
	}

	@Override
	public void addFile(String name, String text) {
		addFile(name, text, null);
	}
}
