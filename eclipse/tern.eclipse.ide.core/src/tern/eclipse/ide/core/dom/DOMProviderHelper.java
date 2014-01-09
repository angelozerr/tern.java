package tern.eclipse.ide.core.dom;

public class DOMProviderHelper {

	private static IDOMProvider provider = DefaultDOMProvider.INSTANCE;

	public static void setProvider(IDOMProvider provider) {
		DOMProviderHelper.provider = provider;
	}

	public static IDOMProvider getProvider() {
		return provider;
	}
}
