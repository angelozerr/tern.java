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
package tern.eclipse.ide.ui.text;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.text.IDocument;

import tern.ITernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.eclipse.jface.text.TernTokenScanner;

public abstract class IDETernTokenScanner extends TernTokenScanner {

	@Override
	protected ITernProject getTernProject(IDocument document) throws CoreException {
		IFile file = EditorUtils.getFile(document);
		IProject project = file.getProject();
		if (TernCorePlugin.hasTernNature(project)) {
			return TernCorePlugin.getTernProject(project);
		}
		return null;
	}
}
