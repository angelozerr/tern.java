/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.repository;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonObject.Member;

import tern.TernException;
import tern.server.ITernModule;
import tern.utils.IOUtils;
import tern.utils.StringUtils;

/**
 * Helper for tern repository.
 *
 */
public class TernRepositoryHelper {

	/**
	 * Default tern repository.json URL
	 */
	public static final String DEFAULT_TERN_REPOSITORY_URL = "https://raw.githubusercontent.com/paulvi/tern-plugins/master/plugins.json";

	private TernRepositoryHelper() {
	}

	/**
	 * Load tern modules coming from the given repository.json URL.
	 * 
	 * @param repositoryURL
	 *            repository URL.
	 * @return
	 * @throws IOException
	 * @throws ClientProtocolException
	 * @throws TernException
	 */
	public static List<ITernModule> loadModules(String repositoryURL) throws IOException, TernException {
		// load repository.json with HTTP client.
		HttpClient httpClient = new DefaultHttpClient();
		HttpGet httpGet = new HttpGet(repositoryURL);
		HttpResponse httpResponse = httpClient.execute(httpGet);
		HttpEntity entity = httpResponse.getEntity();
		InputStream in = entity.getContent();
		// Check the status
		StatusLine statusLine = httpResponse.getStatusLine();
		int statusCode = statusLine.getStatusCode();
		if (statusCode != HttpStatus.SC_OK) {
			String message = IOUtils.toString(in);
			if (StringUtils.isEmpty(message)) {
				throw new TernException(statusLine.toString());
			}
			throw new TernException(message);
		}

		// read JSON and create tern modules list
		JsonObject repository = JsonObject.readFrom(new InputStreamReader(in));
		ITernModule module = null;
		List<ITernModule> modules = new ArrayList<ITernModule>();
		for (Member member : repository) {
			module = new TernModuleToDownload(member.getName(), (JsonObject) member.getValue());
			modules.add(module);
		}
		return modules;
	}

}
