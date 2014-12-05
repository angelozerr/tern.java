package tern.eclipse.ide.tools.internal.ui.wizards;

import tern.repository.ITernRepository;
import tern.server.ITernModule;

public class DownloadOptions {

	private ITernRepository repository;
	private ITernModule[] ternModules;

	public ITernRepository getRepository() {
		return repository;
	}

	public void setRepository(ITernRepository repository) {
		this.repository = repository;
	}

	public ITernModule[] getTernModules() {
		return ternModules;
	}

	public void setTernModules(ITernModule[] ternModules) {
		this.ternModules = ternModules;
	}

}
