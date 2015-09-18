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

import org.eclipse.core.filebuffers.FileBuffers;
import org.eclipse.core.filebuffers.ITextFileBuffer;
import org.eclipse.core.filebuffers.ITextFileBufferManager;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.hyperlink.AbstractHyperlinkDetector;
import org.eclipse.jface.text.hyperlink.IHyperlink;
import org.eclipse.ui.texteditor.ITextEditor;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.internal.ui.hyperlink.TernHyperlink;
import tern.eclipse.ide.ui.JavaWordFinder;
import tern.eclipse.ide.ui.utils.EditorUtils;

/**
 * Tern Hyperlink detector.
 *
 */
public class TernHyperLinkDetector extends AbstractHyperlinkDetector {

	@Override
	public IHyperlink[] detectHyperlinks(ITextViewer textViewer,
			IRegion region, boolean canShowMultipleHyperlinks) {
		if (region == null || textViewer == null) {
			return null;
		}
		// Get resource from the given text viewer.
		IResource resource = getResource(textViewer);
		if (resource == null) {
			return null;
		}
		IProject project = resource.getProject();
		if (TernCorePlugin.hasTernNature(project)) {
			// the project of the resource has tern nature, execute tern
			// hyperlink.
			try {
				IIDETernProject ternProject = TernCorePlugin
						.getTernProject(project);
				IDocument document = textViewer.getDocument();
				IRegion wordRegion= JavaWordFinder.findWord(document, region.getOffset());
				TernHyperlink hyperlink = new TernHyperlink(document, wordRegion,
						resource, ternProject);
				if (hyperlink.isValid()) {
					IHyperlink[] hyperlinks = new IHyperlink[1];
					hyperlinks[0] = hyperlink;
					return hyperlinks;
				}
				return null;

			} catch (CoreException e) {
				Trace.trace(Trace.WARNING, "Error while tern hyperlink", e);
			}
		}
		return null;
	}

	/**
	 * Returns the {@link IResource} from the given text viewer and null
	 * otherwise.
	 * 
	 * @param textViewer
	 * @return the {@link IResource} from the given text viewer and null
	 *         otherwise.
	 */
	protected IResource getResource(ITextViewer textViewer) {
		ITextEditor textEditor = (ITextEditor) getAdapter(ITextEditor.class);
		if (textEditor != null) {
			return EditorUtils.getResource(textEditor);
		}
		ITextFileBufferManager bufferManager = FileBuffers
				.getTextFileBufferManager();
		ITextFileBuffer textFileBuffer = bufferManager
				.getTextFileBuffer(textViewer.getDocument());
		if (textFileBuffer != null) {
			IPath location = textFileBuffer.getLocation();
			return ResourcesPlugin.getWorkspace().getRoot()
					.findMember(location);
		}
		return null;
	}

}
