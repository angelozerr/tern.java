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
package tern.eclipse.ide.core;

/**
 * Tern project lifecycle listener API.
 *
 */
public interface ITernProjectLifecycleListener {

	/**
	 * Lifecycle event type.
	 *
	 */
	public enum LifecycleEventType {
		onLoadBefore, onLoadAfter, onSaveBefore, onSaveAfter, onDisposeBefore, onDisposeAfter, onLintersChanged;
	}

	/**
	 * Handle event type;
	 * 
	 * @param project
	 * @param state
	 */
	void handleEvent(IIDETernProject project, LifecycleEventType state);

}
