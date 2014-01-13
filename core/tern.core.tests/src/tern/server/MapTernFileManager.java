package tern.server;

import java.io.IOException;

import tern.TernFileManager;

public class MapTernFileManager extends TernFileManager<MapTernFile> {

	@Override
	public String getFileName(MapTernFile file) {
		return file.getName();
	}

	@Override
	public String getFileContent(MapTernFile file) throws IOException {
		return file.getContent();
	}

	@Override
	public MapTernFile getRelativeFile(MapTernFile file, String path) {
		return null;
	}

}
