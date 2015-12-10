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
package tern.server.protocol.lint;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

public class TernLintResultProcessor implements
		ITernResultProcessor<ITernLintCollector> {

	private static final String MESSAGES_FIELD = "messages";
	
	private static final String MESSAGE_FIELD = "message";
	private static final String MESSAGE_ID_FIELD = "id";
	private static final String FILE_FIELD = "file";
	private static final String LINE_NUMBER_FIELD = "lineNumber";
	private static final String TO_FIELD = "to";
	private static final String FROM_FIELD = "from";
	private static final String SEVERITY_FIELD = "severity";
	
	public static final TernLintResultProcessor INSTANCE = new TernLintResultProcessor();

	@Override
	public void process(TernDoc doc, IJSONObjectHelper jsonObjectHelper,
			Object jsonObject, ITernLintCollector collector) {
		if (!(jsonObject instanceof JsonObject)) {
			// TODO: support for Rhino server
			return;
		}
		JsonArray messages = (JsonArray) ((JsonObject) jsonObject)
				.get(MESSAGES_FIELD); //$NON-NLS-1$
		if (messages != null) {
			TernLintQuery query = (TernLintQuery) doc.getQuery();
			if (query.isGroupByFiles()) {
				JsonObject filesObject = null;
				String file = null;
				for (JsonValue files : messages) {
					filesObject = (JsonObject) files;
					file = jsonObjectHelper.getText(filesObject.get(FILE_FIELD)); //$NON-NLS-1$

					try {
						collector.startLint(file);

						JsonArray messagesFile = (JsonArray) filesObject
								.get(MESSAGES_FIELD); //$NON-NLS-1$
						if (messagesFile != null) {
							addMessages(jsonObjectHelper, messagesFile, query,
									collector);
						}
					} finally {
						collector.endLint(file);
					}
				}
			} else {
				String file = doc.getQuery().getFile();
				try {
					collector.startLint(file);
					addMessages(jsonObjectHelper, messages, query, collector);
				} finally {
					collector.endLint(file);
				}
			}
		}
	}

	protected void addMessages(IJSONObjectHelper helper,
			JsonArray messages, TernLintQuery query,
			ITernLintCollector collector) {
		String messageId = null;
		String message = null;
		String severity = null;
		String file = null;
		JsonObject messageObject = null;
		for (JsonValue value : messages) {
			messageObject = (JsonObject) value;
			messageId = helper.getText(messageObject.get(MESSAGE_ID_FIELD));
			message = query.formatMessage(
					helper.getText(messageObject.get(MESSAGE_FIELD)));
			severity = helper.getText(messageObject.get(MESSAGE_FIELD));
			severity = helper.getText(messageObject.get(SEVERITY_FIELD));
			Long startCh = helper.getCh(messageObject, FROM_FIELD);
			Long endCh = helper.getCh(messageObject, TO_FIELD);
			Long line = helper.getCh(messageObject, LINE_NUMBER_FIELD);
			file = helper.getText(messageObject.get(FILE_FIELD));
			collector.addMessage(messageId, message, startCh, endCh, line, severity, file, messageObject, helper);
		}
	}

}
