package tern.server.nodejs.process;

import tern.TernException;

public class NodejsProcessException extends TernException {

	public NodejsProcessException(String message) {
		super(message);
	}

	public NodejsProcessException(Throwable e) {
		super(e);
	}

}
