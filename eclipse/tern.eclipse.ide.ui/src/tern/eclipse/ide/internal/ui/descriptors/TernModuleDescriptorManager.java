/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.ui.descriptors;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionDelta;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.IRegistryChangeEvent;
import org.eclipse.core.runtime.IRegistryChangeListener;
import org.eclipse.core.runtime.Platform;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.ImageData;
import org.eclipse.swt.graphics.ImageLoader;
import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.internal.ui.controls.TernModuleOptionsPanel;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.descriptors.ITernModuleDescriptorManager;
import tern.eclipse.ide.ui.descriptors.ITernModuleImage;
import tern.eclipse.ide.ui.descriptors.options.ITernModuleOptionFactory;
import tern.eclipse.jface.images.TernImagesRegistry;
import tern.server.ITernModule;
import tern.server.protocol.completions.TernCompletionItem;

/**
 * Tern descriptor manager.
 *
 */
public class TernModuleDescriptorManager implements
		ITernModuleDescriptorManager, IRegistryChangeListener {

	private static final String EXTENSION_TERN_MODULE_DESCRIPTORS = "ternModuleDescriptors";

	private static final TernModuleDescriptorManager INSTANCE = new TernModuleDescriptorManager();

	private static final String IMAGE_DIR = "tern-images"; //$NON-NLS-1$

	// cached copy of all tern module images
	private Map<String, ITernModuleImage> ternModuleImages;
	// cached copy of all tern module images
	private Map<String, ITernModuleOptionFactory> ternModuleOptionFactories;

	private boolean registryListenerIntialized;

	private HashMap<ImageDescriptor, URL> fURLMap;
	private final File fTempDir;
	private int fImageCount;

	public static TernModuleDescriptorManager getManager() {
		return INSTANCE;
	}

	public TernModuleDescriptorManager() {
		this.registryListenerIntialized = false;
		fURLMap = new HashMap<ImageDescriptor, URL>();
		fTempDir = getTempDir();
		fImageCount = 0;
	}

	@Override
	public void registryChanged(final IRegistryChangeEvent event) {
		IExtensionDelta[] deltas = event.getExtensionDeltas(
				TernUIPlugin.PLUGIN_ID, EXTENSION_TERN_MODULE_DESCRIPTORS);
		if (deltas != null) {
			for (IExtensionDelta delta : deltas)
				handleTernDescriptorDelta(delta);
		}
	}

	@Override
	public Image getImage(ITernModule module) {
		return TernImagesRegistry.getImage(module);
	}

	@Override
	public ImageDescriptor getImageDescriptor(ITernModule module) {
		return TernImagesRegistry.getImageDescriptor(module);
	}
	
	@Override
	public Composite createOptionsPanel(Composite parent, ITernModule module,
			IProject project) {
		return new TernModuleOptionsPanel(parent, module, project);
	}

	@Override
	public ITernModuleImage getTernModuleImage(String id) {
		if (ternModuleImages == null)
			loadTernDescriptors();
		return ternModuleImages.get(id);
	}

	@Override
	public ITernModuleOptionFactory getTernModuleOptionFactory(String id) {
		if (ternModuleOptionFactories == null)
			loadTernDescriptors();
		return ternModuleOptionFactories.get(id);
	}

	/**
	 * Load the Nodejs installs.
	 */
	private synchronized void loadTernDescriptors() {
		if (ternModuleImages != null)
			return;

		Trace.trace(Trace.EXTENSION_POINT,
				"->- Loading .ternModuleDescriptors extension point ->-");

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		IConfigurationElement[] cf = registry.getConfigurationElementsFor(
				TernUIPlugin.PLUGIN_ID, EXTENSION_TERN_MODULE_DESCRIPTORS);
		Map<String, ITernModuleOptionFactory> optionFactories = new HashMap<String, ITernModuleOptionFactory>();
		Map<String, ITernModuleImage> images = new HashMap<String, ITernModuleImage>();
		addTernDescriptors(cf, images, optionFactories);
		addRegistryListenerIfNeeded();
		ternModuleImages = images;
		ternModuleOptionFactories = optionFactories;

		Trace.trace(Trace.EXTENSION_POINT,
				"-<- Done loading .ternModuleDescriptors extension point -<-");
	}

	/**
	 * Load the Nodejs installs.
	 * 
	 * @param optionFactories
	 */
	private synchronized void addTernDescriptors(IConfigurationElement[] cf,
			Map<String, ITernModuleImage> images,
			Map<String, ITernModuleOptionFactory> optionFactories) {
		for (IConfigurationElement ce : cf) {
			try {
				if ("optionFactory".equals(ce.getName())) {
					String id = ce.getAttribute("id");
					ITernModuleOptionFactory factory = (ITernModuleOptionFactory) ce
							.createExecutableExtension("class");
					optionFactories.put(id, factory);
				} else if ("image".equals(ce.getName())) {
					TernModuleImage ternDescriptor = new TernModuleImage(ce);
					images.put(ternDescriptor.getId(), ternDescriptor);
				}
				Trace.trace(Trace.EXTENSION_POINT, "  Loaded ternDescriptor: "
						+ ce.getAttribute("id"));
			} catch (Throwable t) {
				Trace.trace(Trace.SEVERE, "  Could not load ternDescriptor: "
						+ ce.getAttribute("id"), t);
			}
		}
	}

	protected void handleTernDescriptorDelta(IExtensionDelta delta) {
		if (ternModuleImages == null) // not loaded yet
			return;

		IConfigurationElement[] cf = delta.getExtension()
				.getConfigurationElements();

		Map<String, ITernModuleOptionFactory> optionFactories = new HashMap<String, ITernModuleOptionFactory>();
		Map<String, ITernModuleImage> images = new HashMap<String, ITernModuleImage>();
		if (delta.getKind() == IExtensionDelta.ADDED) {
			addTernDescriptors(cf, images, optionFactories);
		} else {
			// int size = list.size();
			// TernModuleImage[] st = new TernModuleImage[size];
			// int size2 = cf.length;
			//
			// for (int i = 0; i < size; i++) {
			// for (int j = 0; j < size2; j++) {
			// if (st[i].getId().equals(cf[j].getAttribute("id"))) {
			// st[i].dispose();
			// list.remove(st[i]);
			// }
			// }
			// }
		}
		ternModuleImages = images;
		ternModuleOptionFactories = optionFactories;
	}

	private void addRegistryListenerIfNeeded() {
		if (registryListenerIntialized)
			return;

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		registry.addRegistryChangeListener(this, TernUIPlugin.PLUGIN_ID);
		registryListenerIntialized = true;
	}

	public void initialize() {

	}

	public void destroy() {
		Platform.getExtensionRegistry().removeRegistryChangeListener(this);
		if (fTempDir != null) {
			delete(fTempDir);
		}
		fURLMap = null;
	}

	@Override
	public Image getImage(TernCompletionItem item) {
		// Retrieve the JS type (boolean, array, string, number, or fn).
		String jsType = TernImagesRegistry.getJSType(item, true);
		// Retrieve the origin name (ex : yui instead of using yui3)
		ITernModule module = item.getTernModule();
		return TernImagesRegistry.getImage(jsType, module);
	}

	@Override
	public ImageDescriptor getImageDescriptor(TernCompletionItem item) {
		// Retrieve the JS type (boolean, array, string, number, or fn).
		String jsType = TernImagesRegistry.getJSType(item, true);
		// Retrieve the origin name (ex : yui instead of using yui3)
		ITernModule module = item.getTernModule();
		return TernImagesRegistry.getImageDescriptor(jsType, module);
	}

	private File getTempDir() {
		try {
			File imageDir = TernUIPlugin.getDefault().getStateLocation()
					.append(IMAGE_DIR).toFile();
			if (imageDir.exists()) {
				// has not been deleted on previous shutdown
				delete(imageDir);
			}
			if (!imageDir.exists()) {
				imageDir.mkdir();
			}
			if (!imageDir.isDirectory()) {
				Trace.trace(
						Trace.SEVERE,
						"Failed to create image directory " + imageDir.toString()); //$NON-NLS-1$
				return null;
			}
			return imageDir;
		} catch (IllegalStateException e) {
			// no state location
			return null;
		}
	}

	private void delete(File file) {
		if (file.isDirectory()) {
			File[] listFiles = file.listFiles();
			for (int i = 0; i < listFiles.length; i++) {
				delete(listFiles[i]);
			}
		}
		file.delete();
	}

	public URL getImageURL(ImageDescriptor descriptor) {
		if (fTempDir == null)
			return null;

		URL url = fURLMap.get(descriptor);
		if (url != null)
			return url;

		File imageFile = getNewFile();
		ImageData imageData = descriptor.getImageData();
		if (imageData == null) {
			return null;
		}

		ImageLoader loader = new ImageLoader();
		loader.data = new ImageData[] { imageData };
		loader.save(imageFile.getAbsolutePath(), SWT.IMAGE_PNG);

		try {
			url = imageFile.toURI().toURL();
			fURLMap.put(descriptor, url);
			return url;
		} catch (MalformedURLException e) {
			Trace.trace(Trace.SEVERE, "Failed to create image directory ", e); //$NON-NLS-1$
		}
		return null;
	}

	private File getNewFile() {
		File file;
		do {
			file = new File(fTempDir, String.valueOf(getImageCount()) + ".png"); //$NON-NLS-1$
		} while (file.exists());
		return file;
	}

	private synchronized int getImageCount() {
		return fImageCount++;
	}

}
