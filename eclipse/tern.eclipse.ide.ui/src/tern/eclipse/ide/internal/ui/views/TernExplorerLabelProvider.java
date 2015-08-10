package tern.eclipse.ide.internal.ui.views;

import org.eclipse.jface.viewers.DelegatingStyledCellLabelProvider.IStyledLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.jface.viewers.StyledString;
import org.eclipse.swt.graphics.Image;

import tern.eclipse.jface.images.TernImagesRegistry;
import tern.server.protocol.outline.JSNode;
import tern.utils.StringUtils;

public class TernExplorerLabelProvider extends LabelProvider implements IStyledLabelProvider {

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

	@Override
	public StyledString getStyledText(Object element) {
		if (element instanceof JSNode) {
			JSNode node = ((JSNode) element);
			StyledString buff = new StyledString(StringUtils.isEmpty(node.getName()) ? "" : node.getName());
			String type = node.getType();
			if (!StringUtils.isEmpty(type)) {
				buff.append(" : ", StyledString.DECORATIONS_STYLER);
				buff.append(type, StyledString.DECORATIONS_STYLER);
			}
			return buff;
		}
		return null;
	}
}
