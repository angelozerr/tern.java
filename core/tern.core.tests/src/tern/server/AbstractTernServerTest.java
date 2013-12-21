package tern.server;

import org.junit.Before;

public abstract class AbstractTernServerTest {

	protected ITernServer server;

	@Before
	public void init() {
		server = createServer();
	}

	protected abstract ITernServer createServer();

}
