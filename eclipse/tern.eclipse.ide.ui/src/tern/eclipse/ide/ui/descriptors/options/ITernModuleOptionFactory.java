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
package tern.eclipse.ide.ui.descriptors.options;

import org.eclipse.core.resources.IProject;
import org.eclipse.swt.widgets.Composite;

import tern.metadata.TernModuleMetadataOption;

import com.eclipsesource.json.JsonObject;

public interface ITernModuleOptionFactory {

	void createOption(Composite parent, IProject project,
			TernModuleMetadataOption metadata, JsonObject options);
}
