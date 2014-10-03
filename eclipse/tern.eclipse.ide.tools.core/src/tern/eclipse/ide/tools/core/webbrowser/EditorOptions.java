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
package tern.eclipse.ide.tools.core.webbrowser;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import tern.eclipse.ide.tools.core.generator.Options;
import tern.eclipse.ide.tools.internal.core.TernToolsCorePlugin;
import tern.server.ITernDef;
import tern.server.ITernPlugin;
import tern.utils.IOUtils;

public class EditorOptions extends Options {

	private ITernDef[] ternDefs;
	private TernDefLoaderType ternDefLoaderType;

	private ITernPlugin[] ternPlugins;

	private String ternBaseURL;
	private String baseURL;

	private String editorContent;
	private final EditorType type;

	public EditorOptions(EditorType type) {
		this.type = type;
		this.ternDefLoaderType = TernDefLoaderType.EmbedDefInHTML;
	}

	public EditorType getType() {
		return type;
	}

	public TernDefLoaderType getTernDefLoaderType() {
		return ternDefLoaderType;
	}

	public void setTernDefLoaderType(TernDefLoaderType ternDefLoaderType) {
		this.ternDefLoaderType = ternDefLoaderType;
	}

	public String getEditorContent() {
		return editorContent;
	}

	public void setEditorContent(String editorContent) {
		this.editorContent = editorContent;
	}

	public String getTernBaseURL() {
		return ternBaseURL;
	}

	public void setTernBaseURL(String ternBaseURL) {
		this.ternBaseURL = ternBaseURL;
	}

	public String getBaseURL() {
		return baseURL;
	}

	public void setBaseURL(String baseURL) {
		this.baseURL = baseURL;
	}

	public String resolve(String uri) {
		if (baseURL == null) {
			try {
				return TernToolsCorePlugin.getEditorURL(type, uri);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return resolve(baseURL, uri);
	}

	public String resolveTern(String uri) {
		return resolve(ternBaseURL, uri);
	}

	public String resolveTernDef(String uri) {
		return resolve(ternBaseURL, "defs/" + uri);
	}

	public String resolveTernPlugin(String uri) {
		return resolve(ternBaseURL, uri);
	}

	private String resolve(String baseURL, String uri) {
		if (baseURL == null) {
			try {
				return TernToolsCorePlugin.getTernURL(uri);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return baseURL + uri;
	}

	public ITernDef[] getTernDefs() {
		return ternDefs;
	}

	public void setTernDefs(ITernDef[] ternDefs) {
		this.ternDefs = ternDefs;
	}

	public ITernPlugin[] getTernPlugins() {
		return ternPlugins;
	}

	public String toJSONDefs() {
		StringBuilder json = new StringBuilder("[");
		if (ternDefs != null) {
			boolean hasQuote = isLoadDefWithAjax();
			ITernDef def = null;
			for (int i = 0; i < ternDefs.length; i++) {
				def = ternDefs[i];
				if (i > 0) {
					json.append(",");
				}
				if (hasQuote) {
					json.append("\"");
				}
				json.append(def.getName());
				if (hasQuote) {
					json.append("\"");
				}
			}
		}
		json.append("]");
		return json.toString();
	}

	public String toJSONPlugins() {
		StringBuilder json = new StringBuilder("{");
		if (ternPlugins != null) {
			ITernPlugin plugin = null;
			for (int i = 0; i < ternPlugins.length; i++) {
				plugin = ternPlugins[i];
				if (i > 0) {
					json.append(",");
				}
				json.append("\"");
				json.append(plugin.getName());
				json.append("\"");
				json.append(":\"../\"");
			}
		}
		json.append("}");
		return json.toString();

	}

	public void setTernPlugins(ITernPlugin[] ternPlugins) {
		this.ternPlugins = ternPlugins;
	}

	public String getEmbedJSONDefs() {
		if (ternDefs != null && isEmbedDefInHTML()) {
			StringBuilder js = new StringBuilder();
			js.append("<script>");
			ITernDef def = null;
			for (int i = 0; i < ternDefs.length; i++) {
				def = ternDefs[i];
				String url = resolveTernDef(def.getName() + ".json");
				if (url.startsWith("file:/")) {
					File f = new File(url.substring("file:/".length(),
							url.length()));
					try {
						String json = IOUtils.toString(new FileReader(f));
						js.append("\nvar ");
						js.append(def.getName());
						js.append("=");
						js.append(json);
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			}
			js.append("</script>");
			return js.toString();
		}
		return null;
	}
	
	public String getTernDefsScriptsToInclude() {
		if (ternDefs != null && isEmbedDefInJS()) {
			
		}
		return null;
	}

	public boolean isLoadDefWithAjax() {
		return TernDefLoaderType.LoadDefWithAjax.equals(ternDefLoaderType);
	}

	public boolean isEmbedDefInHTML() {
		return TernDefLoaderType.EmbedDefInHTML.equals(ternDefLoaderType);
	}

	public boolean isEmbedDefInJS() {
		return TernDefLoaderType.EmbedDefInJS.equals(ternDefLoaderType);
	}
}
