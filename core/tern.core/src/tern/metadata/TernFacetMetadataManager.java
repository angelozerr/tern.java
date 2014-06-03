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
 * Tern facet metadata manager.
 *
 */
public class TernFacetMetadataManager {

	private final Map<String, TernFacetMetadata> metadatas;

	private File metadataTernBaseDir;

	private static final TernFacetMetadataManager INSTANCE = new TernFacetMetadataManager();

	public static TernFacetMetadataManager getInstance() {
		return INSTANCE;
	}

	public TernFacetMetadataManager() {
		this.metadatas = new HashMap<String, TernFacetMetadata>();
	}

	/**
	 * Return the facet metadata of the given facet name and null otherwise.
	 * 
	 * @param facetName
	 *            the facet name.
	 * @return the facet metadata of the given facet name and null otherwise.
	 */
	public TernFacetMetadata getMetadata(String facetName) {
		initializeIfNeeded();
		return metadatas.get(facetName);
	}

	private void initializeIfNeeded() {
		if (metadatas.size() == 0) {
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
							if (file.isFile()) {
								try {
									json = JsonObject.readFrom(new FileReader(
											file));
									TernFacetMetadata metadata = new TernFacetMetadata(
											json);
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
