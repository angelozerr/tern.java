package tern.eclipse.ide.jsdt.internal.ui.text.correction;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.text.source.Annotation;
import org.eclipse.jface.text.source.IAnnotationModel;
import org.eclipse.ltk.core.refactoring.Change;
import org.eclipse.ltk.core.refactoring.TextFileChange;
import org.eclipse.ui.IEditorPart;
import org.eclipse.wst.jsdt.core.IJavaScriptUnit;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.EditorUtility;
import org.eclipse.wst.jsdt.internal.ui.text.correction.ChangeCorrectionProposal;
import org.eclipse.wst.jsdt.ui.JavaScriptUI;
import org.eclipse.wst.jsdt.ui.text.java.IInvocationContext;
import org.eclipse.wst.jsdt.ui.text.java.IJavaCompletionProposal;
import org.eclipse.wst.jsdt.ui.text.java.IProblemLocation;
import org.eclipse.wst.jsdt.ui.text.java.IQuickFixProcessor;
import org.eclipse.wst.sse.ui.internal.reconcile.TemporaryAnnotation;

import tern.server.protocol.lint.Fix;
import tern.utils.StringUtils;

public class TernLintQuickFixProcessor implements IQuickFixProcessor {

	@Override
	public boolean hasCorrections(IJavaScriptUnit unit, int problemId) {
		// never called?
		return false;
	}

	@Override
	public IJavaCompletionProposal[] getCorrections(IInvocationContext context, IProblemLocation[] locations)
			throws CoreException {
		IJavaScriptUnit cu = context.getCompilationUnit();
		List<IJavaCompletionProposal> proposals = new ArrayList<IJavaCompletionProposal>();
		IEditorPart part = EditorUtility.isOpenInEditor(cu);
		IAnnotationModel model = JavaScriptUI.getDocumentProvider().getAnnotationModel(part.getEditorInput());
		TemporaryAnnotation t = null;
		Object fixInfo = null;
		Iterator e = model.getAnnotationIterator();
		while (e.hasNext()) {
			Annotation a = (Annotation) e.next();
			if (a instanceof TemporaryAnnotation) {
				t = (TemporaryAnnotation) a;
				fixInfo = t.getAdditionalFixInfo();
				if (fixInfo instanceof Fix) {
					Fix fix = (Fix) fixInfo;
					proposals.add(new ReplaceTextProposal(StringUtils.isEmpty(fix.getLabel()) ? "Fix" : fix.getLabel(),
							cu, 1, fix.getStart().intValue(), fix.getEnd().intValue(), fix.getText()));
				}
			}
		}
		return proposals.toArray(new IJavaCompletionProposal[0]);
	}

}
