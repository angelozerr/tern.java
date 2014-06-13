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

import org.eclipse.core.resources.IProject;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;

import tern.server.ITernFacet;

/**
 * Display information of tern facet.
 *
 */
public abstract class AbstractTernFacetPanel extends Composite {

	public AbstractTernFacetPanel(Composite parent, ITernFacet facet,
			IProject project) {
		super(parent, SWT.NONE);
		createUI(this, facet, project);
	}

	protected abstract void createUI(Composite parent, ITernFacet facet,
			IProject project);

}
