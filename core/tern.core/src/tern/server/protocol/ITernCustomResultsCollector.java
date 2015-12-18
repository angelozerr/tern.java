/*
 * Copyright 2015, Genuitec, LLC
 * All Rights Reserved.
 */
package tern.server.protocol;

public interface ITernCustomResultsCollector extends ITernResultsCollector {

	ITernResultProcessor<?> getResultsProcessor();
	
}
