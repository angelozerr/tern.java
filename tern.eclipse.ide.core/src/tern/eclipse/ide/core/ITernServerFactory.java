package tern.eclipse.ide.core;

import tern.TernProject;
import tern.server.ITernServer;

public interface ITernServerFactory {

	ITernServer create(TernProject project) throws Exception;

}
