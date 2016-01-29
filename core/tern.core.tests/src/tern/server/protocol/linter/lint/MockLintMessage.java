package tern.server.protocol.linter.lint;

public class MockLintMessage {

	public final String messageId;
	public final String message;
	public final Long start;
	public final Long end;
	public final Long lineNumber;
	public final String severity;
	public final String file;

	public MockLintMessage(String messageId, String message, Long start, Long end, Long lineNumber, String severity,
			String file) {
		this.messageId = messageId;
		this.message = message;
		this.start = start;
		this.end = end;
		this.lineNumber = lineNumber;
		this.severity = severity;
		this.file = file;
	}
}
