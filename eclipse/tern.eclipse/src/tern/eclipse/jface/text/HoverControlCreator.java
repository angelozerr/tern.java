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
import java.net.URL;

import org.eclipse.jface.internal.text.html.BrowserInformationControl;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.jface.text.AbstractReusableInformationControlCreator;
import org.eclipse.jface.text.DefaultInformationControl;
import org.eclipse.jface.text.IInformationControl;
import org.eclipse.jface.text.IInformationControlCreator;
import org.eclipse.jface.text.IInformationControlExtension4;
import org.eclipse.swt.browser.LocationAdapter;
import org.eclipse.swt.browser.LocationEvent;
import org.eclipse.swt.program.Program;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;

public class HoverControlCreator extends
		AbstractReusableInformationControlCreator {
	/**
	 * The information presenter control creator.
	 * 
	 */
	private final IInformationControlCreator fInformationPresenterControlCreator;
	/**
	 * <code>true</code> to use the additional info affordance,
	 * <code>false</code> to use the hover affordance.
	 */
	private final boolean fAdditionalInfoAffordance;

	/**
	 * @param informationPresenterControlCreator
	 *            control creator for enriched hover
	 */
	public HoverControlCreator(
			IInformationControlCreator informationPresenterControlCreator) {
		this(informationPresenterControlCreator, false);
	}

	/**
	 * @param informationPresenterControlCreator
	 *            control creator for enriched hover
	 * @param additionalInfoAffordance
	 *            <code>true</code> to use the additional info affordance,
	 *            <code>false</code> to use the hover affordance
	 */
	public HoverControlCreator(
			IInformationControlCreator informationPresenterControlCreator,
			boolean additionalInfoAffordance) {
		fInformationPresenterControlCreator = informationPresenterControlCreator;
		fAdditionalInfoAffordance = additionalInfoAffordance;
	}

	/*
	 * @see org.eclipse.jdt.internal.ui.text.java.hover.
	 * AbstractReusableInformationControlCreator
	 * #doCreateInformationControl(org.eclipse.swt.widgets.Shell)
	 */
	@Override
	public IInformationControl doCreateInformationControl(Shell parent) {
		String tooltipAffordanceString = "Press F2 for focus";
		if (BrowserInformationControl.isAvailable(parent)) {
			String font = JFaceResources.DIALOG_FONT;
			BrowserInformationControl iControl = new BrowserInformationControl(
					parent, font, tooltipAffordanceString) {
				/*
				 * @see org.eclipse.jface.text.IInformationControlExtension5#
				 * getInformationPresenterControlCreator()
				 */
				@Override
				public IInformationControlCreator getInformationPresenterControlCreator() {
					return fInformationPresenterControlCreator;
				}
			};
			addLinkListener(iControl);
			return iControl;
		} else {
			return new DefaultInformationControl(parent,
					tooltipAffordanceString);
		}
	}

	/*
	 * @see org.eclipse.jdt.internal.ui.text.java.hover.
	 * AbstractReusableInformationControlCreator
	 * #canReuse(org.eclipse.jface.text.IInformationControl)
	 */
	@Override
	public boolean canReuse(IInformationControl control) {
		if (!super.canReuse(control))
			return false;

		if (control instanceof IInformationControlExtension4) {
			String tooltipAffordanceString = "Press F2 for focus";
			((IInformationControlExtension4) control)
					.setStatusText(tooltipAffordanceString);
		}

		return true;
	}

	@SuppressWarnings("restriction")
	protected static void addLinkListener(
			final BrowserInformationControl control) {
		control.addLocationListener(new LocationAdapter() {
			@Override
			public void changing(LocationEvent event) {
				String loc = event.location;
				if ("about:blank".equals(loc)) { //$NON-NLS-1$
					/*
					 * Using the Browser.setText API triggers a location change
					 * to "about:blank". XXX: remove this code once
					 * https://bugs.eclipse.org/bugs/show_bug.cgi?id=130314 is
					 * fixed
					 */
					// input set with setText
					handleTextSet();
					return;
				}

				event.doit = false;

				if (loc.startsWith("about:")) { //$NON-NLS-1$
					// Relative links should be handled via head > base tag.
					// If no base is available, links just won't work.
					return;
				}

				if (loc.startsWith("tern:")) { //$NON-NLS-1$

				}

				if (loc.startsWith("http")) { //$NON-NLS-1$
					try {
						handleExternalLink(new URL(loc), event.display);
					} catch (MalformedURLException e) {

					}
				}

			}

			private void handleTextSet() {

			}

			private void handleExternalLink(URL url, Display display) {
				control.notifyDelayedInputChange(null);
				control.dispose(); // FIXME: should have protocol to hide,
									// rather than dispose

				// Open attached Javadoc links
				Program.launch(url.toExternalForm());
			}
		});
	}
}
