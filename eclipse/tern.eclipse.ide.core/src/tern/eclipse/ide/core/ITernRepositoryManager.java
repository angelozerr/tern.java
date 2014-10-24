package tern.eclipse.ide.core;

import java.util.Collection;

import org.eclipse.core.resources.IProject;

import tern.ITernRepository;

public interface ITernRepositoryManager {

	public static final String DEFAULT_REPOSITORY_NAME = "default";

	public static final String REPOSITORY_SEPARATOR = ";";
	
	Collection<ITernRepository> getRepositories();

	ITernRepository getRepository(String name);

	ITernRepository getRepository(IProject project);

	void setRepositories(Collection<ITernRepository> repositories);
}
