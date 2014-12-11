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
package tern.eclipse.ide.tools.internal.ui.wizards.repository;

import java.io.File;
import java.util.List;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;

import tern.eclipse.ide.server.nodejs.core.IDENodejsProcessHelper;
import tern.eclipse.ide.tools.internal.ui.console.TernRepositoryConsoleHelper;
import tern.eclipse.ide.tools.internal.ui.wizards.IOperation;
import tern.eclipse.ide.ui.console.LineType;
import tern.repository.ITernRepository;
import tern.server.ITernModule;
import tern.server.nodejs.npm.INPMProcessListener;
import tern.server.nodejs.npm.NPMProcess;

/**
 * Operation used to download tern modules selected from the wizard page
 * {@link InstallTernModulesSelectionWizardPage}
 *
 */
public class InstallTernModulesOperation implements
		IOperation<InstallTernModulesOptions>, INPMProcessListener {

	@Override
	public void init() {

	}

	@Override
	public void run(IProgressMonitor monitor, InstallTernModulesOptions options)
			throws CoreException {
		// repository where tern modules must be downloaded.
		ITernRepository repository = options.getRepository();
		// tern modules to download
		ITernModule[] modules = options.getTernModules();
		for (int i = 0; i < modules.length; i++) {
			download(modules[i], repository, options, monitor);
		}
	}

	/**
	 * Download tern module in the given file system tern base dir.
	 * 
	 * @param module
	 *            the tern module to download.
	 * @param repository
	 *            the output file system tern base dir.
	 * @param options
	 * @param monitor
	 */
	private void download(ITernModule module, ITernRepository repository,
			InstallTernModulesOptions options, IProgressMonitor monitor) {
		try {
			// TODO : manage npm path with preferences.
			String npmPath = IDENodejsProcessHelper.getNPMPath();
			NPMProcess process = new NPMProcess(npmPath,
					repository.getTernBaseDir());

			process.addProcessListener(this);

			process.install(module);
		} catch (Throwable e) {
			e.printStackTrace();
		}
	}

	@Override
	public int getTotal() {
		return 1;
	}

	@Override
	public void onCreate(NPMProcess process, List<String> commands,
			File projectDir) {
		StringBuilder commandsAsString = new StringBuilder();
		int i = 0;
		for (String cmd : commands) {
			if (i > 0) {
				commandsAsString.append(" ");
			}
			if (i <= 1) {
				commandsAsString.append("\"");
			}
			commandsAsString.append(cmd);
			if (i <= 1) {
				commandsAsString.append("\"");
			}
			i++;
		}
		TernRepositoryConsoleHelper.doAppendLine(LineType.PROCESS_INFO,
				commandsAsString.toString());
	}

	@Override
	public void onStart(NPMProcess process) {
		String line = "start npm process";
		TernRepositoryConsoleHelper.doAppendLine(LineType.PROCESS_INFO, line);
	}

	@Override
	public void onData(NPMProcess process, String line) {
		TernRepositoryConsoleHelper.doAppendLine(LineType.DATA, line);
	}

	@Override
	public void onStop(NPMProcess process) {
		String line = "end npm process";
		TernRepositoryConsoleHelper.doAppendLine(LineType.PROCESS_INFO, line);
	}

	@Override
	public void onError(NPMProcess process, String line) {
		TernRepositoryConsoleHelper.doAppendLine(LineType.PROCESS_ERROR, line);
	}

}
