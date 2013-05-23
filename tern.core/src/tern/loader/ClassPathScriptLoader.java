package tern.loader;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;

import tern.internal.scripts.Data;

public class ClassPathScriptLoader extends AbstractScriptLoader {

	private static final IScriptLoader INSTANCE = new ClassPathScriptLoader();
	
	public static IScriptLoader getInstance() {
		return INSTANCE;
	}
	
	private final Class<?> clazz;

	
	
	public ClassPathScriptLoader(Class<?> clazz) {
		this.clazz = clazz;
	}

	public ClassPathScriptLoader() {
		this(Data.class);
	}

	@Override
	protected Reader getReader(String src) throws IOException {
		InputStream stream = clazz.getResourceAsStream(src);
		return new InputStreamReader(stream);
	}

}
