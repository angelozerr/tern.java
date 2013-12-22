package tern.server.protocol;

import java.util.Collection;
import java.util.HashMap;

import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.completions.TernCompletionItem;

public class MapTernCompletionCollector extends
		HashMap<String, TernCompletionItem> implements ITernCompletionCollector {

	@Override
	public void addProposal(String name, String type, String origin,
			Object doc, int pos) {
		super.put(name, new TernCompletionItem(name, type, origin));
	}

	public Collection<TernCompletionItem> getCompletions() {
		return super.values();
	}

}
