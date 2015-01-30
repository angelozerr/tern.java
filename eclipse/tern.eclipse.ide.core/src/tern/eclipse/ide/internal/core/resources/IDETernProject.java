/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.eclipse.ide.internal.core.resources;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceVisitor;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.QualifiedName;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.ITernConsoleConnector;
import tern.eclipse.ide.core.ITernProjectLifecycleListener.LifecycleEventType;
import tern.eclipse.ide.core.ITernServerPreferencesListener;
import tern.eclipse.ide.core.ITernServerType;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.core.TernConsoleConnectorManager;
import tern.eclipse.ide.internal.core.TernNatureAdaptersManager;
import tern.eclipse.ide.internal.core.TernProjectLifecycleManager;
import tern.eclipse.ide.internal.core.TernRepositoryManager;
import tern.eclipse.ide.internal.core.Trace;
import tern.eclipse.ide.internal.core.builder.TernBuilder;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.eclipse.ide.internal.core.scriptpath.FolderScriptPath;
import tern.repository.ITernRepository;
import tern.resources.TernProject;
import tern.scriptpath.ITernScriptPath;
import tern.scriptpath.ITernScriptPath.ScriptPathsType;
import tern.scriptpath.impl.JSFileScriptPath;
import tern.scriptpath.impl.ProjectScriptPath;
import tern.scriptpath.impl.dom.DOMElementsScriptPath;
import tern.server.ITernModule;
import tern.server.ITernServer;
import tern.server.ITernServerListener;
import tern.server.TernServerAdapter;
import tern.server.protocol.JsonHelper;
import tern.utils.IOUtils;
import tern.utils.TernModuleHelper;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;

/**
 * Eclipse IDE Tern project.
 * 
 */
