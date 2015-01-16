package tern.server.protocol.guesstypes;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;

public class MockTernGuessTypesCollector extends
		HashMap<Integer, Collection<String>> implements
		ITernGuessTypesCollector {

	@Override
	public void addProposal(int arg, String name) {
		Collection<String> args = super.get(arg);
		if (args == null) {
			args = new ArrayList<String>();
			super.put(arg, args);
		}
		args.add(name);
	}

}
