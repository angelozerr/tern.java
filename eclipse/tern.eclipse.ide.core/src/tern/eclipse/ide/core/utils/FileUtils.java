/**
 *  Copyright (c) 2013-2016 Angelo ZERRR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.eclipse.ide.core.utils;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ProjectScope;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;

public class FileUtils {

	private static ILineOfOffsetProvider provider;

	private FileUtils() {
	}

	/**
	 * Set the line offset provider singleton.
	 */
	public static void setProvider(ILineOfOffsetProvider provider) {
		FileUtils.provider = provider;
	}

	/**
	 * returns the the line offset provider singleton.
	 */
	public static ILineOfOffsetProvider getProvider() {
		return provider;
	}

	/**
	 * Returns the preferences of line seperator.
	 * 
	 * @param project
	 * @return
	 */
	public static String getLineSeparator(IProject project) {
		if (Platform.isRunning()) {
			String lineSeparator = null;
			// line delimiter in project preference
			IScopeContext[] scopeContext;
			if (project != null) {
				scopeContext = new IScopeContext[] { new ProjectScope(project) };
				lineSeparator = Platform.getPreferencesService().getString(
						Platform.PI_RUNTIME, Platform.PREF_LINE_SEPARATOR,
						null, scopeContext);
				if (lineSeparator != null)
					return lineSeparator;
			}

			// line delimiter in workspace preference
			scopeContext = new IScopeContext[] { InstanceScope.INSTANCE };
			lineSeparator = Platform.getPreferencesService().getString(
					Platform.PI_RUNTIME, Platform.PREF_LINE_SEPARATOR, null,
					scopeContext);
			if (lineSeparator != null)
				return lineSeparator;
		}
		return System.getProperty("line.separator"); //$NON-NLS-1$
	}

	/**
	 * Returns the line of offset of the given file with the given start offset
	 * and null otherwise.
	 */
	public static Integer getLineOfOffset(int start, IFile file) {
		if (getProvider() != null) {
			return getProvider().getLineOfOffset(start, file);
		}
		return null;
	}

	/**
	 * Returns true if the given resource is valid and false otherwise.
	 * 
	 * @param resource
	 * @return true if the given resource is valid and false otherwise.
	 */
	public static boolean isValidResource(IResource resource) {
		return !(resource == null || resource.isDerived() || resource.isTeamPrivateMember() || !resource.isAccessible()
				|| resource.getName().charAt(0) == '.');
	}
}
