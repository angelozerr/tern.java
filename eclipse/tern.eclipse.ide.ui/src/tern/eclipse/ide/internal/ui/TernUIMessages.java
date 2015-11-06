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
	public static String Button_add;
	public static String Button_edit;
	public static String Button_remove;
	public static String Button_newFolder;
	public static String Button_selectPath;
	public static String Button_browse;
	public static String Button_refresh;
	public static String Button_import;

	// Commands
	public static String ConvertProjectToTern_converting_project_job_title;

	// Preferences
	public static String TernGlobalPreferencesPage_desc;

	public static String TernGlobalPreferencesPage_disable_async_reqs;
	
	public static String TernServerPreferencesPage_desc;
	public static String TernServerPreferencesPage_serverType;

	// Commons Property preferences
	public static String EnableProjectSettings;
	public static String ConfigureWorkspaceSettings;
	public static String ConfigureProjectSettings;
	public static String PropertyPreferencePage_02;
	public static String PropertyPreferencePage_01;

	// ---------- Properties page

	// Tern Main property page
	public static String TernMainPropertyPage_ecmaGroup_label;
	public static String TernMainPropertyPage_ecmaVersion;
	public static String TernMainPropertyPage_useESModules;
	public static String TernMainPropertyPage_jsdocGroup_label;
	public static String TernMainPropertyPage_useJSDoc;
	public static String TernMainPropertyPage_useJSDoc_tooltipText;
	public static String TernMainPropertyPage_JSDocStrong;
	public static String TernMainPropertyPage_JSDocStrong_tooltipText;
	
	// Tern Modules property page
	public static String TernModulesPropertyPage_desc;
	public static String TernModulesBlock_moduleName;
	public static String TernModulesBlock_moduleVersion;
	public static String TernModulesBlock_detailsTabLabel;
	public static String TernModulesBlock_dependenciesTabLabel;
	public static String TernModulesBlock_optionsTabLabel;
	public static String TernModuleDetailsPanel_homepage;
	public static String TernModuleDetailsPanel_author;
	public static String TernModuleDetailsPanel_repositoryURL;
	public static String TernModuleDetailsPanel_bugsURL;
	public static String TernModuleDetailsPanel_helpURL;
	public static String DetailsPanel_noSelectionLabel;
	public static String TernModuleOptionsPanel_selectPathDialogTitle;
	public static String PathTernModuleOptionFactory_validatePath;
	public static String FinderTernModuleOptionFactory_paths_filenameColumn;
	public static String TernModuleOptionsPanel_paths_pathColumn;
	public static String LintRulesTernModuleOptionFactory_rules_ruleColumn;
	public static String LintRulesTernModuleOptionFactory_rules_severityColumn;

	// Repository block
	public static String TernRepositoryBlock_modules_desc;
	public static String TernRepositoryBlock_repositoryName;
	public static String TernRepositoryBlock_filenameColumn;
	public static String TernRepositoryBlock_removeRepository_title;
	public static String TernRepositoryBlock_removeRepository_message;

	public static String EditRepositoryDialog_title;
	public static String EditRepositoryDialog_desc;
	public static String EditRepositoryDialog_name_label;
	public static String EditRepositoryDialog_ternBaseDir_label;
	public static String EditRepositoryDialog_directoryDialog_title;
	public static String EditRepositoryDialog_directoryDialog_desc;
	public static String EditRepositoryDialog_name_required;
	public static String EditRepositoryDialog_name_forbiddenToken;
	public static String EditRepositoryDialog_name_alreadyExists;
	public static String EditRepositoryDialog_ternBaseDir_required;
	public static String EditRepositoryDialog_ternBaseDir_doesntExists;
	public static String EditRepositoryDialog_ternBaseDir_notDir;
	public static String EditRepositoryDialog_ternBaseDir_notValid;

	public static String TernScriptPathsBlock_desc;

	public static String TernDevelopmentPreferencesPage_traceOnConsole_label;
	public static String TernDevelopmentPreferencesPage_loadingLocalPlugin_label;

	public static String TernRepositoryFieldEditor_ternRepository_none;
	public static String TernRepositoryFieldEditor_ternRepository_not_imported;
	public static String TernRepositoryFieldEditor_ternRepository_err_not_selected;
	public static String TernRepositoryFieldEditor_ternRepository_err_not_imported;
	
	// Hyperlink
	public static String TernHyperlink_typeLabel;
	public static String TernHyperlink_text;

	// Tern Console Name
	public static String TernConsoleJob_name;

	public static String ConsoleTerminateAction_tooltipText;

	// Content assist preferences
	public static String TernContentAssistPreferencesPage_filteringGroup_label;
	public static String TernContentAssistPreferencesPage_expandFunction_label;
	public static String TernContentAssistPreferencesPage_omitObjectPrototype_label;
	public static String TernContentAssistPreferencesPage_guess_label;
	public static String TernContentAssistPreferencesPage_insertionGroup_label;
	public static String TernContentAssistPreferencesPage_indentation_label;
	public static String TernContentAssistPreferencesPage_functionInsertionGroup_label;
	public static String TernContentAssistPreferencesPage_generateAnonymousFunction_label;
	public static String TernContentAssistPreferencesPage_objLitInsertionGroup_label;

	// Validation preferences

	// Tern Hover
	public static String TernHover_openDeclaration;

	// Timeout proposal
	public static String TimeoutProposal_longCalculate;
	public static String TimeoutProposal_serverProcessing;

	// Tern Explorer View
	public static String TerminateTernServerAction_text;
	public static String TerminateTernServerAction_tooltip;

	// Refresh outline
	public static String refreshOutline;
	public static String TernOutline_computing;

	// Wizards
	public static String ImportTernRepositoryWizard_title;
	public static String ImportTernRepositoryWizardPage_name_label;
	public static String ImportTernRepositoryWizardPage_location_label;
	public static String ImportTernRepositoryWizardPage_CreateProjectTask;
	public static String ImportTernRepositoryWizardPage_errorMessage;
	public static String ImportTernRepositoryWizardPage_title;
	public static String ImportTernRepositoryWizardPage_description;
	
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
