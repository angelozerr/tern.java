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

import tern.utils.StringUtils;

/**
 * JavaScript node used for the Outline.
 *
 */
public class JSNode {

	private static final String FN_TYPE = "fn(";
	private static final String ARRAY_TYPE = "[";

	// ES6 kinds
	private static final String IMPORT_KIND = "import";
	private static final String SPECIFIER_KIND = "specifier";
	private static final String CLASS_KIND = "class";
	
	private final String name;
	private final String type;
	private final String kind;
	private final Long start;
	private final Long end;
	private final String file;
	private final JSNode parent;
	private final List<JSNode> children;
	private final boolean isFunction;
	private final boolean isArray;
	
	// ES6
	private final boolean isClass;
	private final boolean isImport;
	private final boolean isSpecifier;
	
	public JSNode(String name, String type, String kind, Long start, Long end, String file, JSNode parent) {
		this.name = name;
		this.type = type;
		this.start = start;
		this.end = end;
		this.file = file;
		this.children = new ArrayList<JSNode>();
		if (parent != null) {
			this.parent = parent;
			parent.addChild(this);
		} else {
			this.parent = null;
		}
		if (type != null) {
			isFunction = type.startsWith(FN_TYPE);
			isArray = type.startsWith(ARRAY_TYPE);
		} else {
			isFunction = false;
			isArray = false;
		}
		this.kind = kind;
		if (kind != null) {
			isClass = CLASS_KIND.equals(kind);
			isImport = IMPORT_KIND.equals(kind);
			isSpecifier = SPECIFIER_KIND.equals(kind);
		} else {
			isClass = false;
			isImport = false;
			isSpecifier = false;
		}
	}

	public String getName() {
		return StringUtils.isEmpty(file) ? name : file;
	}

	public String getType() {
		return type;
	}

	public String getKind() {
		return kind;
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

	public boolean isFunction() {
		return isFunction;
	}

	public boolean isArray() {
		return isArray;
	}

	public boolean isClass() {
		return isClass;
	}

	public boolean isImport() {		
		return isImport;
	}
	
	public boolean isSpecifier() {
		return isSpecifier;
	}
	
	public String getFile() {
		return file;
	}

	public boolean isFile() {
		return !StringUtils.isEmpty(file);
	}

}
