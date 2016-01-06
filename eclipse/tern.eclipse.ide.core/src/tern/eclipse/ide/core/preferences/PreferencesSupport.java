/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.core.preferences;

import java.util.HashMap;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ProjectScope;
import org.eclipse.core.runtime.Preferences;
import org.eclipse.core.runtime.preferences.IEclipsePreferences;

public class PreferencesSupport {

	private HashMap projectToScope;
	private String nodeQualifier;
	private Preferences preferenceStore;

	/**
	 * Constructs a new PreferencesSupport.
	 * 
	 * @param nodeQualifier
	 *            A string qualifier for the node (for example:
	 *            PHPCorePlugin.ID)
	 * @param preferenceStore
	 *            The relevant preferences store.
	 */
	public PreferencesSupport(String nodeQualifier, Preferences preferenceStore) {
		this.nodeQualifier = nodeQualifier;
		this.preferenceStore = preferenceStore;
		projectToScope = new HashMap();
	}

	/**
	 * Returns the project-specific value, or null if there is no node for the
	 * project scope.
	 * 
	 * @param key
	 *            The preferences key
	 * @param def
	 *            The default value to return.
	 * @param project
	 *            The IProject
	 * @return The project-specific value for the given key.
	 */
	public String getProjectSpecificPreferencesValue(String key, String def,
			IProject project) {
		assert project != null;
		IEclipsePreferences node = getEclipsePreferences(project);
		if (node != null) {
			return node.get(key, def);
		}
		return null;
	}

	/**
	 * Return the {@link IEclipsePreferences} from the given project.
	 * 
	 * @param project
	 * @return the {@link IEclipsePreferences} from the given project.
	 */
	public IEclipsePreferences getEclipsePreferences(IProject project) {
		ProjectScope scope = (ProjectScope) projectToScope.get(project);
		if (scope == null) {
			scope = new ProjectScope(project);
			projectToScope.put(project, scope);
		}
		IEclipsePreferences node = scope.getNode(nodeQualifier);
		return node;
	}

	/**
	 * Returns the value for the key by first searching for it as a
	 * project-specific and if it is undefined as such, search it as a workspace
	 * property.
	 * 
	 * @param key
	 *            The preferences key.
	 * @param def
	 *            The default value to return.
	 * @param project
	 *            The IProject (may be null).
	 * @return Returns the value for the key.
	 * @see #getProjectSpecificPreferencesValue(String, String, IProject)
	 * @see #getWorkspacePreferencesValue(String)
	 * @see #getWorkspacePreferencesValue(String, IPreferenceStore)
	 */
	public String getPreferencesValue(String key, String def, IProject project) {
		if (project == null) {
			return getWorkspacePreferencesValue(key);
		}
		String projectSpecificPreferencesValue = getProjectSpecificPreferencesValue(
				key, def, project);
		if (projectSpecificPreferencesValue == null) {
			return getWorkspacePreferencesValue(key);
		}

		return projectSpecificPreferencesValue;
	}

	/**
	 * Returns the value for the key, as found in the preferences store.
	 * 
	 * @param key
	 * @return
	 */
	public String getWorkspacePreferencesValue(String key) {
		return preferenceStore == null ? null : preferenceStore.getString(key);
	}

	/**
	 * Returns the value for the key, as found in the given preferences store.
	 * 
	 * @param key
	 * @param preferenceStore
	 * @return The String value
	 */
	public static String getWorkspacePreferencesValue(String key,
			Preferences preferenceStore) {
		return preferenceStore.getString(key);
	}

	/**
	 * Returns the project-specific value, or null if there is no node for the
	 * project scope.
	 * 
	 * @param key
	 *            The preferences key
	 * @param value
	 *            The preference value.
	 * @param project
	 *            The IProject
	 * @return boolean When the value was set.
	 */
	public boolean setProjectSpecificPreferencesValue(String key, String value,
			IProject project) {
		assert project != null;
		if (!project.exists()) {
			return false;
		}
		IEclipsePreferences node = getEclipsePreferences(project);
		if (node != null) {
			node.put(key, value);
			try {
				node.flush();
			} catch (Exception e) {
				// Logger.logException(e);
			}
			return true;
		}
		return false;
	}

}
