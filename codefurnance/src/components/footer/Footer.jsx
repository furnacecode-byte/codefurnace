export function Footer() {
  return (
    <footer className="footer">
      <div className="grid cols-4">
        <div>
          <h4>CODE FURNANCE</h4>
          <p>Premium digital solutions engineered for modern business growth and automation.</p>
          <div className="socials" aria-label="Social links">
            <a href="#" aria-label="Facebook">Fb</a>
            <a href="#" aria-label="Instagram">Ig</a>
            <a href="#" aria-label="LinkedIn">In</a>
            <a href="#" aria-label="X">X</a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p>Home</p><p>About</p><p>Services</p><p>Portfolio</p><p>Pricing</p>
        </div>
        <div>
          <h4>Services</h4>
          <p>Web Development</p><p>Software Systems</p><p>Booking Platforms</p><p>Mobile Apps</p><p>AI Automation</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Narok, Kenya</p>
          <p>info@codefurnance.com</p>
          <p>+254 700 123 456</p>
        </div>
      </div>
      <p className="copyright">© 2026 Code Furnance. All rights reserved.</p>
    </footer>
  )
}

