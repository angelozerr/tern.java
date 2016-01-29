package tern.server.protocol.lint;

public class Fix {

	private final String label;
	private final Long start;
	private final Long end;
	private final String text;

	public Fix(String label, Long start, Long end, String text) {
		this.label = label;
		this.start = start;
		this.end = end;
		this.text = text;
	}

	public String getLabel() {
		return label;
	}

	public Long getStart() {
		return start;
	}

	public Long getEnd() {
		return end;
	}

	public String getText() {
		return text;
	}
}
