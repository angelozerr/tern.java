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
package tern.server.protocol.completions;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;
import tern.utils.StringUtils;

public class TernCompletionsResultProcessor implements
		ITernResultProcessor<ITernCompletionCollector> {

	/**
	 * Properties for JSON completion result.
	 */
	private static final String COMPLETIONS_PROPERTY = "completions";
	private static final String NAME_PROPERTY = "name"; //$NON-NLS-1$
	private static final String DISPLAY_NAME_PROPERTY = "displayName"; //$NON-NLS-1$
	private static final String TYPE_PROPERTY = "type"; //$NON-NLS-1$
	private static final String DOC_PROPERTY = "doc"; //$NON-NLS-1$
	private static final String URL_PROPERTY = "url"; //$NON-NLS-1$
	private static final String ORIGIN_PROPERTY = "origin"; //$NON-NLS-1$
	private static final String IS_PROPERTY_PROPERTY = "isProperty"; //$NON-NLS-1$
	private static final String IS_OBJECT_KEY_PROPERTY = "isObjectKey"; //$NON-NLS-1$
	private static final String IS_SPECIFIER_PROPERTY = "isSpecifier"; //$NON-NLS-1$
	
	public static final TernCompletionsResultProcessor INSTANCE = new TernCompletionsResultProcessor();

	@Override
	public void process(TernDoc doc, IJSONObjectHelper objectHelper,
			Object jsonObject, ITernCompletionCollector collector) {
		Long startCh = objectHelper.getCh(jsonObject, "start"); //$NON-NLS-1$
		Long endCh = objectHelper.getCh(jsonObject, "end"); //$NON-NLS-1$
		int pos = 0;
		if (startCh != null && endCh != null) {
			pos = endCh.intValue() - startCh.intValue();
		}
		boolean isProperty = StringUtils.asBoolean(
				objectHelper.getText(jsonObject, IS_PROPERTY_PROPERTY), false);
		boolean isObjectKey = StringUtils
				.asBoolean(objectHelper.getText(jsonObject,
						IS_OBJECT_KEY_PROPERTY), false);
		boolean isSpecifier = StringUtils
				.asBoolean(objectHelper.getText(jsonObject,
						IS_SPECIFIER_PROPERTY), false);		
		Iterable<Object> completions = objectHelper.getList(jsonObject,
				COMPLETIONS_PROPERTY); //$NON-NLS-1$
		if (completions != null) {
			for (Object value : completions) {
				if (objectHelper.isString(value)) {
					collector.addProposal(
							new TernCompletionProposalRec(objectHelper
									.getText(value), objectHelper
									.getText(value), null, null, null, null,
									startCh != null ? startCh.intValue() : 0,
									endCh != null ? endCh.intValue() : 0,
									isProperty, isObjectKey, isSpecifier), value,
							objectHelper);
				} else {
					addProposal(objectHelper, value,
							startCh != null ? startCh.intValue() : 0,
							endCh != null ? endCh.intValue() : 0, isProperty,
							isObjectKey, isSpecifier, collector);
				}
			}
		}

	}

	protected void addProposal(IJSONObjectHelper objectHelper,
			Object completion, int start, int end, boolean isProperty,
			boolean isObjectKey, boolean isSpecifier, ITernCompletionCollector collector) {
		String name = objectHelper.getText(completion, NAME_PROPERTY);
		String displayName = objectHelper.getText(completion,
				DISPLAY_NAME_PROPERTY);
		String type = objectHelper.getText(completion, TYPE_PROPERTY);
		String doc = objectHelper.getText(completion, DOC_PROPERTY);
		String url = objectHelper.getText(completion, URL_PROPERTY);
		String origin = objectHelper.getText(completion, ORIGIN_PROPERTY);
		collector.addProposal(new TernCompletionProposalRec(name, displayName,
				type, doc, url, origin, start, end, isProperty, isObjectKey, isSpecifier),
				completion, objectHelper);
	}

}
