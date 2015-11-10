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
package tern.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/**
 * Zip Utilities.
 *
 */
public class ZipUtils {

	private static final String ZIP_EXTENSION = ".zip";
	private static final String JAR_EXTENSION = ".jar";
	private static final String BIN_FOLDER = "/bin";

	/**
	 * Returns true if the given file is a zip file and false otherwise.
	 * 
	 * @param file
	 * @return true if the given file is a zip file and false otherwise.
	 */
	public static boolean isZipFile(File file) {
		return file.isFile() && file.getName().toLowerCase().endsWith(ZIP_EXTENSION);
	}

	/**
	 * Returns true if the given file is a jar file and false otherwise.
	 * 
	 * @param file
	 * @return true if the given file is a jar file and false otherwise.
	 */
	public static boolean isJarFile(File file) {
		return file.isFile() && file.getName().toLowerCase().endsWith(JAR_EXTENSION);
	}

	/**
	 * Extract zip file to destination folder.
	 *
	 * @param file
	 *            zip file to extract
	 * @param destination
	 *            destination folder
	 */
	public static void extract(File file, File destination) throws IOException {
		ZipInputStream in = null;
		OutputStream out = null;
		try {
			// Open the ZIP file
			in = new ZipInputStream(new FileInputStream(file));

			// Get the first entry
			ZipEntry entry = null;

			while ((entry = in.getNextEntry()) != null) {
				String outFilename = entry.getName();

				// Open the output file
				File extracted = new File(destination, outFilename);
				if (entry.isDirectory()) {
					extracted.mkdirs();
				} else {
					// Be sure that parent file exists
					File baseDir = extracted.getParentFile();
					if (!baseDir.exists()) {
						baseDir.mkdirs();
					}
					
					out = new FileOutputStream(extracted);

					// Transfer bytes from the ZIP file to the output file
					byte[] buf = new byte[1024];
					int len;

					while ((len = in.read(buf)) > 0) {
						out.write(buf, 0, len);
					}

					// Close the stream
					out.close();
					if (extracted.getParent().contains(BIN_FOLDER)) {
						extracted.setExecutable(true);
					}
				}
			}
		} finally {
			// Close the stream
			if (in != null) {
				in.close();
			}
			if (out != null) {
				out.close();
			}
		}
	}

}
