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
package tern.eclipse.ide.ui.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.eclipse.core.runtime.Platform;
import org.eclipse.jface.internal.text.html.HTMLPrinter;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.swt.graphics.FontData;
import org.eclipse.swt.graphics.RGB;
import org.osgi.framework.Bundle;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.jface.text.HoverLocationListener;
import tern.server.protocol.completions.Parameter;
import tern.server.protocol.completions.TernCompletionItem;
import tern.utils.StringUtils;

/**
 * Provides a set of convenience methods for creating HTML info for tern content
 * assist and hover.
 *
 */
public class HTMLTernPrinter {

	/**
	 * Style sheets content.
	 */
	private static String fgStyleSheet;

	private static RGB colorInfoBackround = null;
	private static RGB colorInfoForeground = null;

	private HTMLTernPrinter() {
	}

	public static void setColorInfoBackround(RGB colorInfoBackround) {
		HTMLTernPrinter.colorInfoBackround = colorInfoBackround;
	}
	
	public static void setColorInfoForeground(RGB colorInfoForeground) {
		HTMLTernPrinter.colorInfoForeground = colorInfoForeground;
	}
	
	public static String getAdditionalProposalInfo(TernCompletionItem item,
			Boolean guess) {
		StringBuffer buffer = new StringBuffer();
		ImageDescriptor descriptor = TernUIPlugin.getTernDescriptorManager()
				.getImageDescriptor(item);
		startPage(buffer, getTitle(item), descriptor);
		// doc
		addDocContent(buffer, item.getDoc());
		startDefinitionList(buffer);
		// parameters
		addParametersContent(buffer, item.getParameters());
		// return type
		addReturnTypeContent(buffer, item.getJsType());
		// origin
		addOriginContent(buffer, item.getOrigin());
		// guess?
		addGuessContent(buffer, guess);
		// url
		addURLContent(buffer, item.getURL());
		endDefinitionList(buffer);
		endPage(buffer);
		return buffer.toString();
	}

	public static void addGuessContent(StringBuffer buffer, Boolean guess) {
		if (guess != null) {
			addDefinitionListItem(buffer, "Guess?", guess.toString());
		}
	}

	public static void addReturnTypeContent(StringBuffer buffer,
			String returnType) {
		if (!StringUtils.isEmpty(returnType)) {
			buffer.append("<dt><b>Returns:</b></dt>");
			buffer.append("<dd>");
			buffer.append("<code>");
			buffer.append(returnType);
			buffer.append("</code>");
			buffer.append("</dd>");
		}
	}

	public static void addParametersContent(StringBuffer buffer,
			List<Parameter> parameters) {
		if (parameters != null) {
			buffer.append("<dt><b>Parameters:</b></dt>");
			for (Parameter parameter : parameters) {
				buffer.append("<dd>");
				if (!parameter.isRequired()) {
					buffer.append("[");
				}
				buffer.append("<code>");
				buffer.append(parameter.getName());
				buffer.append("</code>");
				if (!parameter.isRequired()) {
					buffer.append("]");
				}
				buffer.append(" - ");
				buffer.append("<code>");
				buffer.append(parameter.getType());
				buffer.append("</code>");
				buffer.append("</dd>");
			}
		}
	}

	public static String getTitle(TernCompletionItem item) {
		String title = item.hasDisplayName() ? item.getDisplayName() : item.getSignature();
		StringBuilder buffer = new StringBuilder("<b>").append(
				title).append("</b>");
		return buffer.toString();
	}

	public static void addDocContent(StringBuffer buffer, String doc) {
		buffer.append("<p>");
		if (doc != null) {
			buffer.append(doc);
		}
		buffer.append("</p>");
	}

	public static void endPage(StringBuffer buffer) {
		HTMLPrinter
				.insertPageProlog(buffer, 0, colorInfoForeground, colorInfoBackround, HTMLTernPrinter.getStyleSheet());
		HTMLPrinter.addPageEpilog(buffer);
	}

	public static void addOriginContent(StringBuffer buffer, String origin) {
		addLinkContent(buffer, "Origin", new StringBuilder(
				HoverLocationListener.TERN_FILE_PROTOCOL).append(origin).toString(),
				origin);
	}

	public static void addDefinitionListItem(StringBuffer buffer, String name,
			String value) {
		if (!StringUtils.isEmpty(value)) {
			buffer.append("<dt><b>");
			buffer.append(name);
			buffer.append(":</b></dt>");
			buffer.append("<dd>");
			buffer.append(value);
			buffer.append("</dd>");
		}
	}

	public static void addDefinitionListItem(StringBuffer buffer, String name,
			Collection<String> values) {
		if (values != null && !values.isEmpty()) {
			addDefinitionListItem(buffer, name,
					Arrays.toString(values.toArray()));
		}
	}

	public static void addURLContent(StringBuffer buffer, String url) {
		if (!StringUtils.isEmpty(url)) {
			addLinkContent(buffer, "See", url, url);
		}
	}

	protected static void addLinkContent(StringBuffer buffer, String label,
			String linkHref, String linkLabel) {
		buffer.append("<dt><b>");
		buffer.append(label);
		buffer.append(":</b></dt>");
		buffer.append("<dd>");
		buffer.append("<a href=\"");
		buffer.append(linkHref);
		buffer.append("\" >");
		buffer.append(linkLabel);
		buffer.append("</a>");
		buffer.append("</dd>");
	}

	public static void startDefinitionList(StringBuffer buffer) {
		buffer.append("<dl>"); //$NON-NLS-1$
	}

	public static void endDefinitionList(StringBuffer buffer) {
		buffer.append("</dl>"); //$NON-NLS-1$
	}

