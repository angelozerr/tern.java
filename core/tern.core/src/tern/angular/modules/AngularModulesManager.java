package tern.angular.modules;

import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.xml.sax.SAXException;

public class AngularModulesManager {

	private static final AngularModulesManager INSTANCE = new AngularModulesManager();

	public static AngularModulesManager getInstance() {
		return INSTANCE;
	}

	private final Map<String, Module> modules;

	private AngularModulesManager() {
		this.modules = new HashMap<String, Module>();
		try {
			loadModule(AngularModulesManager.class
					.getResourceAsStream("ng.xml"));
			loadModule(AngularModulesManager.class
					.getResourceAsStream("ngRoute.xml"));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void loadModule(InputStream in) throws IOException, SAXException {
		addModule(new SAXModuleHandler().load(in));
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
			boolean fullMatch, List<Directive> existingDirectives,
			IDirectiveCollector collector) {
		// collect directives of each modules.
		Collection<Module> modules = getModules();
		for (Module module : modules) {
			module.collectDirectives(tagName, directiveName, fullMatch,
					existingDirectives, collector);
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

}
