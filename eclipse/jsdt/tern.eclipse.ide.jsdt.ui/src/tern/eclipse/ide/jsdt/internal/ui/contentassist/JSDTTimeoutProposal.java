/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genutiec.com> - asynchronous request processing and 
 *  									refactoring of collectors API
 */
package tern.eclipse.ide.jsdt.internal.ui.contentassist;

import org.eclipse.wst.jsdt.ui.text.java.IJavaCompletionProposal;

import tern.eclipse.ide.ui.contentassist.TimeoutProposal;
import tern.server.protocol.ITernResultsAsyncCollector.TimeoutReason;

/**
 * 
 Extends {@link TimeoutProposal} to set an high relevance for tern completion
 * proposal to display on the top of the completion popup the tern result.
 */
public class JSDTTimeoutProposal extends TimeoutProposal implements
		IJavaCompletionProposal {

	public JSDTTimeoutProposal(int startOffset, TimeoutReason reason) {
		super(startOffset, reason);
	}

	@Override
	public int getRelevance() {
		return JSDTTernCompletionCollector.TERN_RELEVANT;
	}

}
