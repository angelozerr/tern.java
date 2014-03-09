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
package tern.server.rhino.loader;

import java.io.IOException;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;

public interface IScriptLoader {

	void loadScript(Context cx, Scriptable ternScope, String src)
			throws IOException;
	
	void loadScript(Context cx, Scriptable ternScope, String src,
			String scriptToAddBefore, String scriptToAddAfter)
			throws IOException;

}
