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
import java.util.ArrayList;
import java.util.List;

import org.xml.sax.Attributes;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;
import org.xml.sax.helpers.DefaultHandler;
import org.xml.sax.helpers.XMLReaderFactory;

import tern.angular.AngularType;
import tern.utils.StringUtils;

/**
 * SAX Module to load module with XML file.
 * 
 */
class SAXModuleHandler extends DefaultHandler {

	private Module module;
	private StringBuilder description = null;

	private Directive directive;
	private DirectiveParameter directiveParameter;

	public Module load(InputStream in) throws IOException, SAXException {
		XMLReader xmlReader = XMLReaderFactory.createXMLReader();
		xmlReader.setContentHandler(this);
		xmlReader.parse(new InputSource(in));
		return module;
	}

	@Override
	public void startElement(String uri, String localName, String name,
			Attributes attributes) throws SAXException {
		if ("module".equals(name)) {
			String moduleName = attributes.getValue("name");
			module = new Module(moduleName);
		} else if ("directive".equals(name)) {

			String directiveName = attributes.getValue("name");
			String url = attributes.getValue("url");
			AngularType directiveType = AngularType.get(attributes
					.getValue("type"));
			// tags name
			List<String> tagsName = new ArrayList<String>();
			String tags = attributes.getValue("tags");
			if (!StringUtils.isEmpty(tags)) {
				String[] names = tags.split(",");
				String tagName = null;

				for (int i = 0; i < names.length; i++) {
					tagName = names[i].trim();
					if (tagName.length() > 0) {
						tagsName.add(tagName);
					}
				}
			}
			// restrict
			String restrict = attributes.getValue("restrict");
			// value : required|optional|none
			DirectiveValue directiveValue = DirectiveValue.get(attributes
					.getValue("value"));
			this.directive = new Directive(directiveName, directiveType, url,
					tagsName, restrict, directiveValue, false, module);
		} else if ("description".equals(name)) {
			this.description = new StringBuilder();
		} else if ("parameter".equals(name)) {
			String parameterName = attributes.getValue("name");
			boolean optional = StringUtils.asBoolean(
					attributes.getValue("optional"), false);
			this.directiveParameter = new DirectiveParameter(parameterName,
					optional, directive);
			directive.addParameter(directiveParameter);
			this.description = new StringBuilder();
		}
		super.startElement(uri, localName, name, attributes);
	}

	@Override
	public void endElement(String uri, String localName, String name)
			throws SAXException {
		if ("directive".equals(name)) {
			this.directive = null;
		} else if ("parameter".equals(name)) {
			if (description != null) {
				directiveParameter.setDescription(description.toString());
			}
			this.directiveParameter = null;
		} else if ("description".equals(name)) {
			this.directive.setDescription(description.toString());
			this.description = null;
		}
		super.endElement(uri, localName, name);
	}

	public Module getModule() {
		return module;
	}

	@Override
	public void characters(char ch[], int start, int length)
			throws SAXException {
		if (description != null) {
			description.append(String.valueOf(ch, start, length));
		}
		super.characters(ch, start, length);
	}
}
