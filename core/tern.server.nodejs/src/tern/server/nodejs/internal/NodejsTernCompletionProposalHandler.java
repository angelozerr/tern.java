package tern.server.nodejs.internal;

import java.util.List;

import org.json.simple.JSONObject;

import tern.server.IResponseHandler;
import tern.server.ITernCompletionCollector;

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
