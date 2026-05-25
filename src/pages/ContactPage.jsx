import { FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";
import { useSeo } from "../components/common/useSeo";

export function ContactPage() {
  useSeo(
    "Contact",
    "Contact Code furnace in Narok, Kenya for project consultations and digital transformation.",
  );

  return (
    <section className="section" id="contact-info">
      <h1>Contact CODE furnace</h1>
      <p>
        Let’s discuss your project goals and prepare a practical delivery
        roadmap.
      </p>

      <div className="grid cols-3">
        <a
          className="card"
          href="https://www.google.com/maps/search/-1.099076,+35.861809"
          target="_blank"
          rel="noreferrer"
        >
          <h3>
            <FiMapPin /> Location
          </h3>
          <p>Narok, Kenya</p>
        </a>
        <a className="card" href="https://mail.google.com/mail/?view=cm&fs=1&to=furnacecode@gmail.com" target="_blank" rel="noreferrer">
          <h3>
            <FiMail /> Email
          </h3>
          <p>furnacecode@gmail.com</p>
        </a>
        <a className="card" href="tel:+254143369440">
          <h3>
            <FiPhone /> Phone
          </h3>
          <p>+254 143 369440</p>
        </a>
      </div>

      <div className="section section-tight">
        <form className="contact-form card" id="contact-form">
          <input placeholder="Full name" />
          <input placeholder="Company name" />
          <input placeholder="Email address" type="email" />
          <input placeholder="Phone / WhatsApp" />
          <textarea rows="5" placeholder="Project details" />
          <div className="row gap-sm">
            <button className="btn btn-primary" type="button">
              Send Inquiry
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

      <div className="card map-wrap">
        <h3>Find Us</h3>
        <iframe
          title="CODE furnace Location"
          src="https://maps.google.com/maps?q=-1.099076,35.861809&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

