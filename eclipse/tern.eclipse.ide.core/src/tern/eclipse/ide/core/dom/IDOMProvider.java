package tern.eclipse.ide.core.dom;

import org.eclipse.core.resources.IFile;
import org.w3c.dom.Document;

public interface IDOMProvider {

	Document getDocument(IFile resource);

}
