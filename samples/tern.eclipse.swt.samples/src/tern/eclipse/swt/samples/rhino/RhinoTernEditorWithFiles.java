package tern.eclipse.swt.samples.rhino;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.eclipse.jface.bindings.keys.KeyStroke;
import org.eclipse.jface.bindings.keys.ParseException;
import org.eclipse.jface.fieldassist.ContentProposalAdapter;
import org.eclipse.jface.fieldassist.TextContentAdapter;
import org.eclipse.jface.viewers.DoubleClickEvent;
import org.eclipse.jface.viewers.IDoubleClickListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.CTabFolder;
import org.eclipse.swt.custom.CTabItem;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

import tern.ITernProject;
import tern.TernException;
import tern.doc.IJSDocument;
import tern.eclipse.jface.fieldassist.TernContentProposalProvider;
import tern.eclipse.jface.viewers.TernLabelProvider;
import tern.eclipse.swt.JSDocumentText;
import tern.eclipse.swt.samples.FileTreeContentProvider;
import tern.eclipse.swt.samples.FileTreeLabelProvider;
import tern.eclipse.swt.samples.TernProjectFactory;
import tern.server.ITernServer;
import tern.server.TernDef;
import tern.server.TernPlugin;
import tern.server.rhino.RhinoTernServer;
import tern.utils.IOUtils;

public class RhinoTernEditorWithFiles {

	private CTabFolder tabFolder;
	private ITernServer server;
	private Map<String, CTabItem> tabItemsMap = new HashMap<String, CTabItem>();

	public static void main(String[] args) {
		RhinoTernEditorWithFiles editor = new RhinoTernEditorWithFiles();
		try {
			editor.createUI();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void createUI() throws TernException, IOException {

		ITernProject project = TernProjectFactory.create();
		project.addLib(TernDef.browser);
		project.addLib(TernDef.ecma5);
		
		this.server = new RhinoTernServer(project);
		
		Display display = new Display();
		Shell shell = new Shell(display);
		shell.setSize(500, 500);
		shell.setText("Tern SWT Eclipse");
		shell.setLayout(new GridLayout(2, true));

		final Button saveButton = new Button(shell, SWT.PUSH);
		saveButton.setText("Save");
		saveButton.setEnabled(false);
		GridData data = new GridData();
		data.horizontalSpan = 2;
		saveButton.setLayoutData(data);

		createTreeFiles(shell);
		createEditorsArea(shell);

		saveButton.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				// editor.setDirty(false);
			}
		});
		shell.open();
		while (!shell.isDisposed()) {
			if (!display.readAndDispatch())
				display.sleep();
		}
		display.dispose();
	}

	private void createTreeFiles(Composite parent) {
		Composite composite = new Composite(parent, SWT.NONE);
		composite.setLayoutData(new GridData(GridData.FILL_BOTH));
		composite.setLayout(new GridLayout(1, false));

		final TreeViewer tv = new TreeViewer(composite);
		tv.getTree().setLayoutData(new GridData(GridData.FILL_BOTH));
		tv.setContentProvider(new FileTreeContentProvider());
		tv.setLabelProvider(new FileTreeLabelProvider());

		tv.addDoubleClickListener(new IDoubleClickListener() {

			@Override
			public void doubleClick(DoubleClickEvent event) {
				if (event.getSelection().isEmpty()) {
					return;
				}
				if (event.getSelection() instanceof IStructuredSelection) {
					IStructuredSelection selection = (IStructuredSelection) event
							.getSelection();
					File file = (File) selection.getFirstElement();
					CTabItem tabItem = tabItemsMap.get(file.getPath());
					if (tabItem == null) {
						tabItem = createEditor(tabFolder, file, server);
						tabItemsMap.put(file.getPath(), tabItem);
					}
					tabFolder.setSelection(tabItem);
				}
			}
		});

		File baseDir = new File("scripts/terndemo");
		long start = System.currentTimeMillis();
		loadJS(baseDir);
		System.err.println("load JS=" + (System.currentTimeMillis() - start)
				+ "ms");

		tv.setInput(baseDir); // pass a non-null that will be
								// ignored
	}

	private void loadJS(File baseDir) {
		if (baseDir.isFile()) {
			try {
				if (baseDir.getName().endsWith(".uncompressed.js")) {
					long start = System.currentTimeMillis();
					server.addFile(baseDir.getPath(),
							IOUtils.toString(new FileInputStream(baseDir)));
					// server.addFile(baseDir.getPath(), null);
					System.err.println(baseDir.getPath() + " =>"
							+ (System.currentTimeMillis() - start) + "ms");
				}
			} catch (Exception e) {
				System.err.println(baseDir.getPath() + " =>ERROR");
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			if (!baseDir.getName().startsWith(".")
					&& !baseDir.getName().startsWith("test")) {
				for (File file : baseDir.listFiles()) {
					loadJS(file);
				}
			}
		}
	}

	private void createEditorsArea(Composite parent) {

		Composite composite = new Composite(parent, SWT.NONE);
		composite.setLayoutData(new GridData(GridData.FILL_BOTH));
		composite.setLayout(new GridLayout(1, false));

		this.tabFolder = new CTabFolder(composite, SWT.TOP | SWT.CLOSE);
		tabFolder.setBorderVisible(true);
		tabFolder.setLayoutData(new GridData(GridData.FILL_BOTH));
	}

	private CTabItem createEditor(CTabFolder tabFolder, File file,
			ITernServer server) {

		CTabItem tab = new CTabItem(tabFolder, SWT.NONE);
		tab.setText(file.getName());

		String js = "";
		try {
			js = readFile(file);
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		Text text = new Text(tabFolder, SWT.MULTI | SWT.BORDER | SWT.H_SCROLL
				| SWT.V_SCROLL);
		text.setText(js);

		tab.setControl(text);

		IJSDocument document = new JSDocumentText(file.getName(), server, text);

		// Les charactères qui déclenchent l'autocomplétion
		char[] autoActivationCharacters = new char[] { '.' };
		// La combinaison de touches qui déclenche l'autocomplétion
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

		return tab;
	}

	private String readFile(File file) throws IOException {
		return IOUtils.toString(new FileInputStream(file));
	}
}
