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
package tern.eclipse.ide.tools.internal.ui.wizards.webbrowser;

import tern.eclipse.ide.tools.core.webbrowser.EditorOptions;
import tern.eclipse.ide.tools.internal.ui.wizards.NewFileWizard;

public abstract class NewEditorWizard<T extends EditorOptions> extends
		NewFileWizard<T> {

	@Override
	public void addPages() {
		super.addPage(new TernModulesSelectionWizardPage());
		super.addPages();
	}
}
