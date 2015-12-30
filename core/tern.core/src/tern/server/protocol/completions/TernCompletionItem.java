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

import java.util.ArrayList;
import java.util.List;

import tern.ITernProject;
import tern.server.ITernModule;
import tern.utils.StringUtils;

/**
 * Tern completion item.
 * 
 */
public class TernCompletionItem {

	private final TernCompletionProposalRec proposal;
	private final String displayName;

	private final String signature;
	private final boolean function;
	private boolean array;
	private String jsType;
	private List<Parameter> parameters;
	private String[] allTypes;
	private boolean hasDisplayName;

	private ITernProject ternProject;

	public TernCompletionItem(TernCompletionProposalRec proposal) {
		this.proposal = proposal;
		// we consider that we are inside string when display name is defined.
		this.hasDisplayName = !StringUtils.isEmpty(proposal.displayName);
		this.displayName = hasDisplayName ? proposal.displayName
				: proposal.name;
		this.parameters = null;
		String signature = proposal.name;
		this.jsType = proposal.type;
		if (!hasDisplayName && !StringUtils.isEmpty(proposal.type)) {
			this.function = TernTypeHelper.isFunction(proposal.type);
			if (function) {
				FunctionInfo functionInfo = TernTypeHelper.parseFunction(
						proposal.name, proposal.type);
				this.parameters = functionInfo.getParameters();
				signature = functionInfo.getSignature();
				this.jsType = functionInfo.getReturnType();
			} else {
				this.array = proposal.type.indexOf("[") != -1;
			}
		} else {
			this.function = false;
			this.array = false;
		}
		this.signature = signature;
	}

	/**
	 * Expand an array of expanded functions if this function contains optional
	 * parameters.
	 * 
	 * <p>
	 * The expansion of "fn(selector: string, context?: frameElement)" returns
	 * an array of functions :
	 * 
	 * <ul>
	 * <li>fn(selector: string) -> jQuery.fn</li>
	 * </ul>
	 * 
	 * </p>
	 * 
	 * @return
	 */
	public String[] expand() {
		if (allTypes == null) {
			// not computed, compute it.
			if (parameters == null) {
				// no parameters.
				allTypes = StringUtils.EMPTY_ARRAY;
			} else {
				// have parameters, retrieve optional parameters.
				List<Parameter> optionalParameters = null;
				for (int i = 0; i < parameters.size(); i++) {
					Parameter parameter = parameters.get(i);
					if (!parameter.isRequired()) {
						if (optionalParameters == null) {
							optionalParameters = new ArrayList<Parameter>();
						}
						optionalParameters.add(parameter);
					}
				}

				if (optionalParameters == null) {
					// no optional parameters
					allTypes = StringUtils.EMPTY_ARRAY;
				} else {
					// optional parameters, expand it.
					List<String> types = new ArrayList<String>();

					// Loop for each number of optional parameters (0 to
					// optional parameters size).
					for (int nbMaxOptionalParams = 0; nbMaxOptionalParams < optionalParameters
							.size(); nbMaxOptionalParams++) {
						// loop for each optional parameters.
						for (Parameter optional : optionalParameters) {
							addType(types, nbMaxOptionalParams, optional, null);
						}
					}
					allTypes = types.toArray(StringUtils.EMPTY_ARRAY);
				}
			}
		}
		return allTypes;
	}

	/**
	 * Add function type to the given list types.
	 * 
	 * @param types
	 *            list of function type.
	 * @param nbMaxOptional
	 *            nb max of optional parameters.
	 * @param optional
	 *            the current optional parameter.
	 * @param index
	 *            not null if it must starts with the optional parameter which
	 *            matches this index.
	 */
	public void addType(List<String> types, int nbMaxOptional,
			Parameter optional, Integer index) {
		Integer newIndex = null;
		int nbOptionalAdded = -1;
		StringBuilder newType = new StringBuilder("fn(");
		// Loop for each parameters.
		for (int i = 0; i < parameters.size(); i++) {
			Parameter parameter = parameters.get(i);
			if (parameter.isRequired()) {
				// required parameter, add it.
				addParam(newType, parameter);
			} else {
				// optional parameter
				if (nbOptionalAdded == -1) {
					// none optional parameter was added, check if the current
					// optional parameter is the given optional parameter.
					if (optional.equals(parameter)) {
						nbOptionalAdded = 0;
					}
				}
				if (nbOptionalAdded != -1) {
					// the given optional was or must be added.
					if (nbOptionalAdded < nbMaxOptional) {
						// the current number of optional which was added is <
						// to the nb max of optional parameters which can be
						// added.
						boolean add = false;
						if (nbOptionalAdded == 0) {
							// given optional parameter, add it
							add = true;
						} else {
							if (index == null) {
								// the start index is null, add it
								add = true;
							} else if (i == index) {
								// the start index matches the current parameter
								// index, add it
								add = true;
							}
						}
						// Update newIndex with the current index + 1 if :
						// * if newIndex was not already set
						// * previous optional param which was added is the
						// given optional param
						// * the next index param is a optional param
						if (newIndex == null && nbOptionalAdded == 1) {
							newIndex = getNexOptionalIndex(parameters, i, index);
						}
						if (add) {
							// optional parameter, add it.
							addParam(newType, parameter);
							nbOptionalAdded++;
						}

					}
				}
			}
		}
		newType.append(")");
		if (jsType != null) {
			newType.append(" -> ");
			newType.append(jsType);
		}

		if (!types.contains(newType.toString())) {
			// type must be added if it doesn't exists.
			types.add(newType.toString());
		}

		if (newIndex != null) {
			// next optional parameter must be treat, do it.
			addType(types, nbMaxOptional, optional, newIndex);
		}
	}

