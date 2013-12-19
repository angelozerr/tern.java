package tern.server.protocol.angular;

import tern.utils.StringUtils;

public enum AngularType {

	module, controller, directive, model, directiveRepeat, unknown;

	public static AngularType get(String value) {
		if (StringUtils.isEmpty(value)) {
			return unknown;
		}
		AngularType type = unknown;
		for (int i = 0; i < values().length; i++) {
			type = values()[i];
			if (type.name().equalsIgnoreCase(value)) {
				return type;
			}
		}
		return type;
	}

}
