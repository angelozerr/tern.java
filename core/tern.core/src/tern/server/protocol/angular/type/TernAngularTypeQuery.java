package tern.server.protocol.angular.type;

import tern.server.protocol.angular.AngularType;
import tern.server.protocol.angular.TernAngularQuery;

public class TernAngularTypeQuery extends TernAngularQuery {

	private static final long serialVersionUID = 1L;

	private static final String TYPE_QUERY_TYPE = "type";
	
	public TernAngularTypeQuery(AngularType angularType) {
		super(TYPE_QUERY_TYPE, angularType);
	}

}
