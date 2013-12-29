package tern.angular.protocol.type;

import tern.angular.AngularType;
import tern.angular.protocol.TernAngularQuery;

public class TernAngularTypeQuery extends TernAngularQuery {

	private static final long serialVersionUID = 1L;

	private static final String TYPE_QUERY_TYPE = "type";
	
	public TernAngularTypeQuery(AngularType angularType) {
		super(TYPE_QUERY_TYPE, angularType);
	}

}
