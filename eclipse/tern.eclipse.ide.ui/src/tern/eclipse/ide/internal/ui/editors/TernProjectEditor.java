/**
- *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.ui.editors;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.editors.text.TextEditor;
import org.eclipse.ui.forms.editor.FormEditor;

/**
 * A multi page editor to manage .tern-project file.
 *
 */
public class TernProjectEditor extends FormEditor {

	private TextEditor editor;
	
	@Override
	protected void addPages() {
		try {
			editor = new TextEditor();
			super.addPage(editor, super.getEditorInput());
		} catch (PartInitException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void doSave(IProgressMonitor monitor) {
		editor.doSave(monitor);
	}

	@Override
	public void doSaveAs() {
		editor.doSaveAs();
	}

	@Override
	public boolean isSaveAsAllowed() {
		return editor.isSaveAsAllowed();
	}

}
