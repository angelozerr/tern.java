package tern.eclipse.swt.samples;

import java.io.File;

import tern.ITernProject;
import tern.TernResourcesManager;
import tern.repository.ITernRepository;
import tern.repository.TernRepository;

public class TernProjectFactory {

	public static ITernProject create() {
		File ternBaseDir = new File("../../core/ternjs/node_modules/tern");
		ITernRepository repository = new TernRepository("ternjs", ternBaseDir);
		
		File projectDir = new File(".");
		ITernProject project = TernResourcesManager.getTernProject(projectDir);
		project.setRepository(repository);
		return project;
	}
}
