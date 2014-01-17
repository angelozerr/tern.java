package tern.server.protocol.angular;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.angular.AngularType;
import tern.angular.protocol.completions.TernAngularCompletionItem;
import tern.angular.protocol.completions.TernAngularCompletionsQuery;
import tern.server.protocol.TernDoc;

/**
 * Tests with tern angular controller completion.
 * 
 */
public abstract class AbstractAngularControllerCompletionTest extends
		AbstractTernServerAngularTest {

	@Test
	public void completionWithModuleControllersAndBadModule()
			throws TernException {
		TernDoc doc = createDocForCompletionModuleControllers(null);
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector(
				server);
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 0);
	}

	@Test
	public void completionWithModuleControllersAndModule() throws TernException {
		TernDoc doc = createDocForCompletionModuleControllers("phonecatControllers");
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector(
				server);
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 2);
		TernAngularCompletionItem item = collector.get("PhoneListCtrl");
		Assert.assertNotNull(item);
		Assert.assertEquals("phonecatControllers", item.getModule());
		Assert.assertEquals("PhoneListCtrl", item.getName());
		Assert.assertEquals("fn($scope: $scope, Phone: Resource.prototype)",
				item.getType());
		Assert.assertEquals("myfile.js", item.getOrigin());
	}

	private TernDoc createDocForCompletionModuleControllers(String module) {
		String name = "myfile.js";

		String text = "var phonecatControllers = angular.module('phonecatControllers', [])";
		text += "\nphonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',";
		text += "\nfunction($scope, Phone) {";
		text += "\n$scope.phones = Phone.query();";
		text += "\n$scope.orderProp = 'age';";
		text += "\n}]);";

		text += "\nphonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',";
		text += "\nfunction($scope, $routeParams, Phone) {";
		text += "\n$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {";
		text += "\n$scope.mainImageUrl = phone.images[0];";
		text += "\n});";

		text += "\n$scope.setImage = function(imageUrl) {";
		text += "\n$scope.mainImageUrl = imageUrl;";
		text += "\n}";
		text += "\n}]);";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.controller);
		query.getScope().setModule(module);
		query.addFile("myfile.js");
		query.setExpression("Phone");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithGlobalControllers() throws TernException {
		TernDoc doc = createDocForGlobalControllers();
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector(
				server);
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 2);
		TernAngularCompletionItem item = collector.get("TodoCtrl");
		Assert.assertNotNull(item);
		Assert.assertEquals(null, item.getModule());
		Assert.assertEquals("TodoCtrl", item.getName());
		Assert.assertEquals("fn($scope: ?)", item.getType());
		Assert.assertEquals("myfile.js", item.getOrigin());
	}

	private TernDoc createDocForGlobalControllers() {
		String name = "myfile.js";
		String text = "function TodoCtrl($scope) {};";
		text += "\nfunction SomeCtrl($scope) {};";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.controller);
		query.addFile("myfile.js");
		query.setExpression("");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithGlobalControllersStartsWith()
			throws TernException {
		TernDoc doc = createDocForGlobalControllersStartsWith();
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector(
				server);
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernAngularCompletionItem item = collector.get("SomeCtrl");
		Assert.assertNotNull(item);
		Assert.assertEquals("SomeCtrl", item.getName());
		Assert.assertEquals("fn($scope: ?)", item.getType());
		Assert.assertEquals("myfile.js", item.getOrigin());
	}

	private TernDoc createDocForGlobalControllersStartsWith() {
		String name = "myfile.js";
		String text = "function TodoCtrl($scope) {};";
		text += "\nfunction SomeCtrl($scope) {};";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.controller);
		query.addFile("myfile.js");
		query.setExpression("S");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithGlobalControllersCheckFiles()
			throws TernException {

		server.addFile("myfile.js", "function TodoCtrl($scope) {};");
		server.addFile("myfile2.js", "function SomeCtrl($scope) {};");

		TernDoc doc = createDocForGlobalControllersCheckFiles();
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector(
				server);
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernAngularCompletionItem item = collector.get("TodoCtrl");
		Assert.assertNotNull(item);
		Assert.assertEquals(null, item.getModule());
		Assert.assertEquals("TodoCtrl", item.getName());
		Assert.assertEquals("fn($scope: ?)", item.getType());
		Assert.assertEquals("myfile.js", item.getOrigin());
	}

	private TernDoc createDocForGlobalControllersCheckFiles() {

		TernDoc doc = new TernDoc();

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.controller);
		query.addFile("myfile.js");
		query.setExpression("");

		doc.setQuery(query);
		return doc;
	}
}
