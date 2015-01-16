package tern.eclipse.ide.ui.contentassist;

import java.util.ArrayList;
import java.util.List;

import tern.server.protocol.guesstypes.ITernGuessTypesCollector;

public class Arguments extends ArrayList<Arg> implements
		ITernGuessTypesCollector {

	private List<Arg> parameters;

	public Arguments() {
		this.parameters = new ArrayList<Arg>();
	}

	public void addArg(int offset, int length, String name) {
		Arg arg = new Arg(offset, length, name);
		parameters.add(arg);
		super.add(arg);
	}

	public void addArg(int offset, int length) {
		super.add(new Arg(offset, length));
	}

	@Override
	public void addProposal(int arg, String name) {
		parameters.get(arg).addProposal(name);
	}

	public void setBaseOffset(int baseOffset) {
		for (Arg arg : this) {
			arg.updateOffset(baseOffset);
		}
	}
}
