/*
 * Copyright 2014, Genuitec, LLC
 * All Rights Reserved.
 */
package tern;

import tern.internal.resources.InternalTernResourcesManager;

public class TernResourcesManager {

	private static final InternalTernResourcesManager INSTANCE = 
			InternalTernResourcesManager.getInstance();
	
	/**
	 * Returns a tern project object associated with the specified resource.
	 * May return null if resource doesn't point at a valid tern project.
	 * 
	 * @param project
	 * @return
	 */
	public static ITernProject getTernProject(Object project) {
		return INSTANCE.getTernProject(project);
	}
	
	public static ITernFile getTernFile(Object fileObject) {
		return INSTANCE.getTernFile(fileObject);
	}
	
	public static boolean isHTMLFile(Object fileObject) {
		return INSTANCE.isHTMLFile(fileObject);
	}

	public static boolean isJSFile(Object fileObject) {
		return INSTANCE.isJSFile(fileObject);
	}
	
}
