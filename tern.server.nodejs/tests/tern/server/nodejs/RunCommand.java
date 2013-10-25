package tern.server.nodejs;

import java.io.IOException;

import org.json.simple.JSONObject;

import tern.server.nodejs.protocol.TernProtocolHelper;
import tern.server.nodejs.protocol.TernCompletionQuery;
import tern.server.nodejs.protocol.TernDoc;

public class RunCommand {

	public static void main(String[] args) throws IOException {

		// query
		TernCompletionQuery query = new TernCompletionQuery();
		query.setTypes(true);
		query.setFile("#0");
		query.setPos(2);

		//
		JSONObject doc = new TernDoc(query);
		System.err.println(doc.toJSONString());

		TernProtocolHelper.makeRequest("http://localhost:12345/", doc, false);
	}
}
