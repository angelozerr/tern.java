package tern.angular.modules;

import org.w3c.dom.Attr;
import org.w3c.dom.Element;

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

	@Override
	public Directive getAngularDirective(Element element) {
		if (element == null) {
			return null;
		}
		return AngularModulesManager.getInstance().getDirective(null,
				element.getTagName());
	}

}
