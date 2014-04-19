package tern.eclipse.ide.tools.core.webbrowser;

import java.io.IOException;

import tern.eclipse.ide.tools.core.generator.Options;
import tern.eclipse.ide.tools.internal.core.TernToolsCorePlugin;
import tern.server.ITernDef;
import tern.server.ITernPlugin;

public class EditorOptions extends Options {

	private boolean useLocalScripts;
	private boolean exportScripts;
	
	private ITernDef[] ternDefs;
	private boolean loadDefWithAjax;

	private ITernPlugin[] ternPlugins;

	private String ternBaseURL;
	private String baseURL;

	private String editorContent;
	private final EditorType type;

	public EditorOptions(EditorType type) {
		this.type = type;
	}

	public EditorType getType() {
		return type;
	}
	
	public void setExportScripts(boolean exportScripts) {
		this.exportScripts = exportScripts;
	}
	
	public boolean isExportScripts() {
		return exportScripts;
	}

	public boolean isUseLocalScripts() {
		return useLocalScripts;
	}

	public void setUseLocalScripts(boolean useLocalScripts) {
		this.useLocalScripts = useLocalScripts;
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

	public boolean isLoadDefWithAjax() {
		return loadDefWithAjax;
	}

	public void setLoadDefWithAjax(boolean loadDefWithAjax) {
		this.loadDefWithAjax = loadDefWithAjax;
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
		return resolve(ternBaseURL, uri);
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
			ITernDef def = null;
			for (int i = 0; i < ternDefs.length; i++) {
				def = ternDefs[i];
				if (i > 0) {
					json.append(",");
				}
				json.append("\"");
				json.append(def.getName());
				json.append("\"");
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

}
