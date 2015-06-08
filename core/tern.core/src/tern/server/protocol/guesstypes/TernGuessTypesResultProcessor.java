/**
 *  Copyright (c) 2014-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial implementation
 *  Piotr Tomiak <piotr@genuitec.com> - collectors API and code refactoring
 */
package tern.server.protocol.guesstypes;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;

public class TernGuessTypesResultProcessor implements
		ITernResultProcessor<ITernGuessTypesCollector> {

	public static final TernGuessTypesResultProcessor INSTANCE = new TernGuessTypesResultProcessor();

	private static final String ARGS_FIELD_NAME = "args";
	
	@Override
	public void process(TernDoc doc, IJSONObjectHelper jsonObjectHelper,
			Object jsonObject, ITernGuessTypesCollector collector) {
		Iterable<Object> args = jsonObjectHelper.getList(jsonObject, ARGS_FIELD_NAME); //$NON-NLS-1$
		if (args != null) {
			Iterable<Object> namesForArg;
			String[] argTypes = null;
			int argIndex = 0;
			for (Object arg : args) {
				// argument can have multiple types separated with '|'.
				argTypes = jsonObjectHelper.getText(arg).split("[|]");
				for (int i = 0; i < argTypes.length; i++) {
					namesForArg = jsonObjectHelper.getList(jsonObject, argTypes[i]);
					for (Object name : namesForArg) {
						collector.addProposal(argIndex,
								jsonObjectHelper.getText(name));
					}	
				}				
				argIndex++;
			}
		}
	}

}
