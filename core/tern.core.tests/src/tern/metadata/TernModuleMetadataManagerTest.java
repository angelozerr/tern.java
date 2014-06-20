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
