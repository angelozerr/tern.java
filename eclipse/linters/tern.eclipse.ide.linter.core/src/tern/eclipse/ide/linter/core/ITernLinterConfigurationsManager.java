package tern.eclipse.ide.linter.core;

import java.io.IOException;

public interface ITernLinterConfigurationsManager {

	ITernLinterConfig createLinterConfig(String linterId) throws IOException;

}
