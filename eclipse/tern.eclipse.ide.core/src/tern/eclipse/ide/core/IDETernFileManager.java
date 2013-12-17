package tern.eclipse.ide.core;

import java.io.IOException;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.Path;

import tern.TernFileManager;
import tern.utils.IOUtils;

public class IDETernFileManager extends TernFileManager<IFile> {

	private final IResourceChangeListener listener;

	public IDETernFileManager() {
		this.listener = new IDETernFileChangeListener(this);
		ResourcesPlugin.getWorkspace().addResourceChangeListener(listener);
	}

	public void dispose() {
		super.cleanFiles();
		ResourcesPlugin.getWorkspace().removeResourceChangeListener(listener);
	}

	@Override
	public String getFileName(IFile file) {
		return file.getProjectRelativePath().toString();
	}

	@Override
	public String getFileContent(IFile file) throws IOException {
		try {
			return IOUtils.toString(file.getContents(), file.getCharset());
		} catch (CoreException e) {
			throw new IOException(e);
		}
	}

	@Override
	public IFile getRelativeFile(IFile file, String path) {
		IContainer parent = file.getParent();
		IFile relativeFile = parent.getFile(new Path(path));
		if (relativeFile != null && relativeFile.exists()) {
			return relativeFile;
		}
		return null;
	}

	void removeIndexedFile(IFile file) {
		super.removeIndexedFile(getFileName(file));
	}

}
