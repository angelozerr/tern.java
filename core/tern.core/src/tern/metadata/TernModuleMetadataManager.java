/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.metadata;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.eclipsesource.json.Json;
import com.eclipsesource.json.JsonObject;

import tern.repository.ITernRepository;

/**
 * Tern module metadata manager.
 *
 */
public class TernModuleMetadataManager {

	private static final String METADATA_DIR = "metadata";
	private static final String METADATA_JSON_EXT = ".metadata.json";

	private final Map<String, TernModuleMetadata> metadatas;

	private final File baseDir;

	public TernModuleMetadataManager(ITernRepository repository) {
		this(repository.getTernBaseDir().getParentFile().getParentFile());
	}

	public TernModuleMetadataManager(File baseDir) {
		this.metadatas = new HashMap<String, TernModuleMetadata>();
		this.baseDir = baseDir;
	}

	/**
	 * Return the module metadata of the given module name and null otherwise.
	 * 
	 * @param moduleName
	 *            the module name.
	 * @return the module metadata of the given module name and null otherwise.
	 */
	public TernModuleMetadata getMetadata(String moduleName) {
		initializeIfNeeded();
		return metadatas.get(moduleName);
	}

	private void initializeIfNeeded() {
		if (metadatas.size() == 0) {
			synchronized (metadatas) {
				if (metadatas.size() == 0) {
					File metadataDir = new File(baseDir, METADATA_DIR);
					if (metadataDir.exists() && metadataDir.isDirectory()) {
						File[] files = metadataDir.listFiles();
						File file = null;
						TernModuleMetadata metadata = null;
						for (int i = 0; i < files.length; i++) {
							file = files[i];
							try {
								metadata = loadMetadata(file);
								if (metadata != null) {
									metadatas.put(metadata.getName(), metadata);
								}
							} catch (Exception e) {
								e.printStackTrace();
							}
						}
					}
				}
			}
		}
	}

	public static TernModuleMetadata loadMetadata(File moduleDir, String moduleName) throws IOException {
		if (moduleDir.exists() && moduleDir.isDirectory()) {
			String metadaFilename = new StringBuilder(moduleName).append(METADATA_JSON_EXT).toString();
			File metadaFile = new File(moduleDir, metadaFilename);
			if (!metadaFile.exists()) {
				File metadataDir = new File(moduleDir, METADATA_DIR);
				if (metadataDir.exists() && metadataDir.isDirectory()) {
					metadaFile = new File(metadataDir, metadaFilename);
				}
			}
			try {
				return loadMetadata(metadaFile);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}

	private static TernModuleMetadata loadMetadata(File file) throws IOException {
		if (file.isFile() && file.getName().endsWith(METADATA_JSON_EXT)) {
			JsonObject json = Json.parse(new FileReader(file)).asObject();
			return new TernModuleMetadata(json, file);

		}
		return null;
	}
}
