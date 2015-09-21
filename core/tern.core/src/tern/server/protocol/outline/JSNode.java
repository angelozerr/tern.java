/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.protocol.outline;

import java.util.ArrayList;
import java.util.List;

public class JSNode {

	private final String name;
	private final String type;
	private final Long start;
	private final Long end;
	private final JSNode parent;
	private final List<JSNode> children;

	public JSNode(String name, String type, Long start, Long end, JSNode parent) {
		this.name = name;
		this.type = type;
		this.start = start;
		this.end = end;
		this.children = new ArrayList<JSNode>();
		if (parent != null) {
			this.parent = parent;
			parent.addChild(this);
		} else {
			this.parent = null;
		}
	}

	public String getName() {
		return name;
	}

	public String getType() {
		return type;
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

	public Long getStart() {
		return start;
	}

	public Long getEnd() {
		return end;
	}
}
