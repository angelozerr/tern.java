/**
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the Eclipse Public License v1.0
* which accompanies this distribution, and is available at
* http://www.eclipse.org/legal/epl-v10.html
*
* Contributors:
*     IBM Corporation - initial API and implementation
*     Jens Lukowski/Innoopract - initial renaming/restructuring
*     
*******************************************************************************/
package tern.eclipse.ide.internal.ui.validation;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.eclipse.core.runtime.Platform;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.DocumentEvent;
import org.eclipse.jface.text.DocumentRewriteSessionEvent;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IDocumentExtension3;
import org.eclipse.jface.text.IDocumentExtension4;
import org.eclipse.jface.text.IDocumentListener;
import org.eclipse.jface.text.IDocumentRewriteSessionListener;
import org.eclipse.jface.text.ITextInputListener;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.ITypedRegion;
import org.eclipse.jface.text.TextUtilities;
import org.eclipse.jface.text.reconciler.DirtyRegion;
import org.eclipse.jface.text.reconciler.IReconciler;
import org.eclipse.jface.text.reconciler.IReconcilerExtension;
import org.eclipse.jface.text.reconciler.IReconcilingStrategy;

/**
* This Job holds a queue of updates from the editor (DirtyRegions) to
* process. When a new request comes in, the current run is canceled, the new
* request is added to the queue, then the job is re-scheduled.
* 
* @author pavery
*/
public class DirtyRegionProcessor implements IReconciler, IReconcilerExtension/*, IConfigurableReconciler*/ {
	class DocumentListener implements IDocumentListener {
		public void documentAboutToBeChanged(DocumentEvent event) {
			/*
			 * if in rewrite session and already going to reprocess entire
			 * document after rewrite session, do nothing
			 */
			if (isInRewriteSession() && fReprocessAfterRewrite)
				return;
			// save partition type (to see if it changes in documentChanged())
			fLastPartitions = getPartitionRegions(event.getOffset(), event.getLength());
		}

		public void documentChanged(DocumentEvent event) {
			/*
			 * if in rewrite session and already going to reprocess entire
			 * document after rewrite session, do nothing
			 */
			if (isInRewriteSession() && fReprocessAfterRewrite)
				return;

			if (partitionsChanged(event)) {
				// pa_TODO
				// this is a simple way to ensure old
				// annotations are removed when partition changes

				// it might be a performance hit though
				setEntireDocumentDirty(getDocument());
			}
			else {
				/*
				 * bug 384776 - no wrong text may be included 
				 */
				DirtyRegion dr = null;
				if (event.getLength() == 0) {
					/*
					 * It's an insert-- we use text length though so that the
					 * new region gets validated...
					 */
					dr = createDirtyRegion(event.getOffset(), event.getText().length(), DirtyRegion.INSERT);
				}
				else {
					if ("".equals(event.getText())) { //$NON-NLS-1$
						// it's a delete-- we use text length=0
						dr = createDirtyRegion(event.getOffset(), 0, DirtyRegion.REMOVE);
					}
					else {
						// it's a replace-- we use text length though so that the new region gets validated...
						dr = createDirtyRegion(event.getOffset(), event.getText().length(), DirtyRegion.INSERT);
					}
				}
				if (isInRewriteSession()) {
					/*
					 * while in rewrite session, found a dirty region, so flag
					 * that entire document needs to be reprocesed after
					 * rewrite session
					 */
					if (!fReprocessAfterRewrite && (dr != null)) {
						fReprocessAfterRewrite = true;
					}
				}
				else {
					processDirtyRegion(dr);
				}
			}
		}

		/**
		 * Checks previous partitions from the span of the event w/ the new
		 * partitions from the span of the event. If partitions changed,
		 * return true, else return false
		 * 
		 * @param event
		 * @return
		 */
		private boolean partitionsChanged(DocumentEvent event) {
			boolean changed = false;
			int length = event.getText().length(); // In any case we want partitions of the new text (even if its length is zero)

			ITypedRegion[] newPartitions = getPartitionRegions(event.getOffset(), length);
			if (fLastPartitions != null) {
				if (fLastPartitions.length != newPartitions.length) {
					changed = true;
				}
				else {
					for (int i = 0; i < fLastPartitions.length; i++) {
						if (!fLastPartitions[i].getType().equals(newPartitions[i].getType())) {
							changed = true;
							break;
						}
					}
				}
			}
			return changed;
		}
	}

