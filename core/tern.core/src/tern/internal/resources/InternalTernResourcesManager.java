/*
 * Copyright 2014, Genuitec, LLC
 * All Rights Reserved.
 */
package tern.internal.resources;

import org.w3c.dom.Document;

import tern.IDOMProvider;
import tern.ITernFileSynchronizer;
import tern.ITernResourcesManagerDelegate;
import tern.ITernFile;
import tern.ITernProject;
import tern.server.protocol.html.IScriptTagRegionProvider;
import tern.server.protocol.html.ScriptTagRegion;

public class InternalTernResourcesManager {

	private static final InternalTernResourcesManager INSTANCE = new InternalTernResourcesManager();
	
	private ITernResourcesManagerDelegate ternResourcesManagerDelegate = new DefaultTernResourcesManager();
	private IScriptTagRegionProvider scriptTagRegionProvider = new DefaultScriptTagRegionsProvider();
	private IDOMProvider provider = DefaultDOMProvider.INSTANCE;
	
	public static synchronized InternalTernResourcesManager getInstance() {
		return INSTANCE;
	}
	
	public ScriptTagRegion[] getScriptTagRegions(ITernFile file) {
		if (scriptTagRegionProvider != null) {
			return scriptTagRegionProvider.getScriptTags(file);
		}
		return null;
	}

	public ITernProject getTernProject(Object project) {
		return ternResourcesManagerDelegate.getTernProject(project);
	}
	
	public ITernFile getTernFile(ITernProject project, String name) {
		return ternResourcesManagerDelegate.getTernFile(project, name);
	}

	public ITernFile getTernFile(Object fileObject) {
		return ternResourcesManagerDelegate.getTernFile(fileObject);
	}
	
	public ITernFileSynchronizer createTernFileSynchronizer(ITernProject project) {
		return ternResourcesManagerDelegate.createTernFileSynchronizer(project);
	}
	
	public void setTernResourcesManagerDelegate(
			ITernResourcesManagerDelegate ternResourcesFactory) {
		this.ternResourcesManagerDelegate = ternResourcesFactory;
	}
	
	public void setScriptTagRegionProvider(
			IScriptTagRegionProvider scriptTagRegionProvider) {
		this.scriptTagRegionProvider = scriptTagRegionProvider;
	}
	
	public void setDOMProvider(IDOMProvider provider) {
		this.provider = provider;
	}
	
	public boolean isHTMLFile(Object fileObject) {
		return ternResourcesManagerDelegate.isHTMLFile(fileObject);
	}

	public boolean isJSFile(Object fileObject) {
		return ternResourcesManagerDelegate.isJSFile(fileObject);
	}
	
	public Document getDocument(ITernFile resource) {
		if (provider != null) {
			return provider.getDocument(resource);
		}
		return null;
	}
	
}
