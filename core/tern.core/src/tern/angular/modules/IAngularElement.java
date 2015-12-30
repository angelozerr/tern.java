package tern.angular.modules;

import tern.angular.AngularType;
import tern.server.protocol.outline.IJSNode;

public interface IAngularElement extends IJSNode {

	IModule getModule();

	boolean isType(AngularType type);

	AngularType getAngularType();

}
