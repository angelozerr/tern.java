package tern.server.protocol.outline;

import java.util.ArrayList;
import java.util.List;

public class JSNode {

	public enum NodeType {
		Root, VariableDeclaration, FunctionDeclaration;
	}

	private final String name;
	private final String nodeType;
	private final String type;
	private JSNode parent;
	private final List<JSNode> children;

	public JSNode(String name, NodeType nodeType, String type) {
		this(name, nodeType.name(), type);
	}

	public JSNode(String name, String nodeType, String type) {
		this.name = name;
		this.nodeType = nodeType;
		this.type = type;
		this.children = new ArrayList<JSNode>();
	}

	public String getName() {
		return name;
	}

	public List<JSNode> getChildren() {
		return children;
	}

	public boolean hasChidren() {
		return children.size() > 0;
	}

	public JSNode getParent() {
		return parent;
	}

	public void addChild(JSNode node) {
		children.add(node);
	}

}
