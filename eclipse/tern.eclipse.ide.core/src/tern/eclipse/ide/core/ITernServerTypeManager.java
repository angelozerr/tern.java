package tern.eclipse.ide.core;


/**
 * Tern server type manager API.
 * 
 */
public interface ITernServerTypeManager {

	/**
	 * Returns an array of all known tern server types.
	 * <p>
	 * A new array is returned on each call, so clients may store or modify the
	 * result.
	 * </p>
	 * 
	 * @return the array of tern server types {@link ITernServerType}
	 */
	ITernServerType[] getTernServerTypes();

	/**
	 * Returns the tern server type with the given id, or <code>null</code> if
	 * none. This convenience method searches the list of known tern server
	 * types ({@link #getTernServerTypes()}) for the one with a matching tern
	 * server type id ({@link ITernServerType#getId()}). The id may not be null.
	 * 
	 * @param id
	 *            the tern server type id
	 * @return the tern server type, or <code>null</code> if there is no tern
	 *         server type with the given id
	 */
	ITernServerType findTernServerType(String id);

	void refresh();

}
