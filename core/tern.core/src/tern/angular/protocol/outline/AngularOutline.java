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
package tern.angular.protocol.outline;

import tern.ITernProject;
import tern.server.protocol.outline.JSNodeRoot;

/**
 * Angular model which hosts modules, directives, controllers of the Angular
 * application.
 * 
 */
public class AngularOutline extends JSNodeRoot {

	public static final String ANGULAR_MODEL_CHANGED_EVENT = "angular:modelChanged";

	private static final String ROOT = "#Angular";

	public AngularOutline(ITernProject ternProject) {
		super(ROOT, ternProject);
	}

}
