/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.jsdt.internal.ui.text.correction;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.text.source.Annotation;
import org.eclipse.jface.text.source.IAnnotationModel;
import org.eclipse.jface.text.source.IAnnotationModelExtension2;
import org.eclipse.ui.IEditorPart;
import org.eclipse.wst.jsdt.core.IJavaScriptUnit;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.EditorUtility;
import org.eclipse.wst.jsdt.ui.JavaScriptUI;
import org.eclipse.wst.jsdt.ui.text.java.IInvocationContext;
import org.eclipse.wst.jsdt.ui.text.java.IJavaCompletionProposal;
import org.eclipse.wst.jsdt.ui.text.java.IProblemLocation;
import org.eclipse.wst.jsdt.ui.text.java.IQuickFixProcessor;
import org.eclipse.wst.sse.ui.internal.reconcile.TemporaryAnnotation;

import tern.eclipse.ide.jsdt.internal.ui.contentassist.JSDTTernCompletionCollector;
import tern.server.protocol.lint.Fix;
import tern.utils.StringUtils;

/**
 * {@link IQuickFixProcessor} implementation wich uses tern {@link Fix}.
 *
 */
public class TernLintQuickFixProcessor implements IQuickFixProcessor {

	@Override
	public boolean hasCorrections(IJavaScriptUnit unit, int problemId) {
		// never called?
		return false;
	}

	@Override
	public IJavaCompletionProposal[] getCorrections(IInvocationContext context, IProblemLocation[] locations)
			throws CoreException {
		List<IJavaCompletionProposal> proposals = new ArrayList<IJavaCompletionProposal>();
		IJavaScriptUnit cu = context.getCompilationUnit();
		// tern stores fix (from eslint, etc) inside
		// TemporaryAnnotation#getAdditionalFixInfo
		// We must retrieve the original annotation to get the fix

		// Loop for origin annotations
		Iterator e = getOriginAnnotation(cu, locations);
		while (e.hasNext()) {
			Annotation annotation = (Annotation) e.next();
			Fix fix = getFix(annotation);
			if (fix != null) {
				// Annotation has tern Fix.
				proposals.add(new ReplaceTextProposal(cu, fix));
			}
		}
		return proposals.toArray(new IJavaCompletionProposal[proposals.size()]);
	}

	/**
	 * Returns the tern {@link Fix} from the given annotation and null
	 * otherwise.
	 * 
	 * @param annotation
	 * @return the tern {@link Fix} from the given annotation and null
	 *         otherwise.
	 */
	private Fix getFix(Annotation annotation) {
		if (annotation instanceof TemporaryAnnotation) {
			Object fixInfo = ((TemporaryAnnotation) annotation).getAdditionalFixInfo();
			return (fixInfo instanceof Fix) ? (Fix) fixInfo : null;
		}
		return null;
	}

	/**
	 * Returns the original {@link Annotation} from the given
	 * {@link IJavaScriptUnit} an {@link IProblemLocation} locations.
	 * 
	 * @param cu
	 * @param locations
	 * @return the original {@link Annotation} from the given
	 *         {@link IJavaScriptUnit} an {@link IProblemLocation} locations.
	 */
	private Iterator getOriginAnnotation(IJavaScriptUnit cu, IProblemLocation[] locations) {
		IEditorPart part = EditorUtility.isOpenInEditor(cu);
		IAnnotationModel model = JavaScriptUI.getDocumentProvider().getAnnotationModel(part.getEditorInput());
		if (model instanceof IAnnotationModelExtension2) {
			int start = 0;
			int end = 0;
			IProblemLocation location;
			for (int i = 0; i < locations.length; i++) {
				location = locations[i];
				if (i == 0) {
					start = location.getOffset();
					end = location.getOffset() + location.getLength();
				} else {
					if (start > location.getOffset()) {
						start = location.getOffset();
					}
					if (end < location.getOffset() + location.getLength()) {
						end = location.getOffset() + location.getLength();
					}
				}
			}
			return ((IAnnotationModelExtension2) model).getAnnotationIterator(start, end - start, true, true);
		}
		return model.getAnnotationIterator();
	}
}
