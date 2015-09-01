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
package tern.eclipse.jface.text;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.TextAttribute;
import org.eclipse.jface.text.rules.IToken;
import org.eclipse.jface.text.rules.ITokenScanner;
import org.eclipse.jface.text.rules.Token;

import tern.ITernProject;
import tern.TernException;
import tern.server.protocol.highlight.ITernHighlightCollector;
import tern.server.protocol.highlight.TernHighlightQuery;

/**
 * Abstract class which implement {@link ITokenScanner} which uses the tern
 * plugin https://github.com/katspaugh/tj-mode to collect JavaScript code
 * tokens.
 * 
 * This scanner uses acorn parser which is able to parse ECMAScript 5/6.
 *
 */
public abstract class TernTokenScanner implements ITokenScanner {

	private static final Comparator<TernToken> TERN_TOKEN_COMPARATOR = new Comparator<TernToken>() {
		@Override
		public int compare(TernToken t1, TernToken t2) {
			return (int) (t1.end - t2.end);
		}
	};

	private final List<TernToken> tokens = new ArrayList<TernToken>();
	private TernToken current;
	private int index;

	@Override
	public void setRange(IDocument document, int offset, int length) {
		this.tokens.clear();
		this.index = 0;

		// Call tern-highlight
		TernTokenList collector = new TernTokenList(offset, length);
		try {
			highlight(document, collector);
		} catch (Exception e) {
			e.printStackTrace();
		}

		// sort
		Collections.sort(collector, TERN_TOKEN_COMPARATOR);

		// fill with empty token
		TernToken lastToken = null;
		for (TernToken ternToken : collector) {
			if (lastToken != null) {
				tokens.add(new TernToken("", lastToken.end, ternToken.start, null));
			}
			tokens.add(ternToken);
			lastToken = ternToken;
		}
		if (lastToken != null) {
			tokens.add(new TernToken("", lastToken.end, (long) (length + offset), null));
		} else {
			tokens.add(new TernToken("", (long) offset, (long) (length + offset), null));
		}
	}

	private void highlight(IDocument document, TernTokenList collector)
			throws CoreException, BadLocationException, IOException, TernException {
		ITernProject ternProject = getTernProject(document);
		if (ternProject != null) {
			String text = document.get(collector.getOffset(), collector.getLength());
			TernHighlightQuery query = new TernHighlightQuery(text);
			ternProject.request(query, collector);
		}
	}

	@Override
	public IToken nextToken() {
		if (index < tokens.size()) {
			current = tokens.get(index);
			index++;
			return current;
		}
		return Token.EOF;
	}

	@Override
	public int getTokenOffset() {
		return current.getOffset();
	}

	@Override
	public int getTokenLength() {
		return current.getLength();
	}

	private class TernToken extends Token {
		public final String type;
		public final Long start;
		public final Long end;

		public TernToken(String type, Long start, Long end, TextAttribute attribute) {
			super(attribute);
			this.type = type;
			this.start = start;
			this.end = end;
		}

		public int getLength() {
			if (end.intValue() - start.intValue() < 0) {
				System.err.println("Arghhh!!!");
			}
			return end.intValue() - start.intValue();
		}

		public int getOffset() {
			return start.intValue();
		}
	}

	private class TernTokenList extends ArrayList<TernToken>implements ITernHighlightCollector {

		private final int offset;
		private final int length;

		public TernTokenList(int offset, int length) {
			this.offset = offset;
			this.length = length;
		}

		@Override
		public void higlight(String type, Long start, Long end) {
			TextAttribute attribute = getTextAttribute(type);
			super.add(new TernToken(type, start + offset, end + offset, attribute));
		}

		public int getOffset() {
			return offset;
		}

		public int getLength() {
			return length;
		}
	}

	protected abstract TextAttribute getTextAttribute(String type);

	protected abstract ITernProject getTernProject(IDocument document) throws CoreException;
}
