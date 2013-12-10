package tern.server;


public abstract class AbstractTernServer implements ITernServer {

	private boolean dataAsJsonString;
	private boolean dispose;

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
