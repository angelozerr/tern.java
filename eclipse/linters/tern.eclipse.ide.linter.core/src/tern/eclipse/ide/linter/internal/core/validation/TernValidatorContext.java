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
package tern.eclipse.ide.linter.internal.core.validation;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.ScopeContext;

/**
 * A context class for Tern validator to be able to determine the context of
 * given validation session. Currently this class is only used to identify the
 * unique context.
 */
public class TernValidatorContext extends ScopeContext {

	private boolean synch;

	private IIDETernProject ternProject;

	public TernValidatorContext() {
		setSynch(true);
	}

	public IIDETernProject getTernProject() {
		return ternProject;
	}

	public void setTernProject(IIDETernProject ternProject) {
		this.ternProject = ternProject;
	}

	public boolean isSynch() {
		return synch;
	}

	public void setSynch(boolean synch) {
		this.synch = synch;
	}
}
