package tern.eclipse.ide.ui.preferences;

import java.util.ArrayList;
import java.util.Collection;

import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.jface.wizard.WizardDialog;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.DisposeEvent;
import org.eclipse.swt.events.DisposeListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IWorkbench;

import tern.eclipse.ide.core.IIDETernRepository;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.wizards.ImportTernRepositoryWizard;
import tern.utils.StringUtils;

public class TernRepositoryFieldEditor extends ComboViewerFieldEditor {

	private static final int NB_BUTTONS = 1;
	
	private final IWorkbench workbench;
	private Button importButton;
	private Button addButton;

	public TernRepositoryFieldEditor(String name, String labelText, Composite parent, IWorkbench workbench) {
		super(name, labelText, parent);
		this.workbench = workbench;
		Collection list = new ArrayList();
		list.add(TernUIMessages.TernRepositoryFieldEditor_ternRepository_none);
		list.addAll(TernCorePlugin.getTernRepositoryManager().getRepositories());
		super.setLabelProvider(IDETernRepositoryLabelProvider.INSTANCE);
		super.setInput(list);
	}

	@Override
	protected void adjustForNumColumns(int numColumns) {
		super.adjustForNumColumns(numColumns - NB_BUTTONS);
	}

	@Override
	public int getNumberOfControls() {
		return super.getNumberOfControls() + NB_BUTTONS;
	}

	@Override
	protected void doFillIntoGrid(Composite parent, int numColumns) {
		super.doFillIntoGrid(parent, numColumns - 1);
		importButton = getImportButtonControl(parent);
		GridData gd = new GridData();
		gd.horizontalAlignment = GridData.FILL;
		int widthHint = convertHorizontalDLUsToPixels(importButton, IDialogConstants.BUTTON_WIDTH);
		gd.widthHint = Math.max(widthHint, importButton.computeSize(SWT.DEFAULT, SWT.DEFAULT, true).x);
		importButton.setLayoutData(gd);

		/*addButton = getAddButtonControl(parent);
		gd = new GridData();
		gd.horizontalAlignment = GridData.FILL;
		widthHint = convertHorizontalDLUsToPixels(addButton, IDialogConstants.BUTTON_WIDTH);
		gd.widthHint = Math.max(widthHint, addButton.computeSize(SWT.DEFAULT, SWT.DEFAULT, true).x);
		addButton.setLayoutData(gd);*/
	}

	protected Button getImportButtonControl(Composite parent) {
		if (importButton == null) {
			importButton = new Button(parent, SWT.PUSH);
			importButton.setText(TernUIMessages.Button_import);
			importButton.setFont(parent.getFont());
			importButton.addSelectionListener(new SelectionAdapter() {
				public void widgetSelected(SelectionEvent evt) {
					boolean oldValid = isValid();
					openImportDialogIfNeeded();
					refreshValidState();
					boolean newValid = isValid();
					if (oldValid != newValid) {
						fireValueChanged(IS_VALID, oldValid, newValid);
					}
				}
			});
			importButton.addDisposeListener(new DisposeListener() {
				public void widgetDisposed(DisposeEvent event) {
					importButton = null;
				}
			});
		} else {
			checkParent(importButton, parent);
		}
		return importButton;
	}

	protected Button getAddButtonControl(Composite parent) {
		if (addButton == null) {
			addButton = new Button(parent, SWT.PUSH);
			addButton.setText(TernUIMessages.Button_add);
			addButton.setFont(parent.getFont());
			addButton.addSelectionListener(new SelectionAdapter() {
				public void widgetSelected(SelectionEvent evt) {

				}
			});
			addButton.addDisposeListener(new DisposeListener() {
				public void widgetDisposed(DisposeEvent event) {
					addButton = null;
				}
			});
		} else {
			checkParent(addButton, parent);
		}
		return addButton;
	}

	@Override
	protected void fireValueChanged(String property, Object oldValue, Object newValue) {
		openImportDialogIfNeeded();
		super.fireValueChanged(property, oldValue, newValue);
	}

	@Override
	protected boolean checkState() {
		Object selectedRepository = getSelectedValue();
		if (selectedRepository == null || selectedRepository instanceof String) {
			showErrorMessage(TernUIMessages.TernRepositoryFieldEditor_ternRepository_err_not_selected);
			return false;
		}
		IIDETernRepository repository = (IIDETernRepository) selectedRepository;
		if (!repository.isImported()) {
			showErrorMessage(TernUIMessages.TernRepositoryFieldEditor_ternRepository_err_not_imported);
			return false;
		}
		clearErrorMessage();
		return true;
	}

	private void openImportDialogIfNeeded() {
		Object selectedRepository = getSelectedValue();
		if (selectedRepository == null || selectedRepository instanceof String) {
			importButton.setEnabled(false);
			return;
		}
		IIDETernRepository repository = (IIDETernRepository) selectedRepository;
		if (!repository.isImported()) {
			Shell shell = getLabelControl().getShell();
			ImportTernRepositoryWizard wizard = new ImportTernRepositoryWizard(repository);
			wizard.init(workbench, null);
			WizardDialog dialog = new WizardDialog(shell, wizard);
			dialog.open();
			if (!repository.isImported()) {
				importButton.setEnabled(true);
				return;
			}
			getViewer().refresh(true);
		}
		importButton.setEnabled(false);
	}

	@Override
	public void setEnabled(boolean enabled, Composite parent) {
		super.setEnabled(enabled, parent);
		setImportButtonEnabled(enabled);
		if (addButton != null) {
			addButton.setEnabled(enabled);
		}
	}

	private void setImportButtonEnabled(boolean enabled) {
		if (importButton != null) {
			if (!enabled) {
				importButton.setEnabled(enabled);
			} else {
				Object selectedValue = getSelectedValue();
				importButton.setEnabled(selectedValue instanceof IIDETernRepository
						&& !((IIDETernRepository) selectedValue).isImported());
			}
		}
	}

	private static class IDETernRepositoryLabelProvider extends LabelProvider {

		public static final ILabelProvider INSTANCE = new IDETernRepositoryLabelProvider();

		@Override
		public String getText(Object element) {
			if (element instanceof IIDETernRepository) {
				IIDETernRepository repository = (IIDETernRepository) element;
				return repository.isImported() ? repository.getName()
						: repository.getName() + TernUIMessages.TernRepositoryFieldEditor_ternRepository_not_imported;
			}
			return super.getText(element);
		}
	}

	@Override
	protected String getPreferenceValue(Object selectedObject) {
		if (selectedObject instanceof String) {
			return "";
		}
		return ((IIDETernRepository) selectedObject).getName();
	}

	@Override
	protected Object getValueFromPreference(String preferenceValue) {
		if (StringUtils.isEmpty(preferenceValue)) {
			return TernUIMessages.TernRepositoryFieldEditor_ternRepository_none;
		}
		return TernCorePlugin.getTernRepositoryManager().getRepository(preferenceValue);
	}

	@Override
	protected void updateComboForValue(String value) {
		super.updateComboForValue(value);
		setImportButtonEnabled(true);
	}

	@Override
	public boolean isValid() {
		if (!getLabelControl().isEnabled()) {
			return true;
		}
		return super.isValid();
	}

}
