/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.angular.modules;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Angular module.
 * 
 */
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

	public Directive getDirective(String tagName, String name,
			Restriction restriction) {
		DirectivesByTagName result = getDirectivesByTagName(tagName, false);
		Directive directive = null;
		if (result != null) {
			directive = result.getDirective(name, restriction);
		}
		if (directive == null) {
			return getDirectivesByTagName(DirectiveHelper.ANY_TAG, false)
					.getDirective(name, restriction);
		}
		return directive;
	}

	public void collectDirectives(String tagName, String directiveName,
			IDirectiveSyntax syntax, List<Directive> existingDirectives,
			Restriction restriction, IDirectiveCollector collector) {

		// collect directives from tag names.
		DirectivesByTagName container = getDirectivesByTagName(tagName, false);
		collectDirectives(directiveName, syntax, existingDirectives,
				restriction, collector, container);
		if (!DirectiveHelper.ANY_TAG.equals(tagName)) {
			// collect directives from 'any' tag names.
			container = getDirectivesByTagName(DirectiveHelper.ANY_TAG, false);
			collectDirectives(directiveName, syntax, existingDirectives,
					restriction, collector, container);
		}
	}

	private void collectDirectives(String directiveName,
			IDirectiveSyntax syntax, List<Directive> ignoreDirectives,
			Restriction restriction, IDirectiveCollector collector,
			DirectivesByTagName container) {
		if (container != null) {
			container.collectDirectives(directiveName, syntax,
					ignoreDirectives, restriction, collector);
		}
	}

	protected static boolean isMatch(List<Directive> ignoreDirectives,
			Restriction restriction, Directive directive) {
		if (directive == null) {
			return false;
		}
		if (isIgnore(directive, ignoreDirectives)) {
			return false;
		}
		return directive.isMatch(restriction);
	}

	private static boolean isIgnore(Directive directive,
			List<Directive> ignoreDirectives) {
		if (ignoreDirectives == null) {
			return false;
		}
		return ignoreDirectives.contains(directive);
	}

}
