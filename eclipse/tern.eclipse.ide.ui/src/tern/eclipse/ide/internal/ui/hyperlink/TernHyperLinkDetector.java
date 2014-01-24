package tern.eclipse.ide.internal.ui.hyperlink;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.hyperlink.AbstractHyperlinkDetector;
import org.eclipse.jface.text.hyperlink.IHyperlink;
import org.eclipse.ui.texteditor.ITextEditor;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.utils.EditorUtils;

public class TernHyperLinkDetector extends AbstractHyperlinkDetector {

	public static final IHyperlink[] EMPTY_HYPERLINK = new IHyperlink[0];

	@Override
	public IHyperlink[] detectHyperlinks(ITextViewer textViewer,
			IRegion region, boolean canShowMultipleHyperlinks) {
		if (region == null || textViewer == null) {
			return null;
		}
		ITextEditor textEditor = (ITextEditor) getAdapter(ITextEditor.class);
		if (textEditor == null) {
			return null;
		}
		IResource resource = EditorUtils.getResource(textEditor);
		if (resource == null) {
			return null;
		}
		IProject project = resource.getProject();
		if (IDETernProject.hasTernNature(project)) {
			try {
				IDETernProject ternProject = IDETernProject
						.getTernProject(project);

				IDocument document = textViewer.getDocument();
				TernHyperlink hyperlink = new TernHyperlink(document, region,
						resource, ternProject);
				IHyperlink[] hyperlinks = new IHyperlink[1];
				hyperlinks[0] = hyperlink;
				return hyperlinks;

			} catch (CoreException e) {
				Trace.trace(Trace.WARNING, "Error while tern hyperlink", e);
			}
		}
		return null;
	}

}
