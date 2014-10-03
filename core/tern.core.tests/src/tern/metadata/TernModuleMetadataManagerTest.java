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
package tern.metadata;

import java.io.File;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class TernModuleMetadataManagerTest {

	@Before
	public void init() {
		TernModuleMetadataManager.getInstance().init(new File("../tern.core"));
	}

	@Test
	public void metadataExists() {
		TernModuleMetadata metadata = TernModuleMetadataManager.getInstance()
				.getMetadata("jquery");
		Assert.assertNotNull(metadata);
	}
}
