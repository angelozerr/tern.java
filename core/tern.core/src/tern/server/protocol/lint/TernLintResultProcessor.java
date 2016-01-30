/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - collectors API and code refactoring
 */
package tern.server.protocol.lint;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;

/**
 * Tern lint resulr processor.
 *
 */
public class TernLintResultProcessor implements ITernResultProcessor<ITernLintCollector> {

	private static final String MESSAGES_FIELD = "messages";

	public static final TernLintResultProcessor INSTANCE = new TernLintResultProcessor();

	@Override
	public void process(TernDoc doc, IJSONObjectHelper helper, Object jsonObject, ITernLintCollector collector) {
		Iterable<Object> messages = helper.getList(jsonObject, MESSAGES_FIELD);
		if (messages != null) {
			TernLintQuery query = (TernLintQuery) doc.getQuery();
			if (query.isGroupByFiles()) {
				String file = null;
				for (Object fileObject : messages) {
					file = TernLintResultHelper.getFile(fileObject, helper);

					try {
						collector.startLint(file);

						Iterable<Object> messagesFile = helper.getList(fileObject, MESSAGES_FIELD);
						if (messagesFile != null) {
							addMessages(helper, messagesFile, query, collector);
						}
					} finally {
						collector.endLint(file);
					}
				}
			} else {
				String file = doc.getQuery().getFile();
				try {
					collector.startLint(file);
					addMessages(helper, messages, query, collector);
				} finally {
					collector.endLint(file);
				}
			}
		}
	}

	protected void addMessages(IJSONObjectHelper helper, Iterable<Object> messages, TernLintQuery query,
			ITernLintCollector collector) {
		String messageId = null;
		String message = null;
		String severity = null;
		String file = null;
		for (Object messageObject : messages) {
			messageId = TernLintResultHelper.getMessageId(messageObject, helper);
			message = TernLintResultHelper.getMessage(messageObject, query, helper);
			severity = TernLintResultHelper.getSeverity(messageObject, helper);
			Long startCh = TernLintResultHelper.getStart(messageObject, helper);
			Long endCh = TernLintResultHelper.getEnd(messageObject, helper);
			Long line = TernLintResultHelper.getLine(messageObject, helper);
			file = TernLintResultHelper.getFile(messageObject, helper);
			collector.addMessage(messageId, message, startCh, endCh, line, severity, file, messageObject, query,
					helper);
		}
	}

}
