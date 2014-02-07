package tern.angular.modules;

public enum Restriction {

	A, E, C, M;

	public boolean isMatch(String restrict) {
		return restrict.contains(name());
	}
}
