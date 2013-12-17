package tern.server.protocol.angular.definition;

import tern.server.protocol.angular.AngularType;
import tern.server.protocol.angular.TernAngularQuery;

public class TernAngularDefinitionQuery extends TernAngularQuery {

	private static final long serialVersionUID = 1L;

	private static final String DEFINITION_QUERY_TYPE = "definition";
	
	public TernAngularDefinitionQuery(AngularType angularType) {
		super(DEFINITION_QUERY_TYPE, angularType);
	}

}