	/**
	 * Reconciles the entire document when the document in the viewer is
	 * changed. This happens when the document is initially opened, as well as
	 * after a save-as.
	 * 
	 * Also see processPostModelEvent(...) for similar behavior when document
	 * for the model is changed.
	 */
	class TextInputListener implements ITextInputListener {
		public void inputDocumentAboutToBeChanged(IDocument oldInput, IDocument newInput) {
			// do nothing
		}

		public void inputDocumentChanged(IDocument oldInput, IDocument newInput) {
			handleInputDocumentChanged(oldInput, newInput);

			startReconciling();
		}
	}

	class DocumentRewriteSessionListener implements IDocumentRewriteSessionListener {
		long time0 = 0;

		public void documentRewriteSessionChanged(DocumentRewriteSessionEvent event) {
			boolean oldValue = fInRewriteSession;
			fInRewriteSession = event != null && event.getChangeType().equals(DocumentRewriteSessionEvent.SESSION_START);

			if (event.getChangeType().equals(DocumentRewriteSessionEvent.SESSION_START)) {
				if (DEBUG) {
					time0 = System.currentTimeMillis();
				}
				// bug 235446 - source validation annotations lost after rewrite session
				if (!getDirtyRegionQueue().isEmpty()) {
					flushDirtyRegionQueue();
					fReprocessAfterRewrite = true;	
				} else {
					fReprocessAfterRewrite = false;
				}
			}
			else if (event.getChangeType().equals(DocumentRewriteSessionEvent.SESSION_STOP)) {
				if (fInRewriteSession ^ oldValue && fDocument != null) {
					if (DEBUG) {
						//Logger.log(Logger.INFO, "Rewrite session lasted " + (System.currentTimeMillis() - time0) + "ms");
						time0 = System.currentTimeMillis();
					}
					if (fReprocessAfterRewrite) {
						DirtyRegion entireDocument = createDirtyRegion(0, fDocument.getLength(), DirtyRegion.INSERT);
						processDirtyRegion(entireDocument);
					}
					if (DEBUG) {
						//Logger.log(Logger.INFO, "Full document reprocess took " + (System.currentTimeMillis() - time0) + "ms");
					}
					fReprocessAfterRewrite = false;
				}
			}
		}
	}

	/** debug flag */
	protected static final boolean DEBUG;
	private static final long UPDATE_DELAY = 500;

	static {
		String value = Platform.getDebugOption("org.eclipse.wst.sse.ui/debug/reconcilerjob"); //$NON-NLS-1$
		DEBUG = value != null && value.equalsIgnoreCase("true"); //$NON-NLS-1$
	}

	private long fDelay;


	/** local queue of dirty regions (created here) to be reconciled */
	private List fDirtyRegionQueue = Collections.synchronizedList(new ArrayList());

	/** document that this reconciler works on */
	private IDocument fDocument = null;

	private IDocumentListener fDocumentListener = new DocumentListener();
	private IDocumentRewriteSessionListener fDocumentRewriteSessionListener = new DocumentRewriteSessionListener();

	/**
	 * set true after first install to prevent duplicate work done in the
	 * install method (since install gets called multiple times)
	 */
	private boolean fIsInstalled = false;

	/**
	 * so we can tell if a partition changed after the last edit
	 */
	ITypedRegion[] fLastPartitions;

	List fNonIncrementalStrategiesAlreadyProcessed = new ArrayList(1);

	/**
	 * The partitioning this reconciler uses.
	 */
	private String fPartitioning;

	Map fReconcilingStrategies = null;

	/** for initial reconcile when document is opened */
	private TextInputListener fTextInputListener = null;
	/** the text viewer */
	private ITextViewer fViewer;
	boolean fInRewriteSession = false;
	/**
	 * true if entire document needs to be reprocessed after rewrite session
	 */
	boolean fReprocessAfterRewrite = false;

