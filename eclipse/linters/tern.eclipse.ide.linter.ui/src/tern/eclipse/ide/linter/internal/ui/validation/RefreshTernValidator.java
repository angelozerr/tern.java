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
package tern.eclipse.ide.linter.internal.ui.validation;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.MessageBox;
import org.eclipse.wst.validation.ValidationFramework;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.ITernProjectLifecycleListener;
import tern.eclipse.ide.core.ITernProjectLifecycleListenerProvider;
import tern.eclipse.ide.linter.internal.ui.TernLinterUIMessages;

/**
 * Refresh WTP Tern Validator when linter are added or removed from the
 * .tern-project.
 *
 */
public class RefreshTernValidator implements ITernProjectLifecycleListener, ITernProjectLifecycleListenerProvider {

	private final ValidationFramework validation;

	public RefreshTernValidator() {
		validation = ValidationFramework.getDefault();
	}

	@Override
	public void handleEvent(final IIDETernProject project, LifecycleEventType state) {
		if (state == LifecycleEventType.onLintersChanged) {

			// Linters has changed (added or removed)
			Display.getDefault().syncExec(new Runnable() {
				public void run() {
					MessageBox mb = new MessageBox(Display.getDefault().getActiveShell(),
							SWT.APPLICATION_MODAL | SWT.YES | SWT.NO | SWT.ICON_INFORMATION | SWT.RIGHT);
					mb.setText(TernLinterUIMessages.Validation_Title);
					mb.setMessage(TernLinterUIMessages.Validation_Project);
					if (mb.open() == SWT.YES) {
						// tern validation must be done or disabled
						ValidateJob job = new ValidateJob(TernLinterUIMessages.Validation_jobName,
								project.getProject());
						job.schedule();
					}
				}
			});

		}
	}

	@Override
	public ITernProjectLifecycleListener getListener() {
		return this;
	}

	/**
	 * Performs validation after validation preferences have been modified.
	 */
	private class ValidateJob extends Job {

		private final IProject project;

		public ValidateJob(String name, IProject project) {
			super(name);
			this.project = project;
		}

		protected IStatus run(IProgressMonitor monitor) {
			IStatus status = Status.OK_STATUS;
			try {
				IProject[] projects = new IProject[] { project };
				validation.validate(projects, true, false, monitor);
			} catch (CoreException ce) {
				status = Status.CANCEL_STATUS;
			}

			return status;
		}

	}
}
