package tern.server.protocol.lint;

public interface ITernLintQueryFactory {

	public static final ITernLintQueryFactory LINT_FACTORY = new ITernLintQueryFactory() {

		@Override
		public BaseTernLintQuery createQuery(boolean full) {
			return new TernLintQuery(full);
		}
	};

	public static final ITernLintQueryFactory ESLINT_FACTORY = new ITernLintQueryFactory() {

		@Override
		public BaseTernLintQuery createQuery(boolean full) {
			return new TernESLintQuery(full);
		}
	};

	public static final ITernLintQueryFactory JSHINT_FACTORY = new ITernLintQueryFactory() {

		@Override
		public BaseTernLintQuery createQuery(boolean full) {
			return new TernJSHintQuery(full);
		}
	};

	BaseTernLintQuery createQuery(boolean full);

}
