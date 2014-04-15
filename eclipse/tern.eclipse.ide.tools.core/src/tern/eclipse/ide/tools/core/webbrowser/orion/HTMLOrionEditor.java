package tern.eclipse.ide.tools.core.webbrowser.orion;

public class HTMLOrionEditor implements tern.eclipse.ide.tools.core.generator.IGenerator
 {
  protected static String nl;
  public static synchronized HTMLOrionEditor create(String lineSeparator)
  {
    nl = lineSeparator;
    HTMLOrionEditor result = new HTMLOrionEditor();
    nl = null;
    return result;
  }

  public final String NL = nl == null ? (System.getProperties().getProperty("line.separator")) : nl;
  protected final String TEXT_1 = "<!DOCTYPE html>" + NL + "<html>" + NL + "<head>" + NL + "\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />" + NL + "\t<title>Tern - Orion Editor</title>" + NL + "\t<style type=\"text/css\" media=\"screen\">\t    " + NL + "\t\t#editor {" + NL + "\t\t\t//border: 1px solid teal;" + NL + "\t\t\tposition: absolute;" + NL + "\t\t\ttop: 0px;" + NL + "\t\t\tleft: 0px;" + NL + "\t\t\tbottom: 0px;" + NL + "\t\t\tright: 0px;" + NL + "\t\t\t//margin: 20px;" + NL + "\t\t\tmargin: 0px;" + NL + "\t\t}" + NL + "\t\t" + NL + "\t\tpre {" + NL + "\t\t\tmargin: 0px;" + NL + "\t\t}" + NL + "\t</style>  \t" + NL + "\t<!-- Tern JS -->" + NL + "\t<script src=\"";
  protected final String TEXT_2 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_3 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_4 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_5 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_6 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_7 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_8 = "\"></script>" + NL + "\t<script src=\"";
  protected final String TEXT_9 = "\"></script>\t\t" + NL + "\t<!-- Orion -->" + NL + "\t<link rel=\"stylesheet\" type=\"text/css\" href=\"";
  protected final String TEXT_10 = "\"/>" + NL + "\t<script src=\"";
  protected final String TEXT_11 = "\"></script>" + NL + "\t<!-- Orion & Tern -->" + NL + "" + NL + "</head>" + NL + "<body>" + NL + "\t<pre id=\"editor\">";
  protected final String TEXT_12 = "</pre>" + NL + "\t<script>" + NL + "\t    require([\"orion/editor/edit\"], function(edit) {" + NL + "\t\tvar editor = edit({" + NL + "\t\t\tlang: \"js\"" + NL + "\t\t\t});" + NL + "\t\t});\t        " + NL + "\t</script>\t" + NL + "</body>" + NL + "</html>";
  protected final String TEXT_13 = NL;

/* (non-javadoc)
    * @see IGenerator#generate(Object)
    */
public String generate(Object argument)
  {
    final StringBuffer stringBuffer = new StringBuffer();
     OrionOptions options = (OrionOptions)argument; 
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
    stringBuffer.append(options.resolve("built-editor.css") );
    stringBuffer.append(TEXT_10);
    stringBuffer.append(options.resolve("built-editor.min.js") );
    stringBuffer.append(TEXT_11);
    stringBuffer.append( options.getEditorContent() );
    stringBuffer.append(TEXT_12);
    stringBuffer.append(TEXT_13);
    return stringBuffer.toString();
  }
}