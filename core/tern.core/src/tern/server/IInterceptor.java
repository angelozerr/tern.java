package tern.server;

import org.json.simple.JSONObject;

import tern.server.protocol.TernDoc;

public interface IInterceptor {

	void handleRequest(TernDoc request, ITernServer server, String methodName);

	void handleResponse(JSONObject response, ITernServer server,
			String methodName, long ellapsedTime);

	void handleError(Throwable error, ITernServer server, String methodName,
			long ellapsedTime);
}
