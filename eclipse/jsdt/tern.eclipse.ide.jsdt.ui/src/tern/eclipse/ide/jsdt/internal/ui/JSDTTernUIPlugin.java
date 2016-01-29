/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - unified completion proposals calculation
 */
package tern.eclipse.ide.jsdt.internal.ui;

import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.preference.PreferenceConverter;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.ui.plugin.AbstractUIPlugin;
import org.eclipse.wst.jsdt.internal.ui.JavaScriptPlugin;
import org.eclipse.wst.jsdt.ui.PreferenceConstants;
import org.osgi.framework.BundleContext;

import tern.eclipse.ide.jsdt.internal.ui.contentassist.ITernContextProvider;
import tern.eclipse.ide.jsdt.internal.ui.contentassist.JSDTTernContextProvider;
import tern.eclipse.ide.ui.utils.HTMLTernPrinter;

/**
 * The activator class controls the plug-in life cycle
 */
public class JSDTTernUIPlugin extends AbstractUIPlugin {

	// The plug-in ID
	public static final String PLUGIN_ID = "tern.eclipse.ide.jsdt.ui"; //$NON-NLS-1$

	// The shared instance
	private static JSDTTernUIPlugin plugin;

	private static ITernContextProvider contextProvider = new JSDTTernContextProvider();

	/**
	 * The constructor
	 */
	public JSDTTernUIPlugin() {
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.eclipse.ui.plugin.AbstractUIPlugin#start(org.osgi.framework.BundleContext
	 * )
	 */
	public void start(BundleContext context) throws Exception {
		super.start(context);
		plugin = this;
		
		HTMLTernPrinter.setColorInfoBackround(getHoverBackgroundColorRGB());
	}
	
	private static RGB getHoverBackgroundColorRGB() {
		IPreferenceStore store= JavaScriptPlugin.getDefault().getPreferenceStore();
		return store.getBoolean(PreferenceConstants.EDITOR_SOURCE_HOVER_BACKGROUND_COLOR_SYSTEM_DEFAULT)
			? null
			: PreferenceConverter.getColor(store, PreferenceConstants.EDITOR_SOURCE_HOVER_BACKGROUND_COLOR);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.eclipse.ui.plugin.AbstractUIPlugin#stop(org.osgi.framework.BundleContext
	 * )
	 */
	public void stop(BundleContext context) throws Exception {
		plugin = null;
		super.stop(context);
	}

	/**
	 * Returns the shared instance
	 * 
	 * @return the shared instance
	 */
	public static JSDTTernUIPlugin getDefault() {
		return plugin;
	}
	
	public static ITernContextProvider getContextProvider() {
		return contextProvider;
	}
	
	public static void setContextProvider(ITernContextProvider projectProvider) {
		contextProvider = projectProvider;
	}
	
}
