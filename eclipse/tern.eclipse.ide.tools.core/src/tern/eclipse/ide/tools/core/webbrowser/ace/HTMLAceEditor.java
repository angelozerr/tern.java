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
  protected final String TEXT_2 = "\"></script>" + NL + "\t<script src=\"\t";
  protected final String TEXT_3 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_4 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_5 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_6 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_7 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_8 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_9 = "\"></script>\t\t" + NL + "\t<!-- Ace -->" + NL + "\t<script src=\"";
  protected final String TEXT_10 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_11 = "\"></script>" + NL + "\t<!-- Ace & Tern -->" + NL + "\t<!--<script src=\"";
  protected final String TEXT_12 = "\"></script>-->" + NL + "</head>" + NL + "<body>" + NL + "\t<pre id=\"editor\">";
  protected final String TEXT_13 = "</pre>" + NL + "\t<script>" + NL + "\t    var langTools = ace.require(\"ace/ext/language_tools\");" + NL + "\t    var editor = ace.edit(\"editor\");    " + NL + "\t    editor.session.setMode(\"ace/mode/javascript\");" + NL + "\t    // enable autocompletion and snippets" + NL + "\t    editor.setOptions({" + NL + "\t        enableBasicAutocompletion: true," + NL + "\t        enableSnippets: false" + NL + "\t    });" + NL + "\t        " + NL + "\t</script>\t" + NL + "</body>" + NL + "</html>";
  protected final String TEXT_14 = NL;

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
    stringBuffer.append(options.resolve("build/src-min/ace.js") );
    stringBuffer.append(TEXT_10);
    stringBuffer.append(options.resolve("build/src-min/ext-language_tools.js") );
    stringBuffer.append(TEXT_11);
    stringBuffer.append(options.resolve("addon/tern/tern.js") );
    stringBuffer.append(TEXT_12);
    stringBuffer.append( options.getEditorContent() );
    stringBuffer.append(TEXT_13);
    stringBuffer.append(TEXT_14);
    return stringBuffer.toString();
  }
}