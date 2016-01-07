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
package tern.server.protocol.outline;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultsCollector;

/**
 * Tern outline collector.
 *
 */
public interface ITernOutlineCollector extends ITernResultsCollector {

	IJSNodeRoot createRoot();

	IJSNode createNode(String name, String type, String kind, String value, Long start, Long end, String file,
			IJSNode parent, Object jsonNode, IJSONObjectHelper helper);

}
