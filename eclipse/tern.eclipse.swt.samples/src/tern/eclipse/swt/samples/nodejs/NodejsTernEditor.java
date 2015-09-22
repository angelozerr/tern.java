package tern.eclipse.swt.samples.nodejs;

import java.io.File;
import java.io.IOException;

import org.eclipse.jface.bindings.keys.KeyStroke;
import org.eclipse.jface.bindings.keys.ParseException;
import org.eclipse.jface.fieldassist.ContentProposalAdapter;
import org.eclipse.jface.fieldassist.TextContentAdapter;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

import tern.EcmaVersion;
import tern.ITernProject;
import tern.TernException;
import tern.TernResourcesManager;
import tern.doc.IJSDocument;
import tern.eclipse.jface.TernLabelProvider;
import tern.eclipse.jface.fieldassist.TernContentProposalProvider;
import tern.eclipse.swt.JSDocumentText;
import tern.eclipse.swt.samples.TernProjectFactory;
import tern.server.ITernServer;
import tern.server.LoggingInterceptor;
import tern.server.TernDef;
import tern.server.nodejs.NodejsTernServer;
import tern.server.nodejs.process.NodejsProcessManager;
import tern.server.nodejs.process.PrintNodejsProcessListener;

public class NodejsTernEditor {

	public static void main(String[] args) {
		NodejsTernEditor editor = new NodejsTernEditor();
		try {
			editor.createUI();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void createUI() throws TernException, IOException,
			InterruptedException {

		ITernProject project = TernProjectFactory.create();
		project.addLib(TernDef.browser);
		project.save();
		
		File nodejsTernBaseDir = new File("../../core/ternjs/node_modules/tern");
		NodejsProcessManager.getInstance().init(nodejsTernBaseDir);

		ITernServer server = new NodejsTernServer(project);
		((NodejsTernServer) server).addInterceptor(LoggingInterceptor
				.getInstance());
		((NodejsTernServer) server)
				.addProcessListener(PrintNodejsProcessListener.getInstance());

		Display display = new Display();
		Shell shell = new Shell(display);
		shell.setSize(500, 500);
		shell.setText("Tern SWT Eclipse");
		shell.setLayout(new GridLayout());

		final Button saveButton = new Button(shell, SWT.PUSH);
		saveButton.setText("Save");
		saveButton.setEnabled(false);
		saveButton.setLayoutData(new GridData());

		// Tu cr�es ton text
		Text text = new Text(shell, SWT.MULTI | SWT.BORDER);
		text.setText("var a = [];\na.");
		IJSDocument document = new JSDocumentText("myjseditor.js", server, text);

		// Les charact�res qui d�clenchent l'autocompl�tion
		char[] autoActivationCharacters = new char[] { '.' };
		// La combinaison de touches qui d�clenche l'autocompl�tion
		KeyStroke keyStroke = null;
		try {
			keyStroke = KeyStroke.getInstance("Ctrl+Space");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		ContentProposalAdapter adapter = new ContentProposalAdapter(text,
				new TextContentAdapter(), new TernContentProposalProvider(
						document), keyStroke, autoActivationCharacters);
		adapter.setLabelProvider(TernLabelProvider.getInstance());
		text.setLayoutData(new GridData(GridData.FILL_BOTH));

		saveButton.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				// editor.setDirty(false);
			}
		});
		shell.open();
		text.setFocus();
		while (!shell.isDisposed()) {
			if (!display.readAndDispatch())
				display.sleep();
		}
		server.dispose();
		display.dispose();
	}

}
