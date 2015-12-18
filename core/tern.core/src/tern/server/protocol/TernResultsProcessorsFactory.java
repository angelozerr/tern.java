/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.server.protocol;

import java.text.MessageFormat;

import tern.TernException;
import tern.server.DefaultResponseHandler;
import tern.server.ITernServer;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.completions.TernCompletionsResultProcessor;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.server.protocol.definition.TernDefinitionResultProcessor;
import tern.server.protocol.guesstypes.ITernGuessTypesCollector;
import tern.server.protocol.guesstypes.TernGuessTypesResultProcessor;
import tern.server.protocol.highlight.ITernHighlightCollector;
import tern.server.protocol.highlight.TernHighlightResultProcessor;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.lint.TernLintResultProcessor;
import tern.server.protocol.outline.ITernOutlineCollector;
import tern.server.protocol.outline.TernOutlineResultProcessor;
import tern.server.protocol.refs.ITernRefCollector;
import tern.server.protocol.refs.TernRefsResultProcessor;
import tern.server.protocol.type.ITernTypeCollector;
import tern.server.protocol.type.TernTypeResultProcessor;

public class TernResultsProcessorsFactory {

	public static <T extends ITernResultsCollector> void makeRequestAndProcess(
			TernDoc doc, ITernServer server, T collector) throws TernException {
		ITernResultProcessor<T> resultProcesor = TernResultsProcessorsFactory
				.getProcessor(collector);
		DefaultResponseHandler handler = new DefaultResponseHandler(true);
		server.request(doc, handler);
		Object jsonObject = handler.getData();
		if (jsonObject != null) {
			resultProcesor.process(doc, server.getJSONObjectHelper(),
					jsonObject, collector);
		}
	}

	@SuppressWarnings("unchecked")
	private static <T extends ITernResultsCollector> ITernResultProcessor<T> getProcessor(
			T collector) throws TernException {
		if (collector instanceof ITernCustomResultsCollector) {
			return (ITernResultProcessor<T>) ((ITernCustomResultsCollector)collector).getResultsProcessor();
		} else if (collector instanceof ITernCompletionCollector) {
			return (ITernResultProcessor<T>) TernCompletionsResultProcessor.INSTANCE;
		} else if (collector instanceof ITernRefCollector) {
			return (ITernResultProcessor<T>) TernRefsResultProcessor.INSTANCE;						
		} else if (collector instanceof ITernDefinitionCollector) {
			return (ITernResultProcessor<T>) TernDefinitionResultProcessor.INSTANCE;
		} else if (collector instanceof ITernTypeCollector) {
			return (ITernResultProcessor<T>) TernTypeResultProcessor.INSTANCE;
		} else if (collector instanceof ITernLintCollector) {
			return (ITernResultProcessor<T>) TernLintResultProcessor.INSTANCE;
		} else if (collector instanceof ITernGuessTypesCollector) {
			return (ITernResultProcessor<T>) TernGuessTypesResultProcessor.INSTANCE;
		} else if (collector instanceof ITernOutlineCollector) {
			return (ITernResultProcessor<T>) TernOutlineResultProcessor.INSTANCE;
		} else if (collector instanceof ITernHighlightCollector) {
			return (ITernResultProcessor<T>) TernHighlightResultProcessor.INSTANCE;
		} else {
			throw new TernException(
					MessageFormat
							.format("Tern results collector {0} does not implement any of the supported interfaces nor does it provide the processor through ITernCustomResultsCollector interface.", //$NON-NLS-1$
									collector.getClass().getName()));
		}
	}

}
