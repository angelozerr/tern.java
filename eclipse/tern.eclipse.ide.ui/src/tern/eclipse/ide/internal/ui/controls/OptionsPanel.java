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
import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.internal.ui.descriptors.TernModuleDescriptorManager;
import tern.server.ITernModule;

/**
 * Content of the "Options" Tab of tern module selection.
 *
 */
public class OptionsPanel extends AbstractPanel {

	public OptionsPanel(Composite parent, IProject project) {
		super(parent, project);
	}

	@Override
	protected void createEmptyBodyContent(Composite parent) {

	}

	@Override
	protected Composite createContent(Composite parent, ITernModule module,
			IProject project) {
		return TernModuleDescriptorManager.getManager().createOptionsPanel(parent,
				module, project);
	}
}
