export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: "Cormorant, serif" }}
            >
              Balanced State Wellness
            </h3>
            <p
              className="text-primary-foreground/80 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Balancing our physical, mental and emotional state to enhance
              personal and professional growth.
            </p>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontFamily: "Cormorant, serif" }}>
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Classes
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#locations"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#consulting"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Consulting
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4" style={{ fontFamily: "Cormorant, serif" }}>
              Connect With Us
            </h4>
            <p
              className="text-sm text-primary-foreground/80 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Join the Sedalia Yoga & Wellness Community Facebook Group
            </p>
            <a
              href="mailto:drnpm.freeman@gmail.com"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              drnpm.freeman@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p style={{ fontFamily: "Inter, sans-serif" }}>
            &copy; 2026 Balanced State Wellness LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
