package tern.eclipse.ide.internal.core.scriptpath;

import minimatch.PathAdapter;

import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;

public class EclipsePathAdapter implements PathAdapter<IPath> {

	public static final PathAdapter<IPath> INSTANCE = new EclipsePathAdapter();

	@Override
	public int getLength(IPath file) {
		return file.segmentCount();
	}

	@Override
	public String getPathName(IPath file, int i) {
		return file.segment(i);
	}

	@Override
	public IPath createPath(String filename) {
		return new Path(filename);
	}

	@Override
	public IPath subPath(IPath file, int fr) {
		return file.removeFirstSegments(fr);
	}
}
