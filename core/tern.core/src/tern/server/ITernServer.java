package tern.server;

import java.io.IOException;

import tern.TernException;
import tern.doc.IJSDocument;
import tern.server.protocol.TernDoc;

public interface ITernServer {

	String getFile(String name);

	void addDef(ITernDef def) throws IOException;

	void addPlugin(ITernPlugin plugin) throws IOException;

	void addFile(String name, String text);

	void sendDoc(IJSDocument doc, IResponseHandler handler);

	void registerDoc(IJSDocument doc);

	void requestCompletion(IJSDocument doc, IResponseHandler handler);

	void request(TernDoc doc, IResponseHandler handler);

	void request(TernDoc doc, ITernCompletionCollector collector)
			throws TernException;

	boolean isDataAsJsonString();

	void setDataAsJsonString(boolean dataAsJsonString);

	boolean isDisposed();

	void dispose();

}
