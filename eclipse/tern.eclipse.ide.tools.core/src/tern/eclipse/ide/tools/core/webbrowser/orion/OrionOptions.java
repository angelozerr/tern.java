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
