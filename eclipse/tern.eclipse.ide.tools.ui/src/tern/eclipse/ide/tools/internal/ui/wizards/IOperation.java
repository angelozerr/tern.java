package tern.eclipse.ide.tools.internal.ui.wizards;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;

public interface IOperation {

	void init();

	void run(IProgressMonitor monitor) throws CoreException;
	
	int getTotal();
	
}
