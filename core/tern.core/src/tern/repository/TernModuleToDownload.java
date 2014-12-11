package tern.repository;

import tern.metadata.TernModuleMetadata;
import tern.server.AbstractBasicTernModule;
import tern.server.ModuleType;

import com.eclipsesource.json.JsonObject;

public class TernModuleToDownload extends AbstractBasicTernModule {

	private TernModuleMetadata metadata;

	public TernModuleToDownload(String name, JsonObject module) {
		super(name, getModuleType(module));
		this.metadata = new TernModuleMetadata(module);
	}

	private static ModuleType getModuleType(JsonObject module) {
		// TODO : retrieve module type
		return ModuleType.Plugin;
	}

	@Override
	public TernModuleMetadata getMetadata() {
		return metadata;
	}
}
