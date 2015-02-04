package tern.server.protocol.lint;

public class TernESLintQuery extends BaseTernLintQuery {

	private static final String LINT_TYPE_QUERY = "eslint";
	private static final String LINT_FULL_TYPE_QUERY = "eslint-full";

	public TernESLintQuery() {
		this(false);
	}

	public TernESLintQuery(boolean full) {
		super(!full ? LINT_TYPE_QUERY : null, full ? LINT_FULL_TYPE_QUERY
				: null);
	}
}
