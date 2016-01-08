package tern.server.protocol.outline;

import java.util.ArrayList;
import java.util.List;

import tern.ITernProject;
import tern.utils.StringUtils;

public class BaseJSNode implements IJSNode {

	private final String name;
	private final String kind;
	private final String value;
	private final Long start;
	private final Long end;
	private final String file;
	private final IJSNode parent;
	private final List<IJSNode> children;

	public BaseJSNode(String name, String kind, String value, Long start, Long end, String file, IJSNode parent) {
		this.name = name;
		this.kind = kind;
		this.value = value;
		this.start = start;
		this.end = end;
		this.file = file;
		this.children = new ArrayList<IJSNode>();
		if (parent != null) {
			this.parent = parent;
			parent.addChild(this);
		} else {
			this.parent = null;
		}
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public Long getStart() {
		return start;
	}

	@Override
	public Long getEnd() {
		return end;
	}

	@Override
	public String getFile() {
		return file;
	}

	@Override
	public String getKind() {
		return kind;
	}

	@Override
	public String getValue() {
		return value;
	}

	@Override
	public List<IJSNode> getChildren() {
		return children;
	}

	@Override
	public boolean hasChidren() {
		return children.size() > 0;
	}

	@Override
	public IJSNode getParent() {
		return parent;
	}

	@Override
	public void addChild(IJSNode node) {
		children.add(node);
	}

	public boolean isFile() {
		return !StringUtils.isEmpty(file);
	}

	@Override
	public ITernProject getTernProject() {
		return parent != null ? parent.getTernProject() : null;
	}

	@Override
	public boolean isContainer() {
		return false;
	}
}
