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
package tern.server.nodejs.internal;

import java.util.List;

import org.json.simple.JSONObject;

import tern.server.IResponseHandler;
import tern.server.protocol.completions.ITernCompletionCollector;

public abstract class NodejsTernCompletionProposalHandler implements
		IResponseHandler {

	private final ITernCompletionCollector collector;

	public NodejsTernCompletionProposalHandler(
			ITernCompletionCollector collector) {
		this.collector = collector;
	}

	@Override
	public void onError(String error) {
		System.err.println(error);
	}

	@Override
	public void onSuccess(Object data, String dataAsJsonString) {
		JSONObject jsonObject = (JSONObject) data;
		if (jsonObject != null) {
			Long startCh = getCh(jsonObject, "start");
			Long endCh = getCh(jsonObject, "end");
			int pos = 0;
			if (startCh != null && endCh != null) {
				pos = endCh.intValue() - startCh.intValue();
			}
			List completions = (List) jsonObject.get("completions");
			for (Object object : completions) {
				addProposal((JSONObject) object, pos);
			}
		}
	}

	private Long getCh(JSONObject data, String pos) {
		JSONObject loc = (JSONObject) data.get(pos);
		return loc != null ? (Long) loc.get("ch") : null;
	}

	protected void addProposal(JSONObject completion, int pos) {
		String name = completion.get("name").toString();
		String type = completion.get("type").toString();
		Object doc = completion.get("doc");
		addProposal(name, type, doc, pos);
	}

	protected abstract void addProposal(String name, String type, Object doc,
			int pos);

}
