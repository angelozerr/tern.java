package tern;

import org.mozilla.javascript.NativeObject;

public class DefaultResponseHandler implements IResponseHandler {

	private String error;
	private NativeObject data;
	private String dataAsJsonString;

	public DefaultResponseHandler() {
		this.error = null;
	}

	@Override
	public void onError(String error) {
		this.error = error;
	}

	@Override
	public void onSuccess(NativeObject data, String dataAsJsonString) {
		this.data = data;
		this.dataAsJsonString = dataAsJsonString;
	}

	public NativeObject getData() throws TernException {
		if (error != null) {
			throw new TernException(error);
		}
		return data;
	}

	public String getDataAsJsonString() throws TernException {
		if (error != null) {
			throw new TernException(error);
		}
		return dataAsJsonString;
	}
}
