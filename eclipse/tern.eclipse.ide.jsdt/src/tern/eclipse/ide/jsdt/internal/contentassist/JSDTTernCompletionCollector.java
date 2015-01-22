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
package tern.eclipse.ide.jsdt.internal.contentassist;

import java.util.List;

import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.ICompletionProposalExtension4;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;

import tern.ITernFile;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.ui.contentassist.JSTernCompletionCollector;
import tern.eclipse.ide.ui.contentassist.JSTernCompletionProposal;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultsAsyncCollector;
import tern.server.protocol.completions.TernCompletionProposalRec;

/**
 * Extends {@link JSTernCompletionCollector} to create JSDT
 * {@link JSDTTernCompletionProposal}.
 * 
 */
public class JSDTTernCompletionCollector extends JSTernCompletionCollector
		implements ITernResultsAsyncCollector {

	private boolean timedOut;
	private boolean contentAdded;

	private int startOffset;

	public JSDTTernCompletionCollector(List<ICompletionProposal> proposals,
			int startOffset, ITernFile ternFile, IIDETernProject project) {
		super(proposals, startOffset, ternFile, project);
		this.startOffset = startOffset;
	}

	@Override
	protected JSTernCompletionProposal createProposal(
			TernCompletionProposalRec proposal) {
		return new JSDTTernCompletionProposal(proposal);
	}

	@Override
	public void addProposal(TernCompletionProposalRec proposal,
			Object completion, IJSONObjectHelper jsonObjectHelper) {
		if (!timedOut) {
			contentAdded = true;
			super.addProposal(proposal, completion, jsonObjectHelper);
		}
	}

	@Override
	public void done() {
		if (!timedOut) {
			contentAdded = true;
		}
	}

	@Override
	public String getRequestDisplayName() {
		return "Calculating completion proposals...";
	}

	public void timeout(final TimeoutReason reason) {
		timedOut = true;
		if (!contentAdded) {
			proposals
					.add(new InfoProposal(
							startOffset,
							reason == TimeoutReason.TIMED_OUT ? "Completion proposals took to long to calculate. Try again in a few seconds..."
									: "Server is still processing previous request. Try again in a few seconds..."));
		}
	}

	private static final class InfoProposal implements ICompletionProposal,
			ICompletionProposalExtension4 {

		private int startOffset;
		private String message;

		public InfoProposal(int startOffset, String message) {
			this.startOffset = startOffset;
			this.message = message;
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

}
