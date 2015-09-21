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
package tern.metadata;

import java.io.File;
import java.util.Collection;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class TernModuleMetadataManagerTest {

	private TernModuleMetadataManager manager;
	
	@Before
	public void init() {
		manager = new TernModuleMetadataManager(new File("../ternjs"));
	}

	@Test
	public void metadataExists() {
		TernModuleMetadata metadata = manager
				.getMetadata("jquery");
		Assert.assertNotNull(metadata);
		Assert.assertEquals("jquery", metadata.getName());
		Assert.assertEquals("jQuery", metadata.getLabel());
	}

	@Test
	public void jQueryDependencies() {
		TernModuleMetadata metadata = manager
				.getMetadata("jquery");
		Assert.assertNotNull(metadata);
		Assert.assertEquals("jquery", metadata.getName());
		Collection<String> dependencies = metadata.getDependencies(null);
		Assert.assertNotNull(dependencies);
		Assert.assertEquals(2, dependencies.size());
		Assert.assertTrue(dependencies.contains("ecma5"));
		Assert.assertTrue(dependencies.contains("browser"));
	}

	@Test
	public void AlloyUIDependencies() {
		TernModuleMetadata metadata = manager
				.getMetadata("aui");
		Assert.assertNotNull(metadata);
		Assert.assertEquals("aui", metadata.getName());
		Assert.assertEquals("AlloyUI", metadata.getLabel());
		Collection<String> dependencies = metadata.getDependencies("2.0.x");
		Assert.assertNotNull(dependencies);
		Assert.assertEquals(3, dependencies.size());
		Assert.assertTrue(dependencies.contains("ecma5"));
		Assert.assertTrue(dependencies.contains("browser"));
		Assert.assertTrue(dependencies.contains("yui3"));
	}

	@Test
	public void ECMADependencies() {
		TernModuleMetadata metadata = manager
				.getMetadata("ecma");
		Assert.assertNotNull(metadata);
		Assert.assertEquals("ecma", metadata.getName());
		Assert.assertEquals("ECMAScript", metadata.getLabel());

		Collection<String> dependencies = metadata.getDependencies("5");
		Assert.assertNotNull(dependencies);
		Assert.assertEquals(0, dependencies.size());

		dependencies = metadata.getDependencies("6");
		Assert.assertNotNull(dependencies);
		Assert.assertEquals(1, dependencies.size());
		Assert.assertTrue(dependencies.contains("ecma5"));
	}

	@Test
	public void ECMARequiredDependencies() {
		TernModuleMetadata metadata = manager
				.getMetadata("ecma");
		Assert.assertNotNull(metadata);
		Assert.assertEquals("ecma", metadata.getName());

		Collection<String> ecma5Dependencies = metadata
				.getRequiredDependencies("5");
		Assert.assertNotNull(ecma5Dependencies);
		Assert.assertEquals(0, ecma5Dependencies.size());

		Collection<String> ecma6Dependencies = metadata
				.getRequiredDependencies("6");
		Assert.assertNotNull(ecma6Dependencies);
		Assert.assertEquals(1, ecma6Dependencies.size());
		Assert.assertTrue(ecma6Dependencies.contains("ecma5"));
	}
}
