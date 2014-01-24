/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.eclipse.ide.core;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.QualifiedName;
import org.eclipse.core.runtime.Status;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import tern.TernException;
import tern.TernProject;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath.ScriptPathsType;
import tern.eclipse.ide.core.utils.FileUtils;
import tern.eclipse.ide.internal.core.TernConsoleConnectorManager;
import tern.eclipse.ide.internal.core.Trace;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.eclipse.ide.internal.core.scriptpath.DOMElementsScriptPath;
import tern.eclipse.ide.internal.core.scriptpath.FolderScriptPath;
import tern.eclipse.ide.internal.core.scriptpath.JSFileScriptPath;
import tern.server.ITernServer;
import tern.server.TernServerAdapter;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.server.protocol.type.ITernTypeCollector;

/**
 * Eclipse IDE Tern project.
 * 
 */
public class IDETernProject extends TernProject<IFile> {

	private static final String PATH_JSON_FIELD = "path";

	private static final String TYPE_JSON_FIELD = "type";

	private static final String SCRIPT_PATHS_JSON_FIELD = "scriptPaths";

	private static final String IDE_JSON_FIELD = "ide";

	private static final long serialVersionUID = 1L;

	private static final QualifiedName TERN_PROJECT = new QualifiedName(
			TernCorePlugin.PLUGIN_ID + ".sessionprops", "TernProject");

	private final IProject project;

	private ITernServer ternServer;

	private final List<ITernScriptPath> scriptPaths;

	IDETernProject(IProject project) throws CoreException {
		super(project.getLocation().toFile());
		this.project = project;
		super.setFileManager(new IDETernFileManager());
		project.setSessionProperty(TERN_PROJECT, this);
		this.scriptPaths = new ArrayList<ITernScriptPath>();
	}

	/**
	 * Returns the tern project of the given eclipse projectand throws exception
	 * if the eclipse project has not tern nature.
	 * 
	 * @param project
	 *            eclipse project.
	 * @return the tern project of the given eclipse projectand throws exception
	 *         if the eclipse project has not tern nature.
	 * @throws CoreException
	 */
	public static IDETernProject getTernProject(IProject project)
			throws CoreException {
		if (!hasTernNature(project)) {
			throw new CoreException(new Status(IStatus.ERROR,
					TernCorePlugin.PLUGIN_ID, "The project "
							+ project.getName() + " is not a tern project."));
		}
		IDETernProject ternProject = (IDETernProject) project
				.getSessionProperty(TERN_PROJECT);
		if (ternProject == null) {
			ternProject = new IDETernProject(project);
			try {
				ternProject.load();
			} catch (IOException e) {
				Trace.trace(Trace.SEVERE, "Error while loading tern project", e);
			}
		}
		return ternProject;
	}

	/**
	 * Returns the Eclispe project.
	 * 
	 * @return
	 */
	public IProject getProject() {
		return project;
	}

	/**
	 * Returns the linked instance of tern server.
	 * 
	 * @return
	 */
	private ITernServer getTernServer() {
		if (ternServer == null || ternServer.isDisposed()) {
			try {
				ITernServerType type = TernCorePreferencesSupport.getInstance()
						.getServerType();
				this.ternServer = type.createServer(this);
				this.ternServer.addServerListener(new TernServerAdapter() {
					@Override
					public void onStop(ITernServer server) {
						IDETernProject.this.getFileManager()
								.cleanIndexedFiles();
					}
				});
				configureConsole();
			} catch (Exception e) {
				// should be improved?
				Trace.trace(Trace.SEVERE, "Error while creating tern server", e);
			}

		}
		return ternServer;
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
		try {
			return project.hasNature(TernNature.ID);
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "Error tern nature", e);
			return false;
		}
	}

	@Override
	public void load() throws IOException {
		super.load();
		// Load IDE informatiosn of the tern project.
		loadIDEInfos();
	}

	/**
	 * Load IDE informatiosn from the JSON .tern-project file.
	 */
	private void loadIDEInfos() {
		// Load script paths
		this.scriptPaths.clear();
		JSONObject ide = (JSONObject) super.get(IDE_JSON_FIELD);
		if (ide != null) {
			// There is ide information.
			JSONArray jsonScripts = (JSONArray) ide
					.get(SCRIPT_PATHS_JSON_FIELD);
			if (jsonScripts != null) {
				// There is scriptPaths defined.
				JSONObject jsonScript = null;
				String type = null;
				String path = null;
				// Loop for each script path.
				for (Object object : jsonScripts) {
					jsonScript = (JSONObject) object;
					type = (String) jsonScript.get(TYPE_JSON_FIELD);
					path = (String) jsonScript.get(PATH_JSON_FIELD);
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
		if (pathType.equals(ScriptPathsType.FOLDER)) {
			return getProject().getFolder(path);
		}
		return getProject().getFile(path);
	}

	@Override
	public void save() throws IOException {
		// Store IDE tern project info.
		saveIDEInfos();
		super.save();
		if (ternServer != null) {
			ternServer.dispose();
			ternServer = null;
		}
	}

	/**
	 * Save IDE informations in the JSON file .tern-project.
	 */
	private void saveIDEInfos() {
		JSONObject ide = new JSONObject();
		// script path
		if (scriptPaths.size() > 0) {
			JSONArray jsonScripts = new JSONArray();
			// Loop for each script path and save it in the JSON file
			// .tern-project.
			for (ITernScriptPath scriptPath : scriptPaths) {
				JSONObject jsonScript = new JSONObject();
				jsonScript.put(TYPE_JSON_FIELD, scriptPath.getType().name());
				jsonScript.put(PATH_JSON_FIELD, scriptPath.getPath());
				jsonScripts.add(jsonScript);
			}
			ide.put(SCRIPT_PATHS_JSON_FIELD, jsonScripts);
		}
		super.put(IDE_JSON_FIELD, ide);
	}

	/**
	 * Returns the list of script paths.
	 * 
	 * @return
	 */
	public Collection<ITernScriptPath> getScriptPaths() {
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
		switch (type) {
		case FOLDER:
			return new FolderScriptPath((IFolder) resource);
		default:
			IFile file = (IFile) resource;
			if (FileUtils.isJSFile(file)) {
				return new JSFileScriptPath(file);
			}
			return new DOMElementsScriptPath(file);
		}

	}

	/**
	 * Set the new script paths to use.
	 * 
	 * @param scriptPaths
	 */
	public void setScriptPaths(List<ITernScriptPath> scriptPaths) {
		this.scriptPaths.clear();
		this.scriptPaths.addAll(scriptPaths);
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
		if (ternServer != null) {
			// There is a tern server instance., Retrieve the well connector the
			// the eclipse console.
			ITernConsoleConnector connector = TernConsoleConnectorManager
					.getManager().getConnector(ternServer);
			if (connector != null) {
				if (isTraceOnConsole()) {
					// connect the tern server to the eclipse console.
					connector.connectToConsole(ternServer);
				} else {
					// disconnect the tern server to the eclipse console.
					connector.disconnectToConsole(ternServer);
				}
			}
		}
	}

	public void request(TernDoc doc, ITernCompletionCollector collector)
			throws TernException {
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	public void request(TernDoc doc, ITernDefinitionCollector collector)
			throws TernException {
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	public void request(TernDoc doc, ITernTypeCollector collector)
			throws TernException {
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

}
