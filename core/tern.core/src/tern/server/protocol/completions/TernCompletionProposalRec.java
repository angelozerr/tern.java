/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.server.protocol.completions;

public class TernCompletionProposalRec {

	public final String name;
	public final String displayName;
	public final String type;
	public final String doc;
	public final String url;
	public final String origin;
	public final int start;
	public final int end;
	public final boolean isProperty;
	public final boolean isObjectKey;
	public final boolean isSpecifier;

	public TernCompletionProposalRec(String name, String type, String doc,
			String url, String origin) {
		this(name, null, type, doc, url, origin, -1, -1, false, false, false);
	}
	
	public TernCompletionProposalRec(String name, String type, String doc,
			String url, String origin, int start, int end) {
		this(name, null, type, doc, url, origin, start, end, false, false, false);
	}

	public TernCompletionProposalRec(String name, String displayName,
			String type, String doc, String url, String origin, int start,
			int end, boolean isProperty, boolean isObjectKey, boolean isSpecifier) {
		this.name = name;
		this.displayName = displayName;
		this.type = type;
		this.doc = doc;
		this.url = url;
		this.origin = origin;
		this.start = start;
		this.end = end;
		this.isProperty = isProperty;
		this.isObjectKey = isObjectKey;
		this.isSpecifier = isSpecifier;
	}

	public TernCompletionProposalRec changeType(String newType) {
		return new TernCompletionProposalRec(name, displayName, newType, doc,
				url, origin, start, end, isProperty, isObjectKey, isSpecifier);
	}

}
