package tern.eclipse.ide.jsdt.internal.core;

import tern.eclipse.ide.core.ITernProjectLifecycleListener;
import tern.eclipse.ide.core.ITernProjectLifecycleListenerProvider;

public class JSDTClassPathManagerProvider implements
		ITernProjectLifecycleListenerProvider {

	@Override
	public ITernProjectLifecycleListener getListener() {
		return JSDTClassPathManager.getManager();
	}
}