	/** The job should be reset because of document changes */
	private boolean fReset = false;
	private boolean fIsCanceled = false;
	private boolean fHasReconciled = false;
	private Object LOCK = new Object();

	private BackgroundThread fThread;

	/**
	 * Creates a new StructuredRegionProcessor
	 */
	public DirtyRegionProcessor() {
		// init reconciler stuff
		setDelay(UPDATE_DELAY);
		fReconcilingStrategies = new HashMap();
	}

	/**
	 * Adds the given resource to the set of resources that need refreshing.
	 * Synchronized in order to protect the collection during add.
	 * 
	 * @param resource
	 */
	private synchronized void addRequest(DirtyRegion newDirtyRegion) {
		// NOTE: This method is called a lot so make sure it's fast
		List dirtyRegionQueue = getDirtyRegionQueue();
		synchronized (dirtyRegionQueue) {
			for (Iterator it = dirtyRegionQueue.iterator(); it.hasNext();) {
				// go through list of existing dirty regions and check if any
				// dirty regions need to be discarded
				DirtyRegion currentExisting = (DirtyRegion) it.next();
				DirtyRegion outer = getOuterRegion(currentExisting, newDirtyRegion);
				// if we already have a request which contains the new request,
				// discard the new request
				if (outer == currentExisting)
					return;
				// if new request contains any existing requests,
				// remove those
				if (outer == newDirtyRegion)
					it.remove();
			}
			dirtyRegionQueue.add(newDirtyRegion);
		}
	}

	/**
	 * Notifies subclasses that processing of multiple dirty regions has begun
	 */
	protected void beginProcessing() {
		// do nothing by default
	}

	/**
	 * @param dirtyRegion
	 * @return
	 */
	protected ITypedRegion[] computePartitioning(DirtyRegion dirtyRegion) {
		int drOffset = dirtyRegion.getOffset();
		int drLength = dirtyRegion.getLength();

		return computePartitioning(drOffset, drLength);
	}

	protected ITypedRegion[] computePartitioning(int drOffset, int drLength) {
		ITypedRegion[] tr = new ITypedRegion[0];
		IDocument doc = getDocument();
		if (doc != null){
			int docLength = doc.getLength();
	
			if (drOffset > docLength) {
				drOffset = docLength;
				drLength = 0;
			}
			else if (drOffset + drLength > docLength) {
				drLength = docLength - drOffset;
			}
	
			try {
				// dirty region may span multiple partitions
				tr = TextUtilities.computePartitioning(doc, getDocumentPartitioning(), drOffset, drLength, true);
			}
			catch (BadLocationException e) {
				String info = "dr: [" + drOffset + ":" + drLength + "] doc: [" + docLength + "] "; //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$ //$NON-NLS-4$
				//Logger.logException(info, e);
				tr = new ITypedRegion[0];
			}
		}
		return tr;
	}

	/**
	 * Used to determine if one dirty region contains the other and if so,
	 * which is the one that contains it.
	 * 
	 * @param root
	 * @param possible
	 * @return the outer dirty region if it contains the other dirty region,
	 *         null otherwise
	 */
	protected DirtyRegion getOuterRegion(DirtyRegion root, DirtyRegion possible) {
		DirtyRegion outer = null;
		if (isContained(root, possible))
			outer = root;
		else if (isContained(possible, root))
			outer = possible;
		return outer;
	}

	/**
	 * Used to determine of a "possible" dirty region can be discarded in
	 * favor of using just the "root" dirty region.
	 * 
	 * @return if the root dirty region contains possible, return true,
	 *         otherwise return false
	 */
	private boolean isContained(DirtyRegion root, DirtyRegion possible) {
		int rootStart = root.getOffset();
		int rootEnd = rootStart + root.getLength();
		int possStart = possible.getOffset();
		int possEnd = possStart + possible.getLength();
		if (rootStart <= possStart && rootEnd >= possEnd)
			return true;
		return false;
	}

