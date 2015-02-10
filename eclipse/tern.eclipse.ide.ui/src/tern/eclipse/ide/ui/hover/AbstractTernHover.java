package tern.eclipse.ide.ui.hover;

import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.ITextHover;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.ui.IEditorPart;

import tern.eclipse.ide.ui.JavaWordFinder;

public abstract class AbstractTernHover implements ITextHover {

	private IEditorPart editor;

	public IEditorPart getEditor() {
		return editor;
	}

	public void setEditor(IEditorPart editor) {
		this.editor = editor;
	}

	@Override
	public IRegion getHoverRegion(ITextViewer textViewer, int offset) {
		return JavaWordFinder.findWord(textViewer.getDocument(), offset);
	}

}
