package tern.eclipse.ide.internal.ui.controls;

import org.eclipse.jface.viewers.CellEditor;
import org.eclipse.jface.viewers.ColumnViewer;
import org.eclipse.jface.viewers.EditingSupport;
import org.eclipse.jface.viewers.TextCellEditor;
import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.ui.viewers.MemberWrapper;

public class FilenameEditingSupport extends EditingSupport {

	private final TextCellEditor editor;

	public FilenameEditingSupport(ColumnViewer viewer) {
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
		return ((MemberWrapper) element).getName();
	}

	@Override
	protected void setValue(Object element, Object value) {
		MemberWrapper wrapper = ((MemberWrapper) element);
		wrapper.setName(value.toString());
		getViewer().update(element, null);
	}

}
