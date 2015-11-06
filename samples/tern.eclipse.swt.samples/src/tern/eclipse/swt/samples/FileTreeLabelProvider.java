package tern.eclipse.swt.samples;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.ILabelProviderListener;
import org.eclipse.jface.viewers.LabelProviderChangedEvent;
import org.eclipse.swt.graphics.Image;

/**
 * This class provides the labels for the file tree
 */

public class FileTreeLabelProvider implements ILabelProvider {
	// The listeners
	private List listeners;

	// Images for tree nodes
	private Image file;

	private Image dir;

	// Label provider state: preserve case of file names/directories
	boolean preserveCase;

	/**
	 * Constructs a FileTreeLabelProvider
	 */
	public FileTreeLabelProvider() {
		// Create the list to hold the listeners
		listeners = new ArrayList();
		preserveCase = true;
		// Create the images
		try {
			file = new Image(null, new FileInputStream("images/file.gif"));
			dir = new Image(null, new FileInputStream("images/directory.gif"));
		} catch (FileNotFoundException e) {
			// Swallow it; we'll do without images
		}
	}

	/**
	 * Sets the preserve case attribute
	 * 
	 * @param preserveCase
	 *            the preserve case attribute
	 */
	public void setPreserveCase(boolean preserveCase) {
		this.preserveCase = preserveCase;

		// Since this attribute affects how the labels are computed,
		// notify all the listeners of the change.
		LabelProviderChangedEvent event = new LabelProviderChangedEvent(this);
		for (int i = 0, n = listeners.size(); i < n; i++) {
			ILabelProviderListener ilpl = (ILabelProviderListener) listeners
					.get(i);
			ilpl.labelProviderChanged(event);
		}
	}

	/**
	 * Gets the image to display for a node in the tree
	 * 
	 * @param arg0
	 *            the node
	 * @return Image
	 */
	public Image getImage(Object arg0) {
		// If the node represents a directory, return the directory image.
		// Otherwise, return the file image.
		return ((File) arg0).isDirectory() ? dir : file;
	}

	/**
	 * Gets the text to display for a node in the tree
	 * 
	 * @param arg0
	 *            the node
	 * @return String
	 */
	public String getText(Object arg0) {
		// Get the name of the file
		String text = ((File) arg0).getName();

		// If name is blank, get the path
		if (text.length() == 0) {
			text = ((File) arg0).getPath();
		}

		// Check the case settings before returning the text
		return preserveCase ? text : text.toUpperCase();
	}

	/**
	 * Adds a listener to this label provider
	 * 
	 * @param arg0
	 *            the listener
	 */
	public void addListener(ILabelProviderListener arg0) {
		listeners.add(arg0);
	}

	/**
	 * Called when this LabelProvider is being disposed
	 */
	public void dispose() {
		// Dispose the images
		if (dir != null)
			dir.dispose();
		if (file != null)
			file.dispose();
	}

	/**
	 * Returns whether changes to the specified property on the specified
	 * element would affect the label for the element
	 * 
	 * @param arg0
	 *            the element
	 * @param arg1
	 *            the property
	 * @return boolean
	 */
	public boolean isLabelProperty(Object arg0, String arg1) {
		return false;
	}

	/**
	 * Removes the listener
	 * 
	 * @param arg0
	 *            the listener to remove
	 */
	public void removeListener(ILabelProviderListener arg0) {
		listeners.remove(arg0);
	}
}
