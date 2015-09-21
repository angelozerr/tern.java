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
package tern.server;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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

	private final String[] ACORN_SCRIPTS = {
			"acorn/dist/acorn.js",
			"acorn/dist/acorn_loose.js",
			"acorn/dist/walk.js" };

	private final String[] TERN_SCRIPTS = { "tern/lib/signal.js", "tern/lib/tern.js",
			"tern/lib/def.js", "tern/lib/comment.js", "tern/lib/infer.js" };

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

	@Override
	public void addDef(ITernDef def) throws TernException {
		getProject().addLib(def);
	}

	@Override
	public void addPlugin(ITernPlugin plugin) throws TernException {
		getProject().addPlugin(plugin);
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
				scripts.add(getResource(new File(repository.getNodeModulesDir(),
						ACORN_SCRIPTS[i])));
			}
			// Load ternjs
			for (int i = 0; i < TERN_SCRIPTS.length; i++) {
				scripts.add(getResource(new File(repository.getNodeModulesDir(),
						TERN_SCRIPTS[i])));
			}
			// Load defs
			JsonArray libs = getProject().getLibs();
			if (libs != null) {
				ITernModule module = null;
				File defFile = null;
				for (JsonValue lib : libs) {
					module = repository.getModule(lib.asString());
					if (module != null) {
						defFile = repository.getFile(module);
						if (defFile != null && defFile.exists()) {
							defs.add(getResource(defFile));
						}
					}
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

	// protected abstract void addDef(String def);

	protected TernResource getResource(File scriptFile) throws IOException {
		// Use FileInputStream (instead of FileReader) to set encoding to UTF-8,
		// to avoid exception of acorn.js loading :
		// ternjs\node_modules\tern\node_modules\acorn\dist\acorn.js:877:
		// SyntaxError: Invalid regular expression:
		// /[ÂªÂµÂºÃ€-Ã–Ã˜-Ã¶Ã¸-Ë?Ë†-Ë‘Ë -Ë¤Ë¬Ë®Í°-Í´Í¶Í·Íº-Í½Í¿Î†Îˆ-ÎŠÎŒÎŽ-Î¡Î£-ÏµÏ·-Ò?ÒŠ-Ô¯Ô±-Õ–Õ™Õ¡-Ö‡×?-×ª×°-×²Ø -ÙŠÙ®Ù¯Ù±-Û“Û•Û¥Û¦Û®Û¯Ûº-Û¼Û¿Ü?Ü’-Ü¯Ý?-Þ¥Þ±ßŠ-ßªß´ßµßºà €-à •à šà ¤à ¨à¡€-à¡˜à¢ -à¢²à¤„-à¤¹à¤½à¥?à¥˜-à¥¡à¥±-à¦€à¦…-à¦Œà¦?à¦?à¦“-à¦¨à¦ª...<omitted>...œ]/:
		// Range out of order in character class
		String script = getScriptContent(scriptFile);
		String filename = getFilename(scriptFile);
		return new TernResource(script, filename);
	}

	protected String getScriptContent(File scriptFile) throws IOException,
			FileNotFoundException {
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
