package org.nodeclipse.ui.nature;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;

import tern.eclipse.ide.core.ITernNatureCapability;

public class NodeclipseTernNatureCapability implements ITernNatureCapability {

    @Override
    public boolean hasTernNature(IProject project) throws CoreException {
        return project.hasNature("org.nodeclipse.ui.NodeNature");
    }   
}