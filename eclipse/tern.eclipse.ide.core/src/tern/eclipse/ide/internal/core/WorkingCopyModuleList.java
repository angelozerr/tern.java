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
package tern.eclipse.ide.internal.core;

import java.util.ArrayList;
import java.util.List;

import tern.eclipse.ide.core.IWorkingCopyListener;
import tern.server.ITernModule;

/**
 * List of tern modules which fire
 * {@link IWorkingCopyListener#moduleSelectionChanged(ITernModule, boolean)}
 * when a tern module is added or removed.
 */
public class WorkingCopyModuleList extends ArrayList<ITernModule> {

	private final WorkingCopy workingCopy;

	public WorkingCopyModuleList(WorkingCopy workingCopy,
			List<ITernModule> modules) {
		super(modules);
		this.workingCopy = workingCopy;
	}

	@Override
	public boolean add(ITernModule e) {
		boolean result = super.add(e);
		if (result) {
			workingCopy.fireSelectionModules(e, true);
		}
		return result;
	}

	@Override
	public boolean remove(Object o) {
		boolean result = super.remove(o);
		if (result && o instanceof ITernModule) {
			workingCopy.fireSelectionModules((ITernModule) o, false);
		}
		return result;
	}
}
