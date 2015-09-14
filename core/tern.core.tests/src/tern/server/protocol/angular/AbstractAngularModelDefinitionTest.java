/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.protocol.angular;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.angular.AngularType;
import tern.angular.protocol.definition.TernAngularDefinitionQuery;
import tern.server.protocol.TernDoc;
import tern.server.protocol.definition.MockTernDefinitionCollector;

/**
 * Tests with tern angular module definition.
 * 
 */
public abstract class AbstractAngularModelDefinitionTest extends
		AbstractTernServerAngularTest {

	@Test
	public void todoText() throws TernException {

		TernDoc doc = createDocForDefinitionTodoText();
		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNotNull(collector.getFile());
		Assert.assertEquals("myfile.js", collector.getFile());
		Assert.assertNotNull(collector.getStart());
		Assert.assertEquals(216, collector.getStart().longValue());
		Assert.assertNotNull(collector.getEnd());
		Assert.assertEquals(224, collector.getEnd().longValue());
	}

	@Test
	public void todoTextDefinedInScopeToo() throws TernException {

		TernDoc doc = createDocForDefinitionTodoText();
		((TernAngularDefinitionQuery) doc.getQuery()).getScope().getProps()
				.add("todoText", "todoText");
		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNotNull(collector.getFile());
		Assert.assertEquals("myfile.js", collector.getFile());
		Assert.assertNotNull(collector.getStart());
		Assert.assertEquals(216, collector.getStart().longValue());
		Assert.assertNotNull(collector.getEnd());
		Assert.assertEquals(224, collector.getEnd().longValue());
	}

	@Test
	public void todoTextBeforeEnd() throws TernException {

		TernDoc doc = createDocForDefinitionTodoText();
		doc.getQuery().setEnd(8);

		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNotNull(collector.getFile());
		Assert.assertEquals("myfile.js", collector.getFile());
		Assert.assertNotNull(collector.getStart());
		Assert.assertEquals(216, collector.getStart().longValue());
		Assert.assertNotNull(collector.getEnd());
		Assert.assertEquals(224, collector.getEnd().longValue());
	}

	@Test
	public void todoTextAfterEnd() throws TernException {

		TernDoc doc = createDocForDefinitionTodoText();
		doc.getQuery().setEnd(9);

		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNull(collector.getFile());
	}

	private TernDoc createDocForDefinitionTodoText() {
		TernDoc doc = createFile();

		TernAngularDefinitionQuery query = new TernAngularDefinitionQuery(
				AngularType.model);
		query.addFile("myfile.js");
		query.getScope().getControllers().add("TodoCtrl");
		query.setExpression("todoText");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void todos() throws TernException {

		TernDoc doc = createDocForDefinitionTodos();
		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNotNull(collector.getFile());
		Assert.assertEquals("myfile.js", collector.getFile());
		Assert.assertNotNull(collector.getStart());
		Assert.assertEquals(35, collector.getStart().longValue());
		Assert.assertNotNull(collector.getEnd());
		Assert.assertEquals(40, collector.getEnd().longValue());
	}

	private TernDoc createDocForDefinitionTodos() {
		TernDoc doc = createFile();

		TernAngularDefinitionQuery query = new TernAngularDefinitionQuery(
				AngularType.model);
		query.addFile("myfile.js");
		query.getScope().getControllers().add("TodoCtrl");
		query.setExpression("todos.length");
		query.setEnd(2);
		doc.setQuery(query);
		return doc;
	}

	@Test
	public void todo() throws TernException {

		TernDoc doc = createDocForDefinitionTodo();
		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNotNull(collector.getFile());
		Assert.assertEquals("myfile.js", collector.getFile());
		Assert.assertNotNull(collector.getStart());
		Assert.assertEquals(172, collector.getStart().longValue());
		Assert.assertNotNull(collector.getEnd());
		Assert.assertEquals(206, collector.getEnd().longValue());
	}

	private TernDoc createDocForDefinitionTodo() {
		TernDoc doc = createFile();

		TernAngularDefinitionQuery query = new TernAngularDefinitionQuery(
				AngularType.model);
		query.addFile("myfile.js");
		query.getScope().getControllers().add("TodoCtrl");
		query.getScope().addRepeat("todo in todos");
		query.setExpression("todo.");
		query.setEnd(2);
		doc.setQuery(query);
		return doc;
	}

	@Test
	public void todoDone() throws TernException {

		TernDoc doc = createDocForDefinitionTodoDone();
		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNotNull(collector.getFile());
		Assert.assertEquals("myfile.js", collector.getFile());
		Assert.assertNotNull(collector.getStart());
		Assert.assertEquals(195, collector.getStart().longValue());
		Assert.assertNotNull(collector.getEnd());
		Assert.assertEquals(199, collector.getEnd().longValue());
	}

	private TernDoc createDocForDefinitionTodoDone() {
		TernDoc doc = createFile();

		TernAngularDefinitionQuery query = new TernAngularDefinitionQuery(
				AngularType.model);
		query.addFile("myfile.js");
		query.getScope().getControllers().add("TodoCtrl");
		query.getScope().addRepeat("todo in todos");
		query.setExpression("todo.done");
		query.setEnd(6);
		doc.setQuery(query);
		return doc;
	}

	private TernDoc createFile() {
		String name = "myfile.js";
		String text = "function TodoCtrl($scope) {\n" + "$scope.todos = ["
				+ "\n{text:'learn angular', done:true},"
				+ "\n{text:'build an angular app', done:false}];"
				+ "\n$scope.addTodo = function() {"
				+ "\n$scope.todos.push({text:$scope.todoText, done:false});"
				+ "\n$scope.todoText = '';" + "\n};" + "\n}";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null,  null);
		return doc;
	}

	@Test
	public void saveModule() throws TernException {

		TernDoc doc = createDocForDefinitionWithModule();
		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNotNull(collector.getFile());
		Assert.assertEquals("myfile.js", collector.getFile());
		Assert.assertNotNull(collector.getStart());
		Assert.assertEquals(85, collector.getStart().longValue());
		Assert.assertNotNull(collector.getEnd());
		Assert.assertEquals(89, collector.getEnd().longValue());
	}

	private TernDoc createDocForDefinitionWithModule() {
		TernDoc doc = createFileWithModule();

		TernAngularDefinitionQuery query = new TernAngularDefinitionQuery(
				AngularType.model);
		query.addFile("myfile.js");
		query.getScope().setModule("MyApp");
		query.getScope().getControllers().add("SomeCtrl");
		query.setExpression("save");
		query.setEnd(1);
		doc.setQuery(query);
		return doc;
	}

	private TernDoc createFileWithModule() {
		String name = "myfile.js";
		String text = "angular.module('MyApp', [])"
				+ "\n.controller('SomeCtrl', function($scope, $http) {"
				+ "\n$scope.save = function() {};"
				+ "\n$http. // <-- you'll have completions now" + "\n});";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null,  null);
		return doc;
	}
}
