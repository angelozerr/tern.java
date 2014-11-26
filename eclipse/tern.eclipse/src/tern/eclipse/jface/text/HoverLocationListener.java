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
package tern.eclipse.jface.text;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

import org.eclipse.jface.internal.text.html.BrowserInformationControl;
import org.eclipse.swt.browser.LocationAdapter;
import org.eclipse.swt.browser.LocationEvent;
import org.eclipse.swt.browser.LocationListener;
import org.eclipse.swt.program.Program;
import org.eclipse.swt.widgets.Display;

public class HoverLocationListener extends LocationAdapter {

	public static final String HTTP_PROTOCOL = "http";
	public static final String TERN_FILE_PROTOCOL = "tern-file:";
	public static final String TERN_DEFINITION_PROTOCOL = "tern-definition:";
	
	private final BrowserInformationControl control;

	public HoverLocationListener(BrowserInformationControl control) {
		this.control = control;
	}

	@Override
	public void changing(LocationEvent event) {

		String loc = event.location;
		if ("about:blank".equals(loc)) { //$NON-NLS-1$
			/*
			 * Using the Browser.setText API triggers a location change to
			 * "about:blank". XXX: remove this code once
			 * https://bugs.eclipse.org/bugs/show_bug.cgi?id=130314 is fixed
			 */
			// input set with setText
			handleTextSet();
			return;
		}

		event.doit = false;

		if (loc.startsWith(TERN_FILE_PROTOCOL)) { //$NON-NLS-1$
			handleTernFileLink(loc);
			return;
		}

		if (loc.startsWith(TERN_DEFINITION_PROTOCOL)) { //$NON-NLS-1$
			handleTernDefinitionLink(loc);
			return;
		}
		
		if (loc.startsWith("about:")) { //$NON-NLS-1$
			// Relative links should be handled via head > base tag.
			// If no base is available, links just won't work.
			return;
		}

		if (loc.startsWith(HTTP_PROTOCOL)) { //$NON-NLS-1$
			try {
				handleHttpLink(new URL(loc), event.display);
				return;
			} catch (MalformedURLException e) {

			}
		}

	}

	protected void handleTernFileLink(String loc) {
		control.notifyDelayedInputChange(null);
		control.dispose(); // FIXME: should have protocol to hide,
							// rather than dispose
	}

	protected void handleTernDefinitionLink(String loc) {
		control.notifyDelayedInputChange(null);
		control.dispose(); // FIXME: should have protocol to hide,
							// rather than dispose
	}

	private void handleTextSet() {

	}

	private void handleHttpLink(URL url, Display display) {
		control.notifyDelayedInputChange(null);
		control.dispose(); // FIXME: should have protocol to hide,
							// rather than dispose

		// Open attached Javadoc links
		Program.launch(url.toExternalForm());
	}

	public static void addLinkListener(final BrowserInformationControl control) {
		addLinkListener(control, new HoverLocationListener(control));
	}

	public static void addLinkListener(final BrowserInformationControl control,
			LocationListener listener) {
		control.addLocationListener(listener);
	}

}
