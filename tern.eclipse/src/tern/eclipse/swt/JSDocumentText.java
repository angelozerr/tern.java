package tern.eclipse.swt;

import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.widgets.Text;

import tern.DefaultResponseHandler;
import tern.Server;
import tern.doc.AbstractJSDocument;

public class JSDocumentText extends AbstractJSDocument {

	private final Text text;

	public JSDocumentText(String name, Server server, Text text) {
		super(name, server, false);
		this.text = text;
		text.addModifyListener(new ModifyListener() {

			@Override
			public void modifyText(ModifyEvent e) {
				getServer().sendDoc(JSDocumentText.this,
						new DefaultResponseHandler() {
					@Override
					public void onError(String error) {
					System.err.println(error);
					}
				});
				JSDocumentText.this.setChanged(true);
			}
		});
		super.setChanged(true);
		server.registerDoc(this);
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
