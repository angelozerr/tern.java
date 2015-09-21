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
package tern.eclipse.ide.internal.ui.console;

import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.ui.IActionBars;
import org.eclipse.ui.console.IConsole;
import org.eclipse.ui.console.IConsoleConstants;
import org.eclipse.ui.console.IConsolePageParticipant;
import org.eclipse.ui.part.IPageBookViewPage;

public class TernConsolePageParticipant implements IConsolePageParticipant {

	private TernConsole fConsole;
	private ConsoleTerminateAction fTerminate;

	@Override
	public void init(IPageBookViewPage page, IConsole console) {
		this.fConsole = (TernConsole) console;
		this.fTerminate = new ConsoleTerminateAction(fConsole.getProject());
		IActionBars actionBars = page.getSite().getActionBars();
		configureToolBar(actionBars.getToolBarManager());
	}

	protected void configureToolBar(IToolBarManager mgr) {
		mgr.appendToGroup(IConsoleConstants.LAUNCH_GROUP, this.fTerminate);
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
		if (this.fTerminate != null) {
			this.fTerminate.dispose();
			this.fTerminate = null;
		}
		this.fConsole = null;
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class required) {
		return null;
	}

}
