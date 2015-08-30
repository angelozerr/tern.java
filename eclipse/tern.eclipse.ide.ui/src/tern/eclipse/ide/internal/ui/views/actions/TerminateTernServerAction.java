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
package tern.eclipse.ide.internal.ui.views.actions;

import org.eclipse.jface.action.Action;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;

/**
 * This action stops the tern server of the current tern project.
 * 
 */
public class TerminateTernServerAction extends Action {

	//private final TernExplorerViewOLD explorer;

	public TerminateTernServerAction(Object explorer) {
		//this.explorer = explorer;
		super.setText(TernUIMessages.TerminateTernServerAction_text);
		super.setToolTipText(TernUIMessages.TerminateTernServerAction_tooltip);
		super.setImageDescriptor(ImageResource.getImageDescriptor(ImageResource.IMG_STOP_ENABLED));
	}

	@Override
	public void run() {
//		IIDETernProject ternProject = explorer.getCurrentTernProject();
//		if (ternProject != null) {
//			ternProject.disposeServer();
//		}
	}
}
