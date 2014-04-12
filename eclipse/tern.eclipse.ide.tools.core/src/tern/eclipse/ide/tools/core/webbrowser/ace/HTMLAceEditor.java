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
  protected final String TEXT_1 = "<!DOCTYPE html>" + NL + "<html>" + NL + "<head>" + NL + "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />" + NL + "<title>Tern - ACE Editor</title>" + NL + "</head>" + NL + "<body>" + NL + "\t<textarea id=\"code\" name=\"code\">";
  protected final String TEXT_2 = "</textarea>" + NL + "</body>" + NL + "</html>";
  protected final String TEXT_3 = NL;

/* (non-javadoc)
    * @see IGenerator#generate(Object)
    */
public String generate(Object argument)
  {
    final StringBuffer stringBuffer = new StringBuffer();
     AceOptions options = (AceOptions)argument; 
    stringBuffer.append(TEXT_1);
    stringBuffer.append( options.getEditorContent() );
    stringBuffer.append(TEXT_2);
    stringBuffer.append(TEXT_3);
    return stringBuffer.toString();
  }
}