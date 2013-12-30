package tern.eclipse.jface;

import org.eclipse.jface.fieldassist.IContentProposal;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.graphics.Image;

import tern.eclipse.jface.fieldassist.TernContentProposal;
import tern.server.protocol.completions.TernCompletionItem;

/**
 * Label provider to manage image with {@link TernContentProposal}.
 * 
 */
public class TernLabelProvider extends LabelProvider {

	private static final ILabelProvider INSTANCE = new TernLabelProvider();

	public static ILabelProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public String getText(Object element) {
		if (element instanceof IContentProposal) {
			return ((IContentProposal) element).getLabel();
		}
		return super.getText(element);
	}

	@Override
	public Image getImage(Object element) {
		if (element instanceof TernCompletionItem) {
			TernCompletionItem item = ((TernCompletionItem)element);
			return TernImagesRegistry.getImage(item);
		}
		return super.getImage(element);
	}

}
