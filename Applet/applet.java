// import java.applet.*;
// import java.awt.*;
//  class MyApplet extends Applet {
//  // Initialization method
//  public void init() // Initialization code goes here
//  {
//  System.out.println("Initialization");
//  }
//  // Starting method
//  public void start() // Code to start or resume applet execution
//  {
//  System.out.println("Starting");
//  }
//  // Painting method
//  public void paint(Graphics g) // Code to draw graphics on the
// applet window
//  {
//  g.drawString("Welcome to MyApplet", 50, 50);
//  System.out.println("Painting");
//  }
//  // Stopping method
//  public void stop() // Code to pause or stop applet execution
//  {
//  System.out.println("Stopping");
//  }
//  // Destruction method
//  public void destroy() // Code to clean up and release resources
//  {
//  System.out.println("Destroying");
//  }
// }



import java.applet.*;
import java.awt.*;
 class MyApplet extends Applet {
    // Initialization method
    public void init() {
        System.out.println("Initialization");
    }

    // Starting method
    public void start() {
        System.out.println("Starting");
    }

    // Painting method
    public void paint(Graphics g) {
        g.drawString("Welcome to MyApplet", 50, 50);
        System.out.println("Painting");
    }

    // Stopping method
    public void stop() {
        System.out.println("Stopping");
    }

    // Destruction method
    public void destroy() {
        System.out.println("Destroying");
    }
}
