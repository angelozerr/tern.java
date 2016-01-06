package tern.eclipse.ide.internal.ui.views.actions;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.ui.IPropertyListener;
import org.eclipse.ui.IWorkbenchCommandConstants;
import org.eclipse.ui.navigator.CommonViewer;
import org.eclipse.ui.navigator.INavigatorContentService;
import org.eclipse.ui.part.ISetSelectionTarget;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.views.AbstractTernOutlineView;

public class LinkEditorAction extends Action implements IPropertyListener {

	private final AbstractTernOutlineView commonNavigator;

	private final CommonViewer commonViewer;

	// private final LinkHelperService linkService;

	private boolean ignoreSelectionChanged;
	private boolean ignoreEditorActivation;

	/**
	 * Create a LinkEditorAction for the given navigator and viewer.
	 *
	 * @param aNavigator
	 *            The navigator which defines whether linking is enabled and
	 *            implements {@link ISetSelectionTarget}.
	 * @param aViewer
	 *            The common viewer instance with a
	 *            {@link INavigatorContentService}.
	 * @param linkHelperService
	 */
	public LinkEditorAction(AbstractTernOutlineView aNavigator, CommonViewer aViewer) {
		super(TernUIMessages.LinkEditorActionDelegate_0);
		setToolTipText(TernUIMessages.LinkEditorActionDelegate_1);
		commonNavigator = aNavigator;
		commonViewer = aViewer;
		ImageDescriptor syncIcon = ImageResource.getImageDescriptor(ImageResource.IMG_ELCL_SYNCED); // $NON-NLS-1$
		super.setImageDescriptor(syncIcon);
		super.setHoverImageDescriptor(syncIcon);
		setActionDefinitionId(IWorkbenchCommandConstants.NAVIGATE_TOGGLE_LINK_WITH_EDITOR);
		// PlatformUI.getWorkbench().getHelpSystem().setHelp(this,
		// TernUIPlugin.PLUGIN_ID + ".link_editor_action"); //$NON-NLS-1$
		init();
	}

	/**
	 * @see org.eclipse.ui.IViewActionDelegate#init(org.eclipse.ui.IViewPart)
	 */
	protected void init() {
		updateLinkingEnabled(commonNavigator.isLinkingEnabled());
		commonNavigator.addPropertyListener(this);
	}

	/**
	 *
	 */
	public void dispose() {
		commonNavigator.removePropertyListener(this);
	}

	/**
	 * @see org.eclipse.ui.IActionDelegate#run(org.eclipse.jface.action.IAction)
	 */
	@Override
	public void run() {
		commonNavigator.setLinkingEnabled(!commonNavigator.isLinkingEnabled());
	}

	/**
	 * Update the active editor based on the current selection in the Navigator.
	 */
	protected void activateEditor() {
		ISelection selection = commonViewer.getSelection();
		if (selection != null && !selection.isEmpty() && selection instanceof IStructuredSelection) {
			/*
			 * Create and schedule a UI Job to activate the editor in a valid
			 * Display thread
			 */
			// activateEditorJob.schedule(NavigatorPlugin.LINK_HELPER_DELAY);
		}
	}

	@Override
	public void propertyChanged(Object aSource, int aPropertyId) {
		switch (aPropertyId) {
		case AbstractTernOutlineView.IS_LINKING_ENABLED_PROPERTY:
			updateLinkingEnabled(((AbstractTernOutlineView) aSource).isLinkingEnabled());
		}
	}

	/**
	 * @param toEnableLinking
	 */
	private void updateLinkingEnabled(boolean toEnableLinking) {
		setChecked(toEnableLinking);
	}

}
