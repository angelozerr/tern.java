package tern.eclipse.ide.core.scriptpath;

import org.eclipse.core.resources.IResource;

public abstract class AbstractTernScriptPath implements ITernScriptPath {

	private final IResource resource;
	private final ScriptPathsType type;

	public AbstractTernScriptPath(IResource resource, ScriptPathsType type) {
		this.resource = resource;
		this.type = type;
	}

	@Override
	public IResource getResource() {
		return resource;
	}

	@Override
	public ScriptPathsType getType() {
		return type;
	}
}
