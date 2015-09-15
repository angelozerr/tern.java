/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.contentassist;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import tern.ITernProject;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.completions.TernCompletionItem;
import tern.server.protocol.completions.TernCompletionProposalRec;
import tern.server.protocol.guesstypes.ITernGuessTypesCollector;

/**
 * List of {@link Arg}
 *
 */
public class Arguments extends ArrayList<Arg>implements ITernGuessTypesCollector {

	private static final long serialVersionUID = 1L;

	private final ITernProject ternProject;
	private final Map<Integer, Arg> parameters;

	public Arguments(ITernProject ternProject) {
		this.parameters = new HashMap<Integer, Arg>();
		this.ternProject = ternProject;
	}

	public void addParameter(int offset, int length, String paramName, int paramIndex) {
		Arg arg = new Arg(offset, length, paramName);
		parameters.put(paramIndex, arg);
		super.add(arg);
	}

	public void addArg(int offset, int length) {
		super.add(new Arg(offset, length));
	}

	@Override
	public void addProposal(int paramIndex, TernCompletionProposalRec proposal, Object completion,
			IJSONObjectHelper helper) {
		Arg arg = parameters.get(paramIndex);
		if (arg != null) {
			TernCompletionItem item = new TernCompletionItem(proposal);
			item.setTernProject(ternProject);
			arg.addProposal(item.getName(), item.getDisplayName(),
					TernUIPlugin.getTernDescriptorManager().getImage(item), item.getDoc());
		}
	}

	public void setBaseOffset(int baseOffset) {
		for (Arg arg : this) {
			arg.updateOffset(baseOffset);
		}
	}

}
