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

import tern.server.ITernDef;

/**
 * Content provider for {@link ITernDef}.
 * 
 * @author azerr
 * 
 */
public class TernDefContentProvider implements IStructuredContentProvider {

	private final List<ITernDef> ternDefs;

	public TernDefContentProvider(List<ITernDef> ternDefs) {
		this.ternDefs = ternDefs;
	}

	public Object[] getElements(Object input) {
		return ternDefs.toArray();
	}

	public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {
	}

	public void dispose() {
	}

}
