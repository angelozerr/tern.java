package tern.server;

import tern.TernException;

public class DefaultResponseHandler implements IResponseHandler {

	private String error;
	private Object data;
	private boolean dataAsJsonString;
	private String json;

	public DefaultResponseHandler(boolean dataAsJsonString) {
		this.error = null;
		this.dataAsJsonString = dataAsJsonString;
	}

	@Override
	public void onError(String error) {
		this.error = error;
	}

	@Override
	public void onSuccess(Object data, String json) {
		this.data = data;
		this.json = json;
	}

	public Object getData() throws TernException {
		if (error != null) {
			throw new TernException(error);
		}
		return data;
	}

	public String getJsonString() throws TernException {
		if (error != null) {
			throw new TernException(error);
		}
		return json;
	}

	@Override
	public boolean isDataAsJsonString() {
		return dataAsJsonString;
	}
}
