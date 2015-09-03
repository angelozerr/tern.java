package tern.eclipse.ide.ui.viewers;

import org.eclipse.jface.viewers.LabelProvider;

import tern.EcmaVersion;

public class ECMAVersionLabelProvider extends LabelProvider {

	public static final LabelProvider INSTANCE = new ECMAVersionLabelProvider();

	@Override
	public String getText(Object element) {
		if (element instanceof EcmaVersion) {
			return ((EcmaVersion) element).getVersionLabel();
		}
		return super.getText(element);
	}
}
