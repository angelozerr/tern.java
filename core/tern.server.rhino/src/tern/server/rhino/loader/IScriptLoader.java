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
