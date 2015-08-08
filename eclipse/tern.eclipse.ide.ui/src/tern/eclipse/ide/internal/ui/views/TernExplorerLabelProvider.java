package tern.eclipse.ide.internal.ui.views;

import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.graphics.Image;

import tern.eclipse.jface.images.TernImagesRegistry;
import tern.server.protocol.outline.JSNode;

public class TernExplorerLabelProvider extends LabelProvider {

	@Override
	public String getText(Object element) {
		if (element instanceof JSNode) {
			return ((JSNode) element).getName();
		}
		return super.getText(element);
	}

	@Override
	public Image getImage(Object element) {
		if (element instanceof JSNode) {
			String jsType = ((JSNode) element).getType();
			boolean isFunction = jsType != null ? jsType.startsWith("fn(") : false;
			boolean isArray = jsType != null ? jsType.startsWith("[") : false;
			return TernImagesRegistry.getImage(jsType, isFunction, isArray, false);
		}
		return super.getImage(element);
	}
}
