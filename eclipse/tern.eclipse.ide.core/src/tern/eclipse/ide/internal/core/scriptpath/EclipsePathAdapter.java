/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core.scriptpath;

import minimatch.PathAdapter;

import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;

/**
 * Minimatch path adapter to use Minimatch with Eclipse {@link IPath}.
 *
 */
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
