package tern.server.nodejs;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONObject;

import tern.TernProject;
import tern.doc.IJSDocument;
import tern.server.IResponseHandler;
import tern.server.ITernServer;
import tern.server.TernDef;
import tern.server.TernPlugin;
import tern.server.nodejs.process.NodejsProcess;
import tern.server.nodejs.process.NodejsProcessAdapter;
import tern.server.nodejs.process.NodejsProcessListener;
import tern.server.nodejs.process.NodejsProcessManager;
import tern.server.protocol.TernCompletionQuery;
import tern.server.protocol.TernDoc;

public class NodejsTernServer implements ITernServer {

	private final TernProject project;

	private String baseURL;

	private List<IInterceptor> interceptors;

	private NodejsProcess process;
	private List<NodejsProcessListener> listeners;

	private long timeout = 1000;

	private final NodejsProcessListener listener = new NodejsProcessAdapter() {

		@Override
		public void onStop(NodejsProcess server) {
			NodejsTernServer.this.baseURL = null;
			NodejsTernServer.this.process = null;
		}

	};

	public NodejsTernServer(File projectDir, int port) {
		this(new TernProject(projectDir), port);
	}

	public NodejsTernServer(TernProject project, int port) {
		this.project = project;
		this.baseURL = computeBaseURL(port);
	}

	public NodejsTernServer(TernProject project) {
		this(project, NodejsProcessManager.getInstance().create(
				project.getProjectDir()));
	}

	public NodejsTernServer(TernProject project, NodejsProcess process) {
		this.project = project;
		this.process = process;
		process.addProcessListener(listener);
	}

	private String computeBaseURL(Integer port) {
		return new StringBuilder("http://localhost:").append(port).append("/")
				.toString();
	}

	@Override
	public String getFile(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addDef(TernDef def) throws IOException {
		project.addLib(def.name());
		project.save();
	}

	@Override
	public void addPlugin(TernPlugin plugin) throws IOException {
		project.addPlugin(plugin);
		project.save();
	}

	@Override
	public void addFile(String name, String text) {
		// TODO Auto-generated method stub

	}

	@Override
	public void sendDoc(IJSDocument doc, IResponseHandler handler) {
		TernDoc t = new TernDoc();
		t.addFile(doc.getName(), doc.getValue(), null);
		try {
			JSONObject json = TernProtocolHelper.makeRequest(getBaseURL(), t,
					false, interceptors, "sendDoc", this);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public void registerDoc(IJSDocument doc) {
		TernDoc t = new TernDoc();
		t.addFile(doc.getName(), doc.getValue(), null);
		try {
			JSONObject json = TernProtocolHelper.makeRequest(getBaseURL(), t,
					false, interceptors, "registerDoc", this);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public void requestCompletion(IJSDocument doc, IResponseHandler handler,
			boolean dataAsJson) {

		TernDoc t = new TernDoc();

		TernCompletionQuery query = new TernCompletionQuery();
		query.setTypes(true);
		// query.setDocs(true);
		query.setUrls(true);
		query.setEnd(doc.getCursor("end"));
		query.setLineCharPositions(true);
		t.setQuery(query);

		boolean changed = doc.isChanged();
		if (changed) {
			// the js doc has changed since last completion, reparse the js doc.
			query.setFile("#0");
			t.addFile(doc.getName(), doc.getValue(), null);
		} else {
			// non changes, the js doc must not reparsed.
			query.setFile(doc.getName());
		}
		request(t, handler, dataAsJson);
		doc.setChanged(false);

	}

	@Override
	public void request(TernDoc doc, IResponseHandler handler, boolean dataAsJson) {
		try {
			JSONObject json = TernProtocolHelper.makeRequest(getBaseURL(), doc,
					false, interceptors, "requestCompletion", this);
			handler.onSuccess(json, dataAsJson ? json.toJSONString() : null);
		} catch (Exception e) {
			handler.onError(e.getMessage());
		}
	}

	public TernProject getProject() {
		return project;
	}

	public void addInterceptor(IInterceptor interceptor) {
		if (interceptors == null) {
			interceptors = new ArrayList<IInterceptor>();
		}
		interceptors.add(interceptor);
	}

	public String getBaseURL() throws InterruptedException, IOException {
		if (baseURL == null) {
			int port = getProcess().start(timeout);
			this.baseURL = computeBaseURL(port);
		}
		return baseURL;
	}

	private NodejsProcess getProcess() {
		if (process != null) {
			return process;
		}
		process = NodejsProcessManager.getInstance().create(
				project.getProjectDir());
		return process;
	}

	public void addProcessListener(NodejsProcessListener listener) {
		if (listeners == null) {
			listeners = new ArrayList<NodejsProcessListener>();
		}
		listeners.add(listener);
		if (process != null) {
			process.addProcessListener(listener);
		}
	}

	public void removeProcessListener(NodejsProcessListener listener) {
		if (listeners != null && listener != null) {
			listeners.remove(listener);
		}
		if (process != null) {
			process.removeProcessListener(listener);
		}
	}

}
