import { FiMail, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi'
import { useSeo } from '../../components/common/useSeo'

export function ContactPage() {
  useSeo('Contact', 'Contact Code Furnance in Narok, Kenya for project consultations and digital transformation.')

  return (
    <section className="section">
      <h1>Contact CODE FURNANCE</h1>
      <p>Let’s discuss your project goals and prepare a practical delivery roadmap.</p>

      <div className="grid cols-3">
        <article className="card"><h3><FiMapPin /> Location</h3><p>Narok, Kenya</p></article>
        <article className="card"><h3><FiMail /> Email</h3><p>info@codefurnance.com</p></article>
        <article className="card"><h3><FiPhone /> Phone</h3><p>+254 700 123 456</p></article>
      </div>

      <div className="section section-tight">
        <form className="contact-form card">
          <input placeholder="Full name" />
          <input placeholder="Company name" />
          <input placeholder="Email address" type="email" />
          <input placeholder="Phone / WhatsApp" />
          <textarea rows="5" placeholder="Project details" />
          <div className="row gap-sm">
            <button className="btn btn-primary" type="button">Send Inquiry</button>
            <button className="btn btn-secondary" type="button"><FiMessageCircle /> WhatsApp Us</button>
          </div>
        </form>
      </div>

      <div className="card map-wrap">
        <h3>Find Us</h3>
        <iframe title="Narok map" src="https://maps.google.com/maps?q=Narok%2C%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  )
}


