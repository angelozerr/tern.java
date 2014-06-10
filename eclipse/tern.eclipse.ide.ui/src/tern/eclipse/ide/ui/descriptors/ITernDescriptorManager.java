package tern.eclipse.ide.ui.descriptors;

import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Composite;

import tern.server.ITernFacet;

public interface ITernDescriptorManager {

	/**
	 * Returns the image for the given facet name.
	 * 
	 * @param id
	 *            facet name.
	 * @return the image for the given facet name.
	 */
	Image getImage(String id);

	/**
	 * Returns the descriptor for the given facet name.
	 * 
	 * @param id
	 *            facet name.
	 * @return the descriptor for the given facet name.
	 */
	ITernDescriptor getTernDescriptor(String id);

	/**
	 * Create options panel for the given facet.
	 * 
	 * @param parent
	 *            composite
	 * @param facet
	 *            tern facet.
	 * @return options panel for the given facet.
	 */
	Composite createOptionsPanel(Composite parent, ITernFacet facet);

}
