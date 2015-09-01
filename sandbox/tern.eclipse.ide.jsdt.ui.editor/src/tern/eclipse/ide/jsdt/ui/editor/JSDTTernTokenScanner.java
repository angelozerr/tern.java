/*******************************************************************************
 * Licensed Materials - Property of IBM
 * © Copyright IBM Corporation 2015. All Rights Reserved.
 * U.S. Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp. 
 *******************************************************************************/

package tern.eclipse.ide.jsdt.ui.editor;

import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.text.TextAttribute;
import org.eclipse.jface.util.PropertyChangeEvent;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.widgets.Display;
import org.eclipse.wst.jsdt.ui.text.IColorManager;
import org.eclipse.wst.jsdt.ui.text.IJavaScanner;

import tern.eclipse.ide.ui.text.IDETernTokenScanner;

/**
 * @author azerr
 *
 */
public class JSDTTernTokenScanner extends IDETernTokenScanner implements IJavaScanner {

	/**
	 * @param colorManager
	 * @param fPreferenceStore
	 */
	public JSDTTernTokenScanner(IColorManager colorManager, IPreferenceStore fPreferenceStore) {
		// TODO Auto-generated constructor stub
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.eclipse.wst.jsdt.internal.ui.text.IJavaScanner#affectsBehavior(org.
	 * eclipse.jface.util.PropertyChangeEvent)
	 */
	public boolean affectsBehavior(PropertyChangeEvent event) {
		// TODO Auto-generated method stub
		return false;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.eclipse.wst.jsdt.internal.ui.text.IJavaScanner#
	 * adaptToPreferenceChange(org.eclipse.jface.util.PropertyChangeEvent)
	 */
	public void adaptToPreferenceChange(PropertyChangeEvent event) {
		// TODO Auto-generated method stub

	}

	@Override
	protected TextAttribute getTextAttribute(String type) {
		// TODO : use JSDT preferences
		
		if ("TemplateLiteral".equals(type)) {
			return new TextAttribute(new Color(Display.getCurrent(), new RGB(255, 150, 0)), null, SWT.NORMAL);
		}
		if ("Keyword".equals(type)) {
			return new TextAttribute(new Color(Display.getCurrent(), new RGB(255, 0, 0)), null, SWT.BOLD);
		}
		if ("Comment".equals(type)) {
			return new TextAttribute(new Color(Display.getCurrent(), new RGB(0, 125, 0)), null, SWT.ITALIC);
		}
		if ("StringLiteral".equals(type)) {
			return new TextAttribute(new Color(Display.getCurrent(), new RGB(0, 0, 255)), null, SWT.ITALIC);
		}
		if ("NumberLiteral".equals(type)) {
			return new TextAttribute(new Color(Display.getCurrent(), new RGB(199, 182, 88)), null, SWT.NORMAL);
		}
		// if ("Literal".equals(type)) {
		// return new TextAttribute(new Color(Display.getCurrent(), new RGB(0,
		// 0, 255)), null, SWT.BOLD);
		// }
		if ("FunctionDeclaration".equals(type)) {
			return new TextAttribute(new Color(Display.getCurrent(), new RGB(100, 182, 88)), null, SWT.NORMAL);
		}
		if ("ArgumentDeclaration".equals(type)) {
			return new TextAttribute(new Color(Display.getCurrent(), new RGB(220, 100, 88)), null, SWT.NORMAL);
		}
		if ("VariableDeclaration".equals(type)) {
			return new TextAttribute(new Color(Display.getCurrent(), new RGB(255, 0, 200)), null, SWT.NORMAL);
		}
		return null;
	}

}
