/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.server;

import tern.TernException;
import tern.server.protocol.ITernResultsAsyncCollector;
import tern.server.protocol.ITernResultsCollector;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernResultsProcessorsFactory;

/**
 * Basic request processor, which processes requests always in a synchronous
 * way.
 */
public class SynchronousRequestProcessor implements ITernServerRequestProcessor {

	private ITernServer server;

	public SynchronousRequestProcessor(ITernServer server) {
		this.server = server;
	}

	@Override
	public void processRequest(TernDoc doc, ITernResultsCollector collector)
			throws TernException {
		try {
			TernResultsProcessorsFactory.makeRequestAndProcess(doc, server,
					collector);
			// mark collection as done to be super correct
			if (collector instanceof ITernResultsAsyncCollector) {
				((ITernResultsAsyncCollector) collector).done();
			}
		} catch (TernException ex) {
			throw ex;
		} catch (Throwable t) {
			throw new TernException(t);
		}
	}

}
