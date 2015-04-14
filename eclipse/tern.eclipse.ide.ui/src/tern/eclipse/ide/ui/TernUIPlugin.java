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
package tern.eclipse.ide.ui;

import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.plugin.AbstractUIPlugin;
import org.osgi.framework.BundleContext;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.utils.FileUtils;
import tern.eclipse.ide.internal.ui.console.TernConsole;
import tern.eclipse.ide.internal.ui.console.TernConsoleHelper;
import tern.eclipse.ide.internal.ui.descriptors.TernModuleDescriptorManager;
import tern.eclipse.ide.ui.console.ITernConsole;
import tern.eclipse.ide.ui.descriptors.ITernModuleDescriptorManager;
import tern.eclipse.ide.ui.utils.LineOfOffsetProvider;

/**
 * The activator class controls the plug-in life cycle
 */
public class TernUIPlugin extends AbstractUIPlugin {

	// The plug-in ID
	public static final String PLUGIN_ID = "tern.eclipse.ide.ui"; //$NON-NLS-1$

	// The shared instance
	private static TernUIPlugin plugin;

	/**
	 * The constructor
	 */
	public TernUIPlugin() {
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
		// Initialize line offset provider which uses IDocument#getLineOfOffset.
		FileUtils.setProvider(LineOfOffsetProvider.getInstance());
		plugin = this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.eclipse.ui.plugin.AbstractUIPlugin#stop(org.osgi.framework.BundleContext
	 * )
	 */
	public void stop(BundleContext context) throws Exception {
		getTernDescriptorManager().destroy();
		plugin = null;
		super.stop(context);
	}

	/**
	 * Returns the shared instance
	 *
	 * @return the shared instance
	 */
	public static TernUIPlugin getDefault() {
		return plugin;
	}

	public static IWorkbenchWindow getActiveWorkbenchWindow() {
		return getDefault().getWorkbench().getActiveWorkbenchWindow();
	}

	public static Shell getActiveWorkbenchShell() {
		IWorkbenchWindow window = getActiveWorkbenchWindow();
		if (window != null) {
			return window.getShell();
		}
		return null;
	}

	/**
	 * @return Returns the active workbench window's currrent page.
	 */
	public static IWorkbenchPage getActivePage() {
		return getActiveWorkbenchWindow().getActivePage();
	}

	public ITernConsole getConsole(IIDETernProject project) {
		if (project.isServerDisposed()) {
			return null;
		}
		if (!PlatformUI.isWorkbenchRunning()) {
			return null;
		}
		TernConsole console = TernConsole.getOrCreateConsole(project);
		TernConsoleHelper.showConsole(console);
		return console;
	}

	public void closeConsole(IIDETernProject project) {
		TernConsole console = TernConsole.getConsole(project);
		if (console != null) {
			TernConsoleHelper.closeConsole(console);
		}
	}

	public static ITernModuleDescriptorManager getTernDescriptorManager() {
		return TernModuleDescriptorManager.getManager();
	}

}
