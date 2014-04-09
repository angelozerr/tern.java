package tern.eclipse.ide.ui.internal;

import org.eclipse.ui.IStartup;

/**
 * Need this to make TernNatureTester work from early start
 * 
 * @author Victor Rubezhny
 */
public class TernIDEStartup implements IStartup {
	
	@Override
	public void earlyStartup() {
		// Nothing really to do here, but need this to make TernNatureTester work from early start
	}

}
