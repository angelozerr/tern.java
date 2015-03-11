/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.jsdt.internal.ui.hover;

import org.eclipse.wst.jsdt.internal.ui.text.java.hover.ProblemHover;
import org.eclipse.wst.jsdt.ui.text.java.hover.IJavaEditorTextHover;

import tern.eclipse.ide.ui.hover.ProblemTernHover;

/**
 * JSDT Problem Hover used to display errors when mouse over a JS content which
 * have a tern error.
 *
 */
public class JSDTProblemTernHover extends ProblemTernHover implements
		IJavaEditorTextHover {

}
