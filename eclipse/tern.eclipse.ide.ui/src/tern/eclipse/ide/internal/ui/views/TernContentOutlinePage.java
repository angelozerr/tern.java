package tern.eclipse.ide.internal.ui.views;

import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.views.contentoutline.ContentOutlinePage;

import tern.eclipse.ide.core.resources.TernDocumentFile;

public class TernContentOutlinePage extends ContentOutlinePage {

	private final TernDocumentFile ternFile;

	public TernContentOutlinePage(TernDocumentFile ternFile) {
		this.ternFile = ternFile;
	}

	@Override
	public void createControl(Composite parent) {
		super.createControl(parent);
		getTreeViewer().setContentProvider(new TernExplorerContentProvider());
		getTreeViewer().setLabelProvider(new TernExplorerLabelProvider());

		getTreeViewer().setInput(ternFile);
	}
	

}
