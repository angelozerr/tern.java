package tern.server.protocol.lint;

public class TernJSHintQuery extends BaseTernLintQuery {

	private static final String LINT_TYPE_QUERY = "jshint";
	private static final String LINT_FULL_TYPE_QUERY = "jshint-full";

	public TernJSHintQuery() {
		this(false);
	}

	public TernJSHintQuery(boolean full) {
		super(!full ? LINT_TYPE_QUERY : null, full ? LINT_FULL_TYPE_QUERY
				: null);
	}
}
