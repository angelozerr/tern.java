package tern.eclipse.ide.internal.ui.hyperlink;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.hyperlink.AbstractTernHyperlink;
import tern.eclipse.ide.ui.utils.IDETernProtcolHelper;
import tern.server.protocol.TernDoc;
import tern.server.protocol.definition.TernDefinitionQuery;

public class TernHyperlink extends AbstractTernHyperlink {

	private final IDocument document;
	private final IResource resource;

	public TernHyperlink(IDocument document, IRegion region,
			IResource resource, IDETernProject ternProject) {
		super(region, ternProject);
		this.document = document;
		this.resource = resource;
	}

	@Override
	public String getTypeLabel() {
		// TODO Auto-generated method stub
		return TernUIMessages.TernHyperlinkTypeLabel;
	}

	@Override
	public String getHyperlinkText() {
		return TernUIMessages.TernHyperlinkText;
	}

	public TernDoc createDoc() {
		IFile file = (IFile) resource;
		String filename = ternProject.getFileManager().getFileName(file);
		Integer pos = region.getOffset();
		TernDefinitionQuery query = new TernDefinitionQuery(filename, pos);
		TernDoc doc = new TernDoc(query);
		IDETernProtcolHelper.updateDoc(doc, file, document,
				ternProject.getFileManager());
		return doc;
	}

}
