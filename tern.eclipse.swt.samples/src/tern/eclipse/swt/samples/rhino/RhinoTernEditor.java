package tern.eclipse.swt.samples.rhino;

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

import tern.doc.IJSDocument;
import tern.eclipse.jface.rhino.RhinoTernContentProposalProvider;
import tern.eclipse.swt.JSDocumentText;
import tern.server.ITernServer;
import tern.server.TernDef;
import tern.server.rhino.RhinoTernServer;

public class RhinoTernEditor {

	public static void main(String[] args) {
		RhinoTernEditor editor = new RhinoTernEditor();
		try {
			editor.createUI();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void createUI() throws IOException {

		ITernServer server = new RhinoTernServer();
		server.addDef(TernDef.browser);
		server.addDef(TernDef.ecma5);

		Display display = new Display();
		Shell shell = new Shell(display);
		shell.setSize(500, 500);
		shell.setText("Tern SWT Eclipse");
		shell.setLayout(new GridLayout());

		final Button saveButton = new Button(shell, SWT.PUSH);
		saveButton.setText("Save");
		saveButton.setEnabled(false);
		saveButton.setLayoutData(new GridData());

		// Tu crées ton text
		Text text = new Text(shell, SWT.MULTI | SWT.BORDER);
		text.setText("var a = [];\na.");
		IJSDocument document = new JSDocumentText("myjseditor.js", server, text);

		// Les charactères qui déclenchent l'autocomplétion
		char[] autoActivationCharacters = new char[] { '.' };
		// La combinaison de touches qui déclenche l'autocomplétion
		KeyStroke keyStroke = null;
		try {
			keyStroke = KeyStroke.getInstance("Ctrl+Space");
		} catch (ParseException e) {
			e.printStackTrace();
		}
		// La vraie chose !
		ContentProposalAdapter adapter = new ContentProposalAdapter(text,
				new TextContentAdapter(), new RhinoTernContentProposalProvider(
						document), keyStroke, autoActivationCharacters);
		// adapter.setLabelProvider(TernLabelProvider.getInstance());
		text.setLayoutData(new GridData(GridData.FILL_BOTH));
		// Text textField = new Text(shell, SWT.BORDER | SWT.MULTI);
		// new AutoCompleteField(
		// textField,
		// new TextContentAdapter(),
		// new String[] { "autocomplete option 1", "autocomplete option 2" });
		//
		// textField.setLayoutData(new GridData(GridData.FILL_BOTH));

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
		display.dispose();
	}

}
