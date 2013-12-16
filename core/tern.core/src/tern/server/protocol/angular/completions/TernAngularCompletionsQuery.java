package tern.server.protocol.angular.completions;

import tern.server.protocol.angular.AngularType;
import tern.server.protocol.angular.TernAngularQuery;

public class TernAngularCompletionsQuery extends TernAngularQuery {

	public TernAngularCompletionsQuery(AngularType angularType) {
		super("completions", angularType);
	}

}
