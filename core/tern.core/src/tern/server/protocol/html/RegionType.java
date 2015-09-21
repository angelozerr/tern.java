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
package tern.server.protocol.html;

/**
 * Script region type :
 * 
 * <ul>
 * <li>{@link #RegionType#OPEN_START_SCRIPT} : open start script region type.
 * Example : &lt;script</li>
 * <li>{@link #RegionType#CLOSE_START_SCRIPT} : close start script region type.
 * Example : &gt;</li>
 * <li>{@link #RegionType#END_SCRIPT} : open start script region type. Example :
 * &lt;/script&gt;</li>
 * </ul>
 *
 */
public enum RegionType {

	OPEN_START_SCRIPT, CLOSE_START_SCRIPT, END_SCRIPT;
}
