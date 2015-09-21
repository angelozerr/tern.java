/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.nodejs.process;

import java.io.File;
import java.io.IOException;

import org.junit.After;
import org.junit.Ignore;
import org.junit.Assert;
import org.junit.Test;

import tern.TernException;

/**
 * Test with node.js process.
 * 
 */
public class NodejsProcessTest {

	private static final int TIMEOUT = 1000;
	private static final int TEST_NUMBER = 1;

	@After
	public void shutdown() {
		NodejsProcessManager.getInstance().dispose();
	}

	/**
	 * Test when node.js base dir is not well configurated.
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws TernException
	 */
	@Test
	public void badNodejsBaseDir() throws IOException, InterruptedException,
			TernException {

		File nodejsBaseDir = new File(".");
		File nodejsTernBaseDir = PathHelper.getNodejsTernBaseDir();
		File projectDir = new File(".");

		NodejsProcess process = NodejsProcessManager.getInstance().create(
				projectDir, nodejsBaseDir, nodejsTernBaseDir);
		process.addProcessListener(new NodejsProcessAdapter() {

			@Override
			public void onData(NodejsProcess server, String line) {
				System.err.println(line);
			}
		});
		try {
			process.start(TIMEOUT, TEST_NUMBER);
			Assert.assertTrue(false);
		} catch (Exception e) {
			Assert.assertTrue(e.getMessage(), true);
		}
	}

	@Ignore("fail on macosx")
	@Test
	public void badNodejsTernBaseDir() throws IOException,
			InterruptedException, TernException {

		File nodejsBaseDir = PathHelper.getNodejsBasedir();
		File nodejsTernBaseDir = new File(".");
		File projectDir = new File(".");

		try {
			NodejsProcessManager.getInstance().create(projectDir,
					nodejsBaseDir, nodejsTernBaseDir);
			Assert.assertTrue(false);
		} catch (Exception e) {
			Assert.assertTrue(e.getMessage(), true);
		}
	}

	@Test
	public void ok() throws IOException, InterruptedException, TernException {

		File nodejsBaseDir = PathHelper.getNodejsBasedir();
		File nodejsTernBaseDir = PathHelper.getNodejsTernBaseDir();
		File projectDir = new File(".");

		NodejsProcess process = NodejsProcessManager.getInstance().create(
				projectDir, nodejsBaseDir, nodejsTernBaseDir);

		final StringBuilder error = new StringBuilder();
		process.addProcessListener(new NodejsProcessAdapter() {

			@Override
			public void onError(NodejsProcess server, String line) {
				error.append(line);
			}
		});

		try {
			process.start(TIMEOUT, TEST_NUMBER);
		} catch (Exception e) {

		}
		Assert.assertEquals(0, error.toString().length());
		System.err.println(error.toString());

	}
}
