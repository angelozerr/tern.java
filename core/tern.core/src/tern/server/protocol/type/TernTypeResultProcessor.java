/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - Collectors API and code refactoring
 */
package tern.server.protocol.type;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;

public class TernTypeResultProcessor implements
		ITernResultProcessor<ITernTypeCollector> {

	public static final TernTypeResultProcessor INSTANCE = new TernTypeResultProcessor();

	@Override
	public void process(TernDoc doc, IJSONObjectHelper jsonObjectHelper,
			Object jsonObject, ITernTypeCollector collector) {
		String type = jsonObjectHelper.getText(jsonObject, "type"); //$NON-NLS-1$
		boolean guess = jsonObjectHelper.getBoolean(jsonObject, "guess", //$NON-NLS-1$
				false);
		String name = jsonObjectHelper.getText(jsonObject, "name"); //$NON-NLS-1$
		String exprName = jsonObjectHelper.getText(jsonObject, "exprName"); //$NON-NLS-1$
		String documentation = jsonObjectHelper.getText(jsonObject, "doc"); //$NON-NLS-1$
		String url = jsonObjectHelper.getText(jsonObject, "url"); //$NON-NLS-1$
		String origin = jsonObjectHelper.getText(jsonObject, "origin"); //$NON-NLS-1$
		collector.setType(type, guess, name, exprName, documentation, url,
				origin, jsonObject, jsonObjectHelper);
	}

}
