/*******************************************************************************
 * Licensed Materials - Property of IBM
 * © Copyright IBM Corporation 2015. All Rights Reserved.
 * U.S. Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp. 
 *******************************************************************************/

package org.eclipse.wst.jsdt.ui.text;

import org.eclipse.jface.text.rules.ITokenScanner;
import org.eclipse.jface.util.PropertyChangeEvent;

/**
 * @author azerr
 *
 */
public interface IJavaScanner extends ITokenScanner {

	/**
	 * @param event
	 * @return
	 */
	boolean affectsBehavior(PropertyChangeEvent event);

	/**
	 * @param event
	 */
	void adaptToPreferenceChange(PropertyChangeEvent event);

}
