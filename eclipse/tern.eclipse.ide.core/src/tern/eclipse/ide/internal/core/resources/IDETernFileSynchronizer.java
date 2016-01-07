/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 *  								  - asynchronous file upload
 *                                    - partial file upload
 */
package tern.eclipse.ide.internal.core.resources;

import java.io.IOException;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.IDocument;

import com.eclipsesource.json.JsonValue;

import tern.ITernFile;
import tern.ITernProject;
import tern.resources.ITernFileUploader;
import tern.resources.TernFileSynchronizer;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernFile;
import tern.server.protocol.TernQuery;

/**
 * Extension of {@link TernFileManager} to works with Eclipse {@link IFile}
 * 
 */
public class IDETernFileSynchronizer extends TernFileSynchronizer {

	protected static final int BIG_FILE = 500;
	
	/**
	 * Constructor of file manager with the owner Eclipse project.
	 */
	public IDETernFileSynchronizer(ITernProject project) {
		super(project);
	}

	@Override
	protected ITernFileUploader createTernFileUploader() {
		return new IDETernFileUploader(getProject());
	}

	@Override
	protected void addJSFile(TernDoc doc, ITernFile file) throws IOException {
		TernQuery query = doc.getQuery();
		String fileName = file.getFullName(getProject());
		query.setFile(fileName);
		IDocument document = (IDocument) file.getAdapter(IDocument.class);
		//include file as a part of the tern doc
		if (document != null) {
			String text = document.get();
			String oldText = getSentFileContent(fileName);
			if (text.equals(oldText)) {
				if (!getTernFileUploader().cancel(fileName)) {
					//no need to synchronize as file has already been sent to the server
					return;
				}
				//continue to include a whole file in the request
			} else if (oldText != null &&
					//do partial content assist only in big files
					document.getNumberOfLines() > BIG_FILE) {
				try {
					int start;
					for (start = 0; 
							start < text.length() && start < oldText.length() &&
							text.charAt(start) == oldText.charAt(start); 
							start++);
					int end;
					int offset = oldText.length() - text.length();
					for (end = text.length() - 1; 
							end > 0 && end + offset > 0 &&
							text.charAt(end) == oldText.charAt(end + offset);
							end--);
					int startLine = document.getLineOfOffset(start);
					int endLine = document.getLineOfOffset(end);

					int selEndLine;
					if (query.get("end") != null) { //$NON-NLS-1$
						selEndLine = document.getLineOfOffset(query.get("end").asInt()); //$NON-NLS-1$
					} else {
						selEndLine = -1;
					}
					int selStartLine;
					if (query.get("start") != null) { //$NON-NLS-1$
						selStartLine = document.getLineOfOffset(query.get("start").asInt()); //$NON-NLS-1$
					} else {
						selStartLine = selEndLine;
					}
					
					if (startLine <= endLine && 
							endLine - startLine < 100 &&
							//Selection should be part of modified lines. 
							//Tolerate 2 lines before and 2 lines after.
							!(selStartLine-2 > endLine || selEndLine+2 < startLine)) {
						startLine -= 50;
						if (startLine < 0) {
							startLine = 0;
						}
						endLine += 20;
						if (endLine >= document.getNumberOfLines()) {
							endLine = document.getNumberOfLines() - 1;
						}
						
						start = document.getLineOffset(startLine);
						end = document.getLineOffset(endLine);
						
						String textPart = document.get(start, end-start);
						
						doc.addFile(new TernFile(fileName, textPart, null, start));
						query.setFile("#" + (doc.getFiles().size() - 1)); //$NON-NLS-1$
						JsonValue val = query.get("end"); //$NON-NLS-1$
						if (val != null) {
							query.setEnd(val.asInt() - start);
						}
						val = query.get("start"); //$NON-NLS-1$
						if (val != null) {
							query.add("start", val.asInt() - start); //$NON-NLS-1$
						}
						//all's fine - return
						return;
					}
				} catch (Exception e) {
					getProject().handleException(e);
				}
			}
		}
		//fallback - include whole file in the request
		TernFile tf = file.toTernServerFile(getProject());
		doc.addFile(tf);
	}
	
}
