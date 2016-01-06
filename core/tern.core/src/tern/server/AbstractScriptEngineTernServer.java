/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import tern.EcmaVersion;
import tern.ITernProject;
import tern.TernException;
import tern.repository.ITernRepository;
import tern.utils.IOUtils;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * Abstract class for tern server implemented with a script engine.
 *
 */
public abstract class AbstractScriptEngineTernServer extends AbstractTernServer {

	private final String[] ACORN_SCRIPTS = { "acorn/dist/acorn.js", "acorn/dist/acorn_loose.js", "acorn/dist/walk.js" };

	private final String[] TERN_SCRIPTS = { "tern/lib/signal.js", "tern/lib/tern.js", "tern/lib/def.js",
			"tern/lib/comment.js", "tern/lib/infer.js" };

	protected class TernResource {

		private final String content;
		private final String filename;

		public TernResource(String content, String filename) {
			this.content = content;
			this.filename = filename;
		}

		public String getContent() {
			return content;
		}

		public String getFilename() {
			return filename;
		}
	}

	protected class TernResources {

		private final List<TernResource> scripts;
		private final List<TernResource> defs;

		public TernResources(List<TernResource> scripts, List<TernResource> defs) {
			this.scripts = scripts;
			this.defs = defs;
		}

		public List<TernResource> getScripts() {
			return scripts;
		}

		public List<TernResource> getDefs() {
			return defs;
		}

		public String getDefsAsString() {
			StringBuilder s = new StringBuilder();
			for (int i = 0; i < defs.size(); i++) {
				if (i > 0) {
					s.append(",");
				}
				s.append(defs.get(i).getContent());
			}
			return s.toString();
		}
	}

	public AbstractScriptEngineTernServer(ITernProject project) {
		super(project);
	}

	protected TernResources loadTern() throws TernException {
		ITernRepository repository = getProject().getRepository();
		if (repository == null) {
			throw new TernException("Tern repository must be initialized.");
		}
		try {

			List<TernResource> scripts = new ArrayList<TernResource>();
			List<TernResource> defs = new ArrayList<TernResource>();

			// Load acorn
			for (int i = 0; i < ACORN_SCRIPTS.length; i++) {
				scripts.add(getResource(new File(repository.getNodeModulesDir(), ACORN_SCRIPTS[i])));
			}
			// Load ternjs
			for (int i = 0; i < TERN_SCRIPTS.length; i++) {
				scripts.add(getResource(new File(repository.getNodeModulesDir(), TERN_SCRIPTS[i])));
			}
			// load ECMAScript defs
			EcmaVersion ecmaVersion = super.getProject().getEcmaVersion();
			if (ecmaVersion == null) {
				ecmaVersion = EcmaVersion.ES5;
			}
			switch (ecmaVersion) {
			case ES5:
				addDef(TernDef.ecma5.getName(), repository, defs, false);
				break;
			case ES6:
				addDef(TernDef.ecma5.getName(), repository, defs, false);
				addDef(TernDef.ecma6.getName(), repository, defs, false);
				break;
			}

			// Load defs
			JsonArray libs = getProject().getLibs();
			if (libs != null) {
				for (JsonValue lib : libs) {
					addDef(lib.asString(), repository, defs, true);
				}
			}
			// Load plugins
			JsonObject plugins = getProject().getPlugins();
			if (plugins != null) {
				ITernModule module = null;
				File pluginFile = null;
				List<String> names = plugins.names();
				for (String name : names) {
					module = repository.getModule(name);
					if (module != null) {
						pluginFile = repository.getFile(module);
						if (pluginFile != null && pluginFile.exists()) {
							scripts.add(getResource(pluginFile));
						}
					}
				}
			}
			return new TernResources(scripts, defs);
		} catch (IOException e) {
			throw new TernException(e);
		}
	}

	protected void addDef(String def, ITernRepository repository, List<TernResource> defs, boolean ignoreEcma)
			throws IOException {
		if (ignoreEcma && (def.equals(TernDef.ecma5.getName()) || def.equals(TernDef.ecma6.getName()))) {
			return;
		}
		ITernModule module = repository.getModule(def);
		if (module != null) {
			File defFile = repository.getFile(module);
			if (defFile != null && defFile.exists()) {
				defs.add(getResource(defFile));
			}
		}
	}

	protected TernResource getResource(File scriptFile) throws IOException {
		// Use FileInputStream (instead of FileReader) to set encoding to UTF-8,
		// to avoid exception of acorn.js loading :
		// ternjs\node_modules\tern\node_modules\acorn\dist\acorn.js:877:
		// SyntaxError: Invalid regular expression:
		// /[Ã‚ÂªÃ‚ÂµÃ‚ÂºÃƒâ‚¬-Ãƒâ€“ÃƒËœ-ÃƒÂ¶ÃƒÂ¸-Ã‹?Ã‹â€ -Ã‹â€˜Ã‹Â -Ã‹Â¤Ã‹Â¬Ã‹Â®Ã�Â°-Ã�Â´Ã�Â¶Ã�Â·Ã�Âº-Ã�Â½Ã�Â¿ÃŽâ€ ÃŽË†-ÃŽÅ ÃŽÅ’ÃŽÅ½-ÃŽÂ¡ÃŽÂ£-Ã�ÂµÃ�Â·-Ã’?Ã’Å -Ã”Â¯Ã”Â±-Ã•â€“Ã•â„¢Ã•Â¡-Ã–â€¡Ã—?-Ã—ÂªÃ—Â°-Ã—Â²Ã˜Â -Ã™Å Ã™Â®Ã™Â¯Ã™Â±-Ã›â€œÃ›â€¢Ã›Â¥Ã›Â¦Ã›Â®Ã›Â¯Ã›Âº-Ã›Â¼Ã›Â¿Ãœ?Ãœâ€™-ÃœÂ¯Ã�?-ÃžÂ¥ÃžÂ±ÃŸÅ -ÃŸÂªÃŸÂ´ÃŸÂµÃŸÂºÃ Â â‚¬-Ã Â â€¢Ã Â Å¡Ã Â Â¤Ã Â Â¨Ã Â¡â‚¬-Ã Â¡ËœÃ Â¢Â -Ã Â¢Â²Ã Â¤â€ž-Ã Â¤Â¹Ã Â¤Â½Ã Â¥?Ã Â¥Ëœ-Ã Â¥Â¡Ã Â¥Â±-Ã Â¦â‚¬Ã Â¦â€¦-Ã Â¦Å’Ã Â¦?Ã Â¦?Ã Â¦â€œ-Ã Â¦Â¨Ã Â¦Âª...<omitted>...Å“]/:
		// Range out of order in character class
		String script = getScriptContent(scriptFile);
		String filename = getFilename(scriptFile);
		return new TernResource(script, filename);
	}

	protected String getScriptContent(File scriptFile) throws IOException, FileNotFoundException {
		return IOUtils.toString(new FileInputStream(scriptFile), "UTF-8");
	}

	protected String getFilename(File scriptFile) {
		try {
			return scriptFile.getCanonicalPath().toString();
		} catch (Throwable e) {
			return scriptFile.getPath().toString();
		}
	}

}
