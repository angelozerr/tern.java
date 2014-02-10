/*******************************************************************************
 * Copyright (c) 2014 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.angular.modules;

import org.w3c.dom.Attr;
import org.w3c.dom.Element;

public class DOMDirectiveProvider implements IDirectiveProvider {

	private static final IDirectiveProvider INSTANCE = new DOMDirectiveProvider();

	public static IDirectiveProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public Directive getAngularDirective(Attr attr) {
		if (attr == null) {
			return null;
		}
		return AngularModulesManager.getInstance().getDirective(
				attr.getOwnerElement().getNodeName(), attr.getName());
	}

	@Override
	public Directive getAngularDirective(Element element) {
		if (element == null) {
			return null;
		}
		return AngularModulesManager.getInstance().getDirective(null,
				element.getTagName());
	}

}