	protected DirtyRegion createDirtyRegion(int offset, int length, String type) {
		DirtyRegion durty = null;
		IDocument doc = getDocument();

		if (doc != null) {
			// safety for BLE
			int docLen = doc.getLength();
			if (offset > docLen) {
				offset = docLen;
				length = 0;
			}
			else if (offset + length >= docLen)
				length = docLen - offset;
			try {
				durty = new DirtyRegion(offset, length, type, doc.get(offset, length));
			}
			catch (BadLocationException e) {
				String info = "dr: [" + offset + ":" + length + "] doc: [" + docLen + "] "; //$NON-NLS-1$ //$NON-NLS-2$ //$NON-NLS-3$ //$NON-NLS-4$
				//Logger.logException(info, e);
			}
		}
		return durty;
	}

	protected DirtyRegion createDirtyRegion(ITypedRegion tr, String type) {
		return createDirtyRegion(tr.getOffset(), tr.getLength(), type);
	}

	protected void flushDirtyRegionQueue() {
		synchronized (fDirtyRegionQueue) {
			fDirtyRegionQueue.clear();
		}
	}

	/**
	 * Notifies subclasses that processing of multiple dirty regions has
	 * ended, for now
	 */
	protected void endProcessing() {
		// do nothing by default
	}

	/**
	 * Delay between processing of DirtyRegions.
	 * 
	 * @return
	 */
	long getDelay() {
		return fDelay;
	}

	List getDirtyRegionQueue() {
		return fDirtyRegionQueue;
	}

	/**
	 * The IDocument on which this reconciler operates
	 * 
	 * @return
	 */
	protected IDocument getDocument() {
		return fDocument;
	}

	public String getDocumentPartitioning() {
		if (fPartitioning == null)
			return IDocumentExtension3.DEFAULT_PARTITIONING;
		return fPartitioning;
	}

	protected String[] getPartitions(int drOffset, int drLength) {

		ITypedRegion[] regions = new ITypedRegion[0];
		int docLength = getDocument().getLength();

		if (drOffset > docLength) {
			drOffset = docLength;
			drLength = 0;
		}
		else if (drOffset + drLength > docLength) {
			drLength = docLength - drOffset;
		}

		try {
			regions = TextUtilities.computePartitioning(getDocument(), getDocumentPartitioning(), drOffset, drLength, true);
		}
		catch (BadLocationException e) {
			//Logger.logException(e);
			regions = new ITypedRegion[0];
		}
		String[] partitions = new String[regions.length];
		for (int i = 0; i < regions.length; i++)
			partitions[i] = regions[i].getType();
		return partitions;
	}

	ITypedRegion[] getPartitionRegions(int drOffset, int drLength) {
		ITypedRegion[] regions = new ITypedRegion[0];
		int docLength = getDocument().getLength();

		if (drOffset > docLength) {
			drOffset = docLength;
			drLength = 0;
		}
		else if (drOffset + drLength > docLength) {
			drLength = docLength - drOffset;
		}

		try {
			regions = TextUtilities.computePartitioning(getDocument(), getDocumentPartitioning(), drOffset, drLength, true);
		}
		catch (BadLocationException e) {
			//Logger.logException(e);
			regions = new ITypedRegion[0];
		}
		return regions;
	}
		
		
	/**
	 * Returns the reconciling strategy registered with the reconciler for the
	 * specified partition type.
	 * 
	 * @param partitionType
	 *            the partition type for which to determine the reconciling
	 *            strategy
	 * 
	 * @return the reconciling strategy registered for the given partition
	 *         type, or <code>null</code> if there is no such strategy
	 * 
	 * @see org.eclipse.jface.text.reconciler.IReconciler#getReconcilingStrategy(java.lang.String)
	 */
	public IReconcilingStrategy getReconcilingStrategy(String partitionType) {
		if (partitionType == null)
			return null;
		return (IReconcilingStrategy) fReconcilingStrategies.get(partitionType);
	}

	/**
	 * This method also synchronized because it accesses the fRequests queue
	 * 
	 * @return an array of the currently requested Nodes to refresh
	 */
	private synchronized DirtyRegion[] getRequests() {
		synchronized (fDirtyRegionQueue) {
			if (0 == fDirtyRegionQueue.size()) {
				return null;
			}
			DirtyRegion[] toRefresh = (DirtyRegion[]) fDirtyRegionQueue.toArray(new DirtyRegion[fDirtyRegionQueue.size()]);
			flushDirtyRegionQueue();
			return toRefresh;
		}
	}

