package tern.server;

import java.util.ArrayList;
import java.util.List;

public abstract class AbstractTernServer implements ITernServer {

	private final List<ITernServerListener> listeners;

	private boolean dataAsJsonString;
	private boolean dispose;

	public AbstractTernServer() {
		this.listeners = new ArrayList<ITernServerListener>();
	}

	public boolean isDataAsJsonString() {
		return dataAsJsonString;
	}

	public void setDataAsJsonString(boolean dataAsJsonString) {
		this.dataAsJsonString = dataAsJsonString;
	}

	@Override
	public void addServerListener(ITernServerListener listener) {
		synchronized (listeners) {
			listeners.add(listener);
		}
	}

	@Override
	public void removeServerListener(ITernServerListener listener) {
		synchronized (listeners) {
			listeners.remove(listener);
		}
	}

	protected void fireStartServer() {
		synchronized (listeners) {
			for (ITernServerListener listener : listeners) {
				listener.onStart(this);
			}
		}
	}

	protected void fireEndServer() {
		synchronized (listeners) {
			for (ITernServerListener listener : listeners) {
				listener.onEnd(this);
			}
		}
	}

	@Override
	public final void dispose() {
		if (!isDisposed()) {
			this.dispose = true;
			doDispose();
			fireEndServer();
		}
	}

	@Override
	public boolean isDisposed() {
		return dispose;
	}

	protected abstract void doDispose();
}
