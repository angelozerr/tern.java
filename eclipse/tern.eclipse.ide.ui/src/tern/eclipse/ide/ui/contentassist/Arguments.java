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

import tern.server.protocol.guesstypes.ITernGuessTypesCollector;

/**
 * List of {@link Arg}
 *
 */
public class Arguments extends ArrayList<Arg> implements
		ITernGuessTypesCollector {

	private Map<Integer, Arg> parameters;

	public Arguments() {
		this.parameters = new HashMap<Integer, Arg>();
	}

	public void addParameter(int offset, int length, String paramName,
			int paramIndex) {
		Arg arg = new Arg(offset, length, paramName);
		parameters.put(paramIndex, arg);
		super.add(arg);
	}

	public void addArg(int offset, int length) {
		super.add(new Arg(offset, length));
	}

	@Override
	public void addProposal(int paramIndex, String name) {
		parameters.get(paramIndex).addProposal(name);
	}

	public void setBaseOffset(int baseOffset) {
		for (Arg arg : this) {
			arg.updateOffset(baseOffset);
		}
	}

}
