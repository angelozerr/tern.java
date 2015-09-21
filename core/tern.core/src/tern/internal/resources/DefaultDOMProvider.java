/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.internal.resources;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;

import tern.IDOMProvider;
import tern.ITernFile;

public class DefaultDOMProvider implements IDOMProvider {

	public static final IDOMProvider INSTANCE = new DefaultDOMProvider();

	private DefaultDOMProvider() {
		
	}
	
	@Override
	public Document getDocument(ITernFile file) {
		if (file == null) {
			return null;
		}
		try {
			DocumentBuilderFactory factory = DocumentBuilderFactory
					.newInstance();
			DocumentBuilder builder = factory.newDocumentBuilder();
			return builder.parse(file.getContents());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
