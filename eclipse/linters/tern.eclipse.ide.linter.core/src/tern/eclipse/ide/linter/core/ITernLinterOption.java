package tern.eclipse.ide.linter.core;

import java.util.Collection;

public interface ITernLinterOption {

	String getId();

	String getUrl();

	String getDoc();

	void addOption(ITernLinterOption option);

	Collection<ITernLinterOption> getOptions();

	boolean isBooleanType();

	boolean isNumberType();

}
