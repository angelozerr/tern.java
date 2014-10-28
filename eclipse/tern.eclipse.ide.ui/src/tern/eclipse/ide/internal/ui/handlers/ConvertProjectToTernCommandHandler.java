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
package tern.eclipse.ide.internal.ui.handlers;

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
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IPreferencesService;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.ui.handlers.HandlerUtil;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.internal.ui.preferences.TernUIPreferenceConstants;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.server.ITernDef;
import tern.server.ITernPlugin;
import tern.utils.TernModuleHelper;

/**
 * Convert selected project to Tern project.
 * 
 */
public class ConvertProjectToTernCommandHandler extends AbstractHandler {

	private IPreferencesService fPreferenceService;

	public ConvertProjectToTernCommandHandler() {
		fPreferenceService = Platform.getPreferencesService();
	}

	public Object execute(ExecutionEvent event) throws ExecutionException {

		final IProject project = getSelectedProject(event);

		if (project == null) {
			return null;
		}

		WorkspaceJob convertJob = new WorkspaceJob(
				TernUIMessages.ConvertProjectToTern_converting_project_job_title) {
			public IStatus runInWorkspace(IProgressMonitor monitor)
					throws CoreException {

				// Get or create tern project.
				boolean force = !TernCorePlugin.hasTernNature(project);
				IIDETernProject ternProject = TernCorePlugin.getTernProject(
						project, force);

				IScopeContext[] fLookupOrder = new IScopeContext[] {
						new InstanceScope(), new DefaultScope() };

				// add default JSON type definitions and plugins
				ITernDef defs[] = getDefs(fPreferenceService
						.getString(TernUIPlugin.getDefault().getBundle()
								.getSymbolicName(),
								TernUIPreferenceConstants.TERN_DEFS,
								TernUIPreferenceConstants.TERN_DEFS_DEFAULT,
								fLookupOrder));
				ITernPlugin[] plugins = getPlugins(fPreferenceService
						.getString(TernUIPlugin.getDefault().getBundle()
								.getSymbolicName(),
								TernUIPreferenceConstants.TERN_PLUGINS,
								TernUIPreferenceConstants.TERN_PLUGINS_DEFAULT,
								fLookupOrder));

				for (int i = 0; i < plugins.length; i++) {
					TernModuleHelper.update(plugins[i], ternProject);
				}
				for (int i = 0; i < defs.length; i++) {
					TernModuleHelper.update(defs[i], ternProject);
				}
				// save tern project if needed
				try {
					ternProject.saveIfNeeded();
				} catch (IOException e) {
					Trace.trace(Trace.SEVERE,
							"Error while configuring angular nature.", e);
				}
				return Status.OK_STATUS;
			}

		};
		convertJob.setUser(true);
		convertJob.setRule(ResourcesPlugin.getWorkspace().getRoot());
		convertJob.schedule();

		return null;
	}

	private ITernDef[] getDefs(String defsAsString) {
		ITernDef def = null;
		List<ITernDef> defs = new ArrayList<ITernDef>();
		String[] s = defsAsString.split(",");
		for (int i = 0; i < s.length; i++) {
			def = TernCorePlugin.getTernServerTypeManager().findTernDef(s[i]);
			if (def != null) {
				defs.add(def);
			}
		}
		return defs.toArray(ITernDef.EMPTY_DEF);
	}

	private ITernPlugin[] getPlugins(String pluginsAsString) {
		ITernPlugin plugin = null;
		List<ITernPlugin> plugins = new ArrayList<ITernPlugin>();
		String[] s = pluginsAsString.split(",");
		for (int i = 0; i < s.length; i++) {
			plugin = TernCorePlugin.getTernServerTypeManager().findTernPlugin(
					s[i]);
			if (plugin != null) {
				plugins.add(plugin);
			}
		}
		return plugins.toArray(ITernPlugin.EMPTY_PLUGIN);
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

}
