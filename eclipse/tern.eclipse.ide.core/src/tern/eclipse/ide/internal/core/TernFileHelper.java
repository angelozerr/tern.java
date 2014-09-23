/**
 *  Copyright (c) 2013-2014 Liferay, Inc.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Gregory Amerson <gregory.amerson@liferay.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IConfigurationElement;

import tern.eclipse.ide.core.ITernFileHelper;

public class TernFileHelper implements ITernFileHelper {

	private final String extraTags;

	public TernFileHelper(IConfigurationElement element) throws CoreException {
		this.extraTags = element.getAttribute("extraTags");
	}

	@Override
	public String getExtraTags() {
		return extraTags;
	}

}
