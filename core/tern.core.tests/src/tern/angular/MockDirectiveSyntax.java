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
