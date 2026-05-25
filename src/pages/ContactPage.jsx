import {
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiShield,
  FiZap,
  FiSliders,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSeo } from "../components/common/useSeo";
import contactHeroImage from "../assets/contact hero.png";

export function ContactPage() {
  useSeo(
    "Contact",
    "Contact Code furnace in Narok, Kenya for project consultations and digital transformation.",
  );

  return (
    <section className="section contact-page" id="contact-info">
      <div className="contact-hero card reveal">
        <div className="contact-hero-copy">
          <p className="eyebrow">Let&apos;s Connect</p>
          <h1>
            We&apos;d Love to Hear <span className="gradient-word">From You!</span>
          </h1>
          <p className="lead">
            Have a project in mind or want to explore how we can help your
            business grow? Let&apos;s start a conversation.
          </p>
        </div>

        <div className="contact-hero-art" aria-hidden="true">
          <img
            src={contactHeroImage}
            alt=""
            className="contact-hero-image"
            loading="eager"
            decoding="async"
          />
          <div className="contact-hero-overlay" />
          <div className="grid-sheen" />
        </div>

        <div className="contact-highlights" role="list">
          <article className="contact-highlight" role="listitem">
            <span className="contact-icon-wrap">
              <FiZap />
            </span>
            <div>
              <h3>Quick Response</h3>
              <p>Reply within 24 hours.</p>
            </div>
          </article>
          <article className="contact-highlight" role="listitem">
            <span className="contact-icon-wrap">
              <FiShield />
            </span>
            <div>
              <h3>Trusted Partner</h3>
              <p>Focused on quality and reliability.</p>
            </div>
          </article>
          <article className="contact-highlight" role="listitem">
            <span className="contact-icon-wrap">
              <FiSliders />
            </span>
            <div>
              <h3>Tailored Solutions</h3>
              <p>Built for your business goals.</p>
            </div>
          </article>
        </div>
      </div>

      <div className="contact-main-grid">
        <div className="contact-form-panel card section-tight">
          <h2>Send Us a Message</h2>
          <p>Fill out the form and our team will get back shortly.</p>

          <form className="contact-form" id="contact-form">
            <div className="contact-form-row">
              <input placeholder="Your Name *" />
              <input placeholder="Your Email *" type="email" />
            </div>
            <div className="contact-form-row">
              <input placeholder="Phone Number" />
              <input placeholder="Company Name" />
            </div>
            <input placeholder="Subject *" />
            <textarea rows="6" placeholder="How can we help you? *" />
            <div className="row gap-sm wrap">
              <button className="btn btn-primary" type="button">
                Send Inquiry <FiSend />
              </button>
              <a
                className="btn btn-secondary"
                href="https://wa.me/254143369440"
                target="_blank"
                rel="noreferrer"
              >
                <FiMessageCircle /> WhatsApp Us
              </a>
            </div>
          </form>
        </div>

        <aside className="contact-info-panel card" aria-label="Contact details">
          <h2>Get in Touch</h2>
          <p>Reach out through any channel. We are ready to help.</p>

          <a
            className="contact-info-item"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=furnacecode@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon-wrap">
              <FiMail />
            </span>
            <div>
              <h3>Email Us</h3>
              <p>furnacecode@gmail.com</p>
            </div>
          </a>

          <a className="contact-info-item" href="tel:+254143369440">
            <span className="contact-icon-wrap">
              <FiPhone />
            </span>
            <div>
              <h3>Call Us</h3>
              <p>+254 143 369440</p>
            </div>
          </a>

          <a
            className="contact-info-item"
            href="https://www.google.com/maps/search/-1.099076,+35.861809"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon-wrap">
              <FiMapPin />
            </span>
            <div>
              <h3>Visit Us</h3>
              <p>Narok, Kenya</p>
            </div>
          </a>

          <div className="contact-info-item">
            <span className="contact-icon-wrap">
              <FiClock />
            </span>
            <div>
              <h3>Business Hours</h3>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="card map-wrap contact-map-wrap">
        <div>
          <h2>Our Location</h2>
          <p>We are based in Narok, Kenya. Find us easily and plan your visit.</p>
          <a
            className="btn btn-secondary"
            href="https://www.google.com/maps/search/-1.099076,+35.861809"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions <FiArrowRight />
          </a>
        </div>
        <iframe
          title="CODE furnace Location"
          src="https://maps.google.com/maps?q=-1.099076,35.861809&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="contact-bottom-cta card">
        <h2>Ready to Build Something Great?</h2>
        <p>Let&apos;s turn your ideas into powerful digital solutions.</p>
        <Link className="btn btn-primary" to="/quote-booking">
          Let&apos;s Talk <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
