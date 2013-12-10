package tern.eclipse.swt;

import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.widgets.Text;

import tern.doc.AbstractJSDocument;
import tern.doc.JSDocumentHelper;
import tern.server.ITernServer;

public class JSDocumentText extends AbstractJSDocument {

	private final Text text;

	public JSDocumentText(String name, ITernServer server, final Text text) {
		super(name, server, false);
		this.text = text;
		text.addModifyListener(new ModifyListener() {

			@Override
			public void modifyText(ModifyEvent e) {
				JSDocumentText.this.setChanged(true);
			}
		});
		setChanged(false);
		JSDocumentHelper.registerDoc(this, server);
	}

	@Override
	public String getValue() {
		return text.getText();
	}

	@Override
	public int getCursor(String s) {
		if ("end".equals(s)) {
			return text.getCaretPosition();
		}
		return 0;
	}

	@Override
	public boolean somethingSelected() {
		return false;
	}

}
