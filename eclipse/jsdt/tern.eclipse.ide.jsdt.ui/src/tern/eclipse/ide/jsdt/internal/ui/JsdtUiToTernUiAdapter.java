package tern.eclipse.ide.jsdt.internal.ui;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.IAdapterFactory;
import org.eclipse.jface.text.IDocument;
import org.eclipse.wst.jsdt.core.IJavaScriptUnit;

import tern.TernResourcesManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.ui.utils.EditorUtils;

public class JsdtUiToTernUiAdapter implements IAdapterFactory {

	@Override
	public Object getAdapter(Object adaptableObject, Class/*<T>*/ adapterType) {
	//public <T> T getAdapter(Object adaptableObject, Class<T> adapterType) {
		if (TernDocumentFile.class.equals(adapterType)) {
			IFile file = null;
			if (adaptableObject instanceof IFile) {
				file = (IFile)adaptableObject;
			} else if (adaptableObject instanceof IJavaScriptUnit) {
				file = (IFile) ((IJavaScriptUnit)adaptableObject).getResource();
			}
			if (file != null && TernResourcesManager.isJSFile(file)) {
				IProject project = file.getProject();
				if (TernCorePlugin.hasTernNature(project)) {
					IDocument document = EditorUtils.getDocument(file);
					if (document != null) {
						return /*(T)*/ new TernDocumentFile(file, document);
					}
				}
			}
		}
		return null;
	}

	@Override
	public Class<?>[] getAdapterList() {
		return new Class<?>[] { TernDocumentFile.class };
	}

}
