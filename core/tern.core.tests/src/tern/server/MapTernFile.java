package tern.server;

public class MapTernFile {

	private final String name;
	private final String content;

	public MapTernFile(String name, String content) {
		this.name = name;
		this.content = content;
	}

	public String getName() {
		return name;
	}

	public String getContent() {
		return content;
	}
}
