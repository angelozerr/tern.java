/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.utils;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerFilter;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.dialogs.SelectionDialog;
import org.eclipse.ui.model.WorkbenchContentProvider;
import org.eclipse.ui.model.WorkbenchLabelProvider;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.dialogs.FolderSelectionDialog;
import tern.utils.StringUtils;

public class DialogUtils {

	public static IResource openFolderDialog(String initialFolder,
			IProject project, boolean showAllProjects, Shell shell) {
		SelectionDialog dialog = createFolderDialog(initialFolder, project,
				showAllProjects, shell);
		if (dialog.open() != Window.OK) {
			return null;
		}
		Object[] results = dialog.getResult();
		if (results != null && results.length > 0) {
			return (IResource) results[0];
		}
		return null;
	}

	private static SelectionDialog createFolderDialog(String initialFolder,
			final IProject project, final boolean showAllProjects, Shell shell) {

		ILabelProvider lp = new WorkbenchLabelProvider();
		ITreeContentProvider cp = new WorkbenchContentProvider();
		FolderSelectionDialog dialog = new FolderSelectionDialog(shell, lp, cp);
		dialog.setTitle(TernUIMessages.TernModuleOptionsPanel_selectPathDialogTitle);
		IFolder folder = StringUtils.isEmpty(initialFolder) ? null : project
				.getFolder(initialFolder);
		if (folder != null && folder.exists()) {
			dialog.setInitialSelection(folder);
		}
		dialog.setInput(ResourcesPlugin.getWorkspace().getRoot());
		ViewerFilter filter = new ViewerFilter() {

			@Override
			public boolean select(Viewer viewer, Object parentElement,
					Object element) {
				if (element instanceof IProject) {
					if (showAllProjects)
						return true;
					IProject p = (IProject) element;
					return (p.equals(project));
				} else if (element instanceof IContainer) {
					IContainer container = (IContainer) element;
					if (container.getType() == IResource.FOLDER) {
						return true;
					}
					return false;
				}
				return false;
			}
		};
		dialog.addFilter(filter);
		return dialog;
	}

}
