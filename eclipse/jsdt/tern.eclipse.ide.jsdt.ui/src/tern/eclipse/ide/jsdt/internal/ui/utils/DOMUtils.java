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
package tern.eclipse.ide.jsdt.internal.ui.utils;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.jface.text.IDocument;
import org.eclipse.wst.sse.core.StructuredModelManager;
import org.eclipse.wst.sse.core.internal.provisional.IStructuredModel;
import org.eclipse.wst.xml.core.internal.provisional.document.IDOMNode;

/**
 * Utilities for SSE DOM node {@link IDOMNode}.
 * 
 */
public class DOMUtils {

	/**
	 * Returns the owner file of the JFace document {@link IDocument}.
	 * 
	 * @param document
	 * @return
	 */
	public static final IFile getFile(IDocument document) {
		if (document == null) {
			return null;
		}
		IStructuredModel model = null;
		try {
			model = StructuredModelManager.getModelManager()
					.getExistingModelForRead(document);
			if (model != null) {
				return getFile(model);
			}
		} finally {
			if (model != null)
				model.releaseFromRead();
		}
		return null;
	}

	/**
	 * Returns the owner file of the SSE model {@link IStructuredModel}.
	 * 
	 * @param node
	 *            the SSE model.
	 * @return
	 */
	public static final IFile getFile(IStructuredModel model) {
		String baselocation = model.getBaseLocation();
		if (baselocation != null) {
			IWorkspaceRoot root = ResourcesPlugin.getWorkspace().getRoot();
			IPath filePath = new Path(baselocation);
			if (filePath.segmentCount() > 1) {
				return root.getFile(filePath);
			}
		}
		return null;
	}
}
