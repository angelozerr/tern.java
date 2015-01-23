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

import org.eclipse.core.resources.IProject;
import org.eclipse.osgi.util.NLS;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.handlers.AbstractConvertProjectCommandHandler;

/**
 * Convert selected project to Tern project.
 * 
 */
public class ConvertProjectToTernCommandHandler extends
		AbstractConvertProjectCommandHandler {

	protected String getConvertingProjectJobTitle(IProject project) {
		return NLS
				.bind(TernUIMessages.ConvertProjectToTern_converting_project_job_title,
						project.getName());
	}

}
