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
package tern.server.nodejs.process;

import java.io.File;
import java.util.List;

/**
 * This adapter class provides default implementations for the methods described
 * by the {@link INodejsProcessListener} interface.
 * 
 * Classes that wish to deal with event can extend this class and override only
 * the methods which they are interested in.
 * 
 */
public class NodejsProcessAdapter implements INodejsProcessListener {

	@Override
	public void onCreate(NodejsProcess process, List<String> commands,
			File projectDir) {
	}

	@Override
	public void onStart(NodejsProcess process) {
	}

	@Override
	public void onData(NodejsProcess process, String line) {
	}

	@Override
	public void onStop(NodejsProcess process) {
	}

	@Override
	public void onError(NodejsProcess process, String line) {
	}

}
