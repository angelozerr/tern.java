/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.viewers;

import org.eclipse.core.resources.IResource;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.model.WorkbenchLabelProvider;

import tern.eclipse.ide.core.scriptpath.IScriptResource;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath;
import tern.eclipse.ide.ui.ImageResource;

public class TernScriptPathLabelProvider extends LabelProvider {

	private final WorkbenchLabelProvider provider = new WorkbenchLabelProvider();

	@Override
	public String getText(Object element) {
		if (element instanceof IScriptResource) {
			return ((IScriptResource) element).getLabel();
		}
		if (!(element instanceof ITernScriptPath)) {
			return super.getText(element);
		}

		ITernScriptPath scriptPath = ((ITernScriptPath) element);
		IResource resource = scriptPath.getResource();
		String externalLabel = scriptPath.getExternalLabel();
		return getText(resource, scriptPath.getExternalLabel());
	}

	private String getText(IResource resource, String externalLabel) {
		if (resource.getType() == IResource.PROJECT) {
			if (externalLabel != null) {
				return new StringBuilder(resource.getName()).append(" (")
						.append(externalLabel).append(")").toString();
			}
			return resource.getName();
		}
		StringBuilder text = new StringBuilder(resource.getName())
				.append(" - ").append(
						resource.getParent().getFullPath().makeRelative()
								.toString());
		if (externalLabel != null) {
			text.append(" (").append(externalLabel).append(")");
		}
		return text.toString();
	}

	@Override
	public Image getImage(Object element) {
		if (element instanceof ITernScriptPath) {
			IResource res = ((ITernScriptPath) element).getResource();
			return provider.getImage(res);
		}
		if (element instanceof IScriptResource) {
			return ImageResource.getImage(ImageResource.IMG_SCRIPT);
		}
		return super.getImage(element);
	}

}
