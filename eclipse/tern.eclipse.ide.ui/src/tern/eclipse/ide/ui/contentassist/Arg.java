/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.contentassist;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.jface.text.Position;
import org.eclipse.jface.text.contentassist.ICompletionProposal;

/**
 * Position for argument.
 *
 */
public class Arg extends Position {

	private static final ICompletionProposal[] EMPTY_PROPOSALS = new ICompletionProposal[0];

	private final String name;
	private List<ICompletionProposal> proposals;

	public Arg(int offset, int length) {
		this(offset, length, null);
	}

	public Arg(int offset, int length, String name) {
		super(offset, length);
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public ICompletionProposal[] getProposals() {
		if (proposals == null) {
			return null;
		}
		return proposals.toArray(EMPTY_PROPOSALS);
	}

	public void addProposal(String name) {
		if (proposals == null) {
			proposals = new ArrayList<ICompletionProposal>();
		}

		proposals.add(new PositionBasedCompletionProposal(name, this,
				getLength(), null, name, null, name));
	}

	public void updateOffset(int baseOffset) {
		this.offset = baseOffset + offset;
	}
}
