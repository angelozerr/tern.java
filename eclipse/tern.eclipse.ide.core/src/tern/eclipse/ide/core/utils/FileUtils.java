package tern.eclipse.ide.core.utils;

import org.eclipse.core.resources.IResource;

public class FileUtils {

	/**
	 * Extension file
	 */
	public static final String JS_EXTENSION = "js";

	public static boolean isJSFile(IResource resource) {
		return JS_EXTENSION.equals(resource.getFileExtension());
	}
}
