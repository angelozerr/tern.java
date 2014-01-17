package tern.eclipse.ide.ui.viewers;

import org.eclipse.core.resources.IResource;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.model.WorkbenchLabelProvider;

import tern.eclipse.ide.core.scriptpath.ITernScriptPath;
import tern.eclipse.ide.ui.ImageResource;

public class TernScriptPathLabelProvider extends LabelProvider {

	private final WorkbenchLabelProvider provider = new WorkbenchLabelProvider();

	@Override
	public String getText(Object element) {
		if (!(element instanceof ITernScriptPath)) {
			return super.getText(element);
		}

		IResource res = ((ITernScriptPath) element).getResource();
		String str = res.getName();
		str = str + " - "
				+ res.getParent().getFullPath().makeRelative().toString();
		return str;
	}

	@Override
	public Image getImage(Object element) {
		if ((element instanceof ITernScriptPath)) {
			IResource res = ((ITernScriptPath) element).getResource();
			return provider.getImage(res);
		}
		if ((element instanceof String)) {
			return ImageResource.getImage(ImageResource.IMG_SCRIPT);
		}
		return super.getImage(element);
	}

}
