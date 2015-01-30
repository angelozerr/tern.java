/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.protocol.type;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.type.ITernTypeCollector;

public class MockTernTypeCollector implements ITernTypeCollector {

	private String type;
	private boolean guess;
	private String name;
	private String exprName;
	private String doc;
	private String url;
	private String origin;
	private Object item;
	private IJSONObjectHelper objectHelper;

	@Override
	public void setType(String type, boolean guess, String name,
			String exprName, String doc, String url, String origin,
			Object item, IJSONObjectHelper objectHelper) {
		this.type = type;
		this.guess = guess;
		this.name = name;
		this.exprName = exprName;
		this.doc = doc;
		this.url = url;
		this.origin = origin;
		this.item = item;
		this.objectHelper = objectHelper;
	}

	public String getType() {
		return type;
	}

	public boolean isGuess() {
		return guess;
	}

	public String getName() {
		return name;
	}

	public String getExprName() {
		return exprName;
	}

	public String getDoc() {
		return doc;
	}

	public String getUrl() {
		return url;
	}

	public String getOrigin() {
		return origin;
	}

	public Object getItem() {
		return item;
	}

	public IJSONObjectHelper getObjectHelper() {
		return objectHelper;
	}
	
}
