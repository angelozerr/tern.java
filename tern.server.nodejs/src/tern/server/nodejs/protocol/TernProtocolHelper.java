package tern.server.nodejs.protocol;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class TernProtocolHelper {

	public static JSONObject makeRequest(String baseURL, JSONObject doc,
			boolean silent) throws IOException {

		HttpClient httpClient = new DefaultHttpClient();
		try {
			HttpPost httpPost = createHttpPost(baseURL, doc);

			HttpResponse response = httpClient.execute(httpPost);
			HttpEntity entity = response.getEntity();

			InputStream in = entity.getContent();
			JSONParser parser = new JSONParser();
			try {
				return (JSONObject) parser.parse(new InputStreamReader(in));
			} catch (ParseException e) {
				throw new IOException(e);
			}
		} finally {
			httpClient.getConnectionManager().shutdown();
		}
	}

	private static HttpPost createHttpPost(String baseURL, JSONObject doc)
			throws UnsupportedEncodingException {
		HttpPost httpPost = new HttpPost(baseURL);
		httpPost.setEntity(new StringEntity(doc.toJSONString(), null));
		return httpPost;
	}

}
