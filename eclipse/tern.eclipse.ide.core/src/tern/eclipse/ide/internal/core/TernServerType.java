package tern.eclipse.ide.internal.core;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IConfigurationElement;

import tern.TernProject;
import tern.eclipse.ide.core.ITernServerFactory;
import tern.eclipse.ide.core.ITernServerType;
import tern.server.ITernServer;
import tern.server.ITernServerListener;

public class TernServerType implements ITernServerType {

	private final String id;
	private final String name;
	private final ITernServerFactory factory;
	private final List<ITernServer> servers;
	private final ITernServerListener serverListener;

	/**
	 * GeneratorType constructor comment.
	 * 
	 * @param element
	 *            a configuration element
	 * @throws CoreException
	 */
	public TernServerType(IConfigurationElement element) throws CoreException {
		this.servers = new ArrayList<ITernServer>();
		this.id = element.getAttribute("id");
		this.name = element.getAttribute("name");
		this.factory = (ITernServerFactory) element
				.createExecutableExtension("factory");
		this.serverListener = new ITernServerListener() {

			@Override
			public void onStart(ITernServer server) {
				synchronized (servers) {
					servers.add(server);
				}
			}

			@Override
			public void onStop(ITernServer server) {
				synchronized (servers) {
					servers.remove(server);
				}
			}
		};
	}

	@Override
	public String getId() {
		return id;
	}

	@Override
	public String getName() {
		return name;
	}

	ITernServerFactory getFactory() {
		return factory;
	}

	public void dispose() {
		synchronized (servers) {
			List<ITernServer> servers = new ArrayList<ITernServer>(this.servers);
			for (ITernServer server : servers) {
				server.dispose();
			}
			this.servers.clear();
		}
	}

	@Override
	public ITernServer createServer(TernProject project) throws Exception {
		ITernServer server = getFactory().create(project);
		server.addServerListener(serverListener);
		return server;
	}

}
