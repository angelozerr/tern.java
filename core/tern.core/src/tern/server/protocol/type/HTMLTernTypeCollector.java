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
package tern.server.protocol.type;

import tern.utils.StringUtils;

/**
 * {@link ITernTypeCollector} implementation for HTML type collector.
 *
 */
public class HTMLTernTypeCollector implements ITernTypeCollector {

	private final StringBuilder info;

	public HTMLTernTypeCollector() {
		this.info = new StringBuilder();
	}

	@Override
	public void setType(String type, boolean guess, String name,
			String exprName, String doc, String url, String origin) {
		if (name != null) {
			info.append("<b>");
			info.append(name);
			info.append("</b>");
			if (!StringUtils.isEmpty(doc)) {
				info.append("<br/><br/>");
				info.append(doc);
			}
			info.append("<br/>");
			info.append("<dl>");
			if (!StringUtils.isEmpty(type)) {
				info.append("<dt>Type:</dt>");
				info.append("<dd>");
				info.append(type);
				info.append("</dd>");
			}
			info.append("<dt>Guess?:</dt>");
			info.append("<dd>");
			info.append(guess);
			info.append("</dd>");
			if (!StringUtils.isEmpty(origin)) {
				info.append("<dt>Origin:</dt>");
				info.append("<dd>");
				info.append(origin);
				info.append("</dd>");
			}
			if (!StringUtils.isEmpty(url)) {
				info.append("<dt>URL:</dt>");
				info.append("<dd>");
				info.append(url);
				info.append("</dd>");
			}
			info.append("</dl>");
		}
	}

	/**
	 * Returns the HTML of the tern type.
	 * 
	 * @return the HTML of the tern type.
	 */
	public String getInfo() {
		return info.toString();
	}
}
