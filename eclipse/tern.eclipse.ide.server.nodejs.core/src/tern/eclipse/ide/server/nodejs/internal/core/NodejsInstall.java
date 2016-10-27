/**
 *  Copyright (c) 2013-2016 Angelo ZERR, IBM.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Victor Sosa <sosah.victor@gmail.com> - Extension to allow locations computed programmatically
 */
package tern.eclipse.ide.server.nodejs.internal.core;

import java.io.File;
import java.io.IOException;

import org.eclipse.core.internal.runtime.InternalPlatform;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.FileLocator;
import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Platform;

import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.INodejsInstallProvider;
import tern.utils.ZipUtils;

@SuppressWarnings("restriction")
public class NodejsInstall implements INodejsInstall {

	private String id;
	private String name;
	private File path;

	/**
	 * GeneratorType constructor comment.
	 *
	 * @param element
	 *            a configuration element
	 * @throws IOException
	 */
	public NodejsInstall(IConfigurationElement element) throws IOException {
		createClass(element);
	}
	
	private void createClass(IConfigurationElement element) throws IOException {
		this.id = element.getAttribute("id");
		this.name = element.getAttribute("name");
		
		String clazz = element.getAttribute("class");
		if (clazz != null && !clazz.isEmpty()) {
			try {
				INodejsInstallProvider provider = (INodejsInstallProvider) element.createExecutableExtension("class");
				this.path = provider.getPath();
			} catch (CoreException e) {
				Trace.trace(Trace.SEVERE, "Problems at creating install provider", e);
			}
		} else {
			String pluginId = element.getNamespaceIdentifier();
			String path = element.getAttribute("path");
			if (path != null && path.length() > 0) {
				File bundleDir = FileLocator.getBundleFile(Platform
						.getBundle(pluginId));
				
				IPath stateLocationPath = InternalPlatform.getDefault().getStateLocation(Platform
						.getBundle(pluginId));
				
				if (stateLocationPath != null) {
					File baseDir = stateLocationPath.toFile();
	
					this.path = new File(baseDir, path);
		
					// check if path exists, if it doesn't look for zip
					if (!this.path.exists()) {
						String zip = element.getAttribute("zip");
		
						File zipFile = new File(bundleDir, zip);
		
						if (zipFile.exists()) {
							if (zipFile.getName().toLowerCase().endsWith(".zip")) {
								ZipUtils.extract(zipFile, baseDir);
							}
		
							if(this.path.exists()) {
								this.path.setExecutable(true);
							}
						}
					}
				}
			}
		}
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

	@Override
	public boolean isNative() {
		return NODE_NATIVE.equals(getId());
	}
}
