package tern.eclipse.ide.internal.ui.views;

import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.server.protocol.outline.TernOutlineCollector;

public class TernOutline extends TernOutlineCollector {

	private final TernDocumentFile ternFile;

	public TernOutline(TernDocumentFile ternFile) {
		this.ternFile = ternFile;
	}

	public TernDocumentFile getTernFile() {
		return ternFile;
	}
}
