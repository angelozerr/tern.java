/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server;

import java.util.Set;

import com.eclipsesource.json.JsonObject;

import tern.TernException;
import tern.metadata.TernModuleMetadata;

/**
 * Wrapper for {@link ITernModule} used to configure {@link ITernModule} :
 * 
 * <ul>
 * <li>version of the module</li>
 * <li>options of the module if it's a plugin</li>
 * </ul>
 *
 */
public interface ITernModuleConfigurable extends ITernModule {

	/**
	 * Set version of the tern module
	 */
	ITernModule setVersion(String version) throws TernException;

	/**
	 * Returns the current wrapped module.
	 */
	ITernModule getWrappedModule();

	/**
	 * returns list of available versions.
	 */
	Set<String> getAvailableVersions();

	/**
	 * Returns the tern module metadata.
	 * 
	 * @return the tern module metadata.
	 */
	TernModuleMetadata getMetadata();

	void setOptions(JsonObject options);

	JsonObject getOptions();

}
