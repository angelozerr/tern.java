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
package tern.eclipse.ide.ui.contentassist;

import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.ICompletionProposalExtension4;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.server.protocol.ITernResultsAsyncCollector.TimeoutReason;

/**
 * Timeout proposal.
 *
 */
public class TimeoutProposal implements ICompletionProposal,
		ICompletionProposalExtension4 {

	private int startOffset;
	private String message;

	public TimeoutProposal(int startOffset, TimeoutReason reason) {
		this.startOffset = startOffset;
		this.message = getMessage(reason);
	}

	private String getMessage(TimeoutReason reason) {
		return reason == TimeoutReason.TIMED_OUT ? TernUIMessages.TimeoutProposal_longCalculate
				: TernUIMessages.TimeoutProposal_serverProcessing;
	}

	@Override
	public Point getSelection(IDocument document) {
		return new Point(startOffset, 0);
	}

	@Override
	public Image getImage() {
		return JFaceResources.getImage(Dialog.DLG_IMG_MESSAGE_INFO);
	}

	@Override
	public String getDisplayString() {
		return message;
	}

	@Override
	public IContextInformation getContextInformation() {
		return null;
	}

	@Override
	public String getAdditionalProposalInfo() {
		return null;
	}

	@Override
	public void apply(IDocument document) {
		// do nothing
	}

	@Override
	public boolean isAutoInsertable() {
		return false;
	}

}
