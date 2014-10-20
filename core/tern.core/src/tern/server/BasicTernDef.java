package tern.server;

import tern.metadata.TernModuleMetadata;

public class BasicTernDef implements ITernDef {

	private final String name;

	public BasicTernDef(String name) {
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
		return ModuleType.Def;
	}

	@Override
	public TernModuleMetadata getMetadata() {
		return null;
	}

}
