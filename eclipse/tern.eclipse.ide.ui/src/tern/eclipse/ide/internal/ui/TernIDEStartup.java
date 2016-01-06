/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.ui;

import org.eclipse.ui.IStartup;

/**
 * Need this to make TernNatureTester work from early start
 * 
 * @author Victor Rubezhny
 */
public class TernIDEStartup implements IStartup {

	@Override
	public void earlyStartup() {
		// EditorActivationTracker is thread-safe and registers asynchronously
		EditorActivationTracker.getInstance();
	}

}
