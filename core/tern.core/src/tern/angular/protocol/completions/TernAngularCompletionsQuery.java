package tern.angular.protocol.completions;

import tern.angular.AngularType;
import tern.angular.protocol.TernAngularQuery;

public class TernAngularCompletionsQuery extends TernAngularQuery {

	private static final long serialVersionUID = 1L;

	private static final String COMPLETIONS_TYPE_QUERY = "completions";

	public TernAngularCompletionsQuery(AngularType angularType) {
		super(COMPLETIONS_TYPE_QUERY, angularType);
	}

}
