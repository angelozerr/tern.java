package tern.server.protocol.definition;

public interface ITernDefinitionCollector {

	void setDefinition(String file, Long start, Long end);
}
