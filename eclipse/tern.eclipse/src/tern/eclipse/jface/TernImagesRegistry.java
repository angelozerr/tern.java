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
package tern.eclipse.jface;

import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.jface.resource.ImageRegistry;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.swt.graphics.Image;

import tern.server.protocol.completions.TernCompletionItem;

public class TernImagesRegistry {

	public static final String IMG_FN = "tern.eclipse.jface.IMG_FN";
	public static final String IMG_ARRAY = "tern.eclipse.jface.IMG_ARRAY";
	public static final String IMG_NUMBER = "tern.eclipse.jface.IMG_NUMBER";
	public static final String IMG_STRING = "tern.eclipse.jface.IMG_STRING";
	public static final String IMG_BOOLEAN = "tern.eclipse.jface.IMG_BOOLEAN";
	public static final String IMG_UNKNOWN = "tern.eclipse.jface.IMG_UNKNOWN";

	static {
		ImageRegistry imageRegistry = JFaceResources.getImageRegistry();

		imageRegistry.put(IMG_FN, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "images/fn.gif"));
		imageRegistry.put(IMG_ARRAY, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "images/array.gif"));
		imageRegistry.put(IMG_NUMBER, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "images/number.gif"));
		imageRegistry.put(IMG_STRING, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "images/string.gif"));
		imageRegistry.put(IMG_BOOLEAN, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "images/boolean.gif"));
		imageRegistry.put(IMG_UNKNOWN, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "images/unknown.gif"));

	}

	/**
	 * Returns the image from the image registry with the given key.
	 * 
	 * @param key
	 *            of the image
	 * @return the image from the image registry with the given key.
	 */
	public static Image getImage(String key) {
		ImageRegistry imageRegistry = JFaceResources.getImageRegistry();
		return imageRegistry.get(key);
	}

	/**
	 * Returns the image descriptor from the image registry with the given key.
	 * 
	 * @param key
	 *            of the image
	 * @return the image descriptor from the image registry with the given key.
	 */
	public static ImageDescriptor getImageDescriptor(String key) {
		ImageRegistry imageRegistry = JFaceResources.getImageRegistry();
		return imageRegistry.getDescriptor(key);
	}

	private static String getImageKey(TernCompletionItem item,
			boolean returnNullIfUnknown) {
		if (item.isFunction()) {
			return TernImagesRegistry.IMG_FN;
		}
		if (item.isArray()) {
			return TernImagesRegistry.IMG_ARRAY;
		}
		String jsType = item.getJsType();
		if (jsType != null) {
			if ("string".equals(jsType)) {
				return TernImagesRegistry.IMG_STRING;
			}
			if ("number".equals(jsType)) {
				return TernImagesRegistry.IMG_NUMBER;
			}
			if ("bool".equals(jsType)) {
				return TernImagesRegistry.IMG_BOOLEAN;
			}
			if ("fn".equals(jsType)) {
				return TernImagesRegistry.IMG_FN;
			}
		}
		if (returnNullIfUnknown) {
			return null;
		}
		return TernImagesRegistry.IMG_UNKNOWN;
	}

	public static Image getImage(TernCompletionItem item,
			boolean returnNullIfUnknown) {
		String key = getImageKey(item, returnNullIfUnknown);
		return key != null ? getImage(key) : null;
	}

	public static ImageDescriptor getImageDescriptor(TernCompletionItem item,
			boolean returnNullIfUnknown) {
		String key = getImageKey(item, returnNullIfUnknown);
		return key != null ? getImageDescriptor(key) : null;
	}
}
