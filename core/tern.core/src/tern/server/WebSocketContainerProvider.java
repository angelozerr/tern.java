/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server;

import java.util.ServiceLoader;

import javax.websocket.ContainerProvider;
import javax.websocket.WebSocketContainer;

/**
 * Custom WebSocket container to uses JSR-356 WebSocket in an OSGi context.
 * since <code>ContainerProvider.getWebSocketContainer()</code> uses
 * {@link ServiceLoader#load(Class)} to retrieve {@link ContainerProvider} which
 * doesn't work well with OSGi context.
 */
public abstract class WebSocketContainerProvider {

	private static WebSocketContainerProvider provider;

	public static void setProvider(WebSocketContainerProvider provider) {
		WebSocketContainerProvider.provider = provider;
	}

	public static WebSocketContainer getWebSocketContainer() {
		if (provider == null) {
			// provider is not setted (no OSGi context), uses JSR-356 container
			// provider.
			return ContainerProvider.getWebSocketContainer();
		}
		// provider is setted by tern.eclipse.ide.websocket OSGi plugin.
		return provider.getContainer();
	}

	protected abstract WebSocketContainer getContainer();
}
