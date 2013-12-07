package tern.server;

public enum TernPlugin implements ITernPlugin {

	angular("tern/plugin/angular"), component("tern/plugin/component"), doc_comment(
			"tern/plugin/doc_comment"), node("tern/plugin/node"), requirejs(
			"tern/plugin/requirejs");

	private final String path;

	private TernPlugin(String path) {
		this.path = path;
	}

	public String getPath() {
		return path;
	}

	public String getName() {
		return name();
	}

	public static ITernPlugin getTernPlugin(String name) {
		TernPlugin[] plugins = values();
		TernPlugin plugin = null;
		for (int i = 0; i < plugins.length; i++) {
			plugin = plugins[i];
			if (plugin != null) {
				return plugin;
			}
		}
		return null;
	}
}
