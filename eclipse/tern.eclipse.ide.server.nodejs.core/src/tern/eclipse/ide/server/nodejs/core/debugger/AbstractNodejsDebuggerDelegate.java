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
package tern.eclipse.ide.server.nodejs.core.debugger;

import org.eclipse.debug.core.DebugPlugin;

/**
 * Abstract class for {@link INodejsDebuggerDelegate}.
 *
 */
public abstract class AbstractNodejsDebuggerDelegate implements INodejsDebuggerDelegate {

	private final String launchConfigId;
	private final boolean canSupportDebug;

	public AbstractNodejsDebuggerDelegate(String launchConfigId, boolean canSupportDebug) {
		this.launchConfigId = launchConfigId;
		this.canSupportDebug = canSupportDebug;
	}

	public String getLaunchId() {
		return launchConfigId;
	}

	@Override
	public boolean canSupportDebug() {
		return canSupportDebug;
	}

	@Override
	public boolean isInstalled() {
		return DebugPlugin.getDefault().getLaunchManager().getLaunchConfigurationType(launchConfigId) != null;
	}

}
