package tern.angular.modules;

import java.util.List;

public interface IAngularModulesRegistry {

	Module getModule(String name);

	Directive getDirective(String tagName, String name);

	void collectDirectives(String tagName, String directiveName,
			DirectiveSyntax syntax, boolean fullMatch, List<Directive> existingDirectives,
			Restriction restriction, IDirectiveCollector collector);

}
