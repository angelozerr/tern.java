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
package tern.server.protocol.guesstypes;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.TernCompletionProposalRec;

public class TernGuessTypesResultProcessor implements ITernResultProcessor<ITernGuessTypesCollector> {

	public static final TernGuessTypesResultProcessor INSTANCE = new TernGuessTypesResultProcessor();

	/**
	 * Properties for JSON guess types result.
	 */
	private static final String ARGS_FIELD_NAME = "args";
	private static final String NAME_PROPERTY = "name"; //$NON-NLS-1$
	private static final String DISPLAY_NAME_PROPERTY = "displayName"; //$NON-NLS-1$
	private static final String TYPE_PROPERTY = "type"; //$NON-NLS-1$
	private static final String DOC_PROPERTY = "doc"; //$NON-NLS-1$
	private static final String URL_PROPERTY = "url"; //$NON-NLS-1$
	private static final String ORIGIN_PROPERTY = "origin"; //$NON-NLS-1$

	@Override
	public void process(TernDoc doc, IJSONObjectHelper objectHelper, Object jsonObject,
			ITernGuessTypesCollector collector) {
		Iterable<Object> args = objectHelper.getList(jsonObject, ARGS_FIELD_NAME); // $NON-NLS-1$
		if (args != null) {
			Iterable<Object> namesForArg;
			String[] argTypes = null;
			String argType = null;
			int argIndex = 0;
			for (Object arg : args) {
				// argument can have multiple types separated with '|'.
				argTypes = objectHelper.getText(arg).split("[|]");
				for (int i = 0; i < argTypes.length; i++) {
					argType= argTypes[i];
					namesForArg = objectHelper.getList(jsonObject, argType);
					for (Object argValue : namesForArg) {
						if (objectHelper.isString(argValue)) {
							collector.addProposal(argIndex,
									new TernCompletionProposalRec(objectHelper.getText(argValue),
											objectHelper.getText(argValue), argType, null, null, null, 0, 0, false, false),
									argValue, objectHelper);
						} else {
							addProposal(argIndex, objectHelper, argValue, collector);
						}
					}
				}
				argIndex++;
			}
		}
	}

	private void addProposal(int argIndex, IJSONObjectHelper objectHelper, Object completion,
			ITernGuessTypesCollector collector) {
		String name = objectHelper.getText(completion, NAME_PROPERTY);
		String displayName = objectHelper.getText(completion, DISPLAY_NAME_PROPERTY);
		String type = objectHelper.getText(completion, TYPE_PROPERTY);
		String doc = objectHelper.getText(completion, DOC_PROPERTY);
		String url = objectHelper.getText(completion, URL_PROPERTY);
		String origin = objectHelper.getText(completion, ORIGIN_PROPERTY);
		collector.addProposal(argIndex,
				new TernCompletionProposalRec(name, displayName, type, doc, url, origin, 0, 0, false, false),
				completion, objectHelper);
	}
}
