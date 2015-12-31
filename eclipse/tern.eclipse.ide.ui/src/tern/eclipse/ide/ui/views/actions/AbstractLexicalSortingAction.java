package tern.eclipse.ide.ui.views.actions;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.viewers.ViewerSorter;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.BusyIndicator;
import org.eclipse.ui.navigator.CommonViewer;

import tern.angular.modules.IAngularElement;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.views.AbstractTernContentOutlinePage;

public abstract class AbstractLexicalSortingAction extends Action {

	private static final String LEXICAL_SORTING_PREF_NAME = "LexicalSortingAction.isChecked";

	private final AbstractTernContentOutlinePage page;
	private ViewerSorter sorter;

	public AbstractLexicalSortingAction(AbstractTernContentOutlinePage page, String text, String tooltipText,
			String description, ViewerSorter sorter) {
		super(text, SWT.TOGGLE);
		this.page = page;
		this.sorter = sorter;
		super.setToolTipText(tooltipText);
		super.setDescription(description);
		super.setImageDescriptor(ImageResource.getImageDescriptor(ImageResource.IMG_ELCL_SORT));

		boolean checked = getPreferenceStore().getBoolean(LEXICAL_SORTING_PREF_NAME);
		valueChanged(checked, false);
	}

	protected abstract IPreferenceStore getPreferenceStore();

	@Override
	public void run() {
		valueChanged(isChecked(), true);
	}

	private void valueChanged(final boolean on, boolean store) {
		setChecked(on);
		final CommonViewer viewer = page.getViewer();
		BusyIndicator.showWhile(viewer.getControl().getDisplay(), new Runnable() {
			@Override
			public void run() {
				if (on) {
					viewer.setSorter(sorter);
				} else {
					viewer.setSorter(null);
				}
			}
		});

		if (store) {
			getPreferenceStore().setValue(LEXICAL_SORTING_PREF_NAME, on);
		}
	}

}
