/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - collectors API and code refactoring
 */
package tern.server.protocol.definition;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;
import tern.utils.StringUtils;

public class TernDefinitionResultProcessor implements
		ITernResultProcessor<ITernDefinitionCollector> {

	public static final TernDefinitionResultProcessor INSTANCE = new TernDefinitionResultProcessor();

	@Override
	public void process(TernDoc doc, IJSONObjectHelper jsonObjectHelper,
			Object jsonObject, ITernDefinitionCollector collector) {
		Long startCh = jsonObjectHelper.getCh(jsonObject, "start"); //$NON-NLS-1$
		Long endCh = jsonObjectHelper.getCh(jsonObject, "end"); //$NON-NLS-1$
		String file = jsonObjectHelper.getText(jsonObject, "file"); //$NON-NLS-1$
		if (StringUtils.isEmpty(file)) {
			file = jsonObjectHelper.getText(jsonObject, "origin"); //$NON-NLS-1$
		}
		collector.setDefinition(file, startCh, endCh);
	}

}
