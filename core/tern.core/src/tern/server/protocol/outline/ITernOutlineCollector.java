package tern.server.protocol.outline;

import tern.server.protocol.ITernResultsCollector;

public interface ITernOutlineCollector extends ITernResultsCollector {

	void setRoot(JSNodeRoot root);

}
