package tern.server;

import org.junit.After;
import org.junit.Before;

import tern.TernException;

public abstract class AbstractTernServerTest {

	protected ITernServer server;

	@Before
	public void init() throws TernException {
		server = createServer();
	}
	
	@After
	public void stop() {
		server.dispose();
	}

	protected abstract ITernServer createServer() throws TernException;

}
