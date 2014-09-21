package tern.eclipse.ide.ui.descriptors.options;

import org.eclipse.core.resources.IProject;
import org.eclipse.swt.widgets.Composite;

import com.eclipsesource.json.JsonObject;

public interface ITernModuleOptionFactory {

	void createOption(Composite parent, IProject project, String name,
			JsonObject options);
}
