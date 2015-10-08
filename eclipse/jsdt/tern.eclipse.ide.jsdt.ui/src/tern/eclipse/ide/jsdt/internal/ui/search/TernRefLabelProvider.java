package tern.eclipse.ide.jsdt.internal.ui.search;

import org.eclipse.jface.viewers.LabelProvider;

public class TernRefLabelProvider extends LabelProvider {

	@Override
	public String getText(Object element) {
		if (element instanceof TernRef) {
			TernRef ref = (TernRef) element;
			return ref.getFile().getName();
		}
		return super.getText(element);
	}
}
