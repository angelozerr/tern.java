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
package tern.eclipse.ide.ui.utils;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;

import tern.eclipse.ide.core.utils.ILineOfOffsetProvider;
import tern.eclipse.ide.internal.ui.Trace;

/**
 * {@link ILineOfOffsetProvider} implementation which uses
 * {@link IDocument#getLineInformationOfOffset(int)}
 * 
 */
public class LineOfOffsetProvider implements ILineOfOffsetProvider {

	private static final ILineOfOffsetProvider INSTANCE = new LineOfOffsetProvider();

	public static ILineOfOffsetProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public Integer getLineOfOffset(int start, IFile file) {
		IDocument document = EditorUtils.getDocument(file);
		try {
			return document != null ? document.getLineOfOffset(start) : null;
		} catch (BadLocationException e) {
			Trace.trace(Trace.INFO, "Error while getting line of offset", e);
		}
		return null;
	}

}
