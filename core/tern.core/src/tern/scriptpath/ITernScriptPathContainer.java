package tern.scriptpath;

public interface ITernScriptPathContainer extends ITernScriptPath {

	String[] getInclusionPatterns();

	String[] getExclusionPatterns();
}
