/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.scriptpath.impl;

import java.util.ArrayList;
import java.util.Collection;

import minimatch.Minimatch;
import minimatch.PathAdapter;
import tern.ITernProject;
import tern.scriptpath.ITernScriptPathContainer;

/**
 * Abstract class for container tern script path.
 *
 */
public abstract class ContainerTernScriptPath extends AbstractTernScriptPath implements ITernScriptPathContainer {

	private final Collection<Minimatch> inclusionMinimatchs;
	private final Collection<Minimatch> exclusionMinimatchs;
	private String[] inclusionPatterns;
	private String[] exclusionPatterns;

	public ContainerTernScriptPath(ITernProject project, ScriptPathsType type, String[] inclusionPatterns,
			String[] exclusionPatterns, String externalLabel) {
		super(project, type, externalLabel);
		this.inclusionPatterns = inclusionPatterns;
		this.exclusionPatterns = exclusionPatterns;
		this.inclusionMinimatchs = create(inclusionPatterns);
		this.exclusionMinimatchs = create(exclusionPatterns);
	}

	private Collection<Minimatch> create(String[] patterns) {
		if (patterns == null || patterns.length < 1) {
			return null;
		}
		Collection<Minimatch> minimatchs = new ArrayList<Minimatch>();
		for (int i = 0; i < patterns.length; i++) {
			minimatchs.add(new Minimatch(patterns[i]));
		}
		return minimatchs;
	}

	public <T> boolean isInScope(T filename, PathAdapter<T> adapter) {
		if (filename == null) {
			return false;
		}
		if (inclusionMinimatchs == null && exclusionMinimatchs == null) {
			return true;
		}
		if (inclusionMinimatchs != null) {
			boolean include = false;
			for (Minimatch minimatch : inclusionMinimatchs) {
				if (minimatch.match(filename, adapter)) {
					include = true;
					break;
				}
			}
			if (!include) {
				return false;
			}
		}
		if (exclusionMinimatchs != null) {
			for (Minimatch minimatch : exclusionMinimatchs) {
				if (minimatch.match(filename, adapter)) {
					return false;
				}
			}
		}
		return true;
	}

	@Override
	public String[] getInclusionPatterns() {
		return inclusionPatterns;
	}

	public boolean hasInclusionPatterns() {
		return getInclusionPatterns() != null && getInclusionPatterns().length > 0;
	}

	@Override
	public String[] getExclusionPatterns() {
		return exclusionPatterns;
	}

	public boolean hasExclusionPatterns() {
		return getExclusionPatterns() != null && getExclusionPatterns().length > 0;
	}

	@Override
	public String toString() {
		return new StringBuilder("[").append(getType()).append("]").append(", path(\"").append(getPath()).append("\")")
				.append(" including(").append(toString(getInclusionPatterns())).append(")").append(", excluding(")
				.append(toString(getExclusionPatterns())).append(")").toString();
	}

	private String toString(String[] patterns) {
		if (patterns == null) {
			return null;
		}
		StringBuilder s = new StringBuilder();
		for (int i = 0; i < patterns.length; i++) {
			if (i > 0) {
				s.append(",");
			}
			s.append(patterns[i]);
		}
		return s.toString();
	}
}
