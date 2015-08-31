package tern.server.protocol.highlight;

import tern.server.protocol.ITernResultsCollector;

public interface ITernHighlightCollector extends ITernResultsCollector {

	void higlight(String type, Long start, Long end);

}
