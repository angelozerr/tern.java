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

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;

public class TernLintResultProcessor implements
		ITernResultProcessor<ITernLintCollector> {

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
					file = jsonObjectHelper.getText(filesObject.get("file")); //$NON-NLS-1$
					collector.startLint(file);

					JsonArray messagesFile = (JsonArray) filesObject
							.get("messages"); //$NON-NLS-1$
					if (messagesFile != null) {
						addMessages(jsonObjectHelper, messagesFile, collector);
					}
					collector.endLint(file);
				}
			} else {
				addMessages(jsonObjectHelper, messages, collector);
			}
		}
	}

	protected void addMessages(IJSONObjectHelper jsonObjectHelper,
			JsonArray messages, ITernLintCollector collector) {
		String message = null;
		String severity = null;
		String file = null;
		JsonObject messageObject = null;
		for (JsonValue value : messages) {
			messageObject = (JsonObject) value;
			message = jsonObjectHelper.getText(messageObject.get("message")); //$NON-NLS-1$
			severity = jsonObjectHelper.getText(messageObject.get("severity")); //$NON-NLS-1$
			Long startCh = jsonObjectHelper.getCh(messageObject, "from"); //$NON-NLS-1$
			Long endCh = jsonObjectHelper.getCh(messageObject, "to"); //$NON-NLS-1$
			file = jsonObjectHelper.getText(messageObject.get("file")); //$NON-NLS-1$
			collector.addMessage(message, startCh, endCh, severity, file);
		}
	}

}
