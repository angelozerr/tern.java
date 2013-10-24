package tern.server.nodejs;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

// http://www.docmosis.com/docmosisfiles/samples/JavaProxyXMLExample.java.txt
// http://localhost:12345/?doc={}
// http://localhost:12345/ping
public class TestServer {

	public static void main(String[] args) throws MalformedURLException, IOException {
		HttpURLConnection conn = (HttpURLConnection) new URL("http://localhost:4734")
				.openConnection();
		conn.connect();
		
		int s = conn.getResponseCode();
		System.err.println(s);
		
	}
}
