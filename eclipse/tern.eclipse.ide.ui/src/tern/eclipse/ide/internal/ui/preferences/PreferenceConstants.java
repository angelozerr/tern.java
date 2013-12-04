package tern.eclipse.ide.internal.ui.preferences;

import org.eclipse.jface.preference.IPreferenceStore;

import tern.eclipse.ide.internal.ui.TernUIPlugin;

public class PreferenceConstants {

	public static IPreferenceStore getPreferenceStore() {
		return TernUIPlugin.getDefault().getPreferenceStore();
	}

	/**
	 * Initializes the given preference store with the default values.
	 */
	public static void initializeDefaultValues() {
		IPreferenceStore store = getPreferenceStore();

		// Defaults for the Typing preference page
		//store.setDefault(TernUIPreferenceNames.TYPING_COMPLETE_END_EL, true);

	}
}
