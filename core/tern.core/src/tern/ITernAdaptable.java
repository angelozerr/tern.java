/*
 * Copyright 2014, Genuitec, LLC
 * All Rights Reserved.
 */
package tern;

public interface ITernAdaptable {

	/**
	 * Provides a way to adapt ITernAdaptable to an environment specific object.
	 * E.g. it can return {@link java.io.File} object or Eclipse 
	 * {@code org.eclipse.core.resources.IResource}. 
	 * 
	 * @param adapterClass
	 * @return Adapter extending/implementing requested class or null
	 */
	Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass);
	
}
