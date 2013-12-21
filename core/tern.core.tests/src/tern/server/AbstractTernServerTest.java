package tern.server;

import org.junit.Before;

import tern.TernException;

public abstract class AbstractTernServerTest {

	protected ITernServer server;

	@Before
	public void init() throws TernException {
		server = createServer();
	}

	protected abstract ITernServer createServer() throws TernException;

}
