package tern.eclipse.ide.linter.jshint.internal.core;

import java.io.InputStream;

import tern.eclipse.ide.linter.core.XMLTernLinterConfigFactory;

public class JSHintLinterConfiguration extends XMLTernLinterConfigFactory {

	@Override
	protected InputStream getInputStream() {
		return JSHintLinterConfiguration.class
				.getResourceAsStream("jshint-linter-config.xml");
	}
}
