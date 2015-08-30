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
package tern.eclipse.ide.linter.ui.viewers;

import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.Viewer;

import tern.eclipse.ide.linter.core.ITernLinterConfig;
import tern.eclipse.ide.linter.core.ITernLinterOption;

/**
 * Tree content provider used to display option of {@link ITernLinterConfig} in a
 * tree.
 *
 */
public class LinterConfigContentProvider implements ITreeContentProvider {

	private static final LinterConfigContentProvider INSTANCE = new LinterConfigContentProvider();

	public static LinterConfigContentProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public void dispose() {

	}

	@Override
	public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {

	}

	@Override
	public Object[] getElements(Object element) {
		if (element instanceof ITernLinterOption) {
			return ((ITernLinterOption) element).getOptions().toArray();
		}
		return null;
	}

	@Override
	public Object[] getChildren(Object element) {
		return getElements(element);
	}

	@Override
	public Object getParent(Object element) {
		return null;
	}

	@Override
	public boolean hasChildren(Object element) {
		return getChildren(element).length > 0;
	}

}
