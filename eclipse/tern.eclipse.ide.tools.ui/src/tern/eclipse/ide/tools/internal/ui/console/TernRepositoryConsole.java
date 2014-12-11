/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.tools.internal.ui.console;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.console.ConsolePlugin;
import org.eclipse.ui.console.IConsole;
import org.eclipse.ui.console.IConsoleManager;
import org.eclipse.ui.console.MessageConsole;
import org.eclipse.ui.console.MessageConsoleStream;

import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.console.ITernConsole;
import tern.eclipse.ide.ui.console.LineType;

/**
 * Tern repository console.
 *
 */
public class TernRepositoryConsole extends MessageConsole implements
		ITernConsole {

	private static TernRepositoryConsole INSTANCE;

	private boolean showOnMessage;

	private IConsoleManager consoleManager;

	private final ConsoleDocument document;

	private boolean visible = false;

	private MessageConsoleStream[] streams = new MessageConsoleStream[LineType
			.values().length];

	private boolean initialized;

	public TernRepositoryConsole() {
		super(TernToolsUIMessages.TernRepository_name, ImageResource
				.getImageDescriptor(ImageResource.IMG_LOGO));
		consoleManager = ConsolePlugin.getDefault().getConsoleManager();
		document = new ConsoleDocument();
	}

	protected void init() {
		// Called when console is added to the console view
		super.init();

		// Ensure that initialization occurs in the ui thread
		Display.getDefault().asyncExec(new Runnable() {
			public void run() {
				initializeStreams();
				dump();
			}
		});
	}

	private void initializeStreams() {
		synchronized (document) {
			if (!initialized) {
				for (int i = 0; i < streams.length; i++) {
					streams[i] = newMessageStream();
				}
				// install colors
				for (int i = 0; i < LineType.values().length; i++) {
					initializeStream(LineType.values()[i]);
				}
				initialized = true;
			}
		}
	}

	private void initializeStream(LineType lineType) {
		Color color = createColor(Display.getDefault(), lineType);
		streams[lineType.ordinal()].setColor(color);
	}

	/**
	 * Returns a color instance based on data from a preference field.
	 */
	private Color createColor(Display display, LineType lineType) {
		RGB rgb = getRGB(lineType);
		return new Color(display, rgb);
	}

	public RGB getRGB(LineType lineType) {
		switch (lineType) {
		case PROCESS_INFO:
			return new RGB(0, 108, 54);
		case PROCESS_ERROR:
			return new RGB(255, 0, 0);
		default:
			return new RGB(0, 64, 128);
		}
	}

	private void dump() {
		synchronized (document) {
			visible = true;
			ConsoleDocument.ConsoleLine[] lines = document.getLines();
			for (int i = 0; i < lines.length; i++) {
				ConsoleDocument.ConsoleLine line = lines[i];
				doAppendLine(line.getType(), line.getLine());
			}
			document.clear();
		}
	}

	@Override
	public void doAppendLine(final LineType lineType, final String line) {
		Job appendJob = new Job(
				TernToolsUIMessages.TernRepositoryConsoleJob_name) {

			@Override
			protected IStatus run(IProgressMonitor monitor) {
				internalDoAppendLine(lineType, line);
				return Status.OK_STATUS;
			}
		};
		appendJob.setPriority(Job.LONG);
		appendJob.schedule();
	}

	private void internalDoAppendLine(LineType lineType, String line) {
		showConsole();
		synchronized (document) {
			if (visible) {
				streams[lineType.ordinal()].println(line);
			} else {
				document.appendConsoleLine(lineType, line);
			}
		}
	}

	private void showConsole() {
		show(false);
	}

	@Override
	protected void dispose() {
		// Here we can't call super.dispose() because we actually want the
		// partitioner to remain
		// connected, but we won't show lines until the console is added to the
		// console manager
		// again.

		// Called when console is removed from the console view
		synchronized (document) {
			visible = false;
		}
	}

	/**
	 * Show the console.
	 * 
	 * @param showNoMatterWhat
	 *            ignore preferences if <code>true</code>
	 */
	public void show(boolean showNoMatterWhat) {
		// showOnMessage = true;
		if (showNoMatterWhat || showOnMessage) {
			if (!visible) {
				TernRepositoryConsoleHelper.showConsole(this);
			} else {
				consoleManager.showConsoleView(this);
			}
		}

	}

	/**
	 * Used to notify this console of lifecycle methods <code>init()</code> and
	 * <code>dispose()</code>.
	 */
	public class MyLifecycle implements org.eclipse.ui.console.IConsoleListener {
		public void consolesAdded(IConsole[] consoles) {
			for (int i = 0; i < consoles.length; i++) {
				IConsole console = consoles[i];
				if (console == TernRepositoryConsole.this) {
					init();
				}
			}
		}

		public void consolesRemoved(IConsole[] consoles) {
			for (int i = 0; i < consoles.length; i++) {
				IConsole console = consoles[i];
				if (console == TernRepositoryConsole.this) {
					ConsolePlugin.getDefault().getConsoleManager()
							.removeConsoleListener(this);
					dispose();
				}
			}
		}
	}

	public static TernRepositoryConsole getConsole() {
		if (INSTANCE == null) {
			INSTANCE = new TernRepositoryConsole();
		}
		return INSTANCE;
	}
}
