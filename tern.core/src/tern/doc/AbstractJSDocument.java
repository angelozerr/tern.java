package tern.doc;

import tern.Server;

public abstract class AbstractJSDocument implements IJSDocument {

	private final Server server;
	private final String name;
	private boolean changed;

	public AbstractJSDocument(String name, Server server) {
		this(name, server, false);
	}

	public AbstractJSDocument(String name, Server server, boolean register) {
		this.name = name;
		this.server = server;
		this.changed = false;
		if (register) {
			server.registerDoc(this);
		}
	}

	public String getName() {
		return name;
	}

	public boolean isChanged() {
		return changed;
	}

	public void setChanged(boolean changed) {
		this.changed = changed;
	}

	@Override
	public Server getServer() {
		return server;
	}
}
