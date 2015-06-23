package tern.eclipse.ide.internal.core.scriptpath;

import java.util.List;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;

import tern.ITernProject;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.internal.core.Trace;
import tern.scriptpath.ITernScriptResource;
import tern.scriptpath.impl.ProjectScriptPath;

public class EclipseProjectScriptPath extends ProjectScriptPath implements
		IIDETernScriptPath {

	public EclipseProjectScriptPath(ITernProject project,
			ITernProject ownerProject, String[] inclusionPatterns,
			String[] exclusionPatterns, String external) {
		super(project, ownerProject, inclusionPatterns, exclusionPatterns,
				external);
	}

	@Override
	protected void collect(List<ITernScriptResource> scripts) {
		super.collect(scripts);

		IContainer container = ((IIDETernProject) super.getProject())
				.getProject();
		ScriptResourceProxyVisitor visitor = new ScriptResourceProxyVisitor(
				this, scripts);
		try {
			if (container.exists()) {
				container.accept(visitor, IResource.NONE);
			}
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE,
					"Error while retrieving script resources from the project script path "
							+ container.getName(), e);
		}
	}

	@Override
	public boolean isInScope(IPath path, int resourceKind) {
		IProject project = ((IIDETernProject) getOwnerProject()).getProject();
		return isInScope(path.makeRelativeTo(project.getFullPath()),
				EclipsePathAdapter.INSTANCE);
	}
}
