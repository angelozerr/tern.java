package tern.server.nodejs;

import org.json.simple.JSONObject;

import tern.server.ITernServer;
import tern.server.protocol.TernDoc;

public class LoggingInterceptor implements IInterceptor {

	private static final IInterceptor INSTANCE = new LoggingInterceptor();

	public static IInterceptor getInstance() {
		return INSTANCE;
	}

	@Override
	public void handleRequest(TernDoc request, ITernServer server,
			String methodName) {
		System.out.println("-----------------------------------");
		System.out.println("Tern request#" + methodName + ": ");
		System.out.println(request.toJSONString());
	}

	@Override
	public void handleResponse(JSONObject response, ITernServer server,
			String methodName, long ellapsedTime) {
		System.out.println("");
		System.out.println("Tern response#" + methodName + " with "
				+ ellapsedTime + "ms: ");
		System.out.println(response.toJSONString());
		System.out.println("-----------------------------------");
	}

	@Override
	public void handleError(Throwable error, ITernServer server,
			String methodName, long ellapsedTime) {
		System.out.println("");
		System.out.println("Tern error#" + methodName + " with " + ellapsedTime
				+ "ms: ");
		error.printStackTrace(System.out);
		System.out.println("-----------------------------------");

	}

}