	/**
	 * Returns the text viewer this reconciler is installed on.
	 * 
	 * @return the text viewer this reconciler is installed on
	 */
	protected ITextViewer getTextViewer() {
		return fViewer;
	}

	/**
	 * 
	 * @param oldInput
	 * @param newInput
	 */
	void handleInputDocumentChanged(IDocument oldInput, IDocument newInput) {
		// don't bother if reconciler not installed
		if (isInstalled()) {
			setDocument(newInput);
		}
	}

	/**
	 * @see org.eclipse.jface.text.reconciler.IReconciler#install(ITextViewer)
	 */
	public void install(ITextViewer textViewer) {
		// we might be called multiple times with the same viewe.r,
		// maybe after being uninstalled as well, so track separately
		if (!isInstalled()) {
			fViewer = textViewer;
			fTextInputListener = new TextInputListener();
			textViewer.addTextInputListener(fTextInputListener);
			setInstalled(true);
		}
		synchronized (this) {
			if (fThread == null)
				fThread = new BackgroundThread(getClass().getName());
		}
	}

	/**
	 * The viewer has been set on this Reconciler.
	 * 
	 * @return true if the viewer has been set on this Reconciler, false
	 *         otherwise.
	 */
	public boolean isInstalled() {
		return fIsInstalled;
	}

	boolean isInRewriteSession() {
		return fInRewriteSession;
	}

	/**
	 * Subclasses should implement for specific handling of dirty regions. The
	 * method is invoked for each dirty region in the Job's queue.
	 * 
	 * @param dirtyRegion
	 */
	protected void process(DirtyRegion dirtyRegion) {
		if (!isInstalled() || isInRewriteSession() || dirtyRegion == null || getDocument() == null || fIsCanceled) {
			return;
		}
		/*
		 * Break the dirty region into a sequence of partitions and find the
		 * corresponding strategy to reconcile those partitions. If a strategy
		 * implements INonIncrementalReconcilingStrategy, only call it once
		 * regardless of the number and types of partitions.
		 */
		ITypedRegion[] partitions = computePartitioning(dirtyRegion);
		for (int i = 0; i < partitions.length && !fIsCanceled; i++) {
			IReconcilingStrategy strategy = getReconcilingStrategy(partitions[i].getType());
			if (strategy != null) {
				strategy.reconcile(partitions[i]);
			}
		}
	}

	/**
	 * Invoke dirty region processing.
	 * 
	 * @param node
	 */
	public final void processDirtyRegion(DirtyRegion dr) {
		if (dr == null || !isInstalled())
			return;

		addRequest(dr);
		synchronized (LOCK) {
			fReset = true;
		}

		if (DEBUG) {
			System.out.println("added request for: [" + dr.getText() + "]"); //$NON-NLS-1$ //$NON-NLS-2$
			System.out.println("queue size is now: " + getDirtyRegionQueue().size()); //$NON-NLS-1$
		}
	}

	/**
	 * Based on {@link org.eclipse.jface.text.reconciler.AbstractReconciler.BackgroundThread}
	 *
	 */
	class BackgroundThread extends Thread {

		public BackgroundThread(String name) {
			super(name);
			setPriority(Thread.MIN_PRIORITY);
			setDaemon(true);
		}

		public void cancel() {
			synchronized (fDirtyRegionQueue) {
				fDirtyRegionQueue.notifyAll();
			}
		}

		public void run() {
			synchronized (fDirtyRegionQueue) {
				try {
					fDirtyRegionQueue.wait(getDelay());
				} catch (InterruptedException e) {}
			}

			if (fIsCanceled)
				return;

			if (!fHasReconciled) {
				initialReconcile();
				fHasReconciled = true;
			}

			while (!fIsCanceled) {
				synchronized (fDirtyRegionQueue) {
					try {
						fDirtyRegionQueue.wait(getDelay());
					} catch (InterruptedException e) {}
				}

				if (fIsCanceled)
					return;

				synchronized (LOCK) {
					if (fReset) {
						fReset = false;
						continue;
					}
				}

				boolean processed = false;
				try {
					DirtyRegion[] toRefresh = getRequests();
					if (toRefresh != null && toRefresh.length > 0) {
						processed = true;
						beginProcessing();

						for (int i = 0; i < toRefresh.length && fDocument != null; i++) {
							if (fIsCanceled)
								return;
							process(toRefresh[i]);
						}
					}
				}
				finally {
					if (processed)
						endProcessing();
				}
				
			}
		}
	}

