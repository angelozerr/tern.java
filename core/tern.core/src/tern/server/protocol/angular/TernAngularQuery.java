package tern.server.protocol.angular;

import tern.server.protocol.TernQuery;

public class TernAngularQuery extends TernQuery {

	public enum AngularType {
		module, controller, directive, model;
	}

	public TernAngularQuery(AngularType angularType) {
		super("angular");
		super.put("angularType", angularType.name());
	}

	public void setExpression(String expression) {
		super.put("expression", expression);
	}

}
