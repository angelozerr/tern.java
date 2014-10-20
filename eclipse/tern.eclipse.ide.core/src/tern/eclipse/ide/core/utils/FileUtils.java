/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
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

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ProjectScope;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;

public class FileUtils {

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

}
