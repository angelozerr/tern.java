package tern.eclipse.ide.tools.core.webbrowser;

import tern.eclipse.ide.tools.core.generator.Options;

public class EditorOptions extends Options {
	private String ternBaseURL;
	private String baseURL;

	private String editorContent;

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
		return baseURL + uri;
	}

	public String resolveTern(String uri) {
		return ternBaseURL + uri;
	}

}
