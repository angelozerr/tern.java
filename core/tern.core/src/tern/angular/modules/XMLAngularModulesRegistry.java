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
package tern.angular.modules;

import java.io.IOException;
import java.io.InputStream;

import org.xml.sax.SAXException;

public class XMLAngularModulesRegistry extends AbstractAngularModulesRegistry {

	public XMLAngularModulesRegistry() {
		super();
		try {
			loadModule(XMLAngularModulesRegistry.class
					.getResourceAsStream("ng.xml"));
			loadModule(XMLAngularModulesRegistry.class
					.getResourceAsStream("ngRoute.xml"));
			loadModule(XMLAngularModulesRegistry.class
					.getResourceAsStream("ngTouch.xml"));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void loadModule(InputStream in) throws IOException, SAXException {
		addModule(new SAXModuleHandler().load(in));
	}

}
