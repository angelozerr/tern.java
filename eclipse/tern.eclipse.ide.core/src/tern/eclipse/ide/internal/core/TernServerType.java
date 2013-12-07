package tern.eclipse.ide.internal.core;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IConfigurationElement;

import tern.TernProject;
import tern.eclipse.ide.core.ITernServerConfiguration;
import tern.eclipse.ide.core.ITernServerFactory;
import tern.eclipse.ide.core.ITernServerType;
import tern.server.ITernServer;

public class TernServerType implements ITernServerType {
	private final String id;
	private final String name;
	private ITernServerFactory factory;
	private final List<ITernServer> servers;

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
		for (ITernServer server : servers) {
			server.dispose();
		}
		servers.clear();
	}

	@Override
	public ITernServer createServer(TernProject project,
			ITernServerConfiguration configuration) throws Exception {
		ITernServer server = getFactory().create(project, configuration);
		servers.add(server);
		return server;
	}
}
