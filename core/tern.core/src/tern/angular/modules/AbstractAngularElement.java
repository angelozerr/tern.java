package tern.angular.modules;

import tern.angular.AngularType;
import tern.server.protocol.outline.BaseJSNode;
import tern.server.protocol.outline.IJSNode;

public abstract class AbstractAngularElement extends BaseJSNode implements IAngularElement {

	private final AngularType type;

	public AbstractAngularElement(String name, AngularType type, Long start, Long end, String file, IJSNode parent) {
		super(name, type.name(), null, start, end, file, parent);
		this.type = type;
	}

	@Override
	public boolean isType(AngularType type) {
		return this.type.equals(type);
	}

	@Override
	public AngularType getAngularType() {
		return type;
	}

	@Override
	public IModule getModule() {
		return (IModule) getParent();
	}

}
