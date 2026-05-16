import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <div className="grid cols-4">
        <div>
          <h4>CODE FURNANCE</h4>
          <p>We Build Digital Excellence.</p>
          <p>Narok, Kenya</p>
          <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/services">Services</Link></p>
          <p><Link to="/portfolio">Portfolio</Link></p>
          <p><Link to="/careers">Careers</Link></p>
        </div>
        <div>
          <h4>Services</h4>
          <p><Link to="/services/web-development">Web Development</Link></p>
          <p><Link to="/services/software-development">Software Development</Link></p>
          <p><Link to="/services/booking-systems">Booking Systems</Link></p>
          <p><Link to="/services/mobile-apps">Mobile Apps</Link></p>
          <p><Link to="/services/ai-automation">AI Automation</Link></p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>info@codefurnance.com</p>
          <p>+254 700 123 456</p>
          <p><Link to="/quote-booking">Book Consultation</Link></p>
          <p><Link to="/privacy-policy">Privacy Policy</Link> • <Link to="/terms">Terms</Link></p>
        </div>
      </div>
      <p className="copyright">© 2026 Code Furnance. All rights reserved.</p>
    </footer>
  )
}

