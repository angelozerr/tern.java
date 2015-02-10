package tern.eclipse.ide.ui.hover;

import java.util.Iterator;

import org.eclipse.core.filebuffers.FileBuffers;
import org.eclipse.core.filebuffers.ITextFileBufferManager;
import org.eclipse.core.filebuffers.LocationKind;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.Position;
import org.eclipse.jface.text.source.Annotation;
import org.eclipse.jface.text.source.IAnnotationModel;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IStorageEditorInput;
import org.eclipse.ui.editors.text.EditorsUI;
import org.eclipse.ui.texteditor.AnnotationPreference;
import org.eclipse.ui.texteditor.DefaultMarkerAnnotationAccess;

import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.internal.ui.validation.TernAnnotation;

public class ProblemTernHover extends AbstractTernHover {

	private DefaultMarkerAnnotationAccess fAnnotationAccess = new DefaultMarkerAnnotationAccess();

	@Override
	public String getHoverInfo(ITextViewer textViewer, IRegion hoverRegion) {
		IPath path;
		IAnnotationModel model;
		if (textViewer instanceof ISourceViewer) {
			path = null;
			model = ((ISourceViewer) textViewer).getAnnotationModel();
		} else {
			// Get annotation model from file buffer manager
			path = getEditorInputPath();
			model = getAnnotationModel(path);
		}
		if (model == null)
			return null;
		try {
			Iterator e = model.getAnnotationIterator();
			int layer = -1;
			String message = null;
			while (e.hasNext()) {
				Annotation a = (Annotation) e.next();
				if (!(a instanceof TernAnnotation)) {
					continue;
				}
				AnnotationPreference preference = getAnnotationPreference(a);
//				if (preference == null
//						|| !(preference.getTextPreferenceKey() != null
//						/*
//						 * && fStore.getBoolean(preference
//						 * .getTextPreferenceKey()
//						 */)
//						|| (preference.getHighlightPreferenceKey() != null /*
//																			 * &&
//																			 * fStore
//																			 * .
//																			 * getBoolean
//																			 * (
//																			 * preference
//																			 * .
//																			 * getHighlightPreferenceKey
//																			 * (
//																			 * )
//																			 * )
//																			 * )
//																			 */)) {
//					continue;
//				}

				Position p = model.getPosition(a);

				int l = fAnnotationAccess.getLayer(a);

				if (l > layer
						&& p != null
						&& p.overlapsWith(hoverRegion.getOffset(),
								hoverRegion.getLength())) {
					String msg = a.getText();
					if (msg != null && msg.trim().length() > 0) {
						message = msg;
						layer = l;
					}
				}
			}
			if (layer > -1) {
				return formatMessage(message);
			}

		} finally {
			try {
				if (path != null) {
					ITextFileBufferManager manager = FileBuffers
							.getTextFileBufferManager();
					manager.disconnect(path, LocationKind.NORMALIZE, null);
				}
			} catch (CoreException ex) {
				Trace.trace(Trace.SEVERE, "Error while get problem info", ex);
			}
		}
		return null;
	}

	private String formatMessage(String message) {
		// TODO Auto-generated method stub
		return message;
	}

	private IPath getEditorInputPath() {
		if (getEditor() == null)
			return null;

		IEditorInput input = getEditor().getEditorInput();
		if (input instanceof IStorageEditorInput) {
			try {
				return ((IStorageEditorInput) input).getStorage().getFullPath();
			} catch (CoreException ex) {
				Trace.trace(Trace.SEVERE, "Error while get editor input path",
						ex);
			}
		}
		return null;
	}

	private IAnnotationModel getAnnotationModel(IPath path) {
		if (path == null)
			return null;

		ITextFileBufferManager manager = FileBuffers.getTextFileBufferManager();
		try {
			manager.connect(path, LocationKind.NORMALIZE, null);
		} catch (CoreException ex) {
			Trace.trace(Trace.SEVERE, "Error while get annotation model", ex);
			return null;
		}

		IAnnotationModel model = null;
		try {
			model = manager.getTextFileBuffer(path, LocationKind.NORMALIZE)
					.getAnnotationModel();
			return model;
		} finally {
			if (model == null) {
				try {
					manager.disconnect(path, LocationKind.NORMALIZE, null);
				} catch (CoreException ex) {
					Trace.trace(Trace.SEVERE,
							"Error while get annotation model", ex);
				}
			}
		}
	}

	/**
	 * Returns the annotation preference for the given annotation.
	 *
	 * @param annotation
	 *            the annotation
	 * @return the annotation preference or <code>null</code> if none
	 */
	private AnnotationPreference getAnnotationPreference(Annotation annotation) {

		if (annotation.isMarkedDeleted())
			return null;
		return EditorsUI.getAnnotationPreferenceLookup()
				.getAnnotationPreference(annotation);
	}
}
