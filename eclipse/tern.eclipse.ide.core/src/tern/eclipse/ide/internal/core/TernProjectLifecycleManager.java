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
package tern.eclipse.ide.internal.core;

import java.util.ArrayList;
import java.util.List;

import tern.eclipse.ide.core.ITernProjectLifecycleListener;
import tern.eclipse.ide.core.ITernProjectLifecycleListener.LifecycleEventType;
import tern.eclipse.ide.core.ITernProjectLifecycleManager;
import tern.eclipse.ide.internal.core.resources.IDETernProject;

/**
 * Tern project lifecycle manager implementation.
 *
 */
public class TernProjectLifecycleManager implements
		ITernProjectLifecycleManager {

	private static final TernProjectLifecycleManager INSTANCE = new TernProjectLifecycleManager();

	public static TernProjectLifecycleManager getManager() {
		return INSTANCE;
	}

	private final List<ITernProjectLifecycleListener> listeners;

	public TernProjectLifecycleManager() {
		this.listeners = new ArrayList<ITernProjectLifecycleListener>();
	}

	@Override
	public void addTernProjectLifeCycleListener(
			ITernProjectLifecycleListener listener) {
		synchronized (listener) {
			listeners.add(listener);
		}
	}

	@Override
	public void removeTernProjectLifeCycleListener(
			ITernProjectLifecycleListener listener) {
		synchronized (listeners) {
			listeners.remove(listener);
		}
	}

	/**
	 * Fire listener.
	 * 
	 * @param project
	 * @param state
	 */
	public void fireTernProjectLifeCycleListenerChanged(IDETernProject project,
			LifecycleEventType state) {
		synchronized (listeners) {
			for (ITernProjectLifecycleListener listener : listeners) {
				listener.handleEvent(project, state);
			}
		}
	}
}
