/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.protocol.completions;

import java.util.List;

/**
 * Bean which contains information about function.
 *
 */
public class FunctionInfo {

	private final List<Parameter> parameters;
	private final String signature;
	private final String returnType;

	public FunctionInfo(List<Parameter> parameters, String signature,
			String returnType) {
		this.parameters = parameters;
		this.signature = signature;
		this.returnType = returnType;
	}

	/**
	 * Returns the parameters of the function and null otherwise.
	 * 
	 * @return the parameters of the function and null otherwise.
	 */
	public List<Parameter> getParameters() {
		return parameters;
	}

	/**
	 * Returns the function signature.
	 * 
	 * @return the function signature.
	 */
	public String getSignature() {
		return signature;
	}

	/**
	 * Returns the type of the return of the function.
	 * 
	 * @return the type of the return of the function.
	 */
	public String getReturnType() {
		return returnType;
	}

}
