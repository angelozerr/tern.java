/*******************************************************************************
 * Copyright (c) 2009 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *     Zend Technologies
 *******************************************************************************/
package tern.eclipse.ide.server.nodejs.internal.core.preferences;

import org.eclipse.core.runtime.preferences.AbstractPreferenceInitializer;

public class TernNodejsCorePreferenceInitializer extends
		AbstractPreferenceInitializer {

	@Override
	public void initializeDefaultPreferences() {
		TernNodejsCorePreferenceConstants.initializeDefaultValues();
	}

}