package tern.metadata;

import java.io.File;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class TernFacetMetadataManagerTest {

	@Before
	public void init() {
		TernFacetMetadataManager.getInstance().init(new File("../tern.core"));
	}

	@Test
	public void metadataExists() {
		TernFacetMetadata metadata = TernFacetMetadataManager.getInstance()
				.getMetadata("jquery");
		Assert.assertNotNull(metadata);
	}
}
