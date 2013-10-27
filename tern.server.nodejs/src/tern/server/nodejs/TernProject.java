package tern.server.nodejs;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONObject;

import tern.utils.IOUtils;

public class TernProject extends JSONObject {

	private final File projectDir;
	private final List<String> libs;

	public TernProject(File projectDir) {
		this.projectDir = projectDir;
		this.libs = new ArrayList<String>();
		super.put("libs", libs);
	}

	public void addLib(String lib) {
		this.libs.add(lib);
	}

	public void save() throws IOException {
		projectDir.mkdirs();
		Writer writer = null;
		try {
			writer = new FileWriter(new File(projectDir, ".tern-project"));
			super.writeJSONString(writer);
		} finally {
			if (writer != null) {
				IOUtils.closeQuietly(writer);
			}
		}
	}
}
