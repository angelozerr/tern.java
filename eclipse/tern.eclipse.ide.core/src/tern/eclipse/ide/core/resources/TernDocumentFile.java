/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.eclipse.ide.core.resources;

import java.io.IOException;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.IDocument;

import tern.ITernFile;
import tern.eclipse.ide.internal.core.resources.IDETernFile;

public class TernDocumentFile extends IDETernFile implements ITernFile {

	private final IDocument document;

	public TernDocumentFile(IFile file, IDocument document) {
		super(file);
		this.document = document;
	}

	@Override
	public String getContents() throws IOException {
		return document.get();
	}

	@Override
	public String toString() {
		return super.toString() + " [DOCUMENT]"; //$NON-NLS-1$
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass) {
		if (adapterClass == IDocument.class) {
			return document;
		}
		return super.getAdapter(adapterClass);
	}

	public IDocument getDocument() {
		return document;
	}

	@Override
	public IFile getFile() {
		return super.getFile();
	}

	@Override
	public String getFileName() {
		return super.getFileName();
	}

}
