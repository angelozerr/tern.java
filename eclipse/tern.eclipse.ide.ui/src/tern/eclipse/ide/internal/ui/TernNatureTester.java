package tern.eclipse.ide.internal.ui;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.IAdaptable;

import tern.eclipse.ide.core.TernCorePlugin;

/**
 * Property Tester for a IProject receiver object
 * 
 * Property to be tested: "isTernProject"
 * 
 * @author Victor Rubezhny
 */
public class TernNatureTester extends
		org.eclipse.core.expressions.PropertyTester {
	private static final String IS_TERN_PROJECT_PROPERTY = "isTernProject";

	public TernNatureTester() {
		// Default constructor is required for property tester
	}

	/**
	 * Tests if the receiver object is a project is a Tern project
	 * 
	 * @return true if the receiver object is a Project that has a nature that
	 *         is treated as Tern nature, otherwise false is returned
	 */
	@Override
	public boolean test(Object receiver, String property, Object[] args,
			Object expectedValue) {

		if (IS_TERN_PROJECT_PROPERTY.equals(property))
			return testIsTernProject(receiver);

		return false;
	}

	private boolean testIsTernProject(Object receiver) {
		if (receiver instanceof IAdaptable) {
			IProject project = (IProject) ((IAdaptable) receiver)
					.getAdapter(IProject.class);
			if (project != null) {
				return TernCorePlugin.hasTernNature(project);
			}
		}

		return false;
	}

}
