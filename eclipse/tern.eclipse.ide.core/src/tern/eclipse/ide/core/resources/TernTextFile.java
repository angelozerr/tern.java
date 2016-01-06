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
package tern.eclipse.ide.core.resources;

import java.io.IOException;

import org.eclipse.core.resources.IFile;

import tern.ITernFile;
import tern.eclipse.ide.internal.core.resources.IDETernFile;

public class TernTextFile extends IDETernFile implements ITernFile {

	private String text;

	public TernTextFile(IFile file, String text) {
		super(file);
		this.text = text;
	}

	@Override
	public String getContents() throws IOException {
		return text;
	}

	@Override
	public String toString() {
		return super.toString() + " [DOCUMENT]"; //$NON-NLS-1$
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass) {
		if (adapterClass == String.class) {
			return text;
		}
		return super.getAdapter(adapterClass);
	}

}
