package tern.eclipse.ide.ui.wizards;

import java.io.File;
import java.lang.reflect.InvocationTargetException;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IProjectDescription;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IWorkspace;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.OperationCanceledException;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.SubProgressMonitor;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.dialogs.ErrorDialog;
import org.eclipse.jface.wizard.WizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.actions.WorkspaceModifyOperation;
import org.eclipse.ui.internal.wizards.datatransfer.DataTransferMessages;

import tern.eclipse.ide.core.IIDETernRepository;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.utils.TernModuleHelper;

public class ImportTernRepositoryWizardPage extends WizardPage {

	private final IIDETernRepository repository;
	private IProjectDescription description;

	protected ImportTernRepositoryWizardPage(IIDETernRepository repository) {
		super("CreateOrImportProjectWizardPage");
		setPageComplete(true);
		setTitle(TernUIMessages.ImportTernRepositoryWizardPage_title);
		setDescription(TernUIMessages.ImportTernRepositoryWizardPage_description);
		this.repository = repository;
		this.description = getProjectDescription();
	}

	private Text nameText;
	private Text locationText;

	@Override
	public void createControl(Composite parent) {
		initializeDialogUnits(parent);

		Composite workArea = new Composite(parent, SWT.NONE);
		setControl(workArea);

		workArea.setLayout(new GridLayout());
		workArea.setLayoutData(new GridData(GridData.FILL_BOTH | GridData.GRAB_HORIZONTAL | GridData.GRAB_VERTICAL));

		createProjectInfo(workArea);
		restoreWidgetValues();
		Dialog.applyDialogFont(workArea);

	}

	private void createProjectInfo(Composite parent) {
		Composite workArea = new Composite(parent, SWT.NONE);
		workArea.setLayout(new GridLayout(2, false));
		workArea.setLayoutData(new GridData(GridData.FILL_BOTH));

		// Project name
		Label nameLabel = new Label(workArea, SWT.NONE);
		nameLabel.setText(TernUIMessages.ImportTernRepositoryWizardPage_name_label);
		nameText = new Text(workArea, SWT.SINGLE | SWT.BORDER);
		nameText.setFont(parent.getFont());
		nameText.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		// File system path
		Label locationLabel = new Label(workArea, SWT.NONE);
		locationLabel.setText(TernUIMessages.ImportTernRepositoryWizardPage_location_label);
		locationText = new Text(workArea, SWT.WRAP | SWT.READ_ONLY);
		locationText.setFont(parent.getFont());
		locationText.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
	}

	private IProjectDescription getProjectDescription() {
		File dotProject = new File(repository.getBaseDir(), IProjectDescription.DESCRIPTION_FILE_NAME);
		if (dotProject.exists()) {
			IPath path = new Path(TernModuleHelper.getPath(dotProject));
			try {
				return ResourcesPlugin.getWorkspace().loadProjectDescription(path);
			} catch (CoreException e) {
				Trace.trace(Trace.SEVERE, "Error while getting .project description", e);
			}
		}
		return null;
	}

	private void restoreWidgetValues() {
		if (description != null) {
			nameText.setText(description.getName());
			nameText.setEnabled(false);
		} else {
			nameText.setText(repository.getName());
		}
		locationText.setText(TernModuleHelper.getPath(repository.getBaseDir()));
	}

	public boolean importRepository() {
		final String projectName = nameText.getText();
		final IWorkspace workspace = ResourcesPlugin.getWorkspace();
		final IProject project = workspace.getRoot().getProject(projectName);
		if (project.exists()) {
			return true;
		}
		WorkspaceModifyOperation op = new WorkspaceModifyOperation() {
			@Override
			protected void execute(IProgressMonitor monitor) throws InvocationTargetException, InterruptedException {
				try {
					monitor.beginTask("", 1); //$NON-NLS-1$
					if (monitor.isCanceled()) {
						throw new OperationCanceledException();
					}
					IStatus status = importRepository(monitor);
					if (!status.isOK()) {
						throw new InvocationTargetException(new CoreException(status));
					}
				} finally {
					monitor.done();
				}
			}

			private IStatus importRepository(final IProgressMonitor monitor) {
				if (description == null) {
					description = workspace.newProjectDescription(projectName);
					IPath locationPath = new Path(repository.getBaseDir().getAbsolutePath());
					// If it is under the root use the default location
					if (Platform.getLocation().isPrefixOf(locationPath)) {
						description.setLocation(null);
					} else {
						description.setLocation(locationPath);
					}
				}
				try {
					monitor.beginTask(TernUIMessages.ImportTernRepositoryWizardPage_CreateProjectTask, 100);
					project.create(description, new SubProgressMonitor(monitor, 30));
					project.open(IResource.BACKGROUND_REFRESH, new SubProgressMonitor(monitor, 70));
				} catch (CoreException e) {
					return e.getStatus();
				} finally {
					monitor.done();
				}
				return Status.OK_STATUS;
			}
		};
		// run the new project creation operation
		try {
			getContainer().run(true, true, op);
		} catch (InterruptedException e) {
			return false;
		} catch (InvocationTargetException e) {
			// one of the steps resulted in a core exception
			Throwable t = e.getTargetException();
			String message = TernUIMessages.ImportTernRepositoryWizardPage_errorMessage;
			IStatus status;
			if (t instanceof CoreException) {
				status = ((CoreException) t).getStatus();
			} else {
				status = new Status(IStatus.ERROR, TernUIPlugin.PLUGIN_ID, 1, message, t);
			}
			// Update the visible status on error so the user can see what's
			// been imported
			// updateProjectsStatus();
			ErrorDialog.openError(getShell(), message, null, status);
			return false;
		} finally {

		}
		return true;
	}
}
