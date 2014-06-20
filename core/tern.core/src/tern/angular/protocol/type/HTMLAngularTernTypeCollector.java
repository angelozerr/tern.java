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
package tern.angular.protocol.type;

import tern.angular.AngularType;
import tern.server.protocol.completions.TernCompletionItem;
import tern.server.protocol.type.ITernTypeCollector;

/**
 * {@link ITernTypeCollector} implementation for HTML Angular type collector.
 *
 */
public class HTMLAngularTernTypeCollector implements ITernTypeCollector {

	private final AngularType angularType;
	private final StringBuilder info;

	public HTMLAngularTernTypeCollector(AngularType angularType) {
		this.angularType = angularType;
		this.info = new StringBuilder();
	}

	@Override
	public void setType(String type, boolean guess, String name,
			String exprName, String doc, String url, String origin) {
		if (name != null) {
			TernCompletionItem item = new TernCompletionItem(name, type, origin);
			info.append("<b>Angular ");
			info.append(angularType.name());
			info.append("</b>");
			info.append("<br/>");
			info.append("<dl>");
			// Signature
			info.append("<dt>Signature:</dt>");
			info.append("<dd>");
			info.append(item.getSignature());
			info.append("</dd>");
			// Origin
			info.append("<dt>Origin:</dt>");
			info.append("<dd>");
			info.append(item.getOrigin());
			info.append("</dd>");
			info.append("</dl>");
		}
	}

	/**
	 * Returns the HTML of the Angular tern type.
	 * 
	 * @return the HTML of the Angular tern type.
	 */
	public String getInfo() {
		return info.toString();
	}
}
