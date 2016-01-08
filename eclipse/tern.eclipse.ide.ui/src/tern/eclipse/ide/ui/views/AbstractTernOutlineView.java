/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.views;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.jface.text.IDocument;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IMemento;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.navigator.CommonViewer;
import org.eclipse.ui.part.IPage;
import org.eclipse.ui.part.IPageBookViewPage;
import org.eclipse.ui.texteditor.ITextEditor;
import org.eclipse.ui.views.contentoutline.ContentOutline;
import org.eclipse.ui.views.contentoutline.IContentOutlinePage;

import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.protocol.outline.IJSNode;
import tern.server.protocol.outline.TernOutlineCollector;

/**
 * Abstract class for tern outline view.
 *
 */
public abstract class AbstractTernOutlineView extends ContentOutline {

	public static final int IS_LINKING_ENABLED_PROPERTY = 0;

	private ITextEditor textEditor;

	protected IMemento memento;

	private String LINKING_ENABLED = "AbstractTernOutlineView.LINKING_ENABLED"; //$NON-NLS-1$
	private boolean linkingEnabled = false;

	boolean ignoreEditorActivation;
	boolean ignoreSelectionChanged;

	// ----------- Jobs

	// Job which is executed when the treeview of the tern outline is clicked to
	// select the well content of the active JavaScript Editor.
	private ActivateEditorJob activateEditorJob = new ActivateEditorJob(this);
	// Job which is executed when there is a selection inside JavaScript Editor
	// to select the well node in the tern outline.
	private final UpdateSelectionJob updateSelectionJob = new UpdateSelectionJob(this);
	private final RefreshOutlineJob refreshJob = new RefreshOutlineJob(this);

	@Override
	protected PageRec doCreatePage(IWorkbenchPart part) {
		IFile file = getFile(part);
		if (file == null) {
			// The opened file in the given editor cannot be displayed in the
			// outline
			return null;
		}

		// Try to get the shared outline for the given project (ex : for angular
		// explorer)
		IProject project = file.getProject();
		IContentOutlinePage page = getOutlinePage(project);
		if (page == null) {
			// Create a new instance of the outline page
			page = createOutlinePage(file.getProject());
			if (page != null) {
				if (page instanceof IPageBookViewPage) {
					initPage((IPageBookViewPage) page);
				}
				page.createControl(getPageBook());
				if (page instanceof AbstractTernContentOutlinePage) {
					updateCurrentFile(page, part, file);
				}
			}
		} else {
			if (page instanceof AbstractTernContentOutlinePage) {
				updateCurrentFile(page, part, file);
			}
		}

		if (page != null) {
			return new PageRec(part, page);
		}

		// There is no content outline
		return null;
	}

	@Override
	protected void showPageRec(PageRec pageRec) {
		IPage page = pageRec.page;
		IWorkbenchPart part = pageRec.part;
		if (page instanceof AbstractTernContentOutlinePage) {
			IFile file = getFile(part);
			if (file != null) {
				updateCurrentFile(page, part, file);
			}
		}
		super.showPageRec(pageRec);
	}

	/**
	 * Returns the shared outline page for the given project or null if a page
	 * must be created for each file.
	 * 
	 * @param project
	 * @return the shared outline page for the given project or null if a page
	 *         must be created for each file.
	 */
	protected IContentOutlinePage getOutlinePage(IProject project) {
		return null;
	}

	protected IFile getFile(IWorkbenchPart part) {
		if (part != null && part instanceof IEditorPart) {
			IFile file = EditorUtils.getFile((IEditorPart) part);
			if (file != null && isAdaptFor(file)) {
				return file;
			}
		}
		return null;
	}

	@Override
	public void init(IViewSite aSite, IMemento aMemento) throws PartInitException {
		super.init(aSite, aMemento);
		memento = aMemento;
		if (memento != null) {
			Integer linkingEnabledInteger = memento.getInteger(LINKING_ENABLED);
			setLinkingEnabled(((linkingEnabledInteger != null) ? linkingEnabledInteger.intValue() == 1 : false));
		}

	}

	@Override
	public void saveState(IMemento aMemento) {
		aMemento.putInteger(LINKING_ENABLED, (linkingEnabled) ? 1 : 0);
		super.saveState(aMemento);
	}

	public boolean isLinkingEnabled() {
		return linkingEnabled;
	}

	public void setLinkingEnabled(boolean linkingEnabled) {
		this.linkingEnabled = linkingEnabled;
	}

	private void updateCurrentFile(IPage page, IWorkbenchPart part, IFile file) {
		if (isEditorChanged(part)) {
			((AbstractTernContentOutlinePage) page).setCurrentFile(file);
			this.setCurrentPart(part);
		}
	}

	protected boolean isEditorChanged(IWorkbenchPart part) {
		return this.textEditor != part;
	}

	private void setCurrentPart(IWorkbenchPart part) {
		if (part instanceof ITextEditor) {
			this.textEditor = (ITextEditor) part;
		} else {
			this.textEditor = null;
		}
		updateSelectionJob.setCurrentPart(part);
	}

	public void openInEditor(IJSNode node, boolean force) {
		activateEditorJob.openInEditor(node, force);
	}

	/**
	 * Returns the current tern outline page and null otherwise.
	 * 
	 * @return the current tern outline page and null otherwise.
	 */
	AbstractTernContentOutlinePage getCurrentTernPage() {
		IPage p = getCurrentPage();
		if (p == null || !(p instanceof AbstractTernContentOutlinePage)) {
			return null;
		}
		AbstractTernContentOutlinePage page = (AbstractTernContentOutlinePage) p;
		return page;
	}

	/**
	 * Returns the viewer of the current tern outline page and null otherwise.
	 * 
	 * @return the viewer of the current tern outline page and null otherwise.
	 */
	CommonViewer getCurrentViewer() {
		AbstractTernContentOutlinePage page = getCurrentTernPage();
		return page != null ? page.getViewer() : null;
	}

	@Override
	public void dispose() {
		super.dispose();
		activateEditorJob.cancel();
		updateSelectionJob.dispose();
		refreshJob.cancel();
	}

	/**
	 * Refresh the outline tree in a job.
	 */
	public void refreshOutline() {
		refreshJob.refreshOutline();
	}

	/**
	 * Returns true if the outline view is adapted for the given file and false
	 * otherwise.
	 * 
	 * @param file
	 * @return true if the outline view is adapted for the given file and false
	 *         otherwise.
	 */
	protected abstract boolean isAdaptFor(IFile file);

	/**
	 * Create the outline view for the given project. It can have one page per
	 * file (see tern outline) or one page per project (see angular outline).
	 * 
	 * @param project
	 * @return an instance of outline page for the given project.
	 */
	protected abstract IContentOutlinePage createOutlinePage(IProject project);

	public abstract TernOutlineCollector loadOutline(IFile file, IDocument document) throws Exception;

	public abstract boolean isOutlineAvailable(IFile file);

}
