/*******************************************************************************
 * Licensed Materials - Property of IBM
 * © Copyright IBM Corporation 2015. All Rights Reserved.
 * U.S. Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp. 
 *******************************************************************************/

package org.eclipse.wst.jsdt.ui.text;

import org.eclipse.jface.preference.IPreferenceStore;

/**
 * @author azerr
 *
 */
public interface IJavaScannerFactory {

	IJavaScanner create(IColorManager manager, IPreferenceStore store);
}
