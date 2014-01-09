package tern.eclipse.ide.internal.ui.dialogs;

import org.eclipse.core.resources.IContainer;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.dialogs.FilteredResourcesSelectionDialog;

public class OpenResourceDialog extends FilteredResourcesSelectionDialog {

	public OpenResourceDialog(Shell shell, boolean multi, IContainer container,
			int typesMask) {
		super(shell, multi, container, typesMask);
	}

}
