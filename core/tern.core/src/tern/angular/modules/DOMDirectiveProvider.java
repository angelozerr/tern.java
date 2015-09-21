/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.angular.modules;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.w3c.dom.Attr;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;

/**
 * DOM directive provider.
 * 
 */
public class DOMDirectiveProvider implements IDirectiveProvider {

	private static final DOMDirectiveProvider INSTANCE = new DOMDirectiveProvider();

	public static DOMDirectiveProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public Directive getAngularDirective(Object project, Attr attr) {
		if (attr == null) {
			return null;
		}
		return AngularModulesManager.getInstance().getDirective(project,
				attr.getOwnerElement().getNodeName(), attr.getName(),
				Restriction.A);
	}

	@Override
	public Directive getAngularDirective(Object project, Element element) {
		if (element == null) {
			return null;
		}
		return AngularModulesManager.getInstance().getDirective(project, null,
				element.getTagName(), Restriction.E);
	}

	@Override
	public DirectiveParameter getAngularDirectiveParameter(Object project,
			Attr attr) {
		Element element = attr.getOwnerElement();
		// check if owner element is a directive?
		Directive elementDirective = getAngularDirective(project, element);
		if (elementDirective != null) {
			return elementDirective.getParameter(attr.getName());
		} else {
			// retrieve directives from other attributes.
			List<Directive> directives = getAngularDirectives(project,
					attr.getOwnerElement(), attr);
			DirectiveParameter parameter = null;
			for (Directive directive : directives) {
				parameter = directive.getParameter(attr.getName());
				if (parameter != null) {
					return parameter;
				}
			}
		}
		return null;
	}

	public List<Directive> getAngularDirectives(Object project,
			Element element, Attr selectedAttr) {
		if (element == null) {
			return Collections.emptyList();
		}
		List<Directive> names = null;
		NamedNodeMap attributes = element.getAttributes();
		int length = attributes.getLength();
		Attr attr = null;
		for (int i = 0; i < length; i++) {
			attr = (Attr) attributes.item(i);
			if (selectedAttr == null || !selectedAttr.equals(attr)) {
				Directive directive = getAngularDirective(project, attr);
				if (directive != null) {
					if (names == null) {
						names = new ArrayList<Directive>();
					}
					names.add(directive);
				}
			}
		}
		return (List<Directive>) (names != null ? names : Collections
				.emptyList());
	}

}
