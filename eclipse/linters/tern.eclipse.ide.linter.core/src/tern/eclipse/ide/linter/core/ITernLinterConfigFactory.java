package tern.eclipse.ide.linter.core;

import java.io.IOException;

public interface ITernLinterConfigFactory {

	ITernLinterConfig create() throws IOException;
}
