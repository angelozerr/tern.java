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
package tern.eclipse.ide.core;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.jface.text.IDocument;
import org.w3c.dom.Node;

import tern.ITernProject;
import tern.TernException;
import tern.angular.protocol.completions.TernAngularCompletionsQuery;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath.ScriptPathsType;
import tern.server.ITernServerListener;
import tern.server.protocol.TernQuery;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.type.ITernTypeCollector;

import com.eclipsesource.json.JsonArray;

/**
 * IDE tern project API.
 *
 */
public interface IIDETernProject extends ITernProject<IFile> {

	// -------------- Tern server.

	void addServerListener(ITernServerListener listener);

	void removeServerListener(ITernServerListener listener);

	void disposeServer();

	boolean isServerDisposed();

	// -------------- Tern script paths.

	/**
	 * 
	 * @return
	 */
	Collection<ITernScriptPath> getScriptPaths();

	void setScriptPaths(List<ITernScriptPath> scriptPaths) throws IOException;

	/**
	 * Returns the list of script paths.
	 * 
	 * @return
	 */
	ITernScriptPath getScriptPath(String path);

	ITernScriptPath createScriptPath(IResource resource, ScriptPathsType type);

	ITernScriptPath addExternalScriptPath(IResource resource,
			ScriptPathsType type, String external) throws IOException;

	void removeExternalScriptPaths(String external);
	
	// --- Completion

	public void request(TernAngularCompletionsQuery query, JsonArray names,
			ITernCompletionCollector collector) throws IOException,
			TernException;

	void request(TernQuery query, JsonArray names, ITernScriptPath scriptPath,
			ITernCompletionCollector collector) throws IOException,
			TernException;

	public void request(TernQuery query, JsonArray names, Node domNode,
			IFile domFile, IDocument document,
			ITernCompletionCollector collector) throws IOException,
			TernException;

	void request(TernQuery query, IFile file, IDocument document,
			int startOffset, ITernCompletionCollector collector)
			throws IOException, TernException;

	// ---------- Definition

	/**
	 * 
	 * @param query
	 * @param names
	 * @param scriptPath
	 * @param collector
	 * @throws IOException
	 * @throws TernException
	 */
	void request(TernQuery query, JsonArray names, ITernScriptPath scriptPath,
			ITernDefinitionCollector collector) throws IOException,
			TernException;

	void request(TernQuery query, JsonArray names, Node domNode, IFile domFile,
			IDocument document, ITernDefinitionCollector collector)
			throws IOException, TernException;

	void request(TernQuery query, IFile file, IDocument document,
			ITernDefinitionCollector collector) throws IOException,
			TernException;

	// ---------- Type

	void request(TernQuery query, JsonArray names, ITernScriptPath scriptPath,
			ITernTypeCollector collector) throws IOException, TernException;

	void request(TernQuery query, JsonArray names, Node domNode, IFile domFile,
			IDocument document, ITernTypeCollector collector)
			throws IOException, TernException;

	void request(TernQuery query, IFile file, IDocument document,
			int startOffset, ITernTypeCollector collector) throws IOException,
			TernException;

	// ----------------------- lint

	void request(TernQuery query, IFile file, IDocument document,
			ITernLintCollector collector) throws IOException, TernException;

	void configureConsole();

	<T> T getData(String key);

	void setData(String key, Object value);

	IProject getProject();

}
