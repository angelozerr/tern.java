/**
 *  Copyright (c) 2013-20A4 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.core.dom;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.eclipse.core.resources.IFile;
import org.w3c.dom.Document;

import tern.eclipse.ide.internal.core.Trace;

public class DefaultDOMProvider implements IDOMProvider {

	public static final IDOMProvider INSTANCE = new DefaultDOMProvider();

	@Override
	public Document getDocument(IFile resource) {
		if (resource == null) {
			return null;
		}
		try {
			DocumentBuilderFactory factory = DocumentBuilderFactory
					.newInstance();
			DocumentBuilder builder = factory.newDocumentBuilder();
			return builder.parse(resource.getContents());

		} catch (Exception e) {
			Trace.trace(Trace.WARNING, "Error while loading DOM for resource "
					+ resource.getFullPath().toString(), e);
		}
		return null;
	}

}
