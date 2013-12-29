package tern.angular.modules;

import org.w3c.dom.Attr;

public class DOMDirectiveProvider implements IDirectiveProvider {

	private static final IDirectiveProvider INSTANCE = new DOMDirectiveProvider();

	public static IDirectiveProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public Directive getAngularDirective(Attr attr) {
		if (attr == null) {
			return null;
		}
		return AngularModulesManager.getInstance().getDirective(
				attr.getOwnerElement().getNodeName(), attr.getName());
	}

}
