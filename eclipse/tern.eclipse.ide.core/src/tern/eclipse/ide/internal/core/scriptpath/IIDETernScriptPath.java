package tern.eclipse.ide.internal.core.scriptpath;

import org.eclipse.core.runtime.IPath;

import tern.ITernProject;
import tern.scriptpath.ITernScriptPath;

public interface IIDETernScriptPath extends ITernScriptPath {

	boolean isInScope(IPath path, int resourceKind);

	boolean hasInclusionPatterns();

	ITernProject getOwnerProject();
}
