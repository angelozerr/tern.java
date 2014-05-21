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
package tern.eclipse.ide.ui.viewers;

import java.util.List;

import org.eclipse.jface.viewers.IStructuredContentProvider;
import org.eclipse.jface.viewers.Viewer;

import tern.server.ITernFacet;
import tern.server.ITernPlugin;

/**
 * Content provider for {@link ITernPlugin} and {@link ITernFacet}.
 * 
 */
public class TernFacetContentProvider implements IStructuredContentProvider {

	private final List<ITernFacet> ternFacets;

	public TernFacetContentProvider(List<ITernFacet> ternFacets) {
		this.ternFacets = ternFacets;
	}

	public Object[] getElements(Object input) {
		return ternFacets.toArray();
	}

	public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {
	}

	public void dispose() {
	}

}
