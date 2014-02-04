package tern.angular.modules;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import tern.angular.AngularType;
import tern.utils.StringUtils;

public class Directive {

	private final String name;
	private final AngularType type;
	private final String url;
	private final Collection<UseAs> useAs;
	private final Module module;
	private final Collection<String> tagNames;
	private String description;
	private final boolean optionnal;
	private Map<String, DirectiveParameter> parameters;
	private final boolean custom;

	public Directive(String name, AngularType type, String url,
			Collection<String> tagNames, Collection<UseAs> useAs,
			boolean optionnal, Module module) {
		this(name, type, url, tagNames, useAs, optionnal, module, true);
	}

	public Directive(String name, AngularType type, String url,
			Collection<String> tagNames, Collection<UseAs> useAs,
			boolean optionnal, Module module, boolean custom) {
		this.name = name;
		this.type = type;
		this.url = url;
		this.useAs = useAs;
		this.optionnal = optionnal;
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

	private List<String> buildTokensName(String name) {
		char[] chars = name.toCharArray();
		List<String> tokens = new ArrayList<String>();
		StringBuilder current = new StringBuilder();
		char c = 0;
		for (int i = 0; i < chars.length; i++) {
			c = chars[i];
			if (!Character.isUpperCase(c)) {
				current.append(c);
			} else {
				tokens.add(current.toString());
				current.setLength(0);				
				current.append(Character.toLowerCase(c));
			}
		}
		if (current.length() > 0) {
			tokens.add(current.toString());
		}
		return tokens;
	}

	public Collection<String> getNames() {
		List<String> tokensName = buildTokensName(name);
		List<String> names = new ArrayList<String>();
		// ex ngBind
		names.add(name);
		StringBuilder s = null;
		for (Character delimiter : DirectiveHelper.DELIMITERS) {
			for (String startsWith : DirectiveHelper.STARTS_WITH) {
				s = new StringBuilder(startsWith);
				for (int i = 0; i < tokensName.size(); i++) {
					if (i > 0) {
						s.append(delimiter);
					}
					s.append(tokensName.get(i));
				}
				names.add(s.toString());
			}
		}
		return names;
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

	public String getUrl() {
		return url;
	}

	public Collection<UseAs> getUseAs() {
		return useAs;
	}

	public String getHTMLDescription() {
		StringBuilder info = new StringBuilder("");
		info.append("<b>");
		info.append(getName());
		info.append("</b>");
		info.append(" directive in module ");
		info.append("<b>");
		info.append(getModule().getName());
		info.append("</b>");
		if (!StringUtils.isEmpty(description)) {
			info.append("<br/>");
			info.append("<br/>");
			info.append(description);
		}
		if (tagNames != null && tagNames.size() > 0) {
			info.append("<br/>");
			info.append("<br/>");
			info.append("<b>tags:</b> ");
			info.append(Arrays.toString(tagNames.toArray()));
		}
		if (parameters != null && !parameters.isEmpty()) {
			info.append("<br/>");
			info.append("<br/>");
			info.append("<b>parameters:</b> ");
			info.append(Arrays.toString(parameters.keySet().toArray()));
		}
		if (!StringUtils.isEmpty(url)) {
			info.append("<br/>");
			info.append("<br/>");
			info.append("<b>@see</b> ");
			info.append(url);
		}
		return info.toString();
	}

	public boolean isOptionnal() {
		return optionnal;
	}

	public Collection<DirectiveParameter> getParameters() {
		if (parameters != null) {
			return parameters.values();
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
}
