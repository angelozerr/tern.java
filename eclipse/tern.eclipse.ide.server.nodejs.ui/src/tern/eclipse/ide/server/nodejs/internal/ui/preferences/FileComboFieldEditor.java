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
package tern.eclipse.ide.server.nodejs.internal.ui.preferences;

import java.io.File;

import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.FileDialog;

public class FileComboFieldEditor extends StringButtonComboFieldEditor {
	private String[] extensions;
	private File filterPath;
	private boolean enforceAbsolute;

	protected FileComboFieldEditor(String[] items) {
		super(items);
		this.extensions = null;

		this.filterPath = null;

		this.enforceAbsolute = false;
	}

	public FileComboFieldEditor(String name, String labelText, String[] items,
			Composite parent) {
		this(name, labelText, false, items, parent);
	}

	public FileComboFieldEditor(String name, String labelText,
			boolean enforceAbsolute, String[] items, Composite parent) {
		this(name, labelText, enforceAbsolute, 1, items, parent);
	}

	public FileComboFieldEditor(String name, String labelText,
			boolean enforceAbsolute, int validationStrategy, String[] items,
			Composite parent) {
		super(items);

		this.extensions = null;

		this.filterPath = null;

		this.enforceAbsolute = false;

		init(name, labelText);
		this.enforceAbsolute = enforceAbsolute;
		setErrorMessage(JFaceResources
				.getString("FileFieldEditor.errorMessage"));
		setChangeButtonText(JFaceResources.getString("openBrowse"));
		setValidateStrategy(validationStrategy);
		createControl(parent);
	}

	protected String changePressed() {
		File f = new File(getTextControl().getText());
		if (!(f.exists())) {
			f = null;
		}
		File d = getFile(f);
		if (d == null) {
			return null;
		}

		return d.getAbsolutePath();
	}

	protected boolean checkState() {
		String msg = null;

		String path = getTextControl().getText();
		if (path != null)
			path = path.trim();
		else {
			path = "";
		}
		if (path.length() == 0) {
			if (!(isEmptyStringAllowed()))
				msg = getErrorMessage();
		} else {
			if (!path.equals("node")) {
				File file = new File(path);
				if (file.isFile()) {
					if ((this.enforceAbsolute) && (!(file.isAbsolute())))
						msg = JFaceResources
								.getString("FileFieldEditor.errorMessage2");
				} else {
					msg = getErrorMessage();
				}
			}
		}

		if (msg != null) {
			showErrorMessage(msg);
			return false;
		}

		if (doCheckState()) {
			clearErrorMessage();
			return true;
		}
		msg = getErrorMessage();
		if (msg != null) {
			showErrorMessage(msg);
		}
		return false;
	}

	private File getFile(File startingDirectory) {
		FileDialog dialog = new FileDialog(getShell(), 268439552);
		if (startingDirectory != null) {
			dialog.setFileName(startingDirectory.getPath());
		} else if (this.filterPath != null) {
			dialog.setFilterPath(this.filterPath.getPath());
		}
		if (this.extensions != null) {
			dialog.setFilterExtensions(this.extensions);
		}
		String file = dialog.open();
		if (file != null) {
			file = file.trim();
			if (file.length() > 0) {
				return new File(file);
			}
		}

		return null;
	}

	public void setFileExtensions(String[] extensions) {
		this.extensions = extensions;
	}

	public void setFilterPath(File path) {
		this.filterPath = path;
	}
}