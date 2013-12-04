package tern.eclipse.ide.internal.core;

import java.io.File;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IConfigurationElement;

import tern.eclipse.ide.core.ITernServerFactory;
import tern.eclipse.ide.core.ITernServerType;

public class TernServerType implements ITernServerType {

	private final String id;
	private final String name;
	private ITernServerFactory factory;

	/**
	 * GeneratorType constructor comment.
	 * 
	 * @param element
	 *            a configuration element
	 * @throws CoreException
	 */
	public TernServerType(IConfigurationElement element) throws CoreException {
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

	@Override
	public ITernServerFactory getFactory() {
		return factory;
	}

	public void dispose() {

	}
}
