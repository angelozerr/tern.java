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
package tern.server.protocol;

import java.io.IOException;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.TernProject;
import tern.server.AbstractTernServerTest;
import tern.server.DefaultResponseHandler;
import tern.server.MapTernFile;
import tern.server.MapTernFileManager;
import tern.utils.IOUtils;

public abstract class AbstractTernServerAddFileWithThreadTest extends
		AbstractTernServerTest {

	@Override
	protected TernProject createProject() {
		TernProject project = super.createProject();
		project.setFileManager(new MapTernFileManager());
		return project;
	}

	@Test
	public void empty() {

	}

	// @Test
	public void addBigFileWith2Threads() throws TernException, IOException {

		final MapTernFileManager fileManager = (MapTernFileManager) server
				.getFileManager();

		final MapTernFile jQuery = new MapTernFile("jquery",
				IOUtils.toString(MapTernFile.class
						.getResourceAsStream("jquery-1.10.2.js")));

		// Create 2 requests with big files started in the same time.
		DefaultResponseHandler response1 = new DefaultResponseHandler(true);
		TernDoc doc1 = new TernDoc();
		Thread request1 = createRequestThread(fileManager, jQuery, response1,
				doc1);

		DefaultResponseHandler response2 = new DefaultResponseHandler(true);
		TernDoc doc2 = new TernDoc();
		Thread request2 = createRequestThread(fileManager, jQuery, response2,
				doc2);

		request1.start();
		request2.start();
		try {
			request1.join();
			request2.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		// check if tern server doesn't throw errors.
		response1.getData();
		response2.getData();

		// the 2 requests which are started in the same time, parse 2 times the
		// same js.
		Assert.assertEquals(2, doc1.getFiles().size() + doc2.getFiles().size());

		// Create a new request (at this step the big file is parsed), so tern
		// doc should not contains this file.
		DefaultResponseHandler response3 = new DefaultResponseHandler(true);
		TernDoc doc3 = new TernDoc();
		Thread request3 = createRequestThread(fileManager, jQuery, response3,
				doc3);
		request3.start();
		try {
			request3.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		// check if tern server doesn't throw errors.
		response3.getData();

		// fiel must be empty.
		Assert.assertEquals(0, doc3.getFiles().size());

	}

	public Thread createRequestThread(final MapTernFileManager fileManager,
			final MapTernFile jQuery, final DefaultResponseHandler response,
			final TernDoc doc) {
		return new Thread(new Runnable() {

			@Override
			public void run() {
				try {
					fileManager.updateFile(jQuery, doc, null);
					server.request(doc, response);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	private TernDoc createTernDoc() {
		String name = "myfile.js";
		String text = "var arr = [];";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null, null);
		return doc;
	}
}
