package tern.eclipse.ide.linter.ui.properties;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.linter.core.ITernLinterConfig;
import tern.eclipse.ide.linter.core.TernLinterCorePlugin;
import tern.eclipse.ide.linter.internal.ui.TernLinterUIPlugin;
import tern.eclipse.ide.linter.internal.ui.Trace;
import tern.eclipse.ide.ui.properties.AbstractTernPropertyPage;
import tern.server.ITernPlugin;

public abstract class TernLinterPropertyPage extends AbstractTernPropertyPage
		implements IWorkbenchPreferencePage {

	private final ITernPlugin linter;
	private TernlLinterOptionsBlock linterConfigBlock;

	public TernLinterPropertyPage(ITernPlugin linter) {
		super();
		this.linter = linter;
		// setImageDescriptor(TernUIPlugin.getTernDescriptorManager()
		// .getImageDescriptor(plugin.getName()));
	}

	@Override
	public void init(IWorkbench workbench) {
		setPreferenceStore(TernLinterUIPlugin.getDefault().getPreferenceStore());
	}

	@Override
	protected Control createContents(Composite ancestor) {
		Composite parent = new Composite(ancestor, SWT.NONE);
		parent.setLayoutData(new GridData(GridData.FILL_BOTH));

		initializeDialogUnits(parent);
		noDefaultAndApplyButton();

		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);

		IIDETernProject ternProject = null;
		try {
			ternProject = getTernProject();
		} catch (CoreException e1) {
		}

		// create UI linter config
		linterConfigBlock = new TernlLinterOptionsBlock(ternProject, linter);
		Control control = linterConfigBlock.createControl(parent);
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		// load linter config
		loadLinterConfig();

		applyDialogFont(parent);
		return parent;
	}

	@Override
	public boolean performOk() {
		// save column settings
		linterConfigBlock.saveColumnSettings();
		// save the checked scriptPaths in the tern project
		// List<ITernScriptPath> scriptPaths = scriptPathsBlock
		// .getTernScriptPaths();
		// try {
		// IIDETernProject ternProject = getTernProject();
		// ternProject.setScriptPaths(scriptPaths);
		// } catch (Exception e) {
		// Trace.trace(Trace.SEVERE, "Error while saving tern project", e);
		// }
		return super.performOk();
	}

	/**
	 * Load linter config.
	 */
	private void loadLinterConfig() {
		try {
			IIDETernProject ternProject = getTernProject();
			ITernLinterConfig config = TernLinterCorePlugin.getDefault()
					.getTernLinterConfigurationsManager()
					.createLinterConfig(linter.getName());
			linterConfigBlock.setLinterConfig(config);
		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "Error while loading linter config.", e);
		}
	}
}
