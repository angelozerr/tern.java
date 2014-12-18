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
package tern.eclipse.ide.jsdt.internal.contentassist;

import java.util.List;

import org.eclipse.core.resources.IProject;
import org.eclipse.jface.text.contentassist.ICompletionProposal;

import tern.eclipse.ide.ui.contentassist.JSTernCompletionCollector;
import tern.eclipse.ide.ui.contentassist.JSTernCompletionProposal;

/**
 * Extends {@link JSTernCompletionCollector} to create JSDT
 * {@link JSDTTernCompletionProposal}.
 * 
 */
public class JSDTTernCompletionCollector extends JSTernCompletionCollector {

	public JSDTTernCompletionCollector(List<ICompletionProposal> proposals,
			int startOffset, IProject project) {
		super(proposals, startOffset, project);
	}

	@Override
	protected JSTernCompletionProposal createProposal(String name,
			String displayName, String type, String doc, String url,
			String origin, int start, int end, boolean isProperty,
			boolean isObjectKey) {
		return new JSDTTernCompletionProposal(name, displayName, type, doc,
				url, origin, start, end, isProperty, isObjectKey);
	}
}
