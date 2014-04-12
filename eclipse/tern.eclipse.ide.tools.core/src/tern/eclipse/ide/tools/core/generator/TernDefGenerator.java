package tern.eclipse.ide.tools.core.generator;

public class TernDefGenerator implements tern.eclipse.ide.tools.core.generator.IGenerator
 {
  protected static String nl;
  public static synchronized TernDefGenerator create(String lineSeparator)
  {
    nl = lineSeparator;
    TernDefGenerator result = new TernDefGenerator();
    nl = null;
    return result;
  }

  public final String NL = nl == null ? (System.getProperties().getProperty("line.separator")) : nl;
  protected final String TEXT_1 = "{" + NL + "  \"!name\": \"";
  protected final String TEXT_2 = "\"," + NL + "  \"!define\": {" + NL + "    \"point\": {" + NL + "      \"x\": \"number\"," + NL + "      \"y\": \"number\"" + NL + "    }" + NL + "  }," + NL + "  \"MyConstructor\": {" + NL + "    \"!type\": \"fn(arg: string)\"," + NL + "    \"staticFunction\": \"fn() -> bool\"," + NL + "    \"prototype\": {" + NL + "      \"property\": \"[number]\"," + NL + "      \"clone\": \"fn() -> +MyConstructor\"," + NL + "      \"getPoint\": \"fn(i: number) -> point\"" + NL + "    }" + NL + "  }," + NL + "  \"someOtherGlobal\": \"string\"" + NL + "}";

/* (non-javadoc)
    * @see IGenerator#generate(Object)
    */
public String generate(Object argument)
  {
    final StringBuffer stringBuffer = new StringBuffer();
     TernDefOptions options = (TernDefOptions)argument; 
    stringBuffer.append(TEXT_1);
    stringBuffer.append( options.getDefName() );
    stringBuffer.append(TEXT_2);
    return stringBuffer.toString();
  }
}