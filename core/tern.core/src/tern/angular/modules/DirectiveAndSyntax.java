package tern.angular.modules;

class DirectiveAndSyntax {

	private final Directive directive;
	private final int syntax;

	public DirectiveAndSyntax(Directive directive, int syntax) {
		this.directive = directive;
		this.syntax = syntax;
	}
	
	public Directive getDirective() {
		return directive;
	}
	
	public int getSyntax() {
		return syntax;
	}
}
