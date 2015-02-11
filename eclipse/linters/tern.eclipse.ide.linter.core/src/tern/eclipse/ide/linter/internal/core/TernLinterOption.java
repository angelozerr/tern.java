package tern.eclipse.ide.linter.internal.core;

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;

import tern.eclipse.ide.linter.core.ITernLinterOption;
import tern.utils.StringUtils;

public class TernLinterOption implements ITernLinterOption {

	private final String id;
	private final String type;
	private final String url;
	private String doc;
	private final Map<String, ITernLinterOption> options;

	public TernLinterOption(String id, String type, String url) {
		this.id = id;
		this.type = type;
		this.url = url;
		this.options = new LinkedHashMap<String, ITernLinterOption>();
	}

	public String getId() {
		return id;
	}

	public String getType() {
		return type;
	}

	public String getUrl() {
		return url;
	}

	public Collection<ITernLinterOption> getOptions() {
		return options.values();
	}

	public void addOption(ITernLinterOption option) {
		this.options.put(option.getId(), option);
	}

	public ITernLinterOption getOption(String id) {
		return options.get(id);
	}

	public String getDoc() {
		return doc;
	}

	public void setDoc(String doc) {
		this.doc = doc;
	}

	public boolean isBooleanType() {
		return "boolean".equals(getType());
	}

	public boolean isNumberType() {
		return "number".equals(getType());
	}

	public boolean hasType() {
		return !StringUtils.isEmpty(getType());
	}
}
