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
package tern.eclipse.ide.tools.core.webbrowser.orion;

import tern.eclipse.ide.tools.core.webbrowser.EditorOptions;
import tern.eclipse.ide.tools.core.webbrowser.EditorType;

public class OrionOptions extends EditorOptions {

	private String ternOrionBaseURL;

	public OrionOptions() {
		super(EditorType.orion);
	}

	public String getTernOrionBaseURL() {
		return ternOrionBaseURL;
	}

	public void setTernOrionBaseURL(String ternOrionBaseURL) {
		this.ternOrionBaseURL = ternOrionBaseURL;
	}

	public String resolveTernOrion(String uri) {
		if (ternOrionBaseURL == null) {
			return super.resolve("tern.orion/" + uri);
		}
		return ternOrionBaseURL + uri;
	}

}
