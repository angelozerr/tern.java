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
package tern;

/**
 * Tern Exception.
 * 
 */
public class TernException extends Exception {

	private static final long serialVersionUID = 4202429014735034363L;

	public TernException(String message) {
		super(message);
	}

	public TernException(String message, Throwable e) {
		super(message, e);
	}
	
	public TernException(Throwable e) {
		super(e);
	}
}
