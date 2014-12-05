package tern.eclipse.ide.tools.internal.ui.wizards;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonObject.Member;

import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.eclipse.ide.ui.controls.TernModulesBlock;
import tern.server.BasicTernPlugin;
import tern.server.ITernDef;
import tern.server.ITernModule;
import tern.server.ITernPlugin;
import tern.utils.TernModuleHelper;

public class DownloadTernModulesSelectionWizardPage extends
		TernWizardPage<DownloadOptions> {

	private static final String PAGE = "DownloadTernModulesSelectionWizardPage";

	private TernModulesBlock modulesBlock;

	public DownloadTernModulesSelectionWizardPage() {
		super(PAGE);
		setTitle(TernToolsUIMessages.DownloadTernModulesSelectionWizardPage_title);
		setDescription(TernToolsUIMessages.DownloadTernModulesSelectionWizardPage_description);
	}

	@Override
	protected Composite createUI(Composite parent) {
		Composite container = new Composite(parent, SWT.NULL);

		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		container.setLayout(layout);

		IResource resource = super.getResource();
		IProject project = resource != null ? resource.getProject() : null;
		modulesBlock = new TernModulesBlock(project, null);
		Control control = modulesBlock.createControl(container);
		modulesBlock
				.addSelectionChangedListener(new ISelectionChangedListener() {

					@Override
					public void selectionChanged(SelectionChangedEvent event) {
						DownloadTernModulesSelectionWizardPage.this
								.dialogChanged();
					}
				});
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		return container;
	}

	@Override
	protected void initialize() {
		try {
			InputStream in = DownloadTernModulesSelectionWizardPage.class
					.getResourceAsStream("TO_DELETE_repository.json");
			JsonObject repository = JsonObject.readFrom(new InputStreamReader(
					in));

			ITernModule module = null;
			List<ITernModule> modules = new ArrayList<ITernModule>();
			for (Member member : repository) {
				module = new BasicTernPlugin(member.getName());
				modules.add(module);
			}
			modulesBlock.setTernModules(modules
					.toArray(ITernModule.EMPTY_MODULE));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	protected String validate() {
		return null;
	}

	@Override
	protected void updateModel(DownloadOptions model) {
		Object[] modules = modulesBlock.getCheckedModules();
		List<ITernDef> defs = new ArrayList<ITernDef>();
		List<ITernPlugin> plugins = new ArrayList<ITernPlugin>();
		ITernModule module = null;
		for (int i = 0; i < modules.length; i++) {
			module = (ITernModule) modules[i];
			TernModuleHelper.update(defs, plugins, module);
		}
		/*
		 * model.setTernDefs(defs.toArray(ITernDef.EMPTY_DEF));
		 * model.setTernPlugins(plugins.toArray(ITernPlugin.EMPTY_PLUGIN));
		 * ITernRepository repository =
		 * TernCorePlugin.getTernRepositoryManager()
		 * .getRepository(modulesBlock.getProject());
		 * model.setRepository(repository);
		 * model.setProject(modulesBlock.getProject());
		 */
	}

}
