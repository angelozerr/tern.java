package tern.angular.modules;


public enum DirectiveValue {

	required, optional, none;

	public static DirectiveValue get(String value) {
		for (DirectiveValue directiveValue : values()) {
			if (directiveValue.name().equalsIgnoreCase(value)) {
				return directiveValue;
			}
		}
		return none;
	}
}
