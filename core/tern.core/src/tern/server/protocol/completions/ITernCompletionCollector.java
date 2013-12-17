package tern.server.protocol.completions;

public interface ITernCompletionCollector {

	void addProposal(String name, String type, String origin, Object doc, int pos);
}
