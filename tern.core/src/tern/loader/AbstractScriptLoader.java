package tern.loader;

import java.io.IOException;
import java.io.Reader;
import java.io.StringReader;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;

import tern.internal.org.apache.commons.io.IOUtils;

public abstract class AbstractScriptLoader implements IScriptLoader {

	@Override
	public void loadScript(Context cx, Scriptable ternScope, String src)
			throws IOException {
		loadScript(cx, ternScope, src, null, null);
	}

	@Override
	public void loadScript(Context cx, Scriptable ternScope, String src,
			String scriptToAddBefore, String scriptToAddAfter)
			throws IOException {
		Reader reader = getReader(src);
		if (scriptToAddBefore != null || scriptToAddAfter != null) {
			StringBuilder script = new StringBuilder();
			if (scriptToAddBefore != null) {
				script.append(scriptToAddBefore);
			}
			script.append(IOUtils.toString(reader));
			if (scriptToAddAfter != null) {
				script.append(scriptToAddAfter);
			}
			reader = new StringReader(script.toString());
		}
		cx.evaluateReader(ternScope, reader, src, 1, null);
	}

	protected abstract Reader getReader(String src) throws IOException;

}
