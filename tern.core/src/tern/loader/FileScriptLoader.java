package tern.loader;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

public class FileScriptLoader extends AbstractScriptLoader {

	private final File baseDir;

	public FileScriptLoader(File baseDir) {
		this.baseDir = baseDir;
	}

	@Override
	protected Reader getReader(String src) throws IOException {
		return new FileReader(new File(baseDir, src));
	}
}
