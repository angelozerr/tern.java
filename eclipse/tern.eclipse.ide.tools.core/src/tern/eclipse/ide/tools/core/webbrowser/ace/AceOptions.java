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
