package tern.angular.modules;

import java.io.IOException;
import java.io.InputStream;

import org.xml.sax.SAXException;

public class XMLAngularModulesRegistry extends AbstractAngularModulesRegistry {

	public XMLAngularModulesRegistry() {
		super();
		try {
			loadModule(XMLAngularModulesRegistry.class
					.getResourceAsStream("ng.xml"));
			loadModule(XMLAngularModulesRegistry.class
					.getResourceAsStream("ngRoute.xml"));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void loadModule(InputStream in) throws IOException, SAXException {
		addModule(new SAXModuleHandler().load(in));
	}

}
