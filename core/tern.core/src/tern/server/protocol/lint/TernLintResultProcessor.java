/**
 *  Copyright (c) 2014-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial implementation
 *  Piotr Tomiak <piotr@genuitec.com> - Collectors API and code refactoring
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

	private static final String FILE_FIELD = "file";
	private static final String LINE_NUMBER_FIELD = "lineNumber";
	private static final String TO_FIELD = "to";
	private static final String FROM_FIELD = "from";
	private static final String SEVERITY_FIELD = "severity";
	private static final String MESSAGE_FIELD = "message";
	public static final TernLintResultProcessor INSTANCE = new TernLintResultProcessor();

	@Override
	public void process(TernDoc doc, IJSONObjectHelper jsonObjectHelper,
			Object jsonObject, ITernLintCollector collector) {
		if (!(jsonObject instanceof JsonObject)) {
			// TODO: support for Rhino server
			return;
		}
		JsonArray messages = (JsonArray) ((JsonObject) jsonObject)
				.get("messages"); //$NON-NLS-1$
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
								.get("messages"); //$NON-NLS-1$
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

	protected void addMessages(IJSONObjectHelper jsonObjectHelper,
			JsonArray messages, TernLintQuery query,
			ITernLintCollector collector) {
		String message = null;
		String severity = null;
		String file = null;
		JsonObject messageObject = null;
		for (JsonValue value : messages) {
			messageObject = (JsonObject) value;
			message = query.formatMessage(
					jsonObjectHelper.getText(messageObject.get(MESSAGE_FIELD))); //$NON-NLS-1$
			severity = jsonObjectHelper.getText(messageObject.get(SEVERITY_FIELD)); //$NON-NLS-1$
			Long startCh = jsonObjectHelper.getCh(messageObject, FROM_FIELD); //$NON-NLS-1$
			Long endCh = jsonObjectHelper.getCh(messageObject, TO_FIELD); //$NON-NLS-1$
			Long line = jsonObjectHelper.getCh(messageObject, LINE_NUMBER_FIELD); //$NON-NLS-1$
			file = jsonObjectHelper.getText(messageObject.get(FILE_FIELD)); //$NON-NLS-1$
			collector.addMessage(message, startCh, endCh, line, severity, file);
		}
	}

}