	public void setDelay(long delay) {
		fDelay = delay;
	}

	public void setDocument(IDocument doc) {
		if (fDocument != null) {
			// unhook old document listener
			fDocument.removeDocumentListener(fDocumentListener);
			if (fDocument instanceof IDocumentExtension4) {
				((IDocumentExtension4) fDocument).removeDocumentRewriteSessionListener(fDocumentRewriteSessionListener);
			}
		}

		fDocument = doc;

		if (fDocument != null) {
			if (fDocument instanceof IDocumentExtension4) {
				((IDocumentExtension4) fDocument).addDocumentRewriteSessionListener(fDocumentRewriteSessionListener);
			}
			// hook up new document listener
			fDocument.addDocumentListener(fDocumentListener);

			setEntireDocumentDirty(doc);
		}
	}

	/**
	 * This method is called before the initial reconciling of the document. 
	 */
	protected void initialReconcile() {
	}

	/**
	 * Sets the document partitioning for this reconciler.
	 * 
	 * @param partitioning
	 *            the document partitioning for this reconciler
	 */
	public void setDocumentPartitioning(String partitioning) {
		fPartitioning = partitioning;
	}

	/**
	 * Forces reconciling of the entire document.
	 */
	protected void forceReconciling() {
		if (!fHasReconciled)
			return;

		setEntireDocumentDirty(getDocument());
	}

	/**
	 * Basically means process the entire document.
	 * 
	 * @param document
	 */
	protected void setEntireDocumentDirty(IDocument document) {

		// make the entire document dirty
		// this also happens on a "save as"
		if (document != null && isInstalled()) {

			// since we're marking the entire doc dirty
			flushDirtyRegionQueue();

			/**
			 * https://bugs.eclipse.org/bugs/show_bug.cgi?id=199053
			 * 
			 * Process the strategies for the last known-good partitions to
			 * ensure all problem annotations are cleared if needed.
			 */
			if (fLastPartitions != null && document.getLength() == 0) {
				for (int i = 0; i < fLastPartitions.length; i++) {
					IReconcilingStrategy strategy = getReconcilingStrategy(fLastPartitions[i].getType());
					if (strategy != null) {
						strategy.reconcile(fLastPartitions[i]);
					}
				}
			}
			else {
				DirtyRegion entireDocument = createDirtyRegion(0, document.getLength(), DirtyRegion.INSERT);
				processDirtyRegion(entireDocument);
			}
		}
	}

	/**
	 * @param isInstalled
	 *            The isInstalled to set.
	 */
	void setInstalled(boolean isInstalled) {
		fIsInstalled = isInstalled;
	}

	public void setReconcilingStrategy(String partitionType, IReconcilingStrategy strategy) {
		if (partitionType == null) {
			throw new IllegalArgumentException();
		}

		if (strategy == null) {
			fReconcilingStrategies.remove(partitionType);
		}
		else {
			fReconcilingStrategies.put(partitionType, strategy);
		}
	}

	/**
	 * @see org.eclipse.jface.text.reconciler.IReconciler#uninstall()
	 */
	public void uninstall() {
		if (isInstalled()) {
			// removes widget listener
			getTextViewer().removeTextInputListener(fTextInputListener);
			setInstalled(false);
			fIsCanceled = true;
			synchronized (this) {
				BackgroundThread bt = fThread;
				fThread= null;
				bt.cancel();
			}
		}
		synchronized (fDirtyRegionQueue) {
			fDirtyRegionQueue.clear();
		}
		setDocument(null);
	}

	protected synchronized void startReconciling() {
		if (fThread == null)
			return;
		if (!fThread.isAlive()) {
			try {
				fThread.start();
			} catch (IllegalThreadStateException e) { }
		}
	}
}