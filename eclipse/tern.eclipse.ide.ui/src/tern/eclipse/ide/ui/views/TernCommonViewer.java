package tern.eclipse.ide.ui.views;

import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.navigator.CommonViewer;

import tern.server.protocol.outline.TernOutlineCollector;

public class TernCommonViewer extends CommonViewer {

	private final AbstractTernContentOutlinePage page;

	public TernCommonViewer(String aViewerId, Composite aParent, int aStyle, AbstractTernContentOutlinePage page) {
		super(aViewerId, aParent, aStyle);
		this.page = page;
	}

	public boolean isParsed() {
		return page.isParsed();
	}

	public Job getRefreshJob() {
		return page.getRefreshJob();
	}

	public TernOutlineCollector getOutline() {
		return page.getOutline();
	}

}
