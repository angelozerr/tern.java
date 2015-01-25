/**
 *  Copyright (c) 2013-present Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.core;

import com.eclipsesource.json.JsonObject;

public class DefaultTernModule {

	private final String name;
	private final boolean withDependencies;
	private final JsonObject options;

	public DefaultTernModule(String name) {
		this(name, true);
	}

	public DefaultTernModule(String name, boolean withDependencies) {
		this(name, withDependencies, null);
	}

	public DefaultTernModule(String name, boolean withDependencies,
			JsonObject options) {
		this.name = name;
		this.withDependencies = withDependencies;
		this.options = options;
	}

	public String getName() {
		return name;
	}

	public boolean isWithDependencies() {
		return withDependencies;
	}

	public JsonObject getOptions() {
		return options;
	}
}
