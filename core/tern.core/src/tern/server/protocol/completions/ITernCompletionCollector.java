package tern.server.protocol.completions;

import tern.server.ITernServer;

public interface ITernCompletionCollector {

	void addProposal(String name, String type, String origin, Object doc,
			int pos, Object completion, ITernServer ternServer);
}
