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
package tern.eclipse.ide.internal.core;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionDelta;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.IRegistryChangeEvent;
import org.eclipse.core.runtime.IRegistryChangeListener;
import org.eclipse.core.runtime.Platform;

import tern.eclipse.ide.core.ITernProjectLifecycleListener;
import tern.eclipse.ide.core.ITernProjectLifecycleListener.LifecycleEventType;
import tern.eclipse.ide.core.ITernProjectLifecycleListenerProvider;
import tern.eclipse.ide.core.ITernProjectLifecycleManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.core.resources.IDETernProject;

/**
 * Tern project lifecycle manager implementation.
 *
 */
public class TernProjectLifecycleManager implements
		ITernProjectLifecycleManager, IRegistryChangeListener {

	private static final String EXTENSION_TERN_PROJECT_LIFECYCLE_LISTENERS = "ternProjectLifecycleListeners";

	private static final TernProjectLifecycleManager INSTANCE = new TernProjectLifecycleManager();

	public static TernProjectLifecycleManager getManager() {
		return INSTANCE;
	}

	private List<ITernProjectLifecycleListener> listeners;

	private boolean registryListenerIntialized;

	public TernProjectLifecycleManager() {
		this.listeners = null;
		this.registryListenerIntialized = false;
	}

	/**
	 * Load the tern server types.
	 */
	private synchronized void loadListeners() {
		if (listeners != null)
			return;

		Trace.trace(Trace.EXTENSION_POINT,
				"->- Loading .ternProjectLifecycleListeners extension point ->-");

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		IConfigurationElement[] cf = registry.getConfigurationElementsFor(
				TernCorePlugin.PLUGIN_ID,
				EXTENSION_TERN_PROJECT_LIFECYCLE_LISTENERS);
		List<ITernProjectLifecycleListener> list = new ArrayList<ITernProjectLifecycleListener>(
				cf.length);
		addListeners(cf, list);
		addRegistryListenerIfNeeded();
		listeners = list;

		Trace.trace(Trace.EXTENSION_POINT,
				"-<- Done loading .ternProjectLifecycleListeners extension point -<-");
	}

	private void addRegistryListenerIfNeeded() {
		if (registryListenerIntialized)
			return;

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		registry.addRegistryChangeListener(this, TernCorePlugin.PLUGIN_ID);
		registryListenerIntialized = true;
	}

	@Override
	public void registryChanged(final IRegistryChangeEvent event) {
		IExtensionDelta[] deltas = event.getExtensionDeltas(
				TernCorePlugin.PLUGIN_ID,
				EXTENSION_TERN_PROJECT_LIFECYCLE_LISTENERS);
		if (deltas != null) {
			for (IExtensionDelta delta : deltas)
				handleDelta(delta);
		}
	}

	protected void handleDelta(IExtensionDelta delta) {
		IConfigurationElement[] cf = delta.getExtension()
				.getConfigurationElements();
		if (delta.getKind() == IExtensionDelta.ADDED) {
			List<ITernProjectLifecycleListener> list = new ArrayList<ITernProjectLifecycleListener>();
			addListeners(cf, list);
			this.listeners = list;
		}
	}

	private void addListeners(IConfigurationElement[] cf,
			List<ITernProjectLifecycleListener> list) {
		ITernProjectLifecycleListener listener = null;
		for (IConfigurationElement ce : cf) {
			try {
				listener = ((ITernProjectLifecycleListenerProvider) ce
						.createExecutableExtension("class")).getListener();
				list.add(listener);
			} catch (CoreException e) {
				Trace.trace(Trace.SEVERE,
						"Error while adding tern project lifecycle listeners",
						e);
			}

		}
	}

	@Override
	public void addTernProjectLifeCycleListener(
			ITernProjectLifecycleListener listener) {
		loadListeners();
		synchronized (listener) {
			listeners.add(listener);
		}
	}

	@Override
	public void removeTernProjectLifeCycleListener(
			ITernProjectLifecycleListener listener) {
		loadListeners();
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
		loadListeners();
		synchronized (listeners) {
			for (ITernProjectLifecycleListener listener : listeners) {
				listener.handleEvent(project, state);
			}
		}
	}
}
