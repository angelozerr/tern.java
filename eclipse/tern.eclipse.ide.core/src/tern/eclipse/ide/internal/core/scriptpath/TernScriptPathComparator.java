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
package tern.eclipse.ide.internal.core.scriptpath;

import java.util.Comparator;

import tern.scriptpath.ITernScriptPath;
import tern.scriptpath.ITernScriptPath.ScriptPathsType;

/**
 * Tern script path comparator to sort script path by folder / project.
 *
 */
public class TernScriptPathComparator implements Comparator<ITernScriptPath> {

	public static final Comparator<ITernScriptPath> INSTANCE = new TernScriptPathComparator();

	@Override
	public int compare(ITernScriptPath path1, ITernScriptPath path2) {
		int relevance1 = getRelevance(path1.getType());
		int relevance2 = getRelevance(path2.getType());
		return relevance2 - relevance1;
	}

	private int getRelevance(ScriptPathsType type) {
		switch (type) {
		case FILE:
			return 3;
		case FOLDER:
			return 2;
		case PROJECT:
			return 1;
		}
		return 0;
	}

}
