package tern.server.protocol.outline;

import java.util.List;

import tern.ITernProject;

public interface IJSNode {

	String getName();

	String getKind();

	String getValue();
	
	Long getStart();

	Long getEnd();

	String getFile();

	void addChild(IJSNode jsNode);

	IJSNode getParent();

	boolean hasChidren();

	List<IJSNode> getChildren();

	ITernProject getTernProject();

	boolean isContainer();
}
