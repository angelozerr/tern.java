package tern.angular.protocol.definition;

import tern.angular.AngularType;
import tern.angular.protocol.TernAngularQuery;

public class TernAngularDefinitionQuery extends TernAngularQuery {

	private static final long serialVersionUID = 1L;

	private static final String DEFINITION_QUERY_TYPE = "definition";
	
	public TernAngularDefinitionQuery(AngularType angularType) {
		super(DEFINITION_QUERY_TYPE, angularType);
	}

}
