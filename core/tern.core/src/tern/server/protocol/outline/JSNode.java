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

import tern.ITernProject;

/**
 * JavaScript node used for the Outline.
 *
 */
public class JSNode extends BaseJSNode {

	private static final String FN_TYPE = "fn(";
	private static final String ARRAY_TYPE = "[";

	// ES6 kinds
	private static final String IMPORT_KIND = "import";
	private static final String SPECIFIER_KIND = "specifier";
	private static final String CLASS_KIND = "class";

	private final String type;	
	private final boolean isFunction;
	private final boolean isArray;

	// ES6
	private final boolean isClass;
	private final boolean isImport;
	private final boolean isSpecifier;

	public JSNode(String name, String type, String kind, Long start, Long end, String file, IJSNode parent) {
		super(name, kind, start, end, file, parent);
		this.type = type;		
		if (type != null) {
			isFunction = type.startsWith(FN_TYPE);
			isArray = type.startsWith(ARRAY_TYPE);
		} else {
			isFunction = false;
			isArray = false;
		}
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

	public String getType() {
		return type;
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

}
