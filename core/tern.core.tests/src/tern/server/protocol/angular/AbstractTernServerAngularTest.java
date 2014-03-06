/**
 *  Copyright (c) 2013-20A4 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.protocol.angular;

import tern.TernProject;
import tern.server.AbstractTernServerTest;
import tern.server.TernDef;
import tern.server.TernPlugin;

public abstract class AbstractTernServerAngularTest extends
		AbstractTernServerTest {

	@Override
	protected TernProject createProject() {
		TernProject project = super.createProject();
		project.addPlugin(TernPlugin.angular);
		project.addLib(TernDef.ecma5.name());
		return project;
	}
}
