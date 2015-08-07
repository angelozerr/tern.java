package tern.eclipse.ide.internal.ui.views;

import org.eclipse.jface.viewers.LabelProvider;

import tern.server.protocol.outline.JSNode;

public class TernExplorerLabelProvider extends LabelProvider {

	@Override
	public String getText(Object element) {
		if (element instanceof JSNode) {
			return ((JSNode) element).getName();
		}
		return super.getText(element);
	}
}
