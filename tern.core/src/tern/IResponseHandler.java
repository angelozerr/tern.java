package tern;

import org.mozilla.javascript.NativeObject;

public interface IResponseHandler {

	void onError(String error);
	
	void onSuccess(NativeObject data, String dataAsJsonString);
}
