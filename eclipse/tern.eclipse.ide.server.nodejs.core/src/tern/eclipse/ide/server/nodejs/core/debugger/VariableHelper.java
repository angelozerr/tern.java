package tern.eclipse.ide.server.nodejs.core.debugger;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.variables.VariablesPlugin;

public class VariableHelper {

	private static final String WORKSPACE_LOC = "workspace_loc";

	public static String getWorkspaceLoc(IResource file) {
		return VariablesPlugin.getDefault().getStringVariableManager().generateVariableExpression(WORKSPACE_LOC,
				file.getFullPath().toString());
	}

	public static IFile getResource(String file) {
		int index = file.indexOf(WORKSPACE_LOC);
		if (index > 0) {
			file = file.substring(index + WORKSPACE_LOC.length() + 1, file.length() - 1);
		}
		return ResourcesPlugin.getWorkspace().getRoot().getFile(new Path(file));
	}
}
