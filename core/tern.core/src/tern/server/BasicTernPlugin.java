package tern.server;

import tern.metadata.TernModuleMetadata;

public class BasicTernPlugin implements ITernPlugin {

	private final String name;

	public BasicTernPlugin(String name) {
		this.name = name;
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public String getType() {
		return null;
	}

	@Override
	public String getVersion() {
		return null;
	}

	@Override
	public String getPath() {
		return null;
	}

	@Override
	public ModuleType getModuleType() {
		return ModuleType.Plugin;
	}

	@Override
	public TernModuleMetadata getMetadata() {
		return null;
	}

}
