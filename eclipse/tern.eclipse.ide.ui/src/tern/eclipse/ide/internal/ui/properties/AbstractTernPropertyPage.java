package tern.eclipse.ide.internal.ui.properties;

import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IAdaptable;
import org.eclipse.ui.dialogs.PropertyPage;

import tern.eclipse.ide.core.IDETernProject;

public abstract class AbstractTernPropertyPage extends PropertyPage {

	public IDETernProject getTernProject() throws CoreException {
		return IDETernProject.getTernProject(getResource().getProject());
	}

	private IResource getResource() {
		IResource resource = null;
		IAdaptable adaptable = getElement();
		if (adaptable instanceof IResource) {
			resource = (IResource) adaptable;
		} else if (adaptable != null) {
			Object o = adaptable.getAdapter(IResource.class);
			if (o instanceof IResource) {
				resource = (IResource) o;
			}
		}
		return resource;
	}

}
