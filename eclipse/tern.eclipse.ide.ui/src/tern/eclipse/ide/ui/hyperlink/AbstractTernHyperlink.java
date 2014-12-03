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
package tern.eclipse.ide.ui.hyperlink;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.hyperlink.IHyperlink;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.utils.StringUtils;

public abstract class AbstractTernHyperlink implements IHyperlink,
		ITernDefinitionCollector {

	protected final IRegion region;
	protected final IIDETernProject ternProject;

	public AbstractTernHyperlink(IRegion region, IIDETernProject ternProject) {
		this.region = region;
		this.ternProject = ternProject;
	}

	@Override
	public IRegion getHyperlinkRegion() {
		return region;
	}

	@Override
	public void setDefinition(String filename, Long start, Long end) {
		IFile file = getFile(filename);
		if (file != null && file.exists()) {
			EditorUtils.openInEditor(
					file,
					start != null ? start.intValue() : -1,
					start != null && end != null ? end.intValue()
							- start.intValue() : -1, true);
		}
	}

	private IFile getFile(String filename) {
		if (StringUtils.isEmpty(filename)) {
			return null;
		}
		return ternProject.getIDEFile(filename);
	}
}
