package tern.angular.protocol;

public class Controller {

	private final String name;
	private final String as;

	public Controller(String name, String as) {
		this.name = name;
		this.as = as;
	}

	public String getName() {
		return name;
	}

	public String getAs() {
		return as;
	}

	public static Controller createController(String expression) {
		String name = expression;
		String as = null;
		int index = expression.indexOf(" as");
		if (index != -1) {
			name = expression.substring(0, index);
			as = expression.substring(index + 3, expression.length()).trim();
		}
		return new Controller(name, as);
	}

	public static String getName(String expression) {
		String name = expression;
		int index = expression.indexOf(" as");
		if (index != -1) {
			name = expression.substring(0, index);
		}
		return name;
	}
}
