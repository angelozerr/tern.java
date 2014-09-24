/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
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
 * Script tag region.
 *
 */
public class ScriptTagRegion {

	/**
	 * Default script tag region <script></script>.
	 */
	public static final ScriptTagRegion SCRIPT_TAG = new ScriptTagRegion(
			"script");

	public static final ScriptTagRegion[] DEFAULT_SCRIPT_TAGS = new ScriptTagRegion[] { SCRIPT_TAG };

	private final Region openStartScript;
	private final Region closeStartScript;
	private final Region endStartScript;

	public ScriptTagRegion(String tag) {
		this.openStartScript = new Region("<" + tag,
				RegionType.OPEN_START_SCRIPT);
		this.closeStartScript = new Region(">", RegionType.CLOSE_START_SCRIPT);
		this.endStartScript = new Region("</" + tag + ">",
				RegionType.END_SCRIPT);
	}

	public Region getOpenStartScript() {
		return openStartScript;
	}

	public Region getCloseStartScript() {
		return closeStartScript;
	}

	public Region getEndScript() {
		return endStartScript;
	}
}
