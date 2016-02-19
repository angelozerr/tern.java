package tern.swing.rsyntaxtextarea.samples;

import java.awt.BorderLayout;
import java.io.File;
import java.io.IOException;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
import javax.swing.plaf.nimbus.NimbusLookAndFeel;

import org.fife.ui.autocomplete.AutoCompletion;
import org.fife.ui.autocomplete.LanguageAwareCompletionProvider;
import org.fife.ui.rsyntaxtextarea.RSyntaxTextArea;
import org.fife.ui.rsyntaxtextarea.SyntaxConstants;
import org.fife.ui.rtextarea.RTextScrollPane;

import tern.EcmaVersion;
import tern.ITernProject;
import tern.TernException;
import tern.TernResourcesManager;
import tern.repository.ITernRepository;
import tern.repository.TernRepository;
import tern.server.TernDef;
import tern.server.nodejs.NodejsTernServer;
import tern.server.nodejs.process.NodejsProcessManager;
import tern.server.nodejs.process.PrintNodejsProcessListener;

public class SwingNodeSample extends JFrame {

	private static final long serialVersionUID = 1L;
	private RSyntaxTextArea textArea;
	private NodejsTernServer server;

	public SwingNodeSample() throws IOException, TernException {
		createEditor();
		createServer();
		createCompletionProvider();
	}

	private static String getTernJavaRoot() {
		// the path to the tern.java source repository. You must change this to
		// your local configuration.
		return "../../../../tern.java";
	}

	private static ITernProject createTernProject() throws IOException {
		// Create tern repository.
		File ternBaseDir = new File(getTernJavaRoot(), "core/ternjs");
		if (!ternBaseDir.exists()) {
			throw new IllegalArgumentException(
					"The folder " + ternBaseDir.getCanonicalFile().getAbsolutePath() + " does not exist.");
		}
		ITernRepository repository = new TernRepository("ternjs", ternBaseDir);
		// Create tern project by setting the tern repository
		File projectDir = new File(".");
		ITernProject project = TernResourcesManager.getTernProject(projectDir);
		project.setEcmaVersion(EcmaVersion.ES5);
		project.setRepository(repository);
		return project;
	}

	private void createServer() throws IOException, TernException {
		ITernProject project = createTernProject();
		project.addLib(TernDef.ecma5);
		project.addLib(TernDef.browser);
		project.save();

		File nodejsTernBaseDir = new File(getTernJavaRoot(), "core/ternjs/node_modules/tern");
		NodejsProcessManager.getInstance().init(nodejsTernBaseDir);

		server = new NodejsTernServer(project);
		((NodejsTernServer) server).addProcessListener(PrintNodejsProcessListener.getInstance());
	}

	private void createEditor() {
		JPanel cp = new JPanel(new BorderLayout());

		textArea = new RSyntaxTextArea(20, 60);
		textArea.setSyntaxEditingStyle(SyntaxConstants.SYNTAX_STYLE_JAVASCRIPT);
		textArea.setAutoIndentEnabled(true);
		textArea.setAntiAliasingEnabled(true);
		textArea.setCodeFoldingEnabled(true);
		textArea.setMarkOccurrences(true);
		textArea.setUseFocusableTips(true);

		RTextScrollPane sp = new RTextScrollPane(textArea);
		cp.add(sp);

		setContentPane(cp);
		setTitle("Swing Node Sample");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		pack();
		setLocationRelativeTo(null);
	}

	private void createCompletionProvider() {
		JavaScriptCompletionProvider defaultProvider = new JavaScriptCompletionProvider(server);
		LanguageAwareCompletionProvider provider = new LanguageAwareCompletionProvider(defaultProvider);

		AutoCompletion ac = new AutoCompletion(provider);
		ac.setAutoActivationEnabled(true);
		ac.setAutoActivationDelay(0);
		ac.setAutoCompleteSingleChoices(false);
		ac.setShowDescWindow(true);
		ac.setParameterAssistanceEnabled(true);
		ac.install(textArea);
		textArea.setToolTipSupplier(provider);
	}

	public static void main(String[] args) throws IOException, TernException {
		try {
			UIManager.setLookAndFeel(NimbusLookAndFeel.class.getName());
		} catch (ClassNotFoundException | InstantiationException | IllegalAccessException
				| UnsupportedLookAndFeelException e) {
			e.printStackTrace();
		}

		SwingNodeSample sample = new SwingNodeSample();
		sample.setVisible(true);
	}
}
