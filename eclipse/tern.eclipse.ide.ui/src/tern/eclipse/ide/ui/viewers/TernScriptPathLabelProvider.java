/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.eclipse.ide.ui.viewers;

import org.eclipse.core.resources.IResource;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.model.WorkbenchLabelProvider;

import tern.eclipse.ide.ui.ImageResource;
import tern.scriptpath.ITernScriptResource;
import tern.scriptpath.ITernScriptPath;

public class TernScriptPathLabelProvider extends LabelProvider {

	private final WorkbenchLabelProvider provider = new WorkbenchLabelProvider();

	@Override
	public String getText(Object element) {
		if (element instanceof ITernScriptResource) {
			return ((ITernScriptResource) element).getLabel();
		}
		if (element instanceof ITernScriptPath) {
			return ((ITernScriptPath)element).getLabel();
		}
		
		return super.getText(element);
	}

	@Override
	public Image getImage(Object element) {
		if (element instanceof ITernScriptPath) {
			IResource res = (IResource) ((ITernScriptPath) element).getAdapter(IResource.class);
			return provider.getImage(res);
		}
		if (element instanceof ITernScriptResource) {
			return ImageResource.getImage(ImageResource.IMG_SCRIPT);
		}
		return super.getImage(element);
	}

}
