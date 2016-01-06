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
package tern.eclipse.ide.tools.internal.ui.console;

import org.eclipse.ui.console.IConsole;
import org.eclipse.ui.console.IConsolePageParticipant;
import org.eclipse.ui.part.IPageBookViewPage;

/**
 * Tern repository console page participant.
 *
 */
public class TernRepositoryConsolePageParticipant implements
		IConsolePageParticipant {

	private TernRepositoryConsole fConsole;

	@Override
	public void init(IPageBookViewPage page, IConsole console) {
		this.fConsole = (TernRepositoryConsole) console;
	}

	@Override
	public void activated() {
		// do nothing
	}

	@Override
	public void deactivated() {
		// do nothing
	}

	@Override
	public void dispose() {
		this.fConsole = null;
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class required) {
		return null;
	}

}
