package tern.angular.protocol;

import java.io.InputStream;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;

import org.junit.Test;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

public class HTMLTernAngularHelperTest {

	@Test
	public void testName() throws Exception {
		Document document = getDocument("ngModel.html");
		//HTMLTernAngularHelper.createDoc(element, provider, file, fileManager, query);
		
		Element input = getElement(document, "//input");
		
		
		
		System.err.println(input);
	}

	public static Document getDocument(String xml) throws Exception {
		return getDocument(HTMLTernAngularHelperTest.class
				.getResourceAsStream(xml));
	}

	public static Document getDocument(InputStream in) throws Exception {
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder = factory.newDocumentBuilder();
		return builder.parse(in);

	}

	private Element getElement(Document document, String path) throws Exception {
		return (Element) getNode(document, path);
	}

	public Node getNode(Document document, String path) throws Exception {
		XPathFactory factory = XPathFactory.newInstance();
		XPath xpath = factory.newXPath();
		XPathExpression expression = xpath.compile(path);
		return (Node) expression.evaluate(document, XPathConstants.NODE);
	}
}
