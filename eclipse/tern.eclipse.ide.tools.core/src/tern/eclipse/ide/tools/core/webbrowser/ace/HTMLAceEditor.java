package tern.eclipse.ide.tools.core.webbrowser.ace;

public class HTMLAceEditor implements tern.eclipse.ide.tools.core.generator.IGenerator
 {
  protected static String nl;
  public static synchronized HTMLAceEditor create(String lineSeparator)
  {
    nl = lineSeparator;
    HTMLAceEditor result = new HTMLAceEditor();
    nl = null;
    return result;
  }

  public final String NL = nl == null ? (System.getProperties().getProperty("line.separator")) : nl;
  protected final String TEXT_1 = "<!DOCTYPE html>" + NL + "<html>" + NL + "<head>" + NL + "\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />" + NL + "\t<title>Tern - Ace Editor</title>" + NL + "\t<style type=\"text/css\" media=\"screen\">" + NL + "\t    body {" + NL + "\t        overflow: hidden;" + NL + "\t    }" + NL + "\t    " + NL + "\t    #editor { " + NL + "\t        margin: 0;" + NL + "\t        position: absolute;" + NL + "\t        top: 0;" + NL + "\t        bottom: 0;" + NL + "\t        left: 0;" + NL + "\t        right: 0;" + NL + "\t    }" + NL + "  \t</style>" + NL + "\t<!-- Tern JS -->" + NL + "\t<script src=\"";
  protected final String TEXT_2 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_3 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_4 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_5 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_6 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_7 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_8 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_9 = "\"></script>\t" + NL + "\t";
  protected final String TEXT_10 = "<script src=\"";
  protected final String TEXT_11 = "\"></script>" + NL + "\t";
  protected final String TEXT_12 = "\t\t" + NL + "\t<!-- Ace -->" + NL + "\t<script src=\"";
  protected final String TEXT_13 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_14 = "\"></script>" + NL + "\t<!-- Ace & Tern -->" + NL + "\t<script src=\"";
  protected final String TEXT_15 = "\"></script>" + NL + "</head>" + NL + "<body>" + NL + "\t<pre id=\"editor\">";
  protected final String TEXT_16 = "</pre>" + NL + "\t";
  protected final String TEXT_17 = NL + "\t<script>" + NL + "\t    var langTools = ace.require(\"ace/ext/language_tools\");" + NL + "\t    var editor = ace.edit(\"editor\");    " + NL + "\t    editor.session.setMode(\"ace/mode/javascript\");" + NL + "\t    // enable autocompletion and snippets" + NL + "\t    editor.setOptions({" + NL + "\t        enableBasicAutocompletion: true," + NL + "\t        enableSnippets: false" + NL + "\t    });" + NL + "" + NL + "\t\t// Create tern server\t    " + NL + "  \t\tvar defs = ";
  protected final String TEXT_18 = ";" + NL + "  \t\tvar plugins = ";
  protected final String TEXT_19 = ";" + NL + "\t\tvar TernServer = ace.require(\"ace/tern/server\").TernServer;" + NL + "\t\tvar ternServer = new TernServer({defs: defs, plugins: plugins});" + NL + "\t\t    " + NL + "\t\t// Tern Completion" + NL + "\t\tlangTools.addCompleter(ternServer);" + NL + "\t\t" + NL + "\t\t// Tern Tooltip" + NL + "\t\tvar TernTooltip = ace.require(\"ace/tern/tern_tooltip\").TernTooltip;" + NL + "\t\teditor.ternTooltip = new TernTooltip(editor, ternServer);    \t        " + NL + "\t</script>\t" + NL + "</body>" + NL + "</html>";
  protected final String TEXT_20 = NL;

/* (non-javadoc)
    * @see IGenerator#generate(Object)
    */
public String generate(Object argument)
  {
    final StringBuffer stringBuffer = new StringBuffer();
     AceOptions options = (AceOptions)argument; 
    stringBuffer.append(TEXT_1);
    stringBuffer.append(options.resolveTern("node_modules/acorn/acorn.js") );
    stringBuffer.append(TEXT_2);
    stringBuffer.append(options.resolveTern("node_modules/acorn/acorn_loose.js") );
    stringBuffer.append(TEXT_3);
    stringBuffer.append(options.resolveTern("node_modules/acorn/util/walk.js") );
    stringBuffer.append(TEXT_4);
    stringBuffer.append(options.resolveTern("lib/signal.js") );
    stringBuffer.append(TEXT_5);
    stringBuffer.append(options.resolveTern("lib/tern.js") );
    stringBuffer.append(TEXT_6);
    stringBuffer.append(options.resolveTern("lib/def.js") );
    stringBuffer.append(TEXT_7);
    stringBuffer.append(options.resolveTern("lib/comment.js") );
    stringBuffer.append(TEXT_8);
    stringBuffer.append(options.resolveTern("lib/infer.js") );
    stringBuffer.append(TEXT_9);
     	
	tern.server.ITernPlugin[] ternPlugins = options.getTernPlugins();
	if (ternPlugins != null) { 
		tern.server.ITernPlugin plugin = null;
		for (int i = 0; i < ternPlugins.length; i++) {
			plugin = ternPlugins[i];
	
    stringBuffer.append(TEXT_10);
    stringBuffer.append(options.resolveTernPlugin("plugin/" + plugin.getName() + ".js") );
    stringBuffer.append(TEXT_11);
    			
		}		
	} 
	
    stringBuffer.append(TEXT_12);
    stringBuffer.append(options.resolve("build/src-min/ace.js") );
    stringBuffer.append(TEXT_13);
    stringBuffer.append(options.resolve("build/src-min/ext-language_tools.js") );
    stringBuffer.append(TEXT_14);
    stringBuffer.append(options.resolveTernAce("lib/tern-ace.js") );
    stringBuffer.append(TEXT_15);
    stringBuffer.append( options.getEditorContent() );
    stringBuffer.append(TEXT_16);
    stringBuffer.append(options.getEmbedJSONDefs() );
    stringBuffer.append(TEXT_17);
    stringBuffer.append(options.toJSONDefs() );
    stringBuffer.append(TEXT_18);
    stringBuffer.append(options.toJSONPlugins() );
    stringBuffer.append(TEXT_19);
    stringBuffer.append(TEXT_20);
    return stringBuffer.toString();
  }
}