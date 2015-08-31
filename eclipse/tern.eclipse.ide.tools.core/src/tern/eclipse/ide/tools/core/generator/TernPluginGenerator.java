package tern.eclipse.ide.tools.core.generator;

public class TernPluginGenerator implements tern.eclipse.ide.tools.core.generator.IGenerator
 {
  protected static String nl;
  public static synchronized TernPluginGenerator create(String lineSeparator)
  {
    nl = lineSeparator;
    TernPluginGenerator result = new TernPluginGenerator();
    nl = null;
    return result;
  }

  public final String NL = nl == null ? (System.getProperties().getProperty("line.separator")) : nl;
  protected final String TEXT_1 = "(function(mod) {" + NL + "  if (typeof exports == \"object\" && typeof module == \"object\") { // CommonJS" + NL + "    return mod(require.main.require(\"../lib/infer\"), require.main.require(\"../lib/tern\"));" + NL + "  }" + NL + "  if (typeof define == \"function\" && define.amd) // AMD" + NL + "    return define([ \"tern/lib/infer\", \"tern/lib/tern\" ], mod);" + NL + "  mod(tern, tern);" + NL + "})(function(infer, tern) {" + NL + "  \"use strict\";" + NL + "" + NL + "  tern.registerPlugin(\"";
  protected final String TEXT_2 = "\", function(server, options) {" + NL + "" + NL + "    return {" + NL + "      defs : defs" + NL + "    };" + NL + "  });" + NL + "  " + NL + "  var defs = {" + NL + "\t  \"!name\": \"";
  protected final String TEXT_3 = "\"," + NL + "\t  \"!define\": {" + NL + "\t    \"point\": {" + NL + "\t      \"x\": \"number\"," + NL + "\t      \"y\": \"number\"" + NL + "\t    }" + NL + "\t  }," + NL + "\t  \"MyConstructor\": {" + NL + "\t    \"!type\": \"fn(arg: string)\"," + NL + "\t    \"staticFunction\": \"fn() -> bool\"," + NL + "\t    \"prototype\": {" + NL + "\t      \"property\": \"[number]\"," + NL + "\t      \"clone\": \"fn() -> +MyConstructor\"," + NL + "\t      \"getPoint\": \"fn(i: number) -> point\"" + NL + "\t    }" + NL + "\t  }," + NL + "\t  \"someOtherGlobal\": \"string\"" + NL + "  }" + NL + "" + NL + "});";

/* (non-javadoc)
    * @see IGenerator#generate(Object)
    */
public String generate(Object argument)
  {
    final StringBuffer stringBuffer = new StringBuffer();
     TernPluginOptions options = (TernPluginOptions)argument; 
    stringBuffer.append(TEXT_1);
    stringBuffer.append( options.getPluginName() );
    stringBuffer.append(TEXT_2);
    stringBuffer.append( options.getDefName() );
    stringBuffer.append(TEXT_3);
    return stringBuffer.toString();
  }
}