package tern.server.protocol.angular;

import tern.server.protocol.TernQuery;

public class TernAngularQuery extends TernQuery {

	public TernAngularQuery(AngularType angularType) {
		super("angular");
		super.put("angularType", angularType.name());
	}

	public void setExpression(String expression) {
		super.put("expression", expression);
	}

	public TernAngularScope getScope() {
		TernAngularScope scope = (TernAngularScope) super.get("scope");
		if (scope == null) {
			scope = new TernAngularScope();
			super.put("scope", scope);
		}
		return scope;
	}

}
