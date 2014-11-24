/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.hover;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.internal.text.html.BrowserInformationControl;
import org.eclipse.swt.widgets.Display;

import tern.eclipse.ide.core.IIDETernProjectProvider;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.eclipse.jface.text.HoverLocationListener;

/**
 * IDE hover location listener.
 *
 */
public class IDEHoverLocationListener extends HoverLocationListener {

	private final IIDETernProjectProvider provider;

	public IDEHoverLocationListener(BrowserInformationControl control,
			IIDETernProjectProvider provider) {
		super(control);
		this.provider = provider;
	}

	@Override
	protected void handleTernLink(String loc, Display display) {
		super.handleTernLink(loc, display);
		IFile file = provider.getTernProject().getIDEFile(loc);
		if (file.exists()) {
			EditorUtils.openInEditor(file, -1, -1, true);

		}
	}

}
