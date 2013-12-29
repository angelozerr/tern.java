package tern.angular.protocol;

import java.io.IOException;

import org.json.simple.JSONArray;
import org.w3c.dom.Attr;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;

import tern.TernFileManager;
import tern.angular.AngularType;
import tern.angular.modules.Directive;
import tern.angular.modules.IDirectiveProvider;
import tern.server.protocol.TernDoc;

public class HTMLTernAngularHelper {

	public static <T> TernDoc createDoc(Node element,
			IDirectiveProvider provider, T file,
			TernFileManager<T> fileManager, TernAngularQuery query)
			throws IOException {

		populateScope(element, provider, query);

		TernDoc doc = new TernDoc(query);

		// Update TernDoc#addFile
		JSONArray files = query.getFiles();
		fileManager.updateFiles(element, file, doc, files);

		return doc;

	}

	public static void populateScope(Node element, IDirectiveProvider provider,
			TernAngularQuery query) {
		TernAngularScope scope = query.getScope();
		populateScope(element, scope, provider, query.getAngularType());
	}

	public static void populateScope(Node element, TernAngularScope scope,
			IDirectiveProvider provider, AngularType angularType) {
		switch (angularType) {
		case module:
			// do nothing;
			break;
		case controller:
			// find controller
			populateScope(scope, element, provider, false);
			break;
		case model:
		case directiveRepeat:
			// find model
			populateScope(scope, element, provider, true);
			break;
		}

	}

	private static void populateScope(TernAngularScope scope, Node element,
			IDirectiveProvider provider, boolean populateController) {
		if (element == null || element.getNodeType() == Node.DOCUMENT_NODE) {
			return;
		}
		NamedNodeMap attributes = element.getAttributes();
		if (attributes != null) {
			Attr node = null;
			for (int i = 0; i < attributes.getLength(); i++) {
				node = (Attr) attributes.item(i);
				Directive directive = provider.getAngularDirective(node);
				if (directive != null) {
					switch (directive.getType()) {
					case module:
						String module = ((Attr) node).getValue();
						scope.setModule(module);
						return;
					case controller:
						if (populateController) {
							String controller = ((Attr) node).getValue();
							scope.addController(controller);
						}
						break;
					case model:
						String model = ((Attr) node).getValue();
						scope.addModel(model);
						break;
					case directiveRepeat:
						String expression = ((Attr) node).getValue();
						scope.addRepeat(expression);
						break;
					default:
						break;
					}
				}
			}
		}
		Node parent = element.getPreviousSibling();
		if (parent == null)
			parent = element.getParentNode();
		populateScope(scope, parent, provider, populateController);
	}

}
