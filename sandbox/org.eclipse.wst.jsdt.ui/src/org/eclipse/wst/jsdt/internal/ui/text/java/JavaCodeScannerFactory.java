/*******************************************************************************
 * Licensed Materials - Property of IBM
 * © Copyright IBM Corporation 2015. All Rights Reserved.
 * U.S. Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp. 
 *******************************************************************************/

package org.eclipse.wst.jsdt.internal.ui.text.java;

import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.wst.jsdt.ui.text.IColorManager;
import org.eclipse.wst.jsdt.ui.text.IJavaScanner;
import org.eclipse.wst.jsdt.ui.text.IJavaScannerFactory;

/**
 * @author azerr
 *
 */
public class JavaCodeScannerFactory implements IJavaScannerFactory {

	/* (non-Javadoc)
	 * @see org.eclipse.wst.jsdt.internal.ui.text.IJavaScannerFactory#create()
	 */
	public IJavaScanner create(IColorManager manager, IPreferenceStore store) {
		// TODO Auto-generated method stub
		return new JavaCodeScanner(manager, store);
	}

}
