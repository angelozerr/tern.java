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
package tern.server.nodejs.process;

import java.io.File;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

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

		INodejsProcess process = createProcess(nodejsBaseDir, nodejsTernBaseDir, projectDir);
		process.addProcessListener(new NodejsProcessAdapter() {

			@Override
			public void onData(INodejsProcess server, String line) {
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

	protected INodejsProcess createProcess(File nodejsBaseDir, File nodejsTernBaseDir, File projectDir)
			throws TernException {
		INodejsProcess process = NodejsProcessManager.getInstance().create(
				projectDir, nodejsBaseDir, nodejsTernBaseDir);
		process.setLaunchConfiguration(new INodejsLaunchConfiguration() {
			
			@Override
			public boolean isWaitOnPort() {
				return true;
			}
			
			@Override
			public boolean isSaveLaunch() {
				return false;
			}
			
			@Override
			public String getLaunchMode() {
				return null;
			}
			
			@Override
			public String generateLaunchConfigurationName() {
				return null;
			}
			
			@Override
			public List<String> createNodeArgs() {
				List<String> args = new LinkedList<String>();
				return args;
			}
		});
		return process;
	}

	@Ignore("fail on macosx")
	@Test
	public void badNodejsTernBaseDir() throws IOException,
			InterruptedException, TernException {

		File nodejsBaseDir = PathHelper.getNodejsBasedir();
		File nodejsTernBaseDir = new File(".");
		File projectDir = new File(".");

		try {
			createProcess(nodejsBaseDir, nodejsTernBaseDir, projectDir);
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

		INodejsProcess process = createProcess(nodejsBaseDir, nodejsTernBaseDir, projectDir);

		final StringBuilder error = new StringBuilder();
		process.addProcessListener(new NodejsProcessAdapter() {

			@Override
			public void onError(INodejsProcess server, String line) {
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
