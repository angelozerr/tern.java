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
package tern.angular.protocol.outline;

import java.io.IOException;

import tern.ITernProject;
import tern.TernException;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.TernQuery;
import tern.server.protocol.outline.IJSNodeRoot;
import tern.server.protocol.outline.TernOutlineCollector;
import tern.server.protocol.push.IMessageHandler;

/**
 * Angular outline provider.
 *
 */
public class AngularOutlineProvider extends TernOutlineCollector implements IMessageHandler {

	private AngularOutline outline;

	public AngularOutlineProvider(ITernProject ternProject) {
		super(ternProject);
		ternProject.on(AngularOutline.ANGULAR_MODEL_CHANGED_EVENT, this);
	}

	@Override
	protected IJSNodeRoot doCreateRoot() {
		outline.clear();
		return outline;
	}

	public AngularOutline getOutline() throws IOException, TernException {
		if (outline == null) {
			outline = new AngularOutline(getTernProject());
		}
		TernQuery query = new AngularOutlineQuery();
		getTernProject().request(query, null, this);
		return outline;
	}

	@Override
	public void handleMessage(Object jsonObject, IJSONObjectHelper helper) {
		// System.err.println(jsonObject);
	}
}
