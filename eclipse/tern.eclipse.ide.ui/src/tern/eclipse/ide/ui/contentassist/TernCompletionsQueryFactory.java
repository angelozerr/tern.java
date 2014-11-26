package tern.eclipse.ide.ui.contentassist;

import org.eclipse.core.resources.ProjectScope;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IPreferencesService;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;

import tern.eclipse.ide.internal.ui.preferences.TernUIPreferenceConstants;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.server.protocol.completions.TernCompletionsQuery;

public class TernCompletionsQueryFactory {

	public static TernCompletionsQuery createQuery(String file, int pos) {
		TernCompletionsQuery query = new TernCompletionsQuery(file, pos);

		query.setTypes(true);
		query.setDocs(true);
		query.setUrls(true);
		query.setOrigins(true);
		query.setCaseInsensitive(true);
		query.setLineCharPositions(true);
		query.setExpandWordForward(false);

		IPreferencesService preferencesService = Platform
				.getPreferencesService();
		/*IScopeContext[] lookupOrder = new IScopeContext[] {
				new ProjectScope(project), new InstanceScope(),
				new DefaultScope() };

		generateAnonymousFunction = preferencesService
				.getBoolean(
						TernUIPlugin.getDefault().getBundle().getSymbolicName(),
						TernUIPreferenceConstants.GENERATE_ANONYMOUS_FUNCTION_CONTENT_ASSIST,
						true, lookupOrder);*/
		return query;
	}
}
