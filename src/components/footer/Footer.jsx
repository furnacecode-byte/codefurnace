import { Link } from "react-router-dom";
import {
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>CODE furnace</h4>
          <p>
            We are a software development company building premium digital
            solutions that help businesses scale.
          </p>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="#" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="#" aria-label="GitHub">
              <FiGithub />
            </a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/services">Services</Link>
          </p>
          <p>
            <Link to="/projects">Projects</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <p>
            <Link to="/services/web-development">Web Development</Link>
          </p>
          <p>
            <Link to="/services/mobile-apps">Mobile Development</Link>
          </p>
          <p>
            <Link to="/services/software-development">SaaS/ERP Platforms</Link>
          </p>
          <p>
            <Link to="/services/ai-automation">AI Automation</Link>
          </p>
          <p>
            <Link to="/quote-booking">Cloud & DevOps</Link>
          </p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>
            <FiMail /> info@codefurnace.com
          </p>
          <p>
            <FiPhone /> +254 700 123 456
          </p>
          <p>
            <FiMapPin /> Narok, Kenya
          </p>
          <p>
            <Link to="/quote-booking">Book Consultation</Link>
          </p>
        </div>
      </div>

      <div className="copyright-row">
        <p>© 2026 Code furnace. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> ·{" "}
          <Link to="/terms">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
}
