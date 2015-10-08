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
package tern.server.protocol.refs;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;
import tern.server.protocol.definition.TernDefinitionResultProcessor;

public class TernRefsResultProcessor implements ITernResultProcessor<ITernRefCollector> {

	public static final TernRefsResultProcessor INSTANCE = new TernRefsResultProcessor();

	/**
	 * Properties for JSON refs result.
	 */
	private static final String REFS_PROPERTY = "refs"; //$NON-NLS-1$

	@Override
	public void process(TernDoc doc, IJSONObjectHelper objectHelper, Object jsonObject, ITernRefCollector collector) {
		Iterable<Object> refs = objectHelper.getList(jsonObject, REFS_PROPERTY);
		if (refs != null) {
			for (Object ref : refs) {
				TernDefinitionResultProcessor.INSTANCE.collect(objectHelper, ref, collector);
			}
		}
	}

}
