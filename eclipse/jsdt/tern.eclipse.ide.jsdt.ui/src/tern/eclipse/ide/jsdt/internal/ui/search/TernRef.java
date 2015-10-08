package tern.eclipse.ide.jsdt.internal.ui.search;

import org.eclipse.core.resources.IFile;

public class TernRef {

	private final IFile file;

	public TernRef(IFile file) {
		this.file = file;
	}

	public IFile getFile() {
		return file;
	}
}
