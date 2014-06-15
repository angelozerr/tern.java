package tern.eclipse.ide.internal.ui.controls;

import org.eclipse.jface.viewers.CellEditor;
import org.eclipse.jface.viewers.ColumnViewer;
import org.eclipse.jface.viewers.EditingSupport;
import org.eclipse.jface.viewers.TextCellEditor;
import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.ui.viewers.MemberWrapper;
import tern.server.protocol.JsonHelper;

public class PathEditingSupport extends EditingSupport {

	private final TextCellEditor editor;

	public PathEditingSupport(ColumnViewer viewer) {
		super(viewer);
		Composite parent = (Composite) viewer.getControl();
		this.editor = new TextCellEditor(parent);
	}

	@Override
	protected CellEditor getCellEditor(Object element) {
		return editor;
	}

	@Override
	protected boolean canEdit(Object element) {
		return true;
	}

	@Override
	protected Object getValue(Object element) {
		return JsonHelper.getString(((MemberWrapper) element).getValue());
	}

	@Override
	protected void setValue(Object element, Object value) {
		MemberWrapper wrapper = ((MemberWrapper) element);
		wrapper.setValue(value.toString());
		getViewer().update(element, null);
	}

}
