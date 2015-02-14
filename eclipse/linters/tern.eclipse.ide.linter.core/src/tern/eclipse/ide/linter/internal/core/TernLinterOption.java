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
package tern.eclipse.ide.linter.internal.core;

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;

import tern.eclipse.ide.linter.core.ITernLinterOption;
import tern.utils.StringUtils;

/**
 * Tern linter implementation.
 * 
 * @author azerr
 *
 */
public class TernLinterOption implements ITernLinterOption {

	private final String id;
	private final String type;
	private final String url;
	private String doc;
	private boolean enabled;
	private Object value;
	private final Map<String, ITernLinterOption> options;

	public TernLinterOption(String id, String type, String url) {
		this.id = id;
		this.type = type;
		this.url = url;
		this.options = new LinkedHashMap<String, ITernLinterOption>();
	}

	@Override
	public String getId() {
		return id;
	}

	public String getType() {
		return type;
	}

	@Override
	public String getUrl() {
		return url;
	}

	@Override
	public Collection<ITernLinterOption> getOptions() {
		return options.values();
	}

	@Override
	public void addOption(ITernLinterOption option) {
		this.options.put(option.getId(), option);
	}

	public ITernLinterOption getOption(String id) {
		return options.get(id);
	}

	@Override
	public String getDoc() {
		return doc;
	}

	public void setDoc(String doc) {
		this.doc = doc;
	}

	@Override
	public boolean isBooleanType() {
		return "boolean".equals(getType());
	}

	@Override
	public boolean isNumberType() {
		return "number".equals(getType());
	}

	@Override
	public boolean isCategoryType() {
		return "category".equals(getType());
	}

	public boolean hasType() {
		return !StringUtils.isEmpty(getType());
	}

	@Override
	public boolean isEnabled() {
		return enabled;
	}

	@Override
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	@Override
	public void setValue(Object value) {
		this.value = value;
	}

	@Override
	public Object getValue() {
		return value;
	}

	@Override
	public boolean getBooleanValue() {
		return (value != null) ? (Boolean) value : false;
	}

	@Override
	public Integer getNumberValue() {
		return (value != null) ? (Integer) value : null;
	}

	@Override
	public String getStringValue() {
		return (value != null) ? (String) value : null;
	}

}
