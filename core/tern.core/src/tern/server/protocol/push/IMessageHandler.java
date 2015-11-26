package tern.server.protocol.push;

import tern.server.protocol.IJSONObjectHelper;

/**
 * Message handler API coming from the tern server.
 * 
 * @see https://github.com/angelozerr/tern-push
 *
 */
public interface IMessageHandler {

	/**
	 * Handle the given message.
	 * 
	 * @param jsonObject
	 *            JSON object.
	 * @param helper
	 *            JSON helper to visit the given JSON object.
	 */
	void handleMessage(Object jsonObject, IJSONObjectHelper helper);
}
