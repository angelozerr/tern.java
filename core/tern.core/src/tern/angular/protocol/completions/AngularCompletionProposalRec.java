/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.angular.protocol.completions;

import tern.server.protocol.completions.TernCompletionProposalRec;

public class AngularCompletionProposalRec extends TernCompletionProposalRec {

	public AngularCompletionProposalRec(TernCompletionProposalRec item,
			int startOffset) {
		super(item.name, item.type, item.doc, item.url, item.origin,
				startOffset, startOffset);
	}

}
