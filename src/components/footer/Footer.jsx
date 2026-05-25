import { Link } from "react-router-dom";
import {
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiMail,
  FiPhone,
  FiMapPin,
  FiMessageCircle,
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
            <FiMail />{" "}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=furnacecode@gmail.com" target="_blank" rel="noreferrer">furnacecode@gmail.com</a>
          </p>
          <p>
            <FiPhone /> <a href="tel:+254143369440">+254 143 369440</a>
          </p>
          <p>
            <FiMapPin />{" "}
            <a
              href="https://www.google.com/maps/search/-1.099076,+35.861809"
              target="_blank"
              rel="noreferrer"
            >
              Narok, Kenya
            </a>
          </p>
          <p>
            <FiMessageCircle />{" "}
            <a href="https://wa.me/254143369440" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </p>
          <p>
            <Link to="/quote-booking">Book Consultation</Link>
          </p>
        </div>
      </div>

      <div className="copyright-row">
        <p>Â© 2026 Code furnace. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> Â·{" "}
          <Link to="/terms">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
}

