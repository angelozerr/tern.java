/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.viewers;

import org.eclipse.jface.viewers.ITableLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.graphics.Image;

import tern.server.protocol.JsonHelper;

import com.eclipsesource.json.JsonObject.Member;
import com.eclipsesource.json.JsonValue;

public class JsonLabelProvider extends LabelProvider implements
		ITableLabelProvider {

	private static final JsonLabelProvider INSTANCE = new JsonLabelProvider();

	public static JsonLabelProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public String getColumnText(Object element, int columnIndex) {
		if (element instanceof MemberWrapper) {
			MemberWrapper member = ((MemberWrapper) element);
			switch (columnIndex) {
			case 0:
				return member.getName();
			case 1:
				return JsonHelper.getString(member.getValue());
			}
		} else if (element instanceof JsonValue) {
			return JsonHelper.getString((JsonValue)element);
		}
		return null;
	}

	@Override
	public Image getColumnImage(Object element, int columnIndex) {
		return null;
	}

}
