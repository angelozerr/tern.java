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

import tern.server.ITernFacet;

/**
 * Content of the "Dependencies" Tab of tern facet selection.
 *
 */
public class DependenciesPanel extends AbstractPanel {

	public DependenciesPanel(Composite parent) {
		super(parent);
	}

	@Override
	protected void createEmptyBodyContent(Composite parent) {

	}

	@Override
	protected Composite createContent(Composite parent, ITernFacet facet) {
		return new TernFacetDependenciesPanel(parent, facet);
	}
}
