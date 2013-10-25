package tern.server.nodejs.protocol;

public class TernCompletionQuery extends TernQuery {

	public TernCompletionQuery() {
		super("completions");
	}

	public void setTypes(boolean types) {
		super.put("types", types);
	}

}
