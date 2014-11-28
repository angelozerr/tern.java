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

import tern.server.ITernServer;
import tern.server.protocol.completions.ITernCompletionCollector;

public abstract class AbstractTernContentProposalCollector implements
		ITernCompletionCollector {

	@Override
	public void addProposal(String name, String type, String doc, String url,
			String origin, int start, int end, Object completion,
			ITernServer ternServer) {
		addProposal(new TernContentProposal(name, type, doc, url, origin,
				start, end));
	}

	protected abstract void addProposal(IContentProposal proposal);

}
