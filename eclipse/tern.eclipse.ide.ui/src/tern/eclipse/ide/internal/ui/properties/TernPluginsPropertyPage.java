/*******************************************************************************
 * Copyright (c) 2010 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.eclipse.ide.internal.ui.properties;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IAdaptable;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;
import org.eclipse.ui.dialogs.PropertyPage;
import org.json.simple.JSONObject;

import tern.TernProject;
import tern.eclipse.ide.core.EclipseTernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIPlugin;
import tern.server.ITernPlugin;

public class TernPluginsPropertyPage extends PropertyPage implements
		IWorkbenchPreferencePage {

	private TernPluginsBlock processorsBlock;

	public TernPluginsPropertyPage() {
		super();
		// only used when page is shown programatically
		// setTitle(TernUIMessages.XPathProcessorPreferencePage_0);
		// setDescription(TernUIMessages.XPathProcessorPreferencePage_1);
	}

	public void init(IWorkbench workbench) {
		setPreferenceStore(TernUIPlugin.getDefault().getPreferenceStore());
	}

	@Override
	protected Control createContents(Composite ancestor) {
		initializeDialogUnits(ancestor);

		noDefaultAndApplyButton();

		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		ancestor.setLayout(layout);

		processorsBlock = new TernPluginsBlock();
		processorsBlock.createControl(ancestor);
		Control control = processorsBlock.getControl();
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		// TODO PlatformUI.getWorkbench().getHelpSystem().setHelp...

		initDefaultInstall();
		processorsBlock
				.addSelectionChangedListener(new ISelectionChangedListener() {
					public void selectionChanged(SelectionChangedEvent event) {
						ITernPlugin processor = getCurrentDefaultProcessor();
						if (processor == null) {
							setValid(false);
							// setErrorMessage(TernUIMessages.XPathProcessorPreferencePage_2);
						} else {
							setValid(true);
							setErrorMessage(null);
						}
					}
				});
		applyDialogFont(ancestor);
		return ancestor;
	}

	@Override
	public boolean performOk() {
		ITernPlugin processorType = getCurrentDefaultProcessor();
		if (processorType == null) {
			setErrorMessage("Please select a XPath processor");
			return false;
		}
		processorsBlock.saveColumnSettings();
		// XPathProcessorManager.getDefault().setDefaultProcessor(processorType);
		return true;
	}

	private void initDefaultInstall() {
		try {
			TernProject ternProject = getTernProject();
			JSONObject plugins = ternProject.getPlugins();

			List<ITernPlugin> selectedPlugins = new ArrayList<ITernPlugin>();
			for (Object name : plugins.keySet()) {
				ITernPlugin plugin = TernCorePlugin.getTernServerTypeManager()
						.findTernPlugin(name.toString());
				if (plugin != null) {
					selectedPlugins.add(plugin);
				}
			}
			processorsBlock.setCheckedInstall(selectedPlugins);

		} catch (CoreException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// ITernPlugin processorType = XPathProcessorManager.getDefault()
		// .getDefaultProcessor();
		// verifyDefaultVM(processorType);

		// IXPathEvaluatorType realDefault = JAXPRuntime.getDefaultProcessor();
		// if (realDefault != null) {
		// IXPathEvaluatorType[] installs = processorsBlock.getProcessors();
		// for (IXPathEvaluatorType fakeInstall : installs) {
		// if (fakeInstall.getId().equals(realDefault.getId())) {
		// verifyDefaultVM(fakeInstall);
		// break;
		// }
		// }
		// }
	}

	private ITernPlugin getCurrentDefaultProcessor() {
		return processorsBlock.getCheckedInstall();
	}

	private IResource getResource() {
		IResource resource = null;
		IAdaptable adaptable = getElement();
		if (adaptable instanceof IResource) {
			resource = (IResource) adaptable;
		} else if (adaptable != null) {
			Object o = adaptable.getAdapter(IResource.class);
			if (o instanceof IResource) {
				resource = (IResource) o;
			}
		}
		return resource;
	}

	public EclipseTernProject getTernProject() throws CoreException {
		return EclipseTernProject.getTernProject(getResource().getProject());
	}
}
