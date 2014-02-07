package tern.angular.modules;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class DirectivesByTagName {

	private final Map<String, DirectiveAndSyntax> directivesMap;
	private final List<Directive> directives;

	public DirectivesByTagName() {
		this.directivesMap = new HashMap<String, DirectiveAndSyntax>();
		this.directives = new ArrayList<Directive>();
	}

	public void addDirective(Directive directive) {
		directives.add(directive);
		List<String> names = directive.getDirectiveNames();
		for (int i = 0; i < names.size(); i++) {
			directivesMap.put(names.get(i),
					new DirectiveAndSyntax(directive, i));
		}
	}

	public void collectDirectives(String directiveName, DirectiveSyntax syntax,
			List<Directive> ignoreDirectives, Restriction restriction,
			IDirectiveCollector collector) {
		String name = null;
		for (Directive directive : directives) {
			if (Module.isMatch(ignoreDirectives, restriction, directive)) {
				List<String> names = directive.getDirectiveNames();
				for (int i = 0; i < names.size(); i++) {
					if (isSupport(syntax, i)) {
						name = names.get(i);
						if (name.startsWith(directiveName)) {
							collector.add(directive, name);
						}
					}
				}
			}
		}
	}

	public boolean isSupport(DirectiveSyntax syntax, int i) {
		if (syntax == null) {
			return true;
		}
		return syntax.isSupport(i);
	}

	public Directive getDirective(String name) {
		DirectiveAndSyntax directiveAndSyntax = directivesMap.get(name);
		if (directiveAndSyntax != null) {
			return directiveAndSyntax.getDirective();
		}
		return null;
	}

}
