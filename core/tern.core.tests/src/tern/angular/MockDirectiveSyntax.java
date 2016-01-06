/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.angular;

import tern.angular.modules.IDirectiveSyntax;

public class MockDirectiveSyntax implements IDirectiveSyntax {

	@Override
	public boolean isUseOriginalName() {

		return false;
	}

	@Override
	public boolean isStartsWithNothing() {

		return true;
	}

	@Override
	public boolean isStartsWithX() {

		return false;
	}

	@Override
	public boolean isStartsWithData() {

		return false;
	}

	@Override
	public boolean isColonDelimiter() {

		return false;
	}

	@Override
	public boolean isMinusDelimiter() {

		return true;
	}

	@Override
	public boolean isUnderscoreDelimiter() {

		return false;
	}

}
