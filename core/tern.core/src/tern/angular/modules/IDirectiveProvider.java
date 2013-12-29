package tern.angular.modules;

import org.w3c.dom.Attr;

public interface IDirectiveProvider {

	Directive getAngularDirective(Attr attr);
}
