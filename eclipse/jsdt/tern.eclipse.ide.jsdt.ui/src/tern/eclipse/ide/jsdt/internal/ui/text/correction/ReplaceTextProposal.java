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

import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.text.edits.ReplaceEdit;
import org.eclipse.text.edits.TextEdit;
import org.eclipse.wst.jsdt.core.IJavaScriptUnit;
import org.eclipse.wst.jsdt.internal.ui.JavaPluginImages;
import org.eclipse.wst.jsdt.internal.ui.text.correction.CUCorrectionProposal;

import tern.eclipse.ide.jsdt.internal.ui.contentassist.JSDTTernCompletionCollector;
import tern.eclipse.jface.images.TernImagesRegistry;
import tern.server.protocol.lint.Fix;

/**
 * Replace text by using tern {@link Fix}.
 *
 */
public class ReplaceTextProposal extends CUCorrectionProposal {

	private final int start;
	private final int end;
	private final String text;

	public ReplaceTextProposal(IJavaScriptUnit cu, Fix fix) {
		super(fix.getLabel(), cu, JSDTTernCompletionCollector.TERN_RELEVANT,
				TernImagesRegistry.getImage(fix.getLinter()));
		this.start = fix.getStart().intValue();
		this.end = fix.getEnd().intValue();
		text = fix.getText();
	}

	protected void addEdits(IDocument document, TextEdit rootEdit) throws CoreException {
		ReplaceEdit edit = new ReplaceEdit(start, end - start, text);
		rootEdit.addChild(edit);
	}
}
