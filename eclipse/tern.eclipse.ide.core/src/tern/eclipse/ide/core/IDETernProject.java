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
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.QualifiedName;
import org.eclipse.core.runtime.Status;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import tern.TernProject;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath.ScriptPathsType;
import tern.eclipse.ide.internal.core.Trace;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.eclipse.ide.internal.core.scriptpath.PageTernScriptPath;
import tern.server.ITernServer;
import tern.server.TernServerAdapter;

/**
 * Eclipse IDE Tern project.
 * 
 */
public class IDETernProject extends TernProject {

	private static final long serialVersionUID = 1L;

	private static final QualifiedName TERN_PROJECT = new QualifiedName(
			TernCorePlugin.PLUGIN_ID + ".sessionprops", "TernProject");

	private final IProject project;

	private ITernServer ternServer;

	private IDETernFileManager fileManager;

	private final List<ITernScriptPath> scriptPaths;

	IDETernProject(IProject project) throws CoreException {
		super(project.getLocation().toFile());
		this.project = project;
		this.fileManager = new IDETernFileManager();
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

	public IProject getProject() {
		return project;
	}

	public ITernServer getTernServer() {
		if (ternServer == null || ternServer.isDisposed()) {
			try {
				ITernServerType type = TernCorePreferencesSupport.getInstance()
						.getServerType();
				this.ternServer = type.createServer(this);
				this.ternServer.addServerListener(new TernServerAdapter() {
					@Override
					public void onEnd(ITernServer server) {
						IDETernProject.this.fileManager.cleanFiles();
					}
				});
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
	public void save() throws IOException {
		// Store IDE tern project info.
		saveIDEInfos();
		super.save();
		if (ternServer != null) {
			ternServer.dispose();
			ternServer = null;
		}
	}

	private void saveIDEInfos() {
		JSONObject ide = new JSONObject();
		// script path
		if (scriptPaths.size() > 0) {
			JSONArray jsonScripts = new JSONArray();
			for (ITernScriptPath scriptPath : scriptPaths) {
				JSONObject jsonScript = new JSONObject();
				jsonScript.put("type", scriptPath.getType().name());
				jsonScript.put("path", scriptPath.getPath());
				jsonScripts.add(jsonScript);
			}
			ide.put("scriptPaths", jsonScripts);
		}
		super.put("ide", ide);
	}

	public IDETernFileManager getFileManager() {
		return fileManager;
	}

	@Override
	public void load() throws IOException {
		super.load();
		loadIDEInfos();
	}

	private void loadIDEInfos() {
		this.scriptPaths.clear();
		JSONObject ide = (JSONObject) super.get("ide");
		if (ide != null) {
			JSONArray jsonScripts = (JSONArray) ide.get("scriptPaths");
			if (jsonScripts != null) {
				JSONObject jsonScript = null;
				String type = null;
				String path = null;
				for (Object object : jsonScripts) {
					jsonScript = (JSONObject) object;
					type = (String) jsonScript.get("type");
					path = (String) jsonScript.get("path");
					if (type != null && path != null) {
						if (ScriptPathsType.PAGE.name().equals(type)) {
							IFile file = getProject().getFile(path);
							if (file.exists()) {
								this.scriptPaths
										.add(createPageScriptPath(file));
							}
						}
					}
				}
			}

		}
	}

	/*
	 * public void addScriptPath(ITernScriptPath scriptPath) {
	 * scriptPaths.add(scriptPath); }
	 */

	public List<ITernScriptPath> getScriptPaths() {
		return scriptPaths;
	}

	public ITernScriptPath createPageScriptPath(IFile file) {
		return new PageTernScriptPath(file);
	}

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

	public ITernScriptPath getScriptPath(String path) {
		for (ITernScriptPath scriptPath : scriptPaths) {
			if (scriptPath.getPath().equals(path)) {
				return scriptPath;
			}
		}
		return null;
	}
}
