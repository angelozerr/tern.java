/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core.resources;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map.Entry;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.SubMonitor;
import org.eclipse.core.runtime.jobs.Job;

import com.eclipsesource.json.JsonValue;

import tern.ITernProject;
import tern.TernException;
import tern.resources.ITernFileUploader;
import tern.server.IResponseHandler;
import tern.server.ITernServer;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernFile;

public class IDETernFileUploader extends Job implements ITernFileUploader {

	private static final int MAX_FILES = 30;

	private LinkedHashMap<String, TernFile> files = new LinkedHashMap<String, TernFile>();
	private ITernProject project;
	private boolean serverToBeDisposed;

	public IDETernFileUploader(ITernProject project) {
		super("Synchronizing script resources with Tern server...");
		this.project = project;
	}

	@Override
	public void join(long timeout) {
		while (timeout > 0 && getState() != NONE) {
			try {
				Thread.sleep(25);
			} catch (InterruptedException e) {
				return;
			}
			timeout -= 25;
		}
	}

	@Override
	public boolean cancel(String fileName) {
		synchronized (files) {
			return files.remove(fileName) != null;
		}
	}

	@Override
	public void request(TernDoc doc) {
		if (doc.hasFiles()) {
			synchronized (files) {
				for (JsonValue val : doc.getFiles().values()) {
					if (val instanceof TernFile) {
						TernFile file = (TernFile) val;
						files.remove(file.getName());
						files.put(file.getName(), file);
					}
				}
				schedule();
			}
		}
	}

	public void serverToBeDisposed() {
		cancel();
		serverToBeDisposed = true;
		try {
			synchronized (files) {
				files.clear();
			}
			join(2000);
			if (getState() != NONE) {
				project.handleException(new Exception(
						"Upload job could not be finished in 2sec. Continuing...")); //$NON-NLS-1$
			}
		} finally {
			serverToBeDisposed = false;
		}
	}

	@Override
	protected IStatus run(IProgressMonitor mon) {
		SubMonitor monitor = SubMonitor.convert(mon, 100);
		final ITernServer server = project.getTernServer();
		do {
			if (mon.isCanceled()) {
				return Status.CANCEL_STATUS;
			}
			int i = 0;
			final TernDoc doc = new TernDoc();
			synchronized (files) {
				monitor.setWorkRemaining(files.size() + 1);
				Iterator<Entry<String, TernFile>> it = files.entrySet()
						.iterator();
				while (i < MAX_FILES && it.hasNext()) {
					Entry<String, TernFile> entry = it.next();
					it.remove();
					doc.addFile(entry.getValue());
					i++;
				}
			}
			if (!doc.hasFiles()) {
				break;
			}
			if (server != null) {
				try {
					server.request(doc, new IResponseHandler() {

						@Override
						public void onSuccess(Object data,
								String dataAsJsonString) {
						}

						@Override
						public void onError(String error, Throwable t) {
							project.handleException(new TernException(error, t));
							// mark that files have not been uploaded correctly
							project.getFileSynchronizer().uploadFailed(doc);
							throw new UploadFailed();
						}

						@Override
						public boolean isDataAsJsonString() {
							return false;
						}
					});
					monitor.worked(i);
				} catch (UploadFailed ex) {
					synchronized (files) {
						TernDoc doc2 = new TernDoc();
						for (TernFile tf : files.values()) {
							doc2.addFile(tf);
						}
						files.clear();
						project.getFileSynchronizer().uploadFailed(doc2);
						cancel();
					}
					return Status.CANCEL_STATUS;
				}
			}
		} while (!serverToBeDisposed);
		return Status.OK_STATUS;
	}

	private static final class UploadFailed extends RuntimeException {
		private static final long serialVersionUID = 1L;
	}

}
