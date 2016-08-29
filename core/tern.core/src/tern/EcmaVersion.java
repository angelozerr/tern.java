package tern;

public enum EcmaVersion {

	ES5(), ES6(), ES7();

	private final String versionLabel;
	private final int version;

	private EcmaVersion() {
		String versionString = "" + name().charAt(name().length() - 1);
		this.versionLabel = "ECMAScript " + versionString;
		this.version = Integer.parseInt(versionString);
	}

	public int getVersion() {
		return version;
	}

	public String getVersionLabel() {
		return versionLabel;
	}

	public static EcmaVersion get(int version) {
		EcmaVersion[] versions = values();
		for (int i = 0; i < versions.length; i++) {
			if (versions[i].getVersion() == version) {
				return versions[i];
			}
		}
		// tern configure ES6 as default version. See (defaultConfig)
		// https://github.com/marijnh/tern/blob/master/bin/tern
		return EcmaVersion.ES6;
	}
}
