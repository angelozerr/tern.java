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
package tern.eclipse.ide.jsdt.internal;

import java.io.IOException;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.wst.sse.core.StructuredModelManager;
import org.eclipse.wst.sse.core.internal.provisional.IStructuredModel;
import org.eclipse.wst.xml.core.internal.provisional.document.IDOMDocument;
import org.eclipse.wst.xml.core.internal.provisional.document.IDOMModel;
import org.w3c.dom.Document;

import tern.eclipse.ide.core.dom.IDOMProvider;

public class DOMSSEProvider implements IDOMProvider {

	public static final IDOMProvider INSTANCE = new DOMSSEProvider();

	/**
	 * Returns the DOM Document id of the file by using SSE DOM Model.
	 * 
	 * @param file
	 * @return
	 */
	@Override
	public Document getDocument(IFile file) {
		IStructuredModel model = null;
		try {
			model = StructuredModelManager.getModelManager()
					.getExistingModelForRead(file);
			if (model == null) {
				model = StructuredModelManager.getModelManager()
						.getModelForRead(file);
			}
			if (model != null && model instanceof IDOMModel) {
				return ((IDOMModel) model).getDocument();
			}
		} catch (IOException e) {
			return null;
		} catch (CoreException e) {
			return null;
		} finally {
			if (model != null) {
				model.releaseFromRead();
			}
		}
		return null;
	}

}
