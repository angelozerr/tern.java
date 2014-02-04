package tern.angular.modules;

import java.util.ArrayList;
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
			String directiveName, boolean fullMatch,
			List<Directive> existingDirectives, IDirectiveCollector collector) {
		collectDirectives(tagName, directiveName, fullMatch,
				existingDirectives, collector);
		if (project != null) {
			IAngularModulesRegistry registry = customRegistries.get(project);
			if (registry != null) {
				registry.collectDirectives(tagName, directiveName, fullMatch,
						existingDirectives, collector);
			}
		}
	}

	public void collectDirectives(String tagName, String directiveName,
			boolean fullMatch, List<Directive> existingDirectives,
			IDirectiveCollector collector) {
		for (IAngularModulesRegistry registry : defaultRegistries) {
			registry.collectDirectives(tagName, directiveName, fullMatch,
					existingDirectives, collector);
		}
	}

	public Directive getDirective(String tagName, String name) {
		Directive directive = null;
		for (IAngularModulesRegistry registry : defaultRegistries) {
			directive = registry.getDirective(tagName, name);
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

	public Directive getDirective(Object project, String tagName, String name) {
		Directive directive = getDirective(tagName, name);
		if (directive != null) {
			return directive;
		}
		if (project != null) {
			IAngularModulesRegistry registry = customRegistries.get(project);
			if (registry != null) {
				return registry.getDirective(tagName, name);
			}
		}
		return null;
	}

}
