package tern.server;

public abstract class AbstractTernServer implements ITernServer {

	private boolean dispose;

	@Override
	public void dispose() {
		this.dispose = true;
	}

	@Override
	public boolean isDisposed() {
		return dispose;
	}
}
