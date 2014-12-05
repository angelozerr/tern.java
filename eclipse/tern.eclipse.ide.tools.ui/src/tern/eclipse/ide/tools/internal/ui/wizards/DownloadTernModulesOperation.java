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
package tern.eclipse.ide.tools.internal.ui.wizards;

import java.io.File;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;

import tern.repository.ITernRepository;
import tern.server.ITernModule;

/**
 * Operation used to download tern modules selected from the wizard page
 * {@link DownloadTernModulesSelectionWizardPage}
 *
 */
public class DownloadTernModulesOperation implements
		IOperation<DownloadOptions> {

	@Override
	public void init() {

	}

	@Override
	public void run(IProgressMonitor monitor, DownloadOptions options)
			throws CoreException {
		// repository where tern modules must be downloaded.
		ITernRepository repository = options.getRepository();
		// tern modules to download
		ITernModule[] modules = options.getTernModules();
		for (int i = 0; i < modules.length; i++) {
			download(modules[i], repository.getTernBaseDir());
		}
	}

	/**
	 * Download tern module in the given file system tern base dir.
	 * 
	 * @param ternModule
	 *            the tern module to download.
	 * @param ternBaseDir
	 *            the output file system tern base dir.
	 */
	private void download(ITernModule ternModule, File ternBaseDir) {
		System.out.println("download " + ternModule.getName());
	}

	@Override
	public int getTotal() {
		return 1;
	}

}
