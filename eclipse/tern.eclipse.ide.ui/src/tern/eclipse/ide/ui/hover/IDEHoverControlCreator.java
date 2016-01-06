/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.hover;

import org.eclipse.jface.internal.text.html.BrowserInformationControl;
import org.eclipse.jface.text.IInformationControlCreator;

import tern.eclipse.jface.text.HoverControlCreator;
import tern.eclipse.jface.text.HoverLocationListener;

/**
 * IDE tern hover control creator.
 *
 */
public class IDEHoverControlCreator extends HoverControlCreator {

	private final ITernHoverInfoProvider provider;

	public IDEHoverControlCreator(
			IInformationControlCreator informationPresenterControlCreator,
			ITernHoverInfoProvider provider) {
		super(informationPresenterControlCreator);
		this.provider = provider;
	}

	public IDEHoverControlCreator(
			IInformationControlCreator informationPresenterControlCreator,
			boolean additionalInfoAffordance, ITernHoverInfoProvider provider) {
		super(informationPresenterControlCreator, additionalInfoAffordance);
		this.provider = provider;
	}

	@Override
	protected void addLinkListener(BrowserInformationControl control) {
		HoverLocationListener.addLinkListener(control,
				new IDEHoverLocationListener(control, provider));
	}
}
