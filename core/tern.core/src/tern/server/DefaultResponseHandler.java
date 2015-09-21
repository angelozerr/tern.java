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
package tern.server;

import tern.TernException;

public class DefaultResponseHandler implements IResponseHandler {

	private String error;
	private Object data;
	private boolean dataAsJsonString;
	private Throwable t;
	private String json;

	public DefaultResponseHandler(boolean dataAsJsonString) {
		this.error = null;
		this.dataAsJsonString = dataAsJsonString;
	}

	@Override
	public void onError(String error, Throwable t) {
		this.error = error;
		this.t = t;
		if (this.error == null && t != null) {
			this.error = t.getMessage();
		}
	}

	@Override
	public void onSuccess(Object data, String json) {
		this.data = data;
		this.json = json;
	}

	public Object getData() throws TernException {
		if (error != null || t != null) {
			throw new TernException(error, t);
		}
		return data;
	}

	public String getJsonString() throws TernException {
		if (error != null || t != null) {
			throw new TernException(error, t);
		}
		return json;
	}

	@Override
	public boolean isDataAsJsonString() {
		return dataAsJsonString;
	}
}
