package tern.eclipse.ide.internal.ui.validation;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.Position;
import org.eclipse.jface.text.source.Annotation;
import org.eclipse.jface.text.source.IAnnotationModel;
import org.eclipse.ui.texteditor.ITextEditor;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.internal.ui.Trace;
import tern.server.TernPlugin;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.lint.TernLintQuery;

/**
 * As-You-Type validation Java files
 * 
 */
final public class JavaDirtyRegionProcessor extends DirtyRegionProcessor {

	private final ITextEditor editor;
	private final IFile file;
	private final IDETernProject ternProject;

	public JavaDirtyRegionProcessor(ITextEditor editor, IFile resource)
			throws CoreException {
		this.editor = editor;
		this.file = resource;
		this.ternProject = IDETernProject.getTernProject(resource.getProject());
	}

	@Override
	public synchronized void startReconciling() {
		super.startReconciling();
	}

	@Override
	protected void endProcessing() {
		super.endProcessing();
		IDocument document = getDocument();

		if (document != null) {
			if (ternProject.hasPlugin(TernPlugin.lint)) {
				TernLintQuery query = new TernLintQuery();

				final IAnnotationModel newModel = editor.getDocumentProvider()
						.getAnnotationModel(editor.getEditorInput());
				ITernLintCollector collector = new ITernLintCollector() {

					@Override
					public void addMessage(String message, Long start,
							Long end, String severity) {
						Annotation annotation = new Annotation(
								"org.eclipse.ui.workbench.texteditor."
										+ severity, true, message);
						Position position = new Position(start.intValue(),
								end.intValue() - start.intValue());
						newModel.addAnnotation(annotation, position);
					}
				};

				try {
					ternProject.request(query, file, document, collector);
				} catch (Exception e) {
					Trace.trace(Trace.SEVERE, "Error while tern validation.", e);
				}
			}
		}
	}

}