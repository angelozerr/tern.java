package tern.angular.modules;

import org.w3c.dom.Attr;
import org.w3c.dom.Element;

public interface IDirectiveProvider {

	Directive getAngularDirective(Attr attr);

	Directive getAngularDirective(Element element);
}
