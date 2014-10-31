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
package tern.eclipse.ide.ui.handlers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.resources.WorkspaceJob;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtension;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.preference.PreferenceDialog;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.dialogs.PreferencesUtil;
import org.eclipse.ui.handlers.HandlerUtil;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.server.ITernDef;
import tern.server.ITernPlugin;
import tern.utils.TernModuleHelper;

/**
 * Abstract class to convert selected project to Tern project.
 * 
 */
public abstract class AbstractConvertProjectCommandHandler extends
		AbstractHandler {

	private void doInstall(IProject project, IProgressMonitor monitor,
			ExecutionEvent event) throws CoreException {
		// Get or create tern project.
		boolean force = !TernCorePlugin.hasTernNature(project);
		IIDETernProject ternProject = TernCorePlugin.getTernProject(project,
				force);

		IScopeContext[] fLookupOrder = new IScopeContext[] {
				InstanceScope.INSTANCE, DefaultScope.INSTANCE };

		// add default JSON type definitions and plugins
		ITernDef defs[] = getDefs(fLookupOrder);
		ITernPlugin[] plugins = getPlugins(fLookupOrder);

		for (int i = 0; i < plugins.length; i++) {
			TernModuleHelper.update(plugins[i], ternProject);
		}
		for (int i = 0; i < defs.length; i++) {
			TernModuleHelper.update(defs[i], ternProject);
		}

		showPropertiesOn(project, monitor, event);

		// save tern project if needed
		try {
			ternProject.save();
		} catch (IOException e) {
			Trace.trace(Trace.SEVERE,
					"Error while configuring angular nature.", e);
		}
	}

	private void doUninstall(IProject project, IProgressMonitor monitor) {
		// TODO Auto-generated method stub

	}

	public Object execute(final ExecutionEvent event) throws ExecutionException {

		final IProject project = getSelectedProject(event);

		if (project == null) {
			return null;
		}

		WorkspaceJob convertJob = new WorkspaceJob(
				getConvertingProjectJobTitle(project)) {
			public IStatus runInWorkspace(IProgressMonitor monitor)
					throws CoreException {
				doInstall(project, monitor, event);
				return Status.OK_STATUS;
			}
		};
		convertJob.setUser(true);
		convertJob.setRule(ResourcesPlugin.getWorkspace().getRoot());
		convertJob.schedule();

		return null;
	}

	private IProject getSelectedProject(ExecutionEvent event) {
		ISelection currentSelection = HandlerUtil.getCurrentSelection(event);

		if (currentSelection instanceof IStructuredSelection) {
			Object element = ((IStructuredSelection) currentSelection)
					.getFirstElement();
			return (IProject) Platform.getAdapterManager().getAdapter(element,
					IProject.class);
		}
		return null;
	}

	private void showPropertiesOn(final IProject project,
			final IProgressMonitor monitor, final ExecutionEvent event) {
		IExtension[] extensions = Platform
				.getExtensionRegistry()
				.getExtensionPoint("org.eclipse.ui.propertyPages").getExtensions(); //$NON-NLS-1$
		final List<String> pageIds = new ArrayList<String>(8);
		for (int i = 0; i < extensions.length; i++) {
			if (extensions[i].getNamespaceIdentifier().startsWith(
					"tern.eclipse.ide.ui")) { //$NON-NLS-1$
				IConfigurationElement[] configurationElements = extensions[i]
						.getConfigurationElements();
				for (int j = 0; j < configurationElements.length; j++) {
					if ("page".equals(configurationElements[j].getName())) { //$NON-NLS-1$
						pageIds.add(configurationElements[j].getAttribute("id")); //$NON-NLS-1$
					}
				}
			}
		}
		Shell shell = HandlerUtil.getActiveShell(event);
		if (shell == null) {
			IWorkbenchWindow activeWorkbenchWindow = TernUIPlugin.getDefault()
					.getWorkbench().getActiveWorkbenchWindow();
			if (activeWorkbenchWindow != null)
				shell = activeWorkbenchWindow.getShell();
		}
		final Shell finalShell = shell;
		if (finalShell != null) {
			finalShell.getDisplay().asyncExec(new Runnable() {
				public void run() {
					PreferenceDialog dialog = PreferencesUtil
							.createPropertyDialogOn(
									finalShell,
									project,
									"tern.eclipse.ide.ui.properties.TernModulesPropertyPage", (String[]) pageIds.toArray(new String[pageIds.size()]), null); //$NON-NLS-1$
					if (dialog.open() == Window.CANCEL) {
						doUninstall(project, monitor);
					}
				}
			});
		}
	}

	protected abstract String getConvertingProjectJobTitle(IProject project);

	protected abstract ITernPlugin[] getPlugins(IScopeContext[] fLookupOrder);

	protected abstract ITernDef[] getDefs(IScopeContext[] fLookupOrder);

}
