/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui;


import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.Region;

public class JavaWordFinder {

	private JavaWordFinder() {
	}

	public static IRegion findWord(IDocument document, int offset) {

		int start= -2;
		int end= -1;
		
		try {
			int pos= offset;
			char c;

			while (pos >= 0) {
				c= document.getChar(pos);
				if (!Character.isJavaIdentifierPart(c))
					break;
				--pos;
			}
			start= pos;

			pos= offset;
			int length= document.getLength();

			while (pos < length) {
				c= document.getChar(pos);
				if (!Character.isJavaIdentifierPart(c))
					break;
				++pos;
			}
			end= pos;

		} catch (BadLocationException x) {
		}

		if (start >= -1 && end > -1) {
			if (start == offset && end == offset)
				return new Region(offset, 0);
			else if (start == offset)
				return new Region(start, end - start);
			else
				return new Region(start + 1, end - start - 1);
		}

		return null;
	}
}
