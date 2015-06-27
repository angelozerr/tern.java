package tern.eclipse.ide.core;

import org.eclipse.core.resources.IContainer;

public interface IScopeContext {

	void addExclude(IContainer container);

	boolean isExclude(IContainer container);

	void addInclude(IContainer container);

	boolean isInclude(IContainer container);

}
