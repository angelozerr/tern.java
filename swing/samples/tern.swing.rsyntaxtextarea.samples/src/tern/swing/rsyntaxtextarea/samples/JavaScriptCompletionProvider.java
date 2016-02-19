package tern.swing.rsyntaxtextarea.samples;

import java.awt.Point;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JOptionPane;
import javax.swing.text.BadLocationException;
import javax.swing.text.JTextComponent;

import org.fife.ui.autocomplete.AbstractCompletionProvider;
import org.fife.ui.autocomplete.BasicCompletion;
import org.fife.ui.autocomplete.Completion;
import org.fife.ui.autocomplete.CompletionCellRenderer;
import org.fife.ui.autocomplete.CompletionProvider;
import org.fife.ui.autocomplete.FunctionCompletion;
import org.fife.ui.autocomplete.ParameterizedCompletion;
import org.fife.ui.autocomplete.VariableCompletion;

import tern.TernException;
import tern.server.ITernServer;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.completions.TernCompletionItem;
import tern.server.protocol.completions.TernCompletionProposalRec;
import tern.server.protocol.completions.TernCompletionsQuery;

public class JavaScriptCompletionProvider extends AbstractCompletionProvider {

	private String prefix;
	private ITernServer server;
	private List<Completion> _completions;

	public JavaScriptCompletionProvider(ITernServer server) {
		this.server = server;
		setAutoActivationRules(true, ".");
		setParameterizedCompletionParams('(', ",", ')');
		setListCellRenderer(new CompletionCellRenderer());
	}

	@Override
	public String getAlreadyEnteredText(JTextComponent comp) {
		computeCompletions(comp);
		return prefix == null ? "" : prefix;
	}

	@Override
	public List<Completion> getCompletions(JTextComponent comp) {
		return getCompletionsAtOffset(comp, comp.getCaretPosition());
	}

	@Override
	public List<Completion> getCompletionsAt(JTextComponent comp, Point p) {
		return null;
	}

	private List<Completion> getCompletionsAtOffset(JTextComponent comp, int offset) {
		return _completions;
	}

	@Override
	public List<ParameterizedCompletion> getParameterizedCompletions(JTextComponent tc) {
		// TODO: is this better?
		return new ArrayList<>();
	}

	private void computeCompletions(JTextComponent comp) {
		_completions = new ArrayList<>();

		prefix = null;

		int offset = comp.getCaretPosition();

		if (offset < 0 || offset > comp.getDocument().getLength()) {
			return;
		}

		queryCompletions(comp, new ITernCompletionCollector() {

			@Override
			public void addProposal(TernCompletionProposalRec proposal, Object completion,
					IJSONObjectHelper jsonManager) {

				TernCompletionItem serverCompl = new TernCompletionItem(proposal);

				JavaScriptCompletionProvider provider = JavaScriptCompletionProvider.this;

				if (prefix == null) {
					try {
						prefix = comp.getDocument().getText(proposal.start, proposal.end - proposal.start);
					} catch (BadLocationException e) {
						e.printStackTrace();
						JOptionPane.showMessageDialog(null, e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
					}
				}

				BasicCompletion compl;
				if (serverCompl.isFunction()) {
					FunctionCompletion func = new JavaScriptFunctionCompletion(provider, serverCompl);
					compl = func;
				} else {
					String type = serverCompl.getJsType();
					for (char c : type.toCharArray()) {
						if (!Character.isJavaIdentifierPart(c)) {
							type = "Object";
							break;
						}
					}
					VariableCompletion var = new VariableCompletion(provider, serverCompl.getName(), type);
					compl = var;
				}
				compl.setRelevance(0);
				compl.setShortDescription(serverCompl.getDoc());
				compl.setSummary(serverCompl.getDoc());
				_completions.add(compl);
			}
		});
	}

	private void queryCompletions(JTextComponent comp, ITernCompletionCollector collector) {
		int offset = comp.getCaretPosition();
		String content = comp.getText();

		String filename = "source.js";
		TernCompletionsQuery query = new TernCompletionsQuery(filename, Integer.valueOf(offset));
		query.setDocs(true);
		query.setTypes(true);
		query.setGuess(false);
		query.setCaseInsensitive(false);
		query.setOrigins(false);
		query.setUrls(false);

		// query.set("sort", false);
		// query.set("includeKeywords", true);

		TernDoc doc = new TernDoc(query);
		doc.addFile(filename, content, null, null);
		try {
			server.request(doc, collector);
		} catch (TernException e) {
			e.printStackTrace();
			JOptionPane.showMessageDialog(null, e.getMessage(), "Tern", JOptionPane.INFORMATION_MESSAGE);
		}
	}

	static class JavaScriptFunctionCompletion extends FunctionCompletion {

		private TernCompletionItem _serverCompl;

		public JavaScriptFunctionCompletion(CompletionProvider provider, TernCompletionItem serverCompl) {
			super(provider, serverCompl.getName(), serverCompl.getJsType());
			_serverCompl = serverCompl;

			List<Parameter> list = new ArrayList<>();
			List<tern.server.protocol.completions.Parameter> params = serverCompl.getParameters();
			if (params != null) {
				for (tern.server.protocol.completions.Parameter param : params) {
					Parameter complParam = new Parameter(param.getType(), param.getName());
					list.add(complParam);
				}
			}
			setParams(list);
		}

		@Override
		public String getShortDescription() {
			return _serverCompl.getDoc();
		}

		@Override
		public String getDefinitionString() {
			return _serverCompl.getText();
		}

		@Override
		public String getReplacementText() {
			return _serverCompl.getName();
		}
	}
}
