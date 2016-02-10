package tern.server.protocol.lint;

import tern.server.protocol.IJSONObjectHelper;

public class TernLintResultHelper {

	private static final String MESSAGE_FIELD = "message";
	private static final String MESSAGE_ID_FIELD = "id";
	private static final String FILE_FIELD = "file";
	private static final String LINE_NUMBER_FIELD = "lineNumber";
	private static final String TO_FIELD = "to";
	private static final String FROM_FIELD = "from";
	private static final String FIX_FIELD = "fix";
	private static final String SEVERITY_FIELD = "severity";
	private static final String TEXT_FIELD = "text";

	private TernLintResultHelper() {
	}

	public static String getMessage(Object messageObject, TernLintQuery query, IJSONObjectHelper helper) {
		return query.formatMessage(helper.getText(messageObject, MESSAGE_FIELD));
	}

	public static String getMessageId(Object messageObject, IJSONObjectHelper helper) {
		return helper.getText(messageObject, MESSAGE_ID_FIELD);
	}

	public static String getFile(Object messageObject, IJSONObjectHelper helper) {
		return helper.getText(messageObject, FILE_FIELD);
	}

	public static String getSeverity(Object messageObject, IJSONObjectHelper helper) {
		return helper.getText(messageObject, SEVERITY_FIELD);
	}

	public static Long getStart(Object messageObject, IJSONObjectHelper helper) {
		return helper.getCh(messageObject, FROM_FIELD);
	}

	public static Long getEnd(Object messageObject, IJSONObjectHelper helper) {
		return helper.getCh(messageObject, TO_FIELD);
	}

	public static Long getLine(Object messageObject, IJSONObjectHelper helper) {
		return helper.getLong(messageObject, LINE_NUMBER_FIELD);
	}

	public static Fix getFix(Object messageObject, TernLintQuery query, IJSONObjectHelper helper) {
		Object f = helper.getObject(messageObject, FIX_FIELD);
		if (f == null) {
			return null;
		}
		Long start = getStart(f, helper);
		Long end = getEnd(f, helper);
		String text = helper.getText(f, TEXT_FIELD);
		return new Fix(getMessageId(messageObject, helper), start, end, text, query.getLinter());
	}

}
