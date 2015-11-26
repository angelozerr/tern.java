/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.eclipse.ide.core;

import java.io.File;
import java.io.IOException;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.FileLocator;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.Plugin;
import org.eclipse.core.runtime.Status;
import org.osgi.framework.BundleContext;

import tern.TernResourcesManager;
import tern.eclipse.ide.internal.core.TernFileConfigurationManager;
import tern.eclipse.ide.internal.core.TernModuleInstallManager;
import tern.eclipse.ide.internal.core.TernNatureAdaptersManager;
import tern.eclipse.ide.internal.core.TernProjectLifecycleManager;
import tern.eclipse.ide.internal.core.TernRepositoryManager;
import tern.eclipse.ide.internal.core.TernServerTypeManager;
import tern.eclipse.ide.internal.core.resources.IDEResourcesManager;
import tern.eclipse.ide.internal.core.resources.IDETernProject;
import tern.eclipse.ide.internal.core.resources.IDETernProjectSynchronizer;
import tern.internal.resources.InternalTernResourcesManager;
import tern.server.nodejs.process.NodejsProcessManager;
import tern.websocket.provider.WebSocket;

/**
 * The activator class controls the plug-in life cycle
 */

@SuppressWarnings("restriction")
public class TernCorePlugin extends Plugin {

	public static final String PLUGIN_ID = "tern.eclipse.ide.core"; //$NON-NLS-1$

	// The shared instance.
	private static TernCorePlugin plugin;

	/**
	 * The constructor.
	 */
	public TernCorePlugin() {
		super();
		plugin = this;
	}

	@Override
	public void start(BundleContext context) throws Exception {
		super.start(context);
		// Force to use Jetty WebSocket implementation.
		WebSocket.startup();
		TernRepositoryManager.getManager().initialize();
		IDETernProjectSynchronizer.getInstance().initialize();
		TernFileConfigurationManager.getManager().initialize();
		TernModuleInstallManager.getManager().initialize();
		
		// set up resource management for IDE
		InternalTernResourcesManager resMan = InternalTernResourcesManager
				.getInstance();
		resMan.setScriptTagRegionProvider(TernFileConfigurationManager
				.getManager());
		resMan.setTernResourcesManagerDelegate(IDEResourcesManager
				.getInstance());

	}

	/**
	 * Returns the ternjs repository base directory.
	 * 
	 * @return the ternjs repository base directory.
	 * @throws IOException
	 */
	public static File getTernRepositoryBaseDir() throws IOException {
		return FileLocator.getBundleFile(Platform
				.getBundle(ternjs.Activator.PLUGIN_ID));
	}

	@Override
	public void stop(BundleContext context) throws Exception {
		NodejsProcessManager.getInstance().dispose();
		TernServerTypeManager.getManager().destroy();
		TernNatureAdaptersManager.getManager().destroy();
		TernFileConfigurationManager.getManager().destroy();
		IDETernProjectSynchronizer.getInstance().dispose();
		TernModuleInstallManager.getManager().destroy();
		TernRepositoryManager.getManager().dispose();
		
		plugin = null;
		super.stop(context);
	}

	/**
	 * Return true if the given project contains a ".tern-project" file false
	 * otherwise.
	 * 
	 * @param project
	 *            Eclipse project.
	 * @return true if the given project contains a ".tern-project" file and false
	 *         otherwise.
	 */
	public static boolean hasTernNature(IProject project) {
		return IDETernProject.hasTernNature(project);
	}

	/**
	 * Returns the tern project of the given eclipse project and throws
	 * exception if the eclipse project has not tern nature.
	 * 
	 * @param project
	 *            eclipse project.
	 * @return the tern project of the given eclipse projectand throws exception
	 *         if the eclipse project has not tern nature.
	 * @throws CoreException
	 */
	public static IIDETernProject getTernProject(IProject project, boolean force)
			throws CoreException {
		try {
			return (IIDETernProject) TernResourcesManager.getTernProject(
					project, force);
		} catch (IOException e) {
			throw new CoreException(new Status(IStatus.ERROR,
					TernCorePlugin.PLUGIN_ID, "The project "
							+ project.getName()
							+ " cannot be converted as tern project.", e));
		}
	}

	/**
	 * Returns the tern project of the given eclipse project and throws
	 * exception if the eclipse project has not tern nature.
	 * 
	 * @param project
	 *            eclipse project.
	 * @return the tern project of the given eclipse projectand throws exception
	 *         if the eclipse project has not tern nature.
	 * @throws CoreException
	 */
	public static IIDETernProject getTernProject(IProject project)
			throws CoreException {
		IIDETernProject result = (IIDETernProject) TernResourcesManager
				.getTernProject(project);
		if (result == null) {
			throw new CoreException(new Status(IStatus.ERROR,
					TernCorePlugin.PLUGIN_ID, "The project "
							+ project.getName() + " is not a tern project."));
		}
		return result;
	}

	/**
	 * Returns the shared instance
	 * 
	 * @return the shared instance
	 */
	public static TernCorePlugin getDefault() {
		return plugin;
	}

	/**
	 * Returns the instance of the tern server type manager.
	 * 
	 * @return the instance of the tern server type manager.
	 */
	public static ITernServerTypeManager getTernServerTypeManager() {
		return TernServerTypeManager.getManager();
	}

	public static void addTernProjectLifeCycleListener(
			ITernProjectLifecycleListener listener) {
		TernProjectLifecycleManager.getManager()
				.addTernProjectLifeCycleListener(listener);
	}

	public static void removeTernProjectLifeCycleListener(
			ITernProjectLifecycleListener listener) {
		TernProjectLifecycleManager.getManager()
				.removeTernProjectLifeCycleListener(listener);

	}

	public static ITernRepositoryManager getTernRepositoryManager() {
		return TernRepositoryManager.getManager();
	}

}
