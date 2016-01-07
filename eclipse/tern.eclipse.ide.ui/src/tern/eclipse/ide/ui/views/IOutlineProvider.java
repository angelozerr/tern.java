package tern.eclipse.ide.ui.views;

import tern.server.protocol.outline.IJSNode;

public interface IOutlineProvider {

	public enum State {
		Computing, Done, Unavailable
	}

	State getOutlineState();

	IJSNode getRoot();

}
