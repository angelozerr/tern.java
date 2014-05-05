package tern.server.protocol;

import tern.server.protocol.lint.ITernLintCollector;

public class MockTernLintCollector implements ITernLintCollector {

	@Override
	public void addMessage(String message, Long start, Long end, String severity) {

	}

}
