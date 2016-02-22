/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - support for tern.js debugging
 */
package tern.eclipse.ide.server.nodejs.internal.core;

import java.io.File;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;

import tern.ITernProject;
import tern.eclipse.ide.core.ITernServerFactory;
import tern.eclipse.ide.server.nodejs.core.debugger.INodejsDebugger;
import tern.eclipse.ide.server.nodejs.core.debugger.NodejsDebuggersManager;
import tern.server.ITernServer;
import tern.server.nodejs.NodejsTernServer;

/**
 * Tern server factory implementation with node.js terns server.
 */
public class TernNodejsServerFactory implements ITernServerFactory {

	@Override
	public ITernServer create(ITernProject project) throws Exception {
		NodejsTernServer server;
		if (isRemoteAccess()) {
			server = new NodejsTernServer(project, getRemotePort()) {
				@Override
				protected void onError(String message, Throwable e) {
					Trace.trace(Trace.SEVERE, message, e);
				}
			};
		} else {
			INodejsDebugger debugger = NodejsDebuggersManager
					.getDebugger(getDebugger());
			File installPath = getInstallPath();
			IFile ternServerFile = getTernServerDebugFile();
			// debugger must be present
			if (debugger != null && debugger.isInstalled()
					// tern server file must exist
					&& ternServerFile != null
					&& ternServerFile.exists()
					// do not run debug mode if project contains the tern server
					&& !ternServerFile.getProject().equals(
							project.getAdapter(IProject.class))) {
				server = new NodejsTernServer(project, debugger.createProcess(
						ternServerFile, project.getProjectDir(), installPath)){
					@Override
					protected void onError(String message, Throwable e) {
						Trace.trace(Trace.SEVERE, message, e);
					}
				};
				server.setDebugLaunch(true);
				server.setSaveLaunch(false);
			} else {
				File ternBaseDir = project.getRepository().getTernBaseDir();
				server = new NodejsTernServer(project, installPath, ternBaseDir) {
					@Override
					protected void onError(String message, Throwable e) {
						Trace.trace(Trace.SEVERE, message, e);
					}
				};
			}
		}
		server.setTimeout(getTimeout());
		server.setTestNumber(getTestNumber());
		server.setPersistent(isPersistent());
		return server;
	}

	// -------------------- Properties for remote access

	private boolean isRemoteAccess() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.isNodejsRemoteAccess();
	}

	private int getRemotePort() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.getNodejsRemotePort();
	}

	// -------------------- Properties for direct access

	private File getInstallPath() {
		return TernNodejsCorePreferencesSupport.getInstance().getInstallPath();
	}

	private long getTimeout() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.getNodejsTimeout();
	}

	private int getTestNumber() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.getNodejsTestNumber();
	}

	private boolean isPersistent() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.isNodejsPersistent();
	}

	private String getDebugger() {
		return TernNodejsCorePreferencesSupport.getInstance().getDebugger();
	}

	private IFile getTernServerDebugFile() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.getTernServerDebugFile();
	}

}
