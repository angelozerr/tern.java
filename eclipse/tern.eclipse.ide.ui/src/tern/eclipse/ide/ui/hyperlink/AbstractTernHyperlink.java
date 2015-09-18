/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
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
import tern.server.protocol.ITernResultsAsyncCollector;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.utils.StringUtils;

/**
 * Abstract class to execute tern "definition" query with async mode, and open
 * an editor with the definition file.
 *
 */
public abstract class AbstractTernHyperlink
		implements IHyperlink, ITernDefinitionCollector, ITernResultsAsyncCollector {

	protected final IRegion region;
	protected final IIDETernProject ternProject;

	private IFile file;
	private Long start;
	private Long end;

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
		this.file = findFile(filename);
		this.start = start;
		this.end = end;
	}

	private IFile findFile(String filename) {
		if (StringUtils.isEmpty(filename)) {
			return null;
		}
		return ternProject.getIDEFile(filename);
	}

	@Override
	public final void open() {
		IFile file = getFile();
		Long start = getStart();
		Long end = getEnd();
		if (file != null && file.exists()) {
			EditorUtils.openInEditor(file, start != null ? start.intValue() : -1,
					start != null && end != null ? end.intValue() - start.intValue() : -1, true);
		}
	}

	/**
	 * Execute with async mode the tern "definition" query and returns true if
	 * the file was found.
	 * 
	 * @return
	 */
	public boolean isValid() {
		try {
			findDef();
		} catch (Exception e) {
			return false;
		}
		return file != null && file.exists();
	}

	public IFile getFile() {
		return file;
	}

	public Long getStart() {
		return start;
	}

	public Long getEnd() {
		return end;
	}

	@Override
	public void timeout(TimeoutReason reason) {

	}

	@Override
	public void done() {

	}

	@Override
	public String getRequestDisplayName() {
		return "Searching definition...";
	}

	/**
	 * Execute the tern "definition" query.
	 * 
	 * @throws Exception
	 */
	protected abstract void findDef() throws Exception;
}
