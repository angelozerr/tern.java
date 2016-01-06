/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.core;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IResource;

public class ScopeContext implements IScopeContext {

	public static final IScopeContext DEFAULT = new IScopeContext() {

		@Override
		public boolean isInclude(IContainer container) {
			return false;
		}

		@Override
		public boolean isExclude(IContainer container) {
			return false;
		}

		@Override
		public void addInclude(IContainer container) {

		}

		@Override
		public void addExclude(IContainer container) {

		}
	};

	private final List<IResource> includes;
	private final List<IResource> excludes;

	public ScopeContext() {
		this.includes = new ArrayList<IResource>();
		this.excludes = new ArrayList<IResource>();
	}

	@Override
	public void addExclude(IContainer container) {
		excludes.add(container);
	}

	@Override
	public boolean isExclude(IContainer container) {
		return excludes.contains(container);
	}

	@Override
	public void addInclude(IContainer container) {
		includes.add(container);
	}

	@Override
	public boolean isInclude(IContainer container) {
		return includes.contains(container);
	}
}
