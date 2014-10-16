/*
 * Copyright 2014, Genuitec, LLC
 * All Rights Reserved.
 */
package tern.eclipse.ide.core.resources;

import java.io.IOException;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.IDocument;

import tern.ITernFile;
import tern.eclipse.ide.internal.core.resources.IDETernFile;

public class TernDocumentFile extends IDETernFile implements ITernFile {

	private IDocument document;
	
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

}
