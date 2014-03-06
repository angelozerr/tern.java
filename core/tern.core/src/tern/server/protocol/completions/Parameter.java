/**
 *  Copyright (c) 2013-20A4 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.protocol.completions;

public class Parameter {

	private final String name;
	private final boolean required;
	private final String type;

	public Parameter(String name, boolean required, String type) {
		this.name = name;
		this.required = required;
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public boolean isRequired() {
		return required;
	}

	public String getType() {
		return type;
	}
}