	/**
	 * Returns the Javadoc hover style sheet with the current Javadoc font from
	 * the preferences.
	 * 
	 * @return the updated style sheet
	 * @since 3.4
	 */
	private static String getStyleSheet() {
		if (fgStyleSheet == null) {
			fgStyleSheet = loadStyleSheet("/TernHoverStyleSheet.css"); //$NON-NLS-1$
		}
		String css = fgStyleSheet;
		if (css != null) {
			FontData fontData = JFaceResources.getFontRegistry().getFontData(
					JFaceResources.DIALOG_FONT)[0];
			css = HTMLPrinter.convertTopLevelFont(css, fontData);
		}

		return css;
	}

	/**
	 * Loads and returns the style sheet associated with either Javadoc hover or
	 * the view.
	 * 
	 * @param styleSheetName
	 *            the style sheet name of either the Javadoc hover or the view
	 * @return the style sheet, or <code>null</code> if unable to load
	 * @since 3.4
	 */
	private static String loadStyleSheet(String styleSheetName) {
		Bundle bundle = Platform.getBundle(TernUIPlugin.PLUGIN_ID);
		URL styleSheetURL = bundle.getEntry(styleSheetName);
		if (styleSheetURL == null)
			return null;

		BufferedReader reader = null;
		try {
			reader = new BufferedReader(new InputStreamReader(
					styleSheetURL.openStream()));
			StringBuffer buffer = new StringBuffer(1500);
			String line = reader.readLine();
			while (line != null) {
				buffer.append(line);
				buffer.append('\n');
				line = reader.readLine();
			}

			FontData fontData = JFaceResources.getFontRegistry().getFontData(
					JFaceResources.DIALOG_FONT)[0];
			return HTMLPrinter.convertTopLevelFont(buffer.toString(), fontData);
		} catch (IOException ex) {
			Trace.trace(Trace.SEVERE, "Error while loading style sheets", ex);
			return ""; //$NON-NLS-1$
		} finally {
			try {
				if (reader != null)
					reader.close();
			} catch (IOException e) {
				// ignore
			}
		}
	}

	public static void startPage(StringBuffer buf, String title,
			ImageDescriptor descriptor) {
		int imageWidth = 16;
		int imageHeight = 16;
		int labelLeft = 20;
		int labelTop = 2;

		// buf.append("<p>");
		buf.append("<div style='word-wrap: break-word; position: relative; "); //$NON-NLS-1$

		String imageSrcPath = getImageURL(descriptor);
		if (imageSrcPath != null) {
			buf.append("margin-left: ").append(labelLeft).append("px; "); //$NON-NLS-1$ //$NON-NLS-2$
			buf.append("padding-top: ").append(labelTop).append("px; "); //$NON-NLS-1$ //$NON-NLS-2$
		}

		buf.append("'>"); //$NON-NLS-1$
		if (imageSrcPath != null) {
			
			String uri = HoverLocationListener.TERN_DEFINITION_PROTOCOL;
			buf.append("<a href=\"");
			buf.append(uri);
			buf.append("\" >");
			
			StringBuffer imageStyle = new StringBuffer(
					"border:none; position: absolute; "); //$NON-NLS-1$
			imageStyle.append("width: ").append(imageWidth).append("px; "); //$NON-NLS-1$ //$NON-NLS-2$
			imageStyle.append("height: ").append(imageHeight).append("px; "); //$NON-NLS-1$ //$NON-NLS-2$
			imageStyle.append("left: ").append(-labelLeft - 1).append("px; "); //$NON-NLS-1$ //$NON-NLS-2$

			// hack for broken transparent PNG support in IE 6, see
			// https://bugs.eclipse.org/bugs/show_bug.cgi?id=223900 :
			buf.append("<!--[if lte IE 6]><![if gte IE 5.5]>\n"); //$NON-NLS-1$
			String tooltip = "alt='" + TernUIMessages.TernHover_openDeclaration + "' "; //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$
			buf.append("<span ").append(tooltip).append("style=\"").append(imageStyle). //$NON-NLS-1$ //$NON-NLS-2$
					append("filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='").append(imageSrcPath).append("')\"></span>\n"); //$NON-NLS-1$ //$NON-NLS-2$
			buf.append("<![endif]><![endif]-->\n"); //$NON-NLS-1$

			buf.append("<!--[if !IE]>-->\n"); //$NON-NLS-1$
			buf.append("<img ").append(tooltip).append("style='").append(imageStyle).append("' src='").append(imageSrcPath).append("'/>\n"); //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$ //$NON-NLS-4$
			buf.append("<!--<![endif]-->\n"); //$NON-NLS-1$
			buf.append("<!--[if gte IE 7]>\n"); //$NON-NLS-1$
			buf.append("<img ").append(tooltip).append("style='").append(imageStyle).append("' src='").append(imageSrcPath).append("'/>\n"); //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$ //$NON-NLS-4$
			buf.append("<![endif]-->\n"); //$NON-NLS-1$
			// if (element != null) {
			
			buf.append("</a>"); //$NON-NLS-1$
			
			// }
		}
		buf.append(title);

		buf.append("</div>"); //$NON-NLS-1$
		buf.append("<hr />");
	}

	private static String getImageURL(ImageDescriptor descriptor) {
		if (descriptor == null) {
			return null;
		}
		String imageName = null;
		URL imageUrl = TernUIPlugin.getTernDescriptorManager().getImageURL(
				descriptor);
		if (imageUrl != null) {
			imageName = imageUrl.toExternalForm();
		}
		return imageName;
	}

}
