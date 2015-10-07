package tern.eclipse.ide.jsdt.internal.ui;

import java.util.ArrayList;

import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerFilter;
import org.eclipse.wst.jsdt.core.IJavaScriptElement;

import tern.server.protocol.outline.JSNode;

public class JSDTElementsFilter extends ViewerFilter {

	public JSDTElementsFilter() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Object[] filter(Viewer viewer, Object parent, Object[] elements) {
		int size = elements.length;
		ArrayList<Object> out = new ArrayList<Object>(size);
		for (int i = 0; i < size; ++i) {
			if (elements[i] instanceof JSNode) {
				out.add(elements[i]);
			} else if (elements[i] instanceof IJavaScriptElement) {
				if (!containsTernNode(elements, (IJavaScriptElement)elements[i])) {
					out.add(elements[i]);
				}
			}
		}
		return out.toArray();
	}


	private boolean containsTernNode(Object[] elements, IJavaScriptElement jsdtElement) {
		for (Object element : elements) {
			if (element instanceof JSNode) {
				JSNode node = (JSNode) element;
				// could also use location in file node.getStart() 
				if (node.getName() != null && node.getName().equalsIgnoreCase(jsdtElement.getElementName())) {
					return true;
				}
			}
		}
		return false;
	}

	@Override
	public boolean select(Viewer viewer, Object parentElement, Object element) {
		// method should never be called as we directly override "filter"
		return false;
	}

}
