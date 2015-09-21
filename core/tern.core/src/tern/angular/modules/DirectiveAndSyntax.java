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
package tern.angular.modules;

class DirectiveAndSyntax {

	private final Directive directive;
	private final int syntax;

	public DirectiveAndSyntax(Directive directive, int syntax) {
		this.directive = directive;
		this.syntax = syntax;
	}
	
	public Directive getDirective() {
		return directive;
	}
	
	public int getSyntax() {
		return syntax;
	}
}
