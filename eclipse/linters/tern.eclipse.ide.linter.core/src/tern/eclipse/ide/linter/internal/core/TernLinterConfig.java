package tern.eclipse.ide.linter.internal.core;

import tern.eclipse.ide.linter.core.ITernLinterConfig;

public class TernLinterConfig extends TernLinterOption implements
		ITernLinterConfig {

	public TernLinterConfig(String id) {
		super(id, null, null);
	}

}
