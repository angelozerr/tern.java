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
package tern.eclipse.ide.tools.core.webbrowser.ace;

import tern.eclipse.ide.tools.core.webbrowser.EditorOptions;
import tern.eclipse.ide.tools.core.webbrowser.EditorType;

public class AceOptions extends EditorOptions {

	private String ternAceBaseURL;

	public AceOptions() {
		super(EditorType.ace);
	}

	public String getTernAceBaseURL() {
		return ternAceBaseURL;
	}

	public void setTernAceBaseURL(String ternAceBaseURL) {
		this.ternAceBaseURL = ternAceBaseURL;
	}

	public String resolveTernAce(String uri) {
		if (ternAceBaseURL == null) {
			return super.resolve("tern.ace/" + uri);
		}
		return ternAceBaseURL + uri;
	}

}
