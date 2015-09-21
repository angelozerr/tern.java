/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.server.protocol;

/**
 * All collectors able to process server request asynchronously should implement
 * this interface. Only one of: timeout() or done() methods will be called when
 * processing a particular request. It is possible that timeout is called, even
 * though some results were already collected and are still being fed to the
 * collector. Any collection happening after timeout method is called should be
 * ignored, otherwise it may lead to race condition access.
 */
public interface ITernResultsAsyncCollector extends ITernResultsCollector {

	/**
	 * Called when results weren't collected in a required time.
	 * 
	 * @param reason
	 */
	void timeout(TimeoutReason reason);

	/**
	 * Called when all results were successfully collected
	 */
	void done();

	String getRequestDisplayName();

	enum TimeoutReason {
		PREV_OPERATION_NOT_FINISHED, TIMED_OUT
	}

}
