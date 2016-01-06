/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
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
import tern.angular.protocol.type.TernAngularTypeQuery;
import tern.server.protocol.TernDoc;
import tern.server.protocol.type.MockTernTypeCollector;

/**
 * Tests with tern angular module Type.
 * 
 */
public abstract class AbstractAngularModelTypeTest extends
		AbstractTernServerAngularTest {

	@Test
	public void todoText() throws TernException {

		TernDoc doc = createDocForTypeTodoText();
		MockTernTypeCollector collector = new MockTernTypeCollector();
		server.request(doc, collector);

		Assert.assertEquals("todoText", collector.getName());
		Assert.assertEquals("string", collector.getType());
		// Assert.assertEquals("myfile.js", collector.getOrigin());
	}

	@Test
	public void todoTextDefinedInScopeToo() throws TernException {

		TernDoc doc = createDocForTypeTodoText();
		((TernAngularTypeQuery) doc.getQuery()).getScope().getProps()
				.add("todoText", "todoText");
		MockTernTypeCollector collector = new MockTernTypeCollector();
		server.request(doc, collector);

		Assert.assertEquals("todoText", collector.getName());
		Assert.assertEquals("string", collector.getType());
		// Assert.assertEquals("myfile.js", collector.getOrigin());
	}

	@Test
	public void todoTextBeforeEnd() throws TernException {

		TernDoc doc = createDocForTypeTodoText();
		doc.getQuery().setEnd(8);

		MockTernTypeCollector collector = new MockTernTypeCollector();
		server.request(doc, collector);

		Assert.assertEquals("todoText", collector.getName());
		Assert.assertEquals("string", collector.getType());
		// Assert.assertEquals("myfile.js", collector.getOrigin());
	}

	@Test
	public void todoTextAfterEnd() throws TernException {

		TernDoc doc = createDocForTypeTodoText();
		doc.getQuery().setEnd(9);

		MockTernTypeCollector collector = new MockTernTypeCollector();
		server.request(doc, collector);

		Assert.assertNull(collector.getName());
	}

	private TernDoc createDocForTypeTodoText() {
		TernDoc doc = createFile();

		TernAngularTypeQuery query = new TernAngularTypeQuery(AngularType.model);
		query.getScope().getControllers().add("TodoCtrl");
		query.setExpression("todoText");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void todos() throws TernException {

		TernDoc doc = createDocForTypeTodos();
		MockTernTypeCollector collector = new MockTernTypeCollector();
		server.request(doc, collector);

		Assert.assertEquals("todos", collector.getName());
		Assert.assertEquals("[{done: bool, text: string}]", collector.getType());
		Assert.assertEquals("myfile.js", collector.getOrigin());
	}

	private TernDoc createDocForTypeTodos() {
		TernDoc doc = createFile();

		TernAngularTypeQuery query = new TernAngularTypeQuery(AngularType.model);
		query.getScope().getControllers().add("TodoCtrl");
		query.setExpression("todos.length");
		query.setEnd(2);
		doc.setQuery(query);
		return doc;
	}

	@Test
	public void todo() throws TernException {

		TernDoc doc = createDocForTypeTodo();
		MockTernTypeCollector collector = new MockTernTypeCollector();
		server.request(doc, collector);

		Assert.assertEquals("todo", collector.getName());
		Assert.assertEquals("{done, text}", collector.getType());
		Assert.assertEquals("myfile.js", collector.getOrigin());
	}

	private TernDoc createDocForTypeTodo() {
		TernDoc doc = createFile();

		TernAngularTypeQuery query = new TernAngularTypeQuery(AngularType.model);
		query.getScope().getControllers().add("TodoCtrl");
		query.getScope().addRepeat("todo in todos");
		query.setExpression("todo.");
		query.setEnd(2);
		doc.setQuery(query);
		return doc;
	}

	@Test
	public void todoDone() throws TernException {

		TernDoc doc = createDocForTypeTodoDone();
		MockTernTypeCollector collector = new MockTernTypeCollector();
		server.request(doc, collector);

		Assert.assertEquals("done", collector.getName());
		Assert.assertEquals("bool", collector.getType());
		// Assert.assertEquals("myfile.js", collector.getOrigin());
	}

	private TernDoc createDocForTypeTodoDone() {
		TernDoc doc = createFile();

		TernAngularTypeQuery query = new TernAngularTypeQuery(AngularType.model);
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

		TernDoc doc = createDocForTypeWithModule();
		MockTernTypeCollector collector = new MockTernTypeCollector();
		server.request(doc, collector);

		Assert.assertEquals("save", collector.getName());
		Assert.assertEquals("fn()", collector.getType());
		Assert.assertEquals("myfile.js", collector.getOrigin());
	}

	private TernDoc createDocForTypeWithModule() {
		TernDoc doc = createFileWithModule();

		TernAngularTypeQuery query = new TernAngularTypeQuery(AngularType.model);
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
