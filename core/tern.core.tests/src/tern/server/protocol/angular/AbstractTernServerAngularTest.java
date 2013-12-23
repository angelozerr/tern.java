package tern.server.protocol.angular;

import tern.TernProject;
import tern.server.AbstractTernServerTest;
import tern.server.TernDef;
import tern.server.TernPlugin;

public abstract class AbstractTernServerAngularTest extends
		AbstractTernServerTest {

	@Override
	protected TernProject createProject() {
		TernProject project = super.createProject();
		project.addPlugin(TernPlugin.angular);
		project.addLib(TernDef.ecma5.name());
		return project;
	}
}
