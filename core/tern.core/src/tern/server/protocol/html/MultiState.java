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
package tern.server.protocol.html;

import java.util.ArrayList;
import java.util.List;

/**
 * {@link IState} implementation with several {@link ScriptTagRegion}.
 *
 */
class MultiState implements IState {

	private final List<IState> states;
	private IState currentState;

	public MultiState(ScriptTagRegion[] tagRegions) {
		this.states = new ArrayList<IState>(tagRegions.length);
		for (int i = 0; i < tagRegions.length; i++) {
			states.add(new State(tagRegions[i]));
		}
		reset();
	}

	@Override
	public Region update(char c) {
		Region region = null;
		if (currentState != null) {
			region = currentState.update(c);
		} else {
			Region current = null;
			for (IState state : states) {
				current = state.update(c);
				if (current != null) {
					currentState = state;
					region = current;
					break;
				}
			}
		}
		return region;
	}

	@Override
	public boolean isNextRegionToFindType(RegionType type) {
		return currentState != null ? currentState.isNextRegionToFindType(type)
				: false;
	}

	@Override
	public void reset() {
		currentState = null;
		for (IState state : states) {
			state.reset();
		}
	}
}