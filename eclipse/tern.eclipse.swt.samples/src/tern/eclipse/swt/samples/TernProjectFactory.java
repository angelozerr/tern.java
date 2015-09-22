package tern.eclipse.swt.samples;

import java.io.File;

import tern.EcmaVersion;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.repository.ITernRepository;
import tern.repository.TernRepository;

public class TernProjectFactory {

	public static ITernProject create() {
		// Create tern repository.
		File ternBaseDir = new File("../../core/ternjs/node_modules/tern");
		ITernRepository repository = new TernRepository("ternjs", ternBaseDir);
		// Create tern project by setting the tern repository
		File projectDir = new File(".");
		ITernProject project = TernResourcesManager.getTernProject(projectDir);
		project.setEcmaVersion(EcmaVersion.ES5);
		project.setRepository(repository);
		return project;
	}
}