public class IDETernProject extends TernProject implements IIDETernProject,
		ITernServerPreferencesListener {

	private static final QualifiedName TERN_PROJECT = new QualifiedName(
			TernCorePlugin.PLUGIN_ID + ".sessionprops", "TernProject"); //$NON-NLS-1$ //$NON-NLS-2$

	private static final String PATH_JSON_FIELD = "path"; //$NON-NLS-1$

	private static final String TYPE_JSON_FIELD = "type"; //$NON-NLS-1$

	private static final String SCRIPT_PATHS_JSON_FIELD = "scriptPaths"; //$NON-NLS-1$

	private static final String IDE_JSON_FIELD = "ide"; //$NON-NLS-1$

	private static final long serialVersionUID = 1L;

	private final IProject project;

	private ITernServer ternServer;
	private Object serverLock = new Object();

	private final List<ITernScriptPath> scriptPaths;

	private final Map<String, Object> data;

	private final List<ITernServerListener> listeners;

	IDETernProject(IProject project) throws CoreException {
		super(project.getLocation().toFile());
		this.project = project;
		this.scriptPaths = new ArrayList<ITernScriptPath>();
		this.data = new HashMap<String, Object>();
		this.listeners = new ArrayList<ITernServerListener>();
		TernCorePlugin.getTernServerTypeManager().addServerPreferencesListener(
				this);
		project.setSessionProperty(TERN_PROJECT, this);
	}

	/**
	 * Returns the Eclispe project.
	 * 
	 * @return
	 */
	public IProject getProject() {
		return project;
	}

	@Override
	public String getName() {
		return project.getName();
	}

	@Override
	public File getProjectDir() {
		return project.getLocation().toFile();
	}

	/**
	 * Returns the linked instance of tern server.
	 * 
	 * @return
	 */
	@Override
	public ITernServer getTernServer() {
		synchronized (serverLock) {
			if (isServerDisposed()) {
				try {
					ITernServerType type = TernCorePreferencesSupport
							.getInstance().getServerType();
					this.ternServer = type.createServer(this);
					this.ternServer
							.setLoadingLocalPlugins(TernCorePreferencesSupport
									.getInstance().isLoadingLocalPlugins(
											project));
					this.ternServer.addServerListener(new TernServerAdapter() {
						@Override
						public void onStop(ITernServer server) {
							getFileSynchronizer().cleanIndexedFiles();
						}
					});
					if (!TernCorePreferencesSupport.getInstance()
							.isDisableAsynchronousReques(project)) {
						this.ternServer
								.setRequestProcessor(new IDETernServerAsyncReqProcessor(
										ternServer));
					}
					copyListeners();
					configureConsole();
				} catch (Exception e) {
					// should be improved?
					Trace.trace(Trace.SEVERE,
							"Error while creating tern server", e);
				}

			}
			return ternServer;
		}
	}

	public boolean isServerDisposed() {
		synchronized (serverLock) {
			return ternServer == null || ternServer.isDisposed();
		}
	}

	/**
	 * Return true if the given project have tern nature
	 * "tern.eclipse.ide.core.ternnature" and false otherwise.
	 * 
	 * @param project
	 *            Eclipse project.
	 * @return true if the given project have tern nature
	 *         "tern.eclipse.ide.core.ternnature" and false otherwise.
	 */
	public static boolean hasTernNature(IProject project) {
		return TernNatureAdaptersManager.getManager().hasTernNature(project);
	}

	@Override
	protected void doLoad() throws IOException {
		try {
			disposeServer();
			TernProjectLifecycleManager.getManager()
					.fireTernProjectLifeCycleListenerChanged(this,
							LifecycleEventType.onLoadBefore);
			super.doLoad();
			// add tern builder if needed
			try {
				TernBuilder.addTernBuilder(project);
			} catch (CoreException e) {
				Trace.trace(Trace.SEVERE, "Error while adding tern builder", e);
			}
			// Load IDE informations of the tern project.
			loadIDEInfos();

			// the tern project is loaded on the first time, load default
			// modules and save .tern-project.
			initAdaptedNaturesInfos();
		} finally {
			TernProjectLifecycleManager.getManager()
					.fireTernProjectLifeCycleListenerChanged(this,
							LifecycleEventType.onLoadAfter);
		}
	}

	/**
	 * Load IDE informations from the JSON .tern-project file.
	 */
	private void loadIDEInfos() {
		// Load script paths
		this.scriptPaths.clear();
		JsonObject ide = (JsonObject) super.get(IDE_JSON_FIELD);
		if (ide != null) {
			// There is ide information.
			JsonArray jsonScripts = (JsonArray) ide
					.get(SCRIPT_PATHS_JSON_FIELD);
			if (jsonScripts != null) {
				// There is scriptPaths defined.
				JsonObject jsonScript = null;
				String type = null;
				String path = null;
				// Loop for each script path.
				for (Object object : jsonScripts) {
					jsonScript = (JsonObject) object;
					type = JsonHelper.getString(jsonScript, TYPE_JSON_FIELD);
					path = JsonHelper.getString(jsonScript, PATH_JSON_FIELD);
					if (type != null && path != null) {
						ScriptPathsType pathType = ScriptPathsType
								.getType(type);
						if (pathType == null) {
							pathType = ScriptPathsType.FILE;
						}
						if (pathType != null) {
							// script path type exists.
							IResource resource = getResource(path, pathType);
							if (resource != null && resource.exists()) {
								// the script path exists, add it.
								this.scriptPaths.add(createScriptPath(resource,
										pathType));
							}
						}
					}
				}
			}

		}
	}

	/*
	 * Configures Tern Modules (Libraries and Plugins) that are default for Tern
	 * Nature Adapters active on a project
	 */
	private void initAdaptedNaturesInfos() {
		try {
			TernNatureAdaptersManager.getManager().addDefaultModules(this);
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE,
					"Error while configuring default tern project modules", e);
			return;
		}

		try {
			save();
		} catch (IOException e) {
			Trace.trace(Trace.SEVERE, "Error while saving tern project", e);
		}
	}

	/**
	 * Returns the resource of the given path and type.
	 * 
	 * @param path
	 *            the path of the script path
	 * @param pathType
	 *            the type of the script path.
	 * @return
	 */
	private IResource getResource(String path, ScriptPathsType pathType) {
		switch (pathType) {
		case FILE:
			return getProject().getFile(path);
		case FOLDER:
			return getProject().getFolder(path);
		case PROJECT:
			return ResourcesPlugin.getWorkspace().getRoot().getProject(path);
		}
		throw new UnsupportedOperationException(
				"Cannot retrieve resource from the type=" + pathType
						+ " of the path=" + path);
	}

	@Override
	public IFile getIDEFile(String name) {
		ITernFile tf = getFile(name);
		if (tf != null) {
			return (IFile) tf.getAdapter(IFile.class);
		}
		return null;
	}

	@Override
	protected void doSave() throws IOException {
		try {
			TernProjectLifecycleManager.getManager()
					.fireTernProjectLifeCycleListenerChanged(this,
							LifecycleEventType.onSaveBefore);
			// Store IDE tern project info.
			saveIDEInfos();

			if (isDirty()) {
				// save .tern-project
				IFile file = project.getFile(TERN_PROJECT_FILE);
				InputStream content = null;
				try {
					content = IOUtils.toInputStream(super.toString(),
							file.exists() ? file.getCharset() : "UTF-8");
					if (!file.exists()) {
						file.create(content, IResource.NONE, null);
					} else {
						file.setContents(content, true, false, null);
					}
				} catch (CoreException e) {
					throw new IOException("Cannot save .tern-project", e);
				} finally {
					if (content != null) {
						IOUtils.closeQuietly(content);
					}
				}
				// .tern-project has changed, dispose the server.
				disposeServer();
			}
		} finally {
			TernProjectLifecycleManager.getManager()
					.fireTernProjectLifeCycleListenerChanged(this,
							LifecycleEventType.onSaveAfter);
		}
	}

	@Override
	public void handleException(Throwable t) {
		Trace.trace(Trace.SEVERE, t.getMessage(), t);
	}

	/**
	 * Save IDE informations in the JSON file .tern-project.
	 */
	private void saveIDEInfos() {
		JsonObject ide = new JsonObject();
		// script path
		if (scriptPaths.size() > 0) {
			JsonArray jsonScripts = new JsonArray();
			// Loop for each script path and save it in the JSON file
			// .tern-project.
			for (ITernScriptPath scriptPath : scriptPaths) {
				if (!scriptPath.isExternal()) {
					JsonObject jsonScript = new JsonObject();
					jsonScript
							.add(TYPE_JSON_FIELD, scriptPath.getType().name());
					jsonScript.add(PATH_JSON_FIELD, scriptPath.getPath());
					jsonScripts.add(jsonScript);
				}
			}
			ide.add(SCRIPT_PATHS_JSON_FIELD, jsonScripts);
		}
		super.set(IDE_JSON_FIELD, ide);
	}

	/**
	 * Returns the list of script paths.
	 * 
	 * @return
	 */
	@Override
	public List<ITernScriptPath> getScriptPaths() {
		return scriptPaths;
	}

	/**
	 * Create the script path instance from the given resource and type.
	 * 
	 * @param resource
	 *            the root resource.
	 * @param type
	 *            of the script path.
	 * @return
	 */
	public ITernScriptPath createScriptPath(IResource resource,
			ScriptPathsType type) {
		return createScriptPath(resource, type, null);
	}

	private ITernScriptPath createScriptPath(IResource resource,
			ScriptPathsType type, String external) {
		switch (type) {
		case FOLDER:
			return new FolderScriptPath(this, (IFolder) resource, external);
		case FILE:
			ITernFile file = getFile(resource);
			if (file == null) {
				break;
			}
			if (TernResourcesManager.isJSFile(file)) {
				return new JSFileScriptPath(this, file, external);
			}
			return new DOMElementsScriptPath(this, file, external);
		case PROJECT:
			ITernProject project;
			try {
				project = TernCorePlugin.getTernProject((IProject) resource);
				if (project != null) {
					return new ProjectScriptPath(project, this, external);
				}
			} catch (CoreException e) {
				Trace.trace(Trace.SEVERE, "Project " + resource.getName()
						+ " is not a Tern project", e);
			}
		}
		throw new UnsupportedOperationException(
				"Cannot create script path for the given type " + type);
	}

	/**
	 * Set the new script paths to use.
	 * 
	 * @param scriptPaths
	 * @throws IOException
	 */
	public void setScriptPaths(List<ITernScriptPath> scriptPaths)
			throws IOException {
		this.scriptPaths.clear();
		this.scriptPaths.addAll(scriptPaths);
		save();
	}

	@Override
	public ITernScriptPath addExternalScriptPath(IResource resource,
			ScriptPathsType type, String external) throws IOException {
		ITernScriptPath path = createScriptPath(resource, type, external);
		scriptPaths.add(path);
		return path;
	}

	@Override
	public void removeExternalScriptPaths(String external) {
		List<ITernScriptPath> initialScriptPaths = new ArrayList<ITernScriptPath>(
				scriptPaths);
		for (ITernScriptPath scriptPath : initialScriptPaths) {
			if (external.equals(scriptPath.getExternalLabel())) {
				scriptPaths.remove(scriptPath);
			}
		}
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass) {
		if (adapterClass == IProject.class || adapterClass == IContainer.class
				|| adapterClass == IResource.class) {
			return project;
		}
		return super.getAdapter(adapterClass);
	}

	@Override
	public boolean equals(Object value) {
		if (value instanceof IDETernProject) {
			return ((IDETernProject) value).getProject().equals(getProject());
		}
		return super.equals(value);
	}

	/**
	 * Returns the script path instance from the given path and null otherwise.
	 * 
	 * @param path
	 *            of the script path resource.
	 * @return the script path instance from the given path and null otherwise.
	 */
	public ITernScriptPath getScriptPath(String path) {
		for (ITernScriptPath scriptPath : scriptPaths) {
			if (scriptPath.getPath().equals(path)) {
				return scriptPath;
			}
		}
		return null;
	}

	/**
	 * Returns true if trace of the tern server (JSON request/response) should
	 * be displayed on the Eclipse console and false otherwise.
	 * 
	 * @return
	 */
	public boolean isTraceOnConsole() {
		return TernCorePreferencesSupport.getInstance().isTraceOnConsole(
				project);
	}

	/**
	 * Configure console to show/hide JSON request/response of the tern server.
	 */
	public void configureConsole() {
		synchronized (serverLock) {
			if (ternServer != null) {
				// There is a tern server instance., Retrieve the well connector
				// the
				// the eclipse console.
				ITernConsoleConnector connector = TernConsoleConnectorManager
						.getManager().getConnector(ternServer);
				if (connector != null) {
					if (isTraceOnConsole()) {
						// connect the tern server to the eclipse console.
						connector.connectToConsole(ternServer, this);
					} else {
						// disconnect the tern server to the eclipse console.
						connector.disconnectToConsole(ternServer, this);
					}
				}
			}
		}
	}

	public void disposeServer() {
		synchronized (serverLock) {
			if (!isServerDisposed()) {
				if (ternServer != null) {
					ternServer.dispose();
					ternServer = null;
				}
			}
		}
	}

	@SuppressWarnings("unchecked")
	public <T> T getData(String key) {
		synchronized (data) {
			return (T) data.get(key);
		}
	}

	public void setData(String key, Object value) {
		synchronized (data) {
			data.put(key, value);
		}
	}

	@Override
	public void serverPreferencesChanged(IProject project) {
		if (project == null || getProject().equals(project)) {
			disposeServer();
		}
	}

	// ----------------------- Tern server listeners.

	@Override
	public void addServerListener(ITernServerListener listener) {
		synchronized (listeners) {
			if (!listeners.contains(listener)) {
				listeners.add(listener);
			}
		}
		copyListeners();
	}

	@Override
	public void removeServerListener(ITernServerListener listener) {
		synchronized (listeners) {
			listeners.remove(listener);
		}
		synchronized (serverLock) {
			if (ternServer != null) {
				this.ternServer.removeServerListener(listener);
			}
		}
	}

	private void copyListeners() {
		synchronized (serverLock) {
			if (ternServer != null) {
				for (ITernServerListener listener : listeners) {
					this.ternServer.addServerListener(listener);
				}
			}
		}
	}

	@Override
	public List<ITernModule> getProjectModules() {
		final List<ITernModule> modules = new ArrayList<ITernModule>();
		if (project.isAccessible()
				&& TernCorePreferencesSupport.getInstance()
						.isLoadingLocalPlugins(project)) {
			try {
				project.accept(new IResourceVisitor() {

					@Override
					public boolean visit(IResource resource)
							throws CoreException {
						switch (resource.getType()) {
						case IResource.PROJECT:
							return true;
						case IResource.FILE:
							ITernModule module = TernModuleHelper
									.getModule(resource.getName());
							if (module != null) {
								modules.add(module);
							}
							return false;
						default:
							return false;
						}
					}
				});
			} catch (CoreException e) {
				Trace.trace(
						Trace.SEVERE,
						"Error while collecting tern plugin from the project root",
						e);
			}
		}
		return modules;
	}

	@Override
	public ITernRepository getRepository() {
		return TernRepositoryManager.getManager().getRepository(getProject());
	}

	public void dispose() throws CoreException {
		try {
			TernProjectLifecycleManager.getManager()
					.fireTernProjectLifeCycleListenerChanged(this,
							LifecycleEventType.onDisposeBefore);
			disposeServer();
			getFileSynchronizer().dispose();
			if (project.isAccessible()) {
				project.setSessionProperty(TERN_PROJECT, null);
			}
		} finally {
			TernProjectLifecycleManager.getManager()
					.fireTernProjectLifeCycleListenerChanged(this,
							LifecycleEventType.onDisposeAfter);
		}
	}

	protected static IDETernProject getTernProject(IProject project)
			throws CoreException {
		return (IDETernProject) project.getSessionProperty(TERN_PROJECT);
	}

}