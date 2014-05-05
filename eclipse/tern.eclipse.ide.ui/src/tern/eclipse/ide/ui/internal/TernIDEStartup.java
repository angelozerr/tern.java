package tern.eclipse.ide.ui.internal;

import org.eclipse.ui.IStartup;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;

import tern.eclipse.ide.internal.ui.validation.JavaEditorTracker;

/**
 * Need this to make TernNatureTester work from early start
 * 
 * @author Victor Rubezhny
 */
public class TernIDEStartup implements IStartup {
	
	@Override
	public void earlyStartup() {
		final IWorkbench workbench = PlatformUI.getWorkbench();
		workbench.getDisplay().asyncExec(new Runnable() {
			public void run() {
				IWorkbenchWindow window = workbench.getActiveWorkbenchWindow();
				if (window != null) {
					JavaEditorTracker.getInstance();
				}
			}
		});
	}

}
