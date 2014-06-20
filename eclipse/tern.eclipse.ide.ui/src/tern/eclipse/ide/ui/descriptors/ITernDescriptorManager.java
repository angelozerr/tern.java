package tern.eclipse.ide.ui.descriptors;

import org.eclipse.core.resources.IProject;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Composite;

import tern.server.ITernModule;

public interface ITernDescriptorManager {

	/**
	 * Returns the image for the given module name.
	 * 
	 * @param id
	 *            module name.
	 * @return the image for the given module name.
	 */
	Image getImage(String id);

	/**
	 * Returns the descriptor for the given module name.
	 * 
	 * @param id
	 *            module name.
	 * @return the descriptor for the given module name.
	 */
	ITernDescriptor getTernDescriptor(String id);

	/**
	 * Create options panel for the given module.
	 * 
	 * @param parent
	 *            composite
	 * @param module
	 *            tern module.
	 * @param project
	 *            the current project or null otherwise.
	 * @return options panel for the given module.
	 */
	Composite createOptionsPanel(Composite parent, ITernModule module,
			IProject project);

}
