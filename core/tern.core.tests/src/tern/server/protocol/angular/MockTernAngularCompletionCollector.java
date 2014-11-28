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
package tern.server.protocol.angular;

import java.util.Collection;
import java.util.HashMap;

import tern.angular.protocol.completions.TernAngularCompletionItem;
import tern.server.ITernServer;
import tern.server.protocol.completions.ITernCompletionCollector;

public class MockTernAngularCompletionCollector extends
		HashMap<String, TernAngularCompletionItem> implements
		ITernCompletionCollector {

	public MockTernAngularCompletionCollector() {

	}

	@Override
	public void addProposal(String name, String type, String doc, String url,
			String origin, int start, int end, Object completion,
			ITernServer ternServer) {
		super.put(
				name,
				new TernAngularCompletionItem(name, type, origin, ternServer
						.getText(completion, "module"), ternServer.getText(
						completion, "controller")));
	}

	public Collection<TernAngularCompletionItem> getCompletions() {
		return super.values();
	}

}
