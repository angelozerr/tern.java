package tern;

import java.io.File;

import org.junit.Test;

import tern.server.ITernModule;
import tern.server.nodejs.process.PathHelper;

public class TernRepositoryTest {

	@Test
	public void defaultRepository() {
		File ternFile = PathHelper.getNodejsTernBaseDir();
		try {
			TernRepository repository = new TernRepository(ternFile);
			ITernModule[] modules = repository.getModules();
			for (int i = 0; i < modules.length; i++) {
				System.err.println(modules[i].getName());
			}
		} catch (TernException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
