/**
 *  Copyright (c) 2015 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.eclipse.ide.server.nodejs.core.debugger;

import java.io.File;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionPoint;
import org.eclipse.core.runtime.Platform;

import tern.TernException;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.eclipse.ide.server.nodejs.internal.core.Trace;
import tern.server.nodejs.process.INodejsProcess;

public class NodejsDebuggersManager {

	private static final String EXT_NODEJS_DEBUGGERS = "nodeJSDebuggers"; //$NON-NLS-1$

	private static final String EL_DEBUGGER = "debugger"; //$NON-NLS-1$

	private static final String ATTR_ID = "id"; //$NON-NLS-1$
	private static final String ATTR_NAME = "name"; //$NON-NLS-1$
	private static final String ATTR_CLASS = "class"; //$NON-NLS-1$

	private static Map<String, INodejsDebugger> debuggers = new LinkedHashMap<String, INodejsDebugger>();

	static {
		// Add supported debuggers
		loadExtensionPoint();

		// Make debuggers map unmodifiable
		debuggers = Collections.unmodifiableMap(debuggers);
	}

	private NodejsDebuggersManager() {
	}

	public static Collection<INodejsDebugger> getDebuggers() {
		return debuggers.values();
	}

	private static void loadExtensionPoint() {
		IExtensionPoint extensionPoint = Platform.getExtensionRegistry()
				.getExtensionPoint(TernNodejsCorePlugin.PLUGIN_ID,
						EXT_NODEJS_DEBUGGERS);

		IConfigurationElement[] elements = extensionPoint
				.getConfigurationElements();

		for (IConfigurationElement el : elements) {
			if (el.getName().equals(EL_DEBUGGER)) {
				try {
					addDebugger(new NodejsDebugger(el));
				} catch (Exception ex) {
					Trace.trace(Trace.SEVERE, ex.getMessage(), ex);
				}
			}
		}
	}

	private static void addDebugger(INodejsDebugger debugger) {
		debuggers.put(debugger.getId(), debugger);
	}

	public static INodejsDebugger getDebugger(String debugger) {
		if (debugger == null) {
			return null;
		}
		return debuggers.get(debugger);
	}

	private static class NodejsDebugger implements INodejsDebugger {

		private INodejsDebuggerDelegate delegate;
		private String name;
		private String id;

		public NodejsDebugger(IConfigurationElement el) throws Exception {
			name = el.getAttribute(ATTR_NAME);
			id = el.getAttribute(ATTR_ID);
			delegate = (INodejsDebuggerDelegate) el
					.createExecutableExtension(ATTR_CLASS);
			if (name == null || name.trim().isEmpty()) {
				throw new RuntimeException("Debugger name cannot be empty");
			}
			if (id == null || id.trim().isEmpty()) {
				throw new RuntimeException("Debugger id cannot be empty");
			}
		}

		@Override
		public String getName() {
			return name;
		}

		@Override
		public String getId() {
			return id;
		}

		@Override
		public boolean isInstalled() {
			return delegate.isInstalled();
		}

		@Override
		public boolean canSupportDebug() {
			return delegate.canSupportDebug();
		}
		
		@Override
		public INodejsProcess createProcess(IFile jsFile, IProject workingDir, File nodejsInstallPath)
				throws TernException {
			return delegate.createProcess(jsFile, workingDir, nodejsInstallPath);
		}
	}

}
