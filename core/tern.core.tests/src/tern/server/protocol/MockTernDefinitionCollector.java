package tern.server.protocol;

import tern.server.protocol.definition.ITernDefinitionCollector;

public class MockTernDefinitionCollector implements ITernDefinitionCollector {

	private String file;
	private Long start;
	private Long end;

	@Override
	public void setDefinition(String file, Long start, Long end) {
		this.file = file;
		this.start = start;
		this.end = end;
	}

	public String getFile() {
		return file;
	}

	public Long getStart() {
		return start;
	}

	public Long getEnd() {
		return end;
	}
}
