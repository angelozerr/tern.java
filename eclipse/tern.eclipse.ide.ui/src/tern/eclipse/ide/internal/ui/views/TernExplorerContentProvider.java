package tern.eclipse.ide.internal.ui.views;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.jface.text.DocumentEvent;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IDocumentListener;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.progress.UIJob;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.server.TernPlugin;
import tern.server.protocol.outline.JSNode;
import tern.server.protocol.outline.TernOutlineCollector;
import tern.server.protocol.outline.TernOutlineQuery;

public class TernExplorerContentProvider implements ITreeContentProvider, IDocumentListener {

	private static final int UPDATE_DELAY = 200;
	private static final Object[] EMPTY_ARRAY = new Object[0];

	private Viewer viewer;

	@Override
	public Object[] getElements(Object element) {
		if (element instanceof TernDocumentFile) {
			try {
				TernDocumentFile ternFile = (TernDocumentFile) element;
				IIDETernProject ternProject = TernCorePlugin.getTernProject(ternFile.getFile().getProject());
				if (ternProject != null && ternProject.hasPlugin(TernPlugin.outline)) {
					TernOutlineQuery query = new TernOutlineQuery(ternFile.getFileName());
					TernOutlineCollector collector = new TernOutlineCollector();
					ternProject.request(query, ternFile, collector);
					return collector.getRoot().getChildren().toArray();
				}
			} catch (Exception e1) {
				e1.printStackTrace();
			}
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
		this.viewer = viewer;
		if ((oldInput != null) && (oldInput instanceof TernDocumentFile)) {
			IDocument document = ((TernDocumentFile) oldInput).getDocument();
			document.removeDocumentListener(this);
		}
		if ((newInput != null) && (newInput instanceof TernDocumentFile)) {
			IDocument document = ((TernDocumentFile) newInput).getDocument();
			document.addDocumentListener(this);
		}
	}

	@Override
	public void documentChanged(DocumentEvent event) {
		Job refresh = new UIJob(TernUIMessages.refreshOutline) {
			public IStatus runInUIThread(IProgressMonitor monitor) {
				Control refreshControl = viewer.getControl();
				if ((refreshControl != null) && !refreshControl.isDisposed()) {
					viewer.refresh();
				}
				return Status.OK_STATUS;
			}
		};
		refresh.setSystem(true);
		refresh.setPriority(Job.SHORT);
		refresh.schedule(UPDATE_DELAY);
	}

	@Override
	public void documentAboutToBeChanged(DocumentEvent event) {

	}

}
