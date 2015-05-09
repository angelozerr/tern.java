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
package tern.eclipse.jface.images;

import org.eclipse.core.runtime.Assert;
import org.eclipse.jface.resource.CompositeImageDescriptor;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.swt.graphics.ImageData;
import org.eclipse.swt.graphics.Point;

/**
 * 
 * Tern composuet image descriptor used to merge tern module icon (YUI, AUI,
 * Angular, etc) with JavaScript type (boolean, string, function, number,
 * array).
 *
 */
public class TernCompositeImageDescriptor extends CompositeImageDescriptor {

	private static final Point SMALL_SIZE = new Point(16, 16);

	private ImageDescriptor fBaseImage;
	private String typeKey;
	private Point fSize;

	public TernCompositeImageDescriptor(ImageDescriptor baseImage,
			String typeKey) {
		this(baseImage, typeKey, SMALL_SIZE);
	}

	/**
	 * Creates a new TernCompositeImageDescriptor.
	 * 
	 * @param baseImage
	 *            an image descriptor used as the base image
	 * @param flags
	 *            flags indicating which adornments are to be rendered. See
	 *            {@link #setAdornments(int)} for valid values.
	 * @param size
	 *            the size of the resulting image
	 */
	public TernCompositeImageDescriptor(ImageDescriptor baseImage,
			String typeKey, Point size) {
		fBaseImage = baseImage;
		Assert.isNotNull(fBaseImage);
		this.typeKey = typeKey;
		// Assert.isTrue(fFlags >= 0);
		fSize = size;
		Assert.isNotNull(fSize);
	}

	@Override
	protected void drawCompositeImage(int width, int height) {
		ImageData bg = getImageData(fBaseImage);
		drawImage(bg, 0, 0);

		drawBottomRight();
	}

	private void drawBottomRight() {
		Point size = getSize();
		Point pos = new Point(size.x, size.y);

		addBottomRightImage(
				TernImagesRegistry.getImageDescriptor(TernImagesRegistry.getOvr(typeKey)), pos);
	}

	private void addBottomRightImage(ImageDescriptor desc, Point pos) {
		ImageData data = getImageData(desc);
		int x = pos.x - data.width;
		int y = pos.y - data.height;
		if (x >= 0 && y >= 0) {
			drawImage(data, x, y);
			pos.x = x;
		}
	}

	@Override
	protected Point getSize() {
		return fSize;
	}

	private ImageData getImageData(ImageDescriptor descriptor) {
		ImageData data = descriptor.getImageData(); // see bug 51965:
													// getImageData can return
													// null
		if (data == null) {
			data = DEFAULT_IMAGE_DATA;
			//		JavaScriptPlugin.logErrorMessage("Image data not available: " + descriptor.toString()); //$NON-NLS-1$
		}
		return data;
	}

}
