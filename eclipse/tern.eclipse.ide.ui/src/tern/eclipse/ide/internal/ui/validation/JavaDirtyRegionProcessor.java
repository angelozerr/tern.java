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
package tern.eclipse.ide.internal.ui.validation;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.Position;
import org.eclipse.jface.text.source.Annotation;
import org.eclipse.jface.text.source.IAnnotationModel;
import org.eclipse.ui.texteditor.ITextEditor;

import tern.ITernFile;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
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
	private final IIDETernProject ternProject;

	public JavaDirtyRegionProcessor(ITextEditor editor, IFile resource)
			throws CoreException {
		this.editor = editor;
		this.file = resource;
		this.ternProject = TernCorePlugin.getTernProject(resource.getProject());
	}

	@Override
	public synchronized void startReconciling() {
		super.startReconciling();
	}

	@Override
	protected void endProcessing() {
		IDocument document = getDocument();

		if (document != null) {
			if (ternProject.hasPlugin(TernPlugin.lint)) {
				TernLintQuery query = new TernLintQuery();

				// Clean old TernAnnotation
				final List<TernAnnotation> annotationsToRemove = new ArrayList<TernAnnotation>();
				final IAnnotationModel newModel = editor.getDocumentProvider()
						.getAnnotationModel(editor.getEditorInput());
				for (@SuppressWarnings("rawtypes")
				// collect all tern annotation of the model.
				Iterator iterator = newModel.getAnnotationIterator(); iterator
						.hasNext();) {
					Annotation annotation = (Annotation) iterator.next();
					if (annotation instanceof TernAnnotation) {
						annotationsToRemove.add((TernAnnotation) annotation);
					}
				}

				// validate full js content with Tern plugin lint.js
				ITernLintCollector collector = new ITernLintCollector() {

					@Override
					public void addMessage(String message, Long start,
							Long end, String severity) {
						TernAnnotation existingAnnotation = getExistingAnnotation(
								message, start.intValue(), end.intValue(),
								severity, annotationsToRemove);
						if (existingAnnotation != null) {
							// tern annotation already exists, use it.
							annotationsToRemove.remove(existingAnnotation);
						} else {
							// create new tern annotation.
							TernAnnotation annotation = new TernAnnotation(
									severity, message, start.intValue(),
									end.intValue());
							newModel.addAnnotation(annotation, new Position(
									annotation.getStart(), annotation.getEnd()
											- annotation.getStart()));
						}
					}

					private TernAnnotation getExistingAnnotation(
							String message, int start, int end,
							String severity,
							List<TernAnnotation> annotationsToRemove) {
						for (TernAnnotation annotation : annotationsToRemove) {
							if (annotation.isEquals(severity, message, start,
									end)) {
								return annotation;
							}
						}
						return null;
					}
				};

				try {
					ITernFile tf = new TernDocumentFile(file, document);
					ternProject.request(query, tf, collector);
				} catch (Exception e) {
					Trace.trace(Trace.SEVERE, "Error while tern validation.", e);
				}

				// remove old tern annotations.
				for (TernAnnotation ternAnnotation : annotationsToRemove) {
					newModel.removeAnnotation(ternAnnotation);
				}
			}
		}
	}
}