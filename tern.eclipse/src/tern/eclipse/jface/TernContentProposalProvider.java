package tern.eclipse.jface;
import java.util.ArrayList;
import java.util.List;

import org.eclipse.jface.fieldassist.ContentProposal;
import org.eclipse.jface.fieldassist.IContentProposal;
import org.eclipse.jface.fieldassist.IContentProposalProvider;
import org.mozilla.javascript.NativeObject;

import tern.DefaultResponseHandler;
import tern.Server;
import tern.TernException;
import tern.doc.IJSDocument;

public class TernContentProposalProvider implements IContentProposalProvider {

	private static final IContentProposal[] EMPTY = new IContentProposal[0];

	private final IJSDocument document;

	public TernContentProposalProvider(IJSDocument document) {
		this.document = document;
	}

	@Override
	public IContentProposal[] getProposals(String contents, int position) {
		Server server = document.getServer();
		DefaultResponseHandler response = new DefaultResponseHandler();
		server.requestCompletion(document, response, true);
		try {
			List<IContentProposal> proposals = new ArrayList<IContentProposal>();

			System.err.println(response.getDataAsJsonString());

			// ex:
			// {"start":{"line":1,"ch":0},"end":{"line":1,"ch":1},"completions":[{"name":"a","type":"[?]"}]}

			NativeObject data = response.getData();
			Double startCh = getCh(data, "start");
			Double endCh = getCh(data, "end");
			int pos = endCh.intValue() - startCh.intValue();
			List completions = (List) data.get("completions", data);
			for (Object object : completions) {
				proposals.add(createProposal((NativeObject) object, pos));
			}
			return proposals.toArray(EMPTY);
		} catch (TernException e) {
			e.printStackTrace();
		}
		return EMPTY;
	}

	private Double getCh(NativeObject data, String pos) {
		NativeObject loc = (NativeObject) data.get(pos, data);
		return (Double) loc.get("ch", loc);
	}

	protected IContentProposal createProposal(NativeObject completion, int pos) {
		String name = completion.get("name", completion).toString();
		String type = completion.get("type", completion).toString();
		return new ContentProposal(name.substring(pos, name.length()), name, name
				+ " - " + type);
	}

}
