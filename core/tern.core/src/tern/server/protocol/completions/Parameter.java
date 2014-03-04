package tern.server.protocol.completions;

public class Parameter {

	private final String name;
	private final boolean required;

	public Parameter(String name, boolean required) {
		this.name = name;
		this.required = required;
	}

	public String getName() {
		return name;
	}

	public boolean isRequired() {
		return required;
	}
}
