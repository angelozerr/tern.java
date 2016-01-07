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
package tern.angular.protocol.outline;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernException;
import tern.angular.AngularType;
import tern.angular.modules.AngularElement;
import tern.angular.modules.Controller;
import tern.angular.modules.Directive;
import tern.angular.modules.DirectiveValue;
import tern.angular.modules.Module;
import tern.server.TernPlugin;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.TernQuery;
import tern.server.protocol.outline.IJSNode;
import tern.server.protocol.outline.IJSNodeRoot;
import tern.server.protocol.outline.TernOutlineCollector;
import tern.server.protocol.outline.TernOutlineResultProcessor;
import tern.server.protocol.push.IMessageHandler;

/**
 * Angular outline provider.
 *
 */
public class AngularOutlineProvider extends TernOutlineCollector implements IMessageHandler {

	private final List<IAngularOutlineListener> listeners;
	private AngularOutline outline;

	public AngularOutlineProvider(ITernProject ternProject) {
		super(ternProject);
		this.listeners = new ArrayList<IAngularOutlineListener>();
		ternProject.on(AngularOutline.ANGULAR_MODEL_CHANGED_EVENT, this);
	}

	@Override
	protected IJSNodeRoot doCreateRoot() {
		if (outline == null) {
			outline = new AngularOutline(getTernProject());
		} else {
			outline.clear();
		}
		return outline;
	}

	public boolean init() throws IOException, TernException {
		if (outline == null) {
			outline = new AngularOutline(getTernProject());
			loadOutline();
			fireOutlineChanged();
			return false;
		}
		return true;
	}

	@Override
	public IJSNode createNode(String name, String type, String kind, String value, Long start, Long end, String file,
			IJSNode parent, Object jsonNode, IJSONObjectHelper helper) {
		AngularType angularType = AngularType.get(kind);
		if (angularType != AngularType.unknown) {
			switch (angularType) {
			case module:
				return new Module(name, start, end, file, parent);
			case controller:
				return new Controller(name, null, start, end, file, parent);
			case directive:
				List<String> tagNames = new ArrayList<String>();
				String restrict = null; // helper.getText(completion,
										// "restrict");
				DirectiveValue directiveValue = DirectiveValue.none;
				return new Directive(name, AngularType.model, null, tagNames, restrict, directiveValue, start, end,
						file, parent);
			default:
				return new AngularElement(name, angularType, start, end, file, parent);
			}
		}
		return super.createNode(name, type, kind, value, start, end, file, parent, jsonNode, helper);
	}

	public AngularOutline getOutline() throws IOException, TernException {
		/*
		 * if (init() && !getTernProject().hasPlugin(TernPlugin.push)) {
		 * loadOutline(); }
		 */
		return outline;
	}

	protected void fireOutlineChanged() {
		synchronized (listeners) {
			for (IAngularOutlineListener listener : listeners) {
				listener.changed(outline);
			}
		}
	}

	protected void loadOutline() throws IOException, TernException {
		TernQuery query = new AngularOutlineQuery();
		getTernProject().request(query, null, this);
	}

	public void refresh(ITernFile ternFile) throws IOException, TernException {
		ITernProject ternProject = getTernProject();
		if (ternProject.hasPlugin(TernPlugin.push)) {
			return;
		}
		TernQuery query = new AngularOutlineQuery();
		query.setFile(ternFile.getFileName());
		ternProject.request(query, ternFile, this);
	}

	@Override
	public void handleMessage(Object jsonObject, IJSONObjectHelper helper) {
		if (outline == null) {
			outline = new AngularOutline(getTernProject());
		}
		TernOutlineResultProcessor.INSTANCE.process(null, helper, jsonObject, this);
		fireOutlineChanged();
	}

	public void addAngularOutlineListener(IAngularOutlineListener listener) {
		synchronized (listeners) {
			if (!listeners.contains(listener)) {
				listeners.add(listener);
			}
		}
	}

	public void removeAngularOutlineListener(IAngularOutlineListener listener) {
		synchronized (listeners) {
			listeners.remove(listener);
		}
	}

	@Override
	public IJSNodeRoot getRoot() {
		try {
			return getOutline();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return super.getRoot();
	}

}
