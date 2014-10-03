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
package tern.eclipse.ide.ui.utils;

import java.net.URL;

import org.eclipse.swt.custom.BusyIndicator;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.browser.IWebBrowser;
import org.eclipse.ui.browser.IWorkbenchBrowserSupport;

import tern.eclipse.ide.internal.ui.Trace;

public class OpenBrowserUtil {

	/**
	 * Opens the given url in the browser as choosen in the preferences.
	 * 
	 * @param url
	 *            the URL
	 * @param display
	 *            the display
	 * @since 3.6
	 */
	public static void open(final URL url, Display display) {
		display.syncExec(new Runnable() {
			public void run() {
				internalOpen(url, false);
			}
		});
	}

	/**
	 * Opens the given URL in an external browser.
	 * 
	 * @param url
	 *            the URL
	 * @param display
	 *            the display
	 * @since 3.6
	 */
	public static void openExternal(final URL url, Display display) {
		display.syncExec(new Runnable() {
			public void run() {
				internalOpen(url, true);
			}
		});
	}

	private static void internalOpen(final URL url,
			final boolean useExternalBrowser) {
		BusyIndicator.showWhile(null, new Runnable() {
			public void run() {
				URL helpSystemUrl = PlatformUI.getWorkbench().getHelpSystem()
						.resolve(url.toExternalForm(), true);
				if (helpSystemUrl == null) { // can happen if
												// org.eclipse.help.ui is not
												// available
					return; // the resolve() method already wrote
							// "Unable to instantiate help UI" to the log
				}
				try {
					IWorkbenchBrowserSupport browserSupport = PlatformUI
							.getWorkbench().getBrowserSupport();
					IWebBrowser browser;
					if (useExternalBrowser)
						browser = browserSupport.getExternalBrowser();
					else
						browser = browserSupport.createBrowser(null);
					browser.openURL(helpSystemUrl);
				} catch (PartInitException ex) {
					// XXX: show dialog?
					Trace.trace(Trace.SEVERE, "Opening Javadoc failed", ex); //$NON-NLS-1$
				}
			}
		});
	}

}
