package tern.server.protocol.angular;

import java.util.Collection;
import java.util.HashMap;

import tern.server.ITernServer;
import tern.server.protocol.angular.completions.TernAngularCompletionItem;
import tern.server.protocol.completions.ITernCompletionCollector;

public class MapTernAngularCompletionCollector extends
		HashMap<String, TernAngularCompletionItem> implements
		ITernCompletionCollector {

	private final ITernServer server;

	public MapTernAngularCompletionCollector(ITernServer server) {
		this.server = server;
	}

	@Override
	public void addProposal(String name, String type, String origin,
			Object doc, int pos, Object completion) {
		super.put(
				name,
				new TernAngularCompletionItem(name, type, origin, server
						.getText(completion, "module"), server.getText(
						completion, "controller")));
	}

	public Collection<TernAngularCompletionItem> getCompletions() {
		return super.values();
	}

}
