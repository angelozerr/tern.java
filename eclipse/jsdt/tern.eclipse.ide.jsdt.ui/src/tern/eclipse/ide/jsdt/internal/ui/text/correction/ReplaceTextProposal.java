package tern.eclipse.ide.jsdt.internal.ui.text.correction;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.TextUtilities;
import org.eclipse.text.edits.InsertEdit;
import org.eclipse.text.edits.ReplaceEdit;
import org.eclipse.text.edits.TextEdit;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.IJavaScriptUnit;
import org.eclipse.wst.jsdt.internal.corext.util.Strings;
import org.eclipse.wst.jsdt.internal.ui.JavaPluginImages;
import org.eclipse.wst.jsdt.internal.ui.JavaUIStatus;
import org.eclipse.wst.jsdt.internal.ui.text.correction.CUCorrectionProposal;

public class ReplaceTextProposal extends CUCorrectionProposal {

 	private final int start;
 	private final int end;
	private final String fComment;

	public ReplaceTextProposal(String name, IJavaScriptUnit cu, int relevance, int start, int end, String comment) {
		super(name, cu, relevance, JavaPluginImages.get(JavaPluginImages.IMG_OBJS_JAVADOCTAG));
		this.start= start;
		this.end = end;
		fComment= comment;
	}

	protected void addEdits(IDocument document, TextEdit rootEdit) throws CoreException {
		//try {
//			String lineDelimiter= TextUtilities.getDefaultLineDelimiter(document);
//			final IJavaScriptProject project= getCompilationUnit().getJavaScriptProject();
//			IRegion region= document.getLineInformationOfOffset(fInsertPosition);

//			String lineContent= document.get(region.getOffset(), region.getLength());
//			String indentString= Strings.getIndentString(lineContent, project);
			String str= fComment;//Strings.changeIndent(fComment, 0, project, indentString, lineDelimiter);
			ReplaceEdit edit= new ReplaceEdit(start, end- start, fComment);
			rootEdit.addChild(edit);
//			if (fComment.charAt(fComment.length() - 1) != '\n') {
//				rootEdit.addChild(new InsertEdit(fInsertPosition, lineDelimiter));
//				rootEdit.addChild(new InsertEdit(fInsertPosition, indentString));
//			}
		/*} catch (BadLocationException e) {
			throw new CoreException(JavaUIStatus.createError(IStatus.ERROR, e));
		}*/
	}
}


