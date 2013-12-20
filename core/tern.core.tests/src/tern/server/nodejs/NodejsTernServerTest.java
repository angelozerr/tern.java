package tern.server.nodejs;

import java.io.File;

import org.junit.Test;

import tern.TernException;
import tern.TernProject;
import tern.server.DefaultResponseHandler;
import tern.server.nodejs.process.NodejsProcess;
import tern.server.nodejs.process.NodejsProcessAdapter;
import tern.server.nodejs.process.PathHelper;
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

		File installPath = PathHelper.getNodejsBasedir();
		TernProject project = new TernProject(new File("."));

		NodejsTernServer server = new NodejsTernServer(project, installPath);
		server.addProcessListener(new NodejsProcessAdapter() {
			@Override
			public void onData(NodejsProcess server, String line) {
				System.err.println(line);
			}
		});
		TernDoc doc = createTernDoc();
		DefaultResponseHandler response = new DefaultResponseHandler(true);
		server.request(doc, response);

		Object data = response.getData();
	}

	private TernDoc createTernDoc() {
		String name = "myfile.js";
		String text = "var arr = [];";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);
		return doc;
	}

	public static void main(String[] args) {

	}
}