	/**
	 * Returns the next optional parameter index.
	 * 
	 * @param parameters
	 * @param i
	 * @param index
	 * @return
	 */
	private Integer getNexOptionalIndex(List<Parameter> parameters, int i,
			Integer index) {
		Parameter parameter = null;
		for (int j = i + 1; j < parameters.size(); j++) {
			parameter = parameters.get(j);
			if (!parameter.isRequired() && index == null
					|| (index != null && index < j)) {
				return j;
			}
		}
		return null;
	}

	public void addParam(StringBuilder newType, Parameter parameter) {
		if (newType.length() > 3) {
			newType.append(", ");
		}
		newType.append(parameter.getName());
		if (!parameter.isRequired()) {
			newType.append("?");
		}
		if (parameter.getType() != null) {
			newType.append(": ");
			newType.append(parameter.getType());
		}
	}

	public String getText() {
		if (StringUtils.isEmpty(proposal.origin) && StringUtils.isEmpty(jsType)) {
			return hasDisplayName ? displayName : signature;
		}
		StringBuilder text = new StringBuilder(hasDisplayName ? displayName
				: signature);

		if (!StringUtils.isEmpty(jsType)) {
			text.append(" : ");
			text.append(jsType);
		}
		if (!StringUtils.isEmpty(proposal.origin)) {
			text.append(" - ");
			text.append(proposal.origin);
		}
		return text.toString();
	}

	public List<Parameter> getParameters() {
		return parameters;
	}

	public boolean isFunction() {
		return function;
	}

	public boolean isArray() {
		return array;
	}

	public String getName() {
		return proposal.name;
	}

	public String getDoc() {
		return proposal.doc;
	}

	public String getURL() {
		return proposal.url;
	}

	public String getOrigin() {
		return proposal.origin;
	}

	public String getSignature() {
		return signature;
	}

	public String getType() {
		return proposal.type;
	}

	public TernCompletionProposalRec getProposal() {
		return proposal;
	}

	public String getJsType() {
		return jsType;
	}

	public boolean isProperty() {
		return proposal.isProperty;
	}

	public boolean isObjectKey() {
		return proposal.isObjectKey;
	}

	public boolean isSpecifier() {
		return proposal.isSpecifier;
	}
	
	public boolean hasDisplayName() {
		return hasDisplayName;
	}

	public String getDisplayName() {
		return displayName;
	}

	public boolean isStringType() {
		return "string".equals(getType());
	}

	public boolean isStringReturnType() {
		return "string".equals(getJsType());
	}

	public ITernProject getTernProject() {
		return ternProject;
	}

	public void setTernProject(ITernProject ternProject) {
		this.ternProject = ternProject;
	}

	/**
	 * Returns the origin type.
	 * 
	 * @return the origin type.
	 */
//	public String getOriginType() {
//		ITernModule module = getModule();
//		// Use tern repository to retrieve the real module type (ex : yui for
//		// yui3).
//		return module != null ? module.getType() : null;
//	}

	/**
	 * Returns the tern module and null otherwise.
	 * 
	 * @return the tern module and null otherwise.
	 */
	public ITernModule getTernModule() {
		String origin = getOrigin();
		if (origin == null) {
			return null;
		}
		if (ternProject == null) {
			return null;
		}
		return this.ternProject.getRepository().getModuleByOrigin(origin);
	}
}
