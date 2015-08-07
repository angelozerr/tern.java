
package tern.server.protocol.outline;

public class TernOutlineCollector implements ITernOutlineCollector {

	private JSNodeRoot root;

	@Override
	public void setRoot(JSNodeRoot root) {
		this.root = root;
	}

	public JSNodeRoot getRoot() {
		return root;
	}
}
