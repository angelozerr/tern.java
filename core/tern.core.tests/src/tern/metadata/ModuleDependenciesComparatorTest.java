package tern.metadata;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import tern.server.ITernModule;
import tern.server.TernPlugin;

public class ModuleDependenciesComparatorTest {

	@Before
	public void init() {
		TernModuleMetadataManager.getInstance().init(new File("../tern.core"));
	}

	@Test
	public void sort() {
		// AlloyUI depends on YUI3, aui2 must be loaded after yui3.
		List<ITernModule> modules = new ArrayList<ITernModule>();
		modules.add(TernPlugin.aui15);
		modules.add(TernPlugin.yui3);

		Collections.sort(modules, ModuleDependenciesComparator.getInstance());

		Assert.assertEquals(TernPlugin.yui3, modules.get(0));
		Assert.assertEquals(TernPlugin.aui15, modules.get(1));
	}
	
	@Test
	public void sortSeveral() {
		// AlloyUI depends on YUI3, aui2 must be loaded after yui3.
		List<ITernModule> modules = new ArrayList<ITernModule>();
		modules.add(TernPlugin.aui15);
		modules.add(TernPlugin.liferay);
		modules.add(TernPlugin.yui3);

		Collections.sort(modules, ModuleDependenciesComparator.getInstance());

		Assert.assertEquals(TernPlugin.yui3, modules.get(0));
		Assert.assertEquals(TernPlugin.liferay, modules.get(1));
		Assert.assertEquals(TernPlugin.aui15, modules.get(2));
	}
}
