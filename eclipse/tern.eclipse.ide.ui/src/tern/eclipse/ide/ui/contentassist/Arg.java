package tern.eclipse.ide.ui.contentassist;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.jface.text.contentassist.CompletionProposal;
import org.eclipse.jface.text.contentassist.ICompletionProposal;

import tern.utils.StringUtils;

public class Arg {

	private static final ICompletionProposal[] EMPTY_PROPOSALS = new ICompletionProposal[0];

	private int offset;
	private final int length;
	private final String name;
	private List<ICompletionProposal> proposals;

	public Arg(int offset, int length) {
		this(offset, length, null);
	}

	public Arg(int offset, int length, String name) {
		this.offset = offset;
		this.length = length;
		this.name = name;
	}

	public int getOffset() {
		return offset;
	}

	public int getLength() {
		return length;
	}

	public String getName() {
		return name;
	}

	public boolean isParameter() {
		return !StringUtils.isEmpty(getName());
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
		proposals.add(new CompletionProposal(name, getOffset(), getLength(),
				getLength()));
	}

	public void updateOffset(int baseOffset) {
		this.offset = baseOffset + offset;
	}
}
