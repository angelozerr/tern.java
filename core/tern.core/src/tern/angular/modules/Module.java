package tern.angular.modules;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Module {

	private final String name;

	private final DirectivesByTagName allDirectives;
	private final Map<String, DirectivesByTagName> directivesByTagName;

	public Module(String name) {
		this.name = name;
		this.directivesByTagName = new HashMap<String, DirectivesByTagName>();
		this.allDirectives = new DirectivesByTagName();
	}

	public String getName() {
		return name;
	}

	void addDirective(Directive directive) {
		Collection<String> tagNames = directive.getTagNames();
		if (tagNames.size() > 0) {
			for (String tagName : tagNames) {
				addDirective(tagName, directive);
			}
		} else {
			addDirective(DirectiveHelper.ANY_TAG, directive);
		}
		allDirectives.addDirective(directive);
	}

	private void addDirective(String tagName, Directive directive) {
		DirectivesByTagName directives = getDirectivesByTagName(tagName, true);
		directives.addDirective(directive);
	}

	private DirectivesByTagName getDirectivesByTagName(String tagName,
			boolean createIfNotExists) {
		if (tagName == null) {
			return allDirectives;
		}
		DirectivesByTagName result = directivesByTagName.get(tagName);
		if (result == null && createIfNotExists) {
			result = new DirectivesByTagName();
			directivesByTagName.put(tagName, result);
		}
		return result;
	}

	public Directive getDirective(String tagName, String name) {
		DirectivesByTagName result = getDirectivesByTagName(tagName, false);
		Directive directive = null;
		if (result != null) {
			directive = result.get(name);
		}
		if (directive == null) {
			return getDirectivesByTagName(DirectiveHelper.ANY_TAG, false).get(
					name);
		}
		return directive;
	}

	public void collectDirectives(String tagName, String directiveName,
			boolean fullMatch, List<Directive> existingDirectives,
			IDirectiveCollector collector) {
		if (fullMatch) {
			Directive directive = getDirective(tagName, directiveName);
			if (directive != null) {
				collector.add(directive, directiveName);
			}
		} else {
			// collect directives from tag names.
			DirectivesByTagName container = getDirectivesByTagName(tagName,
					false);
			collectDirectives(directiveName, existingDirectives, collector,
					container);
			// collect directives from 'any' tag names.
			container = getDirectivesByTagName(DirectiveHelper.ANY_TAG, false);
			collectDirectives(directiveName, existingDirectives, collector,
					container);			
		}
	}

	private boolean isIgnore(Directive directive,
			List<Directive> ignoreDirectives) {
		if (ignoreDirectives == null) {
			return false;
		}
		return ignoreDirectives.contains(directive);
	}

	private void collectDirectives(String directiveName,
			List<Directive> ignoreDirectives, IDirectiveCollector collector,
			DirectivesByTagName container) {
		if (container != null) {
			Directive directive = null;
			Set<String> names = container.keySet();
			for (String name : names) {
				if (name.startsWith(directiveName)) {
					directive = container.get(name);
					if (!isIgnore(directive, ignoreDirectives)) {
						// collect directive
						collector.add(directive, name);
					}
				}
			}
		}
	}

}
