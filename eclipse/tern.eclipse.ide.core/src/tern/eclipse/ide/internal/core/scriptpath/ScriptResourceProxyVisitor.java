package tern.eclipse.ide.internal.core.scriptpath;

import java.util.List;

import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceProxy;
import org.eclipse.core.resources.IResourceProxyVisitor;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.scriptpath.ITernScriptPath;
import tern.scriptpath.ITernScriptPath.ScriptPathsType;
import tern.scriptpath.ITernScriptResource;
import tern.scriptpath.impl.JSFileScriptResource;

public class ScriptResourceProxyVisitor implements IResourceProxyVisitor {

	private final IIDETernScriptPath scriptPath;
	private final List<ITernScriptResource> resources;
	private final boolean isAlsoProject;

	public ScriptResourceProxyVisitor(IIDETernScriptPath scriptPath,
			List<ITernScriptResource> resources) {
		this.scriptPath = scriptPath;
		this.resources = resources;
		this.isAlsoProject = scriptPath.getType() == ScriptPathsType.PROJECT;
	}

	@Override
	public boolean visit(IResourceProxy proxy) throws CoreException {
		if (proxy.isDerived())
			return false;
		int resourceType = proxy.getType();
		switch (resourceType) {
		case IResource.PROJECT:
			return true;
		case IResource.FOLDER:
			IPath folderPath = proxy.requestFullPath();
			if (isAlsoProject) {
				if (isExcludedFromProject(folderPath,
						scriptPath.getOwnerProject())) {
					/* TODO : trace isInScope
					 * System.err.println("Exclude folder (from project) "
							+ folderPath.toString()
							+ " because a tern script path include it.");*/
					return false;
				}
			}
			if (!scriptPath.hasInclusionPatterns()) {
				return true;
			}
			return isInScope(folderPath, resourceType);
		case IResource.FILE:
			String filename = proxy.getName();
			if (TernResourcesManager.isJSFile(filename)) {
				IPath path = proxy.requestFullPath();
				if (isInScope(path, resourceType)) {
					IResource resource = proxy.requestResource();
					ITernFile file = TernResourcesManager.getTernFile(resource);
					resources.add(new JSFileScriptResource(scriptPath
							.getOwnerProject(), file));
				}
			}
		}
		return false;
	}

	protected boolean isInScope(IPath path, int resourceType) {
		boolean include = scriptPath.isInScope(path, resourceType);
		/* TODO : trace isInScope
		 * System.err.println((include ? "Include" : "Exclude ") + path.toString()
				+ " by " + scriptPath.toString());*/
		return include;
	}

	private boolean isExcludedFromProject(IPath folderPath,
			ITernProject ownerProject) {
		// answer whether the folder should be ignored when walking the project
		// as a source folder
		// if (childPath.segmentCount() > 2) return false; // is a subfolder of
		// a package

		for (ITernScriptPath scriptPath : ownerProject.getScriptPaths()) {
			if (scriptPath.getType() == ScriptPathsType.FOLDER) {
				if (folderPath.equals(((FolderScriptPath) scriptPath)
						.getFullPath()))
					return true;
			}
		}
		return false;
	}

}
