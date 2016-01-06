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
package tern.angular.protocol.completions;

import tern.server.protocol.completions.TernCompletionItem;

public class TernAngularCompletionItem extends TernCompletionItem {

	private final String module;
	private final String controller;

	public TernAngularCompletionItem(AngularCompletionProposalRec proposal,
			String module, String controller) {
		super(proposal);
		this.module = module;
		this.controller = controller;
	}

	public String getModule() {
		return module;
	}

	public String getController() {
		return controller;
	}

}
