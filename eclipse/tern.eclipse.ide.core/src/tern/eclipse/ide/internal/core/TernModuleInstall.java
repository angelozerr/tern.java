/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core;

import java.io.File;
import java.io.IOException;

import org.eclipse.core.runtime.FileLocator;
import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.Platform;

import tern.TernException;
import tern.eclipse.ide.core.utils.FileUtils;
import tern.repository.ITernRepository;
import tern.utils.TernModuleHelper;
import tern.utils.ZipUtils;

public class TernModuleInstall {

	private static final String ID_ATTR = "id";
	private static final String NAME_ATTR = "name";
	private static final String SRC_ATTR = "src";

	private final String name;
	private final String id;
	private final File src;

	/**
	 * GeneratorType constructor comment.
	 *
	 * @param element
	 *            a configuration element
	 * @throws IOException
	 */
	public TernModuleInstall(IConfigurationElement element) throws IOException {
		this.name = element.getAttribute(NAME_ATTR);
		this.id = element.getAttribute(ID_ATTR);
		String pluginId = element.getNamespaceIdentifier();
		this.src = getFile(element.getAttribute(SRC_ATTR), pluginId);
	}

	private File getFile(String src, String pluginId) throws IOException {
		File baseDir = FileLocator.getBundleFile(Platform.getBundle(pluginId));
		return new File(baseDir, src);
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public File getSrc() {
		return src;
	}

	public void dispose() {

	}
}
