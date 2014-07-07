/**
 *  Copyright (c) 2014  Liferay, Inc.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Gregory Amerson <gregory.amerson@liferay.com> - initial API and implementation
 */
package tern.eclipse.ide.core;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;


/**
 * Tern nature adapter, can be used by adopters to provide more
 * advanced logic for which projects should be treated as tern projects
 */
public interface ITernNatureCapability {

	boolean hasTernNature( IProject project ) throws CoreException;

}
