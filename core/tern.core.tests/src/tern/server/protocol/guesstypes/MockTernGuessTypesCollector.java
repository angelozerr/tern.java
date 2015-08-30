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
package tern.server.protocol.guesstypes;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;

public class MockTernGuessTypesCollector extends
		HashMap<Integer, Collection<String>> implements
		ITernGuessTypesCollector {

	@Override
	public void addProposal(int arg, String name) {
		Collection<String> args = super.get(arg);
		if (args == null) {
			args = new ArrayList<String>();
			super.put(arg, args);
		}
		args.add(name);
	}

}
