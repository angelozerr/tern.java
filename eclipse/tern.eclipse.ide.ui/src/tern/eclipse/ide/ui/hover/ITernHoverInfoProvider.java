package tern.eclipse.ide.ui.hover;

import tern.eclipse.ide.core.IIDETernProjectProvider;

public interface ITernHoverInfoProvider extends IIDETernProjectProvider {

	Integer getOffset();
	
	String getFilemane();
	
}
