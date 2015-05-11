/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
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
import java.util.HashMap;
import java.util.Map;

import com.eclipsesource.json.JsonObject;

/**
 * Tern module metadata manager.
 *
 */
public class TernModuleMetadataManager {

	private final Map<String, TernModuleMetadata> metadatas;

	private File metadataTernBaseDir;

	private static final TernModuleMetadataManager INSTANCE = new TernModuleMetadataManager();

	public static TernModuleMetadataManager getInstance() {
		return INSTANCE;
	}

	public TernModuleMetadataManager() {
		this.metadatas = new HashMap<String, TernModuleMetadata>();
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
		if (metadatas.size() == 0 && metadataTernBaseDir != null) {
			synchronized (metadatas) {
				if (metadatas.size() == 0) {
					File metadataFile = new File(metadataTernBaseDir,
							"metadata");
					if (metadataFile.exists()) {
						File[] files = metadataFile.listFiles();
						File file = null;
						JsonObject json = null;
						for (int i = 0; i < files.length; i++) {
							file = files[i];
							if (file.isFile() && file.getName().endsWith(".metadata.json")) {
								try {
									json = JsonObject.readFrom(new FileReader(
											file));
									TernModuleMetadata metadata = new TernModuleMetadata(
											json, file);
									metadatas.put(metadata.getName(), metadata);
								} catch (Exception e) {
									e.printStackTrace();
									// throw new TernException(e);
								}
							}
						}
					}
				}
			}
		}
	}

	/**
	 * Initialize the manager with the base dir where the tern metadata files
	 * are hosted.
	 * 
	 * @param metadataTernBaseDir
	 */
	public void init(File metadataTernBaseDir) {
		this.metadataTernBaseDir = metadataTernBaseDir;
	}
}
