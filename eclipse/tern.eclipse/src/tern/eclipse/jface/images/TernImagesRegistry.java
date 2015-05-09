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
package tern.eclipse.jface.images;

import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.jface.resource.ImageRegistry;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.swt.graphics.Image;

import tern.server.protocol.completions.TernCompletionItem;
import tern.server.protocol.completions.TernTypeHelper;

/**
 * Image registry for tern images.
 *
 */
public class TernImagesRegistry {

	public static final String IMG_FN = "tern.eclipse.jface.IMG_FN";
	public static final String IMG_ARRAY = "tern.eclipse.jface.IMG_ARRAY";
	public static final String IMG_NUMBER = "tern.eclipse.jface.IMG_NUMBER";
	public static final String IMG_STRING = "tern.eclipse.jface.IMG_STRING";
	public static final String IMG_BOOLEAN = "tern.eclipse.jface.IMG_BOOLEAN";
	public static final String IMG_UNKNOWN = "tern.eclipse.jface.IMG_UNKNOWN";

	static {
		registerImageDescriptor(IMG_FN, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "fn.gif"));
		registerImageDescriptor(getOvr(IMG_FN), ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "fn_ovr.gif"));
		registerImageDescriptor(IMG_ARRAY, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "array.gif"));
		registerImageDescriptor(getOvr(IMG_ARRAY),
				ImageDescriptor.createFromFile(TernImagesRegistry.class,
						"array_ovr.gif"));
		registerImageDescriptor(IMG_NUMBER, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "number.gif"));
		registerImageDescriptor(getOvr(IMG_NUMBER),
				ImageDescriptor.createFromFile(TernImagesRegistry.class,
						"number_ovr.gif"));
		registerImageDescriptor(IMG_STRING, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "string.gif"));
		registerImageDescriptor(getOvr(IMG_STRING),
				ImageDescriptor.createFromFile(TernImagesRegistry.class,
						"string_ovr.gif"));
		registerImageDescriptor(IMG_BOOLEAN, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "boolean.gif"));
		registerImageDescriptor(getOvr(IMG_BOOLEAN),
				ImageDescriptor.createFromFile(TernImagesRegistry.class,
						"boolean_ovr.gif"));
		registerImageDescriptor(IMG_UNKNOWN, ImageDescriptor.createFromFile(
				TernImagesRegistry.class, "unknown.gif"));
		registerImageDescriptor(getOvr(IMG_UNKNOWN),
				ImageDescriptor.createFromFile(TernImagesRegistry.class,
						"unknown_ovr.gif"));
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

	public static String getJSType(TernCompletionItem item,
			boolean returnNullIfUnknown) {
		if (item.isFunction()) {
			return TernImagesRegistry.IMG_FN;
		}
		if (item.isArray()) {
			return TernImagesRegistry.IMG_ARRAY;
		}
		String jsType = item.getJsType();
		if (TernTypeHelper.isStringType(jsType)) {
			return TernImagesRegistry.IMG_STRING;
		} else if (TernTypeHelper.isNumberType(jsType)) {
			return TernImagesRegistry.IMG_NUMBER;
		} else if (TernTypeHelper.isBoolType(jsType)) {
			return TernImagesRegistry.IMG_BOOLEAN;
		}
		if (TernTypeHelper.isFunctionRefType(jsType)) {
			return TernImagesRegistry.IMG_FN;
		}
		if (returnNullIfUnknown) {
			return null;
		}
		return TernImagesRegistry.IMG_UNKNOWN;
	}

	public static Image getImage(TernCompletionItem item,
			boolean returnNullIfUnknown) {
		String key = getJSType(item, returnNullIfUnknown);
		return key != null ? getImage(key) : null;
	}

	public static ImageDescriptor getImageDescriptor(TernCompletionItem item,
			boolean returnNullIfUnknown) {
		String key = getJSType(item, returnNullIfUnknown);
		return key != null ? getImageDescriptor(key) : null;
	}

	public static void registerImageDescriptor(String key,
			ImageDescriptor descriptor) {
		ImageRegistry imageRegistry = JFaceResources.getImageRegistry();
		imageRegistry.put(key, descriptor);
	}

	public static String getOvr(String typeKey) {
		return new StringBuilder(typeKey).append("_ovr").toString();
	}
}
