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
package tern.eclipse.ide.internal.ui.descriptors;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionDelta;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.IRegistryChangeEvent;
import org.eclipse.core.runtime.IRegistryChangeListener;
import org.eclipse.core.runtime.Platform;
import org.eclipse.swt.graphics.Image;

import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.descriptors.ITernDescriptor;
import tern.eclipse.ide.ui.descriptors.ITernDescriptorManager;

public class TernDescriptorManager implements ITernDescriptorManager,
		IRegistryChangeListener {

	private static final String EXTENSION_TERN_DESCRIPTORS = "ternDescriptors";

	private static final TernDescriptorManager INSTANCE = new TernDescriptorManager();

	// cached copy of alltern additional infos
	private Map<String, ITernDescriptor> ternDescriptors;

	private boolean registryListenerIntialized;

	public static TernDescriptorManager getManager() {
		return INSTANCE;
	}

	public TernDescriptorManager() {
		this.registryListenerIntialized = false;
	}

	@Override
	public void registryChanged(final IRegistryChangeEvent event) {
		IExtensionDelta[] deltas = event.getExtensionDeltas(
				TernUIPlugin.PLUGIN_ID, EXTENSION_TERN_DESCRIPTORS);
		if (deltas != null) {
			for (IExtensionDelta delta : deltas)
				handleTernDescriptorDelta(delta);
		}
	}

	@Override
	public String getDescription(String id) {
		ITernDescriptor descriptor = getTernDescriptor(id);
		if (descriptor != null) {
			return descriptor.getDescription();
		}
		return null;
	}

	@Override
	public Image getImage(String id) {
		ITernDescriptor descriptor = getTernDescriptor(id);
		if (descriptor != null) {
			return descriptor.getImage();
		}
		return null;
	}

	@Override
	public ITernDescriptor getTernDescriptor(String id) {
		if (ternDescriptors == null)
			loadTernDescriptors();
		return ternDescriptors.get(id);
	}

	/**
	 * Load the Nodejs installs.
	 */
	private synchronized void loadTernDescriptors() {
		if (ternDescriptors != null)
			return;

		Trace.trace(Trace.EXTENSION_POINT,
				"->- Loading .ternDescriptors extension point ->-");

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		IConfigurationElement[] cf = registry.getConfigurationElementsFor(
				TernUIPlugin.PLUGIN_ID, EXTENSION_TERN_DESCRIPTORS);
		Map<String, ITernDescriptor> list = new HashMap<String, ITernDescriptor>(
				cf.length);
		addTernDescriptors(cf, list);
		addRegistryListenerIfNeeded();
		ternDescriptors = list;

		Trace.trace(Trace.EXTENSION_POINT,
				"-<- Done loading .ternDescriptors extension point -<-");
	}

	/**
	 * Load the Nodejs installs.
	 */
	private synchronized void addTernDescriptors(IConfigurationElement[] cf,
			Map<String, ITernDescriptor> list) {
		for (IConfigurationElement ce : cf) {
			try {
				TernDescriptor ternDescriptor = new TernDescriptor(ce);
				list.put(ternDescriptor.getId(), ternDescriptor);
				Trace.trace(Trace.EXTENSION_POINT, "  Loaded ternDescriptor: "
						+ ce.getAttribute("id"));
			} catch (Throwable t) {
				Trace.trace(Trace.SEVERE, "  Could not load ternDescriptor: "
						+ ce.getAttribute("id"), t);
			}
		}
	}

	protected void handleTernDescriptorDelta(IExtensionDelta delta) {
		if (ternDescriptors == null) // not loaded yet
			return;

		IConfigurationElement[] cf = delta.getExtension()
				.getConfigurationElements();

		Map<String, ITernDescriptor> list = new HashMap<String, ITernDescriptor>(
				ternDescriptors);
		if (delta.getKind() == IExtensionDelta.ADDED) {
			addTernDescriptors(cf, list);
		} else {
			int size = list.size();
			TernDescriptor[] st = new TernDescriptor[size];
			int size2 = cf.length;

			for (int i = 0; i < size; i++) {
				for (int j = 0; j < size2; j++) {
					if (st[i].getId().equals(cf[j].getAttribute("id"))) {
						st[i].dispose();
						list.remove(st[i]);
					}
				}
			}
		}
		ternDescriptors = list;
	}

	private void addRegistryListenerIfNeeded() {
		if (registryListenerIntialized)
			return;

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		registry.addRegistryChangeListener(this, TernUIPlugin.PLUGIN_ID);
		registryListenerIntialized = true;
	}

	public void initialize() {

	}

	public void destroy() {
		Platform.getExtensionRegistry().removeRegistryChangeListener(this);
	}
}
