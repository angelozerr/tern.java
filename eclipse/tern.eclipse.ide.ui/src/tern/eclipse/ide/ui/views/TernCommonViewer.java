package tern.eclipse.ide.ui.views;

import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.navigator.CommonViewer;

import tern.server.protocol.outline.TernOutlineCollector;

/**
 * Extension of {@link CommonViewer} for tern outline.
 *
 */
public class TernCommonViewer extends CommonViewer {

	private final AbstractTernContentOutlinePage page;

	public TernCommonViewer(String aViewerId, Composite aParent, int aStyle, AbstractTernContentOutlinePage page) {
		super(aViewerId, aParent, aStyle);
		this.page = page;
	}

	/**
	 * Returns true if the outline is parsed and false otherwise.
	 * 
	 * @return true if the outline is parsed and false otherwise.
	 */
	public boolean isParsed() {
		return page.isParsed();
	}

	/**
	 * Refresh the outline tree in a job.
	 */
	public void refreshOutline() {
		page.refreshOutline();
	}

	public TernOutlineCollector getOutline() {
		return page.getOutline();
	}

}
