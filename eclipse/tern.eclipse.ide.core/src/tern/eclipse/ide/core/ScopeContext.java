package tern.eclipse.ide.core;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IResource;

public class ScopeContext implements IScopeContext {

	public static final IScopeContext DEFAULT = new IScopeContext() {

		@Override
		public boolean isInclude(IContainer container) {
			return false;
		}

		@Override
		public boolean isExclude(IContainer container) {
			return false;
		}

		@Override
		public void addInclude(IContainer container) {

		}

		@Override
		public void addExclude(IContainer container) {

		}
	};

	private final List<IResource> includes;
	private final List<IResource> excludes;

	public ScopeContext() {
		this.includes = new ArrayList<IResource>();
		this.excludes = new ArrayList<IResource>();
	}

	@Override
	public void addExclude(IContainer container) {
		excludes.add(container);
	}

	@Override
	public boolean isExclude(IContainer container) {
		return excludes.contains(container);
	}

	@Override
	public void addInclude(IContainer container) {
		includes.add(container);
	}

	@Override
	public boolean isInclude(IContainer container) {
		return includes.contains(container);
	}
}
