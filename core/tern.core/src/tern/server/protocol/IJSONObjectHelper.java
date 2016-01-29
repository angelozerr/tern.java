/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.server.protocol;

public interface IJSONObjectHelper {

	Iterable<Object> getList(Object jsonObj, String name);

	Object getObject(Object jsonObj, String name);
	
	Long getCh(Object jsonObj, String name);

	String getText(Object jsonObj, String property);

	boolean isString(Object value);

	String getText(Object arg);

	boolean getBoolean(Object jsonObj, String name, boolean defaultValue);

	Long getLong(Object jsonObject, String name);
}
