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
package tern.server;

/**
 * Tern JSON Type Definition API.
 * 
 * @see http://ternjs.net/doc/manual.html#typedef
 * 
 */
public interface ITernDef extends ITernModule {

	public static final ITernDef[] EMPTY_DEF = new ITernDef[0];
}
