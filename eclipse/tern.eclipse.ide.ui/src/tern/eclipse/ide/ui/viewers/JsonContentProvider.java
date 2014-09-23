package tern.eclipse.ide.ui.viewers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.eclipse.jface.viewers.IStructuredContentProvider;
import org.eclipse.jface.viewers.Viewer;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonObject.Member;

public class JsonContentProvider implements IStructuredContentProvider {

	private static final JsonContentProvider INSTANCE = new JsonContentProvider();

	public static JsonContentProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public void dispose() {
		// TODO Auto-generated method stub

	}

	@Override
	public void inputChanged(Viewer arg0, Object arg1, Object arg2) {
		// TODO Auto-generated method stub

	}

	@Override
	public Object[] getElements(Object element) {
		if (element instanceof JsonObject) {
			List<MemberWrapper> members = new ArrayList<MemberWrapper>();
			for (String name : ((JsonObject) element).names()) {
				members.add(new MemberWrapper((JsonObject) element, name));
			}
			return members.toArray(new MemberWrapper[0]);
		} else if (element instanceof JsonArray) {
			return ((JsonArray) element).values().toArray();
		}
		return null;
	}

}
