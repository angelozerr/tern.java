package tern.eclipse.ide.ui.hover;

import tern.ITernFile;
import tern.eclipse.ide.core.IIDETernProjectProvider;

public interface ITernHoverInfoProvider extends IIDETernProjectProvider {

	Integer getOffset();

	ITernFile getFile();

}
