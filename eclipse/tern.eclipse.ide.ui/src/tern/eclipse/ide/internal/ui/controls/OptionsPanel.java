/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.ui.controls;

import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.internal.ui.descriptors.TernDescriptorManager;
import tern.server.ITernFacet;

/**
 * Content of the "Options" Tab of tern facet selection.
 *
 */
public class OptionsPanel extends AbstractPanel {

	public OptionsPanel(Composite parent) {
		super(parent);
	}

	@Override
	protected void createEmptyBodyContent(Composite parent) {

	}

	@Override
	protected Composite createContent(Composite parent, ITernFacet facet) {
		return TernDescriptorManager.getManager().createOptionsPanel(parent,
				facet);
	}
}
