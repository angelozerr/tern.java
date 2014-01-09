package tern.eclipse.ide.core.dom;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.eclipse.core.resources.IFile;
import org.w3c.dom.Document;

import tern.eclipse.ide.internal.core.Trace;

public class DefaultDOMProvider implements IDOMProvider {

	public static final IDOMProvider INSTANCE = new DefaultDOMProvider();

	@Override
	public Document getDocument(IFile resource) {
		if (resource == null) {
			return null;
		}
		try {
			DocumentBuilderFactory factory = DocumentBuilderFactory
					.newInstance();
			DocumentBuilder builder = factory.newDocumentBuilder();
			return builder.parse(resource.getContents());

		} catch (Exception e) {
			Trace.trace(Trace.WARNING, "Error while loading DOM for resource "
					+ resource.getFullPath().toString(), e);
		}
		return null;
	}

}
