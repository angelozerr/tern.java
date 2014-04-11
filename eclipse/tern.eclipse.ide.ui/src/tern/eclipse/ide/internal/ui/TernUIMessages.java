/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.ui;

import java.util.MissingResourceException;
import java.util.ResourceBundle;

import org.eclipse.osgi.util.NLS;

/**
 * Tern UI messages.
 * 
 */
public final class TernUIMessages extends NLS {

	private static final String BUNDLE_NAME = "tern.eclipse.ide.internal.ui.TernUIMessages"; //$NON-NLS-1$

	private static ResourceBundle fResourceBundle;

	// Buttons
	public static String Button_addFile;
	public static String Button_addFolder;
	public static String Button_addProject;
	public static String Button_remove;
	public static String Button_browse;

	// Commands
	public static String ConvertProjectToTern_converting_project_job_title;

	// Preferences
	public static String TernGlobalPreferencesPage_desc;
	public static String TernGlobalPreferencesPage_serverType;

	// Properties page
	public static String TernPluginsBlock_desc;
	public static String TernPluginsBlock_pluginName;
	public static String TernPluginsBlock_pluginPath;
	public static String TernDefsBlock_desc;
	public static String TernDefsBlock_defName;
	public static String TernDefsBlock_defPath;
	public static String TernScriptPathsBlock_desc;
	public static String TernConsolePropertyPage_desc;
	public static String TernConsolePropertyPage_traceOnConsole_label;

	// Dialogs
	public static String MultipleFolderSelectionDialog_button;

	// Hyperlink
	public static String TernHyperlink_typeLabel;
	public static String TernHyperlink_text;

	// Tern Console Name
	public static String TernConsoleJob_name;

	public static String ConsoleTerminateAction_tooltipText;

	// Wizard
	public static String NewFileWizardPage_name_text;
	public static String NewFileWizardPage_container_text;
	public static String NewFileWizardPage_fileName_text;

	public static String NewTernDefWizard_windowTitle;
	public static String NewTernDefWizardPage_title;
	public static String NewTernDefWizardPage_description;

	public static String NewTernPluginWizard_windowTitle;
	public static String NewTernPluginWizardPage_title;
	public static String NewTernPluginWizardPage_description;

	private TernUIMessages() {
	}

	public static ResourceBundle getResourceBundle() {
		try {
			if (fResourceBundle == null)
				fResourceBundle = ResourceBundle.getBundle(BUNDLE_NAME);
		} catch (MissingResourceException x) {
			fResourceBundle = null;
		}
		return fResourceBundle;
	}

	static {
		NLS.initializeMessages(BUNDLE_NAME, TernUIMessages.class);
	}
}
