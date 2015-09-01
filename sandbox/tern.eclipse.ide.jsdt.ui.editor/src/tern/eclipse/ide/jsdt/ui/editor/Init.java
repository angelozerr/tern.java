package tern.eclipse.ide.jsdt.ui.editor;

import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.ui.IStartup;
import org.eclipse.wst.jsdt.ui.text.IColorManager;
import org.eclipse.wst.jsdt.ui.text.IJavaScanner;
import org.eclipse.wst.jsdt.ui.text.IJavaScannerFactory;
import org.eclipse.wst.jsdt.ui.text.SCANNER;

public class Init implements IStartup {

	@Override
	public void earlyStartup() {
		SCANNER.factory = new IJavaScannerFactory() {

			public IJavaScanner create(IColorManager manager, IPreferenceStore store) {
				return new JSDTTernTokenScanner(manager, store);
			}
		};
	}

}
