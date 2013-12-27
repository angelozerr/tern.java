package tern.server.protocol.angular.completions;

import tern.server.protocol.completions.TernCompletionItem;

public class TernAngularCompletionItem extends TernCompletionItem {

	private final String module;
	private final String controller;

	public TernAngularCompletionItem(String name, String type, String origin,
			String module, String controller) {
		super(name, type, origin);
		this.module = module;
		this.controller = controller;
	}

	public String getModule() {
		return module;
	}

	public String getController() {
		return controller;
	}

}
