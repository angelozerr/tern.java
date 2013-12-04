package tern.eclipse.ide.server.nodejs.internal.core;

import java.io.File;

import org.eclipse.core.runtime.IConfigurationElement;

import tern.eclipse.ide.server.nodejs.core.INodejsInstall;

public class NodejsInstall implements INodejsInstall {

	private final String id;
	private final String name;
	private File path;

	/**
	 * GeneratorType constructor comment.
	 * 
	 * @param element
	 *            a configuration element
	 */
	public NodejsInstall(IConfigurationElement element) {
		this.id = element.getAttribute("id");
		this.name = element.getAttribute("name");
		//element.getContributor().
		//this.path = element.getAttribute("name");
	}

	@Override
	public String getId() {
		return id;
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public File getPath() {
		return path;
	}

	public void dispose() {

	}
}
