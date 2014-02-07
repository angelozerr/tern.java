package tern.angular.modules;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public abstract class AbstractAngularModulesRegistry implements
		IAngularModulesRegistry {

	private final Map<String, Module> modules;

	public AbstractAngularModulesRegistry() {
		this.modules = new HashMap<String, Module>();
	}

	public void addModule(Module module) {
		modules.put(module.getName(), module);
	}

	public Collection<Module> getModules() {
		return modules.values();
	}

	public Module getModule(String name) {
		return modules.get(name);
	}

	public void collectDirectives(String tagName, String directiveName,
			DirectiveSyntax syntax, boolean fullMatch,
			List<Directive> existingDirectives, Restriction restriction,
			IDirectiveCollector collector) {
		// collect directives of each modules.
		Collection<Module> modules = getModules();
		for (Module module : modules) {
			module.collectDirectives(tagName, directiveName, syntax, fullMatch,
					existingDirectives, restriction, collector);
		}
		// collect directives parameters of directive to ignore
		if (existingDirectives != null) {
			for (Directive directive : existingDirectives) {
				Collection<DirectiveParameter> parameters = directive
						.getParameters();
				for (DirectiveParameter parameter : parameters) {
					if (parameter.getName().startsWith(directiveName)) {
						collector.add(parameter);
					}
				}
			}
		}
	}

	public Directive getDirective(String tagName, String name) {
		Collection<Module> modules = getModules();
		for (Module module : modules) {
			Directive directive = module.getDirective(tagName, name);
			if (directive != null) {
				return directive;
			}
		}
		return null;
	}

	public void clear() {
		this.modules.clear();
	}
}
