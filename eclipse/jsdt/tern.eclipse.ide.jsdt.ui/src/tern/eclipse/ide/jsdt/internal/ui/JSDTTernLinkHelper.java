package tern.eclipse.ide.jsdt.internal.ui;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.ide.ResourceUtil;
import org.eclipse.ui.navigator.ILinkHelper;
import org.eclipse.wst.jsdt.core.IJavaScriptElement;
import org.eclipse.wst.jsdt.core.JavaScriptCore;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.EditorUtility;
import org.eclipse.wst.jsdt.ui.JavaScriptUI;

import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.protocol.outline.JSNode;

public class JSDTTernLinkHelper implements ILinkHelper {

	public void activateEditor(IWorkbenchPage page, IStructuredSelection selection) {
		if (!selection.isEmpty()) {
			if (selection.getFirstElement() instanceof JSNode) {
				JSNode node = (JSNode) selection.getFirstElement();
				IFile file = null; //ternFile.getFile();
				Long start = node.getStart();
				Long end = node.getEnd();
				EditorUtils.openInEditor(
						file,
						start != null ? start.intValue() : -1,
						start != null && end != null ? end.intValue()
								- start.intValue() : -1, true);

			}
		}
	}

	public IStructuredSelection findSelection(IEditorInput input) {
		IJavaScriptElement element= JavaScriptUI.getEditorInputJavaElement(input);
		if (element == null) {
			IFile file = ResourceUtil.getFile(input);
			if (file != null) {
				element= JavaScriptCore.create(file);
			}
		}
		return (element != null) ? new StructuredSelection(element) : StructuredSelection.EMPTY;
	}

}
