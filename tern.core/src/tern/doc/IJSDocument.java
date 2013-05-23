package tern.doc;

import tern.Server;

public interface IJSDocument {

	String getName();

	boolean isChanged();

	void setChanged(boolean changed);

	String getValue();

	int getCursor(String s);

	boolean somethingSelected();

	Server getServer();
}
