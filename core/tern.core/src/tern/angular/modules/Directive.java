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
package tern.angular.modules;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import tern.angular.AngularType;
import tern.utils.StringUtils;

/**
 * Angular directive.
 */
public class Directive {

	private final String name;
	private final AngularType type;
	private final String url;
	private final String restrict;
	private final Module module;
	private final Collection<String> tagNames;
	private String description;
	private final DirectiveValue directiveValue;
	private Map<String, DirectiveParameter> parameters;
	private final boolean custom;

	public Directive(String name, AngularType type, String url,
			Collection<String> tagNames, String restrict,
			DirectiveValue directiveValue, Module module) {
		this(name, type, url, tagNames, restrict, directiveValue, module, true);
	}

	public Directive(String name, AngularType type, String url,
			Collection<String> tagNames, String restrict,
			DirectiveValue directiveValue, Module module, boolean custom) {
		this.name = name;
		this.type = type;
		this.url = url;
		this.restrict = StringUtils.isEmpty(restrict) ? Restriction.A.name()
				: restrict;
		this.directiveValue = directiveValue;
		this.module = module;
		this.tagNames = tagNames;
		if (module != null) {
			module.addDirective(this);
		}
		this.custom = custom;
	}

	public String getName() {
		return name;
	}

	public AngularType getType() {
		return type;
	}

	public Collection<String> getTagNames() {
		return tagNames;
	}

	public List<String> getDirectiveNames() {
		return DirectiveHelper.getDirectiveNames(name);
	}

	public Module getModule() {
		return module;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public String getURL() {
		return url;
	}

	public DirectiveValue getDirectiveValue() {
		return directiveValue;
	}

	public Collection<DirectiveParameter> getParameters() {
		if (parameters != null) {
			return parameters.values();
		}
		return Collections.emptyList();
	}

	public Collection<String> getParameterNames() {
		if (parameters != null) {
			return parameters.keySet();
		}
		return Collections.emptyList();
	}

	public void addParameter(DirectiveParameter parameter) {
		if (parameters == null) {
			parameters = new HashMap<String, DirectiveParameter>();
		}
		parameters.put(parameter.getName(), parameter);
	}

	public boolean hasParameters() {
		if (parameters != null) {
			return !parameters.isEmpty();
		}
		return false;
	}

	public DirectiveParameter getParameter(String name) {
		if (parameters != null) {
			return parameters.get(name);
		}
		return null;
	}

	public boolean isCustom() {
		return custom;
	}

	public boolean isMatch(Restriction restriction) {
		if (restriction == null) {
			return true;
		}
		return restriction.isMatch(restrict);
	}

	public String getRestrict() {
		return restrict;
	}
}
