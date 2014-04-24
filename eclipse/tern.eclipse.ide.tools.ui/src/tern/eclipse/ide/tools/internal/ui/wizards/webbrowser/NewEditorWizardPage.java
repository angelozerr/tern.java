package tern.eclipse.ide.tools.internal.ui.wizards.webbrowser;

import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.core.utils.FileUtils;
import tern.eclipse.ide.tools.core.webbrowser.EditorOptions;
import tern.eclipse.ide.tools.internal.ui.wizards.NewFileWizardPage;

public abstract class NewEditorWizardPage<T extends EditorOptions> extends
		NewFileWizardPage<T> {

	public NewEditorWizardPage(String pageName) {
		super(pageName, FileUtils.HTML_EXTENSION);
	}

	@Override
	protected void initialize() {
		super.initialize();
		getFileText().setText("index.html");
	}

	@Override
	protected void updateModel(T options) {
		// options.setBaseURL("http://codemirror.net/");
		// options.setTernBaseURL("http://ternjs.net/");
		// options.setBaseURL("file://C:/Documents and Settings/azerr/git/tern.java/core/tern.server.nodejs/node_modules/tern/node_modules/codemirror/");
		// options.setTernBaseURL("file://C:/Documents and Settings/azerr/git/tern.java/core/tern.server.nodejs/node_modules/tern/");
		options.setEditorContent("var elt = document.getElementById('xxx');");
	}

	@Override
	protected void createBody(Composite container) {
		super.createBody(container);
	}
}
