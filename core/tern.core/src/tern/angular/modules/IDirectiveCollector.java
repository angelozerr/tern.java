package tern.angular.modules;

public interface IDirectiveCollector {

	void add(Directive directive, String nameWhichMatch);

	void add(DirectiveParameter parameter);

}
