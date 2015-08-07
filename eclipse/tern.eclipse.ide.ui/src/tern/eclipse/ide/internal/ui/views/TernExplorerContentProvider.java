package tern.eclipse.ide.internal.ui.views;

import org.eclipse.jface.text.DocumentEvent;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IDocumentListener;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.Viewer;

import tern.server.protocol.outline.JSNode;

public class TernExplorerContentProvider implements ITreeContentProvider, IDocumentListener {

	private static final Object[] EMPTY_ARRAY = new Object[0];

	private final TernContentOutlinePage outlinePage;

	public TernExplorerContentProvider(TernContentOutlinePage outlinePage) {
		this.outlinePage = outlinePage;
	}

	@Override
	public Object[] getElements(Object element) {
		if (element instanceof TernOutline) {
			return ((TernOutline) element).getRoot().getChildren().toArray();
		} else if (element instanceof JSNode) {
			return ((JSNode) element).getChildren().toArray();
		}
		return EMPTY_ARRAY;
	}

	@Override
	public Object[] getChildren(Object element) {
		return getElements(element);
	}

	@Override
	public Object getParent(Object element) {
		if (element instanceof JSNode) {
			return ((JSNode) element).getParent();
		}
		return null;
	}

	@Override
	public boolean hasChildren(Object element) {
		if (element instanceof JSNode) {
			return ((JSNode) element).hasChidren();
		}
		return false;
	}

	@Override
	public void dispose() {

	}

	@Override
	public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {
		if ((oldInput != null) && (oldInput instanceof TernOutline)) {
			IDocument document = ((TernOutline) oldInput).getTernFile().getDocument();
			document.removeDocumentListener(this);
		}
		if ((newInput != null) && (newInput instanceof TernOutline)) {
			IDocument document = ((TernOutline) newInput).getTernFile().getDocument();
			document.addDocumentListener(this);
		}
	}

	@Override
	public void documentChanged(DocumentEvent event) {
		
	}

	@Override
	public void documentAboutToBeChanged(DocumentEvent event) {
		outlinePage.refreshOutline();
	}

}
