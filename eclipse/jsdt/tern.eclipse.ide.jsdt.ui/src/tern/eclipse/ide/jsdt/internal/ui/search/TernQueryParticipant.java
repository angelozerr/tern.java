package tern.eclipse.ide.jsdt.internal.ui.search;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.search.ui.text.Match;
import org.eclipse.ui.PartInitException;
import org.eclipse.wst.jsdt.core.IJavaScriptElement;
import org.eclipse.wst.jsdt.core.ILocalVariable;
import org.eclipse.wst.jsdt.core.ISourceRange;
import org.eclipse.wst.jsdt.core.ISourceReference;
import org.eclipse.wst.jsdt.core.JavaScriptModelException;
import org.eclipse.wst.jsdt.ui.search.ElementQuerySpecification;
import org.eclipse.wst.jsdt.ui.search.IMatchPresentation;
import org.eclipse.wst.jsdt.ui.search.IQueryParticipant;
import org.eclipse.wst.jsdt.ui.search.ISearchRequestor;
import org.eclipse.wst.jsdt.ui.search.QuerySpecification;

import tern.ITernFile;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.protocol.refs.ITernRefCollector;
import tern.server.protocol.refs.TernRefsQuery;

public class TernQueryParticipant implements IQueryParticipant, IMatchPresentation {

	@Override
	public void search(final ISearchRequestor requestor, QuerySpecification querySpecification,
			IProgressMonitor monitor) throws CoreException {
		if (querySpecification instanceof ElementQuerySpecification) {
			// element search (eg. from global find references in Java file)
			ElementQuerySpecification elementQuery = (ElementQuerySpecification) querySpecification;
			IJavaScriptElement jsElement = elementQuery.getElement();
			IResource resource = jsElement.getResource();
			if (resource == null || resource.getType() != IResource.FILE) {
				return;
			}
			IFile file = (IFile) resource;
			IProject project = file.getProject();
			if (TernCorePlugin.hasTernNature(project)) {
				final IIDETernProject ternProject = TernCorePlugin.getTernProject(project);
				IDocument document = EditorUtils.getDocument(file);
				ITernFile ternFile = document != null ? new TernDocumentFile(file, document) : null;

				Integer end = getEnd(jsElement);
				if (end != null) {
					String filename = ternFile.getFullName(ternProject);
					TernRefsQuery query = new TernRefsQuery(filename, end);
					ITernRefCollector collector = new ITernRefCollector() {

						@Override
						public void setDefinition(String filename, Long start, Long end) {
							IFile file = ternProject.getIDEFile(filename);
							Match match = new Match(new TernRef(file), start.intValue(),
									(end.intValue() - start.intValue()));
							requestor.reportMatch(match);
						}
					};
					try {
						ternProject.request(query, ternFile, collector);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
				// IWorkbenchWindow[] windows =
				// JSDTTernUIPlugin.getDefault().getWorkbench().getWorkbenchWindows();
				// for (int i = 0; i < windows.length; i++) {
				// IWorkbenchPage page = windows[i].getActivePage();
				// if (page != null) {
				// IEditorPart part = page.getActiveEditor();
				// if (part instanceof AbstractTextEditor) {
				// ISelection selection = ((AbstractTextEditor)
				// part).getSelectionProvider().getSelection();
				// if (selection != null && !selection.isEmpty() && selection
				// instanceof ITextSelection) {
				// ITextSelection textSelection = (ITextSelection) selection;
				// end = textSelection.getOffset() + textSelection.getLength();
				// break;
				// }
				// }
				// }
				// }
			}
		}

	}

	protected Integer getEnd(IJavaScriptElement jsElement) {
		ISourceRange range = null;
		if (jsElement instanceof ILocalVariable) {
			range = ((ILocalVariable) jsElement).getNameRange();
		} else if (jsElement instanceof ISourceReference) {
			try {
				range = ((ISourceReference) jsElement).getSourceRange();
			} catch (JavaScriptModelException e) {				
				e.printStackTrace();
			}
		}
		if (range != null) {
			return range.getOffset() + range.getLength();
		}
		return null;
	}

	@Override
	public int estimateTicks(QuerySpecification specification) {
		return 0;
	}

	@Override
	public IMatchPresentation getUIParticipant() {
		return this;
	}

	@Override
	public ILabelProvider createLabelProvider() {
		return new TernRefLabelProvider();
	}

	@Override
	public void showMatch(Match match, int currentOffset, int currentLength, boolean activate)
			throws PartInitException {
		Object element = match.getElement();
		if (element instanceof TernRef) {
			IFile file = ((TernRef) element).getFile();
			EditorUtils.openInEditor(file, currentOffset, currentLength, activate);
		}
	}

}
