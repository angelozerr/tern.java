package tern.server.protocol.completions;

public class Parameter {

	private final String name;
	private final boolean required;
	private final String type;

	public Parameter(String name, boolean required, String type) {
		this.name = name;
		this.required = required;
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public boolean isRequired() {
		return required;
	}

	public String getType() {
		return type;
	}
}
