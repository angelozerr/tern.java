package tern.eclipse.ide.server.nodejs.core.debugger;

import org.eclipse.core.resources.IResource;
import org.eclipse.core.variables.VariablesPlugin;

public class VariableHelper {

	private static final String WORKSPACE_LOC = "workspace_loc";

	public static String getWorkspaceLoc(IResource file) {
		return VariablesPlugin.getDefault().getStringVariableManager().generateVariableExpression(WORKSPACE_LOC,
				file.getFullPath().toString());
	}
}
