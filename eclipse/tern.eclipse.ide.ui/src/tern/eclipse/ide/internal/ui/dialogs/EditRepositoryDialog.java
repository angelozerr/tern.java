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
package tern.eclipse.ide.internal.ui.dialogs;

import java.io.File;
import java.util.Collection;

import org.eclipse.jface.dialogs.IMessageProvider;
import org.eclipse.jface.dialogs.TitleAreaDialog;
import org.eclipse.osgi.util.NLS;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.DirectoryDialog;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.core.ITernRepositoryManager;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.repository.ITernRepository;
import tern.repository.TernRepository;
import tern.utils.StringUtils;

/**
 * Dialog to create or modify a tern repository.
 *
 */
public class EditRepositoryDialog extends TitleAreaDialog {

	private Text nameText;
	private Text ternBaseDirText;
	private final Collection<ITernRepository> repositories;
	private ITernRepository repository;

	public EditRepositoryDialog(Shell parentShell,
			Collection<ITernRepository> repositories) {
		this(parentShell, repositories, null);
	}

	public EditRepositoryDialog(Shell parentShell,
			Collection<ITernRepository> repositories, ITernRepository repository) {
		super(parentShell);
		this.repository = repository;
		this.repositories = repositories;
	}

	@Override
	protected Control createContents(Composite parent) {
		Control contents = super.createContents(parent);
		super.setTitle(TernUIMessages.EditRepositoryDialog_title);
		super.setMessage(TernUIMessages.EditRepositoryDialog_desc,
				IMessageProvider.INFORMATION);
		return contents;
	}

	@Override
	protected Control createDialogArea(Composite parent) {
		Composite area = (Composite) super.createDialogArea(parent);
		Composite container = new Composite(area, SWT.NONE);
		container.setLayoutData(new GridData(GridData.FILL_BOTH));
		GridLayout layout = new GridLayout(3, false);
		container.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		container.setLayout(layout);

		createRepositoryName(container);
		createTernBaseDir(container);
		validate();
		return area;
	}

	/**
	 * Create the repository name text field.
	 * 
	 * @param parent
	 */
	private void createRepositoryName(Composite parent) {
		Label repositorylabel = new Label(parent, SWT.NONE);
		repositorylabel.setText(TernUIMessages.EditRepositoryDialog_name_label);

		GridData dataRepository = new GridData();
		dataRepository.grabExcessHorizontalSpace = true;
		dataRepository.horizontalAlignment = GridData.FILL;
		dataRepository.horizontalSpan = 2;

		nameText = new Text(parent, SWT.BORDER);
		nameText.setLayoutData(dataRepository);
		if (repository != null) {
			nameText.setEnabled(false);
			nameText.setText(repository.getName());
		}
		nameText.addModifyListener(new ModifyListener() {

			@Override
			public void modifyText(ModifyEvent event) {
				validate();
			}
		});
	}

	/**
	 * Create the repository tern base dir text field.
	 * 
	 * @param parent
	 */
	private void createTernBaseDir(final Composite parent) {
		Label fileLabel = new Label(parent, SWT.NONE);
		fileLabel
				.setText(TernUIMessages.EditRepositoryDialog_ternBaseDir_label);

		GridData dataFile = new GridData();
		dataFile.grabExcessHorizontalSpace = true;
		dataFile.horizontalAlignment = GridData.FILL;
		ternBaseDirText = new Text(parent, SWT.BORDER);
		ternBaseDirText.setLayoutData(dataFile);
		if (repository != null) {
			ternBaseDirText.setText(repository.getTernBaseDirAsString());
		}
		ternBaseDirText.addModifyListener(new ModifyListener() {

			@Override
			public void modifyText(ModifyEvent event) {
				validate();
			}
		});

		Button browseButton = new Button(parent, SWT.NONE);
		browseButton.setText(TernUIMessages.Button_browse);

		final Shell shell = parent.getShell();
		browseButton.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				DirectoryDialog dlg = new DirectoryDialog(shell);
				dlg.setFilterPath(ternBaseDirText.getText());
				dlg.setText(TernUIMessages.EditRepositoryDialog_directoryDialog_title);
				dlg.setMessage(TernUIMessages.EditRepositoryDialog_directoryDialog_desc);
				String dir = dlg.open();
				if (dir != null) {
					ternBaseDirText.setText(dir);
				}
			}
		});
	}

	/**
	 * Validate repository name and tern base dir.
	 */
	private void validate() {
		// Validate repository name
		String error = validateName();
		if (StringUtils.isEmpty(error)) {
			// Validate tern base dir.
			error = validateTernBaseDir();
		}
		setErrorMessage(error);
	}

	/**
	 * Validate repository name.
	 * 
	 * @return the error message and null otherwise.
	 */
	private String validateName() {
		// name is required
		String name = nameText.getText();
		if (StringUtils.isEmpty(name)) {
			return TernUIMessages.EditRepositoryDialog_name_required;
		}
		// name must not contains ';' token.
		if (name.contains(ITernRepositoryManager.REPOSITORY_SEPARATOR)) {
			return NLS.bind(
					TernUIMessages.EditRepositoryDialog_name_forbiddenToken,
					ITernRepositoryManager.REPOSITORY_SEPARATOR);
		}
		// check if this name doesn't exists?
		if (repository == null && isRepositoryNameAlreadyExists(name)) {
			return NLS.bind(
					TernUIMessages.EditRepositoryDialog_name_alreadyExists,
					name);
		}
		return null;
	}

	private boolean isRepositoryNameAlreadyExists(String name) {
		for (ITernRepository repository : repositories) {
			if (repository.getName().equals(name)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Validate repository tern base dir.
	 * 
	 * @return the error message and null otherwise.
	 */
	private String validateTernBaseDir() {
		// tern base dir is required
		String ternBaseDir = ternBaseDirText.getText();
		if (StringUtils.isEmpty(ternBaseDir)) {
			return TernUIMessages.EditRepositoryDialog_ternBaseDir_required;
		}
		File dir = new File(ternBaseDir);
		if (!dir.exists()) {
			return TernUIMessages.EditRepositoryDialog_ternBaseDir_doesntExists;
		}
		if (!dir.isDirectory()) {
			return TernUIMessages.EditRepositoryDialog_ternBaseDir_notDir;
		}
		if (!(exists(dir, "defs") && exists(dir, "plugin"))) {
			return TernUIMessages.EditRepositoryDialog_ternBaseDir_notValid;
		}
		return null;
	}

	private boolean exists(File dir, String name) {
		return new File(dir, name).exists();
	}

	@Override
	protected void okPressed() {
		String name = nameText.getText();
		String file = ternBaseDirText.getText();
		if (repository == null) {
			this.repository = new TernRepository(name, new File(file));
		} else {
			repository.setTernBaseDir(new File(file));
		}
		super.okPressed();
	}

	public ITernRepository getRepository() {
		return repository;
	}
}
