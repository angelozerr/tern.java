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
package tern.eclipse.ide.tools.internal.ui.wizards;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.Path;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.dialogs.ContainerSelectionDialog;

import tern.eclipse.ide.tools.core.generator.IGenerator;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;

/**
 * The "New" wizard page allows setting the container for the new file as well
 * as the file name. The page will only accept file name without the extension
 * OR with the extension that matches the expected one.
 */
public abstract class NewFileWizardPage<T> extends TernWizardPage<T> {

	private final String fileExtension;

	private Text containerText;

	private Text fileText;

	/**
	 * Constructor for NewFileWizardPage.
	 * 
	 * @param pageName
	 *            wizard page name
	 * @param fileExtension
	 *            file extension
	 */
	public NewFileWizardPage(String pageName, String fileExtension) {
		super(pageName);
		this.fileExtension = fileExtension;
	}

	@Override
	protected Composite createUI(Composite parent) {
		Composite container = new Composite(parent, SWT.NULL);
		GridLayout layout = new GridLayout();
		container.setLayout(layout);
		layout.numColumns = 3;
		layout.verticalSpacing = 9;

		createBody(container);
		return container;
	}

	protected void createBody(Composite container) {
		// Container
		Label label = new Label(container, SWT.NULL);
		label.setText(TernToolsUIMessages.NewFileWizardPage_container_text);

		containerText = createFileText(container);
		GridData gd = new GridData(GridData.FILL_HORIZONTAL);
		containerText.setLayoutData(gd);
		containerText.addModifyListener(new ModifyListener() {
			public void modifyText(ModifyEvent e) {
				dialogChanged();
			}
		});

		Button button = new Button(container, SWT.PUSH);
		button.setText(TernToolsUIMessages.Button_browse);
		button.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent e) {
				handleBrowse();
			}
		});

		// File name
		label = new Label(container, SWT.NULL);
		label.setText(TernToolsUIMessages.NewFileWizardPage_fileName_text);

		fileText = createFileText(container);
		gd = new GridData(GridData.FILL_HORIZONTAL);
		gd.horizontalSpan = 2;
		fileText.setLayoutData(gd);
		fileText.addModifyListener(new ModifyListener() {
			public void modifyText(ModifyEvent e) {
				dialogChanged();
			}
		});
	}

	/**
	 * Create file text.
	 * 
	 * @param parent
	 * @return
	 */
	protected Text createFileText(Composite parent) {
		return new Text(parent, SWT.BORDER | SWT.SINGLE);
	}

	/**
	 * Tests if the current workbench selection is a suitable container to use.
	 */
	@Override
	protected void initialize() {
		IResource resource = getResource();
		if (resource != null) {
			IContainer container = null;
			if (resource instanceof IContainer)
				container = (IContainer) resource;
			else
				container = resource.getParent();
			containerText.setText(container.getFullPath().toString());
		}
	}

	/**
	 * Uses the standard container selection dialog to choose the new value for
	 * the container field.
	 */

	private void handleBrowse() {
		ContainerSelectionDialog dialog = new ContainerSelectionDialog(
				getShell(), ResourcesPlugin.getWorkspace().getRoot(), false,
				"Select new file container");
		if (dialog.open() == ContainerSelectionDialog.OK) {
			Object[] result = dialog.getResult();
			if (result.length == 1) {
				containerText.setText(((Path) result[0]).toString());
			}
		}
	}

	/**
	 * Ensures that both text fields are set.
	 */
	@Override
	protected String validate() {

		IResource container = ResourcesPlugin.getWorkspace().getRoot()
				.findMember(new Path(getContainerName()));
		String fileName = getFileName();

		if (getContainerName().length() == 0) {
			return "File container must be specified";
		}
		if (container == null
				|| (container.getType() & (IResource.PROJECT | IResource.FOLDER)) == 0) {
			return "File container must exist";
		}
		if (!container.isAccessible()) {
			return "Project must be writable";
		}
		if (fileName.length() == 0) {
			return "File name must be specified";
		}
		if (fileName.replace('\\', '/').indexOf('/', 1) > 0) {
			return "File name must be valid";
		}
		int dotLoc = fileName.lastIndexOf('.');
		if (dotLoc != -1) {
			String ext = fileName.substring(dotLoc + 1);
			if (ext.equalsIgnoreCase(fileExtension) == false) {
				return "File extension must be \"" + fileExtension + "\"";
			}
		}
		return null;
	}

	public String getContainerName() {
		return containerText.getText();
	}

	public String getFileName() {
		return fileText.getText();
	}

	protected Text getFileText() {
		return fileText;
	}

	public String getFileExtension() {
		return fileExtension;
	}

	public abstract IGenerator getGenerator(String lineSeparator);
}