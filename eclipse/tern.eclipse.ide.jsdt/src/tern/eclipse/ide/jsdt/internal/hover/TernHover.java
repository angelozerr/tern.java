package tern.eclipse.ide.jsdt.internal.hover;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.jface.text.IInformationControlCreator;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.ITextHoverExtension;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.ui.IEditorPart;
import org.eclipse.wst.jsdt.ui.text.java.hover.IJavaEditorTextHover;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.jsdt.internal.Trace;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.protocol.type.HTMLTernTypeCollector;
import tern.server.protocol.type.TernTypeQuery;

/**
 * Implementation of JSDT Text Hover with Tern.
 *
 */
public class TernHover implements IJavaEditorTextHover, ITextHoverExtension {

	private IEditorPart editor;

	@Override
	public String getHoverInfo(ITextViewer textViewer, IRegion hoverRegion) {
		IFile scriptFile = EditorUtils.getFile(editor);
		if (scriptFile == null) {
			return null;
		}
		IProject project = scriptFile.getProject();
		if (IDETernProject.hasTernNature(project)) {
			try {
				// project has tern nature, get hover info with tern.
				IDETernProject ternProject = IDETernProject
						.getTernProject(project);
				TernTypeQuery query = new TernTypeQuery(ternProject
						.getFileManager().getFileName(scriptFile),
						hoverRegion.getOffset());
				query.setDocs(true);
				query.setUrls(true);
				query.setTypes(true);

				HTMLTernTypeCollector collector = new HTMLTernTypeCollector();
				ternProject.request(query, scriptFile,
						textViewer.getDocument(), 0, collector);
				return collector.getInfo();
			} catch (Exception e) {
				Trace.trace(Trace.WARNING, "Error while tern hyperlink", e);
			}
		}
		return null;
	}

	@Override
	public IRegion getHoverRegion(ITextViewer textViewer, int offset) {
		return null;
	}

	@Override
	public IInformationControlCreator getHoverControlCreator() {
		return null;
	}

	@Override
	public void setEditor(IEditorPart editor) {
		this.editor = editor;
	}

}
