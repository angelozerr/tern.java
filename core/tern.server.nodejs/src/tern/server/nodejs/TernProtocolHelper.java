package tern.server.nodejs;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.StatusLine;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import tern.TernException;
import tern.TernFileManager;
import tern.server.ITernServer;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernQuery;
import tern.utils.IOUtils;
import tern.utils.StringUtils;

public class TernProtocolHelper {

	public static JSONObject makeRequest(String baseURL, TernDoc doc,
			boolean silent, List<IInterceptor> interceptors, ITernServer server)
			throws IOException, TernException {
		TernQuery query = doc.getQuery();
		String methodName = query != null ? query.getType() : "";
		long starTime = 0;
		if (interceptors != null) {
			starTime = System.currentTimeMillis();
			for (IInterceptor interceptor : interceptors) {
				interceptor.handleRequest(doc, server, methodName);
			}
		}
		HttpClient httpClient = new DefaultHttpClient();
		try {
			// Post JSON Tern doc
			HttpPost httpPost = createHttpPost(baseURL, doc);
			HttpResponse httpResponse = httpClient.execute(httpPost);
			HttpEntity entity = httpResponse.getEntity();
			InputStream in = entity.getContent();
			// Check the status
			StatusLine statusLine = httpResponse.getStatusLine();
			int statusCode = statusLine.getStatusCode();
			if (statusCode != HttpStatus.SC_OK) {
				// node.js server throws error
				String message = IOUtils.toString(in);
				if (StringUtils.isEmpty(message)) {
					throw new TernException(statusLine.toString());
				}
				throw new TernException(message);
			}

			JSONParser parser = new JSONParser();
			try {
				JSONObject response = (JSONObject) parser
						.parse(new InputStreamReader(in));
				if (interceptors != null) {
					for (IInterceptor interceptor : interceptors) {
						interceptor.handleResponse(response, server,
								methodName, System.currentTimeMillis()
										- starTime);
					}
				}
				// Update file manager if needed.
				TernFileManager<?> fileManager = server.getFileManager();
				if (fileManager != null) {
					fileManager.updateIndexedFiles(doc);
				}
				return response;
			} catch (ParseException e) {
				throw new IOException(e);
			}
		} catch (Exception e) {
			if (interceptors != null) {
				for (IInterceptor interceptor : interceptors) {
					interceptor.handleError(e, server, methodName,
							System.currentTimeMillis() - starTime);
				}
			}
			if (e instanceof IOException) {
				throw (IOException) e;
			}
			if (e instanceof TernException) {
				throw (TernException) e;
			}
			throw new TernException(e);
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
