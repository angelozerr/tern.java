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
package tern.scriptpath.impl;

import tern.ITernFile;
import tern.ITernProject;
import tern.scriptpath.ITernScriptPathContainer;

/**
 * Abstract class for container tern script path.
 *
 */
public abstract class ContainerTernScriptPath extends AbstractTernScriptPath
		implements ITernScriptPathContainer {

	//private final Collection<Minimatch> inclusionMinimatchs;
	//private final Collection<Minimatch> exclusionMinimatchs;
	private String[] inclusionPatterns;
	private String[] exclusionPatterns;

	public ContainerTernScriptPath(ITernProject project, ScriptPathsType type,
			String[] inclusionPatterns, String[] exclusionPatterns,
			String externalLabel) {
		super(project, type, externalLabel);
		this.inclusionPatterns = inclusionPatterns;
		this.exclusionPatterns = exclusionPatterns;
		//this.inclusionMinimatchs = create(inclusionPatterns);
		//this.exclusionMinimatchs = create(exclusionPatterns);
	}

	/*private Collection<Minimatch> create(String[] patterns) {
		if (patterns == null || patterns.length < 1) {
			return null;
		}
		Collection<Minimatch> minimatchs = new ArrayList<Minimatch>();
		for (int i = 0; i < patterns.length; i++) {
			minimatchs.add(new Minimatch(patterns[i]));
		}
		return minimatchs;
	}*/

	protected boolean accept(ITernFile file) {
		if (file == null) {
			return false;
		}
		/*if (inclusionMinimatchs == null && exclusionMinimatchs == null) {
			return true;
		}*/
		boolean exclude = false;
		String filename = file.getFullName(getOwnerProject());
		/*if (exclusionMinimatchs != null) {
			for (Minimatch minimatch : exclusionMinimatchs) {
				if (minimatch.match(filename)) {
					exclude = true;
					break;
				}
			}
		}
		if (inclusionMinimatchs != null) {
			for (Minimatch minimatch : inclusionMinimatchs) {
				if (minimatch.match(filename)) {
					return true;
				}
			}
			return false;
		}*/ 
		return !exclude;
	}

	@Override
	public String[] getInclusionPatterns() {
		return inclusionPatterns;
	}

	@Override
	public String[] getExclusionPatterns() {
		return exclusionPatterns;
	}
}
