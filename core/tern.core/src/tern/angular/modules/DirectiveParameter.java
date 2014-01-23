package tern.angular.modules;

import java.util.Arrays;

import tern.utils.StringUtils;

public class DirectiveParameter {

	private final String name;
	private final boolean optionnal;
	private final Directive directive;
	private String description;

	public DirectiveParameter(String name, boolean optionnal,
			Directive directive) {
		this.name = name;
		this.optionnal = optionnal;
		this.directive = directive;
	}

	public String getName() {
		return name;
	}

	public boolean isOptionnal() {
		return optionnal;
	}

	public Directive getDirective() {
		return directive;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getHTMLDescription() {
		StringBuilder info = new StringBuilder("");
		info.append("<b>");
		info.append(getName());
		info.append("</b>");
		info.append(" parameter in directive ");
		info.append("<b>");
		info.append(directive.getModule().getName());
		info.append("#");
		info.append(directive.getName());
		info.append("</b>");
		if (!StringUtils.isEmpty(description)) {
			info.append("<br/>");
			info.append("<br/>");
			info.append(description);
		}
		return info.toString();
	}
}
