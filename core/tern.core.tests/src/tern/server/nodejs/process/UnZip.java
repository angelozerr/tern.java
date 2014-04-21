package tern.server.nodejs.process;

import java.io.*;
import java.util.*;
import java.util.zip.*;


public class UnZip {

  public static final void copyInputStream(InputStream in, OutputStream out)
  throws IOException
  {
    byte[] buffer = new byte[1024];
    int len;

    while((len = in.read(buffer)) >= 0)
      out.write(buffer, 0, len);

    in.close();
    out.close();
  }

  public static void unZipIt(File file) {
    

    

    try {
    	ZipFile zipFile = new ZipFile(file);

      Enumeration entries = zipFile.entries();

      while(entries.hasMoreElements()) {
        ZipEntry entry = (ZipEntry)entries.nextElement();

        if(entry.isDirectory()) {
          // Assume directories are stored parents first then children.
          System.err.println("Extracting directory: " + entry.getName());
          // This is not robust, just for demonstration purposes.
          (new File(entry.getName())).mkdir();
          continue;
        }

        System.err.println("Extracting file: " + entry.getName());
        copyInputStream(zipFile.getInputStream(entry),
           new BufferedOutputStream(new FileOutputStream(entry.getName())));
      }

      zipFile.close();
    } catch (IOException ioe) {
      System.err.println("Unhandled exception:");
      ioe.printStackTrace();
      return;
    }
  }
  
  /**
   * Extract zip file to destination folder.
   * 
   * @param file
   *            zip file to extract
   * @param destination
   *            destinatin folder
   */
  public static void extract(File file, File destination) throws IOException {
    ZipInputStream in = null;
    OutputStream out = null;
    try {
      // Open the ZIP file
      in = new ZipInputStream(new FileInputStream(file));

      // Get the first entry
      ZipEntry entry = null;

      while ((entry = in.getNextEntry()) != null) {
        String outFilename = entry.getName();

        // Open the output file
        File extracted = new File(destination,
              outFilename);
		if (entry.isDirectory()) {
          extracted.mkdirs();
        } else {
          out = new FileOutputStream(extracted);

          // Transfer bytes from the ZIP file to the output file
          byte[] buf = new byte[1024];
          int len;

          while ((len = in.read(buf)) > 0) {
            out.write(buf, 0, len);
          }

          // Close the stream
          out.close();
          if(extracted.getParent().contains("/bin")){
        	  extracted.setExecutable(true);
          }
        }
      }
    } finally {
      // Close the stream
      if (in != null) {
        in.close();
      }
      if (out != null) {
        out.close();
      }
    }
  }


}

