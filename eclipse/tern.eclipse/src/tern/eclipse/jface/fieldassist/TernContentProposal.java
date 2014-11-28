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
package tern.eclipse.jface.fieldassist;

import org.eclipse.jface.fieldassist.IContentProposal;

import tern.server.protocol.completions.TernCompletionItem;

public class TernContentProposal extends TernCompletionItem implements
		IContentProposal {

	private final String content;
	private final String description;

	public TernContentProposal(String name, String type, String doc,
			String url, String origin, int start, int end) {
		super(name, type, doc, url, origin);
		int pos = end -start;
		this.content = getSignature().substring(pos, getSignature().length());
		this.description = getDoc();

	}

	@Override
	public String getContent() {
		return content;
	}

	@Override
	public int getCursorPosition() {
		return 0;
	}

	@Override
	public String getDescription() {
		return description;
	}

	@Override
	public String getLabel() {
		return getText();
	}

}
