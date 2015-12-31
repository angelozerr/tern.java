package tern.eclipse.ide.internal.ui.views.actions;

import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.viewers.ViewerSorter;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.views.TernContentOutlinePage;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.views.actions.AbstractLexicalSortingAction;

public class LexicalSortingAction extends AbstractLexicalSortingAction {

	public LexicalSortingAction(TernContentOutlinePage page) {
		super(page, TernUIMessages.LexicalSortingAction_text, TernUIMessages.LexicalSortingAction_tooltip,
				TernUIMessages.LexicalSortingAction_description, new LexicalSorter());
	}

	@Override
	protected IPreferenceStore getPreferenceStore() {
		return TernUIPlugin.getDefault().getPreferenceStore();
	}

	static class LexicalSorter extends ViewerSorter {
		@Override
		public int category(Object element) {
			return 0;
		}
	}
}
