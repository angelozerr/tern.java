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
package tern.eclipse.ide.ui.hover;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.jface.text.IInformationControlCreator;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.ITextHoverExtension;
import org.eclipse.jface.text.ITextHoverExtension2;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.information.IInformationProviderExtension2;
import org.eclipse.ui.IEditorPart;

import tern.ITernFile;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.eclipse.jface.text.TernBrowserInformationControlInput;
import tern.server.protocol.type.TernTypeQuery;

/**
 * Tern Hover.
 *
 */
public class TernHover extends AbstractTernHover implements
		ITextHoverExtension, ITextHoverExtension2,
		IInformationProviderExtension2, ITernHoverInfoProvider {

	private IInformationControlCreator fHoverControlCreator;
	private IInformationControlCreator fPresenterControlCreator;
	private IIDETernProject ternProject;
	private Integer offset;
	private ITernFile file;

	@Override
	public String getHoverInfo(ITextViewer textViewer, IRegion hoverRegion) {
		TernBrowserInformationControlInput info = (TernBrowserInformationControlInput) getHoverInfo2(
				textViewer, hoverRegion);
		return info != null ? info.getHtml() : null;
	}

	@Override
	public Object getHoverInfo2(ITextViewer textViewer, IRegion hoverRegion) {
		this.ternProject = null;
		this.offset = null;

		IFile scriptFile = getFile(textViewer);
		if (scriptFile == null) {
			return null;
		}
		IProject project = scriptFile.getProject();
		if (TernCorePlugin.hasTernNature(project)) {
			try {
				// project has tern nature, get hover info with tern.
				this.ternProject = TernCorePlugin.getTernProject(project);
				this.file = new TernDocumentFile(scriptFile,
						textViewer.getDocument());
				String filename = file.getFullName(ternProject);
				this.offset = hoverRegion.getOffset();
				TernTypeQuery query = new TernTypeQuery(filename, offset);
				query.setDocs(true);
				query.setUrls(true);
				query.setTypes(true);

				HTMLTernTypeCollector collector = new HTMLTernTypeCollector(ternProject);
				ternProject.request(query, file, collector);
				return new TernBrowserInformationControlInput(null,
						collector.getInfo(), 20);
			} catch (Exception e) {
				Trace.trace(Trace.WARNING, "Error while tern hyperlink", e);
			}
		}
		return null;
	}

	protected IFile getFile(ITextViewer textViewer) {
		IEditorPart editor = getEditor();
		if (editor != null) {
			return EditorUtils.getFile(editor);
		}

		return EditorUtils.getFile(textViewer.getDocument());
	}

	@Override
	public IInformationControlCreator getHoverControlCreator() {
		if (fHoverControlCreator == null)
			fHoverControlCreator = new IDEHoverControlCreator(
					getInformationPresenterControlCreator(), this);
		return fHoverControlCreator;
	}

	@Override
	public IInformationControlCreator getInformationPresenterControlCreator() {
		if (fPresenterControlCreator == null)
			fPresenterControlCreator = new IDEPresenterControlCreator(this);
		return fPresenterControlCreator;
	}

	@Override
	public IIDETernProject getTernProject() {
		return ternProject;
	}

	@Override
	public ITernFile getFile() {
		return file;
	}

	@Override
	public Integer getOffset() {
		return offset;
	}

}
