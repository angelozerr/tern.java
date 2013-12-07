package tern;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import tern.server.ITernPlugin;
import tern.utils.IOUtils;

public class TernProject extends JSONObject {

	public static final String TERN_PROJECT = ".tern-project";

	private final File projectDir;
	private List<String> patterns;

	public TernProject(File projectDir) {
		this.projectDir = projectDir;
	}

	public File getProjectDir() {
		return projectDir;
	}

	public void addLib(String lib) {
		getLibs().add(lib);
	}

	private List getLibs() {
		List libs = (List) super.get("libs");
		if (libs == null) {
			libs = new JSONArray();
			super.put("libs", libs);
		}
		return libs;
	}

	public void addPlugin(ITernPlugin plugin) {
		getPlugins().put(plugin.getName(), "../");
	}

	public void addLoadEagerlyPattern(String pattern) {
		if (patterns == null) {
			patterns = new ArrayList<String>();
			super.put("loadEagerly", patterns);
		}
		patterns.add(pattern);
	}

	public void save() throws IOException {
		projectDir.mkdirs();
		Writer writer = null;
		try {
			writer = new FileWriter(new File(projectDir, TERN_PROJECT));
			super.writeJSONString(writer);
		} finally {
			if (writer != null) {
				IOUtils.closeQuietly(writer);
			}
		}
	}

	public void load() throws IOException {
		File file = new File(projectDir, TERN_PROJECT);
		if (file.exists()) {
			JSONParser parser = new JSONParser();
			try {
				JSONObject result = (JSONObject) parser.parse(new FileReader(
						file));
				super.putAll(result);
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
	}

	public JSONObject getPlugins() {
		JSONObject plugins = (JSONObject) super.get("plugins");
		if (plugins == null) {
			plugins = new JSONObject();
			super.put("plugins", plugins);
		}
		return plugins;
	}
}
