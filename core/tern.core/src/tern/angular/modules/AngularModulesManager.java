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

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AngularModulesManager {

	private static final AngularModulesManager INSTANCE = new AngularModulesManager();

	public static AngularModulesManager getInstance() {
		return INSTANCE;
	}

	private final List<IAngularModulesRegistry> defaultRegistries;

	private final Map<Object, IAngularModulesRegistry> customRegistries;

	private AngularModulesManager() {
		this.defaultRegistries = new ArrayList<IAngularModulesRegistry>();
		this.customRegistries = new HashMap<Object, IAngularModulesRegistry>();
		defaultRegistries.add(new XMLAngularModulesRegistry());
	}

	public void addRegistry(IAngularModulesRegistry registry) {
		defaultRegistries.add(registry);
	}

	public void addRegistry(Object project, IAngularModulesRegistry registry) {
		customRegistries.put(project, registry);
	}

	public void collectDirectives(Object project, String tagName,
			String directiveName, IDirectiveSyntax syntax,
			List<Directive> existingDirectives, Restriction restriction,
			IDirectiveCollector collector) {
		// collect directives of each modules.
		collectDefaultDirectives(tagName, directiveName, syntax,
				existingDirectives, restriction, collector);
		if (project != null) {
			IAngularModulesRegistry registry = customRegistries.get(project);
			if (registry != null) {
				registry.collectDirectives(tagName, directiveName, syntax,
						existingDirectives, restriction, collector);
			}
		}
		// collect directives parameters of directive to ignore
		if (existingDirectives != null) {
			for (Directive directive : existingDirectives) {
				collectDirectiveParameters(directive, directiveName, collector);
			}
		}
	}

	public void collectDirectiveParameters(Directive directive, String name,
			IDirectiveParameterCollector collector) {
		Collection<DirectiveParameter> parameters = directive.getParameters();
		for (DirectiveParameter parameter : parameters) {
			if (parameter.getName().startsWith(name)) {
				collector.add(parameter);
			}
		}
	}

	private void collectDefaultDirectives(String tagName, String directiveName,
			IDirectiveSyntax syntax, List<Directive> existingDirectives,
			Restriction restriction, IDirectiveCollector collector) {
		for (IAngularModulesRegistry registry : defaultRegistries) {
			registry.collectDirectives(tagName, directiveName, syntax,
					existingDirectives, restriction, collector);
		}
	}

	public Directive getDirective(String tagName, String name,
			Restriction restriction) {
		Directive directive = null;
		for (IAngularModulesRegistry registry : defaultRegistries) {
			directive = registry.getDirective(tagName, name, restriction);
			if (directive != null) {
				return directive;
			}
		}
		return null;
	}

	public Module getModule(String name) {
		Module module = null;
		for (IAngularModulesRegistry registry : defaultRegistries) {
			module = registry.getModule(name);
			if (module != null) {
				return module;
			}
		}
		return null;
	}

	public Directive getDirective(Object project, String tagName, String name,
			Restriction restriction) {
		Directive directive = getDirective(tagName, name, restriction);
		if (directive != null) {
			return directive;
		}
		if (project != null) {
			IAngularModulesRegistry registry = customRegistries.get(project);
			if (registry != null) {
				return registry.getDirective(tagName, name, restriction);
			}
		}
		return null;
	}

}
