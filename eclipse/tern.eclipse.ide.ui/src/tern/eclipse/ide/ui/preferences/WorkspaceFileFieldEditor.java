package tern.eclipse.ide.ui.preferences;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.Path;
import org.eclipse.jface.preference.StringButtonFieldEditor;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.ui.dialogs.WorkspaceResourceSelectionDialog;
import tern.eclipse.ide.ui.dialogs.WorkspaceResourceSelectionDialog.Mode;
import tern.utils.StringUtils;

public class WorkspaceFileFieldEditor extends StringButtonFieldEditor {

	/**
	 * List of legal file extension suffixes, or <code>null</code> for system
	 * defaults.
	 */
	private String[] extensions = null;

	/**
	 * Initial path for the Browse dialog.
	 */
	private File filterPath = null;

	/**
	 * Indicates whether the path must be absolute; <code>false</code> by
	 * default.
	 */
	private boolean enforceAbsolute = false;

	/**
	 * Creates a new file field editor
	 */
	protected WorkspaceFileFieldEditor() {
	}

	/**
	 * Creates a file field editor.
	 *
	 * @param name
	 *            the name of the preference this field editor works on
	 * @param labelText
	 *            the label text of the field editor
	 * @param parent
	 *            the parent of the field editor's control
	 */
	public WorkspaceFileFieldEditor(String name, String labelText, Composite parent) {
		this(name, labelText, false, parent);
	}

	/**
	 * Creates a file field editor.
	 *
	 * @param name
	 *            the name of the preference this field editor works on
	 * @param labelText
	 *            the label text of the field editor
	 * @param enforceAbsolute
	 *            <code>true</code> if the file path must be absolute, and
	 *            <code>false</code> otherwise
	 * @param parent
	 *            the parent of the field editor's control
	 */
	public WorkspaceFileFieldEditor(String name, String labelText, boolean enforceAbsolute, Composite parent) {
		this(name, labelText, enforceAbsolute, VALIDATE_ON_FOCUS_LOST, parent);
	}

	/**
	 * Creates a file field editor.
	 *
	 * @param name
	 *            the name of the preference this field editor works on
	 * @param labelText
	 *            the label text of the field editor
	 * @param enforceAbsolute
	 *            <code>true</code> if the file path must be absolute, and
	 *            <code>false</code> otherwise
	 * @param validationStrategy
	 *            either {@link StringButtonFieldEditor#VALIDATE_ON_KEY_STROKE}
	 *            to perform on the fly checking, or
	 *            {@link StringButtonFieldEditor#VALIDATE_ON_FOCUS_LOST} (the
	 *            default) to perform validation only after the text has been
	 *            typed in
	 * @param parent
	 *            the parent of the field editor's control.
	 * @since 3.4
	 * @see StringButtonFieldEditor#VALIDATE_ON_KEY_STROKE
	 * @see StringButtonFieldEditor#VALIDATE_ON_FOCUS_LOST
	 */
	public WorkspaceFileFieldEditor(String name, String labelText, boolean enforceAbsolute, int validationStrategy,
			Composite parent) {
		init(name, labelText);
		this.enforceAbsolute = enforceAbsolute;
		setErrorMessage(JFaceResources.getString("FileFieldEditor.errorMessage"));//$NON-NLS-1$
		setChangeButtonText(JFaceResources.getString("openBrowse"));//$NON-NLS-1$
		setValidateStrategy(validationStrategy);
		createControl(parent);
	}

	@Override
	protected String changePressed() {
		String path = getTextControl().getText();
		if (path != null) {
			path = path.trim();
		} else {
			path = "";//$NON-NLS-1$
		}
		IFile f = getFile(path);
		if (f != null && !f.exists()) {
			f = null;
		}
		IResource d = getFile(f);
		if (d == null) {
			return null;
		}

		return d.getFullPath().toString();
	}

	@Override
	protected boolean checkState() {

		String msg = null;

		String path = getTextControl().getText();
		if (path != null) {
			path = path.trim();
		} else {
			path = "";//$NON-NLS-1$
		}
		if (path.length() == 0) {
			if (!isEmptyStringAllowed()) {
				msg = getErrorMessage();
			}
		} else {
			IFile f = getFile(path);
			if (f == null || !f.exists()) {
				msg = getErrorMessage();
			}
		}

		if (msg != null) { // error
			showErrorMessage(msg);
			return false;
		}

		if (doCheckState()) { // OK!
			clearErrorMessage();
			return true;
		}
		msg = getErrorMessage(); // subclass might have changed it in the
									// #doCheckState()
		if (msg != null) {
			showErrorMessage(msg);
		}
		return false;
	}

	protected IFile getFile(String path) {
		if (StringUtils.isEmpty(path)) {
			return null;
		}
		return ResourcesPlugin.getWorkspace().getRoot().getFile(new Path(path));
	}

	/**
	 * Helper to open the file chooser dialog.
	 * 
	 * @param startingDirectory
	 *            the directory to open the dialog on.
	 * @return File The File the user selected or <code>null</code> if they do
	 *         not.
	 */
	private IResource getFile(IResource startingDirectory) {

		WorkspaceResourceSelectionDialog dialog = new WorkspaceResourceSelectionDialog(getShell(), Mode.FILE);
		if (startingDirectory != null) {
			List<IResource> selectedElements = new ArrayList<IResource>();
			selectedElements.add(startingDirectory);
			dialog.setInitialElementSelections(selectedElements);
		}
		// else if (filterPath != null) {
		// dialog.setFilterPath(filterPath.getPath());
		// }
		// if (extensions != null) {
		// dialog.setFilterExtensions(extensions);
		// }
		if (dialog.open() == Window.OK) {
			IResource resource = (IResource) dialog.getFirstResult();
			return resource;
		}

		return null;
	}

	/**
	 * Sets this file field editor's file extension filter.
	 *
	 * @param extensions
	 *            a list of file extension, or <code>null</code> to set the
	 *            filter to the system's default value
	 */
	public void setFileExtensions(String[] extensions) {
		this.extensions = extensions;
	}

	/**
	 * Sets the initial path for the Browse dialog.
	 * 
	 * @param path
	 *            initial path for the Browse dialog
	 * @since 3.6
	 */
	public void setFilterPath(File path) {
		filterPath = path;
	}

}
