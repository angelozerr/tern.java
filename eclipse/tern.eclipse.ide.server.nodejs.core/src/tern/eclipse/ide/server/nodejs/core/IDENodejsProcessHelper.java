package tern.eclipse.ide.server.nodejs.core;

import org.eclipse.core.runtime.Platform;

import tern.server.nodejs.process.NodejsProcessHelper;
import tern.server.nodejs.process.NodejsProcessHelper.OS;

public class IDENodejsProcessHelper {

	private static final OS os;

	static {
		if (Platform.getOS().startsWith("win")) {
			os = OS.Windows;
		} else if (Platform.getOS().equals(Platform.OS_MACOSX)) {
			os = OS.MacOS;
		} else {
			os = OS.Linux;
		}
	}

	public static String getNodejsPath() {
		return NodejsProcessHelper.getNodejsPath(os);
	}

	public static String[] getDefaultNodejsPaths() {
		return NodejsProcessHelper.getDefaultNodejsPaths(os);
	}
}
