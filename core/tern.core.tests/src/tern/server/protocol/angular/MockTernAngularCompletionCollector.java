package tern.server.protocol.angular;

import java.util.Collection;
import java.util.HashMap;

import tern.angular.protocol.completions.TernAngularCompletionItem;
import tern.server.ITernServer;
import tern.server.protocol.completions.ITernCompletionCollector;

public class MockTernAngularCompletionCollector extends
		HashMap<String, TernAngularCompletionItem> implements
		ITernCompletionCollector {

	public MockTernAngularCompletionCollector() {

	}

	@Override
	public void addProposal(String name, String type, String origin,
			Object doc, int pos, Object completion, ITernServer ternServer) {
		super.put(
				name,
				new TernAngularCompletionItem(name, type, origin, ternServer
						.getText(completion, "module"), ternServer.getText(
						completion, "controller")));
	}

	public Collection<TernAngularCompletionItem> getCompletions() {
		return super.values();
	}

}
