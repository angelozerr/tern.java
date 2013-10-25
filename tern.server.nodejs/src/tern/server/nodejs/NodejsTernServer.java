package tern.server.nodejs;

import java.io.IOException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;

import tern.doc.IJSDocument;
import tern.server.IResponseHandler;
import tern.server.ITernServer;
import tern.server.TernDef;

public class NodejsTernServer implements ITernServer {

	private final String baseURL;

	public NodejsTernServer(int port) {
		this.baseURL = "http://localhost:" + port + "/";
	}

	@Override
	public String getFile(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addDef(TernDef def) throws IOException {
		// TODO Auto-generated method stub

	}

	@Override
	public void addFile(String name, String text) {
		// TODO Auto-generated method stub

	}

	@Override
	public void sendDoc(IJSDocument doc, IResponseHandler handler) {
		// TODO Auto-generated method stub

	}

	@Override
	public void registerDoc(IJSDocument doc) {
		// TODO Auto-generated method stub

	}

	@Override
	public void requestCompletion(IJSDocument doc, IResponseHandler handler,
			boolean dataAsJson) {
		// TODO Auto-generated method stub

	}


}
