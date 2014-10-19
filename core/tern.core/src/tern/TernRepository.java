package tern;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import tern.server.ITernModule;
import tern.utils.TernModuleHelper;

public class TernRepository implements ITernRepository {

	private final File ternFile;
	private ITernModule[] modules;

	public TernRepository(File ternFile) throws TernException {
		this.ternFile = ternFile;
	}

	@Override
	public ITernModule[] getModules() throws TernException {
		if (modules == null) {
			modules = loadModules();
		}
		return modules;
	}

	private ITernModule[] loadModules() throws TernException {
		List<ITernModule> modules = new ArrayList<ITernModule>();
		// defs
		loadModules(modules, "defs");
		// plugin
		loadModules(modules, "plugin");
		// node_modules
		loadModules(modules, "node_modules");
		return modules.toArray(ITernModule.EMPTY_MODULE);
	}

	private void loadModules(List<ITernModule> modules, String dir)
			throws TernException {
		File baseDir = new File(getTernFile(), dir);
		File[] files = baseDir.listFiles();
		File file = null;
		ITernModule module = null;
		for (int i = 0; i < files.length; i++) {
			file = files[i];
			module = TernModuleHelper.getModule(file.getName());
			if (module != null) {
				modules.add(module);
			}
		}

	}

	@Override
	public void refresh() {
		this.modules = null;
	}

	@Override
	public File getTernFile() {
		return ternFile;
	}
}
