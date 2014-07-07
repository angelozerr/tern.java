/**
 *  Copyright (c) 2014 Liferay, Inc.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Gregory Amerson <gregory.amerson@liferay.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;

import tern.eclipse.ide.core.ITernNatureCapability;


/**
 * Provides a default tern adapter since most adapters only need to match ids
 */
public class DefaultTernNatureAdapter implements ITernNatureCapability {

	final String natureId;

	public DefaultTernNatureAdapter( String id ) {
		this.natureId = id;
	}

	@Override
	public boolean hasTernNature( IProject project) throws CoreException {
		return project != null && project.hasNature( this.natureId );
	}

}
