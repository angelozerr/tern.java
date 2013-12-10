package tern.server.protocol.completions;

public interface ITernCompletionCollector {

	void addProposal(String name, String type, Object doc, int pos);
}
