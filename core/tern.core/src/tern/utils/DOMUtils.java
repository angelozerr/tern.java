/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.utils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

import org.w3c.dom.Attr;
import org.w3c.dom.CDATASection;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.w3c.dom.Text;

/**
 * Utilities for DOM node.
 * 
 */
public class DOMUtils {

	private DOMUtils() {
	}

	/**
	 * Returns the node value from the DOM NOde.
	 * 
	 * @param node
	 * @return
	 */
	public static String getNodeValue(Node node) {
		if (node == null) {
			return null;
		}
		short nodeType = node.getNodeType();
		switch (nodeType) {
		case Node.ATTRIBUTE_NODE:
			return ((Attr) node).getValue();
		case Node.TEXT_NODE:
			return getTextContent((Text) node);
		}
		return node.getNodeValue();
	}

	/**
	 * Returns the normalized text content of DOM text node.
	 * 
	 * @param text
	 * @return
	 */
	public static String getTextContent(Text text) {
		return getTextContent(text, true);
	}

	/**
	 * Returns the text content of DOM text node.
	 * 
	 * @param text
	 * @return
	 */
	public static String getTextContent(Text text, boolean normalize) {
		if (normalize) {
			return StringUtils.normalizeSpace(text.getData());
		}
		return text.getData();
	}

	/**
	 * Returns the first child element retrieved by tag name from the parent
	 * node and null otherwise.
	 * 
	 * @param parentNode
	 *            parent node.
	 * @param elementName
	 *            element name to found.
	 * @return the first child element
	 */
	public static Element getFirstChildElementByTagName(Node parentNode,
			String elementName) {
		Element result = null;

		if (parentNode.getNodeType() == Node.DOCUMENT_NODE) {
			result = ((Document) parentNode).getDocumentElement();
			if (!result.getNodeName().equals(elementName)) {
				result = null;
			}
		} else {
			NodeList nodes = parentNode.getChildNodes();
			Node node;
			for (int i = 0; i < nodes.getLength(); i++) {
				node = nodes.item(i);
				if (node.getNodeType() == Node.ELEMENT_NODE
						&& node.getNodeName().equals(elementName)) {
					result = (Element) node;
					break;
				}
			}
		}
		return result;
	}

	/**
	 * Returns list of the first child element retrieved by tag name from the
	 * parent node and null otherwise.
	 * 
	 * @param parentNode
	 *            parent node.
	 * @param elementName
	 *            element name to found.
	 * @return list of the first child element
	 */
	public static Collection<Element> getFirstChildElementsByTagName(
			Node contextNode, String elementName) {
		Collection<Element> elements = null;
		Element result = null;

		if (contextNode.getNodeType() == Node.DOCUMENT_NODE) {
			result = ((Document) contextNode).getDocumentElement();
			if (!result.getNodeName().equals(elementName)) {
				result = null;
			}
		} else {
			NodeList nodes = contextNode.getChildNodes();
			Node node;
			for (int i = 0; i < nodes.getLength(); i++) {
				node = nodes.item(i);
				if (node.getNodeType() == Node.ELEMENT_NODE
						&& node.getNodeName().equals(elementName)) {
					if (elements == null) {
						elements = new ArrayList<Element>();
					}
					result = (Element) node;
					elements.add(result);
				}
			}
		}
		if (elements == null) {
			return Collections.emptyList();
		}
		return elements;
	}

	/**
	 * Returns the first child Text node from the parentNode and null otherwise.
	 * 
	 * @param parentNode
	 * @return
	 */
	public static Text getTextNode(Node parentNode) {
		if (parentNode == null)
			return null;

		Node result = null;
		parentNode.normalize();
		NodeList nodeList;
		if (parentNode.getNodeType() == Node.DOCUMENT_NODE) {
			nodeList = ((Document) parentNode).getDocumentElement()
					.getChildNodes();
		} else {
			nodeList = parentNode.getChildNodes();
		}
		int len = nodeList.getLength();
		if (len == 0) {
			return null;
		}
		for (int i = 0; i < len; i++) {
			result = nodeList.item(i);
			if (result.getNodeType() == Node.TEXT_NODE) {
				return (Text) result;
			} else if (result.getNodeType() == Node.CDATA_SECTION_NODE) {
				return /* (CDATASection) */(Text) result;
			}
		}
		return null;
	}

	/**
	 * Returns the content of the the first child Text node from the parentNode
	 * and null otherwise.
	 * 
	 * @param node
	 * @return
	 */
	public static String getTextNodeAsString(Node parentNode) {
		if (parentNode == null)
			return null;

		Node txt = getTextNode(parentNode);
		if (txt == null)
			return null;

		return txt.getNodeValue();
	}

	/**
	 * Returns the owner element of the node and null if not found.
	 * 
	 * @param node
	 * @return
	 */
	public static Element getOwnerElement(Node node) {
		int nodeType = node.getNodeType();
		switch (nodeType) {
		case Node.ATTRIBUTE_NODE:
			return ((Attr) node).getOwnerElement();
		case Node.TEXT_NODE:
			return (Element) ((Text) node).getParentNode();
		case Node.CDATA_SECTION_NODE:
			return (Element) ((CDATASection) node).getParentNode();
		case Node.ELEMENT_NODE:
			return (Element) node;
		}
		return null;
	}

}
