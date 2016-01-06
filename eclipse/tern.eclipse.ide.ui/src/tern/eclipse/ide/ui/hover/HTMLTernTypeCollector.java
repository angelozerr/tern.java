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
package tern.eclipse.ide.ui.hover;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.ui.utils.HTMLTernPrinter;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.completions.TernCompletionItem;
import tern.server.protocol.completions.TernCompletionProposalRec;
import tern.server.protocol.type.ITernTypeCollector;

/**
 * {@link ITernTypeCollector} implementation for HTML type collector.
 * 
 */
public class HTMLTernTypeCollector implements ITernTypeCollector {

	private final IIDETernProject ternProject;
	private String info;

	public HTMLTernTypeCollector(IIDETernProject ternProject) {
		this.ternProject = ternProject;
		this.info = null;
	}

	@Override
	public void setType(String type, boolean guess, String name,
			String exprName, String doc, String url, String origin,
			Object object, IJSONObjectHelper objectHelper) {
		if (type != null || name != null || exprName != null) {
			String label = name != null ? name : exprName;
			TernCompletionItem item = new TernCompletionItem(
					new TernCompletionProposalRec(label, type, doc, url, origin));
			item.setTernProject(ternProject);
			this.info = HTMLTernPrinter.getAdditionalProposalInfo(item, guess);
		}
	}

	/**
	 * Returns the HTML of the tern type.
	 * 
	 * @return the HTML of the tern type.
	 */
	public String getInfo() {
		return info;
	}
}
