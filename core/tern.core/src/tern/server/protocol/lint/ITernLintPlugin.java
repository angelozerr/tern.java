package tern.server.protocol.lint;

import tern.server.ITernPlugin;

public interface ITernLintPlugin extends ITernPlugin {

	public static ITernLintPlugin[] EMPTY_PLUGIN = new ITernLintPlugin[0];

	BaseTernLintQuery createQuery(boolean full);

}
