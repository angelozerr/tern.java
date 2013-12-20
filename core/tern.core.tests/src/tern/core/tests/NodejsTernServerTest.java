package tern.core.tests;

import java.io.File;

import org.junit.Test;

import tern.TernException;
import tern.TernProject;
import tern.server.DefaultResponseHandler;
import tern.server.nodejs.NodejsTernServer;
import tern.server.protocol.TernDoc;

/**
 * Test with Tern server executed with node.js
 */
public class NodejsTernServerTest {

	/**
	 * Simple test which starts the Tern server with Node.js
	 * 
	 * @throws TernException
	 */
	@Test
	public void startServerServer() throws TernException {

		/*
		 * String s = "name: " + System.getProperty ("os.name"); s +=
		 * ", version: " + System.getProperty ("os.version"); s += ", arch: " +
		 * System.getProperty ("os.arch"); System.out.println ("OS=" + s);
		 */

		File installPath = new File(
				"../../eclipse/tern.eclipse.ide.server.nodejs.embed.win32.win32.x86/nodejs/node-v0.10.22-win32-x86");
		TernProject project = new TernProject(new File("."));

		NodejsTernServer server = new NodejsTernServer(project, installPath);

		TernDoc doc = createTernDoc();
		DefaultResponseHandler response = new DefaultResponseHandler(true);
		server.request(doc, response);

		Object data = response.getData();
	}

	private TernDoc createTernDoc() {
		String name = "myfile.js";
		String text = "var a = [];";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);
		return doc;
	}

	public static void main(String[] args) {

	}
}
