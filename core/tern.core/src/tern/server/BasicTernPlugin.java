package tern.server;

import tern.metadata.TernModuleMetadata;

public class BasicTernPlugin implements ITernPlugin {

	private final String name;
	private final String type;
	private final String version;

	public BasicTernPlugin(String name) {
		this.name = name;
		int index = getVersionIndex(name);
		if (index != -1) {
			this.type = name.substring(0, index);
			this.version = name.substring(index + 1, name.length());
		} else {
			this.type = name;
			this.version = null;
		}
	}

	private int getVersionIndex(String name) {
		int index = name.lastIndexOf("_");
		if (index != -1) {
			if (index < name.length()
					&& Character.isDigit(name.charAt(index + 1))) {
				return index;
			}
		}
		return -1;
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
