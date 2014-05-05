package tern.server.protocol.lint;

public interface ITernLintCollector {

	void addMessage(String message, Long start, Long end, String severity);
}
