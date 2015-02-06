package tern.server.protocol.lint;

import tern.metadata.TernModuleMetadata;
import tern.metadata.TernModuleMetadataManager;
import tern.server.ModuleType;

public enum TernLintPlugin implements ITernLintPlugin {

	lint(ITernLintQueryFactory.LINT_FACTORY), 
	eslint(ITernLintQueryFactory.ESLINT_FACTORY),
	jshint(ITernLintQueryFactory.JSHINT_FACTORY);

	private final String name;
	private final String type;
	private final String version;
	private final String path;
	private final ITernLintQueryFactory factory;
	private TernModuleMetadata metadata;

	private TernLintPlugin(ITernLintQueryFactory factory) {
		this.name = name();
		this.type = name();
		this.path = name();
		this.version = null;
		this.metadata = null;
		this.factory = factory;
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public String getType() {
		return type;
	}

	@Override
	public String getVersion() {
		return version;
	}

	@Override
	public String getPath() {
		return path;
	}

	@Override
	public ModuleType getModuleType() {
		return ModuleType.Plugin;
	}

	public static ITernLintPlugin getTernPlugin(String name) {
		TernLintPlugin[] plugins = values();
		TernLintPlugin plugin = null;
		for (int i = 0; i < plugins.length; i++) {
			plugin = plugins[i];
			if (plugin.getName().equals(name)) {
				return plugin;
			}
		}
		return null;
	}

	@Override
	public TernModuleMetadata getMetadata() {
		if (metadata == null) {
			metadata = TernModuleMetadataManager.getInstance().getMetadata(
					getType());
		}
		return metadata;
	}

	@Override
	public BaseTernLintQuery createQuery(boolean full) {
		return factory.createQuery(full);
	}
}
