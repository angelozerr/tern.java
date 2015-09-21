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
package tern.eclipse.ide.internal.ui.controls;

import org.eclipse.core.resources.IProject;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;

import tern.server.ITernModule;

/**
 * Abstract class for panel.
 *
 */
public abstract class AbstractPanel extends Composite {

	private final IProject project;
	private Composite content;

	public AbstractPanel(Composite parent, IProject project) {
		super(parent, SWT.NONE);
		this.project = project;
		GridLayout layout = new GridLayout();
		super.setLayout(layout);
	}

	/**
	 * Refresh content of the details panel with the given tern module.
	 * 
	 * @param module
	 */
	public void refresh(ITernModule module) {
		if (this.content != null) {
			// dispose old content of the last selected module.
			this.content.dispose();
		}

		if (module == null) {
			// none module are selected, create empty body content
			this.content = new Composite(this, SWT.NONE);
			GridLayout layout = new GridLayout();
			this.content.setLayout(layout);

			createEmptyBodyContent(content);

		} else {
			// module is selected, display content of this module
			this.content = createContent(this, module, project);
		}
		this.content
				.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		super.layout();
	}

	protected abstract void createEmptyBodyContent(Composite parent);

	protected abstract Composite createContent(Composite parent,
			ITernModule module, IProject project);
}
