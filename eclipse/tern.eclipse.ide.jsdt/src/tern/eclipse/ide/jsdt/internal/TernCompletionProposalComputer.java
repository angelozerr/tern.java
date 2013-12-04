package tern.eclipse.ide.jsdt.internal;

import java.util.Arrays;
import java.util.List;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.ui.texteditor.HippieProposalProcessor;
import org.eclipse.wst.jsdt.ui.text.java.ContentAssistInvocationContext;
import org.eclipse.wst.jsdt.ui.text.java.IJavaCompletionProposalComputer;

public class TernCompletionProposalComputer implements IJavaCompletionProposalComputer {

	public TernCompletionProposalComputer() {
		System.err.println("ded");
	}
	
	
	/*@Override
	public List computeCompletionProposals(ContentAssistInvocationContext context,
			IProgressMonitor monitor) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List computeContextInformation(ContentAssistInvocationContext context,
			IProgressMonitor monitor) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getErrorMessage() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void sessionEnded() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void sessionStarted() {
		// TODO Auto-generated method stub
		
	}
*/
	private final HippieProposalProcessor fProcessor = new HippieProposalProcessor();

	public List computeCompletionProposals(
			ContentAssistInvocationContext context, IProgressMonitor monitor) {
		return Arrays.asList(this.fProcessor.computeCompletionProposals(
				context.getViewer(), context.getInvocationOffset()));
	}

	public List computeContextInformation(
			ContentAssistInvocationContext context, IProgressMonitor monitor) {
		return Arrays.asList(this.fProcessor.computeContextInformation(
				context.getViewer(), context.getInvocationOffset()));
	}

	public String getErrorMessage() {
		return this.fProcessor.getErrorMessage();
	}

	public void sessionStarted() {
	}

	public void sessionEnded() {
	}
}
