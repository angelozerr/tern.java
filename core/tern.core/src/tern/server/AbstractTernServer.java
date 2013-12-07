package tern.server;

import tern.doc.IJSDocument;

public abstract class AbstractTernServer implements ITernServer {

	private boolean dataAsJsonString;
	private boolean dispose;

	@Override
	public void registerDoc(IJSDocument doc) {
		addFile(doc.getName(), doc.getValue());
	}

	public boolean isDataAsJsonString() {
		return dataAsJsonString;
	}

	public void setDataAsJsonString(boolean dataAsJsonString) {
		this.dataAsJsonString = dataAsJsonString;
	}

	@Override
	public void dispose() {
		this.dispose = true;
	}

	@Override
	public boolean isDisposed() {
		return dispose;
	}
}
