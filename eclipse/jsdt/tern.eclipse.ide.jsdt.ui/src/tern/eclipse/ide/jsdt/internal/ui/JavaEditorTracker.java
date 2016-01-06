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
package tern.eclipse.ide.jsdt.internal.ui;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.Assert;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IEditorReference;
import org.eclipse.ui.IPageListener;
import org.eclipse.ui.IPartListener;
import org.eclipse.ui.IWindowListener;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.texteditor.ITextEditor;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.JavaEditor;
import org.eclipse.wst.sse.ui.internal.reconcile.DocumentRegionProcessor;

import tern.TernResourcesManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.utils.EditorUtils;

/**
 * JavaScript editor tracker.
 */
public class JavaEditorTracker implements IWindowListener, IPageListener,
		IPartListener {
	static JavaEditorTracker INSTANCE;

	Map<IEditorPart, JSDTDocumentRegionProcessor> fAsYouTypeValidators = new HashMap<IEditorPart, JSDTDocumentRegionProcessor>();

	private JavaEditorTracker() {
		init();
	}

	public static JavaEditorTracker getInstance() {
		if (INSTANCE == null) {
			INSTANCE = new JavaEditorTracker();
		}
		return INSTANCE;
	}

	private void init() {
		if (PlatformUI.isWorkbenchRunning()) {
			IWorkbench workbench = TernUIPlugin.getDefault().getWorkbench();
			if (workbench != null) {
				IWorkbenchWindow[] windows = workbench.getWorkbenchWindows();
				for (IWorkbenchWindow window : windows) {
					windowOpened(window);
				}
				TernUIPlugin.getDefault().getWorkbench()
						.addWindowListener(this);
			}
		}
	}

	@Override
	public void windowActivated(IWorkbenchWindow window) {
	}

	@Override
	public void windowDeactivated(IWorkbenchWindow window) {
	}

	@Override
	public void windowClosed(IWorkbenchWindow window) {
		IWorkbenchPage[] pages = window.getPages();
		for (IWorkbenchPage page : pages) {
			pageClosed(page);
		}
		window.removePageListener(this);
	}

	@Override
	public void windowOpened(IWorkbenchWindow window) {
		if (window.getShell() != null) {
			IWorkbenchPage[] pages = window.getPages();
			for (IWorkbenchPage page : pages) {
				pageOpened(page);
			}
			window.addPageListener(this);
		}
	}

	@Override
	public void pageActivated(IWorkbenchPage page) {
	}

	@Override
	public void pageClosed(IWorkbenchPage page) {
		IEditorReference[] rs = page.getEditorReferences();
		for (IEditorReference r : rs) {
			IEditorPart part = r.getEditor(false);
			if (part != null) {
				editorClosed(part);
			}
		}
		page.removePartListener(this);
	}

	@Override
	public void pageOpened(IWorkbenchPage page) {
		IEditorReference[] rs = page.getEditorReferences();
		for (IEditorReference r : rs) {
			IEditorPart part = r.getEditor(false);
			if (part != null) {
				editorOpened(part);
			}
		}
		page.addPartListener(this);
	}

	@Override
	public void partActivated(IWorkbenchPart part) {
	}

	@Override
	public void partBroughtToTop(IWorkbenchPart part) {
	}

	@Override
	public void partClosed(IWorkbenchPart part) {
		if (part instanceof IEditorPart) {
			editorClosed((IEditorPart) part);
		}
	}

	@Override
	public void partDeactivated(IWorkbenchPart part) {
	}

	@Override
	public void partOpened(IWorkbenchPart part) {
		if (part instanceof IEditorPart) {
			editorOpened((IEditorPart) part);
		}
	}

	private void editorOpened(IEditorPart part) {
		if (part instanceof JavaEditor) {
			IResource resource = EditorUtils.getResource(part);
			if (resource != null
					/*
					&& resource.getType() == IResource.FILE
					&& (TernResourcesManager.isJSFile(resource) || TernResourcesManager
							.isHTMLFile(resource))
					&& TernCorePlugin.hasTernNature(resource.getProject())*/) {
				ISourceViewer viewer = EditorUtils.getSourceViewer(part);
				if (viewer != null) {
					JSDTDocumentRegionProcessor processor = fAsYouTypeValidators
							.get(part);
					if (processor != null) {
						// Emulate editor closed due to uninstall the old
						// processor
						editorClosed(part);
						Assert.isTrue(null == fAsYouTypeValidators.get(part),
								"An old JavaDirtyRegionProcessor is not un-installed on Java Editor instance");
					}

					// try {
					processor = new JSDTDocumentRegionProcessor();
					processor.install(viewer);
					processor.setDocument(viewer.getDocument());
					processor.startReconciling();
					fAsYouTypeValidators.put(part, processor);
					/*
					 * } catch (CoreException e) { Trace.trace( Trace.SEVERE,
					 * "Error while getting tern project for validation.", e); }
					 */
				}
			}
		}
	}

	private void editorClosed(IEditorPart part) {
		if (part instanceof ITextEditor) {
			JSDTDocumentRegionProcessor processor = fAsYouTypeValidators
					.remove(part);
			if (processor != null) {
				processor.uninstall();
				Assert.isTrue(null == fAsYouTypeValidators.get(part),
						"An old JavaDirtyRegionProcessor is not un-installed on Java Editor instance");
			}
		}
	}
}