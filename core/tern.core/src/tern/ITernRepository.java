package tern;

import java.io.File;

import tern.server.ITernModule;

/**
 * Tern repository is a base dir which contains the tern.js JS files :
 * 
 * <ul>
 * <li>bin folder</li>
 * <li>defs folder</li>
 * <li>plugin folder</li>
 * <li>node_modules folder</li>
 * </ul>
 *
 */
public interface ITernRepository {

	void refresh();

	File getTernFile();

	ITernModule[] getModules() throws TernException;
}
