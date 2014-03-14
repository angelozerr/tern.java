package tern.eclipse.ide.internal.ui.console;

import org.eclipse.jface.action.Action;
import org.eclipse.osgi.util.NLS;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.server.ITernServer;
import tern.server.ITernServerListener;

public class ConsoleTerminateAction extends Action implements
		ITernServerListener {

	private final IDETernProject project;

	public ConsoleTerminateAction(IDETernProject project) {
		this.project = project;
		setToolTipText(NLS.bind(
				TernUIMessages.ConsoleTerminateAction_tooltipText, project
						.getProject().getName()));
		setImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_STOP_ENABLED));
		setDisabledImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_STOP_DISABLED));
		setHoverImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_STOP_ENABLED));
		project.addServerListener(this);
		update();
	}

	public void update() {
		setEnabled(!isTernServerDisposed());
	}

	private boolean isTernServerDisposed() {
		return project.isTernServerDisposed();

	}

	@Override
	public void run() {
		try {
			project.disposeServer();
		} catch (Throwable e) {
		}
	}

	public void dispose() {

	}

	@Override
	public void onStart(ITernServer server) {
		update();
	}

	@Override
	public void onStop(ITernServer server) {
		update();
	}

}
