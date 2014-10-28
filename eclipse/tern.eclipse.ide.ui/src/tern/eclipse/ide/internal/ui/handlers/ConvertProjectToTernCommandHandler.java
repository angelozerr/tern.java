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

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.preferences.IPreferencesService;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.osgi.util.NLS;

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.preferences.TernUIPreferenceConstants;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.handlers.AbstractConvertProjectCommandHandler;
import tern.server.ITernDef;
import tern.server.ITernPlugin;

/**
 * Convert selected project to Tern project.
 * 
 */
public class ConvertProjectToTernCommandHandler extends
		AbstractConvertProjectCommandHandler {

	private IPreferencesService fPreferenceService;

	public ConvertProjectToTernCommandHandler() {
		fPreferenceService = Platform.getPreferencesService();
	}

	@Override
	protected ITernPlugin[] getPlugins(IScopeContext[] fLookupOrder) {
		return getPlugins(fPreferenceService.getString(TernUIPlugin
				.getDefault().getBundle().getSymbolicName(),
				TernUIPreferenceConstants.TERN_PLUGINS,
				TernUIPreferenceConstants.TERN_PLUGINS_DEFAULT, fLookupOrder));
	}

	@Override
	protected ITernDef[] getDefs(IScopeContext[] fLookupOrder) {
		return getDefs(fPreferenceService.getString(TernUIPlugin.getDefault()
				.getBundle().getSymbolicName(),
				TernUIPreferenceConstants.TERN_DEFS,
				TernUIPreferenceConstants.TERN_DEFS_DEFAULT, fLookupOrder));
	}

	protected String getConvertingProjectJobTitle(IProject project) {
		return NLS
				.bind(TernUIMessages.ConvertProjectToTern_converting_project_job_title,
						project.getName());
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
}
