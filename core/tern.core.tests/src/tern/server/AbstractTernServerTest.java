package tern.server;

import java.io.File;
import java.io.IOException;

import org.junit.After;
import org.junit.Before;

import tern.TernException;
import tern.TernProject;

public abstract class AbstractTernServerTest {

	protected ITernServer server;

	@Before
	public void init() throws TernException, IOException {
		TernProject project = createProject();
		project.save();
		server = createServer(project);
	}

	protected TernProject createProject() {
		TernProject project = new TernProject(new File("."));
		return project;
	}

	@After
	public void stop() {
		server.dispose();
	}

	protected abstract ITernServer createServer(TernProject project)
			throws TernException;

}
