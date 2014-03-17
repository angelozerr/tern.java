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
package tern.eclipse.ide.internal.ui.console;

import org.eclipse.jface.action.Action;
import org.eclipse.osgi.util.NLS;
import org.eclipse.ui.PlatformUI;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.server.ITernServer;
import tern.server.ITernServerListener;

/**
 * Stop tern Server action.
 * 
 */
public class ConsoleTerminateAction extends Action implements
		ITernServerListener {

	private final IDETernProject project;

	public ConsoleTerminateAction(IDETernProject project) {
		this.project = project;
		setToolTipText(NLS.bind(
				TernUIMessages.ConsoleTerminateAction_tooltipText, project
						.getProject().getName()));
		setImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_STOP_ENABLED));
		setDisabledImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_STOP_DISABLED));
		setHoverImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_STOP_ENABLED));
		project.addServerListener(this);
	}

	@Override
	public void run() {
		try {
			project.disposeServer();
			super.setEnabled(!project.isTernServerDisposed());
		} catch (Throwable e) {
		}
	}

	public void dispose() {

	}

	@Override
	public void onStart(ITernServer server) {
		PlatformUI.getWorkbench().getDisplay().syncExec(new Runnable() {

			@Override
			public void run() {
				ConsoleTerminateAction.this.setEnabled(true);
			}
		});
	}

	@Override
	public void onStop(ITernServer server) {
		PlatformUI.getWorkbench().getDisplay().syncExec(new Runnable() {

			@Override
			public void run() {
				ConsoleTerminateAction.this.setEnabled(false);
			}
		});
	}

}
